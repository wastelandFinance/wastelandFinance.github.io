import{r as Be,a as Ue}from"./@intlify-22bbbbdc.js";import{r as Ge}from"./vue-b8cbd5d3.js";var I={};/*!
  * vue-i18n v9.1.10
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */Object.defineProperty(I,"__esModule",{value:!0});var n=Be,f=Ue,_=Ge;const ue="9.1.10",Ye={[6]:"Fall back to {type} '{key}' with root locale.",[7]:"Not supported 'preserve'.",[8]:"Not supported 'formatter'.",[9]:"Not supported 'preserveDirectiveContent'.",[10]:"Not supported 'getChoiceIndex'.",[11]:"Component name legacy compatible: '{name}' -> 'i18n'",[12]:"Not found parent scope. use the global scope."};function M(e,...t){return n.format(Ye[e],...t)}function v(e,...t){return f.createCompileError(e,null,{messages:qe,args:t})}const qe={[14]:"Unexpected return type in composer",[15]:"Invalid argument",[16]:"Must be called at the top of a `setup` function",[17]:"Need to install with `app.use` function",[22]:"Unexpected error",[18]:"Not available in legacy mode",[19]:"Required in value: {0}",[20]:"Invalid value",[21]:"Cannot setup vue-devtools plugin"},G="__INTLIFY_META__",Y=n.makeSymbol("__transrateVNode"),q=n.makeSymbol("__datetimeParts"),z=n.makeSymbol("__numberParts"),J=n.makeSymbol("__enableEmitter"),K=n.makeSymbol("__disableEmitter"),me=n.makeSymbol("__setPluralRules");n.makeSymbol("__intlifyMeta");const ge=n.makeSymbol("__injectWithOption");let ie=0;function ce(e){return(t,o,a,l)=>e(o,a,_.getCurrentInstance()||void 0,l)}function ee(e,t){const{messages:o,__i18n:a}=t,l=n.isPlainObject(o)?o:n.isArray(a)?{}:{[e]:{}};if(n.isArray(a)&&a.forEach(({locale:s,resource:c})=>{s?(l[s]=l[s]||{},A(c,l[s])):A(c,l)}),t.flatJson)for(const s in l)n.hasOwn(l,s)&&f.handleFlatJson(l[s]);return l}const R=e=>!n.isObject(e)||n.isArray(e);function A(e,t){if(R(e)||R(t))throw v(20);for(const o in e)n.hasOwn(e,o)&&(R(e[o])||R(t[o])?t[o]=e[o]:A(e[o],t[o]))}const ze=()=>{const e=_.getCurrentInstance();return e&&e.type[G]?{[G]:e.type[G]}:null};function te(e={}){const{__root:t}=e,o=t===void 0;let a=n.isBoolean(e.inheritLocale)?e.inheritLocale:!0;const l=_.ref(t&&a?t.locale.value:n.isString(e.locale)?e.locale:"en-US"),s=_.ref(t&&a?t.fallbackLocale.value:n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:l.value),c=_.ref(ee(l.value,e)),u=_.ref(n.isPlainObject(e.datetimeFormats)?e.datetimeFormats:{[l.value]:{}}),g=_.ref(n.isPlainObject(e.numberFormats)?e.numberFormats:{[l.value]:{}});let b=t?t.missingWarn:n.isBoolean(e.missingWarn)||n.isRegExp(e.missingWarn)?e.missingWarn:!0,d=t?t.fallbackWarn:n.isBoolean(e.fallbackWarn)||n.isRegExp(e.fallbackWarn)?e.fallbackWarn:!0,h=t?t.fallbackRoot:n.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,y=!!e.fallbackFormat,L=n.isFunction(e.missing)?e.missing:null,O=n.isFunction(e.missing)?ce(e.missing):null,S=n.isFunction(e.postTranslation)?e.postTranslation:null,w=n.isBoolean(e.warnHtmlMessage)?e.warnHtmlMessage:!0,N=!!e.escapeParameter;const $=t?t.modifiers:n.isPlainObject(e.modifiers)?e.modifiers:{};let T=e.pluralRules||t&&t.pluralRules,m;function C(){return f.createCoreContext({version:ue,locale:l.value,fallbackLocale:s.value,messages:c.value,datetimeFormats:u.value,numberFormats:g.value,modifiers:$,pluralRules:T,missing:O===null?void 0:O,missingWarn:b,fallbackWarn:d,fallbackFormat:y,unresolving:!0,postTranslation:S===null?void 0:S,warnHtmlMessage:w,escapeParameter:N,__datetimeFormatters:n.isPlainObject(m)?m.__datetimeFormatters:void 0,__numberFormatters:n.isPlainObject(m)?m.__numberFormatters:void 0,__v_emitter:n.isPlainObject(m)?m.__v_emitter:void 0,__meta:{framework:"vue"}})}m=C(),f.updateFallbackLocale(m,l.value,s.value);function ne(){return[l.value,s.value,c.value,u.value,g.value]}const P=_.computed({get:()=>l.value,set:r=>{l.value=r,m.locale=l.value}}),W=_.computed({get:()=>s.value,set:r=>{s.value=r,m.fallbackLocale=s.value,f.updateFallbackLocale(m,l.value,r)}}),x=_.computed(()=>c.value),_e=_.computed(()=>u.value),de=_.computed(()=>g.value);function ve(){return n.isFunction(S)?S:null}function he(r){S=r,m.postTranslation=r}function ke(){return L}function Fe(r){r!==null&&(O=ce(r)),L=r,m.missing=O}function ye(r,i){return r!=="translate"||!i.resolvedMessage}function j(r,i,F,k,U,D){ne();let E;try{f.setAdditionalMeta(ze()),E=r(m)}finally{f.setAdditionalMeta(null)}if(n.isNumber(E)&&E===f.NOT_REOSLVED){const[p,xe]=i();if(t&&n.isString(p)&&ye(F,xe)){h&&(f.isTranslateFallbackWarn(d,p)||f.isTranslateMissingWarn(b,p))&&n.warn(M(6,{key:p,type:F}));{const{__v_emitter:se}=m;se&&h&&se.emit("fallback",{type:F,key:p,to:"global",groupId:`${F}:${p}`})}}return t&&h?k(t):U(p)}else{if(D(E))return E;throw v(14)}}function re(...r){return j(i=>f.translate(i,...r),()=>f.parseTranslateArgs(...r),"translate",i=>i.t(...r),i=>i,i=>n.isString(i))}function Me(...r){const[i,F,k]=r;if(k&&!n.isObject(k))throw v(15);return re(i,F,n.assign({resolvedMessage:!0},k||{}))}function Oe(...r){return j(i=>f.datetime(i,...r),()=>f.parseDateTimeArgs(...r),"datetime format",i=>i.d(...r),()=>f.MISSING_RESOLVE_VALUE,i=>n.isString(i))}function Ie(...r){return j(i=>f.number(i,...r),()=>f.parseNumberArgs(...r),"number format",i=>i.n(...r),()=>f.MISSING_RESOLVE_VALUE,i=>n.isString(i))}function Le(r){return r.map(i=>n.isString(i)?_.createVNode(_.Text,null,i,0):i)}const Se={normalize:Le,interpolate:r=>r,type:"vnode"};function pe(...r){return j(i=>{let F;const k=i;try{k.processor=Se,F=f.translate(k,...r)}finally{k.processor=null}return F},()=>f.parseTranslateArgs(...r),"translate",i=>i[Y](...r),i=>[_.createVNode(_.Text,null,i,0)],i=>n.isArray(i))}function Te(...r){return j(i=>f.number(i,...r),()=>f.parseNumberArgs(...r),"number format",i=>i[z](...r),()=>[],i=>n.isString(i)||n.isArray(i))}function je(...r){return j(i=>f.datetime(i,...r),()=>f.parseDateTimeArgs(...r),"datetime format",i=>i[q](...r),()=>[],i=>n.isString(i)||n.isArray(i))}function we(r){T=r,m.pluralRules=T}function Ne(r,i){const F=n.isString(i)?i:l.value,k=le(F);return f.resolveValue(k,r)!==null}function Pe(r){let i=null;const F=f.getLocaleChain(m,s.value,l.value);for(let k=0;k<F.length;k++){const U=c.value[F[k]]||{},D=f.resolveValue(U,r);if(D!=null){i=D;break}}return i}function We(r){const i=Pe(r);return i!=null?i:t?t.tm(r)||{}:{}}function le(r){return c.value[r]||{}}function Ee(r,i){c.value[r]=i,m.messages=c.value}function $e(r,i){c.value[r]=c.value[r]||{},A(i,c.value[r]),m.messages=c.value}function Ce(r){return u.value[r]||{}}function De(r,i){u.value[r]=i,m.datetimeFormats=u.value,f.clearDateTimeFormat(m,r,i)}function Re(r,i){u.value[r]=n.assign(u.value[r]||{},i),m.datetimeFormats=u.value,f.clearDateTimeFormat(m,r,i)}function He(r){return g.value[r]||{}}function Ae(r,i){g.value[r]=i,m.numberFormats=g.value,f.clearNumberFormat(m,r,i)}function Ve(r,i){g.value[r]=n.assign(g.value[r]||{},i),m.numberFormats=g.value,f.clearNumberFormat(m,r,i)}ie++,t&&(_.watch(t.locale,r=>{a&&(l.value=r,m.locale=r,f.updateFallbackLocale(m,l.value,s.value))}),_.watch(t.fallbackLocale,r=>{a&&(s.value=r,m.fallbackLocale=r,f.updateFallbackLocale(m,l.value,s.value))}));const B={id:ie,locale:P,fallbackLocale:W,get inheritLocale(){return a},set inheritLocale(r){a=r,r&&t&&(l.value=t.locale.value,s.value=t.fallbackLocale.value,f.updateFallbackLocale(m,l.value,s.value))},get availableLocales(){return Object.keys(c.value).sort()},messages:x,datetimeFormats:_e,numberFormats:de,get modifiers(){return $},get pluralRules(){return T||{}},get isGlobal(){return o},get missingWarn(){return b},set missingWarn(r){b=r,m.missingWarn=b},get fallbackWarn(){return d},set fallbackWarn(r){d=r,m.fallbackWarn=d},get fallbackRoot(){return h},set fallbackRoot(r){h=r},get fallbackFormat(){return y},set fallbackFormat(r){y=r,m.fallbackFormat=y},get warnHtmlMessage(){return w},set warnHtmlMessage(r){w=r,m.warnHtmlMessage=r},get escapeParameter(){return N},set escapeParameter(r){N=r,m.escapeParameter=r},t:re,rt:Me,d:Oe,n:Ie,te:Ne,tm:We,getLocaleMessage:le,setLocaleMessage:Ee,mergeLocaleMessage:$e,getDateTimeFormat:Ce,setDateTimeFormat:De,mergeDateTimeFormat:Re,getNumberFormat:He,setNumberFormat:Ae,mergeNumberFormat:Ve,getPostTranslationHandler:ve,setPostTranslationHandler:he,getMissingHandler:ke,setMissingHandler:Fe,[Y]:pe,[z]:Te,[q]:je,[me]:we,[ge]:e.__injectWithOption};return B[J]=r=>{m.__v_emitter=r},B[K]=()=>{m.__v_emitter=void 0},B}function Je(e){const t=n.isString(e.locale)?e.locale:"en-US",o=n.isString(e.fallbackLocale)||n.isArray(e.fallbackLocale)||n.isPlainObject(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:t,a=n.isFunction(e.missing)?e.missing:void 0,l=n.isBoolean(e.silentTranslationWarn)||n.isRegExp(e.silentTranslationWarn)?!e.silentTranslationWarn:!0,s=n.isBoolean(e.silentFallbackWarn)||n.isRegExp(e.silentFallbackWarn)?!e.silentFallbackWarn:!0,c=n.isBoolean(e.fallbackRoot)?e.fallbackRoot:!0,u=!!e.formatFallbackMessages,g=n.isPlainObject(e.modifiers)?e.modifiers:{},b=e.pluralizationRules,d=n.isFunction(e.postTranslation)?e.postTranslation:void 0,h=n.isString(e.warnHtmlInMessage)?e.warnHtmlInMessage!=="off":!0,y=!!e.escapeParameterHtml,L=n.isBoolean(e.sync)?e.sync:!0;e.formatter&&n.warn(M(8)),e.preserveDirectiveContent&&n.warn(M(9));let O=e.messages;if(n.isPlainObject(e.sharedMessages)){const C=e.sharedMessages;O=Object.keys(C).reduce((P,W)=>{const x=P[W]||(P[W]={});return n.assign(x,C[W]),P},O||{})}const{__i18n:S,__root:w,__injectWithOption:N}=e,$=e.datetimeFormats,T=e.numberFormats,m=e.flatJson;return{locale:t,fallbackLocale:o,messages:O,flatJson:m,datetimeFormats:$,numberFormats:T,missing:a,missingWarn:l,fallbackWarn:s,fallbackRoot:c,fallbackFormat:u,modifiers:g,pluralRules:b,postTranslation:d,warnHtmlMessage:h,escapeParameter:y,inheritLocale:L,__i18n:S,__root:w,__injectWithOption:N}}function Z(e={}){const t=te(Je(e)),o={id:t.id,get locale(){return t.locale.value},set locale(a){t.locale.value=a},get fallbackLocale(){return t.fallbackLocale.value},set fallbackLocale(a){t.fallbackLocale.value=a},get messages(){return t.messages.value},get datetimeFormats(){return t.datetimeFormats.value},get numberFormats(){return t.numberFormats.value},get availableLocales(){return t.availableLocales},get formatter(){return n.warn(M(8)),{interpolate(){return[]}}},set formatter(a){n.warn(M(8))},get missing(){return t.getMissingHandler()},set missing(a){t.setMissingHandler(a)},get silentTranslationWarn(){return n.isBoolean(t.missingWarn)?!t.missingWarn:t.missingWarn},set silentTranslationWarn(a){t.missingWarn=n.isBoolean(a)?!a:a},get silentFallbackWarn(){return n.isBoolean(t.fallbackWarn)?!t.fallbackWarn:t.fallbackWarn},set silentFallbackWarn(a){t.fallbackWarn=n.isBoolean(a)?!a:a},get modifiers(){return t.modifiers},get formatFallbackMessages(){return t.fallbackFormat},set formatFallbackMessages(a){t.fallbackFormat=a},get postTranslation(){return t.getPostTranslationHandler()},set postTranslation(a){t.setPostTranslationHandler(a)},get sync(){return t.inheritLocale},set sync(a){t.inheritLocale=a},get warnHtmlInMessage(){return t.warnHtmlMessage?"warn":"off"},set warnHtmlInMessage(a){t.warnHtmlMessage=a!=="off"},get escapeParameterHtml(){return t.escapeParameter},set escapeParameterHtml(a){t.escapeParameter=a},get preserveDirectiveContent(){return n.warn(M(9)),!0},set preserveDirectiveContent(a){n.warn(M(9))},get pluralizationRules(){return t.pluralRules||{}},__composer:t,t(...a){const[l,s,c]=a,u={};let g=null,b=null;if(!n.isString(l))throw v(15);const d=l;return n.isString(s)?u.locale=s:n.isArray(s)?g=s:n.isPlainObject(s)&&(b=s),n.isArray(c)?g=c:n.isPlainObject(c)&&(b=c),t.t(d,g||b||{},u)},rt(...a){return t.rt(...a)},tc(...a){const[l,s,c]=a,u={plural:1};let g=null,b=null;if(!n.isString(l))throw v(15);const d=l;return n.isString(s)?u.locale=s:n.isNumber(s)?u.plural=s:n.isArray(s)?g=s:n.isPlainObject(s)&&(b=s),n.isString(c)?u.locale=c:n.isArray(c)?g=c:n.isPlainObject(c)&&(b=c),t.t(d,g||b||{},u)},te(a,l){return t.te(a,l)},tm(a){return t.tm(a)},getLocaleMessage(a){return t.getLocaleMessage(a)},setLocaleMessage(a,l){t.setLocaleMessage(a,l)},mergeLocaleMessage(a,l){t.mergeLocaleMessage(a,l)},d(...a){return t.d(...a)},getDateTimeFormat(a){return t.getDateTimeFormat(a)},setDateTimeFormat(a,l){t.setDateTimeFormat(a,l)},mergeDateTimeFormat(a,l){t.mergeDateTimeFormat(a,l)},n(...a){return t.n(...a)},getNumberFormat(a){return t.getNumberFormat(a)},setNumberFormat(a,l){t.setNumberFormat(a,l)},mergeNumberFormat(a,l){t.mergeNumberFormat(a,l)},getChoiceIndex(a,l){return n.warn(M(10)),-1},__onComponentInstanceCreated(a){const{componentInstanceCreatedListener:l}=e;l&&l(a,o)}};return o.__enableEmitter=a=>{const l=t;l[J]&&l[J](a)},o.__disableEmitter=()=>{const a=t;a[K]&&a[K]()},o}const ae={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}},H={name:"i18n-t",props:n.assign({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>n.isNumber(e)||!isNaN(e)}},ae),setup(e,t){const{slots:o,attrs:a}=t,l=e.i18n||V({useScope:e.scope,__useComponent:!0}),s=Object.keys(o).filter(c=>c!=="_");return()=>{const c={};e.locale&&(c.locale=e.locale),e.plural!==void 0&&(c.plural=n.isString(e.plural)?+e.plural:e.plural);const u=Ke(t,s),g=l[Y](e.keypath,u,c),b=n.assign({},a);return n.isString(e.tag)||n.isObject(e.tag)?_.h(e.tag,b,g):_.h(_.Fragment,b,g)}}};function Ke({slots:e},t){return t.length===1&&t[0]==="default"?e.default?e.default():[]:t.reduce((o,a)=>{const l=e[a];return l&&(o[a]=l()),o},{})}function fe(e,t,o,a){const{slots:l,attrs:s}=t;return()=>{const c={part:!0};let u={};e.locale&&(c.locale=e.locale),n.isString(e.format)?c.key=e.format:n.isObject(e.format)&&(n.isString(e.format.key)&&(c.key=e.format.key),u=Object.keys(e.format).reduce((h,y)=>o.includes(y)?n.assign({},h,{[y]:e.format[y]}):h,{}));const g=a(e.value,c,u);let b=[c.key];n.isArray(g)?b=g.map((h,y)=>{const L=l[h.type];return L?L({[h.type]:h.value,index:y,parts:g}):[h.value]}):n.isString(g)&&(b=[g]);const d=n.assign({},s);return n.isString(e.tag)||n.isObject(e.tag)?_.h(e.tag,d,b):_.h(_.Fragment,d,b)}}const Ze=["localeMatcher","style","unit","unitDisplay","currency","currencyDisplay","useGrouping","numberingSystem","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","notation","formatMatcher"],Q={name:"i18n-n",props:n.assign({value:{type:Number,required:!0},format:{type:[String,Object]}},ae),setup(e,t){const o=e.i18n||V({useScope:"parent",__useComponent:!0});return fe(e,t,Ze,(...a)=>o[z](...a))}},Qe=["dateStyle","timeStyle","fractionalSecondDigits","calendar","dayPeriod","numberingSystem","localeMatcher","timeZone","hour12","hourCycle","formatMatcher","weekday","era","year","month","day","hour","minute","second","timeZoneName"],X={name:"i18n-d",props:n.assign({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ae),setup(e,t){const o=e.i18n||V({useScope:"parent",__useComponent:!0});return fe(e,t,Qe,(...a)=>o[q](...a))}};function Xe(e,t){const o=e;if(e.mode==="composition")return o.__getInstance(t)||e.global;{const a=o.__getInstance(t);return a!=null?a.__composer:e.global.__composer}}function be(e){const t=(o,{instance:a,value:l,modifiers:s})=>{if(!a||!a.$)throw v(22);const c=Xe(e,a.$);s.preserve&&n.warn(M(7));const u=et(l);o.textContent=c.t(...tt(u))};return{beforeMount:t,beforeUpdate:t}}function et(e){if(n.isString(e))return{path:e};if(n.isPlainObject(e)){if(!("path"in e))throw v(19,"path");return e}else throw v(20)}function tt(e){const{path:t,locale:o,args:a,choice:l,plural:s}=e,c={},u=a||{};return n.isString(o)&&(c.locale=o),n.isNumber(l)&&(c.plural=l),n.isNumber(s)&&(c.plural=s),[t,u,c]}function at(e,t,...o){const a=n.isPlainObject(o[0])?o[0]:{},l=!!a.useI18nComponentName,s=n.isBoolean(a.globalInstall)?a.globalInstall:!0;s&&l&&n.warn(M(11,{name:H.name})),s&&(e.component(l?"i18n":H.name,H),e.component(Q.name,Q),e.component(X.name,X)),e.directive("t",be(t))}function nt(e,t,o){return{beforeCreate(){const a=_.getCurrentInstance();if(!a)throw v(22);const l=this.$options;if(l.i18n){const s=l.i18n;l.__i18n&&(s.__i18n=l.__i18n),s.__root=t,this===this.$root?this.$i18n=oe(e,s):(s.__injectWithOption=!0,this.$i18n=Z(s))}else l.__i18n?this===this.$root?this.$i18n=oe(e,l):this.$i18n=Z({__i18n:l.__i18n,__injectWithOption:!0,__root:t}):this.$i18n=e;e.__onComponentInstanceCreated(this.$i18n),o.__setInstance(a,this.$i18n),this.$t=(...s)=>this.$i18n.t(...s),this.$rt=(...s)=>this.$i18n.rt(...s),this.$tc=(...s)=>this.$i18n.tc(...s),this.$te=(s,c)=>this.$i18n.te(s,c),this.$d=(...s)=>this.$i18n.d(...s),this.$n=(...s)=>this.$i18n.n(...s),this.$tm=s=>this.$i18n.tm(s)},mounted(){},beforeUnmount(){const a=_.getCurrentInstance();if(!a)throw v(22);delete this.$t,delete this.$rt,delete this.$tc,delete this.$te,delete this.$d,delete this.$n,delete this.$tm,o.__deleteInstance(a),delete this.$i18n}}}function oe(e,t){e.locale=t.locale||e.locale,e.fallbackLocale=t.fallbackLocale||e.fallbackLocale,e.missing=t.missing||e.missing,e.silentTranslationWarn=t.silentTranslationWarn||e.silentFallbackWarn,e.silentFallbackWarn=t.silentFallbackWarn||e.silentFallbackWarn,e.formatFallbackMessages=t.formatFallbackMessages||e.formatFallbackMessages,e.postTranslation=t.postTranslation||e.postTranslation,e.warnHtmlInMessage=t.warnHtmlInMessage||e.warnHtmlInMessage,e.escapeParameterHtml=t.escapeParameterHtml||e.escapeParameterHtml,e.sync=t.sync||e.sync,e.__composer[me](t.pluralizationRules||e.pluralizationRules);const o=ee(e.locale,{messages:t.messages,__i18n:t.__i18n});return Object.keys(o).forEach(a=>e.mergeLocaleMessage(a,o[a])),t.datetimeFormats&&Object.keys(t.datetimeFormats).forEach(a=>e.mergeDateTimeFormat(a,t.datetimeFormats[a])),t.numberFormats&&Object.keys(t.numberFormats).forEach(a=>e.mergeNumberFormat(a,t.numberFormats[a])),e}function rt(e={}){const t=n.isBoolean(e.legacy)?e.legacy:!0,o=!!e.globalInjection,a=new Map,l=t?Z(e):te(e),s=n.makeSymbol("vue-i18n"),c={get mode(){return t?"legacy":"composition"},async install(u,...g){u.__VUE_I18N_SYMBOL__=s,u.provide(u.__VUE_I18N_SYMBOL__,c),!t&&o&&ot(u,c.global),at(u,c,...g),t&&u.mixin(nt(l,l.__composer,c))},get global(){return l},__instances:a,__getInstance(u){return a.get(u)||null},__setInstance(u,g){a.set(u,g)},__deleteInstance(u){a.delete(u)}};return c}function V(e={}){const t=_.getCurrentInstance();if(t==null)throw v(16);if(!t.appContext.app.__VUE_I18N_SYMBOL__)throw v(17);const o=_.inject(t.appContext.app.__VUE_I18N_SYMBOL__);if(!o)throw v(22);const a=o.mode==="composition"?o.global:o.global.__composer,l=n.isEmptyObject(e)?"__i18n"in t.type?"local":"global":e.useScope?e.useScope:"local";if(l==="global"){let u=n.isObject(e.messages)?e.messages:{};"__i18nGlobal"in t.type&&(u=ee(a.locale.value,{messages:u,__i18n:t.type.__i18nGlobal}));const g=Object.keys(u);if(g.length&&g.forEach(b=>{a.mergeLocaleMessage(b,u[b])}),n.isObject(e.datetimeFormats)){const b=Object.keys(e.datetimeFormats);b.length&&b.forEach(d=>{a.mergeDateTimeFormat(d,e.datetimeFormats[d])})}if(n.isObject(e.numberFormats)){const b=Object.keys(e.numberFormats);b.length&&b.forEach(d=>{a.mergeNumberFormat(d,e.numberFormats[d])})}return a}if(l==="parent"){let u=lt(o,t,e.__useComponent);return u==null&&(n.warn(M(12)),u=a),u}if(o.mode==="legacy")throw v(18);const s=o;let c=s.__getInstance(t);if(c==null){const u=t.type,g=n.assign({},e);u.__i18n&&(g.__i18n=u.__i18n),a&&(g.__root=a),c=te(g),st(s,t),s.__setInstance(t,c)}return c}function lt(e,t,o=!1){let a=null;const l=t.root;let s=t.parent;for(;s!=null;){const c=e;if(e.mode==="composition")a=c.__getInstance(s);else{const u=c.__getInstance(s);u!=null&&(a=u.__composer),o&&a&&!a[ge]&&(a=null)}if(a!=null||l===s)break;s=s.parent}return a}function st(e,t,o){_.onMounted(()=>{},t),_.onUnmounted(()=>{e.__deleteInstance(t)},t)}const it=["locale","fallbackLocale","availableLocales"],ct=["t","rt","d","n","tm"];function ot(e,t){const o=Object.create(null);it.forEach(a=>{const l=Object.getOwnPropertyDescriptor(t,a);if(!l)throw v(22);const s=_.isRef(l.value)?{get(){return l.value.value},set(c){l.value.value=c}}:{get(){return l.get&&l.get()}};Object.defineProperty(o,a,s)}),e.config.globalProperties.$i18n=o,ct.forEach(a=>{const l=Object.getOwnPropertyDescriptor(t,a);if(!l||!l.value)throw v(22);Object.defineProperty(e.config.globalProperties,`$${a}`,l)})}f.registerMessageCompiler(f.compileToFunction);{const e=n.getGlobalThis();e.__INTLIFY__=!0,f.setDevToolsHook(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}I.DatetimeFormat=X;I.NumberFormat=Q;I.Translation=H;I.VERSION=ue;var ft=I.createI18n=rt,bt=I.useI18n=V;I.vTDirective=be;export{ft as c,bt as u};
