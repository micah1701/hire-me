<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let projectId: string;
  export let image: string;
  export let imgClass: string;
  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let techStack: string[] = [];

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<article class="project" data-project={projectId} on:click={handleClick}>
  <img src={image} class={imgClass} alt="Screenshot of {title}" />
  <div class="project-body">
    <h3>
      <span>{title}</span>
      {subtitle}
    </h3>
    <p>{description}</p>
    {#if techStack.length > 0}
      <div class="tech-stack">
        {#each techStack as tech}
          <img src="/icons/{tech}.svg" alt={tech} class="tech-icon" title={tech} />
        {/each}
      </div>
    {/if}
  </div>
</article>
