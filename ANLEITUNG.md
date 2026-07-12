# Deine Reise-Website — Einrichtung

Alles kostenlos, bis auf die Domain (~10–15 €/Jahr). Dauert einmalig ca. 30–45 Minuten.

## 1. Code zu GitHub hochladen
1. Kostenlosen Account auf github.com anlegen (falls noch nicht vorhanden).
2. Neues, **privates oder öffentliches** Repository erstellen, z. B. `reiseblog`.
3. Diesen Ordner (ohne `node_modules` und `_site`) in das Repository hochladen — entweder per GitHub Desktop (grafisch, kein Terminal nötig) oder per Drag & Drop über "Add file → Upload files" im Browser.

## 2. Bei Netlify verbinden
1. Kostenlosen Account auf netlify.com anlegen (Login mit GitHub geht am schnellsten).
2. "Add new site → Import an existing project" → GitHub-Repository auswählen.
3. Build-Einstellungen werden automatisch aus `netlify.toml` übernommen (Build Command: `npx @11ty/eleventy`, Publish directory: `_site`). Einfach auf "Deploy" klicken.
4. Nach ein bis zwei Minuten ist die Seite live unter einer Adresse wie `zufallsname.netlify.app`.

## 3. Formular-Login aktivieren (Decap CMS)
Damit du unter `deine-seite.netlify.app/admin/` per Formular neue Einträge schreiben kannst:
1. Im Netlify-Dashboard: **Site configuration → Identity → Enable Identity**.
2. Unter Identity → **Registration**: auf "Invite only" stellen (damit sich niemand außer dir anmelden kann).
3. Unter Identity → **Services**: **Git Gateway aktivieren**.
4. Unter Identity → **Invite users**: dich selbst per E-Mail einladen. Du bekommst eine Mail, setzt ein Passwort — fertig.
5. Ab jetzt: `deine-seite.netlify.app/admin/` öffnen, einloggen, neuen Journal-Eintrag per Formular ausfüllen (Titel, Etappe, Ort, Datum, Bild, optional Video-Link, Text), auf "Publish" klicken. Netlify baut die Seite automatisch neu — nach ca. 1 Minute ist der Eintrag live.

## 4. Eigene Domain verbinden
1. Domain bei einem Registrar kaufen (z. B. Namecheap, IONOS, Google Domains-Nachfolger Squarespace Domains).
2. Im Netlify-Dashboard: **Domain management → Add a domain** → deine Domain eintragen.
3. Netlify zeigt dir die nötigen DNS-Einträge (meist zwei), die du beim Domain-Registrar hinterlegst. Nach ein paar Stunden ist die Domain aktiv, inklusive kostenlosem HTTPS.

## Videos
Kurze Videos direkt hochzuladen sprengt schnell den kostenlosen Speicher. Besser: Video als "nicht gelistet" auf YouTube hochladen, die **Embed-URL** kopieren (z. B. `https://www.youtube-nocookie.com/embed/VIDEO_ID`) und im Formular beim Feld "Video-Link" einfügen. Leser sehen das Video direkt eingebettet, ohne YouTube-Konto zu brauchen.

## Lokal testen (optional)
Falls du am Rechner Änderungen machen willst, bevor du sie hochlädst:
```
npm install
npx @11ty/eleventy --serve
```
Seite läuft dann unter `localhost:8080`.
