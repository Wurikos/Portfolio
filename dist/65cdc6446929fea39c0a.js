(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{670:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this.$createElement;this._self._c;return this._m(0)};function a(t,e,n,r,a,o,s){try{var i=t[o](s),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,a)}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}r._withStripped=!0;var s={data:function(){return{categoryTitle:""}},methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),r.forEach(function(e){o(t,e,n[e])})}return t}({},mapActions("categories",["addCategory"]),{addSkillCategory:function(){var t,e=(t=regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("a"),t.prev=1,t.next=4,this.addCategory(this.categoryTitle);case 4:e=t.sent,console.log(e),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(1);case 10:case"end":return t.stop()}},t,this,[[1,8]])}),function(){var e=this,n=arguments;return new Promise(function(r,o){var s=t.apply(e,n);function i(t){a(s,r,o,i,c,"next",t)}function c(t){a(s,r,o,i,c,"throw",t)}i(void 0)})});return function(){return e.apply(this,arguments)}}()})},i=n(73),c=Object(i.a)(s,r,[function(){var t=this.$createElement,e=this._self._c||t;return e("form",{staticClass:"aboutme aboutme--new"},[e("div",{staticClass:"form__head"},[e("div",{staticClass:"form__skill-group"},[e("input",{staticClass:"form__group-name",attrs:{type:"text",name:"name",placeholder:"Название новой группы"}})]),e("div",{staticClass:"form__btn-group"},[e("button",{staticClass:"form__btn__icon-accept",attrs:{type:"button"}}),e("button",{staticClass:"form__btn__icon-close",attrs:{type:"button"}})])]),e("hr",{staticClass:"form-divider"}),e("div",{staticClass:"form__content"},[e("div",{staticClass:"form__skill-newitem"},[e("input",{staticClass:"form__skill-name",attrs:{type:"text",name:"name",placeholder:"Новый навык"}}),e("input",{staticClass:"item__skill-value",attrs:{type:"number",name:"name",min:"0",max:"100",placeholder:"100"}}),e("button",{staticClass:"new__item-confirm",attrs:{type:"button"}},[e("div",{staticClass:"new__item-confirm-plus"},[this._v("+")])])])])])}],!1,null,null,null);c.options.__file="src/admin/components/about-form.vue";e.default=c.exports}}]);