(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(1),c=n.n(r),i=n(7),o=n.n(i),l=(n(12),n(6)),u=n(2);function a(t){for(var e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<e.length;n++){var r=Object(u.a)(e[n],3),c=r[0],i=r[1],o=r[2];if(t[c]&&t[c]===t[i]&&t[c]===t[o])return t[c]}return null}console.log(a([null,null,null,"X","O","O",null,null,null]));var s=n(0),b={background:"#95d5b2",border:"2px solid #74c69d",fontSize:"30px",fontWeight:"800",cursor:"pointer",outline:"none"},j=function(t){var e=t.value,n=t.onClick;return Object(s.jsx)("button",{style:b,onClick:n,children:e})},d={border:"4px solid #52b788",borderRadius:"10px",width:"650px",height:"650px",margin:"0 auto",display:"grid",gridTemplate:"repeat(3, 1fr) / repeat(3, 1fr)"},O=function(t){var e=t.squares,n=t.onClick;return Object(s.jsx)("div",{style:d,children:e.map((function(t,e){return Object(s.jsx)(j,{value:t,onClick:function(){return n(e)}},e)}))})},f={width:"200px",margin:"20px auto"},h={backgroundColor:"#40916c"},p={fontSize:"26px",fontWeight:"bold"},x=function(){var t=Object(r.useState)([Array(9).fill(null)]),e=Object(u.a)(t,2),n=e[0],c=e[1],i=Object(r.useState)(0),o=Object(u.a)(i,2),b=o[0],j=o[1],d=Object(r.useState)(!0),x=Object(u.a)(d,2),g=x[0],v=x[1],m=a(n[b]);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O,{squares:n[b],onClick:function(t){var e=n.slice(0,b+1),r=e[b],i=Object(l.a)(r);m||i[t]||(i[t]=g?"X":"O",c([].concat(Object(l.a)(e),[i])),j(e.length),v(!g))}}),Object(s.jsxs)("div",{style:f,children:[Object(s.jsx)("p",{style:p,children:m?"The winner is: "+m+"!":"The next Player is: "+(g?"X":"O")}),n.map((function(t,e){var n=e?"Go to move#".concat(e):"Go to start";return Object(s.jsx)("li",{children:Object(s.jsx)("button",{style:h,onClick:function(){return j(t=e),void v(t%2===0);var t},children:n})},e)}))]})]})},g=function(){return Object(s.jsx)(x,{})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,15)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),r(t),c(t),i(t),o(t)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(g,{})}),document.getElementById("root")),v()}},[[14,1,2]]]);
//# sourceMappingURL=main.c7ffacdd.chunk.js.map