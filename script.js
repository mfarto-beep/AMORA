const products = [
  {
    page: 2,
    brand: "TOCOBO",
    name: "Cica Calming Sun Serum",
    category: "Protectores Solares",
    type: "Suero solar ligero diario",
    size: "200 ml",
    description:
      "Protector solar ligero y calmante con Centella Asiática que brinda amplia protección UVA/UVB e hidratación sin sensación pegajosa.",
    skin: "Mixta, grasa, seca y sensible",
    image: "assets/products/pagina_2.jpg",
  },
  {
    page: 3,
    brand: "TOCOBO",
    name: "Cica Cooling Sun Stick",
    category: "Protectores Solares",
    type: "Protector solar en barra",
    size: "18 gr",
    description:
      "Fórmula no pegajosa con Cica fermentada, ácido hialurónico y polvo de menta de maíz para refrescar, hidratar y calmar.",
    skin: "Sensible y propensa al acné",
    image: "assets/products/pagina_3.jpg",
  },
  {
    page: 4,
    brand: "TOCOBO",
    name: "Clay Cleansing Foam",
    category: "Limpiadores",
    type: "Espuma limpiadora",
    size: "150 ml",
    description:
      "Espuma limpiadora vegana de arcilla de coco con microburbujas que elimina impurezas y deja la piel fresca e hidratada.",
    skin: "Todo tipo de piel",
    image: "assets/products/pagina_4.jpg",
  },
  {
    page: 5,
    brand: "TOCOBO",
    name: "Cotton Soft Sun Stick",
    category: "Protectores Solares",
    type: "Protector solar diario FPS 50",
    size: "50 ml",
    description:
      "Protección FPS50+ PA++++ con control de brillo, complejo anti sebum P y extractos herbales que ayudan a calmar rojeces.",
    skin: "Mixta, grasa, seca y sensible",
    image: "assets/products/pagina_5.jpg",
  },
  {
    page: 6,
    brand: "SKIN1004",
    name: "Centella Tone Brightening Cleansing Gel Foam",
    category: "Limpiadores",
    type: "Gel limpiador",
    size: "125 ml",
    description:
      "Gel de limpieza profunda que elimina impurezas, exceso de grasa y maquillaje sin resecar la piel.",
    skin: "Opaca, sensible, mixta a grasa y con manchas",
    image: "assets/products/pagina_6.jpg",
  },
  {
    page: 7,
    brand: "SKIN1004",
    name: "Madagascar Centella Toning Toner",
    category: "Tónicos",
    type: "Tónico hidratante",
    size: "30 ml",
    description:
      "Tónico con PHA, centella asiática de Madagascar, ácido hialurónico y betaína para calmar, exfoliar, hidratar e iluminar.",
    skin: "Normal y sensible",
    image: "assets/products/pagina_7.jpg",
  },
  {
    page: 8,
    brand: "SKIN1004",
    name: "Madagascar Centella Tone Brightening Boosting Toner",
    category: "Tónicos",
    type: "Tónico hidratante y aclarante",
    size: "210 ml",
    description:
      "Tónico iluminador con vitamina C que ayuda a hidratar, uniformar el tono y reducir la apariencia de manchas oscuras.",
    skin: "Normal, seca, mixta y sensible",
    image: "assets/products/pagina_8.jpg",
  },
  {
    page: 9,
    brand: "SKIN1004",
    name: "Madagascar Centella Tea-Trica Purifying Toner",
    category: "Tónicos",
    type: "Tónico para alivio del acné",
    size: "210 ml",
    description:
      "Tónico con agua de árbol de té y ciprés que equilibra la grasa, el sebo y ayuda a eliminar células muertas.",
    skin: "Acnéica, grasa y sensible",
    image: "assets/products/pagina_9.jpg",
  },
  {
    page: 10,
    brand: "SKIN1004",
    name: "Madagascar Centella Tone Brightening Capsule Ampoule",
    category: "Sueros",
    type: "Serum aclarante",
    size: "100 ml",
    description:
      "Ampolla diaria con niacinamida y ácido tranexámico para mejorar el tono desigual y aportar luminosidad.",
    skin: "Todo tipo de piel",
    image: "assets/products/pagina_10.jpg",
  },
  {
    page: 11,
    brand: "BEAUTY OF JOSEON",
    name: "Relief Sun Aqua-Fresh: Rice + B5",
    category: "Protectores Solares",
    type: "Protector solar en crema",
    size: "50 ml",
    description:
      "Protector solar ligero SPF50+ PA++++ con extracto de arroz y pantenol, de sensación fresca y no grasosa.",
    skin: "Todo tipo de piel",
    image: "assets/products/pagina_11.jpg",
  },
  {
    page: 12,
    brand: "BEAUTY OF JOSEON",
    name: "Dynasty Cream",
    category: "Cremas",
    type: "Crema hidratante",
    size: "50 ml",
    description:
      "Crema facial con agua de arroz, ginseng, escualano y niacinamida para hidratación duradera y acabado luminoso.",
    skin: "Deshidratada, opaca y con líneas de expresión",
    image: "assets/products/pagina_12.jpg",
  },
  {
    page: 13,
    brand: "BEAUTY OF JOSEON",
    name: "Ginseng Cleansing Oil",
    category: "Limpiadores",
    type: "Aceite limpiador",
    size: "210 ml",
    description:
      "Desmaquillante eficaz y suave que limpia en profundidad mientras ayuda a suavizar y nutrir la piel.",
    skin: "Todo tipo de piel",
    image: "assets/products/pagina_13.jpg",
  },
  {
    page: 14,
    brand: "BEAUTY OF JOSEON",
    name: "Suero Revitalizante para Ojos: Ginseng + Retinal",
    category: "Cuidado Especializado",
    type: "Crema contorno de ojos",
    size: "30 ml",
    description:
      "Contorno de ojos con extracto de raíz de ginseng para hidratación profunda y vitalidad en la piel.",
    skin: "Todo tipo de piel",
    image: "assets/products/pagina_14.jpg",
  },
  {
    page: 15,
    brand: "CELIMAX",
    name: "The Vita A Retinal Shot Tightening Booster",
    category: "Sueros",
    type: "Suero anti-edad",
    size: "15 ml",
    description:
      "Suero avanzado con 0,1% de retinal, péptidos y niacinamida para reafirmar, mejorar textura y suavizar líneas de expresión.",
    skin: "Seca, madura, poros dilatados y todo tipo de piel",
    image: "assets/products/pagina_15.jpg",
  },
  {
    page: 16,
    brand: "CELIMAX",
    name: "Noni Acne Bubble Cleanser",
    category: "Limpiadores",
    type: "Limpiador en espuma",
    size: "155 ml",
    description:
      "Limpiador con 35.51% de extracto de noni y ácido salicílico para limpieza profunda, control de sebo y cuidado antiacné.",
    skin: "Piel con tendencia acneica",
    image: "assets/products/pagina_16.jpg",
  },
  {
    page: 17,
    brand: "CENTELLIAN24",
    name: "Crema The Madeca Cream Time Reverse",
    category: "Cremas",
    type: "Crema antiarrugas",
    size: "50 ml",
    description:
      "Crema ligera con colágeno, retinol, centella asiática y antioxidantes para mejorar elasticidad y calmar piel sensible.",
    skin: "Pieles maduras",
    image: "assets/products/pagina_17.jpg",
  },
  {
    page: 18,
    brand: "DR. ALTHEA",
    name: "147 Barrier Cream",
    category: "Cremas",
    type: "Crema hidratante",
    size: "50 ml",
    description:
      "Crema con ceramidas, pantenol y extractos naturales para fortalecer la barrera cutánea e hidratar profundamente.",
    skin: "Todo tipo de piel",
    image: "assets/products/pagina_18.jpg",
  },
  {
    page: 19,
    brand: "DR. ALTHEA",
    name: "345 Relief Cream",
    category: "Cremas",
    type: "Crema regeneradora",
    size: "50 ml",
    description:
      "Crema vegana rica en niacinamida y pantenol que hidrata, regula sebo, desinflama y ayuda a unificar el tono.",
    skin: "Secas, grasas, mixtas y sensibles",
    image: "assets/products/pagina_19.jpg",
  },
  {
    page: 20,
    brand: "MEDICUBE",
    name: "Triple Collagen Cream 4.0",
    category: "Cremas",
    type: "Crema hidratante intensiva",
    size: "50 ml",
    description:
      "Crema intensiva con colágeno triple, niacinamida e ingredientes patentados para firmeza, elasticidad e hidratación.",
    skin: "Tratamiento anti-edad integral",
    image: "assets/products/pagina_20.jpg",
  },
  {
    page: 21,
    brand: "PETITFÉE",
    name: "Centella Clearing Spot Patch",
    category: "Cuidado Especializado",
    type: "Parches antiacné",
    size: "Según presentación",
    description:
      "Parches hidrocoloides transparentes que cubren granitos y espinillas para ayudar a aplanar y reducir inflamación.",
    skin: "Todo tipo de pieles y edades",
    image: "assets/products/pagina_21.jpg",
  },
  {
    page: 22,
    brand: "ABIB",
    name: "Collagen Gel Mask Sedum Jelly",
    category: "Cuidado Especializado",
    type: "Láminas de hidrogel",
    size: "35 gr",
    description:
      "Mascarilla facial de hidrogel con colágeno vegano, vitamina C y ácido hialurónico para luminosidad, elasticidad e hidratación.",
    skin: "Piel que busca luminosidad y nutrición",
    image: "assets/products/pagina_22.jpg",
  },
];

const productGrid = document.querySelector("#productGrid");
const searchInput = document.querySelector("#searchInput");
const filterButtons = document.querySelectorAll(".filter-btn");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const openTermsButton = document.querySelector("#openTerms");
const closeTermsButton = document.querySelector("#closeTerms");
const termsModal = document.querySelector("#termsModal");
const termsDialog = document.querySelector(".terms-modal");
const copyButtons = document.querySelectorAll(".copy-btn");
const copyToast = document.querySelector("#copyToast");
let copyToastTimer;
let activeCategory = "Todos";

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

function whatsappUrl(productName) {
  const text = `Hola AMORA, estoy interesado en comprar el producto ${productName} que vi en su catálogo virtual.`;
  return `https://wa.me/51998266052?text=${encodeURIComponent(text)}`;
}

function renderProducts(items) {
  productGrid.innerHTML = items
    .map(
      (product) => `
        <article class="product-card reveal" data-category="${product.category}">
          <div class="product-media">
            <img src="${product.image}" alt="${product.brand} - ${product.name}" loading="lazy" />
            <span class="category-pill">${product.category}</span>
          </div>
          <div class="product-body">
            <p class="brand-name">${product.brand}</p>
            <h3>${product.name}</h3>
            <div class="meta">
              <span>${product.type}</span>
              <span>${product.size}</span>
            </div>
            <p class="description">${product.description}</p>
            <div class="meta">
              <span>${product.skin}</span>
            </div>
            <a class="buy-btn" href="${whatsappUrl(product.name)}" target="_blank" rel="noopener">
              Comprar por WhatsApp
            </a>
          </div>
        </article>
      `
    )
    .join("");

  resultCount.textContent = `${items.length} producto${items.length === 1 ? "" : "s"}`;
  emptyState.hidden = items.length > 0;
  observeCards();
}

function filterProducts() {
  const term = normalize(searchInput.value.trim());
  const filtered = products.filter((product) => {
    const matchesCategory = activeCategory === "Todos" || product.category === activeCategory;
    const searchable = normalize(
      `${product.brand} ${product.name} ${product.category} ${product.type} ${product.size} ${product.description} ${product.skin}`
    );
    return matchesCategory && searchable.includes(term);
  });

  renderProducts(filtered);
}

function observeCards() {
  const cards = document.querySelectorAll(".product-card");

  if (!("IntersectionObserver" in window)) {
    cards.forEach((card) => card.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, instance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          instance.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach((card) => observer.observe(card));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    searchInput.value = "";
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));
    filterProducts();
  });
});

searchInput.addEventListener("input", filterProducts);

function openTermsModal() {
  termsModal.classList.add("is-open");
  termsModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  termsDialog.focus();
}

function closeTermsModal() {
  termsModal.classList.remove("is-open");
  termsModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  openTermsButton.focus();
}

openTermsButton.addEventListener("click", openTermsModal);
closeTermsButton.addEventListener("click", closeTermsModal);

termsModal.addEventListener("click", (event) => {
  if (event.target === termsModal) {
    closeTermsModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && termsModal.classList.contains("is-open")) {
    closeTermsModal();
  }
});

function showCopyToast() {
  copyToast.classList.add("is-visible");
  window.clearTimeout(copyToastTimer);
  copyToastTimer = window.setTimeout(() => {
    copyToast.classList.remove("is-visible");
  }, 1600);
}

async function copyPaymentValue(value) {
  try {
    await navigator.clipboard.writeText(value);
  } catch (error) {
    const temporaryInput = document.createElement("input");
    temporaryInput.value = value;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.style.position = "fixed";
    temporaryInput.style.opacity = "0";
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand("copy");
    temporaryInput.remove();
  }

  showCopyToast();
}

copyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    copyPaymentValue(button.dataset.copy);
  });
});

renderProducts(products);
