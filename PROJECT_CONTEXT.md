# HR Core Website - Project Context

This document provides a comprehensive overview of the **HR Core Website** project. It is designed to be shared with AI assistants to quickly provide context about the project's tech stack, structure, and purpose.

## 📌 Project Overview
The HR Core Website is a modern, highly animated marketing website/landing page for an HRMS (Human Resource Management System) and HR Outsourcing company. The website features a dark-themed aesthetic with vibrant green and teal accents, heavily utilizing smooth animations, 3D elements, and interactive scrolling.

## 🛠 Tech Stack
- **Framework:** Next.js (App Router) v16.3.1
- **Core Libraries:** React v19, ReactDOM v19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `clsx`, `tailwind-merge`
- **Animations:** 
  - Framer Motion (UI transitions, interactive elements)
  - GSAP (Scroll-linked animations, complex sequencing)
  - Lenis (Smooth scrolling)
- **3D Rendering:** `three`, `@react-three/fiber`, `@react-three/drei` (for 3D backgrounds and elements)
- **Icons:** `lucide-react`

## 📂 Directory Structure (Important Files)

The project follows a standard Next.js `src` structure:

### `src/app/`
- **`layout.tsx`**: The root layout, containing global setups.
- **`page.tsx`**: The main landing page combining all the components.
- **`globals.css`**: Global stylesheet including Tailwind directives.

### `src/components/`
This directory contains all the modular sections and UI elements of the website. Key files include:

**Navigation & Footer:**
- `Navbar2.tsx`: The main navigation bar.
- `Footer2.tsx` / `Footer.tsx`: The website footer.
- `Logo.tsx`: The brand logo component.

**Landing Page Sections:**
- `HeroSection2.tsx`: The top animated hero section with floating icons and glowing orbs.
- `AboutUsSection2.tsx`: Section detailing the company's background.
- `WhatWeOffer.tsx`: Grid or list of services provided.
- `HRMSPortalFeatures.tsx` / `PortalShowcase.tsx`: Sections showcasing the HR software features.
- `HROutsourcing.tsx`: Details about outsourcing services.
- `WhyHRCore.tsx`: Value proposition section.
- `Testimonials2.tsx`: Client reviews.
- `ContactSection.tsx`: Contact form and information.
- `CTASection.tsx`: Call-to-action block.

**UI Elements & Layouts:**
- `BentoGrid2.tsx` / `FeaturesGrid2.tsx`: Advanced grid layouts for features.
- `SmoothScroll.tsx`: Wrapper/utility for Lenis smooth scrolling.
- `ThreeBackground.tsx`: A 3D background component using React Three Fiber.
- `EmployeeApp.tsx`, `MoreThanHRMS.tsx`, `KeyFeatures.tsx`, `Integrations2.tsx`: Additional feature blocks.
- `ui/button.tsx`: Reusable button component.

### `src/lib/`
- **`utils.ts`**: Utility functions, typically for merging Tailwind classes (`cn` function using `clsx` and `twMerge`).

## 🎨 Design & Theming
- **Theme:** Dark mode by default (`bg-[#060d10]`).
- **Primary Colors:** Emerald/Green (`#4CAF68`), Teal (`#2DD4BF`), and Lime accents.
- **Aesthetic:** Glassmorphism (blur effects, translucent cards), floating orbs, gradient mesh backgrounds, and noise textures.

## 🚀 Running the Project
```bash
npm install
npm run dev
```
The project runs locally at `http://localhost:3000`.
