import{S as s,i as t,s as a,e,t as l,k as i,c as o,a as r,g as c,n,d as u,b as h,F as f,f as d,H as k,I as g,E as v,l as m,Q as p}from"../chunks/vendor-3a42b241.js";import{s as y}from"../chunks/frdata-39ced9f7.js";function E(s,t,a){const e=s.slice();return e[0]=t[a],e}function x(s,t,a){const e=s.slice();return e[0]=t[a],e}function b(s){let t,a,v,m,p,y,E,x,b,I,w,D,V,A,P,H,_,j,z=s[0].first_name+"",N=s[0].last_name+"",S=s[0].bio+"";return{c(){t=e("li"),a=e("a"),v=e("div"),m=e("h1"),p=l(z),y=i(),E=l(N),x=i(),b=e("p"),I=l(S),w=i(),D=e("div"),V=e("span"),A=i(),P=e("span"),H=l("Read story"),j=i(),this.h()},l(s){t=o(s,"LI",{class:!0});var e=r(t);a=o(e,"A",{href:!0,"uk-toggle":!0,class:!0});var l=r(a);v=o(l,"DIV",{"uk-height-viewport":!0,class:!0,style:!0});var i=r(v);m=o(i,"H1",{class:!0,style:!0});var h=r(m);p=c(h,z),y=n(h),E=c(h,N),h.forEach(u),x=n(i),b=o(i,"P",{class:!0});var f=r(b);I=c(f,S),f.forEach(u),w=n(i),D=o(i,"DIV",{class:!0});var d=r(D);V=o(d,"SPAN",{class:!0,"uk-icon":!0}),r(V).forEach(u),A=n(d),P=o(d,"SPAN",{class:!0,style:!0});var k=r(P);H=c(k,"Read story"),k.forEach(u),d.forEach(u),i.forEach(u),l.forEach(u),j=n(e),e.forEach(u),this.h()},h(){h(m,"class","uk-text-left uk-margin-top"),f(m,"font-weight","600"),h(b,"class","uk-text-meta uk-margin-top-medium"),h(V,"class","uk-light uk-margin-small-right"),h(V,"uk-icon","info"),h(P,"class","uk-light"),f(P,"font-size","14px"),h(D,"class","uk-card-footer uk-position-bottom"),h(v,"uk-height-viewport","offset-top: true"),h(v,"class","uk-card uk-card-body uk-height-medium uk-light svelte-5rli68"),f(v,"background-color",s[0].color),h(a,"href",_="#"+s[0].id),h(a,"uk-toggle",""),h(a,"class","svelte-5rli68"),h(t,"class","zoom uk-transition-toggle uk-animation-toggle svelte-5rli68")},m(s,e){d(s,t,e),k(t,a),k(a,v),k(v,m),k(m,p),k(m,y),k(m,E),k(v,x),k(v,b),k(b,I),k(v,w),k(v,D),k(D,V),k(D,A),k(D,P),k(P,H),k(t,j)},p:g,d(s){s&&u(t)}}}function I(s){let t,a,m,p,y,E,x,b,I,w,D,V,A,P,H,_,j,z,N,S,B,L,R,T,U,W,F,G,M,O,Q=s[0].first_name+"",q=s[0].last_name+"",C=s[0].bio+"",J=s[0].storyA+"",K=s[0].storyB+"";return{c(){t=e("div"),a=e("div"),m=e("button"),p=i(),y=e("div"),E=e("img"),b=i(),I=e("div"),w=e("h1"),D=l(Q),V=i(),A=l(q),P=i(),H=e("p"),_=l(C),j=i(),z=e("h1"),N=l("Which initiatives have you taken/are you taking?"),S=i(),B=e("p"),L=l(J),R=i(),T=e("h1"),U=l("Do you have any tips to convince your colleagues?"),W=i(),F=e("p"),G=l(K),M=i(),this.h()},l(s){t=o(s,"DIV",{id:!0,class:!0,"uk-modal":!0});var e=r(t);a=o(e,"DIV",{class:!0});var l=r(a);m=o(l,"BUTTON",{class:!0,type:!0,"uk-close":!0}),r(m).forEach(u),p=n(l),y=o(l,"DIV",{class:!0,"uk-grid":!0});var i=r(y);E=o(i,"IMG",{src:!0,alt:!0}),b=n(i),I=o(i,"DIV",{class:!0});var h=r(I);w=o(h,"H1",{});var f=r(w);D=c(f,Q),V=n(f),A=c(f,q),f.forEach(u),P=n(h),H=o(h,"P",{class:!0});var d=r(H);_=c(d,C),d.forEach(u),j=n(h),z=o(h,"H1",{style:!0});var k=r(z);N=c(k,"Which initiatives have you taken/are you taking?"),k.forEach(u),S=n(h),B=o(h,"P",{class:!0});var g=r(B);L=c(g,J),g.forEach(u),R=n(h),T=o(h,"H1",{style:!0});var v=r(T);U=c(v,"Do you have any tips to convince your colleagues?"),v.forEach(u),W=n(h),F=o(h,"P",{class:!0});var x=r(F);G=c(x,K),x.forEach(u),h.forEach(u),i.forEach(u),l.forEach(u),M=n(e),e.forEach(u),this.h()},h(){h(m,"class","uk-modal-close-full uk-close-large"),h(m,"type","button"),h(m,"uk-close",""),v(E.src,x="/stories_pics/"+s[0].picture)||h(E,"src",x),h(E,"alt",""),h(H,"class","uk-text-meta"),f(z,"text-align","left"),f(z,"font-size","20px"),f(z,"font-weight","600"),h(B,"class","uk-text-justify"),f(T,"text-align","left"),f(T,"font-size","20px"),f(T,"font-weight","600"),h(F,"class","uk-text-justify"),h(I,"class","uk-padding-large"),h(y,"class","uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"),h(y,"uk-grid",""),h(a,"class","uk-modal-dialog"),h(t,"id",O=s[0].id),h(t,"class","uk-modal-full"),h(t,"uk-modal","")},m(s,e){d(s,t,e),k(t,a),k(a,m),k(a,p),k(a,y),k(y,E),k(y,b),k(y,I),k(I,w),k(w,D),k(w,V),k(w,A),k(I,P),k(I,H),k(H,_),k(I,j),k(I,z),k(z,N),k(I,S),k(I,B),k(B,L),k(I,R),k(I,T),k(T,U),k(I,W),k(I,F),k(F,G),k(t,M)},p:g,d(s){s&&u(t)}}}function w(s){let t,a,l,c,f,v,w,D,V=y,A=[];for(let e=0;e<V.length;e+=1)A[e]=b(x(s,V,e));let P=y,H=[];for(let e=0;e<P.length;e+=1)H[e]=I(E(s,P,e));return{c(){t=e("div"),a=e("ul");for(let s=0;s<A.length;s+=1)A[s].c();l=i(),c=e("a"),f=i(),v=e("a"),w=i();for(let s=0;s<H.length;s+=1)H[s].c();D=m(),this.h()},l(s){t=o(s,"DIV",{class:!0,tabindex:!0,"uk-slider":!0});var e=r(t);a=o(e,"UL",{class:!0});var i=r(a);for(let t=0;t<A.length;t+=1)A[t].l(i);i.forEach(u),l=n(e),c=o(e,"A",{class:!0,href:!0,"uk-slidenav-previous":!0,"uk-slider-item":!0}),r(c).forEach(u),f=n(e),v=o(e,"A",{class:!0,href:!0,"uk-slidenav-next":!0,"uk-slider-item":!0}),r(v).forEach(u),e.forEach(u),w=n(s);for(let t=0;t<H.length;t+=1)H[t].l(s);D=m(),this.h()},h(){h(a,"class","uk-margin-remove uk-padding-remove uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m"),h(c,"class","uk-position-center-left uk-position-small uk-hidden-hover svelte-5rli68"),h(c,"href","#"),h(c,"uk-slidenav-previous",""),h(c,"uk-slider-item","previous"),h(v,"class","uk-position-center-right uk-position-small uk-hidden-hover svelte-5rli68"),h(v,"href","#"),h(v,"uk-slidenav-next",""),h(v,"uk-slider-item","next"),h(t,"class","uk-position-relative uk-visible-toggle uk-light"),h(t,"tabindex","-1"),h(t,"uk-slider","")},m(s,e){d(s,t,e),k(t,a);for(let t=0;t<A.length;t+=1)A[t].m(a,null);k(t,l),k(t,c),k(t,f),k(t,v),d(s,w,e);for(let t=0;t<H.length;t+=1)H[t].m(s,e);d(s,D,e)},p(s,[t]){if(1&t){let e;for(V=y,e=0;e<V.length;e+=1){const l=x(s,V,e);A[e]?A[e].p(l,t):(A[e]=b(l),A[e].c(),A[e].m(a,null))}for(;e<A.length;e+=1)A[e].d(1);A.length=V.length}if(1&t){let a;for(P=y,a=0;a<P.length;a+=1){const e=E(s,P,a);H[a]?H[a].p(e,t):(H[a]=I(e),H[a].c(),H[a].m(D.parentNode,D))}for(;a<H.length;a+=1)H[a].d(1);H.length=P.length}},i:g,o:g,d(s){s&&u(t),p(A,s),s&&u(w),p(H,s),s&&u(D)}}}const D=!0;class V extends s{constructor(s){super(),t(this,s,null,w,a,{})}}export{V as default,D as prerender};