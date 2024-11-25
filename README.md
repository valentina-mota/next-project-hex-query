# HexQuery: A Tribute to Arcane and Steampunk Culture

HexQuery is a full-stack project celebrating the aesthetics of steampunk and the universe of the animated series *Arcane*. Developed with **Next.js** and **WordPress headless CMS**, it combines a responsive frontend with a scalable backend, offering dynamic content and crafted design.

## Features

### Frontend with Next.js
- **Dynamic Page Generation**:
  - Uses `getStaticPaths` to dynamically generate paths for each post retrieved via GraphQL.
  - Implements `getStaticProps` to fetch individual post data and navigation information (previous and next posts) at build time.
- **Post Navigation**:
  - Dynamically hides the **PREVIOUS** button on the first post and the **NEXT** button on the last post.
  - Buttons link to the `uri` of adjacent posts retrieved from the CMS.
- **CSS Animations**:
  - SVG path animation using `stroke-dashoffset` for homepage elements.
  - Flying raven animated with CSS step animations.
  - Floating and swaying effects for elements like hot air balloons.

### WordPress as a Headless CMS
- **GraphQL Integration**: Content is served via WPGraphQL and API queries.
- **Dynamic Content Management**:
  - Content is queried dynamically using **Apollo Client**.

### Responsive Design
- **Flexible Layout**:
  - Built using media queries for adaptability across devices.
  - Background images are replaced dynamically with different versions optimized for different small screens.

### Deployment
- **WordPress Backend**: Hosted on SiteGround for stability and scalability.
- **Frontend Deployment**: Managed via Netlify, connected to a GitHub repository with Continuous Integration/Continuous Deployment workflows.

### Visual Assets

The images used in HexQuery were created, generated, and edited using:
- **Canva**: for layout design and basic image creation.
- **GIMP**: for advanced photo editing and enhancements.
- **AI Image Generator**: for generating unique visuals inspired by steampunk and Arcane aesthetics.

## Live Demo

Explore the project live at [HexQuery](https://hex-query.netlify.app/)
