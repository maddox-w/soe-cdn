/* SOE master boot — concatenated 2026-05-04 */

/* === boot-design-v2 === */
(function(){
  var amp = String.fromCharCode(38);
  var l = document.createElement(`link`);
  l.rel = `stylesheet`;
  l.href = `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800` + amp + `family=Inter:wght@300;400;500;600;700;800` + amp + `family=JetBrains+Mono:wght@400;500;600;700` + amp + `display=swap`;
  document.head.appendChild(l);

  var s = document.createElement(`style`);
  s.setAttribute(`data-soe-design`, `v2`);
  var css = [
    // ===== Hide ALL legacy chrome + content being replaced =====
    `.soe-header,.soe-footer,.soe-banner-section,.soe-hero-section,.soe-section,.mm-hero-section,.mm-info-bar,.mm-features-section,.mm-videos-section,.soe-runtime7,#soe-mobile-nav,#soe-nav-backdrop{display:none !important;}`,
    // ===== Tokens =====
    `:root{--jd-green:#367C2B;--jd-green-dark:#2A5F22;--jd-green-mid:#4A9540;--signal-yellow:#FFDE00;--safety-amber:#F5A524;--ink:#0E1110;--graphite:#1A1F1C;--paper:#FFFFFF;--steel-50:#F6F7F5;--steel-100:#EAEDE8;--steel-200:#D4D8D2;--steel-300:#A5ADA4;--steel-500:#6B746A;--steel-700:#3A413A;--font-display:\x22Inter Tight\x22,\x22Inter\x22,system-ui,sans-serif;--font-sans:\x22Inter\x22,system-ui,sans-serif;--font-nav:\x22Inter\x22,system-ui,sans-serif;--font-mono:\x22JetBrains Mono\x22,ui-monospace,monospace;--gutter:64px;--header-h:72px;--util-h:40px;}`,

    // ===== Reset / base =====
    `body{margin:0;padding:0;font-family:var(--font-sans);color:var(--ink);background:var(--paper);font-size:16px;line-height:1.55;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;}`,
    `[data-soe] *{box-sizing:border-box;}`,
    `[data-soe] img{max-width:100%;display:block;}`,
    `[data-soe] a{color:inherit;text-decoration:none;}`,
    `[data-soe] ul{list-style:none;margin:0;padding:0;}`,
    `[data-soe] h1,[data-soe] h2,[data-soe] h3,[data-soe] h4{margin:0;}`,

    // ===== Page wrapper =====
    `[data-soe=page]{background:var(--paper);position:relative;min-height:100vh;}`,

    // ===== Top utility bar =====
    `[data-soe=top-util]{background:#000;color:var(--steel-300);height:var(--util-h);display:flex;align-items:center;padding:0 var(--gutter);font-family:var(--font-nav);font-size:13px;border-bottom:1px solid rgba(255,255,255,.06);}`,
    `[data-soe=top-util-left]{display:flex;align-items:center;gap:28px;}`,
    `[data-soe=top-util-link]{display:inline-flex;align-items:center;gap:8px;color:var(--steel-300);transition:color .15s;}`,
    `[data-soe=top-util-link]:hover{color:var(--paper);}`,
    `[data-soe=top-util-icon]{width:14px;height:14px;color:var(--jd-green-mid);flex-shrink:0;}`,

    // ===== Primary nav =====
    `[data-soe=nav]{background:var(--ink);color:var(--paper);height:var(--header-h);display:flex;align-items:stretch;padding-left:var(--gutter);border-bottom:1px solid rgba(255,255,255,.08);position:relative;z-index:5;}`,
    `[data-soe=nav-brand]{display:flex;align-items:center;gap:12px;padding-right:24px;margin-right:16px;border-right:1px solid rgba(255,255,255,.12);white-space:nowrap;}`,
    `[data-soe=nav-mark]{width:36px;height:36px;background:var(--jd-green);position:relative;flex-shrink:0;}`,
    `[data-soe=nav-mark]::after{content:\x22\x22;position:absolute;inset:0;background:var(--signal-yellow);clip-path:polygon(50% 22%,82% 78%,18% 78%);}`,
    `[data-soe=nav-word]{font-family:var(--font-display);font-weight:800;font-size:17px;line-height:1;letter-spacing:.005em;color:var(--paper);}`,
    `[data-soe=nav-word-sub]{display:block;font-family:var(--font-nav);font-weight:500;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--steel-500);margin-top:5px;}`,
    `[data-soe=nav-links]{display:flex;align-items:stretch;}`,
    `[data-soe=nav-link]{font-family:var(--font-nav);color:var(--paper);padding:0 14px;font-size:14px;font-weight:400;display:inline-flex;align-items:center;height:100%;white-space:nowrap;border-top:3px solid transparent;border-bottom:3px solid transparent;transition:color .15s,border-color .15s;position:relative;}`,
    `[data-soe=nav-link]:hover{color:var(--jd-green-mid);}`,
    `[data-soe=nav-link][data-soe-state=active]{border-bottom-color:var(--jd-green);color:var(--paper);font-weight:500;}`,
    `[data-soe=nav-caret]{display:inline-block;margin-left:8px;width:6px;height:6px;border-right:1.5px solid currentColor;border-bottom:1.5px solid currentColor;transform:translateY(-2px) rotate(45deg);opacity:.55;}`,
    `[data-soe=nav-spacer]{flex:1;}`,
    `[data-soe=nav-cta]{align-self:stretch;display:flex;align-items:center;background:var(--jd-green);color:var(--paper);padding:0 26px;font-family:var(--font-nav);font-weight:600;font-size:14px;transition:background .15s;position:relative;white-space:nowrap;}`,
    `[data-soe=nav-cta]:hover{background:var(--jd-green-dark);}`,
    `[data-soe=arr]{margin-left:10px;display:inline-block;width:18px;height:1.5px;background:currentColor;position:relative;}`,
    `[data-soe=arr]::after{content:\x22\x22;position:absolute;right:0;top:-3px;width:8px;height:8px;border-top:1.5px solid currentColor;border-right:1.5px solid currentColor;transform:rotate(45deg);}`,

    // ===== Hamburger + drawer (mobile only — hidden by default) =====
    `[data-soe=nav-hamburger]{display:none;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;background:transparent;border:0;cursor:pointer;padding:0;order:-1;align-self:center;}`,
    `[data-soe=nav-hamburger] span{display:block;width:22px;height:2px;background:var(--paper);transition:transform .2s,opacity .2s;}`,
    `[data-soe=nav-drawer]{display:none;position:fixed;top:0;left:0;right:0;bottom:0;background:var(--ink);z-index:100;padding:80px 32px 40px;transform:translateX(-100%);transition:transform .3s ease;overflow-y:auto;}`,
    `[data-soe=nav-drawer][data-soe-state=open]{transform:translateX(0);}`,
    `[data-soe=nav-drawer] li{border-bottom:1px solid rgba(255,255,255,.1);}`,
    `[data-soe=nav-drawer] a{display:block;padding:18px 0;font-family:var(--font-nav);font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:var(--paper);font-weight:600;}`,
    `[data-soe=drawer-close]{position:absolute;top:20px;right:20px;width:36px;height:36px;background:transparent;border:0;cursor:pointer;color:var(--paper);font-size:28px;line-height:1;}`,
    `[data-soe=drawer-contact]{margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;gap:12px;}`,
    `[data-soe=drawer-contact] a{color:var(--steel-300);font-size:14px;display:flex;align-items:center;gap:10px;padding:0;text-transform:none;letter-spacing:0;font-weight:400;}`,

    // ===== Buttons =====
    `[data-soe=btn]{font-family:var(--font-nav);font-weight:600;font-size:15px;padding:14px 28px;border:none;border-radius:0;cursor:pointer;display:inline-flex;align-items:center;gap:12px;line-height:1;transition:background .15s,color .15s,border-color .15s,transform .1s;text-decoration:none;white-space:nowrap;}`,
    `[data-soe=btn]:active{transform:translateY(1px);}`,
    `[data-soe=btn][data-soe-variant=primary]{background:var(--jd-green);color:var(--paper);}`,
    `[data-soe=btn][data-soe-variant=primary]:hover{background:var(--jd-green-dark);}`,
    `[data-soe=btn][data-soe-variant=dark]{background:var(--ink);color:var(--paper);}`,
    `[data-soe=btn][data-soe-variant=dark]:hover{background:var(--graphite);}`,
    `[data-soe=btn][data-soe-variant=outline]{background:transparent;color:var(--ink);border:2px solid var(--ink);padding:12px 26px;}`,
    `[data-soe=btn][data-soe-variant=outline]:hover{background:var(--ink);color:var(--paper);}`,
    `[data-soe=btn][data-soe-variant=inverse-outline]{background:transparent;color:var(--paper);border:2px solid var(--paper);padding:12px 26px;}`,
    `[data-soe=btn][data-soe-variant=inverse-outline]:hover{background:var(--paper);color:var(--ink);}`,
    `[data-soe=btn][data-soe-variant=ghost]{background:transparent;color:var(--jd-green);padding:0;border-bottom:2px solid var(--jd-green);}`,
    `[data-soe=btn][data-soe-size=lg]{font-size:16px;padding:18px 36px;}`,

    // ===== Eyebrow + lede shared =====
    `[data-soe=eyebrow]{font-family:var(--font-mono);font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--jd-green);font-weight:700;display:inline-flex;align-items:center;gap:12px;}`,
    `[data-soe=eyebrow]::before{content:\x22\x22;width:24px;height:1px;background:var(--jd-green);display:inline-block;}`,
    `[data-soe=lede]{font-family:var(--font-sans);font-weight:400;font-size:20px;line-height:1.5;color:var(--steel-700);max-width:580px;margin:0;}`,

    // ===== Crumbs =====
    `[data-soe=crumbs]{background:var(--steel-100);border-bottom:1px solid var(--steel-200);height:38px;padding:0 var(--gutter);display:flex;align-items:center;gap:12px;font-family:var(--font-mono);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel-700);}`,
    `[data-soe=crumbs] a{color:var(--steel-700);transition:color .15s;}`,
    `[data-soe=crumbs] a:hover{color:var(--ink);}`,
    `[data-soe=crumbs-sep]{opacity:.35;}`,
    `[data-soe=crumbs-current]{color:var(--ink);font-weight:700;}`,
    `[data-soe=crumbs-meta]{margin-left:auto;color:var(--steel-700);}`,

    // ===== Hero rotator =====
    `[data-soe=hero]{position:relative;min-height:720px;background:var(--ink);color:var(--paper);overflow:hidden;}`,
    `[data-soe=hero-stage]{position:absolute;inset:0;}`,
    `[data-soe=hero-slide]{position:absolute;inset:0;opacity:0;transition:opacity .9s ease;pointer-events:none;}`,
    `[data-soe=hero-slide][data-soe-state=active]{opacity:1;pointer-events:auto;z-index:1;}`,
    `[data-soe=hero-bg]{position:absolute;inset:0;background-size:cover;background-position:center;transform:scale(1);transition:transform 0s linear;will-change:transform;}`,
    `[data-soe=hero-slide][data-soe-state=active] [data-soe=hero-bg]{transform:scale(1.06);transition:transform 9s linear;}`,
    `[data-soe=hero-bg]::after{content:\x22\x22;position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.55) 45%,rgba(0,0,0,.18) 100%);}`,
    `[data-soe=hero-content]{position:relative;z-index:2;min-height:720px;padding:0 var(--gutter);}`,
    `[data-soe=hero-text]{position:absolute;top:180px;left:var(--gutter);right:var(--gutter);max-width:920px;}`,
    `[data-soe=hero-brand-tag]{font-family:var(--font-mono);font-size:11px;letter-spacing:.26em;text-transform:uppercase;color:var(--jd-green-mid);margin-bottom:28px;display:inline-flex;align-items:center;gap:14px;}`,
    `[data-soe=hero-brand-tag]::before{content:\x22\x22;width:28px;height:1px;background:var(--jd-green-mid);}`,
    `[data-soe=hero-h1]{font-family:var(--font-display);font-weight:800;font-size:64px;line-height:1.05;letter-spacing:-.03em;margin:0 0 12px;color:var(--paper);max-width:920px;padding-bottom:8px;}`,
    `[data-soe=hero-subline]{display:block;color:var(--safety-amber);margin-top:8px;line-height:1.05;}`,
    `[data-soe=hero-lede]{font-family:var(--font-sans);font-size:18px;line-height:1.55;color:var(--steel-300);max-width:540px;margin:28px 0 40px;}`,
    `[data-soe=hero-ctas]{display:flex;gap:14px;}`,

    // ===== Intro typewriter =====
    `[data-soe=intro]{background:var(--paper);padding:140px var(--gutter) 120px;text-align:center;}`,
    `[data-soe=intro] [data-soe=eyebrow]{justify-content:center;margin-bottom:56px;}`,
    `[data-soe=intro] [data-soe=eyebrow]::after{content:\x22\x22;width:24px;height:1px;background:var(--jd-green);display:inline-block;}`,
    `[data-soe=intro-lockup]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;margin:0 auto 32px;max-width:100%;padding:0 var(--gutter);}`,
    `[data-soe=intro-leadin]{font-family:var(--font-display);font-weight:800;font-size:clamp(40px,6vw,80px);line-height:1.02;letter-spacing:-.035em;color:var(--ink);}`,
    `[data-soe=intro-line2]{display:inline-flex;align-items:baseline;gap:0 18px;font-family:var(--font-display);font-weight:800;font-size:clamp(40px,6vw,80px);line-height:1.02;letter-spacing:-.035em;}`,
    `[data-soe=intro-isprefix]{color:var(--ink);}`,
    `[data-soe=intro-word]{font-family:var(--font-display);font-weight:800;font-size:clamp(40px,6vw,80px);line-height:1.02;letter-spacing:-.035em;color:var(--jd-green);display:inline-flex;align-items:baseline;min-width:5ch;text-align:left;justify-content:flex-start;}`,
    `[data-soe=intro-word]::after{content:\x22\x22;display:inline-block;width:5px;height:.82em;background:var(--jd-green);margin-left:8px;transform:translateY(.05em);animation:soeCaret 1s steps(2,start) infinite;}`,
    `@keyframes soeCaret{50%{opacity:0;}}`,
    `[data-soe=intro-tagline]{font-family:var(--font-sans);font-size:20px;color:var(--steel-700);line-height:1.55;max-width:580px;margin:0 auto;}`,
    `[data-soe=intro-underline]{width:64px;height:3px;background:var(--jd-green);margin:44px auto 0;}`,

    // ===== Brands section (Home) =====
    `[data-soe=brands-section]{background:var(--steel-50);padding:120px var(--gutter) 140px;border-top:1px solid var(--steel-200);}`,
    `[data-soe=brands-head]{display:grid;grid-template-columns:1fr auto;gap:64px;align-items:end;margin-bottom:64px;}`,
    `[data-soe=brands-head-h2]{font-family:var(--font-display);font-weight:800;font-size:64px;line-height:1;letter-spacing:-.025em;margin:24px 0 20px;color:var(--ink);max-width:720px;}`,
    `[data-soe=brands-head-lede]{font-family:var(--font-sans);font-size:19px;color:var(--steel-700);line-height:1.55;max-width:540px;margin:0;}`,
    `[data-soe=brand-grid]{display:grid;grid-template-columns:repeat(2,1fr);gap:32px;}`,
    `[data-soe=brand-card-h]{background:var(--paper);border:1px solid var(--steel-200);display:flex;flex-direction:column;transition:border-color .2s,transform .2s;text-decoration:none;}`,
    `[data-soe=brand-card-h]:hover{border-color:var(--jd-green);transform:translateY(-2px);}`,
    `[data-soe=brand-card-visual]{aspect-ratio:16 / 9;background:var(--steel-100);background-size:cover;background-position:center;position:relative;border-bottom:1px solid var(--steel-200);overflow:hidden;}`,
    `[data-soe=brand-card-visual]::before{content:\x22\x22;position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 14px,rgba(255,255,255,0) 14px 28px);}`,
    `[data-soe=brand-card-visual]::after{content:\x22\x22;position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.5) 0%,rgba(0,0,0,0) 55%);}`,
    `[data-soe=brand-card-vbadge]{position:absolute;top:20px;left:20px;background:var(--signal-yellow);color:var(--ink);font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;padding:6px 10px;z-index:2;}`,
    `[data-soe=brand-card-vbadge][data-soe-variant=green]{background:var(--jd-green);color:var(--paper);}`,
    `[data-soe=brand-card-body]{padding:36px 36px 32px;flex:1;display:flex;flex-direction:column;}`,
    `[data-soe=brand-card-cat]{font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--jd-green);margin-bottom:14px;font-weight:700;}`,
    `[data-soe=brand-card-name]{font-family:var(--font-display);font-weight:800;font-size:36px;line-height:1;letter-spacing:-.02em;margin:0 0 14px;color:var(--ink);}`,
    `[data-soe=brand-card-desc]{font-family:var(--font-sans);font-size:15px;color:var(--steel-700);line-height:1.6;margin:0 0 28px;flex:1;}`,
    `[data-soe=brand-card-foot]{display:flex;justify-content:space-between;align-items:center;padding-top:22px;border-top:1px solid var(--steel-200);font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;}`,
    `[data-soe=brand-card-origin]{color:var(--steel-700);}`,
    `[data-soe=brand-card-origin] b{color:var(--ink);font-weight:700;}`,
    `[data-soe=brand-card-link]{color:var(--jd-green);font-weight:700;display:inline-flex;align-items:center;gap:8px;}`,

    // ===== CTA band =====
    `[data-soe=cta-band]{background:var(--ink);color:var(--paper);padding:100px var(--gutter);position:relative;overflow:hidden;border-top:8px solid var(--jd-green);}`,
    `[data-soe=cta-band]::before{content:\x22\x22;position:absolute;right:-100px;bottom:-100px;width:360px;height:360px;background:var(--jd-green);transform:rotate(45deg);opacity:.9;}`,
    `[data-soe=cta-band-inner]{position:relative;z-index:2;display:grid;grid-template-columns:1fr auto;gap:80px;align-items:center;max-width:1200px;}`,
    `[data-soe=cta-band] [data-soe=eyebrow]{color:var(--jd-green-mid);margin-bottom:24px;}`,
    `[data-soe=cta-band] [data-soe=eyebrow]::before{background:var(--jd-green-mid);}`,
    `[data-soe=cta-band-h2]{font-family:var(--font-display);font-weight:800;font-size:56px;line-height:1.02;letter-spacing:-.025em;margin:0 0 20px;color:var(--paper);max-width:720px;}`,
    `[data-soe=cta-band-lede]{font-family:var(--font-sans);font-size:18px;color:var(--steel-300);max-width:600px;margin:0;line-height:1.55;}`,
    `[data-soe=cta-band-ctas]{display:flex;flex-direction:column;gap:12px;}`,

    // ===== Page head (Brands) =====
    `[data-soe=page-head]{background:var(--paper);padding:80px var(--gutter) 64px;border-bottom:1px solid var(--steel-200);}`,
    `[data-soe=page-head-h1]{font-family:var(--font-display);font-weight:800;font-size:88px;line-height:.95;letter-spacing:-.03em;margin:24px 0 24px;color:var(--ink);}`,
    `[data-soe=page-head-lede]{font-family:var(--font-sans);font-size:20px;line-height:1.55;color:var(--steel-700);max-width:560px;margin:0;}`,

    // ===== Brands editorial cards (Brands page) =====
    `[data-soe=brands-list]{background:var(--paper);padding:80px var(--gutter) 100px;}`,
    `[data-soe=brands-list-grid]{display:grid;grid-template-columns:1fr;gap:2px;background:var(--steel-200);border:1px solid var(--steel-200);}`,
    `[data-soe=brand-card]{background:var(--paper);display:grid;grid-template-columns:5fr 4fr;min-height:420px;transition:background .15s;}`,
    `[data-soe=brand-card]:hover{background:var(--steel-50);}`,
    `[data-soe=brand-card-info]{padding:40px 40px 36px;display:flex;flex-direction:column;justify-content:space-between;}`,
    `[data-soe=brand-card-info-top]{display:flex;flex-direction:column;gap:16px;}`,
    `[data-soe=brand-card-num]{font-family:var(--font-mono);font-size:11px;letter-spacing:.22em;color:var(--jd-green);font-weight:700;}`,
    `[data-soe=brand-card-h3]{font-family:var(--font-display);font-weight:800;font-size:40px;line-height:1;letter-spacing:-.02em;margin:0;color:var(--ink);}`,
    `[data-soe=brand-card-origin-line]{font-family:var(--font-mono);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel-700);}`,
    `[data-soe=brand-card-origin-line] b{color:var(--ink);font-weight:700;}`,
    `[data-soe=brand-card-desc-l]{font-family:var(--font-sans);font-size:15px;line-height:1.6;color:var(--steel-700);margin:16px 0 0;}`,
    `[data-soe=brand-card-specs]{display:grid;grid-template-columns:1fr 1fr;gap:20px 28px;margin-top:28px;padding-top:24px;border-top:1px solid var(--steel-200);}`,
    `[data-soe=brand-card-spec-label]{font-family:var(--font-mono);font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--steel-700);margin-bottom:4px;}`,
    `[data-soe=brand-card-spec-value]{font-family:var(--font-sans);font-weight:600;font-size:14px;color:var(--ink);}`,
    `[data-soe=brand-card-info-foot]{display:flex;justify-content:space-between;align-items:center;margin-top:28px;}`,
    `[data-soe=brand-card-tag]{display:inline-flex;align-items:center;gap:6px;font-family:var(--font-mono);font-size:10px;letter-spacing:.18em;text-transform:uppercase;font-weight:700;padding:4px 10px;background:var(--jd-green-wash,#F3F8F0);color:var(--jd-green-dark);border:1px solid var(--jd-green-light,#DDECD7);}`,
    `[data-soe=brand-card-tag][data-soe-variant=bestseller]{background:#FFF7D4;color:#6B5400;border-color:#F0E08E;}`,
    `[data-soe=brand-card-tag][data-soe-variant=new]{background:var(--ink);color:var(--paper);border-color:var(--ink);}`,
    `[data-soe=brand-card-link-large]{font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--jd-green);font-weight:700;display:inline-flex;align-items:center;gap:10px;}`,
    `[data-soe=brand-card-visual-l]{position:relative;border-left:1px solid var(--steel-200);overflow:hidden;background:var(--steel-100);background-size:cover;background-position:center;}`,
    `[data-soe=brand-card-visual-l]::before{content:\x22\x22;position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 14px,rgba(255,255,255,0) 14px 28px);}`,
    `[data-soe=brand-card-visual-l]::after{content:\x22\x22;position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 50%);}`,
    `[data-soe=brand-card-vmeta]{position:absolute;bottom:20px;left:24px;font-family:var(--font-mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.5);z-index:2;}`,

    // ===== Dealer strip (Brands page) =====
    `[data-soe=dealer-strip]{background:var(--ink);color:var(--paper);padding:64px var(--gutter);display:grid;grid-template-columns:1fr auto;gap:64px;align-items:center;}`,
    `[data-soe=dealer-strip] [data-soe=eyebrow]{color:var(--jd-green-mid);margin-bottom:16px;}`,
    `[data-soe=dealer-strip] [data-soe=eyebrow]::before{background:var(--jd-green-mid);}`,
    `[data-soe=dealer-strip-h2]{font-family:var(--font-display);font-weight:800;font-size:40px;line-height:1.05;letter-spacing:-.02em;margin:0;color:var(--paper);max-width:660px;}`,

    // ===== Mulch Mule p-hero =====
    `[data-soe=p-hero]{position:relative;min-height:620px;background:var(--ink);color:var(--paper);overflow:hidden;}`,
    `[data-soe=p-hero-bg]{position:absolute;inset:0;background-size:cover;background-position:center;}`,
    `[data-soe=p-hero-bg]::before{content:\x22\x22;position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.55) 50%,rgba(0,0,0,.2) 100%);}`,
    `[data-soe=p-hero-content]{position:relative;z-index:2;min-height:620px;padding:72px var(--gutter) 80px;display:flex;flex-direction:column;justify-content:center;max-width:880px;}`,
    `[data-soe=p-hero-mark]{display:inline-flex;align-items:center;gap:16px;background:rgba(0,0,0,.4);border-left:3px solid var(--jd-green-mid);padding:14px 22px;margin-bottom:28px;width:fit-content;}`,
    `[data-soe=p-hero-mark-logo]{font-family:var(--font-display);font-weight:900;font-size:22px;color:var(--safety-amber);letter-spacing:-.01em;text-transform:lowercase;font-style:italic;}`,
    `[data-soe=p-hero-mark-meta]{font-family:var(--font-mono);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--steel-300);border-left:1px solid rgba(255,255,255,.15);padding-left:16px;line-height:1.5;}`,
    `[data-soe=p-hero-mark-meta] b{color:var(--paper);font-weight:700;}`,
    `[data-soe=p-hero-h1]{font-family:var(--font-display);font-weight:800;font-size:64px;line-height:1.05;letter-spacing:-.03em;margin:0 0 12px;color:var(--paper);max-width:820px;}`,
    `[data-soe=p-hero-subline]{display:block;color:var(--safety-amber);margin-top:8px;line-height:1.05;}`,
    `[data-soe=p-hero-lede]{font-family:var(--font-sans);font-size:19px;line-height:1.55;color:var(--steel-300);max-width:540px;margin:0 0 36px;}`,
    `[data-soe=p-hero-ctas]{display:flex;gap:14px;}`,

    // ===== Promo strip (info bar) =====
    `[data-soe=promo-strip]{background:var(--jd-green);color:var(--paper);padding:18px var(--gutter);display:flex;align-items:center;justify-content:center;gap:18px;font-family:var(--font-nav);font-size:15px;font-weight:500;text-align:center;}`,
    `[data-soe=promo-strip-ico]{width:18px;height:18px;border:2px solid currentColor;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;font-size:12px;flex-shrink:0;}`,
    `[data-soe=promo-strip] a{color:var(--paper);border-bottom:1px solid rgba(255,255,255,.6);padding-bottom:1px;font-weight:600;}`,

    // ===== Difference (Mulch Mule) =====
    `[data-soe=difference]{background:var(--steel-50);padding:100px var(--gutter) 120px;border-top:1px solid var(--steel-200);border-bottom:1px solid var(--steel-200);}`,
    `[data-soe=difference-head]{display:grid;grid-template-columns:1fr 1fr;gap:64px;margin-bottom:64px;align-items:end;}`,
    `[data-soe=difference-head-h2]{font-family:var(--font-display);font-weight:800;font-size:56px;line-height:1;letter-spacing:-.025em;margin:24px 0 0;color:var(--ink);}`,
    `[data-soe=difference-head-lede]{font-family:var(--font-sans);font-size:18px;color:var(--steel-700);line-height:1.6;margin:0;}`,
    `[data-soe=feature-grid]{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;}`,
    `[data-soe=feature]{background:var(--paper);border:1px solid var(--steel-200);display:flex;flex-direction:column;}`,
    `[data-soe=feature-visual]{aspect-ratio:4 / 3;background:linear-gradient(135deg,#1F2A1C 0%,#0A0D0A 100%);position:relative;overflow:hidden;border-bottom:1px solid var(--steel-200);}`,
    `[data-soe=feature-visual]::before{content:\x22\x22;position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 14px,rgba(255,255,255,0) 14px 28px);}`,
    `[data-soe=feature-visual]::after{content:\x22\x22;position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.4) 0%,rgba(0,0,0,0) 50%);}`,
    `[data-soe=feature-vmeta]{position:absolute;bottom:16px;left:20px;font-family:var(--font-mono);font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(255,255,255,.5);z-index:2;}`,
    `[data-soe=feature-body]{padding:24px;}`,
    `[data-soe=feature-body] p{font-family:var(--font-sans);font-size:15px;line-height:1.55;color:var(--steel-700);margin:0;}`,
    `[data-soe=feature-body] strong{color:var(--ink);font-weight:700;}`,

    // ===== Videos (Mulch Mule) =====
    `[data-soe=videos]{background:var(--paper);padding:100px var(--gutter);}`,
    `[data-soe=videos-head]{margin-bottom:56px;max-width:720px;}`,
    `[data-soe=videos-head-h2]{font-family:var(--font-display);font-weight:800;font-size:56px;line-height:1;letter-spacing:-.025em;margin:24px 0 20px;color:var(--ink);}`,
    `[data-soe=videos-head-lede]{font-family:var(--font-sans);font-size:18px;color:var(--steel-700);line-height:1.6;margin:0;max-width:600px;}`,
    `[data-soe=video-grid]{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;}`,
    `[data-soe=video-card]{background:var(--paper);border:1px solid var(--steel-200);display:flex;flex-direction:column;transition:border-color .2s,transform .2s;}`,
    `[data-soe=video-card]:hover{border-color:var(--jd-green);transform:translateY(-2px);}`,
    `[data-soe=video-thumb]{aspect-ratio:16 / 10;background:linear-gradient(135deg,#2A2A2A 0%,#0E0E0E 100%);position:relative;overflow:hidden;border-bottom:1px solid var(--steel-200);}`,
    `[data-soe=video-thumb]::before{content:\x22\x22;position:absolute;inset:0;background:repeating-linear-gradient(135deg,rgba(255,255,255,.03) 0 14px,rgba(255,255,255,0) 14px 28px);}`,
    `[data-soe=video-channel]{position:absolute;top:14px;left:14px;background:var(--paper);color:var(--ink);font-family:var(--font-mono);font-size:10px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;padding:4px 8px;}`,
    `[data-soe=video-play]{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:72px;height:72px;background:rgba(0,0,0,.55);border:2px solid var(--paper);display:flex;align-items:center;justify-content:center;transition:background .2s,border-color .2s;}`,
    `[data-soe=video-card]:hover [data-soe=video-play]{background:var(--jd-green);border-color:var(--jd-green);}`,
    `[data-soe=video-play]::after{content:\x22\x22;width:0;height:0;border-left:18px solid var(--paper);border-top:11px solid transparent;border-bottom:11px solid transparent;margin-left:4px;}`,
    `[data-soe=video-duration]{position:absolute;bottom:14px;right:14px;background:rgba(0,0,0,.7);color:var(--paper);font-family:var(--font-mono);font-size:11px;font-weight:600;padding:4px 8px;}`,
    `[data-soe=video-body]{padding:24px;flex:1;display:flex;flex-direction:column;}`,
    `[data-soe=video-cat]{font-family:var(--font-mono);font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--jd-green);font-weight:700;margin-bottom:10px;}`,
    `[data-soe=video-title]{font-family:var(--font-sans);font-weight:700;font-size:18px;line-height:1.3;color:var(--ink);margin:0 0 12px;}`,
    `[data-soe=video-desc]{font-family:var(--font-sans);font-size:14px;line-height:1.55;color:var(--steel-700);margin:0 0 20px;flex:1;}`,
    `[data-soe=video-foot]{display:flex;justify-content:space-between;align-items:center;padding-top:16px;border-top:1px solid var(--steel-200);font-family:var(--font-mono);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel-700);}`,
    `[data-soe=video-foot] b{color:var(--ink);font-weight:700;}`,
    `[data-soe=video-foot-watch]{color:var(--jd-green);font-weight:700;display:inline-flex;align-items:center;gap:8px;}`,

    // ===== Quote band (Mulch Mule) =====
    `[data-soe=quote-band]{background:var(--ink);color:var(--paper);padding:80px var(--gutter);border-top:8px solid var(--jd-green);display:grid;grid-template-columns:1fr auto;gap:64px;align-items:center;}`,
    `[data-soe=quote-band] [data-soe=eyebrow]{color:var(--jd-green-mid);margin-bottom:16px;}`,
    `[data-soe=quote-band] [data-soe=eyebrow]::before{background:var(--jd-green-mid);}`,
    `[data-soe=quote-band-h2]{font-family:var(--font-display);font-weight:800;font-size:44px;line-height:1.05;letter-spacing:-.02em;margin:0 0 12px;color:var(--paper);max-width:720px;}`,
    `[data-soe=quote-band-lede]{font-family:var(--font-sans);font-size:17px;color:var(--steel-300);margin:0;max-width:560px;}`,
    `[data-soe=quote-band-ctas]{display:flex;flex-direction:column;gap:12px;}`,

    // ===== Footer =====
    `[data-soe=footer]{background:var(--ink);color:var(--steel-300);padding:64px var(--gutter) 0;}`,
    `[data-soe=footer-top]{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr 1fr;gap:48px;padding-bottom:56px;border-bottom:1px solid rgba(255,255,255,.08);}`,
    `[data-soe=footer-brand]{display:flex;align-items:center;gap:14px;margin-bottom:24px;}`,
    `[data-soe=footer-mark]{width:40px;height:40px;background:var(--jd-green);position:relative;}`,
    `[data-soe=footer-mark]::after{content:\x22\x22;position:absolute;inset:0;background:var(--signal-yellow);clip-path:polygon(50% 22%,82% 78%,18% 78%);}`,
    `[data-soe=footer-word]{font-family:var(--font-display);font-weight:800;font-size:18px;color:var(--paper);line-height:1.1;}`,
    `[data-soe=footer-word-sub]{display:block;font-family:var(--font-nav);font-weight:500;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--steel-500);margin-top:4px;}`,
    `[data-soe=footer-tag]{font-family:var(--font-sans);font-size:14px;line-height:1.6;color:var(--steel-300);max-width:280px;margin-bottom:24px;}`,
    `[data-soe=footer-contact]{font-family:var(--font-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;line-height:2;color:var(--steel-500);}`,
    `[data-soe=footer-contact] b{color:var(--paper);font-weight:600;}`,
    `[data-soe=footer-col-h]{font-family:var(--font-mono);font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--paper);font-weight:700;margin:0 0 20px;}`,
    `[data-soe=footer-col] li{margin-bottom:12px;font-family:var(--font-nav);font-size:14px;}`,
    `[data-soe=footer-col] li a{color:var(--steel-300);transition:color .15s;}`,
    `[data-soe=footer-col] li a:hover{color:var(--jd-green-mid);}`,
    `[data-soe=footer-bot]{display:flex;align-items:center;justify-content:space-between;padding:28px 0;font-family:var(--font-mono);font-size:11px;letter-spacing:.15em;text-transform:uppercase;color:var(--steel-500);}`,
    `[data-soe=footer-legal]{display:flex;gap:24px;}`,
    `[data-soe=footer-legal] a{color:var(--steel-500);}`,
    `[data-soe=footer-legal] a:hover{color:var(--paper);}`,
    `[data-soe=footer-social]{display:flex;gap:8px;}`,
    `[data-soe=footer-social] a{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);color:var(--steel-300);font-family:var(--font-nav);font-size:12px;font-weight:600;text-transform:lowercase;transition:background .15s,color .15s;}`,
    `[data-soe=footer-social] a:hover{background:var(--jd-green);color:var(--paper);}`,

    // ===== Reveal on scroll =====
    `[data-soe-anim=reveal]{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease;}`,
    `[data-soe-anim=reveal][data-soe-state=in-view]{opacity:1;transform:translateY(0);}`,

    // ===== Tablet =====
    `@media (max-width:1024px){:root{--gutter:32px;}[data-soe=nav-link]{padding:0 12px;font-size:12px;}[data-soe=footer-top]{grid-template-columns:1.4fr 1fr 1fr;gap:40px;}[data-soe=footer-col][data-soe-pos=4],[data-soe=footer-col][data-soe-pos=5]{display:none;}[data-soe=brand-grid]{grid-template-columns:1fr;}[data-soe=feature-grid]{grid-template-columns:repeat(2,1fr);}[data-soe=video-grid]{grid-template-columns:repeat(2,1fr);}[data-soe=brands-list-grid]{grid-template-columns:1fr;}}`,

    // ===== Mobile =====
    `@media (max-width:720px){:root{--gutter:20px;}[data-soe=top-util]{height:36px;}[data-soe=top-util-left]{gap:16px;font-size:11px;}[data-soe=top-util-link][data-soe-kind=email]{display:none;}[data-soe=nav]{padding:0 var(--gutter);height:60px;gap:12px;align-items:center;}[data-soe=nav-mark]{width:30px;height:30px;}[data-soe=nav-word]{font-size:14px;}[data-soe=nav-word-sub]{display:none;}[data-soe=nav-links]{display:none;}[data-soe=nav-cta]{padding:0 16px;font-size:11px;letter-spacing:.14em;}[data-soe=nav-cta] [data-soe=arr]{display:none;}[data-soe=nav-hamburger]{display:inline-flex;}[data-soe=nav-drawer]{display:block;}[data-soe=nav-brand]{border-right:0;padding-right:0;margin-right:0;}[data-soe=crumbs]{padding:12px var(--gutter);font-size:11px;}[data-soe=crumbs-meta]{display:none;}[data-soe=hero]{min-height:580px;}[data-soe=hero-content]{min-height:580px;padding:0;}[data-soe=hero-text]{top:100px;left:var(--gutter);right:var(--gutter);}[data-soe=hero-h1]{font-size:36px;line-height:1.08;padding-bottom:0;}[data-soe=hero-subline]{font-size:30px;}[data-soe=hero-lede]{font-size:16px;margin:20px 0 28px;}[data-soe=hero-ctas]{flex-direction:column;gap:10px;align-items:flex-start;}[data-soe=hero-ctas] [data-soe=btn]{width:100%;justify-content:center;}[data-soe=intro]{padding:80px var(--gutter) 64px;}[data-soe=intro-leadin],[data-soe=intro-word]{font-size:clamp(34px,9vw,56px);}[data-soe=intro-tagline]{font-size:16px;}[data-soe=brands-section]{padding:64px var(--gutter) 80px;}[data-soe=brands-head]{grid-template-columns:1fr;gap:24px;margin-bottom:36px;}[data-soe=brands-head-h2]{font-size:36px;}[data-soe=brands-head-lede]{font-size:16px;}[data-soe=brand-grid]{grid-template-columns:1fr;gap:20px;}[data-soe=brand-card-body]{padding:24px;}[data-soe=brand-card-name]{font-size:28px;}[data-soe=brand-card-foot]{flex-direction:column;gap:12px;align-items:flex-start;}[data-soe=cta-band]{padding:64px var(--gutter);}[data-soe=cta-band-inner]{grid-template-columns:1fr;gap:32px;}[data-soe=cta-band-h2]{font-size:32px;}[data-soe=page-head]{padding:56px var(--gutter) 40px;}[data-soe=page-head-h1]{font-size:40px;}[data-soe=page-head-lede]{font-size:16px;}[data-soe=brand-card]{grid-template-columns:1fr;}[data-soe=brand-card-info]{padding:32px 24px;}[data-soe=brand-card-h3]{font-size:32px;}[data-soe=p-hero]{min-height:480px;}[data-soe=p-hero-content]{padding:60px var(--gutter) 40px;}[data-soe=p-hero-h1]{font-size:38px;line-height:1.05;}[data-soe=p-hero-lede]{font-size:16px;}[data-soe=difference]{padding:64px var(--gutter) 80px;}[data-soe=difference-head]{grid-template-columns:1fr;gap:16px;margin-bottom:32px;}[data-soe=difference-head-h2]{font-size:36px;}[data-soe=difference-head-lede]{font-size:16px;}[data-soe=feature-grid]{grid-template-columns:1fr;gap:16px;}[data-soe=videos]{padding:64px var(--gutter);}[data-soe=videos-head-h2]{font-size:32px;}[data-soe=video-grid]{grid-template-columns:1fr;gap:20px;}[data-soe=quote-band]{grid-template-columns:1fr;gap:32px;padding:48px var(--gutter);}[data-soe=quote-band-h2]{font-size:32px;}[data-soe=footer]{padding:48px var(--gutter) 0;}[data-soe=footer-top]{grid-template-columns:1fr;gap:32px;padding:0 0 40px;}[data-soe=footer-col][data-soe-pos=4],[data-soe=footer-col][data-soe-pos=5]{display:block;}[data-soe=footer-bot]{flex-direction:column;gap:16px;align-items:flex-start;}[data-soe=footer-legal]{flex-wrap:wrap;gap:16px;}[data-soe=brands-list]{padding:48px var(--gutter) 64px;}[data-soe=brands-list-grid]{grid-template-columns:1fr;}[data-soe=dealer-strip]{grid-template-columns:1fr;gap:24px;padding:48px var(--gutter);}}`
  ].join(``);
  s.textContent = css;
  document.head.appendChild(s);

  // 3. Behavior
  function initDrawer(){
    var ham = document.querySelector(`[data-soe=nav-hamburger]`);
    var drawer = document.querySelector(`[data-soe=nav-drawer]`);
    var closeBtn = document.querySelector(`[data-soe=drawer-close]`);
    if(!ham || !drawer)return;
    function open(){drawer.setAttribute(`data-soe-state`,`open`);document.body.style.overflow=`hidden`;}
    function close(){drawer.removeAttribute(`data-soe-state`);document.body.style.overflow=``;}
    ham.addEventListener(`click`,open);
    if(closeBtn)closeBtn.addEventListener(`click`,close);
    drawer.querySelectorAll(`a`).forEach(function(a){a.addEventListener(`click`,function(){setTimeout(close,50);});});
    document.addEventListener(`keydown`,function(e){if(e.key === `Escape`)close();});
  }

  function initRotator(){
    var slides = document.querySelectorAll(`[data-soe=hero-slide]`);
    if(slides.length === 0)return;
    var i = 0, t;
    function go(n){
      if(n === i)return;
      slides.forEach(function(sl, idx){
        if(idx === n){sl.setAttribute(`data-soe-state`,`active`);}
        else{sl.removeAttribute(`data-soe-state`);}
      });
      i = n;
    }
    function next(){go((i+1) % slides.length);}
    function start(){t = setInterval(next, 6000);}
    function stop(){clearInterval(t);}
    var hero = document.querySelector(`[data-soe=hero]`);
    if(hero){
      hero.addEventListener(`mouseenter`, stop);
      hero.addEventListener(`mouseleave`, start);
    }
    start();
  }

  function initTypewriter(){
    var el = document.querySelector(`[data-soe=intro-word]`);
    if(!el)return;
    var words = [`Safer.`, `Faster.`, `Leaner.`, `More profits.`];
    var w = 0, ch = 0, deleting = false;
    function tick(){
      var word = words[w];
      if(!deleting){
        ch = ch + 1;
        el.textContent = word.slice(0, ch);
        if(ch === word.length){deleting = true; setTimeout(tick, 1600); return;}
        setTimeout(tick, 90);
      }else{
        ch = ch - 1;
        el.textContent = word.slice(0, ch);
        if(ch === 0){deleting = false; w = (w + 1) % words.length; setTimeout(tick, 280); return;}
        setTimeout(tick, 45);
      }
    }
    setTimeout(tick, 800);
  }

  function initReveals(){
    var els = document.querySelectorAll(`[data-soe-anim=reveal]`);
    if(typeof IntersectionObserver === `undefined`){
      els.forEach(function(e){e.setAttribute(`data-soe-state`,`in-view`);});
      return;
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){if(en.isIntersecting){en.target.setAttribute(`data-soe-state`,`in-view`);io.unobserve(en.target);}});
    },{rootMargin:`-10% 0px`});
    els.forEach(function(e){io.observe(e);});
  }

  function init(){
    initDrawer();
    initRotator();
    initTypewriter();
    initReveals();
  }
  if(document.readyState === `loading`){document.addEventListener(`DOMContentLoaded`,init);}
  else{init();}
})();

/* === boot-fixes-v2a === */
(function(){
  var cdn=`https://cdn.prod.website-files.com/69e63e318c2f6e69a08e1082/`;
  var img={mm:cdn+`69e6acf211eb95c0705bab89_mulch-mule.jpg`,bm:cdn+`69e6acf1afd45b9b1874f17a_brinemasters.jpg`,eg:cdn+`69e6acf3e52ea6ea030c518e_energreen.jpg`,mt:cdn+`69e6acf15f04771e02f81538_metec.webp`};
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2a-fixes`);
  s.textContent=[
    `[data-soe=hero-slide]{clip-path:inset(0 0 0 100%) !important;transition:clip-path 0s linear .9s !important;opacity:1 !important;pointer-events:none;}`,
    `[data-soe=hero-slide][data-soe-state=active]{clip-path:inset(0 0 0 0) !important;transition:clip-path .9s cubic-bezier(.7,0,.2,1) !important;z-index:1 !important;pointer-events:auto;}`,
    `[data-soe=hero-slide][data-soe-state=prev]{clip-path:inset(0 0 0 0) !important;z-index:0 !important;transition:clip-path 0s linear !important;}`,
    `[data-soe=hero-lede]{color:var(--paper) !important;}`,
    `[data-soe=p-hero-lede]{color:var(--paper) !important;}`,
    `[data-soe=cta-band-lede]{color:var(--paper) !important;}`,
    `[data-soe=quote-band-lede]{color:var(--paper) !important;}`,
    `[data-soe=footer-tag]{color:var(--paper) !important;}`,
    `[data-soe=hero]{min-height:560px !important;}`,
    `[data-soe=hero-content]{min-height:560px !important;}`,
    `[data-soe=hero-text]{top:120px !important;}`,
    `[data-soe=hero-h1]{font-size:clamp(40px,4.6vw,56px) !important;line-height:1.05 !important;margin-bottom:8px !important;padding-bottom:0 !important;}`,
    `[data-soe=hero-lede]{margin:18px 0 28px !important;}`,
    `[data-soe=intro]{padding:72px var(--gutter) 80px !important;}`,
    `[data-soe=intro-leadin],[data-soe=intro-line2],[data-soe=intro-word]{font-size:clamp(34px,5vw,64px) !important;}`,
    `[data-soe=intro] [data-soe=eyebrow]{margin-bottom:36px !important;}`,
    `[data-soe=hero-slide]:nth-child(1) [data-soe=hero-bg]{background-image:url(${img.mm}) !important;}`,
    `[data-soe=hero-slide]:nth-child(2) [data-soe=hero-bg]{background-image:url(${img.bm}) !important;background-position:center 60% !important;}`,
    `[data-soe=hero-slide]:nth-child(3) [data-soe=hero-bg]{background-image:url(${img.eg}) !important;background-position:70% center !important;}`,
    `[data-soe=hero-slide]:nth-child(4) [data-soe=hero-bg]{background-image:url(${img.mt}) !important;background-position:center 55% !important;}`,
    `[data-soe=brand-grid] a:nth-child(1) [data-soe=brand-card-visual]{background-image:url(${img.mm}) !important;}`,
    `[data-soe=brand-grid] a:nth-child(2) [data-soe=brand-card-visual]{background-image:url(${img.bm}) !important;background-position:center 60% !important;}`,
    `[data-soe=brand-grid] a:nth-child(3) [data-soe=brand-card-visual]{background-image:url(${img.eg}) !important;background-position:70% center !important;}`,
    `[data-soe=brand-grid] a:nth-child(4) [data-soe=brand-card-visual]{background-image:url(${img.mt}) !important;background-position:center 55% !important;}`,
    `[data-soe=brands-list-grid] article:nth-child(1) [data-soe=brand-card-visual-l]{background-image:url(${img.mm}) !important;}`,
    `[data-soe=brands-list-grid] article:nth-child(2) [data-soe=brand-card-visual-l]{background-image:url(${img.bm}) !important;background-position:center 60% !important;}`,
    `[data-soe=brands-list-grid] article:nth-child(3) [data-soe=brand-card-visual-l]{background-image:url(${img.eg}) !important;background-position:70% center !important;}`,
    `[data-soe=brands-list-grid] article:nth-child(4) [data-soe=brand-card-visual-l]{background-image:url(${img.mt}) !important;background-position:center 55% !important;}`,
    `[data-soe=p-hero] [data-soe=p-hero-bg]{background-image:url(${img.mm}) !important;}`,
    `[data-soe=cta-band-ctas]{justify-self:end !important;align-items:stretch !important;}`,
    `[data-soe=quote-band-ctas]{justify-self:end !important;align-items:stretch !important;}`,
    `[data-soe=nav-drawer] li:last-child{border-bottom:0 !important;}`,
    `[data-soe=drawer-contact] svg{width:14px;height:14px;flex-shrink:0;color:var(--jd-green-mid);}`,
    `[data-soe=brand-card-specs]{margin:0 !important;padding:0 !important;gap:14px 28px !important;}`,
    `[data-soe=brand-card-specs] dt,[data-soe=brand-card-specs] dd,[data-soe=brand-card-spec]{margin:0 !important;padding:0 !important;}`,
    `[data-soe=brand-card-spec-label]{margin-bottom:6px !important;line-height:1.2 !important;}`,
    `[data-soe=brand-card-spec-value]{line-height:1.3 !important;}`,
    `[data-soe=brand-card-info]{padding:32px 36px 32px !important;}`,
    `[data-soe=brand-card-info-top]{gap:14px !important;}`,
    `[data-soe=brand-card-info-foot]{margin-top:24px !important;padding-top:20px !important;border-top:1px solid var(--steel-200) !important;}`,
    `[data-soe=brands-list-grid]{gap:24px !important;background:transparent !important;border:0 !important;}`,
    `[data-soe=brand-card]{border:1px solid var(--steel-200) !important;}`,
    `[data-soe=p-hero]{min-height:520px !important;}`,
    `[data-soe=p-hero-content]{min-height:520px !important;padding:60px var(--gutter) 70px !important;}`,
    `[data-soe=p-hero-h1]{font-size:clamp(40px,4.6vw,56px) !important;}`,
    `[data-soe=p-hero-subline]{font-size:clamp(36px,4.2vw,52px) !important;}`,
    `[data-soe=p-hero-lede]{margin-bottom:28px !important;}`,
    `[data-soe=videos]{padding:80px var(--gutter) !important;}`,
    `[data-soe=videos-head-h2]{font-size:clamp(32px,3.6vw,48px) !important;}`,
    `[data-soe=difference]{padding:80px var(--gutter) 100px !important;}`,
    `[data-soe=difference-head]{margin-bottom:48px !important;}`,
    `[data-soe=difference-head-h2]{font-size:clamp(32px,3.6vw,48px) !important;}`,
    `[data-soe=brands-section]{padding:80px var(--gutter) 100px !important;}`,
    `[data-soe=brands-head]{margin-bottom:48px !important;}`,
    `[data-soe=brands-head-h2]{font-size:clamp(32px,3.6vw,52px) !important;}`,
    `[data-soe=cta-band]{padding:72px var(--gutter) !important;}`,
    `[data-soe=cta-band-h2]{font-size:clamp(32px,3.6vw,48px) !important;}`,
    `[data-soe=quote-band]{padding:64px var(--gutter) !important;}`,
    `[data-soe=quote-band-h2]{font-size:clamp(32px,3.4vw,40px) !important;}`,
    `[data-soe=page-head]{padding:64px var(--gutter) 56px !important;}`,
    `[data-soe=page-head-h1]{font-size:clamp(48px,6vw,76px) !important;}`,
    `[data-soe=brands-list]{padding:48px var(--gutter) 80px !important;}`,
    `[data-soe=dealer-strip]{padding:56px var(--gutter) !important;}`,
    `[data-soe=footer]{padding:56px var(--gutter) 0 !important;}`,
    `[data-soe=footer-top]{padding-bottom:48px !important;gap:40px !important;}`,
    `@media (max-width:720px){[data-soe=brand-card-specs]{grid-template-columns:1fr !important;gap:14px !important;text-align:center !important;}[data-soe=brand-card-spec]{display:flex !important;flex-direction:column !important;align-items:center !important;}[data-soe=brand-card-info]{text-align:center !important;align-items:center !important;}[data-soe=brand-card-info-top]{align-items:center !important;}[data-soe=brand-card-info-foot]{justify-content:center !important;flex-direction:column !important;gap:16px !important;align-items:center !important;}[data-soe=brand-card-origin-line]{text-align:center !important;}[data-soe=brand-card-h3]{text-align:center !important;}[data-soe=brand-card-num]{text-align:center !important;}[data-soe=brand-card-desc-l]{text-align:center !important;}[data-soe=brand-card-link-large]{justify-content:center !important;}[data-soe=hero-text]{top:80px !important;}[data-soe=hero-h1]{font-size:clamp(28px,7vw,38px) !important;}[data-soe=hero-subline]{font-size:clamp(24px,6vw,32px) !important;}[data-soe=cta-band-ctas],[data-soe=quote-band-ctas]{justify-self:stretch !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function fixDrawerIcons(){
    var drawer=document.querySelector(`[data-soe=drawer-contact]`);
    if(!drawer)return;
    var ns=`http://www.w3.org/2000/svg`;
    function svgPhone(){
      var svg=document.createElementNS(ns,`svg`);
      svg.setAttribute(`viewBox`,`0 0 24 24`);
      svg.setAttribute(`fill`,`none`);
      svg.setAttribute(`stroke`,`currentColor`);
      svg.setAttribute(`stroke-width`,`2`);
      var p=document.createElementNS(ns,`path`);
      p.setAttribute(`d`,`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`);
      svg.appendChild(p);
      return svg;
    }
    function svgMail(){
      var svg=document.createElementNS(ns,`svg`);
      svg.setAttribute(`viewBox`,`0 0 24 24`);
      svg.setAttribute(`fill`,`none`);
      svg.setAttribute(`stroke`,`currentColor`);
      svg.setAttribute(`stroke-width`,`2`);
      var p=document.createElementNS(ns,`path`);
      p.setAttribute(`d`,`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`);
      svg.appendChild(p);
      var pl=document.createElementNS(ns,`polyline`);
      pl.setAttribute(`points`,`22,6 12,13 2,6`);
      svg.appendChild(pl);
      return svg;
    }
    drawer.querySelectorAll(`a`).forEach(function(a){
      var raw=a.textContent;
      var clean=raw.replace(/[^\x20-\x7E]/g,``).trim();
      a.textContent=``;
      var href=a.getAttribute(`href`)||``;
      a.appendChild(href.indexOf(`tel`) === 0 ? svgPhone() : svgMail());
      a.appendChild(document.createTextNode(` `+clean));
    });
  }

  function removeFooterLocation(){
    var contact=document.querySelector(`[data-soe=footer-contact]`);
    if(!contact)return;
    var divs=[];
    for(var k=0;k!==contact.children.length;k=k+1){
      if(contact.children[k].tagName === `DIV`)divs.push(contact.children[k]);
    }
    if(divs.length === 3 || divs.length === 4){
      contact.removeChild(divs[divs.length === 3 ? 2 : 3]);
    }
  }

  function initSwipeRotator(){
    var stage=document.querySelector(`[data-soe=hero-stage]`);
    if(!stage)return;
    var oldSlides=stage.querySelectorAll(`[data-soe=hero-slide]`);
    if(oldSlides.length === 0)return;
    var newSlides=[];
    oldSlides.forEach(function(sl){
      var clone=sl.cloneNode(true);
      sl.parentNode.replaceChild(clone,sl);
      newSlides.push(clone);
    });
    newSlides.forEach(function(sl,idx){
      if(idx === 0)sl.setAttribute(`data-soe-state`,`active`);
      else sl.removeAttribute(`data-soe-state`);
    });
    var i=0;
    function go(n){
      if(n === i)return;
      var prevIdx=i;
      newSlides.forEach(function(sl,idx){
        sl.removeAttribute(`data-soe-state`);
        if(idx === prevIdx)sl.setAttribute(`data-soe-state`,`prev`);
        if(idx === n)sl.setAttribute(`data-soe-state`,`active`);
      });
      setTimeout(function(){
        newSlides.forEach(function(sl){
          if(sl.getAttribute(`data-soe-state`) === `prev`)sl.removeAttribute(`data-soe-state`);
        });
      },950);
      i=n;
    }
    function next(){go((i+1)%newSlides.length);}
    var hero=document.querySelector(`[data-soe=hero]`);
    var t=setInterval(next,6000);
    if(hero){
      hero.addEventListener(`mouseenter`,function(){clearInterval(t);});
      hero.addEventListener(`mouseleave`,function(){t=setInterval(next,6000);});
    }
  }

  function init(){
    fixDrawerIcons();
    removeFooterLocation();
    initSwipeRotator();
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,init);
  }else{
    init();
  }
})();

/* === boot-fixes-v2b === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2b-fixes`);
  s.textContent=[
    `[data-soe=cta-band-h2],[data-soe=quote-band-h2],[data-soe=dealer-strip-h2]{color:var(--paper) !important;}`,
    `[data-soe=cta-band-lede],[data-soe=quote-band-lede]{color:#FFFFFF !important;}`,
    `[data-soe=cta-band]::before{width:200px !important;height:200px !important;right:-60px !important;bottom:-60px !important;opacity:0.5 !important;}`,
    `[data-soe=brand-card-info]{justify-content:center !important;gap:28px !important;padding:36px 40px !important;}`,
    `[data-soe=page-head]{padding:80px var(--gutter) 72px !important;}`,
    `[data-soe=page-head] [data-soe=eyebrow]{margin-bottom:32px !important;}`,
    `[data-soe=page-head-h1]{margin:0 0 36px !important;}`,
    `[data-soe=page-head-lede]{font-size:19px !important;line-height:1.55 !important;}`,
    `[data-soe=btn] [data-soe=arr]{display:none !important;}`,
    `[data-soe=nav-cta] [data-soe=arr]{display:none !important;}`,
    `[data-soe=btn]{justify-content:center !important;gap:0 !important;}`,
    `[data-soe=nav-cta]{justify-content:center !important;}`,
    `[data-soe=brand-card-vbadge]{display:none !important;}`,
    `[data-soe=footer-bot]{display:flex !important;flex-wrap:wrap !important;align-items:center !important;justify-content:flex-start !important;gap:16px !important;}`,
    `[data-soe=footer-legal]{margin-left:auto !important;display:flex !important;align-items:center !important;gap:18px !important;}`,
    `[data-soe=footer-social]{margin-left:0 !important;padding-left:18px !important;border-left:1px solid rgba(255,255,255,.18) !important;display:flex !important;align-items:center !important;gap:8px !important;}`,
    `[data-soe=hero-slide]{transition:clip-path 0s linear 1.5s,opacity .9s ease !important;opacity:0 !important;}`,
    `[data-soe=hero-slide][data-soe-state=active]{transition:clip-path 1.5s cubic-bezier(.4,0,.2,1),opacity .35s ease !important;opacity:1 !important;}`,
    `[data-soe=hero-slide][data-soe-state=prev]{transition:clip-path 0s linear,opacity 1.3s cubic-bezier(.4,0,.2,1) !important;opacity:0 !important;}`,
    `@media (max-width:720px){[data-soe=footer-bot]{flex-direction:row !important;flex-wrap:wrap !important;}[data-soe=footer-legal]{margin-left:0 !important;width:100% !important;}[data-soe=footer-social]{border-left:0 !important;padding-left:0 !important;width:100% !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function initSwipeRotator2(){
    var stage=document.querySelector(`[data-soe=hero-stage]`);
    if(!stage)return;
    var oldSlides=stage.querySelectorAll(`[data-soe=hero-slide]`);
    if(oldSlides.length === 0)return;
    var newSlides=[];
    oldSlides.forEach(function(sl){
      var clone=sl.cloneNode(true);
      sl.parentNode.replaceChild(clone,sl);
      newSlides.push(clone);
    });
    newSlides.forEach(function(sl,idx){
      if(idx === 0)sl.setAttribute(`data-soe-state`,`active`);
      else sl.removeAttribute(`data-soe-state`);
    });
    var i=0;
    var transitioning=false;
    function go(n){
      if(n === i || transitioning)return;
      transitioning=true;
      var prevIdx=i;
      newSlides.forEach(function(sl,idx){
        sl.removeAttribute(`data-soe-state`);
        if(idx === prevIdx)sl.setAttribute(`data-soe-state`,`prev`);
        if(idx === n)sl.setAttribute(`data-soe-state`,`active`);
      });
      setTimeout(function(){
        newSlides.forEach(function(sl){
          if(sl.getAttribute(`data-soe-state`) === `prev`)sl.removeAttribute(`data-soe-state`);
        });
        transitioning=false;
      },1500);
      i=n;
    }
    function next(){go((i+1)%newSlides.length);}
    var hero=document.querySelector(`[data-soe=hero]`);
    var t=null;
    function start(){if(t)clearInterval(t);t=setInterval(next,7000);}
    function stop(){if(t){clearInterval(t);t=null;}}
    if(hero){
      hero.addEventListener(`mouseenter`,stop);
      hero.addEventListener(`mouseleave`,start);
    }
    start();
  }

  function init(){
    initSwipeRotator2();
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,init);
  }else{
    init();
  }
})();

/* === boot-fixes-v2c === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2c-anim`);
  s.textContent=[
    `[data-soe-anim=reveal]{opacity:0;transform:translateY(22px);transition:opacity .85s cubic-bezier(.22,.61,.36,1),transform .85s cubic-bezier(.22,.61,.36,1) !important;will-change:opacity,transform;}`,
    `[data-soe-anim=reveal][data-soe-state=in-view]{opacity:1 !important;transform:none !important;}`,
    `[data-soe=brand-card-h],[data-soe=brand-card],[data-soe=feature],[data-soe=video-card]{transition:transform .45s cubic-bezier(.22,.61,.36,1),box-shadow .45s ease,border-color .25s ease,background .25s ease !important;}`,
    `[data-soe=brand-card-h]:hover,[data-soe=brand-card]:hover,[data-soe=feature]:hover,[data-soe=video-card]:hover{transform:translateY(-4px) !important;box-shadow:0 22px 40px -22px rgba(0,0,0,.18) !important;}`,
    `[data-soe=btn]{transition:background .25s ease,color .25s ease,border-color .25s ease,transform .25s cubic-bezier(.22,.61,.36,1) !important;}`,
    `[data-soe=btn]:hover{transform:translateY(-1px) !important;}`,
    `[data-soe=nav-link],[data-soe=top-util-link],[data-soe=footer-col] li a,[data-soe=footer-legal] a,[data-soe=footer-social] a{transition:color .2s ease,background .2s ease,opacity .2s ease !important;}`,
    `@media (prefers-reduced-motion:reduce){[data-soe-anim=reveal]{opacity:1 !important;transform:none !important;transition:none !important;}[data-soe=brand-card-h]:hover,[data-soe=brand-card]:hover,[data-soe=feature]:hover,[data-soe=video-card]:hover,[data-soe=btn]:hover{transform:none !important;box-shadow:none !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function initAnimReveal(){
    var sel=[
      `[data-soe=hero-brand-tag]`,
      `[data-soe=hero-h1]`,
      `[data-soe=hero-lede]`,
      `[data-soe=hero-ctas]`,
      `[data-soe=intro-lockup]`,
      `[data-soe=intro-tagline]`,
      `[data-soe=intro-underline]`,
      `[data-soe=brands-head]`,
      `[data-soe=brand-card-h]`,
      `[data-soe=cta-band-text]`,
      `[data-soe=cta-band-ctas]`,
      `[data-soe=p-hero-h1]`,
      `[data-soe=p-hero-lede]`,
      `[data-soe=p-hero-ctas]`,
      `[data-soe=difference-head]`,
      `[data-soe=feature]`,
      `[data-soe=videos-head]`,
      `[data-soe=video-card]`,
      `[data-soe=quote-band-text]`,
      `[data-soe=quote-band-ctas]`,
      `[data-soe=page-head]`,
      `[data-soe=brand-card]`,
      `[data-soe=dealer-strip-text]`,
      `[data-soe=dealer-strip-ctas]`,
      `[data-soe=promo-strip]`
    ].join(`,`);
    var nodes=document.querySelectorAll(sel);
    if(!nodes || nodes.length === 0)return;
    nodes.forEach(function(n){n.setAttribute(`data-soe-anim`,`reveal`);});
    if(typeof IntersectionObserver === `undefined`){
      nodes.forEach(function(n){n.setAttribute(`data-soe-state`,`in-view`);});
      return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e,idx){
        if(e.isIntersecting){
          var t=e.target;
          setTimeout(function(){t.setAttribute(`data-soe-state`,`in-view`);},idx*70);
          io.unobserve(t);
        }
      });
    },{threshold:0.12,rootMargin:`0px 0px -40px 0px`});
    nodes.forEach(function(n){io.observe(n);});
  }

  function init(){
    initAnimReveal();
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,init);
  }else{
    init();
  }
})();

/* === boot-fixes-v2d === */
(function(){
  document.documentElement.setAttribute(`data-soe-anim`,`active`);
  var sels=[
    `[data-soe=hero-brand-tag]`,
    `[data-soe=hero-h1]`,
    `[data-soe=hero-lede]`,
    `[data-soe=hero-ctas]`,
    `[data-soe=intro-lockup]`,
    `[data-soe=intro-tagline]`,
    `[data-soe=intro-underline]`,
    `[data-soe=brands-head]`,
    `[data-soe=brand-card-h]`,
    `[data-soe=cta-band-text]`,
    `[data-soe=cta-band-ctas]`,
    `[data-soe=p-hero-h1]`,
    `[data-soe=p-hero-lede]`,
    `[data-soe=p-hero-ctas]`,
    `[data-soe=difference-head]`,
    `[data-soe=feature]`,
    `[data-soe=videos-head]`,
    `[data-soe=video-card]`,
    `[data-soe=quote-band-text]`,
    `[data-soe=quote-band-ctas]`,
    `[data-soe=page-head]`,
    `[data-soe=brand-card]`,
    `[data-soe=dealer-strip-text]`,
    `[data-soe=dealer-strip-ctas]`,
    `[data-soe=promo-strip]`
  ];
  var hideSel=sels.map(function(s){return `[data-soe-anim=active] `+s;}).join(`,`);
  var showSel=sels.map(function(s){return `[data-soe-anim=active] `+s+`[data-soe-state=in-view]`;}).join(`,`);
  var st=document.createElement(`style`);
  st.setAttribute(`data-soe-design`,`v2d-early`);
  st.textContent=hideSel+`{opacity:0;transform:translateY(22px);transition:opacity .85s cubic-bezier(.22,.61,.36,1),transform .85s cubic-bezier(.22,.61,.36,1);will-change:opacity,transform;}`+showSel+`{opacity:1 !important;transform:none !important;}`+`@media (prefers-reduced-motion:reduce){`+hideSel+`{opacity:1 !important;transform:none !important;transition:none !important;}}`;
  document.head.appendChild(st);

  function reveal(){
    var nodes=document.querySelectorAll(sels.join(`,`));
    if(!nodes || nodes.length === 0)return;
    if(typeof IntersectionObserver === `undefined`){
      nodes.forEach(function(n){n.setAttribute(`data-soe-state`,`in-view`);});
      return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e,idx){
        if(e.isIntersecting){
          var t=e.target;
          setTimeout(function(){t.setAttribute(`data-soe-state`,`in-view`);},idx*70);
          io.unobserve(t);
        }
      });
    },{threshold:0.12,rootMargin:`0px 0px -40px 0px`});
    nodes.forEach(function(n){io.observe(n);});
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,reveal);
  }else{
    reveal();
  }
})();

/* === boot-fixes-v2g === */
(function(){
  var eyebrowSels=[
    `[data-soe=intro] [data-soe=eyebrow]`,
    `[data-soe=cta-band] [data-soe=eyebrow]`,
    `[data-soe=quote-band] [data-soe=eyebrow]`,
    `[data-soe=dealer-strip] [data-soe=eyebrow]`,
    `[data-soe=brands-head-left] [data-soe=eyebrow]`,
    `[data-soe=videos-head] [data-soe=eyebrow]`,
    `[data-soe=difference-head] [data-soe=eyebrow]`,
    `[data-soe=page-head] [data-soe=eyebrow]`
  ];
  var ebHide=eyebrowSels.map(function(x){return `[data-soe-anim=active] `+x;}).join(`,`);
  var ebShow=eyebrowSels.map(function(x){return `[data-soe-anim=active] `+x+`[data-soe-state=in-view]`;}).join(`,`);

  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2g-fixes`);
  s.textContent=[
    ebHide+`{opacity:0;transform:translateY(22px);transition:opacity .85s cubic-bezier(.22,.61,.36,1),transform .85s cubic-bezier(.22,.61,.36,1);will-change:opacity,transform;}`,
    ebShow+`{opacity:1 !important;transform:none !important;}`,
    `[data-soe=brand-card-tag]{display:none !important;}`,
    `[data-soe=brand-card-link-large] [data-soe=arr]{display:none !important;}`,
    `[data-soe=crumbs-meta]{display:none !important;}`,
    `[data-soe=brand-card]{min-height:560px !important;}`,
    `[data-soe=brand-card-info]{display:flex !important;flex-direction:column !important;justify-content:center !important;align-items:flex-start !important;padding:80px 48px !important;gap:40px !important;}`,
    `[data-soe=dealer-strip-ctas]{display:flex !important;flex-direction:row !important;gap:14px !important;align-items:stretch !important;flex-wrap:wrap !important;}`,
    `[data-soe=btn]{box-sizing:border-box !important;}`,
    `[data-soe=hero-slide]{transition:clip-path 0s linear 1.6s,opacity 1s ease !important;}`,
    `[data-soe=hero-slide][data-soe-state=active]{transition:clip-path 1.6s cubic-bezier(.45,0,.2,1),opacity .25s ease !important;}`,
    `[data-soe=hero-slide][data-soe-state=prev]{transition:clip-path 0s linear 1.6s,opacity 1.4s cubic-bezier(.45,0,.2,1) !important;}`,
    `[data-soe=hero-slide][data-soe-state=prev] [data-soe=hero-bg]{transform:scale(1.06) !important;transition:transform 1.6s linear !important;}`,
    `html{background:var(--ink) !important;}`,
    `body{margin:0 !important;background:var(--paper) !important;}`,
    `[data-soe=top-util],[data-soe=nav]{box-sizing:border-box !important;margin:0 !important;}`,
    `[data-soe=top-util]{border-bottom:0 !important;}`,
    `@media (max-width:720px){[data-soe=brand-card-info]{padding:56px 28px !important;align-items:center !important;}[data-soe=dealer-strip-ctas]{flex-direction:column !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function observeEyebrows(){
    var nodes=document.querySelectorAll(eyebrowSels.join(`,`));
    if(!nodes || nodes.length === 0)return;
    if(typeof IntersectionObserver === `undefined`){
      nodes.forEach(function(n){n.setAttribute(`data-soe-state`,`in-view`);});
      return;
    }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e,idx){
        if(e.isIntersecting){
          var t=e.target;
          setTimeout(function(){t.setAttribute(`data-soe-state`,`in-view`);},idx*70);
          io.unobserve(t);
        }
      });
    },{threshold:0.12,rootMargin:`0px 0px -40px 0px`});
    nodes.forEach(function(n){io.observe(n);});
  }

  function initSwipeRotator3(){
    var stage=document.querySelector(`[data-soe=hero-stage]`);
    if(!stage)return;
    var oldSlides=stage.querySelectorAll(`[data-soe=hero-slide]`);
    if(oldSlides.length === 0)return;
    var newSlides=[];
    oldSlides.forEach(function(sl){
      var clone=sl.cloneNode(true);
      sl.parentNode.replaceChild(clone,sl);
      newSlides.push(clone);
    });
    newSlides.forEach(function(sl,idx){
      if(idx === 0){sl.setAttribute(`data-soe-state`,`active`);}
      else{sl.removeAttribute(`data-soe-state`);}
    });
    var i=0;
    function go(n){
      if(n === i)return;
      var prevIdx=i;
      newSlides.forEach(function(sl,idx){
        if(idx === n){sl.setAttribute(`data-soe-state`,`active`);}
        else if(idx === prevIdx){sl.setAttribute(`data-soe-state`,`prev`);}
        else{sl.removeAttribute(`data-soe-state`);}
      });
      setTimeout(function(){
        newSlides.forEach(function(sl){
          if(sl.getAttribute(`data-soe-state`) === `prev`)sl.removeAttribute(`data-soe-state`);
        });
      },1700);
      i=n;
    }
    function next(){go((i+1)%newSlides.length);}
    var hero=document.querySelector(`[data-soe=hero]`);
    var t=null;
    function start(){if(t)clearInterval(t);t=setInterval(next,8000);}
    function stop(){if(t){clearInterval(t);t=null;}}
    if(hero){
      hero.addEventListener(`mouseenter`,stop);
      hero.addEventListener(`mouseleave`,start);
    }
    start();
  }

  function init(){
    observeEyebrows();
    initSwipeRotator3();
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,init);
  }else{
    init();
  }
})();

/* === boot-fixes-v2h === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2h-fixes`);
  s.textContent=[
    `@keyframes soeKenBurns{from{transform:scale(1);}to{transform:scale(1.07);}}`,
    `[data-soe=hero-slide][data-soe-state=active] [data-soe=hero-bg],[data-soe=hero-slide][data-soe-state=prev] [data-soe=hero-bg]{animation:soeKenBurns 8s linear forwards !important;transition:none !important;}`,
    `[data-soe=brand-card]{display:grid !important;grid-template-columns:5fr 4fr !important;grid-template-rows:1fr !important;min-height:600px !important;}`,
    `[data-soe=brand-card-visual-l]{align-self:stretch !important;height:100% !important;}`,
    `[data-soe=brand-card-info]{align-self:stretch !important;display:flex !important;flex-direction:column !important;justify-content:center !important;align-items:flex-start !important;padding:80px 48px !important;gap:40px !important;height:100% !important;}`,
    `[data-soe-design]{display:none !important;}`,
    `[data-soe=brand-card-visual]::before{display:none !important;}`,
    `[data-soe=brand-card-visual-l]::before{display:none !important;}`,
    `[data-soe=hero-bg]::after{display:block;}`,
    `@media (max-width:720px){[data-soe=brand-card]{min-height:auto !important;grid-template-columns:1fr !important;grid-template-rows:auto !important;}[data-soe=brand-card-info]{padding:48px 28px !important;height:auto !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function initRotator4(){
    var stage=document.querySelector(`[data-soe=hero-stage]`);
    if(!stage)return;
    var oldSlides=stage.querySelectorAll(`[data-soe=hero-slide]`);
    if(oldSlides.length === 0)return;
    var newSlides=[];
    oldSlides.forEach(function(sl){var c=sl.cloneNode(true);sl.parentNode.replaceChild(c,sl);newSlides.push(c);});
    newSlides.forEach(function(sl,idx){if(idx === 0)sl.setAttribute(`data-soe-state`,`active`);else sl.removeAttribute(`data-soe-state`);});
    var i=0;
    function go(n){
      if(n === i)return;
      var prevIdx=i;
      newSlides.forEach(function(sl,idx){
        if(idx === n){sl.setAttribute(`data-soe-state`,`active`);}
        else if(idx === prevIdx){sl.setAttribute(`data-soe-state`,`prev`);}
        else{sl.removeAttribute(`data-soe-state`);}
      });
      setTimeout(function(){
        newSlides.forEach(function(sl){if(sl.getAttribute(`data-soe-state`) === `prev`)sl.removeAttribute(`data-soe-state`);});
      },1700);
      i=n;
    }
    function next(){go((i+1)%newSlides.length);}
    var t=null;
    function start(){if(t)clearInterval(t);t=setInterval(next,7000);}
    function stop(){if(t){clearInterval(t);t=null;}}
    var hero=document.querySelector(`[data-soe=hero]`);
    if(hero){hero.addEventListener(`mouseenter`,stop);hero.addEventListener(`mouseleave`,start);}
    setTimeout(function(){next();start();},5000);
  }

  function init(){
    initRotator4();
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,init);
  }else{
    init();
  }
})();

/* === boot-fixes-v2i === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2i-fixes`);
  s.textContent=[
    `[data-soe=brand-card]{display:flex !important;flex-direction:row !important;align-items:stretch !important;min-height:600px !important;grid-template-columns:none !important;grid-template-rows:none !important;}`,
    `[data-soe=brand-card-visual-l]{flex:5 1 0 !important;align-self:stretch !important;}`,
    `[data-soe=brand-card-info]{flex:4 1 0 !important;align-self:stretch !important;display:flex !important;flex-direction:column !important;justify-content:center !important;align-items:flex-start !important;padding:80px 48px !important;gap:40px !important;}`,
    `@media (max-width:720px){:root{--util-h:36px !important;}[data-soe=nav]{top:36px !important;}[data-soe=brand-card]{flex-direction:column !important;min-height:auto !important;}[data-soe=brand-card-info]{padding:48px 28px !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function revealHero(){
    var nodes=document.querySelectorAll(`[data-soe=hero] [data-soe-anim=reveal]`);
    nodes.forEach(function(n){n.setAttribute(`data-soe-state`,`in-view`);});
  }

  function init(){
    revealHero();
    setTimeout(revealHero,100);
    setTimeout(revealHero,500);
    setTimeout(revealHero,1500);
    setTimeout(revealHero,5500);
    setInterval(revealHero,3000);
  }
  if(document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`,init);
  }else{
    init();
  }
})();

/* === boot-fixes-v2j === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2j-fixes`);
  s.textContent=`[data-soe=brand-card-specs]{border-top:0 !important;padding-top:0 !important;margin-top:8px !important;}`;
  document.head.appendChild(s);
})();

/* === boot-fixes-v2k === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2k-fixes`);
  s.textContent=[
    `[data-soe=hero-slide]{transition:clip-path 0s linear 1.9s,opacity 1.2s ease !important;}`,
    `[data-soe=hero-slide][data-soe-state=active]{transition:clip-path 1.9s cubic-bezier(.45,0,.2,1),opacity .35s ease !important;}`,
    `[data-soe=hero-slide][data-soe-state=prev]{transition:clip-path 0s linear 1.9s,opacity 1.8s cubic-bezier(.45,0,.2,1) !important;}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2l === */
(function(){
  var css=`
[data-soe-design]{display:none;}
html{background:#0E1110;}
body{margin:0;padding:0;background:#fff;font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.55;}
[data-soe] *{box-sizing:border-box;}
[data-soe] img{max-width:100%;display:block;}
[data-soe] a{color:inherit;text-decoration:none;}
[data-soe] ul,[data-soe] ol{list-style:none;margin:0;padding:0;}
[data-soe] svg{flex-shrink:0;}
[data-soe=top-util-icon]{width:14px;height:14px;color:#4A9540;}
[data-soe=top-util]{background:#0E1110;color:#A5ADA4;height:36px;display:flex;align-items:center;padding:0 20px;font-size:13px;box-sizing:border-box;border-bottom:0;margin:0;font-family:Inter,sans-serif;position:sticky;top:0;z-index:50;}
[data-soe=top-util-left]{display:flex;align-items:center;gap:16px;}
[data-soe=top-util-link]{display:inline-flex;align-items:center;gap:8px;color:#A5ADA4;text-decoration:none;font-size:11px;}
[data-soe=top-util-link][data-soe-kind=email]{display:none;}
[data-soe=nav]{background:#0E1110;color:#fff;height:60px;display:flex;align-items:center;padding:0 20px;border-bottom:1px solid rgba(255,255,255,.08);box-sizing:border-box;margin:0;position:sticky;top:36px;z-index:49;gap:12px;}
[data-soe=nav-brand]{display:flex;align-items:center;gap:12px;white-space:nowrap;}
[data-soe=nav-mark]{width:30px;height:30px;background:#367C2B;position:relative;flex-shrink:0;}
[data-soe=nav-mark]::after{content:\x22\x22;position:absolute;inset:0;background:#FFDE00;clip-path:polygon(50% 22%,82% 78%,18% 78%);}
[data-soe=nav-word]{font-weight:800;font-size:14px;color:#fff;font-family:Inter,sans-serif;}
[data-soe=nav-word-sub]{display:none;}
[data-soe=nav-links]{display:none;}
[data-soe=nav-spacer]{flex:1;}
[data-soe=nav-cta]{background:#367C2B;color:#fff;padding:0 16px;font-weight:600;font-size:11px;text-decoration:none;display:flex;align-items:center;align-self:stretch;font-family:Inter,sans-serif;letter-spacing:.14em;}
[data-soe=nav-cta] [data-soe=arr]{display:none;}
[data-soe=nav-hamburger]{display:inline-flex;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;background:transparent;border:0;padding:0;cursor:pointer;order:-1;}
[data-soe=nav-hamburger] span{display:block;width:22px;height:2px;background:#fff;}
[data-soe=nav-drawer]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:#0E1110;z-index:100;padding:80px 32px 40px;transform:translateX(-100%);overflow-y:auto;}
[data-soe=drawer-close]{position:absolute;top:20px;right:20px;width:36px;height:36px;background:transparent;border:0;color:#fff;font-size:28px;}
[data-soe=hero]{background:#0E1110;min-height:560px;position:relative;overflow:hidden;color:#fff;}
[data-soe=footer]{background:#0E1110;color:#A5ADA4;padding:48px 20px 0;}
[data-soe=intro]{padding:80px 20px;text-align:center;background:#fff;}
[data-soe=brands-section]{background:#F6F7F5;}
[data-soe=brands-list]{background:#fff;}
[data-soe=cta-band]{background:#0E1110;color:#fff;}
[data-soe=quote-band]{background:#0E1110;color:#fff;}
[data-soe=dealer-strip]{background:#0E1110;color:#fff;}
[data-soe=p-hero]{background:#0E1110;color:#fff;min-height:480px;position:relative;}
[data-soe=difference]{background:#F6F7F5;}
[data-soe=videos]{background:#fff;}
[data-soe=promo-strip]{background:#367C2B;color:#fff;padding:18px 20px;text-align:center;}
[data-soe=crumbs]{background:#EAEDE8;height:38px;padding:0 20px;display:flex;align-items:center;color:#3A413A;font-size:11px;}
.soe-header,.soe-footer,.soe-banner-section,.soe-hero-section,.soe-section,.mm-hero-section,.mm-info-bar,.mm-features-section,.mm-videos-section,.soe-runtime7,#soe-mobile-nav,#soe-nav-backdrop{display:none !important;}
@media (min-width:721px){
[data-soe=top-util]{height:40px;padding:0 64px;}
[data-soe=top-util-link][data-soe-kind=email]{display:inline-flex;}
[data-soe=top-util-left]{gap:28px;font-size:13px;}
[data-soe=top-util-link]{font-size:13px;}
[data-soe=nav]{height:72px;padding:0 0 0 64px;align-items:stretch;top:40px;}
[data-soe=nav-mark]{width:36px;height:36px;}
[data-soe=nav-word]{font-size:17px;}
[data-soe=nav-word-sub]{display:block;font-weight:500;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#6B746A;margin-top:5px;}
[data-soe=nav-links]{display:flex;align-items:stretch;}
[data-soe=nav-link]{padding:0 14px;font-size:14px;color:#fff;text-decoration:none;display:inline-flex;align-items:center;height:100%;white-space:nowrap;}
[data-soe=nav-cta]{padding:0 26px;font-size:14px;letter-spacing:0;}
[data-soe=nav-hamburger]{display:none;}
[data-soe=crumbs]{padding:0 64px;}
[data-soe=intro]{padding:140px 64px 120px;}
[data-soe=footer]{padding:64px 64px 0;}
[data-soe=promo-strip]{padding:18px 64px;}
}`;
  var st=document.createElement(`style`);
  st.setAttribute(`data-soe-design`,`v2l-early-css`);
  st.textContent=css;
  document.head.appendChild(st);
})();

/* === boot-fixes-v2m === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2m-bgflash`);
  s.textContent=`html{background:#0E1110 !important;}body{background:#0E1110 !important;}`;
  document.head.appendChild(s);
})();

/* === boot-fixes-v2n === */
(function(){
  var cdn=`https://cdn.prod.website-files.com/69e63e318c2f6e69a08e1082/`;
  var amp=String.fromCharCode(38);
  var imgs={
    mm:`69e6acf211eb95c0705bab89_mulch-mule.jpg`,
    bm:`69e6acf1afd45b9b1874f17a_brinemasters.jpg`,
    eg:`69e6acf3e52ea6ea030c518e_energreen.jpg`,
    mt:`69e6acf15f04771e02f81538_metec.webp`
  };
  function url(file,w,q){return cdn+file+`?w=`+w+amp+`q=`+q+amp+`fm=webp`;}

  var pm=document.createElement(`link`);
  pm.rel=`preload`;
  pm.as=`image`;
  pm.href=url(imgs.mm,900,78);
  pm.setAttribute(`media`,`(max-width:720px)`);
  pm.fetchPriority=`high`;
  document.head.appendChild(pm);

  var pd=document.createElement(`link`);
  pd.rel=`preload`;
  pd.as=`image`;
  pd.href=url(imgs.mm,1800,85);
  pd.setAttribute(`media`,`(min-width:721px)`);
  pd.fetchPriority=`high`;
  document.head.appendChild(pd);

  function r(sel,file,w,q){return sel+`{background-image:url(`+url(file,w,q)+`) !important;}`;}

  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2n-perf`);
  s.textContent=
    `@media (max-width:720px){`+
      r(`[data-soe=hero-slide]:nth-child(1) [data-soe=hero-bg]`,imgs.mm,900,78)+
      r(`[data-soe=hero-slide]:nth-child(2) [data-soe=hero-bg]`,imgs.bm,900,78)+
      r(`[data-soe=hero-slide]:nth-child(3) [data-soe=hero-bg]`,imgs.eg,900,78)+
      r(`[data-soe=hero-slide]:nth-child(4) [data-soe=hero-bg]`,imgs.mt,900,78)+
      r(`[data-soe=brand-grid] a:nth-child(1) [data-soe=brand-card-visual]`,imgs.mm,800,78)+
      r(`[data-soe=brand-grid] a:nth-child(2) [data-soe=brand-card-visual]`,imgs.bm,800,78)+
      r(`[data-soe=brand-grid] a:nth-child(3) [data-soe=brand-card-visual]`,imgs.eg,800,78)+
      r(`[data-soe=brand-grid] a:nth-child(4) [data-soe=brand-card-visual]`,imgs.mt,800,78)+
      r(`[data-soe=brands-list-grid] article:nth-child(1) [data-soe=brand-card-visual-l]`,imgs.mm,800,78)+
      r(`[data-soe=brands-list-grid] article:nth-child(2) [data-soe=brand-card-visual-l]`,imgs.bm,800,78)+
      r(`[data-soe=brands-list-grid] article:nth-child(3) [data-soe=brand-card-visual-l]`,imgs.eg,800,78)+
      r(`[data-soe=brands-list-grid] article:nth-child(4) [data-soe=brand-card-visual-l]`,imgs.mt,800,78)+
      r(`[data-soe=p-hero] [data-soe=p-hero-bg]`,imgs.mm,900,78)+
    `}`+
    `@media (min-width:721px){`+
      r(`[data-soe=hero-slide]:nth-child(1) [data-soe=hero-bg]`,imgs.mm,1800,85)+
      r(`[data-soe=hero-slide]:nth-child(2) [data-soe=hero-bg]`,imgs.bm,1800,85)+
      r(`[data-soe=hero-slide]:nth-child(3) [data-soe=hero-bg]`,imgs.eg,1800,85)+
      r(`[data-soe=hero-slide]:nth-child(4) [data-soe=hero-bg]`,imgs.mt,1800,85)+
      r(`[data-soe=brand-grid] a:nth-child(1) [data-soe=brand-card-visual]`,imgs.mm,1200,85)+
      r(`[data-soe=brand-grid] a:nth-child(2) [data-soe=brand-card-visual]`,imgs.bm,1200,85)+
      r(`[data-soe=brand-grid] a:nth-child(3) [data-soe=brand-card-visual]`,imgs.eg,1200,85)+
      r(`[data-soe=brand-grid] a:nth-child(4) [data-soe=brand-card-visual]`,imgs.mt,1200,85)+
      r(`[data-soe=brands-list-grid] article:nth-child(1) [data-soe=brand-card-visual-l]`,imgs.mm,1200,85)+
      r(`[data-soe=brands-list-grid] article:nth-child(2) [data-soe=brand-card-visual-l]`,imgs.bm,1200,85)+
      r(`[data-soe=brands-list-grid] article:nth-child(3) [data-soe=brand-card-visual-l]`,imgs.eg,1200,85)+
      r(`[data-soe=brands-list-grid] article:nth-child(4) [data-soe=brand-card-visual-l]`,imgs.mt,1200,85)+
      r(`[data-soe=p-hero] [data-soe=p-hero-bg]`,imgs.mm,1800,85)+
    `}`;
  document.head.appendChild(s);
})();

/* === boot-fixes-v2o === */
(function(){
  // ===== CSS =====
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2o-fixes`);
  s.textContent=[
    `[data-soe=intro-isprefix]{display:none !important;}`,
    `[data-soe=intro] [data-soe=eyebrow]{display:none !important;}`,
    `[data-soe=brands-head] [data-soe=eyebrow]{display:none !important;}`,
    `[data-soe=brand-card-cat]{display:none !important;}`,
    `[data-soe=cta-band]{display:none !important;}`,
    `[data-soe=quote-band]{display:none !important;}`,
    `[data-soe=difference-head-left] [data-soe=eyebrow]{display:none !important;}`,
    `[data-soe=difference-head-lede]{display:none !important;}`,
    `[data-soe=videos-head-left] [data-soe=eyebrow]{display:none !important;}`,
    `[data-soe=videos-head-lede]{display:none !important;}`,
    `[data-soe=intro-tagline]{font-size:30px !important;line-height:1.35 !important;max-width:720px !important;}`,
    `@media (max-width:720px){[data-soe=intro-tagline]{font-size:22px !important;}}`,
    `[data-soe=brands-head-h2]{margin-bottom:18px !important;}`,
    `[data-soe=brands-head-lede]{line-height:1.55 !important;}`,
    `[data-soe=brands-head]{gap:64px !important;margin-bottom:56px !important;}`,
    `[data-soe=intro-lockup]{margin-bottom:40px !important;}`,
    `[data-soe=nav-cta]{padding:0 36px !important;}`,
    `[data-soe=brand-card]{cursor:pointer;}`,
    `[data-soe=footer-bot]{padding:20px 0 !important;}`,
    `[data-soe=footer-top]{padding-bottom:36px !important;}`,
    `[data-soe=nav-link-wrap]{position:relative;display:inline-flex;align-items:stretch;height:100%;}`,
    `[data-soe=nav-dropdown]{position:absolute;top:100%;left:0;background:#0E1110;min-width:220px;display:flex;flex-direction:column;opacity:0;visibility:hidden;transform:translateY(8px);transition:opacity .15s,visibility .15s,transform .15s;z-index:100;border-top:3px solid #367C2B;box-shadow:0 8px 24px rgba(0,0,0,.4);}`,
    `[data-soe=nav-link-wrap]:hover [data-soe=nav-dropdown],[data-soe=nav-dropdown]:hover{opacity:1;visibility:visible;transform:translateY(0);}`,
    `[data-soe=nav-dropdown-item]{padding:14px 20px;color:#fff;text-decoration:none;font-size:14px;border-bottom:1px solid rgba(255,255,255,.1);transition:background .15s,color .15s;font-family:Inter,sans-serif;font-weight:500;}`,
    `[data-soe=nav-dropdown-item]:last-child{border-bottom:0;}`,
    `[data-soe=nav-dropdown-item]:hover{background:rgba(255,255,255,.05);color:#7DB13C;}`,
    `[data-soe=nav-brand]{cursor:pointer;}`,
    `@media (max-width:720px){[data-soe=nav-dropdown]{display:none !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function ready(fn){
    if(document.readyState !== `loading`)fn();
    else document.addEventListener(`DOMContentLoaded`,fn);
  }

  function applyFixes(){
    var tag=document.querySelector(`[data-soe=intro-tagline]`);
    if(tag)tag.textContent=`Work smarter, not harder.`;

    var bhl=document.querySelector(`[data-soe=brands-head-lede]`);
    if(bhl)bhl.textContent=`Four smart equipment lines that work smarter, not harder.`;

    var brand=document.querySelector(`[data-soe=nav-brand]`);
    if(brand){
      brand.addEventListener(`click`,function(e){
        var t=e.target;
        var inA=(t.closest?t.closest(`a`):null);
        if(t.tagName === `A`)return;
        if(inA)return;
        location.href=`/`;
      });
    }

    document.querySelectorAll(`[data-soe=brand-card]`).forEach(function(card){
      var link=card.querySelector(`[data-soe=brand-card-link-large]`);
      if(!link)return;
      card.addEventListener(`click`,function(e){
        var t=e.target;
        var inA=(t.closest?t.closest(`a`):null);
        if(t.tagName === `A`)return;
        if(inA)return;
        var href=link.getAttribute(`href`);
        location.href=(href?href:`/brands`);
      });
    });

    document.querySelectorAll(`[data-soe=hero-ctas] a[data-soe=btn]`).forEach(function(btn){
      var t=btn.textContent.trim();
      if(t === `Watch Demo`)btn.textContent=`Watch Video`;
      if(t === `View Specs`)btn.textContent=`Watch Video`;
    });

    function setOrigin(name,place){
      document.querySelectorAll(`[data-soe=brand-card-name],[data-soe=brand-card-h3]`).forEach(function(el){
        if(el.textContent.trim() !== name)return;
        var card=el.closest(`[data-soe=brand-card-h]`);
        if(!card)card=el.closest(`[data-soe=brand-card]`);
        if(!card)return;
        var origin=card.querySelector(`[data-soe=brand-card-origin]`);
        if(!origin)origin=card.querySelector(`[data-soe=brand-card-origin-line]`);
        if(!origin)return;
        var b=origin.querySelector(`b`);
        if(b)b.textContent=place;
        else origin.textContent=`Made in `+place;
      });
    }
    setOrigin(`Brinemasters`,`Indiana, USA`);
    setOrigin(`Metec`,`Vankleek Hill, Ontario, Canada`);

    var APOS=String.fromCharCode(39);
    var bannerCopy={};
    bannerCopy[`Mulch Mule`]=`Mulch Smarter. Move Faster.`;
    bannerCopy[`Brinemasters`]=`The Smarter Way To Brine.`;
    bannerCopy[`Energreen`]=`The Safest Seat Is The One You`+APOS+`re Not In.`;
    bannerCopy[`Metec`]=`The Attachment Your Tractor Deserves.`;
    document.querySelectorAll(`[data-soe=brand-card-name]`).forEach(function(name){
      var card=name.closest(`[data-soe=brand-card-h]`);
      if(!card)return;
      var desc=card.querySelector(`[data-soe=brand-card-desc]`);
      if(!desc)return;
      var k=name.textContent.trim();
      if(bannerCopy[k])desc.textContent=bannerCopy[k];
    });

    var rm=[`Warranty`,`Training`,`Careers`,`Press`,`Accessibility`];
    document.querySelectorAll(`[data-soe=footer-col] a`).forEach(function(a){
      if(rm.indexOf(a.textContent.trim()) === -1)return;
      var li=a.closest(`li`);
      if(li)li.style.display=`none`;
      else a.style.display=`none`;
    });

    var brandsLink=null;
    document.querySelectorAll(`[data-soe=nav-link]`).forEach(function(a){
      if(a.textContent.trim() === `Brands`)brandsLink=a;
    });
    if(brandsLink){
      var pn=brandsLink.parentNode;
      if(pn){
        var alreadyWrapped=pn.matches?pn.matches(`[data-soe=nav-link-wrap]`):false;
        if(!alreadyWrapped){
          var wrap=document.createElement(`span`);
          wrap.setAttribute(`data-soe`,`nav-link-wrap`);
          pn.insertBefore(wrap,brandsLink);
          wrap.appendChild(brandsLink);
          var dd=document.createElement(`div`);
          dd.setAttribute(`data-soe`,`nav-dropdown`);
          var items=[
            [`Mulch Mule`,`/mulch-mule`],
            [`Brinemasters`,`/brands`],
            [`Energreen`,`/brands`],
            [`Metec`,`/brands`]
          ];
          items.forEach(function(it){
            var aa=document.createElement(`a`);
            aa.setAttribute(`data-soe`,`nav-dropdown-item`);
            aa.href=it[1];
            aa.textContent=it[0];
            dd.appendChild(aa);
          });
          wrap.appendChild(dd);
        }
      }
    }

    var heroSlides=document.querySelectorAll(`[data-soe=hero-slide]`);
    if(heroSlides.length !== 0){
      var hero=document.querySelector(`[data-soe=hero]`);
      if(hero){
        var clone=hero.cloneNode(true);
        hero.parentNode.replaceChild(clone,hero);
        heroSlides=clone.querySelectorAll(`[data-soe=hero-slide]`);
      }
      var i=0;
      heroSlides.forEach(function(sl,idx){
        if(sl.getAttribute(`data-soe-state`) === `active`)i=idx;
      });
      function go(n){
        heroSlides.forEach(function(sl,idx){
          if(idx === n)sl.setAttribute(`data-soe-state`,`active`);
          else sl.removeAttribute(`data-soe-state`);
        });
        i=n;
      }
      go(i);
      setInterval(function(){go((i+1) % heroSlides.length);},6500);
    }

    var word=document.querySelector(`[data-soe=intro-word]`);
    if(word){
      var fresh=word.cloneNode(false);
      fresh.textContent=``;
      word.parentNode.replaceChild(fresh,word);
      var WORDS=[`Safer.`,`Faster.`,`Leaner.`,`More Profits for You.`];
      var wi=0,ch=0,deleting=false;
      function tick(){
        var cw=WORDS[wi];
        if(!deleting){
          ch=ch+1;
          fresh.textContent=cw.slice(0,ch);
          if(ch === cw.length){deleting=true;setTimeout(tick,1600);return;}
          setTimeout(tick,90);
        }else{
          ch=ch-1;
          fresh.textContent=cw.slice(0,ch);
          if(ch === 0){deleting=false;wi=(wi+1) % WORDS.length;setTimeout(tick,280);return;}
          setTimeout(tick,45);
        }
      }
      setTimeout(tick,1200);
    }
  }

  ready(function(){setTimeout(applyFixes,150);});
})();

/* === boot-fixes-v2p === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2p-fixes`);
  s.textContent=[
    `[data-soe=intro-word]{min-width:14ch !important;}`,
    `[data-soe=intro-line2]{justify-content:center;width:100%;}`,
    `@media (min-width:721px){[data-soe=intro-word]{min-width:18ch !important;}}`,
    `[data-soe=nav-cta]{align-self:center !important;padding:14px 28px !important;font-size:14px !important;height:auto !important;line-height:1 !important;}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2q === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2q-fixes`);
  s.textContent=`[data-soe=nav-cta]{margin-right:24px !important;}@media (max-width:720px){[data-soe=nav-cta]{margin-right:12px !important;}}`;
  document.head.appendChild(s);
})();

/* === boot-fixes-v2r === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2r-fixes`);
  s.textContent=[
    `[data-soe=intro]{text-align:center !important;}`,
    `[data-soe=intro-lockup]{align-items:center !important;width:100% !important;}`,
    `[data-soe=intro-leadin]{text-align:center !important;width:100% !important;}`,
    `[data-soe=intro-line2]{justify-content:center !important;align-items:baseline !important;width:100% !important;white-space:nowrap !important;}`,
    `[data-soe=intro-word]{justify-content:center !important;text-align:center !important;white-space:nowrap !important;min-width:18ch !important;line-height:1.02 !important;}`,
    `[data-soe=intro-tagline]{text-align:center !important;margin-left:auto !important;margin-right:auto !important;}`,
    `[data-soe=brand-card-name]{margin-bottom:22px !important;}`,
    `@media (max-width:720px){[data-soe=intro-word]{min-width:14ch !important;}}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2s === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2s-fixes`);
  s.textContent=[
    `[data-soe=intro-word]{min-height:1em !important;line-height:1.02 !important;}`,
    `[data-soe=intro-line2]{min-height:1.05em !important;font-size:clamp(40px,6vw,80px);}`,
    `[data-soe=intro-word]::before{content:\x22M\x22;visibility:hidden;width:0;display:inline-block;overflow:hidden;flex-shrink:0;}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2t === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2t-fixes`);
  s.textContent=`[data-soe=footer-tag]{display:none !important;}`;
  document.head.appendChild(s);

  function ready(fn){
    if(document.readyState !== `loading`)fn();
    else document.addEventListener(`DOMContentLoaded`,fn);
  }
  function rmLinks(){
    var rm=[`Dealer Portal`,`Buy Parts`,`Operator Manuals`];
    document.querySelectorAll(`[data-soe=footer-col] a`).forEach(function(a){
      if(rm.indexOf(a.textContent.trim()) === -1)return;
      var li=a.closest(`li`);
      if(li)li.style.display=`none`;
      else a.style.display=`none`;
    });
  }
  ready(function(){setTimeout(rmLinks,200);});
})();

/* === boot-fixes-v2u === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2u-quote`);
  s.textContent=[
    `[data-soe=crumbs]{padding:14px var(--gutter);background:#EAEDE8;color:#3A413A;font-size:11px;letter-spacing:.18em;text-transform:uppercase;display:flex;align-items:center;gap:6px;font-family:Inter,sans-serif;}`,
    `[data-soe=crumbs] a{color:#3A413A;text-decoration:none;}`,
    `[data-soe=crumbs] a:hover{color:#367C2B;}`,
    `[data-soe=crumbs] [data-soe=crumbs-current]{color:#FFAA33;}`,
    `[data-soe=page-head]{background:#0E1110;color:#fff;padding:80px var(--gutter) 100px;}`,
    `[data-soe=page-head-inner]{max-width:1200px;margin:0 auto;}`,
    `[data-soe=page-head-h1]{font-family:var(--font-display);font-weight:800;font-size:64px;line-height:1.05;letter-spacing:-.025em;margin:0 0 16px;color:#fff;}`,
    `[data-soe=page-head-lede]{font-family:var(--font-sans);font-size:18px;color:#A5ADA4;max-width:640px;margin:0;line-height:1.55;}`,
    `[data-soe=quote-page]{background:#F6F7F5;padding:40px var(--gutter) 100px;}`,
    `[data-soe=quote-grid]{display:grid;grid-template-columns:1.6fr 1fr;gap:32px;max-width:1200px;margin:0 auto;}`,
    `[data-soe=quote-card]{background:#fff;padding:40px;}`,
    `[data-soe=quote-card-h]{font-family:var(--font-display);font-weight:800;font-size:24px;color:#0E1110;margin:0 0 8px;}`,
    `[data-soe=quote-card-sub]{font-size:14px;color:#6B746A;margin:0 0 28px;}`,
    `[data-soe=quote-tabs]{display:flex;gap:0;border-bottom:1px solid #E2E5DF;margin-bottom:32px;}`,
    `[data-soe=quote-tab]{flex:1;background:transparent;border:0;padding:16px 0;font-family:Inter,sans-serif;font-size:13px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:#9AA298;cursor:pointer;border-bottom:3px solid transparent;transition:color .15s,border-color .15s;display:flex;align-items:center;justify-content:center;gap:8px;}`,
    `[data-soe=quote-tab] span{font-size:11px;font-weight:500;letter-spacing:.06em;text-transform:none;color:#9AA298;}`,
    `[data-soe=quote-tab][data-soe-state=active]{color:#367C2B;border-bottom-color:#367C2B;}`,
    `[data-soe=quote-tab-panel]{display:none;}`,
    `[data-soe=quote-tab-panel][data-soe-state=active]{display:block;}`,
    `[data-soe=quote-tab-intro]{font-size:14px;color:#3A413A;margin:0 0 24px;}`,
    `[data-soe=quote-section-h]{font-family:Inter,sans-serif;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#367C2B;margin:24px 0 14px;}`,
    `[data-soe=quote-form-row]{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:14px;}`,
    `[data-soe=quote-field]{display:flex;flex-direction:column;gap:6px;margin-bottom:14px;}`,
    `[data-soe=quote-field] label{font-size:13px;font-weight:600;color:#0E1110;}`,
    `[data-soe=quote-field] input,[data-soe=quote-field] select,[data-soe=quote-field] textarea{font-family:Inter,sans-serif;font-size:14px;padding:12px 14px;border:1px solid #D4D9D1;background:#fff;color:#0E1110;border-radius:0;transition:border-color .15s,box-shadow .15s;}`,
    `[data-soe=quote-field] input:focus,[data-soe=quote-field] select:focus,[data-soe=quote-field] textarea:focus{outline:none;border-color:#367C2B;box-shadow:0 0 0 3px rgba(54,124,43,.12);}`,
    `[data-soe=quote-field] textarea{resize:vertical;min-height:120px;}`,
    `[data-soe=quote-checkbox]{display:flex;align-items:center;gap:10px;padding:8px 0;font-size:14px;color:#3A413A;cursor:pointer;}`,
    `[data-soe=quote-checkbox] input{width:16px;height:16px;accent-color:#367C2B;}`,
    `[data-soe=quote-submit]{margin-top:24px;width:100%;padding:18px 24px;background:#367C2B;color:#fff;font-family:Inter,sans-serif;font-weight:700;font-size:14px;letter-spacing:.14em;text-transform:uppercase;border:0;cursor:pointer;transition:background .15s;}`,
    `[data-soe=quote-submit]:hover{background:#2D6822;}`,
    `[data-soe=quote-form-foot]{font-size:12px;color:#6B746A;text-align:center;margin:14px 0 0;}`,
    `[data-soe=quote-sidebar]{display:flex;flex-direction:column;gap:16px;}`,
    `[data-soe=sidebar-card]{background:#fff;padding:24px 28px;}`,
    `[data-soe=sidebar-card][data-soe-variant=muted]{background:#EFF2EE;}`,
    `[data-soe=sidebar-card-h]{font-family:Inter,sans-serif;font-size:11px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#0E1110;margin:0 0 16px;}`,
    `[data-soe=sidebar-row]{display:flex;align-items:center;gap:12px;padding:6px 0;color:#0E1110;text-decoration:none;font-size:14px;}`,
    `[data-soe=sidebar-row]:hover{color:#367C2B;}`,
    `[data-soe=sidebar-icon]{color:#367C2B;width:18px;font-size:16px;text-align:center;flex-shrink:0;}`,
    `[data-soe=expect-list]{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:10px;}`,
    `[data-soe=expect-list] li{display:flex;align-items:center;gap:10px;font-size:14px;color:#0E1110;}`,
    `[data-soe=expect-list] li::before{content:\x22✓\x22;color:#367C2B;font-weight:700;width:18px;text-align:center;flex-shrink:0;}`,
    `@media (max-width:1024px){[data-soe=quote-grid]{grid-template-columns:1fr;}[data-soe=page-head]{padding:60px var(--gutter) 80px;}[data-soe=page-head-h1]{font-size:48px;}}`,
    `@media (max-width:720px){[data-soe=page-head]{padding:48px var(--gutter) 64px;}[data-soe=page-head-h1]{font-size:36px;}[data-soe=page-head-lede]{font-size:16px;}[data-soe=quote-page]{padding:24px var(--gutter) 60px;}[data-soe=quote-card]{padding:28px 20px;}[data-soe=quote-form-row]{grid-template-columns:1fr;}[data-soe=quote-tab]{padding:14px 8px;font-size:12px;}[data-soe=quote-tab] span{display:none;}}`
  ].join(``);
  document.head.appendChild(s);

  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}

  ready(function(){
    var tabs=document.querySelectorAll(`[data-soe=quote-tab]`);
    var panels=document.querySelectorAll(`[data-soe=quote-tab-panel]`);
    tabs.forEach(function(tab){
      tab.addEventListener(`click`,function(e){
        e.preventDefault();
        var key=tab.getAttribute(`data-soe-tab`);
        tabs.forEach(function(t){
          if(t.getAttribute(`data-soe-tab`) === key)t.setAttribute(`data-soe-state`,`active`);
          else t.removeAttribute(`data-soe-state`);
        });
        panels.forEach(function(p){
          if(p.getAttribute(`data-soe-tab`) === key)p.setAttribute(`data-soe-state`,`active`);
          else p.removeAttribute(`data-soe-state`);
        });
      });
    });

    document.querySelectorAll(`[data-soe=nav-cta]`).forEach(function(a){a.setAttribute(`href`,`/request-quote`);});
    document.querySelectorAll(`[data-soe=hero-ctas] a[data-soe=btn]`).forEach(function(btn){
      var t=btn.textContent.trim();
      if(t === `Request a Quote`)btn.setAttribute(`href`,`/request-quote`);
      if(t === `Request Quote`)btn.setAttribute(`href`,`/request-quote`);
    });
  });
})();

/* === boot-fixes-v2v === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2v-form-spec`);
  s.textContent=[
    `[data-soe=quote-field]{display:flex;flex-direction:column;gap:6px;margin-bottom:20px;}`,
    `[data-soe=quote-field] label{font-family:Inter,sans-serif;font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#0E1110;}`,
    `[data-soe=quote-field] input,[data-soe=quote-field] select,[data-soe=quote-field] textarea{background:#fff !important;border:1px solid #A5ADA4 !important;padding:14px 16px !important;font-family:Inter,sans-serif !important;font-size:15px !important;color:#0E1110 !important;width:100% !important;outline:none !important;border-radius:0 !important;box-sizing:border-box !important;transition:border-color .15s,box-shadow .15s !important;}`,
    `[data-soe=quote-field] input:focus,[data-soe=quote-field] select:focus,[data-soe=quote-field] textarea:focus{border-color:#367C2B !important;box-shadow:inset 0 -2px 0 #367C2B !important;}`,
    `[data-soe=quote-field] textarea{resize:vertical !important;min-height:140px !important;}`,
    `[data-soe=quote-form-foot]{font-family:Inter,sans-serif;font-size:12px;color:#3A413A;}`,
    `[data-soe=quote-checkbox]{display:flex;align-items:center;gap:12px;padding:10px 0;font-size:14px;color:#0E1110;cursor:pointer;}`,
    `[data-soe=quote-checkbox] input{width:18px;height:18px;accent-color:#367C2B;}`,
    `[data-soe=quote-section-h]{font-family:Inter,sans-serif !important;font-size:11px !important;font-weight:700 !important;letter-spacing:.18em !important;text-transform:uppercase !important;color:#367C2B !important;margin:28px 0 16px !important;}`,
    `[data-soe=quote-tab]{font-family:Inter,sans-serif !important;font-size:13px !important;font-weight:700 !important;letter-spacing:.14em !important;text-transform:uppercase !important;}`,
    `[data-soe=sidebar-card-h]{font-family:Inter,sans-serif !important;font-size:12px !important;font-weight:700 !important;letter-spacing:.1em !important;text-transform:uppercase !important;color:#0E1110 !important;}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2w === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2w-checkbox`);
  s.textContent=[
    `[data-soe=quote-checkbox] .w-form-label{display:none !important;}`,
    `[data-soe=quote-checkbox]{display:flex !important;align-items:center !important;justify-content:center !important;gap:10px !important;padding:10px 0 !important;text-align:center;}`,
    `[data-soe=quote-checkbox] .w-checkbox{display:inline-flex !important;align-items:center !important;margin:0 !important;padding:0 !important;}`,
    `[data-soe=quote-checkbox] .w-checkbox-input{margin:0 !important;width:18px !important;height:18px !important;accent-color:#367C2B !important;}`,
    `[data-soe=quote-field]:has(select[name=timeline]){display:none !important;}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2x === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2x-submit-color`);
  s.textContent=`[data-soe=quote-submit]{color:#fff !important;background:#367C2B !important;text-decoration:none !important;}[data-soe=quote-submit]:hover{color:#fff !important;background:#2D6822 !important;}`;
  document.head.appendChild(s);
})();

/* === boot-fixes-v2y === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2y-icons`);
  s.textContent=`[data-soe=page-head-h1]{margin-bottom:28px !important;}[data-soe=sidebar-icon]{display:inline-flex !important;align-items:center !important;justify-content:center !important;}`;
  document.head.appendChild(s);

  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}
  var NS=`http://www.w3.org/2000/svg`;

  function makeSvg(){
    var svg=document.createElementNS(NS,`svg`);
    svg.setAttribute(`viewBox`,`0 0 24 24`);
    svg.setAttribute(`fill`,`none`);
    svg.setAttribute(`stroke`,`currentColor`);
    svg.setAttribute(`stroke-width`,`2`);
    svg.setAttribute(`stroke-linecap`,`round`);
    svg.setAttribute(`stroke-linejoin`,`round`);
    svg.style.width=`18px`;
    svg.style.height=`18px`;
    svg.style.display=`block`;
    return svg;
  }
  function addPath(svg,d){
    var p=document.createElementNS(NS,`path`);
    p.setAttribute(`d`,d);
    svg.appendChild(p);
  }
  function addPolyline(svg,pts){
    var p=document.createElementNS(NS,`polyline`);
    p.setAttribute(`points`,pts);
    svg.appendChild(p);
  }
  function addCircle(svg,cx,cy,r){
    var c=document.createElementNS(NS,`circle`);
    c.setAttribute(`cx`,cx);
    c.setAttribute(`cy`,cy);
    c.setAttribute(`r`,r);
    svg.appendChild(c);
  }

  function phoneIcon(){
    var s=makeSvg();
    addPath(s,`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`);
    return s;
  }
  function emailIcon(){
    var s=makeSvg();
    addPath(s,`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`);
    addPolyline(s,`22,6 12,13 2,6`);
    return s;
  }
  function clockIcon(){
    var s=makeSvg();
    addCircle(s,`12`,`12`,`10`);
    addPolyline(s,`12 6 12 12 16 14`);
    return s;
  }

  ready(function(){
    document.querySelectorAll(`[data-soe=sidebar-row]`).forEach(function(row){
      var icon=row.querySelector(`[data-soe=sidebar-icon]`);
      if(!icon)return;
      while(icon.firstChild)icon.removeChild(icon.firstChild);
      var href=row.getAttribute(`href`);
      if(!href)href=``;
      var svg;
      if(href.indexOf(`tel:`) === 0)svg=phoneIcon();
      else if(href.indexOf(`mailto:`) === 0)svg=emailIcon();
      else svg=clockIcon();
      icon.appendChild(svg);
    });
  });
})();

/* === boot-fixes-v2z === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2z-extras`);
  s.textContent=[
    `[data-soe=quote-field] input,[data-soe=quote-field] select,[data-soe=quote-field] textarea{line-height:1.4 !important;}`,
    `[data-soe=quote-field] select{height:auto !important;vertical-align:middle !important;}`,
    `@keyframes soeQuoteSlideIn{from{opacity:0;transform:translateX(28px);}to{opacity:1;transform:translateX(0);}}`,
    `[data-soe=quote-tab-panel][data-soe-state=active]{animation:soeQuoteSlideIn .35s cubic-bezier(.45,0,.2,1) both;}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2aa === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2aa-fold`);
  s.textContent=[
    `[data-soe=quote-tab-panel]{display:grid !important;grid-template-rows:0fr !important;transition:grid-template-rows .45s cubic-bezier(.45,0,.2,1),opacity .25s ease !important;opacity:0 !important;animation:none !important;}`,
    `[data-soe=quote-tab-panel][data-soe-state=active]{grid-template-rows:1fr !important;opacity:1 !important;}`,
    `[data-soe=quote-tab-panel-inner]{overflow:hidden;min-height:0;}`,
    `[data-soe=quote-tab-panel][data-soe-state=active] [data-soe=quote-tab-panel-inner]{animation:soeQuoteSlideIn .35s cubic-bezier(.45,0,.2,1) both;}`
  ].join(``);
  document.head.appendChild(s);

  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}

  ready(function(){
    document.querySelectorAll(`[data-soe=quote-tab-panel]`).forEach(function(panel){
      if(panel.querySelector(`[data-soe=quote-tab-panel-inner]`))return;
      var wrap=document.createElement(`div`);
      wrap.setAttribute(`data-soe`,`quote-tab-panel-inner`);
      while(panel.firstChild)wrap.appendChild(panel.firstChild);
      panel.appendChild(wrap);
    });
  });
})();

/* === boot-fixes-v2bb === */
(function(){
  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}
  ready(function(){
    document.querySelectorAll(`[data-soe=nav-link][data-soe-state=active]`).forEach(function(a){
      a.removeAttribute(`data-soe-state`);
    });
    var path=location.pathname;
    var brandsPaths=[`/brands`,`/mulch-mule`];
    if(brandsPaths.indexOf(path) !== -1){
      document.querySelectorAll(`[data-soe=nav-link]`).forEach(function(a){
        if(a.textContent.trim().toLowerCase().indexOf(`brands`) === 0){
          a.setAttribute(`data-soe-state`,`active`);
        }
      });
    }
  });
})();

/* === boot-fixes-v2cc === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2cc-footer-parity`);
  s.textContent=[
    `[data-soe=footer]{background:#0E1110 !important;color:#A5ADA4 !important;padding:64px 64px 0 !important;}`,
    `[data-soe=footer-tag]{display:none !important;}`,
    `[data-soe=footer-top]{display:grid !important;grid-template-columns:1.4fr 1fr 1fr 1fr 1fr !important;gap:48px !important;padding-bottom:36px !important;border-bottom:1px solid rgba(255,255,255,.08) !important;}`,
    `[data-soe=footer-brand]{display:flex !important;align-items:center !important;gap:14px !important;margin-bottom:24px !important;}`,
    `[data-soe=footer-mark]{width:40px !important;height:40px !important;background:#367C2B !important;position:relative !important;}`,
    `[data-soe=footer-word]{font-family:Inter,sans-serif !important;font-weight:800 !important;font-size:18px !important;color:#fff !important;line-height:1.1 !important;}`,
    `[data-soe=footer-word-sub]{display:block !important;font-family:Inter,sans-serif !important;font-weight:500 !important;font-size:10px !important;letter-spacing:.22em !important;text-transform:uppercase !important;color:#6B746A !important;margin-top:4px !important;}`,
    `[data-soe=footer-contact]{font-family:Inter,sans-serif !important;font-size:11px !important;letter-spacing:.12em !important;text-transform:uppercase !important;line-height:2 !important;color:#6B746A !important;}`,
    `[data-soe=footer-contact] b{color:#fff !important;font-weight:600 !important;}`,
    `[data-soe=footer-col-h]{font-family:Inter,sans-serif !important;font-size:11px !important;letter-spacing:.22em !important;text-transform:uppercase !important;color:#fff !important;font-weight:700 !important;margin:0 0 20px !important;}`,
    `[data-soe=footer-col] li{margin-bottom:12px !important;font-family:Inter,sans-serif !important;font-size:14px !important;}`,
    `[data-soe=footer-col] li a{color:#A5ADA4 !important;transition:color .15s !important;}`,
    `[data-soe=footer-col] li a:hover{color:#4A9540 !important;}`,
    `[data-soe=footer-bot]{display:flex !important;align-items:center !important;justify-content:space-between !important;padding:20px 0 !important;font-family:Inter,sans-serif !important;font-size:11px !important;letter-spacing:.15em !important;text-transform:uppercase !important;color:#6B746A !important;}`,
    `[data-soe=footer-legal]{display:flex !important;gap:24px !important;}`,
    `[data-soe=footer-legal] a{color:#A5ADA4 !important;}`,
    `[data-soe=footer-legal] a:hover{color:#fff !important;}`,
    `[data-soe=footer-social]{display:flex !important;gap:8px !important;}`,
    `[data-soe=footer-social] a{width:32px !important;height:32px !important;display:inline-flex !important;align-items:center !important;justify-content:center !important;background:rgba(255,255,255,.06) !important;color:#A5ADA4 !important;font-family:Inter,sans-serif !important;font-size:12px !important;font-weight:600 !important;text-transform:lowercase !important;transition:background .15s,color .15s !important;}`,
    `[data-soe=footer-social] a:hover{background:#367C2B !important;color:#fff !important;}`,
    `@media (max-width:1024px){[data-soe=footer-top]{grid-template-columns:1.4fr 1fr 1fr !important;gap:40px !important;}[data-soe=footer-col][data-soe-pos=4],[data-soe=footer-col][data-soe-pos=5]{display:none !important;}}`,
    `@media (max-width:720px){[data-soe=footer]{padding:48px 20px 0 !important;}[data-soe=footer-top]{grid-template-columns:1fr !important;gap:32px !important;padding:0 0 40px !important;}[data-soe=footer-col][data-soe-pos=4],[data-soe=footer-col][data-soe-pos=5]{display:block !important;}[data-soe=footer-bot]{flex-direction:column !important;gap:16px !important;align-items:flex-start !important;}[data-soe=footer-legal]{flex-wrap:wrap !important;gap:16px !important;}}`
  ].join(``);
  document.head.appendChild(s);

  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}
  ready(function(){
    var rm=[`Warranty`,`Training`,`Careers`,`Press`,`Accessibility`,`Dealer Portal`,`Buy Parts`,`Operator Manuals`];
    document.querySelectorAll(`[data-soe=footer-col] a`).forEach(function(a){
      if(rm.indexOf(a.textContent.trim()) === -1)return;
      var li=a.closest(`li`);
      if(li)li.style.display=`none`;
      else a.style.display=`none`;
    });
  });
})();

/* === boot-fixes-v2dd === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2dd-footer-contact-hide`);
  s.textContent=`[data-soe=footer-contact]{display:none !important;}`;
  document.head.appendChild(s);
})();

/* === boot-fixes-v2ee === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2ee-submit-button`);
  s.textContent=`button[data-soe=quote-submit]{font-family:Inter,sans-serif !important;font-weight:700 !important;font-size:14px !important;letter-spacing:.14em !important;text-transform:uppercase !important;border:0 !important;cursor:pointer !important;width:100% !important;padding:18px 24px !important;background:#367C2B !important;color:#fff !important;margin-top:24px !important;text-align:center !important;display:block !important;border-radius:0 !important;transition:background .15s !important;}button[data-soe=quote-submit]:hover{background:#2D6822 !important;}`;
  document.head.appendChild(s);

  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}

  function swap(){
    document.querySelectorAll(`a[data-soe=quote-submit]`).forEach(function(a){
      var btn=document.createElement(`button`);
      btn.setAttribute(`type`,`submit`);
      btn.setAttribute(`data-soe`,`quote-submit`);
      var f=a.getAttribute(`data-soe-form`);
      if(f)btn.setAttribute(`data-soe-form`,f);
      btn.textContent=a.textContent;
      a.parentNode.replaceChild(btn,a);
    });
  }
  ready(function(){setTimeout(swap,300);});
})();

/* === boot-fixes-v2ff === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2ff-footer-bot-layout`);
  s.textContent=[
    `[data-soe=footer-bot]{display:flex !important;flex-wrap:wrap !important;align-items:center !important;justify-content:flex-start !important;gap:16px !important;padding:20px 0 !important;}`,
    `[data-soe=footer-legal]{margin-left:auto !important;display:flex !important;align-items:center !important;gap:18px !important;}`,
    `[data-soe=footer-social]{margin-left:0 !important;padding-left:18px !important;border-left:1px solid rgba(255,255,255,.18) !important;display:flex !important;align-items:center !important;gap:8px !important;}`,
    `@media (max-width:720px){[data-soe=footer-bot]{flex-direction:row !important;flex-wrap:wrap !important;}[data-soe=footer-legal]{margin-left:0 !important;width:100% !important;}[data-soe=footer-social]{border-left:0 !important;padding-left:0 !important;width:100% !important;}}`
  ].join(``);
  document.head.appendChild(s);
})();

/* === boot-fixes-v2gg === */
(function(){
  var s=document.createElement(`style`);
  s.setAttribute(`data-soe-design`,`v2gg-mobile-lock`);
  s.textContent=[
    `html,body{overflow-x:hidden !important;max-width:100vw !important;}`,
    `[data-soe=quote-page],[data-soe=quote-grid],[data-soe=quote-card]{max-width:100% !important;overflow:hidden;}`,
    `[data-soe=quote-form-row]{max-width:100% !important;}`,
    `[data-soe=quote-field] input,[data-soe=quote-field] select,[data-soe=quote-field] textarea{font-size:16px !important;max-width:100% !important;width:100% !important;box-sizing:border-box !important;}`,
    `@media (max-width:720px){[data-soe=quote-field] textarea{min-height:120px !important;}}`
  ].join(``);
  document.head.appendChild(s);
})();

