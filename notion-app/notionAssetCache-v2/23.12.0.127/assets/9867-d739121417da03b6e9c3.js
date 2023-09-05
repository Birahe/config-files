"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9867],{89237:(e,t,i)=>{i.d(t,{F:()=>g});var r=i(77094),n=i.n(r),o=(i(67294),i(480)),a=i(81954),s=i(24405),d=i(32056),l=i(5366),u=i(50906),c=i(21115),p=i(27242),m=i(24006);function g(e){window.__c={n:"ApplyCreditsToggle"};const[t,i]=(0,a.AF)(p.Z),r=(0,s.yK)(f,[]),g=(0,o.O7)(),y=(0,l.useIntl)();return!t.open||e.data.availableCredit<=0||t.type!==p.U.CurrentSpace?null:n()("div",{style:r.toggle,onClick:()=>{!function(e){const{data:t,state:i,setModalState:r,environment:n}=e,o=void 0===i.temporaryUseCreditCents||i.temporaryUseCreditCents===t.availableCredit?0:t.availableCredit;r({...i,temporaryUseCreditCents:o}),u.Jy$(n,{credits:o})}({environment:g,data:e.data,state:t,setModalState:i})}},void 0,n()("div",{style:{marginRight:8}},void 0,n()(l.FormattedMessage,{id:"applyCreditToggle.applyCredit.amount",defaultMessage:"Apply {creditAmount} credit",description:"Whether to apply credit to this subscription. The amount is formatted with currency",values:{creditAmount:(0,d.Dx)({amount:e.data.availableCredit,currency:"dollar",intl:y})}})),n()(m.Z,{on:(0,c.Ry)(e.data,t)===e.data.availableCredit}))}function f(e){return{toggle:{cursor:"pointer",fontSize:14,color:e.regularTextColor,display:"flex",justifyContent:"space-between",marginTop:14,marginBottom:7}}}},18168:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(77094),n=i.n(r),o=(i(67294),i(24405)),a=i(64921);function s(e){window.__c={n:"SegmentedItemView"};const{isFirst:t,isLast:i,isSelected:r,item:s,children:d,colors:l,onClick:u}=e,{isDisabled:c}=s,p=(0,o.yK)((e=>{const n=(null==l?void 0:l.selectedOutline)??e.blueColor,o=(null==l?void 0:l.unselectedOutline)??e.accentColors.gray[100];return{SegmentedItem:{alignItems:"center",background:r?null==l?void 0:l.selectedBackground:void 0,borderBottomLeftRadius:t?3:0,borderBottomRightRadius:i?3:0,borderColor:r?n:o,borderStyle:"solid",borderTopLeftRadius:t?3:0,borderTopRightRadius:i?3:0,borderWidth:1,cursor:c?void 0:"pointer",display:"flex",flexBasis:"50%",marginLeft:t?0:-1,padding:0,userSelect:"none",zIndex:r?10:0},Inner:{borderBottomLeftRadius:t?2:0,borderBottomRightRadius:i?2:0,borderColor:r?n:"transparent",borderStyle:"solid",borderTopLeftRadius:t?2:0,borderTopRightRadius:i?2:0,borderWidth:1,display:"flex",flexDirection:"column",height:"100%",justifyContent:"center",padding:"12px 20px",textAlign:"center",width:"100%"}}}),[null==l?void 0:l.selectedBackground,null==l?void 0:l.selectedOutline,null==l?void 0:l.unselectedOutline,t,i,r,c]);return n()(a.Z,{ariaLabel:s.ariaLabel,ariaPressed:r,onClick:()=>{u&&u(s.key)},style:p.SegmentedItem,disabled:c},void 0,n()("div",{style:p.Inner},void 0,d))}function d(e){window.__c={n:"SegmentedButton"};const{items:t=[],value:i,onChange:r,colors:a}=e,d=(0,o.yK)((e=>({SegmentedButton:{background:e.cardContentBackground,display:"flex",width:"100%"}})),[]);return 0===t.length?null:n()("div",{style:d.SegmentedButton},void 0,t.map(((e,o)=>n()(s,{isFirst:0===o,isLast:o===t.length-1,isSelected:e.key===i,item:e,colors:a,onClick:r},e.key,e.render()))))}},35548:(e,t,i)=>{i.d(t,{e:()=>y,n:()=>v});var r=i(77094),n=i.n(r),o=(i(67294),i(24405)),a=i(32056),s=i(47425),d=i(97880),l=i(82990),u=i(5366),c=i(21115),p=i(89237),m=i(61519),g=i(68785),f=i(1063);function y(e){window.__c={n:"SpaceSubscriptionOrderSummary"};const{state:t,data:i,promo:r}=e,a=(0,o.yK)((e=>({container:{display:"flex",flexDirection:"column",gap:16},header:{fontSize:16,color:e.regularTextColor,fontWeight:l.Z.fontWeight.semibold,marginBottom:11},couponLink:{fontSize:12}})),[]),s=!t.onlyShowAddOn,d=void 0!==t.addOnFeature;return n()("div",{style:a.container},void 0,n()("label",{style:a.header},void 0,n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.header",defaultMessage:"Order summary"})),s?n()(S,{state:t,data:i,isAddOnFeature:!1}):null,d?n()(S,{state:t,data:i,isAddOnFeature:!0}):null,c.Fu(t.subscriptionTier)&&n()(f.X,{tier:t.subscriptionTier}),0!==i.availableCredit&&n()(p.F,{data:i}),n()(m.Z,{size:1}),n()(h,{state:t,data:i,promo:r,style:{marginBottom:8}}),n()(b,{state:t,data:i,promo:r}))}function b(e){window.__c={n:"OrderTotal"};const{state:t,data:i,promo:r}=e,{payAmount:a}=c.uN({subscriptionTier:t.subscriptionTier,promo:r,data:i,addOnFeature:t.addOnFeature,onlyShowAddOn:t.onlyShowAddOn,taxAmount:t.taxAmount,calculatingTax:t.calculatingTax,billingInterval:t.temporaryBillingInterval??"year",coupon:t.coupon}),s=(0,o.yK)((e=>({name:{fontSize:16,color:e.regularTextColor},price:{fontSize:20,lineHeight:"20px"}})),[]);return n()(v,{lineItem:{price:a,type:"standard",name:n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeOrderSummary.totalForToday",defaultMessage:"Total for today"})},nameStyle:s.name,priceStyle:s.price})}function h(e){window.__c={n:"OrderBreakdown"};const{state:t,data:i,promo:r,style:o}=e,{lineItems:a}=c.uN({subscriptionTier:t.subscriptionTier,promo:r,data:i,addOnFeature:t.addOnFeature,onlyShowAddOn:t.onlyShowAddOn,taxAmount:t.taxAmount,calculatingTax:t.calculatingTax,billingInterval:t.temporaryBillingInterval??"year",coupon:t.coupon}),s=a.map((e=>n()(v,{lineItem:e},`${e.name}:${e.price}:${e.type}`)));return n()("div",{style:o},void 0,s)}function v(e){window.__c={n:"LineItem"};const{lineItem:t,nameStyle:i,priceStyle:r,showZeroPrice:s}=e,d=(0,o.yK)((e=>({container:{marginTop:24},itemContainer:{display:"flex",justifyContent:"space-between",alignItems:"center",lineHeight:1,minHeight:18},name:{fontSize:12,color:e.mediumTextColor,...i||void 0},price:{fontSize:12,color:"promotion"===t.type?"#53A83F":e.regularTextColor,...r||void 0},caption:{fontSize:12,color:e.mediumTextColor},captionContainer:{display:"flex",flexDirection:"column"}})),[t,i,r]),l=(0,u.useIntl)(),c=t.price??0,p=void 0!==t.price&&s,m=c>0||p?(0,a.Dx)({amount:c,currency:"dollar",intl:l}):"—";return n()("div",{style:d.itemContainer},void 0,n()("div",{style:d.captionContainer},void 0,n()("span",{style:d.name},void 0,t.name),t.subtitle&&n()("span",{style:d.caption},void 0,t.subtitle)),"calculating"===t.type?n()(g.Z,{}):n()("span",{style:d.price},void 0,m))}function S(e){window.__c={n:"SpaceSubscriptionGrossOrder"};const{state:t,data:i,isAddOnFeature:r}=e,p=(0,u.useIntl)(),m=function(e,t){const{subscriptionTier:i}=e;if(t)return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.ai.addOn",defaultMessage:"Notion AI",description:"Line item shown when summarizing plan upgrade"});if((0,s.QM)(i)||(0,s.iJ)(i))return;switch(i){case"personal":return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.singlePlayerPlusPlan",defaultMessage:"Plus plan with a 1-member limit",description:"Line item shown when summarizing plan upgrade"});case"plus":case"team":return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.plusPlan",defaultMessage:"Plus plan",description:"Line item shown when summarizing plan upgrade"});case"business":return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.businessPlan",defaultMessage:"Business plan",description:"Summarizes the business plan type a user is trying to upgrade to."});case"enterprise":return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.enterprisePlan",defaultMessage:"Enterprise plan"});default:(0,d.t1)(i)}}(t,r),g=function(e,t,i,r){const{subscriptionTier:o,addOnFeature:a,coupon:l}=e,p=c.GD(e.temporaryBillingInterval),m=c.su(t);let g;if(r&&void 0!==a){let t=0;"ai_fifty_percent"===l&&("month"===e.temporaryBillingInterval?t-=500:t-=400),g=c.v3({addOnFeature:a,billingInterval:p,quantity:1,getMonthlyPrice:!0,intl:i,additionalAmount:t}).formattedTotal}else{if((0,s.QM)(o)||(0,s.iJ)(o))return null;g=c._B({subscriptionTier:o,intl:i})[p]}switch(p){case"year":return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedYearly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed yearly",values:{br:n()("br",{}),price:g,numberOfMembers:m}});case"month":return n()(u.FormattedMessage,{id:"spaceSubscriptionUpgradeModal.orderSummary.planSubtitle.billedMonthly",defaultMessage:"{price} / member / month × {numberOfMembers, plural, one {# member} other {# members}}{br}Billed monthly",values:{br:n()("br",{}),price:g,numberOfMembers:m}});default:(0,d.t1)(p)}}(t,i,p,r),f=c.su(i),{planAmount:y}=c.ZT({subscriptionTier:t.subscriptionTier,memberCount:f,isAddOnFeature:r,addOnFeature:t.addOnFeature,billingInterval:t.temporaryBillingInterval??"year",coupon:t.coupon}),b=(0,o.yK)((e=>({container:{display:"flex",justifyContent:"space-between"},item:{},title:{fontSize:14,fontWeight:l.Z.fontWeight.medium,marginBottom:4},subtitle:{color:e.mediumTextColor,fontSize:12},price:{fontSize:14}})),[]);return n()("div",{style:b.container},void 0,n()("div",{style:b.item},void 0,n()("div",{style:b.title},void 0,m),n()("div",{style:b.subtitle},void 0,g)),n()("div",{style:b.price},void 0,(0,a.Dx)({amount:y,currency:"dollar",intl:p})))}},1063:(e,t,i)=>{i.d(t,{X:()=>c});var r=i(77094),n=i.n(r),o=(i(67294),i(480)),a=i(24405),s=i(5366),d=i(50906),l=i(8323),u=i(42402);function c(e){window.__c={n:"StartupCouponInlineTextLink"};const t=(0,o.O7)(),i=(0,a.yK)((()=>({couponLink:{fontSize:12}})),[]);return n()(u.Z,{href:"https://notionup.typeform.com/to/qYXezfBW",external:!0,style:i.couponLink,onClick:()=>{const i=(0,l.zt)();d.sS1(t,{tier:e.tier,currentTier:i})}},void 0,n()("div",{},void 0,n()(s.FormattedMessage,{id:"startupCouponInlineLink.text",defaultMessage:"Are you a startup?",description:"Shown in our billing/upgrade settings to ask if a user's workspace belongs to a startup."})))}},65734:(e,t,i)=>{i.d(t,{Q:()=>F});var r=i(77094),n=i.n(r),o=i(67294),a=i(480),s=i(81954),d=i(24405),l=i(3791),u=i(47425),c=i(97880),p=i(82990),m=i(5366),g=i(63594),f=i(38755),y=i(62216),b=i(5059),h=i(27832),v=i(27242),S=i(78291),w=i(32617),M=i(45865);function T(e){const{onlyShowAddOn:t,addOnFeature:i,subscriptionTier:r}=e,d=(0,a.O7)(),l=(0,s.VK)((()=>{const e=h.default.state.currentSpaceStore;if(e)return(0,f.rn)(d,e)}),[d]),u=(0,s.VK)((()=>!g.Z.state&&t&&"ai"===i),[t,i]);if(!l)return null;if(t&&i)switch(i){case"ai":return o.createElement(o.Fragment,null,u&&o.createElement(o.Fragment,null,n()(m.FormattedMessage,{id:"addOnUpgrade.confirmation.description.outOfFreeAiResponses",defaultMessage:"Your workspace has used all of its free AI responses.",description:"Shown alongside the Notion AI Add-On upgrade message when the workspace is out of free AI"})," "),n()(m.FormattedMessage,{id:"addOnUpgrade.confirmation.description.admins",defaultMessage:"Go unlimited with Notion AI for all members in {spaceName}.",description:"Shown when a customer has run out of Notion AI and needs to upgrade.",values:{spaceName:l}}));default:(0,c.t1)(i)}switch(r){case"personal":return n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.personal",defaultMessage:"For power users who want to do even more."});case"plus":case"team":case"business":return n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.team",defaultMessage:"Write, plan, and work together in one spot."});case"enterprise":return n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.oneLiner.enterprise",defaultMessage:"Controls and support to run your company."});default:(0,c.t1)(void 0)}}function O(e){const{onlyShowAddOn:t,addOnFeature:i,subscriptionTier:r,type:o}=e;if(o===v.U.TargetSpace)return n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.targetSpace.title.enterprise",defaultMessage:"Claim & Upgrade to Enterprise",description:"Title for billing page for the workspace claim and upgrade flow"});if(t&&i)switch(i){case"ai":return n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.ai.addOn.title",defaultMessage:"Get more Notion AI",description:"Title for ai add-on upgrade flow"});default:(0,c.t1)(i)}return(0,u.QM)(r)||(0,u.iJ)(r)?null:{personal:n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.personal",defaultMessage:"Upgrade to Personal Pro"}),plus:n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.plus",defaultMessage:"Upgrade to Plus",description:"Shown when a user is going to upgrade to a plus plan type."}),team:n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.plus",defaultMessage:"Upgrade to Plus",description:"Shown when a user is going to upgrade to a plus plan type."}),business:n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.upgradeToBusinessDialog.businessPlan",defaultMessage:"Upgrade to Business",description:"Shown when a user is going to upgrade to a business plan type."}),enterprise:n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.enterprise",defaultMessage:"Upgrade to Enterprise"}),team_free:n()(m.FormattedMessage,{id:"subscriptionUpgradeModal.title.teamFree",defaultMessage:"Upgrade to Team Trial"})}[r]}function F(e){const{subscriptionTier:t,onlyShowAddOn:i,addOnFeature:r,type:a}=e,u=function(e){return(0,d.yK)((t=>({primaryTextStyle:{fontWeight:p.Z.fontWeight.bold,fontSize:20,lineHeight:1.1,marginTop:16,marginBottom:6},secondaryTextStyle:{fontWeight:p.Z.fontWeight.regular,fontSize:16,lineHeight:1.4,marginBottom:36,width:e?"70%":void 0,color:t.mediumTextColor}})),[e])}(i),c=(0,d.Fg)(),m=(0,w.mn)(),g=(0,s.VK)((()=>{var e;return(0,y.px)()&&!(0,l.de)(null===(e=S.default.state.data)||void 0===e?void 0:e.addOns)&&m}),[m]);return o.createElement(o.Fragment,null,(0,b.T)({tier:t,mode:c.mode,onlyShowAddOn:i}),g?n()(M.Z,{}):null,n()("div",{style:u.primaryTextStyle},void 0,n()(O,{onlyShowAddOn:i,addOnFeature:r,subscriptionTier:t,type:a})),n()("div",{style:u.secondaryTextStyle},void 0,n()(T,{onlyShowAddOn:i,addOnFeature:r,subscriptionTier:t})))}},95850:(e,t,i)=>{i.d(t,{EO:()=>S});var r=i(77094),n=i.n(r),o=(i(67294),i(81954)),a=i(24405),s=i(3791),d=i(82990),l=i(5366),u=i(33665),c=i(62216),p=i(78291),m=i(42402),g=i(32617),f=i(50346);function y(){return(0,a.yK)((e=>({addOnTermsOfService:{color:e.mediumTextColor,fontSize:12,lineHeight:d.Z.lineHeight.UISmall.desktop,maxWidth:255},discountTermsOfService:{marginTop:16}})),[])}function b(){window.__c={n:"CheckoutTermsOfServiceForAiOnly"};const e=y(),t=(0,g.mn)(),i=(0,o.VK)((()=>{var e;return(0,c.px)()&&!(0,s.de)(null===(e=p.default.state.data)||void 0===e?void 0:e.addOns)&&t}),[t]);return n()("div",{style:e.addOnTermsOfService},void 0,n()(l.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.aiOnly",defaultMessage:"By clicking “Upgrade now” you agree to the <aiTerms>Notion AI Product Specific Terms</aiTerms>.{br}{br}Performance subject to fair use policies.{br}<fairUsePolicies>Learn more</fairUsePolicies>.",description:"Shown as a warning in the confirmation modal before a user subscribes to an add-on so they understand how it affects their subscription.",values:{br:n()("br",{}),fairUsePolicies:e=>n()(m.Z,{href:(0,u.UY)("ai.fairUsePolicies")},void 0,e),aiTerms:e=>n()(m.Z,{href:(0,u.UY)("ai.terms")},void 0,e)}}),i?n()("div",{style:e.discountTermsOfService},void 0,n()(f.Z,{})):null)}function h(){window.__c={n:"CheckoutTermsOfServiceForPlanWithAi"};const e=y();return n()("div",{style:e.addOnTermsOfService},void 0,n()(l.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.planWithAi",defaultMessage:"By clicking “Upgrade now” you agree to the <terms>Notion Terms and Conditions</terms> and <aiTerms>Notion AI Product Specific Terms</aiTerms>.{br}{br}Performance subject to fair use policies.{br}<fairUsePolicies>Learn more</fairUsePolicies>.",description:"Shown as a warning in the confirmation modal before a user subscribes to an add-on so they understand how it affects their subscription.",values:{br:n()("br",{}),terms:e=>n()(m.Z,{href:(0,u.UY)("terms")},void 0,e),fairUsePolicies:e=>n()(m.Z,{href:(0,u.UY)("ai.fairUsePolicies")},void 0,e),aiTerms:e=>n()(m.Z,{href:(0,u.UY)("ai.terms")},void 0,e)}}))}function v(){window.__c={n:"CheckoutTermsOfServiceForPlanOnly"};const e=y();return n()("div",{style:e.addOnTermsOfService},void 0,n()(l.FormattedMessage,{id:"subscriptionUpgradeModal.confirmation.planOnly",defaultMessage:"By clicking “Upgrade now” you agree to the <terms>Notion Terms and Conditions</terms>.",description:"Shown as a warning in the confirmation modal before a user upgrades their plan so they understand how it affects their subscription.",values:{terms:e=>n()(m.Z,{href:(0,u.UY)("terms")},void 0,e)}}))}function S(e){const{addOnFeature:t,onlyShowAddOn:i}=e;return n()("ai"===t?i?b:h:v,{})}},50346:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(77094),n=i.n(r),o=(i(67294),i(24405)),a=i(5366),s=i(82990),d=i(33665),l=i(42402);const u=function(){window.__c={n:"AddOnDiscountMessage"};const e=(0,o.yK)((e=>({discountDescription:{alignItems:"center",marginBottom:36,color:e.mediumTextColor,fontSize:12,lineHeight:s.Z.lineHeight.UISmall.desktop}})),[]);return n()("div",{style:e.discountDescription},void 0,n()(a.FormattedMessage,{id:"spaceSubscriptionSettings.orderOptions.addOnsSection.discountMessage",description:"Description of the discount they're eligible if they bundle Notion AI with a paid plan.",defaultMessage:"Get an additional <bold>50% off Notion AI</bold> for the next 3 months with a paid plan. <terms>See details.</terms>",values:{bold:e=>n()("b",{},void 0,e),terms:e=>n()(l.Z,{href:(0,d.UY)("terms.discounts.ai.summer.2023")},void 0,e)}}))}}}]);