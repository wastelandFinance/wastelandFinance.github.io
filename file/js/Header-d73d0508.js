import{a9 as W,r as i,aZ as y,az as n,$ as o,aG as le,J as Z,au as ce,a0 as e,O as H,aF as z,H as S,K as c,D as t,b3 as D,bn as N,a7 as G,b1 as j,a6 as ie,aC as Q,aA as X,_ as ue}from"./@vue-4a3654e3.js";import{s as Y,t as de,u as re,v as _e,w as pe,g as I,x as ve,y as he,z as ge,A as me,B as fe}from"./getAssetsFile-9c077eee.js";import{u as M}from"./vue-i18n-e0b4ebde.js";import{u as O,b as ee}from"./vue-router-9c8b6c7f.js";import{u as q,_ as J,b as V,B as ke}from"./index-33775bea.js";import{s as K}from"./pinia-117a262d.js";import{f as U}from"./format-f8821988.js";const Ce=W({__name:"Text",setup(u){const k=q(),{currentLang:w}=K(k),g=i("");return y(()=>{g.value=w.value=="en"?"font-weight:600":"font-weight:500"}),(d,m)=>(n(),o("span",{style:Z(g.value)},[le(d.$slots,"default")],4))}});const B=u=>(Q("data-v-aeedece8"),u=u(),X(),u),xe={class:"nav"},be={class:"nav-list"},we=B(()=>e("img",{src:Y},null,-1)),Ee=[we],$e=["onClick"],Ie=B(()=>e("span",null,"wiki",-1)),Se=[Ie],ye={class:"nav-item"},Be={class:"start-game"},Fe=B(()=>e("div",{class:"fire-icon"},[e("img",{src:de})],-1)),Le={class:"nav-list"},De={class:"setting"},Ne=B(()=>e("div",{class:"base-icon user-icon"},[e("img",{src:re})],-1)),He=B(()=>e("div",{class:"base-icon logout-icon"},[e("img",{src:_e})],-1)),ze={class:"change-lang-block"},Ae=B(()=>e("div",{class:"down-icon"},[e("img",{src:pe})],-1)),Te={class:"change-lang"},Pe=["onClick"],Ve=W({__name:"Nav",setup(u){const k=i([{path:"/",name:"\u9996\u9875",id:1},{path:"/sale",name:"\u9500\u552E",id:2},{path:"/working",name:"\u6253\u5DE5",id:3},{path:"/resources",name:"\u83B7\u53D6\u8D44\u6E90",id:4}]),w=i({path:"/user",name:"\u94FE\u63A5\u94B1\u5305",id:4}),g={1:"English",2:"\u7E41\u4F53\u4E2D\u6587",3:"\u7B80\u4F53\u4E2D\u6587"},d=[{text:"\u7B80\u4F53\u4E2D\u6587",mapping:"zh",id:3},{text:"\u7E41\u4F53\u4E2D\u6587",mapping:"tc",id:2},{text:"English",mapping:"en",id:1}],m=O(),f=ee(),a=q(),{t:r,locale:E}=M(),l=i("/");y(()=>{f.path&&(l.value=f.path)});const F=()=>{A.value!==V&&L.value&&a.setBscShowState(!0)},s=()=>{m.push("/")},C=()=>{},v=h=>{m.push(h.path)},x=i(!1),R=()=>{x.value=!x.value},{currentLang:_,loginState:L,address:b,chainId:A}=K(a),T=i(1);y(()=>{T.value=_.value=="zh"?3:_.value=="en"?1:2});const se=h=>{T.value=h.id,E.value=h.mapping,x.value=!0,a.setLang(h.mapping)},$=i();ce(async()=>{a.saveAddress();const h=a.address,P=window.localStorage.getItem("login");h&&P&&($.value=U(h))});const ae=async()=>{a.setConnectWalletShow(!0)};y(()=>{b.value&&L.value?(a.setConnectWalletShow(!1),$.value=U(a.address)):($.value="",window.localStorage.removeItem("login"))});const ne=()=>{window.localStorage.removeItem("login"),a.saveLoginState(!1),$.value="",f.path.indexOf("/user")!==-1&&m.push("/")};return(h,P)=>(n(),o("div",xe,[e("div",be,[e("div",{class:"logo-icon",onClick:s},Ee),(n(!0),o(H,null,z(k.value,p=>(n(),o("div",{class:S(["nav-item"]),style:Z({color:l.value==p.path?"#e1c392":""}),key:p.id,onClick:oe=>v(p)},[G(Ce,{size:"bold"},{default:j(()=>[ie(c(t(r)(p.name)),1)]),_:2},1024)],12,$e))),128)),e("div",{class:S(["nav-item","po-reactive"]),onClick:C},Se),e("div",ye,[e("div",Be,[Fe,e("div",{class:"start-text",onClick:C},c(t(r)("\u5F00\u59CB\u6E38\u620F")),1)])])]),e("div",Le,[$.value?(n(),o("div",{key:1,onClick:F,class:S(["nav-item","active-account"])},[D(e("span",null,c($.value),513),[[N,t(A)==t(V)]]),D(e("span",null,c(t(r)("\u7F51\u7EDC\u9519\u8BEF")),513),[[N,t(A)!==t(V)]]),e("div",De,[e("div",{class:"setting-item select-active",onClick:P[0]||(P[0]=p=>v(w.value))},[Ne,e("div",null,c(t(r)("\u4E2A\u4EBA\u4E2D\u5FC3")),1)]),e("div",{class:"setting-item",onClick:ne},[He,e("div",null,c(t(r)("\u9000\u51FA\u767B\u5F55")),1)])])])):(n(),o("div",{key:0,class:"nav-item",onClick:ae},c(t(r)("\u8FDE\u63A5\u94B1\u5305")),1)),e("div",{class:"nav-item",onClick:R},[e("div",ze,[e("div",null,c(g[T.value]),1),Ae]),D(e("div",Te,[(n(),o(H,null,z(d,p=>e("div",{class:S(["lang-item",T.value==p.id?"active-lang":""]),onClick:oe=>se(p),key:p.id},c(p.text),11,Pe)),64))],512),[[N,x.value]])])])]))}});var pt=J(Ve,[["__scopeId","data-v-aeedece8"]]);const We={class:"nav-panel"},Re={class:"block"},Ge={class:"btn-block"},Me={class:"slot-style"},Oe={key:0,class:"special-style"},qe={class:"icon-block"},Je=["src"],Ke=W({__name:"NavPanel",emits:["btnItemClick"],setup(u,{emit:k}){const{t:w}=M(),g=[{path:I("phone/one/app-icon-github.png")},{path:I("phone/one/app-icon-m.png")},{path:I("phone/one/app-icon-tel.png")},{path:I("phone/one/app-icon-twi.png")},{path:I("phone/one/app-icon-discord.png")},{path:I("phone/one/app-icon-weibo.png")}],d=[{text:"\u9996\u9875",desc:null,path:"/",id:1},{text:"\u5F00\u59CB\u6E38\u620F",desc:"new",path:null,id:2},{text:"\u9500\u552E",desc:null,path:"/sale",id:3},{text:"\u6253\u5DE5",path:"/working",desc:null,id:4},{text:"\u8D44\u6E90",path:"/resources",desc:null,id:5},{text:"wiki",path:"/wiki",desc:null,id:6}],m=O();let f=i(1);const a=l=>{f.value=l.id,m.push(l.path),k("btnItemClick",!0)},r=ee(),E=i("/");return y(()=>{E.value=r.path}),(l,F)=>(n(),o("div",We,[e("div",Re,[e("div",Ge,[(n(),o(H,null,z(d,s=>G(ke,{key:s.id,currentType:E.value==s.path?"default":"disabled",onClick:C=>a(s)},{default:j(()=>[e("div",Me,[e("span",null,c(t(w)(s.text)),1),s.desc?(n(),o("span",Oe,c(s.desc&&s.desc),1)):ue("",!0)])]),_:2},1032,["currentType","onClick"])),64))]),e("div",qe,[(n(),o(H,null,z(g,(s,C)=>e("img",{key:C,src:s.path},null,8,Je)),64))])])]))}});var Ue=J(Ke,[["__scopeId","data-v-cc87e4d4"]]);const te=u=>(Q("data-v-80ef285a"),u=u(),X(),u),Ze=te(()=>e("img",{src:Y},null,-1)),je=[Ze],Qe={class:"right-icon"},Xe=te(()=>e("img",{src:fe},null,-1)),Ye=[Xe],et={class:"right-base-icon lang-icon"},tt=["src"],st={class:"change-lang"},at=["onClick"],nt=["src"],ot=W({__name:"Header",setup(u){const k=[{id:1,mapping:"en",text:"English"},{id:2,mapping:"zh",text:"\u7E41\u4F53\u4E2D\u6587"},{id:3,mapping:"zh",text:"\u7B80\u4F53\u4E2D\u6587"}],{t:w,locale:g}=M(),d=q(),{currentLang:m,loginState:f,chainId:a}=K(d),r=O(),E=()=>{f.value?f.value&&a.value!==V?d.setBscShowState(!0):r.push("/user"):d.setConnectWalletShow(!0)};let l=i(!1);const F=()=>{l.value=!l.value,v.value=!1};let s=i(1);y(()=>{s.value=m.value=="zh"?2:1});const C=_=>{s.value=_.id,g.value=_.mapping,d.setLang(_.mapping),F()};let v=i(!1);const x=()=>{v.value=!v.value,l.value=!1},R=_=>{_&&x()};return(_,L)=>(n(),o("div",{class:S(["h5-header",t(v)?"change-bg":""])},[e("div",null,[e("div",{class:"left-logo",onClick:L[0]||(L[0]=b=>_.$router.push("/"))},je)]),e("div",Qe,[e("div",{class:"right-base-icon",onClick:E},Ye),e("div",et,[e("img",{src:t(l)?t(ve):t(he),onClick:F},null,8,tt),D(e("div",st,[(n(),o(H,null,z(k,b=>e("div",{onClick:A=>C(b),key:b.id,class:S(["lang-item",t(s)==b.id?"active-lang":""])},c(b.text),11,at)),64))],512),[[N,t(l)]])]),e("div",{class:"right-base-icon",onClick:x},[e("img",{src:t(v)?t(ge):t(me)},null,8,nt)])]),D(G(Ue,{onBtnItemClick:R},null,512),[[N,t(v)]])],2))}});var vt=J(ot,[["__scopeId","data-v-80ef285a"]]);export{vt as H,pt as N};
