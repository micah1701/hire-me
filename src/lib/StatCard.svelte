<script lang="ts">
  export let number: string;
  export let description: string;
  export let color: 'teal' | 'pink' | 'blue' = 'teal';

  const colorVar: Record<typeof color, string> = {
    teal: 'var(--arcade-teal)',
    pink: 'var(--arcade-pink)',
    blue: 'var(--arcade-blue)'
  };
</script>

<div class="stat-card">
  <p class="stat-number" style="color: {colorVar[color]}">{number}</p>
  <p class="stat-desc">{description}</p>
</div>
