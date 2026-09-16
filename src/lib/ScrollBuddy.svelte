<script lang="ts">
  import { onMount } from 'svelte';

  let progress = 0;
  let facing = 1;

  onMount(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      facing = p >= progress ? 1 : -1;
      progress = p;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  });

  $: progressPct = (progress * 100).toFixed(2) + '%';
</script>

<div class="scroll-buddy">
  <div class="scroll-buddy-track" style="width: {progressPct}"></div>
  <img
    src="/micah-sprite.png"
    alt=""
    class="scroll-buddy-sprite pixel-art"
    style="left: {progressPct}; transform: translateX(-50%) scaleX({facing})"
  />
</div>
