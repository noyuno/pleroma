webpackJsonp([8],{283:function(e,t,n){"use strict";function o(e){return function(t){t({type:r,account:e}),t(Object(i.d)("MUTE"))}}t.a=o;var i=(n(13),n(22),n(15),n(26)),r="MUTES_INIT_MODAL"},285:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(0),f=n.n(p),g=n(6),b=(i=o=function(e){function t(){return c()(this,t),u()(this,e.apply(this,arguments))}return h()(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.visible;return s()("button",{className:"load-more",disabled:t||!n,style:{visibility:n?"visible":"hidden"},onClick:this.props.onClick},void 0,s()(g.b,{id:"status.load_more",defaultMessage:"Load more"}))},t}(f.a.PureComponent),o.defaultProps={visible:!0},i)},286:function(e,t,n){"use strict";function o(e,t){return function(n){n({type:r,account:e,status:t}),n(Object(i.d)("REPORT"))}}t.a=o;var i=(n(13),n(26)),r="REPORT_INIT"},287:function(e,t,n){"use strict";var o=n(2),i=n.n(o),r=n(0),s=(n.n(r),n(9)),a=n(152),c=n(67),l=n(18),u=n(68),d=n(22),h=n(91),p=n(283),f=n(286),g=n(26),b=n(6),v=n(12),m=(n(36),Object(b.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"}})),y=function(){var e=Object(c.e)();return function(t,n){return{status:e(t,n.id)}}},O=function(e,t){var n=t.intl;return{onReply:function(t,n){e(Object(l.T)(t,n))},onModalReblog:function(t){e(Object(u.l)(t))},onReblog:function(t,n){t.get("reblogged")?e(Object(u.n)(t)):n.shiftKey||!v.b?this.onModalReblog(t):e(Object(g.d)("BOOST",{status:t,onReblog:this.onModalReblog}))},onFavourite:function(t){e(t.get("favourited")?Object(u.m)(t):Object(u.i)(t))},onDelete:function(t){e(v.e?Object(g.d)("CONFIRM",{message:n.formatMessage(m.deleteMessage),confirm:n.formatMessage(m.deleteConfirm),onConfirm:function(){return e(Object(h.f)(t.get("id")))}}):Object(h.f)(t.get("id")))},onDirect:function(t,n){e(Object(l.N)(t,n))},onMention:function(t,n){e(Object(l.R)(t,n))},onOpenMedia:function(t,n){e(Object(g.d)("MEDIA",{media:t,index:n}))},onOpenVideo:function(t,n){e(Object(g.d)("VIDEO",{media:t,time:n}))},onBlock:function(t){e(Object(g.d)("CONFIRM",{message:i()(b.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:i()("strong",{},void 0,"@",t.get("acct"))}}),confirm:n.formatMessage(m.blockConfirm),onConfirm:function(){return e(Object(d.q)(t.get("id")))}}))},onReport:function(t){e(Object(f.a)(t.get("account"),t))},onMute:function(t){e(Object(p.a)(t))},onMuteConversation:function(t){e(t.get("muted")?Object(h.k)(t.get("id")):Object(h.i)(t.get("id")))},onToggleHidden:function(t){e(t.get("hidden")?Object(h.j)(t.get("id")):Object(h.h)(t.get("id")))}}};t.a=Object(b.g)(Object(s.connect)(y,O)(a.a))},289:function(e,t,n){"use strict";n.d(t,"a",function(){return L});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(94),f=n.n(p),g=n(0),b=n.n(g),v=n(151),m=n(5),y=n.n(m),O=n(290),M=n(285),I=n(295),C=n(8),j=(n.n(C),n(10)),S=n.n(j),k=n(153),L=(i=o=function(e){function t(){var n,o,i;c()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.state={fullscreen:null},o.intersectionObserverWrapper=new I.a,o.handleScroll=f()(function(){if(o.node){var e=o.node,t=e.scrollTop;400>e.scrollHeight-t-e.clientHeight&&o.props.onLoadMore&&!o.props.isLoading&&o.props.onLoadMore(),t<100&&o.props.onScrollToTop?o.props.onScrollToTop():o.props.onScroll&&o.props.onScroll()}},150,{trailing:!0}),o.onFullScreenChange=function(){o.setState({fullscreen:Object(k.d)()})},o.setRef=function(e){o.node=e},o.handleLoadMore=function(e){e.preventDefault(),o.props.onLoadMore()},i=n,u()(o,i)}return h()(t,e),t.prototype.componentDidMount=function(){this.attachScrollListener(),this.attachIntersectionObserver(),Object(k.a)(this.onFullScreenChange),this.handleScroll()},t.prototype.getSnapshotBeforeUpdate=function(e){return b.a.Children.count(e.children)>0&&b.a.Children.count(e.children)<b.a.Children.count(this.props.children)&&this.getFirstChildKey(e)!==this.getFirstChildKey(this.props)&&this.node.scrollTop>0?this.node.scrollHeight-this.node.scrollTop:null},t.prototype.componentDidUpdate=function(e,t,n){if(null!==n){var o=this.node.scrollHeight-n;this.node.scrollTop!==o&&(this.node.scrollTop=o)}},t.prototype.componentWillUnmount=function(){this.detachScrollListener(),this.detachIntersectionObserver(),Object(k.b)(this.onFullScreenChange)},t.prototype.attachIntersectionObserver=function(){this.intersectionObserverWrapper.connect({root:this.node,rootMargin:"300% 0px"})},t.prototype.detachIntersectionObserver=function(){this.intersectionObserverWrapper.disconnect()},t.prototype.attachScrollListener=function(){this.node.addEventListener("scroll",this.handleScroll)},t.prototype.detachScrollListener=function(){this.node.removeEventListener("scroll",this.handleScroll)},t.prototype.getFirstChildKey=function(e){var t=e.children,n=t;return t instanceof C.List?n=t.get(0):Array.isArray(t)&&(n=t[0]),n&&n.key},t.prototype.render=function(){var e=this,t=this.props,n=t.children,o=t.scrollKey,i=t.trackScroll,r=t.shouldUpdateScroll,a=t.isLoading,c=t.hasMore,l=t.prepend,u=t.emptyMessage,d=t.onLoadMore,h=this.state.fullscreen,p=b.a.Children.count(n),f=c&&p>0&&d?s()(M.a,{visible:!a,onClick:this.handleLoadMore}):null,g=null;return g=a||p>0||!u?b.a.createElement("div",{className:S()("scrollable",{fullscreen:h}),ref:this.setRef},s()("div",{role:"feed",className:"item-list"},void 0,l,b.a.Children.map(this.props.children,function(t,n){return s()(O.a,{id:t.key,index:n,listLength:p,intersectionObserverWrapper:e.intersectionObserverWrapper,saveHeightKey:i?e.context.router.route.location.key+":"+o:null},t.key,t)}),f)):b.a.createElement("div",{className:"empty-column-indicator",ref:this.setRef},u),i?s()(v.a,{scrollKey:o,shouldUpdateScroll:r},void 0,g):g},t}(g.PureComponent),o.contextTypes={router:y.a.object},o.defaultProps={trackScroll:!0},i)},290:function(e,t,n){"use strict";var o=n(9),i=n(291),r=n(95),s=function(e,t){return{cachedHeight:e.getIn(["height_cache",t.saveHeightKey,t.id])}},a=function(e){return{onHeightChange:function(t,n,o){e(Object(r.d)(t,n,o))}}};t.a=Object(o.connect)(s,a)(i.a)},291:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o=n(1),i=n.n(o),r=n(3),s=n.n(r),a=n(4),c=n.n(a),l=n(0),u=n.n(l),d=n(292),h=n(294),p=n(8),f=(n.n(p),["id","index","listLength"]),g=["id","index","listLength","cachedHeight"],b=function(e){function t(){var n,o,r;i()(this,t);for(var a=arguments.length,c=Array(a),l=0;l<a;l++)c[l]=arguments[l];return n=o=s()(this,e.call.apply(e,[this].concat(c))),o.state={isHidden:!1},o.handleIntersection=function(e){o.entry=e,Object(d.a)(o.calculateHeight),o.setState(o.updateStateAfterIntersection)},o.updateStateAfterIntersection=function(e){return e.isIntersecting&&!o.entry.isIntersecting&&Object(d.a)(o.hideIfNotIntersecting),{isIntersecting:o.entry.isIntersecting,isHidden:!1}},o.calculateHeight=function(){var e=o.props,t=e.onHeightChange,n=e.saveHeightKey,i=e.id;o.height=Object(h.a)(o.entry).height,t&&n&&t(n,i,o.height)},o.hideIfNotIntersecting=function(){o.componentMounted&&o.setState(function(e){return{isHidden:!e.isIntersecting}})},o.handleRef=function(e){o.node=e},r=n,s()(o,r)}return c()(t,e),t.prototype.shouldComponentUpdate=function(e,t){var n=this,o=!this.state.isIntersecting&&(this.state.isHidden||this.props.cachedHeight);return!!o!=!(t.isIntersecting||!t.isHidden&&!e.cachedHeight)||!(o?g:f).every(function(t){return Object(p.is)(e[t],n.props[t])})},t.prototype.componentDidMount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.observe(n,this.node,this.handleIntersection),this.componentMounted=!0},t.prototype.componentWillUnmount=function(){var e=this.props,t=e.intersectionObserverWrapper,n=e.id;t.unobserve(n,this.node),this.componentMounted=!1},t.prototype.render=function(){var e=this.props,t=e.children,n=e.id,o=e.index,i=e.listLength,r=e.cachedHeight,s=this.state,a=s.isIntersecting,c=s.isHidden;return a||!c&&!r?u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!1})):u.a.createElement("article",{ref:this.handleRef,"aria-posinset":o,"aria-setsize":i,style:{height:(this.height||r)+"px",opacity:0,overflow:"hidden"},"data-id":n,tabIndex:"0"},t&&u.a.cloneElement(t,{hidden:!0}))},t}(u.a.Component)},292:function(e,t,n){"use strict";function o(e){for(;a.length&&e.timeRemaining()>0;)a.shift()();a.length?requestIdleCallback(o):c=!1}function i(e){a.push(e),c||(c=!0,requestIdleCallback(o))}var r=n(293),s=n.n(r),a=new s.a,c=!1;t.a=i},293:function(e,t,n){"use strict";function o(){this.length=0}o.prototype.push=function(e){var t={item:e};this.last?this.last=this.last.next=t:this.last=this.first=t,this.length++},o.prototype.shift=function(){var e=this.first;if(e)return this.first=e.next,--this.length||(this.last=void 0),e.item},o.prototype.slice=function(e,t){e=void 0===e?0:e,t=void 0===t?1/0:t;for(var n=[],o=0,i=this.first;i&&!(--t<0);i=i.next)++o>e&&n.push(i.item);return n},e.exports=o},294:function(e,t,n){"use strict";function o(e){if("boolean"!=typeof i){var t=e.target.getBoundingClientRect(),n=e.boundingClientRect;i=t.height!==n.height||t.top!==n.top||t.width!==n.width||t.bottom!==n.bottom||t.left!==n.left||t.right!==n.right}return i?e.target.getBoundingClientRect():e.boundingClientRect}var i=void 0;t.a=o},295:function(e,t,n){"use strict";var o=n(1),i=n.n(o),r=function(){function e(){i()(this,e),this.callbacks={},this.observerBacklog=[],this.observer=null}return e.prototype.connect=function(e){var t=this,n=function(e){e.forEach(function(e){var n=e.target.getAttribute("data-id");t.callbacks[n]&&t.callbacks[n](e)})};this.observer=new IntersectionObserver(n,e),this.observerBacklog.forEach(function(e){var n=e[0],o=e[1],i=e[2];t.observe(n,o,i)}),this.observerBacklog=null},e.prototype.observe=function(e,t,n){this.observer?(this.callbacks[e]=n,this.observer.observe(t)):this.observerBacklog.push([e,t,n])},e.prototype.unobserve=function(e,t){this.observer&&(delete this.callbacks[e],this.observer.unobserve(t))},e.prototype.disconnect=function(){this.observer&&(this.callbacks={},this.observer.disconnect(),this.observer=null)},e}();t.a=r},296:function(e,t,n){"use strict";n.d(t,"a",function(){return b});var o,i=n(2),r=n.n(i),s=n(1),a=n.n(s),c=n(3),l=n.n(c),u=n(4),d=n.n(u),h=n(0),p=n.n(h),f=n(6),g=Object(f.f)({load_more:{id:"status.load_more",defaultMessage:"Load more"}}),b=Object(f.g)(o=function(e){function t(){var n,o,i;a()(this,t);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return n=o=l()(this,e.call.apply(e,[this].concat(s))),o.handleClick=function(){o.props.onClick(o.props.maxId)},i=n,l()(o,i)}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.disabled,n=e.intl;return r()("button",{className:"load-more load-gap",disabled:t,onClick:this.handleClick,"aria-label":n.formatMessage(g.load_more)},void 0,r()("i",{className:"fa fa-ellipsis-h"}))},t}(p.a.PureComponent))||o},297:function(e,t,n){"use strict";n.d(t,"a",function(){return T});var o,i,r=n(29),s=n.n(r),a=n(2),c=n.n(a),l=n(30),u=n.n(l),d=n(1),h=n.n(d),p=n(3),f=n.n(p),g=n(4),b=n.n(g),v=n(34),m=n.n(v),y=n(0),O=n.n(y),M=n(14),I=n.n(M),C=n(5),j=n.n(C),S=n(287),k=n(11),L=n.n(k),_=n(296),x=n(289),R=n(6),T=(i=o=function(e){function t(){var n,o,i;h()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=f()(this,e.call.apply(e,[this].concat(s))),o.getFeaturedStatusCount=function(){return o.props.featuredStatusIds?o.props.featuredStatusIds.size:0},o.getCurrentStatusIndex=function(e,t){return t?o.props.featuredStatusIds.indexOf(e):o.props.statusIds.indexOf(e)+o.getFeaturedStatusCount()},o.handleMoveUp=function(e,t){var n=o.getCurrentStatusIndex(e,t)-1;o._selectChild(n)},o.handleMoveDown=function(e,t){var n=o.getCurrentStatusIndex(e,t)+1;o._selectChild(n)},o.handleLoadOlder=m()(function(){o.props.onLoadMore(o.props.statusIds.last())},300,{leading:!0}),o.setRef=function(e){o.node=e},i=n,f()(o,i)}return b()(t,e),t.prototype._selectChild=function(e){var t=this.node.node.querySelector("article:nth-of-type("+(e+1)+") .focusable");t&&t.focus()},t.prototype.render=function(){var e=this,t=this.props,n=t.statusIds,o=t.onLoadMore,i=u()(t,["statusIds","onLoadMore"]),r=i.isLoading;if(i.isPartial)return c()("div",{className:"regeneration-indicator"},void 0,c()("div",{},void 0,c()("div",{className:"regeneration-indicator__label"},void 0,c()(R.b,{id:"regeneration_indicator.label",tagName:"strong",defaultMessage:"Loading…"}),c()(R.b,{id:"regeneration_indicator.sublabel",defaultMessage:"Your home feed is being prepared!"}))));var a=r||n.size>0?n.map(function(t,i){return null===t?c()(_.a,{disabled:r,maxId:i>0?n.get(i-1):null,onClick:o},"gap:"+n.get(i+1)):c()(S.a,{id:t,onMoveUp:e.handleMoveUp,onMoveDown:e.handleMoveDown},t)}):null;return O.a.createElement(x.a,s()({},i,{onLoadMore:o&&this.handleLoadOlder,ref:this.setRef}),a)},t}(L.a),o.propTypes={scrollKey:j.a.string.isRequired,statusIds:I.a.list.isRequired,onLoadMore:j.a.func,onScrollToTop:j.a.func,onScroll:j.a.func,trackScroll:j.a.bool,shouldUpdateScroll:j.a.func,isLoading:j.a.bool,isPartial:j.a.bool,hasMore:j.a.bool,prepend:j.a.node,emptyMessage:j.a.node},o.defaultProps={trackScroll:!0},i)},814:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"default",function(){return k});var o,i,r=n(2),s=n.n(r),a=n(1),c=n.n(a),l=n(3),u=n.n(l),d=n(4),h=n.n(d),p=n(0),f=n.n(p),g=n(9),b=n(93),v=n(70),m=n(69),y=n(19),O=n(300),M=n(6),I=n(977),C=n(71),j=Object(M.f)({title:{id:"column.public",defaultMessage:"Federated timeline"}}),S=function(e){return{hasUnread:e.getIn(["timelines","public","unread"])>0}},k=(o=Object(g.connect)(S))(i=Object(M.g)(i=function(e){function t(){var n,o,i;c()(this,t);for(var r=arguments.length,s=Array(r),a=0;a<r;a++)s[a]=arguments[a];return n=o=u()(this,e.call.apply(e,[this].concat(s))),o.handlePin=function(){var e=o.props,t=e.columnId,n=e.dispatch;n(t?Object(O.f)(t):Object(O.d)("PUBLIC",{}))},o.handleMove=function(e){var t=o.props,n=t.columnId;(0,t.dispatch)(Object(O.e)(n,e))},o.handleHeaderClick=function(){o.column.scrollTop()},o.setRef=function(e){o.column=e},o.handleLoadMore=function(e){o.props.dispatch(Object(y.r)({maxId:e}))},i=n,u()(o,i)}return h()(t,e),t.prototype.componentDidMount=function(){var e=this.props.dispatch;e(Object(y.r)()),this.disconnect=e(Object(C.e)())},t.prototype.componentWillUnmount=function(){this.disconnect&&(this.disconnect(),this.disconnect=null)},t.prototype.render=function(){var e=this.props,t=e.intl,n=e.columnId,o=e.hasUnread,i=e.multiColumn,r=!!n;return f.a.createElement(v.a,{ref:this.setRef},s()(m.a,{icon:"globe",active:o,title:t.formatMessage(j.title),onPin:this.handlePin,onMove:this.handleMove,onClick:this.handleHeaderClick,pinned:r,multiColumn:i},void 0,s()(I.a,{})),s()(b.a,{timelineId:"public",onLoadMore:this.handleLoadMore,trackScroll:!r,scrollKey:"public_timeline-"+n,emptyMessage:s()(M.b,{id:"empty_column.public",defaultMessage:"There is nothing here! Write something publicly, or manually follow users from other instances to fill it up"})}))},t}(f.a.PureComponent))||i)||i},861:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var o=n(2),i=n.n(o),r=n(1),s=n.n(r),a=n(3),c=n.n(a),l=n(4),u=n.n(l),d=n(0),h=n.n(d),p=function(e){function t(){var n,o,i;s()(this,t);for(var r=arguments.length,a=Array(r),l=0;l<r;l++)a[l]=arguments[l];return n=o=c()(this,e.call.apply(e,[this].concat(a))),o.handleChange=function(e){o.props.onChange(o.props.settingKey,e.target.value)},i=n,c()(o,i)}return u()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.settingKey,o=e.label;return i()("label",{},void 0,i()("span",{style:{display:"none"}},void 0,o),i()("input",{className:"setting-text",value:t.getIn(n),onChange:this.handleChange,placeholder:o}))},t}(h.a.PureComponent)},873:function(e,t,n){"use strict";n.d(t,"a",function(){return v});var o,i=n(2),r=n.n(i),s=n(1),a=n.n(s),c=n(3),l=n.n(c),u=n(4),d=n.n(u),h=n(0),p=n.n(h),f=n(6),g=n(861),b=Object(f.f)({filter_regex:{id:"home.column_settings.filter_regex",defaultMessage:"Filter out by regular expressions"},settings:{id:"home.settings",defaultMessage:"Column settings"}}),v=Object(f.g)(o=function(e){function t(){return a()(this,t),l()(this,e.apply(this,arguments))}return d()(t,e),t.prototype.render=function(){var e=this.props,t=e.settings,n=e.onChange,o=e.intl;return r()("div",{},void 0,r()("span",{className:"column-settings__section"},void 0,r()(f.b,{id:"home.column_settings.advanced",defaultMessage:"Advanced"})),r()("div",{className:"column-settings__row"},void 0,r()(g.a,{settings:t,settingKey:["regex","body"],onChange:n,label:o.formatMessage(b.filter_regex)})))},t}(p.a.PureComponent))||o},93:function(e,t,n){"use strict";var o=n(34),i=n.n(o),r=n(9),s=n(297),a=n(19),c=n(8),l=(n.n(c),n(96)),u=(n.n(l),n(12)),d=function(){return Object(l.createSelector)([function(e,t){var n=t.type;return e.getIn(["settings",n],Object(c.Map)())},function(e,t){var n=t.type;return e.getIn(["timelines",n,"items"],Object(c.List)())},function(e){return e.get("statuses")}],function(e,t,n){var o=e.getIn(["regex","body"],"").trim(),i=null;try{i=o&&new RegExp(o,"i")}catch(e){}return t.filter(function(t){var o=n.get(t),r=!0;if(!1===e.getIn(["shows","reblog"])&&(r=r&&null===o.get("reblog")),!1===e.getIn(["shows","reply"])&&(r=r&&(null===o.get("in_reply_to_id")||o.get("in_reply_to_account_id")===u.g)),r&&i&&o.get("account")!==u.g){var s=o.get("reblog")?n.getIn([o.get("reblog"),"search_index"]):o.get("search_index");r=!i.test(s)}return r})})},h=function(){var e=d();return function(t,n){var o=n.timelineId;return{statusIds:e(t,{type:o}),isLoading:t.getIn(["timelines",o,"isLoading"],!0),isPartial:t.getIn(["timelines",o,"isPartial"],!1),hasMore:t.getIn(["timelines",o,"hasMore"])}}},p=function(e,t){var n=t.timelineId;return{onScrollToTop:i()(function(){e(Object(a.s)(n,!0))},100),onScroll:i()(function(){e(Object(a.s)(n,!1))},100)}};t.a=Object(r.connect)(h,p)(s.a)},977:function(e,t,n){"use strict";var o=n(9),i=n(873),r=n(58),s=function(e){return{settings:e.getIn(["settings","public"])}},a=function(e){return{onChange:function(t,n){e(Object(r.c)(["public"].concat(t),n))}}};t.a=Object(o.connect)(s,a)(i.a)}});
//# sourceMappingURL=public_timeline.js.map