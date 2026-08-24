import type { Lang } from '../types';

type StopMap = Record<string, string>;

interface Translations {
  routes: string;
  buses: string;
  buses_online: string;
  schedule: string;
  stops: string;
  map: string;
  sim: string;

  alerts: string;
  no_alerts: string;

  status: string;
  route_lbl: string;
  next_stop: string;

  moving: string;
  stopped_s: string;

  stop_lbl: string;
  next_bus: string;

  total_stops: string;
  total_buses: string;
  in_motion: string;
  at_stop: string;

  bus_lbl: string;
  next: string;

  eta_title: string;
  eta_ontime: string;
  eta_delayed: string;

  eta_conf_hi: string;
  eta_conf_lo: string;

  r1_name: string;
  r1_desc: string;

  r2_name: string;
  r2_desc: string;

  r3_name: string;
  r3_desc: string;

  r4_name: string;
  r4_desc: string;

  sm: StopMap;
}

export const TR: Record<Lang, Translations> = {
  ru: {
    routes: 'Маршруты',
    buses: 'Автобусы',
    buses_online: 'Автобусы онлайн',
    schedule: 'Расписание',
    stops: 'Остановки',
    map: 'КАРТА',
    sim: 'СИМ',

    alerts: 'Тревоги',
    no_alerts: '✅ Все автобусы в норме',

    status: 'Статус',
    route_lbl: 'Маршрут',
    next_stop: 'След. остановка',

    moving: '▶ В движении',
    stopped_s: '■ Остановился',

    stop_lbl: 'Остановка',
    next_bus: 'Следующий автобус',

    total_stops: 'Остановок',
    total_buses: 'Автобусов',
    in_motion: 'В движении',
    at_stop: 'Стоят',

    bus_lbl: 'Автобус',
    next: 'следующий',

    eta_title: 'ПРИБЫТИЕ',
    eta_ontime: '🟢 По расписанию',
    eta_delayed: '🔴 Задержка',

    eta_conf_hi: 'Точность: высокая',
    eta_conf_lo: 'Точность: низкая',

    r1_name: 'Маршрут 1',
    r1_desc: 'Юг → Центр → Больница → Север',

    r2_name: 'Маршрут 2',
    r2_desc: 'Запад → Центр → Восток',

    r3_name: 'Маршрут 3',
    r3_desc: 'Ю-Запад → Центр → С-Восток',

    r4_name: 'Маршрут 4',
    r4_desc: 'Автовокзал → Запад → С-Запад',

    sm: {
      'Конечная Юг': 'Конечная Юг',
      'Южный микрорайон': 'Южный микрорайон',
      'Ул. Кирова': 'Ул. Кирова',
      'Ул. Победы': 'Ул. Победы',
      'Площадь Ленина': 'Площадь Ленина',
      'Центр (банк)': 'Центр (банк)',
      'Рынок': 'Рынок',
      'Школа №2': 'Школа №2',
      'Больница': 'Больница',
      'Стадион': 'Стадион',
      'Конечная Север': 'Конечная Север',
      'Конечная Запад': 'Конечная Запад',
      'Ул. Горького': 'Ул. Горького',
      'Завод Прогресс': 'Завод Прогресс',
      'Парк Победы': 'Парк Победы',
      'Ул. Комсомольская': 'Ул. Комсомольская',
      'ЖК Восток': 'ЖК Восток',
      'Конечная Восток': 'Конечная Восток',
      'Автовокзал': 'Автовокзал',
      'Ул. Октябрьская': 'Ул. Октябрьская',
      'Поликлиника 1': 'Поликлиника 1',
      'Дом культуры': 'Дом культуры',
      'Ул. Ленина': 'Ул. Ленина',
      'Конечная СЗ': 'Конечная С-Запад',
      'Ул. Чкалова': 'Ул. Чкалова',
      'Ул. Буджакская': 'Ул. Буджакская',
    },
  },

  ro: {
    routes: 'Rute',
    buses: 'Autobuze',
    buses_online: 'Autobuze online',
    schedule: 'Orar',
    stops: 'Statii',
    map: 'HARTA',
    sim: 'SIM',

    alerts: 'Alerte',
    no_alerts: 'Toate autobuzele functioneaza normal',

    status: 'Stare',
    route_lbl: 'Ruta',
    next_stop: 'Urm. statie',

    moving: 'In miscare',
    stopped_s: 'Oprit',

    stop_lbl: 'Statie',
    next_bus: 'Autobuz urmator',

    total_stops: 'Statii',
    total_buses: 'Autobuze',
    in_motion: 'In miscare',
    at_stop: 'Oprite',

    bus_lbl: 'Autobuz',
    next: 'urmator',

    eta_title: 'SOSIRE',
    eta_ontime: 'La timp',
    eta_delayed: 'Intarziere',

    eta_conf_hi: 'Acuratete: ridicata',
    eta_conf_lo: 'Acuratete: scazuta',

    r1_name: 'Ruta 1',
    r1_desc: 'Sud - Centru - Spital - Nord',

    r2_name: 'Ruta 2',
    r2_desc: 'Vest - Centru - Est',

    r3_name: 'Ruta 3',
    r3_desc: 'SV - Centru - NE',

    r4_name: 'Ruta 4',
    r4_desc: 'Autogara - Vest - NV',

    sm: {
      'Конечная Юг': 'Terminus Sud',
      'Южный микрорайон': 'Cart. Sud',
      'Ул. Кирова': 'Str. Kirov',
      'Ул. Победы': 'Str. Victoriei',
      'Площадь Ленина': 'Piata Lenin',
      'Центр (банк)': 'Centru (banca)',
      'Рынок': 'Piata',
      'Школа №2': 'Scoala Nr.2',
      'Больница': 'Spital',
      'Стадион': 'Stadion',
      'Конечная Север': 'Terminus Nord',
      'Конечная Запад': 'Terminus Vest',
      'Ул. Горького': 'Str. Gorki',
      'Завод Прогресс': 'Uzina Progres',
      'Парк Победы': 'Parcul Victoriei',
      'Ул. Комсомольская': 'Str. Komsomolului',
      'ЖК Восток': 'BL Est',
      'Конечная Восток': 'Terminus Est',
      'Автовокзал': 'Autogara',
      'Ул. Октябрьская': 'Str. Octombrie',
      'Поликлиника 1': 'Policlinica nr.1',
      'Дом культуры': 'Casa Culturii',
      'Ул. Ленина': 'Str. Lenin',
      'Конечная СЗ': 'Terminus NV',
      'Ул. Чкалова': 'Str. Cikalov',
      'Ул. Буджакская': 'Str. Bugeacului',
    },
  },

  en: {
    routes: 'Routes',
    buses: 'Buses',
    buses_online: 'Buses Online',
    schedule: 'Schedule',
    stops: 'Stops',
    map: 'MAP',
    sim: 'SIM',

    alerts: 'Alerts',
    no_alerts: 'All buses running normally',

    status: 'Status',
    route_lbl: 'Route',
    next_stop: 'Next stop',

    moving: 'Moving',
    stopped_s: 'Stopped',

    stop_lbl: 'Stop',
    next_bus: 'Next bus',

    total_stops: 'Stops',
    total_buses: 'Buses',
    in_motion: 'In motion',
    at_stop: 'Stopped',

    bus_lbl: 'Bus',
    next: 'next',

    eta_title: 'ARRIVAL',
    eta_ontime: 'On schedule',
    eta_delayed: 'Delay',

    eta_conf_hi: 'Confidence: high',
    eta_conf_lo: 'Confidence: low',

    r1_name: 'Route 1',
    r1_desc: 'South - Centre - Hospital - North',

    r2_name: 'Route 2',
    r2_desc: 'West - Centre - East',

    r3_name: 'Route 3',
    r3_desc: 'SW - Centre - NE',

    r4_name: 'Route 4',
    r4_desc: 'Bus Station - West - NW',

    sm: {
      'Конечная Юг': 'South Terminal',
      'Южный микрорайон': 'South District',
      'Ул. Кирова': 'Kirov St.',
      'Ул. Победы': 'Victory St.',
      'Площадь Ленина': 'Lenin Square',
      'Центр (банк)': 'Centre (bank)',
      'Рынок': 'Market',
      'Школа №2': 'School No.2',
      'Больница': 'Hospital',
      'Стадион': 'Stadium',
      'Конечная Север': 'North Terminal',
      'Конечная Запад': 'West Terminal',
      'Ул. Горького': 'Gorky St.',
      'Завод Прогресс': 'Progress Factory',
      'Парк Победы': 'Victory Park',
      'Ул. Комсомольская': 'Komsomol St.',
      'ЖК Восток': 'East Block',
      'Конечная Восток': 'East Terminal',
      'Автовокзал': 'Bus Station',
      'Ул. Октябрьская': 'October St.',
      'Поликлиника 1': 'Polyclinic No.1',
      'Дом культуры': 'Cultural Centre',
      'Ул. Ленина': 'Lenin St.',
      'Конечная СЗ': 'NW Terminal',
      'Ул. Чкалова': 'Chkalov St.',
      'Ул. Буджакская': 'Bugeac St.',
    },
  },

  tr: {
    routes: 'Rotalar',
    buses: 'Otobüsler',
    buses_online: 'Çevrimiçi Otobüsler',
    schedule: 'Sefer Saatleri',
    stops: 'Duraklar',
    map: 'HARİTA',
    sim: 'SİM',

    alerts: 'Uyarılar',
    no_alerts: '✅ Tüm otobüsler normal çalışıyor',

    status: 'Durum',
    route_lbl: 'Rota',
    next_stop: 'Sonraki durak',

    moving: '▶ Hareket halinde',
    stopped_s: '■ Durdu',

    stop_lbl: 'Durak',
    next_bus: 'Sonraki otobüs',

    total_stops: 'Duraklar',
    total_buses: 'Otobüsler',
    in_motion: 'Hareket halinde',
    at_stop: 'Duruyor',

    bus_lbl: 'Otobüs',
    next: 'sonraki',

    eta_title: 'VARIŞ',
    eta_ontime: '🟢 Zamanında',
    eta_delayed: '🔴 Gecikme',

    eta_conf_hi: 'Doğruluk: yüksek',
    eta_conf_lo: 'Doğruluk: düşük',

    r1_name: '1. Rota',
    r1_desc: 'Güney → Merkez → Hastane → Kuzey',

    r2_name: '2. Rota',
    r2_desc: 'Batı → Merkez → Doğu',

    r3_name: '3. Rota',
    r3_desc: 'Güneybatı → Merkez → Kuzeydoğu',

    r4_name: '4. Rota',
    r4_desc: 'Otogar → Batı → Kuzeybatı',

    sm: {
      'Конечная Юг': 'Güney Terminali',
      'Южный микрорайон': 'Güney Mahallesi',
      'Ул. Кирова': 'Kirov Caddesi',
      'Ул. Победы': 'Zafer Caddesi',
      'Площадь Ленина': 'Lenin Meydanı',
      'Центр (банк)': 'Merkez (banka)',
      'Рынок': 'Pazar',
      'Школа №2': '2. Okul',
      'Больница': 'Hastane',
      'Стадион': 'Stadyum',
      'Конечная Север': 'Kuzey Terminali',
      'Конечная Запад': 'Batı Terminali',
      'Ул. Горького': 'Gorki Caddesi',
      'Завод Прогресс': 'Progress Fabrikası',
      'Парк Победы': 'Zafer Parkı',
      'Ул. Комсомольская': 'Komsomolskaya Caddesi',
      'ЖК Восток': 'Doğu Konutları',
      'Конечная Восток': 'Doğu Terminali',
      'Автовокзал': 'Otogar',
      'Ул. Октябрьская': 'Ekim Caddesi',
      'Поликлиника 1': '1. Poliklinik',
      'Дом культуры': 'Kültür Evi',
      'Ул. Ленина': 'Lenin Caddesi',
      'Конечная СЗ': 'Kuzeybatı Terminali',
      'Ул. Чкалова': 'Çkalov Caddesi',
      'Ул. Буджакская': 'Bucak Caddesi',
    },
  },

  bg: {
    routes: 'Маршрути',
    buses: 'Автобуси',
    buses_online: 'Автобуси онлайн',
    schedule: 'Разписание',
    stops: 'Спирки',
    map: 'КАРТА',
    sim: 'СИМ',

    alerts: 'Предупреждения',
    no_alerts: '✅ Всички автобуси работят нормално',

    status: 'Статус',
    route_lbl: 'Маршрут',
    next_stop: 'Следваща спирка',

    moving: '▶ В движение',
    stopped_s: '■ Спрял',

    stop_lbl: 'Спирка',
    next_bus: 'Следващ автобус',

    total_stops: 'Спирки',
    total_buses: 'Автобуси',
    in_motion: 'В движение',
    at_stop: 'Спрели',

    bus_lbl: 'Автобус',
    next: 'следващ',

    eta_title: 'ПРИСТИГАНЕ',
    eta_ontime: '🟢 По разписание',
    eta_delayed: '🔴 Закъснение',

    eta_conf_hi: 'Точност: висока',
    eta_conf_lo: 'Точност: ниска',

    r1_name: 'Маршрут 1',
    r1_desc: 'Юг → Център → Болница → Север',

    r2_name: 'Маршрут 2',
    r2_desc: 'Запад → Център → Изток',

    r3_name: 'Маршрут 3',
    r3_desc: 'Югозапад → Център → Североизток',

    r4_name: 'Маршрут 4',
    r4_desc: 'Автогара → Запад → Северозапад',

    sm: {
      'Конечная Юг': 'Южен терминал',
      'Южный микрорайон': 'Южен квартал',
      'Ул. Кирова': 'ул. Кирова',
      'Ул. Победы': 'ул. Победа',
      'Площадь Ленина': 'пл. Ленин',
      'Центр (банк)': 'Център (банка)',
      'Рынок': 'Пазар',
      'Школа №2': 'Училище №2',
      'Больница': 'Болница',
      'Стадион': 'Стадион',
      'Конечная Север': 'Северен терминал',
      'Конечная Запад': 'Западен терминал',
      'Ул. Горького': 'ул. Горки',
      'Завод Прогресс': 'Завод Прогрес',
      'Парк Победы': 'Парк Победа',
      'Ул. Комсомольская': 'ул. Комсомолска',
      'ЖК Восток': 'Източен жилищен комплекс',
      'Конечная Восток': 'Източен терминал',
      'Автовокзал': 'Автогара',
      'Ул. Октябрьская': 'ул. Октомври',
      'Поликлиника 1': 'Поликлиника №1',
      'Дом культуры': 'Дом на културата',
      'Ул. Ленина': 'ул. Ленин',
      'Конечная СЗ': 'Северозападен терминал',
      'Ул. Чкалова': 'ул. Чкалов',
      'Ул. Буджакская': 'ул. Буджакска',
    },
  },
};

export function t(
  lang: Lang,
  key: keyof Omit<Translations, 'sm'>
): string {
  return TR[lang][key];
}

export function ts(lang: Lang, key: string): string {
  return TR[lang].sm[key] ?? key;
}