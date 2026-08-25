const suggestions = ["trigonometri", "türev", "integral", "logaritma", "kartezyen koordinat ","hayatimizdaki kimya","avogadro sayisi","yanma tepkimeleri","kütlenin korunumu","elementler","organik kimya","torch","eylemsizlik","yer çekimi","ivme","momentum","enerji","isik","ses","dalga","elektrik","manyetizma","atom","molekül","periyodik tablo","kimyasal bağlar","asit ve bazlar","nükleer enerji","fiziksel değişim","kimyasal değişim","mayoz","mitoz","genetik","evrim","biyoloji","hücre","enzim","fotosentez","solunum","hormonlar","sinir sistemi","dolaşim sistemi","boşaltim sistemi","kas sistemi","iskelet sistemi","bagisiklik sistemi"];
const input = document.getElementById("search");
const suggestionBox = document.getElementById("suggestions");

input.addEventListener("input", () => {
  const value = input.value.toLowerCase();
  suggestionBox.innerHTML = "";
  if (value) {
    const filtered = suggestions.filter(item => item.toLowerCase().startsWith(value));
    filtered.forEach(item => {
      const div = document.createElement("div");
      div.textContent = item;
      div.onclick = () => {
        input.value = item;
        suggestionBox.innerHTML = "";
      };
      suggestionBox.appendChild(div);
    });
  }
});