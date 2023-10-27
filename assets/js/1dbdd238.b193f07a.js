"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[77634],{30388:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ue});var n=a(67294),s=(a(39960),a(52263)),r=a(56866);const l="blogHeaderText_H6Vi",c="imageContainer_O8qh",i="headerImage_c4xV";var o=a(44996);function m(){return n.createElement("div",null,n.createElement("div",{className:c},n.createElement("img",{className:i,src:(0,o.Z)("/blog/marketplace_banner_template.png")}),n.createElement("div",{className:l},"CoLab")))}const d="blogContainer_bvtN",u="blogSidbarContainer_V99e",g="blogCardContainer_eIX7",p="gridContainer_KFdq",f="center_gcgr",E="noFound_mX9x",v="modal_K5Yf",h="cardExit_MTVV",_="spinnerCenter_XLx8",y="card_lIUR",b="cardText_iMvO",N="cardImage_Ks_l",w="cardTitle_f5JS",C="cardBody_TFpj",k="tag_gwsV",S="tags_tQDu",x="cardData_b7P5",O="cardEye_hExo",j="cardComment_Uw_j",I="cardCommentText_QkKF",T="cardBadge_Wgdi",Z="cardBadgeImage_bSy6",D="cardBadgeText_ihfQ",$="cardBadgeCertified_S23p",B="cardBadgeCertifiedImage_nusu";a(50941);function K(e){let{post:t,openDialogFunc:a}=e;let s=n.createElement("div",null);return t.tags.includes("sailpoint-developed")?s=n.createElement("div",{className:T},n.createElement("img",{className:Z,src:(0,o.Z)("/icons/SailPoint-LogoIcon-RGB-Color.svg")}),n.createElement("span",{className:D},"SailPoint Developed")):t.tags.includes("sailpoint-certified")&&(s=n.createElement("div",{className:$},n.createElement("img",{className:B,src:(0,o.Z)("/marketplace/award-simple-sharp-solid.svg")}),n.createElement("span",null,"SailPoint Certified"))),n.createElement("div",{onClick:e=>{a({title:t.title,image:t.image,link:t.link,id:t.id})}},n.createElement("div",{className:y},n.createElement("div",{className:b},n.createElement("img",{className:N,src:(0,o.Z)(t.image)}),n.createElement("div",{className:w},t.title),n.createElement("div",{className:S},t.tags?.map(((e,t)=>t>2||"sailpoint-certified"==e||"sailpoint-authored"==e?"":n.createElement("div",{key:e,className:k},e)))),n.createElement("div",{className:C},t.excerpt)),n.createElement("div",{className:x},n.createElement("img",{className:O,src:(0,o.Z)("/blog/eye-regular.svg")}),n.createElement("div",{className:I},t.views),n.createElement("img",{className:j,src:(0,o.Z)("/blog/comment-light.svg")}),n.createElement("div",{className:I},t.replies)),s))}var L=a(83253),F=a.n(L),P=a(39121),R=a.n(P),V=a(23625),q=a(35012);const G="detailContainer_jXLX",H="detailHeader_hx5H",Q="detailImage_iwo4",z="detailTitle_GVfD",X="detailTabContent_Zzbl",A="detailTabs_nZmL",J="modalButtonText_HQ25",M="modalButton_vOVp",Y="spinnerCenter_G1Y7",U="buttonImage_vEFN";var W=a(78369),ee=a(47040);function te(e){let{details:t,rawPost:a}=e;const s=(e,t)=>{const a=e.indexOf("[//]: <> ("+t+" Start)"),n=e.indexOf("[//]: <> ("+t+" End)");if(a>0&&n>0){const s=e.substring(a+17+t.length,n),r=/upload:\/\/([^"]+)/g,l=(0,V.O$)()+"uploads/short-url/$1";return s.replace(r,l)}return"No requirements found for this marketplace item"};return t?n.createElement("div",{className:G},n.createElement("div",{className:H},n.createElement("div",{className:z},t.title),n.createElement("img",{className:Q,src:(0,o.Z)(t.image)})),n.createElement(W.mQ,{className:A},n.createElement("button",{className:M,onClick:async()=>{var e;e=t.link,window.open(e,"_blank")}},n.createElement("div",{className:J},n.createElement("img",{className:U,src:(0,o.Z)("/icons/discourse.svg")}),"Go to Download")),n.createElement(W.td,null,n.createElement(W.OK,null,"Overview"),n.createElement(W.OK,null,"Requirements"),n.createElement(W.OK,null,"Support")),n.createElement(W.x4,null,n.createElement(ee.D,{className:X},s(a,"Overview"))),n.createElement(W.x4,null,n.createElement(ee.D,{className:X},s(a,"Requirements"))),n.createElement(W.x4,null,n.createElement(ee.D,{className:X},"The Developer Community CoLab has three different support models, depending on the integration. Please see the full integration page using the ``` Go To Download ``` button above.")))):n.createElement(R(),{className:Y,color:"#0033a1",loading:!0,size:150,"aria-label":"Loading Spinner","data-testid":"loader"})}function ae(e){let{filterCallback:t}=e;const[a,s]=n.useState(),[r,l]=n.useState(!1),[c,i]=n.useState(""),[m,d]=n.useState(!0),u=()=>{l(!1)},g=e=>{i({data:void 0,raw:void 0}),(async e=>{const t=await(0,q.RS)(e.id);i({data:e,raw:t})})(e),l(!0)};n.useEffect((()=>{}),[r,c]),F().setAppElement("#__docusaurus"),n.useEffect((()=>{(async()=>{const e=await(0,q.FO)(t.tags.join("+"),t.category),a=[];if(e.topic_list){for(const t of e.topic_list.topics)if(t.tags.length>0){let n={};for(let a of t.posters)if(a.description.includes("Original Poster"))for(let t of e.users)t.id===a.user_id&&(n=t);a.push(await ne(t,n))}s(a)}else s(void 0);d(!1)})(),s(void 0),d(!0)}),[t]);const y=(0,o.Z)("/icons/circle-xmark-regular.svg");return a&&a.length>0?n.createElement("div",{className:f},n.createElement("div",{className:p},a.map((function(e,t){return n.createElement(K,{post:e,key:t+e.link,openDialogFunc:g})}))),n.createElement(F(),{isOpen:r,className:v,onRequestClose:u,contentLabel:"Details"},n.createElement("div",null,n.createElement("div",null,n.createElement(te,{details:c.data,rawPost:c.raw})),n.createElement("img",{className:h,src:y,onClick:async()=>{l(!1)}})))):m?n.createElement(R(),{className:_,color:"#0033a1",loading:!0,size:150,"aria-label":"Loading Spinner","data-testid":"loader"}):n.createElement("div",{className:E}," ","Hey there, looks like no integrations match your search criteria. Check out our ",n.createElement("a",{href:"https://developer.sailpoint.com/discuss/t/about-the-sailpoint-developer-community-colab/11230"},"getting started guide"),", and consider being the first to contribute this integration!")}async function ne(e,t){return{id:e.id,name:t.name,excerpt:re(e.excerpt),creatorImage:se(t.avatar_template),tags:e.tags,image:e.image_url,link:(0,V.O$)()+"discuss/t/"+e.slug+"/"+e.id,title:e.title,views:e.views,liked:e.like_count,replies:e.posts_count,solution:e.has_accepted_answer,readTime:parseInt(5)}}function se(e){return e.includes((0,V.gK)())?"https://"+(0,V.gK)()+e.replace("{size}","120"):e.replace("{size}","120")}function re(e){if(e){const t=(e=e.replace(/:[^:]*:/g,"")).match(/Description([\s\S]*?)Legal Agreement/);return t&&(e=t[1].trim()),e.length>150?e.slice(0,100)+"...":e.replace("&hellip;","")}return""}const le="sidebar_AhYL",ce="tagHeader_ZleB",ie="tagContainer_yi8G",oe={tag:"tag_o0Ai",tagSelected:"tagSelected_C1SZ",sidebarButton:"sidebarButton_b7rv"};function me(e){let{filterCallback:t,text:a,id:s,isCategory:r,category:l}=e;const[c,i]=n.useState(!1),[o,m]=n.useState(!1);let d="";d=r&&l===s?oe.tagSelected:r&&l!==s?"":c?oe.tagSelected:"";let u=oe.checkbox;return r&&(u=oe.radio),n.createElement("div",null,n.createElement("input",{onClick:e=>function(e,a){r?l===a?(t({category:"colab"}),i(!1)):(t({category:a}),i(!0)):(t({tag:a}),i((e=>!e)))}(0,s),id:s,type:"checkbox",className:oe.sidebarButton+" "+u,checked:""!=d,onChange:()=>{m(!o)}}),n.createElement("label",{htmlFor:s,className:d+" "+oe.tag,key:a},a))}function de(e){let{filterCallback:t,selectedCategory:a}=e;const[s,r]=n.useState(),[l,c]=n.useState(),[i,o]=n.useState(),[m,d]=n.useState(!0);n.useEffect((()=>{(async()=>{const e=await(0,q.NJ)(),t=await(0,q.e)(),a=[],n=[],s=[];for(const r of t.category_list.categories)if(r.id===(0,V.mw)())for(const e of r.subcategory_list)s.push({name:e.name,slug:e.slug});for(const r of e.extras.tag_groups){if(r.id===(0,V.Sf)())for(const e of r.tags)n.push(e.text);if(17===r.id)for(const e of r.tags)a.push(e.text)}r(n),c(a),o(s)})()}),[]);return s&&i?n.createElement("div",{className:le},n.createElement("div",{className:ce},"Items by Product"),n.createElement("div",{className:ie},s.map((function(e,a){return n.createElement(me,{key:e,text:(s=e,"identitynow"===s?"IdentityNow":"identityiq"===s?"IdentityIQ":"nerm"===s?"NERM":void 0),id:e,filterCallback:t});var s}))),n.createElement("div",{className:ce},"Items by Integration Type"),n.createElement("div",{className:ie},i.map((function(e,s){return n.createElement(me,{category:a,isCategory:!0,key:e.slug,text:e.name,id:e.slug,filterCallback:t})})))):n.createElement("div",null)}function ue(){const[e,t]=n.useState({category:"colab",tags:[]}),{siteConfig:a}=(0,s.Z)();return n.createElement(r.Z,{description:"The SailPoint Developer Community has everything you need to build, extend, and automate scalable identity solutions."},n.createElement("main",null,n.createElement(m,null),n.createElement("div",{className:d},n.createElement("div",{className:u},n.createElement(de,{selectedCategory:e.category,filterCallback:a=>{var n=e.tags.slice();if(a.tag){const e=n.indexOf(a.tag);-1!==e?n.splice(e,1):n.push(a.tag)}a.category?t({category:a.category,tags:n}):t({category:e.category,tags:n})}})),n.createElement("div",{className:g},n.createElement(ae,{filterCallback:e})))))}},35012:(e,t,a)=>{a.d(t,{FO:()=>i,IN:()=>r,KG:()=>s,NJ:()=>m,RS:()=>o,ZS:()=>l,e:()=>d,u3:()=>c});var n=a(23625);async function s(){try{const e=await fetch((0,n.O$)()+"top.json");return await e.json()}catch(e){return[]}}async function r(e,t,a){try{if(e){const e=await fetch((0,n.O$)()+"groups/ambassador_expert/members.json?limit="+t+"&offset="+a);return await e.json()}{const e=await fetch((0,n.O$)()+"groups/ambassador/members.json?limit="+t+"&offset="+a);return await e.json()}}catch(s){return[]}}async function l(e){try{const t=await fetch((0,n.O$)()+"user-cards.json?user_ids="+e.join(","));return await t.json()}catch(t){return[]}}async function c(e){let t="";t=e?(0,n.O$)()+"c/blog/blog-posts/l/latest.json?tags="+e:(0,n.O$)()+"c/blog/blog-posts/l/latest.json";try{const e=await fetch(t);return await e.json()}catch(a){return[]}}async function i(e,t){let a="colab";t&&"colab"!=t&&(a=a+"/"+t);let s="";s=e?(0,n.O$)()+"c/"+a+"/l/latest.json?tags="+e:(0,n.O$)()+"c/"+a+"/l/latest.json";try{const e=await fetch(s);return await e.json()}catch(r){return[]}}async function o(e){try{const t=await fetch((0,n.O$)()+"raw/"+e+".json");return await t.text()}catch(t){return[]}}async function m(){try{const e=await fetch((0,n.O$)()+"tags.json");return await e.json()}catch(e){return[]}}async function d(){try{const e=await fetch((0,n.O$)()+"categories.json");return await e.json()}catch(e){return[]}}},23625:(e,t,a)=>{function n(e){const t=e.split(".");return t[0]+"-dark."+t[1]}function s(){return"https://developer.sailpoint.com/discuss/"}function r(){return"developer.sailpoint.com"}function l(){return"https://developer.sailpoint.com/discuss/".includes("soon")?57:59}function c(){return"https://developer.sailpoint.com/discuss/".includes("soon")?11:20}a.d(t,{O$:()=>s,Sf:()=>c,ZT:()=>n,gK:()=>r,mw:()=>l})}}]);