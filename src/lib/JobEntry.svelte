<script lang="ts">
  interface Job {
    company: string;
    location: string;
    title: string;
    period: string;
    description: string;
    details?: string[];
    stack?: string[];
  }

  export let job: Job;

  function splitFirstWord(text: string) {
    const spaceIndex = text.indexOf(" ");
    if (spaceIndex === -1) return { firstWord: text, rest: "" };
    return {
      firstWord: text.slice(0, spaceIndex),
      rest: text.slice(spaceIndex),
    };
  }
</script>

<div class="job">
  <h3 class="job-title">
    {job.company}, <span class="job-location">{job.location}</span> —
    <span class="job-role">{job.title}</span>
  </h3>
  <p class="job-period font-mono">{job.period}</p>

  {#if job.description}
    <p class="job-description">{job.description}</p>
  {/if}

  {#if job.details}
    <ul>
      {#each job.details as detail}
        {@const { firstWord, rest } = splitFirstWord(detail)}
        <li><span class="first_word">{firstWord}</span>{rest}</li>
      {/each}
    </ul>
  {/if}

  {#if job.stack}
    <p class="job-stack font-mono">
      <span class="job-section-title">Technologies:</span>
      {job.stack.join(", ")}
    </p>
  {/if}
</div>

<style>
  .job {
    margin-bottom: 2rem;
  }
  .job-title {
    margin: 0 0 0.25rem 0;
    color: var(--arcade-text);
    font-size: 1.05rem;
  }
  .job-location {
    font-weight: normal;
    font-size: 0.9rem;
    color: var(--arcade-muted);
  }
  .job-role {
    font-style: italic;
    font-weight: normal;
    font-size: 0.9rem;
    color: var(--arcade-muted);
  }
  .job-period {
    color: var(--arcade-teal);
    font-size: 0.8rem;
    margin: 0.25rem 0 0.75rem 0;
  }
  .job-description {
    margin: 0.75rem 0;
    color: #cfd8f0;
  }
  .job-stack {
    margin: 0.75rem 0 0 0;
    color: #cfd8f0;
    font-size: 0.8rem;
    line-height: 1.5;
  }
  .job-section-title {
    font-weight: 600;
    color: var(--arcade-muted);
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin-right: 0.35em;
  }
  .job ul {
    margin: 0.5rem 0;
    padding-left: 1.25rem;
    color: #cfd8f0;
  }
  .job li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }
  .first_word {
    font-weight: 700;
    color: blueviolet;
    font-family: monospace;
    font-size: 1.2rem;
    line-height: 0.9em;
  }
</style>
