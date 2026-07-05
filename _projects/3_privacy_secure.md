---
layout: page
title: Safe and Secure Robotic Inspection
description: SMOOD adds multi-modal runtime out-of-distribution detection to reinforcement-learning robotic inspection for safer deployment.
importance: 3
category: research
img: /assets/img/research/Safe and Secure Robotics Inspection/Nitesh SMOOD.png
link: https://niteshsilwal01.github.io/SMOOD/
---

## Overview

This topic focuses on robotic inspection systems that can operate safely when deployment conditions differ from training conditions. Reinforcement learning can generate flexible inspection motions for dimensional verification, surface inspection, and quality assurance, but learned policies may fail silently under perceptual disturbances, environmental changes, or unexpected interactions. Our SMOOD framework adds runtime multi-modal out-of-distribution detection by monitoring both proprioceptive dynamics and semantic visual representations from a vision-language model. Evaluated on a UR5e inspection platform, the approach detects distribution shifts earlier than single-modality baselines and mediates policy execution before unsafe behavior escalates.
