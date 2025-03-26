import{g as S}from"./chunk-WKOPGFW5-Di_6cJlP.js";import{a6 as v,R as D,a0 as K,aS as G,j as e,b as H,cR as W,b2 as X,r as I,a8 as J,a9 as U,v as A,cS as Y,t as P,w as t,ab as Z,B as Q,a7 as ee,V as se,bc as ie,m as te,aB as le,T as R,x as ne}from"./index-B_XJjnU1.js";import{u as ae}from"./chunk-BF3VCHXD-CzJkMngw.js";import{K as re}from"./chunk-6HTZNHPT-uMOImRQt.js";import{R as w,u as oe}from"./chunk-JGQGO74V-DkKGx5VI.js";import{S as x}from"./select-DQrF6oeb.js";import{A as z}from"./alert-BhxF964s.js";import"./prompt-BURHT4LZ.js";import"./triangles-mini-D3pVyvtU.js";import"./check-CKkniN9G.js";import"./x-mark-mini-56jHbCTO.js";var ce=v.object({quantity:v.record(v.string(),v.number()),location_id:v.string(),shipping_option_id:v.string().optional(),send_notification:v.boolean().optional()});function de({item:i,form:u,locationId:l,itemReservedQuantitiesMap:g,disabled:b}){const{t:p}=H(),{variant:j}=ee(i.product_id,i.variant_id,{fields:"*inventory,*inventory.location_levels"},{enabled:!!i.variant}),{availableQuantity:_,inStockQuantity:F}=I.useMemo(()=>{var E,h;if(!j||!l)return{};const{inventory:f}=j,m=(h=(E=f[0])==null?void 0:E.location_levels)==null?void 0:h.find(q=>q.location_id===l);if(!m)return{};const d=g.get(i.id)??0;return{availableQuantity:m.available_quantity+d,inStockQuantity:m.stocked_quantity}},[j,l,g]),C=0,n=Math.min(S(i),_||Number.MAX_SAFE_INTEGER);return e.jsx("div",{className:"bg-ui-bg-subtle shadow-elevation-card-rest my-2 rounded-xl",children:e.jsxs("div",{className:"flex flex-row items-center",children:[b&&e.jsx("div",{className:"inline-flex items-center ml-4",children:e.jsx(se,{content:p("orders.fulfillment.disabledItemTooltip"),side:"top",children:e.jsx(ie,{className:"text-ui-tag-orange-icon"})})}),e.jsxs("div",{className:te("flex flex-col flex-1 gap-x-2 gap-y-2 border-b p-3 text-sm sm:flex-row",b&&"opacity-50 pointer-events-none"),children:[e.jsxs("div",{className:"flex flex-1 items-center gap-x-3",children:[e.jsx(le,{src:i.thumbnail}),e.jsxs("div",{className:"flex flex-col",children:[e.jsxs("div",{children:[e.jsx(R,{className:"txt-small",as:"span",weight:"plus",children:i.title}),i.variant_sku&&e.jsxs("span",{children:["(",i.variant_sku,")"]})]}),e.jsx(R,{as:"div",className:"text-ui-fg-subtle txt-small",children:i.variant_title})]})]}),e.jsxs("div",{className:"flex flex-1 items-center gap-x-1",children:[e.jsx("div",{className:"mr-2 block h-[16px] w-[2px] bg-gray-200"}),e.jsxs("div",{className:"text-small flex flex-1 flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:p("orders.fulfillment.available")}),e.jsx("span",{className:"text-ui-fg-subtle",children:_||"N/A"})]}),e.jsxs("div",{className:"flex flex-1 items-center gap-x-1",children:[e.jsx("div",{className:"mr-2 block h-[16px] w-[2px] bg-gray-200"}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-ui-fg-subtle font-medium",children:p("orders.fulfillment.inStock")}),e.jsxs("span",{className:"text-ui-fg-subtle",children:[F||"N/A"," ",F&&e.jsxs("span",{className:"font-medium text-red-500",children:["-",u.getValues(`quantity.${i.id}`)]})]})]})]}),e.jsxs("div",{className:"flex flex-1 items-center gap-1",children:[e.jsx(t.Field,{control:u.control,name:`quantity.${i.id}`,rules:{required:!0,min:C,max:n},render:({field:f})=>e.jsxs(t.Item,{children:[e.jsx(t.Control,{children:e.jsx(ne,{className:"bg-ui-bg-base txt-small w-[50px] rounded-lg text-right [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",type:"number",...f,onChange:m=>{const d=m.target.value===""?null:Number(m.target.value);f.onChange(d),isNaN(d)||(d<C||d>n?u.setError(`quantity.${i.id}`,{type:"manual",message:p("orders.fulfillment.error.wrongQuantity",{count:n,number:n})}):u.clearErrors(`quantity.${i.id}`))}})}),e.jsx(t.ErrorMessage,{})]})}),e.jsxs("span",{className:"text-ui-fg-subtle",children:["/ ",i.quantity," ",p("fields.qty")]})]})]})]})]})})}function me({order:i,requiresShipping:u}){var M,O;const{t:l}=H(),{handleSuccess:g}=oe(),{mutateAsync:b,isPending:p}=W(i.id),{reservations:j}=X({line_item_id:i.items.map(s=>s.id)}),_=I.useMemo(()=>new Map((j||[]).map(s=>[s.line_item_id,s.quantity])),[j]),[F,C]=I.useState(()=>(i.items||[]).filter(s=>s.requires_shipping===u&&S(s)>0)),n=J({defaultValues:{quantity:F.reduce((s,r)=>(s[r.id]=S(r),s),{}),send_notification:!i.no_notification},resolver:U(ce)}),f=A({name:"location_id",control:n.control}),{stock_locations:m=[]}=Y(),{shipping_options:d=[],isLoading:E}=ae({stock_location_id:f,fields:"+service_zone.fulfillment_set.location.id"}),h=A({name:"shipping_option_id",control:n.control}),q=n.handleSubmit(async s=>{const r=d.find(c=>c.id===h);if(!r){n.setError("shipping_option_id",{type:"manual",message:l("orders.fulfillment.error.noShippingOption")});return}if(!f){n.setError("location_id",{type:"manual",message:l("orders.fulfillment.error.noLocation")});return}let o=Object.entries(s.quantity).map(([c,N])=>({id:c,quantity:N})).filter(({quantity:c})=>!!c);if(u){const c=r==null?void 0:r.shipping_profile_id,N=i.items.reduce((y,V)=>{var k,T,L;return y[V.id]=(L=(T=(k=V.variant)==null?void 0:k.product)==null?void 0:T.shipping_profile)==null?void 0:L.id,y},{});o=o.filter(({id:y})=>N[y]===c)}const a={location_id:f,shipping_option_id:h,no_notification:!s.send_notification,items:o};try{await b(a),P.success(l("orders.fulfillment.toast.created")),g(`/orders/${i.id}`)}catch(c){P.error(c.message)}});I.useEffect(()=>{var s,r;if(m!=null&&m.length&&(d!=null&&d.length)){const o=(r=(s=i.shipping_methods)==null?void 0:s[0])==null?void 0:r.shipping_option_id;if(o){const a=d.find(c=>c.id===o);if(a){const c=a.service_zone.fulfillment_set.location.id;n.setValue("location_id",c),n.setValue("shipping_option_id",o||void 0)}}}},[m==null?void 0:m.length,d==null?void 0:d.length]);const $=(i.items||[]).map(s=>s.requires_shipping===u&&s.detail.fulfilled_quantity);I.useEffect(()=>{var o;const s=((o=i==null?void 0:i.items)==null?void 0:o.filter(a=>a.requires_shipping===u&&S(a)>0))||[];C(s),s.length?n.clearErrors("root"):n.setError("root",{type:"manual",message:l("orders.fulfillment.error.noItems")});const r=s.reduce((a,c)=>(a[c.id]=S(c),a),{});n.setValue("quantity",r)},[...$,u]);const B=h&&((O=(M=i.shipping_methods)==null?void 0:M[0])==null?void 0:O.shipping_option_id)!==h;return e.jsx(w.Form,{form:n,children:e.jsxs(re,{onSubmit:q,className:"flex h-full flex-col overflow-hidden",children:[e.jsx(w.Header,{}),e.jsx(w.Body,{className:"flex h-full w-full flex-col items-center divide-y overflow-y-auto",children:e.jsx("div",{className:"flex size-full flex-col items-center overflow-auto p-16",children:e.jsx("div",{className:"flex w-full max-w-[736px] flex-col justify-center px-2 pb-2",children:e.jsxs("div",{className:"flex flex-col divide-y divide-dashed",children:[e.jsx("div",{className:"pb-8",children:e.jsx(t.Field,{control:n.control,name:"location_id",render:({field:{onChange:s,ref:r,...o}})=>e.jsxs(t.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-2 xl:flex-row xl:items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Label,{children:l("fields.location")}),e.jsx(t.Hint,{children:l("orders.fulfillment.locationDescription")})]}),e.jsx("div",{className:"flex-1",children:e.jsx(t.Control,{children:e.jsxs(x,{onValueChange:s,...o,children:[e.jsx(x.Trigger,{className:"bg-ui-bg-base",ref:r,children:e.jsx(x.Value,{})}),e.jsx(x.Content,{children:m.map(a=>e.jsx(x.Item,{value:a.id,children:a.name},a.id))})]})})})]}),e.jsx(t.ErrorMessage,{})]})})}),e.jsxs("div",{className:"py-8",children:[e.jsx(t.Field,{control:n.control,name:"shipping_option_id",render:({field:{onChange:s,ref:r,...o}})=>e.jsxs(t.Item,{children:[e.jsxs("div",{className:"flex flex-col gap-2 xl:flex-row xl:items-center",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx(t.Label,{children:l("fields.shippingMethod")}),e.jsx(t.Hint,{children:l("orders.fulfillment.methodDescription")})]}),e.jsx("div",{className:"flex-1",children:e.jsx(t.Control,{children:e.jsxs(x,{onValueChange:s,...o,disabled:!f,children:[e.jsx(x.Trigger,{className:"bg-ui-bg-base",ref:r,children:E?e.jsxs("span",{className:"text-right",children:[l("labels.loading"),"..."]}):e.jsx(x.Value,{})}),e.jsx(x.Content,{children:d.map(a=>e.jsx(x.Item,{value:a.id,children:a.name},a.id))})]})})})]}),e.jsx(t.ErrorMessage,{})]})}),B&&e.jsxs(z,{className:"mt-4 p-4",variant:"warning",children:[e.jsx("span",{className:"-mt-[3px] block font-medium",children:l("labels.beaware")}),e.jsx("span",{className:"text-ui-fg-muted",children:l("orders.fulfillment.differentOptionSelected")})]})]}),e.jsxs("div",{children:[e.jsxs(t.Item,{className:"mt-8",children:[e.jsx(t.Label,{children:l("orders.fulfillment.itemsToFulfill")}),e.jsx(t.Hint,{children:l("orders.fulfillment.itemsToFulfillDesc")}),e.jsx("div",{className:"flex flex-col gap-y-1",children:F.map(s=>{var o,a,c,N;const r=((o=d.find(y=>y.id===h))==null?void 0:o.shipping_profile_id)===((N=(c=(a=s.variant)==null?void 0:a.product)==null?void 0:c.shipping_profile)==null?void 0:N.id);return e.jsx(de,{form:n,item:s,locationId:f,disabled:u&&!r,itemReservedQuantitiesMap:_},s.id)})})]}),n.formState.errors.root&&e.jsx(z,{variant:"error",dismissible:!1,className:"flex items-center",classNameInner:"flex justify-between flex-1 items-center",children:n.formState.errors.root.message})]}),e.jsx("div",{className:"mt-8 pt-8 ",children:e.jsx(t.Field,{control:n.control,name:"send_notification",render:({field:{onChange:s,value:r,...o}})=>e.jsxs(t.Item,{children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(t.Label,{children:l("orders.returns.sendNotification")}),e.jsx(t.Control,{children:e.jsx(t.Control,{children:e.jsx(Z,{checked:!!r,onCheckedChange:s,...o})})})]}),e.jsx(t.Hint,{className:"!mt-1",children:l("orders.fulfillment.sendNotificationHint")}),e.jsx(t.ErrorMessage,{})]})})})]})})})}),e.jsx(w.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(w.Close,{asChild:!0,children:e.jsx(Q,{size:"small",variant:"secondary",children:l("actions.cancel")})}),e.jsx(Q,{size:"small",type:"submit",isLoading:p,disabled:!h,children:l("orders.fulfillment.create")})]})})]})})}function ye(){const{id:i}=D(),[u]=K(),l=u.get("requires_shipping")==="true",{order:g,isLoading:b,isError:p,error:j}=G(i,{fields:"currency_code,*items,*items.variant,+items.variant.product.shipping_profile.id,*shipping_address,+shipping_methods.shipping_option_id"});if(p)throw j;const _=!b&&g;return e.jsx(w,{children:_&&e.jsx(me,{order:g,requiresShipping:l})})}export{ye as Component};
