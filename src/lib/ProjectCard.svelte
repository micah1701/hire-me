<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import TechBadge from "./TechBadge.svelte";

  export let projectId: string;
  export let image: string;
  export let imgClass = "";
  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let techStack: string[] = [];

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch("click");
  }
</script>

<div
  class="project-card retro-panel"
  data-project={projectId}
  role="button"
  tabindex="0"
  on:click={handleClick}
  on:keydown={(e) => (e.key === "Enter" || e.key === " ") && handleClick()}
  on:mouseenter={(e) => e.currentTarget.classList.add("no-scanlines")}
  on:mouseleave={(e) => e.currentTarget.classList.remove("no-scanlines")}
  on:focus={(e) => e.currentTarget.classList.add("no-scanlines")}
  on:blur={(e) => e.currentTarget.classList.remove("no-scanlines")}
>
  <div class="project-thumb">
    <img src={image} class={imgClass} alt="Screenshot of {title}" />
  </div>
  <div class="project-body">
    <h3 class="font-pixel project-title">{title}</h3>
    <p class="font-mono project-subtitle">{subtitle}</p>
    <p class="project-description">{description}</p>
    {#if techStack.length > 0}
      <div class="project-tech">
        {#each techStack as tech}
          <TechBadge {tech} />
        {/each}
      </div>
    {/if}
    <!-- Visual cue only: the whole card is the button, so this can't be a nested <button> -->
    <span class="project-more font-pixel" aria-hidden="true">Learn more <span class="project-more-arrow">&rarr;</span></span>
  </div>
</div>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    transition: border-color 0.15s ease;
  }
  .project-card:hover {
    border-color: var(--arcade-teal);
  }
  .project-thumb {
    border-bottom: 4px solid var(--arcade-border);
    height: 210px;
    overflow: hidden;
    background-color: #0d1024;
  }
  .project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top left;
    opacity: 0.92;
  }
  .project-thumb img.img-contain {
    object-fit: contain;
  }
  .project-body {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 26px;
  }
  .project-title {
    font-size: 14px;
    line-height: 1.6;
    color: #ffffff;
    margin: 0 0 12px;
  }
  .project-subtitle {
    font-size: 13px;
    color: var(--arcade-teal);
    margin: 0 0 14px;
  }
  .project-description {
    margin: 0 0 18px;
    color: #cfd8f0;
    line-height: 1.65;
    font-size: 16px;
  }
  .project-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 22px;
  }
  /* Pinned to the bottom so the buttons line up across cards of different lengths */
  .project-more {
    align-self: flex-start;
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border: 3px solid var(--arcade-border);
    color: var(--arcade-text);
    font-size: 11px;
    line-height: 1.5;
    transition: border-color 0.15s ease, color 0.15s ease;
  }
  .project-more-arrow {
    transition: transform 0.15s ease;
  }
  .project-card:hover .project-more,
  .project-card:focus-visible .project-more {
    border-color: var(--arcade-teal);
    color: var(--arcade-teal);
  }
  .project-card:hover .project-more-arrow {
    transform: translateX(4px);
  }
</style>
