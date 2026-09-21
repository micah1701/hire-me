<script lang="ts">
  import SectionHeading from './SectionHeading.svelte';
  import RetroButton from './RetroButton.svelte';
  import VideoCard from './VideoCard.svelte';

  const playlistUrl = 'https://www.youtube.com/playlist?list=PLcxdr-GWUN0s';

  const videos = [
    { id: 'sL7NqnRGYGQ', title: 'That Word Everyone Nods At But Nobody Understands' },
    { id: 'EDC83i4nUjE', title: 'I Almost Built an Identity Theft Machine (By Accident)' },
    { id: 'NT7u3WP1LJ8', title: "The Sales Tool That Couldn't See What Customers Actually Bought" },
    { id: 'jRCMtzV7L1s', title: 'Why a Pharma Factory Line Traded Paperwork for a Barcode Scanner' }
  ];

  let track: HTMLDivElement;

  function scrollByCard(direction: 1 | -1) {
    const card = track.querySelector('.video-card') as HTMLElement | null;
    const amount = (card ? card.offsetWidth : 340) + 24;
    track.scrollBy({ left: direction * amount, behavior: 'smooth' });
  }
</script>

<section id="videos" class="videos-section">
  <div class="videos-container">
    <SectionHeading kicker="Plain english" title="What would you say you actually do?" color="blue" />

    <div class="carousel">
      <button class="carousel-nav prev font-pixel" on:click={() => scrollByCard(-1)} aria-label="Previous video">&#10094;</button>
      <div class="carousel-track" bind:this={track}>
        {#each videos as video (video.id)}
          <VideoCard id={video.id} title={video.title} />
        {/each}
      </div>
      <button class="carousel-nav next font-pixel" on:click={() => scrollByCard(1)} aria-label="Next video">&#10095;</button>
    </div>

    <div class="videos-cta">
      <RetroButton href={playlistUrl} variant="outline" target="_blank" rel="noopener">
        Watch the full playlist on YouTube
      </RetroButton>
    </div>
  </div>
</section>

<style>
  .videos-section {
    border-top: 4px solid var(--arcade-border);
  }
  .videos-container {
    max-width: 1180px;
    margin: 0 auto;
    padding: 78px 24px;
  }
  .carousel {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .carousel-track {
    display: flex;
    gap: 24px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    padding-bottom: 8px;
  }
  .carousel-track :global(.video-card) {
    scroll-snap-align: start;
    flex: 0 0 auto;
  }
  .carousel-nav {
    flex: 0 0 auto;
    background: rgba(8, 10, 20, 0.7);
    color: var(--arcade-teal);
    border: 2px solid var(--arcade-border);
    padding: 0.7rem 0.9rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .carousel-nav:hover {
    background: var(--arcade-teal);
    color: #05060f;
  }
  .videos-cta {
    margin-top: 40px;
    text-align: center;
  }

  @media (max-width: 640px) {
    .carousel-nav {
      display: none;
    }
  }
</style>
