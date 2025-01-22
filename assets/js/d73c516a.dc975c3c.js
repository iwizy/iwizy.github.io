"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[5423],{6172:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>l,toc:()=>t});const l=JSON.parse('{"id":"types/nosql/db-time-row","title":"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432","description":"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432 (time series databases, TSDB) \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u044b \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0422\u0430\u043a\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0440\u044f\u0434\u0430\u043c\u0438 \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445.","source":"@site/database/types/nosql/db-time-row.md","sourceDirName":"types/nosql","slug":"/types/nosql/db-\u0435\u0448\u044c row","permalink":"/database/types/nosql/db-\u0435\u0448\u044c row","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4,"slug":"/types/nosql/db-\u0435\u0448\u044c row"},"sidebar":"tutorialSidebar","previous":{"title":"\u041a\u043e\u043b\u043e\u043d\u043e\u0447\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445","permalink":"/database/types/nosql/db-\u0441olumn"},"next":{"title":"db-graph","permalink":"/database/types/nosql/db-graph"}}');var i=s(4848),r=s(8453);const d={sidebar_position:4,slug:"/types/nosql/db-\u0435\u0448\u044c row"},c="\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432",h={},t=[{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",level:2},{value:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432",id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u0437\u0430\u0434\u0430\u0447\u0438-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",level:2},{value:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 TSDB",id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-tsdb",level:2},{value:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432",id:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",level:2},{value:"InfluxDB",id:"influxdb",level:3},{value:"TimescaleDB",id:"timescaledb",level:3},{value:"OpenTSDB",id:"opentsdb",level:3},{value:"Prometheus",id:"prometheus",level:3},{value:"Graphite",id:"graphite",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432",id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",level:2},{value:"\u0421\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0431\u043e\u0440\u0443 TSDB",id:"\u0441\u043e\u0432\u0435\u0442\u044b-\u043f\u043e-\u0432\u044b\u0431\u043e\u0440\u0443-tsdb",level:2}];function x(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",children:"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"})}),"\n",(0,i.jsx)(e.p,{children:"\u0411\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432 (time series databases, TSDB) \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u044b \u0434\u043b\u044f \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0433\u043e \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f, \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0438 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0435\u043d\u044b \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438. \u0422\u0430\u043a\u0438\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u043c\u0438 \u0440\u044f\u0434\u0430\u043c\u0438 \u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439, \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0438 \u0431\u043e\u043b\u044c\u0448\u0438\u0445 \u043e\u0431\u044a\u0435\u043c\u043e\u0432 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsx)(e.h2,{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),"\n",(0,i.jsx)(e.p,{children:"\u0412\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0440\u044f\u0434 \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442 \u0441\u043e\u0431\u043e\u0439 \u043d\u0430\u0431\u043e\u0440 \u0434\u0430\u043d\u043d\u044b\u0445, \u0433\u0434\u0435 \u043a\u0430\u0436\u0434\u043e\u0435 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u0441\u0432\u044f\u0437\u0430\u043d\u043e \u0441 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u043c\u0435\u0442\u043a\u043e\u0439. \u041f\u0440\u0438\u043c\u0435\u0440\u044b \u0442\u0430\u043a\u0438\u0445 \u0434\u0430\u043d\u043d\u044b\u0445:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0418\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b \u043d\u0430 \u043f\u0440\u043e\u0442\u044f\u0436\u0435\u043d\u0438\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u041b\u043e\u0433-\u0444\u0430\u0439\u043b\u044b \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432 (\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u043c\u0435\u0442\u043a\u0430 + \u0441\u043e\u0431\u044b\u0442\u0438\u0435)."}),"\n",(0,i.jsx)(e.li,{children:"\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u043e\u0442\u0440\u0435\u0431\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u044d\u043d\u0435\u0440\u0433\u0438\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0411\u0438\u0440\u0436\u0435\u0432\u044b\u0435 \u043a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0438 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0435 \u043c\u0435\u0442\u0440\u0438\u043a\u0438."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435-\u0437\u0430\u0434\u0430\u0447\u0438-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",children:"\u041e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0437\u0430\u0434\u0430\u0447\u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0425\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0445"}),": \u0411\u044b\u0441\u0442\u0440\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043d\u043e\u0432\u044b\u0445 \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u043c\u0438 \u0437\u0430\u0442\u0440\u0430\u0442\u0430\u043c\u0438 \u043d\u0430 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0410\u0433\u0440\u0435\u0433\u0430\u0446\u0438\u044f"}),": \u041f\u043e\u0434\u0441\u0447\u0435\u0442 \u0441\u0440\u0435\u0434\u043d\u0435\u0433\u043e, \u043c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e, \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439 \u0437\u0430 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u043f\u0435\u0440\u0438\u043e\u0434."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438"}),": \u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0432\u044b\u0431\u043e\u0440\u043a\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0437\u0430 \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u0439 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u0439 \u0438\u043d\u0442\u0435\u0440\u0432\u0430\u043b."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0442\u0440\u0435\u043d\u0434\u043e\u0432"}),": \u041e\u0431\u043d\u0430\u0440\u0443\u0436\u0435\u043d\u0438\u0435 \u043f\u0430\u0442\u0442\u0435\u0440\u043d\u043e\u0432, \u043f\u0440\u043e\u0433\u043d\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0431\u0443\u0434\u0443\u0449\u0438\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u043f\u0443\u0441\u043a\u043e\u0432"}),": \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u043e\u0435 \u0432\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u043f\u0443\u0449\u0435\u043d\u043d\u044b\u0445 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u0439."]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430-tsdb",children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 TSDB"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f \u043f\u043e\u0434 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0435 \u0440\u044f\u0434\u044b: \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0435 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435 \u0438 \u0438\u043d\u0434\u0435\u043a\u0441\u0430\u0446\u0438\u044f."}),"\n",(0,i.jsxs)(e.li,{children:["\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a:","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0421\u043a\u043e\u043b\u044c\u0437\u044f\u0449\u0435\u0435 \u0441\u0440\u0435\u0434\u043d\u0435\u0435."}),"\n",(0,i.jsx)(e.li,{children:"\u041d\u0430\u043a\u043e\u043f\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0435 \u0441\u0443\u043c\u043c\u044b."}),"\n",(0,i.jsx)(e.li,{children:"\u0418\u043d\u0442\u0435\u0440\u043f\u043e\u043b\u044f\u0446\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.li,{children:"\u0412\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u043f\u0440\u0438 \u0437\u0430\u043f\u0438\u0441\u0438 \u0431\u043e\u043b\u044c\u0448\u043e\u0433\u043e \u043e\u0431\u044a\u0435\u043c\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsx)(e.li,{children:"\u0413\u0438\u0431\u043a\u043e\u0441\u0442\u044c \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f: \u043c\u043d\u043e\u0433\u0438\u0435 TSDB \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442 \u0433\u043e\u0440\u0438\u0437\u043e\u043d\u0442\u0430\u043b\u044c\u043d\u043e\u0435 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435-\u0431\u0430\u0437\u044b-\u0434\u0430\u043d\u043d\u044b\u0445-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0431\u0430\u0437\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),"\n",(0,i.jsx)(e.h3,{id:"influxdb",children:"InfluxDB"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u042f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432: InfluxQL (\u043f\u043e\u0445\u043e\u0436 \u043d\u0430 SQL)."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430: \u0432\u044b\u0441\u043e\u043a\u0430\u044f \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430 \u0442\u0435\u0433\u043e\u0432 \u0434\u043b\u044f \u0443\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432, IoT, \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0438\u0441\u0438:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"temperature,location=room1 value=22.5 1672502400\n"})}),"\n",(0,i.jsx)(e.h3,{id:"timescaledb",children:"TimescaleDB"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u0430 \u043f\u043e\u0432\u0435\u0440\u0445 PostgreSQL."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 SQL \u0438 \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438 PostgreSQL."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0441 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0444\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-sql",children:"SELECT time_bucket('1 hour', timestamp) AS bucket,\n       AVG(value) AS avg_value\nFROM temperature\nWHERE timestamp > now() - interval '1 day'\nGROUP BY bucket;\n"})}),"\n",(0,i.jsx)(e.h3,{id:"opentsdb",children:"OpenTSDB"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041e\u0441\u043d\u043e\u0432\u0430\u043d\u0430 \u043d\u0430 HBase (NoSQL)."}),"\n",(0,i.jsx)(e.li,{children:"\u041e\u0442\u043b\u0438\u0447\u043d\u043e \u043f\u043e\u0434\u0445\u043e\u0434\u0438\u0442 \u0434\u043b\u044f \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0431\u043e\u043b\u044c\u0448\u0438\u043c\u0438 \u043e\u0431\u044a\u0435\u043c\u0430\u043c\u0438 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n",(0,i.jsx)(e.li,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0441\u0438\u0441\u0442\u0435\u043c \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432 \u043a\u0440\u0443\u043f\u043d\u044b\u0445 \u0434\u0430\u0442\u0430-\u0446\u0435\u043d\u0442\u0440\u0430\u0445."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u043a\u043e\u043c\u0430\u043d\u0434\u044b \u0437\u0430\u043f\u0438\u0441\u0438:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"put sys.cpu.load 1672502400 0.65 host=server1\n"})}),"\n",(0,i.jsx)(e.h3,{id:"prometheus",children:"Prometheus"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442 \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0438 \u043e\u043f\u043e\u0432\u0435\u0449\u0435\u043d\u0438\u044f."}),"\n",(0,i.jsx)(e.li,{children:"\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u044f\u0437\u044b\u043a \u0437\u0430\u043f\u0440\u043e\u0441\u043e\u0432 PromQL."}),"\n",(0,i.jsx)(e.li,{children:"\u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043c\u0435\u0442\u0440\u0438\u043a\u0430\u0445 \u0438 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u0430\u0445 \u0434\u043b\u044f DevOps."}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"\u041f\u0440\u0438\u043c\u0435\u0440 \u0437\u0430\u043f\u0440\u043e\u0441\u0430:"})}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{children:"avg_over_time(cpu_usage[5m])\n"})}),"\n",(0,i.jsx)(e.h3,{id:"graphite",children:"Graphite"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0441\u0442\u043e\u0442\u0430 \u0432 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0427\u0430\u0449\u0435 \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433\u0430 \u0438 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0442\u0440\u0438\u043a."}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435-\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445-\u0440\u044f\u0434\u043e\u0432",children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u0432\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445 \u0440\u044f\u0434\u043e\u0432"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0442\u0435\u0440\u043d\u0435\u0442 \u0432\u0435\u0449\u0435\u0439 (IoT)"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0414\u0430\u0442\u0447\u0438\u043a\u0438 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u0442\u0443\u0440\u044b, \u0432\u043b\u0430\u0436\u043d\u043e\u0441\u0442\u0438, \u043e\u0441\u0432\u0435\u0449\u0435\u043d\u043d\u043e\u0441\u0442\u0438."}),"\n",(0,i.jsx)(e.li,{children:"\u0423\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430 \u0443\u043c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440\u0438\u043d\u0433 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u0432."}),"\n",(0,i.jsx)(e.li,{children:"\u0421\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435 \u0441\u0435\u0442\u0435\u0439."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u0424\u0438\u043d\u0430\u043d\u0441\u043e\u0432\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u0411\u0438\u0440\u0436\u0435\u0432\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."}),"\n",(0,i.jsx)(e.li,{children:"\u0410\u043d\u0430\u043b\u0438\u0437 \u0434\u043e\u0445\u043e\u0434\u043e\u0432."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u041d\u0430\u0443\u0447\u043d\u044b\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f"}),":"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u041c\u0435\u0442\u0435\u043e\u0440\u043e\u043b\u043e\u0433\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0434\u0430\u043d\u043d\u044b\u0435."}),"\n",(0,i.jsx)(e.li,{children:"\u0418\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f \u0432 \u0444\u0438\u0437\u0438\u043a\u0435 \u0438 \u0431\u0438\u043e\u043b\u043e\u0433\u0438\u0438."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u0441\u043e\u0432\u0435\u0442\u044b-\u043f\u043e-\u0432\u044b\u0431\u043e\u0440\u0443-tsdb",children:"\u0421\u043e\u0432\u0435\u0442\u044b \u043f\u043e \u0432\u044b\u0431\u043e\u0440\u0443 TSDB"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0422\u0438\u043f \u0434\u0430\u043d\u043d\u044b\u0445"}),": \u0423\u0431\u0435\u0434\u0438\u0442\u0435\u0441\u044c, \u0447\u0442\u043e \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043d\u0443\u0436\u043d\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u043e\u0431\u044a\u0435\u043c\u044b."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044f"}),": \u0412\u044b\u0431\u0438\u0440\u0430\u0439\u0442\u0435 TSDB, \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u0443\u044e \u0441 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0435\u0439 \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u043e\u0439."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0421\u043a\u043e\u0440\u043e\u0441\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u0438/\u0447\u0442\u0435\u043d\u0438\u044f"}),": \u0412\u0430\u0436\u043d\u0430 \u0434\u043b\u044f \u0441\u0438\u0441\u0442\u0435\u043c \u0440\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u0440\u0435\u043c\u0435\u043d\u0438."]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u0424\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),": \u041d\u0430\u043b\u0438\u0447\u0438\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u044b\u0445 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432."]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>c});var l=s(6540);const i={},r=l.createContext(i);function d(n){const e=l.useContext(r);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),l.createElement(r.Provider,{value:e},n.children)}}}]);