/*! SOE utility-embed.js — loaded site-wide via Webflow Site Settings (Before </body>).
    It lives here, NOT in page-level custom code, because Webflow wipes page custom code
    when a page is re-published from the Designer. Site Settings code survives publishing.
    Two guarded jobs:
      1. On /style-guide and /email-signature (after the password) -> full-bleed iframe to the hosted page.
      2. On the Webflow password gate (any URL) -> apply the SOE brand styling.
    It NEVER embeds while a password field is present, so the gate can't be bypassed. */
(function () {
  'use strict';

  var EMB = {
    '/style-guide':     { url: 'https://maddox-w.github.io/soe-cdn/style-guide/index.html',                 bg: '#F6F7F5', title: 'Smart Outdoor Equipment — Brand Style Guide' },
    '/email-signature': { url: 'https://maddox-w.github.io/soe-cdn/style-guide/email-signature-setup.html', bg: '#F6F7F5', title: 'Email Signature Setup' }
  };

  function ready() {
    try {
      var h = document.documentElement;
      h.setAttribute('data-soe-curtain', 'off');
      h.setAttribute('data-soe-chrome', 'ready');
    } catch (e) {}
  }

  function embed(cfg) {
    if (document.getElementById('soe-embed-frame')) return;
    var st = document.createElement('style');
    st.textContent =
      '#soe-curtain{display:none!important}' +
      'html,body{margin:0!important;padding:0!important;width:100%!important;height:100%!important;background:' + cfg.bg + '!important;overflow:hidden!important;opacity:1!important;visibility:visible!important}' +
      '#soe-embed-frame{position:fixed!important;inset:0!important;width:100vw!important;height:100vh!important;border:0!important;margin:0!important;display:block!important;z-index:2147483647!important;background:' + cfg.bg + '}';
    document.head.appendChild(st);
    var f = document.createElement('iframe');
    f.id = 'soe-embed-frame';
    f.src = cfg.url;
    f.title = cfg.title;
    f.setAttribute('allow', 'clipboard-write');
    f.setAttribute('referrerpolicy', 'no-referrer');
    document.body.appendChild(f);
    ready();
  }

  function brandGate() {
    var content = document.querySelector('.utility-page-content');
    if (!content || document.getElementById('soe-gate-style')) return;
    var st = document.createElement('style');
    st.id = 'soe-gate-style';
    st.textContent =
      "html,body{background:#0E1110!important;margin:0!important;padding:0!important}" +
      "#soe-curtain{display:none!important}" +
      ".utility-page-wrap{min-height:100vh!important;display:flex!important;align-items:center!important;justify-content:center!important;background:#0E1110!important;padding:24px!important;box-sizing:border-box;font-family:'Inter','Helvetica Neue',Arial,sans-serif!important}" +
      ".utility-page-content{display:flex!important;flex-direction:column!important;align-items:center!important;width:100%!important;max-width:340px!important;margin:0 auto!important;background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important;text-align:center!important;opacity:1!important}" +
      ".utility-page-form{display:flex!important;flex-direction:column!important;align-items:center!important;width:100%!important;margin:0!important;padding:0!important;background:transparent!important;border:0!important}" +
      ".utility-page-form img,.utility-page-form h2,.utility-page-form label{display:none!important}" +
      ".soe-gate-logo{display:block!important;width:200px;max-width:74%;height:auto;margin:0 0 32px}" +
      ".soe-field{display:flex!important;align-items:center!important;gap:10px!important;width:280px!important;max-width:100%!important;margin:0 auto!important;border-bottom:1.5px solid rgba(255,255,255,0.22)!important;padding-bottom:8px!important}" +
      ".soe-field input.w-input,.utility-page-content input[type=password]{flex:1 1 auto!important;width:auto!important;min-width:0!important;border:0!important;background:transparent!important;color:#fff!important;font-size:15px!important;letter-spacing:1px!important;padding:6px 0!important;margin:0!important;height:auto!important;outline:none!important;box-shadow:none!important}" +
      ".utility-page-content input::placeholder{color:#8a938a!important;letter-spacing:1px}" +
      ".soe-field input.w-button,.utility-page-content input[type=submit]{flex:0 0 auto!important;width:34px!important;height:34px!important;min-height:0!important;padding:0!important;margin:0!important;border:0!important;border-radius:50%!important;background:#8FC63D!important;color:#0E1110!important;font-size:18px!important;font-weight:700!important;line-height:1!important;cursor:pointer!important;box-shadow:none!important;-webkit-appearance:none!important;appearance:none!important}" +
      ".soe-field input.w-button:hover{background:#7DB13C!important}" +
      ".w-form-fail{margin:16px auto 0!important;background:rgba(226,75,74,0.12)!important;border:1px solid rgba(226,75,74,0.4)!important;border-radius:8px!important;padding:9px 13px!important;color:#ffb3b3!important;font-size:12.5px!important;max-width:280px}" +
      ".w-form-fail div{color:#ffb3b3!important}" +
      ".soe-gate-foot{margin-top:26px!important;font-size:11.5px!important;color:#6b746a!important;display:flex;align-items:center;gap:6px;justify-content:center}";
    document.head.appendChild(st);

    var input = document.querySelector('.w-password-page.w-input') || content.querySelector('input[type=password]');
    var btn = document.querySelector('.w-password-page.w-button') || content.querySelector('input[type=submit]');
    var logo = document.createElement('img');
    logo.className = 'soe-gate-logo';
    logo.src = 'https://cdn.jsdelivr.net/gh/maddox-w/soe-cdn@main/soe-logo-greenleaf.png';
    logo.alt = 'Smart Outdoor Equipment';
    content.insertBefore(logo, content.firstChild);
    if (input && btn) {
      var field = document.createElement('div');
      field.className = 'soe-field';
      input.parentNode.insertBefore(field, input);
      field.appendChild(input);
      field.appendChild(btn);
    }
    var foot = document.createElement('div');
    foot.className = 'soe-gate-foot';
    foot.innerHTML = '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#6b746a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-1px"><rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Protected — Smart Outdoor Equipment';
    content.appendChild(foot);
    if (input) { try { input.setAttribute('placeholder', 'Password'); } catch (e) {} }
    if (btn) { try { btn.value = '→'; } catch (e) {} }
    ready();
  }

  function run() {
    try {
      // If ANY password field/utility form is present, this is the gate -> brand it, never embed.
      if (document.querySelector('.utility-page-form, .w-password-page') || document.querySelector('input[type="password"]')) {
        brandGate();
        return;
      }
      var cfg = EMB[(location.pathname.replace(/\/+$/, '') || '/')];
      if (cfg) embed(cfg);
    } catch (e) {}
  }

  if (document.readyState !== 'loading') run();
  else document.addEventListener('DOMContentLoaded', run);
})();
