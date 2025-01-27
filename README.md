# Simulateur de Temps

>[!WARNING]
> Ce projet a été fait en environ 1h30 pour une session de mini-projet. Le projet peut être incomplet.

Ce projet est une application interactive permettant aux utilisateurs de simuler la répartition de leur temps disponible chaque année pour des projets altruistes. Il vise à sensibiliser les utilisateurs à l'importance d'utiliser leur temps efficacement pour des activités à impact positif.


## Fonctionnalités

- **Calcul du temps disponible** : Les utilisateurs saisissent le nombre d'heures disponibles chaque semaine, et l'application calcule automatiquement le temps total annuel.
- **Sélection d'activités altruistes** : Une liste d'activités est proposée, avec des descriptions et des durées estimées.
- **Suivi en temps réel** : L'utilisateur peut voir combien de temps il lui reste à allouer à d'autres activités.

## Aperçu du Projet

L'interface se compose de deux étapes principales :
1. **Saisie du temps disponible** : L'utilisateur entre ses heures hebdomadaires disponibles.
2. **Sélection des activités** : L'utilisateur choisit les projets auxquels il souhaite consacrer son temps.

### Exemple d'activité :
```javascript
{
  titre: 'Évaluer l’efficacité d’organisations caritatives',
  description: "Faire des recherches sur différentes organisations caritatives pour déterminer lesquelles ont l'impact le plus mesurable et significatif.",
  lien: 'https://www.givewell.org/',
  duree: 8,
  pris: false
}
```

## Structure du Code

### Principales Fonctions
- **`submit()`** : Calcule le temps disponible annuel à partir des heures hebdomadaires et passe à l'étape suivante.
- **`revenirEnArriere()`** : Permet de revenir à l'écran de saisie initiale.
- **`tempsParAn(heures)`** : Transforme les heures hebdomadaires en heures annuelles.
- **`activerActivite(n)`** : Permet de sélectionner une activité, vérifie si le temps restant est suffisant et met à jour l'état des activités.

### Composants
- **`Input`** : Saisie du temps hebdomadaire disponible.
- **`Button`** : Bouton pour valider la saisie.
- **Liste des activités** : Générée dynamiquement à partir de l'état `activites`.

## Technologies Utilisées

- **React** : Framework principal pour la création de l'interface utilisateur.
- **TypeScript** : Assure la sécurité des types dans le projet.
- **TailwindCSS** : Permet une personnalisation rapide et efficace de l'apparence.

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone <URL_DU_DEPOT>
   cd simulateur-de-temps
   ```
2. Installez les dépendances :
   ```bash
   npm install
   ```
3. Lancez le projet en local :
   ```bash
   npm run dev
   ```

## Utilisation

1. Entrez votre temps disponible hebdomadaire en heures.
2. Cliquez sur **"Je fais le test"** pour calculer votre temps annuel disponible.
3. Choisissez des activités parmi celles proposées, jusqu'à ce que tout votre temps soit alloué !

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez ajouter de nouvelles fonctionnalités ou corriger des bugs, ouvrez une **Pull Request** ou signalez un problème via **Issues**.
## Licence

Ce projet est sous licence **MIT**. Consultez le fichier [LICENSE](LICENSE) pour plus d'informations.