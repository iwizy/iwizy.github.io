"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[9148],{4617:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>r,metadata:()=>d,toc:()=>t});const d=JSON.parse('{"id":"types/rdb","title":"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","description":"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0420\u0411\u0414) \u2014 \u044d\u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446, \u0433\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 (\u0437\u0430\u043f\u0438\u0441\u0438) \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u044b (\u043f\u043e\u043b\u044f) \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u042d\u0434\u0433\u0430\u0440\u043e\u043c \u041a\u043e\u0434\u0434\u043e\u043c \u0432 1970 \u0433\u043e\u0434\u0443.","source":"@site/database/types/rdb.md","sourceDirName":"types","slug":"/database/types/rdb","permalink":"/database/database/types/rdb","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/database/types/rdb"},"sidebar":"tutorialSidebar","previous":{"title":"\u0422\u0438\u043f\u044b \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/types"},"next":{"title":"noSQL \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/types/nosql"}}');var i=s(4848),l=s(8453);const r={sidebar_position:1,slug:"/database/types/rdb"},c="\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",h={},t=[{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 1: \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1-\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440 2: \u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2-\u0441\u0438\u0441\u0442\u0435\u043c\u0430-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438",level:4},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0441\u0438\u0441\u0442\u0435\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0421\u0423\u0411\u0414)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0441\u0438\u0441\u0442\u0435\u043c-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438-\u0431\u0430\u0437\u0430\u043c\u0438-\u0434\u0430\u043d\u043d\u044b\u0445-\u0441\u0443\u0431\u0434",level:3},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",level:3}];function x(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,i.jsx)(e.p,{children:"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0420\u0411\u0414) \u2014 \u044d\u0442\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u0430 \u0434\u043b\u044f \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446, \u0433\u0434\u0435 \u0441\u0442\u0440\u043e\u043a\u0438 (\u0437\u0430\u043f\u0438\u0441\u0438) \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u0435, \u0430 \u0441\u0442\u043e\u043b\u0431\u0446\u044b (\u043f\u043e\u043b\u044f) \u043e\u043f\u0438\u0441\u044b\u0432\u0430\u044e\u0442 \u0438\u0445 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430. \u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u044e\u0442\u0441\u044f \u043d\u0430 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u043c\u043e\u0434\u0435\u043b\u0438, \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0439 \u042d\u0434\u0433\u0430\u0440\u043e\u043c \u041a\u043e\u0434\u0434\u043e\u043c \u0432 1970 \u0433\u043e\u0434\u0443."}),"\n",(0,i.jsx)(e.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0422\u0430\u0431\u043b\u0438\u0447\u043d\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0414\u0430\u043d\u043d\u044b\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b (\u0438\u043b\u0438 \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f)."}),"\n",(0,i.jsx)(e.li,{children:"\u041a\u0430\u0436\u0434\u0430\u044f \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0438\u043c\u0435\u0435\u0442 \u0441\u0442\u043e\u043b\u0431\u0446\u044b (\u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u0442\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445, \u0438 \u0441\u0442\u0440\u043e\u043a\u0438 (\u043a\u043e\u0440\u0442\u0435\u0436\u0438), \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u0441\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0435."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0442\u0440\u043e\u043a (\u043a\u043b\u044e\u0447\u0438)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041a\u0430\u0436\u0434\u0430\u044f \u0441\u0442\u0440\u043e\u043a\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u0446\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c, \u043e\u0431\u044b\u0447\u043d\u043e \u044d\u0442\u043e \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 (Primary Key)."}),"\n",(0,i.jsxs)(e.li,{children:["\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u0445 \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.jsx)(e.code,{children:"id"})," \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u043c \u043a\u043b\u044e\u0447\u043e\u043c."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u0432\u044f\u0437\u0438 \u043c\u0435\u0436\u0434\u0443 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u043c\u0438"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0422\u0430\u0431\u043b\u0438\u0446\u044b \u0432 \u0420\u0411\u0414 \u0441\u0432\u044f\u0437\u0430\u043d\u044b \u043c\u0435\u0436\u0434\u0443 \u0441\u043e\u0431\u043e\u0439 \u0447\u0435\u0440\u0435\u0437 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0438 (Foreign Keys)."}),"\n",(0,i.jsx)(e.li,{children:"\u042d\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0438\u0437\u0431\u0435\u0433\u0430\u0442\u044c \u0434\u0443\u0431\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u044b\u0432\u0430\u0442\u044c \u0438\u0445 \u0431\u043e\u043b\u0435\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e."}),"\n",(0,i.jsxs)(e.li,{children:['\u041f\u0440\u0438\u043c\u0435\u0440: \u0442\u0430\u0431\u043b\u0438\u0446\u0430 "\u0417\u0430\u043a\u0430\u0437\u044b" \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u043a\u043b\u044e\u0447 ',(0,i.jsx)(e.code,{children:"customer_id"}),', \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0441\u0441\u044b\u043b\u0430\u0435\u0442\u0441\u044f \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 "\u041a\u043b\u0438\u0435\u043d\u0442\u044b".']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041d\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0434\u043b\u044f \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,i.jsx)(e.li,{children:'\u041f\u0440\u0438\u043c\u0435\u0440: \u0432\u043c\u0435\u0441\u0442\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u0438\u043c\u0435\u043d\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 "\u0417\u0430\u043a\u0430\u0437\u044b", \u043e\u043d\u043e \u0445\u0440\u0430\u043d\u0438\u0442\u0441\u044f \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 "\u041a\u043b\u0438\u0435\u043d\u0442\u044b", \u0430 "\u0417\u0430\u043a\u0430\u0437\u044b" \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0441\u0441\u044b\u043b\u043a\u0443 \u043d\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u0430.'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u042f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 SQL"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0414\u043b\u044f \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u0441 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u044f\u0437\u044b\u043a \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 ",(0,i.jsx)(e.a,{href:"/database/database/sql",children:"SQL (Structured Query Language)"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:["SQL \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0442\u044c \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438: \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 (",(0,i.jsx)(e.code,{children:"SELECT"}),"), \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 (",(0,i.jsx)(e.code,{children:"INSERT"}),"), \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 (",(0,i.jsx)(e.code,{children:"UPDATE"}),"), \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 (",(0,i.jsx)(e.code,{children:"DELETE"}),")."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0426\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u0420\u0411\u0414 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0439 \u043a\u043b\u044e\u0447 (Primary Key)."}),"\n",(0,i.jsx)(e.li,{children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u043a\u043b\u044e\u0447 (Foreign Key)."}),"\n",(0,i.jsxs)(e.li,{children:["\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f (\u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, ",(0,i.jsx)(e.code,{children:"NOT NULL"}),", ",(0,i.jsx)(e.code,{children:"UNIQUE"}),")."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsxs)(e.li,{children:["\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f \u0438\u043c\u0435\u0435\u0442 \u0447\u0435\u0442\u044b\u0440\u0435 \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u0430 (ACID):","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Atomicity (\u0430\u0442\u043e\u043c\u0430\u0440\u043d\u043e\u0441\u0442\u044c)"}),": \u0432\u0441\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u0438\u043b\u0438 \u043d\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442\u0441\u044f \u0432\u043e\u0432\u0441\u0435."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Consistency (\u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c)"}),": \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0432 \u0441\u043e\u0433\u043b\u0430\u0441\u043e\u0432\u0430\u043d\u043d\u043e\u043c \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0438 \u043f\u043e\u0441\u043b\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0435\u043d\u0438\u044f \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Isolation (\u0438\u0437\u043e\u043b\u044f\u0446\u0438\u044f)"}),": \u043f\u0430\u0440\u0430\u043b\u043b\u0435\u043b\u044c\u043d\u044b\u0435 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438 \u043d\u0435 \u0432\u043b\u0438\u044f\u044e\u0442 \u0434\u0440\u0443\u0433 \u043d\u0430 \u0434\u0440\u0443\u0433\u0430."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Durability (\u0434\u043e\u043b\u0433\u043e\u0432\u0435\u0447\u043d\u043e\u0441\u0442\u044c)"}),": \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0432\u043d\u0435\u0441\u0451\u043d\u043d\u044b\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e\u0439 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0435\u0439, \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u044e\u0442\u0441\u044f \u0434\u0430\u0436\u0435 \u0432 \u0441\u043b\u0443\u0447\u0430\u0435 \u0441\u0431\u043e\u0435\u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u044b."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u043e\u0439 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(e.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1-\u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d",children:"\u041f\u0440\u0438\u043c\u0435\u0440 1: \u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442-\u043c\u0430\u0433\u0430\u0437\u0438\u043d"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u041a\u043b\u0438\u0435\u043d\u0442\u044b":'}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"id"}),(0,i.jsx)(e.th,{children:"name"}),(0,i.jsx)(e.th,{children:"email"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"mailto:ivan@example.com",children:"ivan@example.com"})})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"\u0410\u043d\u043d\u0430 \u0421\u043c\u0438\u0440\u043d\u043e\u0432\u0430"}),(0,i.jsx)(e.td,{children:(0,i.jsx)(e.a,{href:"mailto:anna@example.com",children:"anna@example.com"})})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u0422\u043e\u0432\u0430\u0440\u044b":'}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"id"}),(0,i.jsx)(e.th,{children:"name"}),(0,i.jsx)(e.th,{children:"price"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u0421\u043c\u0430\u0440\u0442\u0444\u043e\u043d"}),(0,i.jsx)(e.td,{children:"500"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"\u041d\u043e\u0443\u0442\u0431\u0443\u043a"}),(0,i.jsx)(e.td,{children:"1000"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u0417\u0430\u043a\u0430\u0437\u044b":'}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"id"}),(0,i.jsx)(e.th,{children:"customer_id"}),(0,i.jsx)(e.th,{children:"product_id"}),(0,i.jsx)(e.th,{children:"quantity"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"2"})]})]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:['\u0412 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 "\u0417\u0430\u043a\u0430\u0437\u044b" \u0441\u0442\u043e\u043b\u0431\u0435\u0446 ',(0,i.jsx)(e.code,{children:"customer_id"}),' \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u043d\u0435\u0448\u043d\u0438\u043c \u043a\u043b\u044e\u0447\u043e\u043c, \u0441\u0441\u044b\u043b\u0430\u044e\u0449\u0438\u043c\u0441\u044f \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 "\u041a\u043b\u0438\u0435\u043d\u0442\u044b".']}),"\n",(0,i.jsxs)(e.li,{children:["\u0421\u0442\u043e\u043b\u0431\u0435\u0446 ",(0,i.jsx)(e.code,{children:"product_id"}),' \u2014 \u0432\u043d\u0435\u0448\u043d\u0438\u0439 \u043a\u043b\u044e\u0447, \u0441\u0441\u044b\u043b\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u043d\u0430 \u0442\u0430\u0431\u043b\u0438\u0446\u0443 "\u0422\u043e\u0432\u0430\u0440\u044b".']}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h4,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2-\u0441\u0438\u0441\u0442\u0435\u043c\u0430-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438",children:"\u041f\u0440\u0438\u043c\u0435\u0440 2: \u0421\u0438\u0441\u0442\u0435\u043c\u0430 \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u0430\u043c\u0438"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u0421\u0442\u0443\u0434\u0435\u043d\u0442\u044b":'}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"id"}),(0,i.jsx)(e.th,{children:"\u0438\u043c\u044f"}),(0,i.jsx)(e.th,{children:"\u0432\u043e\u0437\u0440\u0430\u0441\u0442"}),(0,i.jsx)(e.th,{children:"\u0433\u0440\u0443\u043f\u043f\u0430"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u041e\u043b\u044c\u0433\u0430"}),(0,i.jsx)(e.td,{children:"20"}),(0,i.jsx)(e.td,{children:"101"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439"}),(0,i.jsx)(e.td,{children:"21"}),(0,i.jsx)(e.td,{children:"102"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u041f\u0440\u0435\u0434\u043c\u0435\u0442\u044b":'}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"id"}),(0,i.jsx)(e.th,{children:"\u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),(0,i.jsx)(e.th,{children:"\u043f\u0440\u0435\u043f\u043e\u0434\u0430\u0432\u0430\u0442\u0435\u043b\u044c"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"\u041c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u043a\u0430"}),(0,i.jsx)(e.td,{children:"\u041f\u0435\u0442\u0440\u043e\u0432"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"\u0424\u0438\u0437\u0438\u043a\u0430"}),(0,i.jsx)(e.td,{children:"\u0418\u0432\u0430\u043d\u043e\u0432"})]})]})]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:'\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u0423\u0441\u043f\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u044c":'}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"id"}),(0,i.jsx)(e.th,{children:"student_id"}),(0,i.jsx)(e.th,{children:"subject_id"}),(0,i.jsx)(e.th,{children:"\u043e\u0446\u0435\u043d\u043a\u0430"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"1"}),(0,i.jsx)(e.td,{children:"5"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"2"}),(0,i.jsx)(e.td,{children:"4"})]})]})]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:['\u0422\u0430\u0431\u043b\u0438\u0446\u0430 "\u0423\u0441\u043f\u0435\u0432\u0430\u0435\u043c\u043e\u0441\u0442\u044c" \u0441\u0432\u044f\u0437\u044b\u0432\u0430\u0435\u0442 \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043e\u0432 \u0441 \u043f\u0440\u0435\u0434\u043c\u0435\u0442\u0430\u043c\u0438 \u0447\u0435\u0440\u0435\u0437 ',(0,i.jsx)(e.code,{children:"student_id"})," \u0438 ",(0,i.jsx)(e.code,{children:"subject_id"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-\u0441\u0438\u0441\u0442\u0435\u043c-\u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438-\u0431\u0430\u0437\u0430\u043c\u0438-\u0434\u0430\u043d\u043d\u044b\u0445-\u0441\u0443\u0431\u0434",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0441\u0438\u0441\u0442\u0435\u043c \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 (\u0421\u0423\u0411\u0414)"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u0438\u0435"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"Oracle Database."}),"\n",(0,i.jsx)(e.li,{children:"Microsoft SQL Server."}),"\n",(0,i.jsx)(e.li,{children:"IBM Db2."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0435"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"MySQL."}),"\n",(0,i.jsx)(e.li,{children:"PostgreSQL."}),"\n",(0,i.jsx)(e.li,{children:"SQLite."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f SQL."}),"\n",(0,i.jsx)(e.li,{children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u043f\u0440\u0435\u0434\u0441\u043a\u0430\u0437\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u043b\u043e\u0436\u043d\u044b\u0445 \u0441\u0432\u044f\u0437\u0435\u0439 \u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u041d\u0430\u0434\u0451\u0436\u043d\u043e\u0441\u0442\u044c \u0438 \u0437\u0430\u0449\u0438\u0442\u0430 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438-\u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445-\u0431\u0430\u0437-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043c\u043e\u0436\u0435\u0442 \u0441\u043d\u0438\u0436\u0430\u0442\u044c\u0441\u044f \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u043e\u0433\u0440\u043e\u043c\u043d\u044b\u043c\u0438 \u043e\u0431\u044a\u0451\u043c\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445 (Big Data)."}),"\n",(0,i.jsx)(e.li,{children:"\u041c\u0435\u043d\u0435\u0435 \u0433\u0438\u0431\u043a\u0438 \u0432 \u0441\u0440\u0430\u0432\u043d\u0435\u043d\u0438\u0438 \u0441 NoSQL \u043f\u0440\u0438 \u0440\u0430\u0431\u043e\u0442\u0435 \u0441 \u043d\u0435\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0422\u0440\u0435\u0431\u0443\u044e\u0442 \u0431\u043e\u043b\u0435\u0435 \u0441\u043b\u043e\u0436\u043d\u043e\u0433\u043e \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u0441\u0442\u0430\u044e\u0442\u0441\u044f \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u043c \u0440\u0435\u0448\u0435\u043d\u0438\u0435\u043c \u0434\u043b\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0442\u0440\u0435\u0431\u0443\u044e\u0449\u0438\u0445 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u0438 \u0438 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>r,x:()=>c});var d=s(6540);const i={},l=d.createContext(i);function r(n){const e=d.useContext(l);return d.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),d.createElement(l.Provider,{value:e},n.children)}}}]);