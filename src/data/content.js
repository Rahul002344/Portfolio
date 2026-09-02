// Central place to edit portfolio content.
// Replace anything here with your own info — the site updates automatically.

export const profile = {
  name: 'Rahul Kumar Dutta',
  shortName: 'Rahul Kumar Dutta',
  role: 'AI/ML Engineer & Full-Stack Developer',
  roles: [
    'AI/ML Engineer',
    'Full-Stack Developer',
    'Computer Vision Researcher',
    'Creative Technologist',
  ],
  tagline:
    'Building intelligent, interactive experiences at the intersection of machine learning and the modern web.',
  email: 'rahuldutta1237@gmail.com',
  phone: '+91 9507178724',
  location: 'Bangalore, India',
  photo: '/rahul.jpg', // put your headshot at: public/rahul.jpg
  socials: {
    github: 'https://github.com/Rahul002344',
    linkedin: 'https://linkedin.com/in/rahul-kumar-dutta-334b33259',
    twitter: 'https://twitter.com/',
  },
  resumeUrl: '#',
};

export const about = {
  headline: 'Turning ideas into intelligent products.',
  paragraphs: [
    "I'm an AI/ML Engineer and full-stack developer who ships production-ready software — from real-time computer vision systems to interactive, delightful web experiences. I hold a B.Tech in CSE (AI & ML) with a 9.08 CGPA.",
    'My published research on YOLOv8-based traffic density estimation was presented at the 2025 IEEE CSNT conference. When I’m not training models, I’m building fast, immersive frontends.',
    'I care deeply about craft: thoughtful architecture, clean code, and interfaces that feel alive.',
  ],
  facts: [
    { label: 'Experience', value: '3+ yrs' },
    { label: 'Projects', value: '10+' },
    { label: 'Publications', value: 'IEEE 2025' },
    { label: 'CGPA', value: '9.08 / 10' },
  ],
};

export const services = [
  {
    title: 'AI / ML Engineering',
    description:
      'End-to-end machine learning pipelines — from dataset curation to real-time deployment, with a focus on computer vision and deep learning.',
    icon: '🧠',
    accent: '#7c5cff',
  },
  {
    title: 'Full-Stack Web',
    description:
      'Polished, production-grade React apps backed by Node, with a strong focus on performance, DX, and accessibility.',
    icon: '⚡',
    accent: '#22d3ee',
  },
  {
    title: 'Interactive 3D / WebGL',
    description:
      'Immersive marketing sites, product configurators, and dashboards built with Three.js and react-three-fiber.',
    icon: '🌐',
    accent: '#a855f7',
  },
  {
    title: 'Research & Prototyping',
    description:
      'From paper to prototype: rapid experimentation, benchmarking and turning research ideas into working demos.',
    icon: '🔬',
    accent: '#f472b6',
  },
];

export const processSteps = [
  {
    step: '01',
    title: 'Discover',
    text: 'Understand the problem, users and constraints. Nothing gets built without a crisp brief.',
  },
  {
    step: '02',
    title: 'Design',
    text: 'Sketch architecture, data flow and UI. Pick the smallest set of tools that solves it well.',
  },
  {
    step: '03',
    title: 'Build',
    text: 'Ship in small, tested increments. Instrument everything so decisions stay data-driven.',
  },
  {
    step: '04',
    title: 'Refine',
    text: 'Polish motion, performance and details until it feels effortless to use.',
  },
];

export const testimonials = [
  {
    quote:
      'Rahul’s attention to detail and speed of execution is rare. His YOLOv8 traffic system just… worked, on day one.',
    author: 'Faculty Advisor',
    role: 'REVA University',
  },
  {
    quote:
      'A calm, senior mindset. Ships production-quality code and communicates clearly.',
    author: 'Peer Reviewer',
    role: 'IEEE CSNT 2025',
  },
  {
    quote:
      'Rare combination of research depth and product taste — his frontends feel as considered as his models.',
    author: 'Hackathon Mentor',
    role: 'Industry',
  },
];

export const skills = [
  { name: 'Python', level: 95, color: '#3776ab' },
  { name: 'PyTorch', level: 88, color: '#ee4c2c' },
  { name: 'TensorFlow', level: 82, color: '#ff6f00' },
  { name: 'React', level: 90, color: '#61dafb' },
  { name: 'Three.js', level: 78, color: '#ffffff' },
  { name: 'Node.js', level: 82, color: '#68a063' },
  { name: 'Java', level: 78, color: '#f89820' },
  { name: 'C++', level: 80, color: '#00599c' },
  { name: 'SQL', level: 88, color: '#f29111' },
  { name: 'OpenCV', level: 90, color: '#5c3ee8' },
  { name: 'YOLO', level: 92, color: '#00ffcc' },
  { name: 'Git', level: 90, color: '#f34f29' },
];

export const marqueeStack = [
  'Python', 'PyTorch', 'TensorFlow', 'YOLOv8', 'OpenCV', 'FastAPI',
  'React', 'Three.js', 'GSAP', 'Tailwind', 'Node.js', 'PostgreSQL',
  'Docker', 'AWS', 'Redis', 'Kafka',
];

export const projects = [
  {
    title: 'Real-Time Traffic Detection System',
    description:
      'A YOLOv8 + OpenCV real-time system that classifies vehicles and computes density zones (green/orange/red) from live video feeds using an FPS-aware dynamic gridding mechanism.',
    tech: ['Python', 'YOLOv8', 'OpenCV', 'PyTorch'],
    image:
      'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?auto=format&fit=crop&w=1200&q=60',
    live: '',
    repo: 'https://github.com/Rahul002344/GUI',
    accent: '#7c5cff',
  },
  {
    title: 'V2X Federated Traffic Intelligence',
    description:
      'Distributed traffic architecture where each junction is an intelligent sensing node. Federated learning aggregates insights across junctions without sharing raw video, enabling adaptive signal control.',
    tech: ['Python', 'PyTorch', 'Federated Learning', 'YOLOv8'],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=60',
    live: '',
    repo: 'https://github.com/Rahul002344/V2X',
    accent: '#22d3ee',
  },
  {
    title: '3D Developer Portfolio',
    description:
      'This site — an interactive 3D world built with React, @react-three/fiber, GSAP ScrollTrigger and Tailwind CSS, featuring scroll-driven camera paths and a custom cursor.',
    tech: ['React', 'Three.js', 'GSAP', 'Tailwind'],
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=1200&q=60',
    live: '',
    repo: 'https://github.com/Rahul002344',
    accent: '#a855f7',
  },
  {
    title: 'GenAI Study Companion',
    description:
      'A retrieval-augmented chatbot that turns lecture PDFs into interactive Q&A, with citation-aware answers and vector search across notes.',
    tech: ['Node.js', 'React', 'LLM', 'Vector DB'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=60',
    live: '',
    repo: 'https://github.com/Rahul002344',
    accent: '#22d3ee',
  },
];

export const experience = [
  {
    role: 'AI/ML Engineer — Research Author',
    org: 'IEEE CSNT 2025 · REVA University',
    dates: '2024 – 2025',
    impact:
      'Published "Efficient Traffic Density Calculation for Diverse Road Traffic using YOLOv8 Algorithm" with FPS-aware dynamic grid segmentation.',
  },
  {
    role: 'Machine Learning Engineer',
    org: 'Independent / Project Work',
    dates: '2024',
    impact:
      'Built end-to-end computer vision pipelines: dataset curation, training, benchmarking and real-time deployment on edge hardware.',
  },
  {
    role: 'Full-Stack Engineer — Side Projects',
    org: 'Personal',
    dates: '2023 – Present',
    impact:
      'Shipped multiple React + Node apps exploring 3D web, GenAI, federated systems and design systems.',
  },
  {
    role: 'B.Tech CSE (AI & ML)',
    org: 'REVA University, Bangalore',
    dates: '2022 – 2026',
    impact: 'CGPA 9.08 / 10 — top of cohort in AI & Data Structures.',
  },
];

export const playground = [
  { title: 'YOLOv8 density heatmap demo', tag: 'Computer Vision' },
  { title: 'GSAP camera-path playground', tag: 'Motion' },
  { title: 'Shader-warped avatar card', tag: 'WebGL' },
  { title: 'Federated learning simulator', tag: 'ML Systems' },
  { title: 'Voice-controlled 3D scene', tag: 'Interaction' },
  { title: 'AI-generated album covers', tag: 'GenAI' },
];
