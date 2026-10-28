/* SPDX-License-Identifier: MIT
 * Settings card for the "Calendar sleep screen" plugin (CrossPoint SD plugin).
 * Runs in the browser (phone or computer) on the reader's web Settings page and writes config.json
 * into this plugin's folder. The reader itself reads that file when it goes to sleep (see device.json).
 */
(function () {
  'use strict';

  var TEXT = {
    en: {
      title: 'Calendar sleep screen',
      intro: 'The reader downloads a picture from your worker when it goes to sleep. Enter the worker address and the two places for the weather.',
      server: 'Worker address', serverHint: 'e.g. https://my-worker.my-name.workers.dev (no slash at the end)',
      place1: 'Place 1 (left)', place2: 'Place 2 (right)', city: 'Name (max. 9 letters)', lat: 'Latitude', lon: 'Longitude',
      search: 'Search place', searching: 'Searching...', nothing: 'No place found.',
      searchFailed: 'Search not available (no internet?). Enter the coordinates by hand.',
      layout: 'Space for events and tasks', count: 'Number (1-8)',
      p_events: 'All events first, tasks get the rest', p_events_n: 'Fixed number of events, tasks get the rest',
      p_tasks_n: 'Fixed number of tasks, events get the rest', p_tasks: 'All tasks first, events get the rest',
      save: 'Save', preview: 'Open preview picture',
      saved: 'Saved. The next time the reader goes to sleep it uses these settings.',
      failed: 'Could not save: ', badServer: 'The worker address must start with https://',
      badCoords: 'Latitude (-90 to 90) and longitude (-180 to 180) are needed for both places.',
      badName: 'Please give each place a name.'
    },
    de: {
      title: 'Kalender-Ruhebildschirm',
      intro: 'Das Gerät lädt beim Einschlafen ein Bild von deinem Worker. Trage die Adresse des Workers und die beiden Orte für das Wetter ein.',
      server: 'Adresse des Workers', serverHint: 'z. B. https://mein-worker.mein-name.workers.dev (ohne Schrägstrich am Ende)',
      place1: 'Ort 1 (links)', place2: 'Ort 2 (rechts)', city: 'Name (höchstens 9 Buchstaben)', lat: 'Breitengrad', lon: 'Längengrad',
      search: 'Ort suchen', searching: 'Suche...', nothing: 'Kein Ort gefunden.',
      searchFailed: 'Suche nicht verfügbar (kein Internet?). Gib die Koordinaten von Hand ein.',
      layout: 'Platz für Termine und Aufgaben', count: 'Anzahl (1-8)',
      p_events: 'Alle Termine zuerst, Aufgaben bekommen den Rest', p_events_n: 'Feste Terminzahl, Aufgaben bekommen den Rest',
      p_tasks_n: 'Feste Aufgabenzahl, Termine bekommen den Rest', p_tasks: 'Alle Aufgaben zuerst, Termine bekommen den Rest',
      save: 'Speichern', preview: 'Vorschaubild öffnen',
      saved: 'Gespeichert. Beim nächsten Einschlafen verwendet das Gerät diese Einstellungen.',
      failed: 'Speichern fehlgeschlagen: ', badServer: 'Die Adresse des Workers muss mit https:// beginnen.',
      badCoords: 'Für beide Orte werden Breitengrad (-90 bis 90) und Längengrad (-180 bis 180) gebraucht.',
      badName: 'Bitte gib jedem Ort einen Namen.'
    },
    fr: {
      title: 'Écran de veille calendrier',
      intro: "L'appareil télécharge une image de votre worker quand il s'endort. Saisissez l'adresse du worker et les deux lieux pour la météo.",
      server: 'Adresse du worker', serverHint: 'p. ex. https://mon-worker.mon-nom.workers.dev (sans barre oblique finale)',
      place1: 'Lieu 1 (gauche)', place2: 'Lieu 2 (droite)', city: 'Nom (9 lettres max.)', lat: 'Latitude', lon: 'Longitude',
      search: 'Chercher le lieu', searching: 'Recherche...', nothing: 'Aucun lieu trouvé.',
      searchFailed: 'Recherche indisponible (pas de connexion internet ?). Saisissez les coordonnées à la main.',
      layout: 'Place pour les rendez-vous et les tâches', count: 'Nombre (1-8)',
      p_events: 'Tous les rendez-vous d\'abord, les tâches reçoivent le reste', p_events_n: 'Nombre fixe de rendez-vous, les tâches reçoivent le reste',
      p_tasks_n: 'Nombre fixe de tâches, les rendez-vous reçoivent le reste', p_tasks: 'Toutes les tâches d\'abord, les rendez-vous reçoivent le reste',
      save: 'Enregistrer', preview: "Ouvrir l'image d'aperçu",
      saved: "Enregistré. À la prochaine mise en veille, l'appareil utilisera ces réglages.",
      failed: "Échec de l'enregistrement : ", badServer: "L'adresse du worker doit commencer par https://",
      badCoords: 'La latitude (-90 à 90) et la longitude (-180 à 180) sont nécessaires pour les deux lieux.',
      badName: 'Veuillez donner un nom à chaque lieu.'
    },
    es: {
      title: 'Pantalla de reposo con calendario',
      intro: 'El dispositivo descarga una imagen de tu worker al dormirse. Introduce la dirección del worker y los dos lugares para el tiempo.',
      server: 'Dirección del worker', serverHint: 'p. ej. https://mi-worker.mi-nombre.workers.dev (sin barra final)',
      place1: 'Lugar 1 (izquierda)', place2: 'Lugar 2 (derecha)', city: 'Nombre (máx. 9 letras)', lat: 'Latitud', lon: 'Longitud',
      search: 'Buscar lugar', searching: 'Buscando...', nothing: 'No se encontró ningún lugar.',
      searchFailed: 'Búsqueda no disponible (¿sin internet?). Introduce las coordenadas a mano.',
      layout: 'Espacio para eventos y tareas', count: 'Número (1-8)',
      p_events: 'Primero todos los eventos, las tareas reciben el resto', p_events_n: 'Número fijo de eventos, las tareas reciben el resto',
      p_tasks_n: 'Número fijo de tareas, los eventos reciben el resto', p_tasks: 'Primero todas las tareas, los eventos reciben el resto',
      save: 'Guardar', preview: 'Abrir imagen de vista previa',
      saved: 'Guardado. La próxima vez que el dispositivo se duerma usará estos ajustes.',
      failed: 'No se pudo guardar: ', badServer: 'La dirección del worker debe empezar por https://',
      badCoords: 'Se necesitan latitud (-90 a 90) y longitud (-180 a 180) para los dos lugares.',
      badName: 'Pon un nombre a cada lugar.'
    }
  };

  var DEFAULTS = {
    server: '', city1: 'Berlin', lat1: '52.52', lon1: '13.405', city2: 'Frankfurt', lat2: '50.1109', lon2: '8.6821',
    priority: 'events_n', count: '3'
  };
  var PRIORITIES = ['events', 'events_n', 'tasks_n', 'tasks'];

  var language = String(navigator.language || 'en').slice(0, 2).toLowerCase();
  var t = TEXT[language] || TEXT.en;

  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (key) {
      if (key === 'text') node.textContent = props[key];
      else if (key === 'style') node.style.cssText = props[key];
      else node[key] = props[key];
    });
    (children || []).forEach(function (child) { if (child) node.appendChild(child); });
    return node;
  }

  function safeDecode(value) {
    try { return decodeURIComponent(value); } catch (e) { return value; }
  }

  CrossPoint.registerPlugin(function (container, api) {
    var inputStyle = 'width:100%;box-sizing:border-box;padding:8px;margin:2px 0 10px;font-size:16px;';
    var fields = {};

    function field(key, label, hint, extra) {
      var input = el('input', Object.assign({ type: 'text', style: inputStyle, id: 'cal-' + key }, extra || {}));
      fields[key] = input;
      return el('div', {}, [
        el('label', { text: label, htmlFor: 'cal-' + key, style: 'display:block;font-weight:600;' }),
        hint ? el('small', { text: hint, style: 'display:block;opacity:.7;' }) : null,
        input
      ]);
    }

    var status = el('p', { style: 'margin:10px 0;', role: 'status' });
    var previewLink = el('a', { text: t.preview, target: '_blank', rel: 'noopener', style: 'display:none;margin-left:12px;' });

    function placeBlock(n, heading) {
      var results = el('div', { style: 'margin:0 0 10px;' });
      var searchButton = el('button', { type: 'button', text: t.search, style: 'padding:8px 12px;margin:0 0 10px;' });
      searchButton.onclick = function () {
        var query = fields['city' + n].value.trim();
        if (!query) return;
        results.textContent = t.searching;
        fetch('https://geocoding-api.open-meteo.com/v1/search?count=5&format=json&language=' +
              encodeURIComponent(language) + '&name=' + encodeURIComponent(query))
          .then(function (r) { if (!r.ok) throw new Error(String(r.status)); return r.json(); })
          .then(function (data) {
            results.textContent = '';
            var list = (data && data.results) || [];
            if (!list.length) { results.textContent = t.nothing; return; }
            list.forEach(function (place) {
              var label = [place.name, place.admin1, place.country].filter(Boolean).join(', ');
              var pick = el('button', { type: 'button', text: label, style: 'display:block;width:100%;text-align:left;padding:8px;margin:2px 0;' });
              pick.onclick = function () {
                fields['city' + n].value = String(place.name || '').slice(0, 9);
                fields['lat' + n].value = String(Math.round(place.latitude * 10000) / 10000);
                fields['lon' + n].value = String(Math.round(place.longitude * 10000) / 10000);
                results.textContent = '';
              };
              results.appendChild(pick);
            });
          })
          .catch(function () { results.textContent = t.searchFailed; });
      };
      return el('fieldset', { style: 'margin:0 0 14px;padding:10px;' }, [
        el('legend', { text: heading, style: 'font-weight:600;' }),
        field('city' + n, t.city, null, { maxLength: 9 }),
        searchButton,
        results,
        field('lat' + n, t.lat, null, { inputMode: 'decimal' }),
        field('lon' + n, t.lon, null, { inputMode: 'decimal' })
      ]);
    }

    var prioritySelect = el('select', { id: 'cal-priority', style: inputStyle });
    PRIORITIES.forEach(function (p) { prioritySelect.appendChild(el('option', { value: p, text: t['p_' + p] })); });
    fields.priority = prioritySelect;

    var saveButton = el('button', { type: 'button', text: t.save, style: 'padding:10px 20px;font-size:16px;' });

    container.replaceChildren(
      el('h2', { text: t.title }),
      el('p', { text: t.intro }),
      field('server', t.server, t.serverHint, { type: 'url', inputMode: 'url', autocapitalize: 'off' }),
      placeBlock(1, t.place1),
      placeBlock(2, t.place2),
      el('label', { text: t.layout, htmlFor: 'cal-priority', style: 'display:block;font-weight:600;' }),
      prioritySelect,
      field('count', t.count, null, { type: 'number', min: '1', max: '8', inputMode: 'numeric' }),
      el('div', {}, [saveButton, previewLink]),
      status
    );

    function setValues(values) {
      Object.keys(DEFAULTS).forEach(function (key) {
        var value = values[key] === undefined || values[key] === null ? DEFAULTS[key] : String(values[key]);
        if (key === 'city1' || key === 'city2') value = safeDecode(value);
        fields[key].value = value;
      });
    }

    function parseCoordinate(raw, limit) {
      var value = Number(String(raw).trim().replace(',', '.'));
      return String(raw).trim() !== '' && isFinite(value) && Math.abs(value) <= limit ? value : null;
    }

    function collect() {
      var server = fields.server.value.trim().replace(/[?#].*$/, '').replace(/\/+$/, '');
      if (!/^https:\/\/[^\s/]+(\/[^\s]*)?$/i.test(server)) throw new Error(t.badServer);
      var config = { server: server };
      [1, 2].forEach(function (n) {
        var city = fields['city' + n].value.trim().slice(0, 9);
        var lat = parseCoordinate(fields['lat' + n].value, 90);
        var lon = parseCoordinate(fields['lon' + n].value, 180);
        if (!city) throw new Error(t.badName);
        if (lat === null || lon === null) throw new Error(t.badCoords);
        // The reader pastes these values into the download URL unchanged, so the name is stored URL-encoded
        // and the coordinates as text (the reader only substitutes text and whole numbers).
        config['city' + n] = encodeURIComponent(city);
        config['lat' + n] = String(lat);
        config['lon' + n] = String(lon);
      });
      var priority = PRIORITIES.indexOf(fields.priority.value) >= 0 ? fields.priority.value : DEFAULTS.priority;
      var count = Math.min(8, Math.max(1, parseInt(fields.count.value, 10) || 3));
      config.priority = priority;
      config.count = String(count);
      return config;
    }

    function previewUrl(config) {
      return config.server + '/?city1=' + config.city1 + '&lat1=' + config.lat1 + '&lon1=' + config.lon1 +
        '&city2=' + config.city2 + '&lat2=' + config.lat2 + '&lon2=' + config.lon2 +
        '&priority=' + config.priority + '&count=' + config.count;
    }

    saveButton.onclick = function () {
      var config;
      status.style.color = '';
      try { config = collect(); } catch (error) {
        status.style.color = '#c0392b';
        status.textContent = error.message;
        return;
      }
      var json = JSON.stringify(config, null, 2) + '\n';
      saveButton.disabled = true;
      api.writeFile(api.dir + '/config.json', btoa(unescape(encodeURIComponent(json))))
        .then(function () {
          status.textContent = t.saved;
          previewLink.href = previewUrl(config);
          previewLink.style.display = 'inline';
        })
        .catch(function (error) {
          status.style.color = '#c0392b';
          status.textContent = t.failed + ((error && error.message) || error);
        })
        .then(function () { saveButton.disabled = false; });
    };

    setValues(DEFAULTS);
    fetch(api.pluginFile('config.json'), { cache: 'no-store' })
      .then(function (r) { return r.ok ? r.json() : {}; })
      .then(function (values) { setValues(values || {}); })
      .catch(function () {});
  });
})();
