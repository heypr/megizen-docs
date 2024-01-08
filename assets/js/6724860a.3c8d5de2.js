"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[450],{4600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var d=n(1527),s=n(1683);const o={sidebar_custom_props:{description:"Applies/removes a model to/from an entity."}},l="megmodel",i={id:"command/megmodel",title:"megmodel",description:"Applies/removes a model to/from an entity.",source:"@site/docs/command/megmodel.mdx",sourceDirName:"command",slug:"/command/megmodel",permalink:"/megizen-docs/command/megmodel",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/command/megmodel.mdx",tags:[],version:"current",frontMatter:{sidebar_custom_props:{description:"Applies/removes a model to/from an entity."}},sidebar:"tutorialSidebar",previous:{title:"Megizen",permalink:"/megizen-docs/"},next:{title:"megstate",permalink:"/megizen-docs/command/megstate"}},r={},c=[{value:"Arguments",id:"arguments",level:2},{value:"Examples",id:"examples",level:2},{value:"See Also",id:"see-also",level:2}];function a(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(t.h1,{id:"megmodel",children:(0,d.jsx)(t.code,{children:"megmodel"})}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-js",children:"megmodel [entity:<entity>] [model:<model>] (remove)\n"})}),"\n",(0,d.jsxs)(t.p,{children:["Applies/removes a model to/from an entity.\r\nIf you have come over from Mythic, this is equivalent to the ",(0,d.jsx)(t.code,{children:"model"})," mechanic.\r\nTo configure other options such as hitbox/invisible/damagetint/etc, adjust the MegModeledEntityTag object instead."]}),"\n",(0,d.jsx)(t.h2,{id:"arguments",children:"Arguments"}),"\n",(0,d.jsxs)(t.table,{children:[(0,d.jsx)(t.thead,{children:(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.th,{children:"Argument"}),(0,d.jsx)(t.th,{children:"Input"}),(0,d.jsx)(t.th,{children:"Required"}),(0,d.jsx)(t.th,{children:"Default"}),(0,d.jsx)(t.th,{children:"Description"})]})}),(0,d.jsxs)(t.tbody,{children:[(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"entity"}),(0,d.jsx)(t.td,{children:"EntityTag"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The entity to apply the model to."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"model"}),(0,d.jsx)(t.td,{children:"ElementTag"}),(0,d.jsx)(t.td,{children:"yes"}),(0,d.jsx)(t.td,{}),(0,d.jsx)(t.td,{children:"The model to apply. Must be a name of a loaded model in ModelEngine."})]}),(0,d.jsxs)(t.tr,{children:[(0,d.jsx)(t.td,{children:"remove"}),(0,d.jsx)(t.td,{children:"ElementTag(Boolean)"}),(0,d.jsx)(t.td,{children:"no"}),(0,d.jsx)(t.td,{children:(0,d.jsx)(t.code,{children:"false"})}),(0,d.jsx)(t.td,{children:"Whether to remove the model instead of applying it."})]})]})]}),"\n",(0,d.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,d.jsx)(t.pre,{children:(0,d.jsx)(t.code,{className:"language-yml",children:"# Used to add a model to an entity when it spawns.\r\non zombie spawns:\r\n- megmodel entity:<context.entity> model:my_model\n"})}),"\n",(0,d.jsx)(t.h2,{id:"see-also",children:"See Also"}),"\n",(0,d.jsxs)(t.ul,{children:["\n",(0,d.jsxs)(t.li,{children:["Object Type ",(0,d.jsxs)("a",{href:"/megizen-docs/objecttype/MegModeledEntityTag",children:[" ",(0,d.jsx)(t.code,{children:"MegModeledEntityTag"})]})]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,d.jsx)(t,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},1683:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>l});var d=n(959);const s={},o=d.createContext(s);function l(e){const t=d.useContext(o);return d.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(o.Provider,{value:t},e.children)}}}]);