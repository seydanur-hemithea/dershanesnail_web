input.addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const log = {
      query: input.value,               // Kullanıcının aradığı kelime
      time: new Date().toISOString(),   // Arama zamanı
      page: window.location.pathname    // Hangi sayfada arandı
    };

    try {
      await fetch("http://localhost:8000/api/search-log", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(log)
      });
      console.log("Arama logu backend'e gönderildi:", log);
    } catch (error) {
      console.error("Arama logu gönderilemedi:", error);
    }
  }
});