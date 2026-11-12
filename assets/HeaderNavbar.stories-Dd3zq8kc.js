import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./jsx-runtime-MKhVqBIO.js";import{t as n}from"./cx-BOo3OvTL.js";import{n as r,t as i}from"./Icon-CKeJH59w.js";import{t as a}from"./Icon-DQAy2_MQ.js";var o,s,c,l,u,d;function f(){return(f=e((()=>{o=`_root_20c9p_1`,s=`_container_20c9p_7`,c=`_title_20c9p_16`,l=`_back_20c9p_23`,u=`_action_20c9p_24`,d={root:o,container:s,title:c,back:l,action:u}})))()}function p({title:e,showBack:t=!0,onBack:i,actionIcon:a=`24px / filter`,actionLabel:o=`Фильтр`,onAction:s,className:c,...l}){return(0,m.jsx)(`header`,{className:n(d.root,c),...l,children:(0,m.jsxs)(`div`,{className:d.container,children:[t&&(0,m.jsx)(`button`,{type:`button`,className:d.back,"aria-label":`Назад`,onClick:i,children:(0,m.jsx)(r,{name:`Back`})}),(0,m.jsx)(`h1`,{className:n(d.title,`ds-heading-text-20`),children:e}),a&&(0,m.jsx)(`button`,{type:`button`,className:d.action,"aria-label":o,onClick:s,children:(0,m.jsx)(r,{name:a})})]})})}var m;function h(){return(h=e((()=>{a(),f(),m=t(),p.__docgenInfo={description:`Header / Navbar — Figma 1025:7758. Шапка экрана 375×92 (с зоной статус-бара 48 px).`,methods:[],displayName:`HeaderNavbar`,props:{title:{required:!0,tsType:{name:`string`},description:`Title (в Figma меняется оверрайдом)`},showBack:{required:!1,tsType:{name:`boolean`},description:`Показать кнопку «Назад» (Back 23×36)`,defaultValue:{value:`true`,computed:!1}},onBack:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},actionIcon:{required:!1,tsType:{name:`union`,raw:`IconName | null`,elements:[{name:`unknown`},{name:`null`}]},description:`Иконка справа; null — без действия. По умолчанию — 24px / filter, как в Figma`,defaultValue:{value:`'24px / filter'`,computed:!1}},actionLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Фильтр'`,computed:!1}},onAction:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}},composes:[`HTMLAttributes`]}})))()}var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{a(),h(),g=t(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Navigation/Header Navbar`,component:p,tags:[`autodocs`],args:{title:`Расписание`,showBack:!0,actionIcon:`24px / filter`,actionLabel:`Фильтр`,onBack:_(),onAction:_()},argTypes:{title:{control:`text`,description:`Title`},showBack:{control:`boolean`},actionIcon:{control:`select`,options:[null,...i.filter(e=>e.startsWith(`24px`))],description:`Иконка справа; null — без действия`},actionLabel:{control:`text`},onBack:{action:`back`},onAction:{action:`action`}},parameters:{layout:`fullscreen`,docs:{description:{component:`Шапка экрана 375×92: зона статус-бара 48 px, «Назад» слева, заголовок по центру, действие справа.\r
В Figma текст и иконка меняются оверрайдами — в коде это пропсы.\r

Figma: Header / Navbar \`1025:7758\`.`}}},decorators:[e=>(0,g.jsx)(`div`,{style:{width:375},children:(0,g.jsx)(e,{})})]},y={},b={args:{title:`Мой счёт`,actionIcon:null}},x={args:{title:`Каталог`,showBack:!1,actionIcon:`24px / notification`,actionLabel:`Уведомления`}},S={args:{title:`Выберите другого тренера на это время`}},C={render:e=>(0,g.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-4)`,background:`var(--bg-baseGray)`},children:[(0,g.jsx)(p,{...e}),(0,g.jsx)(p,{...e,title:`Мой счёт`,actionIcon:null}),(0,g.jsx)(p,{...e,title:`Каталог`,showBack:!1,actionIcon:`24px / notification`})]})},w=[`Default`,`NoAction`,`Root`,`LongTitle`,`AllVariants`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{}`,...y.parameters?.docs?.source},description:{story:`С фильтром справа.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Мой счёт',
    actionIcon: null
  }
}`,...b.parameters?.docs?.source},description:{story:`Без действия справа.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Каталог',
    showBack: false,
    actionIcon: '24px / notification',
    actionLabel: 'Уведомления'
  }
}`,...x.parameters?.docs?.source},description:{story:`Корневой экран без «Назад».`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Выберите другого тренера на это время'
  }
}`,...S.parameters?.docs?.source},description:{story:`Длинный заголовок обрезается многоточием.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--spacing-4)',
    background: 'var(--bg-baseGray)'
  }}>\r
      <HeaderNavbar {...args} />\r
      <HeaderNavbar {...args} title="Мой счёт" actionIcon={null} />\r
      <HeaderNavbar {...args} title="Каталог" showBack={false} actionIcon="24px / notification" />\r
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Все варианты композиции.`,...C.parameters?.docs?.description}}}})))()}T();export{C as AllVariants,y as Default,S as LongTitle,b as NoAction,x as Root,w as __namedExportsOrder,v as default};