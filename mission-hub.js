(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const hub = $('.mission-hub');
  if (!hub) return;

  const feedback = $('#mission-hub-feedback', hub);
  const missionNames = {
    fix: 'Fix This Design',
    color: 'Color Battle',
    type: 'Typography Hero',
    scan: 'Scan Mission',
    asset: 'Asset Hunter'
  };
  const missionNotes = {
    fix: 'Kamu akan membandingkan poster yang kurang efektif, menemukan masalah visual, lalu memperbaikinya. Misi ini menjadi tantangan berikutnya yang akan kita bangun.',
    color: 'Kamu akan memilih kombinasi warna sesuai suasana pesan, lalu memeriksa kontras agar informasi tetap mudah dibaca.',
    type: 'Kamu akan menyusun judul, subjudul, dan informasi pendukung agar pembaca memahami urutan pesan.',
    scan: 'Kamu akan menyiapkan sketsa, memilih mode dan resolusi pemindaian, kemudian memeriksa file digitalnya.',
    asset: 'Kamu akan mencari aset visual, memeriksa sumber dan izin penggunaan, lalu menyusun folder proyek.'
  };

  const startButton = $('[data-mission-start="layout"]', hub);
  startButton?.addEventListener('click', () => {
    const challenge = $('#mini-lab');
    if (feedback) feedback.textContent = 'Misi Layout Architect dimulai. Susun tiga elemen poster, lalu lanjutkan ke level kontras dan hierarki visual.';
    if (challenge) {
      challenge.classList.add('mission-target-pulse');
      challenge.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      window.setTimeout(() => challenge.classList.remove('mission-target-pulse'), 1400);
      const firstItem = $('[data-layout="navbar"]', challenge);
      if (firstItem) window.setTimeout(() => firstItem.focus({ preventScroll: true }), 450);
    }
  });

  $$('[data-mission-preview]', hub).forEach((card) => {
    card.addEventListener('click', () => {
      const key = card.dataset.missionPreview;
      if (!missionNames[key] || !feedback) return;
      feedback.textContent = `${missionNames[key]} — ${missionNotes[key]}`; 
      feedback.classList.remove('is-fresh');
      void feedback.offsetWidth;
      feedback.classList.add('is-fresh');
      card.classList.add('mission-card-tapped');
      window.setTimeout(() => card.classList.remove('mission-card-tapped'), 500);
    });
  });
})();
