function m(){}function R(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function H(){return Object.create(null)}function g(t){t.forEach(P)}function W(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function _t(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function U(t){return Object.keys(t).length===0}function dt(t,n,e,i){if(t){const r=v(t,n,e,i);return t[0](r)}}function v(t,n,e,i){return t[1]&&i?R(e.ctx.slice(),t[1](i(n))):e.ctx}function ht(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)u[o]=n.dirty[o]|r[o];return u}return n.dirty|r}return n.dirty}function mt(t,n,e,i,r,u){if(r){const l=v(n,e,i,u);t.p(l,r)}}function pt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let T=!1;function V(){T=!0}function X(){T=!1}function Y(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let s=0;s<n.length;s++){const a=n[s];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const s=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=s?r+1:Y(1,r,x=>n[e[x]].claim_order,s))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);u.reverse(),l.sort((c,s)=>c.claim_order-s.claim_order);for(let c=0,s=0;c<l.length;c++){for(;s<u.length&&l[c].claim_order>=u[s].claim_order;)s++;const a=s<u.length?u[s]:null;t.insertBefore(l[c],a)}}function tt(t,n){if(T){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function nt(t,n,e){t.insertBefore(n,e||null)}function et(t,n,e){T&&!e?tt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function E(t){t.parentNode.removeChild(t)}function yt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function D(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function gt(){return j(" ")}function xt(){return j("")}function bt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function it(t){return Array.from(t.childNodes)}function G(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,n,e,i,r=!1){G(t);const u=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,n,e,i){return F(t,r=>r.nodeName===n,r=>{const u=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||u.push(o.name)}u.forEach(l=>r.removeAttribute(l))},()=>i(n))}function $t(t,n,e){return rt(t,n,e,D)}function ct(t,n){return F(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>j(n),!0)}function wt(t){return ct(t," ")}function B(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function At(t){const n=B(t,"HTML_TAG_START",0),e=B(t,"HTML_TAG_END",n);if(n===e)return new L;G(t);const i=t.splice(n,e-n+1);E(i[0]),E(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(r)}function Et(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function Tt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function Nt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class lt{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=D(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)nt(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(E)}}class L extends lt{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}}let y;function p(t){y=t}function M(){if(!y)throw new Error("Function called outside component initialization");return y}function St(t){M().$$.on_mount.push(t)}function kt(t){M().$$.after_update.push(t)}function jt(t,n){M().$$.context.set(t,n)}const h=[],z=[],w=[],O=[],I=Promise.resolve();let S=!1;function J(){S||(S=!0,I.then(K))}function Mt(){return J(),I}function k(t){w.push(t)}const N=new Set;let $=0;function K(){const t=y;do{for(;$<h.length;){const n=h[$];$++,p(n),ot(n.$$)}for(p(null),h.length=0,$=0;z.length;)z.pop()();for(let n=0;n<w.length;n+=1){const e=w[n];N.has(e)||(N.add(e),e())}w.length=0}while(h.length);for(;O.length;)O.pop()();S=!1,N.clear(),p(t)}function ot(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}const A=new Set;let _;function qt(){_={r:0,c:[],p:_}}function Ct(){_.r||g(_.c),_=_.p}function st(t,n){t&&t.i&&(A.delete(t),t.i(n))}function Ht(t,n,e,i){if(t&&t.o){if(A.has(t))return;A.add(t),_.c.push(()=>{A.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Bt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const l=t[u],o=n[u];if(o){for(const c in l)c in o||(i[c]=1);for(const c in o)r[c]||(e[c]=o[c],r[c]=1);t[u]=o}else for(const c in l)r[c]=1}for(const l in i)l in e||(e[l]=void 0);return e}function Lt(t){return typeof t=="object"&&t!==null?t:{}}function zt(t){t&&t.c()}function Ot(t,n){t&&t.l(n)}function ut(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:l,after_update:o}=t.$$;r&&r.m(n,e),i||k(()=>{const c=u.map(P).filter(W);l?l.push(...c):g(c),t.$$.on_mount=[]}),o.forEach(k)}function ft(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function at(t,n){t.$$.dirty[0]===-1&&(h.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Pt(t,n,e,i,r,u,l,o=[-1]){const c=y;p(t);const s=t.$$={fragment:null,ctx:null,props:u,update:m,not_equal:r,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(s.root);let a=!1;if(s.ctx=e?e(t,n.props||{},(f,x,...q)=>{const C=q.length?q[0]:x;return s.ctx&&r(s.ctx[f],s.ctx[f]=C)&&(!s.skip_bound&&s.bound[f]&&s.bound[f](C),a&&at(t,f)),x}):[],s.update(),a=!0,g(s.before_update),s.fragment=i?i(s.ctx):!1,n.target){if(n.hydrate){V();const f=it(n.target);s.fragment&&s.fragment.l(f),f.forEach(E)}else s.fragment&&s.fragment.c();n.intro&&st(t.$$.fragment),ut(t,n.target,n.anchor,n.customElement),X(),K()}p(c)}class vt{$destroy(){ft(this,1),this.$destroy=m}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!U(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Dt(t,n=m){let e;const i=new Set;function r(o){if(Q(t,o)&&(t=o,e)){const c=!d.length;for(const s of i)s[1](),d.push(s,t);if(c){for(let s=0;s<d.length;s+=2)d[s][0](d[s+1]);d.length=0}}}function u(o){r(o(t))}function l(o,c=m){const s=[o,c];return i.add(s),i.size===1&&(e=n(r)||m),o(t),()=>{i.delete(s),i.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:l}}export{Lt as A,ft as B,R as C,Dt as D,Mt as E,dt as F,mt as G,pt as H,ht as I,tt as J,m as K,Nt as L,yt as M,_t as N,L as O,At as P,vt as S,it as a,bt as b,$t as c,E as d,D as e,Tt as f,et as g,ct as h,Pt as i,Et as j,gt as k,xt as l,wt as m,qt as n,Ht as o,Ct as p,st as q,jt as r,Q as s,j as t,kt as u,St as v,zt as w,Ot as x,ut as y,Bt as z};
