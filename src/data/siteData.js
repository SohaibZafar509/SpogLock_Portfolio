import logoBlack from '../assets/img/logo/logo-black-2.png'
import favicon from '../assets/img/logo/favicon.png'
import heroBg from '../assets/img/hero/ai/bg.png'
import heroCard from '../assets/img/hero/ai/Hero_Card.png'
import heroShape from '../assets/img/hero/ai/shape.png'
import heroSpark from '../assets/img/hero/ai/shape-2.png'
import aboutRing from '../assets/img/about/ai/ring.png'
import aboutShapeOne from '../assets/img/about/ai/shape.png'
import aboutShapeTwo from '../assets/img/about/ai/shape-2.png'
import aboutShapeThree from '../assets/img/about/ai/shape-3.png'
import bannerPoster from '../assets/img/banner/ai/thumb.jpg'
import bannerVideo from '../assets/vid.mp4'
import awardsShape from '../assets/img/awards/grid-shape.png'
import pricingBg from '../assets/img/pricing/pricing.png'
import pricingShape from '../assets/img/pricing/shape.png'
import woman from '../assets/img/testimonial/woman.png'
import profile from '../assets/img/testimonial/profile.png'
import noise from '../assets/img/body/noise.png'
import ctaBg from '../assets/img/cta/ai/bg.jpg'
import footerBg from '../assets/img/footer/ai/bg.jpg'
import contactShape from '../assets/img/contact/contact-us-shape.png'
import contactThumb from '../assets/img/contact/contact-us-thumb-1.jpg'
import contactLocationTwo from '../assets/img/contact/contact-location-2.jpg'
import contactLocationThree from '../assets/img/contact/contact-location-3.jpg'
import baigTransport from '../assets/img/portfolio/BaigTransport_WebApp.png'
import cheezious from '../assets/img/portfolio/Cheezious_MobileApp.png'
import inventory from '../assets/img/portfolio/InventoryDashboard_WebApp.png'
import madni from '../assets/img/portfolio/MadniExchange_WebApp.png'
import smartHome from '../assets/img/portfolio/SmartHome_MobileApp.png'
import utilityStore from '../assets/img/portfolio/UtilityStore_MobileApp.png'
import productOne from '../assets/img/portfolio/thumb.jpg'
import productTwo from '../assets/img/portfolio/thumb-2.jpg'
import productThree from '../assets/img/portfolio/thumb-3.jpg'
import productFour from '../assets/img/portfolio/thumb-4.jpg'
import productFive from '../assets/img/portfolio/thumb-5.jpg'
import indoor from '../assets/img/portfolio/grid/indoor.png'
import aim from '../assets/img/portfolio/grid/aim.png'
import jv from '../assets/img/portfolio/grid/jv.png'
import hb from '../assets/img/portfolio/grid/hb.png'
import ecommerce3d from '../assets/img/portfolio/grid/3d-ui.png'
import drone from '../assets/img/portfolio/grid/drone.png'
import indusOne from '../assets/img/portfolio/grid/indus-1.png'
import indusTwo from '../assets/img/portfolio/grid/indus-2.png'
import nike from '../assets/img/portfolio/grid/nike.png'
import pizza from '../assets/img/portfolio/grid/pizza.png'
import corpOne from '../assets/img/portfolio/grid/corp-1.png'
import corpTwo from '../assets/img/portfolio/grid/corp-2.png'
import mobileOne from '../assets/img/portfolio/elegent/thumb.jpg'
import mobileTwo from '../assets/img/portfolio/elegent/thumb-2.jpg'
import mobileThree from '../assets/img/portfolio/elegent/thumb-3.jpg'
import mobileFour from '../assets/img/portfolio/elegent/thumb-4.jpg'
import productDesignOne from '../assets/img/portfolio/parallax-carousel/port-1.jpg'
import productDesignTwo from '../assets/img/portfolio/parallax-carousel/port-2.jpg'
import productDesignThree from '../assets/img/portfolio/parallax-carousel/port-3.jpg'
import productDesignFour from '../assets/img/portfolio/parallax-carousel/port-4.jpg'
import productDesignFive from '../assets/img/portfolio/parallax-carousel/port-5.jpg'
import productDesignSix from '../assets/img/portfolio/parallax-carousel/port-6.jpg'

export const assets = {
  logoBlack,
  favicon,
  heroBg,
  heroCard,
  heroShape,
  heroSpark,
  aboutRing,
  aboutShapeOne,
  aboutShapeTwo,
  aboutShapeThree,
  bannerPoster,
  bannerVideo,
  awardsShape,
  pricingBg,
  pricingShape,
  woman,
  profile,
  noise,
  ctaBg,
  footerBg,
  contactShape,
  contactThumb,
  contactLocationTwo,
  contactLocationThree,
}

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  {
    label: 'Portfolio',
    href: '/portfolio',
    children: [
      { label: 'Web Applications', href: '/portfolio/web-applications' },
      { label: 'Mobile Apps', href: '/portfolio/mobile-apps' },
      { label: 'Product Design', href: '/portfolio/product-design' },
      { label: 'UI/UX', href: '/portfolio/ui-ux' },
    ],
  },
  { label: 'Services', href: '/#services' },
]

export const services = [
  {
    title: 'Mobile App Development',
    category: 'mobile',
    description: 'Native-quality apps with smooth flows, stable architecture, and launch-ready polish.',
    href: '/portfolio?filter=mobile',
    image: cheezious,
  },
  {
    title: 'Web App Development',
    category: 'webapps',
    description: 'Dashboards, portals, booking systems, logistics tools, and custom business software.',
    href: '/portfolio?filter=webapps',
    image: inventory,
  },
  {
    title: 'Custom Software',
    category: 'webapps',
    description: 'Workflow-specific systems for teams that need software to match how they operate.',
    href: '/portfolio?filter=webapps',
    image: baigTransport,
  },
  {
    title: 'UI/UX Design',
    category: 'uiux',
    description: 'Product strategy, wireframes, design systems, and high-fidelity app interfaces.',
    href: '/portfolio?filter=uiux',
    image: smartHome,
  },
  {
    title: 'Architectural Design',
    category: 'product',
    description: 'Concept-led 3D and product visuals for digital launches, presentations, and campaigns.',
    href: '/portfolio?filter=product',
    image: productTwo,
  },
]

export const portfolioProjects = [
  { title: 'Baig Transport', type: 'Web App', category: 'webapps', image: baigTransport },
  { title: 'Cheezious', type: 'Mobile App', category: 'mobile', image: cheezious },
  { title: 'Inventory Dashboard', type: 'Web App', category: 'webapps', image: inventory },
  { title: 'Madni Exchange', type: 'Web App', category: 'webapps', image: madni },
  { title: 'Smart Home', type: 'Mobile App', category: 'mobile', image: smartHome },
  { title: 'Utility Store', type: 'Mobile App', category: 'mobile', image: utilityStore },
]

export const portfolioPreview = [
  { title: 'Mobile Apps', image: cheezious, href: '/portfolio/mobile-apps' },
  { title: 'Web Applications', image: inventory, href: '/portfolio/web-applications' },
  { title: 'UI/UX Design', image: smartHome, href: '/portfolio/ui-ux' },
]

export const productProjects = [
  { title: 'Crafting Digital Experiences', type: 'Product Design', image: productOne },
  { title: 'Building Visual Identities', type: 'Brand System', image: productTwo },
  { title: 'Innovation in Every Swipe', type: 'App Concept', image: productThree },
  { title: 'Elevating Brand Websites', type: 'Web Concept', image: productFour },
  { title: 'Turning Clicks Into Conversions', type: 'Conversion Design', image: productFive },
]

export const categoryPages = {
  '/portfolio/web-applications': {
    title: 'Web Applications',
    intro: 'Interfaces and systems built for operations, commerce, transport, health, and internal workflows.',
    layout: 'showcase',
    projects: [
      { title: 'Indoor Livings', type: 'Web Application', image: indoor },
      { title: 'AimManufacturers', type: 'Manufacturing Portal', image: aim },
      { title: 'JV Portal', type: 'Business Portal', image: jv },
      { title: 'Health & Beauty Mart', type: 'Commerce Platform', image: hb },
    ],
  },
  '/portfolio/mobile-apps': {
    title: 'Mobile Apps',
    intro: 'Mobile-first product concepts and app experiences shaped around fast, focused customer flows.',
    layout: 'slider',
    projects: [
      { title: 'Cheezious', type: 'Food Ordering', image: cheezious },
      { title: 'Smart Home', type: 'IoT Control', image: smartHome },
      { title: 'Utility Store', type: 'Retail App', image: utilityStore },
      { title: 'Mobile Commerce', type: 'App Design', image: mobileOne },
      { title: 'Service Booking', type: 'Mobile Flow', image: mobileTwo },
      { title: 'Customer Portal', type: 'App System', image: mobileThree },
      { title: 'Delivery Tracker', type: 'Mobile Dashboard', image: mobileFour },
    ],
  },
  '/portfolio/product-design': {
    title: 'Product Design',
    intro: 'Concept visuals, 3D product compositions, and presentation-ready digital product campaigns.',
    layout: 'carousel',
    projects: [
      { title: 'Product Visual 01', type: 'Campaign Design', image: productDesignOne },
      { title: 'Product Visual 02', type: 'Campaign Design', image: productDesignTwo },
      { title: 'Product Visual 03', type: 'Campaign Design', image: productDesignThree },
      { title: 'Product Visual 04', type: 'Campaign Design', image: productDesignFour },
      { title: 'Product Visual 05', type: 'Campaign Design', image: productDesignFive },
      { title: 'Product Visual 06', type: 'Campaign Design', image: productDesignSix },
    ],
  },
  '/portfolio/ui-ux': {
    title: 'UI/UX',
    intro: 'High-fidelity interface concepts, product systems, and visual exploration for modern digital products.',
    layout: 'horizontal',
    projects: [
      { title: '3D E-commerce Concept', type: 'UI Concept', image: ecommerce3d },
      { title: 'Drone E-commerce Concept', type: 'UI Concept', image: drone },
      { title: 'Industrial Design Variation 1', type: 'Experience Design', image: indusOne },
      { title: 'Industrial Design Variation 2', type: 'Experience Design', image: indusTwo },
      { title: 'Nike E-commerce Concept', type: 'Commerce UI', image: nike },
      { title: 'Pizzeria Web Concept', type: 'Website UI', image: pizza },
      { title: 'Corporate Site Concept', type: 'Website UI', image: corpOne },
      { title: 'Corporate Web Concept', type: 'Website UI', image: corpTwo },
    ],
  },
}

export const pricingPlans = [
  {
    name: 'Startup',
    price: 'Custom',
    items: ['Landing page or MVP', 'Responsive UI', 'Basic integrations', 'Launch support'],
  },
  {
    name: 'Business',
    price: 'Custom',
    featured: true,
    items: ['Web or mobile app', 'Admin dashboards', 'API integrations', 'QA and deployment'],
  },
  {
    name: 'Scale',
    price: 'Custom',
    items: ['Multi-platform system', 'Design system', 'Automation workflows', 'Long-term support'],
  },
]

export const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, Retail Founder',
    quote:
      'Spoglock helped us turn a rough product idea into a clean app experience our team could actually launch.',
  },
  {
    name: 'Muhammad Ali',
    role: 'Appzone IT',
    quote:
      'Their process was clear and practical. The final dashboard made our daily operations faster and easier to track.',
  },
  {
    name: 'Adeel Khan',
    role: 'Logistics Consultants',
    quote:
      'We needed software that matched our workflow, not a generic template. Spoglock delivered that.',
  },
]

export const faqs = [
  {
    question: 'What kind of software does Spoglock build?',
    answer:
      'We build mobile apps, web apps, dashboards, portals, desktop tools, and custom workflow systems for businesses.',
  },
  {
    question: 'Can you work with an existing design or old website?',
    answer:
      'Yes. We can migrate, redesign, or rebuild an existing product while preserving the parts that already work.',
  },
  {
    question: 'Do you handle UI/UX and development together?',
    answer:
      'Yes. We can take a project from planning and interface design through frontend, backend, QA, and deployment.',
  },
  {
    question: 'Do you work remotely?',
    answer:
      'Yes. Spoglock is remote-first and works with clients worldwide through structured communication and milestones.',
  },
  {
    question: 'How do we start a project?',
    answer:
      'Share the workflow, product idea, or business problem. We will scope the right solution and define the first build phase.',
  },
]

export const contact = {
  phone: '+92 348 5687553',
  email: 'spoglocklabs@gmail.com',
  model: 'Remote-first, serving clients worldwide',
}
