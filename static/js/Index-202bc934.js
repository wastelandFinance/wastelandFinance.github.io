import{a9 as M,r as d,aZ as _t,az as s,$ as u,a0 as t,a7 as b,D as c,K as l,O as w,aF as A,aG as vt,aC as V,aA as z,Z as f,b1 as h,a6 as g,H as Y,b3 as R,bn as U,_ as y,au as ht,ap as mt}from"./@vue-823c75d3.js";import{$ as ft,Q as tt,X as et,T as pt}from"./getAssetsFile-12900b89.js";import{_ as P,B as x,D as st,u as kt,L as W}from"./index-21fc6ed5.js";import{E as ot,L as gt}from"./Loading-8d727223.js";import{T as Ct,d as yt,c as X}from"./UpgradeNft-19f40d0f.js";import{B as Ft}from"./Border-47a72e5b.js";import{b as $t,h as J}from"./index-e0361287.js";import{u as j}from"./vue-i18n-5b28fcda.js";/* empty css                                                          */import{u as Et}from"./vue-router-4d4637a0.js";import{M as bt}from"./MaskLoading-cfe9fdc1.js";import{a as wt}from"./index-8162cc3d.js";import{g as Dt,a as xt}from"./NFT-b8dae927.js";import{g as At}from"./stakingNft-4454bb83.js";import"./pinia-d7eeac71.js";import"./vue-demi-5b9a0fa5.js";import"./@metamask-0322580d.js";import"./@ethersproject-baa9d35e.js";import"./js-sha3-24137471.js";import"./hash.js-a20011ef.js";import"./minimalistic-assert-c1ce1705.js";import"./inherits-1fe83bc7.js";import"./bech32-9a81277b.js";import"./@walletconnect-6b5bf47d.js";import"./is-typedarray-4f40b03b.js";import"./query-string-2015e57d.js";import"./strict-uri-encode-ecbf5106.js";import"./decode-uri-component-fb3850ff.js";import"./split-on-first-6a113853.js";import"./typedarray-to-buffer-3049f596.js";import"./detect-browser-d6d27bfa.js";import"./qrcode-8475bf43.js";import"./isarray-dd297434.js";import"./buffer-42a74e2f.js";import"./base64-js-f5f6d31b.js";import"./ieee754-b34e253f.js";import"./dijkstrajs-5cebdf0c.js";import"./copy-to-clipboard-792b0d71.js";import"./toggle-selection-eefc0dc5.js";import"./preact-c6b9a0a0.js";import"./process-79043346.js";import"./@intlify-22bbbbdc.js";import"./vue-b8cbd5d3.js";/* empty css                                                            */import"./lottie-web-96c2a85a.js";/* empty css                                                         */import"./public-d126e26e.js";import"./axios-f45f83e3.js";/* empty css                                                                */import"./qs-899482d5.js";import"./side-channel-c89d4eb5.js";import"./get-intrinsic-13ed3457.js";import"./has-symbols-39607a5b.js";import"./function-bind-f4350d04.js";import"./has-c67be6c1.js";import"./call-bind-60ebbe96.js";import"./object-inspect-cc1301a1.js";const at=e=>(V("data-v-cbf4221a"),e=e(),z(),e),Bt={class:"hero-card-container"},Ht={class:"hero-info"},St={class:"base-flex base-height"},It={class:"hero-name"},Lt={class:"hero-type"},Nt={class:"base-flex base-height"},Tt={class:"base-flex"},Rt={class:"star"},Ut={class:"grade"},Mt=at(()=>t("div",{class:"dot"},null,-1)),Vt={class:"base-flex base-height"},zt={class:"base-font"},Pt={class:"base-flex"},jt=at(()=>t("div",{class:"ques-icon"},null,-1)),Gt={class:"base-flex base-height"},Zt={class:"base-font"},qt=M({__name:"HeroCard",props:{data:{default:()=>({})}},setup(e){const n=e,{t:_}=j(),k=d(0);return _t(()=>{if(k.value=0,n.data.attributes)for(let v in n.data.attributes)k.value+=n.data.attributes[v]}),(v,m)=>(s(),u("div",Bt,[t("div",null,[b(Ft,{border:!1,img:e.data.image,"rarity-img":c($t)[e.data.rarity]},null,8,["img","rarity-img"])]),t("div",Ht,[t("div",St,[t("span",It,l(e.data.name),1),t("span",Lt,l(c(_)(e.data.classes)),1)]),t("div",Nt,[t("div",Tt,[(s(!0),u(w,null,A(e.data.starRate,D=>(s(),u("div",Rt))),256))]),t("span",Ut,[Mt,t("div",null,"LV"+l(e.data.level),1)])]),t("div",Vt,[t("div",zt,l(c(_)("\u603B\u5C5E\u6027")),1),t("div",Pt,[t("div",null,l(k.value),1),jt])]),t("div",Gt,[t("span",Zt,l(c(_)(c(J)[e.data.classes])),1),t("span",null,l(e.data.attributes&&e.data.attributes[c(J)[e.data.classes]]),1)])]),vt(v.$slots,"default",{},void 0,!0)]))}});var lt=P(qt,[["__scopeId","data-v-cbf4221a"]]);const Kt=e=>(V("data-v-1a1c28b4"),e=e(),z(),e),Ot={class:"content"},Qt={class:"desc"},Wt=Kt(()=>t("div",{class:"pic"},[t("img",{src:ft})],-1)),Xt={class:"light-height"},Jt={class:"flex"},Yt=M({__name:"DecomposeDialog",props:{show:{type:Boolean,default:!1},count:{default:0}},emits:["close"],setup(e,{emit:n}){const{t:_}=j(),k=()=>{n("close")},v=Et(),m=()=>{v.push("/user/wallet")};return(D,p)=>(s(),f(st,{title:"\u5206\u89E3\u6210\u529F",show:e.show,onClose:k},{default:h(()=>[t("div",Ot,[t("div",Qt,l(c(_)("\u606D\u559C\u60A8\u83B7\u5F97")),1),Wt,t("div",Xt,l(e.count)+" "+l(c(_)("\u5347\u661F\u788E\u7247")),1),t("div",Jt,[t("div",null,l(c(_)("\u788E\u7247\u5DF2\u81EA\u52A8\u8F6C\u5165\u4F60\u7684\u94B1\u5305")),1),t("div",{class:"share",onClick:m})]),b(x,{onClick:k},{default:h(()=>[g(l(c(_)("\u6211\u77E5\u9053\u4E86")),1)]),_:1})])]),_:1},8,["show"]))}});var te=P(Yt,[["__scopeId","data-v-1a1c28b4"]]);const ut=e=>(V("data-v-756f50b1"),e=e(),z(),e),ee={class:"content"},se={class:"top"},oe={class:"star-list"},ae=["onClick"],le=ut(()=>t("img",{src:tt},null,-1)),ue=[le],ie=["onClick"],ce=ut(()=>t("img",{src:et},null,-1)),ne=[ce],re={key:0,class:"hero-scroll"},de={class:"hero-list"},_e={class:"select-icon-mark"},ve={key:2,class:"btn-blcok"},he=M({__name:"SelectHeroDialogForPhone",props:{list:{default:()=>[]}},emits:["close","confirm","selectAll","starClick"],setup(e,{emit:n}){const{t:_}=j(),k=()=>{n("close")},v=d({}),m=F=>{v.value=F},D=()=>{n("confirm",v)},p=d(0),I=F=>{p.value=F,n("starClick",F)},C=()=>{p.value=0,n("selectAll")};return(F,L)=>(s(),f(st,{show:"",title:"\u9009\u62E9\u82F1\u96C4",onClose:k},{default:h(()=>[t("div",ee,[t("div",se,[t("div",{class:"desc",onClick:C},l(c(_)("\u5168\u90E8")),1),t("div",oe,[(s(!0),u(w,null,A(p.value,a=>(s(),u("div",{class:"star-icon",key:a,onClick:$=>I(a)},ue,8,ae))),128)),(s(!0),u(w,null,A(5-p.value,a=>(s(),u("div",{class:"star-icon",key:a,onClick:$=>I(a+p.value)},ne,8,ie))),128))])]),e.list.length?(s(),u("div",re,[t("div",de,[(s(!0),u(w,null,A(e.list,(a,$)=>(s(),f(lt,{class:Y([a.token_id==v.value.token_id?"active-class":"","card-item"]),key:$,data:a,onClick:G=>m(a)},{default:h(()=>[R(t("div",_e,null,512),[[U,a.token_id==v.value.token_id]])]),_:2},1032,["class","data","onClick"]))),128))])])):y("",!0),e.list.length?y("",!0):(s(),f(ot,{key:1},{default:h(()=>[g(l(c(_)("\u4F60\u8FD8\u6CA1\u6709\u4EFB\u4F55\u82F1\u96C4"))+"\uFF01",1)]),_:1})),e.list.length?(s(),u("div",ve,[b(x,{onClick:D},{default:h(()=>[g(l(c(_)("\u786E\u5B9A")),1)]),_:1})])):y("",!0)])]),_:1}))}});var me=P(he,[["__scopeId","data-v-756f50b1"]]);const B=e=>(V("data-v-75ca9918"),e=e(),z(),e),fe=g("\u4F60\u53EF\u4EE5\u901A\u8FC7\u5206\u89E3\u82F1\u96C4\u6765\u83B7\u5F97\u788E\u7247\uFF0C\u788E\u7247\u662F\u82F1\u96C4\u5347\u661F\u7684\u5FC5\u8981\u539F\u6599"),pe={class:"fragment-box"},ke={class:"top"},ge={class:"pic-container"},Ce=["src"],ye={class:"select-icon"},Fe=B(()=>t("img",{src:pt},null,-1)),$e=[Fe],Ee={key:0,class:"text"},be={key:1,class:"text"},we=g(" \u5206\u89E3\u6210\u529F\u540E\uFF0C\u4F60\u5C06\u5931\u53BB\u6B64\u82F1\u96C4\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C \u5E76\u83B7\u5F97"),De={style:{color:"#e1c392"}},xe=g("\u788E\u7247 "),Ae=g("\u5206\u89E3"),Be=g("\u6388\u6743"),He={style:{display:"flex","align-items":"center","justify-content":"center"}},Se={style:{"margin-left":"5px",color:"#e1c392"}},Ie={style:{display:"flex","align-items":"center","justify-content":"center"}},Le={style:{"margin-left":"5px",color:"#e1c392"}},Ne={class:"bottom"},Te={style:{display:"flex"}},Re={class:"star-list"},Ue=["onClick"],Me=B(()=>t("img",{src:tt},null,-1)),Ve=[Me],ze=["onClick"],Pe=B(()=>t("img",{src:et},null,-1)),je=[Pe],Ge={key:1},Ze={key:0,class:"hero-list"},qe={class:"select"},Ke=B(()=>t("div",{class:"card-item"},null,-1)),Oe=B(()=>t("div",{class:"card-item"},null,-1)),Qe=B(()=>t("div",{class:"card-item"},null,-1)),We=B(()=>t("div",{class:"card-item"},null,-1)),Xe=M({__name:"Index",setup(e){const{t:n}=j(),_=d(!1),k=()=>{_.value=document.documentElement.clientWidth<750};ht(()=>{k(),window.addEventListener("resize",k,!1)});const v=kt(),m=d([]),D=d([]),p=d(!1),I=async()=>{try{if(v.address.length){p.value=!0;const o=await wt({account:v.address}),r=[],i=await At(v.address);if(i.length){i.map(K=>{r.push(K.toString())});const S=[];r.map(K=>{o.map(Q=>{K==Q.token_id&&S.push(Q)})}),m.value=S,D.value=S,p.value=!1}else p.value=!1}}catch(o){p.value=!1,console.log("\u53D1\u751F\u4E86\u672A\u77E5\u9519\u8BEF",o)}},C=d(!1),F=async()=>{const o=await Dt(v.address);C.value=o};mt(()=>{I(),F()});const L=d(""),a=d({}),$=d(0),G=d(!1),it=async o=>{G.value=!0,L.value=o.token_id,a.value=o;let r=await X(o.token_id);r&&(G.value=!1,$.value=Number(r.toString()))},H=d(!1),ct=async()=>{try{H.value=!0;const o=await xt();o.from?(await o.wait(2),H.value=!1,F()):H.value=!1}catch(o){H.value=!1,console.log("\u6388\u6743\u5931\u8D25",o)}},Z=d(!1),E=d(!1),nt=async()=>{try{if(C.value){E.value=!0;let o=await yt([a.value.token_id]);o.from&&(await o.wait(1)).from&&(E.value=!1,a.value={},L.value="",Z.value=!0,setTimeout(async()=>{await I()},1e3))}}catch(o){E.value=!1,console.log("\u5206\u89E3\u5931\u8D25",o)}},T=d(!1),rt=()=>{_.value&&!E.value&&(T.value=!0)},dt=o=>{m.value.map(async r=>{if(o.value.token_id==r.token_id){let i=await X(o.value.token_id);i&&($.value=Number(i.toString())),a.value=r,T.value=!1}})},N=d(0),q=o=>{N.value=o,m.value=[],D.value.map(r=>{r.starRate==o&&m.value.push(r)})},O=()=>{m.value=D.value,N.value=0};return(o,r)=>(s(),u(w,null,[b(Ct,null,{default:h(()=>[fe]),_:1}),t("div",pe,[t("div",ke,[t("div",{class:"base-border",onClick:rt},[R(t("div",ge,[t("img",{src:a.value.image},null,8,Ce)],512),[[U,a.value.token_id]]),R(t("div",ye,$e,512),[[U,!a.value.token_id]])]),a.value.heroid?(s(),u("div",be,[we,t("span",De,l($.value),1),xe])):(s(),u("div",Ee,l(c(n)("\u4E0D\u540C\u7A00\u6709\u5EA6\u7684\u82F1\u96C4\u53EF\u4EE5\u83B7\u5F97\u4E0D\u540C\u6570\u91CF\u7684\u788E\u7247")),1)),t("div",null,[a.value.heroid&&!E.value&&C.value?(s(),f(x,{key:0,onClick:nt},{default:h(()=>[Ae]),_:1})):y("",!0),!H.value&&!C.value?(s(),f(x,{key:1,onClick:ct},{default:h(()=>[Be]),_:1})):y("",!0),H.value&&!C.value?(s(),f(x,{key:2,style:{cursor:"not-allowed"}},{default:h(()=>[t("div",He,[b(W),t("div",Se,l(c(n)("\u6388\u6743\u4E2D"))+"...",1)])]),_:1})):y("",!0),!a.value.heroid&&!E.value&&C.value?(s(),f(x,{key:3,active:"","current-type":"disabled",style:{color:"#676C73",cursor:"not-allowed"}},{default:h(()=>[g(l(c(n)("\u5206\u89E3")),1)]),_:1})):y("",!0),a.value.heroid&&E.value&&C.value?(s(),f(x,{key:4,style:{cursor:"not-allowed"}},{default:h(()=>[t("div",Ie,[b(W),t("div",Le,l(c(n)("\u5206\u89E3\u4E2D"))+"...",1)])]),_:1})):y("",!0)])]),t("div",Ne,[t("div",Te,[t("div",{style:{cursor:"pointer"},onClick:O},l(c(n)("\u5168\u90E8")),1),t("div",Re,[(s(!0),u(w,null,A(N.value,i=>(s(),u("div",{class:"star-icon",key:i,onClick:S=>q(i)},Ve,8,Ue))),128)),(s(!0),u(w,null,A(5-N.value,i=>(s(),u("div",{class:"star-icon un-active",key:i,onClick:S=>q(i+N.value)},je,8,ze))),128))])]),p.value?(s(),f(gt,{key:0})):(s(),u("div",Ge,[m.value.length?(s(),u("div",Ze,[(s(!0),u(w,null,A(m.value,i=>(s(),f(lt,{key:i.token_id,class:Y([i.token_id==L.value?"active-class":"","card-item"]),onClick:S=>it(i),data:i},{default:h(()=>[R(t("div",qe,null,512),[[U,i.token_id==L.value]])]),_:2},1032,["class","onClick","data"]))),128)),Ke,Oe,Qe,We])):(s(),f(ot,{key:1},{default:h(()=>[g(l(c(n)("\u4F60\u8FD8\u6CA1\u6709\u4EFB\u4F55\u82F1\u96C4")),1)]),_:1}))])),a.value.heroid&&E.value?(s(),f(bt,{key:2})):y("",!0)]),b(te,{count:$.value,show:Z.value,onClose:r[0]||(r[0]=i=>Z.value=!1)},null,8,["count","show"]),b(me,{show:T.value,list:m.value,onClose:r[1]||(r[1]=i=>T.value=!1),onConfirm:dt,onStarClick:q,onSelectAll:O},null,8,["show","list"])])],64))}});var eo=P(Xe,[["__scopeId","data-v-75ca9918"]]);export{eo as default};
