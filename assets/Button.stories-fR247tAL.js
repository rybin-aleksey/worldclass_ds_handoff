import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./Button-C4M8978I.js";function i({label:e,children:t}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(`span`,{className:`ds-caption-small-16`,children:e}),t]})}var a,o,s,c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),a=t(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Actions/Button`,component:r,tags:[`autodocs`],args:{type:`primary`,state:`default`,size:`large`,label:`Записаться`,onClick:o()},argTypes:{type:{control:`inline-radio`,options:[`primary`,`secondary`],description:`Type`},state:{control:`inline-radio`,options:[`default`,`pressed`,`disabled`],description:`State; Pressed также работает нативно (:active)`},size:{control:`inline-radio`,options:[`large`,`small`],description:`Size: Large — 58 px, Small — 48 px`},label:{control:`text`,description:`Label`},htmlType:{control:`inline-radio`,options:[`button`,`submit`,`reset`]},disabled:{control:`boolean`},onClick:{action:`click`}},parameters:{layout:`padded`,docs:{description:{component:"Кнопка — основное действие. Primary — главное действие экрана (записаться, оплатить, готово),\r\nSecondary — второстепенное (отменить, перезвоните мне). Ширина — Fill: кнопка тянется на всю ширину контейнера.\r\n\nFigma: Button `40000176:697` · 12 вариантов (Type × State × Size) · токены `buttons/*`."}}},decorators:[e=>(0,a.jsx)(`div`,{style:{maxWidth:343},children:(0,a.jsx)(e,{})})]},c={args:{type:`primary`,label:`Оплатить`}},l={args:{type:`secondary`,label:`Перезвоните мне`}},u={args:{state:`pressed`,label:`Готово`}},d={args:{state:`disabled`,label:`Записаться`}},f={args:{size:`small`,label:`Записаться`}},p={args:{size:`small`,type:`secondary`,label:`Добавить вложения`}},m={decorators:[e=>(0,a.jsx)(e,{})],render:e=>(0,a.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`auto repeat(3, 240px)`,gap:`var(--spacing-4)`,alignItems:`center`},children:[(0,a.jsx)(`span`,{}),[`default`,`pressed`,`disabled`].map(e=>(0,a.jsx)(`span`,{className:`ds-caption-small-16`,children:e},e)),[`large`,`small`].flatMap(t=>[`primary`,`secondary`].map(n=>(0,a.jsx)(i,{label:`${n} · ${t}`,children:[`default`,`pressed`,`disabled`].map(i=>(0,a.jsx)(r,{...e,type:n,state:i,size:t},i))},`${n}-${t}`)))]})},h=[`Primary`,`Secondary`,`Pressed`,`Disabled`,`Small`,`SmallSecondary`,`AllVariants`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    label: 'Оплатить'
  }
}`,...c.parameters?.docs?.source},description:{story:`Главное действие экрана. Нажмите и удерживайте — увидите Pressed.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'secondary',
    label: 'Перезвоните мне'
  }
}`,...l.parameters?.docs?.source},description:{story:`Второстепенное действие.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'pressed',
    label: 'Готово'
  }
}`,...u.parameters?.docs?.source},description:{story:`Зафиксированное Pressed — для сверки с Figma.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'disabled',
    label: 'Записаться'
  }
}`,...d.parameters?.docs?.source},description:{story:`Недоступна: например, пока не выбрано время.`,...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Записаться'
  }
}`,...f.parameters?.docs?.source},description:{story:`Small — для кнопок внутри карточек и форм.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    type: 'secondary',
    label: 'Добавить вложения'
  }
}`,...p.parameters?.docs?.source},description:{story:`Small Secondary — скругление border radius/3.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'auto repeat(3, 240px)',
    gap: 'var(--spacing-4)',
    alignItems: 'center'
  }}>\r
      <span />\r
      {(['default', 'pressed', 'disabled'] as ButtonState[]).map(s => <span key={s} className="ds-caption-small-16">{s}</span>)}\r
      {(['large', 'small'] as ButtonSize[]).flatMap(size => (['primary', 'secondary'] as ButtonType[]).map(type => <Row key={\`\${type}-\${size}\`} label={\`\${type} · \${size}\`}>\r
            {(['default', 'pressed', 'disabled'] as ButtonState[]).map(state => <Button key={state} {...args} type={type} state={state} size={size} />)}\r
          </Row>))}\r
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Матрица Type × State × Size — все 12 вариантов рядом.`,...m.parameters?.docs?.description}}}})))()}g();export{m as AllVariants,d as Disabled,u as Pressed,c as Primary,l as Secondary,f as Small,p as SmallSecondary,h as __namedExportsOrder,s as default};