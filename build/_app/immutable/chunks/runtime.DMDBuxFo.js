var Hn=Array.isArray,Yn=Array.from,Un=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,rn=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,en=Object.getPrototypeOf;function Vn(t){return typeof t=="function"}const Gn=()=>{};function Kn(t){return t()}function mt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,At=4,j=8,ut=16,A=32,z=64,nt=128,k=256,K=512,d=1024,I=2048,q=4096,b=8192,P=16384,sn=32768,gt=65536,$n=1<<17,an=1<<19,It=1<<20,Et=Symbol("$state"),Wn=Symbol("legacy props"),Xn=Symbol("");function xt(t){return t===this.v}function ln(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Zn(t,n){return t!==n}function St(t){return!ln(t,this.v)}function un(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function on(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function _n(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Jn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Qn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function vn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function nr(){J=!0}const rr=1,er=2,sr=4,ar=8,lr=16,ur=1,or=2,ir=4,fr=8,_r=16,cr=1,vr=2,pr=4,hr=1,dr=2,pn="[",hn="[!",dn="]",Ot={},Er=Symbol(),yr="http://www.w3.org/2000/svg";function ot(t,n){var r={f:0,v:t,reactions:null,equals:xt,version:0};return r}function wr(t){return Rt(ot(t))}function En(t,n=!1){var e;const r=ot(t);return n||(r.equals=St),J&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function Tr(t,n=!1){return Rt(En(t,n))}function Rt(t){return i!==null&&i.f&y&&(m===null?Nn([t]):m.push(t)),t}function mr(t,n){return it(t,tn(()=>pt(t))),n}function it(t,n){return i!==null&&vt()&&i.f&(y|ut)&&(m===null||!m.includes(t))&&vn(),yn(t,n)}function yn(t,n){return t.equals(n)||(t.v=n,t.version=Wt(),kt(t,I),vt()&&u!==null&&u.f&d&&!(u.f&A)&&(h!==null&&h.includes(t)?(T(u,I),tt(u)):g===null?Dn([t]):g.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=vt(),s=r.length,a=0;a<s;a++){var l=r[a],f=l.f;f&I||!e&&l===u||(T(l,n),f&(d|k)&&(f&y?kt(l,q):tt(l)))}}function Nt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function Ar(t){O=t}let w;function M(t){if(t===null)throw Nt(),Ot;return w=t}function gr(){return M(N(w))}function Ir(t){if(O){if(N(w)!==null)throw Nt(),Ot;w=t}}function xr(t=1){if(O){for(var n=t,r=w;n--;)r=N(r);w=r}}function Sr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===dn){if(t===0)return n;t-=1}else(r===pn||r===hn)&&(t+=1)}var e=N(n);n.remove(),n=e}}var yt,Dt,Ct;function Or(){if(yt===void 0){yt=window;var t=Element.prototype,n=Node.prototype;Dt=dt(n,"firstChild").get,Ct=dt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function N(t){return Ct.call(t)}function Rr(t,n){if(!O)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function kr(t,n){if(!O){var r=et(t);return r instanceof Comment&&r.data===""?N(r):r}return w}function Nr(t,n=1,r=!1){let e=O?w:t;for(var s;n--;)s=e,e=N(e);if(!O)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var l=rt();return e===null?s==null||s.after(l):e.before(l),M(l),l}return M(e),e}function Dr(t){t.textContent=""}function wn(t){var n=y|I;u===null?n|=k:u.f|=It;var r=i!==null&&i.f&y?i:null;const e={children:null,ctx:o,deps:null,equals:xt,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function Cr(t){const n=wn(t);return n.equals=St,n}function bt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ft(e):R(e)}}}function Tn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function qt(t){var n,r=u;Z(Tn(t));try{bt(t),n=Xt(t)}finally{Z(r)}return n}function Pt(t){var n=qt(t),r=(S||t.f&k)&&t.deps!==null?q:d;T(t,r),t.equals(n)||(t.v=n,t.version=Wt())}function ft(t){bt(t),U(t,0),T(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ft(t){u===null&&i===null&&fn(),i!==null&&i.f&k&&on(),ct&&un()}function mn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&z)!==0,a=u,l={ctx:o,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|I,first:null,fn:n,last:null,next:null,parent:s?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var f=D;try{wt(!0),B(l),l.f|=sn}catch(c){throw R(l),c}finally{wt(f)}}else n!==null&&tt(l);var _=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&It)===0;if(!_&&!s&&e&&(a!==null&&mn(l,a),i!==null&&i.f&y)){var p=i;(p.children??(p.children=[])).push(l)}return l}function br(t){const n=F(j,null,!1);return T(n,d),n.teardown=t,n}function qr(t){Ft();var n=u!==null&&(u.f&A)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:i})}else{var e=Lt(t);return e}}function Pr(t){return Ft(),_t(t)}function Fr(t){const n=F(z,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{R(n),e(void 0)}):(R(n),e(void 0))})}function Lt(t){return F(At,t,!1)}function Lr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=_t(()=>{t(),!e.ran&&(e.ran=!0,it(r.l.r2,!0),tn(n))})}function Mr(){var t=o;_t(()=>{if(pt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&T(r,q),L(r)&&B(r),n.ran=!1}t.l.r2.v=!1}})}function _t(t){return F(j,t,!0)}function Hr(t){return An(t)}function An(t,n=0){return F(j|ut|n,t,!0)}function Yr(t,n=!0){return F(j|A,t,!0,n)}function Mt(t){var n=t.teardown;if(n!==null){const r=ct,e=i;Tt(!0),X(null);try{n.call(null)}finally{Tt(r),X(e)}}}function Ht(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ft(n[r])}}function Yt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;R(r,n),r=e}}function gn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||R(n),n=r}}function R(t,n=!0){var r=!1;if((n||t.f&an)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var a=e===s?null:N(e);e.remove(),e=a}r=!0}Yt(t,n&&!r),Ht(t),U(t,0),T(t,P);var l=t.transitions;if(l!==null)for(const _ of l)_.stop();Mt(t);var f=t.parent;f!==null&&f.first!==null&&Ut(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ut(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];jt(t,r,!0),xn(r,()=>{R(t),n&&n()})}function xn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function jt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&n.push(l);for(var e=t.first;e!==null;){var s=e.next,a=(e.f&gt)!==0||(e.f&A)!==0;jt(e,n,a?r:!1),e=s}}}function Ur(t){Bt(t,!0)}function Bt(t,n){if(t.f&b){L(t)&&B(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&gt)!==0||(r.f&A)!==0;Bt(r,s?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const Sn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let $=!1,W=!1,st=[],at=[];function Vt(){$=!1;const t=st.slice();st=[],mt(t)}function Gt(){W=!1;const t=at.slice();at=[],mt(t)}function jr(t){$||($=!0,queueMicrotask(Vt)),st.push(t)}function Br(t){W||(W=!0,Sn(Gt)),at.push(t)}function On(){$&&Vt(),W&&Gt()}function Vr(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function Rn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const Kt=0,kn=1;let V=!1,G=Kt,H=!1,Y=null,D=!1,ct=!1;function wt(t){D=t}function Tt(t){ct=t}let x=[],C=0;let i=null;function X(t){i=t}let u=null;function Z(t){u=t}let m=null;function Nn(t){m=t}let h=null,E=0,g=null;function Dn(t){g=t}let $t=1,S=!1,o=null;function Wt(){return++$t}function vt(){return!J||o!==null&&o.l===null}function L(t){var p;var n=t.f;if(n&I)return!0;if(n&q){var r=t.deps,e=(n&k)!==0;if(r!==null){var s,a,l=(n&K)!==0,f=e&&u!==null&&!S,_=r.length;if(l||f){for(s=0;s<_;s++)a=r[s],(p=a==null?void 0:a.reactions)!=null&&p.includes(t)||(a.reactions??(a.reactions=[])).push(t);l&&(t.f^=K)}for(s=0;s<_;s++)if(a=r[s],L(a)&&Pt(a),a.version>t.version)return!0}(!e||u!==null&&!S)&&T(t,d)}return!1}function Cn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function bn(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),bn(n))throw t;return}r!==null&&(V=!0);{Cn(t,n);return}}function Xt(t){var ht;var n=h,r=E,e=g,s=i,a=S,l=m,f=o,_=t.f;h=null,E=0,g=null,i=_&(A|z)?null:t,S=!D&&(_&k)!==0,m=null,o=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(U(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!S)for(v=E;v<c.length;v++)((ht=c[v]).reactions??(ht.reactions=[])).push(t)}else c!==null&&E<c.length&&(U(t,E),c.length=E);return p}finally{h=n,E=r,g=e,i=s,S=a,m=l,o=f}}function qn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,q),n.f&(k|K)||(n.f^=K),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)qn(t,r[e])}function B(t){var n=t.f;if(!(n&P)){T(t,d);var r=u,e=o;u=t;try{n&ut?gn(t):Yt(t),Ht(t),Mt(t);var s=Xt(t);t.teardown=typeof s=="function"?s:null,t.version=$t}catch(a){Q(a,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(C>1e3){C=0;try{_n()}catch(t){if(Y!==null)Q(t,Y,null);else throw t}}C++}function zt(t){var n=t.length;if(n!==0){Zt();var r=D;D=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&d||(s.f^=d);var a=[];Jt(s,a),Pn(a)}}finally{D=r}}}function Pn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{L(e)&&(B(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ut(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function Fn(){if(H=!1,C>1001)return;const t=x;x=[],zt(t),H||(C=0,Y=null)}function tt(t){G===Kt&&(H||(H=!0,queueMicrotask(Fn))),Y=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(z|A)){if(!(r&d))return;n.f^=d}}x.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,a=(s&A)!==0,l=a&&(s&d)!==0,f=r.next;if(!l&&!(s&b))if(s&j){if(a)r.f^=d;else try{L(r)&&B(r)}catch(v){Q(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else s&At&&e.push(r);if(f===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=f}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Jt(_,n)}function Qt(t){var n=G,r=x;try{Zt();const s=[];G=kn,x=s,H=!1,zt(r);var e=t==null?void 0:t();return On(),(x.length>0||s.length>0)&&Qt(),C=0,Y=null,e}finally{G=n,x=r}}async function Gr(){await Promise.resolve(),Qt()}function pt(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=qt(t);return ft(t),e}if(i!==null){m!==null&&m.includes(t)&&cn();var s=i.deps;h===null&&s!==null&&s[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&A)&&g.includes(t)&&(T(u,I),tt(u))}else if(r&&t.deps===null)for(var a=t,l=a.parent,f=a;l!==null;)if(l.f&y){var _=l;f=_,l=_.parent}else{var p=l;(c=p.deriveds)!=null&&c.includes(f)||(p.deriveds??(p.deriveds=[])).push(f);break}return r&&(a=t,L(a)&&Pt(a)),t.v}function tn(t){const n=i;try{return i=null,t()}finally{i=n}}const Ln=~(I|q|d);function T(t,n){t.f=t.f&Ln|n}function Kr(t){return nn().get(t)}function $r(t,n){return nn().set(t,n),n}function nn(t){return o===null&&Rn(),o.c??(o.c=new Map(Mn(o)||void 0))}function Mn(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function Wr(t,n=1){var r=pt(t),e=n===1?r++:r--;return it(t,r),e}function Xr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function Zr(t){const n=o;if(n!==null){t!==void 0&&(n.x=t);const l=n.e;if(l!==null){var r=u,e=i;n.e=null;try{for(var s=0;s<l.length;s++){var a=l[s];Z(a.effect),X(a.reaction),Lt(a.fn)}}finally{Z(r),X(e)}}o=n.p,n.m=!0}return t||{}}function zr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Et in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&Et in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=en(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=rn(r);for(let s in e){const a=e[s].get;if(a)try{a.call(t)}catch{}}}}}export{ir as $,nr as A,Rn as B,J as C,Hn as D,gt as E,jn as F,Bn as G,ot as H,Qn as I,it as J,dt as K,u as L,tr as M,en as N,gr as O,hn as P,Sr as Q,M as R,Et as S,Ar as T,Er as U,Ur as V,In as W,br as X,En as Y,Jn as Z,$n as _,Yr as a,St as a0,Wr as a1,Vn as a2,Wn as a3,A as a4,z as a5,Z as a6,ur as a7,or as a8,fr as a9,rr as aA,er as aB,sr as aC,ar as aD,lr as aE,Br as aF,Xn as aG,rn as aH,ut as aI,sn as aJ,cr as aK,vr as aL,pr as aM,yr as aN,$r as aO,Kr as aP,vt as aQ,Zn as aR,Lr as aS,Mr as aT,Tr as aU,mr as aV,Vr as aW,xr as aX,Cr as aa,_r as ab,X as ac,i as ad,Un as ae,Or as af,et as ag,pn as ah,N as ai,Ot as aj,dn as ak,Nt as al,zn as am,Dr as an,Yn as ao,Fr as ap,rt as aq,hr as ar,dr as as,Qt as at,Gr as au,wr as av,b as aw,yn as ax,jt as ay,xn as az,An as b,w as c,R as d,Lt as e,mt as f,kr as g,O as h,Zr as i,Rr as j,Ir as k,Nr as l,Pr as m,Gn as n,qr as o,Xr as p,jr as q,_t as r,ln as s,Hr as t,tn as u,o as v,Kn as w,pt as x,zr as y,wn as z};
