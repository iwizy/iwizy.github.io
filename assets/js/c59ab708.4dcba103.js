"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[3592],{8260:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"types/nosql/index","title":"noSQL \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","description":"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b \u043f\u043e \u0441\u0432\u043e\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0440\u0430\u0431\u043e\u0442\u044b. \u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0438\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0445 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u044b.","source":"@site/database/types/nosql/index.md","sourceDirName":"types/nosql","slug":"/types/nosql","permalink":"/database/types/nosql","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"slug":"/types/nosql"},"sidebar":"tutorialSidebar","previous":{"title":"\u0420\u0435\u043b\u044f\u0446\u0438\u043e\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/database/types/rdb"},"next":{"title":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/types/nosql/db-doc"}}');var t=e(4848),i=e(8453);const l={sidebar_position:2,slug:"/types/nosql"},o="noSQL \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445",d={},c=[];function a(n){const s={a:"a",br:"br",h1:"h1",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"nosql-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445",children:"noSQL \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"})}),"\n",(0,t.jsx)(s.p,{children:"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0440\u0430\u0437\u043d\u043e\u043e\u0431\u0440\u0430\u0437\u043d\u044b \u043f\u043e \u0441\u0432\u043e\u0435\u0439 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u0430\u043c \u0440\u0430\u0431\u043e\u0442\u044b. \u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u043d\u0438\u0445 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0430 \u0434\u043b\u044f \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f. \u041d\u0438\u0436\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0445 \u043a\u0440\u0430\u0442\u043a\u043e\u0435 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0438 \u0441\u0441\u044b\u043b\u043a\u0438 \u043d\u0430 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0435 \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u044b."}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,t.jsx)(s.br,{}),"\n","\u042d\u0442\u0438 \u0431\u0430\u0437\u044b \u0445\u0440\u0430\u043d\u044f\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0438\u0434\u0435 \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u0432, \u043e\u0431\u044b\u0447\u043d\u043e \u0432 \u0444\u043e\u0440\u043c\u0430\u0442\u0435 JSON, BSON \u0438\u043b\u0438 XML. \u041e\u043d\u0438 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u043f\u043e\u043b\u0443\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u043c\u0438, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0435 \u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u0438\u043b\u0438 \u043b\u043e\u0433-\u0444\u0430\u0439\u043b\u044b.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"#",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u043e\u043e\u0440\u0438\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:'\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0430 "\u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"'}),(0,t.jsx)(s.br,{}),"\n","\u041f\u0440\u043e\u0441\u0442\u044b\u0435 \u0438 \u0431\u044b\u0441\u0442\u0440\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u0433\u0434\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0432\u0438\u0434\u0435 \u043f\u0430\u0440 \u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435. \u041e\u0442\u043b\u0438\u0447\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0442 \u0434\u043b\u044f \u043a\u044d\u0448\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0441\u0435\u0441\u0441\u0438\u044f\u043c\u0438 \u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043a.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"#",children:'\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0442\u0438\u043f\u0430 "\u043a\u043b\u044e\u0447-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435"'})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u041a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,t.jsx)(s.br,{}),"\n","\u041e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u044e\u0442 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0432\u0438\u0434\u0435 \u043a\u043e\u043b\u043e\u043d\u043e\u043a, \u0447\u0442\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0451\u043c\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445. \u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0431\u0438\u0437\u043d\u0435\u0441-\u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438 \u0438 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"#",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),(0,t.jsx)(s.br,{}),"\n","\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0437\u0430\u043f\u0438\u0441\u0438 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0435\u043c, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u043f\u043e\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u0434\u0430\u0442\u0447\u0438\u043a\u043e\u0432, \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043b\u0438 \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0441\u0438\u0441\u0442\u0435\u043c.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"#",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445 \u0434\u043b\u044f \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u0413\u0440\u0430\u0444\u043e\u0432\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,t.jsx)(s.br,{}),"\n","\u041f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0433\u0440\u0430\u0444\u0430\u043c\u0438, \u0433\u0434\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b \u0432 \u0432\u0438\u0434\u0435 \u0443\u0437\u043b\u043e\u0432 \u0438 \u0440\u0451\u0431\u0435\u0440. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u044e\u0442\u0441\u044f \u0432 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0446\u0438\u043e\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445, \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0435 \u0441\u0432\u044f\u0437\u0435\u0439.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"#",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u0433\u0440\u0430\u0444\u043e\u0432\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"\u041f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445"}),(0,t.jsx)(s.br,{}),"\n","\u0421\u0438\u0441\u0442\u0435\u043c\u044b, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u043d\u0430 \u043f\u043e\u043b\u043d\u043e\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u043c \u043f\u043e\u0438\u0441\u043a\u0435 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0435 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d\u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u043f\u043e\u0434 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043e\u0431\u044a\u0451\u043c\u044b \u0442\u0435\u043a\u0441\u0442\u0430.",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"#",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e \u043f\u043e\u0438\u0441\u043a\u043e\u0432\u044b\u0445 \u0431\u0430\u0437\u0430\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"\u041a\u0430\u0436\u0434\u044b\u0439 \u0438\u0437 \u044d\u0442\u0438\u0445 \u0442\u0438\u043f\u043e\u0432 \u0431\u0430\u0437 \u0434\u0430\u043d\u043d\u044b\u0445 \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u0431\u043b\u0430\u0441\u0442\u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0432 \u0441\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u0440\u0430\u0437\u0434\u0435\u043b\u0430\u0445."})]})}function x(n={}){const{wrapper:s}={...(0,i.R)(),...n.components};return s?(0,t.jsx)(s,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,s,e)=>{e.d(s,{R:()=>l,x:()=>o});var r=e(6540);const t={},i=r.createContext(t);function l(n){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function o(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),r.createElement(i.Provider,{value:s},n.children)}}}]);