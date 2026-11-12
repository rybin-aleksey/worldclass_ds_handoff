import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{n,t as r}from"./IconButtonLike-DQ6HolII.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{useArgs:a}=__STORYBOOK_MODULE_PREVIEW_API__,{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/Cards/Icon Button Like`,component:r,tags:[`autodocs`],args:{isLiked:!1,onClick:o()},argTypes:{isLiked:{control:`boolean`,description:`isLiked: Yes | No`},disabled:{control:`boolean`},onClick:{action:`click`}},parameters:{layout:`centered`,docs:{description:{component:"Кнопка «в избранное» 28×28. Вложена в Trainer Card / Vertical и Training Card / Compact.\r\nФон в Figma — примитив `gray/200` (смыслового токена нет). Иконка — `16px / like`: обводка icons/onDark, у isLiked=Yes заливка typography/danger.\r\n\nFigma: Icon Button / Like `1665:3266` · isLiked: Yes | No."}}},globals:{backgrounds:{value:`photo`}},render:function(e){let[,t]=a();return(0,i.jsx)(r,{...e,onClick:n=>{e.onClick?.(n),t({isLiked:!e.isLiked})}})}},c={},l={args:{isLiked:!0}},u={render:e=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:`var(--spacing-4)`},children:[(0,i.jsx)(r,{...e,isLiked:!0}),(0,i.jsx)(r,{...e,isLiked:!1})]})},d=[`NotLiked`,`Liked`,`AllVariants`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{}`,...c.parameters?.docs?.source},description:{story:`Не в избранном. Кликните.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLiked: true
  }
}`,...l.parameters?.docs?.source},description:{story:`В избранном.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    gap: 'var(--spacing-4)'
  }}>\r
      <IconButtonLike {...args} isLiked />\r
      <IconButtonLike {...args} isLiked={false} />\r
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Yes и No рядом.`,...u.parameters?.docs?.description}}}})))()}f();export{u as AllVariants,l as Liked,c as NotLiked,d as __namedExportsOrder,s as default};