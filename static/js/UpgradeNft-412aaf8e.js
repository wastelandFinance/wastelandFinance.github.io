/* empty css                                                         */import{_ as o}from"./index-0faa561c.js";import{az as r,$ as i,a0 as c,aG as d,aC as u,aA as p}from"./@vue-823c75d3.js";import{g,c as s}from"./public-fdb8458e.js";const l={},_=t=>(u("data-v-9ea987b2"),t=t(),p(),t),f={class:"tips"},h={class:"tips-text"},y=_(()=>c("div",null,[c("div",{class:"help-icon"})],-1));function w(t,a){return r(),i("div",f,[c("div",h,[y,c("div",null,[d(t.$slots,"default",{},void 0,!0)])])])}var B=o(l,[["render",w],["__scopeId","data-v-9ea987b2"]]);const e=async()=>await g(s.upgradeNft.address,s.upgradeNft.abi),I=async t=>(await e()).destroy(t),b=async t=>{const a=t.signature;return delete t.signature,(await e()).purchMysteryBox(t,a)},C=async t=>{const a=await e(),n=t.signature;return delete t.signature,a.exchange(t,n)},k=async t=>{const a=t.signature;return delete t.signature,(await e()).upgradeStarRate(t,a)},N=async t=>await(await e()).getTokenSplitQuantity(t),T=async t=>await(await e()).getUserLastId(t);export{B as T,T as a,b,N as c,I as d,C as e,k as u};
