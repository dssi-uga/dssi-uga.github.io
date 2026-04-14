---
layout: page
title: Projects
permalink: /projects/
description: Our Research Projects
nav: True
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
  <section class="projects-intro mb-5">
    <p class="lead">
      Our research and development work spans the design of advanced manufacturing ecosystems, intelligent digital infrastructure, and trustworthy cyber-physical systems.
    </p>
    <div class="project-summary">
      <h2>Featured Project Areas</h2>
      <ul>
        <li><strong>Future Distributed Manufacturing Systems:</strong> Joint development of cyber-coordinated, multi-stage manufacturing architectures that enable real-time synchronization across distributed production systems.</li>
        <li><strong>Digital Twins and Cyber–Physical Testbeds:</strong> Design and deployment of high-fidelity digital twins for monitoring, simulation, validation, and optimization of manufacturing processes.</li>
        <li><strong>AI-Enabled Smart Manufacturing:</strong> Development of machine learning, embedded intelligence, and IoT technologies for predictive modeling, fault detection, and adaptive process control.</li>
        <li><strong>Additive and Sustainable Manufacturing:</strong> Development of next-generation additive manufacturing and sustainable production workflows, including process monitoring, material behavior modeling, and quality assurance.</li>
        <li><strong>Ethical and Secure Manufacturing:</strong> Development of privacy-preserving, trustworthy, and resilient manufacturing systems that embed legality, accountability, and security across digital design, cyber–physical production, and AI-driven decision-making workflows.</li>
      </ul>
    </div>
  </section>
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
