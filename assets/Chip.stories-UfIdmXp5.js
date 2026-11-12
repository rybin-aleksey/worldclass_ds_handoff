import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BJpw_U5F.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./cx-BOo3OvTL.js";var i,a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{i=`_root_1cnw1_1`,a=`_time_1cnw1_21`,o=`_filter_1cnw1_30`,s=`_disabled_1cnw1_35`,c=`_tab_1cnw1_42`,l=`_selected_1cnw1_46`,u=`_tag_1cnw1_56`,d=`_tagSmall_1cnw1_62`,f={root:i,time:a,filter:o,disabled:s,tab:c,selected:l,tag:u,tagSmall:d}})))()}function m({type:e=`time`,state:t,label:n,className:i,disabled:a,...o}){let s=e===`tag`||e===`tag small`,c=t??(s?`default`:`not selected`),l=r(f.root,f[g[e]],f[_[c]],i);return s?(0,h.jsx)(`span`,{className:l,children:n}):(0,h.jsx)(`button`,{type:`button`,"aria-pressed":c===`selected`,disabled:a||c===`disabled`,className:l,...o,children:n})}var h,g,_;function v(){return(v=e((()=>{p(),h=n(),g={time:`time`,filter:`filter`,tab:`tab`,tag:`tag`,"tag small":`tagSmall`},_={"not selected":`notSelected`,selected:`selected`,disabled:`disabled`,default:`stateDefault`},m.__docgenInfo={description:`Chip — Figma 1214:7039. Чипсы выбора (time, filter, tab) и метки (tag, tag small).`,methods:[],displayName:`Chip`,props:{type:{required:!1,tsType:{name:`union`,raw:`'time' | 'filter' | 'tab' | 'tag' | 'tag small'`,elements:[{name:`literal`,value:`'time'`},{name:`literal`,value:`'filter'`},{name:`literal`,value:`'tab'`},{name:`literal`,value:`'tag'`},{name:`literal`,value:`'tag small'`}]},description:`type: time | filter | tab | tag | tag small`,defaultValue:{value:`'time'`,computed:!1}},state:{required:!1,tsType:{name:`union`,raw:`'not selected' | 'selected' | 'disabled' | 'default'`,elements:[{name:`literal`,value:`'not selected'`},{name:`literal`,value:`'selected'`},{name:`literal`,value:`'disabled'`},{name:`literal`,value:`'default'`}]},description:`state. Допустимые сочетания (9 вариантов Figma):
time — not selected | selected; filter — not selected | selected | disabled;
tab — not selected | selected; tag и tag small — default.`},label:{required:!0,tsType:{name:`string`},description:`Label`}},composes:[`Omit`]}})))()}function y({label:e,children:t}){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`span`,{className:`ds-caption-small-16`,children:e}),(0,x.jsx)(`div`,{children:t})]})}var b,x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{b=t(),v(),x=n(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Selection/Chip`,component:m,tags:[`autodocs`],args:{type:`time`,state:`not selected`,label:`15:00`,onClick:S()},argTypes:{type:{control:`select`,options:[`time`,`filter`,`tab`,`tag`,`tag small`],description:`type`},state:{control:`select`,options:[`not selected`,`selected`,`disabled`,`default`],description:`state (допустимые сочетания — см. описание)`},label:{control:`text`,description:`Label`},onClick:{action:`click`}},parameters:{layout:`centered`,docs:{description:{component:"Чипсы выбора (time, filter, tab) и метки (tag, tag small). Выбранный — chips/selected/bg + chips/selected/text.\r\nМетки tag и tag small не кликабельны и рендерятся как `<span>`.\r\n\nFigma: Chip `1214:7039` · 9 вариантов."}}}},w={},T={args:{state:`selected`}},E={args:{type:`filter`,label:`Йога`}},D={args:{type:`filter`,state:`disabled`,label:`Бокс`}},O={args:{type:`tab`,state:`selected`,label:`Все`}},k={args:{type:`tag`,state:`default`,label:`Хатха-йога`}},A={args:{type:`tag small`,state:`default`,label:`Растяжка`}},j=[[`time`,`not selected`,`15:00`],[`time`,`selected`,`15:00`],[`filter`,`not selected`,`Йога`],[`filter`,`selected`,`Йога`],[`filter`,`disabled`,`Йога`],[`tab`,`not selected`,`Моя цель`],[`tab`,`selected`,`Все`],[`tag`,`default`,`Хатха-йога`],[`tag small`,`default`,`Растяжка`]],M={parameters:{layout:`padded`},render:function(e){let[t,n]=(0,b.useState)(`15:00`);return(0,x.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-6)`},children:[(0,x.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`160px 1fr`,gap:`var(--spacing-3)`,alignItems:`center`},children:j.map(([t,n,r])=>(0,x.jsx)(y,{label:`${t} · ${n}`,children:(0,x.jsx)(m,{...e,type:t,state:n,label:r})},`${t}${n}`))}),(0,x.jsx)(`div`,{style:{display:`flex`,gap:`var(--spacing-2)`},children:[`09:00`,`12:00`,`15:00`,`18:30`].map(e=>(0,x.jsx)(m,{type:`time`,label:e,state:t===e?`selected`:`not selected`,onClick:()=>n(e)},e))})]})}},N=[`Time`,`TimeSelected`,`Filter`,`FilterDisabled`,`Tab`,`Tag`,`TagSmall`,`AllVariants`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{}`,...w.parameters?.docs?.source},description:{story:`Слот времени.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'selected'
  }
}`,...T.parameters?.docs?.source},description:{story:`Выбранный слот времени.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'filter',
    label: 'Йога'
  }
}`,...E.parameters?.docs?.source},description:{story:`Фильтр.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'filter',
    state: 'disabled',
    label: 'Бокс'
  }
}`,...D.parameters?.docs?.source},description:{story:`Фильтр недоступен.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tab',
    state: 'selected',
    label: 'Все'
  }
}`,...O.parameters?.docs?.source},description:{story:`Таб в строке «Все / Моя цель / …».`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tag',
    state: 'default',
    label: 'Хатха-йога'
  }
}`,...k.parameters?.docs?.source},description:{story:`Тег тренировки.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'tag small',
    state: 'default',
    label: 'Растяжка'
  }
}`,...A.parameters?.docs?.source},description:{story:`Тег каталога.`,...A.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'padded'
  },
  render: function All(args) {
    const [time, setTime] = useState('15:00');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>\r
        <div style={{
        display: 'grid',
        gridTemplateColumns: '160px 1fr',
        gap: 'var(--spacing-3)',
        alignItems: 'center'
      }}>\r
          {VARIANTS.map(([type, state, label]) => <Line key={\`\${type}\${state}\`} label={\`\${type} · \${state}\`}>\r
              <Chip {...args} type={type} state={state} label={label} />\r
            </Line>)}\r
        </div>\r
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-2)'
      }}>\r
          {['09:00', '12:00', '15:00', '18:30'].map(t => <Chip key={t} type="time" label={t} state={time === t ? 'selected' : 'not selected'} onClick={() => setTime(t)} />)}\r
        </div>\r
      </div>;
  }
}`,...M.parameters?.docs?.source},description:{story:`Все 9 вариантов Figma + живой выбор слота времени.`,...M.parameters?.docs?.description}}}})))()}P();export{M as AllVariants,E as Filter,D as FilterDisabled,O as Tab,k as Tag,A as TagSmall,w as Time,T as TimeSelected,N as __namedExportsOrder,C as default};