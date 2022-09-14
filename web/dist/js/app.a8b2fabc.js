(function(){"use strict";var t={44:function(t,e,n){var a=n(144),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar"},[a("v-app-bar",{attrs:{app:"",flat:""}},[a("div",{staticClass:"turbinia-logo"},[a("v-img",{attrs:{src:n(8543),"max-height":"50","max-width":"70",contain:""}})],1),a("div",{staticClass:"turbinia-title"},[a("v-toolbar-title",[t._v("Turbinia")])],1),a("v-spacer"),a("div",{staticClass:"dark-theme-btn"},[a("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-btn",t._g(t._b({attrs:{icon:""},on:{click:t.toggleTheme}},"v-btn",r,!1),n),[a("v-icon",[t._v("mdi-brightness-6")])],1)]}}])},[t._v(" Switch to dark mode ")])],1)],1)],1),a("v-main",[a("request-list")],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("v-card",[n("v-card-title",[t._v(" Request List "),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),n("v-spacer"),n("v-tooltip",{attrs:{left:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",color:"blue lighten-2"},on:{click:function(e){return t.getRequestList()}}},"v-btn",r,!1),a),[n("v-icon",[t._v("mdi-refresh")])],1)]}}])},[t._v(" Refresh Request List ")])],1),n("v-data-table",{attrs:{headers:t.headers,items:t.requestSummary,search:t.search,"footer-props":{itemsPerPageOptions:[10,20,40,-1]}}})],1)],1)},u=[],o=n(9669),c=n.n(o);const l=c().create();l.interceptors.response.use((function(t){return t}),(function(t){return console.error(t.response.data),Promise.reject(t)}));var A={getRequestList(){return l.get("/api/request/summary")}},f={data(){return{search:"",headers:[{text:"Request",value:"request_id"},{text:"Last Task Update Time",value:"last_task_update_time"},{text:"Requester",value:"requester"},{text:"Total Tasks",value:"total_tasks"},{text:"Running Tasks",value:"running_tasks"},{text:"Successful Tasks",value:"successful_tasks"},{text:"Failed Tasks",value:"failed_tasks"},{text:"Status",value:"status"}],requestSummary:[]}},methods:{getRequestList:function(){A.getRequestList().then((t=>{let e=[],n=t.data["requests_status"];for(const a in n)e.push({request_id:n[a].request_id+" - "+n[a].reason,last_task_update_time:n[a].last_task_update_time,requester:n[a].requester,total_tasks:n[a].task_count,running_tasks:n[a].running_tasks,successful_tasks:n[a].successful_tasks,failed_tasks:n[a].failed_tasks,status:n[a].status});this.requestSummary=e})).catch((t=>{console.error(t)}))}},mounted(){this.getRequestList()}},d=f,v=n(3736),g=n(3453),p=n.n(g),h=n(3381),b=n(3816),m=n(5255),k=n(2488),w=n(9088),y=n(5536),C=n(9007),V=n(4213),Z=(0,v.Z)(d,i,u,!1,null,null,null),B=Z.exports;p()(Z,{VBtn:h.Z,VCard:b.Z,VCardTitle:m.EB,VDataTable:k.Z,VIcon:w.Z,VSpacer:y.Z,VTextField:C.Z,VTooltip:V.Z});var P={name:"app",components:{RequestList:B},data(){return{}},methods:{toggleTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,localStorage.setItem("isDarkTheme",this.$vuetify.theme.dark.toString())}}},x=P,O=n(3726),q=n(1040),T=n(1584),H=n(3102),U=n(3845),I=(0,v.Z)(x,r,s,!1,null,null,null),E=I.exports;p()(I,{VApp:O.Z,VAppBar:q.Z,VBtn:h.Z,VIcon:w.Z,VImg:T.Z,VMain:H.Z,VSpacer:y.Z,VToolbarTitle:U.qW,VTooltip:V.Z});var D=n(5464),Q=n.n(D);n(8556);a["default"].use(Q(),{options:{customProperties:!0}});const G={theme:{dark:!1}};var J=new(Q())(G);a["default"].config.productionTip=!1,new a["default"]({vuetify:J,render:t=>t(E)}).$mount("#app")},8543:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPgAAACQCAYAAAAldqY8AAAACXBIWXMAAAsSAAALEgHS3X78AAAN6klEQVR4nO2dv3LbSBLGP7u2aplJ9wTG5qgS9wkEPIG54TJZOkawvGCZik6VrBwgNp0oXfoJAD3BUVXIj3yCEzNlvmAaIkRhBiD+A/x+VShSADgY2fo4Pd09Pe9+/PgB0i28IBoDGAOw5PXy6JYNgCc5NgA2vms/NdlH0g/eUeDdwAsiC8AcwATAhwJNPAIIAax8195U1zPSZyjwlvGCyAGwBHBdYbM7AEvftVcVtkl6CAXeEl4QXQJYAfhY42N2AGa+a4c1PoN0GAq8BbwgmkCJ+6KhR34DMOc8/fygwBvGC6IVgD9aePQjAIciPy8o8IYQk3yN/HPt2Gm2hfKUx1xCedYBwJH3eS0BivzMoMAbQMQdArjKuHUPZbrf+a69PaH9MYCZHFlip8jPCAq8AbwgWiPbmVbJPNkLoiVUuM0k9G++a8/KPIf0Awq8ZrwgugPwp+GWPYBJlZ5uiamvYbYYfvNde13VM0k3ocBrRGLcgeGWWs3lDIfeHoBFU33YvG+7A0MlEefWUftcWMzwB83lCyhTngwYCrw+5tCnnDbp6JpAjdZpzOWLiAwUCrw+dKNjPOduxDSW5+j6cgH1BUAGCgVeA14QzaD3Yi9PCYFVgeSk60x1mukDhgKvB92ouPNd+67RnhxYac5fidedDBAKvB50Me9lk51IIqO4bi5OM32g/NR2B/qMOKjGUCmjlhwm2o47r5EeNnMAtGVZkBqhwE9EzNkJVFpoVuppkocOxJxNAicDhALPSU2FGZom1Jy/8ILIatr5R+qHmWwZyIi9QnlhP/iu7ZTtT1m8INog3fL4Jq9WyrWNHOsOWCHkBDiCG5Bw1x2aK8zQBDqBm9aox19uX70g+g612i2sumOkeuhF1yB53F8xLHEDan15GT4CCLwgChle6z4cwVM4serKHmpuG5uxTwC2HZ7PVlVx9RrAxguiOYs7dhcK/AgviObIJ+5vUKZq30oUVzmHvoAy20GRdxMKPIFURvk74zYWMHwLRd5R6EVPYPAwAzUUZmgLL4jS/tP3UHHyEK/n6XEiT57yziwi0TEocEE85l81l/dQyzv7Zo6nciTwHVR83xgCE4faEubpC4tIdAya6AdmhmuDEXeCPVQI8C6PIMVpOJP6ciukRxcuoL4EuEKtI3AEx8vo9F/N5c++ay+b6039SGHGVVFPv/gqQuhDiL90OIpwVjAOrnA05+NRblD4rl1qTbpYM6ZRela0bVItFLjC0ZxnaqaGjCISs+Z6QkxQ4ApLcz5ssA99ZKk5/4FZbt2ATjYz2yIfSmw+8AT1JdG5hBhZyz7DYdnryfF937VDL4h2SC8uOUb5tFhSEo7gFSPLSm+gHFAfoMJK/5Hc7bHps03gBdGlbMbwP6iknjju/weK+RtCzfnWf1fCEbwOHM35ayihF/LKJ9ajA0BYsI2sbYutU9sER+lOwxHcTJFRKMy4fuMF0eaUeuSJrYiu5biRxJzcyKj9D8yr47antEm6DwWuCDXnnVMbklTWz9AXOASUWXyKyW7hrTCtvH2S1XGm/dEAmYPnbZP0AwpcoXOAfSyy84fEmS8B/AZ9KOkKwKrunUUylr7uAHwC8C/ftWcFQ4Kca3cYClwRGq4VHtV8115LmaZ/I31Ev8p4dinEm68T9xcAY9+1VyVj/Y7mfKeiBucKBY6X7X2+ay7flPV+y2YHDtSIecyVzI8rJeHNT+OT79pV7EU+gX5OT4F3AAr8gElkpU1piYOPkS7yP0WQlZCxs+mnCtdtLzXnH5mL3g0ocEGcY6b5cliByJ+g3+1zWabtI3Q7m1YmbjH/dWvnK3kGKQ8F/hrTfDsWuVXmAYaFGtdVjOLyJZTW/vcKxT2D3vzfgwLvDBR4AhHfZ8MtV1CFBpcln7NCurVQql1hhrfz4j0qWgAiNet0hTGAnOvLSTNQ4EdIhpjOVAeUeG68INp6QbQsMaIvU85dV7BII230Li06L4gcL4hCmGvW7TDA5bV9hqmq6Uygwlemvcc+QJmpN7LgIi6bDHkdJ97rxJW2UGOCgiIRb3/a3HtTwPy3EoejaTdJXLOOo3eHoMBT8F37SQQRIt8Ggx/kyFOYMIsZio+Cum2A/ynY3inMu7ZijtBE1+K79pPv2mOohJAmuSrhrXeq7MgJVBl6IxVCgWfgu/YcgIv0+HVdFE2saXrn0x2AXynu7kKB58B37dB3bQsqb7sJoTunfqCFteafoVJdaZZ3GM7BT0BGqpWkaE6Qz/lUBKvAZ2pdtCLsoGLchSuykmahwAsgu3esgZe12mMczGpLji2U9zxrZL3EW0eeVaBbTsq5Hcqt8d4mjg1H6/5BgZdERrItRPBF0GwlVAV3stCFnCmcg3eTqubTHHHPHAq8m5jKKumwqu4E6T8U+HCw2u4A6R4UeDd4bLsDZJhQ4N2grvxtzsHPHAp8wHDhB6HACRkwFPhwsNruAOkeFPhwqCNllvQcCpyQAUOBDxdT2SlyJlDghAwYCnwA1L2/GekvFPgw4AaAJBUKnJABQ4F3g+OMs+OyUFkZaRu83Q6p8Pp0Mhwo8G6wxEHUb3YhkUoq3xKnXm0wICmps0QbX1jogQDAux8/6iomQqpGCiteykaJhGRCgRMyYGiiEzJgKHBCBgyrqnaA0XQxRrm65k/P97cs7kDewDl4BxhNFyGq3Xbo8/P97bLC9khPoYneDay2O0CGCQXeDbiWm9QCBU7IgKHACRkwFHjLiAedkFqgwNuHa7lJbVDghAwYCrx9OIKT2qDA24dzcFIbFDghA4a56EeMpgun4UdaDT+PnBEU+FuCtjtASFXQRCdkwHAETzCaLujRzolMZZyCH09bHjvnktfqocBfQ492fhwANxW2xy/XGqCJTsiAocAJGTAU+GuctjtASJVQ4IQMGAqcnIwscZ233Q+SDQX+GqftDnSd0XQxARACuGi5KyQHvQ2THZUaZtngBhhNFzMAX9vuB8lPbwWOo1FkNF2UaesRagdPxsE1jKaLOYC/a3yEVWPbZ0ufBV6liXhVYVtDpU5xAxR4LfRyDs46ZoTko5cCB9MaCclFXwXutN0BQvpAXwXOEZyQHPRV4JyDE5KDl91FJcZptdmZE5iB+3mZeIAKI1ZJlUtD06ijzzq2z/e3q7w3e0E0AzDBwXJc+659p7nXgsryq2IQepJnrYo28O7n3/+6hPqHZaiInBOPAJzn+9sn001eEK0A/JH2ed+1x0f3jlFPlt+D79pOkQ++h/q2objJuXEFIHUUjhHBpokbAK5kZE+yRD0pvNcpz8rFe9AjTc4XJ+P6JOO6dfTzx8I9yeb4Wbnoq5ONkCrI8uMYzfcU9kU7UhcUOCF61jCLNjz62Wjyl2RV5EMUODlndqaLvmtvoSI2aSL/5Lt2eHTuDsD3KjqWYC/P2hb5cNZik28ACjVMSEewoHeUbbM+7Lv2WkJfSY/5xnftN+a7nJuIc66qZKzUZ+UlS+Cr5/vbsGjjhLSN5HfoBJ4LEVh4wv2dqU1AE50MHcdwLWyoD63R5/XghOTBMVzbpp0UkzyZudYntlDZb08ABU4GjNQNMIXCwuMTklDS97JUd14QOb5rb2iikyFjqvy6e76/3SZPeEF0iXpDXU1xARXi4xycDBPZSNKUibZOOedgONViP3hB5GQJnMsySV+ZwyzWVcq5Ps65jbwHYHLpD+4XJsNnNF1YMC9vfdSU2Q5r6VA77H3XDt/DnG/rNNQZQqpklXE9dZ4t2WKfqu5MS8wA5UU3CZwmOukVUr/92nDLzlTswXftlRdEG2SvJOsyqzi19d3Pv//lAAgMN//KXUNIHxhNFw7Mf8sA4J5TdmbWHByQoZ6QLiPiTvOMJ/l+TuIGpCbbaLrYQp8QsAdgZZW2IcNAwkt1T82cCtqw8LoIgsksBzR/xxL7Lvv7bk2rvbwgcvD6d14VXR12KrHAVzAn5H9+vr9dNtEhUo6jTRmdxCXn6NYsQQyNN1PNimuoffFd+01ijaGm26cyxRTzEgt8AuCfjHs5F2+ZhHjjV0uOS7CunolPx441Gbm3qDax5ZVoc6S9/lL3SP4TADzf365H08UeGYkBo+kiswolKY7Eb5NHUtBDybBqmjfiFur4N53hdYguyxM/Qc2pscnFJncwJwdcAQgp8nIkRByL1wFH4LrQibsr1K6jY4FnpffFIp/RXNeTcFRZOIjZAkXcFHsAkwyP+baG5x5rYg1zpdWwhj684mVnEwAYTRdL5NvBYg9g+Xx/O4SVN4WR0EyamGlOt8MeSlTzPFamF0R3AP6s6NmPAJzj8kqdcLIlGU0XG+QfaXZQQl9V3K/OICIGDqb0GMMW8SOqMx2fkJ1nUVWbmyJTRy+IJlBzYatEn9ZQoa/U57ceJksic8QNTvsD3kF+yb6Z7imOrfjoq4h3OJifGxzEmnyPc0v4OFfeCBx4CceEKPYHvpPPhlDfqq0JPiFe4PANmgwx9W0Dwz0OQk2+UrAklVSBA6VFfswDXptWr0aT+FzSxEqYxmkcZx8lf+67R/pBXkMkhNw3y4h0A63AgRdv8Brnl/VUN49QZvRGXrcoOIckxIRR4DGyBG+Jfs5J2yKeC4c4jMTb4zpghNRJLoEDL6P5HUoWkR8Y8Zw4nnKEoDlNOkRugceI0OdQaXl9c1IVIRbxFgez+olOLdIHThZ4EnHEzaA81ENxbMWvHIlJ7ykl8CQysjtQ3uz4tQtz9li8WzkYWiJnQ2UC13GUCYaU90VIy2YK4zcULiGK/wNtosuA8vp60AAAAABJRU5ErkJggg=="}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var s=e[a]={exports:{}};return t[a].call(s.exports,s,s.exports,n),s.exports}n.m=t,function(){var t=[];n.O=function(e,a,r,s){if(!a){var i=1/0;for(l=0;l<t.length;l++){a=t[l][0],r=t[l][1],s=t[l][2];for(var u=!0,o=0;o<a.length;o++)(!1&s||i>=s)&&Object.keys(n.O).every((function(t){return n.O[t](a[o])}))?a.splice(o--,1):(u=!1,s<i&&(i=s));if(u){t.splice(l--,1);var c=r();void 0!==c&&(e=c)}}return e}s=s||0;for(var l=t.length;l>0&&t[l-1][2]>s;l--)t[l]=t[l-1];t[l]=[a,r,s]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,a){var r,s,i=a[0],u=a[1],o=a[2],c=0;if(i.some((function(e){return 0!==t[e]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(o)var l=o(n)}for(e&&e(a);c<i.length;c++)s=i[c],n.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return n.O(l)},a=self["webpackChunkturbinia_web"]=self["webpackChunkturbinia_web"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(44)}));a=n.O(a)})();
//# sourceMappingURL=app.a8b2fabc.js.map