import{g,a as m}from"./ssr-window-792d0f84.js";function E(t){const e=t.__proto__;Object.defineProperty(t,"__proto__",{get(){return e},set(n){e.__proto__=n}})}class d extends Array{constructor(e){typeof e=="number"?super(e):(super(...e||[]),E(this))}}function y(t=[]){const e=[];return t.forEach(n=>{Array.isArray(n)?e.push(...y(n)):e.push(n)}),e}function L(t,e){return Array.prototype.filter.call(t,e)}function b(t){const e=[];for(let n=0;n<t.length;n+=1)e.indexOf(t[n])===-1&&e.push(t[n]);return e}function x(t,e){if(typeof t!="string")return[t];const n=[],i=e.querySelectorAll(t);for(let s=0;s<i.length;s+=1)n.push(i[s]);return n}function o(t,e){const n=g(),i=m();let s=[];if(!e&&t instanceof d)return t;if(!t)return new d(s);if(typeof t=="string"){const r=t.trim();if(r.indexOf("<")>=0&&r.indexOf(">")>=0){let c="div";r.indexOf("<li")===0&&(c="ul"),r.indexOf("<tr")===0&&(c="tbody"),(r.indexOf("<td")===0||r.indexOf("<th")===0)&&(c="tr"),r.indexOf("<tbody")===0&&(c="table"),r.indexOf("<option")===0&&(c="select");const h=i.createElement(c);h.innerHTML=r;for(let a=0;a<h.childNodes.length;a+=1)s.push(h.childNodes[a])}else s=x(t.trim(),e||i)}else if(t.nodeType||t===n||t===i)s.push(t);else if(Array.isArray(t)){if(t instanceof d)return t;s=t}return new d(b(s))}o.fn=d.prototype;function N(...t){const e=y(t.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.add(...e)}),this}function w(...t){const e=y(t.map(n=>n.split(" ")));return this.forEach(n=>{n.classList.remove(...e)}),this}function A(...t){const e=y(t.map(n=>n.split(" ")));this.forEach(n=>{e.forEach(i=>{n.classList.toggle(i)})})}function C(...t){const e=y(t.map(n=>n.split(" ")));return L(this,n=>e.filter(i=>n.classList.contains(i)).length>0).length>0}function T(t,e){if(arguments.length===1&&typeof t=="string")return this[0]?this[0].getAttribute(t):void 0;for(let n=0;n<this.length;n+=1)if(arguments.length===2)this[n].setAttribute(t,e);else for(const i in t)this[n][i]=t[i],this[n].setAttribute(i,t[i]);return this}function D(t){for(let e=0;e<this.length;e+=1)this[e].removeAttribute(t);return this}function O(t){for(let e=0;e<this.length;e+=1)this[e].style.transform=t;return this}function _(t){for(let e=0;e<this.length;e+=1)this[e].style.transitionDuration=typeof t!="string"?`${t}ms`:t;return this}function H(...t){let[e,n,i,s]=t;typeof t[1]=="function"&&([e,i,s]=t,n=void 0),s||(s=!1);function r(l){const f=l.target;if(!f)return;const u=l.target.dom7EventData||[];if(u.indexOf(l)<0&&u.unshift(l),o(f).is(n))i.apply(f,u);else{const p=o(f).parents();for(let v=0;v<p.length;v+=1)o(p[v]).is(n)&&i.apply(p[v],u)}}function c(l){const f=l&&l.target?l.target.dom7EventData||[]:[];f.indexOf(l)<0&&f.unshift(l),i.apply(this,f)}const h=e.split(" ");let a;for(let l=0;l<this.length;l+=1){const f=this[l];if(n)for(a=0;a<h.length;a+=1){const u=h[a];f.dom7LiveListeners||(f.dom7LiveListeners={}),f.dom7LiveListeners[u]||(f.dom7LiveListeners[u]=[]),f.dom7LiveListeners[u].push({listener:i,proxyListener:r}),f.addEventListener(u,r,s)}else for(a=0;a<h.length;a+=1){const u=h[a];f.dom7Listeners||(f.dom7Listeners={}),f.dom7Listeners[u]||(f.dom7Listeners[u]=[]),f.dom7Listeners[u].push({listener:i,proxyListener:c}),f.addEventListener(u,c,s)}}return this}function M(...t){let[e,n,i,s]=t;typeof t[1]=="function"&&([e,i,s]=t,n=void 0),s||(s=!1);const r=e.split(" ");for(let c=0;c<r.length;c+=1){const h=r[c];for(let a=0;a<this.length;a+=1){const l=this[a];let f;if(!n&&l.dom7Listeners?f=l.dom7Listeners[h]:n&&l.dom7LiveListeners&&(f=l.dom7LiveListeners[h]),f&&f.length)for(let u=f.length-1;u>=0;u-=1){const p=f[u];i&&p.listener===i||i&&p.listener&&p.listener.dom7proxy&&p.listener.dom7proxy===i?(l.removeEventListener(h,p.proxyListener,s),f.splice(u,1)):i||(l.removeEventListener(h,p.proxyListener,s),f.splice(u,1))}}}return this}function j(...t){const e=g(),n=t[0].split(" "),i=t[1];for(let s=0;s<n.length;s+=1){const r=n[s];for(let c=0;c<this.length;c+=1){const h=this[c];if(e.CustomEvent){const a=new e.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0});h.dom7EventData=t.filter((l,f)=>f>0),h.dispatchEvent(a),h.dom7EventData=[],delete h.dom7EventData}}}return this}function q(t){const e=this;function n(i){i.target===this&&(t.call(this,i),e.off("transitionend",n))}return t&&e.on("transitionend",n),this}function F(t){if(this.length>0){if(t){const e=this.styles();return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null}function P(t){if(this.length>0){if(t){const e=this.styles();return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null}function k(){if(this.length>0){const t=g(),e=m(),n=this[0],i=n.getBoundingClientRect(),s=e.body,r=n.clientTop||s.clientTop||0,c=n.clientLeft||s.clientLeft||0,h=n===t?t.scrollY:n.scrollTop,a=n===t?t.scrollX:n.scrollLeft;return{top:i.top+h-r,left:i.left+a-c}}return null}function B(){const t=g();return this[0]?t.getComputedStyle(this[0],null):{}}function V(t,e){const n=g();let i;if(arguments.length===1)if(typeof t=="string"){if(this[0])return n.getComputedStyle(this[0],null).getPropertyValue(t)}else{for(i=0;i<this.length;i+=1)for(const s in t)this[i].style[s]=t[s];return this}if(arguments.length===2&&typeof t=="string"){for(i=0;i<this.length;i+=1)this[i].style[t]=e;return this}return this}function W(t){return t?(this.forEach((e,n)=>{t.apply(e,[e,n])}),this):this}function I(t){const e=L(this,t);return o(e)}function R(t){if(typeof t=="undefined")return this[0]?this[0].innerHTML:null;for(let e=0;e<this.length;e+=1)this[e].innerHTML=t;return this}function $(t){if(typeof t=="undefined")return this[0]?this[0].textContent.trim():null;for(let e=0;e<this.length;e+=1)this[e].textContent=t;return this}function z(t){const e=g(),n=m(),i=this[0];let s,r;if(!i||typeof t=="undefined")return!1;if(typeof t=="string"){if(i.matches)return i.matches(t);if(i.webkitMatchesSelector)return i.webkitMatchesSelector(t);if(i.msMatchesSelector)return i.msMatchesSelector(t);for(s=o(t),r=0;r<s.length;r+=1)if(s[r]===i)return!0;return!1}if(t===n)return i===n;if(t===e)return i===e;if(t.nodeType||t instanceof d){for(s=t.nodeType?[t]:t,r=0;r<s.length;r+=1)if(s[r]===i)return!0;return!1}return!1}function G(){let t=this[0],e;if(t){for(e=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(e+=1);return e}}function J(t){if(typeof t=="undefined")return this;const e=this.length;if(t>e-1)return o([]);if(t<0){const n=e+t;return n<0?o([]):o([this[n]])}return o([this[t]])}function U(...t){let e;const n=m();for(let i=0;i<t.length;i+=1){e=t[i];for(let s=0;s<this.length;s+=1)if(typeof e=="string"){const r=n.createElement("div");for(r.innerHTML=e;r.firstChild;)this[s].appendChild(r.firstChild)}else if(e instanceof d)for(let r=0;r<e.length;r+=1)this[s].appendChild(e[r]);else this[s].appendChild(e)}return this}function X(t){const e=m();let n,i;for(n=0;n<this.length;n+=1)if(typeof t=="string"){const s=e.createElement("div");for(s.innerHTML=t,i=s.childNodes.length-1;i>=0;i-=1)this[n].insertBefore(s.childNodes[i],this[n].childNodes[0])}else if(t instanceof d)for(i=0;i<t.length;i+=1)this[n].insertBefore(t[i],this[n].childNodes[0]);else this[n].insertBefore(t,this[n].childNodes[0]);return this}function Y(t){return this.length>0?t?this[0].nextElementSibling&&o(this[0].nextElementSibling).is(t)?o([this[0].nextElementSibling]):o([]):this[0].nextElementSibling?o([this[0].nextElementSibling]):o([]):o([])}function K(t){const e=[];let n=this[0];if(!n)return o([]);for(;n.nextElementSibling;){const i=n.nextElementSibling;t?o(i).is(t)&&e.push(i):e.push(i),n=i}return o(e)}function Q(t){if(this.length>0){const e=this[0];return t?e.previousElementSibling&&o(e.previousElementSibling).is(t)?o([e.previousElementSibling]):o([]):e.previousElementSibling?o([e.previousElementSibling]):o([])}return o([])}function Z(t){const e=[];let n=this[0];if(!n)return o([]);for(;n.previousElementSibling;){const i=n.previousElementSibling;t?o(i).is(t)&&e.push(i):e.push(i),n=i}return o(e)}function tt(t){const e=[];for(let n=0;n<this.length;n+=1)this[n].parentNode!==null&&(t?o(this[n].parentNode).is(t)&&e.push(this[n].parentNode):e.push(this[n].parentNode));return o(e)}function et(t){const e=[];for(let n=0;n<this.length;n+=1){let i=this[n].parentNode;for(;i;)t?o(i).is(t)&&e.push(i):e.push(i),i=i.parentNode}return o(e)}function nt(t){let e=this;return typeof t=="undefined"?o([]):(e.is(t)||(e=e.parents(t).eq(0)),e)}function it(t){const e=[];for(let n=0;n<this.length;n+=1){const i=this[n].querySelectorAll(t);for(let s=0;s<i.length;s+=1)e.push(i[s])}return o(e)}function st(t){const e=[];for(let n=0;n<this.length;n+=1){const i=this[n].children;for(let s=0;s<i.length;s+=1)(!t||o(i[s]).is(t))&&e.push(i[s])}return o(e)}function rt(){for(let t=0;t<this.length;t+=1)this[t].parentNode&&this[t].parentNode.removeChild(this[t]);return this}export{o as $,K as A,Q as B,Z as C,tt as D,et as E,nt as F,it as G,st as H,I,rt as J,N as a,T as b,D as c,O as d,_ as e,M as f,j as g,C as h,q as i,F as j,P as k,k as l,V as m,W as n,H as o,R as p,$ as q,w as r,B as s,A as t,z as u,G as v,J as w,U as x,X as y,Y as z};
