webpackJsonp([5],{283:function(t,e,n){"use strict";function o(){return function(t,e){t(i()),Object(h.a)(e).get("/api/v1/mutes").then(function(e){var n=Object(h.b)(e).refs.find(function(t){return"next"===t.rel});t(Object(g.g)(e.data)),t(a(e.data,n?n.uri:null)),t(Object(p.y)(e.data.map(function(t){return t.id})))}).catch(function(e){return t(s(e))})}}function i(){return{type:m}}function a(t,e){return{type:b,accounts:t,next:e}}function s(t){return{type:y,error:t}}function r(){return function(t,e){var n=e().getIn(["user_lists","mutes","next"]);null!==n&&(t(c()),Object(h.a)(e).get(n).then(function(e){var n=Object(h.b)(e).refs.find(function(t){return"next"===t.rel});t(Object(g.g)(e.data)),t(l(e.data,n?n.uri:null)),t(Object(p.y)(e.data.map(function(t){return t.id})))}).catch(function(e){return t(u(e))}))}}function c(){return{type:M}}function l(t,e){return{type:O,accounts:t,next:e}}function u(t){return{type:_,error:t}}function d(t){return function(e){e({type:C,account:t}),e(Object(v.d)("MUTE"))}}function f(){return function(t){t({type:k})}}e.b=o,e.a=r,e.c=d,e.d=f;var h=n(13),p=n(22),g=n(15),v=n(26),m="MUTES_FETCH_REQUEST",b="MUTES_FETCH_SUCCESS",y="MUTES_FETCH_FAIL",M="MUTES_EXPAND_REQUEST",O="MUTES_EXPAND_SUCCESS",_="MUTES_EXPAND_FAIL",C="MUTES_INIT_MODAL",k="MUTES_TOGGLE_HIDE_NOTIFICATIONS"},285:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var o,i,a=n(2),s=n.n(a),r=n(1),c=n.n(r),l=n(3),u=n.n(l),d=n(4),f=n.n(d),h=n(0),p=n.n(h),g=n(6),v=(i=o=function(t){function e(){return c()(this,e),u()(this,t.apply(this,arguments))}return f()(e,t),e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.visible;return s()("button",{className:"load-more",disabled:e||!n,style:{visibility:n?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},e}(p.a.PureComponent),o.defaultProps={visible:!0},i)},287:function(t,e,n){"use strict";function o(t,e){return function(n){n({type:h,account:t,status:e}),n(Object(f.d)("REPORT"))}}function i(t,e){return{type:m,statusId:t,checked:e}}function a(){return function(t,e){t(s()),Object(d.a)(e).post("/api/v1/reports",{account_id:e().getIn(["reports","new","account_id"]),status_ids:e().getIn(["reports","new","status_ids"]),comment:e().getIn(["reports","new","comment"]),forward:e().getIn(["reports","new","forward"])}).then(function(e){t(Object(f.c)()),t(r(e.data))}).catch(function(e){return t(c(e))})}}function s(){return{type:p}}function r(t){return{type:g,report:t}}function c(t){return{type:v,error:t}}function l(t){return{type:b,comment:t}}function u(t){return{type:y,forward:t}}e.c=o,e.e=i,e.d=a,e.a=l,e.b=u;var d=n(13),f=n(26),h="REPORT_INIT",p="REPORT_SUBMIT_REQUEST",g="REPORT_SUBMIT_SUCCESS",v="REPORT_SUBMIT_FAIL",m="REPORT_STATUS_TOGGLE",b="REPORT_COMMENT_CHANGE",y="REPORT_FORWARD_CHANGE"},288:function(t,e,n){"use strict";var o=n(2),i=n.n(o),a=n(0),s=(n.n(a),n(9)),r=n(152),c=n(67),l=n(18),u=n(68),d=n(22),f=n(91),h=n(283),p=n(287),g=n(26),v=n(6),m=n(12),b=(n(36),Object(v.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"}})),y=function(){var t=Object(c.e)();return function(e,n){return{status:t(e,n.id)}}},M=function(t,e){var n=e.intl;return{onReply:function(e,n){t(Object(l.T)(e,n))},onModalReblog:function(e){t(Object(u.l)(e))},onReblog:function(e,n){e.get("reblogged")?t(Object(u.n)(e)):n.shiftKey||!m.b?this.onModalReblog(e):t(Object(g.d)("BOOST",{status:e,onReblog:this.onModalReblog}))},onFavourite:function(e){t(e.get("favourited")?Object(u.m)(e):Object(u.i)(e))},onDelete:function(e){t(m.e?Object(g.d)("CONFIRM",{message:n.formatMessage(b.deleteMessage),confirm:n.formatMessage(b.deleteConfirm),onConfirm:function(){return t(Object(f.f)(e.get("id")))}}):Object(f.f)(e.get("id")))},onDirect:function(e,n){t(Object(l.N)(e,n))},onMention:function(e,n){t(Object(l.R)(e,n))},onOpenMedia:function(e,n){t(Object(g.d)("MEDIA",{media:e,index:n}))},onOpenVideo:function(e,n){t(Object(g.d)("VIDEO",{media:e,time:n}))},onBlock:function(e){t(Object(g.d)("CONFIRM",{message:i()(v.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",e.get("acct"))}}),confirm:n.formatMessage(b.blockConfirm),onConfirm:function(){return t(Object(d.q)(e.get("id")))}}))},onReport:function(e){t(Object(p.c)(e.get("account"),e))},onMute:function(e){t(Object(h.c)(e))},onMuteConversation:function(e){t(e.get("muted")?Object(f.k)(e.get("id")):Object(f.i)(e.get("id")))},onToggleHidden:function(e){t(e.get("hidden")?Object(f.j)(e.get("id")):Object(f.h)(e.get("id")))}}};e.a=Object(v.g)(Object(s.connect)(y,M)(r.a))},289:function(t,e,n){"use strict";n.d(e,"a",function(){return I});var o,i,a=n(2),s=n.n(a),r=n(1),c=n.n(r),l=n(3),u=n.n(l),d=n(4),f=n.n(d),h=n(93),p=n.n(h),g=n(0),v=n.n(g),m=n(151),b=n(5),y=n.n(b),M=n(290),O=n(285),_=n(295),C=n(8),k=(n.n(C),n(10)),w=n.n(k),j=n(153),I=(i=o=function(t){function e(){var n,o,i;c()(this,e);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=u()(this,t.call.apply(t,[this].concat(s))),o.state={fullscreen:null},o.intersectionObserverWrapper=new _.a,o.handleScroll=p()(function(){if(o.node){var t=o.node,e=t.scrollTop;400>t.scrollHeight-e-t.clientHeight&&o.props.onLoadMore&&!o.props.isLoading&&o.props.onLoadMore(),e<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.onFullScreenChange=function(){o.setState({fullscreen:Object(j.d)()})},o.setRef=function(t){o.node=t},o.handleLoadMore=function(t){t.preventDefault(),o.props.onLoadMore()},i=n,u()(o,i)}return f()(e,t),e.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(j.a)(this.onFullScreenChange),this.handleScroll()},e.prototype.getSnapshotBeforeUpdate=function(t){return v.a.Children.count(t.children)>0&&v.a.Children.count(t.children)<v.a.Children.count(this.props.children)&&this.getFirstChildKey(t)!==this.getFirstChildKey(this.props)&&this.node.scrollTop>0?this.node.scrollHeight-this.node.scrollTop:null},e.prototype.componentDidUpdate=function(t,e,n){if(null!==n){var o=this.node.scrollHeight-n;this.node.scrollTop!==o&&(this.node.scrollTop=o)}},e.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(j.b)(this.onFullScreenChange)},e.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},e.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},e.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},e.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},e.prototype.getFirstChildKey=function(t){var e=t.children,n=e;return e instanceof C.List?n=e.get(0):Array.isArray(e)&&(n=e[0]),n&&n.key},e.prototype.render=function(){var t=this,e=this.props,n=e.children,o=e.scrollKey,i=e.trackScroll,a=e.shouldUpdateScroll,r=e.isLoading,c=e.hasMore,l=e.prepend,u=e.emptyMessage,d=e.onLoadMore,f=this.state.fullscreen,h=v.a.Children.count(n),p=c&&h>0&&d?s()(O.a,{visible:!r,onClick:this.handleLoadMore}):null,g=null;return g=r||h>0||!u?v.a.createElement("div",{className:w()("scrollable",{fullscreen:f}),ref:this.setRef},s()("div",{role:"feed",className:"item-list"},void 0,l,v.a.Children.map(this.props.children,function(e,n){return s()(M.a,{id:e.key,index:n,listLength:h,intersectionObserverWrapper:t.intersectionObserverWrapper,saveHeightKey:i?t.context.router.route.location.key+":"+o:null},e.key,e)}),p)):v.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),i?s()(m.a,{scrollKey:o,shouldUpdateScroll:a},void 0,g):g},e}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},290:function(t,e,n){"use strict";var o=n(9),i=n(291),a=n(94),s=function(t,e){return{cachedHeight:t.getIn(["height_cache",e.saveHeightKey,e.id])}},r=function(t){return{onHeightChange:function(e,n,o){t(Object(a.d)(e,n,o))}}};e.a=Object(o.connect)(s,r)(i.a)},291:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var o=n(1),i=n.n(o),a=n(3),s=n.n(a),r=n(4),c=n.n(r),l=n(0),u=n.n(l),d=n(292),f=n(294),h=n(8),p=(n.n(h),["id","index","listLength"]),g=["id","index","listLength","cachedHeight"],v=function(t){function e(){var n,o,a;i()(this,e);for(var r=arguments.length,c=Array(r),l=0;l<r;l++)c[l]=arguments[l];return n=o=s()(this,t.call.apply(t,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(t){o.entry=t,Object(d.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(t){return t.isIntersecting&&!o.entry.isIntersecting&&Object(d.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var t=o.props,e=t.onHeightChange,n=t.saveHeightKey,i=t.id;o.height=Object(f.a)(o.entry).height,e&&n&&e(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(t){return{isHidden:!t.isIntersecting}})},o.handleRef=function(t){o.node=t},a=n,s()(o,a)}return c()(e,t),e.prototype.shouldComponentUpdate=function(t,e){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(e.isIntersecting||!e.isHidden&&!t.cachedHeight)||!(o?g:p).every(function(e){return Object(h.is)(t[e],n.props[e])})},e.prototype.componentDidMount=function(){var t=this.props,e=t.intersectionObserverWrapper,n=t.id;e.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},e.prototype.componentWillUnmount=function(){var t=this.props,e=t.intersectionObserverWrapper,n=t.id;e.unobserve(n,this.node),this.componentMounted=!1},e.prototype.render=function(){var t=this.props,e=t.children,n=t.id,o=t.index,i=t.listLength,a=t.cachedHeight,s=this.state,r=s.isIntersecting,c=s.isHidden;return r||!c&&!a?u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},e&&u.a.cloneElement(e,{hidden:!1})):u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||a)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},e&&u.a.cloneElement(e,{hidden:!0}))},e}(u.a.Component)},292:function(t,e,n){"use strict";function o(t){for(;r.length&&t.timeRemaining()>0;)r.shift()();r.length?requestIdleCallback(o):c=!1}function i(t){r.push(t),c||(c=!0,requestIdleCallback(o))}var a=n(293),s=n.n(a),r=new s.a,c=!1;e.a=i},293:function(t,e,n){"use strict";function o(){this.length=0}o.prototype.push=function(t){var e={item:t};this.last?this.last=this.last.next=e:this.last=this.first=e,this.length++},o.prototype.shift=function(){var t=this.first;if(t)return this.first=t.next,--this.length||(this.last=void 0),t.item},o.prototype.slice=function(t,e){t=void 0===t?0:t,e=void 0===e?1/0:e;for(var n=[],o=0,i=this.first;i&&!(--e<0);i=i.next)++o>t&&n.push(i.item);return n},t.exports=o},294:function(t,e,n){"use strict";function o(t){if("boolean"!=typeof i){var e=t.target.getBoundingClientRect(),n=t.boundingClientRect;i=e.height!==n.height||e.top!==n.top||e.width!==n.width||e.bottom!==n.bottom||e.left!==n.left||e.right!==n.right}return i?t.target.getBoundingClientRect():t.boundingClientRect}var i=void 0;e.a=o},295:function(t,e,n){"use strict";var o=n(1),i=n.n(o),a=function(){function t(){i()(this,t),this.callbacks={},this.observerBacklog=[],this.observer=null}return t.prototype.connect=function(t){var e=this,n=function(t){t.forEach(function(t){var n=t.target.getAttribute("data-id");e.callbacks[n]&&e.callbacks[n](t)})};this.observer=new IntersectionObserver(n,t),this.observerBacklog.forEach(function(t){var n=t[0],o=t[1],i=t[2];e.observe(n,o,i)}),this.observerBacklog=null},t.prototype.observe=function(t,e,n){this.observer?(this.callbacks[t]=n,this.observer.observe(e)):this.observerBacklog.push([t,e,n])},t.prototype.unobserve=function(t,e){this.observer&&(delete this.callbacks[t],this.observer.unobserve(e))},t.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},t}();e.a=a},296:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var o,i=n(2),a=n.n(i),s=n(1),r=n.n(s),c=n(3),l=n.n(c),u=n(4),d=n.n(u),f=n(0),h=n.n(f),p=n(6),g=Object(p.f)({load_more:{id:"status.load_more",defaultMessage:"Load more"}}),v=Object(p.g)(o=function(t){function e(){var n,o,i;r()(this,e);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return n=o=l()(this,t.call.apply(t,[this].concat(s))),o.handleClick=function(){o.props.onClick(o.props.maxId)},i=n,l()(o,i)}return d()(e,t),e.prototype.render=function(){var t=this.props,e=t.disabled,n=t.intl;return a()("button",{className:"load-more load-gap",disabled:e,onClick:this.handleClick,"aria-label":n.formatMessage(g.load_more)},void 0,a()("i",{className:"fa fa-ellipsis-h"}))},e}(h.a.PureComponent))||o},813:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"default",function(){return R});var o,i,a,s,r=n(2),c=n.n(r),l=n(1),u=n.n(l),d=n(3),f=n.n(d),h=n(4),p=n.n(h),g=n(34),v=n.n(g),m=n(0),b=n.n(m),y=n(9),M=n(70),O=n(69),_=n(101),C=n(301),k=n(980),w=n(6),j=n(982),I=n(95),S=(n.n(I),n(8)),T=(n.n(S),n(289)),N=n(296),E=Object(w.f)({title:{id:"column.notifications",defaultMessage:"Notifications"}}),P=Object(I.createSelector)([function(t){return Object(S.List)(t.getIn(["settings","notifications","shows"]).filter(function(t){return!t}).keys())},function(t){return t.getIn(["notifications","items"])}],function(t,e){return e.filterNot(function(e){return null!==e&&t.includes(e.get("type"))})}),x=function(t){return{notifications:P(t),isLoading:t.getIn(["notifications","isLoading"],!0),isUnread:t.getIn(["notifications","unread"])>0,hasMore:t.getIn(["notifications","hasMore"])}},R=(o=Object(y.connect)(x))(i=Object(w.g)((s=a=function(t){function e(){var n,o,i;u()(this,e);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=f()(this,t.call.apply(t,[this].concat(s))),o.handleLoadGap=function(t){o.props.dispatch(Object(_.h)({maxId:t}))},o.handleLoadOlder=v()(function(){var t=o.props.notifications.last();o.props.dispatch(Object(_.h)({maxId:t&&t.get("id")}))},300,{leading:!0}),o.handleScrollToTop=v()(function(){o.props.dispatch(Object(_.i)(!0))},100),o.handleScroll=v()(function(){o.props.dispatch(Object(_.i)(!1))},100),o.handlePin=function(){var t=o.props,e=t.columnId,n=t.dispatch;n(e?Object(C.f)(e):Object(C.d)("NOTIFICATIONS",{}))},o.handleMove=function(t){var e=o.props,n=e.columnId;(0,e.dispatch)(Object(C.e)(n,t))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setColumnRef=function(t){o.column=t},o.handleMoveUp=function(t){var e=o.props.notifications.findIndex(function(e){return null!==e&&e.get("id")===t})-1;o._selectChild(e)},o.handleMoveDown=function(t){var e=o.props.notifications.findIndex(function(e){return null!==e&&e.get("id")===t})+1;o._selectChild(e)},i=n,f()(o,i)}return p()(e,t),e.prototype.componentWillUnmount=function(){this.handleLoadOlder.cancel(),this.handleScrollToTop.cancel(),this.handleScroll.cancel(),this.props.dispatch(Object(_.i)(!1))},e.prototype._selectChild=function(t){var e=this.column.node.querySelector("article:nth-of-type("+(t+1)+") .focusable");e&&e.focus()},e.prototype.render=function(){var t=this,e=this.props,n=e.intl,o=e.notifications,i=e.shouldUpdateScroll,a=e.isLoading,s=e.isUnread,r=e.columnId,l=e.multiColumn,u=e.hasMore,d=!!r,f=c()(w.b,{id:"empty_column.notifications",defaultMessage:"You don't have any notifications yet. Interact with others to start the conversation."}),h=null;h=a&&this.scrollableContent?this.scrollableContent:o.size>0||u?o.map(function(e,n){return null===e?c()(N.a,{disabled:a,maxId:n>0?o.getIn([n-1,"id"]):null,onClick:t.handleLoadGap},"gap:"+o.getIn([n+1,"id"])):c()(k.a,{notification:e,accountId:e.get("account"),onMoveUp:t.handleMoveUp,onMoveDown:t.handleMoveDown},e.get("id"))}):null,this.scrollableContent=h;var p=c()(T.a,{scrollKey:"notifications-"+r,trackScroll:!d,isLoading:a,hasMore:u,emptyMessage:f,onLoadMore:this.handleLoadOlder,onScrollToTop:this.handleScrollToTop,onScroll:this.handleScroll,shouldUpdateScroll:i},void 0,h);return b.a.createElement(M.a,{ref:this.setColumnRef},c()(O.a,{icon:"bell",active:s,title:n.formatMessage(E.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:d,multiColumn:l},void 0,c()(j.a,{})),p)},e}(b.a.PureComponent),a.defaultProps={trackScroll:!0},i=s))||i)||i},866:function(t,e,n){"use strict";var o=n(2),i=n.n(o),a=n(0),s=(n.n(a),n(9)),r=n(6),c=n(67),l=n(867),u=n(22),d=n(26),f=n(283),h=n(12),p=Object(r.f)({unfollowConfirm:{id:"confirmations.unfollow.confirm",defaultMessage:"Unfollow"}}),g=function(){var t=Object(c.c)();return function(e,n){return{account:t(e,n.id)}}},v=function(t,e){var n=e.intl;return{onFollow:function(e){t(e.getIn(["relationship","following"])||e.getIn(["relationship","requested"])?h.j?Object(d.d)("CONFIRM",{message:i()(r.b,{id:"confirmations.unfollow.message",defaultMessage:"Are you sure you want to unfollow {name}?",values:{name:i()("strong",{},void 0,"@",e.get("acct"))}}),confirm:n.formatMessage(p.unfollowConfirm),onConfirm:function(){return t(Object(u.D)(e.get("id")))}}):Object(u.D)(e.get("id")):Object(u.z)(e.get("id")))},onBlock:function(e){t(e.getIn(["relationship","blocking"])?Object(u.C)(e.get("id")):Object(u.q)(e.get("id")))},onMute:function(e){t(e.getIn(["relationship","muting"])?Object(u.E)(e.get("id")):Object(f.c)(e))},onMuteNotifications:function(e,n){t(Object(u.A)(e.get("id"),n))}}};e.a=Object(r.g)(Object(s.connect)(g,v)(l.a))},867:function(t,e,n){"use strict";n.d(e,"a",function(){return S});var o,i,a,s=n(2),r=n.n(s),c=n(1),l=n.n(c),u=n(3),d=n.n(u),f=n(4),h=n.n(f),p=n(0),g=(n.n(p),n(14)),v=n.n(g),m=n(5),b=n.n(m),y=n(58),M=n(57),O=n(298),_=n(23),C=n(6),k=n(11),w=n.n(k),j=n(12),I=Object(C.f)({follow:{id:"account.follow",defaultMessage:"Follow"},unfollow:{id:"account.unfollow",defaultMessage:"Unfollow"},requested:{id:"account.requested",defaultMessage:"Awaiting approval"},unblock:{id:"account.unblock",defaultMessage:"Unblock @{name}"},unmute:{id:"account.unmute",defaultMessage:"Unmute @{name}"},mute_notifications:{id:"account.mute_notifications",defaultMessage:"Mute notifications from @{name}"},unmute_notifications:{id:"account.unmute_notifications",defaultMessage:"Unmute notifications from @{name}"}}),S=Object(C.g)((a=i=function(t){function e(){var n,o,i;l()(this,e);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=d()(this,t.call.apply(t,[this].concat(s))),o.handleFollow=function(){o.props.onFollow(o.props.account)},o.handleBlock=function(){o.props.onBlock(o.props.account)},o.handleMute=function(){o.props.onMute(o.props.account)},o.handleMuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!0)},o.handleUnmuteNotifications=function(){o.props.onMuteNotifications(o.props.account,!1)},i=n,d()(o,i)}return h()(e,t),e.prototype.render=function(){var t=this.props,e=t.account,n=t.intl,o=t.hidden;if(!e)return r()("div",{});if(o)return r()("div",{},void 0,e.get("display_name"),e.get("username"));var i=void 0;if(e.get("id")!==j.g&&null!==e.get("relationship",null)){var a=e.getIn(["relationship","following"]),s=e.getIn(["relationship","requested"]),c=e.getIn(["relationship","blocking"]),l=e.getIn(["relationship","muting"]);if(s)i=r()(_.a,{disabled:!0,icon:"hourglass",title:n.formatMessage(I.requested)});else if(c)i=r()(_.a,{active:!0,icon:"unlock-alt",title:n.formatMessage(I.unblock,{name:e.get("username")}),onClick:this.handleBlock});else if(l){var u=void 0;u=e.getIn(["relationship","muting_notifications"])?r()(_.a,{active:!0,icon:"bell",title:n.formatMessage(I.unmute_notifications,{name:e.get("username")}),onClick:this.handleUnmuteNotifications}):r()(_.a,{active:!0,icon:"bell-slash",title:n.formatMessage(I.mute_notifications,{name:e.get("username")}),onClick:this.handleMuteNotifications}),i=r()(p.Fragment,{},void 0,r()(_.a,{active:!0,icon:"volume-up",title:n.formatMessage(I.unmute,{name:e.get("username")}),onClick:this.handleMute}),u)}else e.get("moved")&&!a||(i=r()(_.a,{icon:a?"user-times":"user-plus",title:n.formatMessage(a?I.unfollow:I.follow),onClick:this.handleFollow,active:a}))}return r()("div",{className:"account"},void 0,r()("div",{className:"account__wrapper"},void 0,r()(O.a,{className:"account__display-name",href:e.get("url"),to:"/accounts/"+e.get("id")},e.get("id"),r()("div",{className:"account__avatar-wrapper"},void 0,r()(y.a,{account:e,size:36})),r()(M.a,{account:e})),r()("div",{className:"account__relationship"},void 0,i)))},e}(w.a),i.propTypes={account:v.a.map.isRequired,onFollow:b.a.func.isRequired,onBlock:b.a.func.isRequired,onMute:b.a.func.isRequired,onMuteNotifications:b.a.func.isRequired,intl:b.a.object.isRequired,hidden:b.a.bool},o=a))||o},869:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}function i(t,e){var n={};for(var o in t)e.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},l=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),u=n(0),d=o(u),f=n(10),h=o(f),p=n(5),g=o(p),v=n(870),m=o(v),b=n(871),y=o(b),M=n(872),O=function(t){function e(t){a(this,e);var n=s(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!t.checked&&!t.defaultChecked),n.state={checked:!(!t.checked&&!t.defaultChecked),hasFocus:!1},n}return r(e,t),l(e,[{key:"componentWillReceiveProps",value:function(t){"checked"in t&&this.setState({checked:!!t.checked})}},{key:"handleClick",value:function(t){var e=this.input;if(t.target!==e&&!this.moved)return this.previouslyChecked=e.checked,t.preventDefault(),e.focus(),void e.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:e.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(t){this.startX=(0,M.pointerCoord)(t).x,this.activated=!0}},{key:"handleTouchMove",value:function(t){if(this.activated&&(this.moved=!0,this.startX)){var e=(0,M.pointerCoord)(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e,this.activated=!0):e-15>this.startX&&(this.setState({checked:!0}),this.startX=e,this.activated=e<this.startX+5)}}},{key:"handleTouchEnd",value:function(t){if(this.moved){var e=this.input;if(t.preventDefault(),this.startX){var n=(0,M.pointerCoord)(t).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,e.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,e.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(t){var e=this.props.onFocus;e&&e(t),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(t){var e=this.props.onBlur;e&&e(t),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(t){var n=this.props.icons;return n?void 0===n[t]?e.defaultProps.icons[t]:n[t]:null}},{key:"render",value:function(){var t=this,e=this.props,n=e.className,o=(e.icons,i(e,["className","icons"])),a=(0,h.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return d.default.createElement("div",{className:a,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},d.default.createElement("div",{className:"react-toggle-track"},d.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),d.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),d.default.createElement("div",{className:"react-toggle-thumb"}),d.default.createElement("input",c({},o,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),e}(u.PureComponent);e.default=O,O.displayName="Toggle",O.defaultProps={icons:{checked:d.default.createElement(m.default,null),unchecked:d.default.createElement(y.default,null)}},O.propTypes={checked:g.default.bool,disabled:g.default.bool,defaultChecked:g.default.bool,onChange:g.default.func,onFocus:g.default.func,onBlur:g.default.func,className:g.default.string,name:g.default.string,value:g.default.string,id:g.default.string,"aria-labelledby":g.default.string,"aria-label":g.default.string,icons:g.default.oneOfType([g.default.bool,g.default.shape({checked:g.default.node,unchecked:g.default.node})])}},870:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){return i.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},i.default.createElement("title",null,"switch-check"),i.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},871:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),i=function(t){return t&&t.__esModule?t:{default:t}}(o);e.default=function(){return i.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},i.default.createElement("title",null,"switch-x"),i.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},872:function(t,e,n){"use strict";function o(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}var o=t.pageX;if(void 0!==o)return{x:o,y:t.pageY}}return{x:0,y:0}}Object.defineProperty(e,"__esModule",{value:!0}),e.pointerCoord=o},895:function(t,e,n){"use strict";n.d(e,"a",function(){return g});var o=n(2),i=n.n(o),a=n(1),s=n.n(a),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(869),p=n.n(h),g=function(t){function e(){var n,o,i;s()(this,e);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=o=c()(this,t.call.apply(t,[this].concat(r))),o.onChange=function(t){var e=t.target;o.props.onChange(o.props.settingPath,e.checked)},i=n,c()(o,i)}return u()(e,t),e.prototype.render=function(){var t=this.props,e=t.prefix,n=t.settings,o=t.settingPath,a=t.label,s=t.meta,r=["setting-toggle",e].concat(o).filter(Boolean).join("-");return i()("div",{className:"setting-toggle"},void 0,i()(p.a,{id:r,checked:n.getIn(o),onChange:this.onChange,onKeyDown:this.onKeyDown}),i()("label",{htmlFor:r,className:"setting-toggle__label"},void 0,a),s&&i()("span",{className:"setting-meta__label"},void 0,s))},e}(f.a.PureComponent)},980:function(t,e,n){"use strict";var o=n(9),i=n(67),a=n(981),s=n(18),r=function(){var t=Object(i.d)();return function(e,n){return{notification:t(e,n.notification,n.accountId)}}},c=function(t){return{onMention:function(e,n){t(Object(s.R)(e,n))}}};e.a=Object(o.connect)(r,c)(a.a)},981:function(t,e,n){"use strict";n.d(e,"a",function(){return w});var o,i,a=n(2),s=n.n(a),r=n(1),c=n.n(r),l=n(3),u=n.n(l),d=n(4),f=n.n(d),h=n(0),p=(n.n(h),n(5)),g=n.n(p),v=n(14),m=n.n(v),b=n(288),y=n(866),M=n(6),O=n(298),_=n(11),C=n.n(_),k=n(157),w=(n.n(k),i=o=function(t){function e(){var n,o,i;c()(this,e);for(var a=arguments.length,s=Array(a),r=0;r<a;r++)s[r]=arguments[r];return n=o=u()(this,t.call.apply(t,[this].concat(s))),o.handleMoveUp=function(){var t=o.props,e=t.notification;(0,t.onMoveUp)(e.get("id"))},o.handleMoveDown=function(){var t=o.props,e=t.notification;(0,t.onMoveDown)(e.get("id"))},o.handleOpen=function(){var t=o.props.notification;t.get("status")?o.context.router.history.push("/statuses/"+t.get("status")):o.handleOpenProfile()},o.handleOpenProfile=function(){var t=o.props.notification;o.context.router.history.push("/accounts/"+t.getIn(["account","id"]))},o.handleMention=function(t){t.preventDefault();var e=o.props,n=e.notification;(0,e.onMention)(n.get("account"),o.context.router.history)},i=n,u()(o,i)}return f()(e,t),e.prototype.getHandlers=function(){return{moveUp:this.handleMoveUp,moveDown:this.handleMoveDown,open:this.handleOpen,openProfile:this.handleOpenProfile,mention:this.handleMention,reply:this.handleMention}},e.prototype.renderFollow=function(t,e){return s()(k.HotKeys,{handlers:this.getHandlers()},void 0,s()("div",{className:"notification notification-follow focusable",tabIndex:"0"},void 0,s()("div",{className:"notification__message"},void 0,s()("div",{className:"notification__favourite-icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-user-plus"})),s()(M.b,{id:"notification.follow",defaultMessage:"{name} followed you",values:{name:e}})),s()(y.a,{id:t.get("id"),withNote:!1,hidden:this.props.hidden})))},e.prototype.renderMention=function(t){return s()(b.a,{id:t.get("status"),withDismiss:!0,hidden:this.props.hidden,onMoveDown:this.handleMoveDown,onMoveUp:this.handleMoveUp})},e.prototype.renderFavourite=function(t,e){return s()(k.HotKeys,{handlers:this.getHandlers()},void 0,s()("div",{className:"notification notification-favourite focusable",tabIndex:"0"},void 0,s()("div",{className:"notification__message"},void 0,s()("div",{className:"notification__favourite-icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-star star-icon"})),s()(M.b,{id:"notification.favourite",defaultMessage:"{name} favourited your status",values:{name:e}})),s()(b.a,{id:t.get("status"),account:t.get("account"),muted:!0,withDismiss:!0,hidden:!!this.props.hidden})))},e.prototype.renderReblog=function(t,e){return s()(k.HotKeys,{handlers:this.getHandlers()},void 0,s()("div",{className:"notification notification-reblog focusable",tabIndex:"0"},void 0,s()("div",{className:"notification__message"},void 0,s()("div",{className:"notification__favourite-icon-wrapper"},void 0,s()("i",{className:"fa fa-fw fa-retweet"})),s()(M.b,{id:"notification.reblog",defaultMessage:"{name} boosted your status",values:{name:e}})),s()(b.a,{id:t.get("status"),account:t.get("account"),muted:!0,withDismiss:!0,hidden:this.props.hidden})))},e.prototype.render=function(){var t=this.props.notification,e=t.get("account"),n={__html:e.get("display_name_html")},o=s()("bdi",{},void 0,s()(O.a,{className:"notification__display-name",href:e.get("url"),title:e.get("acct"),to:"/accounts/"+e.get("id"),dangerouslySetInnerHTML:n}));switch(t.get("type")){case"follow":return this.renderFollow(e,o);case"mention":return this.renderMention(t);case"favourite":return this.renderFavourite(t,o);case"reblog":return this.renderReblog(t,o)}return null},e}(C.a),o.contextTypes={router:g.a.object},o.propTypes={notification:m.a.map.isRequired,hidden:g.a.bool,onMoveUp:g.a.func.isRequired,onMoveDown:g.a.func.isRequired,onMention:g.a.func.isRequired},i)},982:function(t,e,n){"use strict";var o=n(9),i=n(6),a=n(983),s=n(59),r=n(101),c=n(158),l=n(26),u=Object(i.f)({clearMessage:{id:"notifications.clear_confirmation",defaultMessage:"Are you sure you want to permanently clear all your notifications?"},clearConfirm:{id:"notifications.clear",defaultMessage:"Clear notifications"}}),d=function(t){return{settings:t.getIn(["settings","notifications"]),pushSettings:t.get("push_notifications")}},f=function(t,e){var n=e.intl;return{onChange:function(e,n){t("push"===e[0]?Object(c.e)(e.slice(1),n):Object(s.c)(["notifications"].concat(e),n))},onClear:function(){t(Object(l.d)("CONFIRM",{message:n.formatMessage(u.clearMessage),confirm:n.formatMessage(u.clearConfirm),onConfirm:function(){return t(Object(r.g)())}}))}}};e.a=Object(i.g)(Object(o.connect)(d,f)(a.a))},983:function(t,e,n){"use strict";n.d(e,"a",function(){return v});var o=n(2),i=n.n(o),a=n(1),s=n.n(a),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(6),p=n(984),g=n(895),v=function(t){function e(){var n,o,i;s()(this,e);for(var a=arguments.length,r=Array(a),l=0;l<a;l++)r[l]=arguments[l];return n=o=c()(this,t.call.apply(t,[this].concat(r))),o.onPushChange=function(t,e){o.props.onChange(["push"].concat(t),e)},i=n,c()(o,i)}return u()(e,t),e.prototype.render=function(){var t=this.props,e=t.settings,n=t.pushSettings,o=t.onChange,a=t.onClear,s=i()(h.b,{id:"notifications.column_settings.alert",defaultMessage:"Desktop notifications"}),r=i()(h.b,{id:"notifications.column_settings.show",defaultMessage:"Show in column"}),c=i()(h.b,{id:"notifications.column_settings.sound",defaultMessage:"Play sound"}),l=n.get("browserSupport")&&n.get("isSubscribed"),u=l&&i()(h.b,{id:"notifications.column_settings.push",defaultMessage:"Push notifications"}),d=l&&i()(h.b,{id:"notifications.column_settings.push_meta",defaultMessage:"This device"});return i()("div",{},void 0,i()("div",{className:"column-settings__row"},void 0,i()(p.a,{onClick:a})),i()("div",{role:"group","aria-labelledby":"notifications-follow"},void 0,i()("span",{id:"notifications-follow",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.follow",defaultMessage:"New followers:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:e,settingPath:["alerts","follow"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","follow"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["shows","follow"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["sounds","follow"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-favourite"},void 0,i()("span",{id:"notifications-favourite",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.favourite",defaultMessage:"Favourites:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:e,settingPath:["alerts","favourite"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","favourite"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["shows","favourite"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["sounds","favourite"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-mention"},void 0,i()("span",{id:"notifications-mention",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.mention",defaultMessage:"Mentions:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:e,settingPath:["alerts","mention"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","mention"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["shows","mention"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["sounds","mention"],onChange:o,label:c}))),i()("div",{role:"group","aria-labelledby":"notifications-reblog"},void 0,i()("span",{id:"notifications-reblog",className:"column-settings__section"},void 0,i()(h.b,{id:"notifications.column_settings.reblog",defaultMessage:"Boosts:"})),i()("div",{className:"column-settings__row"},void 0,i()(g.a,{prefix:"notifications_desktop",settings:e,settingPath:["alerts","reblog"],onChange:o,label:s}),l&&i()(g.a,{prefix:"notifications_push",settings:n,settingPath:["alerts","reblog"],meta:d,onChange:this.onPushChange,label:u}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["shows","reblog"],onChange:o,label:r}),i()(g.a,{prefix:"notifications",settings:e,settingPath:["sounds","reblog"],onChange:o,label:c}))))},e}(f.a.PureComponent)},984:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n(2),i=n.n(o),a=n(1),s=n.n(a),r=n(3),c=n.n(r),l=n(4),u=n.n(l),d=n(0),f=n.n(d),h=n(6),p=function(t){function e(){return s()(this,e),c()(this,t.apply(this,arguments))}return u()(e,t),e.prototype.render=function(){return i()("button",{className:"text-btn column-header__setting-btn",tabIndex:"0",onClick:this.props.onClick},void 0,i()("i",{className:"fa fa-eraser"})," ",i()(h.b,{id:"notifications.clear",defaultMessage:"Clear notifications"}))},e}(f.a.PureComponent)}});
//# sourceMappingURL=notifications.js.map