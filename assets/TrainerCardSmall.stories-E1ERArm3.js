import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{t as n}from"./cx-BOo3OvTL.js";import{n as r,t as i}from"./TrainerPhotoSmall-CPp4yhD_.js";function a(){return(a=e((()=>{r()})))()}var o,s,c;function l(){return(l=e((()=>{o=`_root_13bv9_1`,s=`_name_13bv9_7`,c={root:o,name:s}})))()}function u({name:e,trainer:t=3,photoSrc:r,className:a,...o}){return(0,d.jsxs)(`article`,{className:n(c.root,a),...o,children:[(0,d.jsx)(i,{trainer:t,src:r}),(0,d.jsx)(`span`,{className:n(c.name,`ds-cart-text-20`),children:e})]})}var d;function f(){return(f=e((()=>{a(),l(),d=t(),u.__docgenInfo={description:`Trainer Card / Small — Figma 40000419:672. Компактная карточка тренера 140 px: фото и имя.`,methods:[],displayName:`TrainerCardSmall`,props:{name:{required:!0,tsType:{name:`string`},description:`Name (в две строки: имя и фамилия)`},trainer:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:`Вложенный Trainer Photo / Small → Trainer`,defaultValue:{value:`3`,computed:!1}},photoSrc:{required:!1,tsType:{name:`string`},description:``}},composes:[`HTMLAttributes`]}})))()}var p,m,h,g,_,v;function y(){return(y=e((()=>{f(),p=t(),m={title:`Components/Cards/Trainer Card Small`,component:u,tags:[`autodocs`],args:{name:`Виктор
Кульпин`,trainer:3},argTypes:{name:{control:`text`,description:`Name (перенос строки — \\n)`},trainer:{control:`inline-radio`,options:[1,2,3],description:`Trainer Photo / Small → Trainer`},photoSrc:{control:`text`}},parameters:{layout:`centered`,docs:{description:{component:`Компактная карточка тренера 140 px: фото и имя в две строки.\r

Figma: Trainer Card / Small \`40000419:672\` · вложенный Trainer Photo / Small.`}}}},h={},g={args:{name:`Анастасия
Андреенкова`}},_={render:e=>(0,p.jsxs)(`div`,{style:{display:`flex`,gap:`var(--spacing-3)`},children:[(0,p.jsx)(u,{...e,name:`Виктор
Кульпин`,trainer:1}),(0,p.jsx)(u,{...e,name:`Анастасия
Андреенкова`,trainer:2}),(0,p.jsx)(u,{...e,name:`Мария
Соколова`,trainer:3})]})},v=[`Default`,`LongName`,`AllVariants`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source},description:{story:`Карточка в ленте тренеров.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Анастасия\\nАндреенкова'
  }
}`,...g.parameters?.docs?.source},description:{story:`Длинное имя.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--spacing-3)'
  }}>\r
      <TrainerCardSmall {...args} name={'Виктор\\nКульпин'} trainer={1} />\r
      <TrainerCardSmall {...args} name={'Анастасия\\nАндреенкова'} trainer={2} />\r
      <TrainerCardSmall {...args} name={'Мария\\nСоколова'} trainer={3} />\r
    </div>
}`,..._.parameters?.docs?.source},description:{story:`Лента из трёх тренеров.`,..._.parameters?.docs?.description}}}})))()}y();export{_ as AllVariants,h as Default,g as LongName,v as __namedExportsOrder,m as default};