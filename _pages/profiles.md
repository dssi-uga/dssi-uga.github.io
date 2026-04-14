---
layout: profiles
permalink: /people/
title: People
description: Meet the Members of our Lab
nav: true
nav_order: 1
---

<!-- Principal Investigator Section -->
<section class="pi-section mb-5">
  <div class="row align-items-center">
    <div class="col-lg-4 text-center mb-4 mb-lg-0">
      {% assign profile_image_path = 'Sun.jpg' | prepend: 'assets/img/' %}
      <img src="{{ profile_image_path | relative_url }}" alt="Dr. Hongyue Sun" class="img-fluid rounded shadow" style="max-width: 300px;">
    </div>
    <div class="col-lg-8">
      <h2 class="mb-3">Principal Investigator</h2>
      <h3 class="text-primary mb-3">Dr. Hongyue Sun</h3>
      <p class="lead mb-3">Associate Professor, Mechanical Engineering<br>Director, Data Science and System Informatics (DSSI) Lab</p>

      <div class="pi-info mb-4">
        <p><strong>Education:</strong></p>
        <ul class="mb-3">
          <li>Ph.D. in Industrial Engineering, Virginia Tech (2017)</li>
          <li>M.S. in Statistics, Virginia Tech (2015)</li>
          <li>B.S. in Mechanical Engineering, Beijing Institute of Technology (2012)</li>
        </ul>

        <p><strong>Previous Position:</strong><br>
        Assistant Professor, Industrial Engineering, University at Buffalo</p>

        <p><strong>Research Interests:</strong><br>
        Data analytics and artificial intelligence in advanced manufacturing, occupational safety, and healthcare systems</p>

        <p><strong>Awards & Recognition:</strong><br>
        Best paper awards from INFORMS and IISE, Outstanding Young Manufacturing Engineer Award from SME</p>

        <p><strong>Professional Memberships:</strong><br>
        IISE, INFORMS, IEEE, ASME</p>

        <p><strong>Funding Support:</strong><br>
        NSF, NIOSH, U.S. Navy, MxD</p>
      </div>

      <div class="contact-info">
        <h5>Contact Information</h5>
        <p><strong>Email:</strong> <a href="mailto:hongyuesun@uga.edu">hongyuesun@uga.edu</a></p>
        <p><strong>Office:</strong> 1040B I-STEM Complex, Bldg 1</p>
        <p><strong>Address:</strong> 302 East Campus Road, Athens, GA 30602</p>
      </div>
    </div>
  </div>
</section>

<style>
.pi-section {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 3rem 0;
  border-radius: 10px;
  margin-bottom: 3rem;
}

.pi-section img {
  border: 3px solid #fff;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.pi-section h2 {
  color: var(--global-theme-color, #007bff);
  font-weight: 600;
  border-bottom: 2px solid var(--global-theme-color, #007bff);
  padding-bottom: 0.5rem;
  display: inline-block;
}

.pi-section h3 {
  color: var(--global-text-color, #333);
  font-weight: 500;
}

.pi-section .lead {
  color: var(--global-text-color-light, #666);
  font-size: 1.1rem;
  line-height: 1.6;
}

.pi-info {
  background: rgba(255,255,255,0.8);
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 2rem;
}

.pi-info ul {
  padding-left: 1.2rem;
}

.pi-info li {
  margin-bottom: 0.5rem;
}

.contact-info {
  background: rgba(255,255,255,0.9);
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid var(--global-theme-color, #007bff);
}

.contact-info h5 {
  color: var(--global-theme-color, #007bff);
  margin-bottom: 1rem;
}

.contact-info a {
  color: var(--global-theme-color, #007bff);
  text-decoration: none;
}

.contact-info a:hover {
  text-decoration: underline;
}

.section-title {
  color: var(--global-theme-color, #007bff);
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 3px;
  background: var(--global-theme-color, #007bff);
  margin: 0.5rem auto;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .pi-section {
    padding: 2rem 1rem;
  }

  .pi-section .row {
    text-align: center;
  }

  .pi-section .col-lg-4 {
    margin-bottom: 2rem;
  }
}
</style>

<!-- Lab Members Section -->
<h2 class="section-title mb-4">Lab Members</h2>

profiles:
  - align: left
    image: Minsung.jpg
    content: profile_minsung_kang.md
    image_circular: false
    more_info: >
      <p>Minsung Kang (PhD Student, Mechanical Engineering)</p>
      <p>Email: mkang@uga.edu</p>
  - align: right
    image: Nitesh.jpg
    content: profile_nitesh_silwal.md
    image_circular: false
    more_info: >
      <p>Nitesh Silwal (PhD Student, Mechanical Engineering)</p>
      <p>Email: NiteshSilwal@uga.edu</p>
  - align: left
    image: Nehalya.jpg
    content: profile_nehalya_sivakumar.md
    image_circular: false
    more_info: >
      <p>Nehalya Sivakumar (Undergraduate Researcher, Biochemical Engineering)</p>
      <p>Email: ns91682@uga.edu</p>
  - align: right
    image: Vithaal.jpeg
    content: profile_vithaal_dhamodharan.md
    image_circular: false
    more_info: >
      <p>Vithaal Dhamodharan (Undergraduate Researcher, Computer Systems Engineering)</p>
      <p>Email: vithaaldhamo@gmail.com</p>
  - align: left
    image: Aarush.jpeg
    content: profile_aarush_mathad.md
    image_circular: false
    more_info: >
      <p>Aarush Mathad (Undergraduate Researcher, Franklin College of Arts and Sciences)</p>
      <p>Email: aarushmathad1@gmail.com</p>
  - align: right
    image: Adam.jpg
    content: profile_adam_tayara.md
    image_circular: false
    more_info: >
      <p>Adam M Tayara (Undergraduate Researcher, Mechanical Engineering)</p>
      <p>Email: adamtayara805@gmail.com</p>
  - align: left
    image: Dawson.jpg
    content: profile_dawson_gulasa.md
    image_circular: false
    more_info: >
      <p>Dawson Gulasa (Undergraduate Researcher, CSE)</p>
      <p>Email: djg58388@uga.edu</p>
  - align: right
    image: Bidhek Khatiwada.jpeg
    content: profile_bidhek_khatiwada.md
    image_circular: false
    more_info: >
      <p>Bidhek Khatiwada (PhD Student, ECAM)</p>
      <p>Email: Bidhek.Khatiwada@uga.edu</p>
  - align: left
    image: Chenyu Xu.jpg
    content: profile_chenyu_xu.md
    image_circular: false
    more_info: >
      <p>Chenyu Xu (PhD Student, School of Electrical Engineering & Computing)</p>
      <p>Email: cyxu0805@gmail.com</p>
  - align: right
    image: Kadin Relefourd.jpg
    content: profile_kadin_relefourd.md
    image_circular: false
    more_info: >
      <p>Kadin Relefourd (Undergraduate Researcher, School of Computing)</p>
      <p>Email: kjr99204@uga.edu</p>
  - align: left
    image: Owen.jpg
    content: profile_owen_connell.md
    image_circular: false
    more_info: >
      <p>Owen Connell (Lab Alumni, College of Engineering)</p>
      <p>Email: opconnell@gmail.com</p>
  - align: right
    image: Wuyang.jpg
    content: profile_wuyang_chen.md
    image_circular: false
    more_info: >
      <p>Wuyang Chen (PhD Student, ECE)</p>
      <p>Email: wc20592@uga.edu</p>
  - align: left
    image: Zhengyao.jpg
    content: profile_zhengyao_liew.md
    image_circular: false
    more_info: >
      <p>Zhengyao Liew (Undergraduate Researcher, School of Computing & School of Engineering)</p>
      <p>Email: zyliew7@gmail.com</p>
  - align: right
    image: John Bodamer.jpeg
    content: profile_john_bodamer.md
    image_circular: false
    more_info: >
      <p>John Bodamer (Undergraduate Researcher, Electrical Engineering)</p>
      <p>Email: John.Bodamer@uga.edu</p>
  - align: left
    image: John_Braswell.jpg
    content: profile_john_braswell.md
    image_circular: false
    more_info: >
      <p>John Braswell (Undergraduate Researcher, College of Engineering)</p>
      <p>Email: jhb60560@uga.edu</p>
---
