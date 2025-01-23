"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[3162],{113:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>a,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>l,toc:()=>h});const l=JSON.parse('{"id":"sql/index","title":"SQL","description":"SQL (Structured Query Language) \u2014 \u044d\u0442\u043e \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445. SQL \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043e\u043c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite \u0438 \u0434\u0440\u0443\u0433\u0438\u0435.","source":"@site/database/sql/index.md","sourceDirName":"sql","slug":"/sql","permalink":"/database/sql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"slug":"/sql"},"sidebar":"tutorialSidebar","previous":{"title":"\u041d\u043e\u0440\u043c\u0430\u043b\u044c\u043d\u044b\u0435 \u0444\u043e\u0440\u043c\u044b","permalink":"/database/normalization/nf"},"next":{"title":"\u0421\u0435\u043b\u0435\u043a\u0442\u044b","permalink":"/database/sql/select"}}');var i=s(4848),r=s(8453);const d={sidebar_position:5,slug:"/sql"},c="SQL",a={},h=[{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 SQL",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438-sql",level:2},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b SQL",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-sql",level:2},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b DDL (Data Definition Language)",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-ddl-data-definition-language",level:3},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b DML (Data Manipulation Language)",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-dml-data-manipulation-language",level:3},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b DCL (Data Control Language)",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-dcl-data-control-language",level:3},{value:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b TCL (Transaction Control Language)",id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-tcl-transaction-control-language",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b SQL-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-sql-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",level:2},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0442\u0430\u0431\u043b\u0438\u0446\u044b",level:3},{value:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0432\u0441\u0442\u0430\u0432\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0432\u044b\u0431\u043e\u0440\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430",id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u043d\u0434\u0435\u043a\u0441\u0430",level:3},{value:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0430\u0441\u043f\u0435\u043a\u0442\u044b SQL",id:"\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435-\u0430\u0441\u043f\u0435\u043a\u0442\u044b-sql",level:2}];function o(n){const e={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"sql",children:"SQL"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"SQL (Structured Query Language)"})," \u2014 \u044d\u0442\u043e \u044f\u0437\u044b\u043a \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u043c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f, \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0438 \u0438\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445. SQL \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043e\u043c \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0440\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u043c\u0438 \u0431\u0430\u0437\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u0430\u043a\u0438\u043c\u0438 \u043a\u0430\u043a MySQL, PostgreSQL, Oracle, Microsoft SQL Server, SQLite \u0438 \u0434\u0440\u0443\u0433\u0438\u0435."]}),"\n",(0,i.jsx)(e.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438-sql",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 SQL"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u044f\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"})," (",(0,i.jsx)(e.code,{children:"INSERT"}),"): \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u0437\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"})," (",(0,i.jsx)(e.code,{children:"SELECT"}),"): \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u0437 \u043e\u0434\u043d\u043e\u0439 \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"})," (",(0,i.jsx)(e.code,{children:"UPDATE"}),"): \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"})," (",(0,i.jsx)(e.code,{children:"DELETE"}),"): \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0438\u0441\u0435\u0439."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0430\u043c\u0438 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446"})," (",(0,i.jsx)(e.code,{children:"CREATE TABLE"}),"): \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043d\u043e\u0432\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0441 \u0443\u043a\u0430\u0437\u0430\u043d\u0438\u0435\u043c \u0435\u0451 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446"})," (",(0,i.jsx)(e.code,{children:"ALTER TABLE"}),"): \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435, \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446"})," (",(0,i.jsx)(e.code,{children:"DROP TABLE"}),"): \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0432\u0441\u0435\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0439"})," (",(0,i.jsx)(e.code,{children:"CREATE VIEW"}),"): \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0432\u0438\u0440\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u0445 \u0442\u0430\u0431\u043b\u0438\u0446 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"GRANT"}),": \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432 \u043d\u0430 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"REVOKE"}),": \u043e\u0442\u0437\u044b\u0432 \u0440\u0430\u043d\u0435\u0435 \u0432\u044b\u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u0440\u0430\u0432."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0422\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"BEGIN"})," \u0438\u043b\u0438 ",(0,i.jsx)(e.strong,{children:"START TRANSACTION"}),": \u043d\u0430\u0447\u0430\u043b\u043e \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"COMMIT"}),": \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0431\u0430\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"ROLLBACK"}),": \u043e\u0442\u043c\u0435\u043d\u0430 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u0432 \u0440\u0430\u043c\u043a\u0430\u0445 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0438."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u0435\u0439"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"CREATE INDEX"}),": \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430 \u0434\u043b\u044f \u0443\u0441\u043a\u043e\u0440\u0435\u043d\u0438\u044f \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"DROP INDEX"}),": \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b-sql",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b SQL"}),"\n",(0,i.jsx)(e.h3,{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-ddl-data-definition-language",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b DDL (Data Definition Language)"}),"\n",(0,i.jsxs)(e.p,{children:["\u041e\u043d\u0438 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u044f\u044e\u0442 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445.",(0,i.jsx)(e.br,{}),"\n","\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"CREATE"}),": \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u0442\u0430\u0431\u043b\u0438\u0446 \u0438\u043b\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"ALTER"}),": \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"DROP"}),": \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u043e\u0431\u044a\u0435\u043a\u0442\u043e\u0432."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-dml-data-manipulation-language",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b DML (Data Manipulation Language)"}),"\n",(0,i.jsxs)(e.p,{children:["\u041e\u043d\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0430\u0445.",(0,i.jsx)(e.br,{}),"\n","\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"SELECT"}),": \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"INSERT"}),": \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"UPDATE"}),": \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"DELETE"}),": \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-dcl-data-control-language",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b DCL (Data Control Language)"}),"\n",(0,i.jsxs)(e.p,{children:["\u041e\u043d\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u043f\u0440\u0430\u0432\u0430\u043c\u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u0430.",(0,i.jsx)(e.br,{}),"\n","\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"GRANT"}),": \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u0430\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"REVOKE"}),": \u043e\u0442\u0437\u044b\u0432 \u043f\u0440\u0430\u0432."]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u043a\u043e\u043c\u0430\u043d\u0434\u044b-tcl-transaction-control-language",children:"\u041a\u043e\u043c\u0430\u043d\u0434\u044b TCL (Transaction Control Language)"}),"\n",(0,i.jsxs)(e.p,{children:["\u041e\u043d\u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0442 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u044f\u043c\u0438.",(0,i.jsx)(e.br,{}),"\n","\u041f\u0440\u0438\u043c\u0435\u0440\u044b:"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"COMMIT"}),": \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"ROLLBACK"}),": \u043e\u0442\u043a\u0430\u0442 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"SAVEPOINT"}),": \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u043e\u0447\u043a\u0438 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b-sql-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432",children:"\u041f\u0440\u0438\u043c\u0435\u0440\u044b SQL-\u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"}),"\n",(0,i.jsx)(e.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0442\u0430\u0431\u043b\u0438\u0446\u044b",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0442\u0430\u0431\u043b\u0438\u0446\u044b"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE TABLE employees (\n    id INT PRIMARY KEY,\n    name VARCHAR(100),\n    position VARCHAR(50),\n    salary DECIMAL(10, 2)\n);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u0432\u0441\u0442\u0430\u0432\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0412\u0441\u0442\u0430\u0432\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"INSERT INTO employees (id, name, position, salary)\nVALUES (1, 'John Doe', 'Developer', 75000.00);\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u0432\u044b\u0431\u043e\u0440\u043a\u0430-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0412\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT name, position\nFROM employees\nWHERE salary > 50000;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u041e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"UPDATE employees\nSET salary = salary * 1.10\nWHERE position = 'Developer';\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0435-\u0434\u0430\u043d\u043d\u044b\u0445",children:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"DELETE FROM employees\nWHERE id = 1;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435-\u0438\u043d\u0434\u0435\u043a\u0441\u0430",children:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0438\u043d\u0434\u0435\u043a\u0441\u0430"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"CREATE INDEX idx_position ON employees(position);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"\u043a\u043b\u044e\u0447\u0435\u0432\u044b\u0435-\u0430\u0441\u043f\u0435\u043a\u0442\u044b-sql",children:"\u041a\u043b\u044e\u0447\u0435\u0432\u044b\u0435 \u0430\u0441\u043f\u0435\u043a\u0442\u044b SQL"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),": \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043e\u0432\u0430\u043d\u044b \u0432 \u0432\u0438\u0434\u0435 \u0442\u0430\u0431\u043b\u0438\u0446 (\u0441\u0442\u0440\u043e\u043a\u0438 \u0438 \u0441\u0442\u043e\u043b\u0431\u0446\u044b)."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041a\u043b\u044e\u0447\u0438"}),": \u043f\u0435\u0440\u0432\u0438\u0447\u043d\u044b\u0435 (PRIMARY KEY) \u0438 \u0432\u043d\u0435\u0448\u043d\u0438\u0435 \u043a\u043b\u044e\u0447\u0438 (FOREIGN KEY) \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0442 \u0446\u0435\u043b\u043e\u0441\u0442\u043d\u043e\u0441\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0434\u0435\u043a\u0441\u044b"}),": \u0443\u0441\u043a\u043e\u0440\u044f\u044e\u0442 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u0438 \u0430\u0433\u0440\u0435\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"}),": \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,i.jsx)(e.code,{children:"COUNT"}),", ",(0,i.jsx)(e.code,{children:"SUM"}),", ",(0,i.jsx)(e.code,{children:"AVG"}),", ",(0,i.jsx)(e.code,{children:"MAX"}),", ",(0,i.jsx)(e.code,{children:"MIN"}),"."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041f\u043e\u0434\u0437\u0430\u043f\u0440\u043e\u0441\u044b"}),": \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0432\u043d\u0443\u0442\u0440\u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f (JOIN)"}),":","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"INNER JOIN"}),": \u0441\u043e\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0437\u0430\u043f\u0438\u0441\u0438, \u043e\u0431\u0449\u0438\u0435 \u0434\u043b\u044f \u0434\u0432\u0443\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"LEFT JOIN"}),": \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437 \u043b\u0435\u0432\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0438\u0437 \u043f\u0440\u0430\u0432\u043e\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"RIGHT JOIN"}),": \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437 \u043f\u0440\u0430\u0432\u043e\u0439 \u0442\u0430\u0431\u043b\u0438\u0446\u044b \u0438 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0435 \u0438\u0437 \u043b\u0435\u0432\u043e\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.code,{children:"FULL JOIN"}),": \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0432\u0441\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0437 \u043e\u0431\u0435\u0438\u0445 \u0442\u0430\u0431\u043b\u0438\u0446."]}),"\n"]}),"\n"]}),"\n"]})]})}function x(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(o,{...n})}):o(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);