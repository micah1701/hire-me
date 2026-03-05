<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let projectId: string;
  export let image: string;
  export let title: string;
  export let subtitle: string;
  export let description: string;
  export let showAlgorandLogo: boolean = false;

  const dispatch = createEventDispatcher();

  function handleClick() {
    dispatch('click');
  }
</script>

<article class="project" data-project={projectId} on:click={handleClick}>
  <img src={image} alt="Screenshot of {title}" />
  <div class="project-body">
    <h3>
      <span>{title}</span>
      {subtitle}
    </h3>
    <p>{description}</p>
    {#if showAlgorandLogo}
      <div class="centered-200">
        
      </div>
    {/if}
  </div>
</article>
