webpackJsonp([24],{151:function(n,e,i){"use strict";i.d(e,"a",function(){return v});var t=i(2),r=i.n(t),o=i(1),a=i.n(o),c=i(3),l=i.n(c),u=i(4),s=i.n(u),d=i(0),f=i.n(d),h=i(10),p=i.n(h),v=function(n){function e(){var i,t,r;a()(this,e);for(var o=arguments.length,c=Array(o),u=0;u<o;u++)c[u]=arguments[u];return i=t=l()(this,n.call.apply(n,[this].concat(c))),t.handleClick=function(){t.props.onClick()},r=i,l()(t,r)}return s()(e,n),e.prototype.render=function(){var n=this.props,e=n.icon,i=n.type,t=n.active,o=n.columnHeaderId,a="";return e&&(a=r()("i",{className:"fa fa-fw fa-"+e+" column-header__icon"})),r()("h1",{className:p()("column-header",{active:t}),id:o||null},void 0,r()("button",{onClick:this.handleClick},void 0,a,i))},e}(f.a.PureComponent)},284:function(n,e,i){"use strict";i.d(e,"a",function(){return g});var t=i(2),r=i.n(t),o=i(1),a=i.n(o),c=i(3),l=i.n(c),u=i(4),s=i.n(u),d=i(34),f=i.n(d),h=i(0),p=i.n(h),v=i(151),b=i(91),m=i(35),g=function(n){function e(){var i,t,r;a()(this,e);for(var o=arguments.length,c=Array(o),u=0;u<o;u++)c[u]=arguments[u];return i=t=l()(this,n.call.apply(n,[this].concat(c))),t.handleHeaderClick=function(){var n=t.node.querySelector(".scrollable");n&&(t._interruptScrollAnimation=Object(b.b)(n))},t.handleScroll=f()(function(){void 0!==t._interruptScrollAnimation&&t._interruptScrollAnimation()},200),t.setRef=function(n){t.node=n},r=i,l()(t,r)}return s()(e,n),e.prototype.scrollTop=function(){var n=this.node.querySelector(".scrollable");n&&(this._interruptScrollAnimation=Object(b.b)(n))},e.prototype.render=function(){var n=this.props,e=n.heading,i=n.icon,t=n.children,o=n.active,a=n.hideHeadingOnMobile,c=e&&(!a||a&&!Object(m.b)(window.innerWidth)),l=c&&e.replace(/ /g,"-"),u=c&&r()(v.a,{icon:i,active:o,type:e,onClick:this.handleHeaderClick,columnHeaderId:l});return p.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},u,t)},e}(p.a.PureComponent)},823:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=i(2),r=i.n(t),o=i(0),a=(i.n(o),i(284)),c=i(846),l=function(){return r()(a.a,{},void 0,r()(c.a,{}))};e.default=l},846:function(n,e,i){"use strict";var t=i(2),r=i.n(t),o=i(0),a=(i.n(o),i(6)),c=function(){return r()("div",{className:"regeneration-indicator missing-indicator"},void 0,r()("div",{},void 0,r()("div",{className:"regeneration-indicator__label"},void 0,r()(a.b,{id:"missing_indicator.label",tagName:"strong",defaultMessage:"Not found"}),r()(a.b,{id:"missing_indicator.sublabel",defaultMessage:"This resource could not be found"}))))};e.a=c}});
//# sourceMappingURL=generic_not_found.js.map