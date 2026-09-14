/* ---------- Reveal on scroll ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

/* ---------- Mobile menu ---------- */
document.querySelector('.menu').onclick=()=>{document.querySelector('.links').classList.toggle('open')};
document.querySelectorAll('.links a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.links').classList.remove('open'));
});

/* ---------- i18n ---------- */
const translations = {
  "meta.title": { fr: "Chamia le Lion - شامية الأسد", en: "Chamia le Lion - شامية الأسد", ar: "Chamia le Lion - شامية الأسد" },

  "brand.name": { fr: "LE LION", en: "THE LION", ar: "الأسد" },

  "nav.brand.sub1": { fr: "Manufacture Sotualco", en: "Sotualco Manufacture", ar: "مصنع سوتوالكو" },
  "nav.brand.sub2": { fr: "Tunisie · Est. 1908", en: "Tunisia · Est. 1908", ar: "تونس · تأسست 1908" },
  "nav.home": { fr: "ACCUEIL", en: "HOME", ar: "الرئيسية" },
  "nav.about": { fr: "À PROPOS", en: "ABOUT", ar: "من نحن" },
  "nav.products": { fr: "NOS PRODUITS", en: "OUR PRODUCTS", ar: "منتجاتنا" },
  "nav.quality": { fr: "QUALITÉ", en: "QUALITY", ar: "الجودة" },
  "nav.contact": { fr: "CONTACT", en: "CONTACT", ar: "اتصل بنا" },
  "nav.pro": { fr: "PROFESSIONNELS", en: "BUSINESS", ar: "للشركات" },

  "hero.eyebrow": { fr: "Depuis 1908", en: "Since 1908", ar: "منذ 1908" },
  "hero.title.small": { fr: "HALWA CHAMIA", en: "HALWA CHAMIA", ar: "حلوى شامية" },
  "hero.desc": { fr: "Le goût authentique d’une tradition tunisienne qui traverse le temps.", en: "The authentic taste of a Tunisian tradition that stands the test of time.", ar: "المذاق الأصيل لتقليد تونسي عريق يتجاوز الزمن." },
  "hero.cta": { fr: "DÉCOUVRIR NOS PRODUITS", en: "DISCOVER OUR PRODUCTS", ar: "اكتشف منتجاتنا" },

  "trust.1.title": { fr: "Depuis 1908", en: "Since 1908", ar: "منذ 1908" },
  "trust.1.sub": { fr: "Plus d’un siècle de savoir-faire", en: "Over a century of craftsmanship", ar: "أكثر من قرن من الخبرة" },
  "trust.2.title": { fr: "Ingrédients sélectionnés", en: "Selected ingredients", ar: "مكونات مختارة" },
  "trust.2.sub": { fr: "100% naturels", en: "100% natural", ar: "100% طبيعية" },
  "trust.3.title": { fr: "Qualité premium", en: "Premium quality", ar: "جودة فائقة" },
  "trust.3.sub": { fr: "Goût authentique", en: "Authentic taste", ar: "مذاق أصيل" },
  "trust.4.title": { fr: "Tradition tunisienne", en: "Tunisian tradition", ar: "تقليد تونسي" },
  "trust.4.sub": { fr: "Héritage & passion", en: "Heritage & passion", ar: "إرث وشغف" },

  "products.eyebrow": { fr: "NOS PRODUITS", en: "OUR PRODUCTS", ar: "منتجاتنا" },
  "products.title": { fr: "Trouvez votre format", en: "Find your size", ar: "اختر الحجم المناسب لك" },
  "products.search.label": { fr: "Rechercher", en: "Search", ar: "بحث" },
  "products.search.placeholder": { fr: "Ex. amande, 2.25 kg...", en: "E.g. almond, 2.25 kg...", ar: "مثال: لوز، 2.25 كغ..." },
  "products.flavor.label": { fr: "Saveur", en: "Flavor", ar: "النكهة" },
  "products.packaging.label": { fr: "Type de boîte", en: "Box type", ar: "نوع العلبة" },
  "products.packaging.metallic": { fr: "Métallique", en: "Metal", ar: "معدنية" },
  "products.packaging.plastic": { fr: "Plastique", en: "Plastic", ar: "بلاستيكية" },
  "products.filter.all": { fr: "Toutes", en: "All", ar: "الكل" },
  "products.count": { fr: "produits affichés", en: "products shown", ar: "منتجات معروضة" },
  "products.empty": { fr: "Aucun produit ne correspond à votre recherche.", en: "No product matches your search.", ar: "لا يوجد منتج يطابق بحثك." },
  "products.available": { fr: "Disponible en", en: "Available in", ar: "متوفر بـ" },
  "products.tray5kg": { fr: "Barquette 5 kg", en: "5 kg Tray", ar: "علبة 5 كغ" },
  "products.box5kg": { fr: "Boîte 5 kg", en: "5 kg Box", ar: "صندوق 5 كغ" },
  "products.spread": { fr: "À tartiner", en: "Spread", ar: "للدهن" },

  "product.1": { fr: "Amande · 400 g", en: "Almond · 400 g", ar: "لوز · 400 غ" },
  "product.2": { fr: "Amande · 2 kg", en: "Almond · 2 kg", ar: "لوز · 2 كغ" },
  "product.3": { fr: "Amande · 185 g", en: "Almond · 185 g", ar: "لوز · 185 غ" },
  "product.4": { fr: "Amande · 2,25 kg", en: "Almond · 2.25 kg", ar: "لوز · 2.25 كغ" },
  "product.5": { fr: "Amande · 4,4 kg · Métallique", en: "Almond · 4.4 kg · Metal", ar: "لوز · 4.4 كغ · معدنية" },
  "product.6": { fr: "Amande · 4,4 kg · Plastique", en: "Almond · 4.4 kg · Plastic", ar: "لوز · 4.4 كغ · بلاستيكية" },
  "product.7": { fr: "Fruits secs · 850 g", en: "Dried fruits · 850 g", ar: "فواكه جافة · 850 غ" },
  "product.8": { fr: "Fruits secs · 2 kg", en: "Dried fruits · 2 kg", ar: "فواكه جافة · 2 كغ" },
  "product.9": { fr: "Nature · 400 g", en: "Plain · 400 g", ar: "طبيعي · 400 غ" },
  "product.10": { fr: "Nature · 2,25 kg", en: "Plain · 2.25 kg", ar: "طبيعي · 2.25 كغ" },
  "product.11": { fr: "Nature · 5 kg", en: "Plain · 5 kg", ar: "طبيعي · 5 كغ" },
  "product.12": { fr: "Nature · 90 g", en: "Plain · 90 g", ar: "طبيعي · 90 غ" },
  "product.13": { fr: "Pistache · 400 g", en: "Pistachio · 400 g", ar: "فستق · 400 غ" },
  "product.14": { fr: "Pistache · 185 g", en: "Pistachio · 185 g", ar: "فستق · 185 غ" },

  "flavor.amande": { fr: "Amande", en: "Almond", ar: "لوز" },
  "flavor.nature": { fr: "Nature", en: "Plain", ar: "طبيعي" },
  "flavor.pistache": { fr: "Pistache", en: "Pistachio", ar: "فستق" },
  "flavor.fruitssecs": { fr: "Fruits secs", en: "Dried fruits", ar: "فواكه جافة" },
  "flavor.jar500": { fr: "Pot 500g", en: "500g Jar", ar: "علبة 500غ" },

  "story.eyebrow": { fr: "Le goût authentique", en: "The authentic taste", ar: "المذاق الأصيل" },
  "story.title": { fr: "Une histoire qui traverse le temps", en: "A story that stands the test of time", ar: "قصة تتجاوز الزمن" },
  "story.desc": { fr: "Une recette traditionnelle, un savoir-faire transmis avec passion et des ingrédients soigneusement sélectionnés.", en: "A traditional recipe, craftsmanship passed down with passion, and carefully selected ingredients.", ar: "وصفة تقليدية وخبرة متوارثة بشغف ومكونات مختارة بعناية." },
  "story.heritage": { fr: "Manufacture Sotualco", en: "Sotualco Manufacture", ar: "مصنع سوتوالكو" },
  "story.heritage.sub": { fr: "TUNISIE · EST. 1908", en: "TUNISIA · EST. 1908", ar: "تونس · تأسست 1908" },
  "story.cta": { fr: "EN SAVOIR PLUS", en: "LEARN MORE", ar: "اعرف أكثر" },

  "quality.eyebrow": { fr: "NOTRE PROMESSE", en: "OUR PROMISE", ar: "التزامنا" },
  "quality.title": { fr: "Qualité, tradition et passion", en: "Quality, tradition and passion", ar: "الجودة، التقليد والشغف" },
  "quality.1.title": { fr: "Ingrédients", en: "Ingredients", ar: "المكونات" },
  "quality.1.desc": { fr: "Une sélection pensée pour préserver le goût authentique.", en: "A selection designed to preserve the authentic taste.", ar: "اختيار مدروس للحفاظ على المذاق الأصيل." },
  "quality.2.title": { fr: "Savoir-faire", en: "Craftsmanship", ar: "الخبرة" },
  "quality.2.desc": { fr: "L’héritage d’une manufacture tunisienne depuis 1908.", en: "The heritage of a Tunisian manufacture since 1908.", ar: "إرث مصنع تونسي منذ عام 1908." },
  "quality.3.title": { fr: "Authenticité", en: "Authenticity", ar: "الأصالة" },
  "quality.3.desc": { fr: "Des recettes traditionnelles pour chaque génération.", en: "Traditional recipes for every generation.", ar: "وصفات تقليدية لكل الأجيال." },

  "contact.eyebrow": { fr: "NOUS TROUVER", en: "FIND US", ar: "موقعنا" },
  "contact.title": { fr: "Contact", en: "Contact", ar: "اتصل بنا" },
  "contact.company": { fr: "Manufacture Sotualco", en: "Sotualco Manufacture", ar: "مصنع سوتوالكو" },
  "contact.address": { fr: "Le Lion — Halwa Chamia<br>Boumhel El Bassatine 2097, Tunisie", en: "Le Lion — Halwa Chamia<br>Boumhel El Bassatine 2097, Tunisia", ar: "الأسد — حلوى شامية<br>بومهل البساتين 2097، تونس" },
  "contact.phone.label": { fr: "Téléphone", en: "Phone", ar: "الهاتف" },
  "contact.email.label": { fr: "Email", en: "Email", ar: "البريد الإلكتروني" },
  "contact.hours.label": { fr: "Horaires", en: "Hours", ar: "أوقات العمل" },
  "contact.hours.value": { fr: "Lundi – Samedi, 8h – 17h", en: "Monday – Saturday, 8am – 5pm", ar: "الإثنين – السبت، 8 صباحًا – 5 مساءً" },
  "contact.cta": { fr: "NOUS ÉCRIRE", en: "WRITE TO US", ar: "راسلنا" },

  "pro.eyebrow": { fr: "COMMANDES PROFESSIONNELLES", en: "BUSINESS ORDERS", ar: "طلبات الشركات" },
  "pro.title": { fr: "Vous êtes une entreprise ?", en: "Are you a business?", ar: "هل أنت شركة؟" },
  "pro.desc": { fr: "Distributeurs, épiceries, hôtels, exportateurs : contactez-nous pour connaître nos tarifs professionnels, nos quantités minimales et nos délais de livraison.", en: "Distributors, grocers, hotels, exporters: get in touch for our wholesale rates, minimum order quantities and delivery times.", ar: "موزعون، بقالات، فنادق، مصدّرون: تواصلوا معنا لمعرفة أسعار الجملة والكميات الدنيا وآجال التسليم." },
  "pro.point1.title": { fr: "Tarifs professionnels", en: "Wholesale rates", ar: "أسعار الجملة" },
  "pro.point1.desc": { fr: "Sur demande, selon les volumes", en: "On request, based on volume", ar: "عند الطلب، حسب الكمية" },
  "pro.point2.title": { fr: "Quantité minimale", en: "Minimum order", ar: "الحد الأدنى للطلب" },
  "pro.point2.desc": { fr: "Adaptée à chaque type de commande", en: "Adapted to each type of order", ar: "حسب نوع كل طلبية" },
  "pro.point3.title": { fr: "Réponse rapide", en: "Fast response", ar: "رد سريع" },
  "pro.point3.desc": { fr: "Sous 24h ouvrées", en: "Within 24 business hours", ar: "خلال 24 ساعة عمل" },
  "pro.whatsapp": { fr: "DISCUTER SUR WHATSAPP", en: "CHAT ON WHATSAPP", ar: "تواصل عبر واتساب" },
  "pro.form.company": { fr: "Nom de l’entreprise", en: "Company name", ar: "اسم الشركة" },
  "pro.form.contact": { fr: "Nom du contact", en: "Contact name", ar: "اسم المسؤول" },
  "pro.form.email": { fr: "Email", en: "Email", ar: "البريد الإلكتروني" },
  "pro.form.phone": { fr: "Téléphone", en: "Phone", ar: "الهاتف" },
  "pro.form.country": { fr: "Pays", en: "Country", ar: "البلد" },
  "pro.form.type": { fr: "Type d’activité", en: "Business type", ar: "نوع النشاط" },
  "pro.form.type.distributor": { fr: "Distributeur", en: "Distributor", ar: "موزع" },
  "pro.form.type.retailer": { fr: "Épicerie / Commerce", en: "Grocery / Retail", ar: "بقالة / تجارة" },
  "pro.form.type.hotel": { fr: "Hôtel / Restauration", en: "Hotel / Catering", ar: "فندق / مطاعم" },
  "pro.form.type.export": { fr: "Export", en: "Export", ar: "تصدير" },
  "pro.form.type.other": { fr: "Autre", en: "Other", ar: "أخرى" },
  "pro.form.products": { fr: "Produits & quantités souhaités", en: "Products & quantities needed", ar: "المنتجات والكميات المطلوبة" },
  "pro.form.product": { fr: "Produit", en: "Product", ar: "المنتج" },
  "pro.form.product.select": { fr: "Sélectionner un produit", en: "Select a product", ar: "اختر منتجًا" },
  "pro.form.quantity": { fr: "Quantité", en: "Quantity", ar: "الكمية" },
  "pro.form.product.add": { fr: "Ajouter un produit", en: "Add a product", ar: "إضافة منتج" },
  "pro.form.product.remove": { fr: "Supprimer ce produit", en: "Remove this product", ar: "حذف هذا المنتج" },
  "pro.form.products.summary": { fr: "Produits demandés", en: "Requested products", ar: "المنتجات المطلوبة" },
  "pro.form.quantity.unit": { fr: "unités", en: "units", ar: "وحدة" },
  "pro.form.message": { fr: "Message", en: "Message", ar: "رسالة" },
  "pro.form.submit": { fr: "ENVOYER LA DEMANDE", en: "SEND REQUEST", ar: "إرسال الطلب" },

  "footer.1": { fr: "Qualité artisanale", en: "Artisanal quality", ar: "جودة حرفية" },
  "footer.2": { fr: "Recettes traditionnelles", en: "Traditional recipes", ar: "وصفات تقليدية" },
  "footer.3": { fr: "Sans conservateurs", en: "No preservatives", ar: "بدون مواد حافظة" },
  "footer.4": { fr: "Fabrication en Tunisie", en: "Made in Tunisia", ar: "صنع في تونس" }
};

const SUPPORTED_LANGS = ['fr', 'en', 'ar'];

let currentLanguage = 'fr';

function localizeProductCards(lang) {
  document.querySelectorAll('#product-grid .product-card h3').forEach((title, index) => {
    const entry = translations[`product.${index + 1}`];
    if (entry && entry[lang] !== undefined) title.textContent = entry[lang];
  });
}

function updateProductSummary() {
  const rows = [...document.querySelectorAll('.product-request-row')];
  const summary = rows.filter(row => row.querySelector('.product-select').value).map((row, index) => {
    const productKey = row.querySelector('.product-select').value;
    const quantity = row.querySelector('.product-quantity').value.trim();
    const productName = translations[productKey]?.[currentLanguage] || productKey;
    return `${index + 1}. ${productName} — ${quantity} ${translations['pro.form.quantity.unit'][currentLanguage]}`;
  }).join('\n');
  document.querySelector('#products-summary').value = summary;
}

function addProductRequestRow() {
  const list = document.querySelector('#product-request-list');
  const row = list.querySelector('.product-request-row').cloneNode(true);
  row.querySelector('.product-select').value = '';
  row.querySelector('.product-quantity').value = '';
  const action = row.querySelector('.product-add');
  action.className = 'product-remove';
  action.textContent = '×';
  action.setAttribute('data-i18n-aria-label', 'pro.form.product.remove');
  action.setAttribute('aria-label', translations['pro.form.product.remove'][currentLanguage]);
  list.appendChild(row);
}

function applyLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = 'fr';
  currentLanguage = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const entry = translations[key];
    if (entry && entry[lang] !== undefined) {
      el.innerHTML = entry[lang];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const entry = translations[key];
    if (entry && entry[lang] !== undefined) {
      el.setAttribute('placeholder', entry[lang]);
    }
  });

  document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria-label');
    const entry = translations[key];
    if (entry && entry[lang] !== undefined) el.setAttribute('aria-label', entry[lang]);
  });

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('lang-ar', lang === 'ar');
  localizeProductCards(lang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('lelion-lang', lang); } catch (e) {}
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    applyLanguage(btn.getAttribute('data-lang'));
    document.querySelector('.links').classList.remove('open');
  });
});

let initialLang = 'fr';
try {
  const saved = localStorage.getItem('lelion-lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) {
    initialLang = saved;
  } else {
    const browserLang = (navigator.language || '').slice(0, 2);
    if (SUPPORTED_LANGS.includes(browserLang)) initialLang = browserLang;
  }
} catch (e) {}

applyLanguage(initialLang);

const professionalForm = document.querySelector('.pro-form');
professionalForm.addEventListener('click', event => {
  if (event.target.closest('.product-add')) addProductRequestRow();
  if (event.target.closest('.product-remove')) event.target.closest('.product-request-row').remove();
});
professionalForm.addEventListener('input', updateProductSummary);
professionalForm.addEventListener('change', updateProductSummary);
professionalForm.addEventListener('submit', event => {
  updateProductSummary();
  if (!professionalForm.checkValidity()) {
    event.preventDefault();
    professionalForm.reportValidity();
  }
});

/* ---------- Product search and filters ---------- */
const productSearch = document.querySelector('#product-search');
const flavorFilter = document.querySelector('#flavor-filter');
const packagingFilter = document.querySelector('#packaging-filter');
const productCount = document.querySelector('#product-count');
const noProducts = document.querySelector('#no-products');
const productCards = [...document.querySelectorAll('#product-grid .product-card')];
const productSearchTerms = productCards.map((card, index) => {
  const flavorKey = { amande: 'flavor.amande', nature: 'flavor.nature', pistache: 'flavor.pistache', 'fruits-secs': 'flavor.fruitssecs' }[card.dataset.flavor];
  const packagingKey = `products.packaging.${card.dataset.packaging}`;
  return [
    card.dataset.name,
    ...Object.values(translations[`product.${index + 1}`] || {}),
    ...Object.values(translations[flavorKey] || {}),
    ...Object.values(translations[packagingKey] || {})
  ].join(' ');
});

function filterProducts() {
  const normalizeSearch = value => value.trim().toLocaleLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[,·]/g, '.');
  const query = normalizeSearch(productSearch.value);
  const flavor = flavorFilter.value;
  const packaging = packagingFilter.value;
  let visibleCount = 0;

  productCards.forEach((card, index) => {
    const searchableText = `${productSearchTerms[index]} ${card.textContent}`;
    const matchesQuery = !query || normalizeSearch(searchableText).includes(query);
    const matchesFlavor = !flavor || card.dataset.flavor === flavor;
    const matchesPackaging = !packaging || card.dataset.packaging === packaging;
    const visible = matchesQuery && matchesFlavor && matchesPackaging;
    card.hidden = !visible;
    if (visible) visibleCount++;
  });

  productCount.textContent = `${visibleCount} ${translations['products.count'][currentLanguage]}`;
  noProducts.hidden = visibleCount !== 0;
}

productSearch.addEventListener('input', filterProducts);
flavorFilter.addEventListener('change', filterProducts);
packagingFilter.addEventListener('change', filterProducts);
document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', filterProducts));
filterProducts();