---
layout: page
title: research
permalink: /projects/
description: Trustworthy AI for advanced manufacturing — research thrusts and funded projects.
nav: true
nav_order: 3
display_categories: [research]
horizontal: false
---

The DSSI Lab's research turns manufacturing data into decisions that are **accurate, uncertainty-aware, private, and safe enough to deploy**. Our work spans five connected thrusts and an emerging frontier in quantum-safe, post-quantum-secure manufacturing.

## Funded projects

**Current**

| Project | Agency · Role | Award | Period |
| :--- | :--- | :--- | :--- |
| STREAM: cyber-coordinated framework for multi-stage distributed future manufacturing | NSF FMRG · PI | \$2.33M | 2021–26 |
| Hybrid cyber-physical testbed for manufacturing security (living lab) | NSF CICI:RSSD · Co-PI | \$600K | 2026–29 |
| Ethical Data Science & Digital Twin for active, evidence-based learning | NSF IUSE · PI | \$211K | 2025–28 |
| Ethical Industry 4.0: legality, integrity & accountability | NSF · PI | \$566K | 2023–26 |
| Infrastructure cybersecurity training for the advanced-manufacturing workforce | NSF CyberTraining · Co-PI | \$500K | 2023–26 |
| Climate-smart manufacturing | Honda / Honda USA Foundation · PI | \$100K | 2025–26 |
| Advanced manufacturing for pecan shelling | USDA · Co-PI | \$3.72M | 2022–26 |

**Completed (selected)**

| Project | Agency · Role | Award | Period |
| :--- | :--- | :--- | :--- |
| Proactive worker safety for Industry 4.0 using AI | MxD / Be Global Safety · Co-PI | \$906K | 2024–25 |
| MB.CI: Model-Based Point Cloud Inspection (SBIR Phase I) | U.S. Navy (via GTC) · UGA PI | — | 2023–24 |
| Reliability modeling of shoulder fatigue & recovery for warehouse operators | NIOSH · Co-PI | \$361K | 2020–23 |
| Testing the Soteria worker safety system | GE Global Research · Co-PI | \$32K | 2020 |

## Research thrusts

<!-- ===== al-folio standard projects grid (renders cards from _projects/) ===== -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  {% for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-2">
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
  {% assign sorted_projects = site.projects | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
{% endif %}
</div>
