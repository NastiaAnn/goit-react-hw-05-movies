"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[120],{942:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(861),u=t(439),a=t(757),c=t.n(a),i=t(87),o=t(689),s=t(791),f=t(938),p=t(184),l=function(e){var n=e.handleSubmit,t=e.updateString;return(0,p.jsxs)("form",{onSubmit:n,children:[(0,p.jsx)("label",{children:(0,p.jsx)("input",{type:"text",name:"query",onChange:t})}),(0,p.jsx)("button",{type:"submit",children:"Search"})]})},v=function(e){var n=e.movies,t=e.location;return(0,p.jsx)("ul",{children:n.map((function(e){var n=e.id,r=e.title;return(0,p.jsx)("li",{children:(0,p.jsx)(i.rU,{to:"/movies/".concat(n),state:{from:t},children:r})},n)}))})},h=function(){var e,n=(0,s.useState)([]),t=(0,u.Z)(n,2),a=t[0],h=t[1],d=(0,i.lr)(),m=(0,u.Z)(d,2),g=m[0],x=m[1],y=null!==(e=g.get("query"))&&void 0!==e?e:"",b=(0,o.TH)();(0,s.useEffect)((function(){null!==y&&k(y)}),[y]);var k=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,f.yi)(n);case 3:t=e.sent,h(t.data.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Error");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}();return(0,p.jsxs)("div",{children:[(0,p.jsx)(l,{handleSubmit:function(e){e.preventDefault();var n=e.currentTarget;x({query:n.elements.query.value}),n.reset()},updateString:function(e){var n=e.target.value;if(""===n)return x({});x({query:n})}}),(0,p.jsx)(v,{movies:a,location:b})]})}},938:function(e,n,t){t.d(n,{XT:function(){return o},eb:function(){return l},h4:function(){return p},p0:function(){return f},yi:function(){return s}});var r=t(861),u=t(757),a=t.n(u),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3";var i="b2f603dc7bfb8f273c9f4e293e842183",o=function(){var e=(0,r.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/day?api_key=".concat(i,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=120.4fd190f5.chunk.js.map