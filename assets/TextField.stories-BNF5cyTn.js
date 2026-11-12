import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BphvaqyB.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./cx-BOo3OvTL.js";import{n as i}from"./Icon-CKeJH59w.js";import{t as a}from"./Icon-DQAy2_MQ.js";import{n as o,t as s}from"./HelperText-lEH99G-V.js";function c(){return(c=e((()=>{o()})))()}var l,u,d,f,p,m,h;function g(){return(g=e((()=>{l=`_root_p990z_1`,u=`_field_p990z_7`,d=`_pressed_p990z_18`,f=`_icon_p990z_21`,p=`_input_p990z_22`,m=`_disabled_p990z_34`,h={root:l,field:u,pressed:d,icon:f,input:p,disabled:m}})))()}function _({role:e=`default`,isIcon:t=!1,isHelperText:n=!1,placeholder:a=`Введите название тренировки`,helperText:o=`Helper text`,helperState:c=`default`,label:l,disabled:u,className:d,id:f,...p}){let m=(0,v.useId)(),g=f??m,_=`${g}-helper`,b=u||e===`disabled`;return(0,y.jsxs)(`div`,{className:r(h.root,d),children:[(0,y.jsxs)(`div`,{className:r(h.field,e===`pressed`&&h.pressed,b&&h.disabled),children:[t&&(0,y.jsx)(i,{name:`20px / search`,className:h.icon}),(0,y.jsx)(`input`,{id:g,className:r(h.input,`ds-cart-chips`),placeholder:a,"aria-label":l??a,"aria-describedby":n?_:void 0,"aria-invalid":n&&c===`negative`?!0:void 0,disabled:b,...p})]}),n&&(0,y.jsx)(s,{id:_,state:b?`disabled`:c,helperText:o})]})}var v,y;function b(){return(b=e((()=>{v=t(),a(),c(),g(),y=n(),_.__docgenInfo={description:`Text Field — Figma 2223:4571 (8 вариантов: Role × isIcon × isHelperText).`,methods:[],displayName:`TextField`,props:{role:{required:!1,tsType:{name:`union`,raw:`'default' | 'pressed' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'pressed'`},{name:`literal`,value:`'disabled'`}]},description:`Role: Default | Pressed | Disabled. Pressed работает и нативно — при фокусе.`,defaultValue:{value:`'default'`,computed:!1}},isIcon:{required:!1,tsType:{name:`boolean`},description:`isIcon: иконка поиска слева`,defaultValue:{value:`false`,computed:!1}},isHelperText:{required:!1,tsType:{name:`boolean`},description:`isHelperText: показать Helper Text под полем`,defaultValue:{value:`false`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:`Placeholder`,defaultValue:{value:`'Введите название тренировки'`,computed:!1}},helperText:{required:!1,tsType:{name:`string`},description:`Текст Helper Text`,defaultValue:{value:`'Helper text'`,computed:!1}},helperState:{required:!1,tsType:{name:`union`,raw:`'default' | 'negative' | 'success' | 'disabled'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'negative'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'disabled'`}]},description:`State вложенного Helper Text: ошибка и успех поля задаются только через него`,defaultValue:{value:`'default'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Доступное имя поля, если рядом нет видимой подписи`}},composes:[`Omit`]}})))()}function x({label:e,children:t}){return(0,S.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-2)`},children:[(0,S.jsx)(`span`,{className:`ds-caption-small-16`,children:e}),t]})}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b(),S=n(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Inputs/Text Field`,component:_,tags:[`autodocs`],args:{role:`default`,isIcon:!1,isHelperText:!1,placeholder:`Введите название тренировки`,helperText:`Helper text`,helperState:`default`,onChange:C()},argTypes:{role:{control:`inline-radio`,options:[`default`,`pressed`,`disabled`],description:`Role`},isIcon:{control:`boolean`,description:`isIcon — иконка поиска`},isHelperText:{control:`boolean`,description:`isHelperText`},placeholder:{control:`text`,description:`Placeholder`},helperText:{control:`text`},helperState:{control:`inline-radio`,options:[`default`,`negative`,`success`,`disabled`],description:`State вложенного Helper Text`},label:{control:`text`,description:`Доступное имя поля`},value:{control:`text`},disabled:{control:`boolean`},onChange:{action:`change`}},parameters:{layout:`padded`,docs:{description:{component:"Поле ввода с опциональной иконкой поиска и подсказкой. Высота поля 44 px.\r\nPressed работает и нативно — кликните в поле. Своей «красной» ошибки у поля нет:\r\nошибка и успех показываются только через Helper Text (`isHelperText` + `helperState`).\r\n\nFigma: Text Field `2223:4571` · 8 вариантов (Role × isIcon × isHelperText). Пример состояний — `40000403:3026`."}}},decorators:[e=>(0,S.jsx)(`div`,{style:{maxWidth:343},children:(0,S.jsx)(e,{})})]},T={},E={args:{isIcon:!0,placeholder:`Поиск тренера`}},D={args:{role:`pressed`}},O={args:{role:`disabled`}},k={args:{isHelperText:!0,helperState:`negative`,helperText:`Неверный код`,placeholder:`Код из СМС`}},A={args:{isHelperText:!0,helperState:`success`,helperText:`Код подтверждён`,placeholder:`Код из СМС`}},j={decorators:[e=>(0,S.jsx)(e,{})],render:e=>(0,S.jsxs)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(2, 311px)`,gap:`var(--spacing-6)`},children:[[`default`,`pressed`,`disabled`].flatMap(t=>[!1,!0].map(n=>(0,S.jsx)(x,{label:`role=${t} · isIcon=${n}`,children:(0,S.jsx)(_,{...e,role:t,isIcon:n,isHelperText:!1})},`${t}${n}`))),[!1,!0].map(t=>(0,S.jsx)(x,{label:`isHelperText · isIcon=${t}`,children:(0,S.jsx)(_,{...e,isIcon:t,isHelperText:!0})},`h${t}`)),(0,S.jsx)(x,{label:`helper · negative`,children:(0,S.jsx)(_,{...e,isHelperText:!0,helperState:`negative`,helperText:`Неверный код`})}),(0,S.jsx)(x,{label:`helper · success`,children:(0,S.jsx)(_,{...e,isHelperText:!0,helperState:`success`,helperText:`Код подтверждён`})})]})},M=[`Default`,`Search`,`Pressed`,`Disabled`,`Negative`,`Success`,`AllVariants`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{}`,...T.parameters?.docs?.source},description:{story:`Поле по умолчанию.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isIcon: true,
    placeholder: 'Поиск тренера'
  }
}`,...E.parameters?.docs?.source},description:{story:`Поиск: с иконкой.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'pressed'
  }
}`,...D.parameters?.docs?.source},description:{story:`Pressed — зафиксированное состояние фокуса.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    role: 'disabled'
  }
}`,...O.parameters?.docs?.source},description:{story:`Недоступно.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    isHelperText: true,
    helperState: 'negative',
    helperText: 'Неверный код',
    placeholder: 'Код из СМС'
  }
}`,...k.parameters?.docs?.source},description:{story:`Ошибка: код из СМС не подошёл.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    isHelperText: true,
    helperState: 'success',
    helperText: 'Код подтверждён',
    placeholder: 'Код из СМС'
  }
}`,...A.parameters?.docs?.source},description:{story:`Успех: код подтверждён.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: args => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 311px)',
    gap: 'var(--spacing-6)'
  }}>\r
      {(['default', 'pressed', 'disabled'] as TextFieldRole[]).flatMap(role => [false, true].map(isIcon => <Cell key={\`\${role}\${isIcon}\`} label={\`role=\${role} · isIcon=\${isIcon}\`}>\r
            <TextField {...args} role={role} isIcon={isIcon} isHelperText={false} />\r
          </Cell>))}\r
      {[false, true].map(isIcon => <Cell key={\`h\${isIcon}\`} label={\`isHelperText · isIcon=\${isIcon}\`}>\r
          <TextField {...args} isIcon={isIcon} isHelperText />\r
        </Cell>)}\r
      <Cell label="helper · negative"><TextField {...args} isHelperText helperState="negative" helperText="Неверный код" /></Cell>\r
      <Cell label="helper · success"><TextField {...args} isHelperText helperState="success" helperText="Код подтверждён" /></Cell>\r
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Матрица Role × isIcon × isHelperText — все 8 вариантов Figma и состояния Helper Text.`,...j.parameters?.docs?.description}}}})))()}N();export{j as AllVariants,T as Default,O as Disabled,k as Negative,D as Pressed,E as Search,A as Success,M as __namedExportsOrder,w as default};