import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BJpw_U5F.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./cx-BOo3OvTL.js";var i,a,o,s;function c(){return(c=e((()=>{i=`_root_1hry7_1`,a=`_text_1hry7_15`,o=`_check_1hry7_19`,s={root:i,text:a,check:o}})))()}function l({isActive:e=!1,label:t,className:n,...i}){return(0,u.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":e,className:r(s.root,n),...i,children:[(0,u.jsx)(`span`,{className:r(s.text,`ds-heading-text-24`),children:t}),e&&(0,u.jsx)(`span`,{className:s.check,"aria-hidden":`true`})]})}var u;function d(){return(d=e((()=>{c(),u=n(),l.__docgenInfo={description:`Payment Method — Figma 1233:4768. Строка способа оплаты (СБП, «Наличными в клубе», «Карта»).`,methods:[],displayName:`PaymentMethod`,props:{isActive:{required:!1,tsType:{name:`boolean`},description:`isActive: false | true — выбранная строка с галочкой`,defaultValue:{value:`false`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Label`}},composes:[`ButtonHTMLAttributes`]}})))()}var f,p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f=t(),d(),p=n(),{useArgs:m}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Selection/Payment Method`,component:l,tags:[`autodocs`],args:{isActive:!1,label:`СБП`,onClick:h()},argTypes:{isActive:{control:`boolean`,description:`isActive: false | true`},label:{control:`text`,description:`Label`},disabled:{control:`boolean`},onClick:{action:`click`}},parameters:{layout:`padded`,docs:{description:{component:`Строка способа оплаты: СБП, «Наличными в клубе», «Карта». Выбранная — с галочкой.\r
Используется в паттерне «Другие способы оплаты» (ds/patterns.md).\r

Figma: Payment Method \`1233:4768\` · isActive: false | true · Label.`}}},decorators:[e=>(0,p.jsx)(`div`,{style:{maxWidth:327},children:(0,p.jsx)(e,{})})],render:function(e){let[,t]=m();return(0,p.jsx)(l,{...e,onClick:n=>{e.onClick?.(n),t({isActive:!e.isActive})}})}},_={},v={args:{isActive:!0,label:`Наличными в клубе`}},y={render:function(e){let[t,n]=(0,f.useState)(`СБП`);return(0,p.jsx)(`div`,{role:`radiogroup`,"aria-label":`Способ оплаты`,style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-2)`},children:[`СБП`,`Наличными в клубе`,`Карта`].map(r=>(0,p.jsx)(l,{...e,label:r,isActive:t===r,onClick:()=>n(r)},r))})}},b=[`Inactive`,`Active`,`AllVariants`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`Не выбран.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true,
    label: 'Наличными в клубе'
  }
}`,...v.parameters?.docs?.source},description:{story:`Выбран — с галочкой.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Group(args) {
    const [value, setValue] = useState('СБП');
    return <div role="radiogroup" aria-label="Способ оплаты" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-2)'
    }}>\r
        {['СБП', 'Наличными в клубе', 'Карта'].map(l => <PaymentMethod key={l} {...args} label={l} isActive={value === l} onClick={() => setValue(l)} />)}\r
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Группа способов оплаты: выбирается один.`,...y.parameters?.docs?.description}}}})))()}x();export{v as Active,y as AllVariants,_ as Inactive,b as __namedExportsOrder,g as default};