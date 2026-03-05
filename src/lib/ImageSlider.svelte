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
      <img
        src={image}
        alt="{alt} screenshot {i + 1}"
        class:active={i === currentIndex}
      />
    {/each}
  </div>
  <button class="prev" on:click={prev}>&#10094;</button>
  <button class="next" on:click={next}>&#10095;</button>
</div>
