import{G as x}from"./chunk-DO73XJPS-B9pcQZQU.js";import{a6 as l,R as j,a_ as v,ar as g,j as e,b as S,a8 as y,cI as w,a9 as F,t as _,H as Z,B as h}from"./index-B_XJjnU1.js";import{G as b}from"./chunk-PYIO3TDQ-D8Zv8hXV.js";import"./chunk-X3LH6P65-Bb7tdxMW.js";import"./lodash-BRq5wpc1.js";import"./chunk-X5VECN6S-jdFyTz2N.js";import"./chunk-TMAS4ILY-DnIx7T51.js";import{c as A}from"./chunk-GVRV2SOJ-DfhQgA1T.js";import{K as E}from"./chunk-6HTZNHPT-uMOImRQt.js";import{R as n,u as z,S as L}from"./chunk-JGQGO74V-DkKGx5VI.js";import"./chunk-NOAFLTPV-BBt3tMB5.js";import"./chunk-C76H5USB-snWU8Lf3.js";import"./index-BxsFvris.js";import"./checkbox-C2uMx0DL.js";import"./chunk-YEDAFXMB-DTA1cowS.js";import"./chunk-AOFGTNG6-Dw1h43fM.js";import"./table-Bo0St__b.js";import"./chunk-WX2SMNCD-C2o0V9Sk.js";import"./plus-mini-s9Rv_4_q.js";import"./command-bar-COdFuqRT.js";import"./index-Dh9W5nfg.js";import"./x-mark-mini-56jHbCTO.js";import"./chunk-DV5RB7II-BIzaMf4k.js";import"./format-CCtBShRQ.js";import"./_isIndex-CPiJ7lkV.js";import"./date-picker-CVPtNgxS.js";import"./popover-C6eQRaTF.js";import"./triangle-left-mini-yhHgWNe2.js";import"./index-BqpW1ZYQ.js";import"./chunk-BF3VCHXD-CzJkMngw.js";import"./prompt-BURHT4LZ.js";var N=l.object({countries:l.array(l.object({iso_2:l.string().min(2),display_name:l.string()})).min(1)});function C({fulfillmentSetId:a,locationId:d,zone:t}){const{t:o}=S(),{handleSuccess:p}=z(),r=y({defaultValues:{countries:t.geo_zones.map(i=>{const s=w.find(m=>m.iso_2===i.country_code);return{iso_2:i.country_code,display_name:(s==null?void 0:s.display_name)||i.country_code.toUpperCase()}})},resolver:F(N)}),{mutateAsync:u,isPending:f}=A(a,t.id),c=r.handleSubmit(async i=>{await u({geo_zones:i.countries.map(({iso_2:s})=>({country_code:s,type:"country"}))},{onSuccess:()=>{_.success(o("stockLocations.serviceZones.manageAreas.successToast",{name:t.name})),p(`/settings/locations/${d}`)},onError:s=>{_.error(s.message)}})});return e.jsx(n.Form,{form:r,children:e.jsxs(E,{className:"flex h-full flex-col overflow-hidden",onSubmit:c,children:[e.jsx(n.Header,{}),e.jsx(n.Body,{className:"flex flex-1 flex-col overflow-auto",children:e.jsxs(L,{id:b,children:[e.jsx("div",{className:"flex flex-col items-center p-16",children:e.jsxs("div",{className:"flex w-full max-w-[720px] flex-col gap-y-8",children:[e.jsx(Z,{children:o("stockLocations.serviceZones.manageAreas.header",{name:t.name})}),e.jsx(x,{form:r})]})}),e.jsx(x.AreaDrawer,{form:r})]})}),e.jsx(n.Footer,{children:e.jsxs("div",{className:"flex items-center justify-end gap-x-2",children:[e.jsx(n.Close,{asChild:!0,children:e.jsx(h,{variant:"secondary",size:"small",children:o("actions.cancel")})}),e.jsx(h,{type:"submit",size:"small",isLoading:f,children:o("actions.save")})]})})]})})}var le=()=>{var i,s;const{location_id:a,fset_id:d,zone_id:t}=j(),{stock_location:o,isPending:p,isFetching:r,isError:u,error:f}=v(a,{fields:"*fulfillment_sets.service_zones.geo_zones,fulfillment_sets.service_zones.name"}),c=(s=(i=o==null?void 0:o.fulfillment_sets)==null?void 0:i.find(m=>m.id===d))==null?void 0:s.service_zones.find(m=>m.id===t);if(!p&&!r&&!c)throw g({message:`Service zone with ID ${t} was not found`},404);if(u)throw f;return e.jsx(n,{prev:`/settings/locations/${a}`,children:c&&e.jsx(C,{zone:c,fulfillmentSetId:d,locationId:a})})};export{le as Component};
