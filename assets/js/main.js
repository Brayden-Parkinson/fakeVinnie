const siteData = {
  home: {
    heritageScore: 27,
    stats: [
      {
        label: 'Documents Verified',
        value: '0 / 6',
        note: 'Every file references a "Domenico" with no timestamps'
      },
      {
        label: 'Alias Sightings',
        value: '4',
        note: 'Hat + sunglasses poker persona raises eyebrows'
      },
      {
        label: 'Wine References',
        value: '12',
        note: 'All cite the same conveniently glossy website'
      },
      {
        label: 'Family Tree Clarity',
        value: '17%',
        note: 'Multiple Domenicos & Valerios = statistical red flag'
      }
    ],
    quickHits: [
      'Cantina Cerretano story appears copy/pasted from tourism brochure',
      'Witness remembers strategic poker disguise allegedly for "the love of the game"',
      'Second-cousin math changes every retelling',
      'Websites can be faked – Brayden, 2025'
    ]
  },
  evidence: {
    tabs: [
      {
        id: 'documents',
        label: 'Documented Proof',
        description: 'Certificates and lineage charts allegedly tying Vinnie to the Cerretano dynasty.',
        items: [
          {
            title: 'Facciabella Winery landing page',
            verdict: 'Unverifiable',
            detail: 'The entire narrative hinges on a single scrolling page with hero shots of grapes and zero municipal seals.',
            linkLabel: 'Visit cantinacerretano.com',
            href: 'https://www.cantinacerretano.com/facciabbella/'
          },
          {
            title: 'Grandparent records (Vincent John & Vittoria)',
            verdict: 'Pending',
            detail: 'No PDFs surfaced. Vinnie simply said "look them up" and then typed for a suspiciously long time.',
            linkLabel: 'Request records',
            href: '#'
          },
          {
            title: 'Family tree sketch',
            verdict: 'Conflicted',
            detail: 'Contains at least three Domenicos in a row and several arrows labeled "maybe".',
            linkLabel: 'Open doodle',
            href: '#'
          }
        ]
      },
      {
        id: 'digital',
        label: 'Digital Forensics',
        description: 'Screenshots, metadata, and DNS traces that mysteriously vanish upon scrutiny.',
        items: [
          {
            title: 'Typing Duration Log',
            verdict: 'Altered',
            detail: 'Brayden reports Vinnie typing "for a really long time" which correlates with frantic Wikipedia editing.',
            linkLabel: 'View keystroke chart',
            href: '#'
          },
          {
            title: 'Domain lookup',
            verdict: 'Suspicious',
            detail: 'cantinacerretano.com registered via privacy guard. Real nonnas sign documents with full names.',
            linkLabel: 'See WHOIS stub',
            href: '#'
          },
          {
            title: 'Pinterest inspiration board',
            verdict: 'Compromised',
            detail: 'Winery aesthetic matches a free template named "TuscanSunSet_Final_FINAL".',
            linkLabel: 'Download board',
            href: '#'
          }
        ]
      },
      {
        id: 'behavioral',
        label: 'Behavioral Evidence',
        description: 'First-person accounts from Brayden & Kait pointing to elaborate cosplay.',
        items: [
          {
            title: 'Poker disguise incident',
            verdict: 'Documented',
            detail: 'Full hat and sunglasses ensemble allegedly "for the love of the game". Italians usually rely on nonna-level intuition instead.',
            linkLabel: 'Review testimony',
            href: '#witnesses'
          },
          {
            title: 'Over-confident lineage lecture',
            verdict: 'Contradictory',
            detail: 'Vinnie recites the Cantina story at TED-level speed yet cannot pin down whether Domenico was great or great-great.',
            linkLabel: 'Play audio (totally real)',
            href: '#'
          },
          {
            title: 'Website dependency',
            verdict: 'Fragile',
            detail: 'When challenged, Vinnie replies "You can go to the website" which is exactly what someone with a fabricated backstory would say.',
            linkLabel: 'Audit response',
            href: '#'
          }
        ]
      }
    ]
  },
  timeline: [
    {
      year: '1912*',
      title: 'Domenico "Facciabella" Cerretano allegedly stomps grapes',
      detail: 'No photographic proof beyond a sepia filter shared on the winery site. Asterisk denotes wishful thinking.'
    },
    {
      year: '1954',
      title: 'Valerio or possibly another Domenico migrates',
      detail: 'Passenger log lists a "Dominic Pagley" headed to New Jersey. Close enough, apparently.'
    },
    {
      year: '1990s',
      title: 'Vincent John & Vittoria referenced',
      detail: 'Family insists public records exist, yet citations remain "pending" for decades.'
    },
    {
      year: 'Poker Night, Unknown Year',
      title: 'Hat & sunglasses persona emerges',
      detail: 'Brayden: "There’s no telling the lengths you’d go for the love of the game." Italian heritage still unverified.'
    },
    {
      year: 'Present Day',
      title: 'Group chat skepticism spikes',
      detail: 'Brayden and Kait question everything while Vinnie clings to cantinacerretano.com and generational name loops.'
    }
  ],
  witnesses: [
    {
      name: 'Brayden Parkinson',
      quote: 'Don’t know what to believe. Everything is a lie. You’re probably not even Italian.',
      credibility: 92,
      tags: ['primary eyewitness', 'poker table historian']
    },
    {
      name: 'Kait Parkinson',
      quote: 'Questioning the heritage now? Oof.',
      credibility: 81,
      tags: ['peer review', 'heritage auditor']
    },
    {
      name: 'Brayden Parkinson (Follow-up)',
      quote: 'He’s typing for a really long time on this one lol.',
      credibility: 77,
      tags: ['behavioral analyst']
    },
    {
      name: 'Vinnie Paglioni',
      quote: 'Have I ever given you reason to doubt this story?',
      credibility: 18,
      tags: ['person of interest']
    }
  ]
};

const bodyPage = document.body.dataset.page;

const init = () => {
  highlightNav();
  switch (bodyPage) {
    case 'home':
      renderHome();
      break;
    case 'evidence':
      renderEvidenceTabs();
      break;
    case 'timeline':
      renderTimeline();
      break;
    case 'witnesses':
      renderWitnesses();
      break;
  }
};

const highlightNav = () => {
  const links = document.querySelectorAll('nav a[data-page]');
  links.forEach((link) => {
    if (link.dataset.page === bodyPage) {
      link.classList.add('is-active');
    }
  });
};

const renderHome = () => {
  const scoreDial = document.querySelector('[data-score-dial]');
  const scoreValue = document.querySelector('[data-score-value]');
  const statGrid = document.querySelector('[data-stat-grid]');
  const quickList = document.querySelector('[data-quick-list]');

  const score = siteData.home.heritageScore;
  if (scoreDial && scoreValue) {
    scoreValue.textContent = `${score}%`;
    scoreDial.style.background = `conic-gradient(var(--accent) ${score * 3.6}deg, rgba(255,255,255,0.05) 0)`;
  }

  if (statGrid) {
    statGrid.innerHTML = '';
    siteData.home.stats.forEach((stat) => {
      const card = document.createElement('article');
      card.className = 'stat-card';
      card.innerHTML = `<small class="badge">${stat.label}</small>
        <h3>${stat.value}</h3>
        <p>${stat.note}</p>`;
      statGrid.appendChild(card);
    });
  }

  if (quickList) {
    quickList.innerHTML = '';
    siteData.home.quickHits.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      quickList.appendChild(li);
    });
  }
};

const renderEvidenceTabs = () => {
  const buttonsWrap = document.querySelector('[data-tab-buttons]');
  const contentWrap = document.querySelector('[data-tab-content]');
  if (!buttonsWrap || !contentWrap) return;

  const { tabs } = siteData.evidence;
  let activeTab = tabs[0].id;

  const buildButtons = () => {
    buttonsWrap.innerHTML = '';
    tabs.forEach((tab) => {
      const button = document.createElement('button');
      button.textContent = tab.label;
      button.dataset.tab = tab.id;
      if (tab.id === activeTab) button.classList.add('is-active');
      button.addEventListener('click', () => {
        activeTab = tab.id;
        buildButtons();
        renderTabContent();
      });
      buttonsWrap.appendChild(button);
    });
  };

  const renderTabContent = () => {
    const tab = tabs.find((t) => t.id === activeTab);
    if (!tab) return;
    contentWrap.innerHTML = `
      <p class="callout">${tab.description}</p>
      <div class="card-grid">
        ${tab.items
          .map(
            (item) => `
              <article class="card">
                <small class="badge">${item.verdict}</small>
                <h3>${item.title}</h3>
                <p>${item.detail}</p>
                <a class="btn btn-ghost" href="${item.href}" target="_blank" rel="noopener">${item.linkLabel}</a>
              </article>
            `
          )
          .join('')}
      </div>
    `;
  };

  buildButtons();
  renderTabContent();
};

const renderTimeline = () => {
  const list = document.querySelector('[data-timeline-list]');
  if (!list) return;
  list.innerHTML = siteData.timeline
    .map(
      (entry) => `
      <article class="timeline-item">
        <span>${entry.year}</span>
        <div>
          <strong>${entry.title}</strong>
          <p>${entry.detail}</p>
        </div>
      </article>
    `
    )
    .join('');
};

const renderWitnesses = () => {
  const grid = document.querySelector('[data-witness-grid]');
  if (!grid) return;
  grid.innerHTML = siteData.witnesses
    .map(
      (witness) => `
      <article class="card witness-card">
        <strong>${witness.name}</strong>
        <blockquote>&ldquo;${witness.quote}&rdquo;</blockquote>
        <div class="progress" aria-label="credibility score">
          <span style="width:${witness.credibility}%"></span>
        </div>
        <small>${witness.credibility}% confidence</small>
        <ul class="list-inline">
          ${witness.tags.map((tag) => `<li>#${tag}</li>`).join('')}
        </ul>
      </article>
    `
    )
    .join('');
};

init();
