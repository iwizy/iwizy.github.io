"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[3905],{9260:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"types/api/index","title":"API","description":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e API \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043b\u044e\u0447\u0435\u0432\u0443\u044e \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u041e\u043d\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e, \u0447\u0442\u043e \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438, \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438. \u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 API, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e: REST/HTTP(S), SOAP, GraphQL, gRPC, JSON-RPC \u0438 WebSockets. \u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0435\u043b\u0430\u044e\u0442 \u0438\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f.","source":"@site/integrations/types/api/index.md","sourceDirName":"types/api","slug":"/types/api","permalink":"/integrations/types/api","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"slug":"/types/api"},"sidebar":"tutorialSidebar","previous":{"title":"\u0412\u0438\u0434\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439","permalink":"/integrations/types"},"next":{"title":"REST/HTTP(S)","permalink":"/integrations/types/api/rest"}}');var r=s(4848),i=s(8453);const o={sidebar_position:1,slug:"/types/api"},a="API",c={},l=[];function p(e){const n={a:"a",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"api",children:"API"})}),"\n",(0,r.jsxs)(n.p,{children:["\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e API \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043a\u043b\u044e\u0447\u0435\u0432\u0443\u044e \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u044e \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f. \u041e\u043d\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c \u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c\u044e, \u0447\u0442\u043e \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u0435\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438, \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u0438 \u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438. \u0412 \u044d\u0442\u043e\u043c \u0440\u0430\u0437\u0434\u0435\u043b\u0435 \u043c\u044b \u0440\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u0438 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u043e\u0432, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0445 \u0434\u043b\u044f \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0447\u0435\u0440\u0435\u0437 API, \u0430 \u0438\u043c\u0435\u043d\u043d\u043e: ",(0,r.jsx)(n.strong,{children:"REST/HTTP(S)"}),", ",(0,r.jsx)(n.strong,{children:"SOAP"}),", ",(0,r.jsx)(n.strong,{children:"GraphQL"}),", ",(0,r.jsx)(n.strong,{children:"gRPC"}),", ",(0,r.jsx)(n.strong,{children:"JSON-RPC"})," \u0438 ",(0,r.jsx)(n.strong,{children:"WebSockets"}),". \u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u0438\u043c\u0435\u0435\u0442 \u0441\u0432\u043e\u0438 \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438, \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0435\u043b\u0430\u044e\u0442 \u0438\u0445 \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u043c\u0438 \u0434\u043b\u044f \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u044b\u0445 \u0441\u0446\u0435\u043d\u0430\u0440\u0438\u0435\u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REST/HTTP(S)"})," \u2014 \u044d\u0442\u043e \u0441\u0430\u043c\u044b\u0439 \u0440\u0430\u0441\u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0451\u043d\u043d\u044b\u0439 \u0438 \u0433\u0438\u0431\u043a\u0438\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a \u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0438\u044e API, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0439 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u044b HTTP \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c. \u041e\u043d \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u043f\u0440\u043e\u0441\u0442\u043e\u0442\u0443, \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0441\u0442\u044c \u0438 \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u043e\u043c \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0433\u043e \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u043c \u0432\u044b\u0431\u043e\u0440\u043e\u043c \u0434\u043b\u044f \u0431\u043e\u043b\u044c\u0448\u0438\u043d\u0441\u0442\u0432\u0430 \u0432\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e REST/HTTP(S) \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(n.a,{href:"/integrations/types/api/rest",children:"REST/HTTP(S)"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOAP"})," \u2014 \u0431\u043e\u043b\u0435\u0435 \u0444\u043e\u0440\u043c\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434, \u043e\u0441\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043d\u0430 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0430\u0445 XML, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u0435\u0442 \u0431\u043e\u043b\u0435\u0435 \u0441\u0442\u0440\u043e\u0433\u0443\u044e \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443 \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0443 \u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043d\u043d\u044b\u0445 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0434\u043b\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u043e\u0448\u0438\u0431\u043e\u043a \u0438 \u0442\u0440\u0430\u043d\u0437\u0430\u043a\u0446\u0438\u0439. \u041e\u043d \u0448\u0438\u0440\u043e\u043a\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 \u043a\u043e\u0440\u043f\u043e\u0440\u0430\u0442\u0438\u0432\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u0445, \u0433\u0434\u0435 \u0442\u0440\u0435\u0431\u0443\u0435\u0442\u0441\u044f \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u0442\u0435\u043f\u0435\u043d\u044c \u043d\u0430\u0434\u0435\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u0438. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435 \u043e SOAP \u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(n.a,{href:"/integrations/types/api/soap",children:"SOAP"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GraphQL"})," \u2014 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434, \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044c \u0438\u043c\u0435\u043d\u043d\u043e \u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0438\u043c \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b. \u041e\u043d \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0440\u0430\u0431\u043e\u0442\u0443 \u0441 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0438 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0437\u0430 \u0441\u0447\u0435\u0442 \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u0438\u0437\u0431\u044b\u0442\u043e\u0447\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445. \u0423\u0437\u043d\u0430\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043e GraphQL \u043c\u043e\u0436\u043d\u043e \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(n.a,{href:"/integrations/types/api/graphql",children:"GraphQL"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"gRPC"})," \u2014 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 HTTP/2 \u0434\u043b\u044f \u0431\u043e\u043b\u0435\u0435 \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438. \u042d\u0442\u043e \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0441 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u043e\u0439 \u0434\u0432\u043e\u0438\u0447\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0430 \u0438 \u0441\u0445\u0435\u043c\u044b \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u043d\u044b\u0445 \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440. \u0411\u043e\u043b\u0435\u0435 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u043e \u043e gRPC \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(n.a,{href:"/integrations/types/api/grpc",children:"gRPC"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON-RPC"})," \u2014 \u043b\u0435\u0433\u043a\u043e\u0432\u0435\u0441\u043d\u044b\u0439 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b \u0434\u043b\u044f \u043e\u0431\u043c\u0435\u043d\u0430 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f\u043c\u0438 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c JSON. \u041e\u043d \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0438 \u043f\u0440\u043e\u0441\u0442\u043e\u0433\u043e \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445. \u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u0443\u044e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u043c\u043e\u0436\u043d\u043e \u043d\u0430\u0439\u0442\u0438 \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(n.a,{href:"/integrations/types/api/json-rpc",children:"JSON-RPC"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"WebSockets"})," \u2014 \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044e\u0449\u0438\u0439 \u0434\u0432\u0443\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u044e\u044e \u0441\u0432\u044f\u0437\u044c \u0432 \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u043c \u0432\u0440\u0435\u043c\u0435\u043d\u0438 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c, \u0447\u0442\u043e \u0434\u0435\u043b\u0430\u0435\u0442 \u0435\u0433\u043e \u0438\u0434\u0435\u0430\u043b\u044c\u043d\u044b\u043c \u0434\u043b\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0441 \u0432\u044b\u0441\u043e\u043a\u0438\u043c\u0438 \u0442\u0440\u0435\u0431\u043e\u0432\u0430\u043d\u0438\u044f\u043c\u0438 \u043a \u0431\u044b\u0441\u0442\u0440\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044e \u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u043c \u0434\u0430\u043d\u043d\u044b\u0445. \u041f\u043e\u0434\u0440\u043e\u0431\u043d\u043e\u0441\u0442\u0438 \u043e WebSockets \u043c\u043e\u0436\u043d\u043e \u0443\u0437\u043d\u0430\u0442\u044c \u0432 \u0440\u0430\u0437\u0434\u0435\u043b\u0435 ",(0,r.jsx)(n.a,{href:"/integrations/types/api/websockets",children:"WebSockets"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u041a\u0430\u0436\u0434\u0430\u044f \u0438\u0437 \u044d\u0442\u0438\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u0438\u0433\u0440\u0430\u0435\u0442 \u0432\u0430\u0436\u043d\u0443\u044e \u0440\u043e\u043b\u044c \u0432 \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u0435 API-\u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438, \u0438 \u0432 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u043f\u0435\u0446\u0438\u0444\u0438\u043a\u0438 \u0437\u0430\u0434\u0430\u0447\u0438, \u043e\u0434\u043d\u0430 \u0438\u0437 \u043d\u0438\u0445 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0440\u0435\u0434\u043f\u043e\u0447\u0442\u0438\u0442\u0435\u043b\u044c\u043d\u0435\u0435 \u0434\u0440\u0443\u0433\u0438\u0445."})]})}function d(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>a});var t=s(6540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);