import{a2 as u,a4 as d,R as p,b as h,dm as f,j as e,H as b,a8 as g,a9 as v,dr as y,w as s,x as m,T as C,B as x}from"./index-B_XJjnU1.js";import{K as F}from"./chunk-6HTZNHPT-uMOImRQt.js";import{b as r,u as E}from"./chunk-JGQGO74V-DkKGx5VI.js";import"./prompt-BURHT4LZ.js";var N=u({title:d().min(1),handle:d().min(1)}),w=({collection:a})=>{const{t:l}=h(),{handleSuccess:i}=E(),t=g({defaultValues:{title:a.title,handle:a.handle},resolver:v(N)}),{mutateAsync:o,isPending:c}=y(a.id),j=t.handleSubmit(async n=>{await o(n,{onSuccess:()=>{i()}})});return e.jsx(r.Form,{form:t,children:e.jsxs(F,{onSubmit:j,className:"flex flex-1 flex-col",children:[e.jsx(r.Body,{children:e.jsxs("div",{className:"flex flex-col gap-y-4",children:[e.jsx(s.Field,{control:t.control,name:"title",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{children:l("fields.title")}),e.jsx(s.Control,{children:e.jsx(m,{...n})}),e.jsx(s.ErrorMessage,{})]})}),e.jsx(s.Field,{control:t.control,name:"handle",render:({field:n})=>e.jsxs(s.Item,{children:[e.jsx(s.Label,{tooltip:l("collections.handleTooltip"),children:l("fields.handle")}),e.jsx(s.Control,{children:e.jsxs("div",{className:"relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 z-10 flex w-8 items-center justify-center border-r",children:e.jsx(C,{className:"text-ui-fg-muted",size:"small",leading:"compact",weight:"plus",children:"/"})}),e.jsx(m,{...n,className:"pl-10"})]})}),e.jsx(s.ErrorMessage,{})]})})]})}),e.jsx(r.Footer,{children:e.jsxs("div",{className:"flex items-center gap-x-2",children:[e.jsx(r.Close,{asChild:!0,children:e.jsx(x,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(x,{size:"small",type:"submit",isLoading:c,children:l("actions.save")})]})})]})})},R=()=>{const{id:a}=p(),{t:l}=h(),{collection:i,isLoading:t,isError:o,error:c}=f(a);if(o)throw c;return e.jsxs(r,{children:[e.jsx(r.Header,{children:e.jsx(b,{children:l("collections.editCollection")})}),!t&&i&&e.jsx(w,{collection:i})]})};export{R as Component};
