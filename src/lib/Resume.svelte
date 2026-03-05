<script lang="ts">
  interface Job {
    company: string;
    location: string;
    title: string;
    period: string;
    description: string;
    projects?: string[];
    responsibilities?: string[];
  }

  const jobs: Job[] = [
    {
      company: 'SCA Pharma',
      location: 'Windsor CT (Remote)',
      title: 'Full Stack Developer',
      period: 'September 2019 - Present',
      description: 'Built and managed applications for use in pharmaceutical manufacturing, inspection, and quality control throughout the product lifecycle. Designed and developed simple control interfaces, heads-up displays, and dashboard to aid in tracking of critical cGMP data in compliance with FDA, DEA, and other governmental regulatory agencies.',
      projects: [
        'ILP PID/Timers/Digital forms and Sage integration',
        'Extract, transform, and load tools (sage to salesforce etc)',
        'Redeveloped E-Commerce website subscription order website, handling 80% of sales.',
        'Created Intranet website on a custom PHP-based CMS as a pet project to aid in employee communications.',
        'Integrations between ldap, AD, paylocity, toolbox, ecom, salesforce, sage, mastercontrol (pdf parsing and dynamic modification)',
        'Secure ad-hoc data storage (datastore)',
        'Encrypted-at-rest file storage (datastore, intranet, sage2salesforce tool, etc)',
        'Developed controlled document chain of custody and reconciliation system.'
      ]
    },
    {
      company: 'Primacy',
      location: 'Farmington CT',
      title: 'Senior Technology Developer',
      period: 'June 2018 - August 2019',
      description: 'Tech lead for Mutual of Omaha marketing properties',
      responsibilities: [
        'Backend Laravel development for multiple campaign landing-page websites.',
        'Dynamic content population using blade and twig templating.',
        'Worked closely with the client\'s technical staff to comply with stringent security and coding standards.',
        'Feature enhancements, technical debt improvements, and campaign related new development for multiple sites.',
        'Notable enterprise client work included: MIT, The Hartford, Carling Industries, Aetna, and TIAA.',
        'Automated cross-platform analytics reporting with application to pull paid-search and banner ad data, parse and consolidate relevant information, and push via API to Google Data Studio.',
        'Front end build-out in Vue.js and TypeScript for intranet-based project management tools'
      ]
    },
    {
      company: 'Cronin',
      location: 'Glastonbury CT',
      title: 'Senior Full Stack Developer',
      period: 'June 2014 - April 2018',
      description: 'Lead developer for Liberty-Bank.com',
      responsibilities: [
        'Installation and upgrades of Sitefinity site management platform.',
        'Team lead for 2017 site rebuild with half-million dollar budget.',
        'Implemented persona-based content personalization.',
        'Technical support contact for Liberty\'s internal marketing group.',
        'Consolidated dozens of campaign-specific microsites by devising and developing improved analytic tracking methods.',
        'Built a modular landing page framework for rapid development of new campaign sites.',
        'Programmed 2016 redesign in Laravel framework.',
        'Simplified promotional code management process.',
        'Integrated formstack.com to capture leads and order fulfillment.'
      ]
    },
    {
      company: 'The Pita Group',
      location: 'Rocky Hill CT',
      title: 'Senior Interactive Developer',
      period: 'April 2010 - June 2014',
      description: '',
      responsibilities: [
        'Proprietary Content Management System built on an open source framework with custom tools for user and page management.',
        'Web-based multi-device synchronization platform for live audience interaction.',
        'Sales portfolio sharing tool for personalized lead generation.',
        'Notable website development projects include: The Hartford Public Library, Riverfront Recapture, The Metropolitan District (MDC), The Jewish Federation of Greater Hartford, Connecticut Women\'s Hall of Fame, The Connecticut Freedom Trail, MassMutual Fact or Fiction financial services micro site.'
      ]
    },
    {
      company: 'ARRL',
      location: 'Newington CT',
      title: 'Web Application Developer',
      period: 'January 2007 - April 2010',
      description: '',
      responsibilities: [
        'Developed comprehensive online membership enrollment/renewal application utilized by 161,000 American Radio Relay League members, modernizing the previous snail-mail, e-mail, and manual data entry process.',
        'Programmed online software for data-processing of amateur radio exam results with intelligent user input fields. Passing data between local back-end systems and out to the FCC\'s Universal Licensing Online Database.',
        'Replaced manual HTML news publishing process with custom application, allowing editorial staff to self-publish articles, saving up to 8 hours a week of IT department time.'
      ]
    },
    {
      company: 'Hilb Rogal & Hobbs',
      location: 'Hartford CT',
      title: 'Web Application Developer',
      period: 'March 2003 - January 2007',
      description: '',
      responsibilities: [
        'Maintained the online sales team CRM application used by 700 brokerage employees nationwide.',
        'National task force committee member to implement third party CRM/SFA products (this was the olden days when salesforce.com was disqualified because the C-level couldn\'t understand SaaS)',
        'Created custom ad-hoc sales reports from user entered data.',
        'Exponentially improved the ongoing administration of demonstration websites, used in presentations for potential clients, by migrating existing data from static hand-coded HTML to a template and database driven structure.'
      ]
    }
  ];

  const skills = [
    'Object Oriented PHP / Java',
    'Javascript / TypeScript / Node',
    '+some Python, Go, Rust',
    'SQL Server / MySQL / Postgres',
    '+some Redis, NoSQL, Supabase',
    'Bug resolution / Code review / Reverse engineering',
    'REST / API Development',
    'GIT Source Control / GitHub',
    'Problem Solving',
    'IIS / Apache / Nginx / Docker',
    'Open Stack / VPS / Cloud VM',
    'OpenAI / GPT / Vibe Code',
    'Zero Trust / oAuth2 / LDAP / SAML / OIDC / JWT',
    '/* Witty Code Comments */',
    '/>$ Cmd Line Interfaces',
    'Windows / Linux / MacOS',
    'Distributed Ledgers, Blockchain',
    'E2E Cryptology'
  ];
</script>

<section id="resume" class="resume">
  <div class="resume-container">
    <div class="resume-header">
      <div class="resume-header-left">
        <h1>Micah Murray</h1>
        <p class="tagline">Senior-Level Full Stack Progressive Web Application Developer with over two decades experience supporting sales, marketing, and manufacturing.</p>
        <p class="methodology">Learn the Process → Find the Bottleneck → Have Big Ideas → PoC → MVP</p>
      </div>
      <div class="resume-header-right">
        <p>130 Westmoreland Ave<br>Longmeadow, Massachusetts<br>860.205.0687</p>
        <p>
          <a href="https://linkedin.com/in/micahmurray" target="_blank">linkedin.com/in/micahmurray</a><br>
          <a href="https://github.com/micah1701" target="_blank">github.com/micah1701</a><br>
          <a href="mailto:micah.murray@gmail.com">micah.murray@gmail.com</a>
        </p>
      </div>
    </div>

    <div class="resume-body">
      <div class="resume-main">
        <h2>Experience</h2>

        {#each jobs as job}
          <div class="job">
            <h3>{job.company}, <span class="location">{job.location}</span> — <span class="title">{job.title}</span></h3>
            <p class="period">{job.period}</p>

            {#if job.description}
              <p class="description">{job.description}</p>
            {/if}

            {#if job.projects}
              <p class="section-title">Projects</p>
              <ul>
                {#each job.projects as project}
                  <li>{project}</li>
                {/each}
              </ul>
            {/if}

            {#if job.responsibilities}
              <ul>
                {#each job.responsibilities as responsibility}
                  <li>{responsibility}</li>
                {/each}
              </ul>
            {/if}
          </div>
        {/each}
      </div>

      <div class="resume-sidebar">
        <h2>Skills</h2>
        <ul class="skills-list">
          {#each skills as skill}
            <li>{skill}</li>
          {/each}
        </ul>

        <h2>Education</h2>
        <div class="education">
          <p><strong>Eastern Connecticut State University</strong><br>Willimantic CT</p>
          <p><strong>Eastern College</strong><br>St Davids PA</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .resume {
    background: var(--bg);
    padding: 3rem 1rem;
  }

  .resume-container {
    max-width: 1100px;
    margin: 0 auto;
    background: var(--card-bg);
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }

  .resume-header {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--accent);
    margin-bottom: 2rem;
  }

  .resume-header-left {
    flex: 1;
  }

  .resume-header h1 {
    margin: 0 0 0.5rem 0;
    color: var(--accent);
    font-size: 2.5rem;
  }

  .tagline {
    margin: 0.5rem 0;
    line-height: 1.5;
    color: var(--text);
  }

  .methodology {
    margin: 1rem 0 0 0;
    color: var(--accent);
    font-weight: 500;
    font-size: 0.9rem;
  }

  .resume-header-right {
    text-align: right;
    font-size: 0.9rem;
  }

  .resume-header-right p {
    margin: 0.5rem 0;
  }

  .resume-header-right a {
    color: var(--accent);
    text-decoration: none;
  }

  .resume-header-right a:hover {
    text-decoration: underline;
  }

  .resume-body {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
  }

  .resume-main h2,
  .resume-sidebar h2 {
    color: var(--accent);
    border-bottom: 2px solid var(--accent);
    padding-bottom: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  .job {
    margin-bottom: 2rem;
  }

  .job h3 {
    margin: 0 0 0.25rem 0;
    color: var(--text);
    font-size: 1.1rem;
  }

  .job .location {
    font-weight: normal;
    font-size: 0.95rem;
  }

  .job .title {
    font-style: italic;
    font-weight: normal;
    font-size: 0.95rem;
  }

  .period {
    color: var(--light-text);
    font-size: 0.9rem;
    margin: 0.25rem 0 0.75rem 0;
  }

  .description {
    margin: 0.75rem 0;
  }

  .section-title {
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
  }

  .job ul {
    margin: 0.5rem 0;
    padding-left: 1.5rem;
  }

  .job li {
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .skills-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .skills-list li {
    padding: 0.5rem 0;
    border-bottom: 1px solid #eee;
    font-size: 0.9rem;
  }

  .education {
    font-size: 0.9rem;
  }

  .education p {
    margin: 1rem 0;
  }

  @media (max-width: 900px) {
    .resume-header {
      flex-direction: column;
    }

    .resume-header-right {
      text-align: left;
    }

    .resume-body {
      grid-template-columns: 1fr;
    }

    .resume-sidebar {
      order: 2;
    }
  }

  @media (max-width: 600px) {
    .resume-container {
      padding: 1rem;
    }

    .resume-header h1 {
      font-size: 2rem;
    }
  }
</style>
