"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[68858],{84876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>g});var a=n(87462),o=(n(67294),n(3905));const i={id:"account-aggregation-completed",title:"Account Aggregation Completed",pagination_label:"Account Aggregation Completed",sidebar_label:"Account Aggregation Completed",sidebar_class_name:"accountAggregationCompleted",keywords:["event","trigger","account","aggregation","completed","available"],description:"Fires after an account aggregation completed, terminated, or failed.",slug:"/docs/event-triggers/triggers/account-aggregation-completed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,c={unversionedId:"docs/identity-now/event-triggers/available/account-aggregation-completed",id:"docs/identity-now/event-triggers/available/account-aggregation-completed",title:"Account Aggregation Completed",description:"Fires after an account aggregation completed, terminated, or failed.",source:"@site/products/idn/docs/identity-now/event-triggers/available/account-aggregation-completed.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/account-aggregation-completed",permalink:"/idn/docs/event-triggers/triggers/account-aggregation-completed",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/account-aggregation-completed.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"account-aggregation-completed",title:"Account Aggregation Completed",pagination_label:"Account Aggregation Completed",sidebar_label:"Account Aggregation Completed",sidebar_class_name:"accountAggregationCompleted",keywords:["event","trigger","account","aggregation","completed","available"],description:"Fires after an account aggregation completed, terminated, or failed.",slug:"/docs/event-triggers/triggers/account-aggregation-completed",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Access Request Submitted",permalink:"/idn/docs/event-triggers/triggers/access-request-submitted"},next:{title:"Campaign Activated",permalink:"/idn/docs/event-triggers/triggers/campaign-activated"}},s={},g=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],l={toc:g};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"event-context"},"Event Context"),(0,o.kt)("p",null,"The platform has introduced an event trigger within the Source Aggregation workflow to provide additional monitoring capabilities. This trigger helps ensure account aggregations are performing as expected and identity data always reflects current source account information for better identity governance. Aggregations connect to a source and collect account information from the source to discover the number of accounts that have been added, changed, or removed. For more information about account aggregation see ",(0,o.kt)("a",{parentName:"p",href:"https://community.sailpoint.com/t5/Technical-White-Papers/Account-Aggregation-Data-Flow/ta-p/79914#toc-hId-1367430234"},"Account Aggregation Data flow")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Flow",src:n(6345).Z,width:"803",height:"379"})),(0,o.kt)("p",null,"After the initial collection of accounts in the source system during aggregation completes, some uses cases for this trigger include the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notify an administrator that IdentityNow was able to successfully connect to the source system and collect source accounts."),(0,o.kt)("li",{parentName:"ul"},"Notify an administrator when the aggregation is terminated manually during the account collection phase."),(0,o.kt)("li",{parentName:"ul"},"Notify an administrator or system (e.g. PagerDuty) that IdentityNow failed to collect accounts during aggregation and indicate required remediation for the source system.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This event trigger does not include entitlement aggregations.")),(0,o.kt)("p",null,"This is an example input from this trigger:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "source": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "status": "Success",\n  "started": "2020-06-29T22:01:50.474Z",\n  "completed": "2020-06-29T22:02:04.090Z",\n  "errors": ["Accounts unable to be aggregated."],\n  "warnings": ["Account Skipped"],\n  "stats": {\n    "scanned": 200,\n    "unchanged": 190,\n    "changed": 6,\n    "added": 4,\n    "removed": 3\n  }\n}\n')),(0,o.kt)("p",null,"The source account activity is summarized in ",(0,o.kt)("inlineCode",{parentName:"p"},"stats"),", as seen in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-JSON"},'"stats": {\n            "scanned": 200,\n            "unchanged": 190,\n            "changed": 6,\n            "added": 4,\n            "removed": 3\n        }\n')),(0,o.kt)("p",null,"In this example, there are 10 changed accounts (",(0,o.kt)("inlineCode",{parentName:"p"},"scanned")," (200) - ",(0,o.kt)("inlineCode",{parentName:"p"},"unchanged")," - (190)). Changed accounts include accounts that are ",(0,o.kt)("inlineCode",{parentName:"p"},"added")," (6) and accounts that are ",(0,o.kt)("inlineCode",{parentName:"p"},"changed")," (4), equaling 10 accounts. Removed accounts may or may not be included in the changed account total depending on the sources. For this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"removed")," (3) may be considered a changed account in some sources and would show a ",(0,o.kt)("inlineCode",{parentName:"p"},"scanned")," count of 203 instead of 200."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This event trigger fires even without changed accounts. The unchanged count will match the scanned accounts in the response.")),(0,o.kt)("p",null,"The status of the aggregation can be one of three possible values:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Success"),": Account collection was successful and aggregation can move to the next step."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Error"),": There is a failure in account collection or an issue connecting to the source. The ",(0,o.kt)("inlineCode",{parentName:"li"},"errors")," vary by source."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Termination"),": The aggregation was terminated during the account collection phase. Aggregation can be terminated when the account deletion threshold is exceeded. For example, an account delete threshold of 10% is set by default for the source, and if the number of ",(0,o.kt)("inlineCode",{parentName:"li"},"removed")," accounts for the above example is 21 (more than 10% of ",(0,o.kt)("inlineCode",{parentName:"li"},"scanned")," accounts (200)), the aggregation is cancelled.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Account_Delete_Threshold",src:n(13215).Z,width:"1675",height:"607"})),(0,o.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,o.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}d.isMDXComponent=!0},13215:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aggregation-delete-threshold-bd024f837773f940730b182e22937287.png"},6345:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/aggregation-diagram-479d926f29e1541ee2299b81bb7987b3.png"}}]);