import{g as o,c as a}from"./public-5eb57368.js";import{M as n}from"./@ethersproject-baa9d35e.js";const c=async()=>await o(a.erc20.address,a.erc20.abi),i=async t=>(await c()).balanceOf(t),u=async()=>await(await c()).approve(a.buyMysteryBox.address,n),d=async t=>await(await c()).allowance(t,a.buyMysteryBox.address),y=async()=>await(await c()).approve(a.upgradeNft.address,n),p=async t=>await(await c()).allowance(t,a.upgradeNft.address);export{p as a,u as b,d as c,y as e,i as g};
