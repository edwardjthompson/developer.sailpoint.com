"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[4778],{10326:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"native-change-account-deleted",title:"Native Change Account Deleted",pagination_label:"Native Change Account Deleted",sidebar_label:"Native Change Account Deleted",sidebar_class_name:"nativeChangeAccountDeleted",keywords:["account","deleted","available"],description:"Fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources",slug:"/docs/event-triggers/triggers/native-change-account-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},l=void 0,r={unversionedId:"docs/identity-now/event-triggers/available/native-change-account-deleted",id:"docs/identity-now/event-triggers/available/native-change-account-deleted",title:"Native Change Account Deleted",description:"Fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources",source:"@site/products/idn/docs/identity-now/event-triggers/available/native-change-account-deleted.md",sourceDirName:"docs/identity-now/event-triggers/available",slug:"/docs/event-triggers/triggers/native-change-account-deleted",permalink:"/idn/docs/event-triggers/triggers/native-change-account-deleted",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/docs/identity-now/event-triggers/available/native-change-account-deleted.md",tags:[{label:"Event Triggers",permalink:"/idn/tags/event-triggers"},{label:"Available Event Triggers",permalink:"/idn/tags/available-event-triggers"},{label:"Fire and Forget",permalink:"/idn/tags/fire-and-forget"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",frontMatter:{id:"native-change-account-deleted",title:"Native Change Account Deleted",pagination_label:"Native Change Account Deleted",sidebar_label:"Native Change Account Deleted",sidebar_class_name:"nativeChangeAccountDeleted",keywords:["account","deleted","available"],description:"Fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources",slug:"/docs/event-triggers/triggers/native-change-account-deleted",tags:["Event Triggers","Available Event Triggers","Fire and Forget"]},sidebar:"idnDocs",previous:{title:"Native Change Account Created",permalink:"/idn/docs/event-triggers/triggers/native-change-account-created"},next:{title:"Native Change Account Updated",permalink:"/idn/docs/event-triggers/triggers/native-change-account-updated"}},c={},s=[{value:"Event Context",id:"event-context",level:2},{value:"Additional Information and Links",id:"additional-information-and-links",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"event-context"},"Event Context"),(0,i.kt)("admonition",{title:"Important Setup Steps",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You must have at least one source configured for Native Change Detection (NCD) before you will receive events from this trigger.  There are two ways you can configure a source for NCD:"),(0,i.kt)("ol",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ol"},"Invoke the ",(0,i.kt)("a",{parentName:"li",href:"https://developer.sailpoint.com/idn/api/beta/put-native-change-detection-config"},"update native change detection configuration")," for each source you want to receive events for NCD."),(0,i.kt)("li",{parentName:"ol"},"Configure the NCD options on the source in the source configuration UI."))),(0,i.kt)("p",null,"The Native Change Account Deleted trigger fires after Account Aggregations detects that an account is deleted external to Identity Security Platform on sources where:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Native Change Detection is enabled"),(0,i.kt)("li",{parentName:"ol"},"Account Delete operations are monitored"),(0,i.kt)("li",{parentName:"ol"},"at least one attribute that is selected for monitoring changed.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("mermaid",{value:"flowchart TD\n    A[Account deleted on source] --\x3e B\n    B[Account aggregation detects deleted account] --\x3e C\n    C[Trigger Native Change Account Deleted]"})),(0,i.kt)("p",null,"This event trigger can be used to immediately notify interested parties and remediate accounts that are deleted directly on the source.  Some examples of how this trigger can be used are as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Notify the identity's manager and the source owner of the deleted account")),(0,i.kt)("p",null,"This is an example input from this trigger:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "identity": {\n        "manager": {\n            "name": "Martena Heath",\n            "id": "2c91808378eb9fa30178fb8caf90097f",\n            "type": "IDENTITY",\n            "email": "martena.heath@sample_email.com"\n        },\n        "name": "Letty Wilson",\n        "alias": "Letty.Wilson",\n        "id": "2c91808978eb9fab0178fb8ca6d308fb",\n        "type": "IDENTITY",\n        "email": "letty.wilson@sample_email.com"\n    },\n    "singleValueAttributeChanges": [{\n            "newValue": null,\n            "name": "cn",\n            "oldValue": "Letty Wilson"\n        },\n        {\n            "newValue": null,\n            "name": "displayName",\n            "oldValue": "Letty Wilson"\n        },\n        {\n            "newValue": null,\n            "name": "distinguishedName",\n            "oldValue": "CN=Letty Wilson,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n        }\n    ],\n    "entitlementChanges": [{\n        "removed": [{\n                "owner": {\n                    "id": "2c91808978eb9fab0178fb8ca9280919",\n                    "name": "Gregory Brooks",\n                    "type": "IDENTITY"\n                },\n                "name": "ProductionManagement",\n                "id": "2c91808778eb9fa30178fb9482f00c60",\n                "value": "CN=ProductionManagement,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n            },\n            {\n                "owner": null,\n                "name": "Employees",\n                "id": "2c91808378eb9fa30178fb94818e0af8",\n                "value": "CN=Employees,OU=BirthRight,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n            },\n            {\n                "owner": null,\n                "name": "WindowsAdministration",\n                "id": "2c91808378eb9fa30178fb9481c30b02",\n                "value": "CN=WindowsAdministration,OU=Groups,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n            }\n        ],\n        "added": [],\n        "attributeName": "memberOf"\n    }],\n    "eventType": "ACCOUNT_DELETED",\n    "source": {\n        "owner": {\n            "name": "Aaron Andrew",\n            "id": "2c9180867a7c46d0017a7ca099d50531",\n            "type": "IDENTITY",\n            "email": "aaron.andrew@sample_email.com"\n        },\n        "name": "Active Directory",\n        "alias": "Active Directory [source]",\n        "id": "2c91808a78efc63e0178fb8624b248c5",\n        "type": "SOURCE",\n        "governanceGroup": {\n            "id": "fd0d1393-35fb-47d8-9809-0e385b73f25e",\n            "name": "Active Directory Owners",\n            "type": "GOVERNANCE_GROUP"\n        }\n    },\n    "accountChangeTypes": [\n        "ATTRIBUTES_CHANGED",\n        "ENTITLEMENTS_REMOVED"\n    ],\n    "multiValueAttributeChanges": [{\n            "removedValues": [\n                "top",\n                "person",\n                "organizationalPerson",\n                "user"\n            ],\n            "addedValues": [],\n            "name": "objectClass"\n        },\n        {\n            "removedValues": [\n                "Normal User Account",\n                "Password Cannot Expire",\n                "User Account is Disabled"\n            ],\n            "addedValues": [],\n            "name": "accountFlags"\n        }\n    ],\n    "account": {\n        "name": "letty.wilson",\n        "id": "6805a47c09cc4dfca9083f1ce84552ee",\n        "type": "ACCOUNT",\n        "uuid": "{3c096158-9188-46f4-bb13-20ef9daafa7f}",\n        "correlated": true,\n        "nativeIdentity": "CN=Letty Wilson,OU=Austin,OU=Americas,OU=Demo,DC=seri,DC=sailpointdemo,DC=com"\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"identity")," The identity correlated to this account.  If ",(0,i.kt)("inlineCode",{parentName:"li"},"account.correlated")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", then this will be a system generated identity, not a real identity. For uncorrelated accounts, this system generated identity can be used to revoke entitlements on the account, or in any other API request that requires an identity ID."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"singleValueAttributeChanges")," Contains a list of account attributes that have changed.  During an account deleted event, all aggregated account attributes will be listed, and their ",(0,i.kt)("inlineCode",{parentName:"li"},"newValue")," will be null.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it will include ALL account attributes if the config is ",(0,i.kt)("inlineCode",{parentName:"li"},'"allNonEntitlementAttributes": true')),(0,i.kt)("li",{parentName:"ul"},"it will include the enumerated list of attributes contained in ",(0,i.kt)("inlineCode",{parentName:"li"},'"selectedNonEntitlementAttributes": []')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"entitlementChanges")," Contains a list of entitlements that have been aggregated with the account.  the ",(0,i.kt)("inlineCode",{parentName:"li"},"added")," list will always be empty for an account deleted event."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"eventType")," Will always be ",(0,i.kt)("inlineCode",{parentName:"li"},"ACCOUNT_DELETED")," for account deleted events."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," The source where this account originated from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"accountChangeTypes")," A list of change types you can expect to see in the event input.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Possible values are ",(0,i.kt)("inlineCode",{parentName:"li"},"ATTRIBUTES_CHANGED")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"ENTITLEMENTS_REMOVED"),"."),(0,i.kt)("li",{parentName:"ul"},"The above example lists both change types since both attributes and entitlements were removed.  If an event payload only contains attributes removed, then this list will only contain the ",(0,i.kt)("inlineCode",{parentName:"li"},"ATTRIBUTES_CHANGED")," value.  This can be useful when filtering events based on change types, or quickly checking what types of objects changed in the account before continuing to process the input."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"multiValueAttributeChanges")," List of multivalued attributes that were aggregated with the account.  Only ",(0,i.kt)("inlineCode",{parentName:"li"},"removedValues")," will appear for account deleted events.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"it will include ALL account attributes if the config is ",(0,i.kt)("inlineCode",{parentName:"li"},'"allNonEntitlementAttributes": true')),(0,i.kt)("li",{parentName:"ul"},"it will include the enumerated list of attributes contained in ",(0,i.kt)("inlineCode",{parentName:"li"},'"selectedNonEntitlementAttributes": []')))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"account")," The details of the account as it appears in IdentityNow.  This information can be used to query the account API for more information.")),(0,i.kt)("h2",{id:"additional-information-and-links"},"Additional Information and Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trigger Type"),": ",(0,i.kt)("a",{parentName:"li",href:"/idn/docs/event-triggers/trigger-types#fire-and-forget"},"FIRE_AND_FORGET"))))}u.isMDXComponent=!0}}]);