// content-fields.js
// Single source of truth for every "Site Content" field that the admin panel
// can edit and that index.html will render on load.
//
// mode:
//   'text' -> plain text, applied with textContent
//   'html' -> small HTML snippet (may contain <em>, <span>, <br>, <strong>) applied with innerHTML
//   'list' -> textarea, one bullet per line, rebuilt into <li> elements (no icons inside)
//
// sel: CSS selector used with document.querySelector() to find the element on index.html
// section: group label shown in the admin UI
// label: field label shown in the admin UI
// def: the current/default value already live on the site (used as placeholder + fallback)

var CONTENT_FIELDS = [

  // ---------- HERO ----------
  { key:'hero_h1', sel:'.hero h1', mode:'html', section:'Hero', label:'Headline (use <span class="line2">…</span> for the italic 2nd line)',
    def:'Helping you heal patterns the mind understands<span class="line2">but the body still carries.</span>' },
  { key:'hero_lede', sel:'.hero p.lede', mode:'text', section:'Hero', label:'Sub-line under headline',
    def:"You analyse the patterns clearly — and yet your body still reaches for the smallest triggers. That's a nervous system imprint." },
  { key:'hero_lede2', sel:'.hero p.lede2', mode:'text', section:'Hero', label:'Short italic line',
    def:"Let's rewire it together." },
  { key:'hero_fullLede', sel:'.hero p.full-lede', mode:'text', section:'Hero', label:'Full-width line under hero image',
    def:'At its core, therapy is not about becoming someone new. It is about understanding yourself more deeply and learning to live with greater clarity, compassion and freedom.' },
  { key:'hero_quote', sel:'.hero p.quote-line', mode:'text', section:'Hero', label:'Quote line',
    def:'"You don\'t have to have a clear reason. You don\'t have to have the right words. Starting is enough."' },

  // ---------- INTRODUCTION ----------
  { key:'intro_eyebrow', sel:'#introduction .section-eyebrow', mode:'text', section:'Introduction', label:'Eyebrow tag',
    def:"You're not alone" },
  { key:'intro_heading', sel:'#introduction .intro-heading', mode:'html', section:'Introduction', label:'Heading (HTML allowed, e.g. <em>, <br>)',
    def:'Most people who come here are <em>not<br>"broken."</em>' },
  { key:'intro_lede', sel:'#introduction .intro-lede', mode:'text', section:'Introduction', label:'Intro paragraph',
    def:'They are thoughtful, self-aware, and often doing well in many areas of life — yet something inside still feels unsettled.' },
  { key:'intro_boldLabel', sel:'#introduction .intro-bold', mode:'text', section:'Introduction', label:'Bold label above cards',
    def:'You may notice patterns like:' },

  { key:'intro_card1_title', sel:'.radial-card.card-top h4', mode:'text', section:'Introduction — Cards', label:'Card 1 title', def:'Feeling overwhelmed in relationships' },
  { key:'intro_card1_text', sel:'.radial-card.card-top p', mode:'text', section:'Introduction — Cards', label:'Card 1 text', def:'You care deeply, but relationships often leave you drained or confused.' },
  { key:'intro_card2_title', sel:'.radial-card.card-left1 h4', mode:'text', section:'Introduction — Cards', label:'Card 2 title', def:'Struggling with boundaries' },
  { key:'intro_card2_text', sel:'.radial-card.card-left1 p', mode:'text', section:'Introduction — Cards', label:'Card 2 text', def:'You find it hard to say no, or feel guilty when you do.' },
  { key:'intro_card3_title', sel:'.radial-card.card-right1 h4', mode:'text', section:'Introduction — Cards', label:'Card 3 title', def:'Freezing in conflict' },
  { key:'intro_card3_text', sel:'.radial-card.card-right1 p', mode:'text', section:'Introduction — Cards', label:'Card 3 text', def:'When tension rises, you shut down, avoid, or become numb.' },
  { key:'intro_card4_title', sel:'.radial-card.card-left2 h4', mode:'text', section:'Introduction — Cards', label:'Card 4 title', def:'Feeling disconnected from your body or emotions' },
  { key:'intro_card4_text', sel:'.radial-card.card-left2 p', mode:'text', section:'Introduction — Cards', label:'Card 4 text', def:'You may feel numb, checked out, or unfamiliar with what you need.' },
  { key:'intro_card5_title', sel:'.radial-card.card-right2 h4', mode:'text', section:'Introduction — Cards', label:'Card 5 title', def:"Carrying self-doubt that doesn't make sense logically" },
  { key:'intro_card5_text', sel:'.radial-card.card-right2 p', mode:'text', section:'Introduction — Cards', label:'Card 5 text', def:'You second-guess yourself, feel not enough, or live in constant overthinking.' },

  { key:'intro_quote', sel:'.intro-quote-bar p', mode:'html', section:'Introduction', label:'Quote bar (HTML allowed, e.g. <strong>)',
    def:'You may understand your story. <strong>But the reactions are automatic.</strong> That\'s where deeper work begins.' },

  { key:'intro_feat1_title', sel:'.intro-feature-bar .feature-item:nth-child(2) h5', mode:'text', section:'Introduction — Feature strip', label:'Feature 1 title', def:'You are not too much.' },
  { key:'intro_feat1_text', sel:'.intro-feature-bar .feature-item:nth-child(2) p', mode:'text', section:'Introduction — Feature strip', label:'Feature 1 text', def:"You're human." },
  { key:'intro_feat2_title', sel:'.intro-feature-bar .feature-item:nth-child(3) h5', mode:'text', section:'Introduction — Feature strip', label:'Feature 2 title', def:'Healing is possible.' },
  { key:'intro_feat2_text', sel:'.intro-feature-bar .feature-item:nth-child(3) p', mode:'text', section:'Introduction — Feature strip', label:'Feature 2 text', def:"And we're here to walk with you." },
  { key:'intro_feat3_title', sel:'.intro-feature-bar .feature-item:nth-child(4) h5', mode:'text', section:'Introduction — Feature strip', label:'Feature 3 title', def:"You don't have to do it alone." },
  { key:'intro_feat3_text', sel:'.intro-feature-bar .feature-item:nth-child(4) p', mode:'text', section:'Introduction — Feature strip', label:'Feature 3 text', def:'Support can make all the difference.' },
  { key:'intro_cta_heading', sel:'.feature-cta h4', mode:'text', section:'Introduction — Feature strip', label:'CTA heading', def:'Ready to begin?' },
  { key:'intro_cta_note', sel:'.feature-cta span', mode:'text', section:'Introduction — Feature strip', label:'CTA note', def:'Compassionate. Confidential. Here for you.' },

  // ---------- ABOUT / APPROACH ----------
  { key:'about_sub', sel:'#about .approach-sub', mode:'html', section:'About / Approach', label:'Sub-heading (HTML allowed, e.g. <br>)',
    def:'Working with the mind,<br>the body, and what lies beneath.' },
  { key:'about_feature1', sel:'#about .approach-features .approach-feature:nth-child(1) p', mode:'text', section:'About / Approach', label:'Feature paragraph 1',
    def:'My work integrates psychotherapy, trauma-informed care, somatic awareness and subconscious healing. We explore patterns gently while also paying attention to how they live in the body and in everyday life.' },
  { key:'about_feature2', sel:'#about .approach-features .approach-feature:nth-child(2) p', mode:'text', section:'About / Approach', label:'Feature paragraph 2',
    def:'Alongside psychological and body-based work, I also remain open to the deeper inner questions many people carry — around meaning, identity and a sense of connection with themselves.' },
  { key:'about_highlight_title', sel:'#about .approach-highlight h4', mode:'text', section:'About / Approach', label:'Highlight title',
    def:'For some, this becomes an important part of the healing process.' },
  { key:'about_highlight_text', sel:'#about .approach-highlight p', mode:'text', section:'About / Approach', label:'Highlight text',
    def:'When it does, we explore it in a grounded and thoughtful way, always anchored in emotional safety and clarity.' },

  // ---------- HOW I WORK ----------
  { key:'hiw_title', sel:'.how-i-work h3', mode:'text', section:'How I Work', label:'Section title', def:'How I Work' },
  { key:'hiw1_title', sel:'.hiw-grid .hiw-item:nth-child(1) h5', mode:'html', section:'How I Work', label:'Item 1 title', def:'TRAUMA-INFORMED<br>&amp; SAFE' },
  { key:'hiw1_text', sel:'.hiw-grid .hiw-item:nth-child(1) p', mode:'text', section:'How I Work', label:'Item 1 text', def:'Emotional safety comes first.' },
  { key:'hiw2_title', sel:'.hiw-grid .hiw-item:nth-child(2) h5', mode:'html', section:'How I Work', label:'Item 2 title', def:'MIND–BODY<br>INTEGRATION' },
  { key:'hiw2_text', sel:'.hiw-grid .hiw-item:nth-child(2) p', mode:'text', section:'How I Work', label:'Item 2 text', def:'Working with both psychology and the body.' },
  { key:'hiw3_title', sel:'.hiw-grid .hiw-item:nth-child(3) h5', mode:'html', section:'How I Work', label:'Item 3 title', def:'COMPASSIONATE<br>&amp; COLLABORATIVE' },
  { key:'hiw3_text', sel:'.hiw-grid .hiw-item:nth-child(3) p', mode:'text', section:'How I Work', label:'Item 3 text', def:'We explore together, at your pace.' },
  { key:'hiw4_title', sel:'.hiw-grid .hiw-item:nth-child(4) h5', mode:'html', section:'How I Work', label:'Item 4 title', def:'HOLISTIC &amp;<br>WHOLE-PERSON' },
  { key:'hiw4_text', sel:'.hiw-grid .hiw-item:nth-child(4) p', mode:'text', section:'How I Work', label:'Item 4 text', def:'Addressing mind, body, emotions and deeper self.' },
  { key:'hiw5_title', sel:'.hiw-grid .hiw-item:nth-child(5) h5', mode:'html', section:'How I Work', label:'Item 5 title', def:'MEANING &amp;<br>CONNECTION' },
  { key:'hiw5_text', sel:'.hiw-grid .hiw-item:nth-child(5) p', mode:'text', section:'How I Work', label:'Item 5 text', def:'Supporting you in finding clarity and direction.' },

  // ---------- PROFESSIONAL TRAINING ----------
  { key:'training_title', sel:'.approach-training-head h3', mode:'text', section:'Professional Training', label:'Section title', def:'Professional Training' },

  // ---------- SERVICES ----------
  { key:'services_eyebrow', sel:'#services .section-eyebrow', mode:'text', section:'Services', label:'Eyebrow tag', def:'Services' },
  { key:'services_heading', sel:'#services .section-head h2', mode:'html', section:'Services', label:'Heading (HTML allowed)',
    def:"Every person's process is different. <em>We decide together.</em>" },


  // ---------- CORPORATE / NGO / HOSPITAL ----------
  { key:'corp_eyebrow', sel:'#corporate .section-eyebrow', mode:'text', section:'Corporate / NGO / Hospital', label:'Eyebrow tag', def:'Corporate · NGO · Hospital' },
  { key:'corp_heading', sel:'#corporate .section-head h2', mode:'html', section:'Corporate / NGO / Hospital', label:'Heading (HTML allowed)',
    def:'Supporting emotional wellbeing <em>and performance</em> across organizations.' },
  { key:'corp1_title', sel:'.corp-grid .corp-card:nth-child(1) h4', mode:'text', section:'Corporate — Card 1', label:'Title', def:'Corporate' },
  { key:'corp1_bullets', sel:'.corp-grid .corp-card:nth-child(1) ul', mode:'list', section:'Corporate — Card 1', label:'Bullet points (one per line)',
    def:'Emotional regulation\nBurnout prevention\nLeadership awareness\nCommunication' },
  { key:'corp2_title', sel:'.corp-grid .corp-card:nth-child(2) h4', mode:'text', section:'Corporate — Card 2', label:'Title', def:'NGOs' },
  { key:'corp2_bullets', sel:'.corp-grid .corp-card:nth-child(2) ul', mode:'list', section:'Corporate — Card 2', label:'Bullet points (one per line)',
    def:'Compassion fatigue\nSecondary trauma\nResilience\nBoundary work' },
  { key:'corp3_title', sel:'.corp-grid .corp-card:nth-child(3) h4', mode:'text', section:'Corporate — Card 3', label:'Title', def:'Hospitals' },
  { key:'corp3_bullets', sel:'.corp-grid .corp-card:nth-child(3) ul', mode:'list', section:'Corporate — Card 3', label:'Bullet points (one per line)',
    def:'Burnout support\nStress regulation\nCritical incident processing\nTeam resilience' },

  // ---------- START HERE ----------
  { key:'start_eyebrow', sel:'#start .section-eyebrow', mode:'text', section:'Start Here', label:'Eyebrow tag', def:'Start Here' },
  { key:'start_heading', sel:'#start .section-head h2', mode:'html', section:'Start Here', label:'Heading (HTML allowed)',
    def:"You don't need to be in a crisis <em>to begin therapy.</em>" },
  { key:'start_intro', sel:'#start .section-head p', mode:'text', section:'Start Here', label:'Intro paragraph',
    def:"Most people start because something doesn't feel quite right. You may feel stuck in certain patterns, overwhelmed more often than you'd like, or simply sense that the way you've been coping is no longer working. You don't have to have a clear reason or the right words. Starting is enough." },
  { key:'start1_title', sel:'.start-grid .start-card:nth-child(1) h4', mode:'text', section:'Start Here — Cards', label:'Card 1 title', def:"What it's like to begin" },
  { key:'start1_text', sel:'.start-grid .start-card:nth-child(1) p', mode:'text', section:'Start Here — Cards', label:'Card 1 text',
    def:"It's normal to feel unsure — will I know what to say, will this help, am I overthinking this. These questions are part of the process. The first session is simply a conversation: we take time to understand what's bringing you in and what you're hoping for. There's no pressure to go deeper than you're ready for." },
  { key:'start2_title', sel:'.start-grid .start-card:nth-child(2) h4', mode:'text', section:'Start Here — Cards', label:'Card 2 title', def:'A note on discomfort' },
  { key:'start2_text', sel:'.start-grid .start-card:nth-child(2) p', mode:'text', section:'Start Here — Cards', label:'Card 2 text',
    def:"Therapy can feel uncomfortable at times. You may find yourself noticing things you've avoided or sitting with unfamiliar emotions. That discomfort isn't the goal — it's part of making space for something new. Over time, therapy helps you understand your patterns, feel more steady, and build a more supportive relationship with yourself." },
  { key:'fitnote_text', sel:'.fit-note-text', mode:'html', section:'Start Here', label:'"Who this may not be for" note (HTML allowed)',
    def:"<strong>Who this work may not be for:</strong> This work may not be the right fit if you are currently experiencing a severe psychiatric crisis that requires medical or hospital-based care, or if you are seeking diagnosis or medication management, which is best handled by a psychiatrist. If you're unsure whether this approach is right for you, we can explore that together during an initial consultation." },
  { key:'start_cta_text', sel:'#start .start-cta p', mode:'text', section:'Start Here', label:'CTA line',
    def:'Still deciding? A short intro call can help you figure out if this is the right fit — no commitment needed.' },

  // ---------- TESTIMONIALS PAGE — bottom CTA ----------
  { key:'testimonial_cta_text', sel:'#testimonial + section .start-cta p', mode:'text', section:'Testimonials Page', label:'CTA line (below testimonials)',
    def:'Curious what this could look like for you? A short conversation is a good place to start.' },

  // ---------- CONTACT ----------
  { key:'contact_heading', sel:'#contact h2', mode:'html', section:'Contact', label:'Heading (HTML allowed)',
    def:"If you're here, a part of you is <em>already ready.</em>" },
  { key:'contact_text', sel:'#contact .contact-grid > div:first-child > p', mode:'text', section:'Contact', label:'Paragraph',
    def:"You don't have to feel completely certain. You just have to be willing to begin. Reach out even if you're unsure whether therapy is right for you." },
  { key:'contact_email', sel:'#contact .contact-quick a', mode:'text', section:'Contact', label:'Email address',
    def:'manasvi@thegoodearthcitizen.com' }
];

if (typeof module !== 'undefined' && module.exports) { module.exports = CONTENT_FIELDS; }
