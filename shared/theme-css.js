export const ASUKA_CSS = String.raw`
body[data-dsh-asuka-interface] {
  color: #241619;
  background-color: #e9e2dc;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.62), rgba(231, 220, 214, 0.78)),
    repeating-linear-gradient(90deg, rgba(100, 18, 24, 0.055) 0 1px, transparent 1px 72px),
    repeating-linear-gradient(0deg, rgba(100, 18, 24, 0.045) 0 1px, transparent 1px 72px),
    radial-gradient(circle at 78% 42%, rgba(255, 59, 48, 0.2), transparent 38%);
  background-attachment: fixed;
  --asuka-red: #e52521;
  --asuka-signal: #ff3b30;
  --asuka-deep-red: #7f0f18;
  --asuka-carbon: #140b0d;
  --asuka-panel: rgba(248, 244, 238, 0.82);
  --asuka-line: rgba(151, 23, 31, 0.34);
  --asuka-green: #9bf00b;
  --asuka-amber: #ffbd2e;
  --asuka-sidebar-width: 280px;
  --asuka-shadow: 0 18px 48px rgba(63, 8, 14, 0.18), 0 2px 8px rgba(30, 6, 9, 0.12);

  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(250, 247, 242, 0.9);
  --dsw-alias-bg-layer-2: rgba(241, 234, 228, 0.94);
  --dsw-alias-bg-layer-3: rgba(232, 222, 217, 0.96);
  --dsw-alias-bg-overlay: rgba(251, 248, 244, 0.98);
  --dsw-alias-border-l1: rgba(117, 20, 28, 0.16);
  --dsw-alias-border-l2-darkmode-thin: rgba(117, 20, 28, 0.26);
  --dsw-alias-border-l2: rgba(117, 20, 28, 0.3);
  --dsw-alias-border-l3: rgba(229, 37, 33, 0.58);
  --dsw-alias-brand-primary: #d82020;
  --dsw-alias-brand-text: #861019;
  --dsw-alias-button-elevated-fill: rgba(255, 251, 246, 0.92);
  --dsw-alias-button-floating-fill: rgba(255, 251, 246, 0.96);
  --dsw-alias-button-floating-hover: #f4ddd8;
  --dsw-alias-button-info-fill: #d82020;
  --dsw-alias-button-info-hover: #b31519;
  --dsw-alias-interactive-bg-active: rgba(229, 37, 33, 0.16);
  --dsw-alias-interactive-bg-hover: rgba(229, 37, 33, 0.09);
  --dsw-alias-interactive-bg-hover-solid: #f4ded9;
  --dsw-alias-label-primary: #241619;
  --dsw-alias-label-primary-bluish: #45151b;
  --dsw-alias-label-secondary: #6f4e52;
  --dsw-alias-label-tertiary: #907276;
  --dsw-alias-label-caption: #a78c8e;
  --dsw-alias-state-business-primary: #d82020;
  --dsw-alias-state-business-tertiary: #f5d7d3;
  --dsw-shadow-lv2: var(--asuka-shadow);
  --dsw-specific-input-major: rgba(255, 251, 246, 0.9);
  --dsw-specific-selector: rgba(242, 230, 225, 0.94);
  --dsw-specific-sidebar-fill: rgba(20, 11, 13, 0.97);
}

body[data-dsh-asuka-interface][data-ds-dark-theme] {
  color: #f4e9e7;
  background-color: #0c0709;
  background-image:
    linear-gradient(rgba(10, 6, 8, 0.78), rgba(17, 8, 11, 0.94)),
    repeating-linear-gradient(90deg, rgba(255, 65, 55, 0.095) 0 1px, transparent 1px 72px),
    repeating-linear-gradient(0deg, rgba(255, 65, 55, 0.075) 0 1px, transparent 1px 72px),
    radial-gradient(circle at 76% 40%, rgba(239, 32, 35, 0.3), transparent 42%);
  --asuka-panel: rgba(24, 13, 16, 0.84);
  --asuka-line: rgba(255, 75, 65, 0.38);
  --asuka-shadow: 0 20px 58px rgba(0, 0, 0, 0.46), 0 2px 10px rgba(0, 0, 0, 0.34);
  --dsw-alias-bg-base: transparent;
  --dsw-alias-bg-layer-1: rgba(24, 14, 17, 0.92);
  --dsw-alias-bg-layer-2: rgba(36, 19, 23, 0.94);
  --dsw-alias-bg-layer-3: rgba(50, 25, 29, 0.96);
  --dsw-alias-bg-overlay: rgba(19, 10, 13, 0.98);
  --dsw-alias-border-l1: rgba(255, 100, 90, 0.18);
  --dsw-alias-border-l2-darkmode-thin: rgba(255, 100, 90, 0.28);
  --dsw-alias-border-l2: rgba(255, 100, 90, 0.34);
  --dsw-alias-border-l3: rgba(255, 75, 65, 0.64);
  --dsw-alias-brand-primary: #ff5147;
  --dsw-alias-brand-text: #ffdbd7;
  --dsw-alias-button-elevated-fill: rgba(49, 25, 29, 0.96);
  --dsw-alias-button-floating-fill: rgba(55, 27, 32, 0.98);
  --dsw-alias-button-floating-hover: #642d31;
  --dsw-alias-button-info-fill: #e62c28;
  --dsw-alias-button-info-hover: #ff4d42;
  --dsw-alias-interactive-bg-active: rgba(255, 59, 48, 0.23);
  --dsw-alias-interactive-bg-hover: rgba(255, 108, 95, 0.12);
  --dsw-alias-interactive-bg-hover-solid: #4d2429;
  --dsw-alias-label-primary: #f7ecea;
  --dsw-alias-label-primary-bluish: #ffe0dc;
  --dsw-alias-label-secondary: #d4b6b7;
  --dsw-alias-label-tertiary: #ad8b8e;
  --dsw-alias-label-caption: #8e6d70;
  --dsw-alias-state-business-primary: #ff5147;
  --dsw-alias-state-business-tertiary: #522329;
  --dsw-specific-input-major: rgba(30, 15, 19, 0.94);
  --dsw-specific-selector: rgba(58, 29, 34, 0.94);
  --dsw-specific-sidebar-fill: rgba(11, 7, 8, 0.98);
}

body[data-dsh-asuka-interface] [id='root'] {
  position: relative;
  z-index: 2;
  background: transparent;
}

body[data-dsh-asuka-interface] [data-skin-chrome='asuka-character-stage'] {
  position: fixed;
  inset: 0;
  z-index: 1;
  overflow: hidden;
  pointer-events: none;
  contain: strict;
}

body[data-dsh-asuka-interface] [data-asuka-character] {
  position: absolute;
  right: clamp(-120px, -4vw, -28px);
  bottom: -2.5vh;
  width: auto;
  height: min(94vh, 1040px);
  opacity: 0.96;
  filter: drop-shadow(-18px 18px 30px rgba(35, 0, 5, 0.38));
  transform-origin: right bottom;
  transition: opacity 420ms ease, transform 520ms cubic-bezier(0.22, 0.75, 0.2, 1), filter 420ms ease;
}

body[data-dsh-asuka-interface] [data-asuka-hud-ring] {
  position: absolute;
  right: clamp(80px, 13vw, 260px);
  top: 42%;
  width: min(46vw, 680px);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 61, 51, 0.34);
  border-radius: 50%;
  opacity: 0.72;
  background:
    conic-gradient(from 14deg, transparent 0 8deg, rgba(255, 59, 48, 0.74) 8deg 9deg, transparent 9deg 28deg),
    radial-gradient(circle, transparent 0 48%, rgba(255, 59, 48, 0.12) 48.2% 48.7%, transparent 49% 62%, rgba(155, 240, 11, 0.14) 62.2% 62.7%, transparent 63%);
  transform: translate(50%, -50%) rotate(-14deg);
  animation: asuka-hud-rotate 28s linear infinite;
}

body[data-dsh-asuka-interface]:has([data-phase='active'] [data-chat-flow]) [data-asuka-character] {
  opacity: 0.16;
  filter: saturate(0.72) drop-shadow(-12px 14px 22px rgba(35, 0, 5, 0.28));
  transform: translateX(17%) scale(0.94);
}

body[data-dsh-asuka-interface]:has([data-phase='active'] [data-chat-flow]) [data-asuka-hud-ring] {
  opacity: 0.26;
}

body[data-dsh-asuka-interface] [data-skin-chrome='asuka-alert-rail'] {
  position: fixed;
  top: var(--asuka-titlebar-height, 0px);
  left: var(--asuka-sidebar-width);
  right: 0;
  z-index: 4;
  height: 6px;
  pointer-events: none;
  background: repeating-linear-gradient(135deg, #ff4439 0 20px, #1a0b0e 20px 40px);
  box-shadow: 0 2px 14px rgba(255, 45, 40, 0.42);
  transition: left 180ms ease;
}

body[data-dsh-asuka-interface] [data-skin-chrome='asuka-alert-rail']::after {
  content: 'UNIT-02 // COMMAND INTERFACE';
  position: absolute;
  top: 10px;
  right: 22px;
  padding: 5px 10px 4px;
  border: 1px solid rgba(255, 83, 72, 0.5);
  color: #ffb7b0;
  background: rgba(18, 7, 9, 0.78);
  font: 700 10px/1.1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.16em;
  backdrop-filter: blur(8px);
}

body[data-dsh-asuka-interface] [data-skin-chrome='asuka-titlebar-brand'] {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 100%;
  padding-inline: 12px;
  color: #f7e9e7;
  font: 800 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.14em;
  pointer-events: none;
}

body[data-dsh-asuka-interface] [data-skin-chrome='asuka-titlebar-brand']::before {
  content: '02';
  display: grid;
  place-items: center;
  width: 25px;
  height: 18px;
  border: 1px solid #ff5a50;
  color: #fff;
  background: #c51f20;
  font-size: 10px;
}

body[data-dsh-asuka-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) {
  --dsw-alias-label-primary: #f7ecea;
  --dsw-alias-label-secondary: #d9bdbe;
  --dsw-alias-label-tertiary: #ad8a8d;
  --dsw-alias-label-caption: #8e6a6e;
  --dsw-alias-border-l1: rgba(255, 82, 72, 0.16);
  --dsw-alias-border-l2: rgba(255, 82, 72, 0.28);
  --dsw-alias-interactive-bg-hover: rgba(255, 88, 76, 0.1);
  --dsw-alias-interactive-bg-active: rgba(255, 59, 48, 0.24);
  position: relative;
  z-index: 6;
  border-right: 1px solid rgba(255, 75, 64, 0.55);
  color: #f7ecea;
  background: #0d080a;
  box-shadow: 10px 0 36px rgba(20, 0, 4, 0.28), inset -3px 0 rgba(127, 15, 24, 0.52);
}

body[data-dsh-asuka-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div {
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(100deg, transparent 0 86%, rgba(255, 64, 54, 0.08) 86% 87%, transparent 87%),
    radial-gradient(circle at 50% 14%, rgba(183, 24, 29, 0.24), transparent 34%),
    repeating-linear-gradient(0deg, rgba(255,255,255,0.018) 0 1px, transparent 1px 5px),
    linear-gradient(180deg, #181013, #0b0709 72%);
}

body[data-dsh-asuka-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div::before {
  content: 'UNIT 02';
  position: absolute;
  right: -18px;
  bottom: 124px;
  z-index: 0;
  color: rgba(255, 69, 58, 0.08);
  font: 900 54px/1 Arial, sans-serif;
  letter-spacing: -0.08em;
  transform: rotate(-90deg);
  pointer-events: none;
}

body[data-dsh-asuka-interface] :is([data-pane='sidebar'], [class*='sidebarCol']) > div > * {
  position: relative;
  z-index: 1;
}

body[data-dsh-asuka-interface] button[class*='brand'] > svg {
  color: #f7ecea;
  filter: drop-shadow(0 0 8px rgba(255, 55, 45, 0.24));
}

body[data-dsh-asuka-interface] button[class*='newSession'] {
  min-height: 40px;
  border: 1px solid rgba(255, 91, 79, 0.55);
  border-radius: 7px;
  color: #fff6f3;
  background: linear-gradient(180deg, #d62a27, #9f171d);
  box-shadow: 0 7px 18px rgba(119, 9, 17, 0.26), inset 0 1px rgba(255, 188, 180, 0.24);
  font-weight: 720;
  letter-spacing: 0.02em;
}

body[data-dsh-asuka-interface] button[class*='newSession']:hover {
  background: linear-gradient(180deg, #ef3a33, #b51c20);
  box-shadow: 0 0 0 2px rgba(255, 76, 65, 0.15), 0 8px 20px rgba(119, 9, 17, 0.34);
}

body[data-dsh-asuka-interface] [role='treeitem'][aria-selected='true'] {
  border-left: 2px solid var(--asuka-signal);
  background: linear-gradient(90deg, rgba(255, 59, 48, 0.22), rgba(255, 59, 48, 0.03));
  box-shadow: inset 10px 0 18px rgba(255, 59, 48, 0.06);
}

body[data-dsh-asuka-interface] [role='treeitem'][aria-selected='true']::after {
  content: '';
  position: absolute;
  right: 8px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--asuka-green);
  box-shadow: 0 0 8px rgba(155, 240, 11, 0.72);
}

body[data-dsh-asuka-interface] :is([data-pane='conversation'], [class*='centerCol']) {
  position: relative;
  z-index: 3;
  background: transparent;
}

body[data-dsh-asuka-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] {
  color: #f8ecea;
  border-bottom: 1px solid rgba(255, 77, 66, 0.34);
  background:
    linear-gradient(90deg, rgba(18, 8, 10, 0.94), rgba(71, 10, 16, 0.82) 58%, rgba(18, 8, 10, 0.86));
  box-shadow: 0 8px 24px rgba(32, 2, 6, 0.14);
  backdrop-filter: blur(14px) saturate(1.1);
}

body[data-dsh-asuka-interface] :is([data-pane='conversation'], [class*='centerCol']) header[class*='header'] :is(nav, span, button, a, div) {
  color: inherit;
}

body[data-dsh-asuka-interface] button[class*='tabActive'] {
  color: #fff7f5;
  border-bottom-color: var(--asuka-signal);
  text-shadow: 0 0 12px rgba(255, 71, 60, 0.42);
}

body[data-dsh-asuka-interface] [data-phase='hero'] {
  --dsh-chat-content-width: clamp(560px, 44vw, 760px);
  --dsh-composer-card-max-width: calc(var(--dsh-chat-content-width) + 32px);
}

body[data-dsh-asuka-interface] [data-phase='hero'] [class*='headline'] {
  position: relative;
  color: #3a1117;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-weight: 850;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  text-shadow: 0 1px rgba(255,255,255,0.7), 0 8px 28px rgba(93, 9, 16, 0.18);
}

body[data-dsh-asuka-interface][data-ds-dark-theme] [data-phase='hero'] [class*='headline'] {
  color: #fff1ee;
  text-shadow: 0 2px 7px rgba(0,0,0,0.78), 0 0 22px rgba(255, 54, 45, 0.24);
}

body[data-dsh-asuka-interface] [data-composer-card] {
  isolation: isolate;
  overflow: visible;
  border: 1px solid rgba(217, 35, 34, 0.58);
  border-radius: 10px;
  background:
    linear-gradient(120deg, rgba(255,255,255,0.48), transparent 28%),
    var(--dsw-specific-input-major);
  box-shadow: var(--asuka-shadow), inset 0 1px rgba(255,255,255,0.48);
  backdrop-filter: blur(18px) saturate(1.08);
}

body[data-dsh-asuka-interface] [data-composer-card]::before {
  content: '';
  position: absolute;
  inset: -1px;
  z-index: -1;
  border-radius: inherit;
  pointer-events: none;
  background:
    linear-gradient(90deg, var(--asuka-signal) 0 42px, transparent 42px calc(100% - 42px), var(--asuka-signal) calc(100% - 42px)) top / 100% 2px no-repeat,
    linear-gradient(90deg, var(--asuka-signal) 0 42px, transparent 42px calc(100% - 42px), var(--asuka-signal) calc(100% - 42px)) bottom / 100% 2px no-repeat;
}

body[data-dsh-asuka-interface] [data-composer-card]::after {
  content: '02';
  position: absolute;
  top: -14px;
  left: 18px;
  padding: 4px 9px;
  border: 1px solid #ff5e54;
  color: #fff7f5;
  background: #b9181d;
  font: 900 10px/1 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.12em;
  box-shadow: 0 4px 12px rgba(72, 3, 9, 0.22);
}

body[data-dsh-asuka-interface] [data-phase='hero'] [data-composer-card] {
  min-height: 168px;
  background:
    linear-gradient(120deg, rgba(255,255,255,0.5), transparent 32%),
    rgba(251, 246, 241, 0.76);
}

body[data-dsh-asuka-interface][data-ds-dark-theme] [data-phase='hero'] [data-composer-card] {
  background:
    linear-gradient(120deg, rgba(255, 87, 74, 0.08), transparent 32%),
    rgba(22, 11, 14, 0.78);
}

body[data-dsh-asuka-interface] [data-input-mirror] {
  min-height: 0;
  transition: min-height 460ms cubic-bezier(0.22, 0.78, 0.2, 1);
}

body[data-dsh-asuka-interface] [data-phase='hero'] [data-input-mirror] {
  min-height: 74px;
}

body[data-dsh-asuka-interface] [data-composer-card] button[class*='primary'] {
  color: #fff;
  background: linear-gradient(180deg, #f24238, #ba1b20);
  box-shadow: 0 5px 14px rgba(137, 8, 16, 0.28), inset 0 1px rgba(255,255,255,0.22);
}

body[data-dsh-asuka-interface] [data-composer-card] button:hover:not(:disabled) {
  border-color: rgba(255, 66, 55, 0.65);
  color: var(--asuka-signal);
}

body[data-dsh-asuka-interface] [data-composer-card] button[class*='primary']:hover:not(:disabled) {
  color: #fff;
  background: linear-gradient(180deg, #ff564b, #d32327);
}

body[data-dsh-asuka-interface] [class*='ConversationRoot'],
body[data-dsh-asuka-interface] [data-conversation-scroll] {
  background: transparent;
}

body[data-dsh-asuka-interface] [class*='userRow'] [class*='bubble'] {
  border: 1px solid rgba(229, 37, 33, 0.42);
  border-radius: 10px 10px 2px 10px;
  background: rgba(248, 233, 229, 0.94);
  box-shadow: 0 7px 22px rgba(78, 8, 15, 0.1);
}

body[data-dsh-asuka-interface][data-ds-dark-theme] [class*='userRow'] [class*='bubble'] {
  color: #ffeceb;
  background: rgba(78, 23, 29, 0.92);
}

body[data-dsh-asuka-interface] :is([class*='assistantRow'], [class*='messageRow']) [class*='content'] {
  text-shadow: 0 1px rgba(255,255,255,0.34);
}

body[data-dsh-asuka-interface][data-ds-dark-theme] :is([class*='assistantRow'], [class*='messageRow']) [class*='content'] {
  text-shadow: 0 1px 2px rgba(0,0,0,0.6);
}

body[data-dsh-asuka-interface] [class*='thinking'],
body[data-dsh-asuka-interface] [class*='reasoning'] {
  border-left-color: var(--asuka-signal);
}

body[data-dsh-asuka-interface] [data-terminal] {
  --dsw-alias-markdown-code-block: rgba(18, 12, 14, 0.97);
  --dsw-alias-label-primary: #f5e9e7;
  --dsw-alias-label-secondary: #d2b4b6;
  --dsw-alias-label-tertiary: #a68689;
  color: #f5e9e7;
  border: 1px solid rgba(255, 69, 59, 0.28);
  box-shadow: inset 3px 0 var(--asuka-deep-red);
}

body[data-dsh-asuka-interface] :is([role='dialog'], [role='menu'], [role='listbox']) {
  border-color: rgba(229, 37, 33, 0.34);
  box-shadow: 0 18px 54px rgba(38, 2, 7, 0.28);
}

body[data-dsh-asuka-interface] :is(button, [role='button'], [role='tab'], [role='treeitem']):focus-visible {
  outline: 2px solid var(--asuka-signal);
  outline-offset: 2px;
}

body[data-dsh-asuka-interface] ::selection {
  color: #fff;
  background: rgba(212, 31, 32, 0.82);
}

body[data-dsh-asuka-interface] ::-webkit-scrollbar-thumb {
  border: 3px solid transparent;
  border-radius: 8px;
  background: linear-gradient(var(--asuka-deep-red), var(--asuka-deep-red)) padding-box;
}

@keyframes asuka-hud-rotate {
  to { transform: translate(50%, -50%) rotate(346deg); }
}

@media (max-width: 1180px) {
  body[data-dsh-asuka-interface] [data-asuka-character] {
    right: -170px;
    height: 86vh;
    opacity: 0.58;
  }

  body[data-dsh-asuka-interface] [data-asuka-hud-ring] {
    right: 60px;
    width: 540px;
  }
}

@media (max-width: 880px) {
  body[data-dsh-asuka-interface] [data-asuka-character] {
    opacity: 0.1;
    transform: translateX(24%);
  }

  body[data-dsh-asuka-interface] [data-asuka-hud-ring] {
    opacity: 0.18;
  }

  body[data-dsh-asuka-interface] [data-phase='hero'] {
    --dsh-chat-content-width: min(90vw, 680px);
  }
}

@media (prefers-reduced-motion: reduce) {
  body[data-dsh-asuka-interface] [data-asuka-character],
  body[data-dsh-asuka-interface] [data-asuka-hud-ring] {
    transition: none;
    animation: none;
  }
}
`
