(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[24],{178:function(t,e,s){var l=s(244);"string"==typeof l&&(l=[[t.i,l,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(22)(l,i);l.locals&&(t.exports=l.locals)},179:function(t,e,s){var l=s(246);"string"==typeof l&&(l=[[t.i,l,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(22)(l,i);l.locals&&(t.exports=l.locals)},180:function(t,e,s){var l=s(248);"string"==typeof l&&(l=[[t.i,l,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};s(22)(l,i);l.locals&&(t.exports=l.locals)},243:function(t,e,s){"use strict";var l=s(178);s.n(l).a},244:function(t,e,s){(e=s(21)(!1)).push([t.i,"\n.spellbook[data-v-6adcb0a2] {\n\tpadding: var(--sm-gap);\n\toverflow-y: auto;\n\theight:100%;\n\tmargin-bottom: 1.2rem;\n}\ndiv.spellbook table[data-v-6adcb0a2] { display: flex; flex-flow: row wrap; justify-content: space-between;\n}\n.spellbook table tr[data-v-6adcb0a2] { display:flex; flex-basis: 48%;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(1), .spellbook table tr td[data-v-6adcb0a2]:nth-child(3) {\n\tflex-basis: 20%; order: 3;\n}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(2) { flex: 1; order: 1;}\n.spellbook table tr td[data-v-6adcb0a2]:nth-child(3) { flex-basis: 20%; order: 2;\n}\n.spellbook table td[data-v-6adcb0a2] { display: flex;\n}\ndiv.spellbook[data-v-6adcb0a2] { flex-direction: column; padding: 0;\n}\ndiv.spellbook[data-v-6adcb0a2] { margin: 0; padding: var(--md-gap);\n}\ndiv.spellbook  table tr[data-v-6adcb0a2] { padding: var(--sm-gap); display:flex; align-items:center;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(1),\n    div.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 1;\n}\ndiv.spellbook  table tr td[data-v-6adcb0a2]:nth-child(2){ flex: 2;\n}\ndiv.spellbook button[data-v-6adcb0a2] { flex: 1; font-size: var(--compact-small-font); margin: 0;\n}\n\n\n",""]),t.exports=e},245:function(t,e,s){"use strict";var l=s(179);s.n(l).a},246:function(t,e,s){(e=s(21)(!1)).push([t.i,"\n.spelllist span[data-v-b96b8a38]:first-child {\n\tborder-bottom: 1px solid var(--separator-color);\n\tmargin-bottom: var(--sm-gap);\n}\n\n",""]),t.exports=e},247:function(t,e,s){"use strict";var l=s(180);s.n(l).a},248:function(t,e,s){(e=s(21)(!1)).push([t.i,"\ndiv.spells[data-v-1967362c] {\n\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\tpadding: var(--sm-gap) var(--md-gap);\n\theight:100%;\n}\ndiv.spells .bottom[data-v-1967362c] {\n\tdisplay:flex;\n\tflex-flow: row nowrap;\n}\ndiv.spells .spellbook[data-v-1967362c] {\n\tflex-basis: 80%;\n\tflex-grow: 1;\n}\ndiv.spells .spelllist[data-v-1967362c] {\n\tborder-left: 1px solid var( --separator-color );\n\tpadding: var( --sm-gap );\n}\ndiv.spells div.filters div[data-v-1967362c] { box-sizing: border-box; margin: 0;\n}\ndiv.spells div.filters div[data-v-1967362c]:nth-child(1),\ndiv.spells div.filters div[data-v-1967362c]:nth-child(2) {\n        flex-basis: 50%;\n}\ndiv.spells div.filters > div input[type=text][data-v-1967362c],\ndiv.spells div.filters > div input[type=number][data-v-1967362c] {\n\n\t\tflex: 1;\n\t\tmargin-right: 1em;\n\t\tmargin-left: 1em;\n\t\tmin-width: unset;\n\t\tmax-width: unset;\n\t\tpadding:var(--tiny-gap) 0;\n\t\tfont-size: 105%;\n}\ndiv.spells div.filters > div input[data-v-1967362c] { min-width: 0; padding: 0; text-indent: var(--sm-gap);\n}\ndiv.spells .filters[data-v-1967362c] {\n        flex-flow: row wrap; display: flex; text-align: center;\n        border-bottom: 1px solid var(--separator-color);\n        margin: 0; padding: var(--sm-gap); line-height: 2em; justify-content: flex-start;\n}\ndiv.spells div.filters div.checks[data-v-1967362c] { margin: 0; padding: 0 0.5em; flex-basis: unset;\n}\n\n\n\n",""]),t.exports=e},274:function(t,e,s){"use strict";s.r(e);var l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spells"},[s("div",{staticClass:"filters"},[s("filterbox",{attrs:{items:t.spells},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),s("div",[s("label",{staticClass:"level-lbl",attrs:{for:t.elmId("level")}},[t._v("等级:")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.minLevel,expression:"minLevel"}],staticClass:"level",attrs:{id:t.elmId("level"),type:"number",min:"0",size:"5"},domProps:{value:t.minLevel},on:{input:function(e){e.target.composing||(t.minLevel=e.target.value)}}})]),t._v(" "),t._l(t.allSchools,(function(e,l){return s("div",{key:l,staticClass:"checks"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.viewSchools,expression:"viewSchools"}],attrs:{type:"checkbox",id:t.elmId("chk"+l)},domProps:{value:l,checked:Array.isArray(t.viewSchools)?t._i(t.viewSchools,l)>-1:t.viewSchools},on:{change:function(e){var s=t.viewSchools,i=e.target,a=!!i.checked;if(Array.isArray(s)){var n=l,o=t._i(s,n);i.checked?o<0&&(t.viewSchools=s.concat([n])):o>-1&&(t.viewSchools=s.slice(0,o).concat(s.slice(o+1)))}else t.viewSchools=a}}}),t._v(" "),s("label",{attrs:{for:t.elmId("chk"+l)}},[t._v(t._s(l.toTitleCase()))])])})),t._v(" "),s("button",{on:{click:t.toggle}},[t._v("已记忆")])],2),t._v(" "),s("div",{staticClass:"bottom"},[s("book",{staticClass:"spellbook",attrs:{viewing:t.viewing}}),t._v(" "),s("spelllist",{directives:[{name:"show",rawName:"v-show",value:t.showList,expression:"showList"}],staticClass:"spelllist",attrs:{list:t.list}})],1)])};l._withStripped=!0;var i=s(4),a=s(23),n=s(19),o=s(46),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spellbook"},[s("table",t._l(t.viewing,(function(e){return s("tr",{key:e.id,on:{"!mouseenter":function(s){return s.stopPropagation(),t.itemOver(s,e)}}},[s("td",[e.owned&&t.list.canAdd(e)?s("button",{on:{click:function(s){return t.list.add(e)}}},[t._v("记忆")]):t._e()]),t._v(" "),s("td",[t._v(t._s(e.name.toTitleCase()))]),t._v(" "),s("td",[e.owned?s("button",{attrs:{disabled:!e.canUse(t.game)},on:{click:function(s){return t.emit("spell",e)}}},[t._v("施放")]):s("button",{attrs:{disabled:!e.canBuy(t.game)},on:{click:function(s){return t.emit("buy",e)}}},[t._v("学习")])])])})),0)])};r._withStripped=!0;var d={props:["viewing"],mixins:[n.a],created(){this.game=i.c},computed:{state:()=>i.c.state,list:()=>i.c.state.spelllist}},c=(s(243),s(7)),v=Object(c.a)(d,r,[],!1,null,"6adcb0a2",null);v.options.__file="src/ui/spellbook.vue";var p=v.exports,u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"spelllist",attrs:{functional:""}},[s("span",[t._v("最大等级: "+t._s(t.list.used+" / "+Math.floor(t.list.max.value))+"\n\t\t"),t.list.full()?s("div",{staticClass:"warn-text note-text"},[t._v("法术表已满")]):t._e()]),t._v(" "),t._l(t.list.items,(function(e,l){return s("div",{key:l,on:{"!mouseenter":function(s){return s.stopPropagation(),t.itemOver(s,e)}}},[s("button",{staticClass:"stop",on:{click:function(e){return t.list.removeAt(l)}}},[t._v("X")]),s("span",[t._v(t._s(e.name.toTitleCase()))])])}))],2)};u._withStripped=!0;var h={props:["list"]},m=(s(245),Object(c.a)(h,u,[],!1,null,"b96b8a38",null));m.options.__file="src/ui/spelllist.vue";var f=m.exports,b={data(){let t=a.a.getSubVars("spells");return Object.assign({showList:!1,filtered:null,schools:[],min:null,max:null},t)},mixins:[n.a],components:{filterbox:o.a,book:p,spelllist:f},created(){let t=this.allSchools,e=[];for(let s=this.schools.length-1;s>=0;s--)t[this.schools[s]]&&e.push(this.schools[s]);this.schools=e},methods:{toggle(){this.showList=a.a.setSubVar("spells","showList",!this.showList)}},computed:{state:()=>i.c.state,list:()=>i.c.state.spelllist,minLevel:{get(){return this.min},set(t){this.min=a.a.setSubVar("spells","min",Number(t))}},viewSchools:{get(){return this.schools},set(t){this.schools=t,a.a.setSubVar("spells","schools",this.schools.concat())}},allSchools(){let t={},e=this.spells;for(let l=e.length-1;l>=0;l--){var s=e[l];s.school&&(t[s.school]=!0)}return t},viewing(){let t=this.filtered||this.spells,e=this.schools,s=this.minLevel;return e.length>0||s?t.filter(t=>(0===e.length||e.includes(t.school))&&(!s||t.level===s)):t},spells(){return this.state.filterItems(t=>"spell"===t.type&&!this.locked(t))}}},g=(s(247),Object(c.a)(b,l,[],!1,null,"1967362c",null));g.options.__file="src/ui/sections/spells.vue";e.default=g.exports}}]);