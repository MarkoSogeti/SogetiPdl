const ie=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};ie();const b={},le=(e,n)=>e===n,C={equals:le};let oe=J;const _={},A=1,E=2,K={owned:null,cleanups:null,context:null,owner:null};var u=null;let N=null,f=null,k=null,a=null,w=null,D=0;function re(e,n){const t=f,s=u,i=e.length===0,l=i?K:{owned:null,cleanups:null,context:null,owner:n||s},r=i?e:()=>e(()=>j(l));u=l,f=null;try{return U(r,!0)}finally{f=t,u=s}}function P(e,n){n=n?Object.assign({},C,n):C;const t={value:e,observers:null,observerSlots:null,pending:_,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.pending!==_?t.pending:t.value)),I(t,i));return[Q.bind(t),s]}function S(e,n,t){const s=W(e,n,!1,A);B(s)}function R(e,n,t){t=t?Object.assign({},C,t):C;const s=W(e,n,!0,0);return s.pending=_,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,B(s),Q.bind(s)}function ce(e){if(k)return e();let n;const t=k=[];try{n=e()}finally{k=null}return U(()=>{for(let s=0;s<t.length;s+=1){const i=t[s];if(i.pending!==_){const l=i.pending;i.pending=_,I(i,l)}}},!1),n}function M(e){let n,t=f;return f=null,n=e(),f=t,n}function fe(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function Q(){const e=N;if(this.sources&&(this.state||e)){const n=a;a=null,this.state===A||e?B(this):T(this),a=n}if(f){const n=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(n)):(f.sources=[this],f.sourceSlots=[n]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function I(e,n,t){if(k)return e.pending===_&&k.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let s=!1;return e.value=n,e.observers&&e.observers.length&&U(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&N.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?a.push(l):w.push(l),l.observers&&Y(l)),s||(l.state=A)}if(a.length>1e6)throw a=[],new Error},!1),n}function B(e){if(!e.fn)return;j(e);const n=u,t=f,s=D;f=u=e,ue(e,e.value,s),f=t,u=n}function ue(e,n,t){let s;try{s=e.fn(n)}catch(i){Z(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?I(e,s):e.value=s,e.updatedAt=t)}function W(e,n,t,s=A,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:u,context:null,pure:t};return u===null||u!==K&&(u.owned?u.owned.push(l):u.owned=[l]),l}function X(e){const n=N;if(e.state===0||n)return;if(e.state===E||n)return T(e);if(e.suspense&&M(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<D);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===A||n)B(e);else if(e.state===E||n){const i=a;a=null,T(e,t[0]),a=i}}function U(e,n){if(a)return e();let t=!1;n||(a=[]),w?t=!0:w=[],D++;try{const s=e();return ae(t),s}catch(s){a||(w=null),Z(s)}}function ae(e){a&&(J(a),a=null),!e&&(w.length?ce(()=>{oe(w),w=null}):w=null)}function J(e){for(let n=0;n<e.length;n++)X(e[n])}function T(e,n){const t=N;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===A||t?i!==n&&X(i):(i.state===E||t)&&T(i,n))}}function Y(e){const n=N;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=E,s.pure?a.push(s):w.push(s),s.observers&&Y(s))}}function j(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)j(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function Z(e){throw e}function v(e,n){return M(()=>e(n||{}))}function H(e){let n=!1;const t=R(()=>e.when,void 0,{equals:(s,i)=>n?s===i:!s==!i});return R(()=>{const s=t();if(s){const i=e.children;return(n=typeof i=="function"&&i.length>0)?M(()=>i(s)):i}return e.fallback})}function de(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,d=n[i-1].nextSibling,c=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const p=l<s?o?t[o-1].nextSibling:t[l-o]:d;for(;o<l;)e.insertBefore(t[o++],p)}else if(l===o)for(;r<i;)(!c||!c.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const p=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],p),n[i]=t[l]}else{if(!c){c=new Map;let g=o;for(;g<l;)c.set(t[g],g++)}const p=c.get(n[r]);if(p!=null)if(o<p&&p<l){let g=r,h=1,y;for(;++g<i&&g<l&&!((y=c.get(n[g]))==null||y!==p+h);)h++;if(h>p-o){const F=n[r];for(;o<p;)e.insertBefore(t[o++],F)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const V="_$DX_DELEGATE";function he(e,n,t){let s;return re(i=>{s=i,n===document?e():m(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function $(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ee(e,n=window.document){const t=n[V]||(n[V]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,ye))}}function pe(e,n){n==null?e.removeAttribute("class"):e.className=n}function ge(e,n,t,s){if(s)Array.isArray(t)?(e[`$$${n}`]=t[0],e[`$$${n}Data`]=t[1]):e[`$$${n}`]=t;else if(Array.isArray(t)){const i=t[0];e.addEventListener(n,t[0]=l=>i.call(e,t[1],l))}else e.addEventListener(n,t)}function m(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return L(e,n,s,t);S(i=>L(e,n(),i,t),s)}function ye(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function L(e,n,t,s,i){for(b.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(b.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=x(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(b.context)return t;t=x(e,t,s)}else{if(l==="function")return S(()=>{let o=n();for(;typeof o=="function";)o=o();t=L(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],d=t&&Array.isArray(t);if(q(o,n,t,i))return S(()=>t=L(e,o,t,s,!0)),()=>t;if(b.context){for(let c=0;c<o.length;c++)if(o[c].parentNode)return t=o}if(o.length===0){if(t=x(e,t,s),r)return t}else d?t.length===0?z(e,o,s):de(e,t,o):(t&&x(e),z(e,o));t=o}else if(n instanceof Node){if(b.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=x(e,t,s,n);x(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function q(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],d=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=q(e,o,d)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=q(e,Array.isArray(o)?o:[o],d)||i}else e.push(o),i=!0;else{const c=String(o);d&&d.nodeType===3&&d.data===c?e.push(d):e.push(document.createTextNode(c))}}return i}function z(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function x(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const d=o.parentNode===e;!l&&!r?d?e.replaceChild(i,o):e.insertBefore(i,t):d&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const we="_App_ydxz3_1",be="_logo_ydxz3_5",me="_header_ydxz3_11",$e="_link_ydxz3_22",xe={App:we,logo:be,"logo-spin":"_logo-spin_ydxz3_1",header:me,link:$e},ve=$('<svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="filled-circle" fill="#78B348" cx="66.5" cy="66.5" r="54.5"></circle><circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle><circle id="outline" stroke="#78B348" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle><polyline id="check" stroke="#FFFFFF" stroke-width="4" points="41 70 56 85 92 49"></polyline></g></svg>');function _e(e){return ve.cloneNode(!0)}const Se=$('<div><p></p><p class="remainingPlaces">\xC5terst\xE5ende platser: 2</p></div>');function Ae(e){return(()=>{const n=Se.cloneNode(!0),t=n.firstChild;return ge(n,"click",e.toggle,!0),m(t,()=>e.time),n})()}ee(["click"]);function ke(e,n){const t=s=>!e.contains(s.target)&&n()?.();document.body.addEventListener("click",t),fe(()=>document.body.removeEventListener("click",t))}const Ne=$('<div class="popup"><h1>Boka PADEL</h1><p>Namn</p><input type="text" required><div class="button-wrapper"><button>Boka</button><button>Avboka</button></div></div>'),Ce=$('<div class="transition"><p>Tiden \xE4r bokad!</p></div>'),Ee=$('<div class="box"><h2>Sogeti PDL Bokning</h2><ul></ul></div>'),Te=$("<li></li>");function Le(){const e=["10/10-2022 18:00","18/10-2022 18:00","22/10-2022 18:00"],[n,t]=P(""),[s,i]=P(!1),[l,r]=P(!1),o=()=>{r(!l())},d=()=>{o(),i(!0),setTimeout(()=>i(!1),3e3)};return(()=>{const c=Ee.cloneNode(!0),p=c.firstChild,g=p.nextSibling;return m(g,()=>e.map(h=>(()=>{const y=Te.cloneNode(!0);return m(y,v(Ae,{time:h,toggle:o})),y})())),m(c,v(H,{get when(){return l()},get children(){const h=Ne.cloneNode(!0),y=h.firstChild,F=y.nextSibling,O=F.nextSibling,te=O.nextSibling,G=te.firstChild,ne=G.nextSibling;return ke(h,()=>()=>r(!1)),O.$$input=se=>t(se.currentTarget.value),G.$$click=()=>n()?d():"",ne.$$click=()=>n()?o():"",S(()=>O.value=n()),h}}),null),m(c,v(H,{get when(){return s()},get children(){const h=Ce.cloneNode(!0),y=h.firstChild;return m(h,v(_e,{}),y),h}}),null),S(()=>g.className=` ${s()?"active":""}`),c})()}ee(["input","click"]);const Be=$("<div></div>");function Fe(){return(()=>{const e=Be.cloneNode(!0);return m(e,v(Le,{})),S(()=>pe(e,xe.App)),e})()}he(()=>v(Fe,{}),document.getElementById("root"));
