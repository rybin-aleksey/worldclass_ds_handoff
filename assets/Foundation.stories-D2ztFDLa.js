import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BJpw_U5F.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";var r,i,a,o,s,c,l,ee,te,u,d,f,p,m,h,g;function _(){return(_=e((()=>{r=`_page_vmrb8_1`,i=`_group_vmrb8_8`,a=`_muted_vmrb8_13`,o=`_ref_vmrb8_14`,s=`_note_vmrb8_15`,c=`_swatches_vmrb8_17`,l=`_swatch_vmrb8_17`,ee=`_color_vmrb8_27`,te=`_row_vmrb8_33`,u=`_sample_vmrb8_41`,d=`_bar_vmrb8_42`,f=`_radius_vmrb8_47`,p=`_motionBox_vmrb8_53`,m=`_textRow_vmrb8_65`,h=`_textMeta_vmrb8_73`,g={page:r,group:i,muted:a,ref:o,note:s,swatches:c,swatch:l,color:ee,row:te,sample:u,bar:d,radius:f,motionBox:p,textRow:m,textMeta:h}})))()}function v(e){let[t,n]=(0,w.useState)(``);return(0,w.useEffect)(()=>{n(getComputedStyle(document.documentElement).getPropertyValue(`--${e}`).trim())},[e]),t}function y({title:e,lead:t,children:n}){return(0,T.jsxs)(`div`,{className:g.page,children:[(0,T.jsx)(`h1`,{className:`ds-heading-medium_bold`,children:e}),t&&(0,T.jsx)(`p`,{className:`${g.muted} ds-cart-text-20`,children:t}),n]})}function b({title:e,children:t}){return(0,T.jsxs)(`section`,{className:g.group,children:[(0,T.jsx)(`h2`,{className:`ds-heading-text-18`,children:e}),t]})}function ne({token:e}){let t=v(e.name);return(0,T.jsxs)(`div`,{className:g.swatch,children:[(0,T.jsx)(`span`,{className:g.color,style:{background:`var(--${e.name})`}}),(0,T.jsxs)(`code`,{className:`ds-caption-small-16`,children:[`--`,e.name]}),e.ref?(0,T.jsxs)(`span`,{className:`${g.ref} ds-caption-small-12`,children:[`→ --`,e.ref]}):null,(0,T.jsx)(`span`,{className:`${g.muted} ds-caption-small-12`,children:t||e.value}),e.note&&(0,T.jsx)(`span`,{className:`${g.note} ds-caption-small-12`,children:e.note})]})}function x({tokens:e}){return(0,T.jsx)(`div`,{className:g.swatches,children:e.map(e=>(0,T.jsx)(ne,{token:e},e.name))})}function S({token:e,sample:t}){let n=v(e.name);return(0,T.jsxs)(`div`,{className:g.row,children:[(0,T.jsxs)(`code`,{className:`ds-caption-small-16`,children:[`--`,e.name]}),(0,T.jsx)(`span`,{className:`${g.muted} ds-caption-small-16`,children:n||e.value}),(0,T.jsx)(`div`,{className:g.sample,children:t})]})}function C({className:e,title:t}){let n=(0,w.useRef)(null),[r,i]=(0,w.useState)(``);return(0,w.useEffect)(()=>{if(!n.current)return;let e=getComputedStyle(n.current);i(`${e.fontSize} / ${e.lineHeight} · ${e.fontWeight} · ${e.letterSpacing}`)},[e]),(0,T.jsxs)(`div`,{className:g.textRow,children:[(0,T.jsxs)(`div`,{className:g.textMeta,children:[(0,T.jsxs)(`code`,{className:`ds-caption-small-16`,children:[`.`,e]}),(0,T.jsx)(`span`,{className:`${g.muted} ds-caption-small-12`,children:t}),(0,T.jsx)(`span`,{className:`${g.muted} ds-caption-small-12`,children:r})]}),(0,T.jsx)(`span`,{ref:n,className:e,children:`Персональная тренировка в клубе RedSide`})]})}var w,T;function E(){return(E=e((()=>{w=t(),_(),T=n(),y.__docgenInfo={description:``,methods:[],displayName:`Page`,props:{title:{required:!0,tsType:{name:`string`},description:``},lead:{required:!1,tsType:{name:`ReactNode`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},b.__docgenInfo={description:``,methods:[],displayName:`Group`,props:{title:{required:!0,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactNode`},description:``}}},ne.__docgenInfo={description:`Свотч цвета: имя, значение в CSS, ссылка на примитив и вычисленное значение.`,methods:[],displayName:`Swatch`,props:{token:{required:!0,tsType:{name:`Token`},description:``}}},x.__docgenInfo={description:``,methods:[],displayName:`Swatches`,props:{tokens:{required:!0,tsType:{name:`Array`,elements:[{name:`Token`}],raw:`Token[]`},description:``}}},S.__docgenInfo={description:`Строка токена с наглядным образцом (ширина, радиус, текст).`,methods:[],displayName:`TokenRow`,props:{token:{required:!0,tsType:{name:`Token`},description:``},sample:{required:!0,tsType:{name:`ReactNode`},description:``}}},C.__docgenInfo={description:`Метрики текстового стиля, прочитанные из отрендеренного узла.`,methods:[],displayName:`TextStyleRow`,props:{className:{required:!0,tsType:{name:`string`},description:``},title:{required:!0,tsType:{name:`string`},description:``}}}})))()}var D;function O(){return(O=e((()=>{D=`/*
 * Primitive tokens — слой 1 ДС World Class.
 * Источник: ds/foundation.md + Figma Variables (World Class – Redesign, NXZc8qyHamVPiilIhuS3gM), сверка 2026-11-11.
 * Правило имён: путь Figma, "/" → "-", префикс "primitives/" опускается,
 * пробелы → "-" ("border radius/3" → --border-radius-3).
 * Литералы допустимы только в этом файле.
 */
:root {
  /* ===== Colors / primitives ===== */

  /* primitives/gray/* */
  --gray-0: #FFFFFF;
  --gray-50: #F8F8FA;
  --gray-100: #DEDFE2;
  --gray-150: #C5C7CB;
  --gray-200: #ADAFB5;
  --gray-300: #9598A0;
  --gray-400: #7E828A;
  --gray-500: #686C75;
  --gray-600: #53575F;
  --gray-700: #3F4249;
  --gray-800: #2D2F34;
  --gray-850: #1C1D20;
  --gray-900: #0B0C0E;
  --gray-950: #020202;
  --gray-1000: #000000;

  /* primitives/brand/* */
  --brand-0: #FFFFFF;
  --brand-50: #FDE9EA;
  --brand-100: #FAC8CA;
  --brand-150: #F7ADB1;
  --brand-200: #F49096;
  --brand-300: #F16F76;
  --brand-400: #ED4D56;
  --brand-500: #E9212C;
  --brand-600: #C61C25;
  --brand-700: #A3171F;
  --brand-800: #8C141A;
  --brand-850: #801218;
  --brand-900: #751116;
  --brand-950: #520C0F;
  --brand-1000: #33070A;

  /* primitives/error/* */
  --error-0: #FFFFFF;
  --error-50: #FBEAE8;
  --error-100: #F6CBC5;
  --error-150: #F2B1A8;
  --error-200: #EC958A;
  --error-300: #E67467;
  --error-400: #E15444;
  --error-500: #D92915;
  --error-600: #B82312;
  --error-700: #981D0F;
  --error-800: #82190D;
  --error-850: #77170C;
  --error-900: #6C150B;
  --error-950: #4C0E07;
  --error-1000: #300B05;

  /* primitives/success/* */
  --success-0: #FFFFFF;
  --success-50: #E4F3EA;
  --success-100: #BDE1CA;
  --success-150: #9AD3AF;
  --success-200: #74C493;
  --success-300: #42B470;
  --success-400: #0CA453;
  --success-500: #049137;
  --success-600: #047B2E;
  --success-700: #006525;
  --success-800: #005620;
  --success-850: #014F1D;
  --success-900: #004819;
  --success-950: #003212;
  --success-1000: #002009;

  /* primitives/warning/* */
  --warning-0: #FFFFFF;
  --warning-50: #FEF4E6;
  --warning-100: #FCE3BF;
  --warning-150: #FBD6A0;
  --warning-200: #F9C880;
  --warning-300: #F7B859;
  --warning-400: #F5A733;
  --warning-500: #F29100;
  --warning-600: #CE7B00;
  --warning-700: #A96500;
  --warning-800: #915700;
  --warning-850: #854F00;
  --warning-900: #794800;
  --warning-950: #553300;
  --warning-1000: #372104;

  /* ===== Typography / font/* ===== */
  /* Avenir Next Cyr — коммерческий шрифт, в проект не вложен: ниже фолбэки. */
  --font-family-headings: "Avenir Next Cyr", "Avenir Next", "Montserrat", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-family-subtitles: var(--font-family-headings);
  --font-family-body: var(--font-family-headings);
  --font-family-captions: var(--font-family-headings);
  --font-family-buttons: var(--font-family-headings);

  --font-weight-regular: 400;   /* Regular */
  --font-weight-medium: 500;    /* Medium */
  --font-weight-demibold: 600;  /* Demi */

  --font-size-xxs: 12px;
  --font-size-xs: 14px;
  --font-size-sm: 16px;
  --font-size-md: 18px;
  --font-size-xl: 20px;
  --font-size-2xl: 24px;
  --font-size-3xl: 36px;
  --font-size-4xl: 48px;
  --font-size-5xl: 60px;
  --font-size-6xl: 96px;

  --font-line-height-4xs: 12px;
  --font-line-height-3xs: 14px;
  --font-line-height-2xs: 16px;
  --font-line-height-xs: 18px;
  --font-line-height-sm: 20px;
  --font-line-height-md: 24px;
  --font-line-height-xl: 28px;
  --font-line-height-2xl: 32px;
  --font-line-height-3xl: 40px;
  --font-line-height-4xl: 48px;
  --font-line-height-5xl: 60px;
  --font-line-height-6xl: 116px;

  --font-letter-spacing-xs: -0.15px;
  --font-letter-spacing-sm: -0.31px;
  --font-letter-spacing-md: -0.44px;
  --font-letter-spacing-xl: -0.45px;

  /* ===== Dimensions / border radius/* ===== */
  --border-radius-0: 0px;
  --border-radius-05: 2px;
  --border-radius-1: 4px;
  --border-radius-2: 8px;
  --border-radius-3: 12px;
  --border-radius-4: 16px;
  --border-radius-6: 24px;
  --border-radius-100: 400px;

  /* ===== Dimensions / spacing/* ===== */
  --spacing-0: 0px;
  --spacing-05: 2px;
  --spacing-1: 4px;
  --spacing-15: 6px;
  --spacing-2: 8px;
  --spacing-3: 12px;
  --spacing-4: 16px;
  --spacing-5: 20px;
  --spacing-6: 24px;
  --spacing-8: 32px;
  --spacing-9: 36px;
  --spacing-10: 40px;
  --spacing-12: 48px;
  --spacing-16: 64px;
  --spacing-20: 80px;

  /* ===== Сырые значения смысловых токенов =====
   * В Figma эти смысловые токены заданы hex, а не ссылкой на примитив
   * (foundation.md, «Замечания»). Чтобы semantics.css ссылался только на var(),
   * значения вынесены сюда под префиксом raw-. Это не новые токены ДС:
   * имя = имя смыслового токена. Убрать, когда в Figma появятся привязки. */
  --raw-bg-pictureBg: #D4D8E2;
  --raw-bg-whiteOverlay10: rgb(255 255 255 / 0.1);
  --raw-typography-success: #00AE54;
  --raw-typography-danger: #E9222A;
  --raw-clubs-red: #E9212C;
  --raw-clubs-green: #14934B;
  --raw-clubs-black: #401F15;
  --raw-goals-wellness: #BBCFA7;
  --raw-goals-weight-loss: #DFA1FF;
  --raw-goals-sport-recovery: #FF0000;
  --raw-goals-improve-health: #536EFF;
  --raw-goals-muscle-gain: #9C0000;
  --raw-rating-star: #FFB800;
}
`})))()}var k;function A(){return(A=e((()=>{k=`/*
 * Semantic + component tokens — слои 2 и 3 ДС World Class.
 * Каждый токен ссылается на примитив через var(). Литералов здесь нет.
 * Значения сверены с Figma Variables 2026-11-11. Где Figma расходится с foundation.md,
 * взято значение из Figma (помечено «Figma ≠ md»).
 * Правило имён: путь Figma, "/" → "-", пробелы → "-", "&" опускается.
 */
:root {
  /* ===== bg/* ===== */
  --bg-mainWhite: var(--gray-0);
  --bg-baseGray: var(--gray-50);
  --bg-pictureBg: var(--raw-bg-pictureBg);        /* сырое в Figma */
  --bg-grabber: var(--gray-150);
  --bg-whiteOverlay10: var(--raw-bg-whiteOverlay10); /* сырое в Figma */

  /* ===== typography/* (цвет текста) ===== */
  --typography-primary: var(--gray-800);
  --typography-secondary: var(--gray-300);
  --typography-white: var(--gray-50);             /* не чисто белый */
  --typography-onDark: var(--gray-0);
  --typography-success: var(--raw-typography-success); /* сырое в Figma */
  --typography-danger: var(--raw-typography-danger);   /* сырое в Figma */

  /* ===== border/* ===== */
  --border-default: var(--gray-100);
  --border-light: var(--gray-50);

  /* ===== icons/* ===== */
  --icons-primaryLine: var(--gray-800);
  --icons-secondaryLine: var(--gray-300);
  --icons-onDark: var(--gray-0);

  /* ===== tech/* ===== */
  --tech-error: var(--error-500);
  --tech-success: var(--success-400);

  /* ===== clubs/* (бренды сетей) ===== */
  --clubs-red: var(--raw-clubs-red);
  --clubs-green: var(--raw-clubs-green);
  --clubs-black: var(--raw-clubs-black);

  /* ===== goals/* ===== */
  --goals-wellness: var(--raw-goals-wellness);
  --goals-weight-loss: var(--raw-goals-weight-loss);
  --goals-sport-recovery: var(--raw-goals-sport-recovery);
  --goals-improve-health: var(--raw-goals-improve-health);
  --goals-muscle-gain: var(--raw-goals-muscle-gain);

  /* ===== rating/* ===== */
  --rating-star: var(--raw-rating-star);

  /* ===== Слой 3: buttons/* ===== */
  --buttons-primary-default-bg: var(--gray-800);   /* Figma ≠ md (в md gray/900) */
  --buttons-primary-default-text: var(--gray-50);
  --buttons-primary-active-bg: var(--gray-700);    /* Figma ≠ md (в md gray/800) */
  --buttons-primary-disable-bg: var(--gray-50);
  --buttons-primary-disable-text: var(--gray-300);
  --buttons-secondary-default-bg: var(--gray-0);
  --buttons-secondary-default-text: var(--gray-800);
  --buttons-secondary-default-border: var(--gray-100);
  --buttons-secondary-active-bg: var(--gray-50);
  --buttons-secondary-active-border: var(--gray-100);
  --buttons-secondary-disable-border: var(--gray-50);
  --buttons-secondary-disable-text: var(--gray-300);
  --buttons-close-bg: var(--gray-100);
  --buttons-close-bgDark: var(--gray-500);

  /* ===== Слой 3: chips/* ===== */
  --chips-selected-bg: var(--gray-800);            /* Figma ≠ md (в md gray/900) */
  --chips-selected-text: var(--gray-0);
}
`})))()}var j;function M(){return(M=e((()=>{j=`/*
 * Text styles ДС World Class (17 стилей Figma) → служебные классы.
 * Цвет в классы НЕ зашит: цвет текста задаётся отдельно токенами typography/*.
 * Имя класса: .ds-<путь стиля, "/" → "-">.
 * У стилей-дубликатов в Figma (heading/small ×2, heading/text ×3, cart/text ×2,
 * caption/cart_text ×2, caption/small ×2) есть варианты с суффиксом интерлиньяжа в px;
 * класс без суффикса = первый стиль с этим именем (как берёт агент в Figma).
 */

/* heading/medium_bold — Demi 24/24 */
.ds-heading-medium_bold {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-demibold);
  font-size: var(--font-size-2xl);
  line-height: var(--font-line-height-md);
  letter-spacing: var(--font-letter-spacing-sm);
}

/* heading/medium — Regular 24/24 */
.ds-heading-medium {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-2xl);
  line-height: var(--font-line-height-md);
  letter-spacing: var(--font-letter-spacing-sm);
}

/* heading/small — Regular 20/20 и 20/24 */
.ds-heading-small,
.ds-heading-small-20,
.ds-heading-small-24 {
  font-family: var(--font-family-headings);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xl);
  line-height: var(--font-line-height-sm);
  letter-spacing: var(--font-letter-spacing-xl);
}
.ds-heading-small-24 { line-height: var(--font-line-height-md); }

/* heading/text — Medium 18/18, Regular 18/20, Regular 18/24 */
.ds-heading-text,
.ds-heading-text-18,
.ds-heading-text-20,
.ds-heading-text-24 {
  font-family: var(--font-family-subtitles);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-sm);
  letter-spacing: var(--font-letter-spacing-md);
}
.ds-heading-text,
.ds-heading-text-18 { font-weight: var(--font-weight-medium); line-height: var(--font-line-height-xs); }
.ds-heading-text-24 { line-height: var(--font-line-height-md); }

/* regular/text — Regular 18/24 */
.ds-regular-text {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-md);
  letter-spacing: var(--font-letter-spacing-xl);
}

/* text-bold — Medium 18/20 */
.ds-text-bold {
  font-family: var(--font-family-subtitles);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-md);
  line-height: var(--font-line-height-sm);
  letter-spacing: var(--font-letter-spacing-md);
}

/* cart/title — Medium 16/16 */
.ds-cart-title {
  font-family: var(--font-family-subtitles);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  line-height: var(--font-line-height-2xs);
  letter-spacing: var(--font-letter-spacing-sm);
}

/* cart/chips — Regular 16/16 */
.ds-cart-chips {
  font-family: var(--font-family-subtitles);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-sm);
  line-height: var(--font-line-height-2xs);
  letter-spacing: var(--font-letter-spacing-sm);
}

/* cart/text — Regular 16/20 и 16/24 */
.ds-cart-text,
.ds-cart-text-20,
.ds-cart-text-24 {
  font-family: var(--font-family-body);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-sm);
  line-height: var(--font-line-height-sm);
  letter-spacing: var(--font-letter-spacing-sm);
}
.ds-cart-text-24 { line-height: var(--font-line-height-md); }

/* caption/cart_text — Regular 14/14 и 14/18 */
.ds-caption-cart_text,
.ds-caption-cart_text-14,
.ds-caption-cart_text-18 {
  font-family: var(--font-family-captions);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xs);
  line-height: var(--font-line-height-3xs);
  letter-spacing: var(--font-letter-spacing-sm);
}
.ds-caption-cart_text-18 { line-height: var(--font-line-height-xs); }

/* caption/small — Regular 12/12 и 12/16 */
.ds-caption-small,
.ds-caption-small-12,
.ds-caption-small-16 {
  font-family: var(--font-family-captions);
  font-weight: var(--font-weight-regular);
  font-size: var(--font-size-xxs);
  line-height: var(--font-line-height-4xs);
  letter-spacing: 0;
}
.ds-caption-small-16 { line-height: var(--font-line-height-2xs); }
`})))()}var N;function P(){return(P=e((()=>{N=`/*
 * Motion — переходы между состояниями.
 * В ДС World Class (foundation.md) токенов анимации нет. Добавлено директивой storybook
 * (фаза 4: «живые переходы»), 2026-11-11. Кандидат на внесение в Figma Variables.
 */
:root {
  --motion-duration-fast: 150ms;
  --motion-duration-base: 200ms;
  --motion-easing-standard: ease;
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-fast: 0ms;
    --motion-duration-base: 0ms;
  }
}
`})))()}function F(e){let t=[],n=``,r=!1;for(let i of e.split(`
`)){if(/@media/.test(i)&&(r=!0),r)continue;let e=i.match(ie);if(e){n=e[1];continue}let a=i.match(L);if(!a)continue;let o=a[2].trim(),s=o.match(/^var\(--([\w-]+)\)$/)?.[1];t.push({name:a[1],value:o,ref:s,note:a[3],group:n})}return t}function I(e,t){let n=new Map;for(let r of e){let e=t(r);n.set(e,[...n.get(e)??[],r])}return[...n.entries()]}function re(e){let t=[],n=new Set,r=``;for(let i of e.split(`
`)){let e=i.match(/^\/\*\s*(.+?)\s*\*\/$/);if(e)r=e[1];else for(let e of i.matchAll(/^\s*\.(ds-[\w-]+)\s*[,{]/g))n.has(e[1])||(n.add(e[1]),t.push({className:e[1],title:r}))}return t}var ie,L,R,z,B,V,H;function U(){return(U=e((()=>{O(),A(),M(),P(),ie=/\/\*\s*=+\s*(.+?)\s*=+/,L=/--([\w-]+)\s*:\s*([^;]+);(?:\s*\/\*\s*(.*?)\s*\*\/)?/,R=F(D),z=F(k),B=F(N),V=re(j),H=e=>/^#|^rgb/.test(e)})))()}var W,G,K,q,J,Y,X,Z,Q,$,ae;function oe(){return(oe=e((()=>{E(),U(),W=n(),G={title:`Foundation`,parameters:{layout:`fullscreen`,docs:{description:{component:`Foundation — глобальные (Primitive) и смысловые (Semantic) переменные ДС World Class.\r
Значения читаются из src/tokens/*.css, источник — ds/foundation.md и Figma Variables.`}}}},K=R.filter(e=>H(e.value)&&!e.name.startsWith(`raw-`)),q=R.filter(e=>e.name.startsWith(`raw-`)),J=e=>R.filter(t=>t.name.startsWith(e)),Y={name:`Primitive`,render:()=>(0,W.jsxs)(y,{title:`Primitive — палитра`,lead:`Слой 1. В Figma — Colors / primitives/*. Литералы живут только здесь.`,children:[I(K,e=>e.name.split(`-`)[0]).map(([e,t])=>(0,W.jsx)(b,{title:`primitives/${e}/*`,children:(0,W.jsx)(x,{tokens:t})},e)),(0,W.jsxs)(b,{title:`Сырые значения смысловых токенов (--raw-*)`,children:[(0,W.jsx)(`p`,{className:`${g.muted} ds-caption-cart_text-18`,children:`В Figma эти смысловые токены заданы hex, а не ссылкой на примитив. Это не новые токены ДС: имя = имя смыслового токена.`}),(0,W.jsx)(x,{tokens:q})]})]})},X={render:()=>(0,W.jsx)(y,{title:`Semantic`,lead:`Слои 2 и 3: bg, typography, border, icons, tech, clubs, goals, rating, buttons, chips. Под именем — примитив, на который ссылается токен.`,children:I(z,e=>e.group).map(([e,t])=>(0,W.jsx)(b,{title:e,children:(0,W.jsx)(x,{tokens:t})},e))})},Z={render:()=>(0,W.jsxs)(y,{title:`Typography`,lead:`Text styles — классы .ds-* без цвета: цвет задаётся токенами typography/*.`,children:[(0,W.jsx)(b,{title:`Text styles`,children:V.map(e=>(0,W.jsx)(C,{className:e.className,title:e.title},e.className))}),(0,W.jsx)(b,{title:`font/size/*`,children:J(`font-size-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{style:{fontSize:`var(--${e.name})`,lineHeight:1},children:`Аа`})},e.name))}),(0,W.jsx)(b,{title:`font/line-height/*`,children:J(`font-line-height-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{className:g.bar,style:{width:8,height:`var(--${e.name})`}})},e.name))}),(0,W.jsxs)(b,{title:`font/weight/* · font/letter-spacing/* · font/family/*`,children:[J(`font-weight-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{className:`ds-heading-text-20`,style:{fontWeight:`var(--${e.name})`},children:`Тренировка`})},e.name)),J(`font-letter-spacing-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{className:`ds-heading-text-20`,style:{letterSpacing:`var(--${e.name})`},children:`Тренировка`})},e.name)),J(`font-family-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{className:`ds-heading-text-20`,style:{fontFamily:`var(--${e.name})`},children:`Тренировка`})},e.name))]})]})},Q={name:`Spacing & Radius`,render:()=>(0,W.jsxs)(y,{title:`Spacing & Radius`,lead:`Dimensions: spacing/* (отступы и gap) и border radius/*. Теней в ДС нет (Effect styles — 0).`,children:[(0,W.jsx)(b,{title:`spacing/*`,children:J(`spacing-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{className:g.bar,style:{width:`var(--${e.name})`}})},e.name))}),(0,W.jsx)(b,{title:`border radius/*`,children:J(`border-radius-`).map(e=>(0,W.jsx)(S,{token:e,sample:(0,W.jsx)(`span`,{className:g.radius,style:{borderRadius:`var(--${e.name})`}})},e.name))})]})},$={render:()=>(0,W.jsx)(y,{title:`Motion`,lead:`В ДС токенов анимации нет — добавлены для живых переходов в каталоге. При prefers-reduced-motion длительности обнуляются. Наведите на квадрат.`,children:(0,W.jsx)(b,{title:`motion/*`,children:B.map(e=>(0,W.jsx)(S,{token:e,sample:e.name.startsWith(`motion-duration`)?(0,W.jsx)(`span`,{className:g.motionBox,style:{transition:`background-color var(--${e.name}) var(--motion-easing-standard), transform var(--${e.name}) var(--motion-easing-standard)`}}):null},e.name))})})},ae=[`Primitive`,`Semantic`,`Typography`,`SpacingRadius`,`Motion`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Primitive',
  render: () => <Page title="Primitive — палитра" lead="Слой 1. В Figma — Colors / primitives/*. Литералы живут только здесь.">\r
      {groupBy(colorPrimitives, t => t.name.split('-')[0]).map(([scale, tokens]) => <Group key={scale} title={\`primitives/\${scale}/*\`}>\r
          <Swatches tokens={tokens} />\r
        </Group>)}\r
      <Group title="Сырые значения смысловых токенов (--raw-*)">\r
        <p className={\`\${kitStyles.muted} ds-caption-cart_text-18\`}>\r
          В Figma эти смысловые токены заданы hex, а не ссылкой на примитив. Это не новые токены ДС: имя = имя смыслового токена.\r
        </p>\r
        <Swatches tokens={rawPrimitives} />\r
      </Group>\r
    </Page>
}`,...Y.parameters?.docs?.source},description:{story:`Primitive — палитра: шкалы gray, brand, error, success, warning по 15 шагов.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <Page title="Semantic" lead="Слои 2 и 3: bg, typography, border, icons, tech, clubs, goals, rating, buttons, chips. Под именем — примитив, на который ссылается токен.">\r
      {groupBy(semantics, t => t.group).map(([group, tokens]) => <Group key={group} title={group}>\r
          <Swatches tokens={tokens} />\r
        </Group>)}\r
    </Page>
}`,...X.parameters?.docs?.source},description:{story:`Semantic — смысловые и компонентные токены; каждый ссылается на примитив.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <Page title="Typography" lead="Text styles — классы .ds-* без цвета: цвет задаётся токенами typography/*.">\r
      <Group title="Text styles">\r
        {textStyles.map(s => <TextStyleRow key={s.className} className={s.className} title={s.title} />)}\r
      </Group>\r
      <Group title="font/size/*">\r
        {byPrefix('font-size-').map(t => <TokenRow key={t.name} token={t} sample={<span style={{
        fontSize: \`var(--\${t.name})\`,
        lineHeight: 1
      }}>Аа</span>} />)}\r
      </Group>\r
      <Group title="font/line-height/*">\r
        {byPrefix('font-line-height-').map(t => <TokenRow key={t.name} token={t} sample={<span className={kitStyles.bar} style={{
        width: 8,
        height: \`var(--\${t.name})\`
      }} />} />)}\r
      </Group>\r
      <Group title="font/weight/* · font/letter-spacing/* · font/family/*">\r
        {byPrefix('font-weight-').map(t => <TokenRow key={t.name} token={t} sample={<span className="ds-heading-text-20" style={{
        fontWeight: \`var(--\${t.name})\`
      }}>Тренировка</span>} />)}\r
        {byPrefix('font-letter-spacing-').map(t => <TokenRow key={t.name} token={t} sample={<span className="ds-heading-text-20" style={{
        letterSpacing: \`var(--\${t.name})\`
      }}>Тренировка</span>} />)}\r
        {byPrefix('font-family-').map(t => <TokenRow key={t.name} token={t} sample={<span className="ds-heading-text-20" style={{
        fontFamily: \`var(--\${t.name})\`
      }}>Тренировка</span>} />)}\r
      </Group>\r
    </Page>
}`,...Z.parameters?.docs?.source},description:{story:`Typography — переменные font/* и 17 Text styles строками-примерами.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Spacing & Radius',
  render: () => <Page title="Spacing & Radius" lead="Dimensions: spacing/* (отступы и gap) и border radius/*. Теней в ДС нет (Effect styles — 0).">\r
      <Group title="spacing/*">\r
        {byPrefix('spacing-').map(t => <TokenRow key={t.name} token={t} sample={<span className={kitStyles.bar} style={{
        width: \`var(--\${t.name})\`
      }} />} />)}\r
      </Group>\r
      <Group title="border radius/*">\r
        {byPrefix('border-radius-').map(t => <TokenRow key={t.name} token={t} sample={<span className={kitStyles.radius} style={{
        borderRadius: \`var(--\${t.name})\`
      }} />} />)}\r
      </Group>\r
    </Page>
}`,...Q.parameters?.docs?.source},description:{story:`Spacing & Radius — Dimensions: spacing/* и border radius/*.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <Page title="Motion" lead="В ДС токенов анимации нет — добавлены для живых переходов в каталоге. При prefers-reduced-motion длительности обнуляются. Наведите на квадрат.">\r
      <Group title="motion/*">\r
        {motion.map(t => <TokenRow key={t.name} token={t} sample={t.name.startsWith('motion-duration') ? <span className={kitStyles.motionBox} style={{
        transition: \`background-color var(--\${t.name}) var(--motion-easing-standard), transform var(--\${t.name}) var(--motion-easing-standard)\`
      }} /> : null} />)}\r
      </Group>\r
    </Page>
}`,...$.parameters?.docs?.source},description:{story:`Motion — длительности и easing переходов (добавлено директивой storybook, в Figma нет).`,...$.parameters?.docs?.description}}}})))()}oe();export{$ as Motion,Y as Primitive,X as Semantic,Q as SpacingRadius,Z as Typography,ae as __namedExportsOrder,G as default};