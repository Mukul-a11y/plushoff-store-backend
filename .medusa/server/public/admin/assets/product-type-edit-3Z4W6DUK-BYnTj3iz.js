import{a6 as m,R as j,b as h,eN as y,j as e,H as v,a8 as f,a9 as T,eP as b,t as x,w as o,x as g,B as p}from"./index-B_XJjnU1.js";import{K as P}from"./chunk-6HTZNHPT-uMOImRQt.js";import{b as r,u as E}from"./chunk-JGQGO74V-DkKGx5VI.js";import"./prompt-BURHT4LZ.js";var F=m.object({value:m.string().min(1)}),w=({productType:t})=>{const{t:s}=h(),{handleSuccess:n}=E(),a=f({defaultValues:{value:t.value},resolver:T(F)}),{mutateAsync:l,isPending:c}=b(t.id),i=a.handleSubmit(async d=>{await l({value:d.value},{onSuccess:({product_type:u})=>{x.success(s("productTypes.edit.successToast",{value:u.value})),n()},onError:u=>{x.error(u.message)}})});return e.jsx(r.Form,{form:a,children:e.jsxs(P,{onSubmit:i,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(r.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:e.jsx(o.Field,{control:a.control,name:"value",render:({field:d})=>e.jsxs(o.Item,{children:[e.jsx(o.Label,{children:s("productTypes.fields.value")}),e.jsx(o.Control,{children:e.jsx(g,{...d})}),e.jsx(o.ErrorMessage,{})]})})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(p,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(p,{size:"small",type:"submit",isLoading:c,children:s("actions.save")})]})})]})})},z=()=>{const{id:t}=j(),{t:s}=h(),{product_type:n,isPending:a,isError:l,error:c}=y(t),i=!a&&!!n;if(l)throw c;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(v,{children:s("productTypes.edit.header")})}),i&&e.jsx(w,{productType:n})]})};export{z as Component};
