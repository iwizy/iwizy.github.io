"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[5798],{8759:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"types/api/grpc","title":"gRPC","description":"gRPC (Google Remote Procedure Call) \u2014 \u044d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 (Remote Procedure Call, RPC), \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 Google. \u041e\u043d \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 HTTP/2, Protocol Buffers (Protobuf) \u0438 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433.","source":"@site/integrations/types/api/grpc.md","sourceDirName":"types/api","slug":"/types/api/grpc","permalink":"/integrations/types/api/grpc","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/types/api/grpc"},"sidebar":"tutorialSidebar","previous":{"title":"GraphQL","permalink":"/integrations/types/api/graphql"},"next":{"title":"JSON-RPC","permalink":"/integrations/types/api/json-rpc"}}');var s=r(4848),l=r(8453);const t={sidebar_position:4,slug:"/types/api/grpc"},d="gRPC",c={},h=[{value:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b gRPC",id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430-\u0438-\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b-grpc",level:2},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",level:3},{value:"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",id:"\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430-\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",level:3},{value:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b HTTP/2 \u0432 gRPC",id:"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b-http2-\u0432-grpc",level:2},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 HTTP/2",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-http2",level:3},{value:"Protocol Buffers (Protobuf)",id:"protocol-buffers-protobuf",level:2},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",level:3},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b Protobuf",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b-protobuf",level:3},{value:"\u0422\u0438\u043f\u044b gRPC-\u0432\u044b\u0437\u043e\u0432\u043e\u0432",id:"\u0442\u0438\u043f\u044b-grpc-\u0432\u044b\u0437\u043e\u0432\u043e\u0432",level:2},{value:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 (Unary RPC)",id:"\u043e\u0431\u044b\u0447\u043d\u044b\u0439-\u0432\u044b\u0437\u043e\u0432-unary-rpc",level:3},{value:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 (Server Streaming RPC)",id:"\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433-server-streaming-rpc",level:3},{value:"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 (Client Streaming RPC)",id:"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433-client-streaming-rpc",level:3},{value:"\u0414\u0432\u0443\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 (Bidirectional Streaming RPC)",id:"\u0434\u0432\u0443\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433-bidirectional-streaming-rpc",level:3},{value:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c",id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-\u0438-\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c",level:2},{value:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438",id:"\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430-\u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438",level:2},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 gRPC \u043f\u0435\u0440\u0435\u0434 REST",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-grpc-\u043f\u0435\u0440\u0435\u0434-rest",level:2},{value:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 gRPC",id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438-grpc",level:2},{value:"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c gRPC?",id:"\u043a\u043e\u0433\u0434\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-grpc",level:2},{value:"gRPC <strong>\u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442</strong> \u0434\u043b\u044f",id:"grpc-\u043b\u0443\u0447\u0448\u0435-\u0432\u0441\u0435\u0433\u043e-\u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442-\u0434\u043b\u044f",level:3},{value:"REST <strong>\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c</strong> \u0434\u043b\u044f",id:"rest-\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f-\u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c-\u0434\u043b\u044f",level:3},{value:"\u0418\u0442\u043e\u0433",id:"\u0438\u0442\u043e\u0433",level:2}];function o(n){const e={h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.header,{children:(0,s.jsx)(e.h1,{id:"grpc",children:"gRPC"})}),"\n",(0,s.jsxs)(e.p,{children:["gRPC (Google Remote Procedure Call) \u2014 \u044d\u0442\u043e \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0439 \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0440\u0435\u0439\u043c\u0432\u043e\u0440\u043a \u0434\u043b\u044f \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 (",(0,s.jsx)(e.strong,{children:"Remote Procedure Call, RPC"}),"), \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u0439 Google. \u041e\u043d \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438 \u0432 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u0445 \u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"HTTP/2"}),", ",(0,s.jsx)(e.strong,{children:"Protocol Buffers (Protobuf)"})," \u0438 ",(0,s.jsx)(e.strong,{children:"\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433"}),"."]}),"\n",(0,s.jsx)(e.h2,{id:"\u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430-\u0438-\u043f\u0440\u0438\u043d\u0446\u0438\u043f-\u0440\u0430\u0431\u043e\u0442\u044b-grpc",children:"\u0410\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u0430 \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f \u0440\u0430\u0431\u043e\u0442\u044b gRPC"}),"\n",(0,s.jsxs)(e.p,{children:["gRPC \u043e\u0441\u043d\u043e\u0432\u0430\u043d \u043d\u0430 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u0432\u044b\u0437\u043e\u0432\u0430 \u043f\u0440\u043e\u0446\u0435\u0434\u0443\u0440 (",(0,s.jsx)(e.strong,{children:"RPC"}),"), \u0447\u0442\u043e \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u0432\u044b\u0437\u044b\u0432\u0430\u0442\u044c \u043c\u0435\u0442\u043e\u0434\u044b \u043d\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u043c \u0441\u0435\u0440\u0432\u0435\u0440\u0435 \u0442\u0430\u043a, \u0431\u0443\u0434\u0442\u043e \u043e\u043d\u0438 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c\u0438. \u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442 \u043f\u043e \u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b\u0443 ",(0,s.jsx)(e.strong,{children:"HTTP/2"}),", \u0430 \u0434\u0430\u043d\u043d\u044b\u0435 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0443\u044e\u0442\u0441\u044f \u0441 \u043f\u043e\u043c\u043e\u0449\u044c\u044e ",(0,s.jsx)(e.strong,{children:"Protobuf (Protocol Buffers)"}),"."]}),"\n",(0,s.jsx)(e.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041a\u043b\u0438\u0435\u043d\u0442 (Client)"})," \u2014 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 gRPC-\u0437\u0430\u043f\u0440\u043e\u0441 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0421\u0435\u0440\u0432\u0435\u0440 (Server)"})," \u2014 \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0437\u0430\u043f\u0440\u043e\u0441, \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442 \u0431\u0438\u0437\u043d\u0435\u0441-\u043b\u043e\u0433\u0438\u043a\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043e\u0442\u0432\u0435\u0442."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Stub (\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0430\u044f \u043e\u0431\u0451\u0440\u0442\u043a\u0430)"})," \u2014 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0441\u0433\u0435\u043d\u0435\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043a\u043e\u0434, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u0440\u0435\u043e\u0431\u0440\u0430\u0437\u0443\u0435\u0442 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 \u0432 \u0441\u0435\u0442\u0435\u0432\u043e\u0439."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Channel (\u041a\u0430\u043d\u0430\u043b \u0441\u0432\u044f\u0437\u0438)"})," \u2014 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0435 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c \u0447\u0435\u0440\u0435\u0437 HTTP/2."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Interceptors (\u041f\u0435\u0440\u0435\u0445\u0432\u0430\u0442\u0447\u0438\u043a\u0438)"})," \u2014 middleware-\u0441\u043b\u043e\u0438 \u0434\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043b\u043e\u0433\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f, \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u0438 \u0434\u0440\u0443\u0433\u0438\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u0434\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430-\u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f",children:"\u0414\u0438\u0430\u0433\u0440\u0430\u043c\u043c\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f"}),"\n",(0,s.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant gRPC_Stub\n    participant HTTP2_Channel\n    participant gRPC_Server\n    Client->>gRPC_Stub: \u0412\u044b\u0437\u043e\u0432 \u043c\u0435\u0442\u043e\u0434\u0430\n    gRPC_Stub->>HTTP2_Channel: \u0424\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n    HTTP2_Channel->>gRPC_Server: \u041f\u0435\u0440\u0435\u0434\u0430\u0447\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\n    gRPC_Server->>HTTP2_Channel: \u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0438 \u043e\u0442\u0432\u0435\u0442\n    HTTP2_Channel->>gRPC_Stub: \u0414\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u043e\u0442\u0432\u0435\u0442\u0430\n    gRPC_Stub->>Client: \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430"}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u0440\u043e\u0442\u043e\u043a\u043e\u043b-http2-\u0432-grpc",children:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b HTTP/2 \u0432 gRPC"}),"\n",(0,s.jsxs)(e.p,{children:["gRPC \u043f\u043e\u043b\u043d\u043e\u0441\u0442\u044c\u044e \u043e\u0441\u043d\u043e\u0432\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043d\u0430 ",(0,s.jsx)(e.strong,{children:"HTTP/2"}),", \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 ",(0,s.jsx)(e.strong,{children:"HTTP/1.1"}),", \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0433\u043e \u0432 REST."]}),"\n",(0,s.jsx)(e.h3,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-http2",children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 HTTP/2"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})," \u2013 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0442\u044c \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u0438 \u043e\u0442\u0432\u0435\u0442\u043e\u0432 \u0432 \u043e\u0434\u043d\u043e\u043c \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u0438 \u0431\u0435\u0437 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0421\u0436\u0430\u0442\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 (HPACK)"})," \u2013 \u0443\u043c\u0435\u043d\u044c\u0448\u0430\u0435\u0442 \u043e\u0431\u044a\u0435\u043c \u043f\u0435\u0440\u0435\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0445 \u043c\u0435\u0442\u0430\u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0414\u0432\u0443\u0445\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433"})," \u2013 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u043c\u0435\u043d\u0430 \u0434\u0430\u043d\u043d\u044b\u043c\u0438."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 push"})," \u2013 \u0441\u0435\u0440\u0432\u0435\u0440 \u043c\u043e\u0436\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u0443 \u0434\u0430\u043d\u043d\u044b\u0435 \u0431\u0435\u0437 \u044f\u0432\u043d\u043e\u0433\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0430."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 TLS"})," \u2013 gRPC \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u043d\u043e\u0433\u043e \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"protocol-buffers-protobuf",children:"Protocol Buffers (Protobuf)"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Protocol Buffers (protobuf)"})," \u2013 \u044d\u0442\u043e \u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0439 \u0432 gRPC. \u041e\u043d \u043a\u043e\u043c\u043f\u0430\u043a\u0442\u043d\u0435\u0435 \u0438 \u0431\u044b\u0441\u0442\u0440\u0435\u0435, \u0447\u0435\u043c JSON \u0438 XML."]}),"\n",(0,s.jsx)(e.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041c\u0435\u043d\u044c\u0448\u0438\u0439 \u0440\u0430\u0437\u043c\u0435\u0440 \u0434\u0430\u043d\u043d\u044b\u0445"})," (\u044d\u043a\u043e\u043d\u043e\u043c\u0438\u044f \u0442\u0440\u0430\u0444\u0438\u043a\u0430)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0411\u043e\u043b\u0435\u0435 \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0434\u0435\u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0442\u0440\u043e\u0433\u043e\u0439 \u0442\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u0438"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u042f\u0437\u044b\u043a\u043e\u043d\u0435\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u0430\u044f \u0441\u0445\u0435\u043c\u0430"})," (\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0440\u0430\u0437\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u043e\u0432)."]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b-protobuf",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u044b Protobuf"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"message"})," \u2013 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b \u0434\u0430\u043d\u043d\u044b\u0445."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"service"})," \u2013 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0438 \u0435\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u043e\u0432."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"rpc"})," \u2013 \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0443\u0434\u0430\u043b\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0435\u0442\u043e\u0434\u0430."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u0442\u0438\u043f\u044b-grpc-\u0432\u044b\u0437\u043e\u0432\u043e\u0432",children:"\u0422\u0438\u043f\u044b gRPC-\u0432\u044b\u0437\u043e\u0432\u043e\u0432"}),"\n",(0,s.jsxs)(e.p,{children:["gRPC \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u0447\u0435\u0442\u044b\u0440\u0435"})," \u0442\u0438\u043f\u0430 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c."]}),"\n",(0,s.jsx)(e.h3,{id:"\u043e\u0431\u044b\u0447\u043d\u044b\u0439-\u0432\u044b\u0437\u043e\u0432-unary-rpc",children:"\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0432\u044b\u0437\u043e\u0432 (Unary RPC)"}),"\n",(0,s.jsxs)(e.p,{children:["\u041a\u043b\u0438\u0435\u043d\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u043e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441"})," \u0438 \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u043e\u0434\u0438\u043d \u043e\u0442\u0432\u0435\u0442"}),"."]}),"\n",(0,s.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant gRPC_Server\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442"}),"\n",(0,s.jsx)(e.h3,{id:"\u0441\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433-server-streaming-rpc",children:"\u0421\u0435\u0440\u0432\u0435\u0440\u043d\u044b\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 (Server Streaming RPC)"}),"\n",(0,s.jsxs)(e.p,{children:["\u041a\u043b\u0438\u0435\u043d\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u043e\u0434\u0438\u043d \u0437\u0430\u043f\u0440\u043e\u0441"}),", \u0441\u0435\u0440\u0432\u0435\u0440 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u043c\u043d\u043e\u0433\u043e \u043e\u0442\u0432\u0435\u0442\u043e\u0432"}),"."]}),"\n",(0,s.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant gRPC_Server\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442 1\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442 2\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442 3"}),"\n",(0,s.jsx)(e.h3,{id:"\u043a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433-client-streaming-rpc",children:"\u041a\u043b\u0438\u0435\u043d\u0442\u0441\u043a\u0438\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 (Client Streaming RPC)"}),"\n",(0,s.jsxs)(e.p,{children:["\u041a\u043b\u0438\u0435\u043d\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432"}),", \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"\u043e\u0434\u0438\u043d \u043e\u0442\u0432\u0435\u0442"}),"."]}),"\n",(0,s.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant gRPC_Server\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441 1\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441 2\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441 3\n    gRPC_Server->>Client: \u0418\u0442\u043e\u0433\u043e\u0432\u044b\u0439 \u043e\u0442\u0432\u0435\u0442"}),"\n",(0,s.jsx)(e.h3,{id:"\u0434\u0432\u0443\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439-\u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433-bidirectional-streaming-rpc",children:"\u0414\u0432\u0443\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 (Bidirectional Streaming RPC)"}),"\n",(0,s.jsxs)(e.p,{children:["\u041a\u043b\u0438\u0435\u043d\u0442 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440 ",(0,s.jsx)(e.strong,{children:"\u043e\u0431\u043c\u0435\u043d\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0434\u0430\u043d\u043d\u044b\u043c\u0438 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u043e"}),"."]}),"\n",(0,s.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant Client\n    participant gRPC_Server\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441 1\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442 1\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441 2\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442 2\n    Client->>gRPC_Server: \u0417\u0430\u043f\u0440\u043e\u0441 3\n    gRPC_Server->>Client: \u041e\u0442\u0432\u0435\u0442 3"}),"\n",(0,s.jsx)(e.h2,{id:"\u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f-\u0438-\u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c",children:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0438 \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u043e\u0441\u0442\u044c"}),"\n",(0,s.jsxs)(e.p,{children:["gRPC \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 ",(0,s.jsx)(e.strong,{children:"TLS"}),", \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044f \u0431\u0435\u0437\u043e\u043f\u0430\u0441\u043d\u0443\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443 \u0434\u0430\u043d\u043d\u044b\u0445. \u0422\u0430\u043a\u0436\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"JWT (JSON Web Tokens)"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"OAuth2"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"API-\u043a\u043b\u044e\u0447\u0438"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"LDAP \u0438 mTLS (Mutual TLS)"}),"."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430-\u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438",children:"\u0411\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0430 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438"}),"\n",(0,s.jsx)(e.p,{children:"gRPC \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0439 \u0431\u0430\u043b\u0430\u043d\u0441\u0438\u0440\u043e\u0432\u043a\u0438:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Round Robin"})," \u2013 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0430\u043c\u0438."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Least Connections"})," \u2013 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0443 \u0441 \u043d\u0430\u0438\u043c\u0435\u043d\u044c\u0448\u0435\u0439 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u043e\u0439."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"Consistent Hashing"})," \u2013 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0430 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u043a \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e\u043c\u0443 \u0441\u0435\u0440\u0432\u0435\u0440\u0443."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-grpc-\u043f\u0435\u0440\u0435\u0434-rest",children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 gRPC \u043f\u0435\u0440\u0435\u0434 REST"}),"\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"\u0424\u0430\u043a\u0442\u043e\u0440"}),(0,s.jsx)(e.th,{children:"gRPC"}),(0,s.jsx)(e.th,{children:"REST (HTTP/1.1)"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u041f\u0440\u043e\u0442\u043e\u043a\u043e\u043b"})}),(0,s.jsx)(e.td,{children:"HTTP/2"}),(0,s.jsx)(e.td,{children:"HTTP/1.1"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u0424\u043e\u0440\u043c\u0430\u0442 \u0434\u0430\u043d\u043d\u044b\u0445"})}),(0,s.jsx)(e.td,{children:"Protobuf (\u0431\u0438\u043d\u0430\u0440\u043d\u044b\u0439)"}),(0,s.jsx)(e.td,{children:"JSON/XML (\u0442\u0435\u043a\u0441\u0442\u043e\u0432\u044b\u0439)"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c"})}),(0,s.jsx)(e.td,{children:"\u0411\u044b\u0441\u0442\u0440\u0435\u0435"}),(0,s.jsx)(e.td,{children:"\u041c\u0435\u0434\u043b\u0435\u043d\u043d\u0435\u0435"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u0420\u0430\u0437\u043c\u0435\u0440 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439"})}),(0,s.jsx)(e.td,{children:"\u041c\u0435\u043d\u044c\u0448\u0435"}),(0,s.jsx)(e.td,{children:"\u0411\u043e\u043b\u044c\u0448\u0435"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u0430"})}),(0,s.jsx)(e.td,{children:"\u0414\u0430"}),(0,s.jsx)(e.td,{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u0430\u044f"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u0421\u0436\u0430\u0442\u0438\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432"})}),(0,s.jsx)(e.td,{children:"\u0414\u0430 (HPACK)"}),(0,s.jsx)(e.td,{children:"\u041d\u0435\u0442"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.strong,{children:"\u041c\u0443\u043b\u044c\u0442\u0438\u043f\u043b\u0435\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})}),(0,s.jsx)(e.td,{children:"\u0414\u0430"}),(0,s.jsx)(e.td,{children:"\u041d\u0435\u0442"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"\u043d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438-grpc",children:"\u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043a\u0438 gRPC"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u0421\u043b\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u043e\u0442\u043b\u0430\u0434\u043a\u0438"})," (\u0438\u0437-\u0437\u0430 \u0431\u0438\u043d\u0430\u0440\u043d\u043e\u0433\u043e \u0444\u043e\u0440\u043c\u0430\u0442\u0430 Protobuf)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u0445"})," (\u0442\u0430\u043a \u043a\u0430\u043a gRPC \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 HTTP/2, \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u044b \u043c\u043e\u0433\u0443\u0442 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044c \u043f\u0440\u044f\u043c\u044b\u0435 \u0432\u044b\u0437\u043e\u0432\u044b)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.strong,{children:"\u041a\u0440\u0443\u0442\u0430\u044f \u043a\u0440\u0438\u0432\u0430\u044f \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u044f"})," (\u043d\u0443\u0436\u043d\u043e \u043e\u0441\u0432\u043e\u0438\u0442\u044c Protobuf, gRPC API \u0438 \u043f\u0440\u0438\u043d\u0446\u0438\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b HTTP/2)."]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u043a\u043e\u0433\u0434\u0430-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-grpc",children:"\u041a\u043e\u0433\u0434\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c gRPC?"}),"\n",(0,s.jsxs)(e.h3,{id:"grpc-\u043b\u0443\u0447\u0448\u0435-\u0432\u0441\u0435\u0433\u043e-\u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442-\u0434\u043b\u044f",children:["gRPC ",(0,s.jsx)(e.strong,{children:"\u043b\u0443\u0447\u0448\u0435 \u0432\u0441\u0435\u0433\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442"})," \u0434\u043b\u044f"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u0412\u044b\u0441\u043e\u043a\u043e\u043d\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043d\u044b\u0445 \u043c\u0438\u043a\u0440\u043e\u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432."}),"\n",(0,s.jsx)(e.li,{children:"\u0412\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043c\u0438 \u0432 \u0440\u0430\u0437\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445."}),"\n",(0,s.jsx)(e.li,{children:"\u0421\u0442\u0440\u0438\u043c\u0438\u043d\u0433\u043e\u0432\u044b\u0445 \u0438 real-time \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439."}),"\n",(0,s.jsx)(e.li,{children:"\u041c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0445 \u0438 IoT-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (\u0438\u0437-\u0437\u0430 \u043d\u0438\u0437\u043a\u043e\u0439 \u043d\u0430\u0433\u0440\u0443\u0437\u043a\u0438 \u043d\u0430 \u0441\u0435\u0442\u044c)."}),"\n"]}),"\n",(0,s.jsxs)(e.h3,{id:"rest-\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f-\u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c-\u0434\u043b\u044f",children:["REST ",(0,s.jsx)(e.strong,{children:"\u043e\u0441\u0442\u0430\u0435\u0442\u0441\u044f \u0430\u043a\u0442\u0443\u0430\u043b\u044c\u043d\u044b\u043c"})," \u0434\u043b\u044f"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u0412\u0435\u0431-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 (\u0438\u0437-\u0437\u0430 \u043b\u0443\u0447\u0448\u0435\u0439 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0438 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430\u043c\u0438)."}),"\n",(0,s.jsx)(e.li,{children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044b\u0445 API (REST \u043f\u0440\u043e\u0449\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c)."}),"\n",(0,s.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u044b\u0445 \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432, \u0433\u0434\u0435 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u043d\u0435 \u043a\u0440\u0438\u0442\u0438\u0447\u043d\u0430."}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u0438\u0442\u043e\u0433",children:"\u0418\u0442\u043e\u0433"}),"\n",(0,s.jsx)(e.p,{children:"gRPC \u2014 \u044d\u0442\u043e \u043c\u043e\u0449\u043d\u044b\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u0432\u044b\u0441\u043e\u043a\u043e\u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u0440\u0430\u0441\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u0445 \u0441\u0438\u0441\u0442\u0435\u043c. \u041e\u043d \u0431\u044b\u0441\u0442\u0440\u0435\u0435 REST, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0441\u0442\u0440\u0438\u043c\u0438\u043d\u0433 \u0438 \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u0435\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0441\u0435\u0442\u0435\u0432\u044b\u0435 \u0440\u0435\u0441\u0443\u0440\u0441\u044b \u0431\u043b\u0430\u0433\u043e\u0434\u0430\u0440\u044f HTTP/2. \u041e\u0434\u043d\u0430\u043a\u043e \u043e\u043d \u0441\u043b\u043e\u0436\u043d\u0435\u0435 \u0432 \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0435 \u0438 \u043d\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u0443\u0434\u043e\u0431\u0435\u043d \u0434\u043b\u044f \u0432\u0435\u0431-\u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432."})]})}function x(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(o,{...n})}):o(n)}},8453:(n,e,r)=>{r.d(e,{R:()=>t,x:()=>d});var i=r(6540);const s={},l=i.createContext(s);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);