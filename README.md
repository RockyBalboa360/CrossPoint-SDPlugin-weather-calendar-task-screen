**English** · [Deutsch](README.de.md) · [Français](README.fr.md) · [Español](README.es.md)

# Calendar sleep screen as an SD plugin for CrossPoint 2.0 (Xteink X4 Pro)

Your reader shows your day as its sleep screen: weather for two places, today's Google Calendar events and
today's Todoist tasks. **This plugin works with the official CrossPoint firmware 2.0**, so you do not need a
modified firmware.

<p align="center">
  <img src="docs/example-display.png" alt="Example: weather for two places, events and tasks (placeholder data)" width="320"><br>
  <em>Example with placeholder data, exactly as it appears on the display (480x800, grayscale)</em>
</p>

> Unofficial community plugin. No connection to the CrossPoint Reader project or to Xteink.
> Not tested on a real device yet: please report what works and what does not. Use at your own risk, no warranty.

**Three parts, pick what fits you:**
- ☁️ **Worker** (needed in every case, it draws the picture): [worker-for-crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/worker-for-crosspoint-calendar-task-screen)
- 🔌 **This plugin**: for the official CrossPoint 2.0 firmware, no flashing.
- 🧩 **Alternative: own firmware** with menus on the device and a low battery picture gallery:
  [crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/crosspoint-calendar-task-screen/tree/feature/calendar-sleep-screen)
  (CrossPoint 1.6.5 fork, [latest release](https://github.com/RockyBalboa360/crosspoint-calendar-task-screen/releases/latest))

## How it works (in plain words)
1. A small **worker** on the internet collects weather, calendar and tasks and draws them as a picture.
   You set it up once, the worker's README explains how.
2. This **plugin** is a tiny folder on the reader's SD card. It tells the reader: "When you go to sleep,
   download the picture from this address and save it as `/sleep.bmp`."
3. The reader's sleep screen mode **Custom** shows `/sleep.bmp`. So the picture you see is always the one
   from the last time the reader went to sleep.
4. You tell the plugin your worker address and your two places on a **settings page** that you open in the
   browser of your phone or computer. No files to edit.

## What you need
- An Xteink X4 Pro with **CrossPoint 2.0** (at the time of writing 2.0.0 is a release candidate,
  see the [releases](https://github.com/crosspoint-reader/crosspoint-reader/releases)). Plugins do not exist in 1.6.5.
- Your own **worker**, running and showing a picture when you open its address in a browser.
- A saved WiFi network on the reader.

## Installation
**Way A: with Plugin Hub (recommended)**
1. On the reader: *Settings → Connectivity → Plugins → Enabled*.
2. *Home → Plugins → Plugin Hub → Install* (the reader downloads it over WiFi; only needed once).
3. Open Plugin Hub, choose **Community Plugins**, select **Calendar sleep screen** and press *Install*.
   (The plugin appears there a few hours after the repository owner publishes a release.)

**Way B: by hand**
1. Download this repository (*Code → Download ZIP*) or the latest [release](https://github.com/RockyBalboa360/CrossPoint-SDPlugin-weather-calendar-task-screen/releases/latest) and unpack it.
2. Copy the folder `calendar-sleep-screen.crosspoint-plugin` onto the SD card as **`/plugins/calendar-sleep-screen`**
   (rename it, without the `.crosspoint-plugin` part).
3. On the reader: *Settings → Connectivity → Plugins → Enabled*.

## Setup (once)
1. *Settings → Display → Sleep Screen → **Custom***.
2. On the reader open **File Transfer** on the Home screen, choose *Join a Network* (or *Create Hotspot*).
   In a browser on your phone or computer open the address shown on the reader, for example
   `http://crosspoint.local/settings`.
3. On that page find the card **Calendar sleep screen**, enter your worker address and your two places and
   press **Save**. The button *Search place* looks up the coordinates for you (this needs internet on your
   phone or computer; in hotspot mode enter the coordinates by hand).
4. **Restart the reader once.** A new plugin is only noticed at start. Later changes of the settings apply
   right away.
5. Put the reader to sleep. Before the screen switches off it connects to WiFi, downloads the picture and shows it.

<p align="center">
  <img src="docs/settings-page.png" alt="The settings card in the browser" width="360"><br>
  <em>The settings card in the browser</em>
</p>

### What you can set
| Setting | Meaning |
|---|---|
| Worker address | The address of your worker, `https://…workers.dev`, without a slash at the end. |
| Place 1 and 2 | Name (up to 9 letters) and coordinates. Place 1 is shown left, place 2 right. |
| Space for events and tasks | Who gets the space first, see below. |
| Number | The number N for the "fixed number" choices (1 to 8). |

| Choice | Effect |
|---|---|
| All events first | all of today's events, tasks get the rest |
| Fixed number of events | exactly N events, tasks get the rest (default, N = 3) |
| Fixed number of tasks | exactly N tasks, events get the rest |
| All tasks first | all tasks, events get the rest |

<p align="center">
  <img src="docs/layout-priorities.png" alt="The four layouts" width="100%"><br>
  <em>The four layouts (left to right): all events, 2 events, 3 tasks, all tasks</em>
</p>

### Without the settings page (editing the file)
The settings are stored in `config.json` in the plugin's folder (`/.crosspoint/plugins/calendar-sleep-screen/`).
You can also create it on a computer: copy `config.example.json` to `config.json` and edit it. All values must be
**text in quotation marks**, including the numbers. Write the place name URL-encoded (`K%C3%B6ln` for Köln).

## Plugin or own firmware?
| | **This plugin** (official firmware 2.0) | **Own firmware** (fork of 1.6.5) |
|---|---|---|
| Flashing a modified firmware | not needed | needed |
| Official updates | stay possible | wait for a new build of the fork |
| Settings | web page in a browser | menu on the device |
| Low battery picture gallery and 10 % guard | no (below 20 % the reader keeps the old picture) | yes |
| Based on | CrossPoint 2.0 (release candidate) | CrossPoint 1.6.5 (stable) |

## Good to know
- The picture is saved as **`/sleep.bmp`**. An existing `/sleep.bmp` (your own sleep picture) is replaced.
- The reader brings WiFi up when it goes to sleep, but only with a saved network and **at least 20 % battery**,
  and it waits at most about 10 seconds. If that fails, the previous picture stays.
- The picture is in German and uses the time zone Europe/Berlin (the worker draws it; see its README to change that).
- The worker address is public. Anyone who knows it can see your events and tasks. Do not share it.
- If the picture does not change: check *Plugins* is *Enabled*, *Sleep Screen* is *Custom*, the reader was
  restarted after installing, `config.json` exists, and the worker address shows a picture in a browser.

## License and sources
MIT, see [LICENSE](LICENSE). Notes on third-party parts and services: [NOTICE.md](NOTICE.md).
Developed with the help of Claude Code (Anthropic), reviewed and published by the repository owner.
