import{g as o,c}from"./public-5eb57368.js";const a=async()=>await o(c.stakingNft.address,c.stakingNft.abi),i=async t=>(await a()).poolInfo(t),w=async t=>await(await a()).tokenInfo(t),g=async t=>await(await a()).getUserNft(t),u=async t=>(await a()).getUserDepositTokenID(t),y=async t=>await(await a()).clearfatigueValues(t),f=async(t,n,r)=>await(await a()).deposit(t,n,r),p=async t=>await(await a()).withdraw(t),d=async t=>await(await a()).withdrawEarn(t),k=async t=>await(await a()).getClearCoin(t),l=async()=>await(await a()).getCurrentMintRate(),C=async t=>await(await a()).getWorkStatus(t),I=async t=>await(await a()).pending(t),h=async t=>await(await a()).getFatigue(t);export{C as a,l as b,k as c,f as d,y as e,d as f,g,u as h,h as i,I as j,w as k,i as p,p as w};
