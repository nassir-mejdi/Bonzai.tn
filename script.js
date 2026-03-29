const menuData = [
  // SECTION 1: SETS & BREAKFAST
  {
    id: "sets",
    category: "Sets Bonzai & Petit Déjeuner",
    items: [
      { name: "BONZAI RAPIDE (AVANT 10H)", price: "7.000 DT", desc: "Café au choix, Jus frais (Citonnade / Orange / Fraise), Viennoiserie (Croissant / Cake), Eau Minérale 0.5L." },
      { name: "BONZAI À LA FRANÇAISE", price: "9.000 DT", desc: "Café au choix, Jus frais (Citonnade / Orange / Fraise), Petit Pain / Pain Complet, Chocolat-Beurre-Confiture, Oeuf à la Coque, Viennoiserie (Croissant / Cake), Eau Minérale 0.5L." },
      { name: "BONZAI À LA TUNISIENNE", price: "16.000 DT", desc: "Café au choix, Jus frais (Citonnade / Orange / Fraise), Bsisa Traditionnelle, Assiette: Dégla-Fromage-Huile d'olive, Beurre-Mlewi-Oeuf brouillé (عربي), Eau Minérale 0.5L." },
      { name: "BONZAI KIDS", price: "6.500 DT", desc: "Lait au chocolat, Bol de Céréales, Mini crêpe chocolat, Jus frais (Citonnade / Orange / Fraise), Yaourt." },
      { name: "BONZAI À L'ITALIENNE", price: "16.000 DT", desc: "Café au choix, Jus frais (Citonnade / Orange / Fraise), Viennoiserie (Croissant / Cake), Beurre-Confiture-Chocolat, Assiette Fromage-Jambon-Salami, Omelette, Pancake, Eau Minérale 0.5L." },
      { name: "BONZAI DOUBLE", price: "25.000 DT", desc: "2 Cafés au choix, 2 Jus frais (Citonnade / Orange / Fraise), 2 Viennoiseries (Croissant / Cake), Assiette de Fromage-Jambon-Salami-Salade de Fruit, 2 Mini crêpe, Eau Minérale 1L." },
      { name: "Omelette: Nature / Fromage", price: "6.000 DT - 7.000 DT", desc: "" },
      { name: "Omelette: Thon Fromage / Jambon Fromage", price: "8.500 DT - 8.000 DT", desc: "" },
      { name: "Omelette: Champignon Fromage / Végétarienne", price: "8.000 DT - 7.500 DT", desc: "" },
      { name: "Pause Matinal: Croissant", price: "2.500 DT", desc: "" },

      { name: "Pause Matinal: Cake", price: "2.500 DT", desc: "" },
      { name: "Pause Matinal: Plat Charcuterie", price: "7.000 DT", desc: "" }
    ]
  },
  // SECTION 2: COLD COFFEES & FRAPPS
  {
    id: "frappuchino",
    category: "Frappuchinos & Cafés Froids",
    container: "top",
    items: [
      { name: "Moka", price: "8.000 DT", desc: "Café, Lait, Glace moka, Glaçon pilé, Chantilly" },
      { name: "Noisette", price: "8.000 DT", desc: "Café, Lait, Glace noisette, Glaçon pilé" },
      { name: "Caramel", price: "8.000 DT", desc: "Café, Lait, Sirop Caramel, Glaçon pilé, Chantilly" },
      { name: "Vanille", price: "8.000 DT", desc: "Café, Lait, Glace Vanille, Glaçon pilé, Chantilly" },
      { name: "Ice chocolat Brownies", price: "8.000 DT", desc: "Chocolat chaud, Glace chocolat biscuit, mixer, Chantilly" },
      { name: "Bonzai Chip", price: "9.000 DT", desc: "Café, Lait, Glace chocolat, Pépite de Chocolat, Chantilly" },
      { name: "Bonzai Cookies", price: "9.000 DT", desc: "Café, Lait, Chocolat, Vanille, Cookies, Chantilly" },
      { name: "Chocolat Liégeois", price: "7.000 DT", desc: "" },
      { name: "Café Glacé aromatisé", price: "7.000 DT", desc: "" },
      { name: "Café Liégeois", price: "7.000 DT", desc: "" },
      { name: "Café Viennoise", price: "7.000 DT", desc: "" },
      { name: "Choco Chino", price: "7.500 DT", desc: "Chocolat chaud, Glace chocolat, Chantilly" }
    ]
  },
  {
    id: "hot-chocos",
    category: "Chocolats Chauds",
    container: "top",
    items: [
      { name: "Chocolat chaud classique", price: "7.000 DT", desc: "" },
      { name: "Chocolat chaud chantilly", price: "8.000 DT", desc: "" },
      { name: "Chocolat chaud crunch", price: "8.000 DT", desc: "" },
      { name: "Chocolat chaud Brownies", price: "8.500 DT", desc: "" },
      { name: "Chocolat chaud Aromatisé", price: "8.000 DT", desc: "" }
    ]
  },
  // SECTION 3: SAVORY (SAVOUREUX)
  {
    id: "savory",
    category: "Savoureux (Burgers, Paninis & Crêpes)",
    container: "middle",
    items: [
      { name: "Hamburger / Cheesburger", price: "7.000 DT - 8.000 DT", desc: "Servi avec frites" },
      { name: "Double Cheesburger", price: "10.000 DT", desc: "Pour les grandes faims" },
      { name: "Panini: Fromage", price: "6.500 DT", desc: "" },
      { name: "Panini: Thon Fromage / Jambon Fromage", price: "8.000 DT", desc: "" },
      { name: "Croque Monsieur", price: "8.000 DT", desc: "Thon, Fromage, Salade verte, Tomate" },
      { name: "Croque Madame", price: "8.000 DT", desc: "Jambon, Fromage, Oeuf, Salade verte, Tomate" },
      { name: "Club Sandwich", price: "9.000 DT", desc: "Thon, Jambon, Fromage, Oeuf, Salade verte, Tomate" },
      { name: "Sandwich Turc: Escalope+Fromage+Frites", price: "8.000 DT", desc: "" },
      { name: "Sandwich Turc: Escalope panée+Fondu+Frites", price: "9.000 DT", desc: "" },
      { name: "Sandwich Turc: Cordon Blue+Frites", price: "9.000 DT", desc: "" },
      { name: "Sandwich Turc: Kabeb+Frites", price: "8.000 DT", desc: "" },
      { name: "Crêpe Salée: Fromage", price: "7.000 DT", desc: "" },
      { name: "Crêpe Salée: Thon", price: "8.000 DT", desc: "" },
      { name: "Crêpe Salée: Thon, Fromage", price: "10.000 DT", desc: "" },
      { name: "Crêpe Salée: Jambon, Fromage", price: "9.000 DT", desc: "" },
      { name: "Crêpe Salée: Thon, Champignon, Fromage", price: "11.000 DT", desc: "" },
      { name: "Crêpe Salée: Champignon, Fromage", price: "9.000 DT", desc: "" },
      { name: "Crêpe Salée: Thon, Fromage, Oeuf", price: "11.000 DT", desc: "" },
      { name: "Gratinée: Crêpe, Jambon, Fromage, Champignon", price: "12.000 DT", desc: "Roulé gratiné au four" },
      { name: "Gratinée: Escalope", price: "14.000 DT", desc: "" },
      { name: "Plat de Frites", price: "3.500 DT", desc: "" }
    ]
  },

  // SECTION 4: DRINKS / FRAICHEUR
  {
    id: "drinks",
    category: "Boissons Fraiches & Jus",
    container: "bottom",
    items: [
      { name: "Jus d'orange", price: "6.000 DT", desc: "" },
      { name: "Jus de Banane", price: "7.000 DT", desc: "" },
      { name: "Lait de poule", price: "7.000 DT", desc: "" },
      { name: "Citronnade à la menthe", price: "7.000 DT", desc: "" },
      { name: "Jus de pomme", price: "6.000 DT", desc: "" },
      { name: "Citronnade Classique", price: "6.500 DT", desc: "" },
      { name: "Citronnade aux amandes", price: "8.000 DT", desc: "" },
      { name: "Jus de Fraise", price: "7.000 DT", desc: "" },
      { name: "Jus de Kiwi", price: "8.500 DT", desc: "" },
      { name: "Jus d'Ananas Frais", price: "8.500 DT", desc: "" },
      { name: "Jus de Pêche", price: "7.000 DT", desc: "" },
      { name: "Milk Shake Chocolat / Vanille / Fraise", price: "8.000 DT", desc: "" },
      { name: "Milk Shake Oreo / Nutella / Speculoos", price: "12.000 DT", desc: "" },
      { name: "Milk Shake Mixte", price: "14.000 DT", desc: "Nutella, Speculoos, Oreo" },
      { name: "Red Bull / Shark", price: "8.000 DT", desc: "" },
      { name: "Soda Classique", price: "4.500 DT", desc: "" },
      { name: "Soda Menthe ou Grenadine", price: "5.500 DT", desc: "" },
      { name: "Eau minérale plate / gazéifiée 0.5L", price: "3.500 DT", desc: "" },
      { name: "Eau gazéifiée à la Menthe", price: "4.000 DT", desc: "" },
      { name: "La Pétillante Sabrine", price: "4.500 DT", desc: "" }
    ]
  },
  {
    id: "smoothies",
    category: "Smoothies & Cocktails",
    container: "bottom",
    items: [
      { name: "Hawai", price: "9.500 DT", desc: "Fruits de Bois, Banane, Miel, Glace à vanille, Glaçon pilé" },
      { name: "Rosa", price: "9.500 DT", desc: "Framboise, yaourt nature, lait, Sirop de rose, Glaçon pilé" },
      { name: "Trapana", price: "9.500 DT", desc: "Fruits de bois, Glace vanille, Glaçon pilé" },
      { name: "Cocktail des îles", price: "10.000 DT", desc: "Ananas, Mangue, Jus de citron" },
      { name: "Le Bonzai", price: "11.000 DT", desc: "Orange, Mangue, Ananas, Glace vanille" },
      { name: "Le Bikini", price: "11.000 DT", desc: "Fraise, Citron, Pomme, Melon" },
      { name: "Le Virgin Colada", price: "10.000 DT", desc: "Ananas, Noix de coco, Lait, Glace pilé" },
      { name: "Le Virgin Mojito", price: "10.000 DT", desc: "Tonic, Citron Vert, Menthe frais, Glaçon pilé" },
      { name: "Le Sao Paolo", price: "10.000 DT", desc: "Kiwi, Banane" },
      { name: "Agru Jus", price: "10.500 DT", desc: "Orange, Pomme, Poire, Fruits de Bois" },
      { name: "Fruit Mix (2 pers)", price: "15.000 DT", desc: "" },
      { name: "Fruit Mix (4 pers)", price: "20.000 DT", desc: "" }
    ]
  },
  // SECTION 5: DESSERTS & DÉLICES
  {
    id: "dessert",
    category: "Desserts & Délices",
    container: "bottom",
    items: [
      { name: "Pancake Overdose", price: "12.500 DT", desc: "Nutella, Banane, Amande" },
      { name: "Pancake Tutti Fruitti", price: "14.500 DT", desc: "Nutella, Fruit de saison" },
      { name: "Crêpe Nutella Banane Amande", price: "15.000 DT", desc: "" },
      { name: "Gaufre Nutella Banane", price: "13.000 DT", desc: "" },
      { name: "Gaufre Trio de Gaufres", price: "14.000 DT", desc: "" },
      { name: "Gaufre Chocolat Amande", price: "10.000 DT", desc: "" },
      { name: "Tiramisu", price: "7.000 DT", desc: "" },
      { name: "Fondant au chocolat", price: "7.000 DT", desc: "" },
      { name: "Fondant aux amandes", price: "9.000 DT", desc: "" },
      { name: "Gâteaux Américain", price: "8.000 DT", desc: "" },
      { name: "Cheese Cakes au choix", price: "7.500 DT", desc: "" },
      { name: "La dame blanche", price: "8.000 DT", desc: "2 boules vanilles, chantilly" },
      { name: "Alfogato del coffee", price: "8.500 DT", desc: "Glace vanille, noisette, espresso, chantilly" },
      { name: "Le bonzai", price: "10.000 DT", desc: "3 boules au choix, fruits de saison, chantilly" }
    ]
  },
  // SECTION 6: CHICHA
  {
    id: "chicha",
    category: "Les Chichas",
    container: "bottom",
    subtitle: "Chicha servie uniquement sur terrasse",
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
  const topContainer = document.getElementById('menu-top');
  const middleContainer = document.getElementById('menu-middle');
  const bottomContainer = document.getElementById('menu-bottom');
  
  menuData.forEach((section) => {
    const sectionEl = document.createElement('section');
    sectionEl.className = 'category-section';
    sectionEl.id = section.id;
    
    let itemsHTML = section.items.map(item => `
      <div class="menu-item">
        <div class="item-header">
            <span class="item-name">${item.name}</span>
            <span class="item-price">${item.price}</span>
        </div>
        <p class="item-desc">${item.desc}</p>
      </div>
    `).join('');

    let extraHTML = '';
    if (section.flavors) {
      extraHTML = `
        <div class="flavor-header">Parfums Disponibles :</div>
        <div class="flavor-container">
          ${section.flavors.map(f => `<span class="flavor-tag">${f}</span>`).join('')}
        </div>
      `;
    }

    sectionEl.innerHTML = `
      <div class="category-header">
          <h2>${section.category}</h2>
          ${section.subtitle ? `<p style="font-size: 0.9rem; font-style: italic; color: var(--text-muted); margin-top: 10px;">${section.subtitle}</p>` : ''}
      </div>
      <div class="menu-grid">
          ${itemsHTML}
      </div>
      ${extraHTML}
    `;
    
    if (section.container === 'middle') {
      middleContainer.appendChild(sectionEl);
    } else if (section.container === 'bottom') {
      bottomContainer.appendChild(sectionEl);
    } else {
      topContainer.appendChild(sectionEl);
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.category-section').forEach(section => {
    observer.observe(section);
  });
}

document.addEventListener('DOMContentLoaded', renderMenu);
