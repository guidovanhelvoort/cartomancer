const init = function () {
  const clearButton = document.getElementById("clear");
  const submitButton = document.getElementById("submit");
  const inputs = document.getElementById("inputs");
  const nameInput = document.getElementById("name");
  const questionInput = document.getElementById("question");

  submitButton.addEventListener("click", function () {
    const waitingDiv = document.getElementById("waiting");
    const name = nameInput.value;
    const question = questionInput.value;

    waitingDiv.style.display = "block";
    inputs.style.display = "none";

    fetchReading(name, question);
  });

  clearButton.addEventListener("click", function () {
    const readingDiv = document.getElementById("reading");

    readingDiv.style.display = "none";
    clearButton.style.display = "none";
    inputs.style.display = "block";
    nameInput.value = "";
    questionInput.value = "";
  });
};

const fetchReading = async (name, question) => {
  const testing = false;
  const readingDiv = document.getElementById("reading");
  const waitingDiv = document.getElementById("waiting");
  const clearButton = document.getElementById("clear");

  readingDiv.style.display = "none";

  // fetch api and include name and question
  const response = await fetch(
    `http://localhost:3000/${
      testing ? "htmltest" : ""
    }reading?name=${name}&question=${question}`
  );

  const myJson = await response.json();

  readingDiv.innerHTML = myJson.data;
  readingDiv.style.display = "block";
  waitingDiv.style.display = "none";
  clearButton.style.display = "block";
};

init();
