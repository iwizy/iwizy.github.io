"use strict";(self.webpackChunkiwizards_lounge=self.webpackChunkiwizards_lounge||[]).push([[7283],{6401:i=>{i.exports=JSON.parse('{"version":{"pluginId":"integrations","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438","href":"/integrations/","docId":"intro","unlisted":false},{"type":"category","label":"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"\u0421\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b","href":"/integrations/api-design/entity","docId":"api-design/entity/index","unlisted":false},{"type":"link","label":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API","href":"/integrations/api-design/api-doc","docId":"api-design/api-doc/index","unlisted":false},{"type":"link","label":"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438","href":"/integrations/api-design/formats","docId":"api-design/formats/index","unlisted":false},{"type":"link","label":"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c","href":"/integrations/api-design/back-compatibility","docId":"api-design/back-compatibility/index","unlisted":false},{"type":"link","label":"\u0418\u0434\u0435\u043c\u043f\u043e\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c","href":"/integrations/api-design/idempotency","docId":"api-design/idempotency/index","unlisted":false}],"href":"/integrations/api-design"},{"type":"link","label":"\u0412\u0438\u0434\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439","href":"/integrations/types","docId":"types/index","unlisted":false},{"type":"link","label":"\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","href":"/integrations/network","docId":"network/index","unlisted":false}]},"docs":{"api-design/api-doc/index":{"id":"api-design/api-doc/index","title":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API","description":"\u0414\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API \u2014 \u044d\u0442\u043e \u043f\u0440\u043e\u0446\u0435\u0441\u0441 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043e\u043f\u0438\u0441\u0430\u043d\u0438\u044f \u0444\u0443\u043d\u043a\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438, \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0435\u0439 \u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439 API (\u0438\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441\u0430 \u043f\u0440\u0438\u043a\u043b\u0430\u0434\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f). \u0425\u043e\u0440\u043e\u0448\u043e \u0437\u0430\u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 API \u043f\u043e\u043c\u043e\u0433\u0430\u0435\u0442 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0430\u043c \u0431\u044b\u0441\u0442\u0440\u0435\u0435 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0441 \u0432\u0430\u0448\u0438\u043c \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u043c, \u043f\u043e\u043d\u0438\u043c\u0430\u0442\u044c, \u043a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0444\u0443\u043d\u043a\u0446\u0438\u0438, \u0438 \u043c\u0438\u043d\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043e\u0448\u0438\u0431\u043a\u0438.","sidebar":"tutorialSidebar"},"api-design/back-compatibility/index":{"id":"api-design/back-compatibility/index","title":"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c","description":"\u041e\u0431\u0440\u0430\u0442\u043d\u0430\u044f \u0441\u043e\u0432\u043c\u0435\u0441\u0442\u0438\u043c\u043e\u0441\u0442\u044c API (Backward Compatibility) \u2014 \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u043d\u043e\u0432\u044b\u043c \u0432\u0435\u0440\u0441\u0438\u044f\u043c API \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u043e\u0432\u0430\u0442\u044c \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438\u043b\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438, \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u044b\u043c\u0438 \u0434\u043b\u044f \u0441\u0442\u0430\u0440\u044b\u0445 \u0432\u0435\u0440\u0441\u0438\u0439 API. \u042d\u0442\u043e \u043a\u0440\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u0432\u0430\u0436\u043d\u043e \u0434\u043b\u044f \u0441\u0442\u0430\u0431\u0438\u043b\u044c\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0449\u0438\u0445 API, \u0438 \u0434\u043b\u044f \u043f\u0440\u0435\u0434\u043e\u0442\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f \u043d\u0430\u0440\u0443\u0448\u0435\u043d\u0438\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439 \u043f\u0440\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f\u0445.","sidebar":"tutorialSidebar"},"api-design/entity/index":{"id":"api-design/entity/index","title":"\u0421\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u044b, \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u044b","description":"\u041f\u0440\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0438 API \u0432\u0430\u0436\u043d\u043e \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439, \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438 \u043a\u043e\u043d\u0442\u0440\u0430\u043a\u0442\u043e\u0432, \u043f\u043e\u0441\u043a\u043e\u043b\u044c\u043a\u0443 \u043e\u043d\u0438 \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u044e\u0442 \u043e\u0441\u043d\u043e\u0432\u0443 \u0434\u043b\u044f \u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u044b\u0445 \u0438 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0439 \u043c\u0435\u0436\u0434\u0443 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u043c \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u043e\u043c.","sidebar":"tutorialSidebar"},"api-design/formats/index":{"id":"api-design/formats/index","title":"\u0424\u043e\u0440\u043c\u0430\u0442\u044b \u0441\u0435\u0440\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438","description":"","sidebar":"tutorialSidebar"},"api-design/idempotency/index":{"id":"api-design/idempotency/index","title":"\u0418\u0434\u0435\u043c\u043f\u043e\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c","description":"\u0418\u0434\u0435\u043c\u043f\u043e\u0442\u0435\u043d\u0442\u043d\u043e\u0441\u0442\u044c \u0432 API \u2014 \u044d\u0442\u043e \u0441\u0432\u043e\u0439\u0441\u0442\u0432\u043e \u043c\u0435\u0442\u043e\u0434\u0430 \u0438\u043b\u0438 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u0438, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442, \u0447\u0442\u043e \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435 \u043e\u0434\u043d\u043e\u0433\u043e \u0438 \u0442\u043e\u0433\u043e \u0436\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u0440\u0438\u0432\u0435\u0434\u0435\u0442 \u043a \u0442\u043e\u043c\u0443 \u0436\u0435 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0443, \u0447\u0442\u043e \u0438 \u043f\u0435\u0440\u0432\u043e\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435, \u0431\u0435\u0437 \u0434\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0445 \u043f\u043e\u0431\u043e\u0447\u043d\u044b\u0445 \u044d\u0444\u0444\u0435\u043a\u0442\u043e\u0432.","sidebar":"tutorialSidebar"},"api-design/index":{"id":"api-design/index","title":"\u041f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 API","description":"\u0421\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0430\u044f \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u043e\u0433\u043e \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0435\u043d\u0438\u044f \u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0442\u0440\u0435\u0431\u0443\u0435\u0442 \u0432\u044b\u0441\u043e\u043a\u043e\u0439 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u0438, \u0433\u0438\u0431\u043a\u043e\u0441\u0442\u0438 \u0438 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445. API (Application Programming Interface) \u0438\u0433\u0440\u0430\u0435\u0442 \u043a\u043b\u044e\u0447\u0435\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0432 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0438 \u044d\u0442\u0438\u0445 \u0446\u0435\u043b\u0435\u0439, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044f \u0441\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0441\u043f\u043e\u0441\u043e\u0431 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043c\u0435\u0436\u0434\u0443 \u0441\u0438\u0441\u0442\u0435\u043c\u0430\u043c\u0438, \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f\u043c\u0438.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"\u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438","description":"\u0412 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u043c\u0438\u0440\u0435 \u0446\u0438\u0444\u0440\u043e\u0432\u044b\u0445 \u0442\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u0439 \u043a\u0430\u0436\u0434\u0430\u044f \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u0442\u0430\u043b\u043a\u0438\u0432\u0430\u0435\u0442\u0441\u044f \u0441 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u044c\u044e \u043e\u0431\u044a\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u0430 \u0441\u0438\u0441\u0442\u0435\u043c, \u0441\u0435\u0440\u0432\u0438\u0441\u043e\u0432 \u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0432 \u0435\u0434\u0438\u043d\u0443\u044e \u044d\u043a\u043e\u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u0418\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438 \u0438\u0433\u0440\u0430\u044e\u0442 \u043a\u043b\u044e\u0447\u0435\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0432 \u044d\u0442\u043e\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0435, \u043e\u0431\u0435\u0441\u043f\u0435\u0447\u0438\u0432\u0430\u044f \u0441\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0430\u0446\u0438\u044e \u0434\u0430\u043d\u043d\u044b\u0445, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044e \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432 \u0438 \u043f\u043e\u0432\u044b\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u0438.","sidebar":"tutorialSidebar"},"network/index":{"id":"network/index","title":"\u0421\u0435\u0442\u0435\u0432\u043e\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435","description":"","sidebar":"tutorialSidebar"},"types/index":{"id":"types/index","title":"\u0412\u0438\u0434\u044b \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439","description":"","sidebar":"tutorialSidebar"}}}}')}}]);