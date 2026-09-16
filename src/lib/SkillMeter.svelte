<script lang="ts">
  import { onMount } from 'svelte';

  export let name: string;
  export let note: string;
  export let pct: number;

  let track: HTMLDivElement;
  let filled = false;

  onMount(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          filled = true;
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(track);
    return () => io.disconnect();
  });
</script>

<div bind:this={track}>
  <div class="skill-label font-mono">
    <span style="color: var(--arcade-text)">{name}</span>
    <span style="color: var(--arcade-muted); font-size: 12px">{note}</span>
  </div>
  <div class="skill-track">
    <div class="skill-fill" style="width: {filled ? pct : 0}%"></div>
  </div>
</div>

<style>
  .skill-label {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 16px;
    margin-bottom: 10px;
    font-size: 14px;
  }
</style>
