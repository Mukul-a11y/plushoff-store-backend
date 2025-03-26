import{r as h,a6 as p,j as e,m as N,b as k,H as V,a8 as L,a9 as z,t as R,y as H,cq as U,w as x,bu as f,I as $,G,B as A,az as w}from"./index-B_XJjnU1.js";import{K}from"./chunk-6HTZNHPT-uMOImRQt.js";import{b as c,u as Y}from"./chunk-JGQGO74V-DkKGx5VI.js";import{A as q,a as J}from"./arrow-up-mini-DS-yC4Fm.js";import{T as Q}from"./trash-BvBpPA1R.js";var W=Object.defineProperty,j=Object.getOwnPropertySymbols,F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable,I=(s,t,a)=>t in s?W(s,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):s[t]=a,X=(s,t)=>{for(var a in t)F.call(t,a)&&I(s,a,t[a]);if(j)for(var a of j(t))C.call(t,a)&&I(s,a,t[a]);return s},Z=(s,t)=>{var a={};for(var l in s)F.call(s,l)&&t.indexOf(l)<0&&(a[l]=s[l]);if(s!=null&&j)for(var l of j(s))t.indexOf(l)<0&&C.call(s,l)&&(a[l]=s[l]);return a};const M=h.forwardRef((s,t)=>{var a=s,{color:l="currentColor"}=a,o=Z(a,["color"]);return h.createElement("svg",X({xmlns:"http://www.w3.org/2000/svg",width:15,height:15,fill:"none",ref:t},o),h.createElement("path",{fill:l,fillRule:"evenodd",d:"M6.306 7.5a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M6.306 2.389a1.194 1.194 0 1 1 2.389 0 1.194 1.194 0 0 1-2.39 0M6.306 12.611a1.194 1.194 0 1 1 2.388 0 1.194 1.194 0 0 1-2.388 0",clipRule:"evenodd"}))});M.displayName="EllipsisVertical";var ee=p.object({key:p.string(),disabled:p.boolean().optional(),value:p.any()}),ae=p.object({metadata:p.array(ee)}),ue=s=>{const{t}=k(),{isPending:a,...l}=s;return e.jsxs(c,{children:[e.jsxs(c.Header,{children:[e.jsx(c.Title,{asChild:!0,children:e.jsx(V,{children:t("metadata.edit.header")})}),e.jsx(c.Description,{className:"sr-only",children:t("metadata.edit.description")})]}),a?e.jsx(te,{}):e.jsx(se,{...l})]})},O="metadata-form-key-label",T="metadata-form-value-label",se=({metadata:s,hook:t,isMutating:a})=>{const{t:l}=k(),{handleSuccess:o}=Y(),m=ie(s),r=L({defaultValues:{metadata:le(s)},resolver:z(ae)}),i=r.handleSubmit(async n=>{const d=re(n,s);await t({metadata:d},{onSuccess:()=>{R.success(l("metadata.edit.successToast")),o()},onError:u=>{R.error(u.message)}})}),{fields:b,insert:v,remove:D}=H({control:r.control,name:"metadata"});function P(n){D(n),b.length===1&&v(0,{key:"",value:"",disabled:!1})}function E(n,d){v(n+(d==="above"?0:1),{key:"",value:"",disabled:!1})}return e.jsx(c.Form,{form:r,children:e.jsxs(K,{onSubmit:i,className:"flex flex-1 flex-col overflow-hidden",children:[e.jsxs(c.Body,{className:"flex flex-1 flex-col gap-y-8 overflow-y-auto",children:[e.jsxs("div",{className:"bg-ui-bg-base shadow-elevation-card-rest grid grid-cols-1 divide-y rounded-lg",children:[e.jsxs("div",{className:"bg-ui-bg-subtle grid grid-cols-2 divide-x rounded-t-lg",children:[e.jsx("div",{className:"txt-compact-small-plus text-ui-fg-subtle px-2 py-1.5",children:e.jsx("label",{id:O,children:l("metadata.edit.labels.key")})}),e.jsx("div",{className:"txt-compact-small-plus text-ui-fg-subtle px-2 py-1.5",children:e.jsx("label",{id:T,children:l("metadata.edit.labels.value")})})]}),b.map((n,d)=>{const u=n.disabled||!1;let g="-";return typeof n.value=="object"&&(g="{ ... }"),Array.isArray(n.value)&&(g="[ ... ]"),e.jsx(U,{showTooltip:u,content:l("metadata.edit.complexRow.tooltip"),children:e.jsxs("div",{className:"group/table relative",children:[e.jsxs("div",{className:N("grid grid-cols-2 divide-x",{"overflow-hidden rounded-b-lg":d===b.length-1}),children:[e.jsx(x.Field,{control:r.control,name:`metadata.${d}.key`,render:({field:y})=>e.jsx(x.Item,{children:e.jsx(x.Control,{children:e.jsx(_,{"aria-labelledby":O,...y,disabled:u,placeholder:"Key"})})})}),e.jsx(x.Field,{control:r.control,name:`metadata.${d}.value`,render:({field:{value:y,...B}})=>e.jsx(x.Item,{children:e.jsx(x.Control,{children:e.jsx(_,{"aria-labelledby":T,...B,value:u?g:y,disabled:u,placeholder:"Value"})})})})]}),e.jsxs(f,{children:[e.jsx(f.Trigger,{className:N("invisible absolute inset-y-0 -right-2.5 my-auto group-hover/table:visible data-[state='open']:visible",{hidden:u}),disabled:u,asChild:!0,children:e.jsx($,{size:"2xsmall",children:e.jsx(M,{})})}),e.jsxs(f.Content,{children:[e.jsxs(f.Item,{className:"gap-x-2",onClick:()=>E(d,"above"),children:[e.jsx(q,{className:"text-ui-fg-subtle"}),l("metadata.edit.actions.insertRowAbove")]}),e.jsxs(f.Item,{className:"gap-x-2",onClick:()=>E(d,"below"),children:[e.jsx(J,{className:"text-ui-fg-subtle"}),l("metadata.edit.actions.insertRowBelow")]}),e.jsx(f.Separator,{}),e.jsxs(f.Item,{className:"gap-x-2",onClick:()=>P(d),children:[e.jsx(Q,{className:"text-ui-fg-subtle"}),l("metadata.edit.actions.deleteRow")]})]})]})]})},n.id)})]}),m&&e.jsx(G,{variant:"warning",label:l("metadata.edit.complexRow.label"),children:l("metadata.edit.complexRow.description")})]}),e.jsx(c.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(c.Close,{asChild:!0,children:e.jsx(A,{size:"small",variant:"secondary",type:"button",disabled:a,children:l("actions.cancel")})}),e.jsx(A,{size:"small",type:"submit",isLoading:a,children:l("actions.save")})]})})]})})},_=h.forwardRef(({className:s,...t},a)=>e.jsx("input",{ref:a,...t,autoComplete:"off",className:N("txt-compact-small text-ui-fg-base placeholder:text-ui-fg-muted disabled:text-ui-fg-disabled disabled:bg-ui-bg-base bg-transparent px-2 py-1.5 outline-none",s)}));_.displayName="MetadataForm.GridInput";var te=()=>e.jsxs("div",{className:"flex flex-1 flex-col overflow-hidden",children:[e.jsx(c.Body,{children:e.jsx(w,{className:"h-[148ox] w-full rounded-lg"})}),e.jsx(c.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(w,{className:"h-7 w-12 rounded-md"}),e.jsx(w,{className:"h-7 w-12 rounded-md"})]})})]}),S=["string","number","boolean"];function le(s){return!s||!Object.keys(s).length?[{key:"",value:"",disabled:!1}]:Object.entries(s).map(([t,a])=>{if(!S.includes(typeof a))return{key:t,value:a,disabled:!0};let l=a;return typeof a!="string"&&(l=JSON.stringify(a)),{key:t,value:l,original_key:t}})}function re(s,t){const a=s.metadata;if(!a.length||a.length===1&&!a[0].key&&!a[0].value)return null;const o={};return t&&Object.keys(t).forEach(m=>{a.some(i=>i.key===m)||(o[m]="")}),a.forEach(m=>{let r=m.key,i=m.value;const b=m.disabled;if(r){if(b){o[r]=i;return}r=r.trim(),i=(i==null?void 0:i.trim())??"",i==="true"?o[r]=!0:i==="false"?o[r]=!1:/^-?\d*\.?\d+$/.test(i)?o[r]=parseFloat(i):o[r]=i}}),o}function ie(s){return s?Object.values(s).some(t=>!S.includes(typeof t)):!1}export{ue as M};
