!function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function l(t){t.forEach(n)}function o(t){return"function"==typeof t}function r(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(t,n){t.appendChild(n)}function s(t,n,e){t.insertBefore(n,e||null)}function i(t){t.parentNode.removeChild(t)}function a(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function u(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return d(" ")}function h(){return d("")}function p(t,n,e,l){return t.addEventListener(n,e,l),()=>t.removeEventListener(n,e,l)}function m(t){return function(n){return n.preventDefault(),t.call(this,n)}}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function y(t,n){t.value=null==n?"":n}function v(t,n,e,l){t.style.setProperty(n,e,l?"important":"")}function $(t){const n={};for(const e of t)n[e.name]=e.value;return n}let k;function x(t){k=t}function w(){if(!k)throw new Error("Function called outside component initialization");return k}const C=[],_=[],L=[],P=[],E=Promise.resolve();let M=!1;function I(t){L.push(t)}let R=!1;const U=new Set;function N(){if(!R){R=!0;do{for(let t=0;t<C.length;t+=1){const n=C[t];x(n),T(n.$$)}for(x(null),C.length=0;_.length;)_.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];U.has(n)||(U.add(n),n())}L.length=0}while(C.length);for(;P.length;)P.pop()();M=!1,R=!1,U.clear()}}function T(t){if(null!==t.fragment){t.update(),l(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(I)}}const j=new Set;let H,A;function S(t,n){t&&t.i&&(j.delete(t),t.i(n))}function Y(t,n){const e=n.token={};function o(t,o,r,c){if(n.token!==e)return;n.resolved=c;let s=n.ctx;void 0!==r&&(s=s.slice(),s[r]=c);const i=t&&(n.current=t)(s);let a=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(H={r:0,c:[],p:H},function(t,n,e,l){if(t&&t.o){if(j.has(t))return;j.add(t),H.c.push((()=>{j.delete(t),l&&(e&&t.d(1),l())})),t.o(n)}}(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),H.r||l(H.c),H=H.p)})):n.block.d(1),i.c(),S(i,1),i.m(n.mount(),n.anchor),a=!0),n.block=i,n.blocks&&(n.blocks[o]=i),a&&N()}if((r=t)&&"object"==typeof r&&"function"==typeof r.then){const e=w();if(t.then((t=>{x(e),o(n.then,1,n.value,t),x(null)}),(t=>{if(x(e),o(n.catch,2,n.error,t),x(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var r}function K(t,n,e){const l=n.slice(),{resolved:o}=t;t.current===t.then&&(l[t.value]=o),t.current===t.catch&&(l[t.error]=o),t.block.p(l,e)}function O(t,n){t.d(1),n.delete(t.key)}function z(t,n,e,l,o,r,c,s,i,a,u,d){let f=t.length,h=r.length,p=f;const m={};for(;p--;)m[t[p].key]=p;const b=[],g=new Map,y=new Map;for(p=h;p--;){const t=d(o,r,p),s=e(t);let i=c.get(s);i?l&&i.p(t,n):(i=a(s,t),i.c()),g.set(s,b[p]=i),s in m&&y.set(s,Math.abs(p-m[s]))}const v=new Set,$=new Set;function k(t){S(t,1),t.m(s,u),c.set(t.key,t),u=t.first,h--}for(;f&&h;){const n=b[h-1],e=t[f-1],l=n.key,o=e.key;n===e?(u=n.first,f--,h--):g.has(o)?!c.has(l)||v.has(l)?k(n):$.has(o)?f--:y.get(l)>y.get(o)?($.add(l),k(n)):(v.add(o),f--):(i(e,c),f--)}for(;f--;){const n=t[f];g.has(n.key)||i(n,c)}for(;h;)k(b[h-1]);return b}function B(t,n){-1===t.$$.dirty[0]&&(C.push(t),M||(M=!0,E.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function V(r,c,s,a,u,d,f,h=[-1]){const p=k;x(r);const m=r.$$={fragment:null,ctx:null,props:d,update:t,not_equal:u,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(c.context||(p?p.$$.context:[])),callbacks:e(),dirty:h,skip_bound:!1,root:c.target||p.$$.root};f&&f(m.root);let b=!1;if(m.ctx=s?s(r,c.props||{},((t,n,...e)=>{const l=e.length?e[0]:n;return m.ctx&&u(m.ctx[t],m.ctx[t]=l)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](l),b&&B(r,t)),n})):[],m.update(),b=!0,l(m.before_update),m.fragment=!!a&&a(m.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);m.fragment&&m.fragment.l(t),t.forEach(i)}else m.fragment&&m.fragment.c();c.intro&&S(r.$$.fragment),function(t,e,r,c){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,r),c||I((()=>{const e=i.map(n).filter(o);a?a.push(...e):l(e),t.$$.on_mount=[]})),u.forEach(I)}(r,c.target,c.anchor,c.customElement),N()}x(p)}"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(n).filter(o);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,n,e){this[t]=e}disconnectedCallback(){l(this.$$.on_disconnect)}$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(l(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class D{constructor(t="",n="https://rmbproxy1.devnet.grid.tf",e=""){this.url=t,this.proxyURL=n,this.mnemonics=e}get valid(){const{proxyURL:t,mnemonics:n,url:e}=this;return""!==t&&""!==n&&""!==e}}var F,W,q,G;const{HTTPMessageBusClient:J}=null!==(W=null===(F=window.configs)||void 0===F?void 0:F.client)&&void 0!==W?W:{},{GridClient:Q}=null!==(G=null===(q=window.configs)||void 0===q?void 0:q.grid3_client)&&void 0!==G?G:{};class X{constructor(t){this.grid=t,this.data={}}async load(t){if(console.log("loading",t),!this.data[t]){const n=this.grid[t],e=(await n.list()).map((t=>n.getObj(t)));this.data[t]=await Promise.all(e)}return this.data[t]}static init(t){const{proxyURL:n,url:e,mnemonics:l}=t,o=new J(0,n),r=new Q(e,l,o);return r.connect().then((()=>new X(r)))}}function Z(t,n,e){const l=t.slice();return l[17]=n[e][0],l[19]=e,l}function tt(t,n,e){const l=t.slice();return l[17]=n[e],l[19]=e,l}function nt(t,n,e){const l=t.slice();return l[0]=n[e],l}function et(t,n,e){const l=t.slice();return l[13]=n[e],l[14]=n,l[15]=e,l}function lt(n){let e;return{c(){e=d("Elements")},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function ot(t){let n,e=t[0].toLocaleUpperCase()+"";return{c(){n=d(e)},m(t,e){s(t,n,e)},p(t,l){1&l&&e!==(e=t[0].toLocaleUpperCase()+"")&&g(n,e)},d(t){t&&i(n)}}}function rt(t){let n,e,l,o,r,a,d,m,g=!t[0]&&it(t),y=(!t[0]&&"Kubernetes"===t[1]||"k8s"===t[0])&&ut(t),$=("Virtual Machines"===t[1]||"Caprover"===t[1]||"caprover"===t[0]||"vm"===t[0])&&gt(t);return{c(){n=u("div"),e=u("button"),e.textContent="Back",l=f(),g&&g.c(),o=f(),y&&y.c(),r=f(),$&&$.c(),a=h(),b(e,"class","button is-primary is-outlined mr-2"),v(n,"display","flex")},m(i,u){s(i,n,u),c(n,e),c(n,l),g&&g.m(n,null),s(i,o,u),y&&y.m(i,u),s(i,r,u),$&&$.m(i,u),s(i,a,u),d||(m=p(e,"click",t[11]),d=!0)},p(t,e){t[0]?g&&(g.d(1),g=null):g?g.p(t,e):(g=it(t),g.c(),g.m(n,null)),!t[0]&&"Kubernetes"===t[1]||"k8s"===t[0]?y?y.p(t,e):(y=ut(t),y.c(),y.m(r.parentNode,r)):y&&(y.d(1),y=null),"Virtual Machines"===t[1]||"Caprover"===t[1]||"caprover"===t[0]||"vm"===t[0]?$?$.p(t,e):($=gt(t),$.c(),$.m(a.parentNode,a)):$&&($.d(1),$=null)},d(t){t&&i(n),g&&g.d(),t&&i(o),y&&y.d(t),t&&i(r),$&&$.d(t),t&&i(a),d=!1,m()}}}function ct(t){let n,e,l,o,r,a,h,g,y=[],$=new Map,k=t[7];const x=t=>t[13].symbol;for(let n=0;n<k.length;n+=1){let e=et(t,k,n),l=x(e);$.set(l,y[n]=Ct(l,e))}return{c(){n=u("form");for(let t=0;t<y.length;t+=1)y[t].c();e=f(),l=u("div"),o=u("button"),r=d("List Elements"),o.disabled=a=!t[2].valid,b(o,"type","submit"),b(o,"class","button is-primary"),v(l,"display","flex"),v(l,"justify-content","center")},m(i,a){s(i,n,a);for(let t=0;t<y.length;t+=1)y[t].m(n,null);c(n,e),c(n,l),c(l,o),c(o,r),h||(g=p(n,"submit",m(t[8])),h=!0)},p(t,l){132&l&&(k=t[7],y=z(y,l,x,1,t,k,$,n,O,Ct,e,et)),4&l&&a!==(a=!t[2].valid)&&(o.disabled=a)},d(t){t&&i(n);for(let t=0;t<y.length;t+=1)y[t].d();h=!1,g()}}}function st(n){let e;return{c(){e=u("p"),e.textContent="Loading...",b(e,"style","text-align: center; mt-2 mb-2")},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function it(t){let n,e,l,o=[],r=new Map,a=t[6];const d=t=>t[0].label;for(let n=0;n<a.length;n+=1){let e=nt(t,a,n),l=d(e);r.set(l,o[n]=at(l,e))}return{c(){n=u("div"),e=u("div"),l=u("ul");for(let t=0;t<o.length;t+=1)o[t].c();b(e,"class","tabs is-centered"),v(n,"width","100%")},m(t,r){s(t,n,r),c(n,e),c(e,l);for(let t=0;t<o.length;t+=1)o[t].m(l,null)},p(t,n){66&n&&(a=t[6],o=z(o,n,d,1,t,a,r,l,O,at,null,nt))},d(t){t&&i(n);for(let t=0;t<o.length;t+=1)o[t].d()}}}function at(t,n){let e,l,o,r,a,h,g,y,v=n[0].label+"";function $(){return n[12](n[0])}return{key:t,first:null,c(){e=u("li"),l=u("a"),o=u("span"),r=d(v),a=f(),b(l,"href","#!"),b(e,"class",h=n[1]===n[0].label?"is-active":""),this.first=e},m(t,n){s(t,e,n),c(e,l),c(l,o),c(o,r),c(e,a),g||(y=p(l,"click",m($)),g=!0)},p(t,l){n=t,2&l&&h!==(h=n[1]===n[0].label?"is-active":"")&&b(e,"class",h)},d(t){t&&i(e),g=!1,y()}}}function ut(t){let n,e,l={ctx:t,current:null,token:null,hasCatch:!1,pending:bt,then:ft,catch:dt,value:16};return Y(e=t[5].load("k8s"),l),{c(){n=h(),l.block.c()},m(t,e){s(t,n,e),l.block.m(t,l.anchor=e),l.mount=()=>n.parentNode,l.anchor=n},p(n,o){t=n,l.ctx=t,32&o&&e!==(e=t[5].load("k8s"))&&Y(e,l)||K(l,t,o)},d(t){t&&i(n),l.block.d(t),l.token=null,l=null}}}function dt(n){return{c:t,m:t,p:t,d:t}}function ft(t){let n,e,l,o,r,d=t[16],h=[];for(let n=0;n<d.length;n+=1)h[n]=mt(tt(t,d,n));return{c(){n=u("div"),e=u("table"),l=u("thead"),l.innerHTML='<tr><th title="position">#</th> \n                  <th>Name</th> \n                  <th>Public IP</th> \n                  <th>Yggdrasil IP</th> \n                  <th>Workers</th></tr>',o=f(),r=u("tbody");for(let t=0;t<h.length;t+=1)h[t].c();b(e,"class","table"),b(n,"class","table-container mt-2")},m(t,i){s(t,n,i),c(n,e),c(e,l),c(e,o),c(e,r);for(let t=0;t<h.length;t+=1)h[t].m(r,null)},p(t,n){if(32&n){let e;for(d=t[16],e=0;e<d.length;e+=1){const l=tt(t,d,e);h[e]?h[e].p(l,n):(h[e]=mt(l),h[e].c(),h[e].m(r,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=d.length}},d(t){t&&i(n),a(h,t)}}}function ht(n){let e;return{c(){e=u("td"),e.textContent="-"},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function pt(t){let n,e,l=t[17].masters[0].publicIP.gateway+"";return{c(){n=u("td"),e=d(l)},m(t,l){s(t,n,l),c(n,e)},p(t,n){32&n&&l!==(l=t[17].masters[0].publicIP.gateway+"")&&g(e,l)},d(t){t&&i(n)}}}function mt(t){let n,e,l,o,r,a,h,p,m,b,y,v,$,k,x=t[19]+1+"",w=t[17].masters[0].name+"",C=t[17].masters[0].yggIP+"",_=t[17].workers.length+"";function L(t,n){return t[17].masters[0].publicIP?pt:ht}let P=L(t),E=P(t);return{c(){n=u("tr"),e=u("th"),l=d(x),o=f(),r=u("td"),a=d(w),h=f(),E.c(),p=f(),m=u("td"),b=d(C),y=f(),v=u("td"),$=d(_),k=f()},m(t,i){s(t,n,i),c(n,e),c(e,l),c(n,o),c(n,r),c(r,a),c(n,h),E.m(n,null),c(n,p),c(n,m),c(m,b),c(n,y),c(n,v),c(v,$),c(n,k)},p(t,e){32&e&&w!==(w=t[17].masters[0].name+"")&&g(a,w),P===(P=L(t))&&E?E.p(t,e):(E.d(1),E=P(t),E&&(E.c(),E.m(n,p))),32&e&&C!==(C=t[17].masters[0].yggIP+"")&&g(b,C),32&e&&_!==(_=t[17].workers.length+"")&&g($,_)},d(t){t&&i(n),E.d()}}}function bt(n){let e;return{c(){e=u("p"),e.textContent="> Loading...",b(e,"class","mt-2")},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function gt(t){let n,e,l={ctx:t,current:null,token:null,hasCatch:!1,pending:wt,then:vt,catch:yt,value:16};return Y(e="Caprover"===t[1]||"caprover"===t[0]?t[9]():t[5].load("machines"),l),{c(){n=h(),l.block.c()},m(t,e){s(t,n,e),l.block.m(t,l.anchor=e),l.mount=()=>n.parentNode,l.anchor=n},p(n,o){t=n,l.ctx=t,35&o&&e!==(e="Caprover"===t[1]||"caprover"===t[0]?t[9]():t[5].load("machines"))&&Y(e,l)||K(l,t,o)},d(t){t&&i(n),l.block.d(t),l.token=null,l=null}}}function yt(n){return{c:t,m:t,p:t,d:t}}function vt(t){let n,e,l,o,r,d=t[16],h=[];for(let n=0;n<d.length;n+=1)h[n]=xt(Z(t,d,n));return{c(){n=u("div"),e=u("table"),l=u("thead"),l.innerHTML='<tr><th title="position">#</th> \n                  <th>Name</th> \n                  <th>Public IP</th> \n                  <th>Yggdrasil IP</th> \n                  <th>Flist</th></tr>',o=f(),r=u("tbody");for(let t=0;t<h.length;t+=1)h[t].c();b(e,"class","table"),b(n,"class","table-container mt-2")},m(t,i){s(t,n,i),c(n,e),c(e,l),c(e,o),c(e,r);for(let t=0;t<h.length;t+=1)h[t].m(r,null)},p(t,n){if(547&n){let e;for(d=t[16],e=0;e<d.length;e+=1){const l=Z(t,d,e);h[e]?h[e].p(l,n):(h[e]=xt(l),h[e].c(),h[e].m(r,null))}for(;e<h.length;e+=1)h[e].d(1);h.length=d.length}},d(t){t&&i(n),a(h,t)}}}function $t(n){let e;return{c(){e=u("td"),e.textContent="-"},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function kt(t){let n,e,l=t[17].publicIP.gateway+"";return{c(){n=u("td"),e=d(l)},m(t,l){s(t,n,l),c(n,e)},p(t,n){35&n&&l!==(l=t[17].publicIP.gateway+"")&&g(e,l)},d(t){t&&i(n)}}}function xt(t){let n,e,l,o,r,a,h,p,m,b,y,v,$,k,x=t[19]+1+"",w=t[17].name+"",C=t[17].yggIP+"",_=t[17].flist+"";function L(t,n){return t[17].publicIP?kt:$t}let P=L(t),E=P(t);return{c(){n=u("tr"),e=u("th"),l=d(x),o=f(),r=u("td"),a=d(w),h=f(),E.c(),p=f(),m=u("td"),b=d(C),y=f(),v=u("td"),$=d(_),k=f()},m(t,i){s(t,n,i),c(n,e),c(e,l),c(n,o),c(n,r),c(r,a),c(n,h),E.m(n,null),c(n,p),c(n,m),c(m,b),c(n,y),c(n,v),c(v,$),c(n,k)},p(t,e){35&e&&w!==(w=t[17].name+"")&&g(a,w),P===(P=L(t))&&E?E.p(t,e):(E.d(1),E=P(t),E&&(E.c(),E.m(n,p))),35&e&&C!==(C=t[17].yggIP+"")&&g(b,C),35&e&&_!==(_=t[17].flist+"")&&g($,_)},d(t){t&&i(n),E.d()}}}function wt(n){let e;return{c(){e=u("p"),e.textContent="> Loading...",b(e,"class","mt-2")},m(t,n){s(t,e,n)},p:t,d(t){t&&i(e)}}}function Ct(t,n){let e,l,o,r,a,h,m,g,v,$=n[13].label+"";function k(){n[10].call(h,n[13])}return{key:t,first:null,c(){e=u("div"),l=u("p"),o=d($),r=f(),a=u("div"),h=u("input"),b(l,"class","label"),b(h,"class","input"),b(h,"type","text"),b(h,"placeholder",m=n[13].placeholder),b(a,"class","control"),b(e,"class","field"),this.first=e},m(t,i){s(t,e,i),c(e,l),c(l,o),c(e,r),c(e,a),c(a,h),y(h,n[2][n[13].symbol]),g||(v=p(h,"input",k),g=!0)},p(t,e){n=t,132&e&&h.value!==n[2][n[13].symbol]&&y(h,n[2][n[13].symbol])},d(t){t&&i(e),g=!1,v()}}}function _t(n){let e,l,o,r,a,h,p;function m(t,n){return t[0]?ot:lt}let g=m(n),y=g(n);function $(t,n){return t[3]?st:t[4]?rt:ct}let k=$(n),x=k(n);return{c(){e=u("div"),l=u("section"),o=u("h4"),r=d("List Deployed "),y.c(),a=f(),h=u("hr"),p=f(),x.c(),this.c=t,b(o,"class","is-size-4 mb-4"),b(l,"class","box"),v(e,"padding","15px")},m(t,n){s(t,e,n),c(e,l),c(l,o),c(o,r),y.m(o,null),c(l,a),c(l,h),c(l,p),x.m(l,null)},p(t,[n]){g===(g=m(t))&&y?y.p(t,n):(y.d(1),y=g(t),y&&(y.c(),y.m(o,null))),k===(k=$(t))&&x?x.p(t,n):(x.d(1),x=k(t),x&&(x.c(),x.m(l,null)))},i:t,o:t,d(t){t&&i(e),y.d(),x.d()}}}function Lt(t,n,e){let{tab:l}=n;let o="Kubernetes";const r=new D("wss://tfchain.dev.threefold.io/ws",void 0,"fiscal play spin all describe because stem disease coral call bronze please");let c,s=!1,i=!1;const a=[{label:"Proxy URL",symbol:"proxyURL",placeholder:"Your Proxy URL."},{label:"URL",symbol:"url",placeholder:"Your substrate URL."},{label:"Mnemonics",symbol:"mnemonics",placeholder:"Your Mnemonics."}];return t.$$set=t=>{"tab"in t&&e(0,l=t.tab)},[l,o,r,s,i,c,[{label:"Kubernetes"},{label:"Virtual Machines"},{label:"Caprover"}],a,function(){e(4,i=!0),e(3,s=!0),X.init(r).then((t=>{e(5,c=t),console.log(c)})).finally((()=>e(3,s=!1)))},async function(){return(await c.load("machines")).filter((([t])=>t.name.startsWith("caprover_leader")))},function(t){r[t.symbol]=this.value,e(2,r),e(7,a)},()=>e(4,i=!1),t=>e(1,o=t.label)]}!function(t,n){try{customElements.define(`tf-${t}`,n)}catch(n){console.warn(`Element with name '${t}' already defined.`)}}("deployedlist",class extends A{constructor(t){super(),this.shadowRoot.innerHTML='<style>@import url("https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css");.table{width:100%}</style>',V(this,{target:this.shadowRoot,props:$(this.attributes),customElement:!0},Lt,_t,r,{tab:0},null),t&&(t.target&&s(t.target,this,t.anchor),t.props&&(this.$set(t.props),N()))}static get observedAttributes(){return["tab"]}get tab(){return this.$$.ctx[0]}set tab(t){this.$$set({tab:t}),N()}})}();