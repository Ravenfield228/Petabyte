// PetaByte — content and language switching.
// Projects and services live here; edit the arrays below to update the site.
// " " = non-breaking space (keeps dashes from starting a new line).

const LANGS = ["az", "ru", "en"];
const WA_NUMBER = "994557806642";

const T = {
  az: {
    title: "PetaByte — Bakıda saytlar, QR menyu və Telegram botlar",
    description: "Restoranlar, apteklər və xidmət şirkətləri üçün çoxdilli saytlar, QR menyu və Telegram botlar. İşlərə baxın və WhatsApp-da yazın.",
    skip: "Məzmuna keçin",
    navLabel: "Naviqasiya",
    navWork: "İşlər",
    navServices: "Xidmətlər",
    navContact: "Əlaqə",
    heroLabel: "Veb studiya, Bakı · AZ / RU / EN",
    heroTitle: "Bakı biznesləri üçün saytlar və botlar",
    heroText: "Restoran menyusu, aptek kataloqu, sadə sayt-vizitka. Üç dildə, telefonda rahat — müştəri sizə bir toxunuşla yazır.",
    ctaPrimary: "WhatsApp-da yazın",
    ctaWork: "İşlərə baxın",
    altVicon: "Vicon Pharm şirkətinin saytı",
    altWaterGarden: "Water Garden restoranının saytı telefonda",
    workTitle: "İşlər",
    workNote: "Canlı saytlar — açıb özünüz yoxlaya bilərsiniz.",
    did: "Nə etdik",
    visit: "Sayta keçin",
    openDemo: "Demonu açın",
    wantThis: "Belə sayt istəyirəm",
    demo: "Demo",
    servicesTitle: "Nə hazırlayırıq",
    colService: "Xidmət",
    colWhat: "Nə alırsınız",
    colPrice: "Qiymət",
    priceFrom: (p) => `${p} ₼-dən`,
    contactTitle: "Layihəniz var? Yazın — plan və qiyməti göndərək.",
    step1: "Yazırsınız: nə lazımdır və bəyəndiyiniz nümunələr.",
    step2: "Plan, müddət və qiyməti göndəririk.",
    step3: "Demo link verir, düzəlişləri edir və saytı təhvil veririk.",
    email: "E-poçt",
    city: "Bakı",
    toTop: "Yuxarı ↑",
    waText: "Salam! Sayt barədə yazıram.",
    waProject: (name) => `Salam! ${name} kimi sayt istəyirəm.`
  },
  ru: {
    title: "PetaByte — сайты, QR-меню и Telegram-боты в Баку",
    description: "Многоязычные сайты, QR-меню и Telegram-боты для ресторанов, аптек и сервисных компаний. Посмотрите работы и напишите в WhatsApp.",
    skip: "Перейти к содержанию",
    navLabel: "Навигация",
    navWork: "Работы",
    navServices: "Услуги",
    navContact: "Контакты",
    heroLabel: "Веб-студия, Баку · AZ / RU / EN",
    heroTitle: "Сайты и боты для бизнеса в Баку",
    heroText: "Меню ресторана, каталог аптеки, простой сайт-визитка. На трёх языках, удобно на телефоне — клиент пишет вам в одно касание.",
    ctaPrimary: "Написать в WhatsApp",
    ctaWork: "Смотреть работы",
    altVicon: "Сайт компании Vicon Pharm",
    altWaterGarden: "Сайт ресторана Water Garden на телефоне",
    workTitle: "Работы",
    workNote: "Это живые сайты — можно открыть и проверить самому.",
    did: "Что сделали",
    visit: "Открыть сайт",
    openDemo: "Открыть демо",
    wantThis: "Хочу такой же",
    demo: "Демо",
    servicesTitle: "Что делаем",
    colService: "Услуга",
    colWhat: "Что входит",
    colPrice: "Цена",
    priceFrom: (p) => `от ${p} ₼`,
    contactTitle: "Есть проект? Напишите — пришлём план и цену.",
    step1: "Вы пишете, что нужно, и присылаете примеры, которые нравятся.",
    step2: "Мы присылаем план, сроки и цену.",
    step3: "Даём демо-ссылку, вносим правки и сдаём сайт.",
    email: "Почта",
    city: "Баку",
    toTop: "Наверх ↑",
    waText: "Здравствуйте! Пишу насчёт сайта.",
    waProject: (name) => `Здравствуйте! Хочу сайт как ${name}.`
  },
  en: {
    title: "PetaByte — websites, QR menus and Telegram bots in Baku",
    description: "Multilingual websites, QR menus and Telegram bots for restaurants, pharmacies and service companies. See the work and message us on WhatsApp.",
    skip: "Skip to content",
    navLabel: "Navigation",
    navWork: "Work",
    navServices: "Services",
    navContact: "Contact",
    heroLabel: "Web studio, Baku · AZ / RU / EN",
    heroTitle: "Websites and bots for Baku businesses",
    heroText: "A restaurant menu, a pharmacy catalogue, a simple business-card site. Three languages, easy on a phone — customers message you in one tap.",
    ctaPrimary: "Message on WhatsApp",
    ctaWork: "See the work",
    altVicon: "Vicon Pharm company website",
    altWaterGarden: "Water Garden restaurant website on a phone",
    workTitle: "Work",
    workNote: "These are live sites — open them and check for yourself.",
    did: "What we did",
    visit: "Open site",
    openDemo: "Open demo",
    wantThis: "I want one like this",
    demo: "Demo",
    servicesTitle: "What we build",
    colService: "Service",
    colWhat: "What you get",
    colPrice: "Price",
    priceFrom: (p) => `from ${p} ₼`,
    contactTitle: "Got a project? Write to us — we'll send a plan and a price.",
    step1: "You tell us what you need and send examples you like.",
    step2: "We send a plan, timeline and price.",
    step3: "We share a demo link, make edits and hand over the site.",
    email: "Email",
    city: "Baku",
    toTop: "Back to top ↑",
    waText: "Hi! I'm writing about a website.",
    waProject: (name) => `Hi! I'd like a site like ${name}.`
  }
};

const PROJECTS = [
  {
    title: "Water Garden",
    url: "https://watergarden.restaurant/",
    host: "watergarden.restaurant",
    image: "assets/water-garden.webp", w: 1400, h: 800,
    type: { az: "Restoran saytı", ru: "Сайт ресторана", en: "Restaurant website" },
    text: {
      az: "Bakıdakı Water Garden restoranı üçün sayt: menyu, zənglə və WhatsApp-la rezerv, xəritə.",
      ru: "Сайт ресторана Water Garden в Баку: меню, бронь по звонку и в WhatsApp, карта.",
      en: "Website for Water Garden restaurant in Baku: menu, booking by phone or WhatsApp, and a map."
    },
    did: {
      az: ["Menyunu və qiymətləri restoran özü dəyişir — proqramçısız", "Qonaq yeməyi axtarır və kateqoriyaya görə süzür", "Sayt üç dildədir: AZ, RU, EN", "Rezerv üçün zəng və WhatsApp — bir toxunuşla"],
      ru: ["Меню и цены ресторан меняет сам — без программиста", "Гость ищет блюдо и фильтрует по категориям", "Сайт на трёх языках: AZ, RU, EN", "Бронь звонком или в WhatsApp в одно касание"],
      en: ["The restaurant edits the menu and prices itself — no developer needed", "Guests search dishes and filter by category", "Three languages: AZ, RU, EN", "Booking by call or WhatsApp in one tap"]
    }
  },
  {
    title: "Vicon Pharm",
    url: "https://viconpharm.com/",
    host: "viconpharm.com",
    image: "assets/vicon-pharm.webp", w: 1400, h: 800,
    type: { az: "Korporativ sayt", ru: "Корпоративный сайт", en: "Corporate website" },
    text: {
      az: "Əczaçılıq şirkəti üçün korporativ sayt: məhsul kataloqu və korporativ sorğular üçün əlaqə səhifəsi.",
      ru: "Корпоративный сайт фармацевтической компании: каталог продуктов и страница для корпоративных запросов.",
      en: "Corporate website for a pharmaceutical company: a product catalogue and a contact page for business enquiries."
    },
    did: {
      az: ["Üç dildə 27 səhifə — Google-da hər dildə tapılır", "Hər məhsulun öz səhifəsi var: forma, qablaşdırma, kateqoriya"],
      ru: ["27 страниц на трёх языках — находят в Google на каждом", "У каждого продукта своя страница: форма, упаковка, категория"],
      en: ["27 pages in three languages, each findable on Google", "Every product has its own page: form, pack size, category"]
    }
  },
  {
    title: "QR menyu",
    titleI18n: { az: "QR menyu", ru: "QR-меню", en: "QR menu" },
    url: "https://ravenfield228.github.io/baku-qr-menu/demo/",
    host: "baku-qr-menu",
    image: "assets/qr-menu-demo.webp", w: 390, h: 844,
    phone: true,
    demo: true,
    type: { az: "Restoranlar üçün", ru: "Для ресторанов", en: "For restaurants" },
    text: {
      az: "Restoranlar üçün hazır QR menyu nümunəsi. Restoran real deyil — nümunə sizin menyunuzun necə görünəcəyini göstərir.",
      ru: "Готовый пример QR-меню для ресторанов. Ресторан вымышленный — пример показывает, как будет выглядеть ваше меню.",
      en: "A ready-made QR menu example for restaurants. The restaurant isn't real; it shows how your own menu would look."
    },
    did: {
      az: ["Qonaq QR kodu skan edir və menyunu öz dilində açır", "Axtarış və kateqoriyalar — uzun menyuda da hər şey tez tapılır", "Qiymət dəyişəndə yenidən çap lazım deyil"],
      ru: ["Гость сканирует QR-код и открывает меню на своём языке", "Поиск и категории — даже в длинном меню всё находится быстро", "Цены поменялись — перепечатывать ничего не нужно"],
      en: ["Guests scan the QR code and open the menu in their language", "Search and categories make long menus quick to browse", "Prices changed? Nothing to reprint"]
    }
  }
];

// [ЗАМЕНИТЬ] prices: put a number instead of "[ЗАМЕНИТЬ]" for each service.
const SERVICES = [
  {
    price: "[ЗАМЕНИТЬ]",
    name: { az: "Sayt-vizitka", ru: "Сайт-визитка", en: "Business-card site" },
    what: {
      az: "Bir səhifə: nə edirsiniz, qiymətlər, ünvan, xəritə və WhatsApp düyməsi.",
      ru: "Одна страница: чем вы занимаетесь, цены, адрес, карта и кнопка WhatsApp.",
      en: "One page: what you do, prices, address, map and a WhatsApp button."
    }
  },
  {
    price: "[ЗАМЕНИТЬ]",
    name: { az: "Restoran saytı və QR menyu", ru: "Сайт ресторана и QR-меню", en: "Restaurant site & QR menu" },
    what: {
      az: "Üç dildə menyu, masalar üçün QR kod və istəsəniz qiymətləri özünüz dəyişdiyiniz admin panel.",
      ru: "Меню на трёх языках, QR-код для столов и, если нужно, админ-панель, где цены меняете вы сами.",
      en: "A three-language menu, QR codes for tables and, if you want, an admin panel to change prices yourself."
    }
  },
  {
    price: "[ЗАМЕНИТЬ]",
    name: { az: "Şirkət saytı və kataloq", ru: "Сайт компании и каталог", en: "Company site & catalogue" },
    what: {
      az: "Çoxdilli səhifələr, hər məhsula ayrıca səhifə və Google üçün əsas SEO.",
      ru: "Многоязычные страницы, отдельная страница на каждый товар и базовое SEO для Google.",
      en: "Multilingual pages, a page for each product and basic SEO for Google."
    }
  },
  {
    price: "[ЗАМЕНИТЬ]",
    name: { az: "Telegram bot və avtomatlaşdırma", ru: "Telegram-бот и автоматизация", en: "Telegram bot & automation" },
    what: {
      az: "Sifarişləri, rezervləri və müraciətləri birbaşa Telegram-a göndərən bot; təkrarlanan işlərin avtomatlaşdırılması.",
      ru: "Бот, который присылает заказы, брони и заявки прямо в Telegram; автоматизация рутинных задач.",
      en: "A bot that sends orders, bookings and enquiries straight to Telegram; automation of repetitive tasks."
    }
  }
];

let lang = "az";

const waLink = (text) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;

function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "text") node.textContent = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) if (c) node.append(c);
  return node;
}

// Azerbaijani is the default for everyone (also for search engines).
// Other languages come from ?lang= links or the visitor's previous choice.
function pick() {
  const fromUrl = new URLSearchParams(location.search).get("lang");
  if (LANGS.includes(fromUrl)) return fromUrl;
  try {
    const saved = localStorage.getItem("pb-lang");
    if (LANGS.includes(saved)) return saved;
  } catch (e) { /* storage blocked */ }
  return "az";
}

function renderProjects() {
  const t = T[lang];
  const list = document.getElementById("projects");
  list.replaceChildren();
  PROJECTS.forEach((p, i) => {
    const title = p.titleI18n ? p.titleI18n[lang] : p.title;
    const h3 = el("h3", { text: title });
    if (p.demo) h3.append(el("span", { class: "tag-demo", text: t.demo }));

    const did = el("ul", { class: "project__did", "aria-label": t.did });
    p.did[lang].forEach((d) => did.append(el("li", { text: d })));

    const links = el("div", { class: "project__links" },
      el("a", { class: "arrow-link", href: p.url, target: "_blank", rel: "noopener", text: `${p.demo ? t.openDemo : t.visit} ↗` }),
      el("a", { class: "arrow-link arrow-link--quiet", href: waLink(t.waProject(title)), target: "_blank", rel: "noopener", text: `${t.wantThis} →` })
    );

    const info = el("div", { class: "project__info" },
      el("p", { class: "spec", text: `${p.type[lang]} — ${p.host}` }),
      h3,
      el("p", { text: p.text[lang] }),
      did,
      links
    );

    const img = el("img", { src: p.image, width: p.w, height: p.h, alt: `${title} — ${p.type[lang]}`, loading: "lazy", decoding: "async" });
    const shot = el("a", { class: "project__shot", href: p.url, target: "_blank", rel: "noopener", tabindex: "-1", "aria-hidden": "true" }, img);

    list.append(el("li", { class: "project" + (p.phone ? " project--phone" : "") },
      el("span", { class: "project__num", "aria-hidden": "true", text: String(i + 1).padStart(2, "0") }),
      info,
      shot
    ));
  });
}

function renderServices() {
  const t = T[lang];
  const box = document.getElementById("serviceRows");
  box.replaceChildren();
  SERVICES.forEach((s) => {
    box.append(el("div", { class: "price-row", role: "row" },
      el("span", { class: "price-row__name", role: "cell", text: s.name[lang] }),
      el("span", { class: "price-row__what", role: "cell", text: s.what[lang] }),
      el("span", { class: "price-row__price", role: "cell", text: t.priceFrom(s.price) })
    ));
  });
}

function apply() {
  const t = T[lang];
  document.documentElement.lang = lang;
  document.title = t.title;
  document.querySelector('[data-meta="description"]').content = t.description;
  document.querySelector('[data-meta="og:title"]').content = t.title;
  document.querySelector('[data-meta="og:description"]').content = t.description;
  document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t[n.dataset.i18n]; });
  document.querySelectorAll("[data-i18n-alt]").forEach((n) => { n.alt = t[n.dataset.i18nAlt]; });
  document.querySelectorAll("[data-i18n-aria]").forEach((n) => n.setAttribute("aria-label", t[n.dataset.i18nAria]));
  document.querySelectorAll("[data-wa]").forEach((a) => { a.href = waLink(t.waText); });
  document.querySelectorAll("[data-lang]").forEach((a) => {
    if (a.dataset.lang === lang) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
  renderProjects();
  renderServices();
}

document.querySelectorAll("[data-lang]").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    lang = a.dataset.lang;
    try { localStorage.setItem("pb-lang", lang); } catch (err) { /* storage blocked */ }
    const u = new URL(location.href);
    u.searchParams.set("lang", lang);
    history.replaceState(null, "", u);
    apply();
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
lang = pick();
apply();
