<script lang="ts">
  import SectionHeading from './SectionHeading.svelte';
  import RetroButton from './RetroButton.svelte';
  import VideoCard from './VideoCard.svelte';
  import Carousel from './Carousel.svelte';

  const playlistUrl = 'https://www.youtube.com/playlist?list=PLcxdr-GWUN0s';

  const videos = [
    { id: 'sL7NqnRGYGQ', title: 'That Word Everyone Nods At But Nobody Understands' },
    { id: 'EDC83i4nUjE', title: 'I Almost Built an Identity Theft Machine (By Accident)' },
    { id: 'NT7u3WP1LJ8', title: "The Sales Tool That Couldn't See What Customers Actually Bought" },
    { id: 'jRCMtzV7L1s', title: 'Why a Pharma Factory Line Traded Paperwork for a Barcode Scanner' }
  ];
</script>

<section id="my-work" class="videos-section">
  <div class="videos-container">
    <SectionHeading kicker="Plain english" title="What would you say you actually do?" color="blue" />
    <p class="videos-intro">
      I'll admit it — I can ramble on in tech jargon and lose people fast. So here's the
      plain-English version instead: short videos, each under a minute, that walk through a
      real problem and how I solved it, minus the boring technical explanation.
    </p>

    <Carousel label="Plain-English videos" accent="var(--arcade-blue)">
      {#each videos as video (video.id)}
        <VideoCard id={video.id} title={video.title} />
      {/each}
    </Carousel>

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
  .videos-intro {
    font-size: 17px;
    line-height: 1.65;
    color: var(--arcade-muted);
    max-width: 60ch;
    margin: -24px 0 44px;
  }
  .videos-cta {
    margin-top: 40px;
    text-align: center;
  }
</style>
