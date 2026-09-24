<script lang="ts">
  // Reusable horizontal carousel. Each direct child of the default slot becomes one slide.
  // Desktop/tablet show `columns`/`tabletColumns` slides; mobile shows one slide with a peek of the next.
  // Arrows hide themselves at the start/end of the track, and dots show position.
  import { onMount } from 'svelte';

  export let label = 'Carousel';
  export let columns = 3;
  export let tabletColumns = 2;
  export let accent = 'var(--arcade-teal)';

  let track: HTMLDivElement;
  let prevBtn: HTMLButtonElement;
  let nextBtn: HTMLButtonElement;
  let atStart = true;
  let atEnd = true;
  let positions = 1;
  let active = 0;
  let frame = 0;

  function step(): number {
    const first = track.firstElementChild as HTMLElement | null;
    if (!first) return track.clientWidth;
    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return first.offsetWidth + gap;
  }

  function measure() {
    frame = 0;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    const size = step();
    atStart = track.scrollLeft <= 2;
    atEnd = track.scrollLeft >= max - 2;
    positions = max > 2 ? Math.round(max / size) + 1 : 1;
    active = atEnd ? positions - 1 : Math.min(positions - 1, Math.round(track.scrollLeft / size));

    // Don't strand keyboard focus on a button that just hid itself
    if (atStart && document.activeElement === prevBtn && !atEnd) nextBtn?.focus();
    if (atEnd && document.activeElement === nextBtn && !atStart) prevBtn?.focus();
  }

  function scheduleMeasure() {
    if (!frame) frame = requestAnimationFrame(measure);
  }

  function scrollByCard(direction: 1 | -1) {
    track.scrollBy({ left: direction * step(), behavior: 'smooth' });
  }

  function goTo(index: number) {
    track.scrollTo({ left: index * step(), behavior: 'smooth' });
  }

  onMount(() => {
    measure();
    const ro = new ResizeObserver(scheduleMeasure);
    ro.observe(track);
    return () => {
      ro.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  });
</script>

<div
  class="carousel"
  role="region"
  aria-roledescription="carousel"
  aria-label={label}
  style="--carousel-cols: {columns}; --carousel-cols-tablet: {tabletColumns}; --carousel-accent: {accent};"
>
  <div class="carousel-track" bind:this={track} on:scroll={scheduleMeasure}>
    <slot />
  </div>

  <div class="carousel-controls">
    <button
      class="carousel-arrow prev"
      class:is-hidden={atStart}
      disabled={atStart}
      bind:this={prevBtn}
      on:click={() => scrollByCard(-1)}
      aria-label="Previous"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5 8 12l7 7" /></svg>
    </button>

    {#if positions > 1}
      <div class="carousel-dots">
        {#each Array(positions) as _, i}
          <button
            class="carousel-dot"
            class:is-active={i === active}
            on:click={() => goTo(i)}
            aria-label="Go to position {i + 1} of {positions}"
            aria-current={i === active ? 'true' : undefined}
          ></button>
        {/each}
      </div>
    {/if}

    <button
      class="carousel-arrow next"
      class:is-hidden={atEnd}
      disabled={atEnd}
      bind:this={nextBtn}
      on:click={() => scrollByCard(1)}
      aria-label="Next"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
    </button>
  </div>
</div>

<style>
  .carousel {
    --carousel-gap: 24px;
    --carousel-arrow-size: 56px;
    --carousel-controls-h: 46px;
    position: relative;
  }

  .carousel-track {
    display: flex;
    gap: var(--carousel-gap);
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
  }
  .carousel-track::-webkit-scrollbar {
    display: none;
  }
  .carousel-track > :global(*) {
    flex: 0 0 calc((100% - (var(--carousel-cols) - 1) * var(--carousel-gap)) / var(--carousel-cols));
    min-width: 0;
    scroll-snap-align: start;
  }

  .carousel-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    margin-top: 18px;
  }

  /* Desktop/tablet: arrows float over the track edges, half in the page gutter */
  .carousel-arrow {
    position: absolute;
    top: calc((100% - var(--carousel-controls-h)) / 2);
    /* Above hovered cards, which jump to z-index 62 via .no-scanlines (see app.css) */
    z-index: 63;
    width: var(--carousel-arrow-size);
    height: var(--carousel-arrow-size);
    display: grid;
    place-items: center;
    padding: 0;
    border-radius: 50%;
    border: 3px solid var(--carousel-accent);
    background: rgba(8, 10, 20, 0.85);
    color: var(--carousel-accent);
    box-shadow: 0 0 18px color-mix(in srgb, var(--carousel-accent) 45%, transparent);
    cursor: pointer;
    transition: opacity 0.25s ease, transform 0.25s ease, background 0.15s ease, color 0.15s ease;
  }
  .carousel-arrow.prev {
    left: -20px;
    transform: translateY(-50%);
  }
  .carousel-arrow.next {
    right: -20px;
    transform: translateY(-50%);
  }
  .carousel-arrow svg {
    width: 26px;
    height: 26px;
    fill: none;
    stroke: currentColor;
    stroke-width: 3.5;
    stroke-linecap: square;
    stroke-linejoin: miter;
  }
  .carousel-arrow.prev svg {
    animation: carousel-nudge-prev 1.6s ease-in-out infinite;
  }
  .carousel-arrow.next svg {
    animation: carousel-nudge-next 1.6s ease-in-out infinite;
  }
  /* Expanding ring "throb" */
  .carousel-arrow::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    border: 2px solid var(--carousel-accent);
    animation: carousel-pulse 1.6s ease-out infinite;
    pointer-events: none;
  }
  .carousel-arrow:hover,
  .carousel-arrow:focus-visible {
    background: var(--carousel-accent);
    color: #05060f;
  }
  .carousel-arrow:hover svg,
  .carousel-arrow:hover::after {
    animation: none;
  }
  .carousel-arrow.is-hidden {
    opacity: 0;
    pointer-events: none;
  }
  .carousel-arrow.prev.is-hidden {
    transform: translate(-12px, -50%) scale(0.8);
  }
  .carousel-arrow.next.is-hidden {
    transform: translate(12px, -50%) scale(0.8);
  }

  .carousel-dots {
    display: flex;
    gap: 10px;
  }
  .carousel-dot {
    width: 10px;
    height: 10px;
    padding: 0;
    border: 2px solid var(--arcade-muted);
    background: transparent;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, width 0.2s ease;
  }
  .carousel-dot.is-active {
    width: 22px;
    background: var(--carousel-accent);
    border-color: var(--carousel-accent);
  }

  @keyframes carousel-nudge-next {
    0%, 55%, 100% { transform: translateX(0); }
    25% { transform: translateX(5px); }
  }
  @keyframes carousel-nudge-prev {
    0%, 55%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
  }
  @keyframes carousel-pulse {
    0% { transform: scale(1); opacity: 0.7; }
    70%, 100% { transform: scale(1.35); opacity: 0; }
  }

  @media (max-width: 960px) {
    .carousel-track > :global(*) {
      flex-basis: calc((100% - (var(--carousel-cols-tablet) - 1) * var(--carousel-gap)) / var(--carousel-cols-tablet));
    }
  }

  /* Mobile: one slide with a peek of the next; arrows sit in a control row under the cards */
  @media (max-width: 640px) {
    .carousel {
      --carousel-gap: 16px;
      --carousel-arrow-size: 48px;
    }
    .carousel-track > :global(*) {
      flex-basis: 86%;
    }
    .carousel-controls {
      justify-content: space-between;
      height: auto;
      margin-top: 20px;
    }
    .carousel-arrow,
    .carousel-arrow.prev,
    .carousel-arrow.next {
      position: relative;
      top: auto;
      left: auto;
      right: auto;
      transform: none;
    }
    .carousel-arrow.is-hidden,
    .carousel-arrow.prev.is-hidden,
    .carousel-arrow.next.is-hidden {
      transform: scale(0.8);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .carousel-track {
      scroll-behavior: auto;
    }
    .carousel-arrow svg,
    .carousel-arrow::after {
      animation: none !important;
    }
  }
</style>
