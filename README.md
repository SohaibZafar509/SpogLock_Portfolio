# SpogLock Labs Portfolio

Static HTML portfolio website based on a creative agency template. There is no framework or package manifest in this repo; pages can be opened directly in a browser, and shared assets are loaded from `assets/`.

## Root Pages

- `index.html` - main homepage. Currently the primary SpogLock Labs landing page.
- `about-creative-light.html` - about/company page.
- `service-3-light.html` - services page.
- `portfolio-col-4-light.html` - portfolio grid page.
- `portfolio-details-light.html` - standard portfolio detail page.
- `portfolio-details-creative-light.html` - creative portfolio detail variant.
- `portfolio-details-gallery-light.html` - gallery-style portfolio detail variant.
- `portfolio-horizontal.html` - horizontal portfolio layout.
- `portfolio-masonary-light.html` - masonry portfolio layout.
- `portfolio-showcase-light.html` - showcase portfolio layout.
- `portfolio-slider-elegant-light.html` - slider-based portfolio layout.
- `blog-grid-light.html` - blog listing page.
- `pricing-light.html` - pricing page.
- `team-light.html` - team page.
- `faq-light.html` - FAQ page.
- `contact-us-light.html` - contact page.
- `parallax-carousel-light.html` - parallax carousel/demo page.

## Assets

- `assets/css/` - compiled CSS used by the HTML files.
  - `main.css` is the main site stylesheet.
  - `bootstrap.css`, `swiper-bundle.css`, `magnific-popup.css`, `font-awesome-pro.css`, and `spacing.css` are supporting/vendor styles.
- `assets/scss/` - Sass source for the theme.
  - `main.scss` forwards `theme`, `components`, and `layout`.
  - `components/` contains reusable UI styling such as buttons, cursor, preloader, offcanvas, search, and section titles.
  - `layout/` contains page and section styling: header, footer, menu, blog, portfolio, service, contact, pricing, team, FAQ, etc.
  - `theme/` and `utils/` contain shared variables, colors, typography, mixins, breakpoints, root values, and common theme rules.
- `assets/js/` - JavaScript libraries and site behavior.
  - `main.js` is the primary behavior file for preloaders, menus, sticky header, scroll animation, accordions, portfolio effects, counters, hover effects, and other page interactions.
  - `slider-init.js`, `portfolio-slider-1.js`, `parallax-slider.js`, `swiper-bundle.js`, and `swiper-gl.js` handle slider/carousel behavior.
  - `ajax-form.js` handles Ajax contact form submission.
  - `plugin.js`, `three.js`, `magnific-popup.js`, `isotope-pkgd.js`, `imagesloaded-pkgd.js`, `nice-select.js`, and similar files are vendor/support scripts used by the template.
- `assets/img/` - all image assets grouped by section or page type, including `logo`, `hero`, `about`, `service`, `portfolio`, `blog`, `pricing`, `team`, `testimonial`, `footer`, and others.
- `assets/fonts/` - Font Awesome and Morganite font files.
- `assets/mail.php` - PHP mail handler for contact forms. Configure the recipient before using it in production.
- `assets/vid.mp4` - shared video asset used by the site.
- `assets/sass.txt` - old absolute Sass watch examples from the original template environment.

## Editing Notes

- Most visual/content changes happen directly in the relevant root `.html` page and the matching images under `assets/img/`.
- Global styling changes should be made in `assets/scss/` first when possible, then compiled into `assets/css/main.css`.
- If editing without a Sass build step, small CSS overrides can be applied directly in `assets/css/main.css`, but keep them scoped and easy to find.
- Shared header, navigation, offcanvas, footer, and script includes are duplicated across HTML pages. Update every affected page when changing shared navigation or branding.
- Contact form behavior depends on both `assets/js/ajax-form.js` and `assets/mail.php`.
