import './style.css'

const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbylSF8RBzYmgfxs-Icny6iiIxty0uyPPGsdnBO1k7KMg-Jrsnj-EkQrsne_173z-osDWg/exec'

document.querySelector('#app').innerHTML = `
<main>
  <a class="whatsapp-float" href="https://wa.me/919784629082?text=Hi%20Veltriqlabs%2C%20I%20want%20to%20discuss%20a%20project." target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.52 3.48A11.73 11.73 0 0 0 12.07 0C5.48 0 .09 5.39.09 12.08c0 2.13.56 4.2 1.62 6.04L.02 24l6.02-1.58a11.92 11.92 0 0 0 5.98 1.52h.01c6.59 0 11.97-5.39 11.97-12.08 0-3.22-1.25-6.25-3.48-8.48Zm-8.45 18.47h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.57.94 1-3.47-.23-.36a9.78 9.78 0 0 1-1.5-5.2c0-5.42 4.42-9.84 9.86-9.84a9.82 9.82 0 0 1 6.97 2.9 9.81 9.81 0 0 1 2.88 6.97c0 5.44-4.43 9.86-9.86 9.86Zm5.41-7.38c-.29-.15-1.73-.85-2-.95-.27-.1-.47-.15-.66.15-.2.29-.75.95-.92 1.15-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.71-1.61-1.99-.17-.29-.02-.45.12-.6.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.2.05-.37-.03-.51-.08-.15-.66-1.6-.9-2.18-.24-.58-.48-.5-.66-.51l-.56-.01c-.2 0-.51.07-.78.37-.27.3-1.02 1-1.02 2.43s1.04 2.81 1.19 3c.15.2 2.05 3.13 4.96 4.39.7.3 1.24.48 1.66.62.7.22 1.34.19 1.85.12.57-.08 1.73-.71 1.98-1.39.25-.69.25-1.29.17-1.42-.09-.14-.29-.22-.61-.38Z"/>
    </svg>
  </a>
  <nav class="nav shell" aria-label="Main navigation">
    <a class="brand brand-image-link" href="#top" aria-label="Veltriqlabs home">
    <img class="brand-logo" src="/veltriqlabs-logo.png" alt="Veltriqlabs logo" />
  </a>
    <div class="nav-links"><a href="/products.html">Products</a><a href="/services.html">Services</a><a href="/work.html">Work</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></div>
    <a class="nav-cta" href="/contact.html">Start a project <span>↗</span></a>
    <button class="menu-toggle" type="button" aria-label="Open navigation" aria-expanded="false"><span></span><span></span></button>
    <div class="mobile-menu"><a href="/products.html">Products</a><a href="/services.html">Services</a><a href="/work.html">Work</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></div>
  </nav>

  <section class="hero shell" id="top">
    <div class="hero-copy reveal">
      <p class="eyebrow"><span class="pulse"></span> Independent technology partner</p>
      <h1>Complex ideas.<br><em>Clear momentum.</em></h1>
      <p class="hero-lede">Veltriqlabs builds custom software, websites, and apps for ambitious teams turning hard ideas into products people want to use.</p>
      <div class="hero-actions"><a class="button button-accent" href="#contact">Tell us what you’re building <span>↗</span></a><a class="text-link" href="#work">Explore our work <span>↓</span></a></div>
      <div class="hero-proof"><div><strong>01</strong><span>founder-led<br>studio</span></div><div><strong>∞</strong><span>curiosity,<br>by default</span></div></div>
    </div>
    <div class="hero-visual reveal delay-1" aria-label="A Synexa product strategy session">
      <div class="visual-image"></div><div class="visual-wash"></div><div class="hud-grid"></div><div class="cursor-glow"></div><div class="scan-line"></div><div class="orbit orbit-one"><i></i></div><div class="orbit orbit-two"><i></i></div><div class="signal-ring"></div><div class="data-chip chip-one">NODE_07 <b>ACTIVE</b></div><div class="data-chip chip-two">/api/v2 <b>200</b></div>
      <div class="visual-note"><span class="note-line"></span><span>Build what<br>matters next</span></div>
      <div class="telemetry"><span>SYS / ONLINE</span><span>LATENCY <b>42ms</b></span><span>UPTIME <b>99.98%</b></span></div>
      <div class="visual-index">01 <span>/</span> 03</div><div class="visual-caption">Product strategy · Systems design</div>
    </div>
  </section>

  <section class="signal-band shell"><div><span class="signal-dot"></span><span>FIELD NOTE / 004</span></div><p>From first principles to production systems</p><span class="signal-code">[ 01 — 04 ]</span></section>

  <section class="work shell" id="work"><div class="section-intro"><p class="eyebrow">What we make</p><h2>Technology built<br><em>around your edge.</em></h2><div class="stack-label">CORE STACK <span>→</span></div><div class="stack-list"><span>AI / ML</span><span>PLATFORM</span><span>DATA</span><span>INTERFACE</span></div></div><div class="service-grid"><article><span class="service-number">01</span><h3>Custom<br>software</h3><p>Purpose-built systems that fit your workflow, your customers, and the way you want to grow.</p><div class="service-tags"><span>Web apps</span><span>APIs</span></div><a href="#contact" aria-label="Learn about custom software">↗</a></article><article class="service-highlight"><span class="service-number">02</span><h3>Websites<br>that work</h3><p>High-trust websites with strong identity, clear journeys, and a technical foundation built to perform.</p><div class="service-tags"><span>Strategy</span><span>Experience</span></div><a href="#contact" aria-label="Learn about websites">↗</a></article><article><span class="service-number">03</span><h3>Mobile<br>apps</h3><p>Useful, focused mobile products that feel natural in the hand and reliable in the real world.</p><div class="service-tags"><span>iOS</span><span>Android</span></div><a href="#contact" aria-label="Learn about mobile apps">↗</a></article></div></section>

  <section class="systems shell" id="systems"><div class="systems-header"><p class="eyebrow">Selected systems</p><span>01 — 03 / FIELD NOTES</span></div><div class="case-list"><article class="case-row"><div class="case-index">01</div><div class="case-copy"><p class="case-type">Fintech · Platform rebuild</p><h3>Making invisible infrastructure<br><em>feel human.</em></h3><p>Reframed a fragmented payments stack into one calm operating layer for a distributed finance team.</p><div class="case-tags"><span>Research</span><span>Design system</span><span>API architecture</span></div></div><div class="case-metric"><strong>−38%</strong><span>time to onboard<br>a new market</span></div><div class="case-arrow">↗</div></article><article class="case-row case-row-accent"><div class="case-index">02</div><div class="case-copy"><p class="case-type">Climate tech · Intelligence layer</p><h3>Turning complex data into<br><em>clear decisions.</em></h3><p>Built a live intelligence interface that lets teams see risk, opportunity, and the next best move.</p><div class="case-tags"><span>Data product</span><span>AI workflows</span><span>Interface</span></div></div><div class="case-metric"><strong>4.6×</strong><span>faster path from<br>signal to action</span></div><div class="case-arrow">↗</div></article></div></section>

  <section class="pulse-panel shell"><div class="pulse-intro"><div class="pulse-title"><span class="pulse-orb"></span><p class="eyebrow">System pulse / live</p></div><h2>Good work leaves<br><em>a measurable trace.</em></h2><p>We care about the feeling of the product and the numbers underneath it. Both should get better at the same time.</p><div class="waveform" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div><div class="pulse-metrics"><div><strong>99.98<span>%</span></strong><small>system uptime</small></div><div><strong>42<span>ms</span></strong><small>median response</small></div><div><strong>3.2<span>×</span></strong><small>faster iteration</small></div><div><strong>24<span>/7</span></strong><small>curious by default</small></div></div></section>

  <section class="statement shell" id="approach"><div class="statement-mark">✳</div><p>“The best technology doesn’t announce itself. It simply gives people <em>more agency.</em>”</p><span class="statement-caption">Our working belief</span></section>

  <section class="consult shell" id="consult"><div class="consult-heading"><p class="eyebrow">Start with a signal</p><h2>Make the first<br><em>conversation useful.</em></h2><p>Share the shape of the challenge. We will come prepared with a point of view, not a sales script.</p><div class="consult-meta"><span>01 / LISTEN</span><span>02 / MAP</span><span>03 / MOVE</span></div></div><form class="consult-form" id="consult-form"><div class="form-topline"><span>CONSULTATION INTAKE</span><span>~ 3 MIN</span></div><label for="contact-name">Your name</label><input id="contact-name" name="name" type="text" autocomplete="name" placeholder="Your full name" required><label for="contact-mobile">Mobile number</label><input id="contact-mobile" name="mobile" type="tel" autocomplete="tel" inputmode="numeric" pattern="[0-9]{10}" minlength="10" maxlength="10" title="Enter a 10-digit mobile number" placeholder="98765 43210" required><label>What do you need help with?</label><div class="choice-grid"><button type="button" class="choice is-selected" data-value="Product strategy">Product strategy</button><button type="button" class="choice" data-value="Digital systems">Digital systems</button><button type="button" class="choice" data-value="AI / automation">AI / automation</button><button type="button" class="choice" data-value="Something else">Something else</button></div><label for="project-stage">Where are you in the journey?</label><select id="project-stage"><option>Exploring an idea</option><option>Building the first version</option><option>Scaling an existing product</option><option>Reworking what is not working</option></select><label for="project-brief">Give us the short version</label><textarea id="project-brief" rows="3" placeholder="The problem we are trying to solve is..."></textarea><button class="button button-accent form-submit" type="submit">Request a consultation <span>↗</span></button><p class="form-note">Replies come directly from Garvit Gupta.</p></form></section>

  <section class="contact shell" id="contact"><div><p class="eyebrow">Have a good problem?</p><h2>Let’s make it<br><em>worth solving.</em></h2></div><div class="contact-side"><p>Tell us where you are, where you want to go, and what’s getting in the way. We’ll bring the first useful question.</p><div class="founder-line"><span>Founders</span><strong>Garvit Gupta</strong><strong>Dhruv Gupta</strong><span>Jaipur, India</span></div><a class="button button-light" href="https://mail.google.com/mail/?view=cm&fs=1&to=GarvitGupta2110@gmail.com" target="_blank" rel="noopener noreferrer">GarvitGupta2110@gmail.com <span>↗</span></a></div></section>

  <footer class="footer shell"><a class="brand brand-image-link" href="#top"><img class="brand-logo" src="/veltriqlabs-logo.png" alt="Veltriqlabs logo" /></a><span>Garvit Gupta · Jaipur, India</span><span><a href="/privacy.html">Privacy</a> · <a href="/terms.html">Terms</a> · © 2026</span></footer>
</main>
`

const heroVisual = document.querySelector('.hero-visual')
const menuToggle = document.querySelector('.menu-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('is-open')
  menuToggle.setAttribute('aria-expanded', String(isOpen))
})

heroVisual.addEventListener('pointermove', (event) => {
  const bounds = heroVisual.getBoundingClientRect()
  const x = ((event.clientX - bounds.left) / bounds.width) * 100
  const y = ((event.clientY - bounds.top) / bounds.height) * 100
  heroVisual.style.setProperty('--pointer-x', `${x}%`)
  heroVisual.style.setProperty('--pointer-y', `${y}%`)
  heroVisual.style.setProperty('--tilt-x', `${(50 - y) / 18}deg`)
  heroVisual.style.setProperty('--tilt-y', `${(x - 50) / 18}deg`)
})

heroVisual.addEventListener('pointerleave', () => {
  heroVisual.style.setProperty('--pointer-x', '50%')
  heroVisual.style.setProperty('--pointer-y', '50%')
  heroVisual.style.setProperty('--tilt-x', '0deg')
  heroVisual.style.setProperty('--tilt-y', '0deg')
})

const revealSections = document.querySelectorAll('.signal-band, .work, .systems, .pulse-panel, .statement, .consult, .contact, .footer')
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      revealObserver.unobserve(entry.target)
    }
  })
}, { threshold: 0.14 })

revealSections.forEach((section) => revealObserver.observe(section))

const consultationForm = document.querySelector('#consult-form')
let selectedConsultation = 'Product strategy'
document.querySelectorAll('.choice').forEach((choice) => {
  choice.addEventListener('click', () => {
    document.querySelectorAll('.choice').forEach((item) => item.classList.remove('is-selected'))
    choice.classList.add('is-selected')
    selectedConsultation = choice.dataset.value
  })
})

consultationForm.addEventListener('submit', async (event) => {
  event.preventDefault()

  const name = document.querySelector('#contact-name').value.trim()
  const mobile = document.querySelector('#contact-mobile').value.trim()
  const stage = document.querySelector('#project-stage').value
  const brief = document.querySelector('#project-brief').value || 'I would like to discuss a technology project.'
  const payload = {
    name,
    mobile,
    mobileNumber: mobile,
    phone: mobile,
    service: selectedConsultation,
    stage,
    brief,
    source: 'Veltriqlabs website'
  }

  const submitButton = consultationForm.querySelector('.form-submit')
  submitButton.disabled = true
  submitButton.textContent = 'Sending...'

  try {
    if (!GOOGLE_SHEETS_WEB_APP_URL) {
      throw new Error('Google Apps Script URL is missing.')
    }

    const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload),
      mode: 'no-cors'
    })

    if (!response.ok && response.type !== 'opaque') {
      throw new Error(`Submission failed with status ${response.status}`)
    }

    const result = response.type === 'opaque' ? { ok: true } : await response.json().catch(() => ({}))
    if (result.ok) {
      const whatsappMessage = encodeURIComponent(`Hi, I want to discuss: ${selectedConsultation}\nName: ${name}\nMobile: ${mobile}\nProject stage: ${stage}\n\n${brief}`)
      window.open(`https://wa.me/919784629082?text=${whatsappMessage}`, '_blank', 'noopener')

      submitButton.textContent = 'Request sent'
      consultationForm.reset()
      document.querySelectorAll('.choice').forEach((item) => item.classList.remove('is-selected'))
      document.querySelector('.choice[data-value="Product strategy"]').classList.add('is-selected')
      selectedConsultation = 'Product strategy'
      submitButton.disabled = false
    } else {
      throw new Error('Script rejected the submission.')
    }
  } catch (error) {
    console.error(error)
    submitButton.disabled = false
    submitButton.textContent = 'Request a consultation'
    alert('There was a problem sending your request. Please try again.')
  }
})
