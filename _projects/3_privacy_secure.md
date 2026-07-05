---
layout: page
title: Safe and Secure Robotic Inspection
description: Runtime monitoring and multi-modal out-of-distribution detection for safer reinforcement-learning-based robotic inspection in manufacturing.
importance: 4
category: research
img: /assets/img/research/Safe and Secure Robotics Inspection/Nitesh SMOOD.png
link: https://niteshsilwal01.github.io/SMOOD/
---

## Overview

This topic focuses on robotic inspection systems that remain safe and reliable when real deployment conditions differ from training conditions. Reinforcement learning can generate flexible inspection motions for dimensional verification, surface inspection, and quality assurance, but learned policies may fail silently when perception is disturbed, the environment changes, or unexpected interactions occur. Our SMOOD framework adds a runtime safety layer through multi-modal out-of-distribution detection. It monitors both proprioceptive dynamics and semantic visual representations from a vision-language model, then fuses distributional distance signals to decide when policy execution should be mediated. Evaluated on a UR5e inspection platform, this work supports robotic inspection systems that can detect abnormal conditions early and reduce the risk of unsafe behavior during manufacturing operations.
