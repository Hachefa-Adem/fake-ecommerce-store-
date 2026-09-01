# 🛍️ My First React App - Premium Storefront

Une boutique en ligne moderne et réactive construite avec **React + Vite**. Découvrez une expérience d'achat premium avec recherche, panier intelligent et design responsive.

## ✨ Fonctionnalités

- 📱 **Fully Responsive** : Optimisé pour mobile, tablette et desktop
- 🔍 **Recherche Intelligente** : Filtrez les produits par nom ou catégorie en temps réel
- 🛒 **Panier Dynamique** : Gestion complète du panier avec quantités
- 🗑️ **Suppression Rapide** : Bouton poubelle pour retirer des articles
- 🏠 **Page d'Accueil** : Hero section avec produits phares
- 📊 **Produits** : Grille de tous les produits avec images
- 💰 **Calcul Total** : Affichage instantané du total du panier
- ⚡ **Performance** : Build ultra-rapide avec Vite

## 🚀 Démarrage Rapide

### Prérequis
- Node.js 16+
- npm ou yarn

### Installation

```bash
# Cloner le repo
git clone https://github.com/TonUtilisateur/my-first-react-app.git
cd my-first-react-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:5173 dans le navigateur
```

### Build pour la Production

```bash
npm run build
# Génère le dossier 'dist' prêt pour le déploiement
```

## 📂 Structure du Projet

```
src/
├── App.jsx              # Composant principal avec gestion d'état
├── index.css            # Styles CSS pur (responsive design)
├── main.jsx             # Point d'entrée React
├── pages/
│   ├── Home.jsx         # Page d'accueil avec hero et produits phares
│   ├── Products.jsx     # Liste complète des produits + recherche
│   └── Cart.jsx         # Panier avec suppression d'articles
├── components/
│   └── ProductCard.jsx  # Composant carte produit réutilisable
└── assets/              # Images et icônes

public/
└── commerce.jpeg        # Image de fond hero
```

## 🛠️ Stack Technologique

- **React 18** : UI library
- **Vite** : Build tool ultra-rapide
- **CSS Pur** : Pas de framework CSS, design personnalisé
- **Fetch API** : Requêtes HTTP
- **Fake Store API** : Données produits

## 📡 Source de Données

Les produits sont chargés dynamiquement depuis l'API publique :
```
https://fakestoreapi.com/products
```

Chaque produit inclut :
- ID unique
- Titre
- Catégorie
- Prix
- Image

## 🎨 Design & Responsive

### Breakpoints
- 📱 **Mobile** : < 480px
- 📱 **Mobile Landscape** : 480px - 760px
- 📱 **Tablette** : 761px - 1024px
- 🖥️ **Desktop** : 1025px+

### Palette Couleurs
- Fond : `#f5f1ea` (beige clair)
- Primaire : `#b86e4c` (ocre chaleureux)
- Texte : `#1b1715` (marron foncé)

## ✅ Fonctionnalités Détaillées

### Accueil
- Hero section avec image de fond et texte centré
- Affichage des 3 produits phares

### Produits
- Grille responsive de tous les produits
- Barre de recherche pour filtrer en temps réel
- Bouton "Ajouter au panier" pour chaque produit

### Panier
- Liste des articles avec quantités
- Bouton poubelle 🗑️ pour supprimer 1 article
- Calcul automatique du total
- Message vide si panier vide

## 🚢 Déploiement

### Vercel (Recommandé)
1. Va sur [vercel.com](https://vercel.com)
2. Connecte ton GitHub
3. Importe ce repo
4. Clique "Deploy" 🚀

### Netlify
1. Va sur [netlify.com](https://netlify.com)
2. Connecte ton GitHub
3. Configure :
   - Build command : `npm run build`
   - Publish directory : `dist`
4. Deploy !

## 📦 Dépendances

```json
{
  "dependencies": {
    "react": "^18",
    "react-dom": "^18"
  },
  "devDependencies": {
    "vite": "^8"
  }
}
```

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésite pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit tes changements (`git commit -m 'Add AmazingFeature'`)
4. Push (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est libre d'utilisation. MIT License.

## 👤 Auteur

Créé avec ❤️ en 2024

---

**Besoin d'aide ?** Ouvre une [issue](https://github.com/TonUtilisateur/my-first-react-app/issues) ou contacte-moi directement.
