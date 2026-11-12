import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Radio-Gl_qnlxj.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Selection/Radio`,component:r,tags:[`autodocs`],args:{isActive:!0,label:`6 месяцев`,name:`term`,disabled:!1,onChange:o()},argTypes:{isActive:{control:`boolean`,description:`isActive: Yes | No`},label:{control:`text`,description:`Доступное имя`},name:{control:`text`},disabled:{control:`boolean`},onChange:{action:`change`}},parameters:{layout:`centered`,docs:{description:{component:'Радиокнопка 16×16. Настоящий `input type="radio"`; в интерфейсе обычно живёт внутри Radio Row.\r\n\nFigma: Radio `1691:4450` · isActive: Yes | No.'}}},render:function(e){let[,t]=a();return(0,i.jsx)(r,{...e,onChange:n=>{e.onChange?.(n),t({isActive:n.target.checked})}})}},c={},l={args:{isActive:!1}},u={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--spacing-6)`},children:[(0,i.jsx)(r,{...e,name:`a`,isActive:!0}),(0,i.jsx)(r,{...e,name:`b`,isActive:!1})]})},d=[`Active`,`Inactive`,`AllVariants`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`isActive=Yes.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: false
  }
}`,...l.parameters?.docs?.source},description:{story:`isActive=No. Кликните — выберется.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--spacing-6)'
  }}>\r
      <Radio {...args} name="a" isActive />\r
      <Radio {...args} name="b" isActive={false} />\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Yes и No рядом.`,...u.parameters?.docs?.description}}}})))()}f();export{c as Active,u as AllVariants,l as Inactive,d as __namedExportsOrder,s as default};