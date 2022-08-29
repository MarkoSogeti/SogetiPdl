const ce=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}};ce();const y={};function fe(e){y.context=e}const ue=(e,n)=>e===n,I={equals:ue};let Z=se;const N={},_=1,j=2,ee={owned:null,cleanups:null,context:null,owner:null};var d=null;let P=null,c=null,T=null,h=null,w=null,J=0;function ae(e,n){const t=c,s=d,i=e.length===0,l=i?ee:{owned:null,cleanups:null,context:null,owner:n||s},r=i?e:()=>e(()=>W(l));d=l,c=null;try{return Q(r,!0)}finally{c=t,d=s}}function $(e,n){n=n?Object.assign({},I,n):I;const t={value:e,observers:null,observerSlots:null,pending:N,comparator:n.equals||void 0},s=i=>(typeof i=="function"&&(i=i(t.pending!==N?t.pending:t.value)),V(t,i));return[ne.bind(t),s]}function F(e,n,t){const s=K(e,n,!1,_);L(s)}function de(e,n,t){Z=me;const s=K(e,n,!1,_);s.user=!0,w?w.push(s):L(s)}function z(e,n,t){t=t?Object.assign({},I,t):I;const s=K(e,n,!0,0);return s.pending=N,s.observers=null,s.observerSlots=null,s.comparator=t.equals||void 0,L(s),ne.bind(s)}function he(e){if(T)return e();let n;const t=T=[];try{n=e()}finally{T=null}return Q(()=>{for(let s=0;s<t.length;s+=1){const i=t[s];if(i.pending!==N){const l=i.pending;i.pending=N,V(i,l)}}},!1),n}function H(e){let n,t=c;return c=null,n=e(),c=t,n}function te(e){de(()=>H(e))}function pe(e){return d===null||(d.cleanups===null?d.cleanups=[e]:d.cleanups.push(e)),e}function ne(){const e=P;if(this.sources&&(this.state||e)){const n=h;h=null,this.state===_||e?L(this):M(this),h=n}if(c){const n=this.observers?this.observers.length:0;c.sources?(c.sources.push(this),c.sourceSlots.push(n)):(c.sources=[this],c.sourceSlots=[n]),this.observers?(this.observers.push(c),this.observerSlots.push(c.sources.length-1)):(this.observers=[c],this.observerSlots=[c.sources.length-1])}return this.value}function V(e,n,t){if(T)return e.pending===N&&T.push(e),e.pending=n,n;if(e.comparator&&e.comparator(e.value,n))return n;let s=!1;return e.value=n,e.observers&&e.observers.length&&Q(()=>{for(let i=0;i<e.observers.length;i+=1){const l=e.observers[i];s&&P.disposed.has(l),(s&&!l.tState||!s&&!l.state)&&(l.pure?h.push(l):w.push(l),l.observers&&ie(l)),s||(l.state=_)}if(h.length>1e6)throw h=[],new Error},!1),n}function L(e){if(!e.fn)return;W(e);const n=d,t=c,s=J;c=d=e,ge(e,e.value,s),c=t,d=n}function ge(e,n,t){let s;try{s=e.fn(n)}catch(i){le(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.observers&&e.observers.length?V(e,s):e.value=s,e.updatedAt=t)}function K(e,n,t,s=_,i){const l={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:d,context:null,pure:t};return d===null||d!==ee&&(d.owned?d.owned.push(l):d.owned=[l]),l}function O(e){const n=P;if(e.state===0||n)return;if(e.state===j||n)return M(e);if(e.suspense&&H(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<J);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===_||n)L(e);else if(e.state===j||n){const i=h;h=null,M(e,t[0]),h=i}}function Q(e,n){if(h)return e();let t=!1;n||(h=[]),w?t=!0:w=[],J++;try{const s=e();return we(t),s}catch(s){h||(w=null),le(s)}}function we(e){h&&(se(h),h=null),!e&&(w.length?he(()=>{Z(w),w=null}):w=null)}function se(e){for(let n=0;n<e.length;n++)O(e[n])}function me(e){let n,t=0;for(n=0;n<e.length;n++){const i=e[n];i.user?e[t++]=i:O(i)}y.context&&fe();const s=e.length;for(n=0;n<t;n++)O(e[n]);for(n=s;n<e.length;n++)O(e[n])}function M(e,n){const t=P;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===_||t?i!==n&&O(i):(i.state===j||t)&&M(i,n))}}function ie(e){const n=P;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=j,s.pure?h.push(s):w.push(s),s.observers&&ie(s))}}function W(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const l=i.pop(),r=t.observerSlots.pop();s<i.length&&(l.sourceSlots[r]=s,i[s]=l,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)W(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null}function le(e){throw e}function S(e,n){return H(()=>e(n||{}))}function D(e){let n=!1;const t=z(()=>e.when,void 0,{equals:(s,i)=>n?s===i:!s==!i});return z(()=>{const s=t();if(s){const i=e.children;return(n=typeof i=="function"&&i.length>0)?H(()=>i(s)):i}return e.fallback})}function ye(e,n){return z(e,void 0,n?void 0:{equals:n})}function be(e,n,t){let s=t.length,i=n.length,l=s,r=0,o=0,u=n[i-1].nextSibling,f=null;for(;r<i||o<l;){if(n[r]===t[o]){r++,o++;continue}for(;n[i-1]===t[l-1];)i--,l--;if(i===r){const p=l<s?o?t[o-1].nextSibling:t[l-o]:u;for(;o<l;)e.insertBefore(t[o++],p)}else if(l===o)for(;r<i;)(!f||!f.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[l-1]&&t[o]===n[i-1]){const p=n[--i].nextSibling;e.insertBefore(t[o++],n[r++].nextSibling),e.insertBefore(t[--l],p),n[i]=t[l]}else{if(!f){f=new Map;let b=o;for(;b<l;)f.set(t[b],b++)}const p=f.get(n[r]);if(p!=null)if(o<p&&p<l){let b=r,E=1,k;for(;++b<i&&b<l&&!((k=f.get(n[b]))==null||k!==p+E);)E++;if(E>p-o){const R=n[r];for(;o<p;)e.insertBefore(t[o++],R)}else e.replaceChild(t[o++],n[r++])}else r++;else n[r++].remove()}}}const X="_$DX_DELEGATE";function xe(e,n,t){let s;return ae(i=>{s=i,n===document?e():m(n,e(),n.firstChild?null:void 0,t)}),()=>{s(),n.textContent=""}}function x(e,n,t){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function Se(e,n=window.document){const t=n[X]||(n[X]=new Set);for(let s=0,i=e.length;s<i;s++){const l=e[s];t.has(l)||(t.add(l),n.addEventListener(l,$e))}}function ve(e,n){n==null?e.removeAttribute("class"):e.className=n}function m(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return U(e,n,s,t);F(i=>U(e,n(),i,t),s)}function $e(e){const n=`$$${e.type}`;let t=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==t&&Object.defineProperty(e,"target",{configurable:!0,value:t}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return t||document}}),y.registry&&!y.done&&(y.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));t!==null;){const s=t[n];if(s&&!t.disabled){const i=t[`${n}Data`];if(i!==void 0?s.call(t,i,e):s.call(t,e),e.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function U(e,n,t,s,i){for(y.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const l=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,l==="string"||l==="number"){if(y.context)return t;if(l==="number"&&(n=n.toString()),r){let o=t[0];o&&o.nodeType===3?o.data=n:o=document.createTextNode(n),t=C(e,t,s,o)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||l==="boolean"){if(y.context)return t;t=C(e,t,s)}else{if(l==="function")return F(()=>{let o=n();for(;typeof o=="function";)o=o();t=U(e,o,t,s)}),()=>t;if(Array.isArray(n)){const o=[],u=t&&Array.isArray(t);if(G(o,n,t,i))return F(()=>t=U(e,o,t,s,!0)),()=>t;if(y.context){for(let f=0;f<o.length;f++)if(o[f].parentNode)return t=o}if(o.length===0){if(t=C(e,t,s),r)return t}else u?t.length===0?Y(e,o,s):be(e,t,o):(t&&C(e),Y(e,o));t=o}else if(n instanceof Node){if(y.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=C(e,t,s,n);C(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}}return t}function G(e,n,t,s){let i=!1;for(let l=0,r=n.length;l<r;l++){let o=n[l],u=t&&t[l];if(o instanceof Node)e.push(o);else if(!(o==null||o===!0||o===!1))if(Array.isArray(o))i=G(e,o,u)||i;else if(typeof o=="function")if(s){for(;typeof o=="function";)o=o();i=G(e,Array.isArray(o)?o:[o],u)||i}else e.push(o),i=!0;else{const f=String(o);u&&u.nodeType===3&&u.data===f?e.push(u):e.push(document.createTextNode(f))}}return i}function Y(e,n,t){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function C(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let l=!1;for(let r=n.length-1;r>=0;r--){const o=n[r];if(i!==o){const u=o.parentNode===e;!l&&!r?u?e.replaceChild(i,o):e.insertBefore(i,t):u&&o.remove()}else l=!0}}else e.insertBefore(i,t);return[i]}const _e="_App_ydxz3_1",ke="_logo_ydxz3_5",Ce="_header_ydxz3_11",Ne="_link_ydxz3_22",Ee={App:_e,logo:ke,"logo-spin":"_logo-spin_ydxz3_1",header:Ce,link:Ne},Ae=x('<svg width="133px" height="133px" viewBox="0 0 133 133" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="check-group" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><circle id="filled-circle" fill="#78B348" cx="66.5" cy="66.5" r="54.5"></circle><circle id="white-circle" fill="#FFFFFF" cx="66.5" cy="66.5" r="55.5"></circle><circle id="outline" stroke="#78B348" stroke-width="4" cx="66.5" cy="66.5" r="54.5"></circle><polyline id="check" stroke="#FFFFFF" stroke-width="4" points="41 70 56 85 92 49"></polyline></g></svg>');function Te(e){return Ae.cloneNode(!0)}const Oe=x('<div><p> 17:00</p><p class="remainingPlaces">\xC5terst\xE5ende platser: </p></div>');function Fe(e){return(()=>{const n=Oe.cloneNode(!0),t=n.firstChild,s=t.firstChild,i=t.nextSibling;return i.firstChild,m(t,(()=>{const l=ye(()=>!!e.time,!0);return()=>l()?new Date(e.time).toLocaleDateString():""})(),s),m(i,()=>4-e.participants,null),n})()}function q(){return fetch("https://pdl-api.azurewebsites.net/api/get-time-slots").then(e=>e.json())}function Pe(e,n){const t=s=>!e.contains(s.target)&&n()?.();document.body.addEventListener("click",t),pe(()=>document.body.removeEventListener("click",t))}function Le(e,n){const t=new Headers;t.append("Content-Type","application/json"),console.log("this is selectedId "+e);const s=JSON.stringify({id:e,name:n});return fetch("https://pdl-api.azurewebsites.net/api/add-participant",{method:"POST",headers:t,body:s,redirect:"follow"}).then(l=>{if(!l.ok)throw new Error("Tiden \xE4r fullbokad!");return l}).then(l=>l.text())}function Be(e,n){const t=new Headers;t.append("Content-Type","application/json"),console.log("this is selectedId "+e),console.log("this is userEmail "+n);const s=JSON.stringify({id:e,name:n});return fetch("https://pdl-api.azurewebsites.net/api/remove-participant",{method:"POST",headers:t,body:s,redirect:"follow"}).then(l=>{if(!l.ok)throw new Error("Du har inte n\xE5gon bokning!");return l}).then(l=>l.text())}const De=x("<ul></ul>"),Ie=x('<div class="popup"><h1>Boka PADEL</h1><div class="button-wrapper"><button>Boka</button><button>Avboka</button></div></div>'),je=x('<div class="transition"></div>'),Me=x('<div class="box"><h2>Sogeti PDL Bokning</h2></div>'),Ue=x("<ul><li><p>Ingen tid tillg\xE4nglig</p></li></ul>"),He=x("<li></li>");function Re(e){const[n,t]=$([]),[s,i]=$(""),[l,r]=$(!1),[o,u]=$(!1),[f,p]=$(!1),[b,E]=$(!1),k=(a,g)=>{p(!f()),g&&i(g)},R=()=>{k(),Le(s(),e.userInfo).then(()=>{r(!0),q().then(a=>t(a.filteredResults))}).catch(a=>{u(!0),console.log("Failed to add participant"+a)}),setTimeout(()=>{r(!1)},3e3)},oe=()=>{k(),Be(s(),e.userInfo).then(()=>{r(!0),q().then(a=>t(a.filteredResults))}).catch(a=>{u(!0),console.log("Failed to add participant"+a)}),setTimeout(()=>{r(!1)},3e3)};return te(async()=>q().then(a=>{t(a.filteredResults),E(!0)})),S(D,{get when(){return b()},get children(){const a=Me.cloneNode(!0);return a.firstChild,m(a,S(D,{get when(){return n().length>=1},get fallback(){return Ue.cloneNode(!0)},get children(){const g=De.cloneNode(!0);return m(g,()=>n().map(v=>(()=>{const A=He.cloneNode(!0);return A.$$click=B=>k(B,v.id),m(A,S(Fe,{get time(){return v.time},get participants(){return v.participants?v.participants.length:0},get id(){return v.id}})),A})())),F(()=>g.className=` ${l()?"active":""}`),g}}),null),m(a,S(D,{get when(){return f()},get children(){const g=Ie.cloneNode(!0),v=g.firstChild,A=v.nextSibling,B=A.firstChild,re=B.nextSibling;return Pe(g,()=>()=>p(!1)),B.$$click=()=>R(s()),re.$$click=()=>oe(s()),g}}),null),m(a,S(D,{get when(){return l()},get children(){const g=je.cloneNode(!0);return m(g,S(Te,{})),g}}),null),a}})}Se(["click"]);async function qe(){const n=await(await fetch("https://icy-cliff-03f1e8d03.1.azurestaticapps.net/.auth/me")).json(),{clientPrincipal:t}=n;return t}const ze=x("<div></div>");function Ge(){const[e,n]=$("");return te(async()=>{await qe().then(t=>{n(t)})}),(()=>{const t=ze.cloneNode(!0);return m(t,S(Re,{get userInfo(){return e().userDetails}})),F(()=>ve(t,Ee.App)),t})()}xe(()=>S(Ge,{}),document.getElementById("root"));
