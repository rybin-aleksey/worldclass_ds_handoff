import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{t as n}from"./cx-BOo3OvTL.js";import{n as r,t as i}from"./Icon-CKeJH59w.js";import{t as a}from"./Icon-DQAy2_MQ.js";var o,s,c,l;function u(){return(u=e((()=>{o=`_root_ih3o8_1`,s=`_tile_ih3o8_13`,c=`_label_ih3o8_25`,l={root:o,tile:s,label:c}})))()}function d({label:e,icon:t=`24px / receipt`,className:i,...a}){return(0,f.jsxs)(`button`,{type:`button`,className:n(l.root,i),...a,children:[(0,f.jsx)(`span`,{className:l.tile,children:(0,f.jsx)(r,{name:t})}),(0,f.jsx)(`span`,{className:n(l.label,`ds-heading-text-20`),children:e})]})}var f;function p(){return(p=e((()=>{a(),u(),f=t(),d.__docgenInfo={description:`Action Row — Figma 40000223:714. Строка действия: иконка в плитке и подпись.`,methods:[],displayName:`ActionRow`,props:{label:{required:!0,tsType:{name:`string`},description:`Label`},icon:{required:!1,tsType:{name:`unknown`},description:`Icon (INSTANCE_SWAP, 24px)`,defaultValue:{value:`'24px / receipt'`,computed:!1}}},composes:[`ButtonHTMLAttributes`]}})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{a(),p(),m=t(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Actions/Action Row`,component:d,tags:[`autodocs`],args:{label:`Отправить квитанцию`,icon:`24px / receipt`,onClick:h()},argTypes:{label:{control:`text`,description:`Label`},icon:{control:`select`,options:i.filter(e=>e.startsWith(`24px`)),description:`Icon (24px)`},onClick:{action:`click`}},parameters:{layout:`padded`,docs:{description:{component:`Строка действия: иконка в плитке 56×56 и подпись. Используется в шторках после записи и оплаты.\r

Figma: Action Row \`40000223:714\` · свойства Label (TEXT), Icon (INSTANCE_SWAP, 24px).`}}},decorators:[e=>(0,m.jsx)(`div`,{style:{maxWidth:343},children:(0,m.jsx)(e,{})})]},_={},v={args:{label:`Создать шаблон`,icon:`24px / template`}},y={args:{label:`Редактировать запись`,icon:`24px / edit`}},b={render:e=>(0,m.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-3)`},children:[(0,m.jsx)(d,{...e,label:`Отправить квитанцию`,icon:`24px / receipt`}),(0,m.jsx)(d,{...e,label:`Создать шаблон`,icon:`24px / template`}),(0,m.jsx)(d,{...e,label:`Редактировать запись`,icon:`24px / edit`})]})},x=[`Receipt`,`Template`,`Edit`,`AllVariants`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{}`,..._.parameters?.docs?.source},description:{story:`Отправить квитанцию.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Создать шаблон',
    icon: '24px / template'
  }
}`,...v.parameters?.docs?.source},description:{story:`Создать шаблон записи.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Редактировать запись',
    icon: '24px / edit'
  }
}`,...y.parameters?.docs?.source},description:{story:`Редактировать запись.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-3)'
  }}>\r
      <ActionRow {...args} label="Отправить квитанцию" icon="24px / receipt" />\r
      <ActionRow {...args} label="Создать шаблон" icon="24px / template" />\r
      <ActionRow {...args} label="Редактировать запись" icon="24px / edit" />\r
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Паттерн «Действия после записи»: три строки подряд.`,...b.parameters?.docs?.description}}}})))()}S();export{b as AllVariants,y as Edit,_ as Receipt,v as Template,x as __namedExportsOrder,g as default};