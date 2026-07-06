---
layout: page
title: News
permalink: /news/
description: Recent MERIT Lab awards, grants, papers, and milestones.
nav: true
nav_order: 4
---

<style>
  .news-page-shell {
    --dssi-line: rgba(23, 23, 23, 0.12);
    --dssi-muted: #5c6670;
  }

  html[data-theme="dark"] .news-page-shell {
    --dssi-line: rgba(255, 255, 255, 0.14);
    --dssi-muted: #c5ccd3;
  }

  .news-hero {
    position: relative;
    overflow: hidden;
    margin-bottom: 2rem;
    padding: 2rem;
    border: 1px solid var(--dssi-line);
    border-radius: 8px;
    background:
      linear-gradient(120deg, rgba(186, 12, 47, 0.16), transparent 42%),
      url("{{ '/assets/img/gallery/lab-equipment-6.jpg' | relative_url }}") center / cover;
    color: #ffffff;
  }

  .news-hero::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.48);
  }

  .news-hero > * {
    position: relative;
    max-width: 680px;
  }

  .news-hero h2 {
    margin: 0 0 0.5rem;
    color: #ffffff;
    font-size: clamp(1.8rem, 4vw, 2.7rem);
    font-weight: 800;
  }

  .news-hero p {
    margin: 0;
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.05rem;
    line-height: 1.55;
  }

  .news-page-shell .news {
    padding: 1rem;
    border: 1px solid var(--dssi-line);
    border-radius: 8px;
    background: var(--global-card-bg-color);
  }

  .news-page-shell .news-slider-container {
    height: min(62vh, 620px);
  }
</style>

<div class="news-page-shell">
  <section class="news-hero">
    <h2>Lab Momentum</h2>
    <p>Awards, grants, papers, and milestones from the MERIT Lab research community.</p>
  </section>

  {% include news.liquid animate=true %}
</div>
