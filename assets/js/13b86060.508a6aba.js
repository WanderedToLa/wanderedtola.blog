"use strict";(self.webpackChunkwanderedtola_blog=self.webpackChunkwanderedtola_blog||[]).push([[80],{6292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(7624),c=t(2172);const s={sidebar_position:2},o="Javascript\uc758 null check",i={id:"Frontend/js-type",title:"Javascript\uc758 null check",description:"javascript \uc5d0\uc11c\uc758 null\uc740 falsy\ud55c \uc6d0\uc2dc \uac12\uc774\uc9c0\ub9cc \ud0c0\uc785\uc740 object\uc778 \ud2b9\ubcc4\ud55c \uc874\uc7ac.",source:"@site/docs/Frontend/js-type.md",sourceDirName:"Frontend",slug:"/Frontend/js-type",permalink:"/docs/Frontend/js-type",draft:!1,unlisted:!1,editUrl:"https://github.com/WanderedToLa/wanderedtola.blog/tree/master/docs/Frontend/js-type.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"WikiSidebar",previous:{title:"[FECONF 2022] \ub0b4 import \ubb38\uc774 \uadf8\ub807\uac8c \uc774\uc0c1\ud588\ub098\uc694?",permalink:"/docs/Frontend/fe-conf-import"},next:{title:"Next.js 14",permalink:"/docs/Frontend/next-14"}},a={},l=[];function d(e){const n={br:"br",code:"code",h1:"h1",p:"p",pre:"pre",...(0,c.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"javascript\uc758-null-check",children:"Javascript\uc758 null check"}),"\n",(0,r.jsxs)(n.p,{children:["javascript \uc5d0\uc11c\uc758 ",(0,r.jsx)(n.code,{children:"null"}),"\uc740 falsy\ud55c \uc6d0\uc2dc \uac12\uc774\uc9c0\ub9cc \ud0c0\uc785\uc740 ",(0,r.jsx)(n.code,{children:"object"}),"\uc778 \ud2b9\ubcc4\ud55c \uc874\uc7ac."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"typeof null === 'object'; // true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc815\ud655\ud788\ub294 ",(0,r.jsx)(n.code,{children:"null"}),"\uc744 \ubc18\ud658\ud558\ub294 \ucabd\uc774 \ub9de\uaca0\uc9c0\ub9cc \uadfc 20\ub144\uac04 \ubc84\ud168\uc654\uace0 \uc774\uc81c\uc640 \uc218\uc815\ud558\uae30\uc5d0\ub294 \ub2a6\uc5b4\ubc84\ub838\uc73c\ub2c8 \uc0ac\uc6a9\ud558\ub294\ub370 \uc8fc\uc758 \ud560\uac83.",(0,r.jsx)(n.br,{}),"\n","\ub530\ub77c\uc11c \uac12\uc744 \uc815\ud655\ud788 \ud655\uc778\ud558\uae30\uc704\ud574 \uc870\uac74\uc774 \ud558\ub098 \ub354 \ud544\uc694\ud568"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var a = null;\n!a && typeof a === 'object'; // true\n"})}),"\n",(0,r.jsx)(n.h1,{id:"function-type",children:"function type"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"typeof function a(b , c) {\n  /*... */\n}; === 'function' // true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\uc704\uc758 \ucf54\ub4dc\ub294 \ub9c8\uce58 ",(0,r.jsx)(n.code,{children:"function"}),"\uc774 \ucd5c\uc0c1\uc704 \ub808\ubca8\uc758 \ub0b4\uc7a5\ud0c0\uc785 \ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc\n\uc815\ud655\ud788\ub294 ",(0,r.jsx)(n.code,{children:"object"}),"\uc758 \ud558\uc704\ud0c0\uc785\uc774\uace0,",(0,r.jsx)(n.br,{}),"\n","\ud568\uc218\ub294 \ud638\ucd9c\uac00\ub2a5\ud55c \uac1d\uccb4\ub77c\uace0 \uba85\uc2dc\ub418\uc5b4 \uc788\uc74c",(0,r.jsx)(n.br,{}),"\n","\ub530\ub77c\uc11c ",(0,r.jsx)(n.code,{children:"object"}),"\uc758 \ud558\uc704 \ud0c0\uc785\uc774\uae30 \ub54c\ubb38\uc5d0 ",(0,r.jsx)(n.code,{children:"length"}),"\ud504\ub85c\ud37c\ud2f0\ub85c \uc778\uc790\uc758 \uac2f\uc218\ub97c \uc54c\uc218\uc788\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"a.length; //2\n"})}),"\n",(0,r.jsx)(n.h1,{id:"\ubc30\uc5f4",children:"\ubc30\uc5f4"}),"\n",(0,r.jsxs)(n.p,{children:["\ubc30\uc5f4\ub610\ud55c \ub9c8\ucc2c\uac00\uc9c0 \uc778\ub370 \ubc30\uc5f4\uc740 \uc22b\uc790 \uc778\ub371\uc2a4\ub97c \uac00\uc9c0\uba70 length \ud504\ub85c\ud37c\ud2f0\uac00",(0,r.jsx)(n.br,{}),"\n","\uc790\ub3d9\uc73c\ub85c \uad00\ub9ac\ub418\ub294 \ud2b9\uc131\uc744 \uac00\uc9c4 \uac1d\uccb4\uc758 \ud558\uc704\ud0c0\uc785\uc774\ub2e4."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"typeof [1, 2, 3] === 'object'; //true\n"})}),"\n",(0,r.jsxs)(n.p,{children:["typescript\uc5d0\uc11c\ub294 \uc774\ub7ec\ud55c \ud2b9\uc131\uc744 \uc774\uc6a9\ud574 \uc81c\ub124\ub9ad\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30\ub3c4 \ud558\ub294\ub370,",(0,r.jsx)(n.br,{}),"\n","\uc608\ub97c \ub4e4\uc5b4 \ubc30\uc5f4\uc758 \uae38\uc774\ub97c \ucd94\ub860\ud558\ub294 \ud0c0\uc785\uc758 \uacbd\uc6b0"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"type Length<T extends any[]> = T extends { length: infer L } ? L : never;\n"})}),"\n",(0,r.jsx)(n.p,{children:"\uc704\uc640 \uac19\uc774 \ubc30\uc5f4\uc5d0 length \ud504\ub85c\ud37c\ud2f0\uac00 \uc788\ub2e4\ub294 \uc810\uc744 \ud65c\uc6a9\ud560 \uc218 \uc788\uc74c"})]})}function p(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>i,M:()=>o});var r=t(1504);const c={},s=r.createContext(c);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);