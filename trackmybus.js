/* ═══════════════════════════════════════════════
   i18n
═══════════════════════════════════════════════ */
const TR = {
  ru:{
    routes:'Маршруты', buses:'Автобусы', buses_online:'Автобусы онлайн',
    schedule:'Расписание', stops:'Остановки', map:'КАРТА', sim:'СИМ',
    alerts:'Тревоги', no_alerts:'✅ Все автобусы в норме',
    status:'Статус', route_lbl:'Маршрут', next_stop:'След. остановка',
    moving:'▶ В движении', stopped_s:'■ Остановился',
    stop_lbl:'Остановка', next_bus:'Следующий автобус',
    total_stops:'Остановок', total_buses:'Автобусов', in_motion:'В движении',
    at_stop:'Стоят', bus_lbl:'Автобус', next:'следующий',
    eta_title:'ПРИБЫТИЕ', eta_ontime:'🟢 По расписанию', eta_delayed:'🔴 Задержка',
    eta_conf_hi:'Точность: высокая', eta_conf_lo:'Точность: низкая',
    r1_name:'Маршрут 1', r1_desc:'Юг → Центр → Больница → Север',
    r2_name:'Маршрут 2', r2_desc:'Запад → Центр → Восток',
    r3_name:'Маршрут 3', r3_desc:'Ю-Запад → Центр → С-Восток',
    r4_name:'Маршрут 4', r4_desc:'Автовокзал → Запад → С-Запад',
    sm:{
      'Конечная Юг':'Конечная Юг','Южный микрорайон':'Южный микрорайон',
      'Ул. Кирова':'Ул. Кирова','Ул. Победы':'Ул. Победы',
      'Площадь Ленина':'Площадь Ленина','Центр (банк)':'Центр (банк)',
      'Рынок':'Рынок','Школа №2':'Школа №2','Больница':'Больница',
      'Стадион':'Стадион','Конечная Север':'Конечная Север',
      'Конечная Запад':'Конечная Запад','Ул. Горького':'Ул. Горького',
      'Завод Прогресс':'Завод Прогресс','Парк Победы':'Парк Победы',
      'Ул. Комсомольская':'Ул. Комсомольская','ЖК Восток':'ЖК Восток',
      'Конечная Восток':'Конечная Восток','Автовокзал':'Автовокзал',
      'Ул. Октябрьская':'Ул. Октябрьская','Поликлиника 1':'Поликлиника 1',
      'Дом культуры':'Дом культуры','Ул. Ленина':'Ул. Ленина',
      'Конечная СЗ':'Конечная С-Запад','Ул. Чкалова':'Ул. Чкалова',
      'Ул. Буджакская':'Ул. Буджакская',
    },
  },
  ro:{
    routes:'Rute', buses:'Autobuze', buses_online:'Autobuze online',
    schedule:'Orar', stops:'Statii', map:'HARTA', sim:'SIM',
    alerts:'Alerte', no_alerts:'Toate autobuzele functioneaza normal',
    status:'Stare', route_lbl:'Ruta', next_stop:'Urm. statie',
    moving:'In miscare', stopped_s:'Oprit',
    stop_lbl:'Statie', next_bus:'Autobuz urmator',
    total_stops:'Statii', total_buses:'Autobuze', in_motion:'In miscare',
    at_stop:'Oprite', bus_lbl:'Autobuz', next:'urmator',
    eta_title:'SOSIRE', eta_ontime:'La timp', eta_delayed:'Intarziere',
    eta_conf_hi:'Acuratete: ridicata', eta_conf_lo:'Acuratete: scazuta',
    r1_name:'Ruta 1', r1_desc:'Sud - Centru - Spital - Nord',
    r2_name:'Ruta 2', r2_desc:'Vest - Centru - Est',
    r3_name:'Ruta 3', r3_desc:'SV - Centru - NE',
    r4_name:'Ruta 4', r4_desc:'Autogara - Vest - NV',
    sm:{
      'Конечная Юг':'Terminus Sud','Южный микрорайон':'Cart. Sud',
      'Ул. Кирова':'Str. Kirov','Ул. Победы':'Str. Victoriei',
      'Площадь Ленина':'Piata Lenin','Центр (банк)':'Centru (banca)',
      'Рынок':'Piata','Школа №2':'Scoala Nr.2','Больница':'Spital',
      'Стадион':'Stadion','Конечная Север':'Terminus Nord',
      'Конечная Запад':'Terminus Vest','Ул. Горького':'Str. Gorki',
      'Завод Прогресс':'Uzina Progres','Парк Победы':'Parcul Victoriei',
      'Ул. Комсомольская':'Str. Komsomolului','ЖК Восток':'BL Est',
      'Конечная Восток':'Terminus Est','Автовокзал':'Autogara',
      'Ул. Октябрьская':'Str. Octombrie','Поликлиника 1':'Policlinica nr.1',
      'Дом культуры':'Casa Culturii','Ул. Ленина':'Str. Lenin',
      'Конечная СЗ':'Terminus NV','Ул. Чкалова':'Str. Cikalov',
      'Ул. Буджакская':'Str. Bugeacului',
    },
  },
  en:{
    routes:'Routes', buses:'Buses', buses_online:'Buses Online',
    schedule:'Schedule', stops:'Stops', map:'MAP', sim:'SIM',
    alerts:'Alerts', no_alerts:'All buses running normally',
    status:'Status', route_lbl:'Route', next_stop:'Next stop',
    moving:'Moving', stopped_s:'Stopped',
    stop_lbl:'Stop', next_bus:'Next bus',
    total_stops:'Stops', total_buses:'Buses', in_motion:'In motion',
    at_stop:'Stopped', bus_lbl:'Bus', next:'next',
    eta_title:'ARRIVAL', eta_ontime:'On schedule', eta_delayed:'Delay',
    eta_conf_hi:'Confidence: high', eta_conf_lo:'Confidence: low',
    r1_name:'Route 1', r1_desc:'South - Centre - Hospital - North',
    r2_name:'Route 2', r2_desc:'West - Centre - East',
    r3_name:'Route 3', r3_desc:'SW - Centre - NE',
    r4_name:'Route 4', r4_desc:'Bus Station - West - NW',
    sm:{
      'Конечная Юг':'South Terminal','Южный микрорайон':'South District',
      'Ул. Кирова':'Kirov St.','Ул. Победы':'Victory St.',
      'Площадь Ленина':'Lenin Square','Центр (банк)':'Centre (bank)',
      'Рынок':'Market','Школа №2':'School No.2','Больница':'Hospital',
      'Стадион':'Stadium','Конечная Север':'North Terminal',
      'Конечная Запад':'West Terminal','Ул. Горького':'Gorky St.',
      'Завод Прогресс':'Progress Factory','Парк Победы':'Victory Park',
      'Ул. Комсомольская':'Komsomol St.','ЖК Восток':'East Block',
      'Конечная Восток':'East Terminal','Автовокзал':'Bus Station',
      'Ул. Октябрьская':'October St.','Поликлиника 1':'Polyclinic No.1',
      'Дом культуры':'Cultural Centre','Ул. Ленина':'Lenin St.',
      'Конечная СЗ':'NW Terminal','Ул. Чкалова':'Chkalov St.',
      'Ул. Буджакская':'Bugeac St.',
    },
  },
};

let lang = 'ru';
const t  = function(k){ return TR[lang][k] || k; };
const ts = function(k){ return (TR[lang].sm||{})[k] || k; };

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.getElementById('langSel').value = l;
  applyI18n();
  refreshRoutesList(); refreshBusesList();
  renderSched('schedList'); renderSched('mobSchedList');
  renderMobRoutes(); renderMobBuses();
  renderAlertFeed();
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
}

/* THEME */
var dark = true;
function toggleTheme() {
  dark = !dark;
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.getElementById('themeBtn').textContent = dark ? '🌙' : '☀️';
  applyTileFilter();
  ROUTES.forEach(function(route) {
    sLayers[route.id].forEach(function(m, i) {
      m.setIcon(stopIcon(route, i===0||i===route.stops.length-1));
    });
  });
  setTimeout(function(){ map.invalidateSize(); }, 50);
}

/* DATA
   sp = progress per frame at 60fps
   Route time = 1/(sp*60) seconds
   sp=0.0000185 => 901s = ~15 min (realistic)
*/
var CENTER = [46.0600, 28.8420];

var ROUTES = [
  { id:1, color:'#f04060', nameKey:'r1_name', descKey:'r1_desc', geo:null,
    sched:['06:00','06:35','07:10','07:45','08:20','09:00','09:45','10:30',
           '11:15','12:00','12:50','13:40','14:30','15:20','16:05','16:50',
           '17:35','18:20','19:05','19:50'],
    stops:[
      { k:'Конечная Юг',       c:[46.0432, 28.8378] },
      { k:'Южный микрорайон',  c:[46.0488, 28.8372] },
      { k:'Ул. Кирова',        c:[46.0528, 28.8368] },
      { k:'Площадь Ленина',    c:[46.0565, 28.8375] },
      { k:'Центр (банк)',       c:[46.0602, 28.8382] },
      { k:'Рынок',              c:[46.0632, 28.8390] },
      { k:'Школа №2',           c:[46.0655, 28.8395] },
      { k:'Больница',           c:[46.0682, 28.8400] },
      { k:'Стадион',            c:[46.0710, 28.8405] },
      { k:'Конечная Север',     c:[46.0762, 28.8415] },
    ], visible:true },

  { id:2, color:'#40c8f0', nameKey:'r2_name', descKey:'r2_desc', geo:null,
    sched:['06:10','06:50','07:30','08:10','08:50','09:35','10:20','11:10',
           '12:00','12:50','13:40','14:30','15:20','16:10','17:00','17:50',
           '18:35','19:20'],
    stops:[
      { k:'Конечная Запад',     c:[46.0588, 28.8192] },
      { k:'Ул. Чкалова',        c:[46.0592, 28.8248] },
      { k:'Ул. Горького',        c:[46.0596, 28.8295] },
      { k:'Завод Прогресс',      c:[46.0600, 28.8340] },
      { k:'Центр (банк)',         c:[46.0602, 28.8382] },
      { k:'Рынок',                c:[46.0632, 28.8390] },
      { k:'Парк Победы',          c:[46.0622, 28.8452] },
      { k:'ЖК Восток',            c:[46.0618, 28.8510] },
      { k:'Конечная Восток',      c:[46.0615, 28.8568] },
    ], visible:true },

  { id:3, color:'#60e090', nameKey:'r3_name', descKey:'r3_desc', geo:null,
    sched:['06:20','07:05','07:50','08:35','09:20','10:10','11:00','11:50',
           '12:40','13:30','14:20','15:15','16:10','17:00','17:50','18:40','19:25'],
    stops:[
      { k:'Ул. Буджакская',     c:[46.0462, 28.8228] },
      { k:'Поликлиника 1',       c:[46.0498, 28.8268] },
      { k:'Автовокзал',           c:[46.0530, 28.8312] },
      { k:'Ул. Октябрьская',      c:[46.0558, 28.8348] },
      { k:'Ул. Комсомольская',    c:[46.0588, 28.8388] },
      { k:'Рынок',                 c:[46.0632, 28.8390] },
      { k:'Дом культуры',          c:[46.0660, 28.8432] },
      { k:'Ул. Ленина',            c:[46.0695, 28.8478] },
      { k:'Конечная Восток',       c:[46.0615, 28.8568] },
    ], visible:true },

  { id:4, color:'#f0a040', nameKey:'r4_name', descKey:'r4_desc', geo:null,
    sched:['06:30','07:15','08:00','08:45','09:30','10:20','11:10','12:00',
           '12:50','13:40','14:30','15:22','16:15','17:05','17:55','18:42','19:25'],
    stops:[
      { k:'Автовокзал',          c:[46.0530, 28.8312] },
      { k:'Завод Прогресс',       c:[46.0600, 28.8340] },
      { k:'Конечная Запад',        c:[46.0588, 28.8192] },
      { k:'Ул. Чкалова',           c:[46.0592, 28.8248] },
      { k:'Ул. Горького',           c:[46.0618, 28.8230] },
      { k:'Парк Победы',            c:[46.0648, 28.8265] },
      { k:'Ул. Буджакская',         c:[46.0672, 28.8228] },
      { k:'Конечная СЗ',            c:[46.0710, 28.8198] },
    ], visible:true },
];

var BUSES = [
  { id:'A-01', rid:1, name:'CL-001', p:0.08,  sp:0.0000185, dir:1,  st:'moving' },
  { id:'A-02', rid:1, name:'CL-002', p:0.58,  sp:0.0000195, dir:1,  st:'moving' },
  { id:'B-01', rid:2, name:'CL-003', p:0.12,  sp:0.0000178, dir:1,  st:'moving' },
  { id:'B-02', rid:2, name:'CL-004', p:0.72,  sp:0.0000188, dir:-1, st:'moving' },
  { id:'C-01', rid:3, name:'CL-005', p:0.22,  sp:0.0000192, dir:1,  st:'moving' },
  { id:'C-02', rid:3, name:'CL-006', p:0.68,  sp:0.0000175, dir:-1, st:'moving' },
  { id:'D-01', rid:4, name:'CL-007', p:0.35,  sp:0.0000182, dir:1,  st:'moving' },
];

/* ETA ENGINE
   Key formula: ETA = (stopProgress - busProgress) / (sp * 60fps * trafficFactor * delayFactor)
   This gives seconds in real simulation time.
   Route takes 1/(sp*60) = ~15 min to traverse.
*/
var ETA_FPS         = 60;
var ETA_DWELL_SEC   = 18;  // seconds per stop
var ETA_DELAY_PROB  = 0.00004;
var ETA_DELAY_DUR   = 55;
var ETA_DELAY_FACT  = 0.55;
var ETA_TRAFFIC_H   = [[7,9],[17,19]];

var etaDelayState = {};

function getTrafficFactor() {
  var h = new Date().getHours();
  return ETA_TRAFFIC_H.some(function(r){ return h>=r[0]&&h<r[1]; }) ? 0.72 : 1.0;
}

function tickEtaDelay(busId) {
  if (!etaDelayState[busId]) etaDelayState[busId] = { active:false, endsAt:0, factor:1.0 };
  var ds = etaDelayState[busId];
  var now = Date.now();
  if (ds.active && now > ds.endsAt) { ds.active=false; ds.factor=1.0; }
  if (!ds.active && Math.random() < ETA_DELAY_PROB) {
    ds.active=true; ds.endsAt=now+ETA_DELAY_DUR*1000; ds.factor=ETA_DELAY_FACT;
  }
}

function calculateETAs(bus, route) {
  var n   = route.stops.length - 1;
  var tf  = getTrafficFactor();
  var df  = (etaDelayState[bus.id] && etaDelayState[bus.id].factor) || 1.0;
  var effSpeed = bus.sp * ETA_FPS * tf * df; // progress per second

  var results = [];
  route.stops.forEach(function(stop, idx) {
    var stopP = idx / n;
    if (stopP < bus.p - 0.005) return;
    var progressLeft = Math.max(0, stopP - bus.p);
    var travelSec    = progressLeft / effSpeed;
    var curIdx       = Math.floor(bus.p * n);
    var ahead        = Math.max(0, idx - curIdx - 1);
    var dwellSec     = ahead * ETA_DWELL_SEC;
    var etaSec       = Math.round(travelSec + dwellSec);
    results.push({ stopName:stop.k, etaSec:etaSec, isDelayed:!!(etaDelayState[bus.id]&&etaDelayState[bus.id].active) });
  });
  return results;
}

function fmtETA(sec) {
  if (sec < 60)   return sec + ' с';
  var m = Math.floor(sec/60), s = sec%60;
  if (sec < 3600) return s>0 ? m+' мин '+s+' с' : m+' мин';
  return Math.floor(sec/3600)+' ч '+Math.floor((sec%3600)/60)+' мин';
}

function buildETAHtml(bus, route) {
  var etas    = calculateETAs(bus, route);
  var delayed = !!(etaDelayState[bus.id]&&etaDelayState[bus.id].active);
  var stxt = delayed ? t('eta_delayed') : t('eta_ontime');
  var sbg  = delayed ? 'rgba(240,64,96,.15)'  : 'rgba(96,224,144,.15)';
  var scol = delayed ? '#f04060' : '#60e090';
  var ctxt = delayed ? t('eta_conf_lo') : t('eta_conf_hi');
  var cbg  = delayed ? 'rgba(240,64,96,.12)'  : 'rgba(96,224,144,.12)';
  var ccol = delayed ? '#f04060' : '#60e090';
  var rows = etas.slice(0,5).map(function(e){
    return '<div class="eta-row'+(e.isDelayed?' delayed':'')+'">'
      +'<span class="eta-stop">'+ts(e.stopName)+'</span>'
      +'<span class="eta-time">'+fmtETA(e.etaSec)+'</span></div>';
  }).join('');
  return '<div class="eta-section">'
    +'<div class="eta-title">'+t('eta_title')+'</div>'
    +'<div class="eta-status" style="background:'+sbg+';color:'+scol+'">'+stxt+'</div>'
    +rows
    +'<div class="eta-conf" style="background:'+cbg+';color:'+ccol+'">'+ctxt+'</div>'
    +'</div>';
}

/* ANOMALY DETECTION */
var ANML_LONG = 90, ANML_STALL = 120;
var ALERT_DEFS = {
  LONG_STOP:    { ru:'Длительная остановка', ro:'Oprire neobi&#x15F;nuit&#x103;', en:'Unusual stop',    color:'#f0c040' },
  SLOW_TRAFFIC: { ru:'Пробка',               ro:'Trafic intens',                  en:'Heavy traffic',   color:'#f09040' },
  STALLED:      { ru:'Возможная задержка',   ro:'Posibil&#x103; ntrziere',        en:'Possible delay',  color:'#f04060' },
};
var anomalyState = {};

function alertLabel(id){ return ALERT_DEFS[id]&&ALERT_DEFS[id][lang] || id; }
function alertColor(id){ return ALERT_DEFS[id]&&ALERT_DEFS[id].color || '#f0c040'; }

function checkAnomalies(bus) {
  if (!anomalyState[bus.id]) anomalyState[bus.id]={stoppedAt:null,lastP:bus.p,progressAt:Date.now(),alerts:new Set()};
  var st=anomalyState[bus.id], now=Date.now(), alerts=new Set();
  if (bus.st==='stopped') {
    if (!st.stoppedAt) st.stoppedAt=now;
    if ((now-st.stoppedAt)/1000>ANML_LONG) alerts.add('LONG_STOP');
  } else { st.stoppedAt=null; }
  if (etaDelayState[bus.id]&&etaDelayState[bus.id].active&&bus.st==='moving') alerts.add('SLOW_TRAFFIC');
  if (Math.abs(bus.p-st.lastP)>0.000005){st.lastP=bus.p;st.progressAt=now;}
  else if ((now-st.progressAt)/1000>ANML_STALL&&bus.st!=='stopped') alerts.add('STALLED');
  st.alerts=alerts;
}

function injectAnomaly(bus) {
  if (Math.random()<0.000013&&bus.st==='moving') {
    bus.st='stopped';
    setTimeout(function(){ if(bus.st==='stopped') bus.st='moving'; }, 25000+Math.random()*20000);
  }
}

function hasAlerts(busId){ return (anomalyState[busId]&&anomalyState[busId].alerts&&anomalyState[busId].alerts.size)||0; }
function getAlerts(busId){ return anomalyState[busId]&&anomalyState[busId].alerts ? Array.from(anomalyState[busId].alerts) : []; }

function renderAlertFeed() {
  ['alertsList','mobAlertsList'].forEach(function(id){
    var con=document.getElementById(id); if(!con) return;
    var active=[];
    BUSES.forEach(function(bus){
      var route=ROUTES.find(function(r){return r.id===bus.rid;});
      getAlerts(bus.id).forEach(function(aId){ active.push({bus:bus,route:route,aId:aId}); });
    });
    var chip=document.getElementById('alertChip'), dot=document.getElementById('navAlertDot');
    if(chip) chip.style.display=active.length?'flex':'none';
    if(dot)  dot.style.display=active.length?'block':'none';
    var sa=document.getElementById('statAlerts'); if(sa) sa.textContent=active.length;
    con.innerHTML=active.length===0
      ? '<div class="no-alerts">'+t('no_alerts')+'</div>'
      : active.map(function(x){
          return '<div class="alert-item" style="border-left-color:'+alertColor(x.aId)+'">'
            +'<div class="alert-bus" style="color:'+x.route.color+'">'+x.bus.name+'</div>'
            +'<div class="alert-msg" style="color:'+alertColor(x.aId)+'">'+alertLabel(x.aId)+'</div>'
            +'<div class="alert-route">'+t(x.route.nameKey)+'</div>'
            +'</div>';
        }).join('');
  });
}

/* OFFLINE */
var STATE_KEY='tmb_v4', lastSaveTime=0;
function saveState(){
  try{ localStorage.setItem(STATE_KEY,JSON.stringify({ts:Date.now(),buses:BUSES.map(function(b){return{id:b.id,p:b.p,dir:b.dir,st:b.st};})})); }catch(e){}
}
function restoreState(){
  try{
    var raw=localStorage.getItem(STATE_KEY); if(!raw) return;
    var snap=JSON.parse(raw), age=(Date.now()-snap.ts)/1000;
    if(age>600) return;
    snap.buses.forEach(function(saved){
      var bus=BUSES.find(function(b){return b.id===saved.id;}); if(!bus) return;
      bus.p=Math.min(1,Math.max(0,saved.p+Math.abs(age*bus.sp*ETA_FPS*(saved.dir||1))));
      bus.dir=saved.dir||1; bus.st='moving';
    });
  }catch(e){}
}
window.addEventListener('online', function(){ document.getElementById('offline-banner').style.display='none'; });
window.addEventListener('offline',function(){ document.getElementById('offline-banner').style.display='flex'; });
if(!navigator.onLine) document.getElementById('offline-banner').style.display='flex';

/* MAP */
var map=L.map('map',{center:CENTER,zoom:14,zoomControl:false});
L.control.zoom({position:'topright'}).addTo(map);
var tileLayer;
function addTile(){
  var layer=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',
    {attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',maxZoom:19}).addTo(map);
  applyTileFilter(); return layer;
}
function applyTileFilter(){
  requestAnimationFrame(function(){
    var pane=map.getPanes().tilePane;
    if(pane) pane.style.filter=dark?'invert(1) hue-rotate(180deg) brightness(0.82) saturate(0.75)':'none';
  });
}
tileLayer=addTile();

var rLayers={}, sLayers={}, bMarkers={};

/* OSRM + IndexedDB */
function openRouteDB(){
  return new Promise(function(res,rej){
    var req=indexedDB.open('tmb_geo_v4',1);
    req.onupgradeneeded=function(e){e.target.result.createObjectStore('geo',{keyPath:'id'});};
    req.onsuccess=function(e){res(e.target.result);}; req.onerror=function(){rej();};
  });
}
async function getCachedGeo(id){
  try{ var db=await openRouteDB(); return new Promise(function(res){var req=db.transaction('geo','readonly').objectStore('geo').get(id);req.onsuccess=function(e){res(e.target.result&&e.target.result.geo||null);};req.onerror=function(){res(null);};}); }catch(e){return null;}
}
async function setCachedGeo(id,geo){
  try{ var db=await openRouteDB(); db.transaction('geo','readwrite').objectStore('geo').put({id:id,geo:geo}); }catch(e){}
}
async function fetchOSRM(routeId,stops){
  var cached=await getCachedGeo(routeId); if(cached) return cached;
  try{
    var coords=stops.map(function(s){return s.c[1]+','+s.c[0];}).join(';');
    var data=await(await fetch('https://router.project-osrm.org/route/v1/driving/'+coords+'?overview=full&geometries=geojson')).json();
    if(data.code==='Ok'&&data.routes&&data.routes[0]){
      var geo=data.routes[0].geometry.coordinates.map(function(c){return[c[1],c[0]];});
      await setCachedGeo(routeId,geo); return geo;
    }
  }catch(e){} return null;
}

/* Position helpers */
function posOnGeo(geo,p){
  if(!geo||geo.length<2) return null;
  var total=0, dists=[0];
  for(var i=1;i<geo.length;i++){total+=Math.hypot(geo[i][0]-geo[i-1][0],geo[i][1]-geo[i-1][1]);dists.push(total);}
  if(!total) return geo[0];
  var tgt=p*total;
  for(var j=1;j<geo.length;j++){
    if(dists[j]>=tgt){var f=(tgt-dists[j-1])/(dists[j]-dists[j-1]);return[geo[j-1][0]+(geo[j][0]-geo[j-1][0])*f,geo[j-1][1]+(geo[j][1]-geo[j-1][1])*f];}
  }
  return geo[geo.length-1];
}
function pos(route,p){
  if(route.geo) return posOnGeo(route.geo,p);
  var s=route.stops,n=s.length-1,sp=p*n,seg=Math.min(Math.floor(sp),n-1),fr=sp-seg;
  return[s[seg].c[0]+(s[seg+1].c[0]-s[seg].c[0])*fr,s[seg].c[1]+(s[seg+1].c[1]-s[seg].c[1])*fr];
}
function atStop(route,p){var f=(p*(route.stops.length-1))%1;return f<0.06||f>0.94;}
function snapToGeo(geo,coord){
  var best=coord,bestD=Infinity;
  for(var i=1;i<geo.length;i++){
    var a=geo[i-1],b=geo[i],dx=b[0]-a[0],dy=b[1]-a[1],l=dx*dx+dy*dy;
    var t2=l>0?((coord[0]-a[0])*dx+(coord[1]-a[1])*dy)/l:0; t2=Math.max(0,Math.min(1,t2));
    var d=Math.hypot(a[0]+t2*dx-coord[0],a[1]+t2*dy-coord[1]);
    if(d<bestD){bestD=d;best=[a[0]+t2*dx,a[1]+t2*dy];}
  }
  return best;
}

/* Icons */
function busIcon(route,pulsing,alerting){
  var pulse=pulsing?'<div class="bus-ring" style="background:'+route.color+'40;border:2px solid '+route.color+'"></div>':'';
  var aRing=alerting?'<div class="alert-ring"></div>':'';
  var aBadge=alerting?'<div class="alert-badge-dot">!</div>':'';
  var bg=alerting?'#f04060':route.color;
  return L.divIcon({className:'',
    html:'<div style="position:relative;width:28px;height:28px;">'+pulse+aRing
        +'<div style="position:relative;z-index:1;background:'+bg+';color:#000;font-weight:800;'
        +'width:28px;height:28px;border-radius:6px;display:flex;align-items:center;'
        +'justify-content:center;box-shadow:0 2px 14px '+bg+'99;border:2px solid rgba(255,255,255,.22);font-size:14px">🚌</div>'
        +aBadge+'</div>',
    iconSize:[28,28],iconAnchor:[14,14]});
}
function stopIcon(route,isTerminal){
  var sz=isTerminal?15:10,bw=isTerminal?3:2.5;
  var bg=isTerminal?route.color:(dark?'#1e2432':'#f4f6fc');
  return L.divIcon({className:'',
    html:'<div style="width:'+sz+'px;height:'+sz+'px;background:'+bg+';border:'+bw+'px solid '+route.color+';border-radius:50%;box-shadow:0 0 8px '+route.color+'88"></div>',
    iconSize:[15,15],iconAnchor:[7,7]});
}

/* Draw routes */
function drawRoutes(){
  ROUTES.forEach(function(route){
    var poly=L.polyline(route.stops.map(function(s){return s.c;}),{color:route.color,weight:5,opacity:0.9}).addTo(map);
    poly.on('click',function(){showRouteInfo(route);});
    rLayers[route.id]=poly; sLayers[route.id]=[];
    route.stops.forEach(function(stop,i){
      var term=i===0||i===route.stops.length-1;
      var m=L.marker(stop.c,{icon:stopIcon(route,term),zIndexOffset:500}).addTo(map).on('click',function(){showStopInfo(stop,route);});
      m.bindTooltip('<b>'+ts(stop.k)+'</b><br><small style="color:'+route.color+'">'+t(route.nameKey)+'</small>',{className:'tmb-tooltip',direction:'top',offset:[0,-6]});
      sLayers[route.id].push(m);
    });
    fetchOSRM(route.id,route.stops).then(function(geo){
      if(!geo||geo.length<2) return;
      route.geo=geo; rLayers[route.id].setLatLngs(geo);
      route.stops.forEach(function(stop,i){
        var snapped=snapToGeo(geo,stop.c); stop.c=snapped; sLayers[route.id][i].setLatLng(snapped);
      });
    });
  });
}

function drawBuses(){
  BUSES.forEach(function(bus){
    var route=ROUTES.find(function(r){return r.id===bus.rid;});
    var m=L.marker(pos(route,bus.p),{icon:busIcon(route,atStop(route,bus.p),false),zIndexOffset:1000}).addTo(map);
    m.on('click',function(e){L.DomEvent.stopPropagation(e);selectBus(bus,route);});
    bMarkers[bus.id]=m;
  });
}

/* Selected bus — real-time popup refresh */
var selectedBusId=null, selectedRouteId=null, _popupInterval=null;

function selectBus(bus,route){
  selectedBusId=bus.id; selectedRouteId=route.id;
  showBusInfo(bus,route);
  document.querySelectorAll('.bus-card').forEach(function(c){c.classList.remove('selected');});
  var card=document.getElementById('bus-card-'+bus.id); if(card) card.classList.add('selected');
}

function startPopupRefresh(){
  if(_popupInterval) clearInterval(_popupInterval);
  _popupInterval=setInterval(function(){
    if(!selectedBusId) return;
    var bus=BUSES.find(function(b){return b.id===selectedBusId;});
    var route=ROUTES.find(function(r){return r.id===selectedRouteId;});
    if(!bus||!route) return;
    var etaHtml=buildETAHtml(bus,route);
    [document.getElementById('panelContent'),document.getElementById('mobContent')].forEach(function(con){
      if(!con) return;
      var old=con.querySelector('.eta-section');
      if(old){var tmp=document.createElement('div');tmp.innerHTML=etaHtml;old.replaceWith(tmp.firstElementChild);}
    });
  },1000);
}

/* Animation loop */
function animateBuses(){
  BUSES.forEach(function(bus){
    if(bus.st!=='stopped'){ bus.p+=bus.sp*bus.dir; if(bus.p>=1){bus.p=1;bus.dir=-1;} if(bus.p<=0){bus.p=0;bus.dir=1;} }
    tickEtaDelay(bus.id);
    injectAnomaly(bus);
    checkAnomalies(bus);
    var route=ROUTES.find(function(r){return r.id===bus.rid;});
    bMarkers[bus.id].setLatLng(pos(route,bus.p));
    bMarkers[bus.id].setIcon(busIcon(route,atStop(route,bus.p)||bus.st==='stopped',hasAlerts(bus.id)));
  });
  updateBusCards(); updateMobBusCards();
  if(Date.now()-_lastAlertRender>2000){renderAlertFeed();_lastAlertRender=Date.now();}
  if(Date.now()-lastSaveTime>10000){saveState();lastSaveTime=Date.now();}
  requestAnimationFrame(animateBuses);
}
var _lastAlertRender=0;

/* Schedule */
function nextDep(sched){
  var nm=new Date().getHours()*60+new Date().getMinutes();
  return sched.find(function(s){var p=s.split(':').map(Number);return p[0]*60+p[1]>nm;})||sched[0];
}
function minsUntil(s){
  var nm=new Date().getHours()*60+new Date().getMinutes(),p=s.split(':').map(Number),d=p[0]*60+p[1]-nm;
  if(d<0)d+=1440; return d;
}
function renderSched(cid){
  var con=document.getElementById(cid); if(!con) return;
  con.innerHTML='';
  ROUTES.forEach(function(route){
    var nxt=nextDep(route.sched);
    var block=document.createElement('div'); block.className='sched-route-block';
    block.innerHTML='<div class="sched-route-header">'
      +'<div class="route-badge" style="background:'+route.color+'22;color:'+route.color+';width:26px;height:26px;font-size:12px">'+route.id+'</div>'
      +'<div class="sched-route-title">'+t(route.nameKey)+'</div></div>'
      +'<div class="sched-grid" id="'+cid+'-g-'+route.id+'"></div>';
    con.appendChild(block);
    var grid=block.querySelector('#'+cid+'-g-'+route.id);
    route.sched.forEach(function(time){
      var isNxt=time===nxt,mins=minsUntil(time);
      var item=document.createElement('div'); item.className='sched-item'+(isNxt?' next':'');
      item.innerHTML='<div><div class="sched-time" style="color:'+(isNxt?route.color:'var(--text)')+'">'+time+'</div>'
        +'<div class="sched-label">'+(isNxt?'~'+mins+' мин':'')+'</div></div>'
        +(isNxt?'<div class="sched-next-badge">'+t('next')+'</div>':'');
      grid.appendChild(item);
    });
  });
}

/* Sidebar */
function dskTab(tab){
  ['routes','buses','sched','alerts'].forEach(function(tp){
    document.getElementById('dsk-tab-'+tp).classList.toggle('active',tp===tab);
    document.getElementById('dsk-panel-'+tp).classList.toggle('active',tp===tab);
  });
}
function toggleRoute(routeId,e){
  e.stopPropagation();
  var route=ROUTES.find(function(r){return r.id===routeId;}); route.visible=!route.visible;
  ['','mob-'].forEach(function(pre){var tog=document.getElementById(pre+'toggle-'+routeId);if(tog)tog.classList.toggle('on',route.visible);});
  if(route.visible){rLayers[routeId].addTo(map);sLayers[routeId].forEach(function(m){m.addTo(map);});BUSES.filter(function(b){return b.rid===routeId;}).forEach(function(b){bMarkers[b.id].addTo(map);});}
  else{map.removeLayer(rLayers[routeId]);sLayers[routeId].forEach(function(m){map.removeLayer(m);});BUSES.filter(function(b){return b.rid===routeId;}).forEach(function(b){map.removeLayer(bMarkers[b.id]);});}
}
function refreshRoutesList(){
  var con=document.getElementById('routesList'); con.innerHTML='';
  ROUTES.forEach(function(route){
    var item=document.createElement('div'); item.className='route-item'; item.id='route-item-'+route.id;
    item.innerHTML='<div class="route-badge" style="background:'+route.color+'22;color:'+route.color+'">'+route.id+'</div>'
      +'<div class="route-info"><div class="route-name">'+t(route.nameKey)+'</div><div class="route-desc">'+t(route.descKey)+'</div></div>'
      +'<div class="route-toggle on" id="toggle-'+route.id+'" onclick="toggleRoute('+route.id+',event)"></div>';
    item.addEventListener('click',function(){map.fitBounds(L.latLngBounds(route.stops.map(function(s){return s.c;})),{padding:[60,60]});showRouteInfo(route);document.querySelectorAll('.route-item').forEach(function(e){e.classList.remove('active');});item.classList.add('active');});
    con.appendChild(item);
  });
}
function refreshBusesList(){
  var con=document.getElementById('busesList'); con.innerHTML='';
  BUSES.forEach(function(bus){
    var route=ROUTES.find(function(r){return r.id===bus.rid;});
    var card=document.createElement('div'); card.className='bus-card'; card.id='bus-card-'+bus.id;
    card.addEventListener('click',function(){map.setView(pos(route,bus.p),16);selectBus(bus,route);});
    con.appendChild(card);
  });
  updateBusCards();
}
function fillCard(card,bus,route){
  var n=route.stops.length-1,idx=Math.min(Math.ceil(bus.p*n),n),ns=route.stops[idx];
  var alerted=hasAlerts(bus.id),etas=calculateETAs(bus,route),etaStr=etas[0]?fmtETA(etas[0].etaSec):'—';
  card.classList.toggle('alerted',!!alerted);
  var hasDelay=etaDelayState[bus.id]&&etaDelayState[bus.id].active;
  card.innerHTML='<div class="bus-card-header">'
    +'<div class="route-badge" style="background:'+route.color+'22;color:'+route.color+';width:24px;height:24px;font-size:11px">'+route.id+'</div>'
    +'<div class="bus-number">'+bus.name+'</div>'
    +(alerted?'<div class="bus-status stopped">⚠️</div>':'<div class="bus-status '+bus.st+'">'+(bus.st==='moving'?t('moving'):t('stopped_s'))+'</div>')
    +'</div><div class="bus-route-name">'+t(route.nameKey)+'</div>'
    +'<div class="bus-meta">'
    +'<div class="bus-meta-item"><div class="meta-label">'+t('next_stop').toUpperCase()+'</div><div class="meta-value" style="font-size:10px">'+ts(ns.k)+'</div></div>'
    +'<div class="bus-meta-item"><div class="meta-label">ETA</div><div class="meta-value" style="color:'+(hasDelay?'#f04060':'var(--accent)')+'">'+etaStr+'</div></div>'
    +'</div>';
}
function updateBusCards(){BUSES.forEach(function(bus){var c=document.getElementById('bus-card-'+bus.id);if(c)fillCard(c,bus,ROUTES.find(function(r){return r.id===bus.rid;}));});}

/* Info panels */
function rows(data){return data.map(function(r){return '<div class="info-row"><span class="info-row-label">'+r.l+'</span><span class="info-row-val"'+(r.c?' style="color:'+r.c+'"':'')+'>'+r.v+'</span></div>';}).join('');}
function showPanel(title,sub,content){
  if(window.innerWidth<=680){document.getElementById('mobTitle').textContent=title;document.getElementById('mobSub').innerHTML=sub;document.getElementById('mobContent').innerHTML=content;document.getElementById('mobInfo').classList.add('visible');collapseSheet();}
  else{document.getElementById('panelTitle').textContent=title;document.getElementById('panelSub').innerHTML=sub;document.getElementById('panelContent').innerHTML=content;document.getElementById('infoPanel').classList.add('visible');}
}
function showRouteInfo(route){
  selectedBusId=null;
  var buses=BUSES.filter(function(b){return b.rid===route.id;});
  showPanel(t(route.nameKey),'<span style="color:'+route.color+'">●</span> '+t(route.descKey),
    rows([{l:t('total_stops'),v:route.stops.length},{l:t('total_buses'),v:buses.length},
          {l:t('in_motion'),v:buses.filter(function(b){return b.st==='moving';}).length,c:'var(--accent2)'},
          {l:t('at_stop'),v:buses.filter(function(b){return b.st==='stopped';}).length,c:'var(--accent3)'}]));
}
function showStopInfo(stop,route){
  selectedBusId=null;
  var nxt=nextDep(route.sched),mins=minsUntil(nxt);
  showPanel(ts(stop.k),t('stop_lbl')+' &middot; <span style="color:'+route.color+'">'+t(route.nameKey)+'</span>',
    rows([{l:t('next_bus'),v:'~'+mins+' мин &middot; '+nxt,c:'var(--accent)'},{l:t('route_lbl'),v:t(route.nameKey)}]));
}
function showBusInfo(bus,route){
  var n=route.stops.length-1,ns=route.stops[Math.min(Math.ceil(bus.p*n),n)];
  var alts=getAlerts(bus.id);
  var alertHtml=alts.length?'<div style="margin-top:8px;padding-top:6px;border-top:1px solid var(--border)">'+alts.map(function(a){return'<div style="color:'+alertColor(a)+';font-size:12px;font-weight:700;padding:2px 0">'+alertLabel(a)+'</div>';}).join('')+'</div>':'';
  showPanel(t('bus_lbl')+' '+bus.name,'<span style="color:'+route.color+'">●</span> '+t(route.nameKey),
    rows([{l:t('status'),v:bus.st==='moving'?t('moving'):t('stopped_s'),c:bus.st==='moving'?'var(--accent2)':'var(--accent3)'},
          {l:t('route_lbl'),v:t(route.nameKey)},{l:t('next_stop'),v:ts(ns.k)}])
    +alertHtml+buildETAHtml(bus,route));
}
function closePanel(){document.getElementById('infoPanel').classList.remove('visible');selectedBusId=null;document.querySelectorAll('.bus-card').forEach(function(c){c.classList.remove('selected');});}
function closeMobInfo(){document.getElementById('mobInfo').classList.remove('visible');selectedBusId=null;document.querySelectorAll('.bus-card').forEach(function(c){c.classList.remove('selected');});}

/* Stats */
function updateStats(){
  var b=BUSES.length,s=new Set(ROUTES.reduce(function(a,r){return a.concat(r.stops.map(function(st){return st.k;}));},[])).size,r=ROUTES.length;
  ['statBuses','mStatBuses'].forEach(function(id){var e=document.getElementById(id);if(e)e.textContent=b;});
  ['statStops','mStatStops'].forEach(function(id){var e=document.getElementById(id);if(e)e.textContent=s;});
  ['statRoutes','mStatRoutes'].forEach(function(id){var e=document.getElementById(id);if(e)e.textContent=r;});
}

/* Mobile */
var mobTab='routes',sheetSt='peek';
function setSheet(st){var sh=document.getElementById('bottomSheet');sh.classList.remove('peek','half','full');sh.classList.add(st);sheetSt=st;}
function collapseSheet(){setSheet('peek');}
function switchTab(tab){
  mobTab=tab;
  ['routes','buses','sched','alerts'].forEach(function(tp){
    var btn=document.getElementById('tab'+tp[0].toUpperCase()+tp.slice(1)); if(btn) btn.classList.toggle('active',tp===tab);
    var el=document.getElementById('mob'+tp[0].toUpperCase()+tp.slice(1)+'List'); if(el) el.style.display=tp===tab?'':'none';
  });
  if(sheetSt==='peek') setSheet('half');
}
function navTo(section){
  ['navMap','navRoutes','navBuses','navSched','navAlerts'].forEach(function(id){var e=document.getElementById(id);if(e)e.classList.remove('active');});
  if(section==='map'){document.getElementById('navMap').classList.add('active');setSheet('peek');closeMobInfo();}
  else{var idMap={routes:'navRoutes',buses:'navBuses',sched:'navSched',alerts:'navAlerts'};var e=document.getElementById(idMap[section]);if(e)e.classList.add('active');switchTab(section);setSheet('half');}
}
(function(){
  var sheet=document.getElementById('bottomSheet'),handle=document.getElementById('sheetHandle'),tabsRow=sheet.querySelector('.sheet-tabs'),content=sheet.querySelector('.sheet-content');
  var sy=0,st2=0,dragging=false,inContent=false;
  function isDZ(el){return handle.contains(el)||tabsRow.contains(el)||el===sheet;}
  sheet.addEventListener('touchstart',function(e){inContent=content&&content.contains(e.target);if(inContent||!isDZ(e.target))return;sy=e.touches[0].clientY;st2=Date.now();dragging=true;sheet.style.transition='none';},{passive:true});
  sheet.addEventListener('touchmove',function(e){if(!dragging||inContent)return;if(Math.abs(sy-e.touches[0].clientY)>8)e.preventDefault();},{passive:false});
  sheet.addEventListener('touchend',function(e){if(!dragging)return;dragging=false;sheet.style.transition='';var dy=sy-e.changedTouches[0].clientY,vel=dy/Math.max(1,Date.now()-st2);if(vel>0.3||dy>50)setSheet(sheetSt==='peek'?'half':'full');else if(vel<-0.3||dy<-50)setSheet(sheetSt==='full'?'half':'peek');},{passive:true});
})();
function renderMobRoutes(){
  var con=document.getElementById('mobRoutesList'); con.innerHTML='';
  ROUTES.forEach(function(route){
    var item=document.createElement('div');item.className='route-item';item.style.marginBottom='6px';
    item.innerHTML='<div class="route-badge" style="background:'+route.color+'22;color:'+route.color+'">'+route.id+'</div>'
      +'<div class="route-info"><div class="route-name">'+t(route.nameKey)+'</div><div class="route-desc">'+t(route.descKey)+'</div></div>'
      +'<div class="route-toggle on" id="mob-toggle-'+route.id+'" onclick="toggleRoute('+route.id+',event)"></div>';
    item.addEventListener('click',function(){map.fitBounds(L.latLngBounds(route.stops.map(function(s){return s.c;})),{padding:[60,80]});showRouteInfo(route);navTo('map');});
    con.appendChild(item);
  });
}
function renderMobBuses(){
  var con=document.getElementById('mobBusesList'); con.innerHTML='';
  BUSES.forEach(function(bus){
    var route=ROUTES.find(function(r){return r.id===bus.rid;});
    var card=document.createElement('div');card.className='bus-card';card.id='mob-bus-card-'+bus.id;card.style.marginBottom='8px';
    card.addEventListener('click',function(){map.setView(pos(route,bus.p),16);selectBus(bus,route);navTo('map');});
    con.appendChild(card);
  });
}
function updateMobBusCards(){BUSES.forEach(function(bus){var c=document.getElementById('mob-bus-card-'+bus.id);if(c)fillCard(c,bus,ROUTES.find(function(r){return r.id===bus.rid;}));});}

/* PWA */
function initPWA(){
  var mf={name:'TrackMyBus',short_name:'TrackMyBus',start_url:'.',display:'standalone',background_color:'#0d0f14',theme_color:'#f0c040',orientation:'any',
    icons:[{src:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='20' fill='%23f0c040'/%3E%3Ctext y='.9em' font-size='80' x='10'%3E%F0%9F%9A%8C%3C/text%3E%3C/svg%3E",sizes:'any',type:'image/svg+xml',purpose:'any maskable'}]};
  var el=document.getElementById('pwaManifest'); if(el) el.href=URL.createObjectURL(new Blob([JSON.stringify(mf)],{type:'application/json'}));
}

/* INIT */
function init(){
  restoreState(); drawRoutes(); drawBuses();
  refreshRoutesList(); refreshBusesList();
  renderSched('schedList'); renderMobRoutes(); renderMobBuses();
  renderSched('mobSchedList'); renderAlertFeed(); updateStats();
  applyI18n(); initPWA(); animateBuses(); startPopupRefresh();
  setTimeout(function(){map.invalidateSize();},100);
  window.addEventListener('resize',function(){map.invalidateSize();});
  setInterval(function(){renderSched('schedList');renderSched('mobSchedList');},60000);
}
init();
