"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[6507],{57207:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>r,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=o(87462),i=(o(67294),o(3905));const s={id:"connectivity-customizers",title:"Connectivity Customizers",pagination_label:"Connectivity Customizers",sidebar_label:"Customizers",sidebar_position:7.1,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Connectivity customizers can customize out of the box SaaS connectors.",slug:"/docs/saas-connectivity/customizers",tags:["Connectivity"]},c="Overview",a={unversionedId:"docs/identity-now/saas-connectivity/connector-customizers/connectivity-customizers",id:"docs/identity-now/saas-connectivity/connector-customizers/connectivity-customizers",title:"Connectivity Customizers",description:"Connectivity customizers can customize out of the box SaaS connectors.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-customizers/index.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-customizers",slug:"/docs/saas-connectivity/customizers",permalink:"/idn/docs/saas-connectivity/customizers",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-customizers/index.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:7.1,frontMatter:{id:"connectivity-customizers",title:"Connectivity Customizers",pagination_label:"Connectivity Customizers",sidebar_label:"Customizers",sidebar_position:7.1,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Connectivity customizers can customize out of the box SaaS connectors.",slug:"/docs/saas-connectivity/customizers",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Test Connection",permalink:"/idn/docs/saas-connectivity/commands/test-connection"},next:{title:"Getting Started",permalink:"/idn/docs/saas-connectivity/customizers/getting-started"}},r={},d=[{value:"How do they work?",id:"how-do-they-work",level:2}],u={toc:d};function m(t){let{components:e,...o}=t;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"SaaS Connectivity Customizers are cloud-based connector customizers that make customizing out of the box SaaS connectors possible. The customizers allow you to customize the out of the box connectors in a similar way to how you can use rules to customize VA (virtual appliance) based connectors. By using a customizer, you can change a connector's input before the connector ingests the data, or you can change the connector's output before to the output is sent to IdentityNow."),(0,i.kt)("h2",{id:"how-do-they-work"},"How do they work?"),(0,i.kt)("p",null,"SaaS Connectivity Customizers work by sitting in between IdentityNow and the connector. They intercept calls from IdentityNow to the connector and calls from the connector to IdentityNow. When the customizer intercepts a call, it can call custom code to mutate the data in any way necessary to change the connector behavior. "),(0,i.kt)("p",null,"This chart shows an example of this interception process - the ",(0,i.kt)("inlineCode",{parentName:"p"},"stdAccountRead")," command is implemented with the customizer in place: "),(0,i.kt)("div",{align:"center"},(0,i.kt)("mermaid",{value:"sequenceDiagram\n    autonumber\n    participant IDN as IdentityNow\n    participant CUS as Customizer\n    participant CON as SaaS Connector\n\n    IDN->>CUS: StdAccountRead Request\n    CUS->>CON: Mutated StdAccountRead Request\n    CON->>CUS: StdAccountRead Response\n    CUS->>IDN: Mutated StdAccountRead Response\n"})))}m.isMDXComponent=!0}}]);