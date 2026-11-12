import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,r,t as i}from"./Icon-CKeJH59w.js";var a,o,s,c,l,u,d;function f(){return(f=e((()=>{r(),a=t(),o={title:`Components/Icon`,component:n,tags:[`autodocs`],args:{name:`24px / calendar`},argTypes:{name:{control:`select`,options:i,description:`Имя иконки из Figma`},size:{control:{type:`number`,min:8,max:48},description:`Переопределить размер (px)`},title:{control:`text`,description:`Доступное имя; без него иконка декоративная`},color:{control:`color`,description:`Цвет (в продукте — токены icons/*)`}},parameters:{layout:`centered`,docs:{description:{component:"26 иконок ДС, SVG перенесены из Figma. Имя — как в Figma, размер — из имени.\r\nЦвет наследуется (`currentColor`) от родителя — задавайте его токенами `icons/*`.\r\n`activity` в Figma — растровая картинка (PNG). У `20px / chevron-left` в Figma остриё смотрит вправо — перенесено как есть.\r\n\nFigma: Foundations → Icons `40000166:6047`."}}}},s={},c={args:{name:`20px / chevron-right`}},l={args:{name:`Back`}},u={parameters:{layout:`padded`},render:()=>(0,a.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(120px, 1fr))`,gap:`var(--spacing-4)`,color:`var(--icons-primaryLine)`},children:i.map(e=>(0,a.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--spacing-2)`},children:[(0,a.jsx)(`span`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,width:56,height:56,borderRadius:`var(--border-radius-3)`,background:`var(--bg-baseGray)`},children:(0,a.jsx)(n,{name:e})}),(0,a.jsx)(`span`,{className:`ds-caption-small-12`,children:e})]},e))})},d=[`Default`,`Chevron`,`Back`,`AllVariants`],s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{}`,...s.parameters?.docs?.source},description:{story:`Иконка 24 px.`,...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: '20px / chevron-right'
  }
}`,...c.parameters?.docs?.source},description:{story:`Шеврон 20 px — в строках выбора.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Back'
  }
}`,...l.parameters?.docs?.source},description:{story:`Кнопка «Назад» 23×36.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
    gap: 'var(--spacing-4)',
    color: 'var(--icons-primaryLine)'
  }}>\r
      {ICON_NAMES.map(n => <div key={n} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>\r
          <span style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 'var(--border-radius-3)',
        background: 'var(--bg-baseGray)'
      }}>\r
            <Icon name={n} />\r
          </span>\r
          <span className="ds-caption-small-12">{n}</span>\r
        </div>)}\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Все 26 иконок.`,...u.parameters?.docs?.description}}}})))()}f();export{u as AllVariants,l as Back,c as Chevron,s as Default,d as __namedExportsOrder,o as default};