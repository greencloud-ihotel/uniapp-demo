(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/reg/reg"],{6376:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return o}),e.d(n,"b",function(){return a})},b254:function(t,n,e){"use strict";e.r(n);var o=e("6376"),a=e("da45");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var u=e("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=s.exports},c3f8:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(e("5736"));function a(t){return t&&t.__esModule?t:{default:t}}var i=function(){return e.e("components/m-input").then(e.bind(null,"706f"))},u={components:{mInput:i},data:function(){return{account:"",password:"",email:""}},methods:{register:function(){if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else if(this.email.length<3||!~this.email.indexOf("@"))t.showToast({icon:"none",title:"邮箱地址不合法"});else{var n={account:this.account,password:this.password,email:this.email};o.default.addUser(n),t.showToast({title:"注册成功"}),t.navigateBack({delta:1})}}}};n.default=u}).call(this,e("543d")["default"])},da45:function(t,n,e){"use strict";e.r(n);var o=e("c3f8"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a}},[["e5e4","common/runtime","common/vendor"]]]);