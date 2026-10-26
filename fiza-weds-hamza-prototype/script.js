(() => {
  const welcomeScreen = document.getElementById('welcomeScreen');
  const openInvitation = document.getElementById('openInvitation');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const toast = document.getElementById('toast');
  const lightbox = document.getElementById('lightbox');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');
  let toastTimer;

  document.body.classList.add('locked');
  openInvitation?.addEventListener('click', () => {
    welcomeScreen.classList.add('is-open');
    document.body.classList.remove('locked');
    window.setTimeout(() => document.getElementById('heroTitle')?.focus?.({ preventScroll: true }), 500);
  });

  menuToggle?.addEventListener('click', () => {
    const open = mainNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  });
  mainNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
    menuToggle?.setAttribute('aria-label', 'Open navigation menu');
  }));

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('show'), 2800);
  }

  const targetDate = new Date('2026-12-30T19:00:00+05:30').getTime();
  const pad = value => String(value).padStart(2, '0');
  function updateCountdown() {
    const diff = targetDate - Date.now();
    const el = document.getElementById('countdown');
    if (diff <= 0) {
      el.innerHTML = '<p class="countdown-finished">The celebration day is here. May it be filled with barakah.</p>';
      return;
    }
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = pad(hours);
    document.getElementById('minutes').textContent = pad(minutes);
    document.getElementById('seconds').textContent = pad(seconds);
  }
  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  document.getElementById('saveDate')?.addEventListener('click', () => {
    const ics = [
      'BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Fiza and Hamza//Wedding Invitation//EN', 'CALSCALE:GREGORIAN',
      'BEGIN:VEVENT', 'UID:fiza-hamza-nikah-20261230@wedding-invitation',
      'DTSTAMP:20261026T000000Z', 'DTSTART:20261230T133000Z', 'DTEND:20261230T173000Z',
      'SUMMARY:Nikah of Fiza Bano and Hamza Khan',
      'DESCRIPTION:With the blessings of Allah, join us for the Nikah celebration of Fiza Bano and Hamza Khan.',
      'LOCATION:M.E.S. School, Near Bilal Masjid, Halavphool, Kurla West, Mumbai 400070',
      'END:VEVENT', 'END:VCALENDAR'
    ].join('\r\n');
    const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Fiza-and-Hamza-Nikah.ics';
    document.body.appendChild(a); a.click(); a.remove();
    URL.revokeObjectURL(url);
    showToast('Wedding date calendar file downloaded.');
  });

  document.getElementById('copyAddress')?.addEventListener('click', async () => {
    const address = 'M.E.S. School, Near Bilal Masjid, Halavphool, Kurla West, Mumbai 400070';
    try {
      await navigator.clipboard.writeText(address);
      showToast('Venue address copied to clipboard.');
    } catch {
      const field = document.createElement('textarea');
      field.value = address; field.setAttribute('readonly', '');
      field.style.position = 'fixed'; field.style.opacity = '0';
      document.body.appendChild(field); field.select();
      const copied = document.execCommand('copy'); field.remove();
      showToast(copied ? 'Venue address copied to clipboard.' : address);
    }
  });

  function openLightbox(src, caption, alt) {
    lightboxImage.src = src;
    lightboxImage.alt = alt;
    lightboxCaption.textContent = caption;
    if (typeof lightbox.showModal === 'function') lightbox.showModal();
    else window.open(src, '_blank', 'noopener,noreferrer');
  }
  document.getElementById('viewCard')?.addEventListener('click', () => openLightbox('assets/original-invitation.webp', 'The original wedding invitation card', 'Original wedding invitation card for Fiza Bano and Hamza Khan'));
  document.getElementById('viewMayoun')?.addEventListener('click', () => openLightbox('assets/mayoun-celebration.webp', 'Fiza ki Mayoun', 'Mayoun celebration artwork'));
  document.getElementById('closeLightbox')?.addEventListener('click', () => lightbox.close());
  lightbox?.addEventListener('click', event => { if (event.target === lightbox) lightbox.close(); });

  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12, rootMargin: '0px 0px -25px 0px' });
    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
})();
