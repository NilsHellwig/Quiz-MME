// Quiz-Daten
const htmlQuiz = {
  title: "Quiz: HTML",
  availableDate: "2025-04-27",
  questions: [
    // Einfache Fragen
    {
      question: "Wofür steht HTML?",
      answers: [
        { text: "HyperText Markup Language", correct: true },
        { text: "HyperTransfer Main Language", correct: false },
        { text: "Home Tool Markup Language", correct: false },
        { text: "Hyperlink Management Language", correct: false },
      ],
    },
    {
      question: "Welche Dateiendung hat eine HTML-Datei?",
      answers: [
        { text: ".htm oder .html", correct: true },
        { text: ".web oder .doc", correct: false },
        { text: ".xml oder .php", correct: false },
        { text: ".css oder .js", correct: false },
      ],
    },
    {
      question: "Was ist die Standard-Startseite auf einem Server?",
      answers: [
        { text: "index.html", correct: true },
        { text: "home.html", correct: false },
        { text: "start.htm", correct: false },
        { text: "main.php", correct: false },
      ],
    },
    {
      question: "Welches Tag benutzt man für Absätze?",
      answers: [
        { text: "<p>", correct: true },
        { text: "<div>", correct: false },
        { text: "<h1>", correct: false },
        { text: "<br>", correct: false },
      ],
    },

    // Mittelschwere Fragen
    {
      question: "Welches Attribut macht einen Link in einem neuen Tab auf?",
      answers: [
        { text: 'target="_blank"', correct: true },
        { text: 'newtab="yes"', correct: false },
        { text: 'href="new"', correct: false },
        { text: 'blank="true"', correct: false },
      ],
    },
    {
      question: "Was gibt das src-Attribut bei einem <img> Tag an?",
      answers: [
        { text: "Die Quelle des Bildes", correct: true },
        { text: "Die Bildbeschreibung", correct: false },
        { text: "Die Bildgröße", correct: false },
        { text: "Den Dateityp des Bildes", correct: false },
      ],
    },
    {
      question: "Was bewirkt das <strong> Tag in HTML?",
      answers: [
        { text: "Text wird semantisch wichtig und fett dargestellt", correct: true },
        { text: "Text wird kursiv angezeigt", correct: false },
        { text: "Text wird gelöscht", correct: false },
        { text: "Text wird durchgestrichen", correct: false },
      ],
    },
    {
      question: "Welches Element benutzt man, um Metadaten in HTML zu speichern?",
      answers: [
        { text: "<head>", correct: true },
        { text: "<meta-data>", correct: false },
        { text: "<header>", correct: false },
        { text: "<info>", correct: false },
      ],
    },
    {
      question: "Wofür wird das <label> Element hauptsächlich verwendet?",
      answers: [
        { text: "Beschriftung von Formularfeldern", correct: true },
        { text: "Markieren von Text", correct: false },
        { text: "Formatieren von Bildern", correct: false },
        { text: "Verlinkung zu anderen Seiten", correct: false },
      ],
    },

    // Schwierige Fragen
    {
      question: "Was bewirkt das Attribut 'method=\"POST\"' bei Formularen?",
      answers: [
        { text: "Daten werden im HTTP-Body an den Server gesendet", correct: true },
        { text: "Daten werden in der URL angezeigt", correct: false },
        { text: "Formular wird im selben Tab neu geladen", correct: false },
        { text: "Formulardaten werden automatisch gespeichert", correct: false },
      ],
    },
    {
      question: "Welche Aussage zu Vektorgrafiken (z.B. SVG) ist korrekt?",
      answers: [
        { text: "Sie können ohne Qualitätsverlust skaliert werden", correct: true },
        { text: "Sie bestehen aus Pixeln", correct: false },
        { text: "Sie verlieren bei Vergrößerung an Qualität", correct: false },
        { text: "Sie sind nicht gut für Icons geeignet", correct: false },
      ],
    },
    {
      question: "Was ist der Unterschied zwischen dem id und class Attribut in HTML?",
      answers: [
        { text: "id ist einzigartig, class kann mehrfach vergeben werden", correct: true },
        { text: "class ist einzigartig, id kann mehrfach vergeben werden", correct: false },
        { text: "Beide können beliebig oft vergeben werden", correct: false },
        { text: "Beide müssen einzigartig sein", correct: false },
      ],
    },
    {
      question: "Welche Option beschreibt das <section> Element am besten?",
      answers: [
        { text: "Definiert einen thematisch zusammenhängenden Bereich", correct: true },
        { text: "Erzeugt eine Liste von Navigationselementen", correct: false },
        { text: "Zeigt eine Fußzeile an", correct: false },
        { text: "Formatiert Überschriften fett", correct: false },
      ],
    },
    {
      question: "Wie fügt man eine externe CSS-Datei in HTML ein?",
      answers: [
        { text: '<link rel="stylesheet" href="style.css">', correct: true },
        { text: '<style href="style.css">', correct: false },
        { text: '<css link="style.css">', correct: false },
        { text: '<script src="style.css">', correct: false },
      ],
    },
    {
      question: "Welches HTML-Tag wird verwendet, um eine Zeile in einer Liste darzustellen?",
      answers: [
        { text: "<li>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<ol>", correct: false },
        { text: "<dl>", correct: false },
      ],
    },
    {
      question: "Wie fügt man einen Zeilenumbruch in HTML ein?",
      answers: [
        { text: "<br>", correct: true },
        { text: "<lb>", correct: false },
        { text: "<newline>", correct: false },
        { text: "<break>", correct: false },
      ],
    },
    {
      question: "Welche HTML-Tags definieren eine geordnete Liste?",
      answers: [
        { text: "<ol>", correct: true },
        { text: "<ul>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "Welche HTML-Tags definieren eine ungeordnete Liste?",
      answers: [
        { text: "<ul>", correct: true },
        { text: "<ol>", correct: false },
        { text: "<li>", correct: false },
        { text: "<list>", correct: false },
      ],
    },
    {
      question: "Wie lautet das HTML-Tag für ein Eingabefeld?",
      answers: [
        { text: "<input>", correct: true },
        { text: "<entry>", correct: false },
        { text: "<textfield>", correct: false },
        { text: "<forminput>", correct: false },
      ],
    },
    {
      question: "Was bewirkt das 'alt'-Attribut bei einem Bild?",
      answers: [
        { text: "Es zeigt einen alternativen Text an, wenn das Bild nicht geladen werden kann", correct: true },
        { text: "Es bestimmt die Bildgröße", correct: false },
        { text: "Es verlinkt das Bild", correct: false },
        { text: "Es speichert das Bild lokal", correct: false },
      ],
    },
    {
      question: "Welche HTML-Tags verwendet man, um Texte fett zu machen?",
      answers: [
        { text: "<b> oder <strong>", correct: true },
        { text: "<f> oder <bold>", correct: false },
        { text: "<strong> oder <h1>", correct: false },
        { text: "<p> oder <u>", correct: false },
      ],
    },
    {
      question: "Wofür wird das <em> Tag verwendet?",
      answers: [
        { text: "Für betonten Text (kursiv mit Bedeutung)", correct: true },
        { text: "Für fetten Text", correct: false },
        { text: "Für Überschriften", correct: false },
        { text: "Für Bilder", correct: false },
      ],
    },
    {
      question: "Was passiert, wenn man zusätzliche Leerzeichen in HTML einfügt?",
      answers: [
        { text: "Der Browser ignoriert sie", correct: true },
        { text: "Der Text wird breiter", correct: false },
        { text: "Es entstehen zusätzliche Absätze", correct: false },
        { text: "Es wird ein Zeilenumbruch erzeugt", correct: false },
      ],
    },
    {
      question: "Welcher HTML-Tag wird verwendet, um Kommentare zu erstellen?",
      answers: [
        { text: "<!-- Kommentar -->", correct: true },
        { text: "// Kommentar", correct: false },
        { text: "<comment>", correct: false },
        { text: "# Kommentar", correct: false },
      ],
    },
    {
      question: "Was bewirkt das Attribut 'href' in einem <a> Tag?",
      answers: [
        { text: "Es definiert das Ziel des Links", correct: true },
        { text: "Es definiert den Text des Links", correct: false },
        { text: "Es öffnet einen neuen Tab", correct: false },
        { text: "Es legt die Farbe des Links fest", correct: false },
      ],
    },
    {
      question: "Welche Angabe beschreibt einen relativen Link korrekt?",
      answers: [
        { text: '<a href="about.html">Über uns</a>', correct: true },
        { text: '<a src="about.html">Über uns</a>', correct: false },
        { text: '<link href="about.html">Über uns</link>', correct: false },
        { text: '<a path="about.html">Über uns</a>', correct: false },
      ],
    },
    {
      question: "Was bedeutet das Attribut 'width' bei Bildern?",
      answers: [
        { text: "Bestimmt die Breite des Bildes in Pixeln", correct: true },
        { text: "Bestimmt die Höhe des Bildes in Pixeln", correct: false },
        { text: "Bestimmt die Bildqualität", correct: false },
        { text: "Verlinkt das Bild", correct: false },
      ],
    },
    {
      question: "Was macht das <div> Tag?",
      answers: [
        { text: "Gruppiert Inhaltselemente", correct: true },
        { text: "Verlinkt zu einer neuen Seite", correct: false },
        { text: "Erstellt eine Überschrift", correct: false },
        { text: "Fügt ein Formular hinzu", correct: false },
      ],
    },
    {
      question: "Was passiert, wenn man mehrere Klassen zu einem HTML-Element hinzufügt?",
      answers: [
        { text: "Sie werden durch Leerzeichen getrennt angegeben", correct: true },
        { text: "Man darf nur eine Klasse angeben", correct: false },
        { text: "Sie werden durch Komma getrennt", correct: false },
        { text: "Nur die erste Klasse wird angewendet", correct: false },
      ],
    },
    {
      question: "Wie wird ein Favicon zu einer Webseite hinzugefügt?",
      answers: [
        { text: '<link rel="icon" href="favicon.ico">', correct: true },
        { text: '<img rel="favicon" src="favicon.ico">', correct: false },
        { text: '<favicon src="favicon.ico">', correct: false },
        { text: '<meta favicon="favicon.ico">', correct: false },
      ],
    },
  ],
};

const cssQuiz = {
  title: "Quiz: CSS",
  availableDate: "2025-04-27",
  questions: [
    // Einfache Fragen
    {
      question: "Wofür steht CSS?",
      answers: [
        { text: "Cascading Style Sheets", correct: true },
        { text: "Creative Style Sheets", correct: false },
        { text: "Colorful Style Sheets", correct: false },
        { text: "Computer Style Sheets", correct: false },
      ],
    },
    {
      question: "Welche Dateiendung hat eine CSS-Datei?",
      answers: [
        { text: ".css", correct: true },
        { text: ".html", correct: false },
        { text: ".js", correct: false },
        { text: ".xml", correct: false },
      ],
    },
    {
      question: "Welcher Selektor wählt ausschließlich alle <p>-Elemente auf einer Seite aus?",
      answers: [
        { text: "p {}", correct: true },
        { text: "#p {}", correct: false },
        { text: ".p {}", correct: false },
        { text: "* {}", correct: false },
      ],
    },
    {
      question: "Welcher Selektor wählt ein Element mit der ID 'header' aus?",
      answers: [
        { text: "#header {}", correct: true },
        { text: ".header {}", correct: false },
        { text: "header {}", correct: false },
        { text: "*[id='header'] {}", correct: false },
      ],
    },
    {
      question: "Welcher Selektor wählt alle Elemente mit der Klasse 'button' aus?",
      answers: [
        { text: ".button {}", correct: true },
        { text: "#button {}", correct: false },
        { text: "button {}", correct: false },
        { text: "*[class='button'] {}", correct: false },
      ],
    },
    {
      question: "Welcher Selektor wählt alle HTML-Elemente auf einer Seite aus?",
      answers: [
        { text: "* {}", correct: true },
        { text: "all {}", correct: false },
        { text: ".all {}", correct: false },
        { text: "#all {}", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Hintergrundfarbe eines Elements zu definieren?",
      answers: [
        { text: "background-color", correct: true },
        { text: "bg-color", correct: false },
        { text: "color", correct: false },
        { text: "background", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Schriftgröße eines Elements zu definieren?",
      answers: [
        { text: "font-size", correct: true },
        { text: "text-size", correct: false },
        { text: "size", correct: false },
        { text: "font-weight", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die horizontale Ausrichtung eines Textes zu definieren?",
      answers: [
        { text: "text-align", correct: true },
        { text: "align-text", correct: false },
        { text: "text-position", correct: false },
        { text: "align", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um den Abstand außerhalb eines Elements zu definieren?",
      answers: [
        { text: "margin", correct: true },
        { text: "padding", correct: false },
        { text: "border", correct: false },
        { text: "spacing", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um den Innenabstand eines Elements zu definieren?",
      answers: [
        { text: "padding", correct: true },
        { text: "margin", correct: false },
        { text: "inner-spacing", correct: false },
        { text: "border-spacing", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Breite eines Elements zu definieren?",
      answers: [
        { text: "width", correct: true },
        { text: "size", correct: false },
        { text: "box-width", correct: false },
        { text: "element-width", correct: false },
      ],
    },

    // Mittlere Fragen
    {
      question: "Welche CSS-Einheit ist relativ zur Schriftgröße des Elements?",
      answers: [
        { text: "em", correct: true },
        { text: "px", correct: false },
        { text: "rem", correct: false },
        { text: "vw", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Transparenz eines Elements zu definieren?",
      answers: [
        { text: "opacity", correct: true },
        { text: "transparency", correct: false },
        { text: "alpha", correct: false },
        { text: "visibility", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um ein Hintergrundbild zu definieren?",
      answers: [
        { text: "background-image", correct: true },
        { text: "bg-image", correct: false },
        { text: "image", correct: false },
        { text: "background-pic", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Wiederholung eines Hintergrundbildes zu steuern?",
      answers: [
        { text: "background-repeat", correct: true },
        { text: "repeat-background", correct: false },
        { text: "bg-repeat", correct: false },
        { text: "image-repeat", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um einen Schatteneffekt zu einem Text hinzuzufügen?",
      answers: [
        { text: "text-shadow", correct: true },
        { text: "shadow-text", correct: false },
        { text: "text-effect", correct: false },
        { text: "shadow", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um einen Schatteneffekt zu einem Element hinzuzufügen?",
      answers: [
        { text: "box-shadow", correct: true },
        { text: "shadow-box", correct: false },
        { text: "element-shadow", correct: false },
        { text: "shadow", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Ausrichtung von Flex-Elementen entlang der Hauptachse zu definieren?",
      answers: [
        { text: "justify-content", correct: true },
        { text: "align-content", correct: false },
        { text: "flex-align", correct: false },
        { text: "content-justify", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Ausrichtung von Flex-Elementen entlang der Querachse zu definieren?",
      answers: [
        { text: "align-items", correct: true },
        { text: "justify-items", correct: false },
        { text: "flex-align", correct: false },
        { text: "items-align", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um den Abstand zwischen Flex-Elementen zu steuern?",
      answers: [
        { text: "gap", correct: true },
        { text: "spacing", correct: false },
        { text: "flex-spacing", correct: false },
        { text: "item-spacing", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Fähigkeit eines Flex-Elements zu definieren, bei Bedarf zu wachsen?",
      answers: [
        { text: "flex-grow", correct: true },
        { text: "grow-flex", correct: false },
        { text: "flex-expand", correct: false },
        { text: "expand-flex", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Stapelreihenfolge eines Elements zu definieren?",
      answers: [
        { text: "z-index", correct: true },
        { text: "stack-order", correct: false },
        { text: "layer-index", correct: false },
        { text: "index-z", correct: false },
      ],
    },

    // Schwierigere Fragen
    {
      question: "Welche Eigenschaft wird verwendet, um die Positionierungsmethode eines Elements zu definieren?",
      answers: [
        { text: "position", correct: true },
        { text: "placement", correct: false },
        { text: "location", correct: false },
        { text: "positioning", correct: false },
      ],
    },
    {
      question: "Welcher Wert der Eigenschaft 'position' fixiert ein Element relativ zum Viewport?",
      answers: [
        { text: "fixed", correct: true },
        { text: "static", correct: false },
        { text: "relative", correct: false },
        { text: "absolute", correct: false },
      ],
    },
    {
      question: "Welcher Wert der Eigenschaft 'position' positioniert ein Element relativ zu seinem nächstgelegenen positionierten Vorgänger?",
      answers: [
        { text: "absolute", correct: true },
        { text: "fixed", correct: false },
        { text: "relative", correct: false },
        { text: "sticky", correct: false },
      ],
    },
    {
      question: "Welcher Wert der Eigenschaft 'position' positioniert ein Element basierend auf der Scroll-Position im Browser?",
      answers: [
        { text: "sticky", correct: true },
        { text: "fixed", correct: false },
        { text: "relative", correct: false },
        { text: "absolute", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Anzeige eines Elements zu steuern?",
      answers: [
        { text: "display", correct: true },
        { text: "visibility", correct: false },
        { text: "show", correct: false },
        { text: "hide", correct: false },
      ],
    },
    {
      question: "Welcher Wert der Eigenschaft 'display' versteckt ein Element, ohne es aus dem Dokumentfluss zu entfernen?",
      answers: [
        { text: "none", correct: true },
        { text: "hidden", correct: false },
        { text: "invisible", correct: false },
        { text: "off", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft wird verwendet, um die Richtung des Flexbox-Layouts zu definieren?",
      answers: [
        { text: "flex-direction", correct: true },
        { text: "direction-flex", correct: false },
        { text: "flex-flow", correct: false },
        { text: "flow-flex", correct: false },
      ],
    },
  ],
};

const jsQuiz = {
  title: "Quiz: JavaScript",
  availableDate: "2025-04-27",
  questions: [
    // Einfache Fragen
    {
      question: "Was ist JavaScript?",
      answers: [
        { text: "Eine Programmiersprache für die Entwicklung interaktiver Websites", correct: true },
        { text: "Eine Datenbanktechnologie", correct: false },
        { text: "Ein Dokument", correct: false },
        { text: "Eine Desktop-Anwendungssoftware", correct: false },
      ],
    },
    {
      question: "Wie heißt der offizielle Standard, auf dem JavaScript basiert?",
      answers: [
        { text: "JavaScript Standard", correct: false },
        { text: "ECMAScript", correct: true },
        { text: "HTMLScript", correct: false },
        { text: "CSScript", correct: false },
      ],
    },
    {
      question: "Welche Organisation gibt den ECMAScript-Standard heraus?",
      answers: [
        { text: "W3C", correct: false },
        { text: "ECMA International", correct: true },
        { text: "IEEE", correct: false },
        { text: "ISO", correct: false },
      ],
    },
    {
      question: "Welche Version von ECMAScript ist die aktuellste (Stand 2023)?",
      answers: [
        { text: "ECMAScript 2020", correct: false },
        { text: "ECMAScript 2021", correct: false },
        { text: "ECMAScript 2022", correct: true },
        { text: "ECMAScript 2023", correct: false },
      ],
    },
    {
      question: "Wie kann JavaScript in HTML eingebunden werden?",
      answers: [
        { text: "Nur im <head>-Abschnitt", correct: false },
        { text: "Nur im <body>-Abschnitt", correct: false },
        { text: "In beiden Abschnitten oder extern über das src-Attribut", correct: true },
        { text: "Nur extern über das src-Attribut", correct: false },
      ],
    },
    {
      question: "Was ist der Zweck von Semikolons in JavaScript?",
      answers: [
        { text: "Sie sind obligatorisch, um Anweisungen zu trennen", correct: false },
        { text: "Sie sind optional, aber empfehlenswert, um Fehler zu vermeiden", correct: true },
        { text: "Sie sind veraltet und sollten nicht verwendet werden", correct: false },
        { text: "Sie haben keine Bedeutung in JavaScript", correct: false },
      ],
    },
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Funktion in JavaScript zu definieren?",
      answers: [
        { text: "function", correct: true },
        { text: "def", correct: false },
        { text: "fun", correct: false },
        { text: "proc", correct: false },
      ],
    },
    {
      question: "Was ist der Unterschied zwischen benannten und anonymen Funktionen in JavaScript?",
      answers: [
        { text: "Benannte Funktionen haben einen Namen, anonyme Funktionen nicht", correct: true },
        { text: "Benannte Funktionen sind schneller als anonyme Funktionen", correct: false },
        { text: "Anonyme Funktionen können keine Parameter akzeptieren", correct: false },
        { text: "Es gibt keinen Unterschied", correct: false },
      ],
    },
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Variable in JavaScript zu deklarieren?",
      answers: [
        { text: "let", correct: true },
        { text: "def", correct: false },
        { text: "call", correct: false },
        { text: "declare", correct: false },
      ],
    },
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Block-scoped Variable in JavaScript zu deklarieren?",
      answers: [
        { text: "var", correct: false },
        { text: "let", correct: true },
        { text: "const", correct: false },
        { text: "block", correct: false },
      ],
    },
    {
      question: "Was passiert, wenn eine Variable mit 'let' deklariert wird, aber kein Wert zugewiesen wird?",
      answers: [
        { text: "Es wird ein Fehler generiert", correct: false },
        { text: "Die Variable erhält den Wert 'undefined'", correct: true },
        { text: "Die Variable wird auf null gesetzt", correct: false },
        { text: "Die Variable wird ignoriert", correct: false },
      ],
    },
    {
      question: "Welches Schlüsselwort wird verwendet, um eine Konstante in JavaScript zu deklarieren?",
      answers: [
        { text: "var", correct: false },
        { text: "let", correct: false },
        { text: "const", correct: true },
        { text: "final", correct: false },
      ],
    },
    {
      question: "Kann eine Variable, die mit 'const' deklariert wurde, später neu zugewiesen werden?",
      answers: [
        { text: "Ja", correct: false },
        { text: "Nein", correct: true },
        { text: "Nur innerhalb einer Funktion", correct: false },
        { text: "Nur innerhalb eines Blocks", correct: false },
      ],
    },
    {
      question: "Welcher Operator wird verwendet, um zwei Werte in JavaScript zu addieren?",
      answers: [
        { text: "+", correct: true },
        { text: "-", correct: false },
        { text: "*", correct: false },
        { text: "/", correct: false },
      ],
    },
    {
      question: "Welcher Operator wird verwendet, um den Rest einer Division in JavaScript zu berechnen?",
      answers: [
        { text: "%", correct: true },
        { text: "&", correct: false },
        { text: "|", correct: false },
        { text: "^", correct: false },
      ],
    },
    {
      question: "Welcher Operator wird verwendet, um einen Wert in JavaScript zu inkrementieren?",
      answers: [
        { text: "++", correct: true },
        { text: "- -", correct: false },
        { text: "+=", correct: false },
        { text: "-=", correct: false },
      ],
    },
    {
      question: "Welcher Operator wird verwendet, um einen Wert in JavaScript zu dekrementieren?",
      answers: [
        { text: "++", correct: false },
        { text: "- -", correct: true },
        { text: "+=", correct: false },
        { text: "-=", correct: false },
      ],
    },
    {
      question: "Welche Methode wird verwendet, um die Länge eines Strings in JavaScript zu ermitteln?",
      answers: [
        { text: ".length", correct: true },
        { text: ".size()", correct: false },
        { text: ".count()", correct: false },
        { text: ".length()", correct: false },
      ],
    },
    {
      question: "Welche Methode wird verwendet, um einen String in Großbuchstaben zu konvertieren?",
      answers: [
        { text: ".toUpperCase()", correct: true },
        { text: ".toLower()", correct: false },
        { text: ".toUpper()", correct: false },
        { text: ".upper()", correct: false },
      ],
    },
    {
      question: "Welche Methode wird verwendet, um einen String in Kleinbuchstaben zu konvertieren?",
      answers: [
        { text: ".toLowerCase()", correct: true },
        { text: ".toLower()", correct: false },
        { text: ".small()", correct: false },
        { text: ".lower()", correct: false },
      ],
    },
    {
      question: "Was ist ein Template Literal in JavaScript?",
      answers: [
        { text: "Ein String, der mit Backticks geschrieben wird und eingebettete Ausdrücke enthalten kann", correct: true },
        { text: "Ein String, der nur Zahlen enthält", correct: false },
        { text: "Ein String, der nur Buchstaben enthält", correct: false },
        { text: "Ein String, der nur Sonderzeichen enthält", correct: false },
      ],
    },
    {
      question: "Welche Methode wird verwendet, um einen String in eine Zahl zu konvertieren?",
      answers: [
        { text: "Number()", correct: true },
        { text: "parseInt()", correct: false },
        { text: "toNumber()", correct: false },
        { text: "convertToNumber()", correct: false },
      ],
    },
    {
      question: "Welche Methode wird verwendet, um eine Zahl in einen String zu konvertieren?",
      answers: [
        { text: "String()", correct: true },
        { text: "toString()", correct: false },
        { text: "toStr()", correct: false },
        { text: "convertToString()", correct: false },
      ],
    },
    {
      question: "Was ist ein JavaScript-Objekt?",
      answers: [
        { text: "Eine Sammlung von Schlüssel-Wert-Paaren", correct: true },
        { text: "Eine Funktion, die eine einzelne Aufgabe ausführt", correct: false },
        { text: "Ein Array von Werten", correct: false },
        { text: "Ein Block von Code", correct: false },
      ],
    },
    {
      question: "Welches Schlüsselwort wird verwendet, um auf das aktuelle Objekt in einer Methode zu verweisen?",
      answers: [
        { text: "this", correct: true },
        { text: "self", correct: false },
        { text: "object", correct: false },
        { text: "current", correct: false },
      ],
    },
    {
      question: "Was ist der Unterschied zwischen '==' und '===' in JavaScript?",
      answers: [
        { text: "'==' führt eine Typumwandlung durch, '===' nicht", correct: true },
        { text: "'===' vergleicht Variablen automatisch als String, '==' nicht", correct: false },
        { text: "Es gibt keinen Unterschied", correct: false },
        { text: "'===' führt eine Typumwandlung durch, '==' nicht", correct: false },
      ],
    },
    {
      question: "Welche Schleife wird verwendet, um über die Eigenschaften eines Objekts zu iterieren?",
      answers: [
        { text: "for-in", correct: true },
        { text: "for-of", correct: false },
        { text: "forEach", correct: false },
        { text: "while", correct: false },
      ],
    },
    {
      question: "Welche Schleife wird verwendet, um über die Werte eines Arrays zu iterieren?",
      answers: [
        { text: "for-in", correct: false },
        { text: "for-of", correct: true },
        { text: "forEach", correct: false },
        { text: "while", correct: false },
      ],
    },
    {
      question: "Welche Methode gibt die Schlüssel eines Objekts zurück?",
      answers: [
        { text: "Object.keys()", correct: true },
        { text: "Object.values()", correct: false },
        { text: "Object.entries()", correct: false },
        { text: "Object.items()", correct: false },
      ],
    },
    {
      question: "Welche Methode gibt die Werte eines Objekts zurück?",
      answers: [
        { text: "Object.keys()", correct: false },
        { text: "Object.values()", correct: true },
        { text: "Object.entries()", correct: false },
        { text: "Object.items()", correct: false },
      ],
    },
  ],
};

const nodejsQuiz = {
  title: "Quiz: Node.js",
  availableDate: "2025-04-27",
  questions: [
    // Einfache Fragen
    {
      question: "Was ist Node.js?",
      answers: [
        { text: "Eine serverseitige JavaScript-Laufzeitumgebung", correct: true },
        { text: "Eine Datenbanktechnologie", correct: false },
        { text: "Eine Frontend-Bibliothek", correct: false },
        { text: "Eine Desktop-Anwendungssoftware", correct: false },
      ],
    },
    {
      question: "Welche JavaScript-Engine wird von Node.js verwendet?",
      answers: [
        { text: "Google V8", correct: true },
        { text: "SpiderMonkey", correct: false },
        { text: "ChakraCore", correct: false },
        { text: "JavaScriptCore", correct: false },
      ],
    },
    {
      question: "Welches Paketmanagement-Tool wird standardmäßig mit Node.js installiert?",
      answers: [
        { text: "npm (Node Package Manager)", correct: true },
        { text: "Yarn", correct: false },
        { text: "Bower", correct: false },
        { text: "Composer", correct: false },
      ],
    },
    {
      question: "Welche Datei enthält die benötigten Packages eines Node.js-Projekts?",
      answers: [
        { text: "package.json", correct: true },
        { text: "index.js", correct: false },
        { text: "app.js", correct: false },
        { text: "README.md", correct: false },
      ],
    },
    {
      question: "Welches Feld in der package.json-Datei gibt den Einstiegspunkt für ein Node.js-Modul an?",
      answers: [
        { text: "main", correct: true },
        { text: "entry", correct: false },
        { text: "start", correct: false },
        { text: "root", correct: false },
      ],
    },
    {
      question: "Welchen Befehl verwendet man, um ein neues Node.js-Projekt zu initialisieren?",
      answers: [
        { text: "npm init", correct: true },
        { text: "node init", correct: false },
        { text: "npm create", correct: false },
        { text: "node setup", correct: false },
      ],
    },
    {
      question: "Welchen Befehl verwendet man, um ein Paket in einem Node.js-Projekt zu installieren?",
      answers: [
        { text: "npm install <package-name>", correct: true },
        { text: "node install <package-name>", correct: false },
        { text: "npm add <package-name>", correct: false },
        { text: "node add <package-name>", correct: false },
      ],
    },
    {
      question: "Welchen Befehl verwendet man, um ein Paket aus einem Node.js-Projekt zu deinstallieren?",
      answers: [
        { text: "npm uninstall <package-name>", correct: true },
        { text: "node remove <package-name>", correct: false },
        { text: "npm delete <package-name>", correct: false },
        { text: "node uninstall <package-name>", correct: false },
      ],
    },
    {
      question: "Was ist Express.js?",
      answers: [
        { text: "Ein Framework für die Erstellung von Webservern in Node.js", correct: true },
        { text: "Eine Datenbank für Node.js-Anwendungen", correct: false },
        { text: "Ein Frontend-Framework", correct: false },
        { text: "Ein Tool zur Codeformatierung", correct: false },
      ],
    },
    {
      question: "Welche HTTP-Methode wird verwendet, um ausschließlich Daten von einem Server abzurufen?",
      answers: [
        { text: "GET", correct: true },
        { text: "POST", correct: false },
        { text: "PUT", correct: false },
        { text: "DELETE", correct: false },
      ],
    },
    {
      question: "Welche HTTP-Methode wird verwendet, um Daten an den Server zu senden?",
      answers: [
        { text: "POST", correct: true },
        { text: "GET", correct: false },
        { text: "PUT", correct: false },
        { text: "DELETE", correct: false },
      ],
    },
    {
      question: "Welche HTTP-Methode wird verwendet, um Daten auf dem Server zu aktualisieren?",
      answers: [
        { text: "PUT", correct: true },
        { text: "GET", correct: false },
        { text: "POST", correct: false },
        { text: "DELETE", correct: false },
      ],
    },
    {
      question: "Welche HTTP-Methode wird verwendet, um eine Ressource vom Server zu löschen?",
      answers: [
        { text: "DELETE", correct: true },
        { text: "GET", correct: false },
        { text: "POST", correct: false },
        { text: "PUT", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass die Anfrage erfolgreich war und die angeforderten Daten zurückgegeben wurden?",
      answers: [
        { text: "200 OK", correct: true },
        { text: "201 Created", correct: false },
        { text: "204 No Content", correct: false },
        { text: "206 Partial Content", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass die Anfrage ungültig oder schlecht formatiert war?",
      answers: [
        { text: "400 Bad Request", correct: true },
        { text: "401 Unauthorized", correct: false },
        { text: "403 Forbidden", correct: false },
        { text: "404 Not Found", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass der Server vorübergehend nicht verfügbar ist?",
      answers: [
        { text: "503 Service Unavailable", correct: true },
        { text: "500 Internal Server Error", correct: false },
        { text: "501 Not Implemented", correct: false },
        { text: "502 Bad Gateway", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Header gibt den Medientyp der Antwort an?",
      answers: [
        { text: "Content-Type", correct: true },
        { text: "Set-Cookie", correct: false },
        { text: "Cache-Control", correct: false },
        { text: "Authorization", correct: false },
      ],
    },
    {
      question: "Was ist REST?",
      answers: [
        { text: "Ein Architekturstil für die Erstellung von Webservices", correct: true },
        { text: "Ein Protokoll für die Datenübertragung", correct: false },
        { text: "Ein Framework für die Erstellung von Webanwendungen", correct: false },
        { text: "Ein Tool zur Codeformatierung", correct: false },
      ],
    },
    {
      question: "Wofür wird Nodemon verwendet?",
      answers: [
        { text: "Um den Server automatisch neu zu starten, wenn sich Quelldateien ändern", correct: true },
        { text: "Um HTTP-Anfragen zu testen", correct: false },
        { text: "Um Pakete zu installieren", correct: false },
        { text: "Um die Leistung eines Servers zu überwachen", correct: false },
      ],
    },
    {
      question: "Welchen Befehl verwendet man, um einen Node.js-Server mit Nodemon zu starten?",
      answers: [
        { text: "nodemon server.js", correct: true },
        { text: "node server.js", correct: false },
        { text: "npm start", correct: false },
        { text: "npm run server", correct: false },
      ],
    },
    {
      question: "Was ist der Zweck von Query Parametern in Express.js?",
      answers: [
        { text: "Zusätzliche Informationen, die an die URL einer Anfrage angehängt werden", correct: true },
        { text: "Daten, die im Body einer POST-Anfrage gesendet werden", correct: false },
        { text: "Header-Informationen, die in der Anfrage gesendet werden", correct: false },
        { text: "Cookies, die im Browser gespeichert werden", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass die Anfrage akzeptiert wurde, aber die Verarbeitung noch nicht abgeschlossen ist?",
      answers: [
        { text: "202 Accepted", correct: true },
        { text: "200 OK", correct: false },
        { text: "201 Created", correct: false },
        { text: "204 No Content", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass der Client keine Berechtigung hat, auf die angeforderte Ressource zuzugreifen?",
      answers: [
        { text: "403 Forbidden", correct: true },
        { text: "401 Unauthorized", correct: false },
        { text: "404 Not Found", correct: false },
        { text: "400 Bad Request", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass die angeforderte HTTP-Methode für die angeforderte Ressource nicht erlaubt ist?",
      answers: [
        { text: "405 Method Not Allowed", correct: true },
        { text: "400 Bad Request", correct: false },
        { text: "401 Unauthorized", correct: false },
        { text: "403 Forbidden", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass der Server die angeforderte Methode nicht unterstützt?",
      answers: [
        { text: "501 Not Implemented", correct: true },
        { text: "500 Internal Server Error", correct: false },
        { text: "502 Bad Gateway", correct: false },
        { text: "503 Service Unavailable", correct: false },
      ],
    },
    {
      question: "Welcher HTTP-Statuscode bedeutet, dass der Server bei der Kommunikation mit einem anderen Server eine Zeitüberschreitung erfahren hat?",
      answers: [
        { text: "504 Gateway Timeout", correct: true },
        { text: "500 Internal Server Error", correct: false },
        { text: "501 Not Implemented", correct: false },
        { text: "502 Bad Gateway", correct: false },
      ],
    },
    {
      question: "Welcher Befehl wird verwendet, um ein Node.js-Skript auszuführen?",
      answers: [
        { text: "node <script-name>.js", correct: true },
        { text: "run <script-name>.js", correct: false },
        { text: "execute <script-name>.js", correct: false },
        { text: "start <script-name>.js", correct: false },
      ],
    },
    {
      question: "Welcher Befehl wird verwendet, um die installierten Pakete in einem Node.js-Projekt zu aktualisieren?",
      answers: [
        { text: "npm update", correct: true },
        { text: "npm refresh", correct: false },
        { text: "npm upgrade", correct: false },
        { text: "npm sync", correct: false },
      ],
    },
    {
      question: "Welches Modul kann in Node.js verwendet werden, um mit dem Dateisystem zu interagieren?",
      answers: [
        { text: "fs", correct: true },
        { text: "filesys", correct: false },
        { text: "io-fsp", correct: false },
        { text: "disk-util", correct: false },
      ],
    },
    {
      question: "Welcher Befehl wird verwendet, um die Version von Node.js und npm zu überprüfen?",
      answers: [
        { text: "node -v und npm -v", correct: true },
        { text: "node --version und npm --version", correct: false },
        { text: "node version und npm version", correct: false },
        { text: "node check und npm check", correct: false },
      ],
    },
  ],
};

const dockerQuiz = {
  title: "Quiz: Docker",
  availableDate: "2025-04-27",
  questions: [
    {
      question: "Was ist ein Docker-Container?",
      answers: [
        { text: "Eine virtuelle Maschine", correct: false },
        { text: "Eine laufende Instanz eines Docker-Images", correct: true },
        { text: "Ein Quellcode-Editor", correct: false },
        { text: "Ein Betriebssystem", correct: false },
      ],
    },
    {
      question: "Was beschreibt ein Docker-Image?",
      answers: [
        { text: "Einen laufenden Prozess", correct: false },
        { text: "Die Struktur und Inhalte eines Containers", correct: true },
        { text: "Einen Screenshot der Anwendung", correct: false },
        { text: "Einen Netzwerk-Port", correct: false },
      ],
    },
    {
      question: "Was ist Docker Hub?",
      answers: [
        { text: "Ein Hardware-Switch", correct: false },
        { text: "Ein lokaler Docker-Client", correct: false },
        { text: "Ein Online-Repository für Docker-Images", correct: true },
        { text: "Ein Editor für Dockerfiles", correct: false },
      ],
    },
    {
      question: "Was macht der Befehl `docker run -d`?",
      answers: [
        { text: "Startet den Container interaktiv", correct: false },
        { text: "Beendet den Container", correct: false },
        { text: "Startet den Container im Hintergrund", correct: true },
        { text: "Löscht das Image", correct: false },
      ],
    },
    {
      question: "Wofür steht der Parameter `-p 8080:80`?",
      answers: [
        { text: "Öffnet Port 8080 im Container", correct: false },
        { text: "Forwardet Host-Port 8080 auf Container-Port 80", correct: true },
        { text: "Blockiert den Zugriff auf Port 80", correct: false },
        { text: "Verbindet zwei Container", correct: false },
      ],
    },
    {
      question: "Was ist ein Dockerfile?",
      answers: [
        { text: "Eine YAML-Datei", correct: false },
        { text: "Ein Skript zur Orchestrierung", correct: false },
        { text: "Eine Textdatei, die ein Docker-Image beschreibt", correct: true },
        { text: "Ein Backup eines Containers", correct: false },
      ],
    },
    {
      question: "Welche Anweisung im Dockerfile definiert das Basis-Image?",
      answers: [
        { text: "CMD", correct: false },
        { text: "FROM", correct: true },
        { text: "RUN", correct: false },
        { text: "COPY", correct: false },
      ],
    },
    {
      question: "Was passiert bei jeder Anweisung im Dockerfile?",
      answers: [
        { text: "Eine neue Schicht wird erzeugt", correct: true },
        { text: "Der Container wird gestartet", correct: false },
        { text: "Der Host wird neugestartet", correct: false },
        { text: "Der Docker-Daemon wird beendet", correct: false },
      ],
    },
    {
      question: "Welche Datei wird typischerweise für docker-compose verwendet?",
      answers: [
        { text: "compose.json", correct: false },
        { text: "docker-compose.yaml", correct: true },
        { text: "dockerfile-compose", correct: false },
        { text: "compose.config", correct: false },
      ],
    },
    {
      question: "Welche Anwendung muss unter Windows/Mac gestartet sein, um Docker zu verwenden?",
      answers: [
        { text: "Docker Compose", correct: false },
        { text: "Docker Desktop", correct: true },
        { text: "Docker UI", correct: false },
        { text: "Dockerfile", correct: false },
      ],
    },
    {
      question: "Wie nennt man das Prinzip 'Write once, run anywhere' in Bezug auf Docker?",
      answers: [
        { text: "Virtualisierung", correct: false },
        { text: "Plattformunabhängigkeit", correct: true },
        { text: "Code-Sharing", correct: false },
        { text: "Microservices", correct: false },
      ],
    },
    {
      question: "Wofür steht CMD im Dockerfile?",
      answers: [
        { text: "Befehl zur Image-Erstellung", correct: false },
        { text: "Standardkommando beim Containerstart", correct: true },
        { text: "Kommentarzeile", correct: false },
        { text: "Debug-Modus", correct: false },
      ],
    },
    {
      question: "Was beschreibt ein Layer im Dockerfile?",
      answers: [
        { text: "Eine Benutzerrolle", correct: false },
        { text: "Ein Schritt beim Image-Aufbau", correct: true },
        { text: "Eine Netzwerkschnittstelle", correct: false },
        { text: "Ein Plugin", correct: false },
      ],
    },
    {
      question: "Wozu dient der Befehl `COPY . .` im Dockerfile?",
      answers: [
        { text: "Er kopiert die Daten vom Container in den Host", correct: false },
        { text: "Er kopiert alle Dateien vom Build-Kontext ins Image", correct: true },
        { text: "Er synchronisiert Git-Repositories", correct: false },
        { text: "Er löscht temporäre Dateien", correct: false },
      ],
    },
    {
      question: "Was kann zu einem langsamen Build führen?",
      answers: [
        { text: "Zu viele Volumes", correct: false },
        { text: "COPY . . vor npm install", correct: true },
        { text: "Mehrere RUN-Kommandos", correct: false },
        { text: "CMD statt RUN verwenden", correct: false },
      ],
    },
    {
      question: "Was ist ein typischer Vorteil von docker-compose?",
      answers: [
        { text: "Es unterstützt virtuelle Maschinen", correct: false },
        { text: "Es erlaubt mehrere Container gleichzeitig zu starten", correct: true },
        { text: "Es ist schneller als ein Dockerfile", correct: false },
        { text: "Es ersetzt Docker vollständig", correct: false },
      ],
    },
    {
      question: "Welche Anweisung wird NICHT im Dockerfile verwendet?",
      answers: [
        { text: "FROM", correct: false },
        { text: "RUN", correct: false },
        { text: "DO", correct: true },
        { text: "CMD", correct: false },
      ],
    },
    {
      question: "Was macht `docker ps -a`?",
      answers: [
        { text: "Zeigt nur laufende Container", correct: false },
        { text: "Zeigt alle Container, auch gestoppte", correct: true },
        { text: "Listet nur Images auf", correct: false },
        { text: "Startet alle Container", correct: false },
      ],
    },
    {
      question: "Was ist keine gültige Image-Quelle im FROM-Befehl?",
      answers: [
        { text: "ubuntu:20.04", correct: false },
        { text: "node:14", correct: false },
        { text: "compose:latest", correct: true },
        { text: "alpine", correct: false },
      ],
    },
    {
      question: "Wie benennt man einen Container beim Start?",
      answers: [
        { text: "--tag", correct: false },
        { text: "--name", correct: true },
        { text: "--id", correct: false },
        { text: "--image", correct: false },
      ],
    },
    {
      question: "Wie kann man ein eigenes Image öffentlich bereitstellen?",
      answers: [
        { text: "In GitHub hochladen", correct: false },
        { text: "Im Dockerfile speichern", correct: false },
        { text: "Auf Docker Hub pushen", correct: true },
        { text: "Mit docker run exportieren", correct: false },
      ],
    },
    {
      question: "Was beschreibt der Image-Tag?",
      answers: [
        { text: "Die Portfreigabe", correct: false },
        { text: "Die Image-Version", correct: true },
        { text: "Den Speicherort", correct: false },
        { text: "Die Netzwerkgruppe", correct: false },
      ],
    },
  ],
};

const mongoQuiz = {
  title: "Quiz: NoSQL & MongoDB",
  availableDate: "2025-04-27",
  questions: [
    {
      question: "Wofür steht NoSQL?",
      answers: [
        { text: "Not One SQL", correct: false },
        { text: "Not Only SQL", correct: true },
        { text: "No Standard Query Language", correct: false },
        { text: "Neue SQL-Sprache", correct: false },
      ],
    },
    {
      question: "Welche Eigenschaft trifft auf NoSQL-Datenbanken zu?",
      answers: [
        { text: "Tabellenbasiert", correct: false },
        { text: "Schemalos", correct: true },
        { text: "Nur für relationale Daten geeignet", correct: false },
        { text: "Nur in Java verwendbar", correct: false },
      ],
    },
    {
      question: "Welche der folgenden Datenbanken ist dokumentenorientiert?",
      answers: [
        { text: "Redis", correct: false },
        { text: "MongoDB", correct: true },
        { text: "Neo4j", correct: false },
        { text: "MySQL", correct: false },
      ],
    },
    {
      question: "Welche Struktur verwendet MongoDB zum Speichern von Daten?",
      answers: [
        { text: "CSV", correct: false },
        { text: "XML", correct: false },
        { text: "BSON", correct: true },
        { text: "YAML", correct: false },
      ],
    },
    {
      question: "Was ist eine Collection in MongoDB?",
      answers: [
        { text: "Ein Datensatz", correct: false },
        { text: "Eine Datei", correct: false },
        { text: "Ein Äquivalent zu einer Tabelle", correct: true },
        { text: "Ein Server", correct: false },
      ],
    },
    {
      question: "Was ist der Zweck des Feldes _id in MongoDB?",
      answers: [
        { text: "Ein Benutzername", correct: false },
        { text: "Ein automatisch generierter Primärschlüssel", correct: true },
        { text: "Ein Attribut für Indexnamen", correct: false },
        { text: "Ein Feld für Metadaten", correct: false },
      ],
    },
    {
      question: "Was ist `mongosh`?",
      answers: [
        { text: "Ein Mongoose-Plugin", correct: false },
        { text: "Ein MongoDB-GUI-Tool", correct: false },
        { text: "Die interaktive MongoDB-Shell", correct: true },
        { text: "Ein MongoDB-Server", correct: false },
      ],
    },
    {
      question: "Was macht `show collections` in der MongoDB-Shell?",
      answers: [
        { text: "Zeigt alle Datenbanken", correct: false },
        { text: "Zeigt alle Collections der aktuellen DB", correct: true },
        { text: "Zeigt die Shell-Version", correct: false },
        { text: "Zeigt alle Indexe", correct: false },
      ],
    },
    {
      question: "Wie erstellt man ein Dokument in MongoDB?",
      answers: [
        { text: "INSERT INTO", correct: false },
        { text: "db.collection.add()", correct: false },
        { text: "db.collection.insertOne()", correct: true },
        { text: "db.collection.create()", correct: false },
      ],
    },
    {
      question: "Was bewirkt `use myDatabase`?",
      answers: [
        { text: "Löscht eine Datenbank", correct: false },
        { text: "Wechselt oder erstellt die Datenbank", correct: true },
        { text: "Erstellt ein Dokument", correct: false },
        { text: "Zeigt alle Benutzer", correct: false },
      ],
    },
    {
      question: "Wie wird in der MongoDB-Shell ein Dokument mit einer Bedingung abgefragt?",
      answers: [
        { text: "db.collection.filter({ age > 25 })", correct: false },
        { text: "db.collection.query({ age: > 25 })", correct: false },
        { text: "db.collection.find({ age: { $gt: 25 } })", correct: true },
        { text: "db.collection.select({ age > 25 })", correct: false },
      ],
    },
    {
      question: "Wie aktualisiert man ein Dokument in MongoDB?",
      answers: [
        { text: "db.collection.modifyOne()", correct: false },
        { text: "db.collection.updateOne({ name: 'John' }, { $set: { age: 31 } })", correct: true },
        { text: "db.collection.editOne()", correct: false },
        { text: "db.collection.set({ age: 31 })", correct: false },
      ],
    },
    {
      question: "Wie löscht man ein Dokument aus einer Collection?",
      answers: [
        { text: "db.collection.remove()", correct: false },
        { text: "db.collection.deleteOne({ name: 'John' })", correct: true },
        { text: "db.collection.clear({ name: 'John' })", correct: false },
        { text: "db.collection.drop({ name: 'John' })", correct: false },
      ],
    },
    {
      question:
        "(Optional:) Unter https://www.mongodb.com/docs/manual/tutorial/manage-users-and-roles/ finden Sie weitere Informationen zum Thema User-Management in MongoDB. Wie erstellt man einen Benutzer in MongoDB?",
      answers: [
        { text: "db.addUser(...)", correct: false },
        { text: "db.createUser({ user: 'myUser', pwd: 'pass', roles: [...] })", correct: true },
        { text: "db.newUser(...)", correct: false },
        { text: "db.registerUser(...)", correct: false },
      ],
    },
    {
      question: "Was ist ein Mongoose-Modell?",
      answers: [
        { text: "Ein Index auf ein Feld", correct: false },
        { text: "Ein Interface zur Collection auf Basis eines Schemas", correct: true },
        { text: "Ein Benutzerprofil", correct: false },
        { text: "Eine Verbindung zur Datenbank", correct: false },
      ],
    },
    {
      question: "Welche Funktion hat ein Mongoose-Schema?",
      answers: [
        { text: "Es erstellt die Datenbank", correct: false },
        { text: "Es definiert die Struktur und Validierung von Dokumenten", correct: true },
        { text: "Es speichert Benutzerrechte", correct: false },
        { text: "Es verbindet das Backend mit der MongoDB", correct: false },
      ],
    },
    {
      question: "Welche Option in einem Mongoose-Schema macht ein Feld erforderlich?",
      answers: [
        { text: "optional: false", correct: false },
        { text: "required: true", correct: true },
        { text: "mustHave: true", correct: false },
        { text: "present: true", correct: false },
      ],
    },
    {
      question: "Wie wird ein JWT typischerweise übermittelt?",
      answers: [
        { text: "In der URL", correct: false },
        { text: "Als Cookie", correct: false },
        { text: "Im HTTP-Header", correct: true },
        { text: "In der Datenbank", correct: false },
      ],
    },
    {
      question: "Welche drei Bestandteile hat ein JWT?",
      answers: [
        { text: "Header, Token, ID", correct: false },
        { text: "Header, Payload, Signature", correct: true },
        { text: "Request, Payload, Secret", correct: false },
        { text: "Header, Data, Key", correct: false },
      ],
    },
    {
      question: "Welche Information enthält der JWT Header?",
      answers: [
        { text: "Benutzer-ID", correct: false },
        { text: "Verwendeter Algorithmus und Typ", correct: true },
        { text: "Token-Ablaufzeit", correct: false },
        { text: "Datenbankinformationen", correct: false },
      ],
    },
    {
      question: "Warum wird ein SECRET_KEY für JWT benötigt?",
      answers: [
        { text: "Um den Token lesbar zu machen", correct: false },
        { text: "Um die Datenbank zu schützen", correct: false },
        { text: "Zur Signierung und Überprüfung des Tokens", correct: true },
        { text: "Zum Speichern von Passwörtern", correct: false },
      ],
    },
    {
      question: "Wo sollte der SECRET_KEY gespeichert werden?",
      answers: [
        { text: "Im GitHub Repository", correct: false },
        { text: "Im HTML-Quelltext", correct: false },
        { text: "In einer .env-Datei", correct: true },
        { text: "Im JWT selbst", correct: false },
      ],
    },
    {
      question: "Warum sollte eine .env-Datei nicht im eigenen Repository legen?",
      answers: [
        { text: "Sie verlangsamt den Server", correct: false },
        { text: "Sie enthält sensible Konfigurationsdaten", correct: true },
        { text: "Sie ist schwer zu lesen", correct: false },
        { text: "Sie wird automatisch gelöscht", correct: false },
      ],
    },
    {
      question: "Welche Bibliothek kann verwendet werden um .env-Dateien in Node.js?",
      answers: [
        { text: "config.js", correct: false },
        { text: "dotenv", correct: true },
        { text: "envify", correct: false },
        { text: "nodevars", correct: false },
      ],
    },
  ],
};

const QUIZ = [htmlQuiz, cssQuiz, jsQuiz, nodejsQuiz, dockerQuiz, mongoQuiz];

// DOM Elemente
const startPage = document.getElementById("start-page");
const quizPage = document.getElementById("quiz-page");
const quizList = document.getElementById("quiz-list");
const quizTitle = document.getElementById("quiz-title");
const quizContainer = document.getElementById("quiz-container");
const backButton = document.getElementById("back-button");
const submitButton = document.getElementById("submit-button");
const backToStartButton = document.getElementById("back-to-start-button");
const resultDiv = document.getElementById("result");

let currentQuiz = null;
let selectedAnswers = {};

// Seite laden
document.addEventListener("DOMContentLoaded", () => {
  renderQuizList();
});

// Quizliste rendern
function renderQuizList() {
  quizList.innerHTML = "";
  QUIZ.forEach((quiz, index) => {
    const bestKey = `quiz_${quiz.title}_best`;
    const bestScore = localStorage.getItem(bestKey);
    const item = document.createElement("li");
    item.className = "bg-white p-4 rounded-xl shadow hover:bg-gray-50 cursor-pointer flex justify-between items-center";

    // Always show title
    let inner = `<span>${quiz.title}</span>`;

    // Only show best score if it exists in localStorage
    if (bestScore !== null) {
      inner += `
                <div class="text-sm text-white px-2 py-1 rounded-full bg-blue-700">
                    Best: ${bestScore} / ${quiz.questions.length} Punkte
                </div>
            `;
    }

    item.innerHTML = inner;
    item.addEventListener("click", () => startQuiz(index));
    quizList.appendChild(item);
  });
}

// Quiz starten
function startQuiz(index) {
  currentQuiz = QUIZ[index];
  selectedAnswers = {};
  startPage.classList.add("hidden");
  quizPage.classList.remove("hidden");
  quizTitle.textContent = currentQuiz.title;
  submitButton.classList.remove("hidden");
  backToStartButton.classList.add("hidden");
  resultDiv.textContent = "";
  renderQuestions();
}

// Fragen anzeigen
function renderQuestions() {
  quizContainer.innerHTML = "";
  currentQuiz.questions.forEach((q, qIndex) => {
    const qDiv = document.createElement("div");
    qDiv.className = "p-4 bg-white rounded-xl shadow";

    const qTitle = document.createElement("p");
    qTitle.className = "mb-2 font-semibold";
    qTitle.textContent = `${qIndex + 1}. ${q.question}`;
    qDiv.appendChild(qTitle);

    const listAnswers = q.answers;
    // randomly shuggle answers
    listAnswers.sort(() => Math.random() - 0.5);

    listAnswers.forEach((answer, aIndex) => {
      const label = document.createElement("label");
      label.className = "block mb-2 cursor-pointer";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question-${qIndex}`;
      input.value = aIndex;
      input.className = "mr-2";
      input.addEventListener("change", () => {
        selectedAnswers[qIndex] = parseInt(input.value);
      });

      label.appendChild(input);
      label.append(answer.text);
      qDiv.appendChild(label);
    });

    quizContainer.appendChild(qDiv);
  });
}

// Abschicken
submitButton.addEventListener("click", () => {
  let score = 0;
  quizContainer.querySelectorAll("div").forEach((qDiv, qIndex) => {
    const correctAnswer = currentQuiz.questions[qIndex].answers.findIndex((a) => a.correct);
    const selected = selectedAnswers[qIndex];

    qDiv.querySelectorAll("input").forEach((input, aIndex) => {
      input.disabled = true;
      const label = input.parentElement;
      if (aIndex === correctAnswer) {
        label.classList.add("text-green-600");
      }
      if (selected === aIndex && selected !== correctAnswer) {
        label.classList.add("text-red-600");
      }
    });

    if (selected === correctAnswer) {
      score += 1;
    } else if (selected !== undefined) {
      score -= 1;
    }
  });

  resultDiv.textContent = `Dein Ergebnis: ${score} / ${currentQuiz.questions.length} Punkte`;

  const bestKey = `quiz_${currentQuiz.title}_best`;
  const bestScore = parseInt(localStorage.getItem(bestKey) || 0);
  if (score > bestScore) {
    localStorage.setItem(bestKey, score);
  }

  // Button-Logik anpassen
  submitButton.classList.add("hidden");
  backToStartButton.classList.remove("hidden");
});

// Zurück zur Startseite
function returnToStart() {
  if (confirm("Warnung: Ihre Antworten werden nicht gespeichert. Möchten Sie wirklich zurück zur Startseite?")) {
    quizPage.classList.add("hidden");
    startPage.classList.remove("hidden");
    resultDiv.textContent = "";
    renderQuizList();
  }
}

// Event Listener für die Buttons
backButton.addEventListener("click", returnToStart);
backToStartButton.addEventListener("click", returnToStart);
