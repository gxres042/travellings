import{d as h,o as i,c as n,F as m,E as _,j as t,t as u,e as f,s as v,r as o,I as d,y as b}from"./framework.BTl5xOSe.js";const $={key:0},k=["src"],y=["href"],p=h({__name:"MaintainersTable",props:{maintainers:{},isActive:{type:Boolean}},setup(g){const l=s=>`https://github.com/${s}`,r=s=>`https://github.com/${s}.png`;return(s,a)=>(i(),n("table",null,[(i(!0),n(m,null,_(s.maintainers,(c,e)=>(i(),n(m,{key:e},[c.active===s.isActive?(i(),n("tr",$,[t("td",null,[t("img",{src:r(e),alt:"avatar",width:"40"},null,8,k)]),t("td",null,[t("a",{href:l(e)},u(e),9,y)]),t("td",null,u(c.title),1)])):f("",!0)],64))),128))]))}}),C={Luochancy:{title:"开往负责人",active:!0},xuanzhi33:{title:"前端开发 / 运维",active:!0},BLxcwg666:{title:"后端开发 / 运维",active:!0},"Big-Cake-jpg":{title:"维护组成员",active:!0},NanamiNakano:{title:"英文翻译",active:!0},ScaredCube:{title:"繁体中文翻译",active:!0},vicevolf:{title:"开往创始人",active:!1},Cubik65536:{title:"维护组成员",active:!1},jiangyangcreate:{title:"前任前后端开发",active:!1},imjason:{title:"前开往负责人",active:!1},rabbitxuanxuan:{title:"维护组成员",active:!1},baipin:{title:"维护组成员",active:!0},BCTX2010:{title:"维护组成员",active:!1},Jiaocz:{title:"维护组成员",active:!1},gtxykn0504:{title:"原文案编辑",active:!1},gxres042:{title:"维护组成员",active:!0},MengZeMC:{title:"公共关系",active:!0},linlinzzo:{title:"维护组成员",active:!1}},M=h({__name:"Maintainers",setup(g){const l=v(C);return(r,s)=>(i(),n(m,null,[o(r.$slots,"active"),d(p,{maintainers:l.value,isActive:!0},null,8,["maintainers"]),o(r.$slots,"inactive"),d(p,{maintainers:l.value,isActive:!1},null,8,["maintainers"])],64))}}),B={key:0},w={colspan:"3"},j={href:"https://github.com/travellings-link/travellings/commits/main/",target:"_blank"},N=h({__name:"Changelog",setup(g){const l=v(!1),r=v([]),s=a=>new Date(a).toLocaleString();return b(async()=>{l.value=!0;const a=new Date().getTime(),c=await fetch("https://api.github.com/repos/travellings-link/travellings/commits?per_page=100&_t="+a);r.value=(await c.json()).map(e=>({date:s(e.commit.author.date),message:e.commit.message,author:e.commit.author.name})),l.value=!1}),(a,c)=>(i(),n(m,null,[t("table",null,[t("thead",null,[t("th",null,[o(a.$slots,"date")]),t("th",null,[o(a.$slots,"message")]),t("th",null,[o(a.$slots,"author")])]),t("tbody",null,[l.value?(i(),n("tr",B,[t("td",w,[o(a.$slots,"loading")])])):(i(!0),n(m,{key:1},_(r.value,e=>(i(),n("tr",null,[t("td",null,u(e.date),1),t("td",null,u(e.message),1),t("td",null,u(e.author),1)]))),256))])]),t("a",j,[o(a.$slots,"more")])],64))}});export{M as _,N as a};