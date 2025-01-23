"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[1583],{9837:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>x,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"sql/indexes","title":"\u0418\u043d\u0434\u0435\u043a\u0441\u044b","description":"\u0418\u043d\u0434\u0435\u043a\u0441\u044b \u0432 SQL \u2014 \u044d\u0442\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0438\u0437 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0445\u0440\u0430\u043d\u044f\u0449\u0443\u044e \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0418\u043d\u0434\u0435\u043a\u0441\u044b \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445.","source":"@site/database/sql/indexes.md","sourceDirName":"sql","slug":"/sql/indexes","permalink":"/database/sql/indexes","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"slug":"/sql/indexes"},"sidebar":"tutorialSidebar","previous":{"title":"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430","permalink":"/database/sql/group"},"next":{"title":"\u0425\u0440\u0430\u043d\u0438\u043c\u044b\u0435 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440\u044b \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438","permalink":"/database/sql/indexes"}}');var i=s(4848),r=s(8453);const d={sidebar_position:5,slug:"/sql/indexes"},c="\u0418\u043d\u0434\u0435\u043a\u0441\u044b",x={},h=[{value:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b?",id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u043d\u044b-\u0438\u043d\u0434\u0435\u043a\u0441\u044b",level:2},{value:"\u0422\u0438\u043f\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",id:"\u0442\u0438\u043f\u044b-\u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",level:2},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-\u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",level:2},{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438-\u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",level:2},{value:"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441\u044b?",id:"\u043a\u043e\u0433\u0434\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0438\u043d\u0434\u0435\u043a\u0441\u044b",level:2},{value:"\u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441\u044b?",id:"\u043a\u0430\u043a-\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c-\u0438\u043d\u0434\u0435\u043a\u0441\u044b",level:2}];function j(n){const e={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u0438\u043d\u0434\u0435\u043a\u0441\u044b",children:"\u0418\u043d\u0434\u0435\u043a\u0441\u044b"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0434\u0435\u043a\u0441\u044b \u0432 SQL"})," \u2014 \u044d\u0442\u043e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0432\u044b\u0431\u043e\u0440\u043a\u0438 \u0438\u0437 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d\u0438 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0441\u043e\u0431\u043e\u0439 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443, \u0445\u0440\u0430\u043d\u044f\u0449\u0443\u044e \u0443\u043a\u0430\u0437\u0430\u0442\u0435\u043b\u0438 \u043d\u0430 \u0441\u0442\u0440\u043e\u043a\u0438 \u0438\u0441\u0445\u043e\u0434\u043d\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b. \u0418\u043d\u0434\u0435\u043a\u0441\u044b \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u043e\u0432\u044b\u0448\u0430\u044e\u0442 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,i.jsx)(e.h2,{id:"\u0437\u0430\u0447\u0435\u043c-\u043d\u0443\u0436\u043d\u044b-\u0438\u043d\u0434\u0435\u043a\u0441\u044b",children:"\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u043d\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u044b?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"}),": \u041f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0442 \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c \u0438 \u0438\u0437\u0432\u043b\u0435\u043a\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0434\u043b\u044f \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 ",(0,i.jsx)(e.code,{children:"SELECT"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"}),": \u0418\u043d\u0434\u0435\u043a\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u0435 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0438 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438"}),": \u0418\u043d\u0434\u0435\u043a\u0441\u044b \u043c\u043e\u0433\u0443\u0442 \u043f\u043e\u043c\u043e\u0447\u044c \u043f\u0440\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 ",(0,i.jsx)(e.code,{children:"ORDER BY"}),", ",(0,i.jsx)(e.code,{children:"GROUP BY"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438"}),": \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0438\u043d\u0434\u0435\u043a\u0441\u044b \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0445 \u0438 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u043a\u043b\u044e\u0447\u0435\u0439."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u0442\u0438\u043f\u044b-\u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",children:"\u0422\u0438\u043f\u044b \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 (Non-Unique Index)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0421\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041d\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE INDEX index_name ON table_name(column_name);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 (Unique Index)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0432 \u0441\u0442\u043e\u043b\u0431\u0446\u0435."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE UNIQUE INDEX index_name ON table_name(column_name);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 (Primary Key)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u043e\u0437\u0434\u0430\u0435\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"ALTER TABLE table_name ADD PRIMARY KEY (column_name);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0434\u0435\u043a\u0441 \u043f\u043e\u043b\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 (Full-Text Index)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043f\u043e \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u043c \u0434\u0430\u043d\u043d\u044b\u043c."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u043c \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0445 \u0441\u043b\u043e\u0432 \u0432 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0445 \u043f\u043e\u043b\u044f\u0445."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 (MySQL):"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE FULLTEXT INDEX index_name ON table_name(column_name);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041a\u043b\u0430\u0441\u0442\u0435\u0440\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 (Clustered Index)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u0435\u0442 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043f\u043e\u0440\u044f\u0434\u043e\u043a \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435."}),"\n",(0,i.jsx)(e.li,{children:"\u0412 \u043a\u0430\u0436\u0434\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u0438\u043d \u043a\u043b\u0430\u0441\u0442\u0435\u0440\u043d\u044b\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 SQL Server)."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043e\u0441\u0442\u0430\u0432\u043d\u043e\u0439 \u0438\u043d\u0434\u0435\u043a\u0441 (Composite Index)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0418\u043d\u0434\u0435\u043a\u0441, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0432\u043a\u043b\u044e\u0447\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u041f\u0440\u0438\u043c\u0435\u0440:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE INDEX index_name ON table_name(column1, column2);\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-\u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0417\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0447\u0442\u0435\u043d\u0438\u044f."}),"\n",(0,i.jsx)(e.li,{children:"\u0423\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."}),"\n",(0,i.jsx)(e.li,{children:"\u041e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438-\u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043c\u0430 \u043f\u0430\u043c\u044f\u0442\u0438"}),": \u0418\u043d\u0434\u0435\u043a\u0441\u044b \u0437\u0430\u043d\u0438\u043c\u0430\u044e\u0442 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u043e \u043d\u0430 \u0434\u0438\u0441\u043a\u0435."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0417\u0430\u043c\u0435\u0434\u043b\u0435\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0437\u0430\u043f\u0438\u0441\u0438"}),": \u0412\u0441\u0442\u0430\u0432\u043a\u0430, \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0440\u0435\u0431\u0443\u044e\u0442 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041d\u0435\u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),": \u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u0430\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430 \u0438\u043d\u0434\u0435\u043a\u0441\u043e\u0432 \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u0435\u0441\u0442\u0438 \u043a \u0443\u0445\u0443\u0434\u0448\u0435\u043d\u0438\u044e \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043a\u043e\u0433\u0434\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0438\u043d\u0434\u0435\u043a\u0441\u044b",children:"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441\u044b?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0414\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0447\u0430\u0441\u0442\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0443\u0441\u043b\u043e\u0432\u0438\u044f\u0445 \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 (",(0,i.jsx)(e.code,{children:"WHERE"}),"), \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 (",(0,i.jsx)(e.code,{children:"ORDER BY"}),") \u0438\u043b\u0438 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438 (",(0,i.jsx)(e.code,{children:"GROUP BY"}),")."]}),"\n",(0,i.jsx)(e.li,{children:"\u0414\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u043d\u0435\u0448\u043d\u0438\u043c\u0438 \u043a\u043b\u044e\u0447\u0430\u043c\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0414\u043b\u044f \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0438\u043b\u0438 \u0441\u043b\u0443\u0436\u0430\u0442 \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u043e\u0433\u043e \u043a\u043b\u044e\u0447\u0430."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043a\u0430\u043a-\u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c-\u0438\u043d\u0434\u0435\u043a\u0441\u044b",children:"\u041a\u0430\u043a \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u0438\u043d\u0434\u0435\u043a\u0441\u044b?"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0412 MySQL:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SHOW INDEX FROM table_name;\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u0412 PostgreSQL:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"\\d table_name\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0418\u043d\u0434\u0435\u043a\u0441\u044b \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043c\u043e\u0449\u043d\u044b\u043c \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u043c \u0434\u043b\u044f \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u043d\u043e \u0438\u0445 \u0441\u043b\u0435\u0434\u0443\u0435\u0442 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0441 \u043e\u0441\u0442\u043e\u0440\u043e\u0436\u043d\u043e\u0441\u0442\u044c\u044e, \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u044f \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043e\u0431\u044a\u0435\u043c \u0434\u0430\u043d\u043d\u044b\u0445."})]})}function a(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(j,{...n})}):j(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);