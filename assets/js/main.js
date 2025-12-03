document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('[data-nav-toggle]');
  const navLinks = document.querySelector('[data-nav]');

  navToggle?.addEventListener('click', () => {
    navLinks?.classList.toggle('is-open');
    const isOpen = navLinks?.classList.contains('is-open');
    navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  const tabButtons = document.querySelectorAll('[data-tab-target]');
  const tabPanels = document.querySelectorAll('[data-tab-panel]');

  tabButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.tabTarget;
      if (!target) return;

      tabButtons.forEach((btn) => btn.classList.toggle('is-active', btn === button));
      tabPanels.forEach((panel) => {
        const isMatch = panel.dataset.tabPanel === target;
        panel.classList.toggle('is-active', isMatch);
        if (isMatch) {
          panel.querySelectorAll('[data-confidence]').forEach(setConfidenceMeter);
        }
      });
    });
  });

  document.querySelectorAll('[data-confidence]').forEach(setConfidenceMeter);
});

function setConfidenceMeter(node) {
  const fill = node.querySelector('.meter-fill');
  if (!fill) return;
  const confidence = Number(node.dataset.confidence) || 0;
  fill.classList.toggle('is-low', confidence < 40);
  requestAnimationFrame(() => {
    fill.style.width = `${Math.max(0, Math.min(confidence, 100))}%`;
  });
}
