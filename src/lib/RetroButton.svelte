<script lang="ts">
  export let href: string;
  export let variant: 'primary' | 'outline' | 'white' = 'primary';
  export let download = false;
  export let target: string | undefined = undefined;
  export let rel: string | undefined = undefined;

  $: variantClass = variant === 'outline' ? 'is-outline' : variant === 'white' ? 'is-white' : '';
</script>

<a class="btn-pixel {variantClass}" {href} {target} {rel} {...(download ? { download: true } : {})} on:click>
  <slot />
</a>
