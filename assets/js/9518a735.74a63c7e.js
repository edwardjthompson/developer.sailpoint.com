"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[76765],{43356:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=a(87462),i=(a(67294),a(3905));const s={id:"saved-search-completed",title:"Scheduled Search",pagination_label:"Scheduled Search",sidebar_label:"Scheduled Search",sidebar_class_name:"scheduledSearch",keywords:["event","trigger","saved","scheduled","search","complete","available"],description:"Fires after a scheduled search completes.",slug:"/docs/event-triggers/triggers/scheduled-search",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},r=void 0,d={unversionedId:"docs/identity-now/event-triggers/available/saved-search-completed",id:"docs/identity-now/event-triggers/available/saved-search-completed",title:"Scheduled Search",description:"Fires after a scheduled search completes.",source:"@site/products/idn/docs/identity-now/event-triggers/available/scheduled-search.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/scheduled-search",permalink:"/idn/docs/event-triggers/triggers/scheduled-search",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/scheduled-search.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"saved-search-completed",title:"Scheduled Search",pagination_label:"Scheduled Search",sidebar_label:"Scheduled Search",sidebar_class_name:"scheduledSearch",keywords:["event","trigger","saved","scheduled","search","complete","available"],description:"Fires after a scheduled search completes.",slug:"/docs/event-triggers/triggers/scheduled-search",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Provisioning Completed",permalink:"/idn/docs/event-triggers/triggers/provisioning-completed"},next:{title:"Source Created",permalink:"/idn/docs/event-triggers/triggers/source-created"}},o={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],c={toc:l};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-context"},"Event Context"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Flow",src:a(39754).Z,width:"1144",height:"211"})),(0,i.kt)("p",null,'Users can subscribe to saved searches and receive an email of a report generated from the saved search. For example, a user can save a search query called "Identities with upcoming end dates" and create a subscription to receive a daily report showing identities with an end date within 10 days from the current date. This event trigger can also notify an external HTTP application that a report generated from a saved search subscription is available to be processed.'),(0,i.kt)("p",null,"'Scheduled search' events occur based on the schedules set for saved search subscriptions. For example, if you have a scheduled saved search for Monday, Tuesday, Wednesday, Thursday, Friday at 6:00 GMT, your HTTP endpoint will also receive a notification at those times. This can be set using the ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule")," object in the ",(0,i.kt)("a",{parentName:"p",href:"/idn/api/v3/create-scheduled-search"},"create scheduled search endpoint"),"."),(0,i.kt)("p",null,"To receive this event when a saved search query does not have any results, set ",(0,i.kt)("inlineCode",{parentName:"p"},"emailEmptyResults")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"TRUE"),". You can also set the expiration date in the ",(0,i.kt)("inlineCode",{parentName:"p"},"expiration")," field within the ",(0,i.kt)("inlineCode",{parentName:"p"},"schedule")," object. Your HTTP endpoint will stop receiving these events when the scheduled search expires."),(0,i.kt)("p",null,"Some uses cases for this trigger include the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Perform quality control, such as continuously checking for Separation of Duties (SOD) violations."),(0,i.kt)("li",{parentName:"ul"},"Respond to upcoming joiner-mover-leaver scenarios, such as deprovisioning access before an employee's separation date.")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fileName": "Modified.zip",\n  "ownerEmail": "test@sailpoint.com",\n  "ownerName": "Cloud Support",\n  "query": "modified:[now-7y/d TO now]",\n  "searchName": "Modified Activity",\n  "searchResults": {\n    "Account": {\n      "count": 3,\n      "noun": "accounts",\n      "preview": [[]]\n    },\n    "Entitlement": {\n      "count": 2,\n      "noun": "entitlements",\n      "preview": [[]]\n    },\n    "Identity": {\n      "count": 2,\n      "noun": "identities",\n      "preview": [[]]\n    }\n  },\n  "signedS3Url": "https://sptcbu-org-data-useast1.s3.amazonaws.com/arsenal-john/reports/Events%20Export.2020-05-06%2018%2759%20GMT.3e580592-86e4-4953-8aea-49e6ef20a086.zip?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20200506T185919Z&X-Amz-SignedHeaders=host&X-Amz-Expires=899&X-Amz-Credential=AKIAV5E54XOGTS4Q4L7A%2F20200506%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2e732bb97a12a1fd8a215613e3c31fcdae8ba1fb6a25916843ab5b51d2ddefbc"\n}\n')),(0,i.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}p.isMDXComponent=!0},39754:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/saved-search-path-87e843e3bbdbcffe9c7c6f78258e6afa.png"}}]);