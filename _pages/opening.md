---
layout: page
permalink: /teaching/
title: Join Us
description: Openings and teaching in the DSSI Lab.
nav: true
nav_order: 6
---

<style>
  .join-shell {
    --dssi-line: rgba(23, 23, 23, 0.12);
    --dssi-muted: #5c6670;
  }

  html[data-theme="dark"] .join-shell {
    --dssi-line: rgba(255, 255, 255, 0.14);
    --dssi-muted: #c5ccd3;
  }

  .join-hero {
    display: grid;
    grid-template-columns: minmax(0, 1.1fr) minmax(280px, 0.9fr);
    gap: 1.6rem;
    align-items: stretch;
    margin-bottom: 2.2rem;
  }

  .join-copy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 330px;
    padding: 2rem;
    border: 1px solid var(--dssi-line);
    border-radius: 8px;
    background:
      linear-gradient(135deg, rgba(186, 12, 47, 0.12), transparent 42%),
      var(--global-card-bg-color);
    animation: join-rise 0.7s ease both;
  }

  .join-copy h2 {
    margin-top: 0;
    color: var(--global-text-color);
    font-size: clamp(1.9rem, 4vw, 2.7rem);
    font-weight: 800;
  }

  .join-visual {
    min-height: 330px;
    overflow: hidden;
    border: 1px solid var(--dssi-line);
    border-radius: 8px;
    background: url("{{ '/assets/img/gallery/lab-equipment-3.jpg' | relative_url }}") center / cover;
    animation: join-float 7s ease-in-out infinite;
  }

  .join-cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0.9rem;
    margin: 1.6rem 0 2.2rem;
  }

  .join-card {
    padding: 1rem;
    border: 1px solid var(--dssi-line);
    border-radius: 8px;
    background: var(--global-card-bg-color);
    animation: join-rise 0.7s ease both;
  }

  .join-card:nth-child(2) {
    animation-delay: 0.08s;
  }

  .join-card:nth-child(3) {
    animation-delay: 0.16s;
  }

  .join-card i {
    color: var(--global-theme-color);
    font-size: 1.4rem;
  }

  .join-card h3 {
    margin: 0.75rem 0 0.45rem;
    color: var(--global-text-color);
    font-size: 1.05rem;
    font-weight: 800;
  }

  .join-card p {
    margin: 0;
    color: var(--dssi-muted);
    line-height: 1.55;
  }

  @keyframes join-rise {
    from {
      opacity: 0;
      transform: translateY(16px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes join-float {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @media (max-width: 820px) {
    .join-hero,
    .join-cards {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="join-shell">
  <section class="join-hero">
    <div class="join-copy">
      <h2>We Are Recruiting</h2>
      <p>The DSSI Lab is recruiting motivated researchers interested in <strong>trustworthy AI for manufacturing, smart and additive manufacturing, privacy-preserving machine learning, and safe human-robot collaboration.</strong></p>
    </div>
    <div class="join-visual" aria-hidden="true"></div>
  </section>

  <div class="join-cards">
    <article class="join-card">
      <i class="fa-solid fa-user-graduate" aria-hidden="true"></i>
      <h3>PhD Students</h3>
      <p>Email Dr. Sun with a CV, transcripts, and a short statement of interest.</p>
    </article>
    <article class="join-card">
      <i class="fa-solid fa-laptop-code" aria-hidden="true"></i>
      <h3>UGA Undergraduates</h3>
      <p>Reach out year-round for robotics, digital-twin, privacy, and manufacturing AI projects.</p>
    </article>
    <article class="join-card">
      <i class="fa-solid fa-flask" aria-hidden="true"></i>
      <h3>Postdocs and Visitors</h3>
      <p>Send a CV and research statement describing fit with current DSSI projects.</p>
    </article>
  </div>

- **Prospective PhD students** should email Dr. Sun at [hongyuesun@uga.edu](mailto:hongyuesun@uga.edu) with a CV, transcripts, and a short statement of interest. Mention the research thrusts you want to work on.
- **Current UGA undergraduates** can reach out year-round for research opportunities, including First-Year Research Experience projects through the College of Engineering.
- **Visiting scholars and postdocs** should send a CV and research statement describing fit with the lab's current projects.

## Teaching

- **ENGR 8990 - AI-Agents Meet Mechanical Engineering** (UGA, Fall 2025)
- **ENGR 4670 / 6670 - Quality Engineering** (UGA, Fall 2025)
- **ENGR 8990 - Advanced Quality Control** (UGA, Fall 2024)
- **MCHE 4440 - Design and Control of Production Systems** (UGA, Fall 2023 and Fall 2024)

Earlier courses at the University at Buffalo include Statistical Machine Learning for Engineers, Advanced Quality Control, Manufacturing Data Analytics, Statistics for Engineers, and Facility Design and Materials Handling.
</div>
