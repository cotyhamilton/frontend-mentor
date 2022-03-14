import{S as U,i as W,s as X,e as i,t as x,k as R,c as h,a as f,h as D,d as n,m as q,N as $,b as o,g as T,H as r,M as B,O as Y,P as Z,q as O,Q as ee,R as te,T as re}from"../chunks/vendor-8ee07fe2.js";function z(_,l,v){const c=_.slice();return c[1]=l[v],c}function J(_){let l,v,c=_[1].name+"",j,y,m,p,E,H,k,u,w=_[1].link+"",C,A,M,g,d,P,b,s;return{c(){l=i("article"),v=i("header"),j=x(c),y=R(),m=i("a"),p=i("img"),k=R(),u=i("a"),C=x(w),M=R(),g=i("a"),d=i("img"),b=R(),this.h()},l(e){l=h(e,"ARTICLE",{class:!0});var a=f(l);v=h(a,"HEADER",{});var t=f(v);j=D(t,c),t.forEach(n),y=q(a),m=h(a,"A",{href:!0,class:!0});var I=f(m);p=h(I,"IMG",{src:!0,alt:!0,class:!0}),I.forEach(n),k=q(a),u=h(a,"A",{href:!0,class:!0});var S=f(u);C=D(S,w),S.forEach(n),M=q(a),g=h(a,"A",{href:!0,class:!0});var V=f(g);d=h(V,"IMG",{src:!0,alt:!0,width:!0,class:!0}),V.forEach(n),b=q(a),a.forEach(n),this.h()},h(){$(p.src,E=_[1].image)||o(p,"src",E),o(p,"alt","project thumbnail"),o(p,"class","svelte-j5rub"),o(m,"href",H=_[1].link),o(m,"class","svelte-j5rub"),o(u,"href",A=_[1].link),o(u,"class","svelte-j5rub"),$(d.src,P="/github-logo.png")||o(d,"src",P),o(d,"alt","github-logo"),o(d,"width","36"),o(d,"class","svelte-j5rub"),o(g,"href","https://github.com/cotyhamilton/frontendmentor"),o(g,"class","svelte-j5rub"),o(l,"class","project svelte-j5rub")},m(e,a){T(e,l,a),r(l,v),r(v,j),r(l,y),r(l,m),r(m,p),r(l,k),r(l,u),r(u,C),r(l,M),r(l,g),r(g,d),r(l,b)},p:B,i(e){s||Y(()=>{s=te(l,re,{y:-5,duration:1e3}),s.start()})},o:B,d(e){e&&n(l)}}}function le(_){let l,v,c,j,y,m,p,E,H,k,u,w,C,A,M,g,d,P,b=_[0],s=[];for(let e=0;e<b.length;e+=1)s[e]=J(z(_,b,e));return{c(){l=i("link"),v=R(),c=i("div"),j=i("nav"),y=i("h1"),m=x("FrontendMentor Projects"),p=R(),E=i("div");for(let e=0;e<s.length;e+=1)s[e].c();H=R(),k=i("footer"),u=i("div"),w=i("p"),C=x("Built with "),A=i("a"),M=x("SvelteKit"),g=R(),d=i("a"),P=x("frontendmentor.io"),this.h()},l(e){const a=Z('[data-svelte="svelte-1ix7wzj"]',document.head);l=h(a,"LINK",{rel:!0,href:!0}),a.forEach(n),v=q(e),c=h(e,"DIV",{class:!0});var t=f(c);j=h(t,"NAV",{class:!0});var I=f(j);y=h(I,"H1",{});var S=f(y);m=D(S,"FrontendMentor Projects"),S.forEach(n),I.forEach(n),p=q(t),E=h(t,"DIV",{class:!0});var V=f(E);for(let N=0;N<s.length;N+=1)s[N].l(V);V.forEach(n),H=q(t),k=h(t,"FOOTER",{class:!0});var G=f(k);u=h(G,"DIV",{class:!0});var F=f(u);w=h(F,"P",{});var K=f(w);C=D(K,"Built with "),A=h(K,"A",{href:!0});var L=f(A);M=D(L,"SvelteKit"),L.forEach(n),K.forEach(n),g=q(F),d=h(F,"A",{href:!0});var Q=f(d);P=D(Q,"frontendmentor.io"),Q.forEach(n),F.forEach(n),G.forEach(n),t.forEach(n),this.h()},h(){document.title="Coty Hamilton",o(l,"rel","stylesheet"),o(l,"href","/montana.min.css"),o(j,"class","container svelte-j5rub"),o(E,"class","flex container svelte-j5rub"),o(A,"href","https://kit.svelte.dev"),o(d,"href","https://www.frontendmentor.io/home"),o(u,"class","container"),o(k,"class","footer svelte-j5rub"),o(c,"class","body svelte-j5rub")},m(e,a){r(document.head,l),T(e,v,a),T(e,c,a),r(c,j),r(j,y),r(y,m),r(c,p),r(c,E);for(let t=0;t<s.length;t+=1)s[t].m(E,null);r(c,H),r(c,k),r(k,u),r(u,w),r(w,C),r(w,A),r(A,M),r(u,g),r(u,d),r(d,P)},p(e,[a]){if(a&1){b=e[0];let t;for(t=0;t<b.length;t+=1){const I=z(e,b,t);s[t]?(s[t].p(I,a),O(s[t],1)):(s[t]=J(I),s[t].c(),O(s[t],1),s[t].m(E,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=b.length}},i(e){for(let a=0;a<b.length;a+=1)O(s[a])},o:B,d(e){n(l),e&&n(v),e&&n(c),ee(s,e)}}}function ae(_){return[[{name:"QR Code Component",link:"/qr-code-component",image:"/qr-code-component/desktop-preview.jpg"},{name:"Rest Countries API",link:"/rest-countries",image:"/rest-countries/desktop-preview.jpg"}]]}class oe extends U{constructor(l){super();W(this,l,ae,le,X,{})}}export{oe as default};
