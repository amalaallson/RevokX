/* ============================================
   REVOKX — MAIN JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- PRELOADER ---------- */
  const preloader = document.getElementById('preloader');
  window.addEventListener('load', () => {
    setTimeout(() => {
      preloader.classList.add('hide');
      document.body.style.overflow = 'auto';
      revealOnLoad();
    }, 900);
  });

  /* ---------- CURSOR GLOW ---------- */
  const glow = document.getElementById('cursorGlow');
  let mouseX = 0, mouseY = 0, glowX = 0, glowY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX + window.scrollY ? e.clientX : e.clientX;
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  function animateGlow(){
    glowX += (mouseX - glowX) * 0.12;
    glowY += (mouseY - glowY) * 0.12;
    if(glow){
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
    }
    requestAnimationFrame(animateGlow);
  }
  animateGlow();

  /* ---------- HEADER SCROLL STATE ---------- */
  const header = document.getElementById('siteHeader');
  const scrollTopBtn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 60){
      header.classList.add('scrolled');
      scrollTopBtn.classList.add('show');
    } else {
      header.classList.remove('scrolled');
      scrollTopBtn.classList.remove('show');
    }
    updateActiveNav();
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- MOBILE NAV ---------- */
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.getElementById('mainNav');
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mainNav.classList.toggle('open');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mainNav.classList.remove('open');
    });
  });

  /* ---------- ACTIVE NAV LINK ON SCROLL ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  function updateActiveNav(){
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 140;
      if(window.scrollY >= top){
        current = sec.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if(link.getAttribute('href') === '#' + current){
        link.classList.add('active');
      }
    });
  }

  /* ---------- SCROLL REVEAL ---------- */
  const revealEls = document.querySelectorAll('[data-reveal]');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => revealObserver.observe(el));

  function revealOnLoad(){
    // Reveal anything already in viewport at load (e.g. hero)
    revealEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight){
        el.classList.add('in-view');
      }
    });
  }

  /* ---------- COUNTER ANIMATION ---------- */
  const counters = document.querySelectorAll('.counter');
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => counterObserver.observe(c));

  function animateCounter(el){
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1400;
    const start = performance.now();
    function tick(now){
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target);
      if(progress < 1){
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  /* ---------- FAQ ACCORDION ---------- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if(!wasOpen){ item.classList.add('open'); }
    });
  });

  /* ---------- VIDEO MODAL ---------- */
  const videoModal = document.getElementById('videoModal');
  const watchBtn = document.getElementById('watchVideoBtn');
  const closeBtn = document.getElementById('videoModalClose');
  const demoVideo = document.getElementById('demoVideo');

  function closeVideoModal(){
    if(videoModal){
      videoModal.classList.remove('open');
    }
    if(demoVideo){
      demoVideo.pause();
      demoVideo.currentTime = 0;
    }
  }

  if(watchBtn && videoModal){
    watchBtn.addEventListener('click', () => {
      videoModal.classList.add('open');
      if(demoVideo){
        demoVideo.currentTime = 0;
        demoVideo.play().catch(() => {});
      }
    });
  }

  if(closeBtn){
    closeBtn.addEventListener('click', closeVideoModal);
  }

  if(videoModal){
    videoModal.addEventListener('click', (e) => {
      if(e.target === videoModal) closeVideoModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeVideoModal();
  });

  /* ---------- REVIEWS INFINITE TRACK (duplicate for seamless loop) ---------- */
  const track = document.getElementById('reviewsTrack');
  if(track){
    track.innerHTML += track.innerHTML;
  }

  /* ---------- SMOOTH ANCHOR SCROLL OFFSET ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if(targetId.length > 1){
        const targetEl = document.querySelector(targetId);
        if(targetEl){
          e.preventDefault();
          const offset = 90;
          const top = targetEl.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

});

  /* ---------- CONTACT FORM HANDLER ---------- */
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');
  const btnText = submitBtn.querySelector('.btn-text');
  const btnLoader = submitBtn.querySelector('.btn-loader');

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      // Get form data
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const subject = document.getElementById('contactSubject').value.trim();
      const message = document.getElementById('contactMessage').value.trim();

      // Basic validation
      if (!name || !email || !subject || !message) {
        showStatus('Please fill in all fields.', 'error');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
      }

      // Disable form during submission
      submitBtn.disabled = true;
      btnText.style.display = 'none';
      btnLoader.style.display = 'inline';
      formStatus.style.display = 'none';

      try {
        // Check if config is loaded
        if (typeof CONFIG === 'undefined') {
          showStatus('Configuration error. Please make sure config.js exists.', 'error');
          return;
        }

        // Send email using Brevo API
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'api-key': CONFIG.BREVO_API_KEY
          },
          body: JSON.stringify({
            sender: {
              name: name,
              email: email
            },
            to: [
              {
                email: CONFIG.RECIPIENT_EMAIL,
                name: CONFIG.RECIPIENT_NAME
              }
            ],
            subject: `Contact Form: ${subject}`,
            htmlContent: `
              <html>
                <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                  <div style="max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                    <h2 style="color: #ff5b1f; border-bottom: 2px solid #ff5b1f; padding-bottom: 10px;">New Contact Form Submission</h2>
                    
                    <div style="margin: 20px 0;">
                      <p><strong>From:</strong> ${name}</p>
                      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                      <p><strong>Subject:</strong> ${subject}</p>
                    </div>
                    
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
                      <h3 style="margin-top: 0; color: #333;">Message:</h3>
                      <p style="white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
                      <p>This message was sent from the RevokX website contact form.</p>
                    </div>
                  </div>
                </body>
              </html>
            `,
            replyTo: {
              email: email,
              name: name
            }
          })
        });

        if (response.ok) {
          showStatus('✓ Message sent successfully! I\'ll get back to you within 24 hours.', 'success');
          contactForm.reset();
        } else {
          const errorData = await response.json();
          console.error('Brevo API Error:', errorData);
          showStatus('Something went wrong. Please try again or email me directly.', 'error');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        showStatus('Failed to send message. Please check your connection and try again.', 'error');
      } finally {
        // Re-enable form
        submitBtn.disabled = false;
        btnText.style.display = 'inline';
        btnLoader.style.display = 'none';
      }
    });
  }

  function showStatus(message, type) {
    formStatus.textContent = message;
    formStatus.className = `form-status ${type}`;
    formStatus.style.display = 'block';
    
    // Auto-hide success messages after 5 seconds
    if (type === 'success') {
      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 5000);
    }
  }
