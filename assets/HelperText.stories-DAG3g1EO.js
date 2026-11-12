import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./HelperText-lEH99G-V.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Components/Inputs/Helper Text`,component:r,tags:[`autodocs`],args:{state:`default`,helperText:`Код придёт в течение минуты`},argTypes:{state:{control:`inline-radio`,options:[`default`,`negative`,`success`,`disabled`],description:`State`},helperText:{control:`text`,description:`Helper Text`}},parameters:{layout:`padded`,docs:{description:{component:`Подсказка или сообщение под полем: значок alert-circle и текст. Вложен в Text Field.\r
Значок alert-circle окрашивается вместе с текстом; цвета состояний в Figma заданы сырым hex или удалённой переменной, в коде — ближайшие смысловые токены.\r

Figma: Helper Text \`2223:4612\` · State: Default | Negative | Success | Disabled.`}}}},o={},s={args:{state:`negative`,helperText:`Неверный код`}},c={args:{state:`success`,helperText:`Код подтверждён`}},l={args:{state:`disabled`,helperText:`Повторная отправка через 0:45`}},u={render:e=>(0,i.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-3)`},children:[`default`,`negative`,`success`,`disabled`].map(t=>(0,i.jsx)(r,{...e,state:t,helperText:`${t}: ${e.helperText}`},t))})},d=[`Default`,`Negative`,`Success`,`Disabled`,`AllVariants`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{}`,...o.parameters?.docs?.source},description:{story:`Нейтральная подсказка.`,...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'negative',
    helperText: 'Неверный код'
  }
}`,...s.parameters?.docs?.source},description:{story:`Ошибка (role="alert").`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'success',
    helperText: 'Код подтверждён'
  }
}`,...c.parameters?.docs?.source},description:{story:`Успех.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    helperText: 'Повторная отправка через 0:45'
  }
}`,...l.parameters?.docs?.source},description:{story:`Недоступно.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-3)'
  }}>\r
      {(['default', 'negative', 'success', 'disabled'] as HelperTextState[]).map(s => <HelperText key={s} {...args} state={s} helperText={\`\${s}: \${args.helperText}\`} />)}\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Все четыре состояния.`,...u.parameters?.docs?.description}}}})))()}f();export{u as AllVariants,o as Default,l as Disabled,s as Negative,c as Success,d as __namedExportsOrder,a as default};