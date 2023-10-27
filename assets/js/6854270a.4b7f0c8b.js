"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[72593],{86343:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const s={id:"last-index-of",title:"Last Index Of",pagination_label:"Last Index Of",sidebar_label:"Last Index Of",sidebar_class_name:"lastIndexOf",keywords:["transforms","operations","last","index","of"],description:"Convert a string into an ISO 3166 country code value.",slug:"/docs/transforms/operations/last-index-of",tags:["Transforms","Transform Operations"]},i=void 0,o={unversionedId:"docs/identity-now/transforms/operations/last-index-of",id:"docs/identity-now/transforms/operations/last-index-of",title:"Last Index Of",description:"Convert a string into an ISO 3166 country code value.",source:"@site/products/idn/docs/identity-now/transforms/operations/last-index-of.md",sourceDirName:"docs/identity-now/transforms/operations",slug:"/docs/transforms/operations/last-index-of",permalink:"/idn/docs/transforms/operations/last-index-of",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/transforms/operations/last-index-of.md",tags:[{label:"Transforms",permalink:"/idn/tags/transforms"},{label:"Transform Operations",permalink:"/idn/tags/transform-operations"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"last-index-of",title:"Last Index Of",pagination_label:"Last Index Of",sidebar_label:"Last Index Of",sidebar_class_name:"lastIndexOf",keywords:["transforms","operations","last","index","of"],description:"Convert a string into an ISO 3166 country code value.",slug:"/docs/transforms/operations/last-index-of",tags:["Transforms","Transform Operations"]},sidebar:"idnDocs",previous:{title:"ISO3166",permalink:"/idn/docs/transforms/operations/iso-3166"},next:{title:"Left Pad",permalink:"/idn/docs/transforms/operations/left-pad"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Transform Structure",id:"transform-structure",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Examples",id:"examples",level:2}],p={toc:d};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Use the last index of transform to get the last location of a specific substring within an incoming value. This transform is often useful in conjunction with the substring transform for getting parts of strings that can be dynamic in length or composition. If the substring you are searching for does not occur within the data, the transform returns -1."),(0,r.kt)("admonition",{title:"Other Considerations",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the substring you are searching for occurs multiple times within the incoming data, the transform returns the location of the last occurrence. If you want the first occurrence of a substring, use the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/index-of"},"Index Of")," transform. If you want an occurrence that is neither first nor last, use the ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms/operations/substring"},"Substring")," transform.")),(0,r.kt)("h2",{id:"transform-structure"},"Transform Structure"),(0,r.kt)("p",null,"The lastIndexOf transform requires only the substring you want to search for, along with the transform's ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," attributes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "substring": "admin_"\n  },\n  "type": "lastIndexOf",\n  "name": "Last Index Of Transform"\n}\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Required Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"type")," - This must always be set to ",(0,r.kt)("inlineCode",{parentName:"li"},"lastIndexOf"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"name")," - This is a required attribute for all transforms. It represents the name of the transform as it will appear in the UI's dropdown menus."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"substring")," - This is the string whose beginning location within the incoming data you want to find."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Optional Attributes")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"requiresPeriodicRefresh")," - This ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"false")," value indicates whether the transform logic should be reevaluated every evening as part of the identity refresh process."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"input")," - This is an optional attribute that can explicitly define the input data passed into the transform logic. If no input is provided, the transform takes its input from the source and attribute combination configured with the UI.")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,'The "admin',"_",'" substring only occurs once at the very beginning of the input string, so this transform returns 0.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "admin_jsmith"\nOutput: "0"\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "substring": "admin_"\n  },\n  "type": "lastIndexOf",\n  "name": "Last Index Of Transform"\n}\n')),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\xa0"),(0,r.kt)("p",null,'While the letter "b" occurs multiple times throughout the input string, the last time it occurs is within index location 7, so this transform returns that value.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Transform Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'Input: "abcabcabc"\nOutput: "7"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "attributes": {\n    "substring": "b"\n  },\n  "type": "lastIndexOf",\n  "name": "Last Index Of Transform"\n}\n')))}u.isMDXComponent=!0}}]);