"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[31241],{97644:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=s(87462),n=(s(67294),s(3905));const i={id:"api-calls",title:"API Calls",pagination_label:"API Calls",sidebar_label:"API Calls",sidebar_position:1,sidebar_class_name:"apiCalls",keywords:["connectivity","connectors","api calls"],description:"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task.",slug:"/docs/saas-connectivity/in-depth/api-calls",tags:["Connectivity"]},o=void 0,l={unversionedId:"docs/identity-now/saas-connectivity/in-depth/api-calls",id:"docs/identity-now/saas-connectivity/in-depth/api-calls",title:"API Calls",description:"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task.",source:"@site/products/idn/docs/identity-now/saas-connectivity/in-depth/api-calls.md",sourceDirName:"docs/identity-now/saas-connectivity/in-depth",slug:"/docs/saas-connectivity/in-depth/api-calls",permalink:"/idn/docs/saas-connectivity/in-depth/api-calls",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/in-depth/api-calls.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:1,frontMatter:{id:"api-calls",title:"API Calls",pagination_label:"API Calls",sidebar_label:"API Calls",sidebar_position:1,sidebar_class_name:"apiCalls",keywords:["connectivity","connectors","api calls"],description:"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task.",slug:"/docs/saas-connectivity/in-depth/api-calls",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Full Example",permalink:"/idn/docs/saas-connectivity/customizers/example"},next:{title:"Connector Timeouts",permalink:"/idn/docs/saas-connectivity/in-depth/connector-timeouts"}},r={},c=[],u={toc:c};function d(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Calling API endpoints sequentially for hundreds or thousands of accounts is slow. If several API calls are required to build a user\u2019s account, then it is recommended that you use asynchronous functions to speed up this task. Asynchronous functions allow your program to execute several commands at once, which is especially important for high latency commands like calling API endpoints - each call to an endpoint can take anywhere from several milliseconds to several seconds. The following code snippet from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/discourse-connector-2/blob/main/Discourse/src/discourse-client.ts"},"discourse-client.ts")," shows how you can use asynchronous functions to quickly build a list of account profiles for your source\u2019s users:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"async getUsers(): Promise<User[]> {\n        // First, get the members of the group.  This will call a single endpoint to get all the users of a group.\n        const groupMembers = await this.getGroupMembers(this.primaryGroup!)\n\n        // To get the full user representation, we need to invoke a single API call for each user.\n        // Because there can be hundreds, or even thousands of users, this would take several minutes\n        // if run sequentially.  We use Promise.all to execute a list of API calls in parallel.\n        let users = await Promise.all(groupMembers.map(member => this.getUser(member.id!.toString())))\n\n        // Emails aren't included in the above call.  Once again, we need to execute several API calls\n        // in parallel.\n        const emails = await Promise.all(groupMembers.map(member => this.getUserEmailAddress(member.username!)))\n\n        // Finally, we need to update our user accounts with the emails we obtained.  This code\n        // doesn't make network calls, so it doesn't need to use Promise.all.\n        for (let i = 0; i < groupMembers.length; i++) {\n            users[i].email = emails[i]\n        }\n\n        return users\n    }\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line 3 gets all the user IDs for a default group to which all the users you want to track are assigned.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line 6 gets more attributes for each user present in the group. There can be hundreds of users who need their attributes fetched, so use Promise.all to build and execute the API calls asynchronously, speeding up the operation\u2019s completion time.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line 9 uses the same strategy as Line 6, except it calls another endpoint that will get each user\u2019s email address, which isn\u2019t present in the previous API call. Use Promise.all again to speed up the operation.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Line 12-14 combines the data you gathered from the preceding calls to complete your user accounts."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 As a general guideline, any time you must execute several API calls that all call the same endpoint, it is recommended that you use Promise.all to speed up the operation.")))}d.isMDXComponent=!0}}]);