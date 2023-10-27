"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[53523],{77767:(t,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=i(87462),s=(i(67294),i(3905));const o={id:"connectivity-customizers-getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Get started with connectivity customizers.",slug:"/docs/saas-connectivity/customizers/getting-started",tags:["Connectivity"]},r="Get Started",a={unversionedId:"docs/identity-now/saas-connectivity/connector-customizers/connectivity-customizers-getting-started",id:"docs/identity-now/saas-connectivity/connector-customizers/connectivity-customizers-getting-started",title:"Getting Started",description:"Get started with connectivity customizers.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-customizers/getting-started.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-customizers",slug:"/docs/saas-connectivity/customizers/getting-started",permalink:"/idn/docs/saas-connectivity/customizers/getting-started",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-customizers/getting-started.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:4,frontMatter:{id:"connectivity-customizers-getting-started",title:"Getting Started",pagination_label:"Getting Started",sidebar_label:"Getting Started",sidebar_position:4,sidebar_class_name:"saasConnectivity",keywords:["connectivity","connectors","customizers"],description:"Get started with connectivity customizers.",slug:"/docs/saas-connectivity/customizers/getting-started",tags:["Connectivity"]},sidebar:"idnDocs",previous:{title:"Connectivity Customizers",permalink:"/idn/docs/saas-connectivity/customizers"},next:{title:"Build and Upload",permalink:"/idn/docs/saas-connectivity/customizers/upload"}},c={},d=[{value:"Required software",id:"required-software",level:2},{value:"Create your first project",id:"create-your-first-project",level:2},{value:"Source files",id:"source-files",level:3}],l={toc:d};function u(t){let{components:e,...i}=t;return(0,s.kt)("wrapper",(0,n.Z)({},l,i,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"get-started"},"Get Started"),(0,s.kt)("h2",{id:"required-software"},"Required software"),(0,s.kt)("p",null,"You need to have the same software installed to create a customizer that you need to create a SaaS Connector. You can find the lists of Prerequisites ",(0,s.kt)("a",{parentName:"p",href:"../prerequisites"},"here"),"."),(0,s.kt)("h2",{id:"create-your-first-project"},"Create your first project"),(0,s.kt)("p",null,"To create an empty connector customizer project, run this command:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"sail conn customizers init my-customizer-project\n")),(0,s.kt)("p",null,"The CLI init command creates a new folder with your project name in the location where you run the command."),(0,s.kt)("p",null,"Change the directory to the project folder and run `",(0,s.kt)("inlineCode",{parentName:"p"},"npm install")," to install the dependencies."),(0,s.kt)("h3",{id:"source-files"},"Source files"),(0,s.kt)("p",null,"The earlier command creates this initial project source directory:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"my-customizer-project\n\u251c\u2500\u2500 .gitignore\n\u251c\u2500\u2500 package.json\n\u251c\u2500\u2500 src/\n|   \u251c\u2500\u2500 index.ts\n|   \u2514\u2500\u2500 index-spec.ts\n\u251c\u2500\u2500 tsconfig.json\n")),(0,s.kt)("p",null,'This directory contains one source code file. Though you can expand the customizer to include more than one file, the "index.ts" file contains all the logic for the customizer.'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"index.ts:")," Use this file to register all the available customizer commands the connector supports.")))}u.isMDXComponent=!0}}]);