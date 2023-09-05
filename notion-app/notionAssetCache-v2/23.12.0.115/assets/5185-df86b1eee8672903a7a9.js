"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5185],{5185:(t,e,a)=>{a.r(e),a.d(e,{diagram:()=>m});var i=a(1341),n=a(39027),d=a(29451),r=a(45625),s=a(53110),o=a(81188);a(95481),a(27484),a(17967);const g={},p=(t,e)=>{g[t]=e},c=(t,e)=>{const a=t.append("text").attr("x",2*(0,s.g)().state.padding).attr("y",(0,s.g)().state.textHeight+1.3*(0,s.g)().state.padding).attr("font-size",(0,s.g)().state.fontSize).attr("class","state-title").text(e.descriptions[0]).node().getBBox(),i=a.height,n=t.append("text").attr("x",(0,s.g)().state.padding).attr("y",i+.4*(0,s.g)().state.padding+(0,s.g)().state.dividerMargin+(0,s.g)().state.textHeight).attr("class","state-description");let d=!0,r=!0;e.descriptions.forEach((function(t){d||(!function(t,e,a){const i=t.append("tspan").attr("x",2*(0,s.g)().state.padding).text(e);a||i.attr("dy",(0,s.g)().state.textHeight)}(n,t,r),r=!1),d=!1}));const o=t.append("line").attr("x1",(0,s.g)().state.padding).attr("y1",(0,s.g)().state.padding+i+(0,s.g)().state.dividerMargin/2).attr("y2",(0,s.g)().state.padding+i+(0,s.g)().state.dividerMargin/2).attr("class","descr-divider"),g=n.node().getBBox(),p=Math.max(g.width,a.width);return o.attr("x2",p+3*(0,s.g)().state.padding),t.insert("rect",":first-child").attr("x",(0,s.g)().state.padding).attr("y",(0,s.g)().state.padding).attr("width",p+2*(0,s.g)().state.padding).attr("height",g.height+i+2*(0,s.g)().state.padding).attr("rx",(0,s.g)().state.radius),t},h=(t,e,a)=>{const i=(0,s.g)().state.padding,n=2*(0,s.g)().state.padding,d=t.node().getBBox(),r=d.width,o=d.x,g=t.append("text").attr("x",0).attr("y",(0,s.g)().state.titleShift).attr("font-size",(0,s.g)().state.fontSize).attr("class","state-title").text(e.id),p=g.node().getBBox().width+n;let c,h=Math.max(p,r);h===r&&(h+=n);const l=t.node().getBBox();e.doc,c=o-i,p>r&&(c=(r-h)/2+i),Math.abs(o-l.x)<i&&p>r&&(c=o-(p-r)/2);const x=1-(0,s.g)().state.textHeight;return t.insert("rect",":first-child").attr("x",c).attr("y",x).attr("class",a?"alt-composit":"composit").attr("width",h).attr("height",l.height+(0,s.g)().state.textHeight+(0,s.g)().state.titleShift+1).attr("rx","0"),g.attr("x",c+i),p<=r&&g.attr("x",o+(h-n)/2-p/2+i),t.insert("rect",":first-child").attr("x",c).attr("y",(0,s.g)().state.titleShift-(0,s.g)().state.textHeight-(0,s.g)().state.padding).attr("width",h).attr("height",3*(0,s.g)().state.textHeight).attr("rx",(0,s.g)().state.radius),t.insert("rect",":first-child").attr("x",c).attr("y",(0,s.g)().state.titleShift-(0,s.g)().state.textHeight-(0,s.g)().state.padding).attr("width",h).attr("height",l.height+3+2*(0,s.g)().state.textHeight).attr("rx",(0,s.g)().state.radius),t},l=(t,e)=>{e.attr("class","state-note");const a=e.append("rect").attr("x",0).attr("y",(0,s.g)().state.padding),i=e.append("g"),{textWidth:n,textHeight:d}=((t,e,a,i)=>{let n=0;const d=i.append("text");d.style("text-anchor","start"),d.attr("class","noteText");let r=t.replace(/\r\n/g,"<br/>");r=r.replace(/\n/g,"<br/>");const o=r.split(s.e.lineBreakRegex);let g=1.25*(0,s.g)().state.noteMargin;for(const p of o){const t=p.trim();if(t.length>0){const i=d.append("tspan");i.text(t),0===g&&(g+=i.node().getBBox().height),n+=g,i.attr("x",e+(0,s.g)().state.noteMargin),i.attr("y",a+n+1.25*(0,s.g)().state.noteMargin)}}return{textWidth:d.node().getBBox().width,textHeight:n}})(t,0,0,i);return a.attr("height",d+2*(0,s.g)().state.noteMargin),a.attr("width",n+2*(0,s.g)().state.noteMargin),a},x=function(t,e){const a=e.id,i={id:a,label:e.id,width:0,height:0},n=t.append("g").attr("id",a).attr("class","stateGroup");"start"===e.type&&(t=>{t.append("circle").attr("class","start-state").attr("r",(0,s.g)().state.sizeUnit).attr("cx",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit).attr("cy",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit)})(n),"end"===e.type&&(t=>{t.append("circle").attr("class","end-state-outer").attr("r",(0,s.g)().state.sizeUnit+(0,s.g)().state.miniPadding).attr("cx",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+(0,s.g)().state.miniPadding).attr("cy",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+(0,s.g)().state.miniPadding),t.append("circle").attr("class","end-state-inner").attr("r",(0,s.g)().state.sizeUnit).attr("cx",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+2).attr("cy",(0,s.g)().state.padding+(0,s.g)().state.sizeUnit+2)})(n),"fork"!==e.type&&"join"!==e.type||((t,e)=>{let a=(0,s.g)().state.forkWidth,i=(0,s.g)().state.forkHeight;if(e.parentId){let t=a;a=i,i=t}t.append("rect").style("stroke","black").style("fill","black").attr("width",a).attr("height",i).attr("x",(0,s.g)().state.padding).attr("y",(0,s.g)().state.padding)})(n,e),"note"===e.type&&l(e.note.text,n),"divider"===e.type&&(t=>{t.append("line").style("stroke","grey").style("stroke-dasharray","3").attr("x1",(0,s.g)().state.textHeight).attr("class","divider").attr("x2",2*(0,s.g)().state.textHeight).attr("y1",0).attr("y2",0)})(n),"default"===e.type&&0===e.descriptions.length&&((t,e)=>{const a=t.append("text").attr("x",2*(0,s.g)().state.padding).attr("y",(0,s.g)().state.textHeight+2*(0,s.g)().state.padding).attr("font-size",(0,s.g)().state.fontSize).attr("class","state-title").text(e.id),i=a.node().getBBox();t.insert("rect",":first-child").attr("x",(0,s.g)().state.padding).attr("y",(0,s.g)().state.padding).attr("width",i.width+2*(0,s.g)().state.padding).attr("height",i.height+2*(0,s.g)().state.padding).attr("rx",(0,s.g)().state.radius)})(n,e),"default"===e.type&&e.descriptions.length>0&&c(n,e);const d=n.node().getBBox();return i.width=d.width+2*(0,s.g)().state.padding,i.height=d.height+2*(0,s.g)().state.padding,p(a,i),i};let u=0;let f;const y={},w=(t,e,a,g,p,c,l)=>{const b=new r.k({compound:!0,multigraph:!0});let m,B=!0;for(m=0;m<t.length;m++)if("relation"===t[m].stmt){B=!1;break}a?b.setGraph({rankdir:"LR",multigraph:!0,compound:!0,ranker:"tight-tree",ranksep:B?1:f.edgeLengthFactor,nodeSep:B?1:50,isMultiGraph:!0}):b.setGraph({rankdir:"TB",multigraph:!0,compound:!0,ranksep:B?1:f.edgeLengthFactor,nodeSep:B?1:50,ranker:"tight-tree",isMultiGraph:!0}),b.setDefaultEdgeLabel((function(){return{}})),l.db.extract(t);const k=l.db.getStates(),N=l.db.getRelations(),E=Object.keys(k);for(const i of E){const t=k[i];let n;if(a&&(t.parentId=a),t.doc){let a=e.append("g").attr("id",t.id).attr("class","stateGroup");n=w(t.doc,a,t.id,!g,p,c,l);{a=h(a,t,g);let e=a.node().getBBox();n.width=e.width,n.height=e.height+f.padding/2,y[t.id]={y:f.compositTitleSize}}}else n=x(e,t);if(t.note){const a={descriptions:[],id:t.id+"-note",note:t.note,type:"note"},i=x(e,a);"left of"===t.note.position?(b.setNode(n.id+"-note",i),b.setNode(n.id,n)):(b.setNode(n.id,n),b.setNode(n.id+"-note",i)),b.setParent(n.id,n.id+"-group"),b.setParent(n.id+"-note",n.id+"-group")}else b.setNode(n.id,n)}s.l.debug("Count=",b.nodeCount(),b);let M=0;N.forEach((function(t){var e;M++,s.l.debug("Setting edge",t),b.setEdge(t.id1,t.id2,{relation:t,width:(e=t.title,e?e.length*f.fontSizeFactor:1),height:f.labelHeight*s.e.getRows(t.title).length,labelpos:"c"},"id"+M)})),(0,d.bK)(b),s.l.debug("Graph after layout",b.nodes());const v=e.node();b.nodes().forEach((function(t){if(void 0!==t&&void 0!==b.node(t)){s.l.warn("Node "+t+": "+JSON.stringify(b.node(t))),p.select("#"+v.id+" #"+t).attr("transform","translate("+(b.node(t).x-b.node(t).width/2)+","+(b.node(t).y+(y[t]?y[t].y:0)-b.node(t).height/2)+" )"),p.select("#"+v.id+" #"+t).attr("data-x-shift",b.node(t).x-b.node(t).width/2);c.querySelectorAll("#"+v.id+" #"+t+" .divider").forEach((t=>{const e=t.parentElement;let a=0,i=0;e&&(e.parentElement&&(a=e.parentElement.getBBox().width),i=parseInt(e.getAttribute("data-x-shift"),10),Number.isNaN(i)&&(i=0)),t.setAttribute("x1",0-i+8),t.setAttribute("x2",a-i-8)}))}else s.l.debug("No Node "+t+": "+JSON.stringify(b.node(t)))}));let S=v.getBBox();b.edges().forEach((function(t){void 0!==t&&void 0!==b.edge(t)&&(s.l.debug("Edge "+t.v+" -> "+t.w+": "+JSON.stringify(b.edge(t))),function(t,e,a){e.points=e.points.filter((t=>!Number.isNaN(t.y)));const d=e.points,r=(0,n.jvg)().x((function(t){return t.x})).y((function(t){return t.y})).curve(n.$0Z),g=t.append("path").attr("d",r(d)).attr("id","edge"+u).attr("class","transition");let p="";if((0,s.g)().state.arrowMarkerAbsolute&&(p=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,p=p.replace(/\(/g,"\\("),p=p.replace(/\)/g,"\\)")),g.attr("marker-end","url("+p+"#"+function(t){switch(t){case i.d.relationType.AGGREGATION:return"aggregation";case i.d.relationType.EXTENSION:return"extension";case i.d.relationType.COMPOSITION:return"composition";case i.d.relationType.DEPENDENCY:return"dependency"}}(i.d.relationType.DEPENDENCY)+"End)"),void 0!==a.title){const i=t.append("g").attr("class","stateLabel"),{x:n,y:d}=o.u.calcLabelPosition(e.points),r=s.e.getRows(a.title);let g=0;const p=[];let c=0,h=0;for(let t=0;t<=r.length;t++){const e=i.append("text").attr("text-anchor","middle").text(r[t]).attr("x",n).attr("y",d+g),a=e.node().getBBox();if(c=Math.max(c,a.width),h=Math.min(h,a.x),s.l.info(a.x,n,d+g),0===g){const t=e.node().getBBox();g=t.height,s.l.info("Title height",g,d)}p.push(e)}let l=g*r.length;if(r.length>1){const t=(r.length-1)*g*.5;p.forEach(((e,a)=>e.attr("y",d+a*g-t))),l=g*r.length}const x=i.node().getBBox();i.insert("rect",":first-child").attr("class","box").attr("x",n-c/2-(0,s.g)().state.padding/2).attr("y",d-l/2-(0,s.g)().state.padding/2-3.5).attr("width",c+(0,s.g)().state.padding).attr("height",l+(0,s.g)().state.padding),s.l.info(x)}u++}(e,b.edge(t),b.edge(t).relation))})),S=v.getBBox();const z={id:a||"root",label:a||"root",width:0,height:0};return z.width=S.width+2*f.padding,z.height=S.height+2*f.padding,s.l.debug("Doc rendered",z,b),z},b={setConf:function(){},draw:function(t,e,a,i){f=(0,s.g)().state;const d=(0,s.g)().securityLevel;let g;"sandbox"===d&&(g=(0,n.Ys)("#i"+e));const p="sandbox"===d?(0,n.Ys)(g.nodes()[0].contentDocument.body):(0,n.Ys)("body"),c="sandbox"===d?g.nodes()[0].contentDocument:document;s.l.debug("Rendering diagram "+t);const h=p.select(`[id='${e}']`);h.append("defs").append("marker").attr("id","dependencyEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z");new r.k({multigraph:!0,compound:!0,rankdir:"RL"}).setDefaultEdgeLabel((function(){return{}}));const l=i.db.getRootDoc();w(l,h,void 0,!1,p,c,i);const x=f.padding,u=h.node().getBBox(),y=u.width+2*x,b=u.height+2*x,m=1.75*y;(0,o.k)(h,b,m,f.useMaxWidth),h.attr("viewBox",`${u.x-f.padding}  ${u.y-f.padding} `+y+" "+b)}},m={parser:i.p,db:i.d,renderer:b,styles:i.s,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,i.d.clear()}}}}]);