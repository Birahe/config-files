"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[9478],{43349:(e,t,r)=>{r.d(t,{a:()=>l});var n=r(96225);function l(e,t){var r=e.append("foreignObject").attr("width","100000"),l=r.append("xhtml:div");l.attr("xmlns","http://www.w3.org/1999/xhtml");var o=t.label;switch(typeof o){case"function":l.insert(o);break;case"object":l.insert((function(){return o}));break;default:l.html(o)}n.bg(l,t.labelStyle),l.style("display","inline-block"),l.style("white-space","nowrap");var a=l.node().getBoundingClientRect();return r.attr("width",a.width).attr("height",a.height),r}},96225:(e,t,r)=>{r.d(t,{bF:()=>o,O1:()=>a,bg:()=>c,$p:()=>d,WR:()=>p});var n=r(37514),l=r(73234);function o(e,t){return!!e.children(t).length}function a(e){return i(e.v)+":"+i(e.w)+":"+i(e.name)}var s=/:/g;function i(e){return e?String(e).replace(s,"\\:"):""}function c(e,t){t&&e.attr("style",t)}function d(e,t,r){t&&e.attr("class",t).attr("class",r+" "+e.attr("class"))}function p(e,t){var r=t.graph();if(n.Z(r)){var o=r.transition;if(l.Z(o))return o(e)}return e}},9478:(e,t,r)=>{r.r(t),r.d(t,{diagram:()=>a});var n=r(49863),l=r(60755),o=r(53110);r(39027),r(17967),r(95481),r(45625),r(29451),r(69368),r(3502),r(27484);const a={parser:n.p,db:n.f,renderer:l.f,styles:l.a,init:e=>{e.flowchart||(e.flowchart={}),e.flowchart.arrowMarkerAbsolute=e.arrowMarkerAbsolute,(0,o.h)({flowchart:{arrowMarkerAbsolute:e.arrowMarkerAbsolute}}),l.f.setConf(e.flowchart),n.f.clear(),n.f.setGen("gen-2")}}},60755:(e,t,r)=>{r.d(t,{a:()=>w,f:()=>f});var n=r(45625),l=r(39027),o=r(49863),a=r(53110),s=r(81188),i=r(12566),c=r(43349);const d={},p=function(e,t,r,n,l,o){const i=n.select(`[id="${r}"]`);Object.keys(e).forEach((function(r){const n=e[r];let d="default";n.classes.length>0&&(d=n.classes.join(" ")),d+=" flowchart-label";const p=(0,s.n)(n.styles);let b,f=void 0!==n.text?n.text:n.id;if(a.l.info("vertex",n,n.labelType),"markdown"===n.labelType)a.l.info("vertex",n,n.labelType);else if((0,a.k)((0,a.g)().flowchart.htmlLabels)){const e={label:f.replace(/fa[blrs]?:fa-[\w-]+/g,(e=>`<i class='${e.replace(":"," ")}'></i>`))};b=(0,c.a)(i,e).node(),b.parentNode.removeChild(b)}else{const e=l.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",p.labelStyle.replace("color:","fill:"));const t=f.split(a.e.lineBreakRegex);for(const r of t){const t=l.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}b=e}let w=0,h="";switch(n.type){case"round":w=5,h="rect";break;case"square":h="rect";break;case"diamond":h="question";break;case"hexagon":h="hexagon";break;case"odd":h="rect_left_inv_arrow";break;case"lean_right":h="lean_right";break;case"lean_left":h="lean_left";break;case"trapezoid":h="trapezoid";break;case"inv_trapezoid":h="inv_trapezoid";break;case"odd_right":h="rect_left_inv_arrow";break;case"circle":h="circle";break;case"ellipse":h="ellipse";break;case"stadium":h="stadium";break;case"subroutine":h="subroutine";break;case"cylinder":h="cylinder";break;case"group":h="rect";break;case"doublecircle":h="doublecircle";break;default:h="rect"}t.setNode(n.id,{labelStyle:p.labelStyle,shape:h,labelText:f,labelType:n.labelType,rx:w,ry:w,class:d,style:p.style,id:n.id,link:n.link,linkTarget:n.linkTarget,tooltip:o.db.getTooltip(n.id)||"",domId:o.db.lookUpDomId(n.id),haveCallback:n.haveCallback,width:"group"===n.type?500:void 0,dir:n.dir,type:n.type,props:n.props,padding:(0,a.g)().flowchart.padding}),a.l.info("setNode",{labelStyle:p.labelStyle,labelType:n.labelType,shape:h,labelText:f,rx:w,ry:w,class:d,style:p.style,id:n.id,domId:o.db.lookUpDomId(n.id),width:"group"===n.type?500:void 0,type:n.type,dir:n.dir,props:n.props,padding:(0,a.g)().flowchart.padding})}))},b=function(e,t,r){a.l.info("abc78 edges = ",e);let n,o,i=0,c={};if(void 0!==e.defaultStyle){const t=(0,s.n)(e.defaultStyle);n=t.style,o=t.labelStyle}e.forEach((function(r){i++;var p="L-"+r.start+"-"+r.end;void 0===c[p]?(c[p]=0,a.l.info("abc78 new entry",p,c[p])):(c[p]++,a.l.info("abc78 new entry",p,c[p]));let b=p+"-"+c[p];a.l.info("abc78 new link id to be used is",p,b,c[p]);var f="LS-"+r.start,w="LE-"+r.end;const h={style:"",labelStyle:""};switch(h.minlen=r.length||1,"arrow_open"===r.type?h.arrowhead="none":h.arrowhead="normal",h.arrowTypeStart="arrow_open",h.arrowTypeEnd="arrow_open",r.type){case"double_arrow_cross":h.arrowTypeStart="arrow_cross";case"arrow_cross":h.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":h.arrowTypeStart="arrow_point";case"arrow_point":h.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":h.arrowTypeStart="arrow_circle";case"arrow_circle":h.arrowTypeEnd="arrow_circle"}let u="",g="";switch(r.stroke){case"normal":u="fill:none;",void 0!==n&&(u=n),void 0!==o&&(g=o),h.thickness="normal",h.pattern="solid";break;case"dotted":h.thickness="normal",h.pattern="dotted",h.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":h.thickness="thick",h.pattern="solid",h.style="stroke-width: 3.5px;fill:none;";break;case"invisible":h.thickness="invisible",h.pattern="solid",h.style="stroke-width: 0;fill:none;"}if(void 0!==r.style){const e=(0,s.n)(r.style);u=e.style,g=e.labelStyle}h.style=h.style+=u,h.labelStyle=h.labelStyle+=g,void 0!==r.interpolate?h.curve=(0,s.o)(r.interpolate,l.c_6):void 0!==e.defaultInterpolate?h.curve=(0,s.o)(e.defaultInterpolate,l.c_6):h.curve=(0,s.o)(d.curve,l.c_6),void 0===r.text?void 0!==r.style&&(h.arrowheadStyle="fill: #333"):(h.arrowheadStyle="fill: #333",h.labelpos="c"),h.labelType=r.labelType,h.label=r.text.replace(a.e.lineBreakRegex,"\n"),void 0===r.style&&(h.style=h.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),h.labelStyle=h.labelStyle.replace("color:","fill:"),h.id=b,h.classes="flowchart-link "+f+" "+w,t.setEdge(r.start,r.end,h,i)}))},f={setConf:function(e){const t=Object.keys(e);for(const r of t)d[r]=e[r]},addVertices:p,addEdges:b,getClasses:function(e,t){a.l.info("Extracting classes"),t.db.clear();try{return t.parse(e),t.db.getClasses()}catch(r){return}},draw:function(e,t,r,c){a.l.info("Drawing flowchart"),c.db.clear(),o.f.setGen("gen-2"),c.parser.parse(e);let d=c.db.getDirection();void 0===d&&(d="TD");const{securityLevel:f,flowchart:w}=(0,a.g)(),h=w.nodeSpacing||50,u=w.rankSpacing||50;let g;"sandbox"===f&&(g=(0,l.Ys)("#i"+t));const y="sandbox"===f?(0,l.Ys)(g.nodes()[0].contentDocument.body):(0,l.Ys)("body"),k="sandbox"===f?g.nodes()[0].contentDocument:document,x=new n.k({multigraph:!0,compound:!0}).setGraph({rankdir:d,nodesep:h,ranksep:u,marginx:0,marginy:0}).setDefaultEdgeLabel((function(){return{}}));let v;const m=c.db.getSubGraphs();a.l.info("Subgraphs - ",m);for(let n=m.length-1;n>=0;n--)v=m[n],a.l.info("Subgraph - ",v),c.db.addVertex(v.id,{text:v.title,type:v.labelType},"group",void 0,v.classes,v.dir);const S=c.db.getVertices(),_=c.db.getEdges();a.l.info("Edges",_);let T=0;for(T=m.length-1;T>=0;T--){v=m[T],(0,l.td_)("cluster").append("text");for(let e=0;e<v.nodes.length;e++)a.l.info("Setting up subgraphs",v.nodes[e],v.id),x.setParent(v.nodes[e],v.id)}p(S,x,t,y,k,c),b(_,x);const C=y.select(`[id="${t}"]`),$=y.select("#"+t+" g");if((0,i.r)($,x,["point","circle","cross"],"flowchart",t),s.u.insertTitle(C,"flowchartTitleText",w.titleTopMargin,c.db.getDiagramTitle()),(0,s.s)(x,C,w.diagramPadding,w.useMaxWidth),c.db.indexNodes("subGraph"+T),!w.htmlLabels){const e=k.querySelectorAll('[id="'+t+'"] .edgeLabel .label');for(const t of e){const e=t.getBBox(),r=k.createElementNS("http://www.w3.org/2000/svg","rect");r.setAttribute("rx",0),r.setAttribute("ry",0),r.setAttribute("width",e.width),r.setAttribute("height",e.height),t.insertBefore(r,t.firstChild)}}Object.keys(S).forEach((function(e){const r=S[e];if(r.link){const n=(0,l.Ys)("#"+t+' [id="'+e+'"]');if(n){const e=k.createElementNS("http://www.w3.org/2000/svg","a");e.setAttributeNS("http://www.w3.org/2000/svg","class",r.classes.join(" ")),e.setAttributeNS("http://www.w3.org/2000/svg","href",r.link),e.setAttributeNS("http://www.w3.org/2000/svg","rel","noopener"),"sandbox"===f?e.setAttributeNS("http://www.w3.org/2000/svg","target","_top"):r.linkTarget&&e.setAttributeNS("http://www.w3.org/2000/svg","target",r.linkTarget);const t=n.insert((function(){return e}),":first-child"),l=n.select(".label-container");l&&t.append((function(){return l.node()}));const o=n.select(".label");o&&t.append((function(){return o.node()}))}}}))}},w=e=>`.label {\n    font-family: ${e.fontFamily};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n  .cluster-label text {\n    fill: ${e.titleColor};\n  }\n  .cluster-label span,p {\n    color: ${e.titleColor};\n  }\n\n  .label text,span,p {\n    fill: ${e.nodeTextColor||e.textColor};\n    color: ${e.nodeTextColor||e.textColor};\n  }\n\n  .node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${e.mainBkg};\n    stroke: ${e.nodeBorder};\n    stroke-width: 1px;\n  }\n  .flowchart-label text {\n    text-anchor: middle;\n  }\n  // .flowchart-label .text-outer-tspan {\n  //   text-anchor: middle;\n  // }\n  // .flowchart-label .text-inner-tspan {\n  //   text-anchor: start;\n  // }\n\n  .node .label {\n    text-align: center;\n  }\n  .node.clickable {\n    cursor: pointer;\n  }\n\n  .arrowheadPath {\n    fill: ${e.arrowheadColor};\n  }\n\n  .edgePath .path {\n    stroke: ${e.lineColor};\n    stroke-width: 2.0px;\n  }\n\n  .flowchart-link {\n    stroke: ${e.lineColor};\n    fill: none;\n  }\n\n  .edgeLabel {\n    background-color: ${e.edgeLabelBackground};\n    rect {\n      opacity: 0.5;\n      background-color: ${e.edgeLabelBackground};\n      fill: ${e.edgeLabelBackground};\n    }\n    text-align: center;\n  }\n\n  .cluster rect {\n    fill: ${e.clusterBkg};\n    stroke: ${e.clusterBorder};\n    stroke-width: 1px;\n  }\n\n  .cluster text {\n    fill: ${e.titleColor};\n  }\n\n  .cluster span,p {\n    color: ${e.titleColor};\n  }\n  /* .cluster div {\n    color: ${e.titleColor};\n  } */\n\n  div.mermaidTooltip {\n    position: absolute;\n    text-align: center;\n    max-width: 200px;\n    padding: 2px;\n    font-family: ${e.fontFamily};\n    font-size: 12px;\n    background: ${e.tertiaryColor};\n    border: 1px solid ${e.border2};\n    border-radius: 2px;\n    pointer-events: none;\n    z-index: 100;\n  }\n\n  .flowchartTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${e.textColor};\n  }\n`}}]);