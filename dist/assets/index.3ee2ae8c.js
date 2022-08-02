const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}};le();const w={};function oe(e){w.context=e}const re=(e,t)=>e===t,L={equals:re};let Q=Y;const S={},v=1,B=2,W={owned:null,cleanups:null,context:null,owner:null};var u=null;let N=null,f=null,E=null,a=null,g=null,H=0;function ce(e,t){const n=f,s=u,i=e.length===0,l=i?W:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>R(l));u=l,f=null;try{return G(r,!0)}finally{f=n,u=s}}function T(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,pending:S,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.pending!==S?n.pending:n.value)),q(n,i));return[X.bind(n),s]}function A(e,t,n){const s=z(e,t,!1,v);C(s)}function fe(e,t,n){Q=ge;const s=z(e,t,!1,v);s.user=!0,g?g.push(s):C(s)}function U(e,t,n){n=n?Object.assign({},L,n):L;const s=z(e,t,!0,0);return s.pending=S,s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,C(s),X.bind(s)}function ue(e){if(E)return e();let t;const n=E=[];try{t=e()}finally{E=null}return G(()=>{for(let s=0;s<n.length;s+=1){const i=n[s];if(i.pending!==S){const l=i.pending;i.pending=S,q(i,l)}}},!1),t}function D(e){let t,n=f;return f=null,t=e(),f=n,t}function ae(e){fe(()=>D(e))}function de(e){return u===null||(u.cleanups===null?u.cleanups=[e]:u.cleanups.push(e)),e}function X(){const e=N;if(this.sources&&(this.state||e)){const t=a;a=null,this.state===v||e?C(this):F(this),a=t}if(f){const t=this.observers?this.observers.length:0;f.sources?(f.sources.push(this),f.sourceSlots.push(t)):(f.sources=[this],f.sourceSlots=[t]),this.observers?(this.observers.push(f),this.observerSlots.push(f.sources.length-1)):(this.observers=[f],this.observerSlots=[f.sources.length-1])}return this.value}function q(e,t,n){if(E)return e.pending===S&&E.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let s=!1;return e.value=t,e.observers&&e.observers.length&&G(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&N.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?a.push(l):g.push(l),l.observers&&Z(l)),s||(l.state=v)}if(a.length>1e6)throw a=[],new Error},!1),t}function C(e){if(!e.fn)return;R(e);const t=u,n=f,s=H;f=u=e,he(e,e.value,s),f=n,u=t}function he(e,t,n){let s;try{s=e.fn(t)}catch(i){ee(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?q(e,s):e.value=s,e.updatedAt=n)}function z(e,t,n,s=v,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:u,context:null,pure:n};return u===null||u!==W&&(u.owned?u.owned.push(l):u.owned=[l]),l}function k(e){const t=N;if(e.state===0||t)return;if(e.state===B||t)return F(e);if(e.suspense&&D(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<H);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===v||t)C(e);else if(e.state===B||t){const i=a;a=null,F(e,n[0]),a=i}}function G(e,t){if(a)return e();let n=!1;t||(a=[]),g?n=!0:g=[],H++;try{const s=e();return pe(n),s}catch(s){a||(g=null),ee(s)}}function pe(e){a&&(Y(a),a=null),!e&&(g.length?ue(()=>{Q(g),g=null}):g=null)}function Y(e){for(let t=0;t<e.length;t++)k(e[t])}function ge(e){let t,n=0;for(t=0;t<e.length;t++){const i=e[t];i.user?e[n++]=i:k(i)}w.context&&oe();const s=e.length;for(t=0;t<n;t++)k(e[t]);for(t=s;t<e.length;t++)k(e[t])}function F(e,t){const n=N;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===v||n?i!==t&&k(i):(i.state===B||n)&&F(i,t))}}function Z(e){const t=N;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=B,s.pure?a.push(s):g.push(s),s.observers&&Z(s))}}function R(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const l=i.pop(),r=n.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)R(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ee(e){throw e}function $(e,t){return D(()=>e(t||{}))}function P(e){let t=!1;const n=U(()=>e.when,void 0,{equals:(s,i)=>t?s===i:!s==!i});return U(()=>{const s=n();if(s){const i=e.children;return(t=typeof i=="function"&&i.length>0)?D(()=>i(s)):i}return e.fallback})}function ye(e,t){return U(e,void 0,t?void 0:{equals:t})}function we(e,t,n){let s=n.length,i=t.length,l=s,r=0,o=0,d=t[i-1].nextSibling,c=null;for(;r<i||o<l;){if(t[r]===n[o]){r++,o++;continue}for(;t[i-1]===n[l-1];)i--,l--;if(i===r){const p=l<s?o?n[o-1].nextSibling:n[l-o]:d;for(;o<l;)e.insertBefore(n[o++],p)}else if(l===o)for(;r<i;)(!c||!c.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[l-1]&&n[o]===t[i-1]){const p=t[--i].nextSibling;e.insertBefore(n[o++],t[r++].nextSibling),e.insertBefore(n[--l],p),t[i]=n[l]}else{if(!c){c=new Map;let y=o;for(;y<l;)c.set(n[y],y++)}const p=c.get(t[r]);if(p!=null)if(o<p&&p<l){let y=r,h=1,b;for(;++y<i&&y<l&&!((b=c.get(t[y]))==null||b!==p+h);)h++;if(h>p-o){const I=t[r];for(;o<p;)e.insertBefore(n[o++],I)}else e.replaceChild(n[o++],t[r++])}else r++;else t[r++].remove()}}}const J="_$DX_DELEGATE";function be(e,t,n){let s;return ce(i=>{s=i,t===document?e():m(t,e(),t.firstChild?null:void 0,n)}),()=>{s(),t.textContent=""}}function x(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function te(e,t=window.document){const n=t[J]||(t[J]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];n.has(l)||(n.add(l),t.addEventListener(l,xe))}}function me(e,t){t==null?e.removeAttribute("class"):e.className=t}function $e(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const i=n[0];e.addEventListener(t,n[0]=l=>i.call(e,n[1],l))}else e.addEventListener(t,n)}function m(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return O(e,t,s,n);A(i=>O(e,t(),i,n),s)}function xe(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),w.registry&&!w.done&&(w.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function O(e,t,n,s,i){for(w.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const l=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,l==="string"||l==="number"){if(w.context)return n;if(l==="number"&&(t=t.toString()),r){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=_(e,n,s,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||l==="boolean"){if(w.context)return n;n=_(e,n,s)}else{if(l==="function")return A(()=>{let o=t();for(;typeof o=="function";)o=o();n=O(e,o,n,s)}),()=>n;if(Array.isArray(t)){const o=[],d=n&&Array.isArray(n);if(j(o,t,n,i))return A(()=>n=O(e,o,n,s,!0)),()=>n;if(w.context){for(let c=0;c<o.length;c++)if(o[c].parentNode)return n=o}if(o.length===0){if(n=_(e,n,s),r)return n}else d?n.length===0?K(e,o,s):we(e,n,o):(n&&_(e),K(e,o));n=o}else if(t instanceof Node){if(w.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=_(e,n,s,t);_(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function j(e,t,n,s){let i=!1;for(let l=0,r=t.length;l<r;l++){let o=t[l],d=n&&n[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=j(e,o,d)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=j(e,Array.isArray(o)?o:[o],d)||i}else e.push(o),i=!0;else{const c=String(o);d&&d.nodeType===3&&d.data===c?e.push(d):e.push(document.createTextNode(c))}}return i}function K(e,t,n){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function _(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let l=!1;for(let r=t.length-1;r>=0;r--){const o=t[r];if(i!==o){const d=o.parentNode===e;!l&&!r?d?e.replaceChild(i,o):e.insertBefore(i,n):d&&o.remove()}else l=!0}}else e.insertBefore(i,n);return[i]}const ve="_App_ydxz3_1",_e="_logo_ydxz3_5",Se="_header_ydxz3_11",Ae="_link_ydxz3_22",Ee={App:ve,logo:_e,"logo-spin":"_logo-spin_ydxz3_1",header:Se,link:Ae},ke=x('<svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="filled-circle" fill="#78B348" cx="66.5" cy="66.5" r="54.5"></circle><circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle><circle id="outline" stroke="#78B348" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle><polyline id="check" stroke="#FFFFFF" stroke-width="4" points="41 70 56 85 92 49"></polyline></g></svg>');function Ne(e){return ke.cloneNode(!0)}const Ce=x('<div><p></p><p class="remainingPlaces">\xC5terst\xE5ende platser: 2</p></div>');function Te(e){return(()=>{const t=Ce.cloneNode(!0),n=t.firstChild;return $e(t,"click",e.toggle,!0),m(n,()=>e.time),t})()}te(["click"]);function Le(e,t){const n=s=>!e.contains(s.target)&&t()?.();document.body.addEventListener("click",n),de(()=>document.body.removeEventListener("click",n))}const Be=x('<div class="popup"><h1>Boka PADEL</h1><p>Namn</p><input type="text" required><div class="button-wrapper"><button>Boka</button><button>Avboka</button></div></div>'),Fe=x('<div class="transition"><p>Tiden \xE4r bokad!</p></div>'),Pe=x('<div class="box"><h2>Sogeti PDL Bokning</h2><ul></ul></div>'),Oe=x("<li></li>");function De(){const e=["10/10-2022 18:00","18/10-2022 18:00","22/10-2022 18:00"],[t,n]=T(""),[s,i]=T(!1),[l,r]=T(!1),o=()=>{r(!l())},d=()=>{o(),i(!0),setTimeout(()=>i(!1),3e3)};return(()=>{const c=Pe.cloneNode(!0),p=c.firstChild,y=p.nextSibling;return m(y,()=>e.map(h=>(()=>{const b=Oe.cloneNode(!0);return m(b,$(Te,{time:h,toggle:o})),b})())),m(c,$(P,{get when(){return l()},get children(){const h=Be.cloneNode(!0),b=h.firstChild,I=b.nextSibling,M=I.nextSibling,ne=M.nextSibling,V=ne.firstChild,se=V.nextSibling;return Le(h,()=>()=>r(!1)),M.$$input=ie=>n(ie.currentTarget.value),V.$$click=()=>t()?d():"",se.$$click=()=>t()?o():"",A(()=>M.value=t()),h}}),null),m(c,$(P,{get when(){return s()},get children(){const h=Fe.cloneNode(!0),b=h.firstChild;return m(h,$(Ne,{}),b),h}}),null),A(()=>y.className=` ${s()?"active":""}`),c})()}te(["input","click"]);const Ie=x(`<div class="login"><button class="login" onclick="location.href='https://icy-cliff-03f1e8d03.1.azurestaticapps.net/.auth/login/aad'" type="button">Logga in</button></div>`);function Me(e){return Ie.cloneNode(!0)}async function Ue(){const t=await(await fetch("https://icy-cliff-03f1e8d03.1.azurestaticapps.net/.auth/me")).json(),{clientPrincipal:n}=t;return n}const je=x("<div></div>");function He(){const[e,t]=T("");return ae(async()=>{await Ue().then(n=>{t(n),console.log(e()),console.log("HEJ!")})}),(()=>{const n=je.cloneNode(!0);return m(n,$(P,{get when(){return e()===""},get children(){return $(Me,{})}}),null),m(n,$(P,{get when(){return ye(()=>e()!=="",!0)()&&e()},get children(){return $(De,{})}}),null),A(()=>me(n,Ee.App)),n})()}be(()=>$(He,{}),document.getElementById("root"));