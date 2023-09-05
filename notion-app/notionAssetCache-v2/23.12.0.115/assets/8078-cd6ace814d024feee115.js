"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[8078],{58609:(e,t,o)=>{o.d(t,{J:()=>B});var a=o(77094),n=o.n(a),d=o(67294),i=o(81954),r=o(97880),s=o(62216),l=o(480),u=o(24405),p=o(5366),c=o(50906),m=o(80366),y=o(74194),g=o(97464),v=o.n(g),f=o(31942),b=o(60709),h=o(52275),C=o(78140),S=o(9342),w=o(44532),M=o(72495);function A(e){window.__c={n:"CheckoutCountryDropdown"};const{availableCountries:t,address:o,updateAddress:a}=e,i=(0,u.yK)((()=>({input:{background:"none",boxShadow:"none",padding:8,fontSize:14}})),[]),r=(0,l.O7)(),s=(0,p.useIntl)(),[g,A]=(0,d.useState)(!1),[F,P]=d.useState(""),x=(0,f.ZP)(F,t,(e=>e.name)).map(((e,t)=>({key:t,render:t=>d.createElement(h.Z,v()({},t,{title:e.name})),action:()=>{e.countryCode!==o.country&&a({addressLine1:"",addressLine2:"",zipCode:"",city:"",state:"",country:e.countryCode}),P(e.name),A(!1),c.rYO(r,{addressType:"country",addressUpdate:e.name})}})));return n()(m.c,{},void 0,n()(w.ZP,{popupType:w.ZP.PopupType.Popup,alignmentToOrigin:w.ZP.Alignment.End,placementToOrigin:w.ZP.Placement.Right,originGap:0,open:g,origin:n()(y.Z,{value:F,focus:g,placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.country",defaultMessage:"Country or region"}),style:i.input,onChange:e=>{P(e.target.value),a({country:void 0})},onFocus:()=>{A(!0)}}),onDismiss:()=>{A(!1)},render:()=>n()(C.Z,{menuType:b.og.Popup,width:"100%"},void 0,n()(S.Z,{type:S.i.Vertical,initialFocus:F.length>0?0:void 0,sections:[{key:0,showNoResultMessage:!0,render:e=>d.createElement(M.Z,v()({},e,{title:n()(p.FormattedMessage,{id:"spaceSubscriptionBillingInfoForm.countryDropdown.title",defaultMessage:"Select a country or region"})})),items:x}]}))}))}function F(){return(0,u.yK)((e=>({container:(0,m.s)(e),cityZipRow:{display:"flex"},verticalDivider:{display:"flex",borderLeft:"1px solid",borderLeftColor:e.groupedFormBorder},zipRow:{display:"flex",flex:2},stateRow:{display:"flex",flex:3},input:{background:"none",boxShadow:"none",padding:8,fontSize:14}})),[])}function P(e){window.__c={n:"CheckoutNotionAddressForm"};const{address:t,availableCountries:o,shouldShowBusinessName:a,updateAddress:i}=e,r=F(),s=(0,p.useIntl)();return n()("div",{style:r.container},void 0,n()(x,{placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.fullName",defaultMessage:"Full name"}),address:t,updateAddress:i,addressKey:"name"}),a&&n()(x,{placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.businessName",defaultMessage:"Business name (optional)"}),address:t,updateAddress:i,addressKey:"businessName"}),o?n()(A,{availableCountries:o,updateAddress:i,address:t}):null,t?d.createElement(d.Fragment,null,n()(x,{placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.address",defaultMessage:"Address"}),address:t,addressKey:"addressLine1",updateAddress:i}),n()(x,{placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.city",defaultMessage:"City"}),addressKey:"city",address:t,updateAddress:i}),n()("div",{style:r.cityZipRow},void 0,n()("div",{style:r.stateRow},void 0,n()(x,{placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.state",defaultMessage:"State / Province"}),address:t,addressKey:"state",updateAddress:i})),n()("div",{style:r.verticalDivider}),n()("div",{style:r.zipRow},void 0,n()(x,{placeholder:s.formatMessage({id:"spaceSubscriptionPaymentForm.billingInformation.zipCode",defaultMessage:"Zip code"}),address:t,addressKey:"zipCode",updateAddress:e.updateAddress})))):null)}function x(e){window.__c={n:"AddressInputField"};const{address:t,updateAddress:o,addressKey:a,placeholder:i}=e,r=(0,l.O7)(),s=F(),u=(0,d.useCallback)((e=>{c.rYO(r,{addressType:a,addressUpdate:e.target.value}),o({[a]:e.target.value})}),[a,o,r]);return n()(m.c,{},void 0,n()(y.Z,{value:t[a],style:s.input,placeholder:i,onBlur:u,onChange:e=>o({[a]:e.target.value})}))}function B(e){const{address:t,availableCountries:o,updateAddress:a,shouldShowBusinessName:d}=e,l=(0,i.VK)((()=>s.o0()),[]);return"payment"===l||"payment_and_address"===l?null:"control"===l?n()("div",{style:{marginTop:20}},void 0,n()(P,{address:t,availableCountries:o,shouldShowBusinessName:d,updateAddress:a})):void(0,r.t1)(l)}},6825:(e,t,o)=>{o.d(t,{wl:()=>B,Cz:()=>x,y0:()=>P});var a=o(77094),n=o.n(a),d=o(96486),i=o(67294),r=o(480),s=o(81954),l=o(24405),u=o(59054),p=o(97880),c=o(5366),m=o(54642),y=o(65544),g=o(8323),v=o(27242),f=o(58609),b=o(23855),h=o(97464),C=o.n(h),S=o(82990),w=o(80366),M=o(74194),A=o(58032);function F(e){window.__c={n:"CheckoutVATCodeInput"};const{temporaryVatCode:t,vatApplicable:o,disabled:a,tooltip:d,onChange:r}=e,s=(0,l.yK)((e=>({container:{backgroundColor:e.cardContentBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBorder,borderRadius:3,borderBottom:"none"},header:{display:"flex",alignItems:"center",marginBottom:6,fontSize:12,fontWeight:S.Z.fontWeight.semibold,color:e.mediumTextColor,justifyContent:"space-between",paddingTop:20},input:{background:"none",boxShadow:"none",padding:8},subtitle:{color:e.mediumTextColor,fontSize:S.Z.fontSize.UISmall.desktop,marginTop:5,marginBottom:10},whiteSpace:{marginBottom:20}})),[]),u=(0,c.useIntl)(),p=(0,i.useCallback)((e=>{r(e.target.value)}),[r]);return o?n()("div",{},void 0,n()("label",{style:s.header},void 0,n()(c.FormattedMessage,{id:"spaceSubscriptionPaymentForm.vatCountryCode.header",defaultMessage:"VAT (optional)"})),n()(A.Z,{placement:A.Z.Placement.Top,alignment:A.Z.Alignment.End,render:e=>i.createElement("div",C()({},e,{style:s.container}),n()(w.c,{},void 0,n()(M.Z,{value:t,style:s.input,disabled:a,placeholder:u.formatMessage({id:"spaceSubscriptionPaymentForm.vatCountryCode.placeholder",defaultMessage:"VAT/GST number"}),onChange:p}))),disableTooltip:!d,renderTooltip:()=>d}),n()("div",{style:s.subtitle},void 0,n()(c.FormattedMessage,{id:"spaceSubscriptionBilling.vatCountryCode.subtitle",defaultMessage:"Please include your country code"}))):n()("div",{"data-testid":"empty-div",style:s.whiteSpace})}function P(){const e=(0,r.O7)(),[t]=(0,u.r5)((async()=>{const t=await m.getAvailableCountries(e,{});return"success"===t.type?t.data.countries:"failed"===t.type?[]:void(0,p.t1)(t)}),[e]);return t.value}function x(e){window.__c={n:"SpaceSubscriptionBillingInfoForm"};const{paymentMethods:t}=e,o=(0,r.O7)(),a=P(),l=(0,i.useMemo)((()=>(0,d.debounce)((async()=>{await y.W_(o)}),3e3)),[o]),[u,p,m,h,C,S,w]=(0,s.VK)((()=>{let e,t,o,a,n=!1,d=!1;const{state:i}=v.Z;return i.open&&(e=i.temporaryAddress,n=i.type===v.U.TargetSpace,t=i.temporaryPaymentMethod,o=i.payButtonState,a=i.temporaryVatCode,d=i.vatApplicable),[(0,g.mq)(),e,n,t,a,o,d]}),[]),M=(0,i.useCallback)((async e=>{if(v.Z.state.open&&(v.Z.setAddressField(e),await l(),a)){const e=a.find((e=>e.countryCode===(null==p?void 0:p.country)));e&&v.Z.update((t=>({...t,vatApplicable:Boolean(e.vatApplicable)})))}}),[p,a,l]),A=(0,i.useCallback)((async e=>{v.Z.update((t=>({...t,temporaryVatCode:e}))),await l()}),[l]);return p&&h&&S?n()("div",{},void 0,n()(b.k,{paymentMethods:t,temporaryPaymentMethod:h,payButtonState:S,address:p,updateAddress:M}),n()(f.J,{address:p,availableCountries:a,shouldShowBusinessName:u,updateAddress:M}),n()(F,{onChange:A,disabled:m,tooltip:m?n()(c.FormattedMessage,{id:"spaceSubscriptionPaymentForm.billingInformation.disabledVatTooltip",defaultMessage:"You can add a VAT/GST number in the billing tab after upgrading.",description:"Tooltip explaining that VAT input is disabled in the claim and upgrade flow, indicating that it can be added after the claim has completed."}):void 0,temporaryVatCode:C,vatApplicable:w})):null}function B(e){window.__c={n:"BillingSection"};const t=(0,l.yK)((()=>({text:{color:"var(--text-secondary-dark, #7F7F7F)",fontSize:12,fontWeight:500,marginBottom:12}})),[]);return n()("div",{},void 0,n()("div",{style:t.text},void 0,e.title),e.children)}},10644:(e,t,o)=>{o.d(t,{Z:()=>u});var a=o(77094),n=o.n(a),d=(o(67294),o(83355)),i=o(5366),r=o(64369),s=o(27386);class l extends d.Z{renderComponent(){return n()(s.Z,{},void 0,n()(r.Z,{isSmall:!0,style:{textAlign:"center"}},void 0,n()(i.FormattedMessage,{id:"spaceSubscriptionPlans.offlineMessage",defaultMessage:"Please go online to manage your plan."})))}}l.displayName="SpaceSubscriptionPlansOfflineMessage";const u=l},23855:(e,t,o)=>{o.d(t,{k:()=>h});var a=o(77094),n=o.n(a),d=o(86664),i=o(67294),r=o(81954),s=o(97880),l=o(62216),u=o(27832),p=o(6825);function c(e){window.__c={n:"AddressElementWrapper"};const{address:t,updateAddress:o}=e,a=(0,i.useCallback)((e=>{const{name:t,address:a}=e.value;o({name:t,addressLine1:a.line1,addressLine2:a.line2??void 0,city:a.city,state:a.state,zipCode:a.postal_code,country:a.country})}),[o]);return n()(d.AddressElement,{options:{mode:"billing",defaultValues:{name:null==t?void 0:t.name,address:{line1:null==t?void 0:t.addressLine1,line2:null==t?void 0:t.addressLine2,city:null==t?void 0:t.city,state:null==t?void 0:t.state,postal_code:null==t?void 0:t.zipCode,country:null==t?void 0:t.country}}},onChange:a})}var m=o(24405),y=o(8848),g=o(3779),v=o(82990),f=o(5366);function b(e){window.__c={n:"CardElementWrapper"};const{paymentMethods:t,temporaryPaymentMethod:o,payButtonState:a}=e,i=(0,m.yK)((e=>({container:{backgroundColor:e.cardContentBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBorder,borderRadius:3,padding:"5px 5px 5px 10px"},header:{display:"flex",alignItems:"center",marginBottom:6,fontSize:12,fontWeight:v.Z.fontWeight.semibold,color:e.mediumTextColor,justifyContent:"space-between",paddingTop:20},iconWrapper:{display:"flex",gap:5},icon:{width:23},stripeBase:{iconColor:e.blueColor,color:e.regularTextColor,fontFamily:v.Z.baseFontFamily.sans,fontSmoothing:"antialiased",fontSize:"14px","::placeholder":{color:e.lightTextColor},lineHeight:"2em"},stripeComplete:{iconColor:e.blueColor},stripeInvalid:{color:y.ZP.red,iconColor:y.ZP.red}})),[]);if("credit_card"!==o)return null;const r=1===t.length&&"credit_card"===t[0];return n()("div",{},void 0,n()("label",{style:i.header},void 0,n()(f.FormattedMessage,{id:"spaceSubscriptionPaymentForm.paymentInformation.header",defaultMessage:"Payment details"}),r?n()("div",{style:i.iconWrapper},void 0,n()("div",{},void 0,g.Z.visa(i.icon)),n()("div",{},void 0,g.Z.mastercard(i.icon)),n()("div",{},void 0,g.Z.amex(i.icon)),n()("div",{},void 0,g.Z.dinersclub(i.icon))):null),n()("div",{style:i.container},void 0,n()(d.CardElement,{options:{disabled:"disabled"===a,hidePostalCode:!0,style:{base:i.stripeBase,complete:i.stripeComplete,invalid:i.stripeInvalid}}})))}function h(e){const{paymentMethods:t,payButtonState:o,temporaryPaymentMethod:a,address:m,updateAddress:y}=e,[g,v]=(0,r.VK)((()=>{var e;return[l.o0(),null===(e=u.default.state.currentUserStore)||void 0===e?void 0:e.getEmail()]}),[]);if("control"===g)return n()(b,{paymentMethods:t,payButtonState:o,temporaryPaymentMethod:a});if("payment_and_address"===g){const e={};return v&&(e.defaultValues={email:v}),n()("div",{style:{display:"flex",flexDirection:"column",gap:24}},void 0,n()(p.wl,{title:"Billed to"},void 0,m&&y?i.createElement(i.Fragment,null,n()(c,{address:m,updateAddress:y}),n()("div",{style:{paddingTop:8,width:"100%"}})):null,n()(d.LinkAuthenticationElement,{options:e})),n()(p.wl,{title:"Payment details"},void 0,n()(d.PaymentElement,{})))}if("payment"===g){const e={};return v&&(e.defaultValues={email:v}),n()("div",{style:{display:"flex",flexDirection:"column",gap:24}},void 0,n()(p.wl,{title:"Billed to"},void 0,n()(d.LinkAuthenticationElement,{options:e})),n()(p.wl,{title:"Payment details"},void 0,n()(d.PaymentElement,{})))}(0,s.t1)(g)}},80366:(e,t,o)=>{o.d(t,{s:()=>i,c:()=>r});var a=o(77094),n=o.n(a),d=(o(67294),o(24405));function i(e){return{backgroundColor:e.groupedFormBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBorder,borderRadius:3,borderBottomWidth:0}}function r(e){window.__c={n:"FormGroup"};const t=(0,d.yK)((t=>({group:{display:"flex",borderBottomColor:t.groupedFormBorder,borderBottomWidth:1,borderBottomStyle:"solid",alignItems:"center",flex:1,...e.style}})),[e.style]);return n()("div",{style:t.group},void 0,e.children)}}}]);