(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[10],{129:function(t,i,e){var n=e(166);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(20)(n,s);n.locals&&(t.exports=n.locals)},130:function(t,i,e){var n=e(168);"string"==typeof n&&(n=[[t.i,n,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};e(20)(n,s);n.locals&&(t.exports=n.locals)},165:function(t,i,e){"use strict";var n=e(129);e.n(n).a},166:function(t,i,e){(i=e(19)(!1)).push([t.i,"\ndiv.activities[data-v-cacde55a] {\n\tmin-width: 28rem;\n\twidth: fit-content;\n\tpadding-top:1em;\n\tpadding: 1.5em;\n}\ndiv.section[data-v-cacde55a] {\n\tmargin-top: 1em;\n\tmin-width: 100%;\n}\ndiv.task-info[data-v-cacde55a] {\n\tdisplay:flex;\n\twidth: 90%;\n\tmargin: var(--sm-gap) 0;\n}\nbutton.stop[data-v-cacde55a] {\n\tmargin: 0 var(--sm-gap);\n}\nspan.task-name[data-v-cacde55a] {\n\tflex-grow:1;\n\tvertical-align: center;\n}\ndiv.section header[data-v-cacde55a] {\n\tborder-bottom: 1px solid var(--separator-color);\n\tmargin-bottom: var(--sm-gap);\n}\n\n",""]),t.exports=i},167:function(t,i,e){"use strict";var n=e(130);e.n(n).a},168:function(t,i,e){(i=e(19)(!1)).push([t.i,"\n.disabled[data-v-980be7f2] {\n  border-color: rgba(0,0,0,0.4);\n  color: rgba(0,0,0,0.4);\n}\n.popup[data-v-980be7f2] {\n\tz-index: var(--md-depth);\n\tmax-width: 50vw;\n}\n.content[data-v-980be7f2] {\n\tdisplay:flex;\n\tflex-flow: column nowrap;\n\twidth: 100%;\n\tmin-height:5rem;\n}\n.content .items[data-v-980be7f2] {\n\tdisplay:flex;\n\tflex-flow: row wrap;\n\tflex-grow: 1;\n\twidth:auto;\n}\n.content .title[data-v-980be7f2] {\n\tfont-weight: bold;\n\ttext-align: center;\n\tmargin-bottom: var(--sm-gap);\n}\n.task-btn[data-v-980be7f2] {\n\n\tmax-height: 2em;\n\twidth:100%;\n}\nbutton.close-btn[data-v-980be7f2] {\n\tmin-height: 2em;\n\twidth: 5em;\n\tfont-size:0.9em;\n}\n\n\n",""]),t.exports=i},227:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"popup activities"},[e("div",{staticClass:"popup-close",on:{click:function(i){return t.$emit("close")}}},[t._v("X")]),t._v(" "),e("div",{key:"k"+t.activeKey,staticClass:"section"},[e("header",[t._v("Activities")]),t._v(" "),0===t.activesLen?e("div",{staticClass:"note-text"},[t._v("None")]):e("div",t._l(t.actives.values().reverse(),(function(i,n){return e("div",{key:"a"+n,staticClass:"task-info"},[e("button",{staticClass:"stop",on:{click:function(e){return t.removeActive(i)}}},[t._v("X")]),e("span",{staticClass:"task-name"},[t._v(t._s(i.name.toTitleCase()))]),t._v(" "),e("button",{attrs:{disabled:0===n},on:{click:function(e){return t.incActive(i)}}},[t._v("+")]),t._v(" "),e("button",{attrs:{disabled:n+1===t.activesLen},on:{click:function(e){return t.decActive(i)}}},[t._v("-")])])})),0)]),t._v(" "),e("div",{key:"w"+t.waitKey,staticClass:"section"},[e("header",[t._v("Waiting/Blocked")]),t._v(" "),0===t.waiting.length?e("div",{staticClass:"note-text"},[t._v("None")]):e("div",t._l(t.waiting,(function(i,n){return e("div",{key:"w"+n,staticClass:"task-info"},[e("button",{staticClass:"stop",on:{click:function(e){return t.removeWait(i)}}},[t._v("X")]),e("span",{staticClass:"task-name"},[t._v(t._s(i.name.toTitleCase()))]),t._v(" "),e("button",{attrs:{disabled:0===n},on:{click:function(e){return t.incWaiting(i)}}},[t._v("+")]),t._v(" "),e("button",{attrs:{disabled:n+1===t.waiting.length},on:{click:function(e){return t.decWaiting(i)}}},[t._v("-")])])})),0)]),t._v(" "),e("div",{staticClass:"section"},[e("header",[t._v("Pursuits")]),t._v(" "),0===t.pursuits.count?e("div",{staticClass:"note-text"},[t._v("None")]):e("div",t._l(t.pursuits.items,(function(i){return e("div",{key:i.id,staticClass:"task-info"},[e("button",{staticClass:"stop",on:{click:function(e){return t.removePursuit(i)}}},[t._v("X")]),e("span",{staticClass:"task-name"},[t._v(t._s(i.name.toTitleCase()))])])})),0)])])};n._withStripped=!0;var s=e(2),a=e(37),c={mixins:[],data:()=>({activeKey:0,waitKey:0}),mounted(){this.elm?Object(a.c)(this.$el,this.elm,0):Object(a.b)(this.$el,.2)},computed:{runner:()=>s.c.runner,actives(){return this.runner.actives},activesLen(){return this.actives.size},waiting(){return this.runner.waiting.reverse()},pursuits(){return this.runner.pursuits}},methods:{incActive(t){this.actives.inc(t),this.activeKey++},decActive(t){this.actives.dec(t),this.activeKey++},removeActive(t){this.runner.stopTask(t)},removeWait(t){this.runner.removeWait(t)},incWaiting(t){this.runner.waitingUp(t)},decWaiting(t){this.runner.waitingDown(t)},removePursuit(t){this.pursuits.remove(t)},incPursuits(t){this.runner.pursuitUp(t)},decPursuits(t){this.runner.pursuitDown(t)}}},r=(e(165),e(6)),o=Object(r.a)(c,n,[],!1,null,"cacde55a",null);o.options.__file="src/ui/popups/activities.vue";i.default=o.exports},228:function(t,i,e){"use strict";e.r(i);var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return null!=t.choices&&t.choices.length>0?e("div",{staticClass:"popup"},[e("div",{staticClass:"content"},[t.title?e("span",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),e("div",{staticClass:"items"},t._l(t.choices,(function(i){return e("button",{key:t.strings?i:i.id,staticClass:"task-btn",class:t.disabled(i)&&"disabled",on:{"!mouseenter":function(e){e.stopPropagation(),!t.strings&&t.itemOver(e,i)},click:function(e){return t.choose(i)}}},[t._v(t._s(t.strings?i:i.name))])})),0),t._v(" "),e("button",{staticClass:"close-btn",on:{click:t.cancel}},[t._v("Cancel")])])]):t._e()};n._withStripped=!0;var s=e(2),a=e(37),c=e(21),r=(e(7),{data:()=>({title:null,list:null,elm:null,item:null,open:!1,mustPay:!1,strings:!1}),mixins:[c.a],created(){this.cb=null,this.plisten=()=>{this.add("choice",this.show,this)},this.listen("game-loaded",this.plisten)},beforeDestroy(){this.removeListener("game-loaded",this.plisten),this.plisten=null,this.cancel()},updated(){!1!==this.open&&(this.elm?Object(a.c)(this.$el,this.elm,0):Object(a.a)(this.$el))},computed:{choices:{get(){return this.list},set(t){if("string"==typeof t&&(t=s.c.state.getData(t)),t&&t.items&&(t=t.items),Array.isArray(t))if(this.strings)this.list=t;else{var i=[];for(let n=t.length-1;n>=0;n--){var e=s.c.state.findData(t[n]);e&&i.push(e)}this.list=i}else this.list=null}}},methods:{show(t,i){this.title=i.title,this.cb=i.cb,this.elm=i.elm,this.strings=i.strings,this.mustPay=i.mustPay,this.choices=t,this.open=!0},cantPay:t=>t.cost&&!s.c.canPay(t.cost),disabled(t){return!this.strings&&!this.slottable(t)||this.mustPay&&this.cantPay(t)},choose(t){if(!this.disabled(t)&&(this.open=!1,this.item=null,this.choices=null,this.elm=null,this.cb)){let i=this.cb;this.cb=null,i(t)}},cancel(){this.open=!1,this.cb=null,this.item=null,this.choices=null,this.elm=null}}}),o=(e(167),e(6)),l=Object(o.a)(r,n,[],!1,null,"980be7f2",null);l.options.__file="src/ui/popups/choice.vue";i.default=l.exports}}]);