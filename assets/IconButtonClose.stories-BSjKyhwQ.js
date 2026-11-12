import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{t as n}from"./cx-BOo3OvTL.js";var r,i,a,o,s,c;function l(){return(l=e((()=>{r=`_root_25g6a_1`,i=`_cross_25g6a_16`,a=`_light_25g6a_31`,o=`_overlay_25g6a_33`,s=`_dark_25g6a_34`,c={root:r,cross:i,light:a,overlay:o,dark:s}})))()}function u({variant:e=`light`,className:t,...r}){return(0,d.jsx)(`button`,{type:`button`,"aria-label":`Закрыть`,className:n(c.root,c[e],t),...r,children:(0,d.jsx)(`span`,{className:c.cross,"aria-hidden":`true`})})}var d;function f(){return(f=e((()=>{l(),d=t(),u.__docgenInfo={description:`Icon Button / Close — Figma 40000490:677. Круглая кнопка закрытия 28×28.`,methods:[],displayName:`IconButtonClose`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'light' | 'overlay' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'overlay'`},{name:`literal`,value:`'dark'`}]},description:"Style из Figma (проп назван variant: `style` в React занят инлайн-стилями).\nLight — шторки и описание клуба; Overlay — экраны «Оплата картой»; Dark — поверх фото.",defaultValue:{value:`'light'`,computed:!1}}},composes:[`ButtonHTMLAttributes`]}})))()}var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{f(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Actions/Icon Button Close`,component:u,tags:[`autodocs`],args:{variant:`light`,onClick:m()},argTypes:{variant:{control:`inline-radio`,options:[`light`,`overlay`,`dark`],description:`Style: Light | Overlay | Dark`},disabled:{control:`boolean`},onClick:{action:`click`}},parameters:{layout:`centered`,docs:{description:{component:"Круглая кнопка закрытия 28×28 с крестиком в шапке шторки или экрана.\r\nСвойство Style из Figma в коде называется `variant` (`style` в React занят).\r\n\nFigma: Icon Button / Close `40000490:677` · Light `40000490:651`, Overlay `40000490:655`, Dark `40000490:659`."}}}},g={args:{variant:`light`}},_={args:{variant:`overlay`}},v={args:{variant:`dark`},globals:{backgrounds:{value:`photo`}}},y={render:e=>(0,p.jsx)(`div`,{style:{display:`flex`,gap:`var(--spacing-6)`},children:[`light`,`overlay`,`dark`].map(t=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`var(--spacing-2)`},children:[(0,p.jsx)(`div`,{style:{padding:`var(--spacing-4)`,borderRadius:`var(--border-radius-3)`,background:t===`dark`?`var(--bg-pictureBg)`:`var(--bg-mainWhite)`},children:(0,p.jsx)(u,{...e,variant:t})}),(0,p.jsx)(`span`,{className:`ds-caption-small-16`,children:t})]},t))})},b=[`Light`,`Overlay`,`Dark`,`AllVariants`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'light'
  }
}`,...g.parameters?.docs?.source},description:{story:`Шторки авторизации, описание клуба.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'overlay'
  }
}`,..._.parameters?.docs?.source},description:{story:`Экраны «Оплата картой»: фон с прозрачностью 60 %.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dark'
  },
  globals: {
    backgrounds: {
      value: 'photo'
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`Поверх фото (галерея на «Мой счёт»).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--spacing-6)'
  }}>\r
      {(['light', 'overlay', 'dark'] as IconButtonCloseStyle[]).map(v => <div key={v} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--spacing-2)'
    }}>\r
          <div style={{
        padding: 'var(--spacing-4)',
        borderRadius: 'var(--border-radius-3)',
        background: v === 'dark' ? 'var(--bg-pictureBg)' : 'var(--bg-mainWhite)'
      }}>\r
            <IconButtonClose {...args} variant={v} />\r
          </div>\r
          <span className="ds-caption-small-16">{v}</span>\r
        </div>)}\r
    </div>
}`,...y.parameters?.docs?.source},description:{story:`Все три стиля на своих подложках.`,...y.parameters?.docs?.description}}}})))()}x();export{y as AllVariants,v as Dark,g as Light,_ as Overlay,b as __namedExportsOrder,h as default};