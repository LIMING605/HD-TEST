(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[1],{122:function(t,e,n){var i=n(124);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(20)(i,r);i.locals&&(t.exports=i.locals)},123:function(t,e,n){"use strict";var i=n(122);n.n(i).a},124:function(t,e,n){(e=n(19)(!1)).push([t.i,"\nlabel[data-v-6d0e0bec] {\n\tmargin-right:var(--md-gap);\n}\n",""]),t.exports=e},125:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return!this.minItems||t.text||this.items.length>=this.minItems?n("div",{staticClass:"filter-box"},[n("label",{attrs:{for:t.elmId("filter")}},[t._v("Find")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.findText,expression:"findText"}],attrs:{id:t.elmId("filter"),type:"text"},domProps:{value:t.findText},on:{input:function(e){e.target.composing||(t.findText=e.target.value)}}})]):t._e()};i._withStripped=!0;var r={props:["value","items","prop","minItems"],data(){return{text:"",pprop:this.prop||"name"}},watch:{items(t,e){this.findText=this.findText}},created(){this.findText=this.text},methods:{clear(){this.text=""}},computed:{findText:{get(){return this.text},set(t){this.text=t;let e=this.pprop;t||this.$emit("input",this.items);var n=t.toLowerCase();"function"==typeof e?this.$emit("input",this.items.filter(t=>e(t,n))):this.$emit("input",this.items.filter(t=>"object"==typeof t&&"string"==typeof t[e]&&t[e].toLowerCase().includes(n)))}}}},s=(n(123),n(6)),a=Object(s.a)(r,i,[],!1,null,"6d0e0bec",null);a.options.__file="src/ui/components/filterbox.vue";e.a=a.exports},141:function(t,e,n){"use strict";n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return l}));var i=n(2),r=n(75);const s=(t,e,n)=>{if(!i.c.state.exists(e))return;let r=t[e];t[e]=r?r+n:n},a=t=>{let e=t.level,n={gold:100*Math.ceil(Math.pow(e,1.7))};return t.kind&&o(t.kind,n,e),t.biome&&o(t.biome,n,e),t.regen&&s(n,"bloodgem",5*Object(r.c)(e)),n},o=(t,e={},n=1)=>{if(t){t=Object(r.b)(t);let i=Object(r.d)(t,n);s(e,i,n-Object(r.f)(n)+1)}else if(Array.isArray(t))for(let i=t.length-1;i>=0;i--)t[i]&&o(t[i],e,n);return e},l=t=>{var e={};for(let i=t.length-1;i>=0;i--){var n=t[i];e.gold=(e.gold||0)+300*n.level,c(n.school,n.level,e)}return e},c=(t,e=1,n={})=>{if(Array.isArray(t))for(let i=t.length-1;i>=0;i--)c(t[i],e,n);else null!=t&&(s(n,t+"gem",Math.min(e,5)*e),e<=5?s(n,"codices",e):s(n,"tomes",e=5));return n}},142:function(t,e,n){var i=n(190);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(20)(i,r);i.locals&&(t.exports=i.locals)},189:function(t,e,n){"use strict";var i=n(142);n.n(i).a},190:function(t,e,n){(e=n(19)(!1)).push([t.i,"\ntr .table-head[data-v-28e20fbc] {\n\tcursor: pointer;\n\ttext-decoration: underline;\n\tuser-select: none;\n\t-moz-user-select: none;\n\t-webkit-user-select: none;\n}\ndiv.bestiary[data-v-28e20fbc] {\ndisplay:flex;\nflex-direction: column;\nmargin-left:0.9em;\npadding:0;\nmargin:0;\n}\n.char-list[data-v-28e20fbc] {\n\twidth:100%;\n\tpadding: 0; margin: 0;\n\toverflow-y:auto;\n\tmargin-bottom:1rem;\n}\ntable.bestiary[data-v-28e20fbc] {\n\tborder-spacing: var(--sm-gap) 0;\n\tborder-collapse: collapse;\n\trow-gap: var(--sm-gap);\n\tcolumn-gap: var(--md-gap);\n}\ntr:first-child .table-head[data-v-28e20fbc] {\n\tborder-bottom: 1pt solid black;\n\tmargin:var(--sm-gap);\n}\n.table-head[data-v-28e20fbc] {\n\tpadding: var(--sm-gap) var(--md-gap);\n}\ntd.num-align[data-v-28e20fbc] {\n\tpadding: var(--md-gap);\n}\n\n",""]),t.exports=e},234:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bestiary"},[n("filterbox",{attrs:{items:t.allItems,"min-items":"14"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),n("div",{staticClass:"char-list"},[n("table",{staticClass:"bestiary"},[n("tr",[n("th",{staticClass:"table-head",on:{click:function(e){return t.setSort("name")}}},[t._v("Creature")]),t._v(" "),n("th",{staticClass:"table-head",on:{click:function(e){return t.setSort("level")}}},[t._v("Level")]),t._v(" "),n("th",{staticClass:"table-head",on:{click:function(e){return t.setSort("value")}}},[t._v("Slain")]),t._v(" "),n("th",{staticClass:"num-align table-head",on:{click:function(e){return t.setSort("hp")}}},[t._v("Hp")])]),t._v(" "),t._l(t.sorted,(function(e){return n("tr",{key:e.id,on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,e)}}},[n("th",{staticClass:"lg-name"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(Math.floor(e.level)))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(Math.floor(e.value)))]),t._v(" "),n("td",{staticClass:"num-align"},[t._v(t._s(t.showHp(e)?t.toNum(e.hp):"???"))]),t._v(" "),n("td",[n("button",{attrs:{disabled:e.unique||!e.canUse(t.game)||0==t.minions.freeSpace()},on:{click:function(n){return t.tryUse(e)}}},[t._v("Buy")])])])}))],2)])],1)};i._withStripped=!0;var r=n(2),s=n(21),a=(n(22),n(125)),o=n(1),l=n(141),c=n(0),d=n(75),u={mixins:[s.a],data:()=>({filtered:null,sortBy:"level",sortOrder:1,loreLevels:{}}),components:{filterbox:a.a},beforeCreate(){this.game=r.c},methods:{tryUse(t){this.emit(o.I,t)},loreLevel(t){let e=this.loreLevels[t.kind];return void 0===e&&(e=this.$set(this.loreLevels,t.kind,Object(d.a)(t.kind,r.c))),e},showHp(t){return this.loreLevel(t)>=4*t.level},toNum:t=>("object"==typeof t?t.type===c.C?t.max:t.value:t).toFixed(0),setSort(t){this.sortBy===t?this.sortOrder=-this.sortOrder:this.sortBy=t}},computed:{minions:()=>r.c.state.minions,allItems(){let t=r.c.state.monsters;for(let e=t.length-1;e>=0;e--)t[e].name=t[e].name.toTitleCase();var e=[];for(let i=t.length-1;i>=0;i--){var n=t[i];n.value<=0||(n.cost||this.$set(n,"cost",Object(l.a)(n)),e.push(n))}return e},sorted(){let t,e,n=this.sortBy,i=this.sortOrder;return(this.filtered||this.allItems).sort((r,s)=>(t=r[n],e=s[n],t>e?i:e>t?-i:0))}}},m=(n(189),n(6)),v=Object(m.a)(u,i,[],!1,null,"28e20fbc",null);v.options.__file="src/ui/sections/bestiary.vue";e.default=v.exports}}]);