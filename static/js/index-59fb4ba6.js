import{N as Ut,H as zt,F as jt}from"./Header-e5f98252.js";import{a as vt,T as St}from"./Tabs-eae35a05.js";import{g as at,a1 as Qt,a2 as Ot,Q as Vt,a3 as Zt}from"./getAssetsFile-cd9e36ca.js";import{u as ot,S as Gt,A as Jt,B as P,W as Kt,_ as X,L as st,E as ft,M as Ct,I as Xt,X as Bt}from"./index-0faa561c.js";import{s as pt}from"./pinia-d7eeac71.js";import{u as Y}from"./vue-i18n-5b28fcda.js";import{a9 as tt,r as o,ap as gt,aZ as lt,$ as S,a0 as t,K as s,D as a,_ as W,Z as D,b1 as f,O as V,aF as K,az as n,a6 as Q,aC as nt,aA as it,w as ht,a7 as C,J as Yt,H as te,b3 as ee,bn as ae,a4 as oe,au as It,f as se,aq as ue,aB as le}from"./@vue-823c75d3.js";import{B as Wt}from"./Border-0b13b5cb.js";import{E as Ht,L as ne}from"./Loading-29378e09.js";import{c as ut,g as Tt}from"./public-fdb8458e.js";import{b as Mt,F as ie}from"./index-bb241e93.js";import{i as ce,a as re,j as de}from"./index-7ffaa781.js";import{a as _t,d as ve}from"./format-7642b802.js";import{E as $t}from"./EasyButton-1ff6b5e9.js";import{g as _e,c as pe,d as he}from"./GoldCoin-a6c3c42d.js";import"./vue-router-4d4637a0.js";/* empty css                                                         */import"./@metamask-0322580d.js";import"./@ethersproject-baa9d35e.js";import"./js-sha3-24137471.js";import"./hash.js-a20011ef.js";import"./minimalistic-assert-c1ce1705.js";import"./inherits-1fe83bc7.js";import"./bech32-9a81277b.js";import"./@walletconnect-6b5bf47d.js";import"./is-typedarray-4f40b03b.js";import"./query-string-2015e57d.js";import"./strict-uri-encode-ecbf5106.js";import"./decode-uri-component-fb3850ff.js";import"./split-on-first-6a113853.js";import"./typedarray-to-buffer-3049f596.js";import"./detect-browser-d6d27bfa.js";import"./qrcode-8475bf43.js";import"./isarray-dd297434.js";import"./buffer-42a74e2f.js";import"./base64-js-f5f6d31b.js";import"./ieee754-b34e253f.js";import"./dijkstrajs-5cebdf0c.js";import"./copy-to-clipboard-792b0d71.js";import"./toggle-selection-eefc0dc5.js";import"./preact-c6b9a0a0.js";import"./process-79043346.js";import"./vue-demi-5b9a0fa5.js";import"./@intlify-22bbbbdc.js";import"./vue-b8cbd5d3.js";/* empty css                                                            */import"./lottie-web-96c2a85a.js";import"./axios-f45f83e3.js";import"./qs-899482d5.js";import"./side-channel-c89d4eb5.js";import"./get-intrinsic-13ed3457.js";import"./has-symbols-39607a5b.js";import"./function-bind-f4350d04.js";import"./has-c67be6c1.js";import"./call-bind-60ebbe96.js";import"./object-inspect-cc1301a1.js";import"./dayjs-3b7406d5.js";import"./isMobile-b4d2a8d3.js";/* empty css                                                               */const Pt=e=>(nt("data-v-a003d236"),e=e(),it(),e),fe={class:"field-card-container"},ge={class:"pic-box"},ye=["src"],me={class:"working"},ke=Pt(()=>t("img",{src:Qt},null,-1)),we={key:0,class:"working-text"},Fe={class:"scence"},Ee={class:"attr-list"},Ce={class:"attr-item align-left"},De={class:"title"},Ae={class:"answer"},Be={class:"attr-item"},$e={class:"title"},be={class:"answer"},xe={class:"attr-item align-right"},Se={class:"title"},Ie={class:"answer"},We={class:"flex"},He={class:"icon"},Te=Pt(()=>t("img",{src:Ot},null,-1)),Me=[Te],Pe=tt({__name:"FieldCard",props:{path:{default:at("pc/work/sky.png")},config:{default:()=>({})},state:{type:Boolean,default:!1},workIng:{type:Boolean,default:!1}},emits:["working"],setup(e,{emit:i}){const{t:c}=Y(),l=()=>{i("working")},d=ot(),{loginState:h}=pt(d),m=()=>{d.setConnectWalletShow(!0)},v=o(!1),w=o(!1);gt(async()=>{d.loginState&&g()});const g=async()=>{await Gt()==Jt?v.value=!0:v.value=!1};lt(()=>{w.value=h.value,h.value&&g()});const F=async()=>{await Kt()?v.value=!0:v.value=!1};return(b,x)=>(n(),S("div",fe,[t("div",ge,[t("img",{src:e.path},null,8,ye),t("div",me,[ke,e.workIng?(n(),S("div",we,s(a(c)("\u5DE5\u4F5C\u4E2D")),1)):W("",!0)]),t("div",Fe,s(a(c)(e.config.name)),1)]),w.value&&v.value&&e.state?(n(),D(P,{key:0,style:{"justify-content":"center"},onClick:l},{default:f(()=>[Q(s(a(c)("\u5DE5\u4F5C")),1)]),_:1})):W("",!0),w.value?W("",!0):(n(),D(P,{key:1,style:{"justify-content":"center"},onClick:m},{default:f(()=>[Q(s(a(c)("\u8FDE\u63A5\u94B1\u5305")),1)]),_:1})),w.value&&!v.value&&!e.state?(n(),D(P,{key:2,"current-type":"err",style:{"justify-content":"center",color:"#fff"},onClick:F},{default:f(()=>[Q(s(a(c)("\u5207\u6362\u4E3ABSC\u7F51\u7EDC")),1)]),_:1})):W("",!0),w.value&&v.value&&!e.state?(n(),D(P,{key:3,active:"","current-type":"disabled",style:{"justify-content":"center",color:"#676C73"}},{default:f(()=>[Q(s(a(c)("\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u82F1\u96C4")),1)]),_:1})):W("",!0),t("div",Ee,[t("div",Ce,[t("div",De,s(a(c)(e.config.text)),1),t("div",Ae,s(a(c)(e.config.threshold)),1)]),t("div",Be,[t("div",$e,s(a(c)("\u5EFA\u8BAE")),1),t("div",be,s(e.config.proposal),1)]),t("div",xe,[t("div",Se,s(a(c)("\u5956\u52B1")),1),t("div",Ie,[t("div",We,[(n(!0),S(V,null,K(e.config.reward,q=>(n(),S("div",He,Me))),256))])])])])]))}});var Ft=X(Pe,[["__scopeId","data-v-a003d236"]]);const Lt=async()=>await Tt(ut.nft.address,ut.nft.abi),Le=async()=>await(await Lt()).setApprovalForAll(ut.stakingNft.address,!0),Ne=async e=>await(await Lt()).isApprovedForAll(e,ut.stakingNft.address),Z=async()=>await Tt(ut.stakingNft.address,ut.stakingNft.abi),qe=async e=>(await Z()).poolInfo(e),Re=async e=>await(await Z()).tokenInfo(e),Ue=async e=>(await Z()).getUserDepositTokenID(e),ze=async e=>await(await Z()).clearfatigueValues(e),je=async(e,i,c)=>await(await Z()).deposit(e,i,c),Qe=async e=>await(await Z()).withdraw(e),Oe=async e=>await(await Z()).withdrawEarn(e),Ve=async e=>await(await Z()).getClearCoin(e),Ze=async()=>await(await Z()).getCurrentMintRate(),Ge=async e=>await(await Z()).getWorkStatus(e),Je=async e=>await(await Z()).pending(e),Ke=async e=>await(await Z()).getFatigue(e);const Xe=e=>(nt("data-v-1b2185de"),e=e(),it(),e),Ye={class:"content"},ta={class:"hero-select"},ea={class:"view-win"},aa={class:"scroll-list"},oa=["onClick"],sa={key:0,class:"hero-win"},ua={class:"hero-list"},la=["onClick"],na={class:"pic-container"},ia={class:"item-info"},ca={class:"base-flex"},ra={class:"base-flex"},da={class:"base-flex"},va={class:"star-icon"},_a=Xe(()=>t("img",{src:Vt},null,-1)),pa=[_a],ha={class:"select-active"},fa={class:"handler"},ga={class:"custom-btn"},ya={class:"btn-text"},ma={class:"custom-btn"},ka={class:"btn-text"},wa=tt({__name:"SelectHeroDialog",props:{list:{default:()=>[]},selectHeroDialogShow:{type:Boolean,default:!1},poolId:{default:0},info:{default:()=>({})}},emits:["close","confirmClose","heroTypeSelect","onWork","getWork"],setup(e,{emit:i}){const c=e,{t:l}=Y(),d=ot(),{address:h}=pt(d);let m=[{id:0,type:"all",text:"\u5168\u90E8"},{id:1,type:"Warrior",text:"\u6218\u58EB"},{id:2,type:"Assassin",text:"\u523A\u5BA2"},{id:3,type:"Archer",text:"\u5C04\u624B"},{id:4,type:"Mage",text:"\u6CD5\u5E08"},{id:5,type:"Support",text:"\u8F85\u52A9"}];const v=()=>{F.value=[],i("close")},w=o(0),g=y=>{w.value=y.id,i("heroTypeSelect",y.type)},F=o([]),b=y=>{let H=F.value.indexOf(y.token_id);H==-1?F.value.push(y.token_id):F.value.splice(H,1)},x=o(!1),q=async()=>{try{x.value=!0;const y={staking_data:[],pool_id:c.poolId};F.value.map(_=>{let U=0,J={userAddress:"",tokenId:0,attackPower:0,mana:0,agility:0,totalAttributes:0};c.list.map(z=>{if(_==z.token_id){for(let r in z.attributes)U+=z.attributes[r];J={userAddress:d.address,tokenId:z.token_id,attackPower:z.attributes.attack,mana:z.attributes.magic,agility:z.attributes.agile,totalAttributes:U}}}),y.staking_data.push(J)});const H=await ce(y);if(H.data){let _=await je(y.staking_data,c.poolId,H.data);_.from?(await _.wait(2),x.value=!1,i("onWork",!0)):(x.value=!1,i("onWork",!1))}}catch{x.value=!1,i("onWork",!1)}},R=o(!1),p=o(""),O=o(""),T=o("success"),I=o(!1),L=async()=>{try{I.value=!0;let y=await Le();y.from&&(await y.wait(1),p.value="\u6388\u6743\u6210\u529F",O.value=y.hash,T.value="success",I.value=!1,M())}catch(y){p.value="\u6388\u6743\u5931\u8D25",O.value="\u7528\u6237\u53D6\u6D88\u4E86\u6388\u6743",T.value="error",I.value=!1,console.log("\u6388\u6743\u5931\u8D25",y)}R.value=!0},et=()=>{window.open(`${Xt}${O.value}`)};ht(R,y=>{setTimeout(()=>{y&&(R.value=!1)},2e3)});const G=o(!1),M=async()=>{if(h.value.length){const y=await Ne(h.value);G.value=y}};gt(()=>{M()});const N=o({});return lt(()=>{const y={},H=c.list;c.info.poolId==0||c.info.poolId==4?H.map(_=>{if(!y[_.token_id]){let U=0;for(let J in _.attributes)U+=_.attributes[J];y[_.token_id]={text:"\u603B\u5C5E\u6027",value:U}}}):H.map(_=>{y[_.token_id]||(y[_.token_id]={text:c.info.attr,value:_.attributes[c.info.attr]})}),N.value=y}),(y,H)=>(n(),S(V,null,[C(ft,{show:"",title:a(l)("\u9009\u62E9\u82F1\u96C4"),onClose:v},{default:f(()=>[t("div",Ye,[t("div",ta,[t("div",ea,[t("div",aa,[(n(!0),S(V,null,K(a(m),_=>(n(),S("span",{class:"item-type",key:_.id,style:Yt({color:w.value==_.id?"#E1C392":""}),onClick:U=>g(_)},s(a(l)(_.text)),13,oa))),128))])]),W("",!0)]),e.list.length?(n(),S("div",sa,[t("div",ua,[(n(!0),S(V,null,K(e.list,_=>(n(),S("div",{class:te(["hero-item",F.value.indexOf(_.token_id)!=-1?"select-hero":""]),key:_.token_id,onClick:U=>b(_)},[t("div",na,[C(Wt,{img:_.image,"rarity-img":a(Mt)[_.rarity]},null,8,["img","rarity-img"])]),t("div",ia,[t("div",ca,[t("span",null,s(_.name),1),t("span",null,s(N.value[_.token_id].text),1)]),t("div",ra,[t("div",da,[(n(!0),S(V,null,K(_.starRate,U=>(n(),S("div",va,pa))),256))]),t("span",null,s(N.value[_.token_id].value),1)])]),ee(t("div",ha,null,512),[[ae,F.value.indexOf(_.token_id)!=-1]])],10,la))),128))])])):(n(),D(Ht,{key:1},{default:f(()=>[Q(s(a(l)("\u60A8\u8FD8\u6CA1\u6709\u53EF\u5DE5\u4F5C\u7684\u82F1\u96C4"))+"\uFF01",1)]),_:1}))]),t("div",fa,[!G.value&&!I.value?(n(),D(P,{key:0,onClick:L},{default:f(()=>[t("div",null,s(a(l)("\u6388\u6743")),1)]),_:1})):W("",!0),I.value?(n(),D(P,{key:1,active:""},{default:f(()=>[t("div",ga,[C(st),t("div",ya,s(a(l)("\u6388\u6743\u4E2D"))+"...",1)])]),_:1})):W("",!0),!x.value&&G.value&&F.value.length?(n(),D(P,{key:2,onClick:q},{default:f(()=>[t("div",null,s(a(l)("\u5F00\u59CB\u5DE5\u4F5C")),1)]),_:1})):W("",!0),G.value&&!F.value.length&&!x.value?(n(),D(P,{key:3,active:"","current-type":"disabled",class:"disabled-btn"},{default:f(()=>[t("div",null,s(a(l)("\u5F00\u59CB\u5DE5\u4F5C")),1)]),_:1})):W("",!0),x.value?(n(),D(P,{key:4,active:""},{default:f(()=>[t("div",ma,[C(st),t("div",ka,s(a(l)("\u786E\u8BA4\u4E2D"))+"...",1)])]),_:1})):W("",!0)])]),_:1},8,["title"]),C(Ct,{title:p.value,desc:O.value,show:R.value,onClose:H[0]||(H[0]=_=>R.value=!1),onDescClick:et},null,8,["title","desc","show"])],64))}});var Fa=X(wa,[["__scopeId","data-v-1b2185de"]]);const Et=[{name:"\u6697\u5F71\u79D8\u5883",text:"\u95E8\u69DB",pic:"src/assets/img/pc/work/sky.png",poolId:0,threshold:"\u65E0\u95E8\u69DB",proposal:"\u6240\u6709\u82F1\u96C4",reward:1,type:1}],bt=[{name:"\u68A6\u5E7B\u79D8\u5883",text:"\u653B\u51FB",classes:"Archer",attr:"attack",pic:"src/assets/img/pc/work/menghuan.png",poolId:1,threshold:"60\u4EE5\u4E0A",value:60,proposal:"\u5C04\u624B",reward:2,type:1},{name:"\u68A6\u5E7B\u79D8\u5883",text:"\u9B54\u6CD5",attr:"magic",classes:"Mage",pic:"src/assets/img/pc/work/menghuan.png",poolId:2,threshold:"100\u4EE5\u4E0A",value:100,proposal:"\u6CD5\u5E08",reward:2,type:2},{name:"\u68A6\u5E7B\u79D8\u5883",text:"\u654F\u6377",attr:"agile",classes:"Assassin",pic:"src/assets/img/pc/work/menghuan.png",poolId:3,threshold:"80\u4EE5\u4E0A",value:80,proposal:"c\u523A\u5BA2",reward:2,type:3}],xt=[{name:"\u52C7\u8005\u79D8\u5883",text:"\u603B\u5C5E\u6027",pic:"src/assets/img/pc/work/yongzhe.png",poolId:4,threshold:"258\u4EE5\u4E0A",proposal:"\u6240\u6709\u82F1\u96C4",reward:3,type:1}];const yt=e=>(nt("data-v-9c70c42a"),e=e(),it(),e),Ea={class:"moyu"},Ca={class:"moyu-desc"},Da={class:"produce"},Aa=yt(()=>t("div",{class:"cloud"},null,-1)),Ba={style:{color:"#fff"}},$a={class:"field-card-list base-list"},ba=yt(()=>t("span",null,null,-1)),xa={class:"field-card-list base-list"},Sa=yt(()=>t("span",null,null,-1)),Ia={class:"field-card-list base-list"},Wa=yt(()=>t("span",null,null,-1)),Ha=tt({__name:"Moyu",setup(e){const{t:i}=Y(),c=ot(),l=o(50),d=o(37),h=o("center"),m=()=>{const u=document.documentElement.clientWidth<750;l.value=u?37:50,d.value=u?232:260,h.value=u?"letf":"center"};m(),window.addEventListener("resize",m,!1);const v=async u=>{T(u)},w=u=>{T(u)},g=u=>{T(u)},F=o(!1),b=o([]),x=o([]),q=o(0),R=o({}),p={1:60,2:100,3:80},O={1:1,2:2,3:3},T=u=>{q.value=u.poolId,R.value=u,u.poolId==0?b.value=H.value:u.poolId==O[u.poolId]?(b.value=[],H.value.map(k=>{k.classes==u.classes&&k.attributes[u.attr]>p[u.poolId]&&b.value.push(k)})):(b.value=[],H.value.map(k=>{let A=0;for(let j in k.attributes)A+=k.attributes[j];A>258&&b.value.push(k)})),b.value.length&&(x.value=[...b.value]),F.value=!0},I=o(""),L=o(""),et=o(!1),G=o(!1),M=o("success"),N=u=>{et.value=u,F.value=!1,u?(M.value="success",I.value="\u8D28\u62BC\u6210\u529F",L.value="\u4F60\u7684\u82F1\u96C4\u5DF2\u7ECF\u5F00\u59CB\u4E3A\u60A8\u8D5A\u53D6\u6536\u76CA",setTimeout(()=>{wt(),_(),At()})):(M.value="error",I.value="\u8D28\u62BC\u5931\u8D25",L.value="\u4F60\u7684\u82F1\u96C4\u8D28\u62BC\u5931\u8D25"),G.value=!0};ht(G,u=>{setTimeout(()=>{u&&(G.value=!1)},2e3)});const y=u=>{x.value.length&&(b.value=[],u=="all"?b.value=[...x.value]:x.value.map(k=>{k.classes==u&&b.value.push(k)}))},H=o([]),_=async()=>{try{if(c.loginState){const u=await re({account:c.address});u.length&&(H.value=u)}}catch(u){console.log("\u672A\u77E5\u9519\u8BEF",u)}},U=o([]),J=()=>{const u=[];Et.map(k=>{let A=!1;k.type==1&&H.value.length&&(A=!0,u.push(A))}),U.value=u},z=o([]),r=()=>{const u=[];bt.map(k=>{let A=!1;k.poolId==O[k.poolId]&&H.value.map(j=>{j.classes==k.classes&&j.attributes[k.attr]>p[k.poolId]&&(A=!0)}),u.push(A)}),z.value=u},E=o([]),B=()=>{const u=[];xt.map(k=>{if(k.type==1){let A=!1;H.value.map(j=>{let dt=0;for(let Rt in j.attributes)dt+=j.attributes[Rt];dt>p[3]&&(A=!0,u.push(A))})}}),E.value=u},$=o(Et),ct=async()=>{try{if(c.loginState){const u={addition:"",perBlock:0,threshold:"",level:""},k=await qe(Et[0].poolId);k.addition&&(u.addition=k.addition.toString(),u.perBlock=_t(k.perBlock.toString()),u.threshold=k.threshold.toString(),u.level=k.level.toString(),u.threshold=="0"&&($.value[0].threshold="\u65E0\u95E8\u69DB",$.value[0].proposal="\u6240\u6709\u82F1\u96C4"))}}catch(u){console.log("\u610F\u6599\u4E4B\u5916",u)}},kt=o(0),Nt=async()=>{if(c.loginState){const u=await Ze();kt.value=u.toString()/100}},rt=o({}),At=async()=>{try{if(c.loginState){const u={};(await Ge(c.address)).map(A=>{u[A.pid.toString()]=A.state}),rt.value=u}}catch(u){console.log("\u62A5\u9519\u4E86",u)}},wt=async()=>{await _(),J(),r(),B(),Nt(),At(),ct()},{loginState:qt}=pt(c);return lt(()=>{qt.value?wt():(rt.value={},kt.value=0,E.value=[],z.value=[],U.value=[],H.value=[],x.value=[],b.value=[])}),gt(()=>{wt()}),(u,k)=>(n(),S(V,null,[t("div",Ea,[t("div",Ca,[t("div",Da,[Aa,t("span",null,s(a(i)("\u4EA7\u51FA\u7387"))+"\uFF1A",1),t("span",Ba,s(kt.value)+" %",1)]),W("",!0)]),C(St,{class:"tab-change",defaultTabIndex:"1",align:"between",border:!1,width:d.value},oe({default:f(()=>[C(vt,{tab:a(i)("\u521D\u7EA7"),key:"1"},{default:f(()=>[t("div",$a,[(n(!0),S(V,null,K($.value,(A,j)=>(n(),D(Ft,{state:U.value[j],workIng:rt.value[A.poolId],config:A,onWorking:dt=>v(A)},null,8,["state","workIng","config","onWorking"]))),256)),ba])]),_:1},8,["tab"]),C(vt,{tab:a(i)("\u8FDB\u9636"),key:"2"},{default:f(()=>[t("div",xa,[(n(!0),S(V,null,K(a(bt),(A,j)=>(n(),D(Ft,{path:a(at)("pc/work/yongzhe.png"),config:A,workIng:rt.value[A.poolId],state:z.value[j],onWorking:dt=>w(A)},null,8,["path","config","workIng","state","onWorking"]))),256)),Sa])]),_:1},8,["tab"]),C(vt,{tab:a(i)("\u5C01\u795E"),key:"3"},{default:f(()=>[t("div",Ia,[(n(!0),S(V,null,K(a(xt),(A,j)=>(n(),D(Ft,{path:a(at)("pc/work/menghuan.png"),config:A,workIng:rt.value[A.poolId],state:E.value[j],onWorking:dt=>g(A)},null,8,["path","config","workIng","state","onWorking"]))),256)),Wa])]),_:1},8,["tab"])]),_:2},[void 0]),1032,["width"])]),F.value?(n(),D(Fa,{key:0,list:b.value,poolId:q.value,info:R.value,onClose:k[0]||(k[0]=A=>F.value=!1),onHeroTypeSelect:y,onOnWork:N},null,8,["list","poolId","info"])):W("",!0),C(Ct,{show:G.value,title:I.value,desc:L.value,type:M.value},null,8,["show","title","desc","type"])],64))}});var Ta=X(Ha,[["__scopeId","data-v-9c70c42a"]]);const mt=e=>(nt("data-v-7d3ca775"),e=e(),it(),e),Ma={class:"hero-card-container"},Pa={class:"pic-container"},La={class:"hero-info-container"},Na={class:"block-top"},qa={class:"hero-name"},Ra={class:"base-place-style"},Ua={class:"block-center"},za={class:"info-item one"},ja={class:"info-item-left"},Qa={style:{"padding-right":"4px"}},Oa={class:"info-item-right"},Va={class:"value"},Za={class:"info-item two"},Ga={class:"info-item-left"},Ja={style:{"padding-right":"4px"}},Ka=mt(()=>t("div",null,null,-1)),Xa={class:"info-item-right"},Ya={class:"value"},to={class:"center-icon two-hover"},eo={class:"base-icon"},ao=["src"],oo={class:"item-two-hover bubble"},so={class:"info-item thr"},uo={class:"info-item-left"},lo={style:{"padding-right":"4px"}},no={class:"center-icon thr-hover"},io={class:"base-icon"},co=["src"],ro={class:"item-thr-hover bubble"},vo={class:"info-item-right"},_o={class:"value"},po={class:"center-icon"},ho={class:"info-item four"},fo={class:"info-item-left"},go={style:{"padding-right":"4px"}},yo=mt(()=>t("div",null,null,-1)),mo={class:"info-item-right",style:{display:"block"}},ko={class:"mdx-flex"},wo=mt(()=>t("div",{class:"mdx"},[t("img",{src:Zt})],-1)),Fo={class:"value fw-en",style:{color:"#E1C392"}},Eo=mt(()=>t("div",{class:"equal"}," $12.5 ",-1)),Co={class:"block-bottom"},Do=tt({__name:"HeroCard",props:{data:{default:()=>({})},map:{default:()=>({})},poolMapping:{default:()=>({})},block:null,zy:{default:0}},emits:["quitWork","pickUp","extractReward"],setup(e,{emit:i}){const c=e,{t:l}=Y(),d=[{id:1,text:"\u5E73\u5747\u6BCF\u533A\u5757\u6536\u76CA(DHT)",mapping:"revenuePerBlock",icon:at("pc/work/question-circle.png")},{id:2,text:"\u5DE5\u4F5C\u65F6\u957F(\u533A\u5757)",mapping:"workingTime",icon:at("pc/work/question-circle.png")},{id:3,text:"\u75B2\u52B3\u5EA6",mapping:"fatigue",icon:at("pc/work/refresh.png")},{id:4,text:"\u6536\u76CA",mapping:"profit",icon:at("pc/work/logo.png")}];let h=T=>{if(T){let I=ve(T*3);return`${I.days} d ${I.hours} h ${I.minutes} m `}};const m=()=>{i("quitWork")},v=T=>{i("pickUp")},w=()=>{i("extractReward")},g=o(120),F=o(44),b=()=>{const T=document.documentElement.clientWidth<750;g.value=T?120:90,F.value=T?44:32};It(()=>{b(),window.addEventListener("resize",b,!1)});const x={0:"\u5F53\u524D\u6BCF\u533A\u5757\u6536\u76CA\u4E3A\uFF1A0.05   * \uFF081- \u75B2\u52B3\u5EA6\uFF09* \u901A\u80C0\u4EA7\u51FA\u7387",1:"\u5F53\u524D\u6BCF\u533A\u5757\u6536\u76CA\u4E3A\uFF1A[0.05+(\u7279\u5F81\u5C5E\u6027-\u5C5E\u6027\u95E8\u69DB)*0.025 ] * \uFF081- \u75B2\u52B3\u5EA6\uFF09* \u901A\u80C0\u4EA7\u51FA\u7387",2:"\u5F53\u524D\u6BCF\u533A\u5757\u6536\u76CA\u4E3A\uFF1A[0.05+(\u7279\u5F81\u5C5E\u6027-\u5C5E\u6027\u95E8\u69DB)*0.025 ] * \uFF081- \u75B2\u52B3\u5EA6\uFF09* \u901A\u80C0\u4EA7\u51FA\u7387",3:"\u5F53\u524D\u6BCF\u533A\u5757\u6536\u76CA\u4E3A\uFF1A[0.05+(\u7279\u5F81\u5C5E\u6027-\u5C5E\u6027\u95E8\u69DB)*0.025 ] * \uFF081- \u75B2\u52B3\u5EA6\uFF09* \u901A\u80C0\u4EA7\u51FA\u7387",4:"\u5F53\u524D\u6BCF\u533A\u5757\u6536\u76CA\u4E3A\uFF1A[0.02+\uFF08\u82F1\u96C4\u603B\u5C5E\u6027-258\uFF09x 0.002] * \uFF081- \u75B2\u52B3\u5EA6\uFF09* \u901A\u80C0\u4EA7\u51FA\u7387"},q=o("\u68A6\u5E7B\u79D8\u5883"),R=o(""),p={0:"\u6697\u5F71\u79D8\u5883",1:"\u68A6\u5E7B\u79D8\u5883",2:"\u68A6\u5E7B\u79D8\u5883",3:"\u68A6\u5E7B\u79D8\u5883",4:"\u52C7\u8005\u79D8\u5883"},O=()=>{const T=c.data,L=c.poolMapping[T.token_id];q.value=p[L],R.value=x[L]};return lt(()=>{c.poolMapping&&O()}),(T,I)=>(n(),S("div",Ma,[t("div",Pa,[C(Wt,{border:!1,img:e.data.image,"rarity-img":a(Mt)[e.data.rarity]},null,8,["img","rarity-img"])]),t("div",La,[t("div",Na,[t("span",qa,s(a(l)(e.data.name)),1),t("span",Ra,s(q.value),1)]),t("div",Ua,[t("div",za,[t("div",ja,[t("div",Qa,s(a(l)(d[0].text)),1)]),t("div",Oa,[t("div",Va,s(e.map[e.data.token_id]&&e.map[e.data.token_id][d[0].mapping]),1),W("",!0)])]),t("div",Za,[t("div",Ga,[t("div",Ja,s(a(l)(d[1].text)),1),Ka]),t("div",Xa,[t("div",Ya,s(e.map[e.data.token_id]&&e.map[e.data.token_id][d[1].mapping]),1),t("div",to,[t("div",eo,[t("img",{src:d[1].icon},null,8,ao)]),t("div",oo,s(a(l)("\u5DE5\u4F5C\u65F6\u957F\u533A\u5757\u9AD8\u5EA6"))+"\uFF1A"+s(e.map[e.data.token_id]&&a(h)(e.map[e.data.token_id][d[1].mapping])),1)])])]),t("div",so,[t("div",uo,[t("div",lo,s(a(l)(d[2].text)),1),t("div",no,[t("div",io,[t("img",{src:d[0].icon},null,8,co)]),t("div",ro,s(a(l)("\u5DE5\u4F5C\u957F\u75B2\u52B3\u9AD8")),1)])]),t("div",vo,[t("div",_o,s(e.map[e.data.token_id]&&e.map[e.data.token_id][d[2].mapping]),1),t("div",po,[t("div",{class:"recovery",onClick:v},s(a(l)("\u6062\u590D")),1)])])]),t("div",ho,[t("div",fo,[t("div",go,s(a(l)(d[3].text)),1),yo]),t("div",mo,[t("div",ko,[wo,t("div",Fo,s(e.map[e.data.token_id]&&e.map[e.data.token_id][d[3].mapping])+" DTH ",1)]),Eo])])]),t("div",Co,[C($t,{width:g.value,height:F.value,style:{"margin-right":"10px"},onClick:w},{default:f(()=>[Q(s(a(l)("\u63D0\u53D6\u5956\u52B1")),1)]),_:1},8,["width","height"]),C($t,{width:g.value,height:F.value,type:"warning",onClick:m},{default:f(()=>[Q(s(a(l)("\u9000\u51FA\u5DE5\u4F5C")),1)]),_:1},8,["width","height"])])])]))}});var Ao=X(Do,[["__scopeId","data-v-7d3ca775"]]);const Bo=e=>(nt("data-v-17ff1cd4"),e=e(),it(),e),$o={class:"content"},bo={class:"hero-info"},xo={class:"hero-info-name base-color"},So=Bo(()=>t("span",{class:"hero-info-state-tips"},"\u5F53\u524D\u75B2\u52B3\u5EA6\uFF1A",-1)),Io={class:"hero-info-state-value"},Wo={class:"recovery-tips"},Ho={class:"active-tips"},To={class:"table"},Mo={class:"table-head"},Po={class:"base-flex base-color"},Lo={class:"base-flex base-color"},No={class:"table-content"},qo={class:"base-flex"},Ro={class:"base-flex"},Uo={class:"default-tips"},zo={class:"btn-text"},jo={class:"btn-text"},Qo=tt({__name:"PickUpDialog",props:{show:{type:Boolean,default:!0},data:{default:()=>({})},map:{default:()=>({})}},emits:["close","payment"],setup(e,{emit:i}){const c=e,{t:l}=Y(),d=ot(),h=()=>{i("close")},m=o(!1),v=async()=>{try{m.value=!0;let p=await ze(c.data.token_id);p.from?(await p.wait(2),m.value=!1,i("payment",!0)):(m.value=!1,i("payment",!1))}catch(p){i("payment",!1),m.value=!1,console.log("\u672A\u77E5\u9519\u8BEF",p)}},w=o(0);lt(async()=>{if(c.data.token_id){let p=await Ve(c.data.token_id);w.value=Number(_t(p.toString()).toFixed(4)),R()}});const g=o(!1),F=o(!1),b=async()=>{try{F.value=!0;let p=await pe();p.from&&(await p.wait(1),F.value=!1,x())}catch(p){F.value=!1,console.log("\u672A\u77E5\u9519\u8BEF",p)}},x=async()=>{try{if(d.address){let p=await he(d.address);g.value=Number(p.toString())>0}}catch(p){console.log("\u672A\u77E5\u9519\u8BEF",p)}},q=o(0),R=async()=>{try{if(d.loginState){let p=await _e(d.address);q.value=_t(p)||0,console.log(q.value)}}catch(p){console.log("\u83B7\u53D6dth\u4F59\u989D\u5931\u8D25",p)}};return gt(()=>{x()}),(p,O)=>(n(),D(ft,{show:e.show,onClose:h,title:a(l)("\u6062\u590D\u4F53\u529B")},{default:f(()=>[t("div",$o,[t("div",bo,[t("span",xo,s(e.data.name),1),So,t("span",Io,s(e.map[e.data.token_id]&&e.map[e.data.token_id].fatigue),1)]),t("div",Wo,[t("span",null,s(a(l)("\u6062\u590D\u4F53\u529B\u9700\u8981\u6D88\u8017\u7684\u4EE3\u5E01\u6570\u91CF"))+"\uFF0C"+s(a(l)("\u89C4\u5219")),1),t("span",Ho,s(a(l)("\u8BF7\u53C2\u8003")),1)]),t("div",To,[t("div",Mo,[t("div",Po,s(a(l)("\u75B2\u52B3\u5EA6")),1),t("div",Lo,s(a(l)("\u6D88\u8017\u4EE3\u5E01")),1)]),t("div",No,[(n(!0),S(V,null,K(a(ie),(T,I)=>(n(),S("div",{class:"table-content-row",key:I},[t("div",qo,s(T.fatigue),1),t("div",Ro,s(T.coin),1)]))),128))])]),t("div",Uo,"* "+s(a(l)("\u9700\u8981\u5148\u6062\u590D\u82F1\u96C4\u7684\u4F53\u529B\u624D\u80FD\u9000\u51FA\u5DE5\u4F5C")),1),!g.value&&!F.value?(n(),D(P,{key:0,onClick:b},{default:f(()=>[Q(s(a(l)("\u6388\u6743")),1)]),_:1})):W("",!0),!g.value&&F.value?(n(),D(P,{key:1,style:{cursor:"not-allowed"},active:""},{default:f(()=>[C(st),t("div",zo,s(a(l)("\u6388\u6743\u4E2D"))+"...",1)]),_:1})):W("",!0),!m.value&&g.value&&q.value>w.value?(n(),D(P,{key:2,onClick:v},{default:f(()=>[Q(s(a(l)("\u652F\u4ED8"))+" "+s(w.value)+" DHT",1)]),_:1})):W("",!0),m.value&&g.value?(n(),D(P,{key:3,active:""},{default:f(()=>[C(st),t("div",jo,s(a(l)("\u652F\u4ED8\u4E2D"))+"...",1)]),_:1})):W("",!0),g.value&&!m.value&&q.value<w.value?(n(),D(P,{key:4,active:"",style:{color:"#676c73",cursor:"not-allowed"},"current-type":"disabled"},{default:f(()=>[Q(s(a(l)("\u4F59\u989D\u4E0D\u8DB3")),1)]),_:1})):W("",!0)])]),_:1},8,["show","title"]))}});var Oo=X(Qo,[["__scopeId","data-v-17ff1cd4"]]);const Vo={class:"content"},Zo={class:"tips"},Go={style:{display:"flex","align-items":"center"}},Jo={style:{"margin-left":"5px",color:"#e1c392"}},Ko=tt({__name:"QuitWorkDialog",props:{show:{type:Boolean,default:!1},data:{default:()=>({})}},emits:["close","quitWork"],setup(e,{emit:i}){const c=e,{t:l}=Y(),d=()=>{i("close")};ot();const h=o(!1),m=async()=>{try{h.value=!0;let v=await Qe([c.data.token_id.toString()]);v.from?(await v.wait(2),h.value=!1,i("quitWork",!0)):(h.value=!1,i("quitWork",!1))}catch(v){h.value=!1,i("quitWork",!1),console.log("\u672A\u77E5\u9519\u8BEF",v)}};return(v,w)=>(n(),D(ft,{title:a(l)("\u9000\u51FA\u5DE5\u4F5C"),show:e.show,onClose:d},{default:f(()=>[t("div",Vo,[t("div",Zo,s(a(l)("\u786E\u5B9A\u8981\u9000\u51FA\u5F53\u524D\u5DE5\u4F5C\u5417"))+"\uFF1F",1),h.value?W("",!0):(n(),D(P,{key:0,onClick:m},{default:f(()=>[Q(s(a(l)("\u9000\u51FA\u5DE5\u4F5C")),1)]),_:1})),h.value?(n(),D(P,{key:1,style:{cursor:"not-allowed"}},{default:f(()=>[t("div",Go,[C(st),t("div",Jo,s(a(l)("\u9000\u51FA\u4E2D")),1)])]),_:1})):W("",!0)])]),_:1},8,["title","show"]))}});var Xo=X(Ko,[["__scopeId","data-v-4096b03a"]]);const Yo={class:"content"},ts={class:"tips"},es={style:{display:"flex","align-items":"center"}},as={style:{"margin-left":"5px",color:"#e1c392"}},os=tt({__name:"ExtractDialog",props:{show:{type:Boolean,default:!1},data:{default:()=>({})}},emits:["close","extract"],setup(e,{emit:i}){const c=e,{t:l}=Y(),d=()=>{i("close")},h=o(!1),m=async()=>{try{h.value=!0;let v=await Oe([c.data.token_id]);v.from?(await v.wait(1),h.value=!1,i("extract",!0)):(h.value=!1,i("extract",!1))}catch(v){h.value=!1,i("extract",!1),console.log("\u672A\u77E5\u9519\u8BEF",v)}};return(v,w)=>(n(),D(ft,{title:a(l)("\u63D0\u53D6\u5956\u52B1"),show:e.show,onClose:d},{default:f(()=>[t("div",Yo,[t("div",ts,s(a(l)("\u786E\u5B9A\u8981\u63D0\u53D6\u5F53\u524D\u5956\u52B1\u5417\uFF1F")),1),h.value?W("",!0):(n(),D(P,{key:0,onClick:m},{default:f(()=>[Q(s(a(l)("\u63D0\u53D6\u5956\u52B1")),1)]),_:1})),h.value?(n(),D(P,{key:1,style:{cursor:"not-allowed"}},{default:f(()=>[t("div",es,[C(st),t("div",as,s(a(l)("\u63D0\u53D6\u4E2D"))+"...",1)])]),_:1})):W("",!0)])]),_:1},8,["title","show"]))}});var ss=X(os,[["__scopeId","data-v-558c96d7"]]);const Dt=e=>(nt("data-v-4ba61c9d"),e=e(),it(),e),us={class:"hero"},ls={class:"hero-card-list"},ns={key:1,style:{width:"100%"}},is={key:0,style:{display:"flex","justify-content":"space-between","flex-wrap":"wrap"}},cs=Dt(()=>t("div",{class:"card-item"},null,-1)),rs=Dt(()=>t("div",{class:"card-item"},null,-1)),ds=Dt(()=>t("div",{class:"card-item"},null,-1)),vs=tt({__name:"MyHero",setup(e){const{t:i}=Y(),c=ot(),{loginState:l}=pt(c),d=o({}),h=o(!1),m=o(!1),v=o(""),w=o(""),g=o("success"),F=r=>{r?(v.value="\u9000\u51FA\u5DE5\u4F5C\u6210\u529F",w.value="\u5DF2\u5BF9\u8BE5\u82F1\u96C4\u9000\u51FA\u5DE5\u4F5C",g.value="success"):(v.value="\u9000\u51FA\u5DE5\u4F5C\u5931\u8D25",w.value="\u82F1\u96C4\u9000\u51FA\u5DE5\u4F5C\u5931\u8D25",g.value="error"),m.value=!0,h.value=!1,et()},b=r=>{d.value=r,h.value=!0},x=o(!1),q=r=>{d.value=r,x.value=!0},R=r=>{r?(v.value="\u6E05\u9664\u6210\u529F",w.value="\u5DF2\u6210\u529F\u6E05\u9664\u75B2\u52B3\u503C",g.value="success"):(v.value="\u6E05\u9664\u5931\u8D25",w.value="\u6E05\u9664\u75B2\u52B3\u503C\u5931\u8D25",g.value="error"),m.value=!0,x.value=!1,et()},p=o(!1),O=r=>{d.value=r,p.value=!0},T=r=>{r?(v.value="\u63D0\u53D6\u6210\u529F",w.value="\u5DF2\u6210\u529F\u63D0\u53D6\u5956\u52B1",g.value="success"):(v.value="\u63D0\u53D6\u6210\u529F",w.value="\u5F53\u524D\u63D0\u53D6\u5956\u52B1\u5931\u8D25",g.value="error"),m.value=!0,p.value=!1,et()};ht(m,r=>{setTimeout(()=>{r&&(m.value=!1)},2e3)});const I=o(!1),L=o([]),et=async()=>{try{if(c.loginState){I.value=!0;const r=[],E=await Ue(c.address);if(E.length){E.map($=>{r.push($.toString())});const B=await de(r);B.length&&(L.value=B,I.value=!1,await y(),await U(),await H())}else I.value=!1}}catch(r){I.value=!1,console.log("\u672A\u77E5\u9519\u8BEF",r)}},G=se("tabIndex");lt(()=>{G.value=="2"&&l.value?et():L.value=[]});const M=o({}),N=o([]),y=async()=>{try{const r={},E=[];L.value.map($=>{E.push($.token_id)}),N.value=E;let B=await Ke(E);for(let $=0;$<N.value.length;$++){const ct={};ct.fatigue=Number(B[$].fatigue.toString())/10+"%",ct.startBlock=B[$].rewardBlock.toString(),r[N.value[$]]=ct}M.value=r}catch(r){console.log("\u672A\u77E5\u9519\u8BEF",r)}},H=async()=>{try{if(l.value){const r=[];L.value.map($=>{r.push($.token_id)});const E=await Bt(),B=await Je(r);for(let $=0;$<N.value.length;$++)M.value[N.value[$]].profit=_t(B[$]),M.value[N.value[$]].revenuePerBlock=(_t(B[$])/(E-M.value[N.value[$]].startBlock)).toFixed(4);console.log(M.value)}}catch(r){console.log("\u672A\u77E5\u9519\u8BEF",r)}},_=o({}),U=async()=>{try{const r={};for(const E of L.value){let B=await Re(E.token_id);r[E.token_id]=B.pid.toString()}_.value=r}catch(r){console.log("\u672A\u77E5\u9519\u8BEF",r)}},J=o(0),z=o(0);return It(async()=>{try{z.value=setInterval(async()=>{let r=await Bt();J.value=r},3e3)}catch(r){console.log(r)}}),ue(()=>{clearInterval(z.value)}),ht(J,r=>{if(r)for(let E=0;E<N.value.length;E++){const B=M.value[N.value[E]].startBlock;M.value[N.value[E]].workingTime=r-B}}),(r,E)=>(n(),S(V,null,[t("div",us,[t("div",ls,[I.value?(n(),D(ne,{key:0})):(n(),S("div",ns,[L.value.length?(n(),S("div",is,[(n(!0),S(V,null,K(L.value,B=>(n(),D(Ao,{class:"card-item",key:B.token_id,data:B,map:M.value,poolMapping:_.value,onPickUp:$=>q(B),onQuitWork:$=>b(B),onExtractReward:$=>O(B),block:J.value,zy:M.value[B.token_id]?M.value[B.token_id].startBlock:0},null,8,["data","map","poolMapping","onPickUp","onQuitWork","onExtractReward","block","zy"]))),128)),cs,rs,ds])):(n(),D(Ht,{key:1},{default:f(()=>[Q(s(a(i)("\u4F60\u8FD8\u6CA1\u6709\u4EFB\u4F55\u82F1\u96C4")),1)]),_:1}))]))])]),C(Oo,{show:x.value,data:d.value,map:M.value,onClose:E[0]||(E[0]=B=>x.value=!1),onPayment:R},null,8,["show","data","map"]),C(Xo,{show:h.value,data:d.value,onClose:E[1]||(E[1]=B=>h.value=!1),onQuitWork:F},null,8,["show","data"]),C(ss,{show:p.value,data:d.value,onClose:E[2]||(E[2]=B=>p.value=!1),onExtract:T},null,8,["show","data"]),C(Ct,{show:m.value,title:v.value,desc:w.value,type:g.value,onClose:E[3]||(E[3]=B=>m.value=!1)},null,8,["show","title","desc","type"])],64))}});var _s=X(vs,[["__scopeId","data-v-4ba61c9d"]]);const ps={class:"work"},hs={class:"work-tabs"},fs=tt({__name:"index",setup(e){const{t:i}=Y();let c=o(0),l=o(0),d=o("center");const h=()=>{let g=document.documentElement.clientWidth<750;c.value=g?37:50,l.value=g?180:260,d.value=g?"left":"center"};h(),window.addEventListener("resize",h,!1);const m=ot();pt(m);const v=o("1");le("tabIndex",v);const w=({key:g})=>{v.value=g};return(g,F)=>(n(),S("div",ps,[C(Ut),C(zt),t("div",hs,[C(St,{align:a(d),defaultTabIndex:"1",width:a(l),height:a(c),onOnchange:w},{default:f(()=>[C(vt,{tab:a(i)("\u9B54\u57DF"),key:"1"},{default:f(()=>[C(Ta)]),_:1},8,["tab"]),C(vt,{tab:a(i)("\u6211\u7684\u82F1\u96C4"),key:"2"},{default:f(()=>[C(_s)]),_:1},8,["tab"])]),_:1},8,["align","width","height"])]),t("div",null,[C(jt)])]))}});var Fu=X(fs,[["__scopeId","data-v-513477c6"]]);export{Fu as default};
