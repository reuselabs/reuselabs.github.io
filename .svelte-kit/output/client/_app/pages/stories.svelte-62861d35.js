import{S as s,i as t,s as e,e as a,t as l,k as i,c as r,a as o,g as c,n,d as u,b as h,F as f,f as k,H as d,I as g,E as v,l as m,Q as p}from"../chunks/vendor-3a42b241.js";import{s as y}from"../chunks/frdata-39ced9f7.js";function E(s,t,e){const a=s.slice();return a[0]=t[e],a}function x(s,t,e){const a=s.slice();return a[0]=t[e],a}function b(s){let t,e,v,m,p,y,E,x,b,I,D,V,A,P,w,H,_,j,z=s[0].first_name+"",N=s[0].last_name+"",S=s[0].bio+"";return{c(){t=a("li"),e=a("a"),v=a("div"),m=a("h1"),p=l(z),y=i(),E=l(N),x=i(),b=a("p"),I=l(S),D=i(),V=a("div"),A=a("span"),P=i(),w=a("span"),H=l("Read story"),j=i(),this.h()},l(s){t=r(s,"LI",{class:!0});var a=o(t);e=r(a,"A",{href:!0,"uk-toggle":!0,class:!0});var l=o(e);v=r(l,"DIV",{class:!0,style:!0});var i=o(v);m=r(i,"H1",{class:!0,style:!0});var h=o(m);p=c(h,z),y=n(h),E=c(h,N),h.forEach(u),x=n(i),b=r(i,"P",{class:!0});var f=o(b);I=c(f,S),f.forEach(u),D=n(i),V=r(i,"DIV",{class:!0});var k=o(V);A=r(k,"SPAN",{class:!0,"uk-icon":!0}),o(A).forEach(u),P=n(k),w=r(k,"SPAN",{class:!0,style:!0});var d=o(w);H=c(d,"Read story"),d.forEach(u),k.forEach(u),i.forEach(u),l.forEach(u),j=n(a),a.forEach(u),this.h()},h(){h(m,"class","uk-text-center uk-margin-medium-left"),f(m,"font-weight","600"),h(b,"class","uk-text-meta uk-text-center uk-margin-medium-left"),h(A,"class","uk-light uk-margin-small-right"),h(A,"uk-icon","info"),h(w,"class","uk-light"),f(w,"font-size","14px"),h(V,"class","uk-card-footer uk-position-bottom"),h(v,"class","uk-card uk-card-body uk-height-medium uk-light svelte-5rli68"),f(v,"background-color",s[0].color),h(e,"href",_="#"+s[0].id),h(e,"uk-toggle",""),h(e,"class","svelte-5rli68"),h(t,"class","zoom uk-transition-toggle uk-animation-toggle svelte-5rli68")},m(s,a){k(s,t,a),d(t,e),d(e,v),d(v,m),d(m,p),d(m,y),d(m,E),d(v,x),d(v,b),d(b,I),d(v,D),d(v,V),d(V,A),d(V,P),d(V,w),d(w,H),d(t,j)},p:g,d(s){s&&u(t)}}}function I(s){let t,e,m,p,y,E,x,b,I,D,V,A,P,w,H,_,j,z,N,S,B,L,R,T,U,W,F,G,M,O,Q=s[0].first_name+"",q=s[0].last_name+"",C=s[0].bio+"",J=s[0].storyA+"",K=s[0].storyB+"";return{c(){t=a("div"),e=a("div"),m=a("button"),p=i(),y=a("div"),E=a("img"),b=i(),I=a("div"),D=a("h1"),V=l(Q),A=i(),P=l(q),w=i(),H=a("p"),_=l(C),j=i(),z=a("h1"),N=l("Which initiatives have you taken/are you taking?"),S=i(),B=a("p"),L=l(J),R=i(),T=a("h1"),U=l("Do you have any tips to convince your colleagues?"),W=i(),F=a("p"),G=l(K),M=i(),this.h()},l(s){t=r(s,"DIV",{id:!0,class:!0,"uk-modal":!0});var a=o(t);e=r(a,"DIV",{class:!0});var l=o(e);m=r(l,"BUTTON",{class:!0,type:!0,"uk-close":!0}),o(m).forEach(u),p=n(l),y=r(l,"DIV",{class:!0,"uk-grid":!0});var i=o(y);E=r(i,"IMG",{src:!0,alt:!0}),b=n(i),I=r(i,"DIV",{class:!0});var h=o(I);D=r(h,"H1",{});var f=o(D);V=c(f,Q),A=n(f),P=c(f,q),f.forEach(u),w=n(h),H=r(h,"P",{class:!0});var k=o(H);_=c(k,C),k.forEach(u),j=n(h),z=r(h,"H1",{style:!0});var d=o(z);N=c(d,"Which initiatives have you taken/are you taking?"),d.forEach(u),S=n(h),B=r(h,"P",{class:!0});var g=o(B);L=c(g,J),g.forEach(u),R=n(h),T=r(h,"H1",{style:!0});var v=o(T);U=c(v,"Do you have any tips to convince your colleagues?"),v.forEach(u),W=n(h),F=r(h,"P",{class:!0});var x=o(F);G=c(x,K),x.forEach(u),h.forEach(u),i.forEach(u),l.forEach(u),M=n(a),a.forEach(u),this.h()},h(){h(m,"class","uk-modal-close-full uk-close-large"),h(m,"type","button"),h(m,"uk-close",""),v(E.src,x="/stories_pics/"+s[0].picture)||h(E,"src",x),h(E,"alt",""),h(H,"class","uk-text-meta"),f(z,"text-align","left"),f(z,"font-size","20px"),f(z,"font-weight","600"),h(B,"class","uk-text-justify"),f(T,"text-align","left"),f(T,"font-size","20px"),f(T,"font-weight","600"),h(F,"class","uk-text-justify"),h(I,"class","uk-padding-large"),h(y,"class","uk-grid-collapse uk-child-width-1-2@s uk-flex-middle"),h(y,"uk-grid",""),h(e,"class","uk-modal-dialog"),h(t,"id",O=s[0].id),h(t,"class","uk-modal-full"),h(t,"uk-modal","")},m(s,a){k(s,t,a),d(t,e),d(e,m),d(e,p),d(e,y),d(y,E),d(y,b),d(y,I),d(I,D),d(D,V),d(D,A),d(D,P),d(I,w),d(I,H),d(H,_),d(I,j),d(I,z),d(z,N),d(I,S),d(I,B),d(B,L),d(I,R),d(I,T),d(T,U),d(I,W),d(I,F),d(F,G),d(t,M)},p:g,d(s){s&&u(t)}}}function D(s){let t,e,l,c,f,v,D,V,A=y,P=[];for(let a=0;a<A.length;a+=1)P[a]=b(x(s,A,a));let w=y,H=[];for(let a=0;a<w.length;a+=1)H[a]=I(E(s,w,a));return{c(){t=a("ul");for(let s=0;s<P.length;s+=1)P[s].c();e=i(),l=a("div"),c=a("a"),f=i(),v=a("a"),D=i();for(let s=0;s<H.length;s+=1)H[s].c();V=m(),this.h()},l(s){t=r(s,"UL",{class:!0,"uk-grid":!0});var a=o(t);for(let t=0;t<P.length;t+=1)P[t].l(a);a.forEach(u),e=n(s),l=r(s,"DIV",{class:!0,tabindex:!0,"uk-slider":!0});var i=o(l);c=r(i,"A",{class:!0,href:!0,"uk-slidenav-previous":!0,"uk-slider-item":!0}),o(c).forEach(u),f=n(i),v=r(i,"A",{class:!0,href:!0,"uk-slidenav-next":!0,"uk-slider-item":!0}),o(v).forEach(u),i.forEach(u),D=n(s);for(let t=0;t<H.length;t+=1)H[t].l(s);V=m(),this.h()},h(){h(t,"class","uk-child-width-1-3@s uk-grid-collapse uk-text-center uk-light uk-margin-remove uk-padding-remove"),h(t,"uk-grid",""),h(c,"class","uk-position-center-left uk-position-small uk-hidden-hover svelte-5rli68"),h(c,"href","#"),h(c,"uk-slidenav-previous",""),h(c,"uk-slider-item","previous"),h(v,"class","uk-position-center-right uk-position-small uk-hidden-hover svelte-5rli68"),h(v,"href","#"),h(v,"uk-slidenav-next",""),h(v,"uk-slider-item","next"),h(l,"class","uk-position-relative uk-visible-toggle uk-light"),h(l,"tabindex","-1"),h(l,"uk-slider","")},m(s,a){k(s,t,a);for(let e=0;e<P.length;e+=1)P[e].m(t,null);k(s,e,a),k(s,l,a),d(l,c),d(l,f),d(l,v),k(s,D,a);for(let t=0;t<H.length;t+=1)H[t].m(s,a);k(s,V,a)},p(s,[e]){if(1&e){let a;for(A=y,a=0;a<A.length;a+=1){const l=x(s,A,a);P[a]?P[a].p(l,e):(P[a]=b(l),P[a].c(),P[a].m(t,null))}for(;a<P.length;a+=1)P[a].d(1);P.length=A.length}if(1&e){let t;for(w=y,t=0;t<w.length;t+=1){const a=E(s,w,t);H[t]?H[t].p(a,e):(H[t]=I(a),H[t].c(),H[t].m(V.parentNode,V))}for(;t<H.length;t+=1)H[t].d(1);H.length=w.length}},i:g,o:g,d(s){s&&u(t),p(P,s),s&&u(e),s&&u(l),s&&u(D),p(H,s),s&&u(V)}}}const V=!0;class A extends s{constructor(s){super(),t(this,s,null,D,e,{})}}export{A as default,V as prerender};