(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{44:function(e,t,n){},48:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(21),i=n.n(a),s=(n(44),n(16)),o=n(3),l=n(10),j=n(11),d=n(23),u=localStorage.getItem("drawer")?JSON.parse(localStorage.getItem("drawer")):{expand:""},m=Object(d.a)({name:"drawer",initialState:u,reducers:{setDrawer:function(e,t){var n=t.payload.expand;e.expand=n}}}),h=m.actions.setDrawer,v=m.reducer,b=Object(j.b)({drawer:v}),O=Object(j.d)(b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),f=n(5),x=(n(48),n(1)),p=function(){var e=Object(c.useState)(document.documentElement.scrollTop),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),i=Object(f.a)(a,2),s=i[0],l=i[1],j=Object(c.useState)(!1),d=Object(f.a)(j,2),u=d[0],m=d[1],h=Object(o.e)();Object(c.useEffect)((function(){window.addEventListener("scroll",(function(){return r(document.documentElement.scrollTop)}));var e=document.querySelector(".home-header-search");e.addEventListener("focus",(function(){return m(!0)})),e.addEventListener("blur",(function(){return m(!1)}))}),[]);var v=function(){h.push({pathname:"/search/".concat(s),state:{filter:"search/".concat(s)}})};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"home-header-container",style:{opacity:0===n||u?1:.5},children:[Object(x.jsxs)("div",{className:"home-header-logo",onClick:function(){h.push("/")},children:[Object(x.jsx)("div",{className:"home-header-logo-text",children:"MovieApp"}),Object(x.jsx)("img",{className:"home-header-logo-img",src:"https://icon-library.com/images/movies-icon-png/movies-icon-png-8.jpg",alt:""})]}),Object(x.jsxs)("div",{className:"home-header-search-container",children:[Object(x.jsx)("input",{type:"text",className:"home-header-search",placeholder:"search a movie...",value:s,onChange:function(e){l(e.target.value)},onKeyDown:function(e){"Enter"===e.key&&v()}}),Object(x.jsx)("img",{className:"home-header-search-icon",onClick:v,src:"https://image.flaticon.com/icons/png/512/622/622669.png",alt:""})]})]})})},g=(n(52),function(){return Object(x.jsx)("div",{})}),w=(n(53),n(74)),N=n(75),S=(n(54),function(e){var t=e.label,n=e.list,r=e.handleClick,a=Object(l.c)((function(e){return e.drawer})).expand,i=Object(c.useState)(!0),s=Object(f.a)(i,2),o=s[0],j=s[1],d=function(e){var t,n;return e<50?(t=255,n=Math.round(5.1*e)):(n=255,t=Math.round(510-5.1*e)),"#"+("000000"+(65536*t+256*n+0).toString(16)).slice(-6)};return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:"genre-header",children:t}),Object(x.jsxs)("div",{className:"genre-carousel-container",style:{width:a?"calc(100vw - (100vw - 510px)/4)":"calc(100vw - 200px)"},children:[Object(x.jsx)("div",{className:"genre-carousel-scroll",onClick:function(){if(o){j(!1);var e=document.querySelector("#".concat(t,"-carousel")),n=document.querySelector(".genre-carousel-item");e.scrollLeft-=n.clientWidth;var c=setTimeout((function(){j(!0)}),500);return function(){clearTimeout(c)}}},children:Object(x.jsx)(w.a,{class:"arrow-scroll-icon",fontSize:"large"})}),Object(x.jsx)("div",{className:"genre-carousel-scroll",onClick:function(){if(o){j(!1);var e=document.querySelector("#".concat(t,"-carousel")),n=document.querySelector(".genre-carousel-item");e.scrollLeft+=n.clientWidth;var c=setTimeout((function(){j(!0)}),500);return function(){clearTimeout(c)}}},style:{right:0},fontSize:"large",children:Object(x.jsx)(N.a,{class:"arrow-scroll-icon"})}),Object(x.jsx)("div",{id:"".concat(t,"-carousel"),className:"genre-carousel",children:n.map((function(e,t){return Object(x.jsxs)("div",{className:"genre-carousel-item",onClick:function(){r(e)},children:[Object(x.jsx)("img",{src:e.backdrop_path,alt:""}),Object(x.jsx)("div",{className:"genre-carousel-item-description",children:Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"genre-carousel-item-description-header",children:[e.title,Object(x.jsxs)("div",{className:"genre-carousel-item-rating",style:{color:d(10*e.vote_average)},children:[e.vote_average,"/10"]})]}),Object(x.jsx)("div",{className:"genre-carousel-item-genres",children:e.genre_list.map((function(t,n){return n==e.genre_list.length-1?Object(x.jsx)(x.Fragment,{children:t}):Object(x.jsxs)(x.Fragment,{children:[t,", "]})}))})]})})]},e.id)}))})]})]})}),y=n(76),k=function(){var e=Object(c.useState)([]),t=Object(f.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)([]),i=Object(f.a)(a,2),s=i[0],j=i[1],d=Object(c.useState)([]),u=Object(f.a)(d,2),m=u[0],h=u[1],v=Object(c.useState)([]),b=Object(f.a)(v,2),O=b[0],p=b[1],g=Object(c.useState)([]),w=Object(f.a)(g,2),N=w[0],k=w[1],C=Object(c.useState)(!0),_=Object(f.a)(C,2),E=_[0],T=_[1],F=Object(l.c)((function(e){return e.drawer})).expand,L=Object(o.e)();Object(c.useEffect)((function(){fetch("/genre/16").then((function(e){return e.json()})).then((function(e){var t=e.results;h(t)})),fetch("/genre/53").then((function(e){return e.json()})).then((function(e){var t=e.results;j(t)})),fetch("/genre/10749").then((function(e){return e.json()})).then((function(e){var t=e.results;r(t)})),fetch("/trending").then((function(e){return e.json()})).then((function(e){var t=e.results;p(t)})),fetch("/favourites").then((function(e){return e.json()})).then((function(e){var t=e.results;k(t)}));var e=setTimeout((function(){T(!1)}),1e3);return function(){clearTimeout(e)}}),[]);var X=function(e){L.push({pathname:"/movie/".concat(e.original_title),state:{movieObj:e}})};return Object(x.jsx)(x.Fragment,{children:E?Object(x.jsx)(y.a,{class:"progress-icon"}):Object(x.jsxs)("div",{className:"home-overview-container",style:{transform:F?"translateX(300px)":"translateX(-10px)"},children:[Object(x.jsx)(S,{label:"trending",list:O,handleClick:X}),Object(x.jsx)(S,{label:"top rated",list:N,handleClick:X}),Object(x.jsx)(S,{label:"cartoon",list:m,handleClick:X}),Object(x.jsx)(S,{label:"thriller",list:s,handleClick:X}),Object(x.jsx)(S,{label:"romance",list:n,handleClick:X})]})})},C=n(77),_=n(78),E=n(79),T=n(80),F=n(81),L=n(82),X=n(83),q=n(84),D=(n(55),function(){var e=Object(o.e)(),t=Object(l.c)((function(e){return e.drawer})).expand,n=Object(l.b)();return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"drawer-container",style:{width:t?400:70},children:[Object(x.jsxs)("div",{className:"drawer-menu-item",onClick:function(){e.push("/")},children:[Object(x.jsx)(C.a,{class:"drawer-menu-icon"}),Object(x.jsx)("div",{className:"drawer-menu-label",children:"Home"})]}),Object(x.jsxs)("div",{className:"drawer-menu-item",onClick:function(){e.push({pathname:"/popular",state:{filter:"popular"}})},children:[Object(x.jsx)(_.a,{class:"drawer-menu-icon"}),Object(x.jsx)("div",{className:"drawer-menu-label",children:"Popular"})]}),Object(x.jsxs)("div",{className:"drawer-menu-item",onClick:function(){e.push({pathname:"/trending",state:{filter:"trending"}})},children:[Object(x.jsx)(E.a,{class:"drawer-menu-icon"}),Object(x.jsx)("div",{className:"drawer-menu-label",children:"Trending"})]}),Object(x.jsxs)("div",{className:"drawer-menu-item",onClick:function(){e.push({pathname:"/new",state:{filter:"new"}})},children:[Object(x.jsx)(T.a,{class:"drawer-menu-icon"}),Object(x.jsx)("div",{className:"drawer-menu-label",children:"New Releases"})]}),Object(x.jsxs)("div",{className:"drawer-menu-item",onClick:function(){e.push({pathname:"/comingsoon",state:{filter:"comingsoon"}})},children:[Object(x.jsx)(F.a,{class:"drawer-menu-icon"}),Object(x.jsx)("div",{className:"drawer-menu-label",children:"Coming Soon"})]}),Object(x.jsxs)("div",{className:"drawer-menu-item",onClick:function(){e.push({pathname:"/favourites",state:{filter:"favourites"}})},children:[Object(x.jsx)(L.a,{class:"drawer-menu-icon"}),Object(x.jsx)("div",{className:"drawer-menu-label",children:"Top Rated"})]})]}),Object(x.jsx)("div",{className:"expand-drawer-container",onClick:function(){n(h({expand:!t}));var e=t,c=document.querySelector(".drawer-container"),r=c.querySelectorAll(".drawer-menu-label"),a=c.querySelectorAll(".drawer-menu-icon");e?(a.forEach((function(e){e.style.transform="translateX(0)"})),r.forEach((function(e){e.style.opacity=0}))):(a.forEach((function(e){e.style.transform="translateX(-150px)"})),r.forEach((function(e){e.style.opacity=1})))},style:{left:t?350:20},children:t?Object(x.jsx)(X.a,{class:"expand-drawer"}):Object(x.jsx)(q.a,{class:"expand-drawer"})})]})}),I=(n(56),function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"home-page-container",children:Object(x.jsx)(k,{})})})}),M=n(17),R=n.n(M),A=n(26),J=(n(58),function(e){var t=e.movieList,n=e.type,c=Object(l.c)((function(e){return e.drawer})).expand,r=Object(o.e)(),a=function(e){var t,n;return e<50?(t=255,n=Math.round(5.1*e)):(n=255,t=Math.round(510-5.1*e)),"#"+("000000"+(65536*t+256*n+0).toString(16)).slice(-6)};return Object(x.jsxs)("div",{className:"movie-grid-container",style:{transform:c?"translateX(50px)":"translateX(-100px)"},children:[Object(x.jsx)("div",{className:"movie-grid-header",children:n}),Object(x.jsx)("div",{className:"movie-grid-content",children:t.map((function(e,t){return Object(x.jsxs)("div",{className:"movie-grid-item-container",children:[Object(x.jsxs)("div",{className:"movie-grid-item",onClick:function(){!function(e){r.push({pathname:"/movie/".concat(e.original_title),state:{movieObj:e}})}(e)},children:[Object(x.jsx)("img",{className:"movie-grid-poster",src:e.poster_path,alt:""}),Object(x.jsx)("div",{className:"movie-grid-overview-container",children:Object(x.jsx)("div",{className:"movie-grid-overview",children:e.overview})})]}),Object(x.jsxs)("div",{className:"movie-grid-title",children:[e.title," ",Object(x.jsxs)("div",{style:{color:a(10*e.vote_average)},children:[Object(x.jsx)("img",{className:"movie-grid-star",src:"https://image.flaticon.com/icons/png/512/1828/1828884.png",alt:""})," ",e.vote_average]})]})]},t)}))})]})}),P=(n(59),function(e){var t=e.history.location.state.movieObj,n=function(){var e=Object(A.a)(R.a.mark((function e(){return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/trailer/".concat(t.id)).then((function(e){return e.json()})).then((function(e){var t=e.trailer;return window.open(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"movie-view-container",children:Object(x.jsx)("div",{className:"movie-view-content",children:Object(x.jsxs)("div",{className:"movie-view-main",children:[Object(x.jsxs)("div",{className:"movie-view-poster-container",children:[Object(x.jsx)("img",{className:"movie-view-poster",src:t.poster_path,alt:""}),Object(x.jsx)("div",{className:"movie-view-trailer-label",onClick:n,children:"View Trailer"})]}),Object(x.jsxs)("div",{className:"movie-view-information",children:[Object(x.jsx)("div",{className:"movie-view-title",children:t.title}),Object(x.jsx)("div",{className:"movie-view-info-header",children:"Score:"}),Object(x.jsxs)("div",{className:"movie-view-info-content",children:[t.vote_average," / 10"]}),Object(x.jsx)("div",{className:"movie-view-info-header",children:"Genres:"}),Object(x.jsx)("div",{children:t.genre_list.map((function(e,t){return Object(x.jsx)("div",{className:"movie-view-info-content",children:e})}))}),Object(x.jsx)("div",{className:"movie-view-info-header",children:"Summary:"}),Object(x.jsx)("div",{className:"movie-view-info-content",children:t.overview})]})]})})})})}),V=(n(60),function(e){var t=e.history.location.state.filter,n=Object(c.useState)([]),r=Object(f.a)(n,2),a=r[0],i=r[1],s=Object(c.useState)(!0),o=Object(f.a)(s,2),l=o[0],j=o[1],d=t;return"comingsoon"===d?d="coming soon":d.includes("search/")&&(d='results for "'.concat(d.substring(7),'":')),Object(c.useEffect)(Object(A.a)(R.a.mark((function e(){var n;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j(!0),e.next=3,fetch("/".concat(t)).then((function(e){return e.json()})).then((function(e){var t=e.results;i(t)}));case 3:return n=setTimeout((function(){j(!1)}),1e3),e.abrupt("return",(function(){clearTimeout(n)}));case 5:case"end":return e.stop()}}),e)}))),[t]),Object(x.jsx)(x.Fragment,{children:Object(x.jsx)("div",{className:"movie-page-container",children:l?Object(x.jsx)(y.a,{class:"progress-icon"}):Object(x.jsx)(J,{movieList:a,type:d})})})}),z=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(l.a,{store:O,children:Object(x.jsxs)(s.a,{children:[Object(x.jsx)(p,{}),Object(x.jsx)(D,{}),Object(x.jsx)(o.a,{exact:!0,path:"/",component:I}),Object(x.jsx)(o.a,{exact:!0,path:"/:string",component:V}),Object(x.jsx)(o.a,{exact:!0,path:"/search/:search",component:V}),Object(x.jsx)(o.a,{exact:!0,path:"/movie/:movie",component:P}),Object(x.jsx)(g,{})]})})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,85)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};i.a.render(Object(x.jsx)(r.a.StrictMode,{children:Object(x.jsx)(z,{})}),document.getElementById("root")),B()}},[[61,1,2]]]);
//# sourceMappingURL=main.75ba2230.chunk.js.map