webpackJsonp([20],{150:function(n,t,e){"use strict";e.d(t,"a",function(){return h});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),u=e.n(r),s=e(4),l=e.n(s),d=e(0),f=e.n(d),p=e(10),m=e.n(p),h=function(n){function t(){var e,o,i;c()(this,t);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=o=u()(this,n.call.apply(n,[this].concat(r))),o.handleClick=function(){o.props.onClick()},i=e,u()(o,i)}return l()(t,n),t.prototype.render=function(){var n=this.props,t=n.icon,e=n.type,o=n.active,a=n.columnHeaderId,c="";return t&&(c=i()("i",{className:"fa fa-fw fa-"+t+" column-header__icon"})),i()("h1",{className:m()("column-header",{active:o}),id:a||null},void 0,i()("button",{onClick:this.handleClick},void 0,c,e))},t}(f.a.PureComponent)},283:function(n,t,e){"use strict";function o(n){return function(t){t({type:a,account:n}),t(Object(i.d)("MUTE"))}}t.a=o;var i=(e(13),e(22),e(15),e(26)),a="MUTES_INIT_MODAL"},284:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o=e(2),i=e.n(o),a=e(1),c=e.n(a),r=e(3),u=e.n(r),s=e(4),l=e.n(s),d=e(34),f=e.n(d),p=e(0),m=e.n(p),h=e(150),g=e(92),v=e(35),b=function(n){function t(){var e,o,i;c()(this,t);for(var a=arguments.length,r=Array(a),s=0;s<a;s++)r[s]=arguments[s];return e=o=u()(this,n.call.apply(n,[this].concat(r))),o.handleHeaderClick=function(){var n=o.node.querySelector(".scrollable");n&&(o._interruptScrollAnimation=Object(g.b)(n))},o.handleScroll=f()(function(){void 0!==o._interruptScrollAnimation&&o._interruptScrollAnimation()},200),o.setRef=function(n){o.node=n},i=e,u()(o,i)}return l()(t,n),t.prototype.scrollTop=function(){var n=this.node.querySelector(".scrollable");n&&(this._interruptScrollAnimation=Object(g.b)(n))},t.prototype.render=function(){var n=this.props,t=n.heading,e=n.icon,o=n.children,a=n.active,c=n.hideHeadingOnMobile,r=t&&(!c||c&&!Object(v.b)(window.innerWidth)),u=r&&t.replace(/ /g,"-"),s=r&&i()(h.a,{icon:e,active:a,type:t,onClick:this.handleHeaderClick,columnHeaderId:u});return m.a.createElement("div",{ref:this.setRef,role:"region","aria-labelledby":u,className:"column",onScroll:this.handleScroll},s,o)},t}(m.a.PureComponent)},288:function(n,t,e){"use strict";e.d(t,"a",function(){return b});var o,i,a=e(2),c=e.n(a),r=e(1),u=e.n(r),s=e(3),l=e.n(s),d=e(4),f=e.n(d),p=e(0),m=e.n(p),h=e(6),g=e(5),v=e.n(g),b=(i=o=function(n){function t(){var e,o,i;u()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=l()(this,n.call.apply(n,[this].concat(c))),o.handleClick=function(){window.history&&1===window.history.length?o.context.router.history.push("/"):o.context.router.history.goBack()},i=e,l()(o,i)}return f()(t,n),t.prototype.render=function(){return c()("button",{onClick:this.handleClick,className:"column-back-button"},void 0,c()("i",{className:"fa fa-fw fa-chevron-left column-back-button__icon"}),c()(h.b,{id:"column_back_button.label",defaultMessage:"Back"}))},t}(m.a.PureComponent),o.contextTypes={router:v.a.object},i)},826:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),e.d(t,"default",function(){return A});var o,i,a,c,r=e(2),u=e.n(r),s=e(1),l=e.n(s),d=e(3),f=e.n(d),p=e(4),m=e.n(p),h=e(0),g=(e.n(h),e(9)),v=e(5),b=e.n(v),y=e(14),M=e.n(y),k=e(299),w=e(68),_=e(151),j=e(858),O=e(284),I=e(288),C=e(11),N=e.n(C),q=function(n,t){return{accountIds:n.getIn(["user_lists","reblogged_by",t.params.statusId])}},A=(o=Object(g.connect)(q))((c=a=function(n){function t(){return l()(this,t),f()(this,n.apply(this,arguments))}return m()(t,n),t.prototype.componentWillMount=function(){this.props.dispatch(Object(w.k)(this.props.params.statusId))},t.prototype.componentWillReceiveProps=function(n){n.params.statusId!==this.props.params.statusId&&n.params.statusId&&this.props.dispatch(Object(w.k)(n.params.statusId))},t.prototype.render=function(){var n=this.props.accountIds;return n?u()(O.a,{},void 0,u()(I.a,{}),u()(_.a,{scrollKey:"reblogs"},void 0,u()("div",{className:"scrollable reblogs"},void 0,n.map(function(n){return u()(j.a,{id:n,withNote:!1},n)})))):u()(O.a,{},void 0,u()(k.a,{}))},t}(N.a),a.propTypes={params:b.a.object.isRequired,dispatch:b.a.func.isRequired,accountIds:M.a.list},i=c))||i},858:function(n,t,e){"use strict";var o=e(2),i=e.n(o),a=e(0),c=(e.n(a),e(9)),r=e(6),u=e(67),s=e(859),l=e(22),d=e(26),f=e(283),p=e(12),m=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),h=function(){var n=Object(u.c)();return function(t,e){return{account:n(t,e.id)}}},g=function(n,t){var e=t.intl;return{onFollow:function(t){n(t.getIn(["relationship","following"])||t.getIn(["relationship","requested"])?p.j?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:e.formatMessage(m.unfollowConfirm),onConfirm:function(){return n(Object(l.D)(t.get("id")))}}):Object(l.D)(t.get("id")):Object(l.z)(t.get("id")))},onBlock:function(t){n(t.getIn(["relationship","blocking"])?Object(l.C)(t.get("id")):Object(l.q)(t.get("id")))},onMute:function(t){n(t.getIn(["relationship","muting"])?Object(l.E)(t.get("id")):Object(f.a)(t))},onMuteNotifications:function(t,e){n(Object(l.A)(t.get("id"),e))}}};t.a=Object(r.g)(Object(c.connect)(h,g)(s.a))},859:function(n,t,e){"use strict";e.d(t,"a",function(){return N});var o,i,a,c=e(2),r=e.n(c),u=e(1),s=e.n(u),l=e(3),d=e.n(l),f=e(4),p=e.n(f),m=e(0),h=(e.n(m),e(14)),g=e.n(h),v=e(5),b=e.n(v),y=e(57),M=e(56),k=e(298),w=e(23),_=e(6),j=e(11),O=e.n(j),I=e(12),C=Object(_.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),N=Object(_.g)((a=i=function(n){function t(){var e,o,i;s()(this,t);for(var a=arguments.length,c=Array(a),r=0;r<a;r++)c[r]=arguments[r];return e=o=d()(this,n.call.apply(n,[this].concat(c))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},o.handleMuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!0)},o.handleUnmuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!1)},i=e,d()(o,i)}return p()(t,n),t.prototype.render=function(){var n=this.props,t=n.account,e=n.intl,o=n.hidden;if(!t)return r()("div",{});if(o)return r()("div",{},void 0,t.get("display_name"),t.get("username"));var i=void 0;if(t.get("id")!==I.g&&null!==t.get("relationship",null)){var a=t.getIn(["relationship","following"]),c=t.getIn(["relationship","requested"]),u=t.getIn(["relationship","blocking"]),s=t.getIn(["relationship","muting"]);if(c)i=r()(w.a,{disabled:!0,icon:"hourglass",title:e.formatMessage(C.requested)});else if(u)i=r()(w.a,{active:!0,icon:"unlock-alt",title:e.formatMessage(C.unblock,{name:t.get("username")}),onClick:this.handleBlock});else if(s){var l=void 0;l=t.getIn(["relationship","muting_notifications"])?r()(w.a,{active:!0,icon:"bell",title:e.formatMessage(C.unmute_notifications,{name:t.get("username")}),onClick:this.handleUnmuteNotifications}):r()(w.a,{active:!0,icon:"bell-slash",title:e.formatMessage(C.mute_notifications,{name:t.get("username")}),onClick:this.handleMuteNotifications}),i=r()(m.Fragment,{},void 0,r()(w.a,{active:!0,icon:"volume-up",title:e.formatMessage(C.unmute,{name:t.get("username")}),onClick:this.handleMute}),l)}else t.get("moved")&&!a||(i=r()(w.a,{icon:a?"user-times":"user-plus",title:e.formatMessage(a?C.unfollow:C.follow),onClick:this.handleFollow,active:a}))}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(k.a,{className:"account__display-name",href:t.get("url"),to:"/accounts/"+t.get("id")},t.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(y.a,{account:t,size:36})),r()(M.a,{account:t})),r()("div",{className:"account__relationship"},void 0,i)))},t}(O.a),i.propTypes={account:g.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,onMuteNotifications:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=a))||o}});
//# sourceMappingURL=reblogs.js.map