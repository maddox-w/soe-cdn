/* SOE head boot — FOUC prevention + drawer handler. Loads parser-blocking in head. */
(function(){
  /* Set data-soe-page on <html> BEFORE first paint, so the render-blocking [data-soe-page=X] theme rules
     in boot-head.css (e.g. the HydroSpade navy buttons / eyebrows / promo-strip) apply on the FIRST paint
     instead of waiting for the deferred boot-master.js to set the attribute. That late set was painting the
     page in the default green theme first, then flipping to navy = the color flash on load/refresh.
     Mirrors setPageAttr() in boot-master.js; runs on every page so no page-scoped theme can flash. */
  (function(){
    var p='other', path=(location.pathname.replace(/\/+$/,'')||'/');
    if(path==='/')p='home';
    else if(path==='/brands')p='brands';
    else if(path==='/mulch-mule'||path==='/mulch-trailers/mulch-mule')p='mulch-mule';
    else if(path==='/remote-controlled-mowers')p='energreen';
    else if(path==='/hydrospade'||path==='/hydrospade-trucks'||path==='/hydrospade-trailers')p='hydrospade';
    else if(['/camion','/brine-maker','/brine-master','/brine-maker/brine-master','/ice-master-t-series','/brine-sprayers/ice-master-t-series','/camion-brine-storage-tank','/brine-storage-tanks/camion-brine-storage-tank','/camion-diesel-fuel-boss','/diesel-transfer-tanks/camion-diesel-fuel-boss'].indexOf(path)!==-1)p='camion';
    else if(path==='/new-customer-setup')p='newcustomer';
    document.documentElement.setAttribute('data-soe-page',p);
  })();

  /* Page-load curtain. Create a white panel that covers the page on the FIRST paint, then swipes up
     (driven by boot-fixes-v2tt in boot-master.js), after which the page's scroll-reveals flow in.
     Built here — parser-blocking in <head>, before <body> parses — so the white is on screen before any
     content paints (no flash of un-revealed content). It is appended to <html> and styled position:fixed
     z-index:48 in boot-head.css: UNDER the sticky header (nav z49 / top-util z50) so the header is never
     covered — the curtain slides up behind it. Skipped entirely under prefers-reduced-motion. A pure-CSS
     failsafe in boot-head.css lifts it even if boot-master.js never loads. */
  (function(){
    try{
      if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      var c = document.createElement('div');
      c.id = 'soe-curtain';
      c.setAttribute('aria-hidden','true');
      (document.body || document.documentElement).appendChild(c);
      document.documentElement.setAttribute('data-soe-curtain','down');
    }catch(e){}
  })();

  var css = '\n[data-soe-design]{display:none;}\nhtml{background:#0E1110;}\nbody{margin:0;padding:0;background:#fff;font-family:Inter,system-ui,sans-serif;font-size:16px;line-height:1.55;}\n[data-soe] *{box-sizing:border-box;}\n[data-soe] img{max-width:100%;display:block;}\n[data-soe] a{color:inherit;text-decoration:none;}\n[data-soe] ul,[data-soe] ol{list-style:none;margin:0;padding:0;}\n[data-soe] svg{flex-shrink:0;}\n[data-soe=top-util-icon]{width:14px;height:14px;color:#4A9540;}\n[data-soe=top-util]{background:#0E1110;color:#A5ADA4;height:36px;display:flex;align-items:center;padding:0 20px;font-size:13px;box-sizing:border-box;border-bottom:0;margin:0;font-family:Inter,sans-serif;position:sticky;top:0;z-index:50;}\n[data-soe=top-util-left]{display:flex;align-items:center;gap:16px;}\n[data-soe=top-util-link]{display:inline-flex;align-items:center;gap:8px;color:#A5ADA4;text-decoration:none;font-size:11px;}\n[data-soe=top-util-link][data-soe-kind=email]{display:none;}\n[data-soe=nav]{background:#0E1110;color:#fff;height:60px;display:flex;align-items:center;padding:0 20px;border-bottom:1px solid rgba(255,255,255,.08);box-sizing:border-box;margin:0;position:sticky;top:36px;z-index:49;gap:12px;}\n[data-soe=nav-brand]{display:flex;align-items:center;gap:12px;white-space:nowrap;cursor:pointer;}\n[data-soe=nav-mark]{width:30px;height:30px;background:#367C2B;position:relative;flex-shrink:0;}\n[data-soe=nav-mark]::after{content:"";position:absolute;inset:0;background:#FFDE00;clip-path:polygon(50% 22%,82% 78%,18% 78%);}\n[data-soe=nav-word]{font-weight:800;font-size:14px;color:#fff;font-family:Inter,sans-serif;}\n[data-soe=nav-word-sub]{display:none;}\n[data-soe=nav-links]{display:none;}\n[data-soe=nav-spacer]{flex:1;}\n[data-soe=nav-cta]{background:#367C2B;color:#fff;padding:0 16px;font-weight:600;font-size:11px;text-decoration:none;display:flex;align-items:center;align-self:center;font-family:Inter,sans-serif;letter-spacing:.14em;}\n[data-soe=nav-cta] [data-soe=arr]{display:none;}\n[data-soe=nav-hamburger]{display:inline-flex;flex-direction:column;justify-content:center;gap:5px;width:36px;height:36px;background:transparent;border:0;padding:0;cursor:pointer;order:-1;}\n[data-soe=nav-hamburger] span{display:block;width:22px;height:2px;background:#fff;}\n[data-soe=nav-drawer]{display:block;position:fixed;top:0;left:0;right:0;bottom:0;background:#0E1110;z-index:100;padding:80px 32px 40px;transform:translateX(-100%);transition:transform .3s ease;overflow-y:auto;}\n[data-soe=nav-drawer][data-soe-state=open]{transform:translateX(0);}\n[data-soe=nav-drawer] ul{list-style:none;margin:0;padding:0;}\n[data-soe=nav-drawer] li{border-bottom:1px solid rgba(255,255,255,.1);}\n[data-soe=nav-drawer] a{display:block !important;padding:18px 0;font-family:Inter,sans-serif;font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#fff !important;font-weight:600;text-decoration:none;}\n[data-soe=nav-drawer] a:hover{color:#7DB13C !important;}\n[data-soe=drawer-close]{position:absolute;top:20px;right:20px;width:36px;height:36px;background:transparent;border:0;color:#fff;font-size:28px;cursor:pointer;}\n[data-soe=drawer-contact]{margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,.1);display:flex;flex-direction:column;gap:12px;}\n[data-soe=drawer-contact] a{color:#A5ADA4 !important;font-size:14px;display:flex !important;align-items:center;gap:10px;padding:0;text-transform:none;letter-spacing:0;font-weight:400;border:0;}\n[data-soe=hero]{background:#0E1110;min-height:560px;position:relative;overflow:hidden;color:#fff;}\n[data-soe=hero-slide]{opacity:0;clip-path:inset(0 0 0 100%);}\n[data-soe=hero-slide][data-soe-state=active]{opacity:1 !important;clip-path:inset(0 0 0 0) !important;}\n[data-soe=footer]{background:#0E1110;color:#A5ADA4;padding:48px 20px 0;}\n[data-soe=intro]{padding:80px 20px;text-align:center;background:#fff;}\n[data-soe=brands-section]{background:#F6F7F5;}\n[data-soe=brands-list]{background:#fff;}\n[data-soe=cta-band]{background:#0E1110;color:#fff;}\n[data-soe=quote-band]{background:#0E1110;color:#fff;}\n[data-soe=dealer-strip]{background:#0E1110;color:#fff;}\n[data-soe=p-hero]{background:#0E1110;color:#fff;min-height:480px;position:relative;}\n[data-soe=difference]{background:#F6F7F5;}\n[data-soe=videos]{background:#fff;}\n[data-soe=promo-strip]{background:#367C2B;color:#fff;padding:18px 20px;text-align:center;}\n[data-soe=crumbs]{background:#EAEDE8;height:38px;padding:0 20px;display:flex;align-items:center;color:#3A413A;font-size:11px;}\n[data-soe-anim=reveal]{opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease;}\n[data-soe-anim=reveal][data-soe-state=in-view]{opacity:1;transform:translateY(0);}\n[data-soe=page-head-inner]{margin:0 !important;}\n.soe-header,.soe-footer,.soe-banner-section,.soe-hero-section,.soe-section,.mm-hero-section,.mm-info-bar,.mm-features-section,.mm-videos-section,.soe-runtime7,#soe-mobile-nav,#soe-nav-backdrop{display:none !important;}\n@media (min-width:721px){\n[data-soe=top-util]{height:40px;padding:0 64px;}\n[data-soe=top-util-link][data-soe-kind=email]{display:inline-flex;}\n[data-soe=top-util-left]{gap:28px;font-size:13px;}\n[data-soe=top-util-link]{font-size:13px;}\n[data-soe=nav]{height:72px;padding:0 0 0 64px;align-items:stretch;top:40px;}\n[data-soe=nav-mark]{width:36px;height:36px;}\n[data-soe=nav-word]{font-size:17px;}\n[data-soe=nav-word-sub]{display:block;font-weight:500;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:#A5ADA4;margin-top:5px;}\n[data-soe=nav-links]{display:flex;align-items:stretch;}\n[data-soe=nav-link]{padding:0 14px;font-size:14px;color:#fff;text-decoration:none;display:inline-flex;align-items:center;height:100%;white-space:nowrap;}\n[data-soe=nav-cta]{padding:14px 28px;font-size:14px;letter-spacing:0;height:auto;line-height:1;margin-right:24px;}\n[data-soe=nav-hamburger]{display:none;}\n[data-soe=nav-drawer]{display:none;}\n[data-soe=crumbs]{padding:0 64px;}\n[data-soe=intro]{padding:140px 64px 120px;}\n[data-soe=footer]{padding:64px 64px 0;}\n[data-soe=promo-strip]{padding:18px 64px;}\n}\n';
  var s = document.createElement('style');
  s.setAttribute('data-soe-design', 'head-preamble');
  s.textContent = css;
  (document.head || document.documentElement).appendChild(s);

  function fixQuoteTabs(){
    document.querySelectorAll('form[data-turnstile-sitekey]').forEach(function(f){
      f.removeAttribute('data-turnstile-sitekey');
    });
    document.querySelectorAll('[data-soe=quote-tab]').forEach(function(t){
      if (t.tagName === 'BUTTON') return;
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('data-soe', 'quote-tab');
      ['data-soe-tab','data-soe-state','data-soe-form'].forEach(function(a){
        if (t.hasAttribute(a)) btn.setAttribute(a, t.getAttribute(a));
      });
      btn.innerHTML = t.innerHTML;
      btn.style.cursor = 'pointer';
      btn.style.touchAction = 'manipulation';
      btn.style.background = 'transparent';
      btn.style.border = '0';
      t.parentNode.replaceChild(btn, t);
    });
    document.querySelectorAll('[data-soe=quote-field]').forEach(function(f){
      if (f.querySelector('select[name=timeline]')) f.style.display = 'none';
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixQuoteTabs);
  } else {
    fixQuoteTabs();
  }

  function applyTabState(key){
    document.querySelectorAll('[data-soe=quote-tab]').forEach(function(x){
      if (x.getAttribute('data-soe-tab') === key) x.setAttribute('data-soe-state', 'active');
      else x.removeAttribute('data-soe-state');
    });
    document.querySelectorAll('[data-soe=quote-tab-panel]').forEach(function(p){
      if (p.getAttribute('data-soe-tab') === key) {
        p.setAttribute('data-soe-state', 'active');
        p.removeAttribute('inert');
      } else {
        p.removeAttribute('data-soe-state');
        p.setAttribute('inert', '');
      }
    });
  }
  function setInitialInert(){
    document.querySelectorAll('[data-soe=quote-tab-panel]').forEach(function(p){
      if (p.getAttribute('data-soe-state') !== 'active') p.setAttribute('inert', '');
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setInitialInert);
  } else {
    setInitialInert();
  }
  document.addEventListener('click', function(e){
    var t = e.target;
    if (!t || !t.closest) return;
    var tab = t.closest('[data-soe=quote-tab]');
    if (!tab) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    var key = tab.getAttribute('data-soe-tab');
    requestAnimationFrame(function(){applyTabState(key);});
  }, true);
  document.addEventListener('touchend', function(e){
    var t = e.target;
    if (!t || !t.closest) return;
    var tab = t.closest('[data-soe=quote-tab]');
    if (!tab) return;
    e.preventDefault();
    e.stopPropagation();
    var key = tab.getAttribute('data-soe-tab');
    requestAnimationFrame(function(){applyTabState(key);});
  }, {capture: true, passive: false});

  function preRenderPanels(){
    document.querySelectorAll('[data-soe=quote-tab-panel]').forEach(function(p){
      var prev = p.style.cssText;
      p.style.cssText = 'display:block !important;visibility:hidden !important;position:absolute !important;left:-99999px !important;top:0 !important;';
      void p.offsetHeight;
      p.style.cssText = prev;
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', preRenderPanels);
  } else {
    preRenderPanels();
  }

  function presetHero(){
    var slides = document.querySelectorAll('[data-soe=hero-slide]');
    if (slides.length === 0) return;
    slides[0].setAttribute('data-soe-state', 'active');
    for (var i = 1; i < slides.length; i++) slides[i].removeAttribute('data-soe-state');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', presetHero);
  } else {
    presetHero();
  }

  function bind(){
    document.addEventListener('click', function(e){
      var t = e.target;
      if (!t || !t.closest) return;
      var ham = t.closest('[data-soe=nav-hamburger]');
      if (ham) {
        e.preventDefault();
        var d = document.querySelector('[data-soe=nav-drawer]');
        if (d) { d.setAttribute('data-soe-state', 'open'); document.body.style.overflow = 'hidden'; }
        return;
      }
      var close = t.closest('[data-soe=drawer-close]');
      if (close) {
        e.preventDefault();
        var d = document.querySelector('[data-soe=nav-drawer]');
        if (d) { d.removeAttribute('data-soe-state'); document.body.style.overflow = ''; }
        return;
      }
      var brand = t.closest('[data-soe=nav-brand]');
      if (brand && t.tagName !== 'A' && !t.closest('a')) {
        (window.__soeCloseAndGo || function(u){ location.href = u; })('/');   /* logo -> home, via the close-the-door transition when available */
        return;
      }
      var drawerLink = t.closest('[data-soe=nav-drawer] a');
      if (drawerLink) {
        setTimeout(function(){
          var d = document.querySelector('[data-soe=nav-drawer]');
          if (d) { d.removeAttribute('data-soe-state'); document.body.style.overflow = ''; }
        }, 50);
      }
    });
    document.addEventListener('keydown', function(e){
      if (e.key === 'Escape') {
        var d = document.querySelector('[data-soe=nav-drawer]');
        if (d) { d.removeAttribute('data-soe-state'); document.body.style.overflow = ''; }
      }
    });
  }
  bind();
})();

;(function(){ /* header reveal safety net: if boot-master never loads, don't leave the header hidden */
  setTimeout(function(){ try{ var h=document.documentElement; if(h.getAttribute(`data-soe-chrome`)!==`ready`) h.setAttribute(`data-soe-chrome`,`ready`); }catch(e){} }, 3000);
})();
