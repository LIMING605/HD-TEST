(window.webpackJsonp_name_=window.webpackJsonp_name_||[]).push([[7],{174:function(t,e,a){var i=a(234);"string"==typeof i&&(i=[[t.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};a(22)(i,s);i.locals&&(t.exports=i.locals)},233:function(t,e,a){"use strict";var i=a(174);a.n(i).a},234:function(t,e,a){(e=a(21)(!1)).push([t.i,'\ndiv.sel01[data-v-456c1a24]{\n  display:inline-block;\n  position:relative;\n  z-index:2;\n  font-size:1.6rem;\n  line-height:3.6rem;\n  width:8rem;\n  flex:1;\n  box-sizing:border-box;\n}\ndiv.sel01[data-v-456c1a24]:before{content:"";position:absolute;width:0;height:0;border:.5rem solid transparent;\nborder-top-color:#e92f26;top:50%;left:0rem;cursor:pointer;z-index:-2;margin-top:-0.25rem;}\ndiv.sel01 select[data-v-456c1a24]{\n  width:100%;\n  border:none;\n  height:3.6rem;\n  background:transparent;\n  background-image:none;\n  /* -webkit-appearance:none;\n  -moz-appearance:none; */\n  vertical-align:top;\n  padding-left:1rem;\n}\ndiv.sel01 select[data-v-456c1a24]:focus{outline:none;}\ndiv.top_menu[data-v-456c1a24] {\n  float: left;\n\tborder-right: 1px solid var(--separator-color);\n  overflow-y: auto;\n\theight: 100%;\n  width: 100%;\n}\ndiv.bottom_menu[data-v-456c1a24] {\n  border-top: 1px solid var(--separator-color);\n  height: 100%;\n  float: left;\n\tborder-right: 1px solid var(--separator-color);\n  overflow-y: auto;\n}\ndiv.detail_block[data-v-456c1a24] {\n\theight: 41px;\n  width: auto;\n\tborder-bottom: 1px solid var(--separator-color);\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\ndiv.detail_block[data-v-456c1a24]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\ndiv.detail_block_factory[data-v-456c1a24] {\n    display: flex;\n    width: 100%;\n    height: 41px;\n    border-bottom: 1px solid var(--separator-color);\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n}\ndiv.title_color[data-v-456c1a24] {height:20px;background:#aeaeae;display: flex; justify-content: center;}\ndiv.info_bar[data-v-456c1a24] {\n  display: flex;\n  height: 30px;\n  justify-content: space-between;\n  align-items: center;\n}\ndiv.conquer[data-v-456c1a24] {\n\tborder-bottom: 1px solid var(--separator-color);\n}\ndiv.proc_bar[data-v-456c1a24]{\n\tfloat: left;\n  position:relative;\n  border:1px #CCC solid; \n  height:28px;\n  width:180px;\n  margin:5px auto;\n  padding:1px ;\n}\nstrong.proc_txt[data-v-456c1a24]{\n\tposition:absolute;\n  width:180px;\n  top:4px;\n  text-align:center;\n  overflow:hidden\n}\ndiv.process[data-v-456c1a24]{\n\tbackground:#999; \n\theight:28px;\n\twidth:20px;\n\tmargin-left: -2px;\n  margin-top: -2px;\n}\nbutton.button[data-v-456c1a24] {\n    display: inline-block;\n    text-align: center;\n    padding: 5px 7px;\n    margin: 5px;\n    background-color: #efefef;\n    border-radius: 3px;\n    box-shadow: 0 1px 2px rgb(0 0 0 / 30%);\n    cursor: pointer;\n}\n.repii[data-v-456c1a24] {\n\tborder-bottom: 1px solid var(--separator-color);\n\tdisplay: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.repii[data-v-456c1a24]:hover {\n  background: linear-gradient(to right,transparent 0, #dadbda 100%);\n}\n.imgname[data-v-456c1a24]{\n    display: flex;    \n    height: 40px;\n    width: 40px;\n    justify-content: center;\n}\n.factimg[data-v-456c1a24] {\n  filter: drop-shadow(0 0 2px black);\n}\n',""]),t.exports=e},299:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"factmode",staticStyle:{height:"100%"}},[a("div",{staticStyle:{height:"49%",display:"flex","flex-direction":"row"}},[a("div",{staticStyle:{display:"flex","flex-direction":"column",width:"50%"}},[a("div",{staticStyle:{"border-right":"1px solid var(--separator-color)","border-bottom":"1px solid var(--separator-color)",display:"flex"}},[a("filterbox",{staticStyle:{width:"50%"},attrs:{items:t.produ_show?t.factclass:t.factorys,"min-items":"1"},model:{value:t.filtered,callback:function(e){t.filtered=e},expression:"filtered"}}),t._v(" "),a("div",{staticStyle:{display:"flex",width:"50%","flex-direction":"column-reverse","align-items":"flex-end"}},[a("span",{staticStyle:{width:"100%",display:"flex","justify-content":"center",overflow:"hidden",border:"1px solid #ccc",cursor:"pointer"},on:{click:function(e){t.produ_show=!0}}},[t._v("产品")]),t._v(" "),a("span",{staticStyle:{width:"100%",display:"flex","justify-content":"center",overflow:"hidden",border:"1px solid #ccc",cursor:"pointer"},on:{click:function(e){t.produ_show=!1}}},[t._v("工厂")])])],1),t._v(" "),t.produ_show?a("div",{staticClass:"top_menu"},t._l(t.filtered,(function(e){return a("div",{key:e.id,staticClass:"detail_block",on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("div",{staticStyle:{height:"40px"}},[a("div",{staticStyle:{"min-width":"30%",float:"left",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("div",{staticClass:"imgname"},[a("img",{staticClass:"factimg",attrs:{src:e.img}})]),t._v(" "),a("div",{staticStyle:{width:"100%",display:"flex","justify-content":"center",height:"100%","font-size":"12px"}},[a("span",{style:{color:t.change_color(e.balance,e.val)}},[t._v(t._s(e.name)+"("+t._s(t.toLarge(Math.floor(e.balance?e.balance:0)))+")")])])]),t._v(" "),a("div",{staticStyle:{"min-width":"33%",float:"left",display:"flex","align-items":"center",height:"40px","border-right":"1px solid var(--separator-color)","justify-content":"center"}},[a("span",[t._v(t._s(t.toLarge(Math.floor(e.val)))+" /"+t._s(t.toLarge(Math.floor(e.max)))+" ")])]),t._v(" "),a("div",{staticStyle:{float:"left","min-width":"33%",display:"flex","align-items":"center",height:"40px"}},[a("div",{staticClass:"sel01"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectClassEnd,expression:"selectClassEnd"}],on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectClassEnd=e.target.multiple?a:a[0]},function(e){return t.selectClass(e)}]}},[a("option",{attrs:{value:"NONE"}},[t._v("选择模式")]),t._v(" "),t._l(t.factrecipe(e),(function(e,i){return a("option",{key:i,domProps:{value:e.id}},[t._v("\n                      "+t._s(e.name)+"\n                  ")])}))],2)])])])])})),0):t._e(),t._v(" "),t.produ_show?t._e():a("div",{staticClass:"top_menu",staticStyle:{display:"flex","flex-wrap":"wrap"}},t._l(t.filtered,(function(e){return a("div",{key:e.id,staticClass:"detail_block_factory",on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("div",{staticStyle:{height:"40px",display:"flex",width:"100%"}},[a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("span",{staticStyle:{width:"100%",height:"40px",display:"flex","align-items":"center","justify-content":"space-evenly","font-size":"smaller"}},[t._v(t._s(e.name))])]),t._v(" "),a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center",height:"40px","border-right":"1px solid var(--separator-color)","justify-content":"center"}},[a("span",[t._v(t._s(e.val)+" /"+t._s(e.max)+" ")])]),t._v(" "),a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/29/XQIuDK.png",title:"占用工业用地"}}),t._v(" "),a("span",[t._v(t._s(e.mod.industry_space))])]),t._v(" "),a("div",{staticStyle:{"min-width":"20%",display:"flex","align-items":"center","border-right":"1px solid var(--separator-color)"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/29/XQIKHO.png",title:"维护所需工业电量"}}),t._v(" "),a("span",[t._v(t._s(e.mod.industry_elect))])]),t._v(" "),a("div",{staticStyle:{"min-width":"19%",display:"flex","align-items":"center",height:"40px"}},[a("button",{attrs:{disabled:!e.canbuild(t.Game)},on:{click:function(a){return t.emit("addthread",e)}}},[t._v("建造")]),t._v(" "),a("button",{attrs:{disabled:e.val<=0},on:{click:function(t){return e.amount(-1)}}},[t._v("拆除")])])])])})),0)]),t._v(" "),a("div",{staticClass:"top_menu",staticStyle:{width:"50%"}},[a("div",{staticStyle:{display:"flex","justify-content":"center","border-bottom":"1px solid var(--separator-color)"}},[a("span",{staticStyle:{display:"flex","align-items":"center"}},[t._v(t._s(""!=this.select_class_id?t.target_rp(this.select_class_id).name:"当前选择模式信息"))]),t._v(" "),""!=this.select_class_id?a("span",{staticStyle:{cursor:"pointer","text-shadow":"0 0 3px green"},on:{click:function(e){t.thread_config=t.target_rp(t.select_class_id)}}},[t._v("⚙")]):t._e()]),t._v(" "),""!=this.select_class_id?a("div",[a("div",[t._m(0),t._v(" "),a("span",[t._v(t._s(t.target_rp(this.select_class_id).desc))])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticStyle:{display:"flex",width:"100%","justify-content":"space-between"}},[a("span",{staticStyle:{width:"50%"},attrs:{title:"2/2(0)表示最大支持2个线程,目前启用了2个线程,剩余0个可用。"}},[t._v("启动数量:"+t._s(t.target_rp(this.select_class_id).val)+" /"+t._s(t.target_rp(t.target_rp(this.select_class_id).thread_use).max)+"("+t._s(t.target_rp(t.target_rp(this.select_class_id).thread_use).max-t.target_rp(t.target_rp(this.select_class_id).thread_use).val)+")")]),t._v(" "),a("span",{staticStyle:{width:"50%"}},[t._v("使用:"+t._s(t.target_rp(t.target_rp(this.select_class_id).thread_use).name))])]),t._v(" "),t._m(2),t._v(" "),a("div",{staticStyle:{display:"flex"}},[a("div",{staticStyle:{width:"50%","border-right":"1px solid var(--separator-color)"}},[a("div",{staticStyle:{height:"40px",display:"flex","align-items":"center"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/29/XQIuDK.png",title:"占用工业用地"}}),t._v(" "),a("span",[t._v(t._s(t.toLarge(Math.floor(t.target_rp(this.select_class_id).mod.industry_space*t.target_rp(this.select_class_id).val)))+" ("+t._s(t.target_rp(this.select_class_id).mod.industry_space)+"每数量)")])]),t._v(" "),a("div",{staticStyle:{height:"40px",display:"flex","align-items":"center"}},[a("img",{attrs:{src:"https://s1.ax1x.com/2022/05/29/XQIKHO.png",title:"占用工业电量"}}),t._v(" "),a("span",[t._v(t._s(t.toLarge(Math.floor(t.target_rp(this.select_class_id).mod.industry_elect.value*t.target_rp(this.select_class_id).val)))+" ("+t._s(t.target_rp(this.select_class_id).mod.industry_elect.value)+"每数量)")])])]),t._v(" "),a("div",{staticStyle:{width:"50%"}},[a("div",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.target_rp_info)}}},[a("button",{staticClass:"button",attrs:{disabled:!t.target_rp(this.select_class_id).canpay(t.Game)},on:{click:function(e){return t.emit("addthread",t.target_rp_info)}}},[t._v("增加线程")])]),t._v(" "),a("div",{on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.target_rp_info)}}},[a("button",{staticClass:"button",attrs:{disabled:t.target_rp(this.select_class_id).val<=0},on:{click:function(e){return t.target_rp_info.amount(-1)}}},[t._v("减少线程")])])])])]):t._e()])]),t._v(" "),a("div",{staticStyle:{height:"50%"}},[a("div",{staticClass:"bottom_menu",staticStyle:{width:"30%","overflow-x":"hidden"}},[t._m(3),t._v(" "),a("div",[a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_space)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("工业用地:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("div",{staticClass:"process",staticStyle:{background:"#1476f3"},style:{width:180*(t.industry_space.val/Math.floor(t.industry_space.max)>=1?1:t.industry_space.val/Math.floor(t.industry_space.max))+"px"}}),t._v(" "),a("strong",{staticClass:"proc_txt"},[t._v(t._s(t.toLarge(Math.floor(t.industry_space.val)))+" / "+t._s(t.toLarge(Math.floor(t.industry_space.max))))])])])]),t._v(" "),a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_elect)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("工业电量:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("div",{staticClass:"process",staticStyle:{background:"#e7f314"},style:{width:180*(t.industry_elect.val/Math.floor(t.industry_elect.max)>=1?1:t.industry_elect.val/Math.floor(t.industry_elect.max))+"px"}}),t._v(" "),a("strong",{staticClass:"proc_txt"},[t._v(t._s(t.toLarge(Math.floor(t.industry_elect.val)))+" / "+t._s(t.toLarge(Math.floor(t.industry_elect.max))))])])])]),t._v(" "),a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_thread)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("工业线程:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("div",{staticClass:"process",style:{width:180*(t.industry_thread.val/Math.floor(t.industry_thread.max)>=1?1:t.industry_thread.val/Math.floor(t.industry_thread.max))+"px"}}),t._v(" "),a("strong",{staticClass:"proc_txt"},[t._v(t._s(t.toLarge(Math.floor(t.industry_thread.val)))+" / "+t._s(t.toLarge(Math.floor(t.industry_thread.max))))])])])]),t._v(" "),a("div",{staticClass:"info_bar",on:{"!mouseenter":function(e){return e.stopPropagation(),t.itemOver(e,t.industry_open)}}},[a("span",{staticStyle:{float:"left",width:"140px"}},[t._v("物流通畅:")]),a("span",{staticStyle:{float:"right"}},[a("div",{staticClass:"proc_bar"},[a("div",{staticClass:"process",staticStyle:{background:"#50e220"},style:{width:180*(t.industry_open.val/Math.floor(t.industry_open.max)>=1?1:t.industry_open.val/Math.floor(t.industry_open.max))+"px"}}),t._v(" "),a("strong",{staticClass:"proc_txt"},[t._v(t._s(t.toLarge(Math.floor(t.industry_open.val)))+" / "+t._s(t.toLarge(Math.floor(t.industry_open.max))))])])])])])]),t._v(" "),"false"==t.thread_config?a("div",{staticClass:"bottom_menu",staticStyle:{width:"70%"}},[a("div",{staticStyle:{height:"auto"}},[a("filterbox",{staticStyle:{"border-bottom":"1px solid var(--separator-color)"},attrs:{items:t.factrep,"min-items":"1"},model:{value:t.repfiltered,callback:function(e){t.repfiltered=e},expression:"repfiltered"}}),t._v(" "),a("div",t._l(t.repfiltered,(function(e){return a("div",{key:e.id,staticClass:"repii",on:{"!mouseenter":function(a){return a.stopPropagation(),t.itemOver(a,e)}}},[a("div",{staticStyle:{display:"flex","align-items":"center",width:"70%"}},[a("span",{staticStyle:{width:"30%"}},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticStyle:{width:"35%"},attrs:{title:"2/2(0)表示最大支持2个线程,目前启用了2个线程,剩余0个可用。"}},[a("span",{staticStyle:{cursor:"pointer","text-shadow":"0 0 3px green"},on:{click:function(a){t.thread_config=e}}},[t._v("⚙")]),t._v(t._s(e.val)+" / "+t._s(t.target_rp(e.thread_use).max)+"("+t._s(t.target_rp(e.thread_use).max-t.target_rp(e.thread_use).val)+")")]),t._v(" "),a("span",{staticStyle:{width:"20%"}},[t._v(t._s(t.toLarge(Math.floor(e.val*e.mod.industry_space)))+"地")]),t._v(" "),a("span",{staticStyle:{width:"20%"}},[t._v(t._s(t.toLarge(Math.floor(e.val*e.mod.industry_elect.value)))+"电")]),t._v(" "),a("span",{staticStyle:{width:"20%"}},[t._v(t._s(t.target_rp(e.thread_use).name))])]),t._v(" "),a("div",{staticStyle:{float:"right"}},[a("button",{attrs:{disabled:!e.canpay(t.Game)},on:{click:function(a){return t.emit("addthread",e)}}},[t._v("增加线程")]),t._v(" "),a("button",{attrs:{disabled:e.val<=0},on:{click:function(t){return e.amount(-1)}}},[t._v("减少线程")])])])})),0)],1)]):t._e(),t._v(" "),"false"!=t.thread_config?a("div",{staticClass:"bottom_menu",staticStyle:{width:"70%"}},[a("div",{staticStyle:{"border-bottom":"1px solid var(--separator-color)","text-align":"center"}},[a("span",{staticStyle:{cursor:"pointer",float:"left"},on:{click:function(e){t.thread_config="false"}}},[t._v("◀")]),t._v(" "),a("span",[t._v(t._s(t.thread_config.name)+"-线程配置")])]),t._v(" "),a("div",[a("div",{staticStyle:{"margin-bottom":"var(--sm-gap)","border-bottom":"1px solid var(--separator-color)",display:"flex","flex-direction":"column"}},[a("span",{staticStyle:{width:"100%","text-align":"center"}},[t._v("输入情况")]),t._v(" "),t._l(t.thread_config.inpval,(function(e){return a("div",{key:e.id,staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("div",{staticStyle:{display:"flex","align-items":"center"},on:{"!mouseenter":function(a){a.stopPropagation(),t.itemOver(a,t.target_rp(e.id))}}},[a("div",{staticClass:"imgname"},[a("img",{staticClass:"factimg",attrs:{src:t.getimg(e.id)}})]),t._v(" "),a("span",[t._v(t._s(t.target_rp(e.id).name))])]),t._v(" "),a("div",{staticStyle:{width:"70%",display:"flex"}},[a("progbar",{staticClass:"human_power",attrs:{value:Math.floor(e.now_val),max:Math.floor(e.base_val*t.thread_config.val)}})],1)])}))],2),t._v(" "),a("div",{staticStyle:{"margin-bottom":"var(--sm-gap)","border-bottom":"1px solid var(--separator-color)",display:"flex","flex-direction":"column"}},[a("span",{staticStyle:{width:"100%","text-align":"center"}},[t._v("输出情况")]),t._v(" "),t._l(t.thread_config.outpval,(function(e){return a("div",{key:e.id,staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[a("div",{staticStyle:{display:"flex","align-items":"center"},on:{"!mouseenter":function(a){a.stopPropagation(),t.itemOver(a,t.target_rp(e.id))}}},[a("div",{staticClass:"imgname"},[a("img",{staticClass:"factimg",attrs:{src:t.getimg(e.id)}})]),t._v(" "),a("span",{style:{color:1==e.ignore?"blue":""}},[t._v(t._s(t.target_rp(e.id).name))])]),t._v(" "),a("div",{staticStyle:{width:"70%",display:"flex"}},[a("progbar",{staticClass:"human_power",attrs:{value:Math.floor(e.now_val),max:Math.floor(e.base_val*t.thread_config.val)}})],1)])}))],2)])]):t._e()])])};i._withStripped=!0;var s=a(39),r=a(89),n=(a(18),a(42)),o=(a(23),a(4)),l=a(32),c={props:["state"],mixins:[a(17).a,l.a],components:{progbar:s.a,running:r.a},data:()=>({filtered:null,repfiltered:null,produ_show:!0,thread_config:"false",selectClassEnd:"NONE",select_class_id:""}),components:{progbar:s.a,inv:()=>a.e(13).then(a.bind(null,291)),filterbox:n.a},computed:{factclass(){return o.c.state.factclass.filter(t=>!this.alocked(t))},factorys(){return o.c.state.factory.filter(t=>!this.alocked(t))},factrep(){return o.c.state.factrecipe.filter(t=>0!=t.val&&!this.alocked(t)&&null!=t.thread_use)},industry_space:()=>o.c.state.getData("industry_space"),industry_elect:()=>o.c.state.getData("industry_elect"),industry_thread:()=>o.c.state.getData("industry_thread"),industry_open:()=>o.c.state.getData("industry_open"),target_rp_info(){return o.c.state.getData(this.select_class_id)},BUY:()=>TRY_BUY},methods:{factrecipe(t){return o.c.state.factrecipe.filter(e=>e.hasTag(t.follow)&&!this.alocked(e))},getimg(t){let e=o.c.state.getData(t);return null!=e.img?e.img:o.c.state.getData("g_c").f_n_img},target_rp:t=>o.c.state.getData(t),change_color(t,e){let a="";return a=t>0?"green":t<0?"red":"",e<=0&&(a=""),a},change_color_id(t){if(!t.rp_target)return"black";{let e=o.c.state.getData(t.rp_target),a=1;if(e.stop_follow||e.max_follow){if(e.stop_follow)for(let t=e.stop_follow.length-1;t>=0;t--)o.c.state.getData(e.stop_follow[t]).val<=1&&(a=0);if(e.max_follow)for(let t=e.max_follow.length-1;t>=0;t--)o.c.state.getData(e.max_follow[t]).val>=o.c.state.getData(e.max_follow[t]).max&&(a=0);return 1==a?"#0fcb0f":"red"}}},selectClass(t){this.select_class_id=t.target.value},toLarge(t){if(t>=1){const e=["","K","M","B","T","P","E","Z","Y","BB","N","D"];let a=1;if(t<0&&(a=-1,t=-t),t<=1)return a;let i=Math.floor((Math.log10(t)-1)/3);return i<1?a*t:a*Math.round(t/Math.pow(10,3*i))+e[i]}return t}}},d=(a(233),a(6)),_=Object(d.a)(c,i,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title_color"},[e("span",[this._v("模式描述")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title_color"},[e("span",[this._v("模式线程")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"title_color"},[e("span",[this._v("模式修正")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{height:"20px",display:"flex","justify-content":"center","border-bottom":"1px solid var(--separator-color)","border-top":"1px solid var(--separator-color)"}},[e("span",[this._v("当前模型信息")])])}],!1,null,"456c1a24",null);_.options.__file="src/ui/sections/factmode.vue";e.default=_.exports}}]);