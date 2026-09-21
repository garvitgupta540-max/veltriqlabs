import './subpage.css'

const page = document.body.dataset.page
const pages = {
  products: {
    eyebrow: 'Products / solutions',
    title: 'Software that gives complex work a clearer shape.',
    intro: 'We design and engineer custom software, websites, and apps for teams operating at the edge of their category.',
    blocks: [
      ['01', 'Custom software', 'Purpose-built web applications and business tools designed around your workflows and customers.', 'Web apps / APIs / Integrations'],
      ['02', 'Websites', 'High-trust websites with a clear point of view, strong journeys, and a foundation built to perform.', 'Strategy / Design / Development'],
      ['03', 'Mobile apps', 'Focused iOS and Android experiences that feel natural in the hand and reliable in the real world.', 'iOS / Android / Product design']
    ]
  },
  services: {
    eyebrow: 'Services',
    title: 'From first question to production system.',
    intro: 'A senior, compact team for custom software, websites, and apps when product thinking and engineering judgment need to be in the same room.',
    blocks: [
      ['01', 'Discover', 'We map the opportunity, the people, and the constraints before a line of code is written.', 'Research / Product strategy'],
      ['02', 'Design', 'We make the invisible visible: flows, systems, interfaces, and the decisions that connect them.', 'UX systems / Prototypes'],
      ['03', 'Build', 'We ship reliable software with a bias toward clarity, observability, and momentum.', 'Full-stack / Mobile / Cloud'],
      ['04', 'Evolve', 'We stay close enough to improve what is working and change what is not.', 'Optimization / AI / Growth']
    ]
  },
  work: {
    eyebrow: 'Projects / case studies',
    title: 'A few systems we are proud to have made clearer.',
    intro: 'The best work is measured in what becomes possible after launch.',
    blocks: [
      ['01', 'Northstar finance', 'A platform rebuild that cut market onboarding time by 38% and gave operators one source of truth.', 'Fintech / Platform rebuild'],
      ['02', 'Aeris intelligence', 'A live climate-risk interface that moved teams from scattered signals to a shared next action.', 'Climate tech / Data product'],
      ['03', 'Verve operations', 'A lightweight automation layer that gave a growing team back its most expensive resource: attention.', 'SaaS / Automation']
    ]
  },
  about: {
    eyebrow: 'About Veltriqlabs',
    title: 'Small enough to care. Serious enough to ship.',
    intro: 'Veltriqlabs is an independent technology studio founded by Garvit Gupta in Jaipur, India.',
    blocks: [
      ['01', 'Our point of view', 'Technology should reduce cognitive load, not add to it. We look for the cleanest useful answer, then build it to last.', 'Clarity / Craft / Consequence'],
      ['02', 'How we work', 'Senior people stay close to the work. We make decisions in the open, communicate precisely, and keep the room small.', 'Direct / Focused / Collaborative'],
      ['03', 'Where we are going', 'Toward a quieter kind of technical excellence: products that feel obvious, systems that earn trust, and teams that move faster.', 'Jaipur / Global / Independent']
    ]
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Bring us the hard part.',
    intro: 'Tell us what you are building, what is getting in the way, and what a useful first step would look like.',
    blocks: [
      ['01', 'Email Garvit', 'Start a direct conversation about your custom software, website, app, or next technical decision.', 'GarvitGupta2110@gmail.com'],
      ['02', 'Based in Jaipur', 'Working with ambitious teams across India and around the world.', 'Jaipur, India / UTC +5:30'],
      ['03', 'Consultation', 'Use the consultation intake to give us the useful context before we meet.', '3 minutes / Direct to Gmail']
    ]
  },
  privacy: {
    eyebrow: 'Legal / Privacy policy',
    title: 'Your information should stay yours.',
    intro: 'This plain-language policy explains how Veltriqlabs handles information shared through this website.',
    blocks: [
      ['01', 'What we collect', 'We only collect information you choose to share with us, such as your name, email address, and project details.', 'Voluntary / Minimal'],
      ['02', 'How we use it', 'We use information to respond to enquiries, understand project context, and provide the service you request.', 'Purpose limited'],
      ['03', 'What we do not do', 'We do not sell personal information or use consultation details for unrelated marketing.', 'No sale / No noise']
    ]
  },
  terms: {
    eyebrow: 'Legal / Terms & conditions',
    title: 'Clear terms for clear work.',
    intro: 'By using this website, you agree to the simple terms below. Project work is governed by a separate written agreement.',
    blocks: [
      ['01', 'Website content', 'The content on this site is provided for general information and may change without notice.', 'Informational only'],
      ['02', 'Intellectual property', 'Brand, writing, design, and code on this website belong to Veltriqlabs unless otherwise stated.', 'All rights reserved'],
      ['03', 'Project agreements', 'Any engagement, deliverables, timelines, and fees are confirmed in a written agreement before work begins.', 'Written scope']
    ]
  }
}

const content = pages[page] || pages.products
const gmail = 'https://mail.google.com/mail/?view=cm&fs=1&to=GarvitGupta2110@gmail.com'

document.querySelector('#app').innerHTML = `
  <main class="subpage-main">
    <a class="whatsapp-float" href="https://wa.me/919784629082?text=Hi%20Veltriqlabs%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.73 11.73 0 0 0 12.07 0C5.48 0 .09 5.39.09 12.08c0 2.13.56 4.2 1.62 6.04L.02 24l6.02-1.58a11.92 11.92 0 0 0 5.98 1.52h.01c6.59 0 11.97-5.39 11.97-12.08 0-3.22-1.25-6.25-3.48-8.48Zm-8.45 18.47h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.57.94 1-3.47-.23-.36a9.78 9.78 0 0 1-1.5-5.2c0-5.42 4.42-9.84 9.86-9.84a9.82 9.82 0 0 1 6.97 2.9 9.81 9.81 0 0 1 2.88 6.97c0 5.44-4.43 9.86-9.86 9.86Zm5.41-7.38c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-1.99-.17-.29-.02-.45.12-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.03-.51-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.43s1.04 2.81 1.19 3c.15.2 2.05 3.13 4.96 4.39.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.12.57-.08 1.73-.71 1.98-1.39.25-.69.25-1.29.17-1.42-.09-.14-.29-.22-.61-.38Z"/></svg>
    </a>
    <nav class="subnav shell" aria-label="Main navigation">
      <a class="brand brand-image-link" href="/" aria-label="Veltriqlabs home">
        <img class="brand-logo" src="/veltriqlabs-logo.png" alt="Veltriqlabs logo" />
      </a>
      <div class="subnav-links"><a href="/products.html">Products</a><a href="/services.html">Services</a><a href="/work.html">Work</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></div>
      <a class="nav-cta" href="${gmail}" target="_blank" rel="noopener noreferrer">Start a project <span>↗</span></a>
      <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
      <div class="mobile-menu"><a href="/products.html">Products</a><a href="/services.html">Services</a><a href="/work.html">Work</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></div>
    </nav>
    <header class="page-hero shell"><div class="page-kicker"><span></span>${content.eyebrow}</div><h1>${content.title}</h1><p>${content.intro}</p></header>
    <section class="page-grid shell">${content.blocks.map(([number, title, copy, meta]) => `<article class="page-card"><span class="card-number">${number}</span><h2>${title}</h2><p>${copy}</p><span class="card-meta">${meta}</span></article>`).join('')}</section>
    <section class="page-cta shell"><div><span class="page-kicker"><span></span> Next useful step</span><h2>Have a good<br><em>problem?</em></h2></div><a class="button button-accent" href="${page === 'contact' ? gmail : '/contact.html'}" ${page === 'contact' ? 'target="_blank" rel="noopener noreferrer"' : ''}>Start a conversation <span>↗</span></a></section>
    <footer class="subfooter shell"><a class="brand brand-image-link" href="/"><img class="brand-logo" src="/veltriqlabs-logo.png" alt="Veltriqlabs logo" /></a><span>Garvit Gupta · Jaipur, India</span><span>© 2026 Veltriqlabs Studio</span></footer>
  </main>
`

  const menuToggle = document.querySelector('.menu-toggle')
  const mobileMenu = document.querySelector('.mobile-menu')
  menuToggle.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('is-open')
    menuToggle.setAttribute('aria-expanded', String(isOpen))
  })
