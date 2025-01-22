"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[5967],{2780:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"types/db-doc","title":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","description":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 (Document-Oriented Databases) \u2014 \u044d\u0442\u043e \u0442\u0438\u043f NoSQL \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043e\u0431\u044b\u0447\u043d\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON, BSON, XML \u0438\u043b\u0438 YAML. \u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0430\u043c\u043e\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u0443\u044e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044e \u043a\u043b\u044e\u0447\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438, \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438.","source":"@site/database/types/db-doc.md","sourceDirName":"types","slug":"/database/types/nosql/db-doc","permalink":"/database/database/types/nosql/db-doc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/database/types/nosql/db-doc"},"sidebar":"tutorialSidebar","previous":{"title":"\u0422\u0438\u043f\u044b \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/database/types"},"next":{"title":"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/database/types/rdb"}}');var i=s(4848),r=s(8453);const d={sidebar_position:1,slug:"/database/types/nosql/db-doc"},c="\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",t={},h=[{value:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",id:"\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435-\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445?",id:"\u043a\u043e\u0433\u0434\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-\u0438-\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",level:2},{value:"\u0418\u0442\u043e\u0433",id:"\u0438\u0442\u043e\u0433",level:2}];function o(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 (Document-Oriented Databases) \u2014 \u044d\u0442\u043e \u0442\u0438\u043f NoSQL \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0445\u0440\u0430\u043d\u044f\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043e\u0431\u044b\u0447\u043d\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON, BSON, XML \u0438\u043b\u0438 YAML. \u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u0430\u043c\u043e\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u0443\u044e \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044c, \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0449\u0443\u044e \u043a\u043b\u044e\u0447\u0438 \u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u043e\u0433\u0443\u0442 \u0431\u044b\u0442\u044c \u043c\u0430\u0441\u0441\u0438\u0432\u0430\u043c\u0438, \u043e\u0431\u044a\u0435\u043a\u0442\u0430\u043c\u0438 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u043c\u0438 \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u043c\u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438."}),"\n",(0,i.jsx)(e.p,{children:"\u0422\u0430\u043a\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u0441\u043b\u0430\u0431\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0438\u0445 \u0443\u0434\u043e\u0431\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438, \u0433\u0434\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043c\u043e\u0436\u0435\u0442 \u0447\u0430\u0441\u0442\u043e \u0438\u0437\u043c\u0435\u043d\u044f\u0442\u044c\u0441\u044f."}),"\n",(0,i.jsx)(e.h2,{id:"\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435-\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438",children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0413\u0438\u0431\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0412 \u043e\u0442\u043b\u0438\u0447\u0438\u0435 \u043e\u0442 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u0441\u0442\u0440\u043e\u0433\u043e\u0439 \u0441\u0445\u0435\u043c\u044b. \u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u044b \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438 \u043c\u043e\u0433\u0443\u0442 \u0438\u043c\u0435\u0442\u044c \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0439 \u043d\u0430\u0431\u043e\u0440 \u043f\u043e\u043b\u0435\u0439."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432, \u043c\u0430\u0441\u0441\u0438\u0432\u043e\u0432 \u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0411\u044b\u0441\u0442\u0440\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0434\u0430\u043d\u043d\u044b\u043c"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0418\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f \u043f\u043e\u043b\u0435\u0439 \u0432\u043d\u0443\u0442\u0440\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u043e \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u043d\u0443\u0436\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 (\u0448\u0430\u0440\u0434\u0438\u043d\u0433), \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0438\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u043e\u0431\u044a\u0435\u043c\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"MongoDB"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f: BSON (JSON-\u043f\u043e\u0434\u043e\u0431\u043d\u044b\u0439 \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442)."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c."}),"\n",(0,i.jsx)(e.li,{children:"\u0413\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u0430\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u044f\u0437\u044b\u043a\u0430\u043c\u0438 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "user_id": 123,\n  "name": "John Doe",\n  "email": "john.doe@example.com",\n  "orders": [\n    {\n      "order_id": 1,\n      "amount": 250,\n      "items": ["Laptop", "Mouse"]\n    },\n    {\n      "order_id": 2,\n      "amount": 80,\n      "items": ["Keyboard"]\n    }\n  ]\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"CouchDB"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f: JSON."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c: \u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 HTTP/REST \u0434\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "_id": "001",\n  "type": "blog_post",\n  "title": "Document-Oriented Databases",\n  "author": "Jane Smith",\n  "content": "This is an introduction to document databases.",\n  "tags": ["databases", "NoSQL", "MongoDB"],\n  "published_at": "2025-01-20"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"RethinkDB"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f: JSON."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c: \u0420\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u0442 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e "\u0440\u0435\u0430\u043a\u0442\u0438\u0432\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445", \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044f \u043f\u043e\u043b\u0443\u0447\u0430\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438.'}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "id": "u456",\n  "name": "Alice",\n  "online_status": true,\n  "last_activity": "2025-01-20T10:15:00Z"\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Amazon DynamoDB"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f: JSON."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u044c: \u041f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u044c\u044e, \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u0441 AWS."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-json",children:'{\n  "productId": "P001",\n  "name": "Smartphone",\n  "category": "Electronics",\n  "specs": {\n    "screenSize": "6.1 inches",\n    "batteryLife": "24 hours"\n  },\n  "price": 699.99\n}\n'})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043a\u043e\u0433\u0434\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445?"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c (CMS)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0411\u043b\u043e\u0433\u043e\u0432\u044b\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b, \u0433\u0434\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u043c\u0435\u044e\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0441\u0442\u0430\u0442\u044c\u0438, \u0433\u0430\u043b\u0435\u0440\u0435\u0438, \u0432\u0438\u0434\u0435\u043e)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u043c\u0435\u0440\u0446\u0438\u044f"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u043e \u0442\u043e\u0432\u0430\u0440\u0430\u0445 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0430\u043c\u0438."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0432\u0435\u0449\u0435\u0439 (IoT)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0442 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432 \u0441 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c\u0438 \u0442\u0438\u043f\u0430\u043c\u0438 \u0441\u0435\u043d\u0441\u043e\u0440\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u041f\u0440\u043e\u0444\u0438\u043b\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u0441 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u043d\u0430\u0431\u043e\u0440\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u0438\u043c\u0435\u0440: \u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u043b\u043e\u0433\u043e\u0432, \u0441\u043e\u0431\u044b\u0442\u0438\u0439 \u0438\u043b\u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-\u0438-\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438",children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0413\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 JSON-\u043f\u043e\u0434\u043e\u0431\u043d\u044b\u043c\u0438 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439."}),"\n",(0,i.jsx)(e.li,{children:"\u041b\u0451\u0433\u043a\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438:"})}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041d\u0435 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u0437\u0430\u0434\u0430\u0447, \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0445 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u0430 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 (\u0434\u0435\u043d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f)."}),"\n",(0,i.jsx)(e.li,{children:"\u0412 \u043d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0441\u043b\u0443\u0447\u0430\u044f\u0445 \u0443\u0441\u0442\u0443\u043f\u0430\u044e\u0442 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c \u0431\u0430\u0437\u0430\u043c \u043f\u043e \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u0438 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u0438\u0442\u043e\u0433",children:"\u0418\u0442\u043e\u0433"}),"\n",(0,i.jsx)(e.p,{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u0438\u0437\u043c\u0435\u043d\u044f\u044e\u0449\u0435\u0439\u0441\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u044b\u0441\u043e\u043a\u0438\u043c\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043a \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u0438. MongoDB, CouchDB, DynamoDB \u0438 RethinkDB \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u043c\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u0435\u043b\u044f\u043c\u0438 \u044d\u0442\u043e\u0433\u043e \u0442\u0438\u043f\u0430, \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0441\u043f\u0435\u043a\u0442\u0440 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0432\u0435\u0431- \u0438 \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u043c\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438."})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);