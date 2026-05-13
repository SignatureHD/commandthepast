/* Shared site chrome — header, footer, tweaks */
(function () {
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const navItems = [
    { href: 'index.html', label: 'Home', match: ['index.html', ''] },
    { href: 'battles.html', label: 'Battles', match: ['battles.html'] },
    { href: 'spion-kop.html', label: 'Spion Kop', match: ['spion-kop.html', 'spion-kop-learn.html'] },
    { href: 'spion-kop-play.html', label: 'Play', match: ['spion-kop-play.html'] },
    { href: 'sources.html', label: 'Sources', match: ['sources.html'] },
    { href: 'about.html', label: 'About', match: ['about.html'] },
  ];

  const headerHTML = `
    <header class="site-header" role="banner">
      <nav class="nav" aria-label="Primary">
        <a class="wordmark" href="index.html">
          <svg class="mark" viewBox="0 0 24 24" aria-hidden="true">
            <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="none" stroke="#b08d57" stroke-width="1.4"/>
            <polygon points="12,6 18,9 18,15 12,18 6,15 6,9" fill="none" stroke="#c8b97a" stroke-width="1"/>
            <circle cx="12" cy="12" r="1.6" fill="#b08d57"/>
          </svg>
          Command The Past
        </a>
        <ul class="nav-links">
          ${navItems.map(n => `
            <li><a href="${n.href}" class="${n.match.includes(here) ? 'active' : ''}">${n.label}</a></li>
          `).join('')}
        </ul>
        <a class="btn btn-primary btn-sm nav-cta" href="spion-kop-play.html">Play Spion Kop →</a>
      </nav>
    </header>
  `;

  const footerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="wordmark" href="index.html" style="color:var(--parchment);font-size:1.1rem;margin-bottom:0.8rem;">
              <svg class="mark" viewBox="0 0 24 24" aria-hidden="true">
                <polygon points="12,2 22,7 22,17 12,22 2,17 2,7" fill="none" stroke="#b08d57" stroke-width="1.4"/>
                <circle cx="12" cy="12" r="1.6" fill="#b08d57"/>
              </svg>
              Command The Past
            </a>
            <p style="max-width:34ch;margin-top:0.8rem;font-size:0.92rem;line-height:1.65;">
              An educational history project exploring the battles that shaped our world — through terrain, command decisions, and interactive scenarios.
            </p>
          </div>
          <div>
            <h5>Explore</h5>
            <ul>
              <li><a href="battles.html">Battle Archive</a></li>
              <li><a href="spion-kop.html">Spion Kop</a></li>
              <li><a href="spion-kop-learn.html">Read the History</a></li>
              <li><a href="spion-kop-play.html">Play the Battle</a></li>
            </ul>
          </div>
          <div>
            <h5>Project</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="sources.html">Sources & Methodology</a></li>
              <li><a href="sources.html#confidence">Confidence Framework</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-disclaimer">
          <p style="max-width:62ch;margin:0;">
            Command The Past is an educational history project. Interactive scenarios are designed to help users understand command decisions, terrain, uncertainty, and historical consequence. They are not intended to trivialise the human cost of war.
          </p>
          <p style="margin:0;letter-spacing:0.06em;font-size:0.78rem;">© 2026 · Built with Claude</p>
        </div>
      </div>
    </footer>
  `;

  const tweaksHTML = `
    <button id="tweaks-toggle" class="btn btn-secondary btn-sm"
      style="position:fixed;bottom:1.25rem;right:1.25rem;z-index:99;background:var(--command);color:var(--gold-light);border-color:rgba(200,185,122,0.4);">
      ⚙ Tweaks
    </button>
    <aside class="tweaks" id="tweaks-panel" aria-label="Design tweaks">
      <h6>Tweaks <button class="close-x" id="tweaks-close" aria-label="Close">×</button></h6>

      <label>Accent</label>
      <div class="swatches" id="accent-swatches">
        <button class="swatch" data-accent="brass" style="background:#b08d57" title="Brass" aria-label="Brass"></button>
        <button class="swatch" data-accent="oxblood" style="background:#8c4a44" title="Oxblood" aria-label="Oxblood"></button>
        <button class="swatch" data-accent="olive" style="background:#6b7558" title="Olive" aria-label="Olive"></button>
      </div>

      <label>Density</label>
      <select id="density-select">
        <option value="default">Default</option>
        <option value="compact">Compact</option>
        <option value="spacious">Spacious</option>
      </select>

      <label>Heading style</label>
      <select id="serif-select">
        <option value="playfair">Playfair Display</option>
        <option value="cormorant">Cormorant Garamond</option>
        <option value="eb">EB Garamond</option>
      </select>
    </aside>
  `;

  // Inject
  const headerSlot = document.getElementById('site-header');
  const footerSlot = document.getElementById('site-footer');
  if (headerSlot) headerSlot.outerHTML = headerHTML;
  if (footerSlot) footerSlot.outerHTML = footerHTML;

  // Skip auto-injecting the default tweaks panel if the page provides its own
  const skipTweaks = document.body.hasAttribute('data-skip-default-tweaks');
  if (!skipTweaks) {
    document.body.insertAdjacentHTML('beforeend', tweaksHTML);
  }

  // Tweaks behaviour
  const toggle = document.getElementById('tweaks-toggle');
  const panel = document.getElementById('tweaks-panel');
  const closeBtn = document.getElementById('tweaks-close');

  // Restore from localStorage
  const stored = JSON.parse(localStorage.getItem('ctp-tweaks') || '{}');
  if (stored.accent) document.documentElement.dataset.accent = stored.accent;
  if (stored.density) document.documentElement.dataset.density = stored.density;
  if (stored.serif) applySerif(stored.serif);

  function persist() {
    localStorage.setItem('ctp-tweaks', JSON.stringify({
      accent: document.documentElement.dataset.accent || 'brass',
      density: document.documentElement.dataset.density || 'default',
      serif: document.documentElement.dataset.serif || 'playfair',
    }));
  }

  function applySerif(value) {
    document.documentElement.dataset.serif = value;
    const map = {
      playfair: "'Playfair Display', Georgia, serif",
      cormorant: "'Cormorant Garamond', Georgia, serif",
      eb: "'EB Garamond', Georgia, serif",
    };
    document.documentElement.style.setProperty('--serif', map[value] || map.playfair);
  }

  if (toggle && panel && closeBtn) {
    toggle.addEventListener('click', () => panel.classList.toggle('open'));
    closeBtn.addEventListener('click', () => panel.classList.remove('open'));

    document.querySelectorAll('#accent-swatches .swatch').forEach(b => {
      if ((document.documentElement.dataset.accent || 'brass') === b.dataset.accent) b.classList.add('active');
      b.addEventListener('click', () => {
        document.querySelectorAll('#accent-swatches .swatch').forEach(x => x.classList.remove('active'));
        b.classList.add('active');
        document.documentElement.dataset.accent = b.dataset.accent;
        persist();
      });
    });

    const densitySelect = document.getElementById('density-select');
    densitySelect.value = stored.density || 'default';
    densitySelect.addEventListener('change', e => {
      document.documentElement.dataset.density = e.target.value;
      persist();
    });

    const serifSelect = document.getElementById('serif-select');
    serifSelect.value = stored.serif || 'playfair';
    serifSelect.addEventListener('change', e => {
      applySerif(e.target.value);
      persist();
    });
  }

  // Scroll-reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();
