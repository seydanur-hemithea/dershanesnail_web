function sendQuestion() {
  const ders = document.querySelector('input[name="ders"]:checked').value;
  const soru = document.getElementById("soru").value;
  const gizli = document.getElementById("gizli").checked;
  const questionBox = document.getElementById("questionBox");

  // Backend'e gönderilecek JSON
  const log = {
    type: "question",
    ders: ders,
    text: soru,
    hidden: gizli,
    time: new Date().toISOString(),
    page: window.location.pathname
  };

  // Backend'e gönder
  fetch("http://localhost:8000/api/questions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(log)
  })
  .then(() => {
    console.log("Soru backend'e gönderildi:", log);

    // Eğer gizli değilse sayfada göster
    if (!gizli) {
      const div = document.createElement("div");
      div.textContent = `${ders}: ${soru}`;
      questionBox.appendChild(div);
    }
  })
  .catch(err => console.error("Gönderim hatası:", err));
}
