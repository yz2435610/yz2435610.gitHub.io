(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba4acb6e"],{"41bf":function(t,s,a){},"51da":function(t,s,a){"use strict";a("41bf")},"71e3":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"wsy_box"},[a("div",{staticClass:"header_container"},[a("div",{staticClass:"header_wrapper"},[a("div",{staticClass:"head_left"},[a("van-icon",{attrs:{name:"arrow-left"},on:{click:t.onClickLeft}})],1),a("div",{staticClass:"head_title"},[t._v("信息填写")]),a("div",{staticClass:"head_icon"})])]),a("div",{staticClass:"wsy_info_box"},[a("div",{staticClass:"box",on:{click:function(s){return t.toSetNickName()}}},[a("div",{staticClass:"left"},[a("span",[t._v("用户名")]),a("span",[t._v(t._s(this.$store.state.wsy_mobile))])]),a("div",{staticClass:"right"},[a("van-icon",{attrs:{color:"#CACACA",size:"24px",name:"arrow"}})],1)]),a("div",{staticClass:"box",on:{click:function(s){return t.toSetSex()}}},[a("div",{staticClass:"left"},[a("span",[t._v("性别")]),a("span",[t._v(t._s(this.$store.state.wsy_sex))])]),a("div",{staticClass:"right"},[a("van-icon",{attrs:{color:"#CACACA",size:"24px",name:"arrow"}})],1)]),a("div",{staticClass:"box",on:{click:function(s){return t.datePopup()}}},[a("div",{staticClass:"left"},[a("span",[t._v("出生日期")]),a("span",[t._v(t._s(this.$store.state.wsy_Date))])]),a("div",{staticClass:"right"},[a("van-icon",{attrs:{color:"#CACACA",size:"24px",name:"arrow"}})],1)]),a("div",{staticClass:"box",on:{click:function(s){return t.sitePopup()}}},[a("div",{staticClass:"left"},[a("span",[t._v("所在城市")]),a("span",[t._v(t._s(this.$store.state.wsy_Site))])]),a("div",{staticClass:"right"},[a("van-icon",{attrs:{color:"#CACACA",size:"24px",name:"arrow"}})],1)]),a("div",{staticClass:"box",on:{click:t.toSetSubject}},[a("div",{staticClass:"left"},[a("span",[t._v("学科")]),a("span",[t._v(t._s(this.$store.state.wsy_Subject))])]),a("div",{staticClass:"right"},[a("van-icon",{attrs:{color:"#CACACA",size:"24px",name:"arrow"}})],1)]),a("div",{staticClass:"box",on:{click:t.setClass}},[a("div",{staticClass:"left"},[a("span",[t._v("年级")]),a("span",[t._v(t._s(this.$store.state.wsy_Class))])]),a("div",{staticClass:"right"},[a("van-icon",{attrs:{color:"#CACACA",size:"24px",name:"arrow"}})],1)])]),a("div",{staticClass:"submit"},[a("van-button",{attrs:{color:"#EB6100",block:""},on:{click:function(s){return t.toindex()}}},[t._v("提交信息")])],1),a("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.datePopupIsShow,callback:function(s){t.datePopupIsShow=s},expression:"datePopupIsShow"}},[a("van-datetime-picker",{attrs:{type:"date",title:"选择年月日","min-date":t.minDate,"max-date":t.maxDate},on:{confirm:t.setDate},model:{value:t.currentDate,callback:function(s){t.currentDate=s},expression:"currentDate"}})],1),a("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.sitePopupIsShow,callback:function(s){t.sitePopupIsShow=s},expression:"sitePopupIsShow"}},[a("van-picker",{attrs:{"show-toolbar":"",title:"",columns:t.columns},on:{confirm:t.setSite}})],1),a("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.classPopupIsShow,callback:function(s){t.classPopupIsShow=s},expression:"classPopupIsShow"}},[a("van-picker",{attrs:{title:"","show-toolbar":"",columns:t.classColumns},on:{confirm:t.onConfirm,cancel:t.onCancel,change:t.onChange}})],1)],1)},o=[],i=a("8587"),n=a.n(i),c={name:"",components:{},props:{},data(){return{minDate:new Date(2020,0,1),maxDate:new Date(2025,10,1),currentDate:new Date,datePopupIsShow:!1,sitePopupIsShow:!1,classPopupIsShow:!1,columns:[],classColumns:["小学一年级","小学二年级","小学三年级","小学四年级","小学五年级","小学六年级","初一","初二"]}},created(){},mounted(){n.a.get("site.json").then(({data:t})=>{this.columns=t})},activated(){},update(){},beforeRouteUpdate(t,s,a){a()},methods:{onClickLeft(){this.$router.back(1)},toSetNickName(){this.$router.push("/wsySetNickName")},toSetSex(){this.$router.push("/wsySetSex")},datePopup(){this.datePopupIsShow=!0},sitePopup(){this.sitePopupIsShow=!0},setClass(){this.classPopupIsShow=!0},setDate(t){this.$store.commit("changeDate",this.formatDate(t.getTime())),this.datePopupIsShow=!1},formatDate(t){t=new Date(t);var s=t.getFullYear()+"-",a=(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-",e=t.getDate()<10?"0"+t.getDate():t.getDate();return s+a+e},setSite(t){this.$store.commit("changeSite",t.join("")),this.sitePopupIsShow=!1},toSetSubject(){this.$router.push("/wsySetSubject")},onConfirm(t,s){this.$store.commit("changeClass",t),this.classPopupIsShow=!1},onChange(t,s,a){},onCancel(){this.classPopupIsShow=!1},toindex(){this.$router.push("/lwh_main")}},filters:{},computed:{},watch:{}},r=c,l=(a("51da"),a("c701")),p=Object(l["a"])(r,e,o,!1,null,"2af26d92",null);s["default"]=p.exports}}]);
//# sourceMappingURL=chunk-ba4acb6e.a0bd612c.js.map