Calendar sleep screen (SD plugin)

When the reader goes to sleep it downloads a picture from YOUR worker (weather for two places, today's calendar events and today's Todoist tasks) and shows it as the sleep screen.

SETUP (once)
1. Settings > Connectivity > Plugins: Enabled.
2. Set Settings > Display > Sleep Screen to "Custom".
3. Home > File Transfer > Join a Network (or Create Hotspot). In a browser on a phone or computer open the address shown on the reader, e.g. http://crosspoint.local/settings. The card "Calendar sleep screen" is where you enter your worker address, your two places and the layout. Press Save.
   Without a browser: copy config.example.json to config.json in this plugin's folder and edit it on a computer.
4. Restart the reader once after installing the plugin (it is only picked up at start). Later changes of the settings apply right away.

NOTES
- The picture is saved as /sleep.bmp. An existing /sleep.bmp is replaced.
- The reader needs a saved WiFi network and at least 20 % battery at sleep time. Otherwise the previous picture stays.
- The worker address is public: anyone who knows it can see your events and tasks.

Worker, documentation and alternative (own firmware): https://github.com/RockyBalboa360/CrossPoint-SDPlugin-weather-calendar-task-screen
