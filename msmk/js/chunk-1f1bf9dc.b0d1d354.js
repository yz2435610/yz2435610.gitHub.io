(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1f1bf9dc"],{"4e5a":function(t,s,e){},"8d5b":function(t,s,e){"use strict";e("4e5a")},d16d:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Login-box"},[t._m(0),e("van-form",[e("div",{staticClass:"wsy_box"},[e("div",{staticClass:"wsy_mobile wsy_input",class:[1==t.wsy_Active?"wsy_active":""]},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:t.mobile},on:{focus:function(s){return t.wsy_inputFcous(1)},blur:function(s){return t.wsy_inputBlur()},input:function(s){s.target.composing||(t.mobile=s.target.value)}}}),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.CAPTCHAFlag,expression:"!CAPTCHAFlag"}],staticClass:"getCAPTCHA",on:{click:function(s){return t.getCAPTCHA()}}},[t._v("获取验证码")]),e("div",{directives:[{name:"show",rawName:"v-show",value:t.CAPTCHAFlag,expression:"CAPTCHAFlag"}],staticClass:"getCAPTCHAA"},[t._v("获取验证码("+t._s(t.wsy_second)+")")])]),e("div",{staticClass:"wsy_pass wsy_input",class:[2==t.wsy_Active?"wsy_active":""]},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.captcha,expression:"captcha"}],attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:t.captcha},on:{focus:function(s){return t.wsy_inputFcous(2)},blur:function(s){return t.wsy_inputBlur()},input:function(s){s.target.composing||(t.captcha=s.target.value)}}})]),e("div",{staticClass:"wsy-text"},[e("span",[t._v("*未注册的手机号将自动注册")]),e("span",{on:{click:function(s){return t.wsy_toggle()}}},[t._v("使用密码登录")])]),e("div",[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",color:"linear-gradient(to right, rgb(255, 146, 71),rgb(253, 88, 3))"},on:{click:function(s){return t.wsy_Login()}}},[t._v("登录")])],1)])]),e("div")],1)},a=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"Login-img"},[e("img",{attrs:{src:"https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"}})])}],n=e("01e2"),o={data(){return{mobile:"",captcha:"",wsy_Active:null,CAPTCHAFlag:!1,wsy_second:60}},methods:{wsy_inputFcous(t){this.wsy_Active=t},wsy_inputBlur(){this.wsy_Active=null},wsy_toggle(){this.$router.push("/wyl-Login")},async getCAPTCHA(){this.CAPTCHAFlag=!0,setInterval(()=>{this.wsy_second--,0==this.wsy_second&&(this.wsy_second=0)},1e3),this.wsy_second=60;let{data:t}=await this.$http.post("/api/app/smsCode",{mobile:this.mobile,sms_type:"login"});console.log(t),201==t.code?n["a"].fail("请勿重复获取短信验证码"):200==t.code&&n["a"].success("发送成功")},async wsy_Login(){let{data:t}=await this.$http.post("/api/app/login",{mobile:this.mobile,sms_code:this.captcha,client:1,type:2});console.log(t),window.sessionStorage.setItem("token",JSON.stringify(t.data.remember_token)),1!=t.data.is_new?this.$router.push("/lwh_my"):this.$router.push("/wsySetPass")}}},c=o,l=(e("8d5b"),e("c701")),r=Object(l["a"])(c,i,a,!1,null,"7c8cf670",null);s["default"]=r.exports}}]);
//# sourceMappingURL=chunk-1f1bf9dc.b0d1d354.js.map