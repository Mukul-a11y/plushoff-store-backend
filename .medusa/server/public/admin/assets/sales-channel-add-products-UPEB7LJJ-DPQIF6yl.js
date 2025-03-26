import{u as F}from"./chunk-G3QXMPRB-BPf_8MMq.js";import{a2 as I,ad as z,a4 as D,R as B,h as H,j as e,b as C,a8 as M,a9 as N,eg as L,r as b,e as V,k as K,t as S,E as O,B as y,V as q}from"./index-B_XJjnU1.js";import{u as G,_ as Q}from"./chunk-X3LH6P65-Bb7tdxMW.js";import"./lodash-BRq5wpc1.js";import{u as Z,a as $}from"./chunk-U6CSGYH6-CAXyypH3.js";import"./chunk-TMAS4ILY-DnIx7T51.js";import{K as J}from"./chunk-6HTZNHPT-uMOImRQt.js";import{R as l,u as U}from"./chunk-JGQGO74V-DkKGx5VI.js";import{C as j}from"./checkbox-C2uMx0DL.js";import{c as W}from"./index-BxsFvris.js";import"./chunk-IQBAUTU5-IW_PLkS1.js";import"./chunk-ADOCJB6L-CsxUcmcd.js";import"./chunk-P3UUX2T6-a3YA4PSL.js";import"./chunk-YEDAFXMB-DTA1cowS.js";import"./chunk-AOFGTNG6-Dw1h43fM.js";import"./table-Bo0St__b.js";import"./chunk-WX2SMNCD-C2o0V9Sk.js";import"./plus-mini-s9Rv_4_q.js";import"./command-bar-COdFuqRT.js";import"./index-Dh9W5nfg.js";import"./chunk-C76H5USB-snWU8Lf3.js";import"./chunk-DV5RB7II-BIzaMf4k.js";import"./format-CCtBShRQ.js";import"./_isIndex-CPiJ7lkV.js";import"./x-mark-mini-56jHbCTO.js";import"./date-picker-CVPtNgxS.js";import"./popover-C6eQRaTF.js";import"./triangle-left-mini-yhHgWNe2.js";import"./index-BqpW1ZYQ.js";import"./prompt-BURHT4LZ.js";var X=I({product_ids:z(D()).min(1)}),g=50,Y=({salesChannel:r})=>{const{t:s}=C(),{handleSuccess:t}=U(),a=M({defaultValues:{product_ids:[]},resolver:N(X)}),{setValue:d}=a,{mutateAsync:c,isPending:p}=L(r.id),[u,m]=b.useState({}),i=o=>{const n=typeof o=="function"?o(u):o,h=Object.keys(n);d("product_ids",h,{shouldDirty:!0,shouldTouch:!0}),m(n)},{searchParams:P,raw:_}=Z({pageSize:g}),{products:v,count:f,isPending:k,isError:A,error:R}=V({fields:"*variants,*sales_channels",...P},{placeholderData:K}),x=se(),T=$(["sales_channel_id"]),{table:w}=G({data:v??[],columns:x,enableRowSelection:o=>{var n;return!((n=o.original.sales_channels)!=null&&n.map(h=>h.id).includes(r.id))},enablePagination:!0,getRowId:o=>o.id,pageSize:g,count:f,rowSelection:{state:u,updater:i},meta:{salesChannelId:r.id}}),E=a.handleSubmit(async o=>{await c(o.product_ids,{onSuccess:()=>{S.success(s("salesChannels.toast.update")),t()},onError:n=>S.error(n.message)})});if(A)throw R;return e.jsx(l.Form,{form:a,children:e.jsxs(J,{onSubmit:E,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(l.Header,{children:e.jsx("div",{className:"flex items-center justify-end gap-x-2",children:a.formState.errors.product_ids&&e.jsx(O,{variant:"error",children:a.formState.errors.product_ids.message})})}),e.jsx(l.Body,{className:"flex size-full flex-col overflow-y-auto",children:e.jsx(Q,{table:w,count:f,columns:x,pageSize:g,isLoading:k,filters:T,orderBy:[{key:"title",label:s("fields.title")},{key:"status",label:s("fields.status")},{key:"created_at",label:s("fields.createdAt")},{key:"updated_at",label:s("fields.updatedAt")}],queryObject:_,layout:"fill",pagination:!0,search:"autofocus",noRecords:{message:s("salesChannels.products.add.list.noRecordsMessage")}})}),e.jsx(l.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(l.Close,{asChild:!0,children:e.jsx(y,{size:"small",variant:"secondary",children:s("actions.cancel")})}),e.jsx(y,{size:"small",type:"submit",isLoading:p,children:s("actions.save")})]})})]})})},ee=W(),se=()=>{const r=F(),{t:s}=C();return b.useMemo(()=>[ee.display({id:"select",header:({table:t})=>e.jsx(j,{checked:t.getIsSomePageRowsSelected()?"indeterminate":t.getIsAllPageRowsSelected(),onCheckedChange:a=>t.toggleAllPageRowsSelected(!!a)}),cell:({row:t,table:a})=>{var m;const{salesChannelId:d}=a.options.meta,c=(m=t.original.sales_channels)==null?void 0:m.map(i=>i.id).includes(d),p=t.getIsSelected()||c,u=e.jsx(j,{checked:p,disabled:c,onCheckedChange:i=>t.toggleSelected(!!i),onClick:i=>{i.stopPropagation()}});return c?e.jsx(q,{content:s("salesChannels.productAlreadyAdded"),side:"right",children:u}):u}}),...r],[s,r])},Fe=()=>{const{id:r}=B(),{sales_channel:s,isPending:t,isError:a,error:d}=H(r);if(a)throw d;return e.jsx(l,{children:!t&&s&&e.jsx(Y,{salesChannel:s})})};export{Fe as Component};
