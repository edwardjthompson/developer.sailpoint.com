"use strict";(self.webpackChunksailpoint_developer_portal=self.webpackChunksailpoint_developer_portal||[]).push([[22480],{49478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>u,toc:()=>y});var l=a(87462),i=(a(67294),a(3905)),r=a(26389),s=a(94891),p=(a(75190),a(47507)),m=a(24310),o=a(63303),n=(a(75035),a(85162));const d={id:"create-profile-type-role",sidebar_label:"Create a profile type role",hide_title:!0,hide_table_of_contents:!0,api:"eJztVt9v2zYQ/lcIPlu265+ZgT04gwt4QJMg8faSGQUlnSw2EqmRVBJD8P++O9Ku1djNmhXFXuoEtiR+x/vu7rsTG56CTYysnNSKz/gql5aBSistlWOJUCwxIBwwwSqjM1kAc9sKmNEFdNnV9WoRsVWOy7EspNsyp/F/s0HYvCj0U++y0MkDwz1TrdA0N7re5PgL7Ga/3Qq34x2uKzCCSCxTpBGc7iGEuEV/iHJiY/nsnh+4HMlYvu5wA3/XYN2lTrd81vhbaQA3dKaGDk+0cqAcLYmqKmTiHfY+WQq94TbJoRR0RbsiCx1/gsShW3SH9JxEL7iaaVP+O2pP8SOhPsq0ZWCdkWqDBi9TD0ymTGc+Pe1sIxSeRVkVZD2AeDydDrNoMLqYRKPxIIviNB5G018m74bDeNi/mAz4DnOBSfkPfk1I9Fv9oUMnnTd4UTWLi/Sh6thKKxvSM+j36edLKovnClMJKTtASU+CPYpC0jNfXP6zjj+wjh3+fSGe89ufxBfTSZSNxuh3OkzR72QcxZPRcAz9eBIP0lf1Ew0+K2h0TjSXImW3QRssYrUSceF1k2hi4KD7FsXglLrOcMKcquJAb6m8HH8n013n67g/CeXdLIzRBttgHYIYnwtiifyMEgW7A/MIhnkbDMeAq43CjtAKQ8uFSgu8gecEvKV9U3CvCx3I5SmzOSvBWrEBFp7HKAhf9oBvl/pOG7NlVpfgckI9ISv2ZDQqaHcoIa1pGvGV9r1cCZfjXe+LNgsDvcOtT4b19ahNgbjcucrOer0GIxbKXYkSdl2FVUMKegvQxar3RCXR+FEYSVrwwR3hIcJM1AVmjIukhESfCtzDmUI8E9bKDZWANFVbh+EZimdN/JLa4GvPE4xBGDDzmuK5X7eX76gCgUcb9LkgFBRF62F4H0D4JFy8xzkliOxKP4BCGvj961bXJlz65qFi3x7ffotDTY5T7mSOfdtEaA2gb38VSJVp8knFCwl91+13+63uuFrcfmDzm+XZ0XJY9OePGFhtQ/ZFkqAUGTYBK3Uqsy2jGuva0vsC84GrTCrmUwPqUaLySpQg9Qh2BeD7hEgpLwL+YbnyXEmHpVCtld++euJ5ybY59t7/d3Lai8jBs+tVhZA0lkK3NPvuuudnugv1mVML4mrTxMLCH6bY7egxqsiQpNfHHvKKRgMQKQqT1P4AW0pVCD/aU8HJWBOXkzFEgzJYzBMaXa9i160pcXN9t6JG2J/osOxkY8QTCRO/Z/wv/PPnRz8P/bGPnje8EGpT49xCTNiXPv8AlVK0rw==",sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile type role' (create-profile-type-role)"},c=void 0,u={unversionedId:"api/create-profile-type-role",id:"api/create-profile-type-role",title:"create-profile-type-role",description:"Create a profile type role",source:"@site/products/nerm/api/create-profile-type-role.api.mdx",sourceDirName:"api",slug:"/api/create-profile-type-role",permalink:"/nerm/api/create-profile-type-role",draft:!1,editUrl:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile type role' (create-profile-type-role)",tags:[],version:"current",frontMatter:{id:"create-profile-type-role",sidebar_label:"Create a profile type role",hide_title:!0,hide_table_of_contents:!0,api:"eJztVt9v2zYQ/lcIPlu265+ZgT04gwt4QJMg8faSGQUlnSw2EqmRVBJD8P++O9Ku1djNmhXFXuoEtiR+x/vu7rsTG56CTYysnNSKz/gql5aBSistlWOJUCwxIBwwwSqjM1kAc9sKmNEFdNnV9WoRsVWOy7EspNsyp/F/s0HYvCj0U++y0MkDwz1TrdA0N7re5PgL7Ga/3Qq34x2uKzCCSCxTpBGc7iGEuEV/iHJiY/nsnh+4HMlYvu5wA3/XYN2lTrd81vhbaQA3dKaGDk+0cqAcLYmqKmTiHfY+WQq94TbJoRR0RbsiCx1/gsShW3SH9JxEL7iaaVP+O2pP8SOhPsq0ZWCdkWqDBi9TD0ymTGc+Pe1sIxSeRVkVZD2AeDydDrNoMLqYRKPxIIviNB5G018m74bDeNi/mAz4DnOBSfkPfk1I9Fv9oUMnnTd4UTWLi/Sh6thKKxvSM+j36edLKovnClMJKTtASU+CPYpC0jNfXP6zjj+wjh3+fSGe89ufxBfTSZSNxuh3OkzR72QcxZPRcAz9eBIP0lf1Ew0+K2h0TjSXImW3QRssYrUSceF1k2hi4KD7FsXglLrOcMKcquJAb6m8HH8n013n67g/CeXdLIzRBttgHYIYnwtiifyMEgW7A/MIhnkbDMeAq43CjtAKQ8uFSgu8gecEvKV9U3CvCx3I5SmzOSvBWrEBFp7HKAhf9oBvl/pOG7NlVpfgckI9ISv2ZDQqaHcoIa1pGvGV9r1cCZfjXe+LNgsDvcOtT4b19ahNgbjcucrOer0GIxbKXYkSdl2FVUMKegvQxar3RCXR+FEYSVrwwR3hIcJM1AVmjIukhESfCtzDmUI8E9bKDZWANFVbh+EZimdN/JLa4GvPE4xBGDDzmuK5X7eX76gCgUcb9LkgFBRF62F4H0D4JFy8xzkliOxKP4BCGvj961bXJlz65qFi3x7ffotDTY5T7mSOfdtEaA2gb38VSJVp8knFCwl91+13+63uuFrcfmDzm+XZ0XJY9OePGFhtQ/ZFkqAUGTYBK3Uqsy2jGuva0vsC84GrTCrmUwPqUaLySpQg9Qh2BeD7hEgpLwL+YbnyXEmHpVCtld++euJ5ybY59t7/d3Lai8jBs+tVhZA0lkK3NPvuuudnugv1mVML4mrTxMLCH6bY7egxqsiQpNfHHvKKRgMQKQqT1P4AW0pVCD/aU8HJWBOXkzFEgzJYzBMaXa9i160pcXN9t6JG2J/osOxkY8QTCRO/Z/wv/PPnRz8P/bGPnje8EGpT49xCTNiXPv8AlVK0rw==",sidebar_class_name:"post api-method",info_path:"nerm/api/nerm-api",custom_edit_url:"https://github.com/sailpoint-oss/developer.sailpoint.com/issues/new?assignees=&labels=&template=bug-report.md&title=%5BBug%5D+Your+Bug+Report+Here Requesting changes to 'Create a profile type role' (create-profile-type-role)"},sidebar:"nermOpenApiSidebar",previous:{title:"Delete profile type",permalink:"/nerm/api/delete-profile-type"},next:{title:"Create a profile",permalink:"/nerm/api/post-profile"}},b={},y=[{value:"Create a profile type role",id:"create-a-profile-type-role",level:2}],f={toc:y};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,l.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"create-a-profile-type-role"},"Create a profile type role"),(0,i.kt)("p",null,"This endpoint can create a profile type role. NOTE- The ability to toggle Allow/Block is done through the Profile Type"),(0,i.kt)(s.Z,{mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json-schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Request Body"),(0,i.kt)("strong",{style:{fontSize:"var(--ifm-code-font-size)",color:"var(--openapi-required)"}}," required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"form"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"profile_type_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the profile type",example:"2eb5773f-2486-452f-bdb3-796133b30862"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the role",example:"2eb5773f-2486-452f-bdb3-796133b30862"},mdxType:"SchemaItem"})))))))),(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(n.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Expected response to a valid request")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{}},(0,i.kt)("summary",{style:{}},(0,i.kt)("strong",null,"form"),(0,i.kt)("span",{style:{opacity:"0.6"}}," object")),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"profile_type_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the profile type",example:"2eb5773f-2486-452f-bdb3-796133b30862"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"role_id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the role",example:"2eb5773f-2486-452f-bdb3-796133b30862"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"id",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The id of the profile type role",example:"2e06b876-f456-473d-bd65-b6435e0b6b2d"},mdxType:"SchemaItem"}))))))),(0,i.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "form": {\n    "profile_type_id": "2eb5773f-2486-452f-bdb3-796133b30862",\n    "role_id": "2eb5773f-2486-452f-bdb3-796133b30862",\n    "id": "2e06b876-f456-473d-bd65-b6435e0b6b2d"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(n.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Bad Request - unable to complete.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",null,(0,i.kt)("span",{className:"badge badge--info"},"oneOf"),(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(n.Z,{label:"InvalidJson",value:"0-item-properties",mdxType:"TabItem"},(0,i.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"Invalid JSON syntax. Please check your syntax and try again."},mdxType:"SchemaItem"})),(0,i.kt)(n.Z,{label:"ValidationErrors",value:"1-item-properties",mdxType:"TabItem"},(0,i.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:"The <object> failed to create/update"},mdxType:"SchemaItem"}),(0,i.kt)(m.Z,{collapsible:!1,name:"errors",required:!1,schemaName:"",qualifierMessage:void 0,schema:{example:{attribute:"can't be blank"}},mdxType:"SchemaItem"}))))))),(0,i.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:"{}",language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(n.Z,{label:"500",value:"500",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Internal Server Error - returned on unhandled exceptions.")),(0,i.kt)("div",null,(0,i.kt)(s.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(n.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(o.Z,{mdxType:"SchemaTabs"},(0,i.kt)(n.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{textAlign:"left"}},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(m.Z,{collapsible:!1,name:"error",required:!1,schemaName:"",qualifierMessage:void 0,schema:{description:"A message describing the error",example:"Sorry something went wrong"},mdxType:"SchemaItem"})))),(0,i.kt)(n.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(p.Z,{responseExample:'{\n  "error": "Sorry something went wrong"\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}h.isMDXComponent=!0}}]);