"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[47463],{90867:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=s(87462),a=(s(67294),s(3905));const i={id:"access-request-preapproval",title:"Access Request Submitted",pagination_label:"Access Request Submitted",sidebar_label:"Access Request Submitted",sidebar_class_name:"accessRequestSubmitted",keywords:["event","trigger","access","request","submitted","preapproval","available"],description:"Fires after an access request is submitted.",slug:"/docs/event-triggers/triggers/access-request-submitted",tags:["Event Triggers","Available Event Triggers","Request Response"]},n=void 0,o={unversionedId:"docs/identity-now/event-triggers/available/access-request-preapproval",id:"docs/identity-now/event-triggers/available/access-request-preapproval",title:"Access Request Submitted",description:"Fires after an access request is submitted.",source:"@site/products/idn/docs/identity-now/event-triggers/available/access-request-submitted.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/access-request-submitted",permalink:"/idn/docs/event-triggers/triggers/access-request-submitted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/access-request-submitted.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Request Response",permalink:"/idn/tags/request-response"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"access-request-preapproval",title:"Access Request Submitted",pagination_label:"Access Request Submitted",sidebar_label:"Access Request Submitted",sidebar_class_name:"accessRequestSubmitted",keywords:["event","trigger","access","request","submitted","preapproval","available"],description:"Fires after an access request is submitted.",slug:"/docs/event-triggers/triggers/access-request-submitted",tags:["Event Triggers","Available Event Triggers","Request Response"]},sidebar:"idnDocs",previous:{title:"Access Request Dynamic Approval",permalink:"/idn/docs/event-triggers/triggers/access-request-dynamic-approval"},next:{title:"Account Aggregation Completed",permalink:"/idn/docs/event-triggers/triggers/account-aggregation-completed"}},c={},l=[{value:"Event Context",id:"event-context",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"event-context"},"Event Context"),(0,a.kt)("p",null,"The platform now includes event triggers within the access request approval workflow. The 'Access Request Submitted' event trigger provides more proactive governance, ensures users can quickly obtain needed access, and helps with more preventative measures towards unintended access."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Flow",src:s(97543).Z,width:"860",height:"263"})),(0,a.kt)("p",null,"When an access request is submitted, some uses cases for this trigger include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Provide the approver with additional context about the access request, like any Separation of Duties (SOD) policy violations, for example."),(0,a.kt)("li",{parentName:"ul"},"Notify the approver through a different medium, such as Slack or Outlook Actionable Messages."),(0,a.kt)("li",{parentName:"ul"},"Send a Terms of Agreement form of the requested Application to be signed by the access requester."),(0,a.kt)("li",{parentName:"ul"},"On average, you can expect about 1 access request for every 4 identities within your org per day. On average you can expect about 1 to 2 access requests within a 10 second period.")),(0,a.kt)("p",null,"Additional use cases include the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Send a Slack notification to the approver or an approval channel and approve the request within Slack."),(0,a.kt)("li",{parentName:"ul"},"Create an Outlook Actionable Message."),(0,a.kt)("li",{parentName:"ul"},"Create a Google Doc for the requester to fill out and submit.")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This is a ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUEST_RESPONSE")," trigger type. For more information about how to respond to a ",(0,a.kt)("inlineCode",{parentName:"p"},"REQUEST_RESPONSE")," type trigger, see ",(0,a.kt)("a",{parentName:"p",href:"/idn/docs/event-triggers/responding-request-response-trigger"},"responding to a request response type trigger"),". This trigger intercepts newly submitted access requests and allows the subscribing service to perform a preliminary approval/denial before the access request moves to the next approver in the chain."),(0,a.kt)("p",null,"The subscribing service will receive the following input from the trigger service."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accessRequestId": "2c91808b6ef1d43e016efba0ce470904",\n  "requestedFor": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1313",\n    "name": "William Wilson"\n  },\n  "requestedItems": [\n    {\n      "id": "2c91808b6ef1d43e016efba0ce470904",\n      "name": "Engineering Access",\n      "description": "Access to engineering database",\n      "type": "ACCESS_PROFILE",\n      "operation": "Add",\n      "comment": "William needs this access to do his job."\n    }\n  ],\n  "requestedBy": {\n    "type": "IDENTITY",\n    "id": "2c91808568c529c60168cca6f90c1314",\n    "name": "Rob Robertson"\n  }\n}\n')),(0,a.kt)("p",null,"The subscribing service can use this information to make a decision about whether to approve or deny the request."),(0,a.kt)("p",null,"To approve an access request, the subscribing service responds to the event trigger with the following payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "approved": true,\n  "comment": "This access has passed preliminary approval.",\n  "approver": "AcmeCorpExternalIntegration"\n}\n')),(0,a.kt)("p",null,"To deny an access request, the subscribing service responds to the event trigger with the following payload:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "approved": false,\n  "comment": "This access should be denied, because this will cause an SOD violation.",\n  "approver": "AcmeCorpExternalIntegration"\n}\n')),(0,a.kt)("p",null,"This event trigger interrupts the normal workflow for access requests. Access requests can only proceed if the subscribing service responds within the alotted time by approving the request. If the subscribing service is non-responsive or it is responding with an incorrect payload, access requests will fail after the ",(0,a.kt)("strong",{parentName:"p"},"Separation of Duties")," check. If you see numerous access requests failing at this stage, verify that your subscribing service itself is operating correctly."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"AR failed",src:s(89426).Z,width:"440",height:"450"})),(0,a.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,a.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#request-response"},"REQUEST_RESPONSE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/responding-request-response-trigger"},"How to respond to a REQUEST_RESPONSE trigger"))))}d.isMDXComponent=!0},89426:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/access-request-preapproval-failure-892d2c05f3d6d5f085b65347414bbc6e.png"},97543:(e,t,s)=>{s.d(t,{Z:()=>r});const r=s.p+"assets/images/access-request-preapproval-path-7652533b5465742c950bd8a05679aad3.png"}}]);