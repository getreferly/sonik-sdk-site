(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();const a="sonik-dialer",l=1;class c extends Error{constructor(o,r){super(r),this.code=o,this.name="DialerError"}}function d(s,o){if(!s||typeof s!="object")return!1;const r=s;return r.protocol===a&&r.version===l&&r.instanceId===o&&["hello","ready","command","result","event","ui"].includes(r.kind??"")}function p(s){if(!s||typeof s!="object")return!1;const o=s;return["signin","dialer","settings"].includes(o.view??"")&&typeof o.height=="number"&&Number.isFinite(o.height)&&o.height>0&&typeof o.authenticated=="boolean"&&typeof o.busy=="boolean"&&typeof o.simulation=="boolean"}function f(s){if(!Array.isArray(s)||s.length>1e3)throw new c("INVALID_CONTACTS","Supply at most 1,000 contacts.");const o=new Set,r=new Set;for(const e of s){if(!e||typeof e.externalId!="string"||!e.externalId.trim()||e.externalId.length>200||typeof e.phoneNumber!="string"||!/^\+[1-9]\d{6,14}$/.test(e.phoneNumber)||e.name!==void 0&&(typeof e.name!="string"||e.name.length>200)||e.company!==void 0&&(typeof e.company!="string"||e.company.length>200)||o.has(e.externalId)||r.has(e.phoneNumber))throw new c("INVALID_CONTACTS","Contacts need unique IDs and unique E.164 phone numbers.");o.add(e.externalId),r.add(e.phoneNumber)}}const u="/sonik-sdk-site/assets/sonik-logo-zmh7UyXv.svg",g="/sonik-sdk-site/assets/sonik-logo-dark-28ZYz2Ap.svg",h='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>',b=`
  :root {
    --sonik-select-bg: #ffffff;
    --sonik-select-fg: #1f2937;
    --sonik-select-border: #e5e7eb;
    --sonik-select-hover: #f3f4f6;
    --sonik-select-selected-bg: #fff0e8;
    --sonik-select-selected-fg: #b93800;
  }
  [data-theme=dark] {
    --sonik-select-bg: #1f2937;
    --sonik-select-fg: #e5e7eb;
    --sonik-select-border: #4b5563;
    --sonik-select-hover: #374151;
    --sonik-select-selected-bg: #431f15;
    --sonik-select-selected-fg: #ffb08a;
  }
  select {
    appearance: none;
    min-height: 40px;
    padding: 10px 42px 10px 12px;
    border: 1px solid var(--sonik-select-border);
    border-radius: 10px;
    background-color: var(--sonik-select-bg);
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='m4 6 4 4 4-4' stroke='%238b95a5' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 14px center;
    background-size: 16px;
    color: var(--sonik-select-fg);
    font: inherit;
    line-height: 1.4;
    cursor: pointer;
    transition: border-color .15s, box-shadow .15s;
  }
  select:hover:not(:disabled) { border-color: #9ca3af; }
  select:focus-visible {
    outline: 2px solid #ff6b2c;
    outline-offset: 2px;
  }
  select:disabled { opacity: .45; cursor: not-allowed; }
  select option {
    background: var(--sonik-select-bg);
    color: var(--sonik-select-fg);
  }
  @supports (appearance: base-select) {
    select, select::picker(select) { appearance: base-select; }
    select::picker-icon { display: none; }
    select:open { border-color: #ff6b2c; }
    select::picker(select) {
      inset: auto;
      top: anchor(bottom);
      left: anchor(left);
      min-width: anchor-size(width);
      max-height: min(260px, calc(100dvh - 24px));
      position-try-fallbacks: flip-block;
      position-try-order: most-height;
      padding: 5px;
      margin-block: 6px;
      border: 1px solid var(--sonik-select-border);
      border-radius: 12px;
      background: var(--sonik-select-bg);
      color: var(--sonik-select-fg);
      box-shadow: 0 12px 32px #00000030, 0 2px 6px #00000012;
      overscroll-behavior: contain;
      scrollbar-width: thin;
    }
    select option {
      display: flex;
      align-items: center;
      gap: 10px;
      min-height: 32px;
      padding: 7px 10px;
      border: 0;
      border-radius: 7px;
      font-weight: 400;
      white-space: normal;
      overflow-wrap: anywhere;
    }
    select option + option { margin-top: 2px; }
    select option:hover, select option:focus-visible {
      outline: none;
      background: var(--sonik-select-hover);
    }
    select option:checked {
      background: var(--sonik-select-selected-bg);
      color: var(--sonik-select-selected-fg);
      font-weight: 500;
    }
    select option::checkmark {
      order: 1;
      margin-left: auto;
      color: var(--sonik-select-selected-fg);
    }
  }
  @media (prefers-reduced-motion: reduce) {
    select { transition: none; }
  }
`;export{c as D,a as P,l as V,h as a,g as b,u as c,p as d,d as i,b as s,f as v};
