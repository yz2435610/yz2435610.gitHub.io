(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-119a991e"],{"644b":function(t,s,a){},"859a":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"header_container"},[a("div",{staticClass:"header_wrapper"},[a("div",{staticClass:"head_left",on:{click:t.onBack}},[a("van-icon",{attrs:{name:"arrow-left"}})],1),a("div",{staticClass:"head_title"},[t._v("修改个人信息")]),a("div",{staticClass:"head_icon",on:{click:t.onSave}},[t._v("保存")])])]),a("div",{staticClass:"messageWrapper"},t._l(t.list,(function(s,e){return a("div",{key:e,staticClass:"messageSlide"},[a("van-checkbox",{attrs:{shape:"square"},on:{change:t.onChange},model:{value:s.status,callback:function(a){t.$set(s,"status",a)},expression:"item.status"}},[t._v(t._s(s.title))]),a("span")],1)})),0)])},i=[],n={data(){return{list:[{title:"语文",status:!1},{title:"数学",status:!1},{title:"英语",status:!1},{title:"物理",status:!1},{title:"化学",status:!1},{title:"生物",status:!1},{title:"政治",status:!1},{title:"信息技术",status:!1}],array:[]}},methods:{onBack(){this.$router.go(-1)},onChange(t){console.log(t);var s=[];this.list.forEach(t=>{t.status&&s.push(t)}),this.$store.commit("yz_Subject",s)},onSave(){this.$router.go(-1)}}},c=n,l=(a("f8aa"),a("2c07")),o=Object(l["a"])(c,e,i,!1,null,"21725d01",null);s["default"]=o.exports},f8aa:function(t,s,a){"use strict";a("644b")}}]);
//# sourceMappingURL=chunk-119a991e.97193a5d.js.map