(self.webpackChunkgithub_issue_page_frontend=self.webpackChunkgithub_issue_page_frontend||[]).push([[748],{749:function(e,t,r){"use strict";r.d(t,{U41:function(){return n}});var o=r(6069);function n(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"}}]})(e)}},6069:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var o=r(390),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=o.createContext&&o.createContext(n),i=function(){return i=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},i.apply(this,arguments)},l=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]])}return r};function a(e){return e&&e.map((function(e,t){return o.createElement(e.tag,i({key:t},e.attr),a(e.child))}))}function u(e){return function(t){return o.createElement(h,i({attr:i({},e.attr)},t),a(e.child))}}function h(e){var t=function(t){var r,n=e.attr,s=e.size,a=e.title,u=l(e,["attr","size","title"]),h=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:i(i({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),a&&o.createElement("title",null,a),e.children)};return void 0!==s?o.createElement(s.Consumer,null,(function(e){return t(e)})):t(n)}},8132:function(e,t,r){"use strict";r.d(t,{TkL:function(){return n}});var o=r(6069);function n(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}},{tag:"path",attr:{d:"M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}},{tag:"path",attr:{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}}]})(e)}},4463:function(e,t,r){var o;o=function(e){return function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,r),n.loaded=!0,n.exports}return r.m=e,r.c=t,r.p="",r(0)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},n=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}();function s(e){return e&&e.__esModule?e:{default:e}}var i=r(8),l=s(i),a=s(r(6)),u=s(r(2)),h=r(1),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,r){for(var o=!0;o;){var n=e,s=t,i=r;o=!1,null===n&&(n=Function.prototype);var l=Object.getOwnPropertyDescriptor(n,s);if(void 0!==l){if("value"in l)return l.value;var a=l.get;if(void 0===a)return;return a.call(i)}var u=Object.getPrototypeOf(n);if(null===u)return;e=u,t=s,r=i,o=!0,l=u=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.lastScrollTop=0,this.actionTriggered=!1,this.state={showLoader:!1,pullToRefreshThresholdBreached:!1},this.startY=0,this.currentY=0,this.dragging=!1,this.maxPullDownDistance=0,this.onScrollListener=this.onScrollListener.bind(this),this.throttledOnScrollListener=(0,u.default)(this.onScrollListener,150).bind(this),this.onStart=this.onStart.bind(this),this.onMove=this.onMove.bind(this),this.onEnd=this.onEnd.bind(this),this.getScrollableTarget=this.getScrollableTarget.bind(this)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown.firstChild.getBoundingClientRect().height,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')}},{key:"componentWillUnmount",value:function(){this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd))}},{key:"componentWillReceiveProps",value:function(e){this.props.key===e.key&&this.props.dataLength===e.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1,pullToRefreshThresholdBreached:!1}))}},{key:"getScrollableTarget",value:function(){return this.props.scrollableTarget instanceof HTMLElement?this.props.scrollableTarget:"string"===typeof this.props.scrollableTarget?document.getElementById(this.props.scrollableTarget):(null===this.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)}},{key:"onStart",value:function(e){this.lastScrollTop||(this.dragging=!0,this.startY=e.pageY||e.touches[0].pageY,this.currentY=this.startY,this._infScroll.style.willChange="transform",this._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)")}},{key:"onMove",value:function(e){this.dragging&&(this.currentY=e.pageY||e.touches[0].pageY,this.currentY<this.startY||(this.currentY-this.startY>=this.props.pullDownToRefreshThreshold&&this.setState({pullToRefreshThresholdBreached:!0}),this.currentY-this.startY>1.5*this.maxPullDownDistance||(this._infScroll.style.overflow="visible",this._infScroll.style.transform="translate3d(0px, "+(this.currentY-this.startY)+"px, 0px)")))}},{key:"onEnd",value:function(e){var t=this;this.startY=0,this.currentY=0,this.dragging=!1,this.state.pullToRefreshThresholdBreached&&this.props.refreshFunction&&this.props.refreshFunction(),requestAnimationFrame((function(){t._infScroll&&(t._infScroll.style.overflow="auto",t._infScroll.style.transform="none",t._infScroll.style.willChange="none")}))}},{key:"isElementAtBottom",value:function(e){var t=arguments.length<=1||void 0===arguments[1]?.8:arguments[1],r=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,o=(0,h.parseThreshold)(t);return o.unit===h.ThresholdUnits.Pixel?e.scrollTop+r>=e.scrollHeight-o.value:e.scrollTop+r>=o.value/100*e.scrollHeight}},{key:"onScrollListener",value:function(e){var t=this;"function"===typeof this.props.onScroll&&setTimeout((function(){return t.props.onScroll(e)}),0);var r=this.props.height||this._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;this.actionTriggered||(this.isElementAtBottom(r,this.props.scrollThreshold)&&this.props.hasMore&&(this.actionTriggered=!0,this.setState({showLoader:!0}),this.props.next()),this.lastScrollTop=r.scrollTop)}},{key:"render",value:function(){var e=this,t=o({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),r=this.props.hasChildren||!(!this.props.children||!this.props.children.length),n=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return l.default.createElement("div",{style:n},l.default.createElement("div",{className:"infinite-scroll-component "+(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&l.default.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},l.default.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!r&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))}}]),t}(i.Component);t.default=c,c.defaultProps={pullDownToRefreshContent:l.default.createElement("h3",null,"Pull down to refresh"),releaseToRefreshContent:l.default.createElement("h3",null,"Release to refresh"),pullDownToRefreshThreshold:100,disableBrowserPullToRefresh:!0},c.propTypes={next:a.default.func,hasMore:a.default.bool,children:a.default.node,loader:a.default.node.isRequired,scrollThreshold:a.default.oneOfType([a.default.number,a.default.string]),endMessage:a.default.node,style:a.default.object,height:a.default.number,scrollableTarget:a.default.node,hasChildren:a.default.bool,pullDownToRefresh:a.default.bool,pullDownToRefreshContent:a.default.node,releaseToRefreshContent:a.default.node,pullDownToRefreshThreshold:a.default.number,refreshFunction:a.default.func,onScroll:a.default.func,dataLength:a.default.number.isRequired,key:a.default.string},e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.parseThreshold=function(e){return"number"===typeof e?{unit:r.Percent,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:r.Pixel,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:r.Percent,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),o):(console.warn("scrollThreshold should be string or number"),o)};var r={Pixel:"Pixel",Percent:"Percent"};t.ThresholdUnits=r;var o={unit:r.Percent,value:.8}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,r){var o,n;return t||(t=250),function(){var s=r||this,i=+new Date,l=arguments;o&&i<o+t?(clearTimeout(n),n=setTimeout((function(){o=i,e.apply(s,l)}),t)):(o=i,e.apply(s,l))}},e.exports=t.default},function(e,t){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},function(e,t,r){"use strict";e.exports=function(e,t,r,o,n,s,i,l){if(!e){var a;if(void 0===t)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[r,o,n,s,i,l],h=0;(a=new Error(t.replace(/%s/g,(function(){return u[h++]})))).name="Invariant Violation"}throw a.framesToPop=1,a}}},function(e,t,r){"use strict";var o=r(3),n=r(4),s=r(7);e.exports=function(){function e(e,t,r,o,i,l){l!==s&&n(!1,"Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types")}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t};return r.checkPropTypes=o,r.PropTypes=r,r}},function(e,t,r){e.exports=r(5)()},function(e,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,r){t.exports=e}])},e.exports=o(r(390))}}]);
//# sourceMappingURL=748.b72f02b4.chunk.js.map