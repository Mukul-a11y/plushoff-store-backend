import{T as f,u as v,a as R,b as h}from"./chunk-QR3HOWRY-hqRPRQCi.js";import{T as y}from"./chunk-JHNHXN7U-TJQRUn4d.js";import{i as T,g as b}from"./chunk-THZJC662-D8uxQDqu.js";import{R as j,d as _,f4 as p,a as D,j as r,dn as C,q as P,b as u,V as S,Y as w,H as E,f2 as O,s as q,k as B}from"./index-B_XJjnU1.js";import"./lodash-BRq5wpc1.js";import{S as k}from"./chunk-2RQLKDBF-CYu7SlU_.js";import{a as L}from"./chunk-5OOAHPXU-CWNw9FR_.js";import{C as m}from"./container-B6-P_kWV.js";import"./chunk-C76H5USB-snWU8Lf3.js";import"./chunk-V3MOBCDF-Fr8ItIPO.js";import"./chunk-3WXBLS2P-MKHj1mOQ.js";import"./chunk-YEDAFXMB-DTA1cowS.js";import"./chunk-AOFGTNG6-Dw1h43fM.js";import"./table-Bo0St__b.js";import"./chunk-WX2SMNCD-C2o0V9Sk.js";import"./plus-mini-s9Rv_4_q.js";import"./index-BxsFvris.js";import"./pencil-square-Bl7Xb-57.js";import"./trash-BvBpPA1R.js";import"./arrow-down-right-mini-JWFArWk1.js";import"./status-badge-Btn_dykj.js";import"./chunk-EQTBJSBZ-CRsJ9Tuo.js";import"./react-country-flag.esm-BoskYilO.js";import"./use-prompt-bLHJG8Xp.js";import"./prompt-BURHT4LZ.js";import"./Trans-C4J5Sdfr.js";import"./x-mark-mini-56jHbCTO.js";import"./check-CKkniN9G.js";var N=({taxRegion:a})=>{const{t}=u(),e=a.tax_rates.filter(i=>i.is_default===!0),o=e.length===0;return r.jsxs(m,{className:"divide-y p-0",children:[r.jsx(y,{taxRegion:a,type:"header",asLink:!1,badge:o&&r.jsx(S,{content:t("taxRegions.fields.noDefaultRate.tooltip"),children:r.jsx(w,{color:"orange",size:"2xsmall",className:"cursor-default",children:t("taxRegions.fields.noDefaultRate.label")})})}),e.map(i=>r.jsx(f,{taxRate:i,isSublevelTaxRate:!0},i.id))]})},c=10,l="o",I=({taxRegion:a})=>{const{t}=u(),{searchParams:e,raw:o}=v({pageSize:c,prefix:l}),{tax_rates:i,count:n,isPending:s,isError:d,error:x}=L({...e,tax_region_id:a.id,is_default:!1},{placeholderData:B}),{table:g}=R({count:n,data:i,pageSize:c,prefix:l});if(d)throw x;return r.jsx(m,{className:"p-0",children:r.jsx(h,{isPending:s,table:g,count:n,action:{label:t("actions.create"),to:"overrides/create"},queryObject:o,prefix:l,children:r.jsx(E,{level:"h2",children:t("taxRegions.taxOverrides.header")})})})},me=()=>{const{province_id:a}=j(),t=_(),{tax_region:e,isLoading:o,isError:i,error:n}=p(a,void 0,{initialData:t}),{getWidgets:s}=D();if(o||!e)return r.jsx(C,{sections:2,showJSON:!0});if(i)throw n;return r.jsxs(k,{data:e,showJSON:!0,widgets:{after:s("tax.details.after"),before:s("tax.details.before")},children:[r.jsx(N,{taxRegion:e}),r.jsx(I,{taxRegion:e})]})},xe=a=>{var s,d;const{province_id:t}=a.params||{},{tax_region:e}=p(t,void 0,{initialData:a.data,enabled:!!t});if(!e)return null;const o=(s=e.country_code)==null?void 0:s.toUpperCase(),i=(d=e.province_code)==null?void 0:d.toUpperCase(),n=T(o,i);return r.jsx("span",{children:n?b(i):i})},Q=a=>({queryKey:O.detail(a),queryFn:async()=>q.admin.taxRegion.retrieve(a)}),ge=async({params:a})=>{const t=a.province_id,e=Q(t);return P.ensureQueryData(e)};export{xe as Breadcrumb,me as Component,me as TaxRegionDetail,ge as loader};
