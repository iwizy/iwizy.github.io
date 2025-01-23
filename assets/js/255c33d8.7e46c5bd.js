"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[4298],{4154:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>o});const l=JSON.parse('{"id":"sql/group","title":"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430","description":"\u0412 SQL \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u0430\u0436\u043d\u044b\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c \u0432\u044b\u0432\u043e\u0434\u0430 \u0441\u0442\u0440\u043e\u043a \u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0438\u0445 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435:","source":"@site/database/sql/group.md","sourceDirName":"sql","slug":"/sql/group","permalink":"/database/sql/group","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"slug":"/sql/group"},"sidebar":"tutorialSidebar","previous":{"title":"\u0410\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438","permalink":"/database/sql/agrigate"},"next":{"title":"\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0411\u0414","permalink":"/database/scaling"}}');var r=s(4848),i=s(8453);const d={sidebar_position:3,slug:"/sql/group"},c="\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",a={},o=[{value:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 (GROUP BY)",id:"\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430-group-by",level:2},{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",level:3},{value:"\u042d\u0442\u0430\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b",id:"\u044d\u0442\u0430\u043f\u044b-\u0440\u0430\u0431\u043e\u0442\u044b",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440",level:3},{value:"HAVING \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0433\u0440\u0443\u043f\u043f",id:"having-\u0434\u043b\u044f-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438-\u0433\u0440\u0443\u043f\u043f",level:3},{value:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 (ORDER BY)",id:"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430-order-by",level:2},{value:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-1",level:3},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",level:3},{value:"\u041a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 GROUP BY \u0438 ORDER BY",id:"\u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-group-by-\u0438-order-by",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440",id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",level:3},{value:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0438-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",level:2},{value:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430-\u0438-\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430",children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430"})}),"\n",(0,r.jsx)(n.p,{children:"\u0412 SQL \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u044f\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0432\u0430\u0436\u043d\u044b\u043c\u0438 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u0430\u043c\u0438 \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. \u041e\u043d\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u043f\u043e\u0440\u044f\u0434\u043a\u043e\u043c \u0432\u044b\u0432\u043e\u0434\u0430 \u0441\u0442\u0440\u043e\u043a \u0438 \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u043f\u043e \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d\u043d\u044b\u043c \u043a\u0440\u0438\u0442\u0435\u0440\u0438\u044f\u043c. \u0420\u0430\u0441\u0441\u043c\u043e\u0442\u0440\u0438\u043c \u0438\u0445 \u043f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435:"}),"\n",(0,r.jsx)(n.h2,{id:"\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430-group-by",children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 (GROUP BY)"}),"\n",(0,r.jsxs)(n.p,{children:["\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u0438 \u0441 \u043e\u0434\u0438\u043d\u0430\u043a\u043e\u0432\u044b\u043c\u0438 \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438 \u0432 \u043e\u0434\u043d\u0443 \u0433\u0440\u0443\u043f\u043f\u0443, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u0438\u043c\u0435\u043d\u044f\u0442\u044c \u043a \u043d\u0438\u043c \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0442\u0430\u043a\u0438\u0435 \u043a\u0430\u043a ",(0,r.jsx)(n.code,{children:"SUM()"}),", ",(0,r.jsx)(n.code,{children:"AVG()"}),", ",(0,r.jsx)(n.code,{children:"COUNT()"}),", ",(0,r.jsx)(n.code,{children:"MAX()"}),", ",(0,r.jsx)(n.code,{children:"MIN()"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441",children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT \u0441\u0442\u043e\u043b\u0431\u0435\u04461, \u0441\u0442\u043e\u043b\u0431\u0435\u04462, \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u0430\u044f_\u0444\u0443\u043d\u043a\u0446\u0438\u044f(\u0441\u0442\u043e\u043b\u0431\u0435\u04463)\nFROM \u0442\u0430\u0431\u043b\u0438\u0446\u0430\nWHERE \u0443\u0441\u043b\u043e\u0432\u0438\u0435\nGROUP BY \u0441\u0442\u043e\u043b\u0431\u0435\u04461, \u0441\u0442\u043e\u043b\u0431\u0435\u04462\nHAVING \u0443\u0441\u043b\u043e\u0432\u0438\u0435_\u043d\u0430_\u0433\u0440\u0443\u043f\u043f\u0443\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u044d\u0442\u0430\u043f\u044b-\u0440\u0430\u0431\u043e\u0442\u044b",children:"\u042d\u0442\u0430\u043f\u044b \u0440\u0430\u0431\u043e\u0442\u044b"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"WHERE"})," \u2014 \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u043f\u0435\u0440\u0435\u0434 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u043e\u0439."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GROUP BY"})," \u2014 \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u044f\u0435\u0442 \u0441\u0442\u0440\u043e\u043a\u0438 \u0432 \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u043e \u0443\u043a\u0430\u0437\u0430\u043d\u043d\u044b\u043c \u0441\u0442\u043e\u043b\u0431\u0446\u0430\u043c."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u0410\u0413\u0420\u0415\u0413\u0410\u0422\u041d\u042b\u0415 \u0424\u0423\u041d\u041a\u0426\u0418\u0418"})," \u2014 \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u044e\u0442 \u0432\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u0439 \u0433\u0440\u0443\u043f\u043f\u044b."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"HAVING"})," \u2014 \u0444\u0438\u043b\u044c\u0442\u0440\u0443\u0435\u0442 \u0433\u0440\u0443\u043f\u043f\u044b (\u0430\u043d\u0430\u043b\u043e\u0433\u0438\u0447\u043d\u043e ",(0,r.jsx)(n.code,{children:"WHERE"}),", \u043d\u043e \u043f\u043e\u0441\u043b\u0435 \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0438)."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,r.jsxs)(n.p,{children:["\u041f\u0440\u0435\u0434\u043f\u043e\u043b\u043e\u0436\u0438\u043c, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c \u0442\u0430\u0431\u043b\u0438\u0446\u0430 ",(0,r.jsx)(n.code,{children:"sales"})," \u0441 \u043a\u043e\u043b\u043e\u043d\u043a\u0430\u043c\u0438 ",(0,r.jsx)(n.code,{children:"category"}),", ",(0,r.jsx)(n.code,{children:"product"})," \u0438 ",(0,r.jsx)(n.code,{children:"revenue"}),". \u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0437\u043d\u0430\u0442\u044c \u043e\u0431\u0449\u0443\u044e \u0432\u044b\u0440\u0443\u0447\u043a\u0443 \u043f\u043e \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f\u043c:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT category, SUM(revenue) AS total_revenue\nFROM sales\nGROUP BY category;\n"})}),"\n",(0,r.jsx)(n.h3,{id:"having-\u0434\u043b\u044f-\u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438-\u0433\u0440\u0443\u043f\u043f",children:"HAVING \u0434\u043b\u044f \u0444\u0438\u043b\u044c\u0442\u0440\u0430\u0446\u0438\u0438 \u0433\u0440\u0443\u043f\u043f"}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0432\u044b\u0432\u0435\u0441\u0442\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u0442\u0435 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u0438, \u0433\u0434\u0435 \u0432\u044b\u0440\u0443\u0447\u043a\u0430 \u0431\u043e\u043b\u044c\u0448\u0435 1000:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT category, SUM(revenue) AS total_revenue\nFROM sales\nGROUP BY category\nHAVING SUM(revenue) > 1000;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430-order-by",children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 (ORDER BY)"}),"\n",(0,r.jsx)(n.p,{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0434\u043b\u044f \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0432\u0430\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0430 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438\u043b\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432."}),"\n",(0,r.jsx)(n.h3,{id:"\u0441\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441-1",children:"\u0421\u0438\u043d\u0442\u0430\u043a\u0441\u0438\u0441"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT \u0441\u0442\u043e\u043b\u0431\u0435\u04461, \u0441\u0442\u043e\u043b\u0431\u0435\u04462\nFROM \u0442\u0430\u0431\u043b\u0438\u0446\u0430\nWHERE \u0443\u0441\u043b\u043e\u0432\u0438\u0435\nORDER BY \u0441\u0442\u043e\u043b\u0431\u0435\u04461 [ASC|DESC], \u0441\u0442\u043e\u043b\u0431\u0435\u04462 [ASC|DESC];\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"ASC"})," \u2014 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e (\u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"DESC"})," \u2014 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0443\u0431\u044b\u0432\u0430\u043d\u0438\u044e."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-1",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u043e\u0434\u043d\u043e\u0439 \u043a\u043e\u043b\u043e\u043d\u043a\u0435:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT product, revenue\nFROM sales\nORDER BY revenue DESC;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c \u043a\u043e\u043b\u043e\u043d\u043a\u0430\u043c:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT category, product, revenue\nFROM sales\nORDER BY category ASC, revenue DESC;\n"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u043a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435-group-by-\u0438-order-by",children:"\u041a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 GROUP BY \u0438 ORDER BY"}),"\n",(0,r.jsx)(n.p,{children:"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0443 \u0438 \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0443 \u0432 \u043e\u0434\u043d\u043e\u043c \u0437\u0430\u043f\u0440\u043e\u0441\u0435. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440, \u0435\u0441\u043b\u0438 \u0432\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0433\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435, \u0430 \u0437\u0430\u0442\u0435\u043c \u0443\u043f\u043e\u0440\u044f\u0434\u043e\u0447\u0438\u0442\u044c \u0433\u0440\u0443\u043f\u043f\u044b \u043f\u043e \u0438\u0442\u043e\u0433\u043e\u0432\u044b\u043c \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c:"}),"\n",(0,r.jsx)(n.h3,{id:"\u043f\u0440\u0438\u043c\u0435\u0440-2",children:"\u041f\u0440\u0438\u043c\u0435\u0440"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT category, SUM(revenue) AS total_revenue\nFROM sales\nGROUP BY category\nORDER BY total_revenue DESC;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438-\u0438-\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f",children:"\u041e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"GROUP BY \u0434\u043e\u043b\u0436\u0435\u043d \u0432\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0432\u0441\u0435 \u0441\u0442\u043e\u043b\u0431\u0446\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442\u0441\u044f \u0432 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u0445."})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT category, product, SUM(revenue)\nFROM sales\nGROUP BY category, product;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"ORDER BY \u043c\u043e\u0436\u0435\u0442 \u0441\u0441\u044b\u043b\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043f\u0441\u0435\u0432\u0434\u043e\u043d\u0438\u043c\u044b \u0441\u0442\u043e\u043b\u0431\u0446\u043e\u0432 \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440\u0430 \u0438\u0445 \u043f\u043e\u0437\u0438\u0446\u0438\u0439:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sql",children:"SELECT category, SUM(revenue) AS total_revenue\nFROM sales\nGROUP BY category\nORDER BY total_revenue DESC;\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"HAVING \u043d\u0435\u043b\u044c\u0437\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0431\u0435\u0437 GROUP BY, \u0435\u0441\u043b\u0438 \u043d\u0435\u0442 \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u043e\u0439 \u0444\u0443\u043d\u043a\u0446\u0438\u0438."})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u0437\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435",children:"\u0417\u0430\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 ",(0,r.jsx)(n.strong,{children:"GROUP BY"})," \u0434\u043b\u044f \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441\u0442\u0440\u043e\u043a \u0432 \u0433\u0440\u0443\u043f\u043f\u044b \u0438 \u043f\u0440\u0438\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u043a \u043d\u0438\u043c \u0430\u0433\u0440\u0435\u0433\u0430\u0442\u043d\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439."]}),"\n",(0,r.jsxs)(n.li,{children:["\u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0439\u0442\u0435 ",(0,r.jsx)(n.strong,{children:"ORDER BY"})," \u0434\u043b\u044f \u0441\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432."]}),"\n",(0,r.jsx)(n.li,{children:"\u041a\u043e\u043c\u0431\u0438\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u0442\u0438\u0445 \u0438\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442\u043e\u0432 \u0434\u0430\u0451\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u0434\u043b\u044f \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var l=s(6540);const r={},i=l.createContext(r);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);