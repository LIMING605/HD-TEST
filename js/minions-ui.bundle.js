(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[14],{181:function(t,n,i){var e=i(250);"string"==typeof e&&(e=[[t.i,e,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(24)(e,a);e.locals&&(t.exports=e.locals)},249:function(t,n,i){"use strict";var e=i(181);i.n(e).a},250:function(t,n,i){(n=i(23)(!1)).push([t.i,"\ndiv.minions .rez[data-v-39072fa4] {\n\ttext-transform: capitalize;\n}\ndiv.minions .minion-title[data-v-39072fa4] {\n\tdisplay:flex;\n\tmin-width: 12rem;\n\tmax-width: 50%;\n\tjustify-content: space-between;\n}\ndiv.minions .warn-text[data-v-39072fa4] {\n\tmargin-bottom: var( --sm-gap );\n}\ndiv.minions[data-v-39072fa4] {\n\tpadding-left:1rem;\n\tpadding-top: var( --tiny-gap );\n\theight:100%;\n}\n.char-list[data-v-39072fa4] {\n\theight:85%;\n\toverflow-y:auto;\n}\ntable[data-v-39072fa4] {\n\tborder-spacing: var(--sm-gap) 0;\n\tborder-collapse: collapse;\n\trow-gap: var(--sm-gap);\n\tcolumn-gap: var(--md-gap);\n}\ntr:first-child th[data-v-39072fa4] {\n\tborder-bottom: 1pt solid black;\n\tmargin: var(--sm-gap);\n}\ntr > th[data-v-39072fa4]:first-of-type {\n\ttext-align: left;\n}\nth[data-v-39072fa4] {\n\tpadding: var(--sm-gap) var(--md-gap);\n}\ntd.num-align[data-v-39072fa4] {\n\tpadding: var(--md-gap);\n}\n\n",""]),t.exports=n},283:function(t,n,i){"use strict";i.r(n);var e=function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"minions"},[i("filterbox",{attrs:{items:this.minions.items,"min-items":"10"},model:{value:t.filtered,callback:function(n){t.filtered=n},expression:"filtered"}}),t._v(" "),t.inExplore?i("div",{staticClass:"warn-text"},[t._v("探索副本时不能改变随从")]):t._e(),t._v(" "),i("div",{staticClass:"minion-title"},[i("span",[t._v("随从最大值: "+t._s(t.minions.count+" / "+Math.floor(t.minions.max)))]),t._v(" "),i("span",[t._v("统御力: "+t._s(Math.floor(t.allies.used)+" / "+Math.floor(t.allies.max.value)))])]),t._v(" "),i("div",{staticClass:"char-list"},[i("table",[t._m(0),t._v(" "),t._l(t.filtered,(function(n){return i("tr",{key:n.id,staticClass:"char-row",on:{"!mouseenter":function(i){return i.stopPropagation(),t.itemOver(i,n)}}},[i("th",[i("input",{directives:[{name:"model",rawName:"v-model",value:n.name,expression:"b.name"}],staticClass:"fld-name",attrs:{type:"text"},domProps:{value:n.name},on:{input:function(i){i.target.composing||t.$set(n,"name",i.target.value)}}})]),t._v(" "),i("td",{staticClass:"num-align"},[t._v(t._s(t.toNum(n.hp))+" / "+t._s(t.toNum(n.hp.max)))]),t._v(" "),n.alive?i("td",[n.active?i("button",{attrs:{disabled:t.inExplore},on:{click:function(i){return t.toggleActive(n)}}},[t._v("休息")]):i("button",{attrs:{disabled:t.inExplore||!t.allies.canAdd(n)},on:{click:function(i){return t.toggleActive(n)}}},[t._v("跟随")])]):i("td",[i("span",[t._v("死亡")])]),t._v(" "),n.alive?t._e():i("td",t._l(t.rezzes(n),(function(e){return i("button",{key:e.id,staticClass:"rez",attrs:{disabled:!e.canUse()},on:{click:function(i){return t.useRez(e,n)}}},[t._v(t._s(e.name))])})),0),t._v(" "),i("td",[i("confirm",{on:{confirm:function(i){return t.dismiss(n)}}},[t._v(t._s("解散"))])],1)])}))],2)])],1)};e._withStripped=!0;var a=i(4),s=i(20),r=i(57),o={props:["minions"],data:()=>({filtered:null}),mixins:[s.a],components:{filterbox:r.a},computed:{allies(){return this.minions.allies},inExplore:()=>a.c.state.explore.running,rezList:()=>a.c.state.getTagSet("rez").filter(t=>t.owned&&!t.disabled)},methods:{rezzes(t){return this.rezList.filter(n=>n.canUseOn(t))},useRez(t,n){a.c.tryItem(t),n.hp.set(1)},toggleActive(t){this.minions.setActive(t,!t.active)},dismiss(t){this.minions.remove(t)},toNum:t=>null==t?0:("object"==typeof t?t.value:t).toFixed(1)}},l=(i(249),i(7)),d=Object(l.a)(o,e,[function(){var t=this.$createElement,n=this._self._c||t;return n("tr",[n("th",[this._v("随从")]),n("th",{staticClass:"num-align"},[this._v("生命")]),n("th",[this._v("活动")]),n("th",[this._v("动作")])])}],!1,null,"39072fa4",null);d.options.__file="src/ui/sections/minions.vue";n.default=d.exports}}]);