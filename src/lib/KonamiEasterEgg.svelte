<script lang="ts">
  import { onMount } from 'svelte';

  const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  let keys: string[] = [];
  let cheat = false;

  onMount(() => {
    const onKey = (e: KeyboardEvent) => {
      const k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      keys = [...keys, k].slice(-code.length);
      if (keys.join(',') === code.join(',')) cheat = true;
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
</script>

{#if cheat}
  <div
    class="cheat-backdrop"
    role="button"
    tabindex="0"
    on:click|self={() => (cheat = false)}
    on:keydown={(e) => e.key === 'Escape' && (cheat = false)}
  >
    <div class="retro-panel cheat-box">
      <p class="font-pixel" style="font-size: 15px; line-height: 1.7; color: var(--arcade-teal); margin: 0 0 20px;">
        Cheat activated
      </p>
      <p class="font-pixel gradient-text" style="font-size: 22px; line-height: 1.6; margin: 0 0 24px;">30 extra lives</p>
      <p style="color: var(--arcade-text); line-height: 1.7; font-size: 17px; margin: 0 0 28px;">
        You found the Konami code. Nobody who doesn't read footers gets this far — mention it in your first email
        and I'll assume we're going to get along.
      </p>
      <button type="button" class="cheat-close font-mono" on:click={() => (cheat = false)}>Continue</button>
    </div>
  </div>
{/if}

<style>
  .cheat-backdrop {
    position: fixed;
    inset: 0;
    z-index: 70;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(4, 6, 14, 0.88);
    padding: 24px;
  }
  .cheat-box {
    border-color: var(--arcade-teal);
    padding: 44px;
    max-width: 520px;
    text-align: center;
    box-shadow: 10px 10px 0 rgba(78, 227, 211, 0.25);
  }
  .cheat-close {
    font-size: 14px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 14px 20px;
    border: 3px solid var(--arcade-teal);
    background: transparent;
    color: var(--arcade-teal);
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;
  }
  .cheat-close:hover {
    background: var(--arcade-teal);
    color: #05060f;
  }
</style>
