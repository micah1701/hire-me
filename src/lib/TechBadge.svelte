<script lang="ts">
  export let tech: string;
  export let label: string | undefined = undefined;
</script>

<span class="tech-badge">
  <img src="/techLogos/{tech}.svg" alt="" />
  {label ?? tech}
</span>
