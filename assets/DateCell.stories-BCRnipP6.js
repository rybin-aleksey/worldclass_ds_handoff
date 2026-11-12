import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{f as t}from"./iframe-BphvaqyB.js";import{t as n}from"./jsx-runtime-MKhVqBIO.js";import{t as r}from"./cx-BOo3OvTL.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{i=`_root_ih6wa_1`,a=`_dotted_ih6wa_16`,o=`_text_ih6wa_17`,s=`_dot_ih6wa_16`,c=`_active_ih6wa_30`,l={root:i,dotted:a,text:o,dot:s,active:c}})))()}function d({isActive:e=!1,isDotted:t=!1,day:n,number:i,className:a,...o}){return(0,f.jsxs)(`button`,{type:`button`,"aria-pressed":e,className:r(l.root,e&&l.active,t&&!e&&l.dotted,a),...o,children:[(0,f.jsxs)(`span`,{className:l.text,children:[(0,f.jsx)(`span`,{className:`ds-cart-chips`,children:n}),(0,f.jsx)(`span`,{className:`ds-heading-text-20`,children:i})]}),t&&!e&&(0,f.jsx)(`span`,{className:l.dot,"aria-hidden":`true`})]})}var f;function p(){return(p=e((()=>{u(),f=n(),d.__docgenInfo={description:`Date Cell — Figma 1595:2255. Ячейка дня в ленте дат.`,methods:[],displayName:`DateCell`,props:{isActive:{required:!1,tsType:{name:`boolean`},description:`isActive: false | true — выбранный день`,defaultValue:{value:`false`,computed:!1}},isDotted:{required:!1,tsType:{name:`boolean`},description:`isDotted: точка-индикатор под числом (в Figma только у неактивной ячейки)`,defaultValue:{value:`false`,computed:!1}},day:{required:!0,tsType:{name:`string`},description:`Day — день недели`},number:{required:!0,tsType:{name:`string`},description:`Number — число`}},composes:[`ButtonHTMLAttributes`]}})))()}var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{m=t(),p(),h=n(),{fn:g}=__STORYBOOK_MODULE_TEST__,_={title:`Components/Selection/Date Cell`,component:d,tags:[`autodocs`],args:{isActive:!1,isDotted:!1,day:`пн`,number:`1`,onClick:g()},argTypes:{isActive:{control:`boolean`,description:`isActive`},isDotted:{control:`boolean`,description:`isDotted (только при isActive=false)`},day:{control:`text`,description:`Day`},number:{control:`text`,description:`Number`},onClick:{action:`click`}},parameters:{layout:`centered`,docs:{description:{component:`Ячейка дня в ленте дат: день недели, число, точка-индикатор (есть занятия).\r
В Figma 3 варианта: точка бывает только у неактивной ячейки.\r

Figma: Date Cell \`1595:2255\` · isActive: false | true · isDotted: true | false · Day, Number.`}}}},v={},y={args:{isDotted:!0}},b={args:{isActive:!0}},x=[[`пн`,`10`],[`вт`,`11`],[`ср`,`12`],[`чт`,`13`],[`пт`,`14`],[`сб`,`15`],[`вс`,`16`]],S={render:function(e){let[t,n]=(0,m.useState)(`12`);return(0,h.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--spacing-6)`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`var(--spacing-4)`},children:[(0,h.jsx)(d,{...e,isActive:!1,isDotted:!0}),(0,h.jsx)(d,{...e,isActive:!1,isDotted:!1}),(0,h.jsx)(d,{...e,isActive:!0})]}),(0,h.jsx)(`div`,{style:{display:`flex`,gap:`var(--spacing-2)`},children:x.map(([e,r])=>(0,h.jsx)(d,{day:e,number:r,isDotted:[`11`,`14`].includes(r),isActive:t===r,onClick:()=>n(r)},r))})]})}},C=[`Default`,`Dotted`,`Active`,`AllVariants`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{}`,...v.parameters?.docs?.source},description:{story:`Обычный день.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isDotted: true
  }
}`,...y.parameters?.docs?.source},description:{story:`День с занятиями.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isActive: true
  }
}`,...b.parameters?.docs?.source},description:{story:`Выбранный день.`,...b.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function All(args) {
    const [day, setDay] = useState('12');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--spacing-6)'
    }}>\r
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-4)'
      }}>\r
          <DateCell {...args} isActive={false} isDotted />\r
          <DateCell {...args} isActive={false} isDotted={false} />\r
          <DateCell {...args} isActive />\r
        </div>\r
        <div style={{
        display: 'flex',
        gap: 'var(--spacing-2)'
      }}>\r
          {WEEK.map(([d, n]) => <DateCell key={n} day={d} number={n} isDotted={['11', '14'].includes(n)} isActive={day === n} onClick={() => setDay(n)} />)}\r
        </div>\r
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:`Три варианта Figma + живая лента недели.`,...S.parameters?.docs?.description}}}})))()}w();export{b as Active,S as AllVariants,v as Default,y as Dotted,C as __namedExportsOrder,_ as default};