"use strict";(self.webpackChunknotion_next=self.webpackChunknotion_next||[]).push([[5001],{25001:(t,e,n)=>{n.d(e,{d:()=>D,p:()=>o,s:()=>b});var i=n(39027),u=n(53110),s=n(81188),r=n(6848),a=function(){var t=function(t,e,n,i){for(n=n||{},i=t.length;i--;n[t[i]]=e);return n},e=[1,3],n=[1,7],i=[1,8],u=[1,9],s=[1,10],r=[1,13],a=[1,12],o=[1,16,25],c=[1,20],l=[1,32],h=[1,33],A=[1,34],p=[1,48],d=[1,39],y=[1,37],E=[1,38],C=[1,44],g=[1,45],k=[1,40],F=[1,41],m=[1,42],f=[1,43],_=[1,49],D=[1,50],b=[1,51],B=[1,52],T=[16,25],S=[1,66],v=[1,67],N=[1,68],L=[1,69],$=[1,70],I=[1,71],O=[1,72],x=[1,82],R=[16,25,28,29,36,49,50,64,65,66,67,68,69,70,75,77],w=[16,25,28,29,34,36,49,50,55,64,65,66,67,68,69,70,75,77,92,93,94,95],P=[5,8,9,10,11,16,19,23,25],G=[29,92,93,94,95],U=[29,69,70,92,93,94,95],M=[29,64,65,66,67,68,92,93,94,95],Y=[1,96],K=[16,25,49,50],z=[16,25,36],Q={trace:function(){},yy:{},symbols_:{error:2,start:3,mermaidDoc:4,statments:5,direction:6,directive:7,direction_tb:8,direction_bt:9,direction_rl:10,direction_lr:11,graphConfig:12,openDirective:13,typeDirective:14,closeDirective:15,NEWLINE:16,":":17,argDirective:18,open_directive:19,type_directive:20,arg_directive:21,close_directive:22,CLASS_DIAGRAM:23,statements:24,EOF:25,statement:26,classLabel:27,SQS:28,STR:29,SQE:30,className:31,alphaNumToken:32,classLiteralName:33,GENERICTYPE:34,relationStatement:35,LABEL:36,classStatement:37,methodStatement:38,annotationStatement:39,clickStatement:40,cssClassStatement:41,noteStatement:42,acc_title:43,acc_title_value:44,acc_descr:45,acc_descr_value:46,acc_descr_multiline_value:47,classIdentifier:48,STYLE_SEPARATOR:49,STRUCT_START:50,members:51,STRUCT_STOP:52,CLASS:53,ANNOTATION_START:54,ANNOTATION_END:55,MEMBER:56,SEPARATOR:57,relation:58,NOTE_FOR:59,noteText:60,NOTE:61,relationType:62,lineType:63,AGGREGATION:64,EXTENSION:65,COMPOSITION:66,DEPENDENCY:67,LOLLIPOP:68,LINE:69,DOTTED_LINE:70,CALLBACK:71,LINK:72,LINK_TARGET:73,CLICK:74,CALLBACK_NAME:75,CALLBACK_ARGS:76,HREF:77,CSSCLASS:78,commentToken:79,textToken:80,graphCodeTokens:81,textNoTagsToken:82,TAGSTART:83,TAGEND:84,"==":85,"--":86,PCT:87,DEFAULT:88,SPACE:89,MINUS:90,keywords:91,UNICODE_TEXT:92,NUM:93,ALPHA:94,BQUOTE_STR:95,$accept:0,$end:1},terminals_:{2:"error",5:"statments",8:"direction_tb",9:"direction_bt",10:"direction_rl",11:"direction_lr",16:"NEWLINE",17:":",19:"open_directive",20:"type_directive",21:"arg_directive",22:"close_directive",23:"CLASS_DIAGRAM",25:"EOF",28:"SQS",29:"STR",30:"SQE",34:"GENERICTYPE",36:"LABEL",43:"acc_title",44:"acc_title_value",45:"acc_descr",46:"acc_descr_value",47:"acc_descr_multiline_value",49:"STYLE_SEPARATOR",50:"STRUCT_START",52:"STRUCT_STOP",53:"CLASS",54:"ANNOTATION_START",55:"ANNOTATION_END",56:"MEMBER",57:"SEPARATOR",59:"NOTE_FOR",61:"NOTE",64:"AGGREGATION",65:"EXTENSION",66:"COMPOSITION",67:"DEPENDENCY",68:"LOLLIPOP",69:"LINE",70:"DOTTED_LINE",71:"CALLBACK",72:"LINK",73:"LINK_TARGET",74:"CLICK",75:"CALLBACK_NAME",76:"CALLBACK_ARGS",77:"HREF",78:"CSSCLASS",81:"graphCodeTokens",83:"TAGSTART",84:"TAGEND",85:"==",86:"--",87:"PCT",88:"DEFAULT",89:"SPACE",90:"MINUS",91:"keywords",92:"UNICODE_TEXT",93:"NUM",94:"ALPHA",95:"BQUOTE_STR"},productions_:[0,[3,1],[3,1],[3,1],[3,2],[6,1],[6,1],[6,1],[6,1],[4,1],[7,4],[7,6],[13,1],[14,1],[18,1],[15,1],[12,4],[24,1],[24,2],[24,3],[27,3],[31,1],[31,1],[31,2],[31,2],[31,2],[26,1],[26,2],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,1],[26,2],[26,2],[26,1],[37,1],[37,3],[37,4],[37,6],[48,2],[48,3],[39,4],[51,1],[51,2],[38,1],[38,2],[38,1],[38,1],[35,3],[35,4],[35,4],[35,5],[42,3],[42,2],[58,3],[58,2],[58,2],[58,1],[62,1],[62,1],[62,1],[62,1],[62,1],[63,1],[63,1],[40,3],[40,4],[40,3],[40,4],[40,4],[40,5],[40,3],[40,4],[40,4],[40,5],[40,3],[40,4],[40,4],[40,5],[41,3],[79,1],[79,1],[80,1],[80,1],[80,1],[80,1],[80,1],[80,1],[80,1],[82,1],[82,1],[82,1],[82,1],[32,1],[32,1],[32,1],[33,1],[60,1]],performAction:function(t,e,n,i,u,s,r){var a=s.length-1;switch(u){case 5:i.setDirection("TB");break;case 6:i.setDirection("BT");break;case 7:i.setDirection("RL");break;case 8:i.setDirection("LR");break;case 12:i.parseDirective("%%{","open_directive");break;case 13:i.parseDirective(s[a],"type_directive");break;case 14:s[a]=s[a].trim().replace(/'/g,'"'),i.parseDirective(s[a],"arg_directive");break;case 15:i.parseDirective("}%%","close_directive","class");break;case 20:this.$=s[a-1];break;case 21:case 22:this.$=s[a];break;case 23:this.$=s[a-1]+s[a];break;case 24:case 25:this.$=s[a-1]+"~"+s[a];break;case 26:i.addRelation(s[a]);break;case 27:s[a-1].title=i.cleanupLabel(s[a]),i.addRelation(s[a-1]);break;case 36:this.$=s[a].trim(),i.setAccTitle(this.$);break;case 37:case 38:this.$=s[a].trim(),i.setAccDescription(this.$);break;case 40:i.setCssClass(s[a-2],s[a]);break;case 41:i.addMembers(s[a-3],s[a-1]);break;case 42:i.setCssClass(s[a-5],s[a-3]),i.addMembers(s[a-5],s[a-1]);break;case 43:this.$=s[a],i.addClass(s[a]);break;case 44:this.$=s[a-1],i.addClass(s[a-1]),i.setClassLabel(s[a-1],s[a]);break;case 45:i.addAnnotation(s[a],s[a-2]);break;case 46:this.$=[s[a]];break;case 47:s[a].push(s[a-1]),this.$=s[a];break;case 48:break;case 49:i.addMember(s[a-1],i.cleanupLabel(s[a]));break;case 50:case 51:break;case 52:this.$={id1:s[a-2],id2:s[a],relation:s[a-1],relationTitle1:"none",relationTitle2:"none"};break;case 53:this.$={id1:s[a-3],id2:s[a],relation:s[a-1],relationTitle1:s[a-2],relationTitle2:"none"};break;case 54:this.$={id1:s[a-3],id2:s[a],relation:s[a-2],relationTitle1:"none",relationTitle2:s[a-1]};break;case 55:this.$={id1:s[a-4],id2:s[a],relation:s[a-2],relationTitle1:s[a-3],relationTitle2:s[a-1]};break;case 56:i.addNote(s[a],s[a-1]);break;case 57:i.addNote(s[a]);break;case 58:this.$={type1:s[a-2],type2:s[a],lineType:s[a-1]};break;case 59:this.$={type1:"none",type2:s[a],lineType:s[a-1]};break;case 60:this.$={type1:s[a-1],type2:"none",lineType:s[a]};break;case 61:this.$={type1:"none",type2:"none",lineType:s[a]};break;case 62:this.$=i.relationType.AGGREGATION;break;case 63:this.$=i.relationType.EXTENSION;break;case 64:this.$=i.relationType.COMPOSITION;break;case 65:this.$=i.relationType.DEPENDENCY;break;case 66:this.$=i.relationType.LOLLIPOP;break;case 67:this.$=i.lineType.LINE;break;case 68:this.$=i.lineType.DOTTED_LINE;break;case 69:case 75:this.$=s[a-2],i.setClickEvent(s[a-1],s[a]);break;case 70:case 76:this.$=s[a-3],i.setClickEvent(s[a-2],s[a-1]),i.setTooltip(s[a-2],s[a]);break;case 71:case 79:this.$=s[a-2],i.setLink(s[a-1],s[a]);break;case 72:this.$=s[a-3],i.setLink(s[a-2],s[a-1],s[a]);break;case 73:case 81:this.$=s[a-3],i.setLink(s[a-2],s[a-1]),i.setTooltip(s[a-2],s[a]);break;case 74:case 82:this.$=s[a-4],i.setLink(s[a-3],s[a-2],s[a]),i.setTooltip(s[a-3],s[a-1]);break;case 77:this.$=s[a-3],i.setClickEvent(s[a-2],s[a-1],s[a]);break;case 78:this.$=s[a-4],i.setClickEvent(s[a-3],s[a-2],s[a-1]),i.setTooltip(s[a-3],s[a]);break;case 80:this.$=s[a-3],i.setLink(s[a-2],s[a-1],s[a]);break;case 83:i.setCssClass(s[a-1],s[a])}},table:[{3:1,4:2,5:e,6:4,7:5,8:n,9:i,10:u,11:s,12:6,13:11,19:r,23:a},{1:[3]},{1:[2,1]},{1:[2,2]},{1:[2,3]},{3:14,4:2,5:e,6:4,7:5,8:n,9:i,10:u,11:s,12:6,13:11,19:r,23:a},{1:[2,9]},t(o,[2,5]),t(o,[2,6]),t(o,[2,7]),t(o,[2,8]),{14:15,20:[1,16]},{16:[1,17]},{20:[2,12]},{1:[2,4]},{15:18,17:[1,19],22:c},t([17,22],[2,13]),{6:31,7:30,8:n,9:i,10:u,11:s,13:11,19:r,24:21,26:22,31:35,32:46,33:47,35:23,37:24,38:25,39:26,40:27,41:28,42:29,43:l,45:h,47:A,48:36,53:p,54:d,56:y,57:E,59:C,61:g,71:k,72:F,74:m,78:f,92:_,93:D,94:b,95:B},{16:[1,53]},{18:54,21:[1,55]},{16:[2,15]},{25:[1,56]},{16:[1,57],25:[2,17]},t(T,[2,26],{36:[1,58]}),t(T,[2,28]),t(T,[2,29]),t(T,[2,30]),t(T,[2,31]),t(T,[2,32]),t(T,[2,33]),t(T,[2,34]),t(T,[2,35]),{44:[1,59]},{46:[1,60]},t(T,[2,38]),t(T,[2,48],{58:61,62:64,63:65,29:[1,62],36:[1,63],64:S,65:v,66:N,67:L,68:$,69:I,70:O}),t(T,[2,39],{49:[1,73],50:[1,74]}),t(T,[2,50]),t(T,[2,51]),{32:75,92:_,93:D,94:b},{31:76,32:46,33:47,92:_,93:D,94:b,95:B},{31:77,32:46,33:47,92:_,93:D,94:b,95:B},{31:78,32:46,33:47,92:_,93:D,94:b,95:B},{29:[1,79]},{31:80,32:46,33:47,92:_,93:D,94:b,95:B},{29:x,60:81},t(R,[2,21],{32:46,33:47,31:83,34:[1,84],92:_,93:D,94:b,95:B}),t(R,[2,22],{34:[1,85]}),{31:86,32:46,33:47,92:_,93:D,94:b,95:B},t(w,[2,97]),t(w,[2,98]),t(w,[2,99]),t([16,25,28,29,34,36,49,50,64,65,66,67,68,69,70,75,77],[2,100]),t(P,[2,10]),{15:87,22:c},{22:[2,14]},{1:[2,16]},{6:31,7:30,8:n,9:i,10:u,11:s,13:11,19:r,24:88,25:[2,18],26:22,31:35,32:46,33:47,35:23,37:24,38:25,39:26,40:27,41:28,42:29,43:l,45:h,47:A,48:36,53:p,54:d,56:y,57:E,59:C,61:g,71:k,72:F,74:m,78:f,92:_,93:D,94:b,95:B},t(T,[2,27]),t(T,[2,36]),t(T,[2,37]),{29:[1,90],31:89,32:46,33:47,92:_,93:D,94:b,95:B},{58:91,62:64,63:65,64:S,65:v,66:N,67:L,68:$,69:I,70:O},t(T,[2,49]),{63:92,69:I,70:O},t(G,[2,61],{62:93,64:S,65:v,66:N,67:L,68:$}),t(U,[2,62]),t(U,[2,63]),t(U,[2,64]),t(U,[2,65]),t(U,[2,66]),t(M,[2,67]),t(M,[2,68]),{32:94,92:_,93:D,94:b},{51:95,56:Y},{55:[1,97]},{29:[1,98]},{29:[1,99]},{75:[1,100],77:[1,101]},{32:102,92:_,93:D,94:b},{29:x,60:103},t(T,[2,57]),t(T,[2,101]),t(R,[2,23]),t(R,[2,24]),t(R,[2,25]),t(K,[2,43],{27:104,28:[1,105]}),{16:[1,106]},{25:[2,19]},t(z,[2,52]),{31:107,32:46,33:47,92:_,93:D,94:b,95:B},{29:[1,109],31:108,32:46,33:47,92:_,93:D,94:b,95:B},t(G,[2,60],{62:110,64:S,65:v,66:N,67:L,68:$}),t(G,[2,59]),t(T,[2,40],{50:[1,111]}),{52:[1,112]},{51:113,52:[2,46],56:Y},{31:114,32:46,33:47,92:_,93:D,94:b,95:B},t(T,[2,69],{29:[1,115]}),t(T,[2,71],{29:[1,117],73:[1,116]}),t(T,[2,75],{29:[1,118],76:[1,119]}),t(T,[2,79],{29:[1,121],73:[1,120]}),t(T,[2,83]),t(T,[2,56]),t(K,[2,44]),{29:[1,122]},t(P,[2,11]),t(z,[2,54]),t(z,[2,53]),{31:123,32:46,33:47,92:_,93:D,94:b,95:B},t(G,[2,58]),{51:124,56:Y},t(T,[2,41]),{52:[2,47]},t(T,[2,45]),t(T,[2,70]),t(T,[2,72]),t(T,[2,73],{73:[1,125]}),t(T,[2,76]),t(T,[2,77],{29:[1,126]}),t(T,[2,80]),t(T,[2,81],{73:[1,127]}),{30:[1,128]},t(z,[2,55]),{52:[1,129]},t(T,[2,74]),t(T,[2,78]),t(T,[2,82]),t(K,[2,20]),t(T,[2,42])],defaultActions:{2:[2,1],3:[2,2],4:[2,3],6:[2,9],13:[2,12],14:[2,4],20:[2,15],55:[2,14],56:[2,16],88:[2,19],113:[2,47]},parseError:function(t,e){if(!e.recoverable){var n=new Error(t);throw n.hash=e,n}this.trace(t)},parse:function(t){var e=this,n=[0],i=[],u=[null],s=[],r=this.table,a="",o=0,c=0,l=2,h=1,A=s.slice.call(arguments,1),p=Object.create(this.lexer),d={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(d.yy[y]=this.yy[y]);p.setInput(t,d.yy),d.yy.lexer=p,d.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var E=p.yylloc;s.push(E);var C=p.options&&p.options.ranges;function g(){var t;return"number"!=typeof(t=i.pop()||p.lex()||h)&&(t instanceof Array&&(t=(i=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var k,F,m,f,_,D,b,B,T={};;){if(F=n[n.length-1],this.defaultActions[F]?m=this.defaultActions[F]:(null==k&&(k=g()),m=r[F]&&r[F][k]),void 0===m||!m.length||!m[0]){var S="";for(_ in B=[],r[F])this.terminals_[_]&&_>l&&B.push("'"+this.terminals_[_]+"'");S=p.showPosition?"Parse error on line "+(o+1)+":\n"+p.showPosition()+"\nExpecting "+B.join(", ")+", got '"+(this.terminals_[k]||k)+"'":"Parse error on line "+(o+1)+": Unexpected "+(k==h?"end of input":"'"+(this.terminals_[k]||k)+"'"),this.parseError(S,{text:p.match,token:this.terminals_[k]||k,line:p.yylineno,loc:E,expected:B})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+F+", token: "+k);switch(m[0]){case 1:n.push(k),u.push(p.yytext),s.push(p.yylloc),n.push(m[1]),k=null,c=p.yyleng,a=p.yytext,o=p.yylineno,E=p.yylloc;break;case 2:if(D=this.productions_[m[1]][1],T.$=u[u.length-D],T._$={first_line:s[s.length-(D||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(D||1)].first_column,last_column:s[s.length-1].last_column},C&&(T._$.range=[s[s.length-(D||1)].range[0],s[s.length-1].range[1]]),void 0!==(f=this.performAction.apply(T,[a,c,o,d.yy,m[1],u,s].concat(A))))return f;D&&(n=n.slice(0,-1*D*2),u=u.slice(0,-1*D),s=s.slice(0,-1*D)),n.push(this.productions_[m[1]][0]),u.push(T.$),s.push(T._$),b=r[n[n.length-2]][n[n.length-1]],n.push(b);break;case 3:return!0}}return!0}},j={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,n=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var u=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===i.length?this.yylloc.first_column:0)+i[i.length-n.length].length-n[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[u[0],u[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var n,i,u;if(this.options.backtrack_lexer&&(u={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(u.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],n=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in u)this[s]=u[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,n,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var u=this._currentRules(),s=0;s<u.length;s++)if((n=this._input.match(this.rules[u[s]]))&&(!e||n[0].length>e[0].length)){if(e=n,i=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(n,u[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,u[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{},performAction:function(t,e,n,i){switch(n){case 0:return this.begin("open_directive"),19;case 1:return 8;case 2:return 9;case 3:return 10;case 4:return 11;case 5:return this.begin("type_directive"),20;case 6:return this.popState(),this.begin("arg_directive"),17;case 7:return this.popState(),this.popState(),22;case 8:return 21;case 9:case 10:break;case 11:return this.begin("acc_title"),43;case 12:return this.popState(),"acc_title_value";case 13:return this.begin("acc_descr"),45;case 14:return this.popState(),"acc_descr_value";case 15:this.begin("acc_descr_multiline");break;case 16:this.popState();break;case 17:return"acc_descr_multiline_value";case 18:return 16;case 19:break;case 20:case 21:return 23;case 22:return this.begin("struct"),50;case 23:return"EDGE_STATE";case 24:return"EOF_IN_STRUCT";case 25:return"OPEN_IN_STRUCT";case 26:return this.popState(),52;case 27:break;case 28:return"MEMBER";case 29:return 53;case 30:return 78;case 31:return 71;case 32:return 72;case 33:return 74;case 34:return 59;case 35:return 61;case 36:return 54;case 37:return 55;case 38:this.begin("generic");break;case 39:this.popState();break;case 40:return"GENERICTYPE";case 41:this.begin("string");break;case 42:this.popState();break;case 43:return"STR";case 44:this.begin("bqstring");break;case 45:this.popState();break;case 46:return"BQUOTE_STR";case 47:this.begin("href");break;case 48:this.popState();break;case 49:return 77;case 50:this.begin("callback_name");break;case 51:this.popState();break;case 52:this.popState(),this.begin("callback_args");break;case 53:return 75;case 54:this.popState();break;case 55:return 76;case 56:case 57:case 58:case 59:return 73;case 60:case 61:return 65;case 62:case 63:return 67;case 64:return 66;case 65:return 64;case 66:return 68;case 67:return 69;case 68:return 70;case 69:return 36;case 70:return 49;case 71:return 90;case 72:return"DOT";case 73:return"PLUS";case 74:return 87;case 75:case 76:return"EQUALS";case 77:return 94;case 78:return 28;case 79:return 30;case 80:return"PUNCTUATION";case 81:return 93;case 82:return 92;case 83:return 89;case 84:return 25}},rules:[/^(?:%%\{)/,/^(?:.*direction\s+TB[^\n]*)/,/^(?:.*direction\s+BT[^\n]*)/,/^(?:.*direction\s+RL[^\n]*)/,/^(?:.*direction\s+LR[^\n]*)/,/^(?:((?:(?!\}%%)[^:.])*))/,/^(?::)/,/^(?:\}%%)/,/^(?:((?:(?!\}%%).|\n)*))/,/^(?:%%(?!\{)*[^\n]*(\r?\n?)+)/,/^(?:%%[^\n]*(\r?\n)*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:\s*(\r?\n)+)/,/^(?:\s+)/,/^(?:classDiagram-v2\b)/,/^(?:classDiagram\b)/,/^(?:[{])/,/^(?:\[\*\])/,/^(?:$)/,/^(?:[{])/,/^(?:[}])/,/^(?:[\n])/,/^(?:[^{}\n]*)/,/^(?:class\b)/,/^(?:cssClass\b)/,/^(?:callback\b)/,/^(?:link\b)/,/^(?:click\b)/,/^(?:note for\b)/,/^(?:note\b)/,/^(?:<<)/,/^(?:>>)/,/^(?:[~])/,/^(?:[~])/,/^(?:[^~]*)/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:[`])/,/^(?:[`])/,/^(?:[^`]+)/,/^(?:href[\s]+["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:call[\s]+)/,/^(?:\([\s]*\))/,/^(?:\()/,/^(?:[^(]*)/,/^(?:\))/,/^(?:[^)]*)/,/^(?:_self\b)/,/^(?:_blank\b)/,/^(?:_parent\b)/,/^(?:_top\b)/,/^(?:\s*<\|)/,/^(?:\s*\|>)/,/^(?:\s*>)/,/^(?:\s*<)/,/^(?:\s*\*)/,/^(?:\s*o\b)/,/^(?:\s*\(\))/,/^(?:--)/,/^(?:\.\.)/,/^(?::{1}[^:\n;]+)/,/^(?::{3})/,/^(?:-)/,/^(?:\.)/,/^(?:\+)/,/^(?:%)/,/^(?:=)/,/^(?:=)/,/^(?:\w+)/,/^(?:\[)/,/^(?:\])/,/^(?:[!"#$%&'*+,-.`?\\/])/,/^(?:[0-9]+)/,/^(?:[\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6]|[\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377]|[\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5]|[\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA]|[\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE]|[\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA]|[\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0]|[\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977]|[\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2]|[\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A]|[\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39]|[\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8]|[\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C]|[\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C]|[\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99]|[\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0]|[\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D]|[\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3]|[\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10]|[\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1]|[\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81]|[\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3]|[\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6]|[\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A]|[\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081]|[\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D]|[\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0]|[\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310]|[\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C]|[\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711]|[\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7]|[\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C]|[\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16]|[\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF]|[\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC]|[\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D]|[\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D]|[\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3]|[\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F]|[\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128]|[\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184]|[\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3]|[\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6]|[\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE]|[\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C]|[\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D]|[\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC]|[\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B]|[\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788]|[\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805]|[\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB]|[\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28]|[\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5]|[\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4]|[\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E]|[\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D]|[\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36]|[\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D]|[\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC]|[\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF]|[\uFFD2-\uFFD7\uFFDA-\uFFDC])/,/^(?:\s)/,/^(?:$)/],conditions:{acc_descr_multiline:{rules:[16,17],inclusive:!1},acc_descr:{rules:[14],inclusive:!1},acc_title:{rules:[12],inclusive:!1},arg_directive:{rules:[7,8],inclusive:!1},type_directive:{rules:[6,7],inclusive:!1},open_directive:{rules:[5],inclusive:!1},callback_args:{rules:[54,55],inclusive:!1},callback_name:{rules:[51,52,53],inclusive:!1},href:{rules:[48,49],inclusive:!1},struct:{rules:[23,24,25,26,27,28],inclusive:!1},generic:{rules:[39,40],inclusive:!1},bqstring:{rules:[45,46],inclusive:!1},string:{rules:[42,43],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,9,10,11,13,15,18,19,20,21,22,23,29,30,31,32,33,34,35,36,37,38,41,44,47,50,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84],inclusive:!0}}};function X(){this.yy={}}return Q.lexer=j,X.prototype=Q,Q.Parser=X,new X}();a.parser=a;const o=a,c="classId-";let l=[],h={},A=[],p=0,d=[];const y=t=>u.e.sanitizeText(t,(0,u.g)()),E=function(t){let e="",n=t;if(t.indexOf("~")>0){const i=t.split("~");n=y(i[0]),e=y(i[1])}return{className:n,type:e}},C=function(t){const e=E(t);void 0===h[e.className]&&(h[e.className]={id:e.className,type:e.type,label:e.className,cssClasses:[],methods:[],members:[],annotations:[],domId:c+e.className+"-"+p},p++)},g=function(t){if(t in h)return h[t].domId;throw new Error("Class not found: "+t)},k=function(t,e){const n=E(t).className,i=h[n];if("string"==typeof e){const t=e.trim();t.startsWith("<<")&&t.endsWith(">>")?i.annotations.push(y(t.substring(2,t.length-2))):t.indexOf(")")>0?i.methods.push(y(t)):t&&i.members.push(y(t))}},F=function(t,e){t.split(",").forEach((function(t){let n=t;t[0].match(/\d/)&&(n=c+n),void 0!==h[n]&&h[n].cssClasses.push(e)}))},m=function(t,e,n){if("loose"!==(0,u.g)().securityLevel)return;if(void 0===e)return;const i=t;if(void 0!==h[i]){const t=g(i);let u=[];if("string"==typeof n){u=n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<u.length;t++){let e=u[t].trim();'"'===e.charAt(0)&&'"'===e.charAt(e.length-1)&&(e=e.substr(1,e.length-2)),u[t]=e}}0===u.length&&u.push(t),d.push((function(){const n=document.querySelector(`[id="${t}"]`);null!==n&&n.addEventListener("click",(function(){s.u.runFunc(e,...u)}),!1)}))}},f=function(t){let e=(0,i.Ys)(".mermaidTooltip");null===(e._groups||e)[0][0]&&(e=(0,i.Ys)("body").append("div").attr("class","mermaidTooltip").style("opacity",0));(0,i.Ys)(t).select("svg").selectAll("g.node").on("mouseover",(function(){const t=(0,i.Ys)(this);if(null===t.attr("title"))return;const n=this.getBoundingClientRect();e.transition().duration(200).style("opacity",".9"),e.text(t.attr("title")).style("left",window.scrollX+n.left+(n.right-n.left)/2+"px").style("top",window.scrollY+n.top-14+document.body.scrollTop+"px"),e.html(e.html().replace(/&lt;br\/&gt;/g,"<br/>")),t.classed("hover",!0)})).on("mouseout",(function(){e.transition().duration(500).style("opacity",0);(0,i.Ys)(this).classed("hover",!1)}))};d.push(f);let _="TB";const D={parseDirective:function(t,e,n){r.m.parseDirective(this,t,e,n)},setAccTitle:u.o,getAccTitle:u.p,getAccDescription:u.q,setAccDescription:u.v,getConfig:()=>(0,u.g)().class,addClass:C,bindFunctions:function(t){d.forEach((function(e){e(t)}))},clear:function(){l=[],h={},A=[],d=[],d.push(f),(0,u.y)()},getClass:function(t){return h[t]},getClasses:function(){return h},getNotes:function(){return A},addAnnotation:function(t,e){const n=E(t).className;h[n].annotations.push(e)},addNote:function(t,e){const n={id:`note${A.length}`,class:e,text:t};A.push(n)},getRelations:function(){return l},addRelation:function(t){u.l.debug("Adding relation: "+JSON.stringify(t)),C(t.id1),C(t.id2),t.id1=E(t.id1).className,t.id2=E(t.id2).className,t.relationTitle1=u.e.sanitizeText(t.relationTitle1.trim(),(0,u.g)()),t.relationTitle2=u.e.sanitizeText(t.relationTitle2.trim(),(0,u.g)()),l.push(t)},getDirection:()=>_,setDirection:t=>{_=t},addMember:k,addMembers:function(t,e){Array.isArray(e)&&(e.reverse(),e.forEach((e=>k(t,e))))},cleanupLabel:function(t){return t.startsWith(":")&&(t=t.substring(1)),y(t.trim())},lineType:{LINE:0,DOTTED_LINE:1},relationType:{AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3,LOLLIPOP:4},setClickEvent:function(t,e,n){t.split(",").forEach((function(t){m(t,e,n),h[t].haveCallback=!0})),F(t,"clickable")},setCssClass:F,setLink:function(t,e,n){const i=(0,u.g)();t.split(",").forEach((function(t){let u=t;t[0].match(/\d/)&&(u=c+u),void 0!==h[u]&&(h[u].link=s.u.formatUrl(e,i),"sandbox"===i.securityLevel?h[u].linkTarget="_top":h[u].linkTarget="string"==typeof n?y(n):"_blank")})),F(t,"clickable")},getTooltip:function(t){return h[t].tooltip},setTooltip:function(t,e){t.split(",").forEach((function(t){void 0!==e&&(h[t].tooltip=y(e))}))},lookUpDomId:g,setDiagramTitle:u.w,getDiagramTitle:u.x,setClassLabel:function(t,e){e&&(e=y(e));const{className:n}=E(t);h[n].label=e}},b=t=>`g.classGroup text {\n  fill: ${t.nodeBorder};\n  fill: ${t.classText};\n  stroke: none;\n  font-family: ${t.fontFamily};\n  font-size: 10px;\n\n  .title {\n    font-weight: bolder;\n  }\n\n}\n\n.nodeLabel, .edgeLabel {\n  color: ${t.classText};\n}\n.edgeLabel .label rect {\n  fill: ${t.mainBkg};\n}\n.label text {\n  fill: ${t.classText};\n}\n.edgeLabel .label span {\n  background: ${t.mainBkg};\n}\n\n.classTitle {\n  font-weight: bolder;\n}\n.node rect,\n  .node circle,\n  .node ellipse,\n  .node polygon,\n  .node path {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n    stroke-width: 1px;\n  }\n\n\n.divider {\n  stroke: ${t.nodeBorder};\n  stroke: 1;\n}\n\ng.clickable {\n  cursor: pointer;\n}\n\ng.classGroup rect {\n  fill: ${t.mainBkg};\n  stroke: ${t.nodeBorder};\n}\n\ng.classGroup line {\n  stroke: ${t.nodeBorder};\n  stroke-width: 1;\n}\n\n.classLabel .box {\n  stroke: none;\n  stroke-width: 0;\n  fill: ${t.mainBkg};\n  opacity: 0.5;\n}\n\n.classLabel .label {\n  fill: ${t.nodeBorder};\n  font-size: 10px;\n}\n\n.relation {\n  stroke: ${t.lineColor};\n  stroke-width: 1;\n  fill: none;\n}\n\n.dashed-line{\n  stroke-dasharray: 3;\n}\n\n.dotted-line{\n  stroke-dasharray: 1 2;\n}\n\n#compositionStart, .composition {\n  fill: ${t.lineColor} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#compositionEnd, .composition {\n  fill: ${t.lineColor} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#dependencyStart, .dependency {\n  fill: ${t.lineColor} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#dependencyStart, .dependency {\n  fill: ${t.lineColor} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#extensionStart, .extension {\n  fill: ${t.mainBkg} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#extensionEnd, .extension {\n  fill: ${t.mainBkg} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#aggregationStart, .aggregation {\n  fill: ${t.mainBkg} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#aggregationEnd, .aggregation {\n  fill: ${t.mainBkg} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#lollipopStart, .lollipop {\n  fill: ${t.mainBkg} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n#lollipopEnd, .lollipop {\n  fill: ${t.mainBkg} !important;\n  stroke: ${t.lineColor} !important;\n  stroke-width: 1;\n}\n\n.edgeTerminals {\n  font-size: 11px;\n}\n\n.classTitleText {\n  text-anchor: middle;\n  font-size: 18px;\n  fill: ${t.textColor};\n}\n`}}]);