# Rahul.dev — 3D Developer Portfolio

An interactive, single-page 3D portfolio built with **React (Vite)**, **Three.js** via **@react-three/fiber** and **@react-three/drei**, animated with **GSAP ScrollTrigger** + **Framer Motion**, styled with **Tailwind CSS**, and smooth-scrolled with **Lenis**.

The whole site feels like a small 3D "world" the visitor scrolls through — a hero planet, orbiting skill nodes, floating project monoliths, a curved experience timeline, and a rocket at the contact scene.

## Quick start

```bash
npm install
npm run dev
```

Then open <http://localhost:5173>.

## Build & deploy

```bash
npm run build     # outputs to dist/
npm run preview   # serve the production build locally
```

Deployable as a static site on **Vercel**, **Netlify**, **Cloudflare Pages**, GitHub Pages, etc. No server code required.

- **Vercel**: `vercel` in the project root — the default Vite preset works.
- **Netlify**: build command `npm run build`, publish directory `dist`.

## Project structure

```
src/
├─ App.jsx                 # top-level shell (loader, cursor, canvas, sections)
├─ main.jsx                # React entry
├─ index.css               # Tailwind + global styles
├─ data/
│  └─ content.js           # all portfolio content (edit this to customize)
├─ hooks/
│  ├─ useLenis.js          # smooth scroll
│  └─ useMouseParallax.js  # normalized mouse position
├─ components/
│  ├─ Loader.jsx           # progress-bar loading screen (drei useProgress)
│  ├─ CustomCursor.jsx     # dot + trailing ring cursor
│  ├─ Navbar.jsx           # sticky glass nav
│  ├─ Footer.jsx
│  └─ WebGLFallback.jsx    # static fallback when WebGL isn't available
├─ sections/
│  ├─ Hero.jsx
│  ├─ About.jsx
│  ├─ Skills.jsx
│  ├─ Projects.jsx
│  ├─ Experience.jsx
│  └─ Contact.jsx
└─ scenes/
   ├─ SceneCanvas.jsx      # fixed R3F canvas + postprocessing
   ├─ ScrollWorld.jsx      # scroll-driven camera + section anchors
   ├─ HeroPlanet.jsx
   ├─ SkillOrbitors.jsx
   ├─ ProjectMonoliths.jsx
   ├─ TimelineNodes.jsx
   └─ ContactRocket.jsx
```

## Customize your content

Everything visible on the site (name, tagline, skills, projects, experience, socials) lives in [`src/data/content.js`](src/data/content.js). Edit that one file to make it yours.

## How the 3D + scroll works

- `SceneCanvas.jsx` renders a single fixed, full-viewport `<Canvas>` behind all HTML sections. Adaptive DPR + adaptive events keep the frame rate smooth.
- `ScrollWorld.jsx` lays out all the 3D content along the world's `-Z` axis (one anchor per section) and uses a **GSAP ScrollTrigger** timeline to animate a `camTarget` vector. Each frame, `useFrame` smoothly lerps the real camera toward it and adds subtle **mouse parallax**.
- Each section's DOM lives above the canvas with `z-index: 10`, so the 3D scene reads as an animated background that reacts to scroll.
- Postprocessing (Bloom + Vignette) is enabled on desktop and disabled on small screens for performance.

## Adding your own GLTF models

1. Drop your `.glb` / `.gltf` file into `public/models/`, e.g. `public/models/laptop.glb`.
2. Import `useGLTF` from drei and load it with a path relative to `public/`:

   ```jsx
   import { useGLTF } from '@react-three/drei';

   function Laptop(props) {
     const { scene } = useGLTF('/models/laptop.glb');
     return <primitive object={scene} {...props} />;
   }
   useGLTF.preload('/models/laptop.glb');
   ```

3. Replace one of the primitive scene components (e.g. inside `ScrollWorld.jsx` where `HeroPlanet` is rendered) with your new component.
4. If your model is huge, run it through [gltf-transform](https://gltf-transform.dev/) / [meshopt](https://meshoptimizer.org/) or [Blender's Draco compression](https://docs.blender.org/manual/en/latest/addons/import_export/scene_gltf2.html) to keep loading fast.

Tip: `npx gltfjsx public/models/laptop.glb -o src/scenes/Laptop.jsx` will auto-generate a typed R3F component from any GLTF.

## Ambient sound (optional)

The site ships without sound by default. To add a toggle, place an mp3 in `public/audio/`, create an `<audio>` element in `App.jsx`, and gate playback behind a button click (browsers block autoplay).

## Accessibility & performance notes

- **Custom cursor** is enabled only on `(hover: hover) and (pointer: fine)` devices.
- **WebGL fallback**: if the browser can't create a WebGL context, users see a clean static page (`WebGLFallback.jsx`).
- Star count and postprocessing scale down on `< 768px` viewports.
- All animations respect `prefers-reduced-motion` naturally (Framer Motion honors it for `whileInView`-style animations by default when the OS setting is on).

## Tech

- React 18 + Vite 5
- three, @react-three/fiber, @react-three/drei, @react-three/postprocessing
- gsap (ScrollTrigger)
- framer-motion
- lenis
- tailwindcss 3

Enjoy — and make it yours!
