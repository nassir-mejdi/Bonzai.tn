const menuData = [
    {
        id: "sets",
        category: "Sets Bonzai & Petit Déjeuner",
        subtitle: "L'art du réveil gourmand",
        items: [
            { name: "BONZAI RAPIDE (AVANT 10H)", price: "7.000 DT", desc: "Café au choix, Jus frais (Citonnade / Orange / Fraise), Viennoiserie, Eau Minérale 0.5L." },
            { name: "BONZAI À LA FRANÇAISE", price: "9.000 DT", desc: "Café au choix, Jus frais, Petit Pain, Chocolat-Beurre-Confiture, Oeuf à la Coque, Viennoiserie, Eau 0.5L." },
            { name: "BONZAI À LA TUNISIENNE", price: "16.000 DT", desc: "Café au choix, Jus frais, Bsisa Traditionnelle, Assiette: Dégla-Fromage-Huile d'olive, Beurre-Mlewi-Oeuf brouillé (عربي)." },
            { name: "BONZAI KIDS", price: "6.500 DT", desc: "Lait au chocolat, Bol de Céréales, Mini crêpe chocolat, Jus frais, Yaourt." },
            { name: "BONZAI À L'ITALIENNE", price: "16.000 DT", desc: "Café au choix, Jus frais, Viennoiserie, Beurre-Confiture, Assiette Fromage-Jambon-Salami, Omelette, Pancake." },
            { name: "BONZAI DOUBLE", price: "25.000 DT", desc: "2 Cafés, 2 Jus frais, 2 Viennoiseries, Assiette Mixte, 2 Mini crêpes, Eau Minérale 1L." },
            { name: "Omelette Nature", price: "6.000 DT", desc: "" },
            { name: "Omelette Fromage", price: "7.000 DT", desc: "" },
            { name: "Omelette Thon", price: "8.500 DT", desc: "" },
            { name: "Omelette Jambon Fromage", price: "8.000 DT", desc: "" },
            { name: "Omelette Champignon", price: "8.000 DT", desc: "" },
            { name: "Omelette Végétarienne", price: "7.500 DT", desc: "" },
            { name: "Pause Matinal: Croissant", price: "2.500 DT", desc: "" },
            { name: "Pause Matinal: Cake", price: "2.500 DT", desc: "" }
        ]
    },
    {
        id: "cafes",
        category: "Cafés Classiques",
        subtitle: "La tradition du goût authentique",
        items: [
            { name: "Express", price: "3.500 DT", desc: "" },
            { name: "Capucin", price: "3.800 DT", desc: "" },
            { name: "Café crème", price: "4.000 DT", desc: "" },
            { name: "Express Américain", price: "4.000 DT", desc: "" },
            { name: "Café crème Nestlé", price: "5.500 DT", desc: "" },
            { name: "Capucin Nestlé", price: "4.500 DT", desc: "" },
            { name: "Chocolat au lait", price: "4.000 DT", desc: "" },
            { name: "Capuccino Chantilly", price: "5.500 DT", desc: "" },
            { name: "Capuccino Aromatisé", price: "5.500 DT", desc: "" }
        ]
    },
    {
        id: "lavazza",
        category: "Dégustation Lavazza",
        subtitle: "L'excellence italienne dans chaque tasse",
        items: [
            { name: "Espresso Lavazza", price: "4.500 DT", desc: "" },
            { name: "Espresso Macchiato", price: "5.000 DT", desc: "" },
            { name: "Espresso Américano", price: "5.000 DT", desc: "" },
            { name: "Espresso Créma", price: "5.500 DT", desc: "" },
            { name: "Cappuccino à la Crème", price: "6.000 DT", desc: "" },
            { name: "Cappuccino Italiano", price: "6.000 DT", desc: "" },
            { name: "Espresso Tiramisu", price: "6.000 DT", desc: "" },
            { name: "Caramel Latte", price: "6.000 DT", desc: "" },
            { name: "Caramel Macchiato", price: "5.500 DT", desc: "" }
        ]
    },
    {
        id: "nespresso",
        category: "Univers Nespresso",
        subtitle: "L'arôme et l'élégance du café",
        items: [
            { name: "Nespresso", price: "5.000 DT", desc: "" },
            { name: "Nespresso Macchiato", price: "6.500 DT", desc: "" },
            { name: "Nespresso Créma", price: "6.000 DT", desc: "" },
            { name: "Nespresso Soriso", price: "6.000 DT", desc: "" },
            { name: "Nespresso Ice Bianco", price: "6.000 DT", desc: "" },
            { name: "Nespresso Aromatisé", price: "5.500 DT", desc: "" },
            { name: "Irish Coffe", price: "6.000 DT", desc: "" }
        ]
    },
    {
        id: "frappuchinos",
        category: "Frappuchinos & Cafés Froids",
        subtitle: "Fraîcheur intense et onctueuse",
        items: [
            { name: "Moka", price: "8.000 DT", desc: "Café, Lait, Glace moka, Glaçon pilé." },
            { name: "Noisette", price: "8.000 DT", desc: "Café, Lait, Glace noisette, Glaçon pilé." },
            { name: "Caramel", price: "8.000 DT", desc: "Café, Lait, Sirop caramel, Chantilly." },
            { name: "Vanille", price: "8.000 DT", desc: "Café, Lait, Glace vanille, Chantilly." },
            { name: "Bonzai Chip", price: "9.000 DT", desc: "Chocolat, Vanille, Pépites de chocolat, Chantilly." },
            { name: "Bonzai Cookies", price: "9.000 DT", desc: "Chocolat, Vanille, Cookies, Chantilly." },
            { name: "Ice chocolat Brownies", price: "8.000 DT", desc: "Chocolat chaud, Glace biscuit, Chantilly." },
            { name: "Café Liégeois", price: "7.000 DT", desc: "" },
            { name: "Café Viennoise", price: "7.000 DT", desc: "" },
            { name: "Choco Chino", price: "7.500 DT", desc: "Chocolat chaud, Glace chocolat, Chantilly." }
        ]
    },
    {
        id: "chocolats",
        category: "Chocolats Chauds",
        subtitle: "Douceur réconfortante",
        items: [
            { name: "Chocolat chaud classique", price: "7.000 DT", desc: "" },
            { name: "Chocolat chaud chantilly", price: "8.000 DT", desc: "" },
            { name: "Chocolat chaud crunch", price: "8.000 DT", desc: "" },
            { name: "Chocolat chaud Brownies", price: "8.500 DT", desc: "" },
            { name: "Chocolat chaud Aromatisé", price: "8.000 DT", desc: "" }
        ]
    },
    {
        id: "savoureux",
        category: "Savoureux & Burgers",
        subtitle: "Pour combler vos faims gourmandes",
        items: [
            { name: "Hamburger", price: "7.000 DT", desc: "Servi avec frites croustillantes." },
            { name: "Cheeseburger", price: "8.000 DT", desc: "Servi avec frites croustillantes." },
            { name: "Double Cheeseburger", price: "10.000 DT", desc: "Pour les grandes faims." },
            { name: "Club Sandwich", price: "9.000 DT", desc: "Thon, Jambon, Fromage, Oeuf, Salade, Tomate." },
            { name: "Sandwich Turc: Escalope", price: "8.000 DT", desc: "" },
            { name: "Sandwich Turc: Kabeb", price: "9.000 DT", desc: "" },
            { name: "Crêpe Salée: Mixte", price: "11.000 DT", desc: "Thon, Fromage, Oeuf." },
            { name: "Gratinée: Jambon", price: "12.000 DT", desc: "Roulé gratiné au four." },
            { name: "Gratinée: Escalope", price: "14.000 DT", desc: "Roulé gratiné au four." }
        ]
    },
    {
        id: "boissons",
        category: "Boissons & Jus Frais",
        subtitle: "Vitamines et fraîcheur",
        items: [
            { name: "Jus d'Orange", price: "6.000 DT", desc: "Pressé à la minute." },
            { name: "Jus de Pomme", price: "6.000 DT", desc: "Pressé à la minute." },
            { name: "Jus de Pêche", price: "7.000 DT", desc: "Pressé à la minute." },
            { name: "Jus de Kiwi", price: "8.500 DT", desc: "" },
            { name: "Jus d'Ananas Frais", price: "8.500 DT", desc: "" },
            { name: "Citronnade Classique", price: "6.500 DT", desc: "" },
            { name: "Citronnade Menthe", price: "7.000 DT", desc: "" },
            { name: "Milk Shake Classique", price: "8.000 DT", desc: "Vanille, Fraise, ou Chocolat" },
            { name: "Milk Shake Oreo", price: "12.000 DT", desc: "" },
            { name: "Smoothie Hawai", price: "9.500 DT", desc: "" },
            { name: "Smoothie Rosa", price: "9.500 DT", desc: "" },
            { name: "Smoothie Trapana", price: "9.500 DT", desc: "" },
            { name: "Le Virgin Mojito", price: "10.000 DT", desc: "" },
            { name: "Le Virgin Colada", price: "10.000 DT", desc: "" },
            { name: "Thé Vert", price: "3.500 DT", desc: "" },
            { name: "Infusion", price: "4.500 DT", desc: "" }
        ]
    },
    {
        id: "desserts",
        category: "Desserts & Délices",
        subtitle: "La note sucrée parfaite",
        items: [
            { name: "Pancake Overdose", price: "12.500 DT", desc: "" },
            { name: "Pancake Tutti Fruitti", price: "14.500 DT", desc: "" },
            { name: "Crêpe Nutella Banane Amande", price: "15.000 DT", desc: "" },
            { name: "Gaufre Nutella", price: "10.000 DT", desc: "" },
            { name: "Gaufre Chocolat", price: "10.000 DT", desc: "" },
            { name: "Gaufre Trio", price: "14.000 DT", desc: "" },
            { name: "Tiramisu", price: "7.000 DT", desc: "" },
            { name: "Fondant Chocolat", price: "7.000 DT", desc: "" },
            { name: "Fondant aux amandes", price: "9.000 DT", desc: "" },
            { name: "Cheese Cakes au choix", price: "7.500 DT", desc: "" }
        ]
    },
    {
        id: "chicha",
        category: "L'Espace Chicha",
        subtitle: "Servie uniquement sur terrasse",
        items: [
            { name: "Chicha Parfumée Fakher", price: "7.000 DT", desc: "" },
            { name: "Chicha Turk", price: "7.500 DT", desc: "" },
            { name: "Chicha Cocktail", price: "8.000 DT", desc: "" },
            { name: "Chicha Fumo", price: "10.000 DT", desc: "" },
            { name: "Chicha Spécial Fumo + Fruits", price: "20.000 DT", desc: "Vase avec fruits frais & glaçons" }
        ],
        flavors: ["Vanille", "Citron", "Pomme", "Cerise", "Menthe", "Melon", "Orange", "Raisin", "Pêche", "Chewingum", "Pomme Menthe", "Raisin Menthe"]
    }
];

function renderMenu() {
    const container = document.getElementById('menu-container');
    
    menuData.forEach(section => {
        const sectionEl = document.createElement('section');
        sectionEl.className = 'menu-section';
        sectionEl.id = section.id;

        const itemsHTML = section.items.map(item => `
            <div class="menu-item" data-name="${item.name.toLowerCase()}">
                <div class="item-top">
                    <span class="item-name">${item.name}</span>
                    <span class="item-price">${item.price}</span>
                </div>
                ${item.desc ? `<p class="item-desc">${item.desc}</p>` : ''}
            </div>
        `).join('');

        let extraHTML = '';
        if (section.flavors) {
            extraHTML = `
                <div class="flavor-box">
                    <div class="flavor-title">Parfums Disponibles :</div>
                    <div class="flavor-list">
                        ${section.flavors.map(f => `<span class="flavor-tag">${f}</span>`).join('')}
                    </div>
                </div>
            `;
        }

        sectionEl.innerHTML = `
            <div class="section-title">
                <h2>${section.category}</h2>
                <p>${section.subtitle}</p>
            </div>
            <div class="menu-grid">
                ${itemsHTML}
            </div>
            ${extraHTML}
        `;

        container.appendChild(sectionEl);
    });

    // Reveal animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.menu-section').forEach(el => observer.observe(el));
}

function initSearch() {
    const searchInput = document.getElementById('menu-search');
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        
        document.querySelectorAll('.menu-section').forEach(section => {
            let sectionHasVisibleItems = false;
            
            section.querySelectorAll('.menu-item').forEach(item => {
                const name = item.getAttribute('data-name');
                const desc = item.querySelector('.item-desc') ? item.querySelector('.item-desc').innerText.toLowerCase() : '';
                
                if (name.includes(query) || desc.includes(query)) {
                    item.style.display = 'block';
                    sectionHasVisibleItems = true;
                } else {
                    item.style.display = 'none';
                }
            });
            
            // Hide the entire section if no items are visible
            if (sectionHasVisibleItems) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    });
}

// sticky nav active state
let cachedSections = null;
let cachedNavBtns = null;
let cachedHeader = null;

window.addEventListener('scroll', () => {
    if (!cachedSections) cachedSections = document.querySelectorAll('.menu-section');
    if (!cachedNavBtns) cachedNavBtns = document.querySelectorAll('.cat-btn');
    if (!cachedHeader) cachedHeader = document.querySelector('.header');
    
    // Header effect
    if (window.scrollY > 50) {
        cachedHeader.classList.add('scrolled');
    } else {
        cachedHeader.classList.remove('scrolled');
    }

    let current = "";
    cachedSections.forEach(section => {
        if (section.style.display !== 'none') {
            const sectionTop = section.getBoundingClientRect().top + window.scrollY;
            if (window.scrollY >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        }
    });

    cachedNavBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-target') === current) {
            btn.classList.add('active');
        }
    });
});

// Category button click
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-target');
        const element = document.getElementById(target);
        if (element) {
            const y = element.getBoundingClientRect().top + window.scrollY - 130;
            window.scrollTo({
                top: y,
                behavior: 'smooth'
            });
        }
    });
});

// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-wrapper');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.visibility = 'hidden';
        }, 500);
    }, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    renderMenu();
    initSearch();
});
