<script lang="ts">
  export let id: string;
  export let title: string;

  let playing = false;

  function play() {
    playing = true;
  }

  function handleClick() {
    if (!playing) play();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (!playing && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      play();
    }
  }
</script>

<div
  class="video-card retro-panel"
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={handleKeydown}
  on:mouseenter={(e) => e.currentTarget.classList.add('no-scanlines')}
  on:mouseleave={(e) => e.currentTarget.classList.remove('no-scanlines')}
  on:focus={(e) => e.currentTarget.classList.add('no-scanlines')}
  on:blur={(e) => e.currentTarget.classList.remove('no-scanlines')}
>
  <div class="video-thumb">
    {#if playing}
      <iframe
        src="https://www.youtube-nocookie.com/embed/{id}?autoplay=1&rel=0"
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    {:else}
      <img src="https://img.youtube.com/vi/{id}/hqdefault.jpg" loading="lazy" alt="Thumbnail for {title}" />
      <span class="play-button" aria-hidden="true"></span>
    {/if}
  </div>
  <h3 class="font-pixel video-title">{title}</h3>
</div>

<style>
  .video-card {
    width: 340px;
    cursor: pointer;
    transition: border-color 0.15s ease;
  }
  .video-card:hover {
    border-color: var(--arcade-teal);
  }
  .video-thumb {
    position: relative;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background-color: #0d1024;
    border-bottom: 4px solid var(--arcade-border);
  }
  .video-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.85;
  }
  .video-thumb iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  .play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 10, 20, 0.75);
    border: 3px solid var(--arcade-teal);
  }
  .play-button::before {
    content: '';
    border-style: solid;
    border-width: 10px 0 10px 16px;
    border-color: transparent transparent transparent var(--arcade-teal);
    margin-left: 4px;
  }
  .video-card:hover .play-button {
    background: var(--arcade-teal);
  }
  .video-card:hover .play-button::before {
    border-left-color: #05060f;
  }
  .video-title {
    padding: 20px 22px;
    margin: 0;
    font-size: 13px;
    line-height: 1.6;
    color: #ffffff;
  }
</style>
