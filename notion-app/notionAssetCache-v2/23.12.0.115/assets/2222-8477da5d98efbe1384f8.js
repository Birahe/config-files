"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[2222],{51582:(e,t,n)=>{n.d(t,{w:()=>v});var i=n(80984),o=n(64002),s=n(5366),a=n(50906),r=n(47307),c=n(95477),l=n(68821),d=n(71935),u=n(46190),g=n(47593),p=n(54642),h=n(92625),m=n(15356);const f=(0,s.defineMessages)({authenticatingWithAsana:{id:"asanaActions.authenticatingWithAsana.loadingMessage",defaultMessage:"Authenticating with Asana…"},titleMessage:{defaultMessage:"Asana login",id:"asanaActions.loginWithAsanaPopupModal.title"}});async function v(e){const{environment:t,requestStore:n}=e,s=(0,d.eC)(t);let v=(0,i.s1)(c.Z.domainBaseUrl,{authType:s,userId:t.currentUser.id});v=s.redirectToAuth?v:await(0,d.HU)(t,v);const S=await m.M(t,{width:580,height:800,url:v,titleMessage:f.titleMessage});if(!S)return;const y=o.Qc(S);if(!y.query.code||!y.query.state)return;h.j({message:f.authenticatingWithAsana});const b=await p.authWithAsana(t,{code:y.query.code,encryptedState:y.query.state});"failed"===b.type?(console.error(b.error),r.showError(b),h.x()):(a.L3B(t,{integration_name:"asana"}),await n.refresh(),u.Z.setState({open:!0}),(0,l.c)()||g.Z.setState({open:!0}),h.x())}},22711:(e,t,n)=>{n.d(t,{LN:()=>s,C:()=>a,Ow:()=>r,Lm:()=>c,DP:()=>l});var i=n(50906),o=n(54642);async function s(e,t){const n=await o.getConnectedAppsStatus(e,{spaceId:t});if("failed"===n.type){const e=n.error;return console.error(e),{drive:[],evernote:void 0,trello:void 0,asana:void 0,confluence:void 0}}return n.data}async function a(e,t){await o.disconnectTrello(e,{}),await t.refresh(),i.qJZ(e,{integration_name:"trello"})}async function r(e,t){await o.disconnectAsana(e,{}),await t.refresh(),i.qJZ(e,{integration_name:"asana"})}async function c(e,t){await o.disconnectEvernote(e,{}),await t.refresh(),i.qJZ(e,{integration_name:"evernote"})}async function l(e,t,n){await o.disconnectConfluence(e,{spaceId:n}),await t.refresh()}},83805:(e,t,n)=>{n.d(t,{e:()=>S});var i=n(80984),o=n(64002),s=n(5366),a=n(50906),r=n(47307),c=n(95477),l=n(68821),d=n(71935),u=n(90365),g=n(47593),p=n(92083),h=n(54642),m=n(92625),f=n(15356);const v=(0,s.defineMessages)({authenticatingWithEvernote:{id:"evernoteActions.authenticatingWithEvernote.loadingMessage",defaultMessage:"Authenticating with Evernote…"},titleMessage:{defaultMessage:"Evernote login",id:"evernoteActions.loginPopupModal.title"}});async function S(e){const{environment:t,requestStore:n}=e,s=(0,d.eC)(t);let S=(0,i.Qp)(c.Z.domainBaseUrl,{authType:s,userId:t.currentUser.id});S=s.redirectToAuth?S:await(0,d.HU)(t,S);const y=await f.M(t,{width:580,height:700,url:S,titleMessage:v.titleMessage});if(!y)return;const b=o.Qc(y),w=b.query.oauth_token,M=b.query.oauth_verifier;if(!w||!M)return;m.j({message:v.authenticatingWithEvernote});const C=await h.authWithEvernote(t,{requestToken:w,verifier:M});if("failed"===C.type)return console.error(C.error),r.showError(C),void m.x();a.L3B(t,{integration_name:"evernote"}),await n.refresh(),u.Z.setState({open:!0}),(0,l.c)()?p.Z.setState({...p.Z.state,open:!0,currentTab:"imports",highlightedSetting:void 0,defaultSubtab:void 0}):g.Z.setState({open:!0}),m.x()}},52192:(e,t,n)=>{n.d(t,{M:()=>y});var i=n(80984),o=n(64002),s=n(5366),a=n(50906),r=n(47307),c=n(95477),l=n(68821),d=n(71935),u=n(47593),g=n(82066),p=n(92083),h=n(54642),m=n(84908),f=n(92625),v=n(15356);const S=(0,s.defineMessages)({authenticatingWithTrello:{id:"trelloActions.authenticatingWithTrello.loadingMessage",defaultMessage:"Authenticating with Trello…"},titleMessage:{defaultMessage:"Trello login",id:"trelloActions.loginPopupModal.title"}});async function y(e){const{environment:t,requestStore:n}=e,s=(0,d.eC)(t);let y=(0,i.ae)(c.Z.domainBaseUrl,{authType:s,userId:t.currentUser.id,isElectronDevice:t.device.isElectron});if(y=s.redirectToAuth?y:await(0,d.HU)(t,y),t.device.isElectron)return void m.openExternalUrl(y);const b=await v.M(t,{width:580,height:700,url:y,titleMessage:S.titleMessage});if(!b)return;const w=o.Qc(b),M=w.query.oauth_token,C=w.query.oauth_verifier;if(!M||!C)return;f.j({message:S.authenticatingWithTrello});const A=await h.authWithTrello(t,{requestToken:M,verifier:C});"failed"===A.type?(console.error(A.error),r.showError(A),f.x()):(a.L3B(t,{integration_name:"trello"}),await n.refresh(),g.Z.setState({open:!0}),(0,l.c)()?p.Z.setState({...p.Z.state,open:!0,currentTab:"imports",highlightedSetting:void 0,defaultSubtab:void 0}):u.Z.setState({open:!0}),f.x())}},11106:(e,t,n)=>{n.d(t,{Z:()=>$});var i=n(77094),o=n.n(i),s=n(97464),a=n.n(s),r=n(67294),c=n(83355),l=n(480),d=n(81954),u=n(8848),g=n(3779),p=n(27006),h=n(21202),m=n(29369),f=n(5366),v=n(94507),S=n(65452),y=n(28020),b=n(98165),w=n(38755),M=n(27832),C=n(85057),A=n(12318),P=n(86671),Z=n(52275),k=n(12508),I=n(31278),T=n(76798),x=n(14694);class E extends P.Z{renderComponent(){const{nestingLevel:e}=this.props;return r.createElement(Z.Z,a()({},this.props,{title:o()(x.Z,{childrenStyle:E.sidebarChildrenStyle,left:this.renderLeftCheckbox(),icon:this.renderIcon(),style:{marginLeft:8*e}},void 0,this.renderTitle())}))}renderLeftCheckbox(){return o()(k.Z,{size:16,checked:this.props.isChecked,onClick:this.props.onClick})}renderIcon(){const{store:e,isMobile:t}=this.props,n=e.getIcon();return o()(I.Z,{disabled:!0,icon:n,title:void 0,isEmptyPage:e.isEmptyPage(),size:t?24:20,pageIconStyle:{fill:this.theme.mediumIconColor}})}renderTitle(){return o()(T.ZP,{store:this.props.store})}}E.sidebarChildrenStyle={display:"flex",alignItems:"center"};const _=E;var B=n(68894),D=n(68785),L=n(9342),N=n(44532),F=n(72495),q=n(59054),U=n(97880),W=n(49044),z=n(60709),O=n(78140),G=n(43765),R=n(11470),j=n(78948);function H(e){window.__c={n:"OauthPageSearchResults"};const{spaceId:t,onSelectPage:n,query:i,source:s,findSelectedBlockAncestorId:c}=e,d=(0,l.O7)();let u=null;const[{status:g,value:m}]=(0,q.r5)((async()=>await W.D7({environment:d,query:i,limit:10,requireEditPermissions:!0,spaceId:t,excludeTemplates:!0,source:s,boostRecentlyViewedPages:!1})),[d,i,t,s],{debounce:W.vp});if("idle"===g||"pending"===g)window.__c={n:"getLoadingResults"},u=o()(F.Z,{},void 0,o()(j.Z,{}));else{const e=((null==m?void 0:m.results)||[]).map((e=>{let{id:t}=e;const i=new C.G(d,{table:h.iU,id:t});return function(e){const{store:t,environment:n,alreadySelectedAncestorId:i,onSelectPage:s}=e;if(i&&i===t.id)return{key:t.id,action:()=>{},render:e=>r.createElement(R.Z,a()({},e,{store:t,hidePath:!0,disabled:!0,style:{opacity:.5},caption:o()(f.FormattedMessage,{id:"oauthPageSearchResults.disabledResult.bySelf.message",defaultMessage:"Already added"})}))};if(i){const e=new C.G(n,{table:h.iU,id:i});return{key:t.id,action:()=>{},render:n=>r.createElement(R.Z,a()({},n,{store:t,hidePath:!0,disabled:!0,style:{opacity:.5},caption:o()(f.FormattedMessage,{id:"oauthPageSearchResults.disabledResult.byAncestor.message",defaultMessage:"Already added via {ancestorPageName}",values:{ancestorPageName:o()(T.ZP,{store:e,style:{display:"inline"}})}})}))}}const c=t.getRole();return c&&p.zz(c)?{key:t.id,action:()=>s(t.id),render:e=>r.createElement(R.Z,a()({store:t,hidePath:!1},e))}:void 0}({store:i,alreadySelectedAncestorId:c(i),environment:d,onSelectPage:n})})).filter(U.$K);u=0===e.length?(window.__c={n:"getEmptyResults"},o()(F.Z,{},void 0,o()(G.Z,{title:o()(f.FormattedMessage,{id:"oauthPageSearchResults.noResults.placeholder",defaultMessage:"No results"})}))):function(e){return window.__c={n:"getPageSearchResults"},o()(L.Z,{type:L.i.Vertical,initialFocus:void 0,sections:[{key:"results",items:e,render:e=>r.createElement(F.Z,e)}]})}(e)}const v={menuType:z.og.Popup};return r.createElement(O.Z,v,u)}class V extends c.Z{constructor(){super(...arguments),this.storeTypes={selectedBlockIdsStore:A.default.of({}),searchStore:A.default.of({open:!1,query:void 0})},this.getPageSection=(e,t,n)=>{const i=n.filter((e=>p.zz(e.getRole()||"none")));return{key:e,render:e=>r.createElement(F.Z,e),items:[this.getPageSectionHeader(t,i),...0===i.length?[this.getEmptyState()]:i.map((e=>this.getPageItem(e,1)))]}},this.getPageItem=(e,t)=>{const{selectedBlockIdsStore:n}=this.stores,{device:i}=this.environment,o=Boolean(n.state[e.id]);return{key:e.id,action:()=>this.handleClickPage(e.id,o),render:n=>r.createElement(_,a()({},n,{isMobile:i.isMobile,store:e,isChecked:o,disabled:!1,nestingLevel:t}))}},this.getPageSectionHeader=(e,t)=>{const{selectedBlockIdsStore:n}=this.stores,i=t.length>0&&t.every((e=>n.state[e.id]));return{key:e,action:()=>this.handleClickSection(t),render:t=>r.createElement(Z.Z,a()({},t,{title:o()(x.Z,{left:o()(k.Z,{onClick:t.onClick,checked:i,size:16}),style:this.getSectionHeaderStyle()},void 0,e)}))}},this.getEmptyState=()=>({key:"empty",action:()=>{},render:e=>r.createElement(Z.Z,a()({},e,{title:o()(x.Z,{style:{fontSize:14,color:this.theme.mediumTextColor,padding:"2px 32px"}},void 0,o()(f.FormattedMessage,{id:"oauthAuthorizationPage.selectPageStep.empty",defaultMessage:"No pages inside"}))}))}),this.handleClickPage=(e,t)=>{const{selectedBlockIdsStore:n}=this.stores;n.setState({...n.state,[e]:!t})},this.handleClickSection=e=>{const{selectedBlockIdsStore:t}=this.stores,n=e.every((e=>t.state[e.id]));t.setState({...t.state,...e.reduce(((e,t)=>(e[t.id]=!n,e)),{})})},this.handleSearchQueryChange=e=>{const t=this.stores.searchStore.state,n=e.length>0;this.stores.searchStore.setState({...t,query:e,open:n})},this.handleSearchCancel=()=>{const e=this.stores.searchStore.state;this.stores.searchStore.setState({...e,open:!1,query:void 0})},this.findSelectedBlockAncestorId=e=>{const{selectedBlockIdsStore:t}=this.stores;if(t.state[e.id])return e.id;const n=b.fJ(e).find((e=>e.table===h.iU&&Boolean(t.state[e.value.id])));return n?n.value.id:void 0}}renderComponent(){const{intl:e}=this.props,{searchStore:t,selectedBlockIdsStore:n}=this.stores,i=(0,y.k_)(this.environment).state;if(!i)return o()(D.Z,{style:{alignSelf:"center"}});const{allSharedPagesStores:s,showWorkspaceSection:c,showTeamSection:l,showSharedSection:d,showPrivateSection:u,showOnlyPrivateSection:p}=i,{currentSpaceViewStore:v,currentSpaceStore:S}=M.default.state;if(!v||!S)return;const b=[];if(l){const e=v.getTeamsStores();b.push(...e.map((e=>[e,e.getTeamPagesStores().filter(K)])))}const A=v.getWorkspacePages().filter(K),P=v.getPrivatePages(this.environment).filter(K),Z=Object.keys(n.state).filter((e=>n.state[e])).map((e=>new C.G(this.environment,{table:h.iU,id:e}))).filter((e=>e.getSpaceId()===S.id&&e.isNavigableBlock()&&!e.isTopLevelPrivatePage({spaceStore:S,environment:this.environment})&&!e.isTopLevelWorkspacePage(S.id)&&!(e.getParentTable()===m.e0)&&!s.some((t=>t.id===e.id)))),k=(0,w.rn)(this.environment,S),I=[];if(Z.length>0&&I.push({key:"manual",render:e=>r.createElement(F.Z,a()({},e,{title:o()(x.Z,{style:this.getSectionHeaderStyle()},void 0,o()(f.FormattedMessage,{id:"oauthAuthorizationPage.selectPagesStep.pagePicker.manuallyAddedPagesSection.title",defaultMessage:"Manually added"})),isTitleUppercase:!0})),items:Z.map((e=>this.getPageItem(e,0)))}),c&&I.push(this.getPageSection("workspace",e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.workspaceSection.title",defaultMessage:"Workspace",description:"This word is used in the same context as the title for the Workspace section of the sidebar."}),A)),l)for(const[o,a]of b){const e=o.id,t=o.getName();e&&void 0!==t&&I.push(this.getPageSection(`team-${e}`,t,a))}if(d&&I.push(this.getPageSection("shared",e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.sharedSection.title",defaultMessage:"Shared",description:"This word is used in the same context as the title for the Shared section of the sidebar."}),s)),u){const t=p?k||"":e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.privateSection.title",defaultMessage:"Private",description:"This word is used in the same context as the title for the Private section of the sidebar."});I.push(this.getPageSection("private",t,P))}const T=this.getSearchIconStyle();return r.createElement(r.Fragment,null,o()(N.GI,{origin:o()(B.ZP,{style:{marginBottom:8},itemMarginLeft:0,itemMarginRight:0,focus:!0,focusAfterAnimation:!0,value:t.state.query||"",onChange:e=>{this.handleSearchQueryChange(e.target.value)},placeholder:e.formatMessage({id:"oauthAuthorizationPage.selectPagesStep.pagePicker.search.placeholder",defaultMessage:"Search for pages in {workspaceName}"},{workspaceName:k}),inputLeft:o()(B.f_,{icon:()=>g.Z.searchThick(T)})}),sameWidthAsOrigin:!0,popupType:N.GI.PopupType.Popup,open:t.state.open,render:()=>o()(H,{spaceId:S.id,onSelectPage:e=>this.handleClickPage(e,!1),query:t.state.query||"",source:"oauth",findSelectedBlockAncestorId:this.findSelectedBlockAncestorId}),onDismiss:this.handleSearchCancel}),o()("div",{style:this.getPageListStyle()},void 0,o()(L.Z,{type:L.i.Vertical,sections:I,initialFocus:void 0})))}getSectionHeaderStyle(){return{textTransform:"uppercase",fontSize:12,fontWeight:600,color:u.ZP.mediumTextColor,padding:"2px 0"}}getPageListStyle(){return{alignItems:"left",width:"100%",height:380,borderWidth:1,borderStyle:"solid",borderColor:u.ZP.contentBorder,borderRadius:4,overflowY:"auto"}}getSearchIconStyle(){return{width:14,height:14,marginLeft:8,marginRight:8,flexGrow:0,flexShrink:0,fill:u.ZP.mediumIconColor}}}function K(e){return e.isDefined()&&"copy_indicator"!==e.getType()}V.displayName="BotAccessPagePicker";const $=function(e){window.__c={n:"BotAccessPagePickerWrapper"};const t=(0,l.O7)(),n=(0,d.VK)((()=>{var e;return null===(e=M.default.state.currentSpaceStore)||void 0===e?void 0:e.id}),[]),i=t.currentUser.id,o=(0,f.useIntl)();return(0,d.VK)((()=>{n&&i&&(S.h({environment:t,spaceId:n,userId:i}),v.I({environment:t,spaceId:n,userId:i}))}),[t,n,i]),r.createElement(V,a()({intl:o},e))}},70578:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(77094),o=n.n(i),s=n(67294),a=n(480),r=n(3779),c=n(5366),l=n(89101),d=n(50906),u=n(33665),g=n(16354),p=n(89728);function h(){const e=(0,a.O7)();return s.createElement(s.Fragment,null,o()(g.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:`${l._j.integrations}/all`,external:!0,onClick:()=>{d.uyp(e,{from:"integration-settings",href:`${l._j.integrations}/all`})}},void 0,o()(p.Z,{icon:r.Z.alias,isSmall:!0,isLightGray:!0},void 0,o()(c.FormattedMessage,{id:"connectionsSettingsLinks.connectionsGallery",defaultMessage:"Browse connections in Gallery",description:"This link, when clicked, takes users to a page where they can create their own public or private connection to external tools."}))),o()(g.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:l._j.myIntegrations,external:!0,onClick:()=>{d.YYl(e,{from:"integration-settings",href:l._j.myIntegrations})}},void 0,o()(p.Z,{icon:r.Z.alias,isSmall:!0,isLightGray:!0},void 0,o()(c.FormattedMessage,{id:"connectionsSettingsLinks.manageConnections",defaultMessage:"Develop or manage integrations",description:"This link, when clicked, takes users to a page where they can create their own public or private connection."}))),o()(g.Z,{style:{display:"flex",marginLeft:-6},className:"notion-print-ignore",href:(0,u.UY)("guides.publicAPI"),external:!0},void 0,o()(p.Z,{icon:r.Z.help,isSmall:!0,isLightGray:!0},void 0,o()(c.FormattedMessage,{id:"connectionsSettingsLinks.helpCenter",defaultMessage:"Learn more about connections",description:"This link, when clicked, will direct the user to the help center."}))))}},92222:(e,t,n)=>{n.d(t,{Z:()=>Pe,O:()=>Ae});var i=n(77094),o=n.n(i),s=n(96486),a=n.n(s),r=n(67294),c=n(83355),l=n(41892),d=n(15070),u=n(74181),g=n(77420),p=n(90468),h=n(90965),m=n(5500),f=n(97880),v=n(5366),S=n(50906),y=n(54642),b=n(51582),w=n(76463),M=n(22711),C=n(47307),A=n(91584),P=n(83805),Z=n(77719),k=n(52192),I=n(761),T=n(95477);var x=n(38755),E=n(34859),_=n(27832),B=n(88632),D=n(30874),L=n(85057),N=n(72087),F=n(78291),q=n(480),U=n(24405),W=n(82990),z=n(74420),O=n(89728),G=n(23189);function R(e){const{apps:t,numberOfConnectedApps:n}=e,i=(0,q.O7)(),[s,a]=(0,r.useState)(!1),c=t.filter((e=>!e.shouldHideInDiscover)),l=c.length>3&&!s,d=s?c:c.slice(0,3);return r.createElement(r.Fragment,null,o()(G.Z,{large:!0,divider:"full"},void 0,o()("div",{style:{display:"flex",justifyContent:"space-between",height:28}},void 0,o()(v.FormattedMessage,{id:"connectionsSettings.discoverNewConnectionsSection.title",defaultMessage:"Discover new connections",description:"Section title for uninstalled connections"}),l&&o()(O.Z,{isBlue:!0,onClick:()=>{s||(a(!0),S.EUq(i,{numberOfConnectedApps:n}))}},void 0,o()(v.FormattedMessage,{id:"connectedAppsSettings.discoverNewAppSection.showAll.label",defaultMessage:"Show all"})))),o()("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:32}},void 0,d.map((e=>"string"==typeof e.logo&&e.onConnect&&o()(j,{appName:e.appName,caption:e.caption,shouldShowNewBadge:e.shouldShowNewBadge,logo:e.logo,onConnect:e.onConnect},e.id))).filter((e=>(0,f.$K)(e)))))}function j(e){window.__c={n:"ConnectedAppsSettingsDiscoverItem"};const{appName:t,caption:n,logo:i,shouldShowNewBadge:s,onConnect:a}=e,r=(0,U.yK)((e=>({card:{display:"flex",flexDirection:"column",width:160},image:{width:32,height:32,borderRadius:3},topRow:{display:"flex",alignItems:"center",marginTop:8},title:{fontWeight:W.Z.fontWeight.medium,fontSize:14},caption:{marginTop:2,fontWeight:W.Z.fontWeight.regular,color:e.mediumTextColor,fontSize:12,maxHeight:72,overflow:"hidden"},button:{marginLeft:-8,marginTop:3}})),[]);return o()("div",{style:r.card},void 0,o()("img",{style:r.image,src:i}),o()("div",{style:r.topRow},void 0,o()("div",{style:r.title},void 0,t),s&&o()(z.Z,{})),o()("div",{style:r.caption},void 0,n),o()("div",{style:r.button},void 0,o()(O.Z,{isBlue:!0,onClick:a},void 0,o()(v.FormattedMessage,{id:"connectedAppSettingsDiscoverItem.connectButton.label",defaultMessage:"Connect"}))))}var H=n(70578),V=n(61519),K=n(68785),$=n(77137),Y=n(18647),J=n(64369),Q=n(27386),X=n(31278),ee=n(40235),te=n(97464),ne=n.n(te),ie=n(81954),oe=n(8848),se=n(60709),ae=n(21115),re=n(12318),ce=n(24736),le=n(11106),de=n(42922),ue=n(52275),ge=n(31945),pe=n(78140),he=n(9342),me=n(63296),fe=n(72495),ve=n(95030);function Se(e){window.__c={n:"UserConnectionsSettingsActionMenu"};const{botId:t,canSelectPageAccess:n,onConnect:i,onDisconnect:s}=e,[a,c]=(0,r.useState)(!1),[l]=(0,r.useState)(new re.default({})),d=(0,ie.VK)((()=>_.default.state.currentSpaceStore),[]),u=(0,q.O7)(),p=(0,q.Fy)(),{data:h}=(0,ie.VK)((()=>F.default.state),[]),m=[];if(n){const e=(h?(0,ae.NM)(h):[]).find((e=>e.botId===t)),n=(null==e?void 0:e.pageIds.reduce(((e,t)=>(e[t]=!0,e)),{}))??{};d&&(a||(l.setState(n),c(!0)),m.push({key:"actions for user guest connections",render:e=>r.createElement(fe.Z,e),items:[{key:"update selected pages",render:(e,i)=>r.createElement(ve.Z,ne()({},e,{onFocus:i.onFocus,disableDefaultClick:!0,renderOrigin:e=>r.createElement(ue.Z,ne()({},e,{title:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.selectPages.label",defaultMessage:"Access selected pages",description:"Menu option to update which workspace pages a guest connection has access to"})})),renderExtension:(e,i)=>{return o()("div",{style:{width:400,padding:20}},void 0,o()(le.Z,{selectedBlockIdsStore:l}),(s={leftText:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.pagePicker.cancel",defaultMessage:"Cancel",description:"Button to cancel updating page permissions for a user-installed connection"}),leftAction:()=>{l.setState(n),i.close()},rightText:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.pagePicker.update",defaultMessage:"Update access",description:"This button, once clicked, updates the pages that a user-installed connection has access to."}),rightAction:()=>{!function(e){const{botId:t,currentSpaceStore:n,environment:i,selectedBlockIdsStore:o,currentAccessedPages:s}=e,a=[],r=[],c=o.get();Object.keys(c).forEach((e=>{s.hasOwnProperty(e)&&!c[e]?a.push(e):!s.hasOwnProperty(e)&&c[e]&&r.push(e)}));const l=L.t1.createChildStore(n,{table:g.cZ,id:t});w.jX({environment:i,currentSpaceStore:n,botStore:l,pages:a}),w.jX({environment:i,currentSpaceStore:n,botStore:l,pages:r,addPermission:!0})}({selectedBlockIdsStore:l,environment:u,currentSpaceStore:d,botId:t,currentAccessedPages:n}),i.close()}},window.__c={n:"renderOptionButtons"},o()("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:24}},void 0,o()(me.Z,{isLarge:!0,onClick:s.leftAction,style:{height:32}},void 0,s.leftText),o()(de.Z,{isLarge:!0,onClick:s.rightAction},void 0,s.rightText))));var s}})),action:()=>{}}]}))}const f=[];return i&&f.push({key:"connect account",render:e=>r.createElement(ue.Z,ne()({},e,{title:o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.connectAccount.label",defaultMessage:"Connect another account",description:"Menu option to connect another third-party account from an installed connection"}),onClick:i})),action:i}),f.push({key:"disconnect account",render:e=>r.createElement(ue.Z,ne()({},e,{title:o()("div",{style:{color:oe.ZP.red}},void 0,o()(v.FormattedMessage,{id:"userConnectionsSettings.actionMenu.disconnectAccount.label",defaultMessage:"Disconnect account",description:"Menu option to disconnect a third-party account from an installed connection"})),onClick:()=>{s()}})),action:()=>s()}),m.push({key:"actions for all user connections",render:e=>r.createElement(fe.Z,e),items:f}),o()(ge.Z,{popupType:p.isMobile?ge.Z.PopupType.SlideUp:ge.Z.PopupType.Popup,renderOrigin:e=>r.createElement(ce.Z,ne()({},e,{isMobile:p.isMobile})),render:()=>o()(pe.Z,{menuType:p.isMobile?se.og.ActionSheet:se.og.Popup},void 0,o()(he.Z,{type:he.i.Vertical,sections:m,initialFocus:void 0}))})}function ye(e){window.__c={n:"UserConnectionsSettingsTable"};const{userConnections:t}=e;return o()(ee.Z,{columns:[{key:"connection",header:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.connectionsColumn.title",defaultMessage:"Connection",description:"Table header for access column in user connections table"}),style:{width:"40%"}},{key:"access",header:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.title",defaultMessage:"Access",description:"Table header for access column in user connections table"}),style:{width:"40%"}},{key:"more",header:void 0,style:{width:"5%"}}],rows:be(t)})}function be(e){const t=[];return e.forEach((e=>{const{account:n,onDisconnect:i}=e;if(Array.isArray(n)){const o=n.map((t=>we({connection:{...e,onDisconnect:()=>{i(t)}},account:t})));t.push(...o)}else t.push(we({connection:e,account:n}))})),t}function we(e){const{account:t,connection:{id:n,appName:i,canSelectPageAccess:s,capabilities:a,logo:r,onConnect:c,onDisconnect:l}}=e,d=void 0!==t&&"string"!=typeof t,u=d?t.accountName:t,g=d?t.accountId:n;return{key:`${n}-${u}`,columns:[o()(Me,{accountName:u,connectionLogo:r,connectionName:i},"connection-title"),a,o()(Se,{botId:g,canSelectPageAccess:s,connectionName:i,onConnect:c,onDisconnect:l},"connection-action-menu")]}}function Me(e){window.__c={n:"ConnectionTitle"};const{accountName:t,connectionLogo:n,connectionName:i}=e;return o()("div",{style:{display:"flex",alignItems:"center",marginRight:12}},void 0,"string"==typeof n?o()("img",{src:n,style:{height:28}}):o()(X.Z,{disabled:!0,icon:n,title:i,isEmptyPage:!1,size:28,isLarge:!0,useInvertedColors:!0}),o()("div",{style:{marginLeft:15}},void 0,o()(J.Z,{},void 0,i),t&&o()(J.Z,{isSmall:!0},void 0,t)))}class Ce extends c.Z{constructor(){super(...arguments),this.storeTypes={requestStore:N.Z},this.loadConnections=async e=>{const{currentSpaceStore:t}=_.default.state;return{guestBotIds:await this.fetchUserGuestBotIds(),connectionStatus:await M.LN(e,null==t?void 0:t.id)}},this.fetchUserGuestBotIds=async()=>{const{currentSpaceStore:e,currentUserStore:t}=_.default.state;if(!e||!t||!F.default.state.data)return[];return(await w.Yw({environment:this.environment,table:p.bx,id:e.id,type:"guest"})).botIds.filter((n=>L.t1.createChildStore(e,{table:g.cZ,id:n}).getCreatedById()===t.id))}}renderComponent(){return B.Z.state.online?o()($.Z,{request:this.environment,performRequest:this.loadConnections,requestStore:this.stores.requestStore,render:(e,t)=>null!=t&&t.connectionStatus?this.renderConnectedAppsSettings(t.guestBotIds):o()("div",{style:Ce.loadingWrapStyle},void 0,o()(K.Z,{}))}):this.renderOfflineMessage()}renderOfflineMessage(){return o()(Q.Z,{},void 0,o()(J.Z,{isSmall:!0,style:{textAlign:"center"}},void 0,o()(v.FormattedMessage,{id:"connectedAppsSettings.offline.message",defaultMessage:"Please go online to manage connecting to apps."})))}renderConnectedAppsSettings(e){const{connected:t,discover:n}=this.getAppsByCategory(e),i=t.length>0;return o()("div",{style:this.getWrapStyle()},void 0,o()(Y.Z,{style:Ce.scrollerStyle,type:E.Z.Y},void 0,i&&r.createElement(r.Fragment,null,o()(G.Z,{large:!0,divider:"full",style:{borderBottom:"none",marginBottom:0}},void 0,o()(v.FormattedMessage,{id:"connectionsSettings.connectionsSection.title",defaultMessage:"My connections",description:"Section title for user integrations/connections tab in settings modal"})),o()(ye,{userConnections:t})),o()("div",{style:{marginTop:i?32:void 0}},void 0,o()(R,{apps:n,numberOfConnectedApps:t.length})),o()(V.Z,{size:32}),o()("div",{style:{marginTop:8}},void 0,o()(H.Z,{}))))}async handleDriveAuth(){S.SOV(this.environment,{integration_name:"google",from:"connected_apps"}),await A.qN(this.environment),await M.LN(this.environment),await this.stores.requestStore.refresh()}handleDisconnectDrive(e){const{intl:t}=this.props;C.showDialog({message:t.formatMessage({id:"connectedAppsSettings.disconnectGoogleDriveModal.message",defaultMessage:"Disconnecting disables file preview on Google Drive files embedded in all of your workspaces. It would not delete your embeds from Notion, so you can re-connect at anytime."}),showCancel:!0,keepFocus:!0,items:[{label:t.formatMessage({id:"connectedAppsSettings.disconnectGoogleDriveModal.disconnectButton.label",defaultMessage:"Disconnect"}),color:"red",onAccept:async()=>{await y.disconnectDrive(this.environment,{googleUserId:e.accountId}),await M.LN(this.environment),await this.stores.requestStore.refresh()}}]})}getAppsByCategory(e){const t=a().groupBy([...this.getExternalIntegrations(),...this.getLegacyConnectedApps()],(e=>e.account&&e.account.length>0?"connected":"discover"));return{connected:[...this.getUserGuestIntegrations(e),...t.connected||[]],discover:t.discover||[]}}shouldShowGoogleDriveLegacyApp(){const{integrations:{state:e}}=D.Z;return!e.some((e=>e.id===m.iK.google_drive.id))}getLegacyConnectedApps(){var e;const{intl:t}=this.props,n=this.stores.requestStore;let i=!1;const{currentSpaceStore:s}=_.default.state,a=null===(e=n.state.result)||void 0===e?void 0:e.connectionStatus,r=(null==a?void 0:a.drive)&&(null==a?void 0:a.drive.length)>0,c=this.shouldShowGoogleDriveLegacyApp();if(c){const e=null==s?void 0:s.getBotSettingsStore().getValue();i=!(0,h.CJ)(e)||Boolean((null==e?void 0:e.integration_approval_statuses)&&e.integration_approval_statuses[u._o])}const d=o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.legacyImporter",defaultMessage:"Can only add pages",description:"A label describing what capabilities a legacy importer connection has. Legacy importers include the Trello and Asana connections"});return[...c&&(i||r)?[{id:"drive",appName:"Google Drive",caption:t.formatMessage({id:"connectedAppsSettings.googleDrive.caption",defaultMessage:"Find and embed your files."}),shouldHideConnectAccount:!i,shouldHideInDiscover:!c,logo:l.Z.images.import.googleDrivePng,account:null==a?void 0:a.drive,capabilities:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.googleDrive",defaultMessage:"Can embed content",description:"A label describing what capabilities the legacy Google Drive connection has"}),canSelectPageAccess:!1,onConnect:()=>this.handleDriveAuth(),onDisconnect:e=>{e&&this.handleDisconnectDrive(e)}}]:[],{id:"evernote",appName:"Evernote",caption:t.formatMessage({id:"connectedAppsSettings.evernote.caption",defaultMessage:"Import notebooks."}),logo:l.Z.images.import.evernotePng,account:null==a?void 0:a.evernote,capabilities:d,canSelectPageAccess:!1,onConnect:()=>P.e({environment:this.environment,requestStore:n}),onDisconnect:()=>M.Lm(this.environment,n)},{id:"trello",appName:"Trello",caption:t.formatMessage({id:"connectedAppsSettings.trello.caption",defaultMessage:"Import your boards."}),logo:l.Z.images.import.trelloPng,shouldHideInDiscover:!0,account:null==a?void 0:a.trello,capabilities:d,canSelectPageAccess:!1,onConnect:()=>k.M({environment:this.environment,requestStore:n}),onDisconnect:()=>M.C(this.environment,n)},{id:"asana",appName:"Asana",caption:t.formatMessage({id:"connectedAppsSettings.asana.caption",defaultMessage:"Import tasks from boards and lists."}),logo:l.Z.images.import.asanaPng,shouldHideInDiscover:!0,account:null==a?void 0:a.asana,capabilities:d,canSelectPageAccess:!1,onConnect:()=>b.w({environment:this.environment,requestStore:n}),onDisconnect:()=>M.Ow(this.environment,n)},...null!=s&&s.id?[{id:"confluence",appName:"Confluence",caption:t.formatMessage({id:"connectedAppsSettings.confluence.caption",defaultMessage:"Import Spaces from Confluence.",description:"A label describing what capabilities the Confluence connection has"}),logo:l.Z.images.import.confluencePng,shouldHideInDiscover:!0,account:null==a?void 0:a.confluence,capabilities:d,canSelectPageAccess:!1,onDisconnect:()=>M.DP(this.environment,n,s.id)}]:[]]}getUserGuestIntegrations(e){const{currentSpaceStore:t}=_.default.state;if(!t||(0,x.Cx)(t))return[];return e.map((e=>{const n=L.t1.createChildStore(t,{table:g.cZ,id:e}),i=n.getName(),s=n.getIntegrationId();if(!n.getAlive()||!i||!s)return;const a=n.getIntegrationPointer(),r=n.getIcon(),c=r&&a?{pointer:a,icon:r}:void 0;return{id:n.id,appName:i,caption:void 0,account:void 0,logo:c,capabilities:o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.userGuest",defaultMessage:"Can {capabilities} content",description:"Bot capabilities for a public guest connection. Example: 'This bot can view and insert content'",values:{capabilities:o()(v.FormattedList,{value:Ae(n.getCapabilities()),type:"conjunction"})}}),canSelectPageAccess:!0,onDisconnect:async()=>{await C.confirmUserAction({message:o()("span",{},void 0,o()(v.FormattedMessage,{id:"userConnectionsSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage",defaultMessage:"Are you sure you want to revoke access for this account?",description:"Popup message when user selects 'Disconnect account' on the connection menu"})),acceptLabel:o()(v.FormattedMessage,{id:"userConnectionsSettings.deleteExternalAuthorization.confirmDelete.label",defaultMessage:"Yes",description:"Confirmation button when user uninstalls a connection"})})&&await w.P0({environment:this.environment,botId:n.id,onSuccess:()=>{}})}}})).filter(f.$K)}getExternalBotCapabilities(e){const t=[o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.previewLinks",defaultMessage:"preview links",description:"A bot can 'preview links' so content appears before clicking on a link"},"previewLinks")];return function(e){return!!e.info.original_url_patterns&&e.info.original_url_patterns.some((e=>{var t;return null===(t=e.additional_types)||void 0===t?void 0:t.collection}))}(e)&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.syncDatabases",defaultMessage:"sync databases",description:"A bot can 'sync databases' so that pasted links can turn into a database"},"syncedDatabase")),t}getExternalIntegrations(){const{currentSpaceStore:e}=_.default.state;if(!e||!e.canEdit())return[];const t=e.getBotSettingsStore().getValue(),n=e.id,{integrations:{state:i},bots:{state:s},externalAuthentications:{state:c}}=D.Z,l=e.canAdmin(),u=m.iK.github.id,p={[m.U9]:1,[u]:2};i.sort(((e,t)=>(p[e.id]??1/0)-(p[t.id]??1/0)));const y=[m.U9];return i.map((i=>{if(!i.info.icon)return;if(!l&&y.includes(i.id))return;const u=s.filter((e=>e.integration_id===i.id)),p=a().compact(u.map((e=>{const t=c.find((t=>t.parent_id===e.id));if(t)return{accountId:e.id,accountName:t.account_name}}))),m=(0,h.hU)({spaceBotSettings:t,integrationId:i.id,env:T.Z.env}),f=p.length>0;if(!m&&!f)return;const b=!m,M=o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.external",defaultMessage:"Can {capabilities}",description:"Bot capabilities for a external connections. Example: 'This bot can preview links and sync databases'",values:{capabilities:o()(v.FormattedList,{value:this.getExternalBotCapabilities(i),type:"conjunction"})}}),A=(0,d.ms)(i.capabilities);return{id:i.id,appName:i.name,caption:i.info.tagline,logo:i.info.icon,account:p,shouldHideConnectAccount:b,shouldShowNewBadge:!i.info.hide_new_badge,capabilities:r.createElement(r.Fragment,null,o()("div",{},void 0,M),A?o()("div",{},void 0,o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.accessColumn.externalWithCapabilities",defaultMessage:"Can {capabilities} content",description:"Bot capabilities for a external connections with guest capabilities. Example: 'This bot can view content'",values:{capabilities:o()(v.FormattedList,{value:Ae(i.capabilities),type:"conjunction"})}})):null),canSelectPageAccess:A,onConnect:async()=>{await Z.hM({environment:this.environment,integration:i,spaceId:n,from:"connected_apps_settings"}),I.pJ({environment:this.environment})},onDisconnect:async t=>{const n=s.find((e=>e.id===(null==t?void 0:t.accountId)));if(n){const s=L.t1.createChildStore(e,{table:g.cZ,id:n.id,spaceId:n.space_id}),a=null!=t&&t.accountName?o()(v.FormattedMessage,{id:"connectedAppSettings.deleteExternalAuthorization.withAccountName.confirmationMessage",defaultMessage:"Are you sure you want to revoke access for {accountName}?",values:{accountName:t.accountName}}):o()(v.FormattedMessage,{id:"connectedAppSettings.deleteExternalAuthorization.withoutAccountName.confirmationMessage",defaultMessage:"Are you sure you want to revoke access for this account?"});await C.confirmUserAction({message:o()("span",{},void 0,a),acceptLabel:o()(v.FormattedMessage,{id:"connectedAppSettings.deleteExternalAuthorization.confirmDelete.label",defaultMessage:"Yes"})})&&(await w.P0({environment:this.environment,botId:s.id,onSuccess:()=>{}}),S.lLm(this.environment,{integrationId:i.id}))}}}})).filter(f.$K)}getWrapStyle(){return{display:"flex",flexDirection:"column",height:"100%",width:"sidebar-modal"===this.props.location?"100%":"auto"}}}function Ae(e){const t=[];return null!=e&&e.read_content&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.readContent",defaultMessage:"view",description:"Example: 'This bot can view page content'"})),null!=e&&e.insert_content&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.insertContent",defaultMessage:"insert",description:"Example: 'This bot can insert page content'"})),null!=e&&e.update_content&&t.push(o()(v.FormattedMessage,{id:"userConnectionsSettings.connectionsTable.botAccess.updateContent",defaultMessage:"update",description:"Example: 'This bot can update page content'"})),t}Ce.displayName="UserConnectionsSettings",Ce.loadingWrapStyle={alignItems:"center",display:"flex",flexDirection:"column",flex:1,height:"100%",justifyContent:"center"},Ce.scrollerStyle={height:"100%",padding:"36px 60px"};const Pe=(0,v.injectIntl)(Ce)},46190:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(61766).Z)},90365:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(61766).Z)},82066:(e,t,n)=>{n.d(t,{Z:()=>i});const i=new(n(61766).Z)}}]);