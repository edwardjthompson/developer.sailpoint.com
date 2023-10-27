"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64129],{25245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={id:"lower",title:"Lower",pagination_label:"Lower",sidebar_label:"Lower",sidebar_class_name:"lower",keywords:["transforms","operations","lower"],description:"Convert an input string into all lowercase letters.",slug:"/docs/transforms/operations/lower",tags:["Transforms","Transform Operations"]},o=void 0,i={unversionedId:"docs/identity-now/transforms/operations/lower",id:"docs/identity-now/transforms/operations/lower",title:"Lower",description:"Convert an input string into all lowercase letters.",source:"@site/products/idn/docs/identity-now/transforms/operations/lower.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/lower",permalink:"/idn/docs/transforms/operations/lower",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/lower.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"lower",title:"Lower",pagination_label:"Lower",sidebar_label:"Lower",sidebar_class_name:"lower",keywords:["transforms","operations","lower"],description:"Convert an input string into all lowercase letters.",slug:"/docs/transforms/operations/lower",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"Lookup",permalink:"/idn/docs/transforms/operations/lookup"},next:{title:"Name Normalizer",permalink:"/idn/docs/transforms/operations/name-normalizer"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],u={toc:p};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Use the lower transform to convert an input string into all lowercase letters."),(0,a.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,a.kt)("p",null,"The lower transform only requires the transform's ",(0,a.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "lower",\n  "name": "Lower Transform"\n}\n')),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Required Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,a.kt)("inlineCode",{parentName:"li"},"lower"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Optional Attributes"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Lowercase Transform Input Screenshot",src:r(3589).Z,width:"1832",height:"318"})),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,'This transform takes in the input "ACTIVE" and produces "active" as the output.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input:"ACTIVE"\nOutput:"active"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "ACTIVE"\n      },\n      "type": "static"\n    }\n  },\n  "type": "lower",\n  "name": "Lower Transform"\n}\n')),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\xa0"),(0,a.kt)("p",null,'This transform takes in the input "All-Access" and produces "all-access" as the output.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'Input:"All-Access"\nOutput:"all-access"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "input": {\n      "attributes": {\n        "value": "All-Access"\n      },\n      "type": "static"\n    }\n  },\n  "type": "lower",\n  "name": "Lower Transform"\n}\n')))}m.isMDXComponent=!0},3589:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/lower_transform_input-c1ff9f3ff048e2971e83655760cafef2.png"}}]);