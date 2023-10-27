"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[64021],{10531:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},s="Transforms",o={unversionedId:"tools/cli/cli-transforms",id:"tools/cli/cli-transforms",title:"CLI Transforms",description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",source:"@site/products/idn/tools/cli/transforms.md",sourceDirName:"tools/cli",slug:"/tools/cli/transforms",permalink:"/idn/tools/cli/transforms",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer-community-site/edit/main/products/idn/tools/cli/transforms.md",tags:[{label:"CLI",permalink:"/idn/tags/cli"}],version:"current",lastUpdatedBy:"GitHub Action Bot",lastUpdatedAt:1698428482,formattedLastUpdatedAt:"Oct 27, 2023",sidebarPosition:6,frontMatter:{id:"cli-transforms",title:"CLI Transforms",pagination_label:"CLI Transforms",sidebar_label:"Transforms",sidebar_position:6,sidebar_class_name:"cli-transforms",keywords:["cli","cli transforms","transforms"],description:"Learn about the CLI commands you can use to create, manage, and test transforms in this guide.",slug:"/tools/cli/transforms",tags:["CLI"]},sidebar:"sdkSidebar",previous:{title:"CLI-SPConfig",permalink:"/idn/tools/cli/spconfig"},next:{title:"CLI VA",permalink:"/idn/tools/cli/va"}},l={},m=[{value:"Commands",id:"commands",level:2},{value:"List transforms",id:"list-transforms",level:2},{value:"Download transforms",id:"download-transforms",level:2},{value:"Create transform",id:"create-transform",level:2},{value:"Update transform",id:"update-transform",level:2},{value:"Preview transform",id:"preview-transform",level:2},{value:"Explicit input",id:"explicit-input",level:3},{value:"Implicit input",id:"implicit-input",level:3},{value:"Output",id:"output",level:3},{value:"Delete transform",id:"delete-transform",level:2}],p={toc:m};function d(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transforms"},"Transforms"),(0,r.kt)("p",null,"Learn about the CLI commands you can use to create, manage, and test transforms in this guide. "),(0,r.kt)("p",null,"In IdentityNow (IDN), you can use transforms to manipulate attribute data without writing any code. For more information about transforms, refer to ",(0,r.kt)("a",{parentName:"p",href:"/idn/docs/transforms"},"Transforms"),". "),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"transforms")," command, it's it easy to create, manage, and test transforms in the CLI. "),(0,r.kt)("h2",{id:"commands"},"Commands"),(0,r.kt)("p",null,"To create, manage, and test transforms with the CLI, you can use these commands: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#transforms"},"Transforms"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commands"},"Commands")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#list-transforms"},"List transforms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#download-transforms"},"Download transforms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#create-transform"},"Create transform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#update-transform"},"Update transform")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#preview-transform"},"Preview transform"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#explicit-input"},"Explicit input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#implicit-input"},"Implicit input")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#output"},"Output")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#delete-transform"},"Delete transform"))))),(0,r.kt)("h2",{id:"list-transforms"},"List transforms"),(0,r.kt)("p",null,"To get a list of the transforms available in your tenant, run this command: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform list\n")),(0,r.kt)("p",null,"This command produces a table of available transforms. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transform List",src:a(38443).Z,width:"1200",height:"500"})),(0,r.kt)("h2",{id:"download-transforms"},"Download transforms"),(0,r.kt)("p",null,"To download all the transforms in your tenant and save them as ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," files on your computer, run the following command. By default, this command will save the files in the current working directory. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag to specify a path to an output directory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform download -d transform_files\n")),(0,r.kt)("p",null,"By default, this command will save the files in the current working directory. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-d")," flag to specify a path to an output directory."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transform Download",src:a(91892).Z,width:"1200",height:"500"})),(0,r.kt)("p",null,"This command will overwrite any existing files with the same name, so be careful when you run this in a directory that has transforms that have been modified but not yet saved. "),(0,r.kt)("h2",{id:"create-transform"},"Create transform"),(0,r.kt)("p",null,"To create a new transform from a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file, run the following command. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform create -f transform.json\n")),(0,r.kt)("h2",{id:"update-transform"},"Update transform"),(0,r.kt)("p",null,"To update a transform from a ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file, run the following command. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"-f")," flag to specify the path to the ",(0,r.kt)("inlineCode",{parentName:"p"},"json")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform update -f transform.json\n")),(0,r.kt)("p",null,"A common workflow is to first download the transforms, then make edits to the transform file, and then use the update command to save those edits in IDN."),(0,r.kt)("h2",{id:"preview-transform"},"Preview transform"),(0,r.kt)("p",null,"You can use the preview command to view a preview of the final output of a transform, using real account data from IDN. This command is safe to use when you are testing - it does not modify account or identity details in IDN. "),(0,r.kt)("p",null,"You can preview both transforms with ",(0,r.kt)("a",{parentName:"p",href:"#explicit-input"},"explicit input")," and transforms with ",(0,r.kt)("a",{parentName:"p",href:"#implicit-input"},"implicit input")," determined by their identity profile mappings in IDN. "),(0,r.kt)("h3",{id:"explicit-input"},"Explicit input"),(0,r.kt)("p",null,'Transforms that use "explicit input" have direct references in their specifications to the account attributes the transforms will apply to. These transforms require additional flags: '),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-i")," The identity profile ID to use for the preview. You can find the ID of the identity profile you are interested in by using the ",(0,r.kt)("a",{parentName:"li",href:"/idn/api/v3/list-identity-profiles"},"Identity Profiles List")," endpoint."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-a")," The name of the identity attribute to apply the transform to. This depends on the identity profile's available attributes.")),(0,r.kt)("p",null,'To preview an "explicit" input transform, run your command like this example: '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform preview -i 2c91808876628b6201767b4bfea61dbb -a department -f transform.json\n")),(0,r.kt)("p",null,'This example previews the output of a transform that will convert a specific identity\'s department name based on the details in the "transform.json" file. '),(0,r.kt)("h3",{id:"implicit-input"},"Implicit input"),(0,r.kt)("p",null,'Transforms that use "implicit input"* rely on the identity profile mapping in IDN to determine which account attribute to apply the transform to. These transforms require additional flags.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--implicit")," This indicates that the transform uses implicit input. It does not specify an account attribute directly in the JSON."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-n <transform-name>")," The name of the transform. The transform must be saved in IDN before you run this command.")),(0,r.kt)("p",null,'To preview an "implicit" input transform, run your command like this example: '),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform preview -i 2c91808876628b6201767b4bfea61dbb -a department -n ToUpper --implicit\n")),(0,r.kt)("p",null,"This example previews the output of a transform that will convert a specific identity's incoming lowercased department name to an uppercased name based on identity profile mapping in IDN. "),(0,r.kt)("h3",{id:"output"},"Output"),(0,r.kt)("p",null,"The preview command produces this output: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Original value: adam.archer\nTransformed value: ADAM.ARCHER\n")),(0,r.kt)("p",null,"This is an example of a preview for a transform that is converting incoming lowercased account names into uppercased account names. "),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Original value")," is the value of the identity attribute at the time of the last identity refresh. It is not the value of the account attribute as it currently exists on the source. The value may already have been transformed if the identity profile mapping has a transform mapped to the attribute."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Transformed value")," is a result of a change to the account attribute, according to the transform specification. This is what the identity attribute will become if you use this transform in the identity profile."),(0,r.kt)("h2",{id:"delete-transform"},"Delete transform"),(0,r.kt)("p",null,"To delete a transform, run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform delete <transform-id>\n")),(0,r.kt)("p",null,"To delete multiple transforms, use this syntax:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform delete <transform-id> <transform-id> <transform-id>\n")),(0,r.kt)("p",null,"You can use this command in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"ls")," command to find the ID of the transform you want to delete. "),(0,r.kt)("p",null,"This is an example of how you can find a transform ID and delete it: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sail transform list\n+--------------------------------------+--------------------------+\n|                  ID                  |           NAME           |\n+--------------------------------------+--------------------------+\n| 03d5187b-ab96-402c-b5a1-40b74285d77a | WIFI Group               |\n| 06d589cf-4d7d-4b40-8617-c221092ceb2c | Remove Diacritical Marks |\n| 1f3a97cf-e58b-4fad-b2f2-0dcc19fb1627 | NETID                    |\n+--------------------------------------+--------------------------+\nsail transform delete 03d5187b-ab96-402c-b5a1-40b74285d77a\n")))}d.isMDXComponent=!0},91892:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/transform-download-23453d19230ad2708a3389a3a026179f.gif"},38443:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/transform-list-033f4d95c861fda8172582e306ec55e0.gif"}}]);