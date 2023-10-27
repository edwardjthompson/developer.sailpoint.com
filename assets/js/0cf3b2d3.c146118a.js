"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[55650],{24617:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var o=n(87462),a=(n(67294),n(3905));const c={id:"account-read",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","account read"],description:"Aggregate a single account from the source into IdentityNow.",slug:"/docs/saas-connectivity/commands/account-read",tags:["Connectivity","Connector Command"]},i=void 0,r={unversionedId:"docs/identity-now/saas-connectivity/connector-commands/account-read",id:"docs/identity-now/saas-connectivity/connector-commands/account-read",title:"Account Read",description:"Aggregate a single account from the source into IdentityNow.",source:"@site/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-read.md",sourceDirName:"docs/identity-now/saas-connectivity/connector-commands",slug:"/docs/saas-connectivity/commands/account-read",permalink:"/idn/docs/saas-connectivity/commands/account-read",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/saas-connectivity/connector-commands/account-read.md",tags:[{label:"Connectivity",permalink:"/idn/tags/connectivity"},{label:"Connector Command",permalink:"/idn/tags/connector-command"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"account-read",title:"Account Read",pagination_label:"Account Read",sidebar_label:"Account Read",keywords:["connectivity","connectors","account read"],description:"Aggregate a single account from the source into IdentityNow.",slug:"/docs/saas-connectivity/commands/account-read",tags:["Connectivity","Connector Command"]},sidebar:"idnDocs",previous:{title:"Account List",permalink:"/idn/docs/saas-connectivity/commands/account-list"},next:{title:"Account Unlock",permalink:"/idn/docs/saas-connectivity/commands/account-unlock"}},d={},s=[{value:"Example StdAccountReadInput",id:"example-stdaccountreadinput",level:3},{value:"Example StdAccountReadOutput",id:"example-stdaccountreadoutput",level:3},{value:"Description",id:"description",level:2},{value:"Implementation",id:"implementation",level:2}],l={toc:s};function u(t){let{components:e,...c}=t;return(0,a.kt)("wrapper",(0,o.Z)({},l,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Input/Output"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Data Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdAccountReadInput")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Output"),(0,a.kt)("td",{parentName:"tr",align:"center"},"StdAccountReadOutput")))),(0,a.kt)("h3",{id:"example-stdaccountreadinput"},"Example StdAccountReadInput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'"identity": "john.doe",\n"key": {\n    "simple": {\n        "id": "john.doe"\n    }\n}\n')),(0,a.kt)("h3",{id:"example-stdaccountreadoutput"},"Example StdAccountReadOutput"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    "key": {\n        "simple": {\n            "id": "john.doe"\n        }\n    },\n    "disabled": false,\n    "locked": false,\n    "attributes": {\n        "id": "john.doe",\n        "displayName": "John Doe",\n        "email": "example@sailpoint.com",\n        "entitlements": [\n            "administrator",\n            "sailpoint"\n        ]\n    }\n}\n')),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The account read command aggregates a single account from the target source into IdentityNow. IDN can call this command during a \u201cone-off\u201d account refresh, which you can trigger by aggregating an individual account in IDN."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Account Read",src:n(84922).Z,width:"2558",height:"1308"})),(0,a.kt)("h2",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"Implementation of account read is similar to account list's implementation, except the code only needs to get one account, not all the accounts. The following snippet is from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/airtable.ts"},"airtable.ts"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"async getAccount(identity: SimpleKeyType | CompoundKeyType): Promise<AirtableAccount> {\n    const id = <SimpleKeyType>identity\n    let found = false\n\n    return this.airTableBase('Users').select({\n        view: 'Grid view',\n        filterByFormula: `({Id} = '${id.simple.id}')`\n    }).firstPage().then(records => {\n        const recordArray: Array<AirtableAccount> = []\n        for (const record of records) {\n            found = true\n            recordArray.push(AirtableAccount.createWithRecords(record))\n        }\n        return recordArray[0]\n    }).catch(err => {\n        throw new ConnectorError('error while getting account: ' + err)\n    }).finally(() => {\n        // if the account is not found, throw the special NotFound error type\n        if (!found) {\n            throw new ConnectorError(\"Account not found\", ConnectorErrorType.NotFound)\n        }\n    })\n}\n")),(0,a.kt)("p",null,"One special case of this command is the ",(0,a.kt)("inlineCode",{parentName:"p"},"NotFound")," type. On line 20, if an account is not found, the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectorError")," is thrown with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ConnectorErrorType.NotFound")," type. This tells IDN the account does not exist, and IDN then triggers the account create logic to generate the account."),(0,a.kt)("p",null,"The following code snippet from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/sailpoint-oss/airtable-example-connector/blob/main/src/index.ts"},"index.ts")," shows how to register the account read command on the connector object:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Connector must be exported as module property named connector\nexport const connector = async () => {\n\n    // Get connector source config\n    const config = await readConfig()\n\n    // Use the vendor SDK, or implement own client as necessary, to initialize a client\n    const airtable = new AirtableClient(config)\n\n    return createConnector()\n        .stdAccountRead(async (context: Context, input: StdAccountReadInput, res: Response<StdAccountReadOutput>) => {\n            const account = await airtable.getAccount(input.key)\n\n            res.send(account.toStdAccountReadOutput())\n        })\n...\n")))}u.isMDXComponent=!0},84922:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/account_read_idn-4fc336ce24816010e43fdcd3858dd960.png"}}]);