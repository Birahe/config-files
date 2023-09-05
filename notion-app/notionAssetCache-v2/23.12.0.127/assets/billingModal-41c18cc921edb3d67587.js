"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[105],{88625:(e,t,o)=>{o.r(t),o.d(t,{SpaceSubscriptionUpdatePaymentMethodModal:()=>w});var a=o(77094),n=o.n(a),i=o(86664),r=o(67294),d=o(480),s=o(81954),p=o(24405),l=o(8848),c=o(59730),u=o(97880),m=o(82990),g=o(5366),y=o(47307),h=o(21325),b=o(16100),f=o(21115),v=o(27832),C=o(45407),S=o(42922),M=o(63296),P=o(64369);function w(e){return window.__c={n:"SpaceSubscriptionUpdatePaymentMethodModal"},n()(i.Elements,{stripe:(0,b.getStripe)()},void 0,r.createElement(k,e))}function k(e){window.__c={n:"SpaceSubscriptionUpdatePaymentMethodModalStripeConsumer"};const[t,o,a]=(0,s.AF)(void 0,C.Z),l=(0,i.useStripe)(),m=(0,i.useElements)(),[h,b]=r.useState(!1),[v,w]=r.useState(void 0),k=(0,d.O7)(),x=(0,g.useIntl)(),U=r.useCallback(((e,n)=>{t.paymentRequest||(o({...t,paymentRequest:e,supportsApplePay:Boolean(n&&n.applePay)}),a.addPaymentOption("native_payment_platform"))}),[o,a,t]);r.useEffect((()=>{if(l){const t=l.paymentRequest({country:"US",currency:"usd",total:{label:x.formatMessage({id:"spaceSubscriptionUpdatePaymentMethod.applePay.total.label",defaultMessage:"Notion - You will be charged on a recurring basis"}),amount:0}});t.canMakePayment().then((e=>{e&&U(t,e)})),t.on("token",(t=>{B({environment:k,spaceStore:e.spaceStore,stripeToken:t.token.id,customerData:e.customerData,onComplete:o=>{t.complete(o?"success":"fail"),e.onComplete()}})}))}}),[l,e,x,k,U]);const D=f.zt(t.availablePaymentMethods),E=(0,p.yK)(_,[]);return h?n()("div",{style:E.container},void 0,n()("div",{style:E.header},void 0,n()(g.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.update.header",defaultMessage:"Update credit card"})),n()("div",{style:E.cardContainer},void 0,n()(i.CardElement,{options:{hidePostalCode:!0}})),v&&n()(P.Z,{isMultiline:!1,style:E.error},void 0,v),n()("div",{style:E.upgradeButtonContainer},void 0,n()(S.Z,{style:E.upgradeButton,onClick:()=>async function(e){const{stripe:t,elements:o,environment:a,spaceStore:n,customerData:r,onComplete:d,setError:s}=e;if(!t||!o)return;const p=o.getElement(i.CardElement);if(!p)return;const l=await t.createToken(p);!l.error&&l.token?await B({environment:a,spaceStore:n,stripeToken:l.token.id,customerData:r,onComplete:d}):l.error&&s(l.error.message)}({stripe:l,elements:m,environment:k,spaceStore:e.spaceStore,customerData:e.customerData,onComplete:e.onComplete,setError:w})},void 0,n()(g.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.creditCard.updateButton",defaultMessage:"Update"})))):n()("div",{style:E.container},void 0,n()("div",{style:E.header},void 0,n()(g.FormattedMessage,{id:"spaceSubscriptionUpdatePaymentMethod.update.header",defaultMessage:"Update payment method"})),n()("div",{style:E.optionGroup},void 0,D.map(((o,a)=>{let{type:i,title:r}=o;return n()("div",{onClick:()=>async function(e){const{customerData:t,newPaymentMethod:o,setCreditCardSelected:a,paymentRequest:i}=e;if("credit_card"===o){if(t.isSubscribed&&"send_invoice"===t.billing){if(!(await y.confirmUserAction({message:n()("span",{},void 0,n()(g.FormattedMessage,{defaultMessage:"Update to automatic billing?",id:"spaceSubscriptionUpdatePaymentMethod.invoiceToCreditCard.confirmMessage",description:"Shown in a dialog to confirm changing the billing method from invoice to automatic"})),description:n()("span",{},void 0,n()(g.FormattedMessage,{defaultMessage:"Your credit card will be charged automatically for future billing events. Invoices will no longer be sent to your billing email, but can be found in the Billing section of your Notion dashboard.",id:"spaceSubscriptionUpdatePaymentMethod.invoiceToCreditCard.confirmDescription",description:"Shown in a dialog to confirm changing the billing method from invoice to automatic"}))})))return}a(!0)}else{if("invoice"===o)throw new c.XV("You cannot select this payment collection method in the app. Please reach out to support.",{type:"collection_method_not_allowed"});"native_payment_platform"===o?i&&i.show():(0,u.t1)(o)}}({customerData:e.customerData,newPaymentMethod:i,paymentRequest:t.paymentRequest,setCreditCardSelected:b})},i,n()(M.Z,{style:{...E.option,...a!==D.length-1?E.optionBorder:void 0}},void 0,r))}))))}async function B(e){const{environment:t,spaceStore:o,stripeToken:a,customerData:n,onComplete:i}=e,{currentUserStore:r}=v.default.state,d=null!=r&&r.isDefined()?r.getEmail():void 0,s=n.billingEmail||d;if(!s)throw new Error("No billing email found.");try{await h.Mg({environment:t,spaceStore:o,paymentData:{type:"stripeToken",value:a},billingEmail:s,from:"space_settings-billing_tab-update_credit_card"}),i(!0)}catch{i(!1)}}function _(e){return{container:{width:500,background:e.popoverBackground,padding:30,borderRadius:3},optionGroup:{borderRadius:"2px",background:e.groupedFormBackground,border:"1px solid",borderColor:e.groupedFormBorder},option:{display:"flex",justifyContent:"flex-start",border:"none",height:void 0,paddingTop:"15px",paddingBottom:"15px"},optionBorder:{borderBottom:"1px solid",borderBottomColor:e.groupedFormBorder},header:{fontSize:18,marginBottom:16,fontWeight:m.Z.fontWeight.medium},cardContainer:{backgroundColor:e.groupedFormBackground,borderWidth:1,borderStyle:"solid",borderColor:e.groupedFormBackground,padding:"10px",marginTop:"10px",marginBottom:"10px"},upgradeButtonContainer:{width:"100%",justifyContent:"flex-end",display:"flex"},upgradeButton:{marginTop:"20px"},error:{marginTop:8,color:l.ZP.red}}}},45407:(e,t,o)=>{o.d(t,{Z:()=>d});var a=o(96486),n=o.n(a),i=o(49085);class r extends i.default{getInitialState(){return{availablePaymentMethods:["credit_card"],paymentRequest:void 0,supportsApplePay:!1}}isPaymentOptionAvailable(e){return this.state.availablePaymentMethods.includes(e)}addPaymentOption(e){const t=n().uniq([...this.state.availablePaymentMethods,e]);this.setState({...this.state,availablePaymentMethods:t})}}const d=r}}]);