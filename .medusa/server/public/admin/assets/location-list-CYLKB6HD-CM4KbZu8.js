import{B as L}from"./chunk-BKJC5BGQ-D-hFb-wi.js";import{L as b}from"./chunk-6WKBBTKM-ByPMAzSN.js";import{S as v,a as N}from"./chunk-RNCCSLPH-Cip1Ucj_.js";import{q as u,d as w,cS as S,a as k,j as e,b as o,H as j,cT as _,s as T,eh as C,T as l,B,L as z,ei as D,_ as q,A as P,t as p}from"./index-B_XJjnU1.js";import{a as A}from"./chunk-OIAPXGI2-DqMAAdmX.js";import{T as d}from"./chunk-2RQLKDBF-CYu7SlU_.js";import{u as E}from"./use-prompt-bLHJG8Xp.js";import{P as K}from"./pencil-square-Bl7Xb-57.js";import{T as F}from"./trash-BvBpPA1R.js";import{C as f}from"./container-B6-P_kWV.js";import{S as I}from"./status-badge-Btn_dykj.js";import"./chunk-EQTBJSBZ-CRsJ9Tuo.js";import"./Trans-C4J5Sdfr.js";import"./x-mark-mini-56jHbCTO.js";import"./check-CKkniN9G.js";import"./prompt-BURHT4LZ.js";var g="name,*sales_channels,*address,*fulfillment_sets,*fulfillment_sets.service_zones,*fulfillment_sets.service_zones.shipping_options,*fulfillment_sets.service_zones.shipping_options.shipping_profile",Q=()=>({queryKey:_.lists(),queryFn:async()=>await T.admin.stockLocation.list({fields:g}).catch(t=>{throw t.status===401?C("/login"):t})}),re=async t=>{const s=Q();return u.getQueryData(s.queryKey)??await u.fetchQuery(s)};function H(t){const{t:s}=o(),{salesChannels:i}=t;return e.jsx("div",{className:"flex flex-col px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-subtle flex-1",as:"div",children:s("stockLocations.salesChannels.label")}),e.jsx("div",{className:"flex-1 text-left",children:i!=null&&i.length?e.jsx(L,{rounded:!0,inline:!0,n:3,list:i.map(n=>n.name)}):"-"})]})})}function h(t){const{t:s}=o(),{fulfillmentSet:i,type:n}=t,a=!!i;return e.jsx("div",{className:"flex flex-col px-6 py-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx(l,{size:"small",weight:"plus",className:"text-ui-fg-subtle flex-1",as:"div",children:s(`stockLocations.fulfillmentSets.${n}.header`)}),e.jsx("div",{className:"flex-1 text-left",children:e.jsx(I,{color:a?"green":"grey",children:s(a?"statuses.enabled":"statuses.disabled")})})]})})}function O(t){var m,x;const{location:s}=t,{t:i}=o(),n=E(),{mutateAsync:a}=D(s.id),r=async()=>{await n({title:i("general.areYouSure"),description:i("stockLocations.delete.confirmation",{name:s.name}),confirmText:i("actions.remove"),cancelText:i("actions.cancel")})&&await a(void 0,{onSuccess:()=>{p.success(i("shippingProfile.delete.successToast",{name:s.name}))},onError:y=>{p.error(y.message)}})};return e.jsxs(f,{className:"flex flex-col divide-y p-0",children:[e.jsx("div",{className:"px-6 py-4",children:e.jsxs("div",{className:"flex flex-row items-center justify-between gap-x-4",children:[e.jsx("div",{className:"shadow-borders-base flex size-7 items-center justify-center rounded-md",children:e.jsx("div",{className:"bg-ui-bg-field flex size-6 items-center justify-center rounded-[4px]",children:e.jsx(q,{className:"text-ui-fg-subtle"})})}),e.jsxs("div",{className:"grow-1 flex flex-1 flex-col",children:[e.jsx(l,{weight:"plus",children:s.name}),e.jsx(l,{className:"text-ui-fg-subtle txt-small",children:A({address:s.address}).join(", ")})]}),e.jsxs("div",{className:"flex grow-0 items-center gap-4",children:[e.jsx(P,{groups:[{actions:[{label:i("actions.edit"),icon:e.jsx(K,{}),to:`/settings/locations/${s.id}/edit`}]},{actions:[{label:i("actions.delete"),icon:e.jsx(F,{}),onClick:r}]}]}),e.jsx("div",{className:"bg-ui-border-strong h-[12px] w-[1px]"}),e.jsx(b,{to:`/settings/locations/${s.id}`,children:i("actions.viewDetails")})]})]})}),e.jsx(H,{salesChannels:s.sales_channels}),e.jsx(h,{type:"pickup",fulfillmentSet:(m=s.fulfillment_sets)==null?void 0:m.find(c=>c.type==="pickup")}),e.jsx(h,{type:"shipping",fulfillmentSet:(x=s.fulfillment_sets)==null?void 0:x.find(c=>c.type==="shipping")})]})}var $=O,M=()=>{const{t}=o();return e.jsxs(f,{className:"flex h-fit items-center justify-between gap-x-4 px-6 py-4",children:[e.jsxs("div",{children:[e.jsx(j,{children:t("stockLocations.domain")}),e.jsx(l,{className:"text-ui-fg-subtle txt-small",children:t("stockLocations.list.description")})]}),e.jsx(B,{size:"small",className:"shrink-0",variant:"secondary",asChild:!0,children:e.jsx(z,{to:"create",children:t("actions.create")})})]})};function ce(){const t=w(),{stock_locations:s=[],isError:i,error:n}=S({fields:g},{initialData:t}),{getWidgets:a}=k();if(i)throw n;return e.jsxs(d,{widgets:{after:a("location.details.after"),before:a("location.details.before"),sideAfter:a("location.details.side.after"),sideBefore:a("location.details.side.before")},showJSON:!0,children:[e.jsxs(d.Main,{children:[e.jsx(M,{}),e.jsx("div",{className:"flex flex-col gap-3 lg:col-span-2",children:s.map(r=>e.jsx($,{location:r},r.id))})]}),e.jsx(d.Sidebar,{children:e.jsx(J,{})})]})}var J=()=>{const{t}=o();return e.jsxs(f,{className:"p-0",children:[e.jsx("div",{className:"flex items-center justify-between px-6 py-4",children:e.jsx(j,{level:"h2",children:t("stockLocations.sidebar.header")})}),e.jsx(v,{to:"/settings/locations/shipping-profiles",labelKey:t("stockLocations.sidebar.shippingProfiles.label"),descriptionKey:t("stockLocations.sidebar.shippingProfiles.description"),icon:e.jsx(N,{})})]})};export{ce as Component,re as loader};
