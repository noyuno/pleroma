webpackJsonp([18],{151:function(n,t,e){"use strict";e.d(t,"a",function(){return m});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),l=e.n(r),u=e(4),s=e.n(u),d=e(0),f=e.n(d),p=e(10),h=e.n(p),m=function(n){function t(){var e,o,i;c()(this,t);for(var a=arguments.length,r=Array(a),u=0;u<a;u++)r[u]=arguments[u];return e=o=l()(this,n.call.apply(n,[this].concat(r))),o.handleClick=function(){o.props.onClick()},i=e,l()(o,i)}return s()(t,n),t.prototype.render=function(){var n=this.props,t=n.icon,e=n.type,o=n.active,a=n.columnHeaderId,c="";return t&&(c=i()("i",{className:"fa fa-fw fa-"+t+" column-header__icon"})),i()("h1",{className:h()("column-header",{active:o}),id:a||null},void 0,i()("button",{onClick:this.handleClick},void 0,c,e))},t}(f.a.PureComponent)},283:function(n,t,e){"use strict";function o(n){return function(t){t({type:a,account:n}),t(Object(i.d)("MUTE"))}}t.a=o;var i=(e(13),e(22),e(15),e(26)),a="MUTES_INIT_MODAL"},284:function(n,t,e){"use strict";e.d(t,"a",function(){return v});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),l=e.n(r),u=e(4),s=e.n(u),d=e(34),f=e.n(d),p=e(0),h=e.n(p),m=e(151),g=e(91),b=e(35),v=function(n){function t(){var e,o,i;c()(this,t);for(var a=arguments.length,r=Array(a),u=0;u<a;u++)r[u]=arguments[u];return e=o=l()(this,n.call.apply(n,[this].concat(r))),o.handleHeaderClick=function(){var n=o.node.querySelector(".scrollable");n&&(o._interruptScrollAnimation=Object(g.b)(n))},o.handleScroll=f()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(n){o.node=n},i=e,l()(o,i)}return s()(t,n),t.prototype.scrollTop=function(){var n=this.node.querySelector(".scrollable");n&&(this._interruptScrollAnimation=Object(g.b)(n))},t.prototype.render=function(){var n=this.props,t=n.heading,e=n.icon,o=n.children,a=n.active,c=n.hideHeadingOnMobile,r=t&&(!c||c&&!Object(b.b)(window.innerWidth)),l=r&&t.replace(/ /g,"-"),u=r&&i()(m.a,{icon:e,active:a,type:t,onClick:this.handleHeaderClick,columnHeaderId:l});return h.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":l,className:"column",onScroll:this.handleScroll},u,o)},t}(h.a.PureComponent)},286:function(n,t,e){"use strict";e.d(t,"a",function(){return v});var o,i,a=e(2),c=e.n(a),r=e(1),l=e.n(r),u=e(3),s=e.n(u),d=e(4),f=e.n(d),p=e(0),h=e.n(p),m=e(6),g=e(5),b=e.n(g),v=(i=o=function(n){function t(){var e,o,i;l()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=s()(this,n.call.apply(n,[this].concat(c))),o.handleClick=function(){window.history&&1===window.history.length?o.context.router.history.push("/"):o.context.router.history.goBack()},i=e,s()(o,i)}return f()(t,n),t.prototype.render=function(){return c()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,c()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),c()(m.b,{id:"column_back_button.label",defaultMessage:"Back"}))},t}(h.a.PureComponent),o.contextTypes={router:b.a.object},i)},300:function(n,t,e){"use strict";e.d(t,"a",function(){return h});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),l=e.n(r),u=e(4),s=e.n(u),d=e(0),f=(e.n(d),e(6)),p=e(286),h=function(n){function t(){return c()(this,t),l()(this,n.apply(this,arguments))}return s()(t,n),t.prototype.render=function(){return i()("div",{className:"column-back-button--slim"},void 0,i()("div",{role:"button",tabIndex:"0",onClick:this.handleClick,className:"column-back-button column-back-button--slim-button"},void 0,i()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),i()(f.b,{id:"column_back_button.label",defaultMessage:"Back"})))},t}(p.a)},825:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"default",function(){return R});var o,i,a,c,r=e(2),l=e.n(r),u=e(1),s=e.n(u),d=e(3),f=e.n(d),p=e(4),h=e.n(p),m=e(0),g=(e.n(m),e(9)),b=e(14),v=e.n(b),k=e(5),M=e.n(k),y=e(299),w=e(152),_=e(284),j=e(300),O=e(844),C=e(336),N=e(6),I=e(11),q=e.n(I),A=Object(N.f)({heading:{id:"column.blocks",defaultMessage:"Blocked users"}}),S=function(n){return{accountIds:n.getIn(["user_lists","blocks","items"])}},R=(o=Object(g.connect)(S))(i=Object(N.g)((c=a=function(n){function t(){var e,o,i;s()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=f()(this,n.call.apply(n,[this].concat(c))),o.handleScroll=function(n){var t=n.target;t.scrollTop===t.scrollHeight-t.clientHeight&&o.props.dispatch(Object(C.c)())},i=e,f()(o,i)}return h()(t,n),t.prototype.componentWillMount=function(){this.props.dispatch(Object(C.d)())},t.prototype.render=function(){var n=this.props,t=n.intl,e=n.accountIds;return e?l()(_.a,{icon:"ban",heading:t.formatMessage(A.heading)},void 0,l()(j.a,{}),l()(w.a,{scrollKey:"blocks"},void 0,l()("div",{className:"scrollable",onScroll:this.handleScroll},void 0,e.map(function(n){return l()(O.a,{id:n},n)})))):l()(_.a,{},void 0,l()(y.a,{}))},t}(q.a),a.propTypes={params:M.a.object.isRequired,dispatch:M.a.func.isRequired,accountIds:v.a.list,intl:M.a.object.isRequired},i=c))||i)||i},844:function(n,t,e){"use strict";var o=e(2),i=e.n(o),a=e(0),c=(e.n(a),e(9)),r=e(6),l=e(67),u=e(845),s=e(22),d=e(26),f=e(283),p=e(12),h=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),m=function(){var n=Object(l.c)();return function(t,e){return{account:n(t,e.id)}}},g=function(n,t){var e=t.intl;return{onFollow:function(t){n(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?p.j?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:e.formatMessage(h.unfollowConfirm),onConfirm:function(){return n(Object(s.D)(t.get("id")))}}):Object(s.D)(t.get("id")):Object(s.z)(t.get("id")))},onBlock:function(t){n(t.getIn(["relationship","blocking"])?Object(s.C)(t.get("id")):Object(s.q)(t.get("id")))},onMute:function(t){n(t.getIn(["relationship","muting"])?Object(s.E)(t.get("id")):Object(f.a)(t))},onMuteNotifications:function(t,e){n(Object(s.A)(t.get("id"),e))}}};t.a=Object(r.g)(Object(c.connect)(m,g)(u.a))},845:function(n,t,e){"use strict";e.d(t,"a",function(){return I});var o,i,a,c=e(2),r=e.n(c),l=e(1),u=e.n(l),s=e(3),d=e.n(s),f=e(4),p=e.n(f),h=e(0),m=(e.n(h),e(14)),g=e.n(m),b=e(5),v=e.n(b),k=e(57),M=e(56),y=e(298),w=e(23),_=e(6),j=e(11),O=e.n(j),C=e(12),N=Object(_.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),I=Object(_.g)((a=i=function(n){function t(){var e,o,i;u()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=d()(this,n.call.apply(n,[this].concat(c))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},o.handleMuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!0)},o.handleUnmuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!1)},i=e,d()(o,i)}return p()(t,n),t.prototype.render=function(){var n=this.props,t=n.account,e=n.intl,o=n.hidden;if(!t)return r()("div",{});if(o)return r()("div",{},void 0,t.get("display_name"),t.get("username"));var i=void 0;if(t.get("id")!==C.g&&null!==t.get("relationship",null)){var a=t.getIn(["relationship","following"]),c=t.getIn(["relationship","requested"]),l=t.getIn(["relationship","blocking"]),u=t.getIn(["relationship","muting"]);if(c)i=r()(w.a,{disabled:!0,icon:"hourglass",title:e.formatMessage(N.requested)});else if(l)i=r()(w.a,{active:!0,icon:"unlock-alt",title:e.formatMessage(N.unblock,{name:t.get("username")}),onClick:this.handleBlock});else if(u){var s=void 0;s=t.getIn(["relationship","muting_notifications"])?r()(w.a,{active:!0,icon:"bell",title:e.formatMessage(N.unmute_notifications,{name:t.get("username")}),onClick:this.handleUnmuteNotifications}):r()(w.a,{active:!0,icon:"bell-slash",title:e.formatMessage(N.mute_notifications,{name:t.get("username")}),onClick:this.handleMuteNotifications}),i=r()(h.Fragment,{},void 0,r()(w.a,{active:!0,icon:"volume-up",title:e.formatMessage(N.unmute,{name:t.get("username")}),onClick:this.handleMute}),s)}else t.get("moved")&&!a||(i=r()(w.a,{icon:a?"user-times":"user-plus",title:e.formatMessage(a?N.unfollow:N.follow),onClick:this.handleFollow,active:a}))}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(y.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(k.a,{account:t,size:36})),r()(M.a,{account:t})),r()("div",{className:"account__relationship"},void 0,i)))},t}(O.a),i.propTypes={account:g.a.map.isRequired,onFollow:v.a.func.isRequired,onBlock:v.a.func.isRequired,onMute:v.a.func.isRequired,onMuteNotifications:v.a.func.isRequired,intl:v.a.object.isRequired,hidden:v.a.bool},o=a))||o}});
//# sourceMappingURL=blocks.js.map