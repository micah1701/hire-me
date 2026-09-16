<script lang="ts">
  import RetroButton from "./RetroButton.svelte";

  function splitFirstWord(text: string) {
    const spaceIndex = text.indexOf(" ");
    if (spaceIndex === -1) return { firstWord: text, rest: "" };
    return {
      firstWord: text.slice(0, spaceIndex),
      rest: text.slice(spaceIndex),
    };
  }

  function trackResumeDownload() {
    window.analytics?.trackDownload(
      "/Micah_Murray_Senior_Web_Engineer.pdf",
      "Resume Download",
    );
  }

  interface Job {
    company: string;
    location: string;
    title: string;
    period: string;
    description: string;
    details?: string[];
    stack?: string[];
  }

  const jobs: Job[] = [
    {
      company: "SCA Pharma",
      location: "Windsor CT (Remote)",
      title: "Full Stack Developer",
      period: "September 2019 - January 2026",
      description:
        "Senior member of a core development team responsible for evolving and maintaining critical manufacturing and enterprise systems built on a Java/Spring backend with MS SQL, MySQL, and Sage X3 ERP integration. Delivered production-grade features in the core legacy stack while independently designing and building lightweight PHP and Node.js applications, REST APIs, and TypeScript-based tooling to close functionality gaps, automate data collection, and modernize manual processes — all within a heavily regulated environment governed by cGMP, FDA, and DEA compliance standards.",
      details: [
        "Architected and built a secure REST API integration layer enabling controlled cross-system data access between MasterControl, Salesforce, and internal ERP systems, while maintaining strict regulatory compliance controls.",
        "Designed and developed a document printing microservice generating traceable unique identifiers for printed records, improving document accountability and FDA/DEA audit readiness.",
        "Built full-stack, PHP and Node.js-powered web interfaces that replaced handwritten production data logs — significantly improving data accuracy, accessibility, and workflow efficiency for line operators.",
        "Developed ETL pipelines and data automation tooling to feed real-time manufacturing dashboards and intranet applications supporting production, quality, and sales operations.",
        "Served as a technical resource and mentor within a four-developer core team, advocating for clean architecture, API-first design, and maintainable, testable code.",
      ],
      stack: [
        "Java",
        "Spring",
        "PHP",
        "Node.js",
        "TypeScript",
        "JavaScript",
        "MS SQL",
        "MySQL",
        "REST APIs",
        "Sage X3 ERP",
        "ETL",
        "HTML/CSS",
      ],
    },
    {
      company: "Primacy",
      location: "Farmington CT",
      title: "Senior Technology Developer",
      period: "June 2018 - August 2019",
      description:
        "Full-stack developer within a digital agency serving multiple enterprise clients, translating complex visual designs into stable, scalable, production-grade web applications while contributing to internal tooling and engineering standards.",
      details: [
        "Developed and maintained responsive, full-stack Drupal-based web applications for enterprise clients, ensuring design fidelity, accessibility compliance, and cross-browser performance across deliverables.",
        "Built and supported internal web tools using TypeScript and modern JavaScript frameworks to streamline internal production and content workflows.",
        "Collaborated with multidisciplinary engineering and design teams to establish reusable, modular codebase standards and improve overall development practices.",
      ],
      stack: ["Drupal", "PHP", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      company: "Cronin",
      location: "Glastonbury CT",
      title: "Senior Full Stack Developer",
      period: "June 2014 - April 2018",
      description:
        "Lead developer on enterprise and digital marketing web initiatives, serving as both primary technical owner and primary client contact — balancing hands-on full-stack development with direct collaboration across design, IT, and account management teams.",
      details: [
        "Led full-stack development of a regional bank's complete website overhaul, serving as lead developer and primary point of contact with client IT staff and project managers to deliver a secure, scalable Sitefinity (.NET/C#) platform.",
        "Architected and built dozens of responsive, PHP-driven landing pages and microsites for high-traffic lead-generation marketing campaigns, applying modern front-end performance and accessibility standards.",
        "Partnered directly with design and UX teams to implement complex, accessible layouts, translating business and marketing goals into technical requirements and maintainable code.",
        "Served as a go-to technical mentor and troubleshooting resource for teammates, resolving integration and deployment challenges across projects.",
      ],
      stack: [
        "PHP",
        "Sitefinity (.NET/C#)",
        "JavaScript",
        "HTML/CSS",
        "MySQL",
        "REST APIs",
      ],
    },
    {
      company: "The Pita Group",
      location: "Rocky Hill CT",
      title: "Senior Interactive Developer",
      period: "April 2010 - June 2014",
      description:
        "Full-stack developer and technical innovation lead within a small, highly creative digital agency team, owning projects end-to-end from concept and prototyping through development and launch for a range of agency clients.",
      details: [
        "Designed and built custom, full-stack PHP web applications and interactive experiences tailored to individual client workflows and marketing objectives.",
        "Served as internal innovation lead, prototyping new technical concepts and interactive features that were productized into recurring agency service offerings.",
        "Acted as the primary technical bridge between creative, client, and engineering perspectives, translating design vision into scalable, maintainable code under tight project timelines.",
        "Drove process and code-reuse improvements that accelerated delivery speed and improved consistency across concurrent client projects.",
      ],
      stack: [
        "PHP",
        "MySQL",
        "JavaScript",
        "HTML/CSS",
        "jQuery",
        "REST APIs",
        "Adobe Creative Suite",
      ],
    },
    {
      company: "ARRL",
      location: "Newington CT",
      title: "Web Application Developer",
      period: "January 2007 - April 2010",
      description:
        "Built a full-stack online membership enrollment/renewal application used by 161,000 members, a data-processing system integrating with the FCC's Universal Licensing System, and a self-publishing tool for editorial staff. (PHP, MySQL, JavaScript, REST/data integration)",
    },
    {
      company: "Hilb, Rogal & Hobbs",
      location: "Hartford CT",
      title: "Web Developer",
      period: "March 2003 - December 2006",
      description:
        "Began professional software development career building ColdFusion and Flash-based sales reporting tools against a MySQL database for a national sales team, supporting a home-built SFA platform predating widely-available CRM tools. (ColdFusion, Flash, MySQL, HTML)",
    },
  ];

  const skills = [
    "Object Oriented PHP / Java",
    "Javascript / TypeScript / Node",
    "+some Python, Go, Rust",
    "SQL Server / MySQL / Postgres",
    "+some Redis, NoSQL, Supabase",
    "Bug resolution / Code review / Reverse engineering",
    "REST / API Development",
    "GIT Source Control / GitHub",
    "Problem Solving",
    "IIS / Apache / Nginx / Docker",
    "Open Stack / VPS / Cloud VM",
    "OpenAI / GPT / Vibe Code",
    "Zero Trust / oAuth2 / LDAP / SAML / OIDC / JWT",
    "/* Witty Code Comments */",
    "/>$ Cmd Line Interfaces",
    "Windows / Linux / MacOS",
    "Distributed Ledgers, Blockchain",
    "E2E Cryptology",
  ];
</script>

<section id="resume" class="resume-section">
  <div class="resume-cta">
    <p class="kicker" style="justify-content: center; display: flex;">
      Insert coin
    </p>
    <h2 class="font-pixel resume-cta-title">Ready when you are</h2>
    <p class="resume-cta-lead">
      If you need a developer who can plan, build, and adapt — for a team or for
      a single stubborn project — I'd like to hear about it.
    </p>
    <div class="resume-cta-buttons">
      <RetroButton
        href="/Micah_Murray_Senior_Web_Engineer.pdf"
        variant="white"
        download
        on:click={trackResumeDownload}>Download résumé (PDF) ↓</RetroButton
      >
      <RetroButton
        href="mailto:micah@creativeadhocsolutions.com"
        variant="primary">Email me</RetroButton
      >
    </div>
  </div>

  <div class="resume-container retro-panel">
    <div class="resume-header">
      <div class="resume-header-left">
        <h1 class="font-pixel resume-name">Micah Murray</h1>
        <p class="resume-tagline">
          Senior Full-Stack Developer and Application Architect with 23+ years
          of professional experience designing, building, and scaling web
          applications and APIs across manufacturing, enterprise IT, sales,
          marketing, and business operations. Deep expertise in PHP and
          JavaScript (ES6+), with strong hands-on experience in Java,
          TypeScript, Node.js, React, Laravel, Spring, and cloud-integrated
          (AWS, Azure) full-stack development.
        </p>
        <p class="resume-tagline">
          Proven track record architecting secure, cross-system integrations,
          modernizing legacy platforms, and automating manual workflows to
          improve data integrity and operational efficiency.
        </p>
        <p class="resume-tagline">
          Recognized for pairing deep technical expertise with a pragmatic,
          big-picture mindset — delivering solutions that reduce manual
          processes, close functionality gaps, and scale with the business.
          Experienced mentor and technical resource for development teams, with
          a track record of translating business requirements into maintainable,
          production-grade software.
        </p>
      </div>
      <div class="resume-header-right font-mono">
        <p>Longmeadow, Massachusetts USA</p>
        <p>
          <a href="https://linkedin.com/in/micahmurray" target="_blank"
            >linkedin.com/in/micahmurray</a
          ><br />
          <a href="https://github.com/micah1701" target="_blank"
            >github.com/micah1701</a
          >
        </p>
      </div>
    </div>

    <div class="resume-body">
      <div class="resume-main">
        <h2 class="font-pixel resume-h2">Experience</h2>

        {#each jobs as job}
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
        {/each}
      </div>

      <div class="resume-sidebar">
        <h2 class="font-pixel resume-h2">Skills</h2>
        <ul class="skills-list">
          {#each skills as skill}
            <li>{skill}</li>
          {/each}
        </ul>

        <h2 class="font-pixel resume-h2">Education</h2>
        <div class="education font-mono">
          <p>
            <strong>Eastern Connecticut State University</strong><br
            />Willimantic CT
          </p>
          <p><strong>Eastern College</strong><br />St Davids PA</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .resume-section {
    border-top: 4px solid var(--arcade-border);
  }

  .resume-cta {
    background: linear-gradient(
      150deg,
      rgba(78, 227, 211, 0.12),
      rgba(255, 69, 142, 0.12)
    );
    padding: 84px 24px;
    text-align: center;
  }
  .resume-cta-title {
    font-size: clamp(20px, 3vw, 34px);
    line-height: 1.4;
    color: #ffffff;
    margin: 0 0 22px;
  }
  .resume-cta-lead {
    font-size: 19px;
    line-height: 1.7;
    color: #cfd8f0;
    max-width: 54ch;
    margin: 0 auto 38px;
  }
  .resume-cta-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
  }

  .resume-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2.5rem;
    margin-top: -1px;
    position: relative;
  }

  .resume-header {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 2px solid var(--arcade-border);
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }
  .resume-header-left {
    flex: 1;
    min-width: 260px;
  }
  .resume-name {
    margin: 0 0 1rem 0;
    color: #ffffff;
    font-size: 1.6rem;
  }
  .resume-tagline {
    margin: 0.5rem 0;
    line-height: 1.5;
    color: #cfd8f0;
  }
  .resume-method {
    margin: 1rem 0 0 0;
    color: var(--arcade-teal);
    font-size: 0.85rem;
  }
  .resume-header-right {
    text-align: right;
    font-size: 0.9rem;
    color: var(--arcade-muted);
  }
  .resume-header-right p {
    margin: 0.5rem 0;
  }

  .resume-body {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
  }

  .resume-h2 {
    color: #ffffff;
    border-bottom: 2px solid var(--arcade-border);
    padding-bottom: 0.75rem;
    margin-bottom: 1.5rem;
    font-size: 15px;
  }

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

  .skills-list {
    list-style: none;
    padding: 0;
    margin: 0 0 2rem;
  }
  .skills-list li {
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--arcade-border);
    font-size: 0.85rem;
    color: #cfd8f0;
  }

  .education {
    font-size: 0.85rem;
    color: #cfd8f0;
  }
  .education p {
    margin: 1rem 0;
  }

  @media (max-width: 900px) {
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
</style>
