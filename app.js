/**
 * Kathyayani Foods — Application Controller
 * ponytail: Zero build tools, vanilla ES6+, centralized store, single-page overlay architecture.
 */

// 1. Central Product Data Store with 4 images per product (Box -> Bowl -> Served -> Nutrition/Ingredients)
const PRODUCTS = [
  {
    id: 'dosa-batter',
    name: 'Dosa Batter',
    unitPrice: 90,
    unit: '1kg',
    hook: 'No rice, low-GI, diabetic-friendly',
    description: 'Homemade jowar & split urad dal dosa batter, naturally fermented, no rice added. A lower-GI alternative for crispy, golden dosas — diabetic-friendly, made fresh on order.',
    ingredients: 'Jowar (Sorghum), Split Urad Dal, Purified Alkaline Water, Fenugreek Seeds (No Rice, No Salt)',
    bestFor: 'Crisp dosas, golden roast, uttapams',
    badges: ['No Rice', 'Diabetic-Friendly', '100% Homemade', 'Naturally Fermented'],
    images: [
      'images/dosa-box.png',
      'images/dosa-bowl.png',
      'images/dosa-served.png',
      'images/dosa-nutrition.png'
    ]
  },
  {
    id: 'ragi-idli-batter',
    name: 'Ragi Idli Batter',
    unitPrice: 90,
    unit: '1kg',
    hook: 'Rich in finger millet, wholesome & healthy',
    description: 'Soft, fluffy idlis made easy with our fresh ragi batter — naturally fermented and packed with the wholesome goodness of finger millet. A healthier twist on your everyday idli, made fresh to order.',
    ingredients: 'Ragi (Finger Millet), Urad Dal, Purified Alkaline Water, Fenugreek Seeds (No Rice, No Salt)',
    bestFor: 'Soft idlis, button mini idlis, healthy tiffin',
    badges: ['Finger Millet', 'Naturally Fermented', '100% Homemade', 'Rich in Fibre'],
    images: [
      'images/ragi-box.png',
      'images/ragi-bowl.png',
      'images/ragi-served.png',
      'images/ragi-nutrition.png'
    ]
  },
  {
    id: 'pesarattu-batter',
    name: 'Pesarattu Batter',
    unitPrice: 120,
    unit: '1kg',
    hook: 'Protein-rich moong dal, light & nutritious',
    description: 'Protein-rich pesarattu batter made with split moong dal, ground fresh for that authentic Andhra taste. Light, nutritious, and perfect for a wholesome breakfast or dinner.',
    ingredients: 'Green Moong Dal (Whole), Yellow Moong Dal (Split), Purified Alkaline Water, Fenugreek Seeds (No Rice, No Salt)',
    bestFor: 'Pesarattu, Upma MLA Pesarattu, quick dosas',
    badges: ['Protein-Rich', '100% Homemade', 'Made Fresh', 'Low GI'],
    images: [
      'images/pesarattu-box.png',
      'images/pesarattu-bowl.png',
      'images/pesarattu-served.png',
      'images/pesarattu-nutrition.png'
    ]
  },
  {
    id: 'vada-batter',
    name: 'Vada Batter',
    unitPrice: 170,
    unit: '1kg',
    hook: 'Crispy outside, soft inside, made fresh',
    description: 'Thick, fluffy vada batter made with split urad dal, beaten to perfection for that classic crispy-outside, soft-inside vada. Made fresh on order — just shape, fry, and enjoy.',
    ingredients: 'Urad Dal (Whole), Purified Alkaline Water, Fenugreek Seeds (No Rice, No Salt)',
    bestFor: 'Medu Vada, Sambar Vada, Dahi Vada',
    badges: ['100% Homemade', 'No Preservatives', 'Ground Fresh', 'High in Protein'],
    images: [
      'images/vada-box.png',
      'images/vada-bowl.png',
      'images/vada-served.png',
      'images/vada-nutrition.png'
    ]
  }
];

const WHATSAPP_PHONE = '919059820583';

// 2. State
let activeProduct = null;
let currentQuantity = 1;

// 3. DOM Elements
const productsGrid = document.getElementById('productsGrid');
const siteHeader = document.getElementById('siteHeader');

// PDP Elements
const pdpBackdrop = document.getElementById('pdpBackdrop');
const pdpContainer = document.getElementById('pdpContainer');
const pdpCloseBtn = document.getElementById('pdpCloseBtn');
const pdpHandle = document.getElementById('pdpHandle');
const pdpScrollable = document.getElementById('pdpScrollable');
const pdpCarousel = document.getElementById('pdpCarousel');
const pdpDots = document.getElementById('pdpDots');
const pdpTitle = document.getElementById('pdpTitle');
const pdpUnitPrice = document.getElementById('pdpUnitPrice');
const pdpHook = document.getElementById('pdpHook');
const pdpBadgesRow = document.getElementById('pdpBadgesRow');
const pdpDescText = document.getElementById('pdpDescText');
const pdpIngredients = document.getElementById('pdpIngredients');
const pdpBestFor = document.getElementById('pdpBestFor');
const tabBtnDesc = document.getElementById('tabBtnDesc');
const tabBtnHowTo = document.getElementById('tabBtnHowTo');
const tabContentDesc = document.getElementById('tabContentDesc');
const tabContentHowTo = document.getElementById('tabContentHowTo');
const stepperMinus = document.getElementById('stepperMinus');
const stepperPlus = document.getElementById('stepperPlus');
const stepperDisplay = document.getElementById('stepperDisplay');
const pdpTotalAmount = document.getElementById('pdpTotalAmount');
const pdpWhatsAppBtn = document.getElementById('pdpWhatsAppBtn');

// 4. Render Product Grid
function renderProductGrid() {
  productsGrid.innerHTML = '';
  PRODUCTS.forEach(product => {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `View details for ${product.name}, price ₹${product.unitPrice} per ${product.unit}`);

    // First image is always the box
    const primaryImg = product.images[0];
    const altText = `${product.name} - ${product.hook}`;

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${primaryImg}" alt="${altText}" class="card-img" loading="lazy">
      </div>
      <div class="card-content">
        <h3 class="card-title">${product.name}</h3>
        <p class="card-hook">${product.hook}</p>
        <div class="card-bottom-row">
          <span class="card-price">₹${product.unitPrice}<span class="card-price-unit">/${product.unit}</span></span>
          <span class="card-action-cue">
            View Details
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => openPDP(product));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openPDP(product);
      }
    });

    productsGrid.appendChild(card);
  });
}

// 5. PDP Sheet / Modal Controller
function openPDP(product) {
  activeProduct = product;
  currentQuantity = 1;

  // Title, price, hook
  pdpTitle.textContent = product.name;
  pdpUnitPrice.textContent = `₹${product.unitPrice} / ${product.unit}`;
  pdpHook.textContent = product.hook;

  // Render Badges (Locked decision: directly under title/price)
  pdpBadgesRow.innerHTML = '';
  product.badges.forEach(badge => {
    const badgeEl = document.createElement('span');
    const isFreshness = /fermented|fresh|preservatives|fibre|protein|gi/i.test(badge);
    badgeEl.className = `pdp-badge ${isFreshness ? 'badge-fresh' : 'badge-standard'}`;
    badgeEl.textContent = badge;
    pdpBadgesRow.appendChild(badgeEl);
  });

  // Description & specs
  pdpDescText.textContent = product.description;
  pdpIngredients.textContent = product.ingredients;
  pdpBestFor.textContent = product.bestFor;

  // Reset tab to Description
  switchTab('desc');

  // Carousel setup with all 4 slides: box, bowl, served, nutrition
  renderCarousel(product.images, product.name);

  // Update stepper & totals
  updateStepperAndTotal();

  // Show backdrop
  pdpBackdrop.classList.add('open');
  pdpBackdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  // Focus on close button for accessibility
  pdpCloseBtn.focus();
}

function closePDP() {
  pdpBackdrop.classList.remove('open');
  pdpBackdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  activeProduct = null;
}

// 6. Generic Carousel (supports 1 to N images; updates active dot)
function renderCarousel(images, productName) {
  pdpCarousel.innerHTML = '';
  pdpDots.innerHTML = '';

  const slideLabels = ['Packaged Tub', 'Fresh Batter in Bowl', 'Plated Food & Craft', 'Nutrition & Ingredients'];

  images.forEach((imgSrc, index) => {
    const slide = document.createElement('div');
    slide.className = 'pdp-slide';
    const label = slideLabels[index] || `Slide ${index + 1}`;
    slide.innerHTML = `<img src="${imgSrc}" alt="${productName} - ${label}" loading="lazy">`;
    pdpCarousel.appendChild(slide);

    if (images.length > 1) {
      const dot = document.createElement('div');
      dot.className = `pdp-dot ${index === 0 ? 'active' : ''}`;
      pdpDots.appendChild(dot);
    }
  });

  /* ponytail: hide dot indicator container entirely if single slide */
  pdpDots.style.display = images.length > 1 ? 'flex' : 'none';

  // Scroll listener to update active dot
  pdpCarousel.onscroll = () => {
    if (images.length <= 1) return;
    const scrollLeft = pdpCarousel.scrollLeft;
    const slideWidth = pdpCarousel.offsetWidth || 1;
    const activeIndex = Math.round(scrollLeft / slideWidth);
    const dots = pdpDots.children;
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.toggle('active', i === activeIndex);
    }
  };
}

// 7. Tabs Controller
function switchTab(tab) {
  if (tab === 'desc') {
    tabBtnDesc.classList.add('active');
    tabBtnDesc.setAttribute('aria-selected', 'true');
    tabBtnHowTo.classList.remove('active');
    tabBtnHowTo.setAttribute('aria-selected', 'false');
    tabContentDesc.classList.add('active');
    tabContentHowTo.classList.remove('active');
  } else {
    tabBtnHowTo.classList.add('active');
    tabBtnHowTo.setAttribute('aria-selected', 'true');
    tabBtnDesc.classList.remove('active');
    tabBtnDesc.setAttribute('aria-selected', 'false');
    tabContentHowTo.classList.add('active');
    tabContentDesc.classList.remove('active');
  }
}

tabBtnDesc.addEventListener('click', () => switchTab('desc'));
tabBtnHowTo.addEventListener('click', () => switchTab('howto'));

// 8. Quantity Stepper & WhatsApp Link Generator
function updateStepperAndTotal() {
  if (!activeProduct) return;

  stepperDisplay.textContent = `${currentQuantity}kg`;
  const total = activeProduct.unitPrice * currentQuantity;
  pdpTotalAmount.textContent = `₹${total}`;

  // WhatsApp deep link format: https://wa.me/919059820583?text=Hi%2C%20I'd%20like%20to%20order%20{qty}kg%20{Product%20Name}
  const message = `Hi, I'd like to order ${currentQuantity}kg ${activeProduct.name}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  pdpWhatsAppBtn.setAttribute('href', whatsappUrl);
}

stepperMinus.addEventListener('click', () => {
  if (currentQuantity > 1) {
    currentQuantity -= 1;
    updateStepperAndTotal();
  }
});

stepperPlus.addEventListener('click', () => {
  currentQuantity += 1;
  updateStepperAndTotal();
});

// 9. Close Events (Backdrop click, Escape key, Close button, Drag handle swipe)
pdpCloseBtn.addEventListener('click', closePDP);

pdpBackdrop.addEventListener('click', (e) => {
  if (e.target === pdpBackdrop) {
    closePDP();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && pdpBackdrop.classList.contains('open')) {
    closePDP();
  }
});

// Mobile drag handle swipe-down gesture
let touchStartY = 0;
pdpHandle.addEventListener('touchstart', (e) => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });

pdpHandle.addEventListener('touchmove', (e) => {
  const currentY = e.touches[0].clientY;
  const deltaY = currentY - touchStartY;
  if (deltaY > 60) {
    closePDP();
  }
}, { passive: true });

// 10. Sticky Header Scroll Effect
window.addEventListener('scroll', () => {
  /* ponytail: simple threshold check for header compression */
  if (window.scrollY > 20) {
    siteHeader.classList.add('scrolled');
  } else {
    siteHeader.classList.remove('scrolled');
  }
}, { passive: true });

// Initial Boot
renderProductGrid();
