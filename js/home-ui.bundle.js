(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{176:function(t,e,a){var s=a(239);"string"==typeof s&&(s=[[t.i,s,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0};a(22)(s,n);s.locals&&(t.exports=s.locals)},195:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return!t.hideEmpty||t.avail.length>0?a("div",[t.title?a("span",[t._v(t._s(t.title)+":")]):t._e(),t._v(" "),t.avail.length>0?a("button",{staticClass:"task-btn",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.cur)},click:t.select}},[t._v(t._s(t.cur?t.cur.name:"None"))]):t._e()]):t._e()};s._withStripped=!0;var n=a(4),i=a(17),o=a(3),c={props:["pick","title","choices","pickEvent","hideEmpty","mustPay"],mixins:[i.a],data(){return{pEvent:this.pickEvent||o.C,cur:n.c.state.getSlot(this.pick)}},methods:{toggleChange(){this.changing=!this.changing},select(){this.emit("choice",this.avail,{cb:t=>{t&&(this.emit(this.pEvent,t),this.cur=n.c.state.getSlot(this.pick))},elm:this.$el,title:this.title||this.pick,mustPay:this.mustPay})}},computed:{avail(){return this.choices?this.choices:n.c.state.filterItems(t=>t.slot===this.pick&&!t.disabled&&!t.locks&&!t.locked&&(t.owned||!t.buy))}}},l=a(6),r=Object(l.a)(c,s,[],!1,null,null,null);r.options.__file="src/ui/components/slotpick.vue";e.a=r.exports},238:function(t,e,a){"use strict";var s=a(176);a.n(s).a},239:function(t,e,a){(e=a(21)(!1)).push([t.i,"\nspan.space[data-v-1cd7013e] {\n\ttext-align: center;\n\tmargin: 0px var(--lg-gap);\n}\nspan.sm[data-v-1cd7013e] {\n\tmargin: var(--sm-gap);\n}\ndiv.home-view[data-v-1cd7013e] {\n\tdisplay: flex;\n\theight:100%;\n\tflex-flow: column nowrap;\n\tpadding-left:1rem;\n\tpadding-right:1rem;\n}\ndiv.home-view .content[data-v-1cd7013e] {\n\tdisplay: flex;\n\toverflow-y: hidden;\n\theight:100%;\n\tflex-direction: row;\n\twidth: 100%;\n\tpadding-top: var(--tiny-gap);\n}\ndiv.pick-slots[data-v-1cd7013e] {\n\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\n\tmargin-top:0.9em;\n\tmargin-right: 1rem;\n\tflex-basis: 5rem;\n}\ndiv.pick-obstacles[data-v-1cd7013e] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tmargin-right: 1rem;\n}\ndiv.nospace[data-v-1cd7013e] {\n\tcolor: red;\n}\ndiv.furniture[data-v-1cd7013e] {\n\twidth: auto;\n\toverflow-y: auto;\n\theight:100%;\n\tmargin-bottom:var(--md-gap);\n}\ndiv.home-view .furniture table[data-v-1cd7013e] {\n\t text-transform: capitalize;\n\t flex-grow: 1;\n\t border-spacing: 0;\n     flex: 1; min-height: 0; width: 100%; max-width: 20rem;\n     display: flex; flex-direction: column;\n}\ndiv.home-view .furniture table tr[data-v-1cd7013e] { display: flex; padding: var(--sm-gap);\n}\ndiv.home-view .furniture table tr[data-v-1cd7013e]:first-child {\n        position: sticky; top: 0; background: var(--header-background-color); z-index: 1;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(1) { flex-basis: 20%;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(2) { flex-basis: 40%;\n}\ndiv.home-view .furniture table tr > *[data-v-1cd7013e]:nth-child(3) { flex-basis: 20%;\n}\ndiv.home-view .furniture table tr button[data-v-1cd7013e] { margin: 0; font-size: 0.75em;\n}\ntable .count[data-v-1cd7013e], table .space[data-v-1cd7013e] {\n\ttext-align: center;\n}\ntable .name[data-v-1cd7013e] {\n\tpadding: 0 var(--md-gap) 0 0.9rem;\n\tmin-width:10em;\n\ttext-align: left;\n}\ntable tr[data-v-1cd7013e]:nth-child(2n) {\n\tbackground: var( --odd-list-color );\n}\n\n",""]),t.exports=e},297:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-view"},[a("div",{staticClass:"top separate"},[a("span",[a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chkShowMax,expression:"chkShowMax"}],attrs:{id:t.elmId("showMax"),type:"checkbox"},domProps:{checked:Array.isArray(t.chkShowMax)?t._i(t.chkShowMax,null)>-1:t.chkShowMax},on:{change:function(e){var a=t.chkShowMax,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.chkShowMax=a.concat([null])):i>-1&&(t.chkShowMax=a.slice(0,i).concat(a.slice(i+1)))}else t.chkShowMax=n}}}),a("label",{attrs:{for:t.elmId("showMax")}},[t._v("达上限")])]),t._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chkShowOwned,expression:"chkShowOwned"}],attrs:{id:t.elmId("showOwn"),type:"checkbox"},domProps:{checked:Array.isArray(t.chkShowOwned)?t._i(t.chkShowOwned,null)>-1:t.chkShowOwned},on:{change:function(e){var a=t.chkShowOwned,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.chkShowOwned=a.concat([null])):i>-1&&(t.chkShowOwned=a.slice(0,i).concat(a.slice(i+1)))}else t.chkShowOwned=n}}}),a("label",{attrs:{for:t.elmId("showOwn")}},[t._v("已拥有")])]),t._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chkShowUnowned,expression:"chkShowUnowned"}],attrs:{id:t.elmId("showUnowned"),type:"checkbox"},domProps:{checked:Array.isArray(t.chkShowUnowned)?t._i(t.chkShowUnowned,null)>-1:t.chkShowUnowned},on:{change:function(e){var a=t.chkShowUnowned,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.chkShowUnowned=a.concat([null])):i>-1&&(t.chkShowUnowned=a.slice(0,i).concat(a.slice(i+1)))}else t.chkShowUnowned=n}}}),a("label",{attrs:{for:t.elmId("showUnowned")}},[t._v("未拥有")])]),t._v(" "),a("span",{staticClass:"opt"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.chkShowBlocked,expression:"chkShowBlocked"}],attrs:{id:t.elmId("showBlock"),type:"checkbox"},domProps:{checked:Array.isArray(t.chkShowBlocked)?t._i(t.chkShowBlocked,null)>-1:t.chkShowBlocked},on:{change:function(e){var a=t.chkShowBlocked,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=t._i(a,null);s.checked?i<0&&(t.chkShowBlocked=a.concat([null])):i>-1&&(t.chkShowBlocked=a.slice(0,i).concat(a.slice(i+1)))}else t.chkShowBlocked=n}}}),a("label",{attrs:{for:t.elmId("showBlock")}},[t._v("未满足")])])]),t._v(" "),a("filterbox",{staticClass:"inline",attrs:{prop:t.searchIt,items:t.viewable},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),a("span",{staticClass:"space"},[t._v("空间: "+t._s(Math.floor(t.space.free()))+" / "+t._s(Math.floor(t.space.max.value)))])],1),t._v(" "),a("div",{staticClass:"content"},[t.hallOpen?a("hall",{on:{close:t.closeHall}}):t._e(),t._v(" "),a("div",{staticClass:"pick-slots"},[t.hallUnlocked?a("button",{staticClass:"task-btn",on:{click:t.openHall}},[t._v(t._s(t.hallName))]):t._e(),t._v(" "),a("slotpick",{attrs:{title:"居所",pick:"home","must-pay":"true"}}),t._v(" "),a("slotpick",{attrs:{title:"阵法","hide-empty":"true",pick:"front"}}),t._v(" "),a("slotpick",{attrs:{title:"位面","hide-empty":"true",pick:"werry"}}),t._v(" "),a("slotpick",{attrs:{title:"封地","hide-empty":"true",pick:"fief"}})],1),t._v(" "),a("div",{staticClass:"furniture"},[t.state.items.space.empty()?a("div",{staticClass:"warn-text",staticStyle:{"text-align":"center"}},[t._v("没有多余的空间(如果是刚刚更换房子,尝试刷新一下)\n\t\t\t"),t.homesAvail.length>0?a("span"):t._e()]):t._e(),t._v(" "),a("table",{staticClass:"furniture"},[t._m(0),t._v(" "),t._l(t.filtered,(function(e){return a("tr",{directives:[{name:"show",rawName:"v-show",value:!e.hide,expression:"!it.hide"}],key:e.id,on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("td",{staticClass:"space"},[t._v(t._s(e.cost.space||e.mod.space))]),t._v(" "),void 0!==e.max?[a("td",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"count"},[t._v(t._s(e.value.valueOf())+"/"+t._s(e.max.valueOf()))])]:1==e.repeat?[a("td",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"count"},[t._v(t._s(e.value.valueOf()))])]:[a("td",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),a("td",{staticClass:"count"},[t._v(t._s(e.value.valueOf())+"/1")])],t._v(" "),a("td",[e.maxed()?a("span",{staticClass:"sm"},[t._v("Max")]):a("button",{staticClass:"buy-btn",attrs:{type:"button",disabled:!e.canUse()},on:{click:function(a){return t.emit("upgrade",e)}}},[t._v("购买")])]),t._v(" "),a("td",[a("button",{staticClass:"sell-btn",attrs:{type:"button",disabled:e.value<=0},on:{click:function(a){return t.emit("sell",e)}}},[t._v("售卖")])])],2)}))],2)]),t._v(" "),a("div",{staticClass:"pick-obstacles"},[a("div",{staticClass:"furniture"},[a("table",{staticClass:"furniture"},[a("tr",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.obstacles_info)}}},[a("th",[t._v("占地")]),t._v(" "),a("th",{staticClass:"name"},[t._v("障碍")]),t._v(" "),a("th",[t._v("数量")]),t._v(" "),a("th"),a("th")]),t._v(" "),t._l(t.obstacles,(function(e){return a("tr",{directives:[{name:"show",rawName:"v-show",value:!e.hide,expression:"!it.hide"}],key:e.id,on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("td",{staticClass:"space"},[t._v(t._s(Math.abs(e.mod.space.max)))]),t._v(" "),[a("td",{staticClass:"name"},[t._v(t._s(e.name)+"("+t._s(t.useam(e.clean_need))+")")]),t._v(" "),a("td",{staticClass:"count"},[t._v(t._s(Math.round(10*e.value.valueOf())/10))])],t._v(" "),a("td",[a("button",{staticClass:"sell-btn",attrs:{type:"button",disabled:!e.canclean()||e.value.valueOf()<1},on:{click:function(a){return t.emit("cleanobs",e)}}},[t._v("清理")])])],2)}))],2)])])],1)])};s._withStripped=!0;var n=a(4),i=a(23),o=a(26),c=a(18),l=a(17),r=a(32),h=a(195),d=a(42),v=a(2),u={props:["state"],mixins:[l.a,r.a],components:{slotpick:h.a,filterbox:d.a,hall:()=>a.e(8).then(a.bind(null,282))},data(){let t=i.a.getSubVars(v.k),e=i.a.getSubVars("furniture");return e.hide||(e.hide={}),{hide:e.hide,hallOpen:!1,showMaxed:!t.hasOwnProperty("showMaxed")||t.showMaxed,showOwned:!t.hasOwnProperty("showOwned")||t.showOwned,showUnowned:!t.hasOwnProperty("showUnowned")||t.showUnowned,showBlocked:!t.hasOwnProperty("showBlocked")||t.showBlocked,filtered:null}},methods:{openHall(){this.hallOpen=!0},closeHall(){this.hallOpen=!1},useam:t=>Math.round(10*game.state.getData(t).valueOf())/10,searchIt(t,e){if(t.name.includes(e))return!0;if(t.tags){let a=t.tags;for(let t=a.length-1;t>=0;t--)if(a[t].includes(e))return!0}if(t.mod&&"object"==typeof t.mod)for(let a in t.mod)if(game.state.getData(a)&&"object"==typeof game.state.getData(a)&&game.state.getData(a).name.includes(e))return!0;return!1}},computed:{obstacles(){return n.c.state.obstacles.filter(t=>!this.alocked(t))},obstacles_info:()=>n.c.state.getData("obstacles_info"),hallUnlocked:()=>n.c.state.getData("evt_hall")>0,hallName:()=>c.a.hall.name,chkShowMax:{get(){return this.showMaxed},set(t){this.showMaxed=i.a.setSubVar(v.k,"showMaxed",t)}},chkShowOwned:{get(){return this.showOwned},set(t){this.showOwned=i.a.setSubVar(v.k,"showOwned",t)}},chkShowUnowned:{get(){return this.showUnowned},set(t){this.showUnowned=i.a.setSubVar(v.k,"showUnowned",t)}},chkShowBlocked:{get(){return this.showBlocked},set(t){this.showBlocked=i.a.setSubVar(v.k,"showBlocked",t)}},space(){return this.state.getData("space")},homesAvail(){return this.state.homes.filter(t=>!this.locked(t))},furniture(){let t=this.state;return t.filterItems(e=>"furniture"===e.type||t.typeCost(e.cost,"space")>0||t.typeCost(e.mod,"space")>0).sort(o.a)},viewable(){let t=this.showOwned,e=this.showUnowned,a=this.showBlocked,s=this.showMaxed;return this.furniture.filter(i=>!this.reslocked(i)&&(t||0==i.value)&&(a||i.canUse(n.c))&&(s||!i.maxed())&&(e||i.value>0))}}},w=(a(238),a(6)),p=Object(w.a)(u,s,[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("空间")]),this._v(" "),e("th",{staticClass:"name"},[this._v("设施")]),this._v(" "),e("th",[this._v("已拥有")]),this._v(" "),e("th"),e("th")])}],!1,null,"1cd7013e",null);p.options.__file="src/ui/sections/home.vue";e.default=p.exports}}]);