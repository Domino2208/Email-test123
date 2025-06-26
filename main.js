
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data
    }).then(() => {
      window.location.href = "/thank-you.html";
    }).catch((error) => {
      alert("Fehler beim Absenden!");
    });
  });
});
