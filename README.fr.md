[English](README.md) · [Deutsch](README.de.md) · **Français** · [Español](README.es.md)

# Écran de veille « calendrier » en plugin SD pour CrossPoint 2.0 (Xteink X4 Pro)

Votre liseuse affiche votre journée comme écran de veille : la météo de deux lieux, les rendez-vous du jour de Google
Agenda et les tâches du jour de Todoist. **Ce plugin fonctionne avec le firmware officiel CrossPoint 2.0** : vous n'avez
donc pas besoin d'un firmware modifié.

<p align="center">
  <img src="docs/example-display.png" alt="Exemple : météo de deux lieux, rendez-vous et tâches (données fictives)" width="320"><br>
  <em>Exemple avec des données fictives, tel qu'il apparaît sur l'écran (480x800, niveaux de gris)</em>
</p>

> Plugin communautaire non officiel. Aucun lien avec le projet CrossPoint Reader ni avec Xteink.
> Pas encore testé sur un vrai appareil : merci de signaler ce qui fonctionne et ce qui ne fonctionne pas. Utilisation à
> vos risques, sans aucune garantie.

**Trois parties, choisissez ce qui vous convient :**
- ☁️ **Worker** (toujours nécessaire, il dessine l'image) : [worker-for-crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/worker-for-crosspoint-calendar-task-screen)
- 🔌 **Ce plugin** : pour le firmware officiel CrossPoint 2.0, sans flashage.
- 🧩 **Alternative : firmware personnalisé** avec des menus sur l'appareil et une galerie d'images de batterie faible :
  [crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/crosspoint-calendar-task-screen/tree/feature/calendar-sleep-screen)
  (fork de CrossPoint 1.6.5, [dernière version](https://github.com/RockyBalboa360/crosspoint-calendar-task-screen/releases/latest))

## Comment ça marche (en termes simples)
1. Un petit **worker** sur internet rassemble la météo, les rendez-vous et les tâches et en dessine une image.
   Vous le configurez une fois ; l'explication se trouve dans son README.
2. Ce **plugin** est un tout petit dossier sur la carte SD de la liseuse. Il dit à l'appareil : « Quand tu t'endors,
   télécharge l'image à cette adresse et enregistre-la sous `/sleep.bmp`. »
3. Le mode d'écran de veille **Custom** affiche `/sleep.bmp`. L'image est donc toujours celle de la dernière mise en veille.
4. Vous indiquez l'adresse de votre worker et vos deux lieux sur une **page de réglages** que vous ouvrez dans le
   navigateur de votre téléphone ou de votre ordinateur. Aucun fichier à modifier.

## Ce qu'il vous faut
- Une Xteink X4 Pro avec **CrossPoint 2.0** (au moment de la rédaction, 2.0.0 est une version candidate, voir les
  [versions](https://github.com/crosspoint-reader/crosspoint-reader/releases)). Les plugins n'existent pas dans la 1.6.5.
- Votre propre **worker**, qui fonctionne et affiche une image quand vous ouvrez son adresse dans un navigateur.
- Un réseau WiFi enregistré sur la liseuse.

## Installation
**Voie A : avec Plugin Hub (recommandé)**
1. Sur la liseuse : *Settings → Connectivity → Plugins → Enabled*.
2. *Home → Plugins → Plugin Hub → Install* (l'appareil le télécharge en WiFi ; une seule fois).
3. Ouvrez Plugin Hub, choisissez **Community Plugins**, sélectionnez **Calendar sleep screen** et appuyez sur *Install*.
   (Le plugin y apparaît quelques heures après la publication d'une version par le propriétaire du dépôt.)

**Voie B : à la main**
1. Téléchargez ce dépôt (*Code → Download ZIP*) ou la dernière [version](https://github.com/RockyBalboa360/CrossPoint-SDPlugin-weather-calendar-task-screen/releases/latest) et décompressez-le.
2. Copiez le dossier `calendar-sleep-screen.crosspoint-plugin` sur la carte SD sous le nom **`/plugins/calendar-sleep-screen`**
   (renommez-le, sans la partie `.crosspoint-plugin`).
3. Sur la liseuse : *Settings → Connectivity → Plugins → Enabled*.

## Configuration (une seule fois)
1. *Settings → Display → Sleep Screen → **Custom***.
2. Sur la liseuse, ouvrez **File Transfer** depuis l'écran d'accueil et choisissez *Join a Network* (ou *Create Hotspot*).
   Dans le navigateur de votre téléphone ou ordinateur, ouvrez l'adresse affichée par la liseuse, par exemple
   `http://crosspoint.local/settings`.
3. Sur cette page, trouvez la carte **Calendar sleep screen**, saisissez l'adresse de votre worker et vos deux lieux,
   puis appuyez sur **Enregistrer**. Le bouton *Chercher le lieu* trouve les coordonnées pour vous (cela demande internet
   sur votre téléphone ou ordinateur ; en mode point d'accès, saisissez les coordonnées à la main).
4. **Redémarrez la liseuse une fois.** Un nouveau plugin n'est détecté qu'au démarrage. Les modifications ultérieures
   des réglages sont prises en compte immédiatement.
5. Mettez la liseuse en veille. Avant l'extinction de l'écran, elle se connecte au WiFi, télécharge l'image et l'affiche.

<p align="center">
  <img src="docs/settings-page.png" alt="La carte de réglages dans le navigateur" width="360"><br>
  <em>La carte de réglages dans le navigateur (en anglais, allemand, français ou espagnol selon la langue du navigateur)</em>
</p>

### Ce que vous pouvez régler
| Réglage | Signification |
|---|---|
| Adresse du worker | L'adresse de votre worker, `https://…workers.dev`, sans barre oblique finale. |
| Lieu 1 et 2 | Nom (9 lettres au maximum) et coordonnées. Le lieu 1 est à gauche, le lieu 2 à droite. |
| Place pour les rendez-vous et les tâches | Qui passe en premier, voir ci-dessous. |
| Nombre | Le nombre N pour les choix « nombre fixe » (de 1 à 8). |

| Choix | Effet |
|---|---|
| Tous les rendez-vous d'abord | tous les rendez-vous du jour, les tâches reçoivent le reste |
| Nombre fixe de rendez-vous | exactement N rendez-vous, les tâches reçoivent le reste (par défaut, N = 3) |
| Nombre fixe de tâches | exactement N tâches, les rendez-vous reçoivent le reste |
| Toutes les tâches d'abord | toutes les tâches, les rendez-vous reçoivent le reste |

<p align="center">
  <img src="docs/layout-priorities.png" alt="Les quatre dispositions" width="100%"><br>
  <em>Les quatre dispositions (de gauche à droite) : tous les rendez-vous, 2 rendez-vous, 3 tâches, toutes les tâches</em>
</p>

### Sans la page de réglages (modifier le fichier)
Les réglages sont enregistrés dans `config.json`, dans le dossier du plugin (`/.crosspoint/plugins/calendar-sleep-screen/`).
Vous pouvez aussi le créer sur un ordinateur : copiez `config.example.json` en `config.json` et modifiez-le. Toutes les
valeurs doivent être du **texte entre guillemets**, y compris les nombres. Écrivez le nom du lieu encodé pour une URL
(`K%C3%B6ln` pour Köln).

## Plugin ou firmware personnalisé ?
| | **Ce plugin** (firmware officiel 2.0) | **Firmware personnalisé** (fork de la 1.6.5) |
|---|---|---|
| Flasher un firmware modifié | inutile | nécessaire |
| Mises à jour officielles | restent possibles | attendre une nouvelle version du fork |
| Réglages | page web dans un navigateur | menu sur l'appareil |
| Galerie d'images de batterie faible et seuil de 10 % | non (sous 20 %, l'appareil garde l'ancienne image) | oui |
| Base | CrossPoint 2.0 (version candidate) | CrossPoint 1.6.5 (stable) |

## Bon à savoir
- L'image est enregistrée sous **`/sleep.bmp`**. Un fichier `/sleep.bmp` existant (votre propre image de veille) est remplacé.
- La liseuse active le WiFi à la mise en veille, mais seulement avec un réseau enregistré et **au moins 20 % de batterie**,
  et elle attend environ 10 secondes au plus. En cas d'échec, l'image précédente reste.
- L'image est en allemand et utilise le fuseau horaire Europe/Berlin (c'est le worker qui la dessine ; voir son README pour
  le changer).
- L'adresse du worker est publique. Quiconque la connaît peut voir vos rendez-vous et vos tâches. Ne la partagez pas.
- Si l'image ne change pas : vérifiez que *Plugins* est sur *Enabled*, que *Sleep Screen* est sur *Custom*, que la liseuse a
  été redémarrée après l'installation, que `config.json` existe et que l'adresse du worker affiche une image dans un navigateur.

## Licence et sources
MIT, voir [LICENSE](LICENSE). Mentions sur les éléments et services tiers : [NOTICE.md](NOTICE.md).
Réalisé avec l'aide de Claude Code (Anthropic), vérifié et publié par le propriétaire du dépôt.
