/* SOE master slim — JS-only (CSS lives in boot-head.css) */

/* === boot-design-v2 === */
(function(){
  var amp = String.fromCharCode(38);
  var l = document.createElement(`link`);
  l.rel = `stylesheet`;
  l.href = `https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800` + amp + `family=Inter:wght@300;400;500;600;700;800` + amp + `display=swap`;
  document.head.appendChild(l);

  

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
    /* initRotator + initTypewriter intentionally disabled — v2a (rotator with clip-path swipe + prev-state)
       and v2o (typewriter that clones the element to take ownership) handle these. Running both causes
       two tickers / two interval handlers on the same element ("spazzing", duplicate frames). */
    initReveals();
  }
  if(document.readyState === `loading`){document.addEventListener(`DOMContentLoaded`,init);}
  else{init();}
})();

/* === boot-fixes-v2a === */
(function(){
  var cdn=`https://cdn.prod.website-files.com/69e63e318c2f6e69a08e1082/`;
  var img={mm:cdn+`69e6acf211eb95c0705bab89_mulch-mule.jpg`,bm:cdn+`69e6acf1afd45b9b1874f17a_brinemasters.jpg`,eg:cdn+`69e6acf3e52ea6ea030c518e_energreen.jpg`,mt:cdn+`69e6acf15f04771e02f81538_metec.webp`};
  

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
  /* Run synchronously so the data-soe-anim=reveal attribute is on elements before first paint —
     paired with the boot-head.css overrides that keep above-the-fold elements at opacity:1 */
  init();
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
      },2100);
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

/* === boot-fixes-v2ww === inject the site chrome (top bar + nav + mobile drawer) on any page
   that has no native chrome of its own (e.g. /coming-soon). rebuildNav/rebuildDrawer below then
   enhance it exactly like every other page. Runs synchronously, before v2hh, so the enhancers see it. */
(function(){
  try{
    if(document.querySelector(`[data-soe=nav]`))return;            /* page already has chrome */
    var b=document.body; if(!b)return;
    b.insertAdjacentHTML(`afterbegin`, `<header data-soe="top-util"><div data-soe="top-util-left"><a href="tel:+18123057545" data-soe="top-util-link" class="w-inline-block"><svg data-soe="top-util-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>(855) 419-9190</a><a href="mailto:info@smartoutdoorequipment.com" data-soe="top-util-link" data-soe-kind="email" class="w-inline-block"><svg data-soe="top-util-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>info@smartoutdoorequipment.com</a></div></header><nav data-soe="nav"><a aria-label="Open menu" data-soe="nav-hamburger" href="#" class="w-button"><span></span><span></span><span></span></a><div data-soe="nav-brand" class="soe-logo-nav-bg"></div><ul data-soe="nav-links" role="list"><li><a href="#" data-soe="nav-link">Products<span data-soe="nav-caret"></span></a></li><li><a href="/brands" data-soe="nav-link" data-soe-state="active" aria-current="page" class="w--current">Brands<span data-soe="nav-caret"></span></a></li><li><a href="#" data-soe="nav-link">Dealer Portal<span data-soe="nav-caret"></span></a></li><li><a href="#" data-soe="nav-link">Build &amp; Quote<span data-soe="nav-caret"></span></a></li><li><a href="#" data-soe="nav-link">Buy Parts</a></li><li><a href="#" data-soe="nav-link">Become a Dealer<span data-soe="nav-caret"></span></a></li><li><a href="#" data-soe="nav-link">About Us</a></li></ul><div data-soe="nav-spacer"></div><a href="#" data-soe="nav-cta">Request Info<span data-soe="arr"></span></a></nav><div aria-hidden="true" data-soe="nav-drawer"><a aria-label="Close menu" data-soe="drawer-close" href="#" class="w-button">×</a><ul role="list"><li><a href="/">Home</a></li><li><a href="#">Products</a></li><li><a href="/brands" aria-current="page" class="w--current">Brands</a></li><li><a href="#">Dealer Portal</a></li><li><a href="#">Build &amp; Quote</a></li><li><a href="#">Buy Parts</a></li><li><a href="#">Become a Dealer</a></li><li><a href="#">About Us</a></li></ul><div data-soe="drawer-contact"><a href="tel:+18123057545">📞 (855) 419-9190</a><a href="mailto:info@smartoutdoorequipment.com">✉ info@smartoutdoorequipment.com</a></div></div>`);
    if(!document.getElementById(`soe-nav-backdrop`)) b.insertAdjacentHTML(`beforeend`, `<div id="soe-nav-backdrop" class="soe-nav-backdrop"></div>`);
  }catch(e){}
})();

/* === boot-fixes-v2h === */
(function(){
  

  function initRotator4(){
    var stage=document.querySelector(`[data-soe=hero-stage]`);
    if(!stage)return;
    var oldSlides=stage.querySelectorAll(`[data-soe=hero-slide]`);
    if(oldSlides.length === 0)return;
    var newSlides=[];
    oldSlides.forEach(function(sl){var c=sl.cloneNode(true);sl.parentNode.replaceChild(c,sl);newSlides.push(c);});
    newSlides.forEach(function(sl,idx){if(idx === 0)sl.setAttribute(`data-soe-state`,`active`);else sl.removeAttribute(`data-soe-state`);});

    /* Visit order: keep DOM order (the nth-child background-image rules depend on it) but rotate in a
       custom sequence so Brinemasters (DOM index 1 — weak photo) shows LAST. Only on the 5-brand
       homepage banner; the 3-slide Energreen #rc-hero falls through to plain sequential. */
    var order=[]; for(var k=0;k<newSlides.length;k++)order.push(k);
    /* Brinemasters retired (2026-06-21): drop its slide from the rotation entirely + hide it. */
    var bm=-1; newSlides.forEach(function(sl,idx){ if(/Brinemasters/i.test(sl.textContent||``))bm=idx; });
    if(bm!==-1){ order=order.filter(function(x){return x!==bm;}); newSlides[bm].style.display=`none`; }

    var i=0, pos=0;
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
      },2100);
      i=n;
    }
    function next(){ pos=(pos+1)%order.length; go(order[pos]); }

    /* Robust driver: ONE interval that always ticks. NO pause-on-hover — that was the "it stops" bug
       (hovering the banner paused it; verified the rotator never stops on its own). The timer is never
       cleared/recreated mid-life, so it can't get stuck. Dwell 9000ms. */
    var DWELL=9000, t=null;
    function tick(){ if(!document.hidden) next(); }
    function start(){ if(t)clearInterval(t); t=setInterval(tick,DWELL); }
    /* Background tabs throttle setInterval; restart a clean timer when the tab becomes visible again. */
    document.addEventListener(`visibilitychange`,function(){ if(!document.hidden)start(); });
    start();
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

  
})();

/* === boot-fixes-v2o === */
(function(){
  // ===== CSS =====
  

  function ready(fn){
    if(document.readyState !== `loading`)fn();
    else document.addEventListener(`DOMContentLoaded`,fn);
  }

  function applyFixes(){
    var tag=document.querySelector(`[data-soe=intro-tagline]`);
    if(tag)tag.textContent=`Work smarter, not harder.`;

    var bhl=document.querySelector(`[data-soe=brands-head-lede]`);
    if(bhl)bhl.textContent=`Five smart equipment lines that work smarter, not harder.`;

    var brand=document.querySelector(`[data-soe=nav-brand]`);
    if(brand){
      brand.addEventListener(`click`,function(e){
        var t=e.target;
        var inA=(t.closest?t.closest(`a`):null);
        if(t.tagName === `A`)return;
        if(inA)return;
        (window.__soeCloseAndGo||function(u){location.href=u;})(`/`);
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
        (window.__soeCloseAndGo||function(u){location.href=u;})(href?href:`/brands`);
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
    setOrigin(`Mulch Mule`,`Ohio, USA`);

    var APOS=String.fromCharCode(39);
    var bannerCopy={};
    bannerCopy[`Mulch Mule`]=`Mulch Smarter. Move Faster.`;
    bannerCopy[`Brinemasters`]=`The Smarter Way To Brine.`;
    bannerCopy[`Energreen`]=`The Safest Seat Is The One You`+APOS+`re Not In.`;
    bannerCopy[`Metec`]=`The Attachment Your Tractor Deserves.`;
    bannerCopy[`HydroSpade`]=`Designed With Your Work In Mind.`;
    bannerCopy[`Hydro-Spade`]=`Designed With Your Work In Mind.`;
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
            [`Energreen`,`/remote-controlled-mowers`],
            [`Metec`,`/coming-soon`]
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

    /* (removed) a SECOND hero rotator lived here (6500ms, only active/idle — no `prev`). It cloned
       the whole hero and ran AFTER initRotator4, orphaning it — so the cross-fade's prev-hold and the
       Ken-Burns zoom never behaved (zoom never completed; the outgoing photo reverse-zoomed). The hero
       is now driven SOLELY by initRotator4 (7000ms, active/prev/idle). DO NOT re-add a hero rotator here. */

    /* /brands page-head lede: "Four professional-grade manufacturers" -> "Five" (HydroSpade makes 5). */
    var phl=document.querySelector(`[data-soe=page-head-lede]`);
    if(phl && phl.textContent.indexOf(`Four professional-grade manufacturers`) === 0){
      phl.textContent=phl.textContent.replace(/^Four /,`Five `);
    }

    /* Homepage intro enrichment (concept 03): drop the eyebrow, shorten the tagline to
       "Work smarter, not harder.", then add a lead paragraph + a "1968" heritage credit +
       an Explore-the-lineup button (scrolls to the lineup). Idempotent; homepage only
       ([data-soe=intro] exists only there). Button reuses the site's btn/primary styling. */
    var introS=document.querySelector(`[data-soe=intro]`);
    if(introS && !introS.querySelector(`[data-soe=intro-lead]`)){
      var iEb=introS.querySelector(`[data-soe=eyebrow]`); if(iEb)iEb.style.display=`none`;
      var iUl=introS.querySelector(`[data-soe=intro-underline]`); if(iUl)iUl.style.display=`none`;
      var iTg=introS.querySelector(`[data-soe=intro-tagline]`); if(iTg)iTg.textContent=`Work smarter, not harder.`;
      var iLead=document.createElement(`div`); iLead.setAttribute(`data-soe`,`intro-lead`);
      iLead.innerHTML=`<p>We help contractors work <strong>safer, faster, and leaner</strong> — so they can do more with less, attract and retain quality crews, and grow their bottom line.</p><p>We represent a carefully curated lineup of contractor-focused equipment designed to solve the real challenges crews face in the field every day. From compact tractor attachments and hydro-excavation equipment to brine makers, material handling, and slope mowers, every line we carry earns its place by helping our customers work smarter — not harder.</p>`;
      var iHer=document.createElement(`div`); iHer.setAttribute(`data-soe`,`intro-heritage`);
      iHer.innerHTML=`<div data-soe="intro-heritage-year">1968</div><div data-soe="intro-heritage-text"><strong>Backed by our parent <a data-soe="intro-heritage-link" href="https://brownequipment.net/" target="_blank" rel="noopener">Brown Equipment Company</a>.</strong> In business since 1968 — trusted by contractors across the Midwest for 58+ years.</div>`;
      var iCtaW=document.createElement(`div`); iCtaW.setAttribute(`data-soe`,`intro-cta-wrap`);
      var iCta=document.createElement(`a`); iCta.setAttribute(`data-soe`,`btn`); iCta.setAttribute(`data-soe-variant`,`primary`); iCta.setAttribute(`data-soe-size`,`lg`); iCta.href=`#`;
      iCta.innerHTML=`Explore the lineup <span data-soe="intro-cta-arr" aria-hidden="true">↓</span>`;
      iCta.addEventListener(`click`,function(e){e.preventDefault();var t=document.querySelector(`[data-soe=brands-section]`);if(t && t.scrollIntoView)t.scrollIntoView({behavior:`smooth`,block:`start`});});
      iCtaW.appendChild(iCta);
      /* W1: lead paragraph + 1968 heritage sit side-by-side in intro-body (fills the width). */
      var iBody=document.createElement(`div`); iBody.setAttribute(`data-soe`,`intro-body`);
      iBody.appendChild(iLead); iBody.appendChild(iHer);
      var iAnchor=iTg||introS.querySelector(`[data-soe=intro-lockup]`);
      if(iAnchor && iAnchor.parentNode){
        iAnchor.parentNode.insertBefore(iBody, iAnchor.nextSibling);
        iBody.parentNode.insertBefore(iCtaW, iBody.nextSibling);
      } else { introS.appendChild(iBody); introS.appendChild(iCtaW); }
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

  /* Run synchronously NOW so text rewrites (Watch Demo->Watch Video, intro-tagline, etc) happen before first paint */
  applyFixes();
})();

/* === boot-fixes-v2t === */
(function(){
  

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

/* === boot-fixes-v2y === */
(function(){
  

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

/* === boot-fixes-v2aa === */
(function(){
  

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

/* === boot-fixes-v2ee === */
(function(){
  

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


/* === boot-fixes-v2hh ===
   Header nav restructure to 5-item dropdown layout + footer rebuild +
   green "View Brand" button on homepage brand cards.
   - Renames "Products" -> "Equipment", drops "Dealer Portal" + "Buy Parts"
   - Adds dropdowns: Equipment (mega 4-col brand x products), Brands, Build & Quote, Become a Dealer, About Us
   - Rebuilds footer columns to mirror new nav, adds "New Application" under Become a Dealer
   - Restyles brand-card-link as a thin green CTA button
*/
(function(){
  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}

  /* ---------- CSS injected at runtime ---------- */
  var css = [
    `[data-soe=brand-card-link]{`,
      `background:#367C2B !important;`,
      `color:#fff !important;`,
      `padding:11px 22px !important;`,
      `font-family:Inter,sans-serif !important;`,
      `font-size:11px !important;`,
      `font-weight:600 !important;`,
      `letter-spacing:.14em !important;`,
      `text-transform:uppercase !important;`,
      `display:inline-flex !important;`,
      `align-items:center !important;`,
      `justify-content:center !important;`,
      `gap:0 !important;`,
      `transition:background .15s !important;`,
      `line-height:1 !important;`,
    `}`,
    `[data-soe=brand-card-h]:hover [data-soe=brand-card-link]{background:#2A5F22 !important;}`,
    `[data-soe=brand-card-link] [data-soe=arr]{display:none !important;}`,
    `@media (max-width:720px){`,
      `[data-soe=brand-card-link]{width:100%;padding:13px 22px !important;}`,
    `}`,

    /* Mega-menu (Equipment) - 5 brand columns */
    `[data-soe=nav-dropdown][data-soe-menu=mega]{`,
      `min-width:960px;`,
      `flex-direction:row !important;`,
      `gap:20px;`,
      `padding:28px 32px 24px;`,
    `}`,
    `[data-soe=nav-dropdown][data-soe-menu=mega] [data-soe=nav-mega-col]{`,
      `display:flex;flex-direction:column;flex:1;min-width:140px;`,
    `}`,
    `[data-soe=nav-mega-col-h]{`,
      `color:#7DB13C;`,
      `font-family:"Inter Tight","Inter",sans-serif;`,
      `font-size:11px;`,
      `letter-spacing:.18em;`,
      `text-transform:uppercase;`,
      `font-weight:700;`,
      `padding:0 0 12px;`,
      `margin-bottom:8px;`,
      `border-bottom:1px solid rgba(255,255,255,.14);`,
      `display:block;`,
      `text-decoration:none;`,
    `}`,
    `[data-soe=nav-mega-col-h]:hover{color:#fff;}`,
    /* Unified dropdown-item style: same font/weight/color across simple AND mega dropdowns */
    `[data-soe=nav-dropdown] [data-soe=nav-dropdown-item]{`,
      `font-family:Inter,sans-serif !important;`,
      `font-size:13px !important;`,
      `font-weight:400 !important;`,
      `color:#D4D8D2 !important;`,
      `padding:8px 18px !important;`,
      `border-bottom:0 !important;`,
      `letter-spacing:0 !important;`,
      `text-transform:none !important;`,
      `line-height:1.45 !important;`,
    `}`,
    `[data-soe=nav-dropdown] [data-soe=nav-dropdown-item]:hover{`,
      `background:rgba(255,255,255,.04) !important;`,
      `color:#7DB13C !important;`,
    `}`,
    /* Mega items: column-aligned (no horizontal padding) */
    `[data-soe=nav-dropdown] [data-soe=nav-dropdown-item][data-soe-kind=mega]{`,
      `padding:7px 0 !important;`,
    `}`,
    `[data-soe=nav-dropdown] [data-soe=nav-dropdown-item][data-soe-kind=mega]:hover{`,
      `background:transparent !important;`,
    `}`,
    /* Simple dropdown frame: a little internal vertical padding */
    `[data-soe=nav-dropdown]:not([data-soe-menu=mega]){padding:10px 0;}`,
    /* Right-edge alignment fallback for wide menus */
    `[data-soe=nav-dropdown][data-soe-align=right]{left:auto !important;right:0 !important;}`,
    `[data-soe=nav-dropdown]{min-width:220px;}`,

    /* Drawer parity for mobile - new menu structure */
    `[data-soe=nav-drawer] [data-soe=drawer-sub]{padding-left:18px;display:flex;flex-direction:column;gap:0;border-top:1px solid rgba(255,255,255,.06);}`,
    `[data-soe=nav-drawer] [data-soe=drawer-sub] a{padding:12px 0 !important;font-size:12px !important;letter-spacing:.10em !important;color:#A5ADA4 !important;text-transform:none !important;font-weight:500 !important;border-bottom:0 !important;}`,
    `[data-soe=nav-drawer] [data-soe=drawer-sub] a:hover{color:#7DB13C !important;}`
  ].join(``);

  var styleEl = document.createElement(`style`);
  styleEl.setAttribute(`data-soe-design`, `v2hh-nav-footer-button`);
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  /* ---------- Menu data ---------- */
  /* Equipment mega-menu organised by EQUIPMENT TYPE (what customers search for), not by brand. */
  var equipMenu = [
    {brand:`Landscape Material Handler`, href:`/mulch-mule`, items:[
      [`Mulch Mule`,`/mulch-mule`]
    ]},
    {brand:`R-C Mowers`, href:`/remote-controlled-mowers`, items:[
      [`RoboECO`,`/roboeco`]
    ]},
    {brand:`R-C Skid Steers`, href:`/remote-controlled-mowers`, items:[
      [`RoboCOMPACT`,`/robocompact`],
      [`RoboEVO`,`/roboevo`],
      [`RoboMIDI`,`/robomidi`]
    ]},
    {brand:`Equipment Attachments & Implements`, href:`/coming-soon`, items:[
      [`Snow Blowers`,`/coming-soon`],
      [`Angle Plows`,`/coming-soon`],
      [`V-Plows`,`/coming-soon`],
      [`Sweepers`,`/coming-soon`],
      [`Spreaders`,`/coming-soon`]
    ]},
    {brand:`Hydroexcavation`, href:`/hydrospade`, items:[
      [`Non CDL Hydro Vac Truck`,`/hydrospade-trucks`],
      [`Hydro-Vac Trailer`,`/hydrospade-trailers`]
    ]},
    {brand:`Brine Makers`, href:`/coming-soon`, items:[]}
  ];

  var simpleMenus = {};
  simpleMenus[`Brands`] = [
    [`Mulch Mule`,`/mulch-mule`],
    [`Energreen`,`/remote-controlled-mowers`],
    [`Metec`,`/coming-soon`],
    [`HydroSpade`,`/hydrospade`],
    [`View All Brands`,`/brands`]
  ];
  simpleMenus[`Build & Quote`] = [
    [`Equipment Attachments & Implements`,`/coming-soon`],
    [`HydroSpade Trucks`,`/coming-soon`],
    [`HydroSpade Trailers`,`/coming-soon`]
  ];
  simpleMenus[`Become a Dealer`] = [
    [`Mulch Mule`,`/coming-soon`],
    [`Metec`,`/coming-soon`],
    [`HydroSpade`,`/coming-soon`]
  ];
  simpleMenus[`Other`] = [
    [`Our Story`,`/coming-soon`],
    [`Equipment Consultants`,`/coming-soon`],
    [`Service Network`,`/coming-soon`],
    [`Find a Dealer`,`/coming-soon`],
    [`Contact`,`mailto:info@smartoutdoorequipment.com`],
    [`New Customer Setup`,`/new-customer-setup`]
  ];

  /* ---------- Header nav restructure ---------- */
  function rebuildNav(){
    var navLinks = document.querySelectorAll(`[data-soe=nav-link]`);
    if (navLinks.length === 0) return;

    /* Pass 1: hide unwanted, rename Products->Equipment (preserve caret/child nodes) */
    Array.prototype.forEach.call(navLinks, function(a){
      var t = (a.textContent || ``).trim();
      if (t === `Dealer Portal` || t === `Buy Parts` || t === `Operator Manuals`){
        var w = a.parentNode && a.parentNode.matches && a.parentNode.matches(`[data-soe=nav-link-wrap]`)
          ? a.parentNode : a;
        w.style.display = `none`;
      }
      var renames = {"Products":"Equipment", "About Us":"Other"};
      if (renames[t]){
        /* Replace text node only so we don't strip the inner [data-soe=nav-caret] span */
        for (var i = 0; i < a.childNodes.length; i++){
          var cn = a.childNodes[i];
          if (cn.nodeType === 3 && (cn.nodeValue || ``).trim() === t){
            cn.nodeValue = renames[t];
          }
        }
      }
    });

    /* Pass 2: ensure each visible item is wrapped + has the right dropdown */
    var nameToTarget = {
      "Equipment": "mega",
      "Brands": "simple",
      "Build & Quote": "simple",
      "Become a Dealer": "simple",
      "Other": "simple"
    };

    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=nav-link]`), function(a){
      var t = (a.textContent || ``).trim();
      if (!nameToTarget[t]) return;

      var parent = a.parentNode;
      if (!parent) return;

      var wrap;
      if (parent.matches && parent.matches(`[data-soe=nav-link-wrap]`)){
        wrap = parent;
        var oldDd = wrap.querySelector(`[data-soe=nav-dropdown]`);
        if (oldDd) oldDd.parentNode.removeChild(oldDd);
      } else {
        wrap = document.createElement(`span`);
        wrap.setAttribute(`data-soe`, `nav-link-wrap`);
        parent.insertBefore(wrap, a);
        wrap.appendChild(a);
      }

      /* Ensure caret exists on items that have a dropdown */
      if (!a.querySelector(`[data-soe=nav-caret]`)){
        var caret = document.createElement(`span`);
        caret.setAttribute(`data-soe`, `nav-caret`);
        a.appendChild(caret);
      }

      var dd = document.createElement(`div`);
      dd.setAttribute(`data-soe`, `nav-dropdown`);

      if (t === `Equipment`){
        dd.setAttribute(`data-soe-menu`, `mega`);
        equipMenu.forEach(function(col){
          var c = document.createElement(`div`);
          c.setAttribute(`data-soe`, `nav-mega-col`);
          var h = document.createElement(`a`);
          h.setAttribute(`data-soe`, `nav-mega-col-h`);
          h.href = col.href;
          h.textContent = col.brand;
          c.appendChild(h);
          col.items.forEach(function(it){
            var aa = document.createElement(`a`);
            aa.setAttribute(`data-soe`, `nav-dropdown-item`);
            aa.setAttribute(`data-soe-kind`, `mega`);
            aa.href = it[1];
            aa.textContent = it[0];
            c.appendChild(aa);
          });
          dd.appendChild(c);
        });
      } else {
        var menu = simpleMenus[t];
        if (menu){
          menu.forEach(function(it){
            var aa = document.createElement(`a`);
            aa.setAttribute(`data-soe`, `nav-dropdown-item`);
            aa.href = it[1];
            aa.textContent = it[0];
            dd.appendChild(aa);
          });
        }
      }
      wrap.appendChild(dd);

      /* Right-align mega menu if it would overflow viewport */
      if (t === `Equipment`){
        setTimeout(function(){
          try {
            var rect = wrap.getBoundingClientRect();
            var vw = window.innerWidth || document.documentElement.clientWidth;
            if (rect.left + 780 > vw - 24){
              dd.setAttribute(`data-soe-align`, `right`);
            }
          } catch(e){}
        }, 50);
      }
    });
  }

  /* ---------- Footer restructure ---------- */
  function rebuildFooter(){
    var footer = document.querySelector(`[data-soe=footer]`);
    if (!footer) return;
    var top = footer.querySelector(`[data-soe=footer-top]`);
    if (!top) return;

    var newCols = [
      {head:`Equipment`, items:[
        [`Mulch Mule`,`/mulch-mule`],
        [`Energreen`,`/remote-controlled-mowers`],
        [`Metec`,`/coming-soon`],
        [`HydroSpade`,`/hydrospade`],
        [`View All Brands`,`/brands`]
      ]},
      {head:`Build & Quote`, items:[
        [`Equipment Attachments & Implements`,`/coming-soon`],
        [`HydroSpade Trucks`,`/coming-soon`],
        [`HydroSpade Trailers`,`/coming-soon`]
      ]},
      {head:`Become a Dealer`, items:[
        [`Mulch Mule`,`/coming-soon`],
        [`Metec`,`/coming-soon`],
        [`HydroSpade`,`/coming-soon`]
      ]},
      {head:`Other`, items:[
        [`Our Story`,`/coming-soon`],
        [`Equipment Consultants`,`/coming-soon`],
        [`Service Network`,`/coming-soon`],
        [`Find a Dealer`,`/coming-soon`],
        [`Contact`,`mailto:info@smartoutdoorequipment.com`],
        [`New Customer Setup`,`/new-customer-setup`]
      ]}
    ];

    /* Hide all existing non-brand footer-cols */
    Array.prototype.forEach.call(top.querySelectorAll(`[data-soe=footer-col]`), function(c){
      c.style.display = `none`;
      c.setAttribute(`data-soe-replaced`, `1`);
    });

    /* Insert new cols at the end of footer-top */
    newCols.forEach(function(spec, idx){
      var col = document.createElement(`div`);
      col.setAttribute(`data-soe`, `footer-col`);
      col.setAttribute(`data-soe-pos`, String(idx + 2));
      col.setAttribute(`data-soe-built`, `v2hh`);
      var h = document.createElement(`div`);
      h.setAttribute(`data-soe`, `footer-col-h`);
      h.textContent = spec.head;
      col.appendChild(h);
      var ul = document.createElement(`ul`);
      spec.items.forEach(function(it){
        var li = document.createElement(`li`);
        var a = document.createElement(`a`);
        a.href = it[1];
        a.textContent = it[0];
        li.appendChild(a);
        ul.appendChild(li);
      });
      col.appendChild(ul);
      top.appendChild(col);
    });

    /* 5-col grid: brand info + 4 link columns */
    top.style.gridTemplateColumns = `1.4fr 1fr .9fr 1fr 1.1fr`;

    /* Wire up footer-bot Privacy / Terms / Sitemap to their dedicated pages */
    var legalMap = {"Sitemap":"/sitemap"};
    var legalHide = {"Privacy":1, "Terms":1};
    Array.prototype.forEach.call(footer.querySelectorAll(`[data-soe=footer-legal] a`), function(a){
      var t = (a.textContent || ``).trim();
      if (legalHide[t]){ a.style.display = `none`; return; }
      if (legalMap[t]) a.href = legalMap[t];
    });

    /* Wire footer social icons (f / in / yt / ig). LinkedIn is now live. */
    var socialMap = {
      "f":"https://www.facebook.com/profile.php?id=61591186047309",
      "in":"https://www.linkedin.com/company/smart-outdoor-equipment",
      "yt":"https://www.youtube.com/@SmartOutdoorEquipment",
      "ig":"https://www.instagram.com/smartoutdoorequipment/"
    };
    var socialWrap = footer.querySelector(`[data-soe=footer-social]`);
    Array.prototype.forEach.call(footer.querySelectorAll(`[data-soe=footer-social] a`), function(a){
      var t = (a.textContent || ``).trim().toLowerCase();
      if (socialMap[t]){ a.href = socialMap[t]; a.target = `_blank`; a.rel = `noopener`; }
    });
    if (socialWrap && !socialWrap.querySelector(`[data-soe-social=tt]`)){
      var tt = document.createElement(`a`);
      tt.setAttribute(`data-soe-social`,`tt`);
      tt.href = `https://www.tiktok.com/@smartoutdoorequipment`;
      tt.target = `_blank`; tt.rel = `noopener`; tt.textContent = `tt`;
      socialWrap.appendChild(tt);
    }
  }

  /* ---------- Mobile drawer parity ---------- */
  function rebuildDrawer(){
    var drawer = document.querySelector(`[data-soe=nav-drawer]`);
    if (!drawer) return;
    var ul = drawer.querySelector(`ul`);
    if (!ul) return;

    /* Remove old links so we have a clean slate */
    Array.prototype.forEach.call(ul.querySelectorAll(`li`), function(li){
      var a = li.querySelector(`a`);
      var t = a ? (a.textContent || ``).trim() : ``;
      if (t === `Dealer Portal` || t === `Buy Parts` || t === `Operator Manuals` || t === `Brands`){
        li.style.display = `none`; /* Brands hidden in drawer: Equipment now lists the brands (avoids a duplicate brand list) */
      }
      if (t === `Products`){
        a.textContent = `Equipment`;
      }
      if (t === `About Us`){
        a.textContent = `Other`;
      }
    });

    /* Append sub-menu under matching top items if they have a dropdown */
    var topItems = {
      "Equipment": simpleMenus["Brands"],
      "Brands": simpleMenus["Brands"],
      "Build & Quote": simpleMenus["Build & Quote"],
      "Become a Dealer": simpleMenus["Become a Dealer"],
      "Other": simpleMenus["Other"]
    };

    Array.prototype.forEach.call(ul.querySelectorAll(`li`), function(li){
      var a = li.querySelector(`a`);
      if (!a) return;
      var t = (a.textContent || ``).trim();
      if (!topItems[t]) return;
      if (li.querySelector(`[data-soe=drawer-sub]`)) return;
      var sub = document.createElement(`div`);
      sub.setAttribute(`data-soe`, `drawer-sub`);
      topItems[t].forEach(function(it){
        var s = document.createElement(`a`);
        s.href = it[1];
        s.textContent = it[0];
        sub.appendChild(s);
      });
      li.appendChild(sub);
    });

    /* The drawer's section-title links + contact text render invisible on the live page
       (their base color rules have no !important and lose to a stylesheet override; the
       sub-items show because they use !important). Force them visible with INLINE
       !important, which beats any stylesheet. Titles white, contact text grey. */
    Array.prototype.forEach.call(ul.querySelectorAll(`li > a`), function(a){ a.style.setProperty(`color`, `#ffffff`, `important`); });
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=drawer-contact] a`), function(a){ a.style.setProperty(`color`, `#a5ada4`, `important`); });
  }

  /* ---------- Brand card link text normalization ---------- */
  function normalizeBrandCardLinks(){
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=brand-card-link]`), function(span){
      /* Replace "View brand" with "View Brand" for consistency, drop arrow */
      var arr = span.querySelector(`[data-soe=arr]`);
      if (arr) arr.style.display = `none`;
      /* Strip arrow text content if it's text not element */
      var txt = (span.textContent || ``).replace(/[\s ]+$/,``);
      if (/^view brand$/i.test(txt)){
        span.textContent = `View Brand`;
      }
    });
  }

  /* ---------- Contact phone update: (812) 305-7545 -> (855) 419-9190 (site-wide chrome is page-level, not a symbol, so fix at runtime) ---------- */
  function fixPhone(){
    var OLD_TEL=`tel:+18123057545`, NEW_TEL=`tel:+18554199190`;
    var OLD_DISP=`(812) 305-7545`, NEW_DISP=`(855) 419-9190`;
    Array.prototype.forEach.call(document.querySelectorAll(`a[href="`+OLD_TEL+`"]`),function(a){ a.setAttribute(`href`,NEW_TEL); });
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),nodes=[],n;
    while((n=w.nextNode())){ if(n.nodeValue && n.nodeValue.indexOf(OLD_DISP)!==-1) nodes.push(n); }
    nodes.forEach(function(t){ t.nodeValue=t.nodeValue.split(OLD_DISP).join(NEW_DISP); });
  }

  /* ---------- Request-quote: add HydroSpade to the Equipment Brand select (options aren't editable via the Designer API) ---------- */
  function addQuoteOption(){
    Array.prototype.forEach.call(document.querySelectorAll(`select`),function(sel){
      if(!Array.prototype.some.call(sel.options,function(o){return o.value===`mulch-mule`;})) return;
      if(Array.prototype.some.call(sel.options,function(o){return o.value===`hydrospade`;})) return;
      var opt=document.createElement(`option`); opt.value=`hydrospade`; opt.textContent=`Hydro-Spade`;
      var other=Array.prototype.filter.call(sel.options,function(o){return o.value===`other`;})[0];
      if(other) sel.insertBefore(opt,other); else sel.appendChild(opt);
    });
  }

  /* ---------- Breadcrumbs: rebuild to the real site trail (Home / Our Brands / Brand) ---------- */
  function rebuildCrumbs(){
    var box=document.querySelector(`[data-soe=crumbs]`);
    if(!box)return;
    var p=(location.pathname.replace(/\/+$/,``)||`/`).toLowerCase();
    var units={"/robocompact":"RoboCOMPACT","/roboeco":"RoboECO","/roboevo":"RoboEVO","/robofifti":"RoboFIFTI","/robomidi":"RoboMIDI","/robomax":"RoboMAX","/roboplus":"RoboPLUS"};
    var trail;
    if(p===`/mulch-mule`)trail=[[`Home`,`/`],[`Our Brands`,`/brands`],[`Mulch Mule`,null]];
    else if(p===`/remote-controlled-mowers`)trail=[[`Home`,`/`],[`Our Brands`,`/brands`],[`Energreen`,null]];
    else if(units[p])trail=[[`Home`,`/`],[`Our Brands`,`/brands`],[`Energreen`,`/remote-controlled-mowers`],[units[p],null]];
    else if(p===`/hydrospade`)trail=[[`Home`,`/`],[`Our Brands`,`/brands`],[`HydroSpade`,null]];
    else if(p===`/hydrospade-trucks`)trail=[[`Home`,`/`],[`Our Brands`,`/brands`],[`HydroSpade`,`/hydrospade`],[`Trucks`,null]];
    else if(p===`/hydrospade-trailers`)trail=[[`Home`,`/`],[`Our Brands`,`/brands`],[`HydroSpade`,`/hydrospade`],[`Trailers`,null]];
    else if(p===`/brands`)trail=[[`Home`,`/`],[`Our Brands`,null]];
    else if(p===`/new-customer-setup`)trail=[[`Home`,`/`],[`New Customer Setup`,null]];
    else return;
    box.innerHTML=``;
    trail.forEach(function(it,idx){
      if(idx>0){var s=document.createElement(`span`);s.setAttribute(`data-soe`,`crumbs-sep`);s.textContent=`/`;box.appendChild(s);}
      var el;
      if(it[1]){el=document.createElement(`a`);el.href=it[1];}
      else{el=document.createElement(`span`);el.setAttribute(`data-soe`,`crumbs-current`);}
      el.textContent=it[0];
      box.appendChild(el);
    });
  }

  function runAll(){
    try { rebuildNav(); } catch(e){}
    try { rebuildFooter(); } catch(e){}
    try { rebuildDrawer(); } catch(e){}
    try { normalizeBrandCardLinks(); } catch(e){}
    try { fixPhone(); } catch(e){}
    try { addQuoteOption(); } catch(e){}
    try { rebuildCrumbs(); } catch(e){}
    /* Reveal the nav once it's been rebuilt — boot-head.css holds it at opacity:0 until this attribute lands */
    try {
      var nl = document.querySelector(`[data-soe=nav-links]`);
      if (nl) nl.setAttribute(`data-soe-init`, `ready`);
    } catch(e){}
  }

  /* Run as early as possible — script tag sits at end of body, so the nav DOM is already parsed */
  if (document.readyState === `loading`){
    document.addEventListener(`DOMContentLoaded`, runAll);
  } else {
    runAll();
  }
})();

/* === boot-fixes-v2ii ===
   2026-05-31 content batch:
   - Site-wide: drop "municipalities" from audience copy -> "professionals and contractors".
   - Homepage Energreen hero slide: swap the "Energreen" text tag for the Energreen logo (like the Mulch Mule slide).
   - Energreen page (/remote-controlled-mowers): rc-units head becomes "The Energreen Difference" + a brand
     paragraph (this also removes the "— THE LINEUP" eyebrow). The 7 unit cards stay below.
   - /brands: declutter each card — hide the green eyebrows/numbers (via [data-soe-page=brands] CSS),
     strip the "· distributor since 20XX" tail after "Made in X", drop the Category/Lineup/Lead time/Service
     spec list, replace the lede, and inject a per-brand "why" block (head + intro + bullet benefits).
*/
(function(){
  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}
  var path=(location.pathname.replace(/\/+$/,``)||`/`);

  function setPageAttr(){
    var p=`other`;
    if(path===`/`)p=`home`;
    else if(path===`/brands`)p=`brands`;
    else if(path===`/mulch-mule`)p=`mulch-mule`;
    else if(path===`/remote-controlled-mowers`)p=`energreen`;
    else if(path===`/hydrospade`||path===`/hydrospade-trucks`||path===`/hydrospade-trailers`)p=`hydrospade`;
    else if(path===`/new-customer-setup`)p=`newcustomer`;
    document.documentElement.setAttribute(`data-soe-page`,p);
  }

  /* Audience copy: the company serves "professionals and contractors", not municipalities.
     Walk every text node so this catches the footer tagline, the RoboECO unit-page description,
     the Brinemasters brand description — anywhere "municipalities" appears, site-wide. */
  function swapMunicipalities(){
    var pairs=[
      [`the contractors, municipalities, and operators`,`professionals and contractors`],
      [`professionals, contractors, and municipalities`,`professionals and contractors`],
      [`for municipalities, airports, and contractors`,`for professionals and contractors`]
    ];
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,hits=[];
    while((n=w.nextNode())){ if(n.nodeValue && n.nodeValue.indexOf(`municipalit`)!==-1)hits.push(n); }
    hits.forEach(function(t){ var v=t.nodeValue; pairs.forEach(function(p){ v=v.split(p[0]).join(p[1]); }); t.nodeValue=v; });
  }

  /* Homepage: the brand slides show plain text tags (Brinemasters/Energreen/Metec/HydroSpade) — swap each
     for its white logo, like Mulch Mule's baked-in logo. (Re-run after the rotator clones the slides.) */
  function tagHomeBrandLogos(){
    if(path!==`/`)return;
    var map={"Energreen":"eg-hero-logo-bg-sm","Brinemasters":"bm-hero-logo-bg-sm","Metec":"mt-hero-logo-bg-sm","HydroSpade":"hs-hero-logo-bg-sm"};
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=hero-stage] [data-soe=hero-brand-tag]`),function(tag){
      var _t=(tag.textContent||``).trim(); var cls=map[_t]||map[_t.replace(/-/g,``)];
      if(cls && !tag.classList.contains(cls)){ tag.classList.add(cls); tag.textContent=``; }
    });
  }

  /* Energreen page: "Seven remote-controlled units." -> a Mulch-Mule-style difference head + brand paragraph. */
  function fixEnergreenPage(){
    if(path!==`/remote-controlled-mowers`)return;
    var rcUnits=document.querySelector(`[data-soe=rc-units]`);
    var h2=document.querySelector(`[data-soe=rc-units-h2]`);
    var lede=document.querySelector(`[data-soe=rc-units-lede]`);
    /* (1) Inject a centered Energreen Difference section above the lineup (mirrors HydroSpade/Mulch Mule). */
    if(rcUnits && rcUnits.parentNode && !document.querySelector(`[data-soe=difference][data-soe-built=eg]`)){
      var sec=document.createElement(`section`); sec.setAttribute(`data-soe`,`difference`); sec.setAttribute(`data-soe-built`,`eg`);
      var head=document.createElement(`div`); head.setAttribute(`data-soe`,`difference-head`); head.setAttribute(`data-soe-state`,`in-view`);
      var dh=document.createElement(`h2`); dh.setAttribute(`data-soe`,`difference-head-h2`); dh.textContent=`The Energreen Difference`;
      var dp=document.createElement(`p`); dp.setAttribute(`data-soe`,`difference-head-lede`); dp.textContent=`Robos are designed to prioritize well-being, simplify operation, and deliver versatile solutions for demanding applications. Radio-controlled mowers and skid steers keep your operator on flat ground while the machine works slopes up to 61° — zero rollover exposure, and clear of poison ivy, snakes, and other hazards. Quick-change attachments turn a Robo into a mulcher, mower, stump grinder, ditch cleaner, blower, or forestry head — so your carrier keeps you earning all year long.`;
      head.appendChild(dh); head.appendChild(dp); sec.appendChild(head);
      rcUnits.parentNode.insertBefore(sec, rcUnits);
    }
    /* (2) rc-units head -> Choose your equipment + the Robo browse copy (mirrors the HydroSpade lineup). */
    if(h2)h2.textContent=`Choose your equipment.`;
    if(lede)lede.textContent=`Robo is Energreen’s evolving range of remote-controlled mowers and skid steers designed to offer different solutions, meet different needs, and consequently increase productivity. Browse below to see the specifications behind each remote-controlled mower and skid steer, such as how they promote operator safety through their design and handling as well as their versatility for many job sites and applications.`;
  }

  /* /brands: declutter cards + inject the per-brand "why" block. */
  function fixBrandsPage(){
    if(path!==`/brands`)return;
    var lede=document.querySelector(`[data-soe=page-head-lede]`);
    if(lede)lede.textContent=`We represent a carefully curated lineup of contractor-focused equipment designed to solve the real challenges crews face in the field every day. Every line we carry earns its place by helping our customers work smarter — not harder.`;

    var whyData={
      "Mulch Mule":{head:`Mulch Smarter. Move Faster.`,intro:`Here's why the Mulch Mule slashes labor hours, lifts productivity, and keeps your team happier.`,items:[
        `15-cubic-yard aluminum hopper with a 5-ton payload capacity — superior durability without sacrificing hauling capacity.`,
        `Rear discharge with game-changing reversible floor to both onload and offload materials in a controlled fashion.`,
        `Curbside chute fills a wheelbarrow in 3–6 seconds — the heart of why this equipment pays back so fast, typically in 1–3 years depending on your material volume.`]},
      "Brinemasters":{head:`The Smarter Way to Brine.`,intro:`Here's why Brinemasters is the most precise, user-friendly, and cost-effective brine maker on the market.`,items:[
        `Most reliable, most accurate density-measurement sensor (patent protected), with fully automated self-calibration that eliminates manual work and errors — backed by an industry-leading 5-year warranty.`,
        `External spray dissolution system for maximum salt conversion.`,
        `Simple control system that's very easy to operate.`]},
      "Energreen":{head:`The Safest Seat Is the One You're Not In.`,intro:`Here's why Robos are designed to prioritize well-being, simplify operation, and deliver versatile solutions for demanding applications.`,items:[
        `Radio-controlled mowers and skid steers keep your operator on flat ground while the machine works slopes up to 61° — zero rollover exposure, and clear of poison ivy, snakes, and other hazards.`,
        `Quick-change attachments turn a Robo into a mulcher, mower, stump grinder, ditch cleaner, blower, or forestry head — so your carrier keeps you earning all year long.`]},
      "Metec":{head:`The Attachment Your Tractor Deserves.`,intro:`Here's why Metec attachments are expertly engineered for universal tractor compatibility with second-to-none quality.`,items:[
        `Engineered and built in-house: design, prototyping, CNC machining, turning and milling, plasma cutting, forming, welding, finishing, assembly, and testing — all under one roof increasing quality and speed to meet your needs.`,
        `Broad compatibility: custom fabrication and forming build mounts to standard hitch interfaces, with one-off builds for non-standard machines.`,
        `Durability: professional welding and specialized coatings protect against wear, corrosion, and weather for a longer service life.`]},
      "HydroSpade":{head:`Simply Built. Simply Better.`,intro:`Here's why the Hydro-Spade line is designed with your work in mind.`,items:[
        `The Non-CDL truck is sized for residential potholing, utility daylighting, and tight-radius work where a full-size vac truck cannot maneuver and a unit mounted on a Class 5/6 non-CDL chassis which expands your operator pool to anyone with a standard license resulting in reduced scheduling constraints and increased fleet utilization.`,
        `Easy operations including a 6-way articulating boom and simple hydraulic controls to keep training short and diagnostics straightforward, with no computer modules between the operator and the work.`,
        `The trailer tows behind a 3/4-ton or 1-ton pickup and fits residential streets, easements, and tight job sites where a full vac truck cannot stage.`,
        `Quick and easy cleanup using water-pressure wand with convenient rear access door, 6" drain valve, and blower filtration.`]}
    };

    /* "See It In Action" feature thumbnail per brand box (Concept 2). One representative video per brand;
       brands without a video yet get a navy "coming soon" placeholder. Click reuses the v2jj lightbox. */
    var brandVideo={ "Mulch Mule":`X8TkDU5Vllo`, "Energreen":`yHaA7LCPtWY` };
    /* Per-brand logo (replaces the text name) + brand color (themes the "See It In Action" header + play
       button per the owner's "match the brand color" note). Logos are trimmed-to-content + hosted in
       soe-cdn; bg-image relative URLs resolve against boot-head.css. Colors = each brand's own accent:
       Hydro-Spade navy + Metec/Brinemasters sampled from their logos; ENERGREEN = #F5A524 (the gold
       "Request Info"/"Contact Us" button color on its brand page /remote-controlled-mowers = --safety-amber;
       owner: match those buttons — NOT the /brands green). Mulch Mule unspecified -> var(--jd-green) fallback. */
    var brandKey={ "Hydro-Spade":`hydrospade`, "HydroSpade":`hydrospade`, "Energreen":`energreen`, "Metec":`metec`, "Brinemasters":`brinemasters`, "Mulch Mule":`mulchmule` };
    var brandColor={ hydrospade:`#003473`, energreen:`#F5A524`, metec:`#0A5737`, brinemasters:`#3B7DAC` };

    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=brand-card]`),function(card){
      var h3=card.querySelector(`[data-soe=brand-card-h3]`);
      var name=h3?h3.textContent.trim():``;
      var origin=card.querySelector(`[data-soe=brand-card-origin-line]`);
      if(origin){var b=origin.querySelector(`b`); if(b)origin.innerHTML=`Made in `+b.outerHTML;}

      /* Brand color (themes the SIA block) + logo (swap the text name for the brand logo). */
      var bkey=brandKey[name]||brandKey[name.replace(/-/g,``)]||``;
      if(brandColor[bkey]) card.style.setProperty(`--brand`, brandColor[bkey]);
      if(bkey && h3 && !h3.querySelector(`[data-soe=brand-card-logo]`)){
        var sr=document.createElement(`span`); sr.textContent=name;
        sr.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;`;
        var logo=document.createElement(`span`); logo.setAttribute(`data-soe`,`brand-card-logo`); logo.setAttribute(`data-brand`,bkey); logo.setAttribute(`role`,`img`); logo.setAttribute(`aria-label`,name);
        h3.textContent=``; h3.appendChild(sr); h3.appendChild(logo);
      }
      var specs=card.querySelector(`[data-soe=brand-card-specs]`);
      if(specs && specs.parentNode)specs.parentNode.removeChild(specs);
      var data=whyData[name]||whyData[name.replace(/-/g,``)];
      if(data && !card.querySelector(`.brand-why`)){
        var why=document.createElement(`div`); why.className=`brand-why`; why.setAttribute(`data-soe`,`brand-why`);
        var hd=document.createElement(`div`); hd.className=`brand-why-head`; hd.textContent=data.head; why.appendChild(hd);
        var intro=document.createElement(`p`); intro.className=`brand-why-intro`; intro.textContent=data.intro; why.appendChild(intro);
        var ul=document.createElement(`ul`); ul.className=`brand-why-list`;
        data.items.forEach(function(it){var li=document.createElement(`li`); li.textContent=it; ul.appendChild(li);});
        why.appendChild(ul);
        var anchor=origin||card.querySelector(`[data-soe=brand-card-desc-l]`);
        if(anchor && anchor.parentNode)anchor.parentNode.insertBefore(why,anchor.nextSibling);
        else (card.querySelector(`[data-soe=brand-card-info-top]`)||card).appendChild(why);
      }
      /* Drop the original one-line description that sat under "Made in X" (user: remove it). */
      var desc=card.querySelector(`[data-soe=brand-card-desc-l]`);
      if(desc && desc.parentNode)desc.parentNode.removeChild(desc);

      /* "See It In Action" header + feature thumbnail(s). Most brands get one slot (a video, or a
         "coming soon" placeholder). Hydro-Spade gets TWO coming-soon holders — Truck + Trailer — a
         reminder slot for the two feature videos the owner will supply (one per platform). */
      if(!card.querySelector(`[data-soe=brand-sia]`)){
        var vid=brandVideo[name]||brandVideo[name.replace(/-/g,``)];
        var sia=document.createElement(`div`); sia.setAttribute(`data-soe`,`brand-sia`);
        var sh=document.createElement(`div`); sh.setAttribute(`data-soe`,`brand-sia-head`); sh.textContent=`See It In Action`; sia.appendChild(sh);
        var slots;
        if(bkey===`hydrospade`) slots=[{soon:1,cap:`Truck`},{soon:1,cap:`Trailer`}];
        else if(vid) slots=[{vid:vid}];
        else slots=[{soon:1}];
        var grid=document.createElement(`div`); grid.setAttribute(`data-soe`,`brand-sia-grid`);
        if(slots.length>1)grid.setAttribute(`data-soe-multi`,`1`);
        slots.forEach(function(s){
          var thumb;
          if(s.vid){
            thumb=document.createElement(`a`); thumb.setAttribute(`data-soe`,`brand-sia-thumb`); thumb.setAttribute(`data-soe-video`,s.vid); thumb.href=`#`;
            thumb.style.backgroundImage=`url(https://i.ytimg.com/vi/`+s.vid+`/maxresdefault.jpg)`;
            var p1=document.createElement(`span`); p1.setAttribute(`data-soe`,`brand-sia-play`); thumb.appendChild(p1);
          }else{
            thumb=document.createElement(`div`); thumb.setAttribute(`data-soe`,`brand-sia-thumb`); thumb.setAttribute(`data-soe-soon`,`1`);
            var p2=document.createElement(`span`); p2.setAttribute(`data-soe`,`brand-sia-play`); thumb.appendChild(p2);
            var sn=document.createElement(`span`); sn.setAttribute(`data-soe`,`brand-sia-soon`); sn.textContent=s.cap?(s.cap+` — Video coming soon`):`Video coming soon`; thumb.appendChild(sn);
          }
          grid.appendChild(thumb);
        });
        sia.appendChild(grid);
        (card.querySelector(`[data-soe=brand-card-info-top]`)||card).appendChild(sia);
      }
    });
  }

  /* Homepage lineup grid (the 5 [data-soe=brand-card-h] boxes): swap the text name for the brand logo and
     turn the card's own photo into the video surface — a darkening scrim + a bold white "WATCH VIDEO"
     corner label, with the whole photo clickable. Brands without a video are left as plain photos. Energreen
     uses the SAME clip as its brand-page Watch Video button (yHaA7LCPtWY) so all three Energreen "Watch
     Video" spots match; Mulch Mule uses the Todd Pugh intro (X8TkDU5Vllo). Each card is an <a>, so the photo
     carries a NON-anchor [data-soe-video] — the v2jj capture handler preventDefaults + stops the card nav. */
  function fixHomeBrandBoxes(){
    if(path!==`/`)return;
    var brandVideo={ "Mulch Mule":`X8TkDU5Vllo`, "Energreen":`yHaA7LCPtWY` };
    var brandKey={ "Hydro-Spade":`hydrospade`,"HydroSpade":`hydrospade`,"Energreen":`energreen`,"Metec":`metec`,"Brinemasters":`brinemasters`,"Mulch Mule":`mulchmule` };
    var brandColor={ hydrospade:`#003473`, energreen:`#F5A524`, metec:`#0A5737`, brinemasters:`#3B7DAC` };
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=brand-card-h]`),function(card){
      var nm=card.querySelector(`[data-soe=brand-card-name]`);
      var name=nm?nm.textContent.trim():``;
      if(!name)return;
      var bkey=brandKey[name]||brandKey[name.replace(/-/g,``)]||``;
      if(brandColor[bkey]) card.style.setProperty(`--brand`, brandColor[bkey]);
      /* logo replaces the text name (same mechanism + assets as fixBrandsPage) */
      if(bkey && nm && !nm.querySelector(`[data-soe=brand-card-logo]`)){
        var sr=document.createElement(`span`); sr.textContent=name;
        sr.style.cssText=`position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0;`;
        var logo=document.createElement(`span`); logo.setAttribute(`data-soe`,`brand-card-logo`); logo.setAttribute(`data-brand`,bkey); logo.setAttribute(`role`,`img`); logo.setAttribute(`aria-label`,name);
        nm.textContent=``; nm.appendChild(sr); nm.appendChild(logo);
      }
      /* drop the earlier big "See It In Action" thumbnail block if a prior run added it */
      var oldSia=card.querySelector(`[data-soe=brand-sia]`); if(oldSia&&oldSia.parentNode)oldSia.parentNode.removeChild(oldSia);
      /* Concept A: the card's own photo IS the video surface — a darkening scrim + a centered white play
         circle + a bold "WATCH VIDEO" corner label. The visual gets data-soe-video so the v2jj capture
         handler opens the lightbox + stops the card nav; the rest of the card still links to the brand page. */
      var vid=brandVideo[name]||brandVideo[name.replace(/-/g,``)];
      var vis=card.querySelector(`[data-soe=brand-card-visual]`);
      if(vid && vis && !vis.querySelector(`[data-soe=brand-card-vwatch]`)){
        vis.setAttribute(`data-soe-video`,vid);
        vis.setAttribute(`role`,`button`); vis.setAttribute(`aria-label`,`Play `+name+` video`);
        var grad=document.createElement(`span`); grad.setAttribute(`data-soe`,`brand-card-vgrad`);
        var play=document.createElement(`span`); play.setAttribute(`data-soe`,`brand-card-play`);
        var watch=document.createElement(`span`); watch.setAttribute(`data-soe`,`brand-card-vwatch`); watch.textContent=`Watch video`;
        vis.appendChild(grad); vis.appendChild(play); vis.appendChild(watch);
      }
    });
  }

  /* /new-customer-setup form polish: clear Webflow's default "Example text" placeholders (the reference
     leaves those blank). NOTE: this form intentionally collects NO documents — the W-9 / tax-exempt cert
     are requested at follow-up, not uploaded, so nothing sensitive is stored on Webflow. Safety net below
     strips any file-upload field if one ever reappears in the DOM. */
  function fixNewCustomerForm(){
    if(path!==`/new-customer-setup`)return;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=ncs-input]`),function(i){
      if((i.getAttribute(`placeholder`)||``)===`Example text`)i.setAttribute(`placeholder`,``);
    });
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=ncs-form] .w-file-upload`),function(w){
      var field=w.closest(`[data-soe=ncs-field]`); if(field&&field.parentNode)field.parentNode.removeChild(field); else if(w.parentNode)w.parentNode.removeChild(w);
    });
  }

  function runAll(){
    try{setPageAttr();}catch(e){}
    try{swapMunicipalities();}catch(e){}
    try{tagHomeBrandLogos();}catch(e){}
    try{fixHomeBrandBoxes();}catch(e){}
    try{fixNewCustomerForm();}catch(e){}
    try{fixEnergreenPage();}catch(e){}
    try{fixBrandsPage();}catch(e){}
  }
  ready(function(){
    runAll();
    /* the hero rotator clones the slides at DOMContentLoaded — re-tag after, so the logo class survives */
    setTimeout(tagHomeBrandLogos,300);
    setTimeout(fixHomeBrandBoxes,300);
    setTimeout(swapMunicipalities,400);
  });
})();

/* === boot-fixes-v2jj ===
   YouTube popup lightbox (no redirect) for the Mulch Mule + Energreen videos. Both "See it in action"
   galleries are JS-built from arrays (MM_VIDEOS / EG_VIDEOS) via the shared buildVideoCard(): on
   /mulch-mule the static 3-card grid is rebuilt to the client's 9; on /remote-controlled-mowers the
   gallery is injected after the unit grid. Also wires the brand-page hero "Watch Video" buttons —
   Mulch Mule -> X8TkDU5Vllo (Todd Pugh intro), Energreen -> yHaA7LCPtWY (New RoboEVO overview); these
   match the landing-page slides 1:1 (see wireHomeWatch in v2ll). Client-provided videos. */
(function(){
  function ready(fn){if(document.readyState !== `loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}
  var path=(location.pathname.replace(/\/+$/,``)||`/`);

  /* ---------- lightbox ---------- */
  var overlay=null;
  function closeModal(){ if(overlay){ if(overlay.parentNode)overlay.parentNode.removeChild(overlay); overlay=null; document.body.style.overflow=``; } }
  function openModal(id){
    if(!id)return; closeModal();
    overlay=document.createElement(`div`); overlay.setAttribute(`data-soe`,`video-modal`);
    var frame=document.createElement(`div`); frame.setAttribute(`data-soe`,`video-modal-frame`);
    var ifr=document.createElement(`iframe`);
    ifr.src=`https://www.youtube-nocookie.com/embed/`+id+`?autoplay=1&rel=0&modestbranding=1`;
    ifr.setAttribute(`allow`,`autoplay; encrypted-media; picture-in-picture; fullscreen`);
    ifr.setAttribute(`allowfullscreen`,``);
    var close=document.createElement(`button`); close.setAttribute(`data-soe`,`video-modal-close`); close.setAttribute(`aria-label`,`Close video`); close.innerHTML=`&times;`;
    frame.appendChild(ifr); overlay.appendChild(close); overlay.appendChild(frame);
    overlay.addEventListener(`click`,function(e){ if(e.target===overlay||e.target===close)closeModal(); });
    document.body.appendChild(overlay); document.body.style.overflow=`hidden`;
  }
  function vidId(el){
    var id=el.getAttribute(`data-soe-video`); if(id)return id;
    var href=el.getAttribute(`href`)||``;
    var m=href.match(/(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/)([\w-]{6,})/);
    return m?m[1]:``;
  }
  function initLightbox(){
    if(document.documentElement.getAttribute(`data-soe-vlb`)===`1`)return;
    document.documentElement.setAttribute(`data-soe-vlb`,`1`);
    document.addEventListener(`click`,function(e){
      var t=e.target.closest?e.target.closest(`[data-soe-video],a[data-soe=video-card]`):null;
      if(!t)return;
      var id=vidId(t); if(!id)return;
      e.preventDefault(); e.stopPropagation();
      openModal(id);
    },true);
    document.addEventListener(`keydown`,function(e){ if(e.key===`Escape`)closeModal(); });
  }

  /* ---------- Mulch Mule: relabel "Watch on YouTube" -> "Watch video" (now opens in-page) ---------- */
  function polishMM(){
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=video-foot-watch]`),function(s){
      Array.prototype.forEach.call(s.childNodes,function(n){
        if(n.nodeType===3 && /Watch on YouTube/.test(n.nodeValue||``)) n.nodeValue=`Watch video`;
      });
    });
  }

  /* ---------- Energreen hero "Watch Demo/Video" -> New RoboEVO overview (1:1 w/ landing slide) ---------- */
  function wireEnergreenHero(){
    if(path!==`/remote-controlled-mowers`)return;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=p-hero-ctas] a[data-soe=btn]`),function(b){
      var t=(b.textContent||``).trim();
      if(t===`Watch Demo`||t===`Watch Video`){
        b.textContent=`Watch Video`;
        b.setAttribute(`data-soe-video`,`yHaA7LCPtWY`);
        b.setAttribute(`href`,`#`);
      }
    });
  }

  /* ---------- "See it in action" galleries (model/category -> client-provided video) ---------- */
  /* [youtube id, category (CSS-hidden), title]. Titles are the client's preferred labels in Title Case
     (they don't always match the raw YouTube title — e.g. fz9OyWLYVOM is YT-titled "Mulch Mule delivery
     day!" but the client wants "Tarping System Demonstration"). The category line is currently display:none. */
  var MM_VIDEOS=[
    [`8ztI_DR0cBU`,`Spencer Lawn Care`,`The Mulch Mule Is Incredible!`],
    [`FZW8PxGw_Sc`,`Spencer Lawn Care`,`The Biggest Fall Cleanup Ever!`],
    [`OyG0qaK-4ww`,`Demonstration`,`Toro Grandstand Multi Force Being Filled Up by the Mulch Mule`],
    [`fz9OyWLYVOM`,`Demonstration`,`Tarping System Demonstration`],
    [`BJZ2gBzF4tA`,`Demonstration`,`Big Foot Jack Demonstration`],
    [`_L5xSj604UM`,`Demonstration`,`Wireless Remote Demonstration`],
    [`MQdX3UKl2MA`,`Spencer Lawn Care`,`Mulch Mule Showing Off Its Rock Hauling and Distribution with the Toro Dingo`],
    [`FW9pK3_SAd4`,`Demonstration`,`Billy Goat Leaf Vacuum Demonstration`],
    [`eRv58gN6ix4`,`Spencer Lawn Care`,`Testimonials`]
  ];
  var EG_VIDEOS=[
    [`zcWSN413YhQ`,`RoboEVO`,`RoboEVO Introduction`],
    [`2PPnzpcxD24`,`RoboEVO`,`RoboEVO Demo with Bucket Attachment`],
    [`Tv20xFAmHWg`,`RoboEVO`,`RoboEVO Demo with Flail Mower`],
    [`5Nukj63t8ZM`,`RoboEVO`,`RoboEVO Demo with Stump Grinder`],
    [`P-ti-5qiec0`,`RoboMIDI`,`RoboMIDI Demo with Cutting Head 155`],
    [`jDmJwzqVDRE`,`RoboMIDI`,`RoboMIDI Demo with Forestry Mulcher Head`]
  ];
  /* Accurate YouTube view counts + durations (fetched 2026-06-01). Duration shows on the thumb;
     views feed the (currently CSS-hidden) footer. To refresh, curl youtube.com/watch?v=ID with a
     browser UA and read the videoDetails "viewCount"/"lengthSeconds". */
  var VIDEO_META={
    /* Mulch Mule */
    "8ztI_DR0cBU":{views:`39K`,dur:`26:36`},"FZW8PxGw_Sc":{views:`53K`,dur:`21:50`},"OyG0qaK-4ww":{views:`193K`,dur:`0:12`},
    "fz9OyWLYVOM":{views:`18K`,dur:`0:28`},"BJZ2gBzF4tA":{views:`18K`,dur:`0:08`},"_L5xSj604UM":{views:`110K`,dur:`0:16`},
    "MQdX3UKl2MA":{views:`32K`,dur:`26:41`},"FW9pK3_SAd4":{views:`16K`,dur:`0:13`},"eRv58gN6ix4":{views:`829`,dur:`1:00`},
    /* Energreen */
    "zcWSN413YhQ":{views:`3.8K`,dur:`1:48`},"2PPnzpcxD24":{views:`6.3K`,dur:`0:57`},"Tv20xFAmHWg":{views:`2K`,dur:`1:40`},
    "5Nukj63t8ZM":{views:`13K`,dur:`2:22`},"P-ti-5qiec0":{views:`3.7K`,dur:`2:14`},"jDmJwzqVDRE":{views:`2.3K`,dur:`2:30`}
  };
  /* Build one video card (identical structure for both galleries). channel = the (hidden) channel tag. */
  function buildVideoCard(v,channel){
    var meta=VIDEO_META[v[0]]||{};
    var a=document.createElement(`a`); a.setAttribute(`data-soe`,`video-card`); a.setAttribute(`data-soe-video`,v[0]); a.setAttribute(`data-soe-state`,`in-view`); a.href=`#`;
    var thumb=document.createElement(`div`); thumb.setAttribute(`data-soe`,`video-thumb`);
    thumb.style.backgroundImage=`url(https://i.ytimg.com/vi/`+v[0]+`/maxresdefault.jpg)`;
    var ch=document.createElement(`span`); ch.setAttribute(`data-soe`,`video-channel`); ch.textContent=channel;
    var play=document.createElement(`div`); play.setAttribute(`data-soe`,`video-play`);
    thumb.appendChild(ch); thumb.appendChild(play);
    if(meta.dur){ var dur=document.createElement(`span`); dur.setAttribute(`data-soe`,`video-duration`); dur.textContent=meta.dur; thumb.appendChild(dur); }
    a.appendChild(thumb);
    var body=document.createElement(`div`); body.setAttribute(`data-soe`,`video-body`);
    var cat=document.createElement(`div`); cat.setAttribute(`data-soe`,`video-cat`); cat.textContent=v[1];
    var title=document.createElement(`h3`); title.setAttribute(`data-soe`,`video-title`); title.textContent=v[2];
    body.appendChild(cat); body.appendChild(title);
    if(meta.views){
      var foot=document.createElement(`div`); foot.setAttribute(`data-soe`,`video-foot`);
      var vs=document.createElement(`span`); var b=document.createElement(`b`); b.textContent=meta.views; vs.appendChild(b); vs.appendChild(document.createTextNode(` views`));
      var w=document.createElement(`span`); w.setAttribute(`data-soe`,`video-foot-watch`); w.textContent=`Watch video`;
      var arr=document.createElement(`span`); arr.setAttribute(`data-soe`,`arr`); w.appendChild(arr);
      foot.appendChild(vs); foot.appendChild(w); body.appendChild(foot);
    }
    a.appendChild(body);
    return a;
  }
  function buildEnergreenVideos(){
    if(path!==`/remote-controlled-mowers`)return;
    if(document.querySelector(`[data-soe=videos][data-soe-built=v2jj]`))return;
    var anchor=document.querySelector(`[data-soe=rc-units]`); if(!anchor)return;
    var sec=document.createElement(`section`); sec.setAttribute(`data-soe`,`videos`); sec.setAttribute(`data-soe-built`,`v2jj`);
    var head=document.createElement(`div`); head.setAttribute(`data-soe`,`videos-head`); head.setAttribute(`data-soe-state`,`in-view`);
    var h2=document.createElement(`h2`); h2.setAttribute(`data-soe`,`videos-head-h2`); h2.textContent=`See it in action.`;
    var lede=document.createElement(`p`); lede.setAttribute(`data-soe`,`videos-head-lede`); lede.textContent=`Watch the Robo lineup work real terrain — steep slopes, heavy brush, forestry, and roadside clearance.`;
    head.appendChild(h2); head.appendChild(lede); sec.appendChild(head);
    var grid=document.createElement(`div`); grid.setAttribute(`data-soe`,`video-grid`);
    EG_VIDEOS.forEach(function(v){ grid.appendChild(buildVideoCard(v,`Energreen`)); });
    sec.appendChild(grid);
    anchor.parentNode.insertBefore(sec, anchor.nextSibling);
  }

  /* Mulch Mule: rebuild the static 3-card grid into the client's full video list (9) — same card
     chrome as Energreen, thumbnails from i.ytimg.com, all opening the in-page popup. */
  function buildMulchMuleVideos(){
    if(path!==`/mulch-mule`)return;
    var grid=document.querySelector(`[data-soe=video-grid]`); if(!grid)return;
    if(grid.getAttribute(`data-soe-built`)===`v2mm`)return;
    while(grid.firstChild)grid.removeChild(grid.firstChild);
    MM_VIDEOS.forEach(function(v){ grid.appendChild(buildVideoCard(v,`Spencer Lawn Care`)); });
    grid.setAttribute(`data-soe-built`,`v2mm`);
  }

  /* Mulch Mule landing hero: wire the "Watch Demo" button to the Mulch Mule intro popup. */
  function wireMulchMuleHero(){
    if(path!==`/mulch-mule`)return;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=p-hero-ctas] a[data-soe=btn]`),function(b){
      var t=(b.textContent||``).trim();
      if(t===`Watch Demo`||t===`Watch Video`){
        b.textContent=`Watch Video`;
        b.setAttribute(`data-soe-video`,`X8TkDU5Vllo`);
        b.setAttribute(`href`,`#`);
      }
    });
  }

  /* Mulch Mule brand page: the nav-cta + hero "Request Info" CTAs were pointed at mulchmule.com/quote/
     (off-site). Point every quote CTA at our own /request-quote instead so leads stay on the SOE site.
     (The separate informational "Visit MulchMule.com" link is left alone.) */
  function fixMulchMuleQuoteLinks(){
    if(path!==`/mulch-mule`)return;
    Array.prototype.forEach.call(document.querySelectorAll(`a[href*="mulchmule.com/quote"]`),function(a){
      a.setAttribute(`href`,`/request-quote`);
      a.removeAttribute(`target`); a.removeAttribute(`rel`);
    });
  }

  /* Mulch Mule feature grid: add a clean white "Watch Video" button inside 4 specific feature boxes,
     each opening its demo clip in the v2jj lightbox. Matched by the feature-visual bg class (robust to
     copy edits). Curbside chute -> Toro Grandstand Multi Force; Automatic tarp system -> Tarping System
     Demonstration; Billy Goat leaf attachment -> Billy Goat Leaf Vacuum; Remote control -> Wireless Remote. */
  var MM_FEAT_VID={ "mm-feat-bg-curb":`OyG0qaK-4ww`, "mm-feat-bg-tarp":`fz9OyWLYVOM`, "mm-feat-bg-billy":`FW9pK3_SAd4`, "mm-feat-bg-remote":`_L5xSj604UM` };
  function addMulchMuleFeatureVideos(){
    if(path!==`/mulch-mule`)return;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=feature]`),function(art){
      if(art.querySelector(`[data-soe=mm-feat-video]`))return;
      var vis=art.querySelector(`[data-soe=feature-visual]`); if(!vis)return;
      var vid=``;
      Object.keys(MM_FEAT_VID).forEach(function(k){ if(vis.classList.contains(k))vid=MM_FEAT_VID[k]; });
      if(!vid)return;
      var btn=document.createElement(`a`); btn.setAttribute(`data-soe`,`mm-feat-video`); btn.setAttribute(`data-soe-video`,vid); btn.href=`#`;
      var ico=document.createElement(`span`); ico.setAttribute(`data-soe`,`mm-feat-video-ico`); ico.setAttribute(`aria-hidden`,`true`);
      var lbl=document.createElement(`span`); lbl.textContent=`Watch Video`;
      btn.appendChild(ico); btn.appendChild(lbl);
      (art.querySelector(`[data-soe=feature-body]`)||art).appendChild(btn);
    });
  }

  ready(function(){
    try{ initLightbox(); }catch(e){}
    try{ polishMM(); }catch(e){}
    try{ buildMulchMuleVideos(); }catch(e){}
    try{ wireMulchMuleHero(); }catch(e){}
    try{ fixMulchMuleQuoteLinks(); }catch(e){}
    try{ addMulchMuleFeatureVideos(); }catch(e){}
    try{ wireEnergreenHero(); }catch(e){}
    try{ buildEnergreenVideos(); }catch(e){}
  });
})();

/* === boot-fixes-v2kk ===
   Keep the desktop nav dropdowns inside the viewport on narrow widths. The mega menu and the
   rightmost simple menus were overflowing off the right edge. Dropdowns are visibility:hidden
   (not display:none) on desktop, so we can measure their real width and shift them left to fit. */
(function(){
  function position(){
    var vw=window.innerWidth||document.documentElement.clientWidth;
    if(vw<721)return; /* mobile uses the drawer, not dropdowns */
    var pad=12;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=nav-link-wrap]`),function(wrap){
      var dd=wrap.querySelector(`[data-soe=nav-dropdown]`); if(!dd)return;
      /* reset to the default left:0 before measuring */
      dd.style.setProperty(`left`,`0`,`important`);
      dd.style.setProperty(`right`,`auto`,`important`);
      var wr=wrap.getBoundingClientRect();
      var menuW=dd.getBoundingClientRect().width;
      if(!menuW)menuW=(dd.getAttribute(`data-soe-menu`)===`mega`?Math.min(960,vw-2*pad):220);
      var clamped=wr.left;
      if(clamped+menuW>vw-pad)clamped=vw-pad-menuW;
      if(clamped<pad)clamped=pad;
      var offset=Math.round(clamped-wr.left);
      if(offset<0)dd.style.setProperty(`left`,offset+`px`,`important`);
    });
  }
  function run(){ position(); setTimeout(position,400); setTimeout(position,1200); }
  if(document.readyState===`loading`)document.addEventListener(`DOMContentLoaded`,run);
  else run();
  var rt;
  window.addEventListener(`resize`,function(){ clearTimeout(rt); rt=setTimeout(position,120); });
})();

/* === boot-fixes-v2ll ===
   2026-06-01 content batch:
   - Site-wide: "Request Quote"/"Request a Quote" CTA buttons -> "Request Info"; hours -> 7:00 AM - 4:00 PM Central.
   - Landing page hero "Watch Video": per-brand, 1:1 with brand pages — Mulch Mule -> X8TkDU5Vllo,
     Energreen -> yHaA7LCPtWY; other brands' placeholder Watch buttons removed (only 2 brands have videos).
   - /request-quote: H1 + breadcrumb "Request a Quote" -> "Request more info"; card heading -> bold
     "Two ways to start. Choose what fits your time." (the gray sub duplicated it, so it's hidden);
     tabs "Quick Quote"->"Quick" / "Detailed Quote"->"More Detail The Better"; detailed submit ->
     "Submit More Info Request"; "Demo scheduling upon request" -> "Demo scheduling"; + a new
     "I'm interested in a quote" checkbox on the detailed form.
   - /mulch-mule: replace "The Mulch Mule Difference" lede.
   - Energreen: hide the discontinued RoboFIFTI + RoboMAX unit cards and bounce their orphaned unit
     pages to /remote-controlled-mowers. (Their videos are removed from EG_VIDEOS + the nav menu.) */
(function(){
  var path=(location.pathname.replace(/\/+$/,``)||`/`).toLowerCase();

  /* Discontinued models: bounce the orphaned unit pages to the brand page (fire ASAP). */
  if(path===`/robofifti`||path===`/robomax`||path===`/roboplus`){ try{ location.replace(`/remote-controlled-mowers`); }catch(e){} return; }

  function ready(fn){if(document.readyState!==`loading`)fn();else document.addEventListener(`DOMContentLoaded`,fn);}

  /* Replace the first non-empty text node of el (preserves child <span>: the arrow, "~30 sec", etc.). */
  function setLabel(el,txt){
    for(var i=0;i<el.childNodes.length;i++){
      var cn=el.childNodes[i];
      if(cn.nodeType===3 && (cn.nodeValue||``).trim().length){ cn.nodeValue=txt; return; }
    }
    el.insertBefore(document.createTextNode(txt), el.firstChild);
  }

  /* Walk text nodes and replace a substring wherever it appears (like fixPhone). */
  function swapText(find,repl){
    if(!document.body)return;
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,null),n,hit=[];
    while((n=w.nextNode())){ if(n.nodeValue && n.nodeValue.indexOf(find)!==-1)hit.push(n); }
    hit.forEach(function(t){ t.nodeValue=t.nodeValue.split(find).join(repl); });
  }

  /* ---- Site-wide: CTA relabel + hours of operation ---- */
  function siteWide(){
    var reQuote=/^request\s+(a\s+)?quote$/i;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=nav-cta]`),function(a){
      if(reQuote.test((a.textContent||``).trim())) setLabel(a,`Request Info`);
    });
    Array.prototype.forEach.call(document.querySelectorAll(`a[data-soe=btn]`),function(b){
      if(reQuote.test((b.textContent||``).trim())) setLabel(b,`Request Info`);
    });
    swapText(`5:00 PM EST`,`4:00 PM Central`);
  }

  /* ---- Landing page: Watch Video buttons are 1:1 with the brand pages. Only Mulch Mule + Energreen
     have a video right now (same ids as their brand-page heroes); every other brand's placeholder
     "Watch Demo" button is removed. Brand is read from the slide's "Explore <Brand>" CTA (that text
     survives tagHomeBrandLogos, which clears the brand-tag). Idempotent — runAll re-runs it for the
     rotator's cloned slides. ---- */
  function wireHomeWatch(){
    if(path!==`/`)return;
    var MAP={ "mulch mule":`X8TkDU5Vllo`, "energreen":`yHaA7LCPtWY` };
    /* Brands with a live brand page — point their "Explore <Brand>" CTA at it (others stay '#'). */
    var EXPLORE={ "mulch mule":`/mulch-mule`, "energreen":`/remote-controlled-mowers`, "hydrospade":`/hydrospade`, "hydro-spade":`/hydrospade` };
    /* Each slide's hero-ctas = an "Explore <Brand>" button + ONE secondary CTA (a "Watch Demo" or a
       "View Specs" that an earlier block relabels to "Watch Video"). For Mulch Mule + Energreen the
       secondary becomes the real Watch Video; for every other brand it's a placeholder and is removed
       outright (works regardless of its current label, so it doesn't depend on the relabel's timing). */
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=hero-ctas]`),function(ctas){
      var brand=``, secondary=null, explore=null;
      Array.prototype.forEach.call(ctas.querySelectorAll(`a[data-soe=btn]`),function(b){
        var ex=(b.textContent||``).trim().match(/^Explore (.+)$/i);
        if(ex){ brand=ex[1].trim().toLowerCase(); explore=b; } else secondary=b;
      });
      if(explore && EXPLORE[brand]) explore.setAttribute(`href`,EXPLORE[brand]);
      if(!secondary)return;
      var vid=MAP[brand];
      if(vid){ secondary.textContent=`Watch Video`; secondary.setAttribute(`data-soe-video`,vid); secondary.setAttribute(`href`,`#`); }
      else if(secondary.parentNode){ secondary.parentNode.removeChild(secondary); }
    });
  }

  /* ---- Energreen brand page: hide the discontinued RoboFIFTI + RoboMAX unit cards ---- */
  function pruneEnergreenCards(){
    if(path!==`/remote-controlled-mowers`)return;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=rc-unit-card]`),function(card){
      var links=card.querySelectorAll(`a[href]`);
      for(var i=0;i<links.length;i++){
        if(/robofifti|robomax|roboplus/i.test(links[i].getAttribute(`href`)||``)){ card.style.display=`none`; return; }
      }
    });
  }

  /* ---- Energreen hero banner: the 3rd slide is a RoboMAX photo (CSS nth-child(3) bg). RoboMAX is
     discontinued, so override that slide's background with the existing RoboMIDI-1 banner. Done by
     computed-bg match (survives the rotator's slide-clone) rather than touching the fragile rotator. ---- */
  function replaceRoboMaxBanner(){
    if(path!==`/remote-controlled-mowers`)return;
    var MIDI1=`https://cdn.prod.website-files.com/69e63e318c2f6e69a08e1082/6a1863cf4568c814e3dc19b0_energreen-banner-robomidi-1.jpg`;
    Array.prototype.forEach.call(document.querySelectorAll(`#rc-hero [data-soe=hero-bg]`),function(bg){
      var img=``; try{ img=getComputedStyle(bg).backgroundImage||``; }catch(e){}
      if(/robomax/i.test(img)||/robomax/i.test(bg.style.backgroundImage||``)){
        bg.style.setProperty(`background-image`,`url("`+MIDI1+`")`,`important`);
      }
    });
  }

  /* ---- /mulch-mule: replace the "The Mulch Mule Difference" lede ---- */
  function fixMulchMule(){
    if(path!==`/mulch-mule`)return;
    var lede=document.querySelector(`[data-soe=difference-head-lede]`);
    if(lede)lede.textContent=`When it comes to efficient material handling, durability, and ease of use, the Mulch Mule stands unmatched. Designed with over 30 years of practical experience, see below what separates the Mulch Mule from every dump trailer and skid-steer combo your competition is still using.`;
  }

  /* ---- /request-quote: copy changes + new checkbox ---- */
  function addQuoteCheckbox(){
    var form=document.querySelector(`form[data-name=detailed-quote]`); if(!form)return;
    if(form.querySelector(`input[name=interested-in-quote]`))return;
    var outer=document.createElement(`label`); outer.setAttribute(`data-soe`,`quote-checkbox`);
    var inner=document.createElement(`label`); inner.className=`w-checkbox`;
    var input=document.createElement(`input`); input.type=`checkbox`; input.className=`w-checkbox-input`;
    input.setAttribute(`name`,`interested-in-quote`); input.setAttribute(`data-name`,`interested-in-quote`);
    var span=document.createElement(`span`); span.className=`w-form-label`; span.setAttribute(`for`,`interested-in-quote`); span.textContent=`quote`;
    inner.appendChild(input); inner.appendChild(span);
    outer.appendChild(inner); outer.appendChild(document.createTextNode(`I'm interested in a quote`));
    var checks=form.querySelectorAll(`[data-soe=quote-checkbox]`);
    if(checks.length){ var last=checks[checks.length-1]; last.parentNode.insertBefore(outer,last.nextSibling); }
    else { var sub=form.querySelector(`[data-soe=quote-submit]`); if(sub)sub.parentNode.insertBefore(outer,sub); else form.appendChild(outer); }
  }
  function fixRequestQuote(){
    if(path!==`/request-quote`)return;
    var h1=document.querySelector(`[data-soe=page-head-h1]`); if(h1)h1.textContent=`Request more info`;
    var cc=document.querySelector(`[data-soe=crumbs-current]`); if(cc)cc.textContent=`Request more info`;
    if(/request a quote/i.test(document.title))document.title=`Request More Info | Smart Outdoor Equipment`;
    var ch=document.querySelector(`[data-soe=quote-card-h]`); if(ch)ch.textContent=`Two ways to start. Choose what fits your time.`;
    var sub=document.querySelector(`[data-soe=quote-card-sub]`); if(sub)sub.style.display=`none`;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=quote-tab]`),function(tab){
      var k=tab.getAttribute(`data-soe-tab`);
      if(k===`quick`)setLabel(tab,`Quick `);
      if(k===`detailed`)setLabel(tab,`More Detail The Better `);
    });
    swapText(`Demo scheduling upon request`,`Demo scheduling`);
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=quote-submit][data-soe-form=detailed]`),function(s){
      s.textContent=`Submit More Info Request`;
    });
    addQuoteCheckbox();
  }

  function runAll(){
    try{siteWide();}catch(e){}
    try{wireHomeWatch();}catch(e){}
    try{pruneEnergreenCards();}catch(e){}
    try{replaceRoboMaxBanner();}catch(e){}
    try{fixMulchMule();}catch(e){}
    try{fixRequestQuote();}catch(e){}
  }
  ready(function(){
    runAll();
    /* Re-run for cloned hero slides (rotator) + v2ee's +300ms submit-button swap. */
    setTimeout(runAll,400);
    setTimeout(runAll,1200);
  });
})();

/* === boot-fixes-v2nn === Product unit cards fully clickable (robust JS fallback for the CSS stretched-link). */
(function(){
  function wire(){
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=rc-unit-card]`),function(card){
      if(card.getAttribute(`data-soe-clickwired`)===`1`)return;
      var a=card.querySelector(`a[data-soe=btn]`); var href=a?a.getAttribute(`href`):``;
      if(!href||href===`#`)return;
      card.setAttribute(`data-soe-clickwired`,`1`);
      card.style.cursor=`pointer`;
      card.addEventListener(`click`,function(e){ if(e.defaultPrevented)return; (window.__soeCloseAndGo||function(u){location.href=u;})(href); });
    });
  }
  if(document.readyState===`loading`)document.addEventListener(`DOMContentLoaded`,wire); else wire();
  setTimeout(wire,800);
})();

/* === boot-fixes-v2oo === HydroSpade content tweaks (2026-06-02)
   - Fix broken HydroSpade destination links (homepage brand-grid card + /brands "View HydroSpade" tile -> /hydrospade).
   - Landing /hydrospade: banner headline "Simply Built." / "Simply Better." (white/blue, via CSS), drop the
     "Mid-size, mobile…" subline, new lede; "The Hydro-Spade Difference" (hyphen) becomes a statement block
     (six feature cards hidden via CSS) with a subhead + paragraph; lineup -> "Choose your equipment." + new
     lede + hyphenated "Hydro-Spade Truck/Trailer".
   - Truck /hydrospade-trucks + Trailer /hydrospade-trailers: hyphenated eyebrow/h1, new sub + lede + description,
     "Spec Sheet (PDF)" CTA -> the hydrospade.com product-spec PDF (new tab), specs eyebrow "Technical Data"
     (matching the Energreen Robos).
   NOTE: the hero "View the Lineup" button is left as-is — the "Watch Video" relabel waits on the owner's video. */
(function(){
  function ready(fn){ if(document.readyState!==`loading`)fn(); else document.addEventListener(`DOMContentLoaded`,fn); }
  var path=(location.pathname.replace(/\/+$/,``)||`/`).toLowerCase();

  var TRUCK_PDF=`https://cdn.jsdelivr.net/gh/maddox-w/soe-cdn@main/hydrospade-truck-specs.pdf`;
  var TRAILER_PDF=`https://cdn.jsdelivr.net/gh/maddox-w/soe-cdn@main/hydrospade-trailer-specs.pdf`;

  function setText(sel,txt){ var el=document.querySelector(sel); if(el)el.textContent=txt; return el; }

  /* ---- Repair HydroSpade destination links that still point at "#" (the page exists now) ---- */
  function fixHydroSpadeLinks(){
    /* Homepage "Explore Smart Outdoor Products" grid: the HydroSpade card <a> -> /hydrospade. */
    Array.prototype.forEach.call(document.querySelectorAll(`a[data-soe=brand-card-h]`),function(a){
      var n=a.querySelector(`[data-soe=brand-card-name]`);
      if(n && n.textContent.trim().replace(/-/g,``)===`HydroSpade`) a.setAttribute(`href`,`/hydrospade`);
    });
    /* /brands tile: the HydroSpade "View HydroSpade" link -> /hydrospade (also makes the whole-card click work). */
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=brand-card]`),function(card){
      var h3=card.querySelector(`[data-soe=brand-card-h3]`);
      if(!h3 || h3.textContent.trim().replace(/-/g,``)!==`HydroSpade`)return;
      var link=card.querySelector(`[data-soe=brand-card-link-large]`);
      if(link)link.setAttribute(`href`,`/hydrospade`);
    });
  }

  /* ---- Landing page (/hydrospade) ---- */
  function fixLanding(){
    if(path!==`/hydrospade`)return;
    /* Two-colour headline; this also drops the old "Mid-size, mobile…" subline that lived in the h1. */
    var h1=document.querySelector(`#hs-hero [data-soe=p-hero-h1]`);
    if(h1)h1.innerHTML=`<span data-soe="hs-built">Simply Built.</span><span data-soe="hs-better">Simply Better.</span>`;
    setText(`#hs-hero [data-soe=p-hero-lede]`,`Designed with your work in mind — Super versatile. Easy to operate. Easy to maintain.`);

    /* The Hydro-Spade Difference: hyphen + statement subhead + paragraph (cards hidden via CSS). */
    setText(`#hs-difference [data-soe=difference-head-h2]`,`The Hydro-Spade Difference`);
    var lede=document.querySelector(`#hs-difference [data-soe=difference-head-lede]`);
    if(lede){
      /* "Maneuver tighter. Carry more. Run quieter." subhead removed per owner (hidden via CSS); keep the paragraph. */
      if(lede.parentNode && !lede.parentNode.querySelector(`[data-soe=hs-diff-body]`)){
        var p=document.createElement(`p`);
        p.setAttribute(`data-soe`,`hs-diff-body`);
        p.textContent=`Hydro-Spades are designed to perform for those difficult jobs — delivering enhanced maneuverability, ability to operate in tight urban areas, maximize your payload, and provide super easy and protected operations, from the first load to the final quick and easy cleanup.`;
        lede.parentNode.insertBefore(p,lede.nextSibling);
      }
    }

    /* Lineup -> "Choose your equipment." + new lede + hyphenated product names. */
    setText(`#hs-lineup [data-soe=rc-units-h2]`,`Choose your equipment.`);
    setText(`#hs-lineup [data-soe=rc-units-lede]`,`Get the job done, whatever the scale. Choose your equipment category. Then select from a variety of size and power options to build the perfect unit to tackle the work ahead.`);
    Array.prototype.forEach.call(document.querySelectorAll(`#hs-lineup [data-soe=rc-unit-name]`),function(n){
      var t=n.textContent.trim();
      if(t===`HydroSpade Truck`)n.textContent=`Hydro-Spade Truck`;
      else if(t===`HydroSpade Trailer`)n.textContent=`Hydro-Spade Trailer`;
    });

    /* Hero CTAs: "View the Lineup" -> "Watch Video" (scrolls to the See-it-in-action section) +
       a "Contact Us" primary button, matching the other brand pages' hero CTA set. */
    var ctas=document.querySelector(`#hs-hero [data-soe=p-hero-ctas]`);
    if(ctas){
      var watch=ctas.querySelector(`a[data-soe=btn][data-soe-variant=inverse-outline]`);
      if(watch){ watch.textContent=`Video Coming Soon`; watch.setAttribute(`href`,`#hs-videos`); }
      if(!ctas.querySelector(`a[data-soe-hs-contact]`)){
        var contact=document.createElement(`a`);
        contact.setAttribute(`data-soe`,`btn`); contact.setAttribute(`data-soe-variant`,`primary`);
        contact.setAttribute(`data-soe-size`,`lg`); contact.setAttribute(`data-soe-hs-contact`,`1`);
        contact.setAttribute(`href`,`/request-quote`); contact.textContent=`Contact Us`;
        ctas.appendChild(contact);
      }
    }

    /* "See it in action" placeholder section so the owner can see the slot that's still open (videos pending).
       Carries a bold amber "OPEN — AWAITING VIDEO" flag (data-soe=hs-open-flag) so the open item is unmistakable on review. */
    if(!document.querySelector(`#hs-videos`)){
      var lineup=document.querySelector(`#hs-lineup`);
      if(lineup && lineup.parentNode){
        var sec=document.createElement(`section`);
        sec.setAttribute(`data-soe`,`videos`); sec.id=`hs-videos`;
        sec.innerHTML=`<div data-soe="videos-head" data-soe-state="in-view"><h2 data-soe="videos-h2">See it in Action</h2><p data-soe="videos-lede">Feature videos for the truck and trailer are coming soon.</p></div><div data-soe="hs-video-grid"><div data-soe="hs-video-ph"><span data-soe="hs-video-ph-play"></span><span>Truck — Video coming soon</span></div><div data-soe="hs-video-ph"><span data-soe="hs-video-ph-play"></span><span>Trailer — Video coming soon</span></div></div>`;
        lineup.parentNode.insertBefore(sec, lineup.nextSibling);
      }
    }
  }

  /* ---- Detail-page spec CTA: "Full Specs at HydroSpade.com" -> "Spec Sheet (PDF)" opening the real PDF ---- */
  function fixSpecCta(href){
    var a=document.querySelector(`[data-soe=ru-hero-ctas] a[data-soe=btn][data-soe-variant=inverse-outline]`);
    if(!a)return;
    a.textContent=`Spec Sheet (PDF)`;
    a.setAttribute(`href`,href);
    a.setAttribute(`target`,`_blank`);
    a.setAttribute(`rel`,`noopener`);
  }
  function setDesc(txt){
    var el=document.querySelector(`[data-soe=ru-desc] [data-soe=ru-desc-inner]`);
    if(el)el.innerHTML=`<p>`+txt+`</p>`;
  }

  /* ---- Truck (/hydrospade-trucks) ---- */
  function fixTruck(){
    if(path!==`/hydrospade-trucks`)return;
    setText(`#hs-truck-hero [data-soe=eyebrow]`,`Hydro-Spade Trucks`);
    setText(`#hs-truck-hero [data-soe=ru-hero-h1]`,`Hydro-Spade Truck`);
    setText(`#hs-truck-hero [data-soe=ru-hero-sub]`,`Non CDL Hydro Vac Truck`);
    setText(`#hs-truck-hero [data-soe=ru-hero-lede]`,`When it comes to specifying a hydro excavator, buyers tend to overlook the one question that matters most: chassis class. A unit mounted on a Class 5/6 non-CDL chassis opens the operator pool to anyone with a standard license, which changes scheduling math more than any spec on the data sheet. The tradeoff is payload ceiling, so the right move is matching tank size to the actual job mix instead of buying the biggest truck the yard can fit.`);
    fixSpecCta(TRUCK_PDF);
    setDesc(`The Hydro-Spade truck pairs a 600 to 1200 gallon debris tank with a 5.5 to 10.5 GPM at 3,500 to 2,900 PSI water system, sized for residential potholing, utility daylighting, and tight-radius work where a full-size vac truck cannot maneuver. Position the nozzle anywhere with a 6-way articulating boom and simple hydraulic controls keep training short and diagnostics straightforward, with no computer modules between the operator and the work.`);
    setText(`[data-soe=ru-specs-head] [data-soe=eyebrow]`,`Technical Data`);
  }

  /* ---- Trailer (/hydrospade-trailers) ---- */
  function fixTrailer(){
    if(path!==`/hydrospade-trailers`)return;
    setText(`#hs-trailer-hero [data-soe=eyebrow]`,`Hydro-Spade Trailers`);
    setText(`#hs-trailer-hero [data-soe=ru-hero-h1]`,`Hydro-Spade Trailer`);
    setText(`#hs-trailer-hero [data-soe=ru-hero-sub]`,`Hydro-Vac Trailer`);
    setText(`#hs-trailer-hero [data-soe=ru-hero-lede]`,`Hydro excavation trailers get specified on debris tank size, but the number that actually governs a shift is water flow against pressure. A 4.5+ GPM, 2,900+ PSI water system cuts soil fast enough to keep a two-person crew productive without overwhelming a 600-gallon spoils tank — the balance point that keeps an operation moving instead of chasing a vac or dump site every other potholing job.`);
    fixSpecCta(TRAILER_PDF);
    setDesc(`The Hydro-Spade trailer pairs that 4.5+ GPM / 2,900+ PSI water system with a 6-way articulating boom and simple hydraulic controls, so a single operator can daylight utilities, expose laterals, or set poles without a CDL or a dedicated truck. This trailer tows behind a 3/4-ton or 1-ton pickup and fits residential streets, easements, and tight job sites where a full vac truck cannot stage.`);
    setText(`[data-soe=ru-specs-head] [data-soe=eyebrow]`,`Technical Data`);
  }

  function runAll(){
    try{ fixHydroSpadeLinks(); }catch(e){}
    try{ fixLanding(); }catch(e){}
    try{ fixTruck(); }catch(e){}
    try{ fixTrailer(); }catch(e){}
  }
  ready(function(){
    runAll();
    /* re-run once the JS-built chrome (footer/brand cards) + any late DOM settles */
    setTimeout(runAll,500);
  });
})();

/* === boot-fixes-v2pp === Brand spelling: the product name shows as "Hydro-Spade" (hyphen) in ALL
   visible text — nav menus, footer, breadcrumbs, the front-page banner/cards + "Explore" button,
   lineup/detail headings, and the request-quote dropdown. The domain "HydroSpade.com" and every
   /hydrospade* URL stay one word: the text walk skips "HydroSpade" when it is immediately followed
   by ".com", and only ever touches TEXT nodes (never hrefs/attributes/slugs). Runs in the same defer
   tick right after the JS-built chrome, plus a few re-runs for the rotator's cloned hero slides.
   Idempotent — "Hydro-Spade" contains no "HydroSpade", so it never double-hyphenates. The brand
   match logic above (wireHomeWatch / fixHydroSpadeLinks / fixBrandsPage / tagHomeBrandLogos) was made
   hyphen-tolerant so link-wiring + logos keep working whichever spelling is present when they run. */
(function(){
  function ready(fn){ if(document.readyState!==`loading`)fn(); else document.addEventListener(`DOMContentLoaded`,fn); }
  var RX=/HydroSpade(?!\.com)/g;
  function skipParent(name){ return name===`SCRIPT`||name===`STYLE`||name===`NOSCRIPT`||name===`TEXTAREA`; }
  function hyphenate(){
    if(!document.body)return;
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(node){
      if(node.parentNode && skipParent(node.parentNode.nodeName))return NodeFilter.FILTER_REJECT;
      return (node.nodeValue && node.nodeValue.indexOf(`HydroSpade`)!==-1)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP;
    }});
    var n,hits=[];
    while((n=w.nextNode()))hits.push(n);
    hits.forEach(function(t){ t.nodeValue=t.nodeValue.replace(RX,`Hydro-Spade`); });
    /* <head>: SEO <title> + meta titles/descriptions (browser tab + crawlers). URLs use lowercase
       slugs so the capital-S regex never touches og:url/canonical; the .com lookahead keeps the domain. */
    if(document.title && document.title.indexOf(`HydroSpade`)!==-1) document.title=document.title.replace(RX,`Hydro-Spade`);
    Array.prototype.forEach.call(document.querySelectorAll(`meta[content]`),function(m){
      var c=m.getAttribute(`content`)||``;
      if(c.indexOf(`HydroSpade`)!==-1) m.setAttribute(`content`,c.replace(RX,`Hydro-Spade`));
    });
  }
  ready(function(){
    hyphenate();
    setTimeout(hyphenate,300); setTimeout(hyphenate,800); setTimeout(hyphenate,1500);
  });
})();

/* === boot-fixes-v2qq === Consistent scroll-reveal for the NEWER page sections that the original
   reveal lists (v2c/v2d/v2g) never covered — Energreen brand + Robo unit pages + HydroSpade
   landing/truck/trailer. Every page now reveals the same way. Reuses the EXISTING primitive:
   set data-soe-anim="reveal" (boot-head.js base CSS = opacity:0 + translateY(16px), .7s ease) and
   an IntersectionObserver flips data-soe-state="in-view" with the SAME threshold/rootMargin/70ms
   stagger as the original blocks. All targets sit below the fold, so the pre-reveal hidden state is
   never visible (no FOUC). prefers-reduced-motion is neutralised site-wide in boot-head.css. */
(function(){
  var SEL=[
    `[data-soe=rc-units-head]`,   /* Energreen + HydroSpade "lineup / choose your equipment" head */
    `[data-soe=rc-unit-card]`,    /* unit + lineup cards (staggered) */
    `[data-soe=ru-desc-inner]`,   /* unit + HydroSpade product description */
    `[data-soe=ru-specs-head]`,   /* spec section head */
    `[data-soe=ru-spec-card]`,    /* spec cards (staggered) */
    `[data-soe=ru-form-head]`     /* inquiry-form head */
  ].join(`,`);
  function run(){
    var all=document.querySelectorAll(SEL);
    if(!all.length)return;
    var fresh=Array.prototype.filter.call(all,function(n){return !n.getAttribute(`data-soe-rev`);});
    if(!fresh.length)return;
    fresh.forEach(function(n){ n.setAttribute(`data-soe-rev`,`1`); n.setAttribute(`data-soe-anim`,`reveal`); });
    if(typeof IntersectionObserver===`undefined`){ fresh.forEach(function(n){n.setAttribute(`data-soe-state`,`in-view`);}); return; }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e,idx){
        if(e.isIntersecting){ var t=e.target; setTimeout(function(){t.setAttribute(`data-soe-state`,`in-view`);},idx*70); io.unobserve(t); }
      });
    },{threshold:0.12,rootMargin:`0px 0px -40px 0px`});
    fresh.forEach(function(n){io.observe(n);});
  }
  run();
  if(document.readyState===`loading`) document.addEventListener(`DOMContentLoaded`,run);
  setTimeout(run,700);
})();

/* === boot-fixes-v2rr === Homepage intro flourish: (1) count the "1968" heritage year up when it
   scrolls into view, (2) a staggered reveal of the enriched block (lead -> heritage -> button), which
   the original lists never covered (it's injected at runtime). Homepage only; reduced-motion safe. */
(function(){
  var path=(location.pathname.replace(/\/+$/,``)||`/`);
  if(path!==`/`)return;
  var reduce=!!(window.matchMedia && window.matchMedia(`(prefers-reduced-motion: reduce)`).matches);

  function countUp(el){
    if(el.getAttribute(`data-soe-counted`))return;
    el.setAttribute(`data-soe-counted`,`1`);
    var target=parseInt((el.textContent||``).replace(/[^0-9]/g,``),10);
    if(!target)return;
    if(reduce){ el.textContent=String(target); return; }
    var dur=1900, t0=null;
    function ease(p){ return p>=1?1:1-Math.pow(2,-10*p); }   /* easeOutExpo — fast ramp, pronounced slow-down into 1968 */
    function frame(ts){
      if(t0===null)t0=ts;
      var p=(ts-t0)/dur; if(p>1)p=1;
      el.textContent=String(Math.round(target*ease(p)));
      if(p<1)requestAnimationFrame(frame); else el.textContent=String(target);
    }
    requestAnimationFrame(frame);
  }

  function run(){
    /* 1) count-up the heritage year */
    var year=document.querySelector(`[data-soe=intro-heritage-year]`);
    if(year && !year.getAttribute(`data-soe-cwired`)){
      year.setAttribute(`data-soe-cwired`,`1`);
      if(!reduce && typeof IntersectionObserver!==`undefined`){
        /* Leave "1968" showing (fail-safe: worst case shows the real year, never a stuck "0").
           countUp's first frame resets to 0 and ramps — and on a hidden tab rAF is paused, so it
           simply stays "1968" until the tab is visible, then animates. */
        var cio=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){countUp(e.target);cio.unobserve(e.target);}});},{threshold:0.45});
        cio.observe(year);
      }
    }
    /* 2) reveal the enriched block (intro-tagline already reveals via v2d) */
    var nodes=document.querySelectorAll(`[data-soe=intro-lead],[data-soe=intro-heritage],[data-soe=intro-cta-wrap]`);
    var fresh=Array.prototype.filter.call(nodes,function(n){return !n.getAttribute(`data-soe-rev`);});
    if(!fresh.length)return;
    fresh.forEach(function(n){ n.setAttribute(`data-soe-rev`,`1`); n.setAttribute(`data-soe-anim`,`reveal`); });
    if(typeof IntersectionObserver===`undefined`){ fresh.forEach(function(n){n.setAttribute(`data-soe-state`,`in-view`);}); return; }
    var io=new IntersectionObserver(function(entries){
      entries.forEach(function(e,idx){ if(e.isIntersecting){ var t=e.target; setTimeout(function(){t.setAttribute(`data-soe-state`,`in-view`);},idx*70); io.unobserve(t); } });
    },{threshold:0.12,rootMargin:`0px 0px -40px 0px`});
    fresh.forEach(function(n){io.observe(n);});
  }
  if(document.readyState===`loading`) document.addEventListener(`DOMContentLoaded`,run); else run();
  setTimeout(run,300); setTimeout(run,900);
})();

/* === boot-fixes-v2ss === Anti-flash for the whole reveal system. The reveal blocks add
   data-soe-anim=reveal (opacity:0) from deferred JS, which runs AFTER first paint — so anything
   already visible (above-the-fold, or ANY section when you reload while scrolled down) would paint,
   then disappear, then fade back. This promotes any [data-soe-anim=reveal] element that is currently
   within the viewport straight to in-view — and because this runs in the SAME synchronous tick the
   other blocks hide them, the opacity:0 state never reaches the screen. Below-the-fold elements are
   left alone (they still hide + animate on scroll). A short rAF loop + timeouts catch JS-injected
   reveal elements (intro block, video cards) too. */
(function(){
  function promote(){
    var h=window.innerHeight||document.documentElement.clientHeight||0;
    var els=document.querySelectorAll(`[data-soe-anim=reveal]:not([data-soe-state=in-view])`);
    for(var i=0;i<els.length;i++){
      var r=els[i].getBoundingClientRect();
      if(r.top<h && r.bottom>0) els[i].setAttribute(`data-soe-state`,`in-view`);  /* in view now -> show, never hide */
    }
  }
  promote();
  var n=0;
  function loop(){ promote(); if(++n<10 && window.requestAnimationFrame) window.requestAnimationFrame(loop); }
  if(window.requestAnimationFrame) window.requestAnimationFrame(loop);
  if(document.readyState===`loading`) document.addEventListener(`DOMContentLoaded`,promote);
  setTimeout(promote,250); setTimeout(promote,700); setTimeout(promote,1500);
})();

/* === boot-fixes-v2tt === Page-load curtain reveal. A white panel (created pre-paint in boot-head.js,
   z-index 48, BENEATH the sticky header) holds over the page; this block beats on it, swipes it up
   (data-soe-curtain=up -> CSS transition in boot-head.css), then releases the above-the-fold
   scroll-reveals one at a time so they flow in with the site's standard 70ms fade-up cascade.
   - Runs LAST, so the reveal blocks (initAnimReveal / v2qq …) that add data-soe-anim=reveal have already
     run synchronously at this deferred-script's exec time (readyState is no longer "loading").
   - Above-the-fold reveals are pinned hidden with a per-element data-soe-curtain-hold marker — decoupled
     from the in-view that the observers/v2ss/revealHero keep setting behind the curtain — and released
     individually (staggered) so the cascade survives.
   - prefers-reduced-motion: no curtain is ever created (boot-head.js skips it); this just drops the
     attribute and returns.
   - FAIL-SAFES: a hard timer here PLUS the pure-CSS animations in boot-head.css guarantee the curtain
     can never stay stuck and held content can never stay hidden, even if anything below throws. */
(function(){
  function run(){
  var html=document.documentElement;
  var curtain=document.getElementById('soe-curtain');
  function setState(s){ try{ html.setAttribute('data-soe-curtain',s); }catch(e){} }
  function dropCurtain(){ try{ if(curtain&&curtain.parentNode){ curtain.parentNode.removeChild(curtain); } }catch(e){} curtain=null; }

  /* No curtain (reduced-motion, JS-disabled head, or an older boot-head.js) -> nothing to drive. */
  if(!curtain){ return; }
  var reduce=!!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  if(reduce){ setState('off'); dropCurtain(); return; }

  /* Pin the reveals that are in (or just under) the viewport — these flow in after the swipe. */
  var holds=[];
  try{
    var vh=window.innerHeight||html.clientHeight||0;
    var all=document.querySelectorAll('[data-soe-anim=reveal]');
    for(var i=0;i<all.length;i++){
      var r=all[i].getBoundingClientRect();
      if(r.top < vh*0.98 && r.bottom > 0){ all[i].setAttribute('data-soe-curtain-hold',''); holds.push(all[i]); }
    }
  }catch(e){}

  var done=false;
  function finish(){
    if(done) return; done=true;
    if(window.__soeNavigating){ return; }   /* an exit transition (v2uu) now owns the curtain — don't yank it */
    for(var j=0;j<holds.length;j++){ try{ holds[j].removeAttribute('data-soe-curtain-hold'); holds[j].removeAttribute('data-soe-curtain-flow'); }catch(e){} }
    setState('off'); dropCurtain();
  }

  /* Bulletproof timer registered FIRST: whatever happens below, the page is fully revealed and the
     curtain is gone by 2.6s. */
  var hardFailsafe=setTimeout(finish, 2600);

  function flowIn(){
    /* Arm a transition on every hold while it is STILL hidden (a transition is the one cascade level
       that can ease over v2hh's transition:none / opacity:1 !important), reflow to commit it, then drop
       each hold a beat apart so they rise in with the site's 70ms stagger. */
    for(var a=0;a<holds.length;a++){ try{ holds[a].setAttribute('data-soe-curtain-flow',''); }catch(e){} }
    try{ void html.offsetWidth; }catch(e){}
    for(var j=0;j<holds.length;j++){
      (function(el,idx){ setTimeout(function(){ try{ el.removeAttribute('data-soe-curtain-hold'); }catch(e){} }, idx*70); })(holds[j], j);
    }
    var tail=Math.max(0,holds.length-1)*70;
    setTimeout(function(){ for(var m=0;m<holds.length;m++){ try{ holds[m].removeAttribute('data-soe-curtain-flow'); }catch(e){} } }, tail+1000);  /* hand back to v2hh / in-view */
    setTimeout(finish, tail+1150);
  }

  try{
    setTimeout(function(){ setState('up'); }, 180);   /* beat on the white, then swipe up */
    setTimeout(flowIn, 780);                          /* begin the flow-in while the panel is ~75% gone */
  }catch(e){ finish(); }

  /* bfcache restore mid-animation: never leave anything covering or hidden. */
  window.addEventListener('pageshow', function(ev){ if(ev && ev.persisted){ clearTimeout(hardFailsafe); finish(); } });
  }
  /* Run after the DOM is parsed so the reveal blocks above have added data-soe-anim=reveal. With the
     deferred boot-master tag readyState is already 'interactive' here (runs now); this guard keeps the
     above-the-fold flow-in working even if the tag ever loses its defer. */
  if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', run); } else { run(); }
})();

/* === boot-fixes-v2uu === Page EXIT transition ("closing the door"). On an internal link click, descend
   the white curtain from above to cover the current page, THEN navigate — so the browser's blank/white
   page-swap is hidden behind it and flows straight into the next page's entrance swipe-up (v2tt). The
   curtain is z-index 48 (below the sticky header), matching the entrance, so the dark header reads as a
   persistent frame across the navigation. Skipped under reduced-motion. ROBUST: only same-origin,
   unmodified, normal-target left-clicks are intercepted; new tab / hash / downloads / external /
   mailto:tel: / [data-soe-no-transition] navigate natively, and ANY failure falls back to a plain
   navigation so a link can never be trapped. */
(function(){
  var html=document.documentElement;
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  function targetHref(a, e){
    if(!a || e.defaultPrevented) return null;
    if(e.button && e.button!==0) return null;
    if(e.metaKey||e.ctrlKey||e.shiftKey||e.altKey) return null;      /* let new-tab / new-window through */
    var tgt=a.getAttribute('target'); if(tgt && tgt!=='_self') return null;
    if(a.hasAttribute('download')) return null;
    if(/(^|\s)external(\s|$)/i.test(a.getAttribute('rel')||'')) return null;
    if(a.hasAttribute('data-soe-no-transition')) return null;
    var raw=a.getAttribute('href'); if(!raw || raw.charAt(0)==='#') return null;
    var url; try{ url=new URL(a.href, location.href); }catch(_e){ return null; }
    if(url.origin!==location.origin) return null;                    /* external site */
    if(url.protocol!=='http:' && url.protocol!=='https:') return null; /* mailto:, tel:, etc. */
    if(url.pathname===location.pathname && url.search===location.search) return null; /* same doc / hash only */
    return url.href;
  }

  function curtainEl(){
    var c=document.getElementById('soe-curtain');
    if(!c){ c=document.createElement('div'); c.id='soe-curtain'; c.setAttribute('aria-hidden','true'); (document.body||html).appendChild(c); }
    return c;
  }

  var going=false;
  function closeAndGo(href){
    if(going) return; going=true; window.__soeNavigating=true;
    var nav=function(){ if(nav.done) return; nav.done=true; location.href=href; };
    try{
      var d=document.querySelector('[data-soe=nav-drawer][data-soe-state=open]');   /* drop an open drawer first */
      if(d){ d.removeAttribute('data-soe-state'); try{ document.body.style.overflow=''; }catch(_e){} }
      var c=curtainEl();
      html.setAttribute('data-soe-curtain','close-armed');   /* park above the viewport, no transition */
      void c.offsetWidth;                                    /* commit the start position */
      if(window.requestAnimationFrame){ requestAnimationFrame(function(){ html.setAttribute('data-soe-curtain','closing'); }); }
      else { html.setAttribute('data-soe-curtain','closing'); }
      c.addEventListener('transitionend', function(ev){ if(ev.propertyName==='transform') nav(); });
      setTimeout(nav, 620);   /* fail-safe: navigate even if transitionend never fires */
    }catch(_e){ nav(); }
  }
  /* Expose the transition so the imperative navigations below (logo / cards, which call location.href
     directly instead of relying on an <a>) route through the same close-the-door animation. Defined only
     when NOT reduced-motion (we return early above), so those call sites fall back to a plain nav. */
  window.__soeCloseAndGo = closeAndGo;

  document.addEventListener('click', function(e){
    var a=(e.target && e.target.closest) ? e.target.closest('a[href]') : null;
    if(!a) return;
    var href=targetHref(a, e);
    if(!href) return;
    e.preventDefault();
    closeAndGo(href);
  });

  /* FUTURE-PROOFING — a Navigation API safety net (Chrome/Edge). Catches ANY same-origin forward
     navigation that the click / __soeCloseAndGo paths above didn't already start (e.g. a future raw
     location.href someone forgets to route, or a JS nav from new code) and runs it through the close-the-
     door transition too. The click + __soeCloseAndGo paths remain the baseline for browsers without the
     Navigation API. Heavily guarded so it only ever cancels a plain push to another in-site page:
     - skips if we already started the close (window.__soeNavigating)
     - only navigationType 'push' (NOT 'replace' redirects like the /robo* -> /remote-controlled-mowers
       one, NOT 'traverse' back/forward)
     - skips hash changes, downloads, form submits, non-cancelable navs, cross-origin, and same-doc. */
  if(window.navigation && navigation.addEventListener){
    navigation.addEventListener('navigate', function(e){
      try{
        if(window.__soeNavigating) return;
        if(e.navigationType!=='push') return;
        if(!e.cancelable || e.hashChange || e.downloadRequest!=null || e.formData) return;
        var d=e.destination && e.destination.url; if(!d) return;
        var u; try{ u=new URL(d); }catch(_e){ return; }
        if(u.origin!==location.origin) return;
        if(u.pathname===location.pathname && u.search===location.search) return;
        e.preventDefault();
        closeAndGo(d);
      }catch(_e){}
    });
  }

  /* bfcache: returning to a page that was covered on the way out — lift the curtain back off. */
  window.addEventListener('pageshow', function(ev){
    if(!ev || !ev.persisted) return;
    going=false; window.__soeNavigating=false;
    var c=document.getElementById('soe-curtain');
    if(!c) return;
    html.setAttribute('data-soe-curtain','up');
    setTimeout(function(){ try{ if(c.parentNode) c.parentNode.removeChild(c); }catch(_e){} html.setAttribute('data-soe-curtain','off'); }, 850);
  });
})();


/* === boot-fixes-v2vv === 2026-06-21 owner change-out
   - Homepage rotating banner "Explore X" CTAs: Metec -> /coming-soon; HydroSpade -> /hydrospade (was #).
   - "Explore Smart Outdoor Products" Metec card + /brands Metec tile -> /coming-soon (no Metec page yet).
   - /brands dealer-strip: approved supporting tagline; "Apply for Dealership" + "Dealer Portal" -> /coming-soon.
   (Brinemasters removal, image swaps, brand-page centering live in boot-head.css; nav/footer menu data above.) */
(function(){
  function ready(fn){ if(document.readyState!==`loading`)fn(); else document.addEventListener(`DOMContentLoaded`,fn); }
  function run(){
    /* (1) Rotating-banner "Explore X" CTAs */
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=hero-slide] a`),function(a){
      var t=(a.textContent||``).trim();
      if(t===`Explore Metec`)a.setAttribute(`href`,`/coming-soon`);
      else if(t===`Explore Hydro-Spade`||t===`Explore HydroSpade`)a.setAttribute(`href`,`/hydrospade`);
    });
    /* (2) Homepage "Explore Smart Outdoor Products" Metec card -> coming soon */
    Array.prototype.forEach.call(document.querySelectorAll(`a[data-soe=brand-card-h]`),function(a){
      var n=a.querySelector(`[data-soe=brand-card-name]`);
      if(n && n.textContent.trim()===`Metec`)a.setAttribute(`href`,`/coming-soon`);
    });
    /* (3) /brands Metec tile -> coming soon */
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=brand-card]`),function(card){
      var h3=card.querySelector(`[data-soe=brand-card-h3]`);
      if(!h3 || h3.textContent.trim()!==`Metec`)return;
      var link=card.querySelector(`[data-soe=brand-card-link-large]`);
      if(link)link.setAttribute(`href`,`/coming-soon`);
    });
    /* (4) /brands dealer-strip: approved tagline + both CTAs -> coming soon */
    var dsh=document.querySelector(`[data-soe=dealer-strip-h2]`);
    if(dsh)dsh.textContent=`Let's build better outdoors by working smarter, not harder. Together.`;
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=dealer-strip-ctas] a`),function(a){
      a.setAttribute(`href`,`/coming-soon`);
    });
    /* (5) Homepage banner: Hydro-Spade slide lede -> full brand-page line (match /hydrospade). */
    Array.prototype.forEach.call(document.querySelectorAll(`[data-soe=hero-slide] [data-soe=hero-lede]`),function(l){
      if((l.textContent||``).trim()===`Designed with your work in mind.`) l.textContent=`Designed with your work in mind — Super versatile. Easy to operate. Easy to maintain.`;
    });
  }
  ready(run); setTimeout(run,600); setTimeout(run,1500);
})();


/* === boot-fixes-v2xx === Reveal the header only AFTER the nav labels, CTA and phone are rebuilt —
   kills the "native header flashes, then corrects" glitch on load + navigation. Registered last, so
   its DOMContentLoaded callback runs after every other enhancer (v2hh runAll, v2ll runAll/siteWide). */
(function(){
  function reveal(){ try{ document.documentElement.setAttribute(`data-soe-chrome`,`ready`); }catch(e){} }
  function go(){ if(window.requestAnimationFrame) requestAnimationFrame(reveal); else reveal(); }
  if(document.readyState===`loading`) document.addEventListener(`DOMContentLoaded`,go); else go();
})();
