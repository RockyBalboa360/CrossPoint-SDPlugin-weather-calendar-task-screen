[English](README.md) · [Deutsch](README.de.md) · [Français](README.fr.md) · **Español**

# Pantalla de reposo con calendario como plugin SD para CrossPoint 2.0 (Xteink X4 Pro)

Tu lector muestra tu día como pantalla de reposo: el tiempo de dos lugares, los eventos de hoy de Google Calendar y las
tareas de hoy de Todoist. **Este plugin funciona con el firmware oficial CrossPoint 2.0**, así que no necesitas un
firmware modificado.

<p align="center">
  <img src="docs/example-display.png" alt="Ejemplo: tiempo de dos lugares, eventos y tareas (datos de muestra)" width="320"><br>
  <em>Ejemplo con datos de muestra, tal como aparece en la pantalla (480x800, escala de grises)</em>
</p>

> Plugin comunitario no oficial. Sin relación con el proyecto CrossPoint Reader ni con Xteink.
> Aún no probado en un dispositivo real: cuéntanos qué funciona y qué no. Úsalo bajo tu propia responsabilidad, sin
> ninguna garantía.

**Tres partes, elige lo que te convenga:**
- ☁️ **Worker** (siempre necesario, dibuja la imagen): [worker-for-crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/worker-for-crosspoint-calendar-task-screen)
- 🔌 **Este plugin**: para el firmware oficial CrossPoint 2.0, sin flashear.
- 🧩 **Alternativa: firmware propio** con menús en el dispositivo y una galería de imágenes de batería baja:
  [crosspoint-calendar-task-screen](https://github.com/RockyBalboa360/crosspoint-calendar-task-screen/tree/feature/calendar-sleep-screen)
  (fork de CrossPoint 1.6.5, [última versión](https://github.com/RockyBalboa360/crosspoint-calendar-task-screen/releases/latest))

## Cómo funciona (en palabras sencillas)
1. Un pequeño **worker** en internet reúne el tiempo, los eventos y las tareas y los dibuja en una imagen.
   Lo configuras una vez; la explicación está en su README.
2. Este **plugin** es una carpeta diminuta en la tarjeta SD del lector. Le dice al dispositivo: «Cuando te duermas,
   descarga la imagen de esta dirección y guárdala como `/sleep.bmp`.»
3. El modo de pantalla de reposo **Custom** muestra `/sleep.bmp`. Así, la imagen es siempre la de la última vez que el
   lector se durmió.
4. La dirección de tu worker y tus dos lugares los indicas en una **página de ajustes** que abres en el navegador del
   móvil o del ordenador. No hay que editar archivos.

## Qué necesitas
- Una Xteink X4 Pro con **CrossPoint 2.0** (en el momento de escribir esto, 2.0.0 es una versión candidata, véanse las
  [versiones](https://github.com/crosspoint-reader/crosspoint-reader/releases)). En la 1.6.5 no existen los plugins.
- Tu propio **worker**, funcionando y mostrando una imagen al abrir su dirección en un navegador.
- Una red WiFi guardada en el lector.

## Instalación
**Vía A: con Plugin Hub (recomendada)**
1. En el lector: *Settings → Connectivity → Plugins → Enabled*.
2. *Home → Plugins → Plugin Hub → Install* (el dispositivo lo descarga por WiFi; solo hace falta una vez).
3. Abre Plugin Hub, elige **Community Plugins**, selecciona **Calendar sleep screen** y pulsa *Install*.
   (El plugin aparece ahí unas horas después de que el propietario del repositorio publique una versión.)

**Vía B: a mano**
1. Descarga este repositorio (*Code → Download ZIP*) o la última [versión](https://github.com/RockyBalboa360/CrossPoint-SDPlugin-weather-calendar-task-screen/releases/latest) y descomprímelo.
2. Copia la carpeta `calendar-sleep-screen.crosspoint-plugin` en la tarjeta SD como **`/plugins/calendar-sleep-screen`**
   (cámbiale el nombre, sin la parte `.crosspoint-plugin`).
3. En el lector: *Settings → Connectivity → Plugins → Enabled*.

## Configuración (una sola vez)
1. *Settings → Display → Sleep Screen → **Custom***.
2. En el lector abre **File Transfer** en la pantalla de inicio y elige *Join a Network* (o *Create Hotspot*). En el
   navegador del móvil o del ordenador abre la dirección que muestra el lector, por ejemplo
   `http://crosspoint.local/settings`.
3. En esa página busca la tarjeta **Calendar sleep screen**, escribe la dirección de tu worker y tus dos lugares y
   pulsa **Guardar**. El botón *Buscar lugar* encuentra las coordenadas por ti (necesita internet en el móvil o el
   ordenador; en modo punto de acceso, introduce las coordenadas a mano).
4. **Reinicia el lector una vez.** Un plugin nuevo solo se detecta al arrancar. Los cambios posteriores de los ajustes
   se aplican al instante.
5. Deja que el lector se duerma. Antes de apagar la pantalla se conecta al WiFi, descarga la imagen y la muestra.

<p align="center">
  <img src="docs/settings-page.png" alt="La tarjeta de ajustes en el navegador" width="360"><br>
  <em>La tarjeta de ajustes en el navegador (en inglés, alemán, francés o español según el idioma del navegador)</em>
</p>

### Qué puedes ajustar
| Ajuste | Significado |
|---|---|
| Dirección del worker | La dirección de tu worker, `https://…workers.dev`, sin barra final. |
| Lugar 1 y 2 | Nombre (hasta 9 letras) y coordenadas. El lugar 1 va a la izquierda, el 2 a la derecha. |
| Espacio para eventos y tareas | Quién recibe el espacio primero, véase abajo. |
| Número | El número N para las opciones de «número fijo» (de 1 a 8). |

| Opción | Efecto |
|---|---|
| Primero todos los eventos | todos los eventos de hoy, las tareas reciben el resto |
| Número fijo de eventos | exactamente N eventos, las tareas reciben el resto (por defecto, N = 3) |
| Número fijo de tareas | exactamente N tareas, los eventos reciben el resto |
| Primero todas las tareas | todas las tareas, los eventos reciben el resto |

<p align="center">
  <img src="docs/layout-priorities.png" alt="Los cuatro diseños" width="100%"><br>
  <em>Los cuatro diseños (de izquierda a derecha): todos los eventos, 2 eventos, 3 tareas, todas las tareas</em>
</p>

### Sin la página de ajustes (editar el archivo)
Los ajustes se guardan en `config.json`, en la carpeta del plugin (`/.crosspoint/plugins/calendar-sleep-screen/`).
También puedes crearlo en un ordenador: copia `config.example.json` como `config.json` y edítalo. Todos los valores
deben ser **texto entre comillas**, también los números. Escribe el nombre del lugar codificado para URL
(`K%C3%B6ln` para Köln).

## ¿Plugin o firmware propio?
| | **Este plugin** (firmware oficial 2.0) | **Firmware propio** (fork de la 1.6.5) |
|---|---|---|
| Flashear un firmware modificado | no hace falta | hace falta |
| Actualizaciones oficiales | siguen siendo posibles | esperar una nueva compilación del fork |
| Ajustes | página web en un navegador | menú en el dispositivo |
| Galería de imágenes de batería baja y límite del 10 % | no (por debajo del 20 % el lector conserva la imagen anterior) | sí |
| Base | CrossPoint 2.0 (versión candidata) | CrossPoint 1.6.5 (estable) |

## Conviene saber
- La imagen se guarda como **`/sleep.bmp`**. Un `/sleep.bmp` existente (tu propia imagen de reposo) se sustituye.
- El lector activa el WiFi al dormirse, pero solo con una red guardada y **al menos un 20 % de batería**, y espera como
  máximo unos 10 segundos. Si falla, se conserva la imagen anterior.
- La imagen está en alemán y usa la zona horaria Europe/Berlin (la dibuja el worker; en su README se explica cómo cambiarlo).
- La dirección del worker es pública. Quien la conozca puede ver tus eventos y tareas. No la compartas.
- Si la imagen no cambia: comprueba que *Plugins* esté en *Enabled*, *Sleep Screen* en *Custom*, que el lector se
  reinició tras la instalación, que exista `config.json` y que la dirección del worker muestre una imagen en un navegador.

## Licencia y fuentes
MIT, véase [LICENSE](LICENSE). Notas sobre terceros: [NOTICE.md](NOTICE.md).
Desarrollado con la ayuda de Claude Code (Anthropic), revisado y publicado por el propietario del repositorio.
