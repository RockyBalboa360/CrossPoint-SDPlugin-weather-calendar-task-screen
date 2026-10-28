# Notice

This is an unofficial community plugin. It has no connection to the CrossPoint Reader organization or to Xteink.

## What this repository contains
A small SD-card plugin for [CrossPoint Reader](https://github.com/crosspoint-reader/crosspoint-reader) 2.0 (`device.json`, `manifest.json`, `plugin.js`, texts). It contains no CrossPoint code. It uses the plugin interfaces that CrossPoint documents in
[`docs/sd-plugins.md`](https://github.com/crosspoint-reader/crosspoint-reader/blob/2.0.0rc/docs/sd-plugins.md) and
[`docs/plugin-events.md`](https://github.com/crosspoint-reader/crosspoint-reader/blob/2.0.0rc/docs/plugin-events.md)
(CrossPoint Reader is MIT licensed, Copyright (c) 2025 CrossPoint Reader organization).

## Services used
- **Open-Meteo Geocoding API** (<https://open-meteo.com/>): the optional place search in the settings card, called from your own browser. Open-Meteo data is licensed CC BY 4.0 and free for non-commercial use.
- The picture itself comes from **your own worker**, see
  [worker-for-crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/worker-for-crosspoint-calendar-task-screen)
  and its NOTICE.md (weather data of the Deutscher Wetterdienst via Bright Sky and Open-Meteo, Google Calendar, Todoist).
- "Xteink", "CrossPoint", "Google", "Todoist" and "Cloudflare" are names of their respective owners and are used here only descriptively.

## License
MIT, see [LICENSE](LICENSE). Copyright (c) 2026 RockyBalboa360.

## How it was made
Written with the help of Claude Code (Anthropic), reviewed and published by the repository owner.
