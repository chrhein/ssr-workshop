# SSR-workshop

## Info før du begynner

Under mappen `app` finner du en mappe som heter `oppgave1` I Next.js fungerer alle mapper under "app" som egne ruter. Det betyr at hvis du vil se innholdet i en oppgave, må du navigere til http://localhost:3000/oppgave1. Next.js vil da automatisk vise deg innholdet i page.tsx-filen i oppgavemappen. Mappen kan inneholde mange filer og komponenter, men for at de skal rendres på en spesifikk rute, må komponenten være inkludert i page.tsx-filen eller være et barn av en komponent for den spesifikke ruten.

## Kom i gang

Først kjører man opp utviklingsserveren:

```bash
npm i
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i en nettleser for å se resultatet. (Viktig med http og ikke https! Enkelte nettlesere som Arc kan prøve å tvinge gjennom https her, og det vil dermed ikke fungere. Om dette blir et problem er løsningen å bytte nettleser til enten Safari eller Firefox).

## Oppgaver

### Oppgave 1

Åpne [oppgave1](http://localhost:3000/oppgave1) i nettleseren og inspiser HTML-responsen som blir sendt fra Next-serveren når du refresher siden.

💡 Inspect -> Network -> velg html-dokumentet i listen med nettverkskall

<details>
  <summary>Forklaring</summary>
  
 Du vil du forhåpentligvis se HTML som ligner på `src/app/oppgave1/oppgave1.tsx`, pluss noen scripts og diverse annet. 
  
</details>

### Oppgave 1

Hva skjer når du skrur av JavaScript?

💡 Inspect -> Settings -> Disable JavaScript

<details>
  <summary>Forklaring</summary>
  
 Siden fungerer som forventet. Vi har ikke noen interaktive elementer som er avhengige av JavaScript.
  
</details>

### Oppgave 3

Legg til state i komponenten `src/app/oppgave1/oppgave1.tsx`

Du kan f.eks. lage en counter med [useState](https://react.dev/reference/react/useState), der klikk på en knapp øker et tall på siden.

💡 Gå videre til neste oppgave når det vises en feilmelding, men les hva som står.

<details>
  <summary>Forklaring</summary>
  
 Det er ikke mulig å bruke state i server components, på grunn av at alt renderes server-side og ikke i nettleseren.
  
</details>

### Oppgave 4

På rad 1 i `src/app/oppgave1/oppgave1.tsx`, endre til `use client` i stedet for `use server` for å omvandle komponenten til en [client component](https://nextjs.org/docs/app/building-your-application/rendering/client-components). Fungerer counteren nå?

💡 Fjern async fra `async function Oppgave1()`

💡 Prøv å skru på/av Javascript. Hvorfor fungerer det annerledes?

<details>
  <summary>Forklaring</summary>
  
 På grunn av at komponenten nå er en client component vil det være mulig å legge til state. Men det vil bare være mulig å oppdatere state når JavaScript er skrudd på i nettleseren, på grunn av at der er JavaScript som oppdaterer state i nettleseren. På grunn av at NextJS pre-renderer den initielle staten vil du fortsatt se klientkomponeten. [Les mer om pre-rendering](https://nextjs.org/learn-pages-router/basics/data-fetching/pre-rendering).
  
</details>

### Oppgave 5

Flytt ut koden med counteren til en egen komponent. Denne komponenten skal være en klientkomponent (`use client`), for å gjøre den interaktiv. Ta i bruk den nye komponenten i `src/app/oppgave1.oppgave1.tsx`.

💡 Hva skjer nå om du endrer `oppgave1.tsx` til å være en serverkomponent?

## Klient-komponenter / server-komponenter:

For å rendre en klientkomponent i Next og i React må du skrive "use client" øverst i filen. Da blir alt innhold i filen OG dens barn rendret på klient.
Det vil si at dersom du vil at noe skal rendres på server side må page.tsx innenfor en rute ikke inneholde "use client". Da blir innholdet rendret på server og du kan velge hvilke barn som skal rendres på klient dersom du vil kombinere dette.

[Les mer om klientkomponenter her](https://nextjs.org/docs/app/building-your-application/rendering/client-components)

TIPS: Apier som useState, useEffect eller onClick ( og alle event handlers) er ikke tilgengelige på server. Bruk av disse i filer som ikke er markert med "use client" vil føre til en feilmelding. Dersom deler av komponenten din er avhengig av dette så må du flytte de delene ut til en klientkomponent eller gjøre hele komponenten til en klientkomponent.

## Skru av JavaScript

Mac: command + shift + p, skriv javascript i feltet og velg "disable javascript"

Firefox:

- Åpne developer-tools (f12)
- Naviger til settings
- Trykk på "Disable javascript"

![Disable javascript i Firefox](/public/firefox-disable-js.png)

Chrome:

- Åpne Chrome DevTools

- Deretter åpne command menu:
  - På MacOS, command + shift + P
  - På Window eller Linux, control + shift + p
- Skriv javascript, trykk enter for å kjøre kommandoen.

![Disable javascript i Chrome](/public/chrome-js-disable.png)
