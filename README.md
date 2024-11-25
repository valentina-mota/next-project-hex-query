## HexQuery: A Tribute to Arcane and Steampunk Culture

HexQuery is a full-stack project developed with **Next.js** and **WordPress headless CMS**, combining a highly responsive frontend with a scalable backend. The website explores themes of steampunk aesthetics and the animated series *Arcane*, offering dynamic content and a carefully crafted design.

### Technical Features

- **Frontend with Next.js**: 
  - Dynamic page generation using [Dynamic Routes](https://nextjs.org/docs/routing/dynamic-routes) and static rendering with `getStaticProps` and `getStaticPaths`.
  - Advanced **CSS animations** for an engaging user experience:
    - The **HexQuery** animated element on the homepage uses an **SVG path animation** leveraging the `stroke-dashoffset` property.
    - Animated sprites to represent a flying raven, built with the CSS **step animation** technique.
    - Floating and swaying animations for elements like hot air balloons.

- **WordPress Headless CMS**:
  - Integration of **WPGraphQL** to expose content via GraphQL APIs.
  - Initial data import using a `.xml` file exported from WordPress.
  - Dynamic content querying with Apollo Client.

- **Advanced Post Navigation**:
  - **PREVIOUS** and **NEXT** buttons added for seamless navigation between posts, based on the post order retrieved from the CMS.
  - Implemented logic to:
    - Hide the **PREVIOUS** button on the first post.
    - Hide the **NEXT** button on the last post.
    - Dynamically link the buttons to the `uri` of the next or previous post.

- **Interactive Navbar**:
  - A hamburger icon with CSS animations allows opening and closing of the navigation menu.
  - The menu is managed using a **hidden checkbox-based system**, avoiding additional JavaScript complexity.

- **Responsive Design**:
  - Layout created with **clamp()** units and **media queries** to adapt to various screen sizes.
  - Dynamic removal of background images on smaller devices for optimized performance.

- **Deployment**:
  - The WordPress backend is hosted on **SiteGround** to ensure stability and scalability.
  - The frontend is deployed via **Netlify**, connected to a GitHub repository for continuous updates and streamlined management.

### Conclusion

HexQuery showcases advanced full-stack development skills, combining modern technologies like **Next.js**, **WordPress headless CMS**, and **Apollo Client** with visually appealing design and dynamic functionalities. Each post is enriched with a dedicated layout, thematic animations, and intuitive navigation buttons, creating a seamless and engaging user experience.