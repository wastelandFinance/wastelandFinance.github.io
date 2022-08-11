import{m as Q}from"./minimalistic-assert-770ac730.js";import{i as E0}from"./inherits-878ccdf9.js";var l0={},c={},K0=Q,I0=E0.exports;c.inherits=I0;function P0(t,r){return(t.charCodeAt(r)&64512)!==55296||r<0||r+1>=t.length?!1:(t.charCodeAt(r+1)&64512)===56320}function M0(t,r){if(Array.isArray(t))return t.slice();if(!t)return[];var n=[];if(typeof t=="string")if(r){if(r==="hex")for(t=t.replace(/[^a-z0-9]+/ig,""),t.length%2!==0&&(t="0"+t),e=0;e<t.length;e+=2)n.push(parseInt(t[e]+t[e+1],16))}else for(var h=0,e=0;e<t.length;e++){var a=t.charCodeAt(e);a<128?n[h++]=a:a<2048?(n[h++]=a>>6|192,n[h++]=a&63|128):P0(t,e)?(a=65536+((a&1023)<<10)+(t.charCodeAt(++e)&1023),n[h++]=a>>18|240,n[h++]=a>>12&63|128,n[h++]=a>>6&63|128,n[h++]=a&63|128):(n[h++]=a>>12|224,n[h++]=a>>6&63|128,n[h++]=a&63|128)}else for(e=0;e<t.length;e++)n[e]=t[e]|0;return n}c.toArray=M0;function R0(t){for(var r="",n=0;n<t.length;n++)r+=p0(t[n].toString(16));return r}c.toHex=R0;function _0(t){var r=t>>>24|t>>>8&65280|t<<8&16711680|(t&255)<<24;return r>>>0}c.htonl=_0;function q0(t,r){for(var n="",h=0;h<t.length;h++){var e=t[h];r==="little"&&(e=_0(e)),n+=g0(e.toString(16))}return n}c.toHex32=q0;function p0(t){return t.length===1?"0"+t:t}c.zero2=p0;function g0(t){return t.length===7?"0"+t:t.length===6?"00"+t:t.length===5?"000"+t:t.length===4?"0000"+t:t.length===3?"00000"+t:t.length===2?"000000"+t:t.length===1?"0000000"+t:t}c.zero8=g0;function G0(t,r,n,h){var e=n-r;K0(e%4===0);for(var a=new Array(e/4),i=0,s=r;i<a.length;i++,s+=4){var x;h==="big"?x=t[s]<<24|t[s+1]<<16|t[s+2]<<8|t[s+3]:x=t[s+3]<<24|t[s+2]<<16|t[s+1]<<8|t[s],a[i]=x>>>0}return a}c.join32=G0;function J0(t,r){for(var n=new Array(t.length*4),h=0,e=0;h<t.length;h++,e+=4){var a=t[h];r==="big"?(n[e]=a>>>24,n[e+1]=a>>>16&255,n[e+2]=a>>>8&255,n[e+3]=a&255):(n[e+3]=a>>>24,n[e+2]=a>>>16&255,n[e+1]=a>>>8&255,n[e]=a&255)}return n}c.split32=J0;function N0(t,r){return t>>>r|t<<32-r}c.rotr32=N0;function O0(t,r){return t<<r|t>>>32-r}c.rotl32=O0;function Q0(t,r){return t+r>>>0}c.sum32=Q0;function U0(t,r,n){return t+r+n>>>0}c.sum32_3=U0;function V0(t,r,n,h){return t+r+n+h>>>0}c.sum32_4=V0;function X0(t,r,n,h,e){return t+r+n+h+e>>>0}c.sum32_5=X0;function Y0(t,r,n,h){var e=t[r],a=t[r+1],i=h+a>>>0,s=(i<h?1:0)+n+e;t[r]=s>>>0,t[r+1]=i}c.sum64=Y0;function Z0(t,r,n,h){var e=r+h>>>0,a=(e<r?1:0)+t+n;return a>>>0}c.sum64_hi=Z0;function w0(t,r,n,h){var e=r+h;return e>>>0}c.sum64_lo=w0;function j0(t,r,n,h,e,a,i,s){var x=0,f=r;f=f+h>>>0,x+=f<r?1:0,f=f+a>>>0,x+=f<a?1:0,f=f+s>>>0,x+=f<s?1:0;var u=t+n+e+i+x;return u>>>0}c.sum64_4_hi=j0;function T0(t,r,n,h,e,a,i,s){var x=r+h+a+s;return x>>>0}c.sum64_4_lo=T0;function tt(t,r,n,h,e,a,i,s,x,f){var u=0,o=r;o=o+h>>>0,u+=o<r?1:0,o=o+a>>>0,u+=o<a?1:0,o=o+s>>>0,u+=o<s?1:0,o=o+f>>>0,u+=o<f?1:0;var v=t+n+e+i+x+u;return v>>>0}c.sum64_5_hi=tt;function rt(t,r,n,h,e,a,i,s,x,f){var u=r+h+a+s+f;return u>>>0}c.sum64_5_lo=rt;function et(t,r,n){var h=r<<32-n|t>>>n;return h>>>0}c.rotr64_hi=et;function at(t,r,n){var h=t<<32-n|r>>>n;return h>>>0}c.rotr64_lo=at;function ht(t,r,n){return t>>>n}c.shr64_hi=ht;function nt(t,r,n){var h=t<<32-n|r>>>n;return h>>>0}c.shr64_lo=nt;var E={},u0=c,it=Q;function Z(){this.pending=null,this.pendingTotal=0,this.blockSize=this.constructor.blockSize,this.outSize=this.constructor.outSize,this.hmacStrength=this.constructor.hmacStrength,this.padLength=this.constructor.padLength/8,this.endian="big",this._delta8=this.blockSize/8,this._delta32=this.blockSize/32}E.BlockHash=Z;Z.prototype.update=function(r,n){if(r=u0.toArray(r,n),this.pending?this.pending=this.pending.concat(r):this.pending=r,this.pendingTotal+=r.length,this.pending.length>=this._delta8){r=this.pending;var h=r.length%this._delta8;this.pending=r.slice(r.length-h,r.length),this.pending.length===0&&(this.pending=null),r=u0.join32(r,0,r.length-h,this.endian);for(var e=0;e<r.length;e+=this._delta32)this._update(r,e,e+this._delta32)}return this};Z.prototype.digest=function(r){return this.update(this._pad()),it(this.pending===null),this._digest(r)};Z.prototype._pad=function(){var r=this.pendingTotal,n=this._delta8,h=n-(r+this.padLength)%n,e=new Array(h+this.padLength);e[0]=128;for(var a=1;a<h;a++)e[a]=0;if(r<<=3,this.endian==="big"){for(var i=8;i<this.padLength;i++)e[a++]=0;e[a++]=0,e[a++]=0,e[a++]=0,e[a++]=0,e[a++]=r>>>24&255,e[a++]=r>>>16&255,e[a++]=r>>>8&255,e[a++]=r&255}else for(e[a++]=r&255,e[a++]=r>>>8&255,e[a++]=r>>>16&255,e[a++]=r>>>24&255,e[a++]=0,e[a++]=0,e[a++]=0,e[a++]=0,i=8;i<this.padLength;i++)e[a++]=0;return e};var K={},z={},st=c,g=st.rotr32;function ft(t,r,n,h){if(t===0)return $0(r,n,h);if(t===1||t===3)return S0(r,n,h);if(t===2)return m0(r,n,h)}z.ft_1=ft;function $0(t,r,n){return t&r^~t&n}z.ch32=$0;function m0(t,r,n){return t&r^t&n^r&n}z.maj32=m0;function S0(t,r,n){return t^r^n}z.p32=S0;function ct(t){return g(t,2)^g(t,13)^g(t,22)}z.s0_256=ct;function xt(t){return g(t,6)^g(t,11)^g(t,25)}z.s1_256=xt;function ot(t){return g(t,7)^g(t,18)^t>>>3}z.g0_256=ot;function ut(t){return g(t,17)^g(t,19)^t>>>10}z.g1_256=ut;var k=c,vt=E,bt=z,T=k.rotl32,N=k.sum32,dt=k.sum32_5,lt=bt.ft_1,H0=vt.BlockHash,_t=[1518500249,1859775393,2400959708,3395469782];function S(){if(!(this instanceof S))return new S;H0.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.W=new Array(80)}k.inherits(S,H0);var pt=S;S.blockSize=512;S.outSize=160;S.hmacStrength=80;S.padLength=64;S.prototype._update=function(r,n){for(var h=this.W,e=0;e<16;e++)h[e]=r[n+e];for(;e<h.length;e++)h[e]=T(h[e-3]^h[e-8]^h[e-14]^h[e-16],1);var a=this.h[0],i=this.h[1],s=this.h[2],x=this.h[3],f=this.h[4];for(e=0;e<h.length;e++){var u=~~(e/20),o=dt(T(a,5),lt(u,i,s,x),f,h[e],_t[u]);f=x,x=s,s=T(i,30),i=a,a=o}this.h[0]=N(this.h[0],a),this.h[1]=N(this.h[1],i),this.h[2]=N(this.h[2],s),this.h[3]=N(this.h[3],x),this.h[4]=N(this.h[4],f)};S.prototype._digest=function(r){return r==="hex"?k.toHex32(this.h,"big"):k.split32(this.h,"big")};var D=c,gt=E,I=z,$t=Q,_=D.sum32,mt=D.sum32_4,St=D.sum32_5,Ht=I.ch32,At=I.maj32,zt=I.s0_256,Bt=I.s1_256,yt=I.g0_256,Ct=I.g1_256,A0=gt.BlockHash,Lt=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298];function H(){if(!(this instanceof H))return new H;A0.call(this),this.h=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],this.k=Lt,this.W=new Array(64)}D.inherits(H,A0);var z0=H;H.blockSize=512;H.outSize=256;H.hmacStrength=192;H.padLength=64;H.prototype._update=function(r,n){for(var h=this.W,e=0;e<16;e++)h[e]=r[n+e];for(;e<h.length;e++)h[e]=mt(Ct(h[e-2]),h[e-7],yt(h[e-15]),h[e-16]);var a=this.h[0],i=this.h[1],s=this.h[2],x=this.h[3],f=this.h[4],u=this.h[5],o=this.h[6],v=this.h[7];for($t(this.k.length===h.length),e=0;e<h.length;e++){var b=St(v,Bt(f),Ht(f,u,o),this.k[e],h[e]),l=_(zt(a),At(a,i,s));v=o,o=u,u=f,f=_(x,b),x=s,s=i,i=a,a=_(b,l)}this.h[0]=_(this.h[0],a),this.h[1]=_(this.h[1],i),this.h[2]=_(this.h[2],s),this.h[3]=_(this.h[3],x),this.h[4]=_(this.h[4],f),this.h[5]=_(this.h[5],u),this.h[6]=_(this.h[6],o),this.h[7]=_(this.h[7],v)};H.prototype._digest=function(r){return r==="hex"?D.toHex32(this.h,"big"):D.split32(this.h,"big")};var e0=c,B0=z0;function B(){if(!(this instanceof B))return new B;B0.call(this),this.h=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428]}e0.inherits(B,B0);var Wt=B;B.blockSize=512;B.outSize=224;B.hmacStrength=192;B.padLength=64;B.prototype._digest=function(r){return r==="hex"?e0.toHex32(this.h.slice(0,7),"big"):e0.split32(this.h.slice(0,7),"big")};var d=c,kt=E,Dt=Q,$=d.rotr64_hi,m=d.rotr64_lo,y0=d.shr64_hi,C0=d.shr64_lo,C=d.sum64,t0=d.sum64_hi,r0=d.sum64_lo,Ft=d.sum64_4_hi,Et=d.sum64_4_lo,Kt=d.sum64_5_hi,It=d.sum64_5_lo,L0=kt.BlockHash,Pt=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591];function p(){if(!(this instanceof p))return new p;L0.call(this),this.h=[1779033703,4089235720,3144134277,2227873595,1013904242,4271175723,2773480762,1595750129,1359893119,2917565137,2600822924,725511199,528734635,4215389547,1541459225,327033209],this.k=Pt,this.W=new Array(160)}d.inherits(p,L0);var W0=p;p.blockSize=1024;p.outSize=512;p.hmacStrength=192;p.padLength=128;p.prototype._prepareBlock=function(r,n){for(var h=this.W,e=0;e<32;e++)h[e]=r[n+e];for(;e<h.length;e+=2){var a=Xt(h[e-4],h[e-3]),i=Yt(h[e-4],h[e-3]),s=h[e-14],x=h[e-13],f=Ut(h[e-30],h[e-29]),u=Vt(h[e-30],h[e-29]),o=h[e-32],v=h[e-31];h[e]=Ft(a,i,s,x,f,u,o,v),h[e+1]=Et(a,i,s,x,f,u,o,v)}};p.prototype._update=function(r,n){this._prepareBlock(r,n);var h=this.W,e=this.h[0],a=this.h[1],i=this.h[2],s=this.h[3],x=this.h[4],f=this.h[5],u=this.h[6],o=this.h[7],v=this.h[8],b=this.h[9],l=this.h[10],P=this.h[11],M=this.h[12],U=this.h[13],w=this.h[14],j=this.h[15];Dt(this.k.length===h.length);for(var W=0;W<h.length;W+=2){var R=w,q=j,G=Ot(v,b),J=Qt(v,b),h0=Mt(v,b,l,P,M),n0=Rt(v,b,l,P,M,U),i0=this.k[W],s0=this.k[W+1],f0=h[W],c0=h[W+1],V=Kt(R,q,G,J,h0,n0,i0,s0,f0,c0),X=It(R,q,G,J,h0,n0,i0,s0,f0,c0);R=Jt(e,a),q=Nt(e,a),G=qt(e,a,i,s,x),J=Gt(e,a,i,s,x,f);var x0=t0(R,q,G,J),o0=r0(R,q,G,J);w=M,j=U,M=l,U=P,l=v,P=b,v=t0(u,o,V,X),b=r0(o,o,V,X),u=x,o=f,x=i,f=s,i=e,s=a,e=t0(V,X,x0,o0),a=r0(V,X,x0,o0)}C(this.h,0,e,a),C(this.h,2,i,s),C(this.h,4,x,f),C(this.h,6,u,o),C(this.h,8,v,b),C(this.h,10,l,P),C(this.h,12,M,U),C(this.h,14,w,j)};p.prototype._digest=function(r){return r==="hex"?d.toHex32(this.h,"big"):d.split32(this.h,"big")};function Mt(t,r,n,h,e){var a=t&n^~t&e;return a<0&&(a+=4294967296),a}function Rt(t,r,n,h,e,a){var i=r&h^~r&a;return i<0&&(i+=4294967296),i}function qt(t,r,n,h,e){var a=t&n^t&e^n&e;return a<0&&(a+=4294967296),a}function Gt(t,r,n,h,e,a){var i=r&h^r&a^h&a;return i<0&&(i+=4294967296),i}function Jt(t,r){var n=$(t,r,28),h=$(r,t,2),e=$(r,t,7),a=n^h^e;return a<0&&(a+=4294967296),a}function Nt(t,r){var n=m(t,r,28),h=m(r,t,2),e=m(r,t,7),a=n^h^e;return a<0&&(a+=4294967296),a}function Ot(t,r){var n=$(t,r,14),h=$(t,r,18),e=$(r,t,9),a=n^h^e;return a<0&&(a+=4294967296),a}function Qt(t,r){var n=m(t,r,14),h=m(t,r,18),e=m(r,t,9),a=n^h^e;return a<0&&(a+=4294967296),a}function Ut(t,r){var n=$(t,r,1),h=$(t,r,8),e=y0(t,r,7),a=n^h^e;return a<0&&(a+=4294967296),a}function Vt(t,r){var n=m(t,r,1),h=m(t,r,8),e=C0(t,r,7),a=n^h^e;return a<0&&(a+=4294967296),a}function Xt(t,r){var n=$(t,r,19),h=$(r,t,29),e=y0(t,r,6),a=n^h^e;return a<0&&(a+=4294967296),a}function Yt(t,r){var n=m(t,r,19),h=m(r,t,29),e=C0(t,r,6),a=n^h^e;return a<0&&(a+=4294967296),a}var a0=c,k0=W0;function y(){if(!(this instanceof y))return new y;k0.call(this),this.h=[3418070365,3238371032,1654270250,914150663,2438529370,812702999,355462360,4144912697,1731405415,4290775857,2394180231,1750603025,3675008525,1694076839,1203062813,3204075428]}a0.inherits(y,k0);var Zt=y;y.blockSize=1024;y.outSize=384;y.hmacStrength=192;y.padLength=128;y.prototype._digest=function(r){return r==="hex"?a0.toHex32(this.h.slice(0,12),"big"):a0.split32(this.h.slice(0,12),"big")};K.sha1=pt;K.sha224=Wt;K.sha256=z0;K.sha384=Zt;K.sha512=W0;var D0={},L=c,wt=E,Y=L.rotl32,v0=L.sum32,O=L.sum32_3,b0=L.sum32_4,F0=wt.BlockHash;function A(){if(!(this instanceof A))return new A;F0.call(this),this.h=[1732584193,4023233417,2562383102,271733878,3285377520],this.endian="little"}L.inherits(A,F0);D0.ripemd160=A;A.blockSize=512;A.outSize=160;A.hmacStrength=192;A.padLength=64;A.prototype._update=function(r,n){for(var h=this.h[0],e=this.h[1],a=this.h[2],i=this.h[3],s=this.h[4],x=h,f=e,u=a,o=i,v=s,b=0;b<80;b++){var l=v0(Y(b0(h,d0(b,e,a,i),r[tr[b]+n],jt(b)),er[b]),s);h=s,s=i,i=Y(a,10),a=e,e=l,l=v0(Y(b0(x,d0(79-b,f,u,o),r[rr[b]+n],Tt(b)),ar[b]),v),x=v,v=o,o=Y(u,10),u=f,f=l}l=O(this.h[1],a,o),this.h[1]=O(this.h[2],i,v),this.h[2]=O(this.h[3],s,x),this.h[3]=O(this.h[4],h,f),this.h[4]=O(this.h[0],e,u),this.h[0]=l};A.prototype._digest=function(r){return r==="hex"?L.toHex32(this.h,"little"):L.split32(this.h,"little")};function d0(t,r,n,h){return t<=15?r^n^h:t<=31?r&n|~r&h:t<=47?(r|~n)^h:t<=63?r&h|n&~h:r^(n|~h)}function jt(t){return t<=15?0:t<=31?1518500249:t<=47?1859775393:t<=63?2400959708:2840853838}function Tt(t){return t<=15?1352829926:t<=31?1548603684:t<=47?1836072691:t<=63?2053994217:0}var tr=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13],rr=[5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11],er=[11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6],ar=[8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11],hr=c,nr=Q;function F(t,r,n){if(!(this instanceof F))return new F(t,r,n);this.Hash=t,this.blockSize=t.blockSize/8,this.outSize=t.outSize/8,this.inner=null,this.outer=null,this._init(hr.toArray(r,n))}var ir=F;F.prototype._init=function(r){r.length>this.blockSize&&(r=new this.Hash().update(r).digest()),nr(r.length<=this.blockSize);for(var n=r.length;n<this.blockSize;n++)r.push(0);for(n=0;n<r.length;n++)r[n]^=54;for(this.inner=new this.Hash().update(r),n=0;n<r.length;n++)r[n]^=106;this.outer=new this.Hash().update(r)};F.prototype.update=function(r,n){return this.inner.update(r,n),this};F.prototype.digest=function(r){return this.outer.update(this.inner.digest()),this.outer.digest(r)};(function(t){var r=t;r.utils=c,r.common=E,r.sha=K,r.ripemd=D0,r.hmac=ir,r.sha1=r.sha.sha1,r.sha256=r.sha.sha256,r.sha224=r.sha.sha224,r.sha384=r.sha.sha384,r.sha512=r.sha.sha512,r.ripemd160=r.ripemd.ripemd160})(l0);var cr=l0;export{cr as h};
