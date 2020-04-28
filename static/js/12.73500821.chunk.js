(this["webpackJsonpcovid-dotgis"]=this["webpackJsonpcovid-dotgis"]||[]).push([[12],{112:function(t,e,i){"use strict";i.r(e),i.d(e,"as_legend_size_continuous_line",(function(){return s})),i.d(e,"as_legend_size_continuous_point",(function(){return a}));var n=i(14),o=i(132),s=function(){function t(t){Object(n.g)(this,t),this.data=null,this.orientation="vertical",this.size=300,this.leadingLineStrokeWidth=.5,this.textLineHeight=12,this.xMarginFactor=.1,this.yMarginFactor=.1,this.width=null,this.rSize=0}return t.prototype.componentWillUpdate=function(){this.parseSize()},t.prototype.componentWillLoad=function(){this.parseSize()},t.prototype.render=function(){var t,e=this;if(this.data&&0!==this.data.length){var i=this.getSortedData(),o=i[0].width,s=o/2,a=Math.max(o+4,this.width),r="horizontal"===this.orientation||null===this.width?0:(this.width-o)/2,l=[],c=[];i.forEach((function(t,n){var u=s*(t.width/o),h=n/(i.length-1),d=s+u,p=s-u,g=e.size-e.size*h,z=g,f="vertical"===e.orientation?[d+r,z]:[z+r,d],x="vertical"===e.orientation?[p+r,g]:[z+r,p];if(l.splice(n,0,"L"+f.join(" ")),l.splice(l.length-n,0,"L"+x.join(" ")),t.label){var v=e.getOffset(n,i.length-1),y=s+u,b=e.size-e.size*h+v,w=[y,b],S=[a,b];"horizontal"===e.orientation&&(w.reverse(),S.reverse()),w[0]+=r,S[0]+=r,c.push({label:t.label,x1:w[0],x2:S[0],y1:w[1],y2:S[1]})}})),"horizontal"===this.orientation?l.splice(0,0,"M"+this.size+" 0"):l.splice(0,0,"M0 "+this.size);var u=((t={})["as-legend-size-continuous-line--"+this.orientation]=!0,t);return Object(n.f)("svg",{class:u,style:this.getSVGStyle(),viewBox:this.getSVGViewBox()},Object(n.f)("g",null,Object(n.f)("path",{style:this.getPathStyle(),d:l.join(" ")+" Z"}),Object(n.f)("g",null,c.map((function(t){var i=t.x1,o=t.x2,s=t.y1,a=t.y2,l=-r;return"horizontal"===e.orientation&&(l=0),Object(n.f)("line",{"stroke-width":e.leadingLineStrokeWidth,x1:i,y1:s,x2:o+l,y2:a})}))),Object(n.f)("g",null,c.map((function(t){var i=t.label,o=t.x2,s=t.y2,a={x:4-r,y:e.textLineHeight/4};return"horizontal"===e.orientation&&(a.x=0,a.y=e.textLineHeight),[Object(n.f)("text",{x:o+a.x,y:s+a.y},i)]})))))}},t.prototype.parseSize=function(){if(this.data&&0!==this.data.length){var t=this.getSortedData()[0].width;this.rSize=Math.max(t+4+this.textLineHeight,0)}},t.prototype.getSortedData=function(){return null===this.data?this.data:this.data.slice().sort((function(t,e){return e.width-t.width}))},t.prototype.getPathStyle=function(){return{fill:""+this.data[0].color}},t.prototype.getSVGStyle=function(){return{height:("horizontal"===this.orientation?this.rSize:this.size)*(1+this.yMarginFactor)+"px",width:this.size*(1+this.xMarginFactor)+"px"}},t.prototype.getSVGViewBox=function(){var t="horizontal"===this.orientation?this.rSize:this.size,e=this.size*(-this.xMarginFactor/2),i=t*(-this.yMarginFactor/2);return"vertical"===this.orientation&&(e=0),e+" "+i+" "+this.size*(1+this.xMarginFactor)+" "+t*(1+this.yMarginFactor)},t.prototype.getOffset=function(t,e){var i=0;return t===e&&(i+=this.leadingLineStrokeWidth),0===t&&(i-=this.leadingLineStrokeWidth),i},Object.defineProperty(t,"style",{get:function(){return"as-legend-size-continuous-line{display:block;overflow:hidden}as-legend-size-continuous-line svg text{font:var(--as--font--caption)}as-legend-size-continuous-line svg line{stroke:var(--as-legend--color)}as-legend-size-continuous-line svg.as-legend-size-continuous-line--horizontal text{text-anchor:middle}"},enumerable:!0,configurable:!0}),t}(),a=function(){function t(t){Object(n.g)(this,t),this.orientation="vertical",this.scale=1}return t.prototype.render=function(){var t,e=this;if(!this.data)return null;var i=((t={"as-legend-size-continuous-point--wrapper":!0})["as-legend-size-continuous-point--"+this.orientation]=!0,t),o=this.data.slice().sort((function(t,e){return e.width-t.width}));this.maxSize=o[0].width*this.scale;var s={height:this.maxSize+"px",width:this.maxSize+"px"};return Object(n.f)("div",{class:i},Object(n.f)("span",{class:"as-legend-size-continuous-point--label"},o[o.length-1].label),Object(n.f)("div",{style:s,class:"as-legend-size-continuous-point--steps"},o.map((function(t){return e.renderStep(t)}))),Object(n.f)("span",{class:"as-legend-size-continuous-point--label"},o[0].label))},t.prototype.renderStep=function(t){var e="1px "+(t.strokeStyle||"solid")+" "+t.strokeColor,i=Object(o.a)(t.strokeStyle)?2:0,s=Math.round((t.width+i)*this.scale)+"px",a={backgroundColor:t.color,border:e,height:s,width:s};return Object(n.f)("div",{class:"as-legend-size-continuous-point--circle",style:a})},Object.defineProperty(t,"style",{get:function(){return"as-legend-size-continuous-point{--as-legend-size-continuous-point--color:var(--as--color--type-01);--as-legend-size-continuous-point--shadow:rgba(0,0,0,0.1);display:block}as-legend-size-continuous-point .as-legend-size-continuous-point--steps{position:relative;margin:8px}as-legend-size-continuous-point .as-legend-size-continuous-point--steps,as-legend-size-continuous-point .as-legend-size-continuous-point--wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}as-legend-size-continuous-point .as-legend-size-continuous-point--circle{position:absolute;border:2px solid var(--as-legend-size-continuous-point--shadow);border-radius:50%;-webkit-box-shadow:0 0 2px 0 var(--as-legend-size-continuous-point--shadow);box-shadow:0 0 2px 0 var(--as-legend-size-continuous-point--shadow)}as-legend-size-continuous-point .as-legend-size-continuous-point--label{color:var(--as-legend-size-continuous-point--color);font:var(--as--font--caption);text-transform:capitalize;white-space:nowrap}as-legend-size-continuous-point .as-legend-size-continuous-point--vertical .as-legend-size-continuous-point--steps,as-legend-size-continuous-point .as-legend-size-continuous-point--vertical.as-legend-size-continuous-point--wrapper{-ms-flex-direction:column-reverse;flex-direction:column-reverse}"},enumerable:!0,configurable:!0}),t}()},132:function(t,e,i){"use strict";function n(t){return-1===["none","initial","inherit","hidden","unset"].indexOf(t)}i.d(e,"a",(function(){return n}))}}]);
//# sourceMappingURL=12.73500821.chunk.js.map