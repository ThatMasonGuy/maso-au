import{c as b,r as i,m as H,aa as Z,b as A,d as T,e as d,J as l,E as e,L as r,N as z,u,a8 as $,M as t,ah as J,P as W,T as O,D as Y}from"./@vue-DsGlF1-j.js";import{a as q}from"./vue-router-CrvMPvpV.js";import{u as j}from"./vuex--kc_uza-.js";import{c as B,a as m,b as f,f as Q,g as X}from"./index-fh3STtDl.js";import{F as w}from"./vue-sonner-B2EpXGAv.js";import{_ as ee,a as ae,b as le,c as oe,d as ue}from"./SelectScrollDownButton-BK2d6S2D.js";import"./radix-vue-6Z8x3TUN.js";import"./@internationalized-D5LszBdy.js";import"./@swc-BOtJyCjG.js";import"./@floating-ui-B6PpBHZy.js";import"./class-variance-authority-Bb4qSo10.js";import"./clsx-B-dksMZM.js";import"./tailwind-merge-3VKOpVsw.js";import"./firebase-BQhzl84B.js";import"./@firebase-CBgXa-9_.js";import"./idb-BXWtuYvb.js";import"./tslib-BGVaTf34.js";import"./@heroicons-DH5_RU0z.js";import"./@unovis-B16_51NZ.js";import"./@emotion-Dz_S_Xyw.js";import"./stylis-YPZU7XtI.js";import"./d3-transition-fhQpLGwb.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-DY0Cqdkz.js";import"./d3-color-Ceo1QMNe.js";import"./d3-selection-DSeOx27A.js";import"./d3-ease-Ox4sgw_u.js";import"./d3-interpolate-path-CTc7ZuM7.js";import"./striptags-CDKagow6.js";import"./@vueup-qMjKR5Ws.js";import"./quill-delta-COPIFlMW.js";import"./fast-diff-DNDSwfiB.js";import"./lodash.clonedeep-CrPEM4m0.js";import"./lodash.isequal-CemT60YI.js";import"./to-px-DReLD3CO.js";import"./parse-unit-3UrBcP19.js";import"./d3-array-BJvpcdQ_.js";import"./@juggle-C8OzoCMD.js";import"./d3-axis-Cf4shvhW.js";import"./d3-scale-A6k9qkjg.js";import"./internmap-BkD7Hj8s.js";import"./d3-format-CzD4bSOQ.js";import"./d3-time-format-COsUQkot.js";import"./d3-time-B8hJ2rEE.js";import"./d3-shape-D7Hvm6M3.js";import"./d3-path-CimkQT29.js";import"./throttle-debounce-BnOnwhtV.js";import"./embla-carousel-vue-CXHqejTr.js";import"./embla-carousel-reactive-utils-DkegjUUZ.js";import"./embla-carousel-QtEXB4oT.js";import"./@vueuse-H75eWtDf.js";import"./embla-carousel-autoplay-0OO14Ffu.js";import"./@radix-icons-C7iqcNif.js";import"./vuex-persistedstate-D4njCX8q.js";import"./maska-Cp-LWreF.js";const te={class:"w-full lg:grid lg:min-h-screen lg:grid-cols-2 h-screen"},de={class:"flex items-center justify-center py-8 px-4 mx-auto"},ce={class:"mx-auto grid w-[350px] gap-6"},re={class:"grid gap-2 text-center"},ie={class:"text-3xl font-bold mb-6"},se=d("p",{class:"text-balance text-muted-foreground"}," Enter your details below to create your account ",-1),ne={class:"grid gap-2 pointer-events-none"},ve={class:"grid grid-cols-2 gap-4"},be={class:"grid gap-2"},me={class:"grid gap-2"},pe={class:"grid gap-2"},fe={class:"grid gap-2"},ge={class:"grid gap-2"},he={class:"relative"},_e={class:"absolute left-3 top-[18px] transform -translate-y-1/2 text-gray-500 text-sm"},Se={class:"text-center text-sm"},Ne={class:"bg-gray-500 lg:block relative overflow-hidden"},ye=["src"],Me=["src"],Ba={__name:"AdditionalInfo",setup(Ae){var V,G,E,I,U;const L=j(),x=q(),s=b(()=>L.state.user||{}),g=i("https://source.unsplash.com/random/3"),h=i("https://source.unsplash.com/random/4"),C=i(((V=s.value)==null?void 0:V.userName)||""),_=i(((G=s.value)==null?void 0:G.firstName)||""),S=i(((E=s.value)==null?void 0:E.lastName)||""),N=i(((I=s.value)==null?void 0:I.emailAddress)||""),n=i(((U=s.value)==null?void 0:U.phoneNumber)||""),v=i(s.country),y=i([{label:"Afghanistan",value:"+93",code:"AF"},{label:"Albania",value:"+355",code:"AL"},{label:"Algeria",value:"+213",code:"DZ"},{label:"Andorra",value:"+376",code:"AD"},{label:"Angola",value:"+244",code:"AO"},{label:"Argentina",value:"+54",code:"AR"},{label:"Armenia",value:"+374",code:"AM"},{label:"Australia",value:"+61",code:"AU"},{label:"Austria",value:"+43",code:"AT"},{label:"Azerbaijan",value:"+994",code:"AZ"},{label:"Bahrain",value:"+973",code:"BH"},{label:"Bangladesh",value:"+880",code:"BD"},{label:"Belarus",value:"+375",code:"BY"},{label:"Belgium",value:"+32",code:"BE"},{label:"Belize",value:"+501",code:"BZ"},{label:"Benin",value:"+229",code:"BJ"},{label:"Bhutan",value:"+975",code:"BT"},{label:"Bolivia",value:"+591",code:"BO"},{label:"Bosnia and Herzegovina",value:"+387",code:"BA"},{label:"Botswana",value:"+267",code:"BW"},{label:"Brazil",value:"+55",code:"BR"},{label:"Brunei",value:"+673",code:"BN"},{label:"Bulgaria",value:"+359",code:"BG"},{label:"Burkina Faso",value:"+226",code:"BF"},{label:"Burundi",value:"+257",code:"BI"},{label:"Cambodia",value:"+855",code:"KH"},{label:"Cameroon",value:"+237",code:"CM"},{label:"Canada",value:"+1",code:"CA"},{label:"Cape Verde",value:"+238",code:"CV"},{label:"Central African Republic",value:"+236",code:"CF"},{label:"Chad",value:"+235",code:"TD"},{label:"Chile",value:"+56",code:"CL"},{label:"China",value:"+86",code:"CN"},{label:"Colombia",value:"+57",code:"CO"},{label:"Comoros",value:"+269",code:"KM"},{label:"Congo",value:"+242",code:"CG"},{label:"Costa Rica",value:"+506",code:"CR"},{label:"Croatia",value:"+385",code:"HR"},{label:"Cuba",value:"+53",code:"CU"},{label:"Cyprus",value:"+357",code:"CY"},{label:"Czech Republic",value:"+420",code:"CZ"},{label:"Denmark",value:"+45",code:"DK"},{label:"Djibouti",value:"+253",code:"DJ"},{label:"Dominica",value:"+1-767",code:"DM"},{label:"Dominican Republic",value:"+1-809",code:"DO"},{label:"East Timor",value:"+670",code:"TL"},{label:"Ecuador",value:"+593",code:"EC"},{label:"Egypt",value:"+20",code:"EG"},{label:"El Salvador",value:"+503",code:"SV"},{label:"Equatorial Guinea",value:"+240",code:"GQ"},{label:"Eritrea",value:"+291",code:"ER"},{label:"Estonia",value:"+372",code:"EE"},{label:"Eswatini",value:"+268",code:"SZ"},{label:"Ethiopia",value:"+251",code:"ET"},{label:"Fiji",value:"+679",code:"FJ"},{label:"Finland",value:"+358",code:"FI"},{label:"France",value:"+33",code:"FR"},{label:"Gabon",value:"+241",code:"GA"},{label:"Gambia",value:"+220",code:"GM"},{label:"Georgia",value:"+995",code:"GE"},{label:"Germany",value:"+49",code:"DE"},{label:"Ghana",value:"+233",code:"GH"},{label:"Greece",value:"+30",code:"GR"},{label:"Grenada",value:"+1-473",code:"GD"},{label:"Guatemala",value:"+502",code:"GT"},{label:"Guinea",value:"+224",code:"GN"},{label:"Guinea-Bissau",value:"+245",code:"GW"},{label:"Guyana",value:"+592",code:"GY"},{label:"Haiti",value:"+509",code:"HT"},{label:"Honduras",value:"+504",code:"HN"},{label:"Hungary",value:"+36",code:"HU"},{label:"Iceland",value:"+354",code:"IS"},{label:"India",value:"+91",code:"IN"},{label:"Indonesia",value:"+62",code:"ID"},{label:"Iran",value:"+98",code:"IR"},{label:"Iraq",value:"+964",code:"IQ"},{label:"Ireland",value:"+353",code:"IE"},{label:"Israel",value:"+972",code:"IL"},{label:"Italy",value:"+39",code:"IT"},{label:"Jamaica",value:"+1-876",code:"JM"},{label:"Japan",value:"+81",code:"JP"},{label:"Jordan",value:"+962",code:"JO"},{label:"Kazakhstan",value:"+7",code:"KZ"},{label:"Kenya",value:"+254",code:"KE"},{label:"Kiribati",value:"+686",code:"KI"},{label:"Kosovo",value:"+383",code:"XK"},{label:"Kuwait",value:"+965",code:"KW"},{label:"Kyrgyzstan",value:"+996",code:"KG"},{label:"Laos",value:"+856",code:"LA"},{label:"Latvia",value:"+371",code:"LV"},{label:"Lebanon",value:"+961",code:"LB"},{label:"Lesotho",value:"+266",code:"LS"},{label:"Liberia",value:"+231",code:"LR"},{label:"Libya",value:"+218",code:"LY"},{label:"Liechtenstein",value:"+423",code:"LI"},{label:"Lithuania",value:"+370",code:"LT"},{label:"Luxembourg",value:"+352",code:"LU"},{label:"Madagascar",value:"+261",code:"MG"},{label:"Malawi",value:"+265",code:"MW"},{label:"Malaysia",value:"+60",code:"MY"},{label:"Maldives",value:"+960",code:"MV"},{label:"Mali",value:"+223",code:"ML"},{label:"Malta",value:"+356",code:"MT"},{label:"Marshall Islands",value:"+692",code:"MH"},{label:"Mauritania",value:"+222",code:"MR"},{label:"Mauritius",value:"+230",code:"MU"},{label:"Mexico",value:"+52",code:"MX"},{label:"Micronesia",value:"+691",code:"FM"},{label:"Moldova",value:"+373",code:"MD"},{label:"Monaco",value:"+377",code:"MC"},{label:"Mongolia",value:"+976",code:"MN"},{label:"Montenegro",value:"+382",code:"ME"},{label:"Morocco",value:"+212",code:"MA"},{label:"Mozambique",value:"+258",code:"MZ"},{label:"Myanmar",value:"+95",code:"MM"},{label:"Namibia",value:"+264",code:"NA"},{label:"Nauru",value:"+674",code:"NR"},{label:"Nepal",value:"+977",code:"NP"},{label:"Netherlands",value:"+31",code:"NL"},{label:"New Zealand",value:"+64",code:"NZ"},{label:"Nicaragua",value:"+505",code:"NI"},{label:"Niger",value:"+227",code:"NE"},{label:"Nigeria",value:"+234",code:"NG"},{label:"North Korea",value:"+850",code:"KP"},{label:"North Macedonia",value:"+389",code:"MK"},{label:"Norway",value:"+47",code:"NO"},{label:"Oman",value:"+968",code:"OM"},{label:"Pakistan",value:"+92",code:"PK"},{label:"Palau",value:"+680",code:"PW"},{label:"Palestine",value:"+970",code:"PS"},{label:"Panama",value:"+507",code:"PA"},{label:"Papua New Guinea",value:"+675",code:"PG"},{label:"Paraguay",value:"+595",code:"PY"},{label:"Peru",value:"+51",code:"PE"},{label:"Philippines",value:"+63",code:"PH"},{label:"Poland",value:"+48",code:"PL"},{label:"Portugal",value:"+351",code:"PT"},{label:"Qatar",value:"+974",code:"QA"},{label:"Romania",value:"+40",code:"RO"},{label:"Russia",value:"+7",code:"RU"},{label:"Rwanda",value:"+250",code:"RW"},{label:"Saint Kitts and Nevis",value:"+1-869",code:"KN"},{label:"Saint Lucia",value:"+1-758",code:"LC"},{label:"Saint Vincent and the Grenadines",value:"+1-784",code:"VC"},{label:"Samoa",value:"+685",code:"WS"},{label:"San Marino",value:"+378",code:"SM"},{label:"Sao Tome and Principe",value:"+239",code:"ST"},{label:"Saudi Arabia",value:"+966",code:"SA"},{label:"Senegal",value:"+221",code:"SN"},{label:"Serbia",value:"+381",code:"RS"},{label:"Seychelles",value:"+248",code:"SC"},{label:"Sierra Leone",value:"+232",code:"SL"},{label:"Singapore",value:"+65",code:"SG"},{label:"Slovakia",value:"+421",code:"SK"},{label:"Slovenia",value:"+386",code:"SI"},{label:"Solomon Islands",value:"+677",code:"SB"},{label:"Somalia",value:"+252",code:"SO"},{label:"South Africa",value:"+27",code:"ZA"},{label:"South Korea",value:"+82",code:"KR"},{label:"South Sudan",value:"+211",code:"SS"},{label:"Spain",value:"+34",code:"ES"},{label:"Sri Lanka",value:"+94",code:"LK"},{label:"Sudan",value:"+249",code:"SD"},{label:"Suriname",value:"+597",code:"SR"},{label:"Sweden",value:"+46",code:"SE"},{label:"Switzerland",value:"+41",code:"CH"},{label:"Syria",value:"+963",code:"SY"},{label:"Taiwan",value:"+886",code:"TW"},{label:"Tajikistan",value:"+992",code:"TJ"},{label:"Tanzania",value:"+255",code:"TZ"},{label:"Thailand",value:"+66",code:"TH"},{label:"Togo",value:"+228",code:"TG"},{label:"Tonga",value:"+676",code:"TO"},{label:"Trinidad and Tobago",value:"+1-868",code:"TT"},{label:"Tunisia",value:"+216",code:"TN"},{label:"Turkey",value:"+90",code:"TR"},{label:"Turkmenistan",value:"+993",code:"TM"},{label:"Tuvalu",value:"+688",code:"TV"},{label:"Uganda",value:"+256",code:"UG"},{label:"Ukraine",value:"+380",code:"UA"},{label:"United Arab Emirates",value:"+971",code:"AE"},{label:"United Kingdom",value:"+44",code:"UK"},{label:"United States",value:"+1",code:"US"},{label:"Uruguay",value:"+598",code:"UY"},{label:"Uzbekistan",value:"+998",code:"UZ"},{label:"Vanuatu",value:"+678",code:"VU"},{label:"Vatican City",value:"+379",code:"VA"},{label:"Venezuela",value:"+58",code:"VE"},{label:"Vietnam",value:"+84",code:"VN"},{label:"Yemen",value:"+967",code:"YE"},{label:"Zambia",value:"+260",code:"ZM"},{label:"Zimbabwe",value:"+263",code:"ZW"}]),P=b(()=>{switch(M.value?M.value.length:0){case 2:return"pl-7";case 3:return"pl-9";case 4:return"pl-11";case 5:return"pl-12";case 6:return"pl-[52px]";default:return"pl-9"}}),R=b(()=>{if(v.value&&n.value){let o=n.value.replace(/\s+/g,"");return o.startsWith("0")&&(o=o.substring(1)),`${M.value}${o}`}return n.value?n.value.replace(/\s+/g,"").replace(/^0/,""):""}),K=b(()=>{const o=y.value.find(a=>a.code===v.value);return o?`${o.label} (${o.value})`:""}),D=b(()=>{const o=y.value.find(a=>a.code===v.value);return o?o.label:""}),M=b(()=>{const o=y.value.find(a=>a.code===v.value);return o?o.value:""}),k=()=>{h.value=`https://source.unsplash.com/random/${Date.now()}`;const o=g.value;g.value=h.value,h.value=o};H(()=>{setInterval(k,8e3)});const F=async()=>{const o=Q.currentUser;if(o)try{const a={firstName:_.value,lastName:S.value,emailAddress:N.value,phoneNumber:R.value,country:D.value,createdAt:new Date,updatedAt:new Date},p=await X(o,a);L.commit("SET_USER",p),w.success("Account updated successfully!",{description:"You can now log in with your credentials."}),x.push("/auth/home")}catch(a){w.error("Failed to update account!",{description:`${a.message}`})}else console.error("No authenticated user found.")};return(o,a)=>{const p=Z("router-link");return A(),T("div",te,[d("div",de,[d("div",ce,[l(p,{to:"/"},{default:e(()=>[l(u(B),{class:"absolute top-2 left-2 z-20"},{default:e(()=>[t("Return Home")]),_:1})]),_:1}),l(p,{to:"/"},{default:e(()=>[l(u(B),{class:"absolute top-2 right-2 z-20"},{default:e(()=>[t("Dark Mode")]),_:1})]),_:1}),d("div",re,[d("h1",ie,"Welcome, "+r(s.value.firstName||"Guest"),1),se]),d("form",{class:"grid gap-4 cursor-not-allowed",onSubmit:z(F,["prevent"])},[d("div",ne,[l(u(m),{for:"userName"},{default:e(()=>[t("Username")]),_:1}),l(u(f),{id:"userName",type:"text",class:"pointer-events-none",placeholder:"AwesomeUser24",required:"",modelValue:C.value,"onUpdate:modelValue":a[0]||(a[0]=c=>C.value=c)},{default:e(()=>[t(r(C.value),1)]),_:1},8,["modelValue"])]),d("div",ve,[d("div",be,[l(u(m),{for:"firstName"},{default:e(()=>[t("First Name")]),_:1}),l(u(f),{id:"firstName",type:"text",autocomplete:"given-name",placeholder:"John",required:"",modelValue:_.value,"onUpdate:modelValue":a[1]||(a[1]=c=>_.value=c)},{default:e(()=>[t(r(_.value),1)]),_:1},8,["modelValue"])]),d("div",me,[l(u(m),{for:"lastName"},{default:e(()=>[t("Last Name")]),_:1}),l(u(f),{id:"lastName",type:"text",autocomplete:"family-name",placeholder:"Appleseed",required:"",modelValue:S.value,"onUpdate:modelValue":a[2]||(a[2]=c=>S.value=c)},{default:e(()=>[t(r(S.value),1)]),_:1},8,["modelValue"])])]),d("div",pe,[l(u(m),{for:"emailAddress"},{default:e(()=>[t("Email")]),_:1}),l(u(f),{id:"emailAddress",type:"email",autocomplete:"email",placeholder:"JohnAppleseed@email.com",required:"",modelValue:N.value,"onUpdate:modelValue":a[3]||(a[3]=c=>N.value=c)},{default:e(()=>[t(r(N.value),1)]),_:1},8,["modelValue"])]),d("div",fe,[l(u(m),{for:"country"},{default:e(()=>[t("Country")]),_:1}),l(u(ue),{modelValue:v.value,"onUpdate:modelValue":a[4]||(a[4]=c=>v.value=c)},{default:e(()=>[l(u(ee),null,{default:e(()=>[l(u(ae),{placeholder:"Select your Country",class:"text-gray-500"},{default:e(()=>[t(r(K.value),1)]),_:1})]),_:1}),l(u(le),null,{default:e(()=>[(A(!0),T(W,null,O(y.value,c=>(A(),Y(u(oe),{key:c.code,value:c.code},{default:e(()=>[t(r(c.label)+" ("+r(c.value)+") ",1)]),_:2},1032,["value"]))),128))]),_:1})]),_:1},8,["modelValue"])]),d("div",ge,[l(u(m),{for:"phoneNumber"},{default:e(()=>[t("Phone Number")]),_:1}),d("div",he,[d("span",_e,r(M.value||"+61"),1),l(u(f),{id:"phoneNumber",type:"tel",autocomplete:"tel",placeholder:"0412 345 678",required:"",modelValue:n.value,"onUpdate:modelValue":a[5]||(a[5]=c=>n.value=c),class:$(P.value)},{default:e(()=>[t(r(n.value),1)]),_:1},8,["modelValue","class"])])]),l(u(B),{type:"submit",class:"w-full"},{default:e(()=>[t(" Update your details ")]),_:1})],32),d("div",Se,[t(" Already have an account? "),l(p,{to:"/login",class:"underline"},{default:e(()=>[t(" Login ")]),_:1})])])]),d("div",Ne,[l(J,{name:"fade",mode:"in-out","enter-active-class":"transition-opacity duration-1000","leave-active-class":"transition-opacity duration-1000","enter-from-class":"opacity-0","leave-to-class":"opacity-0"},{default:e(()=>[(A(),T("img",{key:g.value,src:g.value,alt:"Current Image",class:"object-cover w-full h-full absolute inset-0"},null,8,ye))]),_:1}),d("img",{src:h.value,alt:"Next Image",class:"object-cover w-full h-full absolute inset-0 opacity-0"},null,8,Me)])])}}};export{Ba as default};
