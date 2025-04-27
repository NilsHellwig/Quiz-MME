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
    }
  ],
};

const QUIZ = [htmlQuiz];

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
    const bestScore = localStorage.getItem(`quiz_${quiz.title}_best`) || 0;
    const item = document.createElement("li");
    item.className = "bg-white p-4 rounded-xl shadow hover:bg-gray-50 cursor-pointer flex justify-between items-center";
    item.innerHTML = `
        <span>${quiz.title}</span>
        <span class="text-sm text-gray-500">Best: ${bestScore}P</span>
      `;
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
  quizPage.classList.add("hidden");
  startPage.classList.remove("hidden");
  resultDiv.textContent = "";
  renderQuizList();
}

// Event Listener für die Buttons
backButton.addEventListener("click", returnToStart);
backToStartButton.addEventListener("click", returnToStart);
