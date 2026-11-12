import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Switch-BtHFRunb.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Selection/Switch`,component:r,tags:[`autodocs`],args:{isActive:!1,label:`Фитнес-тестирование`,disabled:!1,onChange:o()},argTypes:{isActive:{control:`boolean`,description:`isActive: false | true`},label:{control:`text`,description:`Доступное имя`},disabled:{control:`boolean`},onChange:{action:`change`}},parameters:{layout:`centered`,docs:{description:{component:'Переключатель 51×32 (`role="switch"`). Кликните — бегунок плавно перейдёт, трек окрасится в tech/success.\r\n\nFigma: Switch `761:4124` · isActive: false | true.'}}},render:function(e){let[,t]=a();return(0,i.jsx)(r,{...e,onChange:n=>{e.onChange?.(n),t({isActive:n.target.checked})}})}},c={},l={args:{isActive:!0}},u={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--spacing-6)`},children:[(0,i.jsx)(r,{...e,isActive:!1}),(0,i.jsx)(r,{...e,isActive:!0})]})},d=[`Off`,`On`,`AllVariants`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`Выключен.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true
  }
}`,...l.parameters?.docs?.source},description:{story:`Включён.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--spacing-6)'
  }}>\r
      <Switch {...args} isActive={false} />\r
      <Switch {...args} isActive />\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`false и true рядом.`,...u.parameters?.docs?.description}}}})))()}f();export{u as AllVariants,c as Off,l as On,d as __namedExportsOrder,s as default};