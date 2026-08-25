// Genel log gönderme fonksiyonu
async function sendLog(log) {
  try {
    await fetch("http://localhost:8000/api/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(log)
    });
    console.log("Log backend'e gönderildi:", log);
  } catch (error) {
    console.error("Log gönderilemedi:", error);
  }
}

// 1️⃣ Arama logu
const input = document.getElementById("search");
if (input) {
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      const log = {
        type: "search",
        query: input.value,
        time: new Date().toISOString(),
        page: window.location.pathname
      };
      sendLog(log);
    }
  });
}

// 3️⃣ Sayfada kalma süresi logu
let startTime = Date.now();
window.addEventListener("beforeunload", () => {
  const duration = Date.now() - startTime;
  const log = {
    type: "page_duration",
    page: window.location.pathname,
    duration_ms: duration,
    time: new Date().toISOString()
  };
  // sayfa kapanırken fetch yerine sendBeacon kullanmak daha güvenli
  navigator.sendBeacon("http://localhost:8000/api/logs", JSON.stringify(log));
});

// 4️⃣ Tıklama logu
document.addEventListener("click", (event) => {
  const log = {
    type: "click",
    element: event.target.tagName,
    target: event.target.getAttribute("href") || event.target.id || null,
    time: new Date().toISOString(),
    page: window.location.pathname
  };
  sendLog(log);
});

// 5️⃣ Sınav sonucu logu (örnek kullanım)
function sendExamResult(userId, results) {
  const log = {
    type: "exam_result",
    user: userId,
    results: results, // örn: { matematik: 70, fizik: 40, kimya: 90 }
    time: new Date().toISOString()
  };
  sendLog(log);
}
