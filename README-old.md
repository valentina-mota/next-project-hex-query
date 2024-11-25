# HexQuery

HexQuery is a **fullstack project** that combines **Next.js** for the frontend and **WordPress** (with WPGraphQL and WordPress Importer plugins) for the backend. This project explores a seamless integration between a **headless CMS** and a React-based framework, offering a fast, scalable, and modern web experience. It focuses on the themes of the *Arcane* animated series and **steampunk culture**, featuring rich visual elements and animations.

## Features

### Frontend
- **Framework:** Built using **Next.js** for its server-side rendering, static site generation capabilities, and performance optimization.
- **Apollo Client:** Utilized for fetching and managing the data from the WPGraphQL API efficiently.
- **CSS Animations:**
  - **SVG Animation:** The dynamic "HexQuery" title is animated with a `stroke-dashoffset` technique to create a hand-drawn effect.
  - **Raven Animation:** The raven sprite is animated using the CSS `steps()` technique on a PNG sprite sheet to simulate smooth flight.
  - **Zoom and Fade Animations:** Key elements like illustrations and buttons use zoom-out and fade-in effects for engaging transitions.
  - **Balloon Motion:** Balloons float and sway with custom keyframe animations.
- **Responsive Design:** Implemented using CSS Grid and `clamp()` for font sizes, providing adaptability across devices. Custom breakpoints ensure a consistent experience on devices ranging from desktops to mobile.

### Backend
- **Headless CMS:** A WordPress backend serves content via the WPGraphQL API, allowing a clear separation between the content management and presentation layers.
- **Custom Content Management:** Posts are imported from an XML file and enriched with images designed using **Canva.com** and **DeepAI.org** for unique backgrounds.
- **Deployment:** 
  - **Frontend:** Deployed on **Netlify**, connected to a GitHub repository for continuous integration and deployment.
  - **Backend:** Hosted on **SiteGround**, ensuring the WordPress environment is accessible for API calls.

## Visual Identity
- All imagery and animations were created with a mix of tools, including:
  - **Canva.com** for visual elements and illustrations.
  - **DeepAI.org** for unique artistic enhancements.
- Custom animations bring the theme to life, combining vibrant steampunk aesthetics with dynamic storytelling elements inspired by *Arcane*.

## Technical Highlights
This project is a **fullstack web solution** demonstrating:
- Integration of **React-based frameworks** with **headless CMS**.
- Use of **GraphQL APIs** for optimized data fetching.
- Advanced CSS techniques for animation (`steps()`, `keyframes`, `stroke-dashoffset`).
- Fully **responsive design** tailored for a wide range of devices.
- Deployment using **modern hosting solutions** (Netlify and SiteGround).

HexQuery encapsulates the potential of a **headless architecture**, combining a visually engaging frontend with a robust and flexible backend.
