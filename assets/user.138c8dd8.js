var e=Object.assign;import{f as t,u as l}from"./role.0a4b3fa5.js";import{s as o,d as s,r as a,j as n,m as i,t as r,n as m,p as d,q as c,u,v as p,b,c as v,e as y,f,w as k,i as I}from"./index.597464c9.js";import"./vendor.be963390.js";const w=[{title:"登录名",dataIndex:"username"},{title:"用户编号",dataIndex:"userNo"},{title:"姓名",dataIndex:"realName"},{title:"手机号",dataIndex:"mobile"},{title:"邮箱",dataIndex:"email"},{title:"部门",dataIndex:"dept"},{title:"描述",dataIndex:"note"},{title:"操作",width:"200px",slots:{customRender:"operation"}}];var R=s({name:"system-user",setup(){const s=a({visible:!1,loading:!1,rules:{username:{required:!0,type:"string",message:"请输入用户名",trigger:"blur"}},form:{}}),b=n(null),v=l(s,{C:d,R:c,U:u,D:p},b),y=n([{key:"username",label:"登录名",component:"Input",props:{disabled:i((()=>!!s.form.id))}},{key:"userNo",label:"用户编号",component:"Input"},{key:"realName",label:"姓名",component:"Input"},{key:"password",label:"密码",component:"Input",props:{type:"password"},show:i((()=>!s.form.id))},{key:"confirmPassword",label:"确认密码",component:"Input",props:{type:"password"},show:i((()=>!s.form.id))},{key:"mobile",label:"手机",component:"Input"},{key:"email",label:"邮箱",component:"Input"},{key:"dept",label:"部门",component:"Input"},{key:"note",label:"描述",component:"InputTextArea"}]),f=a({id:null,visible:!1,selectedRowKeys:[],terms:[{key:"roleName",label:"角色名称",component:"Input"}],columns:[{title:"角色名称",dataIndex:"roleName"},{title:"角色描述",dataIndex:"note",ellipsis:!0}],action:t}),k=a({selectedRowKeys:[],onChange:e=>{k.selectedRowKeys=e}});return e(e(e({},r(s)),v),{schemas:y,columns:w,terms:[{key:"username",label:"用户名",component:"Input"},{key:"realName",label:"姓名",component:"Input"}],tableRef:b,action:m,role:f,submitRole:async()=>{var e,t;await(e=f.id,t=k.selectedRowKeys,o.post(`userRole/saveOrUpdate/${e}`,t))&&(f.visible=!1,b.value&&b.value.reload())},setRole:async e=>{f.id=e,f.visible=!0;const t=await(l=e,o.get(`userRole/userId/${l}`));var l;k.selectedRowKeys=t?t.data.map((e=>e.roleId)):[]},rowSelection:k})}});const x=I("编辑"),h=I("选择角色"),C=I("删除");R.render=function(e,t,l,o,s,a){const n=b("a-button"),i=b("lv-table"),r=b("lv-modal-form"),m=b("a-modal");return v(),y("div",null,[f(i,{ref:"tableRef",title:"用户管理",terms:e.terms,columns:e.columns,action:e.action,onCreate:t[1]||(t[1]=t=>e.handle())},{operation:k((({record:t})=>[f(n,{type:"link",size:"small",onClick:l=>e.handle(t.id)},{default:k((()=>[x])),_:2},1032,["onClick"]),f(n,{type:"link",size:"small",onClick:l=>e.setRole(t.id)},{default:k((()=>[h])),_:2},1032,["onClick"]),f(n,{type:"link",size:"small",onClick:l=>e.remove(t.id)},{default:k((()=>[C])),_:2},1032,["onClick"])])),_:1},8,["terms","columns","action"]),f(r,{visible:e.visible,"onUpdate:visible":t[2]||(t[2]=t=>e.visible=t),form:e.form,"onUpdate:form":t[3]||(t[3]=t=>e.form=t),"label-width":90,schemas:e.schemas,rules:e.rules,title:"用户信息",onSubmit:e.submit},null,8,["visible","form","schemas","rules","onSubmit"]),f(m,{visible:e.role.visible,"onUpdate:visible":t[4]||(t[4]=t=>e.role.visible=t),title:"设置角色",width:"780px",onOk:e.submitRole},{default:k((()=>[f(i,{"row-selection":e.rowSelection,action:e.role.action,terms:e.role.terms,columns:e.role.columns},null,8,["row-selection","action","terms","columns"])])),_:1},8,["visible","onOk"])])};export default R;
