(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[6],{159:function(t,n,e){var a=e(208);"string"==typeof a&&(a=[[t.i,a,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(22)(a,i);a.locals&&(t.exports=a.locals)},207:function(t,n,e){"use strict";var a=e(159);e.n(a).a},208:function(t,n,e){(n=e(21)(!1)).push([t.i,"\n.equip[data-v-4284ca61] {\n    overflow-y: auto;\n    display: grid; grid-template-columns: repeat( auto-fill, minmax(11rem,1fr)); grid-gap: var(--sm-gap); padding: var(--tiny-gap);\n}\n.equip .equip-slot[data-v-4284ca61] {\n     display: flex;height: unset; flex-flow: column; margin: 0; padding: var(--sm-gap);\n}\n.equip .equip-slot .slot-item[data-v-4284ca61] {\n    display:flex;\n}\n.equip-slot .subslots[data-v-4284ca61] {\n\tdisplay: flex; flex-flow: column; text-indent: 1em;\n}\n.equip-slot[data-v-4284ca61] {\n\tdisplay:flex;\n\tmargin: var(--tiny-gap) 0;\n}\n.equip-slot button[data-v-4284ca61] {\n\tmargin-left: var(--sm-gap);\n\tpadding: 0.4em;\n}\ntd.slot-name[data-v-4284ca61] {\n\tfont-weight: bold;\n}\n\n",""]),t.exports=n},284:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"equip"},t._l(t.equip.slots,(function(n,a){return e("div",{key:a,staticClass:"equip-slot"},[e("td",{staticClass:"slot-name"},[t._v(t._s(n.name+":"))]),t._v(" "),n.empty()?e("td",{staticClass:"slot-item"}):n.multi?e("td",{staticClass:"sub-slots"},t._l(n.item,(function(a){return e("div",{key:a.id,staticClass:"slot-item",on:{"!mouseenter":function(n){return n.stopPropagation(),t.itemOver(n,a)}}},[e("button",{staticClass:"remove",on:{click:function(e){return t.emit("unequip",n,a)}}},[t._v("X")]),e("span",{staticClass:"item-name",style:{color:a.color}},[t._v(t._s(a.name.toTitleCase()))])])})),0):e("td",{staticClass:"slot-item"},[e("div",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,n.item)}}},[e("button",{staticClass:"remove",on:{click:function(e){return t.emit("unequip",n,n.item)}}},[t._v("X")]),e("span",{staticClass:"item-name",style:{color:n.item.color}},[t._v(t._s(n.item.name.toTitleCase()))])])])])})),0)};a._withStripped=!0;var i={props:["equip"]},s=(e(207),e(7)),o=Object(s.a)(i,a,[],!1,null,"4284ca61",null);o.options.__file="src/ui/sections/equip.vue";n.default=o.exports}}]);