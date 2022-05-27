"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[187,460],{151:function(A,t,e){e.d(t,{O:function(){return i}});var n=e(523),r={List:"MoviesList_List__solOa",Item:"MoviesList_Item__6qotj",Title:"MoviesList_Title__DsIvd"},o=e(184),i=function(A){var t=A.movies,e=A.location;return(0,o.jsx)("ul",{className:r.List,children:t&&t.map((function(A){var t=A.id,i=A.normalizedTitle,c=A.normalizedPoster;return(0,o.jsx)(n.rU,{to:{pathname:"/movies/".concat(t),state:{from:e}},className:r.Item,children:(0,o.jsxs)("div",{className:r.Wrapper,children:[(0,o.jsx)("img",{src:c,alt:i,width:"150",height:"225",className:r.Img}),(0,o.jsx)("h2",{className:r.Title,children:i})]})},t)}))})}},943:function(A,t,e){e.r(t);var n=e(982),r=e(861),o=e(885),i=e(757),c=e.n(i),a=e(791),u=e(271),s=e(692),m=e(151),l=e(909),E=e(710),g=e(184);t.default=function(){var A=(0,a.useState)([]),t=(0,o.Z)(A,2),e=t[0],i=t[1],d=(0,a.useState)(null),b=(0,o.Z)(d,2),Q=b[0],f=b[1],I=(0,u.TH)();return(0,a.useEffect)((function(){var A=function(){var A=(0,r.Z)(c().mark((function A(){var t;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,s.Tg)();case 3:t=A.sent,i((0,n.Z)((0,E.P)(t.results))),A.next=10;break;case 7:A.prev=7,A.t0=A.catch(0),f(A.t0);case 10:case"end":return A.stop()}}),A,null,[[0,7]])})));return function(){return A.apply(this,arguments)}}();A()}),[]),(0,g.jsxs)(l.W,{children:[Q&&(0,g.jsx)("div",{children:Q.message}),(0,g.jsx)(m.O,{movies:e,location:I})]})}},6:function(A,t,e){e.r(t);var n=e(943),r=e(184);t.default=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(n.default,{})})}},692:function(A,t,e){e.d(t,{Bt:function(){return E},Mc:function(){return s},Tg:function(){return u},oi:function(){return m},y:function(){return l}});var n=e(861),r=e(757),o=e.n(r),i="https://api.themoviedb.org/3",c="3b4cb0b5c3c509ec710c203c7a14be66",a=function(){var A=(0,n.Z)(o().mark((function A(){var t,e,n,r=arguments;return o().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",e=r.length>1&&void 0!==r[1]?r[1]:{},A.next=4,fetch(t,e);case 4:if(!(n=A.sent).ok){A.next=11;break}return A.next=8,n.json();case 8:A.t0=A.sent,A.next=12;break;case 11:A.t0=Promise.reject(new Error("Something went wrong"));case 12:return A.abrupt("return",A.t0);case 13:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}(),u=function(){return a("".concat(i,"/trending/movie/day?api_key=").concat(c))},s=function(A){return a("".concat(i,"/movie/").concat(A,"?api_key=").concat(c))},m=function(A){return a("".concat(i,"/search/movie?api_key=").concat(c,"&query=").concat(A))},l=function(A){return a("".concat(i,"/movie/").concat(A,"/credits?api_key=").concat(c))},E=function(A){return a("".concat(i,"/movie/").concat(A,"/reviews?api_key=").concat(c))}},710:function(A,t,e){e.d(t,{P:function(){return r}});var n=e(614),r=function(A){return A.map((function(A){var t=A.id,e=A.title,r=A.name,o=A.poster_path;return{id:t,normalizedTitle:e||r,normalizedPoster:o?"https://image.tmdb.org/t/p/w500/".concat(o):n}}))}},614:function(A){A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAZABkAAD/7AARRHVja3kAAQAEAAAALQAA/+EDimh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8APD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNi4wLWMwMDIgNzkuMTY0NDg4LCAyMDIwLzA3LzEwLTIyOjA2OjUzICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmUxNWNkNzYzLTIzM2QtYjY0OC05MGM5LTBmODkzMjM1ZDVlYSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMjAyQkRBRkI3REUxMUVDQjQyMEI3RTdBOTY3NUU4MyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMjAyQkRBRUI3REUxMUVDQjQyMEI3RTdBOTY3NUU4MyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjIuMCAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1YzlkODVhMS03MWY3LTYyNDMtOWFiYS02NzlhN2Y0NGE0ZmYiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpkOTM1NTkyZC1mMDMzLTYzNDQtOTUyMC1hMTZlN2QyZTk4MTkiLz4gPC9yZGY6RGVzY3JpcHRp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"},982:function(A,t,e){e.d(t,{Z:function(){return o}});var n=e(907);var r=e(181);function o(A){return function(A){if(Array.isArray(A))return(0,n.Z)(A)}(A)||function(A){if("undefined"!==typeof Symbol&&null!=A[Symbol.iterator]||null!=A["@@iterator"])return Array.from(A)}(A)||(0,r.Z)(A)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=NotFound.8e255c56.chunk.js.map