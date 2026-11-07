const contactEmail = "hello@example.com";
const defaultLanguage = "az";
let currentLanguage = defaultLanguage;
let lastFocusedElement = null;

const translations = {
  az: {
    pageTitle: "PetaByte | Veb saytlar və rəqəmsal həllər",
    metaDescription:
      "PetaByte bizneslər üçün premium veb saytlar, tətbiqlər, avtomatlaşdırma sistemləri və rəqəmsal həllər hazırlayır.",
    ogTitle: "PetaByte | Veb saytlar və rəqəmsal həllər",
    ogDescription: "PetaByte bizneslər üçün müasir, etibarlı və premium rəqəmsal həllər yaradır.",
    skipLink: "Məzmuna keç",
    brandRole: "Digital Studio",
    openNavigation: "Naviqasiyanı aç",
    navProjects: "İşlər",
    navContact: "Əlaqə",
    heroEyebrow: "Premium rəqəmsal həllər",
    heroTitle: "Veb saytlar, tətbiqlər və biznes avtomatlaşdırmaları hazırlayırıq",
    heroDescription:
      "PetaByte biznesiniz üçün müasir, sürətli və etibarlı veb saytlar, tətbiqlər, botlar və avtomatlaşdırma sistemləri yaradır.",
    primaryActions: "Əsas düymələr",
    viewProjects: "İşlərə bax",
    contactUs: "Bizimlə əlaqə",
    highlights: "Peşəkar üstünlüklər",
    trustOne: "Premium dizayn",
    trustTwo: "Təmiz kod",
    trustThree: "Etibarlı nəticə",
    dashboardPreview: "PetaByte panel görüntüsü",
    dashboardSubtitle: "Dizayn, kod, avtomatlaşdırma",
    statusLive: "Aktiv",
    metricDesign: "Müasir interfeys",
    metricLogic: "Stabil məntiq",
    projectsEyebrow: "Portfolio",
    projectsTitle: "PetaByte işləri",
    projectsDescription: "Müştərilər üçün hazırlanmış veb saytlar, tətbiqlər, botlar və biznes sistemləri.",
    liveWebsite: "Sayta keç",
    viewDetails: "Ətraflı bax",
    contactEyebrow: "Əlaqə",
    contactTitle: "Layihənizi PetaByte ilə müzakirə edin",
    contactDescription:
      "Veb sayt, tətbiq, avtomatlaşdırma və ya Telegram bot ideyanız varsa, bizə yazın. Layihəniz üçün aydın və peşəkar həll hazırlayaq.",
    directContacts: "Birbaşa əlaqə linkləri",
    formName: "Ad",
    formNamePlaceholder: "Adınız",
    formEmail: "Email",
    formEmailPlaceholder: "email@example.com",
    formMessage: "Mesaj",
    formMessagePlaceholder: "Layihəniz haqqında yazın",
    sendMessage: "Mesaj göndər",
    formRequired: "Zəhmət olmasa bütün xanaları doldurun.",
    formOpening: "Email tətbiqi açılır...",
    emailSubject: "PetaByte layihə müraciəti",
    emailBodyName: "Ad",
    emailBodyEmail: "Email",
    emailBodyMessage: "Mesaj",
    footerDescription: "Premium veb saytlar, tətbiqlər və rəqəmsal həllər.",
    backHome: "Ana səhifəyə qayıt",
    socialLinks: "Sosial linklər",
    rights: "Bütün hüquqlar qorunur.",
    closeModal: "Layihə məlumatlarını bağla",
    modalTechTitle: "Texnologiyalar",
    modalChallengesTitle: "Həll olunan məsələlər",
    openProject: "Layihəni aç"
  },
  ru: {
    pageTitle: "PetaByte | Сайты и цифровые решения",
    metaDescription:
      "PetaByte создает премиальные сайты, приложения, автоматизации и цифровые решения для бизнеса.",
    ogTitle: "PetaByte | Сайты и цифровые решения",
    ogDescription: "PetaByte разрабатывает современные, надежные и премиальные цифровые решения.",
    skipLink: "Перейти к содержанию",
    brandRole: "Digital Studio",
    openNavigation: "Открыть навигацию",
    navProjects: "Работы",
    navContact: "Контакты",
    heroEyebrow: "Премиальные цифровые решения",
    heroTitle: "Создаем сайты, приложения и бизнес-автоматизации",
    heroDescription:
      "PetaByte разрабатывает современные, быстрые и надежные сайты, приложения, боты и системы автоматизации для вашего бизнеса.",
    primaryActions: "Основные действия",
    viewProjects: "Смотреть работы",
    contactUs: "Связаться",
    highlights: "Профессиональные преимущества",
    trustOne: "Премиальный дизайн",
    trustTwo: "Чистый код",
    trustThree: "Надежный результат",
    dashboardPreview: "Превью панели PetaByte",
    dashboardSubtitle: "Дизайн, код, автоматизация",
    statusLive: "Активно",
    metricDesign: "Современный интерфейс",
    metricLogic: "Стабильная логика",
    projectsEyebrow: "Портфолио",
    projectsTitle: "Работы PetaByte",
    projectsDescription: "Сайты, приложения, боты и бизнес-системы, созданные для клиентов.",
    liveWebsite: "Открыть сайт",
    viewDetails: "Подробнее",
    contactEyebrow: "Контакты",
    contactTitle: "Обсудите проект с PetaByte",
    contactDescription:
      "Если вам нужен сайт, приложение, автоматизация или Telegram-бот, напишите нам. Подготовим понятное и профессиональное решение под вашу задачу.",
    directContacts: "Прямые ссылки для связи",
    formName: "Имя",
    formNamePlaceholder: "Ваше имя",
    formEmail: "Email",
    formEmailPlaceholder: "email@example.com",
    formMessage: "Сообщение",
    formMessagePlaceholder: "Расскажите о проекте",
    sendMessage: "Отправить сообщение",
    formRequired: "Пожалуйста, заполните все поля.",
    formOpening: "Открываю почтовое приложение...",
    emailSubject: "Заявка на проект для PetaByte",
    emailBodyName: "Имя",
    emailBodyEmail: "Email",
    emailBodyMessage: "Сообщение",
    footerDescription: "Премиальные сайты, приложения и цифровые решения.",
    backHome: "Вернуться на главную",
    socialLinks: "Социальные ссылки",
    rights: "Все права защищены.",
    closeModal: "Закрыть информацию о проекте",
    modalTechTitle: "Технологии",
    modalChallengesTitle: "Решенные задачи",
    openProject: "Открыть проект"
  },
  en: {
    pageTitle: "PetaByte | Websites and Digital Solutions",
    metaDescription:
      "PetaByte builds premium websites, applications, automations, and digital solutions for businesses.",
    ogTitle: "PetaByte | Websites and Digital Solutions",
    ogDescription: "PetaByte creates modern, reliable, premium digital solutions for businesses.",
    skipLink: "Skip to content",
    brandRole: "Digital Studio",
    openNavigation: "Open navigation",
    navProjects: "Work",
    navContact: "Contact",
    heroEyebrow: "Premium digital solutions",
    heroTitle: "Building websites, applications and business automations",
    heroDescription:
      "PetaByte creates modern, fast and reliable websites, applications, bots and automation systems for your business.",
    primaryActions: "Primary actions",
    viewProjects: "View work",
    contactUs: "Contact us",
    highlights: "Professional highlights",
    trustOne: "Premium design",
    trustTwo: "Clean code",
    trustThree: "Reliable result",
    dashboardPreview: "PetaByte dashboard preview",
    dashboardSubtitle: "Design, code, automate",
    statusLive: "Live",
    metricDesign: "Modern interface",
    metricLogic: "Stable logic",
    projectsEyebrow: "Portfolio",
    projectsTitle: "PetaByte work",
    projectsDescription: "Websites, applications, bots and business systems created for clients.",
    liveWebsite: "Live Website",
    viewDetails: "View Details",
    contactEyebrow: "Contact",
    contactTitle: "Discuss your project with PetaByte",
    contactDescription:
      "If you need a website, application, automation or Telegram bot, contact us. We will prepare a clear and professional solution for your project.",
    directContacts: "Direct contact links",
    formName: "Name",
    formNamePlaceholder: "Your name",
    formEmail: "Email",
    formEmailPlaceholder: "email@example.com",
    formMessage: "Message",
    formMessagePlaceholder: "Tell us about your project",
    sendMessage: "Send Message",
    formRequired: "Please complete all fields before sending.",
    formOpening: "Opening your email app...",
    emailSubject: "PetaByte project inquiry",
    emailBodyName: "Name",
    emailBodyEmail: "Email",
    emailBodyMessage: "Message",
    footerDescription: "Premium websites, applications and digital solutions.",
    backHome: "Back to home",
    socialLinks: "Social links",
    rights: "All rights reserved.",
    closeModal: "Close project details",
    modalTechTitle: "Technologies",
    modalChallengesTitle: "Challenges solved",
    openProject: "Open Project"
  }
};

// Edit this array to add, remove, or update portfolio projects.
const projects = [
  {
    id: "vicon-pharm",
    title: "Vicon Pharm",
    logo: "VP",
    image: "assets/vicon-pharm-reference.png",
    mockup: "healthcare",
    website: "https://viconpharm.com/",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive UI", "SEO"],
    content: {
      az: {
        category: "Korporativ sayt",
        description: "Etibar, məhsul təqdimatı və premium brend görünüşü üçün hazırlanmış əczaçılıq saytı.",
        fullDescription:
          "Vicon Pharm üçün sakit, professional və etibarlı korporativ sayt konsepti hazırlanıb. Layihə aydın naviqasiya, böyük vizual iyerarxiya, mobil uyğun dizayn və premium səhiyyə brendi hissi üzərində qurulub.",
        challenges: [
          "Səhiyyə sahəsinə uyğun etibarlı ilk təəssürat yaradıldı.",
          "Böyük tipografiya mobil ekranlara uyğunlaşdırıldı.",
          "Şirkət və məhsul məlumatları ziyarətçi üçün daha aydın strukturlaşdırıldı."
        ]
      },
      ru: {
        category: "Корпоративный сайт",
        description: "Фармацевтический сайт с акцентом на доверие, презентацию продуктов и премиальный бренд.",
        fullDescription:
          "Для Vicon Pharm создан спокойный, профессиональный и надежный корпоративный сайт. Структура построена вокруг понятной навигации, сильной визуальной иерархии, адаптивного дизайна и премиального ощущения медицинского бренда.",
        challenges: [
          "Создано доверительное первое впечатление для сферы здравоохранения.",
          "Крупная типографика адаптирована под мобильные экраны.",
          "Информация о компании и продуктах стала понятнее для посетителей."
        ]
      },
      en: {
        category: "Corporate Website",
        description: "A pharmaceutical website focused on trust, product presentation and a premium brand feel.",
        fullDescription:
          "Vicon Pharm was designed as a calm, professional and reliable corporate website. The project uses clear navigation, strong visual hierarchy, responsive layouts and a premium healthcare brand feeling.",
        challenges: [
          "Created a trustworthy first impression for a healthcare-focused brand.",
          "Balanced large typography with responsive mobile layouts.",
          "Structured company and product information for clearer visitor understanding."
        ]
      }
    }
  },
  {
  id: "water-garden",
  title: "Water Garden Restaurant",
  logo: "WG",
  image: "assets/Water-garden-main.png",
  mockup: "restaurant",
  website: "https://watergarden.restaurant/",
  technologies: ["HTML", "CSS", "JavaScript", "Responsive Design", "Menu UI"],
  content: {
    az: {
      category: "Restoran saytı",
      description: "Water Garden restoranı üçün hazırlanmış rəqəmsal menyu və təqdimat saytı.",
      fullDescription:
        "Water Garden restoranı üçün müasir və mobil uyğun menyu saytı hazırlanıb. Müştərilər menyuya baxa, restoran haqqında məlumat ala və əlaqə məlumatlarını rahat tapa bilirlər.",
      challenges: [
        "Menyu məlumatlarının rahat təqdimatı təmin edildi.",
        "Mobil cihazlar üçün tam uyğun dizayn hazırlandı.",
        "Restoranın premium atmosferini əks etdirən görünüş yaradıldı."
      ]
    },
    ru: {
      category: "Сайт ресторана",
      description: "Цифровое меню и презентационный сайт для ресторана Water Garden.",
      fullDescription:
        "Для ресторана Water Garden был разработан современный адаптивный сайт с цифровым меню, информацией о заведении и удобной навигацией для посетителей.",
      challenges: [
        "Создано удобное отображение меню.",
        "Сайт полностью адаптирован под мобильные устройства.",
        "Передана премиальная атмосфера ресторана."
      ]
    },
    en: {
      category: "Restaurant Website",
      description: "Digital menu and presentation website for Water Garden Restaurant.",
      fullDescription:
        "A modern responsive restaurant website with a digital menu, restaurant information and an elegant user experience for visitors.",
      challenges: [
        "Built an easy-to-browse menu structure.",
        "Optimized the experience for mobile users.",
        "Created a premium restaurant presentation."
      ]
    }
  }
},
];

const projectsGrid = document.querySelector("#projectsGrid");
const modal = document.querySelector("#projectModal");
const modalMedia = document.querySelector("#modalMedia");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDescription");
const modalTech = document.querySelector("#modalTech");
const modalChallenges = document.querySelector("#modalChallenges");
const modalLink = document.querySelector("#modalLink");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const header = document.querySelector("[data-header]");
const contactForm = document.querySelector("#contactForm");
const year = document.querySelector("#year");
const metaDescription = document.querySelector("[data-meta-description]");
const ogTitle = document.querySelector("[data-og-title]");
const ogDescription = document.querySelector("[data-og-description]");

function t(key) {
  return translations[currentLanguage][key] || translations[defaultLanguage][key] || key;
}

function projectContent(project) {
  return project.content[currentLanguage] || project.content[defaultLanguage];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderMockPreview(project, compact = false) {
  const compactClass = compact ? " modal-small-shot" : "";
  return `
    <div class="mock-preview ${escapeHTML(project.mockup || "default")}${compactClass}" aria-hidden="true">
      <div class="mock-rows">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="mock-blocks">
        <span></span>
        <span></span>
      </div>
    </div>
  `;
}

function renderProjectMedia(project) {
  const content = projectContent(project);
  const image = project.image
    ? `<img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} ${escapeHTML(content.category)}" loading="lazy" />`
    : renderMockPreview(project);

  return `
    <div class="project-media">
      <span class="project-logo">${escapeHTML(project.logo)}</span>
      ${image}
    </div>
  `;
}

function renderTechList(technologies) {
  return technologies.map((tech) => `<span class="tech-pill">${escapeHTML(tech)}</span>`).join("");
}

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map((project) => {
      const content = projectContent(project);

      return `
        <article class="project-card reveal is-visible">
          ${renderProjectMedia(project)}
          <div class="project-body">
            <span class="eyebrow">${escapeHTML(content.category)}</span>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(content.description)}</p>
            <div class="project-tech" aria-label="${escapeHTML(project.title)} technologies">
              ${renderTechList(project.technologies)}
            </div>
            <div class="project-actions">
              <a class="btn btn-primary" href="${escapeHTML(project.website)}" target="_blank" rel="noreferrer">
                ${escapeHTML(t("liveWebsite"))}
              </a>
              <button class="btn details-button" type="button" data-project-id="${escapeHTML(project.id)}">
                ${escapeHTML(t("viewDetails"))}
              </button>
            </div>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderModalMedia(project) {
  const content = projectContent(project);
  const heroShot = project.image
    ? `<div class="modal-hero-shot"><img src="${escapeHTML(project.image)}" alt="${escapeHTML(project.title)} ${escapeHTML(content.category)}" /></div>`
    : `<div class="modal-hero-shot modal-generated-shot">${renderMockPreview(project)}</div>`;

  const secondaryShots = `
    <div class="modal-shot-grid">
      ${renderMockPreview(project, true)}
      ${renderMockPreview({ ...project, mockup: `${project.mockup || "default"} alt` }, true)}
    </div>
  `;

  return `${heroShot}${secondaryShots}`;
}

function openProjectModal(projectId) {
  const project = projects.find((item) => item.id === projectId);

  if (!project) return;

  const content = projectContent(project);
  lastFocusedElement = document.activeElement;

  modalCategory.textContent = content.category;
  modalTitle.textContent = project.title;
  modalDescription.textContent = content.fullDescription;
  modalTech.innerHTML = project.technologies.map((tech) => `<span>${escapeHTML(tech)}</span>`).join("");
  modalChallenges.innerHTML = content.challenges
    .map((challenge) => `<li>${escapeHTML(challenge)}</li>`)
    .join("");
  modalLink.href = project.website;
  modalMedia.innerHTML = renderModalMedia(project);

  document.body.classList.add("modal-open");
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  modal.querySelector("[data-modal-close]").focus();
}

function closeProjectModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function applyTranslations() {
  document.documentElement.lang = currentLanguage;
  document.title = t("pageTitle");
  metaDescription.setAttribute("content", t("metaDescription"));
  ogTitle.setAttribute("content", t("ogTitle"));
  ogDescription.setAttribute("content", t("ogDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderProjects();
}

function setupRevealAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

function setupNavigation() {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navMenu.classList.remove("is-open");
      navToggle.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  });
}

function setupLanguageSwitcher() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      currentLanguage = button.dataset.lang;
      applyTranslations();
    });
  });
}

function setupProjectInteractions() {
  projectsGrid.addEventListener("click", (event) => {
    const detailsButton = event.target.closest("[data-project-id]");

    if (detailsButton) {
      openProjectModal(detailsButton.dataset.projectId);
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target.closest("[data-modal-close]")) {
      closeProjectModal();
    }
  });

  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
      closeProjectModal();
    }
  });
}

function setupContactForm() {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name").toString().trim();
    const email = formData.get("email").toString().trim();
    const message = formData.get("message").toString().trim();
    const status = contactForm.querySelector(".form-status");

    if (!name || !email || !message) {
      status.textContent = t("formRequired");
      return;
    }

    const subject = encodeURIComponent(`${t("emailSubject")}: ${name}`);
    const body = encodeURIComponent(
      `${t("emailBodyName")}: ${name}\n${t("emailBodyEmail")}: ${email}\n\n${t("emailBodyMessage")}:\n${message}`
    );

    status.textContent = t("formOpening");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    contactForm.reset();
  });
}

function init() {
  currentLanguage = defaultLanguage;
  applyTranslations();
  setupRevealAnimations();
  setupNavigation();
  setupLanguageSwitcher();
  setupProjectInteractions();
  setupContactForm();
  year.textContent = new Date().getFullYear();
}

init();
