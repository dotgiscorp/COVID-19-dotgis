(this["webpackJsonpcovid-dotgis"]=this["webpackJsonpcovid-dotgis"]||[]).push([[2],{24:function(e,t,a){e.exports=a.p+"static/media/zone.f9bf61af.svg"},25:function(e,t,a){e.exports=a.p+"static/media/symptom.2198b16d.svg"},26:function(e,t,a){e.exports=a.p+"static/media/age.56dae5c5.svg"},28:function(e,t,a){e.exports=a(81)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},75:function(e,t,a){},76:function(e,t,a){var r={"./as-animation-controls-widget.entry.js":[84,7],"./as-category-widget-placeholder.entry.js":[85,16],"./as-category-widget.entry.js":[86,5],"./as-dropdown.entry.js":[87,17],"./as-histogram-widget-placeholder_3.entry.js":[88,18],"./as-histogram-widget.entry.js":[89,0,1,8],"./as-infowindow.entry.js":[90,19],"./as-layer-selector-slot.entry.js":[91,20],"./as-layer-selector.entry.js":[92,21],"./as-legend-category_4.entry.js":[93,10],"./as-legend-color-bins-line.entry.js":[94,22],"./as-legend-color-bins-point.entry.js":[95,23],"./as-legend-color-bins-polygon.entry.js":[96,24],"./as-legend-color-bins.entry.js":[97,25],"./as-legend-color-category-line.entry.js":[98,26],"./as-legend-color-category-point.entry.js":[99,27],"./as-legend-color-category-polygon.entry.js":[100,28],"./as-legend-color-category.entry.js":[101,29],"./as-legend-color-continuous-line.entry.js":[102,30],"./as-legend-color-continuous-point.entry.js":[103,31],"./as-legend-color-continuous-polygon.entry.js":[104,32],"./as-legend-color-continuous.entry.js":[105,33],"./as-legend-size-bins-line.entry.js":[106,34],"./as-legend-size-bins-point.entry.js":[107,11],"./as-legend-size-bins.entry.js":[108,35],"./as-legend-size-category-line.entry.js":[109,36],"./as-legend-size-category-point.entry.js":[110,37],"./as-legend-size-category.entry.js":[111,38],"./as-legend-size-continuous-line_2.entry.js":[112,12],"./as-legend-size-continuous.entry.js":[113,39],"./as-legend.entry.js":[114,40],"./as-loader_2.entry.js":[115,41],"./as-placeholder-list.entry.js":[116,42],"./as-placeholder_2.entry.js":[117,43],"./as-range-slider-bar_2.entry.js":[118,44],"./as-range-slider.entry.js":[119,45],"./as-responsive-content.entry.js":[120,13],"./as-stacked-bar-widget.entry.js":[121,0,1,14],"./as-switch.entry.js":[122,46],"./as-tabs.entry.js":[123,15],"./as-time-series-widget.entry.js":[124,0,9],"./as-toolbar.entry.js":[125,47],"./as-widget-legend.entry.js":[126,48],"./as-y-axis.entry.js":[127,0,6]};function o(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],o=t[0];return Promise.all(t.slice(1).map(a.e)).then((function(){return a(o)}))}o.keys=function(){return Object.keys(r)},o.id=76,e.exports=o},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(13),s=a.n(n),c=a(2),i=a(4),l=a(3),u={dataLoading:!0,selectedLayer:"",form:!0,forceUpdate:!1,steps:{where:!0,symptom:!1,age:!1,thanks:!1},userInfo:{userAddressXY:[],userSymptom:"",userAge:""}},d=Object(r.createContext)(u),p=d.Provider,y=function(e,t){for(var a=e,r=0,o=Object.keys(e);r<o.length;r++){var n=o[r];a=Object(l.a)({},a,{},n===t?Object(i.a)({},n,!0):Object(i.a)({},n,!1))}return a},m=a(1),f=a.n(m),g=a(7),b=function(e){var t=e.config,a=e.sourceLoad,r=o.a.useState({}),n=Object(c.a)(r,2),s=n[0],u=n[1];o.a.useEffect((function(){if(t){for(var e={},a=0,r=Object.values(t);a<r.length;a++){var o=r[a];e=Object(l.a)({},e,Object(i.a)({},o.id,!1))}u(e)}}),[t]),o.a.useEffect((function(){s&&(Object.keys(s).every((function(e){return!0===s[e]}))&&a(!0))}),[s]);return o.a.createElement(o.a.Fragment,null,Object.values(t).map((function(e){return e.isSource&&o.a.createElement(g.d,{key:e.sourceId,id:e.sourceId,tileJsonSource:{type:"vector",tiles:e.pbf,promoteId:e.promoteId||void 0},onSourceLoaded:function(){return t=e.id,void u(Object(l.a)({},s,Object(i.a)({},t,!0)));var t}})})))},h=a(5),v=a.n(h),_=a(8),j=a(9),E=function(){function e(t){Object(_.a)(this,e),this.map=t.map,this.id=t.id,this.sourceId=t.sourceId,this.sourceLayer=t.sourceLayer,this.popupFieldsConfig=t.popupFieldsConfig||{},this._hoveredFeature=0,this._hoveredId=null,this._popupInfo={}}return Object(j.a)(e,[{key:"mouseMove",value:function(e){this.map.getCanvas().style.cursor="pointer",e.features.length>0&&(this._hoveredId&&this.map.setFeatureState({source:this.sourceId,id:this._hoveredId,sourceLayer:this.sourceLayer},{hover:!1}),this._hoveredId=e.features[0].id,this.map.setFeatureState({source:this.sourceId,id:this._hoveredId,sourceLayer:this.sourceLayer},{hover:!0}));for(var t=e.lngLat,a=Object.keys(this.popupFieldsConfig),r=e.features[0].properties,o=0,n=a;o<n.length;o++){var s=n[o];r.hasOwnProperty(s)&&(this._popupInfo=Object(l.a)({},this._popupInfo,{coords:[t.lng,t.lat],shouldRender:!0,info:Object(l.a)({},this._popupInfo.info,Object(i.a)({},s,Object(l.a)({},this.popupFieldsConfig[s],{value:r[s]})))}))}}},{key:"mouseLeave",value:function(){this.map.getCanvas().style.cursor="",this._popupInfo={shouldRender:!1},this._hoveredId&&this.map.setFeatureState({source:this.sourceId,id:this._hoveredId,sourceLayer:this.sourceLayer},{hover:!1}),this._hoveredId=null}},{key:"popupInfo",get:function(){return this._popupInfo}}]),e}();function I(e,t){var a=Object(r.useState)({shouldRender:!1}),n=Object(c.a)(a,2),s=n[0],i=n[1],l=Object(r.useState)(null),u=Object(c.a)(l,2),d=u[0],p=u[1];return o.a.useEffect((function(){return e&&t&&function(){for(var a=e,r=[],o=Object.values(t),n=0;n<o.length;n+=1)r.push(new E({map:a,id:o[n].id,sourceId:o[n].sourceId,sourceLayer:o[n].sourceLayer,popupFieldsConfig:o[n].popupFieldsConfig}));for(var s=function(e){a.on("mousemove",o[e].id,(function(t){r[e].mouseMove(t);var a=r[e].popupInfo;a&&i(a)})),a.on("mouseleave",o[e].id,(function(){r[e].mouseLeave();var t=r[e].popupInfo;t&&i(t)})),a.on("click",o[e].id,(function(e){0!==e.features.length&&p(e.features[0])})),a.on("touchstart",o[e].id,(function(e){0!==e.features.length&&p(e.features[0])}))},c=0;c<o.length;c+=1)s(c)}(),function(){!function(){for(var a=e,r=0,o=Object.values(t);r<o.length;r++){var n=o[r];a.off("mousemove",n),a.off("mouseleave",n)}}()}}),[e,t]),[s,d]}I.propTypes={map:v.a.instanceOf(m.Map).isRequired,layersIds:v.a.shape({cadastre_id:v.a.object}).isRequired};a(39);var O=function(e){var t=e.mapObject,a=o.a.useContext(d),r=a.state.dataLoading,n=a.dispatch;return o.a.useEffect((function(){var e=!1;t&&t.once("styledata",(function(){!function a(){t.isStyleLoaded()?(e||n({type:"set loading",payload:!1}),e=!0):setTimeout(a,200)}()}))}),[t]),o.a.createElement("div",{className:"".concat(r?"loader":"loader--close")},o.a.createElement("div",{className:"CDB-LoaderIcon CDB-LoaderIcon--big"},o.a.createElement("svg",{className:"CDB-LoaderIcon-spinner",viewBox:"0 0 50 50"},o.a.createElement("circle",{className:"CDB-LoaderIcon-path",cx:"25",cy:"25",r:"20",fill:"none"}))))};a(40);var w=o.a.memo((function(e){var t=e.content,a=o.a.useState([]),n=Object(c.a)(a,2),s=n[0],i=n[1];o.a.useEffect((function(){t&&i(Object.values(t))}),[t]);return o.a.createElement("div",{className:"popup-template"},s&&s.map((function(e,t){return o.a.createElement(r.Fragment,{key:"dynamic-".concat(t)},o.a.createElement("span",{className:"popup-template--static popup-template--static-".concat(t+1)},e.fieldLabel),o.a.createElement("div",{className:"popup-template--dynamic popup-template--dynamic-".concat(t+1)},o.a.createElement("span",null,"number"===typeof(a=e.value)?"".concat(new Intl.NumberFormat("es").format(a)):a),o.a.createElement("span",null,e.label)));var a})))}),(function(e,t){return e.content===t.content})),k=(a(41),{"top-right":{top:"1rem",right:"1rem",bottom:"auto",left:"auto"},"top-left":{top:"1rem",left:"1rem",bottom:"auto",right:"auto"},"bottom-right":{bottom:"1rem",right:"1rem",top:"auto",left:"auto"},"bottom-left":{bottom:"1rem",left:"1rem",top:"auto",right:"auto"}}),S=Object.keys(k),L=function(e){var t=e.children,a=e.position;return o.a.createElement("div",{className:"map-container",style:Object(l.a)({},k[a])},Array.isArray(t)?t:[t].map((function(e,t){return o.a.createElement("div",{key:"widget-".concat(t+1),className:"map-container__child"},e)})))};L.defaultProps={position:S[0]};a(42),a(43);var T=function(e){var t=e.mapObject,a=e.layers,r=o.a.useContext(d),n=r.state.selectedLayer,s=r.dispatch;o.a.useEffect((function(){if(a){var e=!0,t=!1,r=void 0;try{for(var o,n=a[Symbol.iterator]();!(e=(o=n.next()).done);e=!0){var c=o.value;c.shouldShowOnInit&&s({type:"switch layer",payload:c.layersIds[0]})}}catch(i){t=!0,r=i}finally{try{e||null==n.return||n.return()}finally{if(t)throw r}}}}),[]);var c=function(e){s({type:"switch layer",payload:e});var r=!0,o=!1,n=void 0;try{for(var c,i=a[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){var l=c.value,u=!0,d=!1,p=void 0;try{for(var y,m=l.layersIds[Symbol.iterator]();!(u=(y=m.next()).done);u=!0){var f=y.value;t.getLayer(f)&&(f.includes(e)?t.setLayoutProperty(f,"visibility","visible"):t.setLayoutProperty(f,"visibility","none"))}}catch(g){d=!0,p=g}finally{try{u||null==m.return||m.return()}finally{if(d)throw p}}}}catch(g){o=!0,n=g}finally{try{r||null==i.return||i.return()}finally{if(o)throw n}}};return o.a.useEffect((function(){n&&c(n)}),[n]),o.a.createElement("div",{className:"layers-picker"},n&&a.map((function(e,t){return o.a.createElement("div",{key:e.layersIds[0],className:"as-radio"},o.a.createElement("input",{className:"as-radio__input",type:"radio",name:e.layersIds[0],id:e.layersIds[0],value:t,checked:n===e.layersIds[0],onChange:function(e){return c(e.target.name)}}),o.a.createElement("label",{className:"as-caption",htmlFor:e.layersIds[0]},e.layerTitle))})))},x=a(23),C=a.n(x),N=(a(74),a(75),function(e){var t=e.mapObject,a=o.a.useContext(d).dispatch,r=o.a.useRef(null),n=o.a.useState([]),s=Object(c.a)(n,2),i=s[0],l=s[1],u=o.a.useState(null),p=Object(c.a)(u,2),y=p[0],m=p[1];return o.a.useEffect((function(){0!==i.length&&(a({type:"set step",payload:"symptom"}),a({type:"set info",payload:{info:"userAddressXY",value:i}}))}),[i]),o.a.useEffect((function(){m(new C.a({accessToken:"pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNrNnVxcmd3cjAxd2YzbnF1MTg3a2k4MTMifQ.iGvDEmTNK_94AabfNKfytA",mapboxgl:f.a,flyTo:!1,marker:{color:"#1785fb"},placeholder:"Buscar direcci\xf3n...",countries:"es"}))}),[r]),o.a.useEffect((function(){y&&(r.current.appendChild(y.onAdd(t)),y.on("result",(function(e){var t=e&&e.result&&e.result.center;t&&l(t)})),y.on("error",(function(){l([]),y.clear()})),y.on("clear",(function(){l([])})),r&&r.current&&y.clear())}),[y]),o.a.createElement("div",{ref:r,className:"calculator-geocoder"})}),F=a(27),z=function(e){return"https://".concat("dotgis",".carto.com/api/v2/sql?q=").concat(e,"&api_key=").concat("nSD6SXZdlIi-u0lsX0Vxfg")},A=a(6),M=a.n(A),P=a(11),q=function(){var e=Object(P.a)(M.a.mark((function e(t){var a;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=a(24),D=a.n(R),Z=a(25),K=a.n(Z),B=a(26),U=a.n(B);a(78);Object(F.a)(window);var G=function(e){var t=e.mapObject,a=o.a.useContext(d),r=a.state,n=a.dispatch,s=o.a.useRef(),c=o.a.useRef(),i=o.a.useRef();o.a.useEffect((function(){s&&s.current&&(s.current.options=[{text:"No tuve s\xedntomas",value:0},{text:"Tuve s\xedntomas, pero me hicieron el test",value:1},{text:"Fu\xed positivo",value:2},{text:"Soy positivo",value:3}],s.current.addEventListener("optionChanged",(function(e){var t=e&&e.detail;t&&(n({type:"set step",payload:"age"}),n({type:"set info",payload:{info:"userSymptom",value:t}}),n({type:"switch layer",payload:"".concat(t,"_id")}))})),s.current.style.setProperty("--as-dropdown--color--main","var(--color--primary)"),s.current.style.setProperty("--as-dropdown--background-color","var(--color--secondary)"),s.current.style.setProperty("--as-dropdown__list--border-color","var(--color--primary)"),s.current.style.setProperty("--as-dropdown--color--hover","var(--color--secondary--hover)"),s.current.style.setProperty("--as-dropdown--color","#fff"))}),[s]),o.a.useEffect((function(){c&&c.current&&(c.current.options=[{text:"<18 a\xf1os",value:1},{text:"18-40 a\xf1os",value:2},{text:"40-60 a\xf1os",value:3},{text:">60 a\xf1os",value:4}],c.current.addEventListener("optionChanged",(function(e){var t=e&&e.detail;t&&(n({type:"set step",payload:"thanks"}),n({type:"set info",payload:{info:"userAge",value:t}}))})),c.current.style.setProperty("--as-dropdown--color--main","var(--color--primary)"),c.current.style.setProperty("--as-dropdown--background-color","var(--color--secondary)"),c.current.style.setProperty("--as-dropdown__list--border-color","var(--color--primary)"),c.current.style.setProperty("--as-dropdown--color--hover","var(--color--secondary--hover)"),c.current.style.setProperty("--as-dropdown--color","#fff"))}),[c]),o.a.useEffect((function(){i&&i.current&&(i.current.style.setProperty("--as--btn--ui-color--primary","var(--color--secondary)"),i.current.style.setProperty("--as--btn--ui-color--primary--hover","var(--color--secondary--hover)"))}),[i]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"form__bg ".concat(r.form?"form__bg--opened":"")}),o.a.createElement("div",{className:"form ".concat(r.form?"form--opened":"")},o.a.createElement("div",{className:"form__images"},o.a.createElement("img",{alt:"zone-svg",src:D.a}),o.a.createElement("img",{alt:"symptom-svg",src:K.a,style:{opacity:r.steps.symptom||r.steps.age||r.steps.thanks?1:.3}}),o.a.createElement("img",{alt:"age-svg",src:U.a,style:{opacity:r.steps.age||r.steps.thanks?1:.3}})),o.a.createElement("div",{className:"form__step where",style:{display:r.steps.where?"block":"none"}},o.a.createElement("h4",null,"\xbfD\xf3nde est\xe1s?"),o.a.createElement(N,{mapObject:t})),o.a.createElement("div",{className:"form__step symptom",style:{display:r.steps.symptom?"block":"none"}},o.a.createElement("h4",null,"\xbfTienes s\xedntomas?"),o.a.createElement("as-dropdown",{ref:s,"default-text":"S\xedntomas","can-clear":"true"})),o.a.createElement("div",{className:"form__step age",style:{display:r.steps.age?"block":"none"}},o.a.createElement("h4",null,"Y por \xfaltimo... \xbfT\xfa edad?"),o.a.createElement("as-dropdown",{ref:c,"default-text":"Edad","can-clear":"true"})),o.a.createElement("div",{className:"form__step thanks",style:{display:r.steps.thanks?"block":"none"}},o.a.createElement("h4",null,"\xa1Gracias!"),o.a.createElement("button",{ref:i,className:"as-btn as-btn--primary",onClick:function(){n({type:"set loading",payload:!0});var e,a,o=r.userInfo,s=o.userAddressXY,c=o.userSymptom;q(z((e=c,a={lat:s[0],long:s[1]},"\n  WITH sub as (\n    SELECT grid.cartodb_id AS id,\n           grid.type_".concat(e,",\n           CASE\n             WHEN ST_INTERSECTS(grid.the_geom, ST_SetSRID(ST_Point(").concat(a.lat,", ").concat(a.long,"), 4326)) THEN true\n           ELSE false\n           END AS hasData\n    FROM grid_pob1001 grid\n  ) SELECT * FROM sub WHERE hasData IS true")))).then((function(e){return e.json()})).then((function(e){if(e&&e.rows)if(Array.isArray(e.rows)&&0!==e.rows.length){var a=e.rows[0].id,r=e.rows[0]["type_".concat(c)];q(z(function(e,t,a){return"UPDATE grid_pob1001 SET type_".concat(t," = ").concat(a," WHERE cartodb_id = ").concat(e)}(a,c,null===r?1:r+1))).then((function(e){e.ok&&(n({type:"clean steps",payload:"clean"}),n({type:"set loading",payload:!1}),t.flyTo({center:s,zoom:15,essential:!0}).once("moveend",(function(){n({type:"force tiles update",payload:!0}),n({type:"force tiles update",payload:!1})})))})).catch((function(e){n({type:"set loading",payload:!1}),alert("\xa1Ups! Parece que tu zona no se encuentra disponible para realizar el conteo. Pero puedes echarle un vistazo al mapa.")}))}else n({type:"clean steps",payload:"clean"}),alert("\xa1Ups! Parece que tu zona no se encuentra disponible para realizar el conteo. Pero puedes echarle un vistazo al mapa.")})).catch((function(e){n({type:"set loading",payload:!1}),alert("\xa1Ups! Parece que tu zona no se encuentra disponible para realizar el conteo. Pero puedes echarle un vistazo al mapa.")}))}},"Ver mapa"))))};N.propTypes={mapObject:v.a.instanceOf(m.Map).isRequired};a(79);var J=function(){return o.a.createElement("footer",{className:"footer",onClick:function(){return window.open("https://www.dotgiscorp.com/")}},o.a.createElement("span",null,"Crafted by dotGIS"))},Y="dotgis",W="wqTxcWJUw09P4IzpBo4kfg",H="pharmacy_voronoi",X="pharmacy_voronoi_source_id",V="pharmacy_voronoi_source_layer",Q="pharmacy",$="pharmacy_source_id",ee="pharmacy_source_layer",te="pharmacy_aggregated",ae="supermarkets_voronoi",re="supermarkets_voronoi_source_id",oe="supermarkets_voronoi_source_layer",ne="supermarkets",se="supermarkets_source_id",ce="supermarkets_source_layer",ie="supermarkets_aggregated",le="3_id",ue="2_id",de="1_id",pe="0_id",ye="infected_source_id",me="infected_source_layer",fe=function(e){var t=e.map,a=e.config,r=I(t,a),n=Object(c.a)(r,2),s=n[0],i=n[1];return o.a.useEffect((function(){if(i&&(i.source===$||i.source===se)){var e=i.geometry.coordinates;t.flyTo({center:e,zoom:Math.round(t.getZoom()+2),essential:!0})}}),[i]),o.a.createElement(o.a.Fragment,null,Object.values(a).map((function(e){return!e.isSource&&o.a.createElement(g.a,Object.assign({key:e.id,id:e.id,type:e.type,sourceId:e.sourceId,sourceLayer:e.sourceLayer,paint:e.paint},e.layout&&{layout:e.layout},e.minZoom&&{minZoom:e.minZoom},e.maxZoom&&{maxZoom:e.maxZoom}))})),s&&s.coords&&o.a.createElement(g.c,{coordinates:s.coords,style:{display:s.shouldRender?"":"none"},offset:{bottom:[-60,80]}},o.a.createElement(w,{content:s.info})))},ge=function(){function e(t){Object(_.a)(this,e),this.cartoAccount=t.cartoAccount,this.cartoMapsKey=t.cartoMapsKey,this.id=t.id,this.sql=t.sql,this.getGeoJSON=t.getGeoJSON,this.aggregationConfig=t.aggregationConfig}return Object(j.a)(e,[{key:"getTiles",value:function(){var e=Object(P.a)(M.a.mark((function e(){var t,a,r;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={buffersize:{mvt:1},layers:[{id:this.id,type:"mapnik",options:{sql:this.sql,aggregation:this.aggregationConfig||void 0,id:"cartodb_id"}}]},e.next=3,fetch("https://".concat(this.cartoAccount,".carto.com/api/v1/map").concat(this.cartoMapsKey?"?api_key=".concat(this.cartoMapsKey):""),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,e.abrupt("return",r.metadata.tilejson.vector.tiles);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"requestInfo",get:function(){return{carto_account:this.cartoAccount,carto_maps_key:this.cartoMapsKey,request_id:this.id,sql_query:this.sql,aggregation_config:this.aggregationConfig||void 0}}},{key:"updateSql",set:function(e){this.sql=e}}]),e}(),be="SELECT * FROM voronoi_farmacias",he="SELECT * FROM farmacias",ve="SELECT * FROM voronoi_supermkt_madrid",_e="SELECT * FROM supermercados_madrid",je="SELECT * FROM grid_pob1001",Ee={voronoi:{"fill-color":["case",["boolean",["feature-state","hover"],!1],"rgba(204, 102, 255, 0.15)","rgba(204, 102, 255, 0.1)"],"fill-outline-color":"rgba(204, 102, 255, 0.3)"},cluster:function(e){return{"circle-color":["step",["get",e],"rgba(0, 0, 0, 0)",100,"#b4d9cc",750,"#63a6a0",2e3,"#287274"],"circle-radius":["case",[">",["get",e],1],["step",["get",e],20,100,30,750,40],6]}},pharmacy:{"circle-color":["case",["boolean",["feature-state","hover"],!1],"rgb(255, 102, 0)","rgb(0, 255, 0)"],"circle-radius":["interpolate",["exponential",.7],["zoom"],4,0,10,3,15,5,20,7]},supermarket:{"circle-color":["case",["boolean",["feature-state","hover"],!1],"rgb(255, 102, 0)","rgb(0, 102, 255)"],"circle-radius":["interpolate",["exponential",.7],["zoom"],4,0,10,3,15,5,20,7]},label_paint:function(e){return{textColor:{"text-color":["case",[">",["get",e],100],"#333","rgba(0, 0, 0, 0)"]},layout:{"text-field":"{".concat(e,"}"),"text-font":["DIN Offc Pro Medium","Arial Unicode MS Bold"],"text-size":["step",["get",e],12,100,13,750,14],"text-allow-overlap":!0}}},infected:function(e){return{"fill-color":["interpolate",["linear"],["to-number",["get","type_".concat(e)]],0,"rgba(0, 0, 0, 0)",1,"rgba(255, 237, 160, 0.6)",2,"rgba(254, 217, 118, 0.6)",3,"rgba(254, 178, 76, 0.6)",4,"rgba(253, 141, 60, 0.6)",5,"rgba(252, 78, 42, 0.6)",6,"rgba(227, 26, 28, 0.6)",Number.MAX_SAFE_INTEGER,"rgba(189, 0, 38, 0.6)"],"fill-outline-color":"rgba(204, 102, 255, 0.3)"}}};function Ie(){var e=Object(r.useState)(null),t=Object(c.a)(e,2),a=t[0],n=t[1],s=function(){var e=Object(P.a)(M.a.mark((function e(){var t,a,r,o,s,c,u;return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new ge({cartoAccount:Y,cartoMapsKey:W,id:V,sql:be}),a=new ge({cartoAccount:Y,cartoMapsKey:W,id:ee,sql:he,aggregationConfig:{threshold:1,placement:"centroid",columns:Object(i.a)({},te,{aggregate_function:"count",aggregated_column:"rid"}),filters:Object(i.a)({},te,{greater_than:1}),resolution:64}}),r=new ge({cartoAccount:Y,cartoMapsKey:W,id:"".concat(ee,"_raw"),sql:he}),o=new ge({cartoAccount:Y,cartoMapsKey:W,id:"".concat(ce,"_raw"),sql:_e}),s=new ge({cartoAccount:Y,cartoMapsKey:W,id:ce,sql:_e,aggregationConfig:{threshold:1,placement:"centroid",columns:Object(i.a)({},ie,{aggregate_function:"count",aggregated_column:"id_super"}),filters:Object(i.a)({},ie,{greater_than:1}),resolution:64}}),c=new ge({cartoAccount:Y,cartoMapsKey:W,id:oe,sql:ve}),u=new ge({cartoAccount:Y,cartoMapsKey:"6fb966f30adb903ece7385e3aa059752a4e8fb5d",id:me,sql:je}),Promise.all([t.getTiles(),a.getTiles(),r.getTiles(),o.getTiles(),s.getTiles(),c.getTiles(),u.getTiles()]).then((function(e){n({pharmacy_voronoi_source:{isSource:!0,sourceId:X,pbf:e[0],promoteId:"cartodb_id"},pharmacy_voronoi_layer:{id:H,sourceId:X,sourceLayer:V,type:"fill",paint:Ee.voronoi,layout:{visibility:"none"}},pharmacy_raw_source:{isSource:!0,sourceId:"".concat($,"_raw"),pbf:e[2],promoteId:"cartodb_id"},pharmacy_raw_layer:{id:"".concat(Q,"_raw"),sourceId:"".concat($,"_raw"),sourceLayer:"".concat(ee,"_raw"),type:"circle",paint:Ee.pharmacy,popupFieldsConfig:{nombre:{fieldLabel:"Nombre",label:""},direccion:{fieldLabel:"Direcci\xf3n",label:""}},layout:{visibility:"none"}},pharmacy_cluster_source:{isSource:!0,sourceId:$,pbf:e[1],promoteId:"cartodb_id"},pharmacy_cluster_layer:{id:Q,sourceId:$,sourceLayer:ee,type:"circle",paint:Ee.cluster(te),layout:{visibility:"none"}},pharmacy_cluster_labels_layer:{id:"".concat(Q,"_labels"),sourceId:$,sourceLayer:ee,type:"symbol",paint:Ee.label_paint(te).textColor,layout:Object(l.a)({visibility:"none"},Ee.label_paint(te).layout)},supermarkets_voronoi_source:{isSource:!0,sourceId:re,pbf:e[5],promoteId:"cartodb_id"},supermarkets_voronoi_layer:{id:ae,sourceId:re,sourceLayer:oe,type:"fill",paint:Ee.voronoi,layout:{visibility:"none"}},supermarkets_raw_source:{isSource:!0,sourceId:"".concat(se,"_raw"),pbf:e[3],promoteId:"cartodb_id"},supermarkets_raw_layer:{id:"".concat(ne,"_raw"),sourceId:"".concat(se,"_raw"),sourceLayer:"".concat(ce,"_raw"),type:"circle",paint:Ee.supermarket,popupFieldsConfig:{nombre:{fieldLabel:"Nombre",label:""},direccion:{fieldLabel:"Direcci\xf3n",label:""}},layout:{visibility:"none"}},supermarkets_cluster_source:{isSource:!0,sourceId:se,pbf:e[4],promoteId:"cartodb_id"},supermarkets_cluster_layer:{id:ne,sourceId:se,sourceLayer:ce,type:"circle",paint:Ee.cluster(ie),layout:{visibility:"none"}},supermarket_cluster_labels_layer:{id:"".concat(ne,"_labels"),sourceId:se,sourceLayer:ce,pbf:e[4],promoteId:"cartodb_id",type:"symbol",paint:Ee.label_paint(ie).textColor,layout:Object(l.a)({visibility:"none"},Ee.label_paint(ie).layout)},infected_source:{isSource:!0,sourceId:ye,pbf:e[6],promoteId:"cartodb_id"},infected_layer:{id:le,sourceId:ye,sourceLayer:me,type:"fill",paint:Ee.infected(3),popupFieldsConfig:{type_3:{fieldLabel:"infectados",label:""}},layout:{visibility:"visible"}},infected_layer_was:{id:ue,sourceId:ye,sourceLayer:me,type:"fill",paint:Ee.infected(2),popupFieldsConfig:{type_2:{fieldLabel:"fueron positivos",label:""}},layout:{visibility:"none"}},infected_layer_test:{id:de,sourceId:ye,sourceLayer:me,type:"fill",paint:Ee.infected(1),popupFieldsConfig:{type_1:{fieldLabel:"hubo s\xedntomas, sin prueba de test",label:""}},layout:{visibility:"none"}},infected_layer_no:{id:pe,sourceId:ye,sourceLayer:me,type:"fill",paint:Ee.infected(0),popupFieldsConfig:{type_0:{fieldLabel:"sin s\xedntomas",label:""}},layout:{visibility:"none"}}})}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return o.a.useEffect((function(){s()}),[]),[a]}Ie.propTypes={mapFilters:v.a.oneOfType([v.a.object]).isRequired};var Oe=Object(g.f)({accessToken:"pk.eyJ1IjoiZG90Z2lzIiwiYSI6ImNqd3Z6amtjMTBjOTA0OW84ZjVvYzF6bjQifQ.LIbUaYq3GaiWTzsBV6YnTA",dragRotate:!1,minZoom:12}),we=[{shouldShowOnInit:!0,layersIds:[le],layerTitle:"Positivos"},{shouldShowOnInit:!1,layersIds:[ue],layerTitle:"Fueron positivos"},{shouldShowOnInit:!1,layersIds:[de],layerTitle:"Hubo s\xedntomas, sin prueba de test"},{shouldShowOnInit:!1,layersIds:[pe],layerTitle:"Sin s\xedntomas"},{shouldShowOnInit:!1,layersIds:[Q,H,"".concat(Q,"_raw"),"".concat(Q,"_labels")],layerTitle:"Farmacias"},{shouldShowOnInit:!1,layersIds:[ne,ae,"".concat(ne,"_raw"),"".concat(ne,"_labels")],layerTitle:"Supermercados"}],ke=function(){var e=o.a.useState(),t=Object(c.a)(e,2),a=t[0],r=t[1],n=o.a.useState(!1),s=Object(c.a)(n,2),i=s[0],l=s[1],u=Ie(),d=Object(c.a)(u,1)[0];return o.a.createElement(o.a.Fragment,null,(!!f.a.supported()||(alert("Tu navegador no soporta Mapbox GL JS."),!1))&&o.a.createElement(o.a.Fragment,null,a&&o.a.createElement(o.a.Fragment,null,o.a.createElement(O,{mapObject:a}),o.a.createElement(G,{mapObject:a}),o.a.createElement(L,null,o.a.createElement(T,{key:"layer-picker",mapObject:a,layers:we}))),o.a.createElement(Oe,{style:"https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",center:[-3.70379,40.416775],zoom:[15],containerStyle:{position:"absolute",width:"100%",height:"100%"}},o.a.createElement(g.b.Consumer,null,(function(e){return!a&&r(e),o.a.createElement(o.a.Fragment,null,d&&o.a.createElement(o.a.Fragment,null,o.a.createElement(b,{key:"sources",config:d,sourceLoad:function(e){return l(e)}}),i&&o.a.createElement(o.a.Fragment,null,o.a.createElement(fe,{key:"map",map:e,config:d})),o.a.createElement(g.e,{key:"zoom-control",position:"bottom-left",className:"custom__zoom"})))}))),o.a.createElement(J,null)))},Se=(a(80),o.a.createElement((function(e){var t=e.children,a=Object(r.useReducer)((function(e,t){switch(t.type){case"set loading":return Object(l.a)({},e,{dataLoading:t.payload});case"switch layer":return Object(l.a)({},e,{selectedLayer:t.payload});case"set step":return Object(l.a)({},e,{steps:y(e.steps,t.payload)});case"clean steps":return Object(l.a)({},e,{form:!e.form});case"force tiles update":return Object(l.a)({},e,{forceUpdate:t.payloade});case"set info":return Object(l.a)({},e,{userInfo:Object(l.a)({},e.userInfo,Object(i.a)({},t.payload.info,t.payload.value))});default:return e}}),u),n=Object(c.a)(a,2),s=n[0],d=n[1];return o.a.createElement(p,{value:{state:s,dispatch:d}},t)}),null,o.a.createElement(ke,null)));s.a.render(Se,document.getElementById("root"))}},[[28,3,4]]]);
//# sourceMappingURL=main.a9b64932.chunk.js.map