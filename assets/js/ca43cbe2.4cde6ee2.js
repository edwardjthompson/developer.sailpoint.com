"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[58329],{27529:(t,e,c)=>{c.r(e),c.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=c(87462),o=(c(67294),c(3905));const a={id:"account-create-customizer",title:"Account Create",pagination_label:"Account Create",sidebar_label:"Account Create",keywords:["connectivity","connectors","Account Create"],description:"Intercept the account create command.",slug:"/docs/saas-connectivity/connector-customizers/commands/account-create",tags:["Connectivity","Connector Command"]},r=void 0,i={unversionedId:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-create-customizer",id:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-create-customizer",title:"Account Create",description:"Intercept the account create command.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-create.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-customizers/customizer-commands",slug:"/docs/saas-connectivity/connector-customizers/commands/account-create",permalink:"/idn/docs/saas-connectivity/connector-customizers/commands/account-create",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-customizers/customizer-commands/account-create.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"account-create-customizer",title:"Account Create",pagination_label:"Account Create",sidebar_label:"Account Create",keywords:["connectivity","connectors","Account Create"],description:"Intercept the account create command.",slug:"/docs/saas-connectivity/connector-customizers/commands/account-create",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Customizer Commands",permalink:"/idn/docs/saas-connectivity/connector-customizers/commands"},next:{title:"Account Delete",permalink:"/idn/docs/saas-connectivity/connector-customizers/commands/account-delete"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Before account-create command",id:"before-account-create-command",level:3},{value:"After account-create command",id:"after-account-create-command",level:3}],m={toc:u};function d(t){let{components:e,...c}=t;return(0,o.kt)("wrapper",(0,n.Z)({},m,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Use these commands to intercept the ",(0,o.kt)("a",{parentName:"p",href:"../../commands/account-create"},"account-create")," command."),(0,o.kt)("h3",{id:"before-account-create-command"},"Before account-create command"),(0,o.kt)("p",null,"Use this logic to implement the command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    .beforeStdAccountCreate(async (context: Context, input: StdAccountCreateInput) => {\n        logger.info(`Running before account, for account ${input.identity}`)\n        return input\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," object can be mutated and returned, but the same data type must still be returned."),(0,o.kt)("h3",{id:"after-account-create-command"},"After account-create command"),(0,o.kt)("p",null,"Use this logic to implement the command: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    .afterStdAccountCreate(async (context: Context, output: StdAccountCreateOutput) => {\n        logger.info(`Running after account create for account ${output.identity}`)\n        return output\n    })\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"output")," object can be mutated and returned, but the same data type must still be returned."))}d.isMDXComponent=!0}}]);