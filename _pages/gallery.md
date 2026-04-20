---
layout: page
title: Gallery
permalink: /gallery/
description: Photos and images from the DSSI Lab
nav: true
nav_order: 6
---

<!-- _pages/gallery.md -->
<div class="gallery">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <p class="lead text-center mb-5">
          Explore photos and images from our lab activities, research equipment, team events, and more.
        </p>
      </div>
    </div>

    <!-- Lab Equipment Section -->
    <section class="gallery-section mb-5">
      <h2 class="section-title">Lab Equipment & Facilities</h2>
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        <div class="col">
          <div class="gallery-item">
            {% include figure.liquid
              path="assets/img/gallery/lab-equipment-1.jpg"
              title="Advanced Manufacturing Equipment"
              class="img-fluid rounded shadow-sm"
              zoomable=true
            %}
          </div>
        </div>
        <div class="col">
          <div class="gallery-item">
            {% include figure.liquid
              path="assets/img/gallery/lab-equipment-2.jpg"
              title="Digital Twin Testbed"
              class="img-fluid rounded shadow-sm"
              zoomable=true
            %}
          </div>
        </div>
        <div class="col">
          <div class="gallery-item">
            {% include figure.liquid
              path="assets/img/gallery/lab-equipment-3.jpg"
              title="IoT Sensor Network"
              class="img-fluid rounded shadow-sm"
              zoomable=true
            %}
          </div>
        </div>
        <div class="col">
          <div class="gallery-item">
            {% include figure.liquid
              path="assets/img/gallery/lab-equipment-4.jpg"
              title="IoT Sensor Network"
              class="img-fluid rounded shadow-sm"
              zoomable=true
            %}
          </div>
        </div>
        <div class="col">
          <div class="gallery-item">
            {% include figure.liquid
              path="assets/img/gallery/lab-equipment-5.jpg"
              title="IoT Sensor Network"
              class="img-fluid rounded shadow-sm"
              zoomable=true
            %}
          </div>
        </div>
        <div class="col">
          <div class="gallery-item">
            {% include figure.liquid
              path="assets/img/gallery/lab-equipment-6.jpg"
              title="IoT Sensor Network"
              class="img-fluid rounded shadow-sm"
              zoomable=true
            %}
          </div>
        </div>
      </div>
    </section>

<style>
.gallery-section {
  margin-bottom: 4rem;
}

.section-title {
  color: var(--global-theme-color);
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 50px;
  height: 3px;
  background: var(--global-theme-color);
  margin: 0.5rem auto;
  border-radius: 2px;
}

.gallery-item {
  transition: transform 0.3s ease;
  margin-bottom: 1rem;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-caption {
  padding: 1rem 0;
  text-align: center;
}

.gallery-caption h5 {
  color: var(--global-text-color);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.gallery-caption p {
  color: var(--global-text-color-light);
  font-size: 0.9rem;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .gallery-section h2 {
    font-size: 1.5rem;
  }

  .row-cols-md-2 .col,
  .row-cols-lg-3 .col,
  .row-cols-lg-4 .col {
    margin-bottom: 2rem;
  }
}
</style>