import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{t as n}from"./cx-BOo3OvTL.js";import{n as r,t as i}from"./Icon-CKeJH59w.js";import{t as a}from"./Icon-DQAy2_MQ.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{o=`_root_8r5us_1`,s=`_tile_8r5us_13`,c=`_info_8r5us_24`,l=`_title_8r5us_31`,u=`_subtitle_8r5us_32`,d=`_chevron_8r5us_33`,f={root:o,tile:s,info:c,title:l,subtitle:u,chevron:d}})))()}function m({lines:e=1,title:t,subtitle:i=`В клубе`,icon:a=`24px / calendar`,showChevron:o=!0,className:s,...c}){return(0,h.jsxs)(`button`,{type:`button`,className:n(f.root,s),...c,children:[(0,h.jsx)(`span`,{className:f.tile,children:(0,h.jsx)(r,{name:a})}),(0,h.jsxs)(`span`,{className:f.info,children:[(0,h.jsx)(`span`,{className:n(f.title,`ds-heading-text-20`),children:t}),e===2&&(0,h.jsx)(`span`,{className:n(f.subtitle,`ds-caption-cart_text-14`),children:i})]}),o&&(0,h.jsx)(r,{name:`20px / chevron-right`,className:f.chevron})]})}var h;function g(){return(g=e((()=>{a(),p(),h=t(),m.__docgenInfo={description:`Select / Row — Figma 40000434:731. Строка выбора с иконкой в плитке 56×56 и шевроном.`,methods:[],displayName:`SelectRow`,props:{lines:{required:!1,tsType:{name:`union`,raw:`1 | 2`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`}]},description:`Lines: 1 — только заголовок, 2 — заголовок и подпись`,defaultValue:{value:`1`,computed:!1}},title:{required:!0,tsType:{name:`string`},description:`Title`},subtitle:{required:!1,tsType:{name:`string`},description:`Subtitle (только при Lines=2)`,defaultValue:{value:`'В клубе'`,computed:!1}},icon:{required:!1,tsType:{name:`unknown`},description:`Icon (INSTANCE_SWAP, 24px; предпочтительные calendar, rouble)`,defaultValue:{value:`'24px / calendar'`,computed:!1}},showChevron:{required:!1,tsType:{name:`boolean`},description:`Show Chevron`,defaultValue:{value:`true`,computed:!1}}},composes:[`ButtonHTMLAttributes`]}})))()}var _,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),g(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Inputs/Select Row`,component:m,tags:[`autodocs`],args:{lines:1,title:`Выберите время`,subtitle:`В клубе`,icon:`24px / calendar`,showChevron:!0,onClick:v()},argTypes:{lines:{control:`inline-radio`,options:[1,2],description:`Lines`},title:{control:`text`,description:`Title`},subtitle:{control:`text`,description:`Subtitle (Lines=2)`},icon:{control:`select`,options:i.filter(e=>e.startsWith(`24px`)),description:`Icon (24px)`},showChevron:{control:`boolean`,description:`Show Chevron`},onClick:{action:`click`}},parameters:{layout:`padded`,docs:{description:{component:"Строка выбора с иконкой в плитке 56×56 и шевроном: время, тариф и т. п.\r\nLines=1 — только заголовок, Lines=2 — заголовок и подпись.\r\n\nFigma: Select / Row `40000434:731` (Lines=1 `40000434:710`, Lines=2 `40000434:722`)."}}},decorators:[e=>(0,_.jsx)(`div`,{style:{maxWidth:343},children:(0,_.jsx)(e,{})})]},b={args:{lines:1}},x={args:{lines:2}},S={args:{lines:2,title:`Разовое посещение`,subtitle:`1 500 ₽`,icon:`24px / rouble`,showChevron:!1}},C={render:e=>(0,_.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-4)`},children:[1,2].flatMap(t=>[!0,!1].map(n=>(0,_.jsx)(m,{...e,lines:t,showChevron:n},`${t}${n}`)))})},w=[`OneLine`,`TwoLines`,`Tariff`,`AllVariants`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 1
  }
}`,...b.parameters?.docs?.source},description:{story:`Одна строка: только заголовок.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 2
  }
}`,...x.parameters?.docs?.source},description:{story:`Две строки: заголовок и подпись.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    lines: 2,
    title: 'Разовое посещение',
    subtitle: '1 500 ₽',
    icon: '24px / rouble',
    showChevron: false
  }
}`,...S.parameters?.docs?.source},description:{story:`Выбор тарифа без шеврона.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)'
  }}>\r
      {([1, 2] as const).flatMap(lines => [true, false].map(showChevron => <SelectRow key={\`\${lines}\${showChevron}\`} {...args} lines={lines} showChevron={showChevron} />))}\r
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Lines × Show Chevron.`,...C.parameters?.docs?.description}}}})))()}T();export{C as AllVariants,b as OneLine,S as Tariff,x as TwoLines,w as __namedExportsOrder,y as default};