webpackJsonp([20],{150:function(t,n,e){"use strict";e.d(n,"a",function(){return h});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),u=e.n(r),s=e(4),l=e.n(s),d=e(0),f=e.n(d),p=e(10),m=e.n(p),h=function(t){function n(){var e,o,i;c()(this,n);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=o=u()(this,t.call.apply(t,[this].concat(r))),o.handleClick=function(){o.props.onClick()},i=e,u()(o,i)}return l()(n,t),n.prototype.render=function(){var t=this.props,n=t.icon,e=t.type,o=t.active,a=t.columnHeaderId,c="";return n&&(c=i()("i",{className:"fa fa-fw fa-"+n+" column-header__icon"})),i()("h1",{className:m()("column-header",{active:o}),id:a||null},void 0,i()("button",{onClick:this.handleClick},void 0,c,e))},n}(f.a.PureComponent)},282:function(t,n,e){"use strict";function o(t){return function(n){n({type:a,account:t}),n(Object(i.d)("MUTE"))}}n.a=o;var i=(e(13),e(22),e(15),e(26)),a="MUTES_INIT_MODAL"},283:function(t,n,e){"use strict";e.d(n,"a",function(){return b});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),u=e.n(r),s=e(4),l=e.n(s),d=e(34),f=e.n(d),p=e(0),m=e.n(p),h=e(150),g=e(91),v=e(35),b=function(t){function n(){var e,o,i;c()(this,n);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=o=u()(this,t.call.apply(t,[this].concat(r))),o.handleHeaderClick=function(){var t=o.node.querySelector(".scrollable");t&&(o._interruptScrollAnimation=Object(g.b)(t))},o.handleScroll=f()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(t){o.node=t},i=e,u()(o,i)}return l()(n,t),n.prototype.scrollTop=function(){var t=this.node.querySelector(".scrollable");t&&(this._interruptScrollAnimation=Object(g.b)(t))},n.prototype.render=function(){var t=this.props,n=t.heading,e=t.icon,o=t.children,a=t.active,c=t.hideHeadingOnMobile,r=n&&(!c||c&&!Object(v.b)(window.innerWidth)),u=r&&n.replace(/ /g,"-"),s=r&&i()(h.a,{icon:e,active:a,type:n,onClick:this.handleHeaderClick,columnHeaderId:u});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":u,className:"column",onScroll:this.handleScroll},s,o)},n}(m.a.PureComponent)},287:function(t,n,e){"use strict";e.d(n,"a",function(){return b});var o,i,a=e(2),c=e.n(a),r=e(1),u=e.n(r),s=e(3),l=e.n(s),d=e(4),f=e.n(d),p=e(0),m=e.n(p),h=e(6),g=e(5),v=e.n(g),b=(i=o=function(t){function n(){var e,o,i;u()(this,n);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=l()(this,t.call.apply(t,[this].concat(c))),o.handleClick=function(){window.history&&1===window.history.length?o.context.router.history.push("/"):o.context.router.history.goBack()},i=e,l()(o,i)}return f()(n,t),n.prototype.render=function(){return c()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,c()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),c()(h.b,{id:"column_back_button.label",defaultMessage:"Back"}))},n}(m.a.PureComponent),o.contextTypes={router:v.a.object},i)},819:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),e.d(n,"default",function(){return A});var o,i,a,c,r=e(2),u=e.n(r),s=e(1),l=e.n(s),d=e(3),f=e.n(d),p=e(4),m=e.n(p),h=e(0),g=(e.n(h),e(9)),v=e(5),b=e.n(v),y=e(14),M=e.n(y),w=e(298),k=e(68),_=e(151),j=e(842),O=e(283),I=e(287),C=e(11),N=e.n(C),q=function(t,n){return{accountIds:t.getIn(["user_lists","favourited_by",n.params.statusId])}},A=(o=Object(g.connect)(q))((c=a=function(t){function n(){return l()(this,n),f()(this,t.apply(this,arguments))}return m()(n,t),n.prototype.componentWillMount=function(){this.props.dispatch(Object(k.j)(this.props.params.statusId))},n.prototype.componentWillReceiveProps=function(t){t.params.statusId!==this.props.params.statusId&&t.params.statusId&&this.props.dispatch(Object(k.j)(t.params.statusId))},n.prototype.render=function(){var t=this.props.accountIds;return t?u()(O.a,{},void 0,u()(I.a,{}),u()(_.a,{scrollKey:"favourites"},void 0,u()("div",{className:"scrollable"},void 0,t.map(function(t){return u()(j.a,{id:t,withNote:!1},t)})))):u()(O.a,{},void 0,u()(w.a,{}))},n}(N.a),a.propTypes={params:b.a.object.isRequired,dispatch:b.a.func.isRequired,accountIds:M.a.list},i=c))||i},842:function(t,n,e){"use strict";var o=e(2),i=e.n(o),a=e(0),c=(e.n(a),e(9)),r=e(6),u=e(67),s=e(843),l=e(22),d=e(26),f=e(282),p=e(12),m=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),h=function(){var t=Object(u.c)();return function(n,e){return{account:t(n,e.id)}}},g=function(t,n){var e=n.intl;return{onFollow:function(n){t(n.getIn(["relationship","following"])||n.getIn(["relationship","requested"])?p.j?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",n.get("acct"))}}),confirm:e.formatMessage(m.unfollowConfirm),onConfirm:function(){return t(Object(l.D)(n.get("id")))}}):Object(l.D)(n.get("id")):Object(l.z)(n.get("id")))},onBlock:function(n){t(n.getIn(["relationship","blocking"])?Object(l.C)(n.get("id")):Object(l.q)(n.get("id")))},onMute:function(n){t(n.getIn(["relationship","muting"])?Object(l.E)(n.get("id")):Object(f.a)(n))},onMuteNotifications:function(n,e){t(Object(l.A)(n.get("id"),e))}}};n.a=Object(r.g)(Object(c.connect)(h,g)(s.a))},843:function(t,n,e){"use strict";e.d(n,"a",function(){return N});var o,i,a,c=e(2),r=e.n(c),u=e(1),s=e.n(u),l=e(3),d=e.n(l),f=e(4),p=e.n(f),m=e(0),h=(e.n(m),e(14)),g=e.n(h),v=e(5),b=e.n(v),y=e(57),M=e(56),w=e(297),k=e(23),_=e(6),j=e(11),O=e.n(j),I=e(12),C=Object(_.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),N=Object(_.g)((a=i=function(t){function n(){var e,o,i;s()(this,n);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=d()(this,t.call.apply(t,[this].concat(c))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},o.handleMuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!0)},o.handleUnmuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!1)},i=e,d()(o,i)}return p()(n,t),n.prototype.render=function(){var t=this.props,n=t.account,e=t.intl,o=t.hidden;if(!n)return r()("div",{});if(o)return r()("div",{},void 0,n.get("display_name"),n.get("username"));var i=void 0;if(n.get("id")!==I.g&&null!==n.get("relationship",null)){var a=n.getIn(["relationship","following"]),c=n.getIn(["relationship","requested"]),u=n.getIn(["relationship","blocking"]),s=n.getIn(["relationship","muting"]);if(c)i=r()(k.a,{disabled:!0,icon:"hourglass",title:e.formatMessage(C.requested)});else if(u)i=r()(k.a,{active:!0,icon:"unlock-alt",title:e.formatMessage(C.unblock,{name:n.get("username")}),onClick:this.handleBlock});else if(s){var l=void 0;l=n.getIn(["relationship","muting_notifications"])?r()(k.a,{active:!0,icon:"bell",title:e.formatMessage(C.unmute_notifications,{name:n.get("username")}),onClick:this.handleUnmuteNotifications}):r()(k.a,{active:!0,icon:"bell-slash",title:e.formatMessage(C.mute_notifications,{name:n.get("username")}),onClick:this.handleMuteNotifications}),i=r()(m.Fragment,{},void 0,r()(k.a,{active:!0,icon:"volume-up",title:e.formatMessage(C.unmute,{name:n.get("username")}),onClick:this.handleMute}),l)}else n.get("moved")&&!a||(i=r()(k.a,{icon:a?"user-times":"user-plus",title:e.formatMessage(a?C.unfollow:C.follow),onClick:this.handleFollow,active:a}))}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(w.a,{className:"account__display-name",href:n.get("url"),to:"/accounts/"+n.get("id")},n.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(y.a,{account:n,size:36})),r()(M.a,{account:n})),r()("div",{className:"account__relationship"},void 0,i)))},n}(O.a),i.propTypes={account:g.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,onMuteNotifications:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=a))||o}});
//# sourceMappingURL=favourites.js.map