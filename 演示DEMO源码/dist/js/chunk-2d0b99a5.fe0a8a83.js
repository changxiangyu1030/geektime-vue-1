(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b99a5"],{"343a":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("a-tabs",[o("a-tab-pane",{key:"Directives",attrs:{tab:"内置指令"}},[o("Directives")],1),o("a-tab-pane",{key:"CustomerDirectives",attrs:{tab:"自定义指令"}},[o("CustomerDirectives")],1)],1)},l=[],s=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("h2",[e._v("v-text")]),o("div",{domProps:{textContent:e._s("hello vue")}},[e._v("hello world")]),o("h2",[e._v("v-html")]),o("div",{domProps:{innerHTML:e._s('<span style="color: red">hello vue</span>')}},[e._v("\n    hello world\n  ")]),o("h2",[e._v("v-show")]),o("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}]},[e._v("hello vue")]),o("button",{on:{click:function(n){e.show=!e.show}}},[e._v("change show")]),o("h2",[e._v("v-if v-esle-if v-else")]),1===e.number?o("div",[e._v("hello vue "+e._s(e.number))]):2===e.number?o("div",[e._v("hello world "+e._s(e.number))]):o("div",[e._v("hello geektime "+e._s(e.number))]),o("h2",[e._v("v-for v-bind")]),e._l([1,2,3],function(n){return o("div",{key:n},[e._v("hello vue "+e._s(n))])}),o("h2",[e._v("v-on")]),o("button",{on:{click:function(n){e.number=e.number+1}}},[e._v("number++")]),o("h2",[e._v("v-model")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],domProps:{value:e.message},on:{input:function(n){n.target.composing||(e.message=n.target.value)}}}),o("h2",[e._v("v-pre")]),o("div",{pre:!0},[e._v("{{ this will not be compiled }}")]),o("h2",[e._v("v-once")]),e._m(0)],2)},i=[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[e._v("\n    "+e._s(e.number)+"\n  ")])}],r={data:function(){return this.log=window.console.log,{show:!0,number:1,message:"hello"}}},u=r,v=o("2877"),c=Object(v["a"])(u,s,i,!1,null,null,null),a=c.exports,d=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("button",{on:{click:function(n){e.show=!e.show}}},[e._v("\n    销毁\n  ")]),e.show?o("button",{directives:[{name:"append-text",rawName:"v-append-text",value:"hello "+e.number,expression:"`hello ${number}`"}],on:{click:function(n){e.number++}}},[e._v("\n    按钮\n  ")]):e._e()])},h=[],m={directives:{appendText:{bind:function(){console.log("bind")},inserted:function(e,n){e.appendChild(document.createTextNode(n.value)),console.log("inserted",e,n)},update:function(){console.log("update")},componentUpdated:function(e,n){e.removeChild(e.childNodes[e.childNodes.length-1]),e.appendChild(document.createTextNode(n.value)),console.log("componentUpdated")},unbind:function(){console.log("unbind")}}},data:function(){return{number:1,show:!0}}},p=m,_=Object(v["a"])(p,d,h,!1,null,null,null),b=_.exports,w={components:{Directives:a,CustomerDirectives:b}},f=w,g=Object(v["a"])(f,t,l,!1,null,null,null);n["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d0b99a5.fe0a8a83.js.map