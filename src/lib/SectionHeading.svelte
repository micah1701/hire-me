<script lang="ts">
  export let kicker: string;
  export let title: string;
  export let color: 'teal' | 'pink' | 'blue' = 'teal';

  $: kickerClass = color === 'pink' ? 'is-pink' : color === 'blue' ? 'is-blue' : '';
</script>

<p class="kicker {kickerClass}">{kicker}</p>
<h2 class="section-title">{title}</h2>
