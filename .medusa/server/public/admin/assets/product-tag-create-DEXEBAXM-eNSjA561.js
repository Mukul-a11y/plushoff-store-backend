import{a6 as c,j as e,b as j,a8 as h,a9 as f,eA as p,t as i,H as g,T as v,w as r,x as T,B as n}from"./index-B_XJjnU1.js";import{K as y}from"./chunk-6HTZNHPT-uMOImRQt.js";import{R as s,u as b}from"./chunk-JGQGO74V-DkKGx5VI.js";import"./prompt-BURHT4LZ.js";var C=c.object({value:c.string().min(1)}),F=()=>{const{t:a}=j(),{handleSuccess:d}=b(),l=h({defaultValues:{value:""},resolver:f(C)}),{mutateAsync:u,isPending:x}=p(),m=l.handleSubmit(async o=>{await u(o,{onSuccess:({product_tag:t})=>{i.success(a("productTags.create.successToast",{value:t.value})),d(`../${t.id}`)},onError:t=>{i.error(t.message)}})});return e.jsx(s.Form,{form:l,children:e.jsxs(y,{className:"flex size-full flex-col overflow-hidden",onSubmit:m,children:[e.jsx(s.Header,{}),e.jsx(s.Body,{className:"flex flex-1 justify-center overflow-auto px-6 py-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsxs("div",{className:"flex flex-col gap-y-1",children:[e.jsx(s.Title,{asChild:!0,children:e.jsx(g,{children:a("productTags.create.header")})}),e.jsx(s.Description,{asChild:!0,children:e.jsx(v,{size:"small",className:"text-ui-fg-subtle",children:a("productTags.create.subtitle")})})]}),e.jsx("div",{className:"grid gap-4 md:grid-cols-2",children:e.jsx(r.Field,{control:l.control,name:"value",render:({field:o})=>e.jsxs(r.Item,{children:[e.jsx(r.Label,{children:a("productTags.fields.value")}),e.jsx(r.Control,{children:e.jsx(T,{...o})}),e.jsx(r.ErrorMessage,{})]})})})]})}),e.jsx(s.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-2",children:[e.jsx(s.Close,{asChild:!0,children:e.jsx(n,{size:"small",variant:"secondary",type:"button",children:a("actions.cancel")})}),e.jsx(n,{size:"small",type:"submit",isLoading:x,children:a("actions.save")})]})})]})})},P=()=>e.jsx(s,{children:e.jsx(F,{})});export{P as Component};
