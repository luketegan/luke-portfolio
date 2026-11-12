// All of the site's wording about your work lives in this file.
// To change a sentence on the site, edit it here and save.

export const projects = [
  {
    id: 'generation-conscious',
    mark: 'GC',
    tone: 'sage',
    name: 'Generation Conscious',
    type: 'Product Management · UX Research',
    description:
      'Used customer research and adoption data to improve a refill-station product, then built campaigns that increased utilization by 64%.',
    tags: ['Product Strategy', 'UX Research', 'Figma'],
    role: 'Product Manager Intern (January – December 2025) and UX Design & Research Intern (May – December 2025)',
    timeline: 'January 2025 – December 2025',
    tools: 'Figma, customer research, data analysis',
    work: [
      'Evaluated refill-station hardware, software, user feedback, and adoption data to identify product issues, prioritize improvements, and present actionable recommendations to stakeholders.',
      'Collaborated with senior management to execute six localized marketing campaigns.',
      'Synthesized quantitative and qualitative customer research into product requirements and UX recommendations to improve the digital and physical refill experience.',
      'Translated insights into Figma wireframes and design recommendations that improved engagement and reduced friction.',
      'Worked in a fast-paced, mission-driven environment focused on zero-waste innovation.',
    ],
    results: [
      '64% increase in refill-station utilization',
      'Over 21% of on-campus residents moved from single-use plastic detergent to zero-packaging laundry detergent sheet refills',
    ],
  },
  {
    id: 'sal-amore',
    mark: 'SA',
    tone: 'sand',
    name: 'Sal Amore',
    type: 'Ecommerce · Digital Product',
    description:
      'Reworked Shopify storefront workflows to simplify navigation and product discovery, and used engagement data to guide content and growth.',
    tags: ['Shopify Liquid', 'UX', 'Analytics'],
    role: 'Digital Product & Marketing Intern',
    timeline: 'June 2026 – August 2026',
    tools: 'Shopify, Liquid, Calendly, Instagram, TikTok, digital analytics',
    cover: {
      src: 'projects/sal-amore/home-after-v2.jpg',
      alt: 'Sal Amore homepage with a woman in a straw hat and two matching buttons: Explore the Collection and Book a Design Appointment',
    },
    gallery: [
      { src: 'projects/sal-amore/home-before.jpg', caption: 'Homepage: before', alt: 'Earlier Sal Amore homepage hero image' },
      { src: 'projects/sal-amore/home-after-v2.jpg', caption: 'Homepage: after, with matching call-to-action buttons', alt: 'Updated homepage with two equal-size buttons over the hero image' },
      { src: 'projects/sal-amore/events.jpg', caption: 'New Events page linking to private events, virtual design appointments, and large events', alt: 'Celebrate with Sal Amore page with three photo cards for event types', wide: true },
      { src: 'projects/sal-amore/inquiry-before.jpg', caption: 'Private events inquiry: before', alt: 'Earlier inquiry page with a basic name, email, phone, and comment form' },
      { src: 'projects/sal-amore/inquiry-after.jpg', caption: 'Private events inquiry: after, with event details and imagery', alt: 'Redesigned inquiry form with fields for event type, date, guests, and location next to a hat photo' },
      { src: 'projects/sal-amore/booking.jpg', caption: 'Virtual design appointment booking with an embedded Calendly calendar', alt: 'Book a Virtual Design Appointment page with a calendar for choosing a date and time' },
      { src: 'projects/sal-amore/large-events.jpg', caption: 'New large events inquiry page', alt: 'Large events page with an inquiry form next to a photo of straw hats' },
      { src: 'projects/sal-amore/lookbook-before.jpg', caption: 'Lookbook: before', alt: 'Lookbook page with editorial photos' },
      { src: 'projects/sal-amore/lookbook-after.jpg', caption: 'Lookbook: after, with a rotating Instagram carousel', alt: 'Lookbook page with an Instagram post carousel below the editorial photos' },
      { src: 'projects/sal-amore/gift-card.jpg', caption: 'Virtual gift card design I created', alt: 'Sal Amore virtual gift card with a blue-and-white card on a patterned navy background', wide: true },
    ],
    work: [
      'Redesigned Shopify storefront workflows by modifying Liquid theme components and applying customer-centered UX principles, simplifying navigation and improving product discovery across the ecommerce journey.',
      'Developed digital content and visual assets that maintained a cohesive brand identity across web and social channels.',
      'Collaborated with leadership on marketing strategy, content planning, and digital growth initiatives to support brand expansion.',
      'Analyzed digital engagement metrics to guide content and growth decisions.',
      'Made the homepage call-to-action buttons consistent in size and style with the rest of the site.',
      'Researched competitor sites to plan a new events and booking experience with the owner.',
      'Chose Calendly’s free plan to meet the owner’s needs for virtual, low-cost booking that syncs with Google Calendar, and built a page with an embedded booking calendar.',
      'Designed an Events landing page that routes visitors to private events, virtual design appointments, and large events.',
      'Redesigned the private events inquiry form with fields for event type, date, guest count, and location, and created a separate large events page.',
      'Added a rotating Instagram carousel to the Lookbook page using the Instafeed app.',
    ],
    results: [
      '46% audience growth on Instagram and 20% on TikTok',
      '1,100+ new followers',
    ],
  },
  {
    id: 'command-center',
    mark: 'LC',
    tone: 'slate',
    name: 'Luke’s Command Center',
    type: 'Full-Stack Development · Agentic AI · In Development',
    description:
      'A full-stack web app with secure accounts and an AI research agent that tracks technology for staying connected at festivals, now growing into a multi-service system.',
    tags: ['React', 'FastAPI', 'AI Agents', 'In Development'],
    role: 'Designer and developer',
    timeline: 'Fall 2026 – present, NYU',
    tools: 'React, Vite, FastAPI, Python, MongoDB Atlas, Groq, Tavily Search, Render, pytest',
    cover: {
      src: 'projects/command-center/login.jpg',
      alt: 'Luke’s Command Center sign-in page with a Welcome back headline and a login form',
    },
    gallery: [
      { src: 'projects/command-center/login.jpg', caption: 'Sign-in page, backed by Argon2id password hashing and protected account routes', alt: 'Luke’s Command Center sign-in page with username and password fields', wide: true },
    ],
    overview:
      'Luke’s Command Center started as a secure account system and grew into a research tool. Its agent searches the web for products and festival pilots that help people message or find friends when cell networks are overloaded, then keeps a ranked top five that it updates on every run.',
    work: [
      'Built a React and Vite frontend, a FastAPI backend, and MongoDB Atlas storage with JWT authentication, Argon2id password hashing, and per-user access controls.',
      'Hand-wrote the agent loop, where the model calls search, fetch, and finish tools under budgets for steps, searches, fetches, model calls, and tokens. Hitting a budget produces a partial report instead of a failure.',
      'Added memory across runs, so the agent skips pages it already read, merges duplicates, and labels results New, Still tracking, or Dropped from the top five.',
      'Treated every web page as untrusted: HTTPS only, approved sites only, size and time limits, and a result counts only if its quoted evidence appears in the page it came from.',
      'Logged every model and tool call to trace files and handled rate limits with capped retries.',
      'Now splitting the system into three services that talk over HTTP: a researcher, a verifier deployed on Render that checks each claim against its source, and an orchestrator that manages saved state.',
      'Wrote an offline test suite that makes no network or API calls.',
    ],
    note: 'In development: I keep extending this project through my NYU coursework, so new features are added regularly.',
  },
  {
    id: 'festival-link',
    mark: 'FL',
    tone: 'lavender',
    name: 'FestivalLink',
    type: 'iOS Development · In Development',
    description:
      'An iPhone app in development to help friends find each other at festivals when cellular service is congested or unavailable.',
    tags: ['Swift', 'SwiftUI', 'In Development'],
    role: 'Designer and developer',
    timeline: 'In development',
    tools: 'Swift, SwiftUI, Xcode, MultipeerConnectivity',
    work: [
      'Defining and building a SwiftUI iPhone app, scoping features around user needs, privacy, and technical constraints.',
      'Developing peer-to-peer connectivity with Apple’s MultipeerConnectivity framework.',
      'Planning last-known locations and group chat for testing with real users.',
    ],
    note: 'This project is still being built, so these features aren’t finished yet.',
  },
  {
    id: 'crash-loop',
    mark: 'CL',
    tone: 'peach',
    name: 'Crash Loop',
    type: 'VR Development · Team Leadership',
    description:
      'Led a six-person team building a multi-room physical and VR escape room, presented at the University of Miami’s Miami XR event.',
    tags: ['Unity', 'C#', 'Leadership'],
    role: 'Team lead and developer',
    timeline: 'Semester-long project, University of Miami',
    tools: 'Unity, C#, Unity Store assets',
    cover: {
      src: 'projects/crash-loop/title-screen.jpg',
      alt: 'Crash Loop title screen reading Every loop ends where it began, with Watch Trailer and Tour the House buttons',
    },
    video: {
      src: 'projects/crash-loop/demo.mp4',
      poster: 'projects/crash-loop/demo-poster.jpg',
      label: 'Gameplay demo of Crash Loop: the library puzzle, house rooms, keypad door, rose garden, and ending',
      caption: 'Shortened, rough demo recording of a playthrough.',
    },
    gallery: [
      { src: 'projects/crash-loop/rooms.jpg', caption: 'Finished rooms from the escape room', alt: 'Four Crash Loop scenes: a lamp-lit living room, a large foyer with a staircase, a locked door with a keypad, and a crashed truck by a gravestone', wide: true },
      { src: 'projects/crash-loop/in-progress.jpg', caption: 'Work in progress: building the layout and rooms in Unity', alt: 'Four Unity editor views of the Crash Loop layout and rooms during development', wide: true },
      { src: 'projects/crash-loop/team.jpg', caption: 'The six-person Crash Loop team and our roles', alt: 'Six team member cards with photos, names, and roles for the Crash Loop project', wide: true },
    ],
    work: [
      'Planned project scope, assigned responsibilities, and ran weekly progress reviews.',
      'Developed VR interactions and narrative puzzles in Unity using C#.',
      'Refined the experience through multiple rounds of testing with students and faculty.',
      'Presented the finished experience at the Miami XR event.',
    ],
  },
  {
    id: 'fashion-tech-lab',
    mark: 'FT',
    tone: 'blue',
    name: 'Fashion Tech Lab',
    type: 'Immersive Design · Fashion Technology',
    description:
      'A VR showroom exploring how extended reality can be used to prototype future fashion and wearable tech.',
    tags: ['Unity', 'C#', 'XR Interaction Toolkit'],
    role: 'Solo designer and developer',
    timeline: 'Fall 2025, Building Virtual Worlds, University of Miami',
    overview:
      'Fashion Tech Lab imagines how future designers, consumers, and brands might prototype apparel and textiles with virtual tools. Users modify an outfit on a mannequin, examine fabric samples, change the environment through a dynamic background screen, and move through a short guided experience from introduction to closing.',
    audience: 'People interested in fashion, design, XR technology, and speculative interfaces, including those with no prior VR experience.',
    goals: [
      'Clarity: interactions sit at comfortable VR heights and distances.',
      'Playfulness: users press buttons, pick up fabric swatches, and explore freely.',
      'Futuristic tone: the room, lighting, materials, and UI evoke a tech-forward environment.',
      'Learnability: interactive objects have hover highlights and clear feedback.',
    ],
    tools: 'Unity, C#, XR Interaction Toolkit, Unity Store assets',
    cover: {
      src: 'projects/fashion-tech-lab/showroom.jpg',
      alt: 'VR showroom with a mannequin, outfit controls, fabric swatches on a table, and a red jacket on the wall',
    },
    video: {
      src: 'projects/fashion-tech-lab/walkthrough.mp4',
      poster: 'projects/fashion-tech-lab/poster.jpg',
      label: 'Walkthrough of the Fashion Tech Lab VR experience',
    },
    gallery: [
      {
        src: 'projects/fashion-tech-lab/outfit.jpg',
        alt: 'Mannequin wearing a customized orange top, with shirt and bottom controls on the wall',
      },
      {
        src: 'projects/fashion-tech-lab/room.jpg',
        alt: 'Full view of the showroom with the mannequin on a stage in front of the backdrop',
      },
    ],
    work: [
      'Built separate shirt and bottom controls that change color and style and add a shine effect.',
      'Created fabric swatches users can pick up and examine, labeled as recycled cotton blend, pink silk, and blue linen.',
      'Added a changeable backdrop and hover highlighting for interactive objects.',
      'Designed the intro, interactive showroom, and session-complete states of the experience.',
      'Wrote the interaction logic in C# with the XR Interaction Toolkit.',
    ],
  },
  {
    id: 'disco-party',
    mark: '3D',
    tone: 'lavender',
    name: '3D Asset Creation',
    type: '3D Modeling · Environment Design',
    description:
      'Created a JBL speaker, laptop, and flash drive, taking each from modeling through UV mapping, texturing, and lighting, then assembled them in a Unity scene.',
    tags: ['Maya', 'Substance Painter', 'Unity'],
    role: 'Solo 3D artist',
    timeline: 'Fall 2025, CIM 454, University of Miami',
    tools: 'Maya, Adobe Substance Painter, Unity',
    cover: {
      src: 'projects/disco-party/scene.jpg',
      alt: 'Nighttime disco scene with a JBL speaker and DJ table on a truss stage above a colorful dance floor',
    },
    overview:
      'An open-air nighttime dance party under the stars, designed for young adults. A DJ area with a speaker and computer sits at the center of a modern, slightly industrial dance floor, with colored lights pulsing across it. I built the hero and secondary assets from scratch and assembled the environment in Unity.',
    work: [
      'Modeled a JBL PartyBox 300 as the hero asset in Maya from shape and texture reference images.',
      'Unwrapped UVs and checked them with a checkerboard before texturing.',
      'Textured hard plastic, glossy side panels, the front mesh, and rubber details in Substance Painter.',
      'Modeled and textured a laptop and a flash drive as secondary assets.',
      'Built the scene in Unity and lit it so each asset reads clearly against the dark environment.',
    ],
    learned:
      'Textures only behave when UV maps are clean, so I went back and forth between Maya and Substance Painter to fix them. The project taught me to work slowly, stay organized, and save backups at every stage.',
    gallery: [
      { src: 'projects/disco-party/speaker-model.jpg', caption: 'Speaker: gray model and UV map', alt: 'Gray-shaded JBL speaker model in Maya next to its UV layout' },
      { src: 'projects/disco-party/speaker-textured.jpg', caption: 'Speaker: Substance Painter textures', alt: 'Back of the textured speaker showing black plastic, handle, and orange rubber feet' },
      { src: 'projects/disco-party/speaker-lighting.jpg', caption: 'Speaker: lighting setup in Maya', alt: 'Textured speaker surrounded by light rigs in the Maya viewport' },
      { src: 'projects/disco-party/speaker-render.jpg', caption: 'Speaker: final lit render', alt: 'Lit render of the speaker with a blue front mesh, JBL logo, and orange accents' },
      { src: 'projects/disco-party/drive-model.jpg', caption: 'Flash drive: gray model', alt: 'Gray-shaded flash drive model in Maya' },
      { src: 'projects/disco-party/drive-uv.jpg', caption: 'Flash drive: checkerboard UV test and UV layout', alt: 'Flash drive with a checkerboard test texture next to its UV layout in Maya' },
      { src: 'projects/disco-party/computer-model.jpg', caption: 'Laptop: gray model', alt: 'Gray-shaded open laptop model in Maya' },
      { src: 'projects/disco-party/computer-uv.jpg', caption: 'Laptop: checkerboard UV test', alt: 'Open laptop model with a checkerboard test texture in Maya' },
      { src: 'projects/disco-party/lighting.jpg', caption: 'Scene lighting in Unity', alt: 'Overhead Unity scene view of the stage with colored spotlights on the dance floor', wide: true },
    ],
  },
]

export const experience = [
  {
    company: 'Sal Amore',
    place: 'Nantucket, MA',
    roles: [{ title: 'Digital Product & Marketing Intern', dates: 'June 2026 – August 2026' }],
  },
  {
    company: 'Generation Conscious',
    place: 'Miami, FL',
    roles: [
      { title: 'UX Design & Research Intern', dates: 'May 2025 – December 2025' },
      { title: 'Product Manager Intern', dates: 'January 2025 – December 2025' },
    ],
  },
  {
    company: 'Communication Technology Services',
    place: 'Marlborough, MA',
    roles: [
      { title: 'Website Design Intern', dates: 'June 2024 – December 2024' },
      { title: 'Systems, Network, and Desktops Intern', dates: 'May 2024 – August 2024' },
    ],
  },
]

export const links = {
  email: 'ljt7818@nyu.edu',
  linkedin: 'https://www.linkedin.com/in/luke-tegan',
}
