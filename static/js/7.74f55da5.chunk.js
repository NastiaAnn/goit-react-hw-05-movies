(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[7],{7:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return U}});var r,a,o,i,c,u,s,p=t(861),l=t(439),f=t(757),d=t.n(f),h=t(87),g=t(689),v=t(791),x=t(938),m=t(168),y=t(444),b=y.ZP.form(r||(r=(0,m.Z)(["\n  margin-top: 50px;\n"]))),k=y.ZP.label(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  font-size: 18px;\n  font-weight: 400;\n"]))),Z=y.ZP.input(o||(o=(0,m.Z)(["\n  display: inline-block;\n  padding: 8px 8px;\n  font-size: 15px;\n  font-weight: 600;\n  background-color: transparent;\n  border: 1px solid black;\n  cursor: pointer;\n"]))),w=y.ZP.button(i||(i=(0,m.Z)(["\n  display: inline-block;\n  width: 100%;\n  padding: 8px 8px;\n  font-size: 15px;\n  font-weight: 600;\n  background-color: transparent;\n  border: 1px solid black;\n  cursor: pointer;\n"]))),_=t(184),S=function(n){var e=n.handleFormSubmit,t=(0,v.useState)(""),r=(0,l.Z)(t,2),a=r[0],o=r[1];return(0,_.jsxs)(b,{onSubmit:function(n){n.preventDefault(),e(a),o("")},children:[(0,_.jsx)(k,{children:(0,_.jsx)(Z,{type:"text",name:"query",value:a,onChange:function(n){var e=n.target.value;o(e)}})}),(0,_.jsx)(w,{type:"submit",children:"Search"})]})},j=y.ZP.li(c||(c=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: normal;\n"]))),P=y.ZP.ul(u||(u=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),T=t(843),O=t.n(T),E=(0,y.ZP)(h.rU)(s||(s=(0,m.Z)(["\n  color: black;\n  text-decoration: none;\n  list-style: auto;\n\n  :hover {\n    color: orange;\n  }\n"]))),R=function(n){var e=n.movies,t=n.location;return(0,_.jsx)(P,{children:e.map((function(n){var e=n.id,r=n.title;return(0,_.jsx)(j,{children:(0,_.jsx)(E,{to:"/movies/".concat(e),state:{from:t},children:r})},e)}))})};P.propTypes={movies:O().arrayOf(O().shape({id:O().number.isRequired,title:O().string.isRequired})),location:O().shape({pathname:O().string.isRequired}).isRequired};var q=t(402),U=function(){var n,e=(0,v.useState)([]),t=(0,l.Z)(e,2),r=t[0],a=t[1],o=(0,h.lr)(),i=(0,l.Z)(o,2),c=i[0],u=i[1],s=(0,v.useState)(!1),f=(0,l.Z)(s,2),m=f[0],y=f[1],b=null!==(n=c.get("query"))&&void 0!==n?n:"",k=(0,g.TH)();(0,v.useEffect)((function(){null!==b&&(y(!0),Z(b))}),[b]);var Z=function(){var n=(0,p.Z)(d().mark((function n(e){var t;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,x.yi)(e);case 3:t=n.sent,a(t.data.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("Error");case 10:return n.prev=10,y(!1),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})));return function(e){return n.apply(this,arguments)}}();return(0,_.jsxs)("div",{children:[(0,_.jsx)(S,{handleFormSubmit:function(n){""!==n?(n!==b&&a([]),u({query:n})):u({})}}),m&&(0,_.jsx)(q.NB,{visible:!0,height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#b8c480","#B2A3B5","#F4442E","#51E5FF","#429EA6"]}),0===r.length&&""!==b&&!m&&(0,_.jsx)("p",{children:"Oops... there are no images matching your result. Please try again."}),(0,_.jsx)(R,{movies:r,location:k})]})}},938:function(n,e,t){"use strict";t.d(e,{XT:function(){return u},eb:function(){return f},h4:function(){return l},p0:function(){return p},yi:function(){return s}});var r=t(861),a=t(757),o=t.n(a),i=t(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var c="b2f603dc7bfb8f273c9f4e293e842183",u=function(){var n=(0,r.Z)(o().mark((function n(){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("trending/all/day?api_key=".concat(c,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("search/movie?api_key=".concat(c,"&language=en-US&query=").concat(e,"&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(e){return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},888:function(n,e,t){"use strict";var r=t(47);function a(){}function o(){}o.resetWarningCache=a,n.exports=function(){function n(n,e,t,a,o,i){if(i!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},843:function(n,e,t){n.exports=t(888)()},47:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=7.74f55da5.chunk.js.map