<script lang="ts">
  export let images: string[];
  export let alt: string;

  let currentIndex = 0;

  function showSlide(index: number) {
    currentIndex = (index + images.length) % images.length;
  }

  function prev() {
    showSlide(currentIndex - 1);
  }

  function next() {
    showSlide(currentIndex + 1);
  }
</script>

<div class="slider">
  <div class="slides">
    {#each images as image, i}
      <img src={image} alt="{alt} screenshot {i + 1}" class:active={i === currentIndex} />
    {/each}
  </div>
  <button class="slider-nav prev font-pixel" on:click={prev} aria-label="Previous image">&#10094;</button>
  <button class="slider-nav next font-pixel" on:click={next} aria-label="Next image">&#10095;</button>
</div>

<style>
  .slider {
    position: relative;
    max-width: 100%;
    margin: 1rem 0 2rem;
    overflow: hidden;
    border: 4px solid var(--arcade-border);
  }
  .slides img {
    width: 100%;
    display: none;
  }
  .slides img.active {
    display: block;
  }

  .slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(8, 10, 20, 0.7);
    color: var(--arcade-teal);
    border: 2px solid var(--arcade-border);
    padding: 0.5rem 0.8rem;
    cursor: pointer;
    font-size: 0.9rem;
  }
  .slider-nav:hover {
    background: var(--arcade-teal);
    color: #05060f;
  }
  .prev {
    left: 10px;
  }
  .next {
    right: 10px;
  }
</style>
