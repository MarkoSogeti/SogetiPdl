const ce=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};ce();const w={};function fe(e){w.context=e}const ue=(e,n)=>e===n,F={equals:ue};let Q=Z;const A={},x=1,L=2,W={owned:null,cleanups:null,context:null,owner:null};var p=null;let T=null,c=null,C=null,h=null,g=null,M=0;function ae(e,n){const t=c,s=p,i=e.length===0,l=i?W:{owned:null,cleanups:null,context:null,owner:n||s},r=i?e:()=>e(()=>G(l));p=l,c=null;try{return q(r,!0)}finally{c=t,p=s}}function N(e,n){n=n?Object.assign({},F,n):F;const t={value:e,observers:null,observerSlots:null,pending:A,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.pending!==A?t.pending:t.value)),j(t,i));return[Y.bind(t),s]}function E(e,n,t){const s=H(e,n,!1,x);B(s)}function he(e,n,t){Q=we;const s=H(e,n,!1,x);s.user=!0,g?g.push(s):B(s)}function z(e,n,t){t=t?Object.assign({},F,t):F;const s=H(e,n,!0,0);return s.pending=A,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,B(s),Y.bind(s)}function de(e){if(C)return e();let n;const t=C=[];try{n=e()}finally{C=null}return q(()=>{for(let s=0;s<t.length;s+=1){const i=t[s];if(i.pending!==A){const l=i.pending;i.pending=A,j(i,l)}}},!1),n}function D(e){let n,t=c;return c=null,n=e(),c=t,n}function X(e){he(()=>D(e))}function Y(){const e=T;if(this.sources&&(this.state||e)){const n=h;h=null,this.state===x||e?B(this):P(this),h=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function j(e,n,t){if(C)return e.pending===A&&C.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let s=!1;return e.value=n,e.observers&&e.observers.length&&q(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&T.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?h.push(l):g.push(l),l.observers&&ee(l)),s||(l.state=x)}if(h.length>1e6)throw h=[],new Error},!1),n}function B(e){if(!e.fn)return;G(e);const n=p,t=c,s=M;c=p=e,pe(e,e.value,s),c=t,p=n}function pe(e,n,t){let s;try{s=e.fn(n)}catch(i){te(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?j(e,s):e.value=s,e.updatedAt=t)}function H(e,n,t,s=x,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:p,context:null,pure:t};return p===null||p!==W&&(p.owned?p.owned.push(l):p.owned=[l]),l}function k(e){const n=T;if(e.state===0||n)return;if(e.state===L||n)return P(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<M);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===x||n)B(e);else if(e.state===L||n){const i=h;h=null,P(e,t[0]),h=i}}function q(e,n){if(h)return e();let t=!1;n||(h=[]),g?t=!0:g=[],M++;try{const s=e();return ge(t),s}catch(s){h||(g=null),te(s)}}function ge(e){h&&(Z(h),h=null),!e&&(g.length?de(()=>{Q(g),g=null}):g=null)}function Z(e){for(let n=0;n<e.length;n++)k(e[n])}function we(e){let n,t=0;for(n=0;n<e.length;n++){const i=e[n];i.user?e[t++]=i:k(i)}w.context&&fe();const s=e.length;for(n=0;n<t;n++)k(e[n]);for(n=s;n<e.length;n++)k(e[n])}function P(e,n){const t=T;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||t?i!==n&&k(i):(i.state===L||t)&&P(i,n))}}function ee(e){const n=T;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=L,s.pure?h.push(s):g.push(s),s.observers&&ee(s))}}function G(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)G(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function te(e){throw e}function S(e,n){return D(()=>e(n||{}))}function J(e){let n=!1;const t=z(()=>e.when,void 0,{equals:(s,i)=>n?s===i:!s==!i});return z(()=>{const s=t();if(s){const i=e.children;return(n=typeof i=="function"&&i.length>0)?D(()=>i(s)):i}return e.fallback})}function ye(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,f=n[i-1].nextSibling,a=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const u=l<s?o?t[o-1].nextSibling:t[l-o]:f;for(;o<l;)e.insertBefore(t[o++],u)}else if(l===o)for(;r<i;)(!a||!a.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const u=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],u),n[i]=t[l]}else{if(!a){a=new Map;let y=o;for(;y<l;)a.set(t[y],y++)}const u=a.get(n[r]);if(u!=null)if(o<u&&u<l){let y=r,v=1,d;for(;++y<i&&y<l&&!((d=a.get(n[y]))==null||d!==u+v);)v++;if(v>u-o){const b=n[r];for(;o<u;)e.insertBefore(t[o++],b)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const V="_$DX_DELEGATE";function be(e,n,t){let s;return ae(i=>{s=i,n===document?e():m(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function $(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ne(e,n=window.document){const t=n[V]||(n[V]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,$e))}}function me(e,n){n==null?e.removeAttribute("class"):e.className=n}function xe(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=l=>i.call(e,t[1],l))}else e.addEventListener(n,t)}function m(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return O(e,n,s,t);E(i=>O(e,n(),i,t),s)}function $e(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function O(e,n,t,s,i){for(w.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(w.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=_(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(w.context)return t;t=_(e,t,s)}else{if(l==="function")return E(()=>{let o=n();for(;typeof o=="function";)o=o();t=O(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],f=t&&Array.isArray(t);if(U(o,n,t,i))return E(()=>t=O(e,o,t,s,!0)),()=>t;if(w.context){for(let a=0;a<o.length;a++)if(o[a].parentNode)return t=o}if(o.length===0){if(t=_(e,t,s),r)return t}else f?t.length===0?K(e,o,s):ye(e,t,o):(t&&_(e),K(e,o));t=o}else if(n instanceof Node){if(w.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=_(e,t,s,n);_(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function U(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],f=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=U(e,o,f)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=U(e,Array.isArray(o)?o:[o],f)||i}else e.push(o),i=!0;else{const a=String(o);f&&f.nodeType===3&&f.data===a?e.push(f):e.push(document.createTextNode(a))}}return i}function K(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function _(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const f=o.parentNode===e;!l&&!r?f?e.replaceChild(i,o):e.insertBefore(i,t):f&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const ve="_App_ydxz3_1",_e="_logo_ydxz3_5",Se="_header_ydxz3_11",Ae="_link_ydxz3_22",Ee={App:ve,logo:_e,"logo-spin":"_logo-spin_ydxz3_1",header:Se,link:Ae},Ne=$('<svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="filled-circle" fill="#78B348" cx="66.5" cy="66.5" r="54.5"></circle><circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle><circle id="outline" stroke="#78B348" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle><polyline id="check" stroke="#FFFFFF" stroke-width="4" points="41 70 56 85 92 49"></polyline></g></svg>');function Ce(e){return Ne.cloneNode(!0)}const ke=$('<div><p></p><p class="remainingPlaces">\xC5terst\xE5ende platser: 2</p></div>');function Te(e){return(()=>{const n=ke.cloneNode(!0),t=n.firstChild;return xe(n,"click",e.toggle,!0),m(t,()=>e.time),n})()}ne(["click"]);async function se(){const n=await(await fetch("https://icy-cliff-03f1e8d03.1.azurestaticapps.net/.auth/me")).json(),{clientPrincipal:t}=n;return t}const Be=$('<div class="popup"><h1>Boka PADEL</h1><p>Namn</p><input type="text" required><div class="button-wrapper"><button>Boka</button><button>Avboka</button></div></div>'),Fe=$('<div class="transition"><p>Tiden \xE4r bokad!</p></div>'),Le=$('<div class="box"><h2>Sogeti PDL Bokning</h2><ul></ul></div>'),Pe=$("<li></li>");function Oe(){const[e,n]=N("10/10-2022 18:00","18/10-2022 18:00"),[t,s]=N(""),[i,l]=N(!1),[r,o]=N(!1),f=()=>{o(!r())},a=()=>{f(),l(!0),setTimeout(()=>l(!1),3e3)};return X(async()=>{await se().then(u=>{setUserInfo(u),console.log(userInfo()),console.log("HEJ!")})}),(()=>{const u=Le.cloneNode(!0),y=u.firstChild,v=y.nextSibling;return m(v,()=>e.time.map(d=>(()=>{const b=Pe.cloneNode(!0);return m(b,S(Te,{time:d,toggle:f})),b})())),m(u,S(J,{get when(){return r()},get children(){const d=Be.cloneNode(!0),b=d.firstChild,ie=b.nextSibling,I=ie.nextSibling,le=I.nextSibling,R=le.firstChild,oe=R.nextSibling;return clickOutside(d,()=>()=>o(!1)),I.$$input=re=>s(re.currentTarget.value),R.$$click=()=>t()?a():"",oe.$$click=()=>t()?f():"",E(()=>I.value=t()),d}}),null),m(u,S(J,{get when(){return i()},get children(){const d=Fe.cloneNode(!0),b=d.firstChild;return m(d,S(Ce,{}),b),d}}),null),E(()=>v.className=` ${i()?"active":""}`),u})()}ne(["input","click"]);const De=$("<div></div>");function Ie(){const[e,n]=N("");return X(async()=>{await se().then(t=>{n(t),console.log(e()),console.log("HEJ!")})}),(()=>{const t=De.cloneNode(!0);return m(t,S(Oe,{})),E(()=>me(t,Ee.App)),t})()}be(()=>S(Ie,{}),document.getElementById("root"));
