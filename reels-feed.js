(function () {
  const grid = document.getElementById("reelsGrid");
  if (!grid) return;

  function shortCaption(value) {
    const text = (value || "Merakoid Instagram videosu").replace(/\s+/g, " ").trim();
    return text.length > 105 ? text.slice(0, 102) + "…" : text;
  }

  function makeCard(item, index) {
    const article = document.createElement("article");
    article.className = "story-card";
    const art = document.createElement("div");
    art.className = "card-art art-phone";
    const number = document.createElement("span");
    number.className = "art-number";
    number.textContent = "REELS / " + String(index + 1).padStart(2, "0");
    const symbol = document.createElement("span");
    symbol.className = "art-symbol";
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = "▶";
    const title = document.createElement("span");
    title.className = "art-word";
    title.textContent = shortCaption(item.caption);
    art.append(number, symbol, title);

    const body = document.createElement("div");
    body.className = "card-body";
    const meta = document.createElement("div");
    meta.className = "card-meta";
    const category = document.createElement("span");
    category.className = "category";
    category.textContent = "Instagram Reels";
    const date = document.createElement("span");
    date.textContent = item.timestamp ? new Date(item.timestamp).toLocaleDateString("tr-TR") : "";
    meta.append(category, date);
    const heading = document.createElement("h3");
    heading.textContent = shortCaption(item.caption);
    const link = document.createElement("a");
    link.className = "read-more";
    link.href = item.permalink;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Instagram'da izle ↗";
    body.append(meta, heading, link);
    article.append(art, body);
    return article;
  }

  fetch("reels.json?v=" + Date.now(), { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Reels feed alınamadı");
      return response.json();
    })
    .then((feed) => {
      const items = Array.isArray(feed.items) ? feed.items.filter((item) => item.permalink) : [];
      if (!items.length) throw new Error("Henüz Reels bulunamadı");
      grid.replaceChildren(...items.slice(0, 9).map(makeCard));
      const stamp = document.createElement("p");
      stamp.className = "section-note";
      stamp.style.gridColumn = "1 / -1";
      stamp.textContent = feed.updated_at
        ? "Son senkronizasyon: " + new Date(feed.updated_at).toLocaleString("tr-TR")
        : "Otomatik senkronizasyon bağlantısı hazırlanıyor.";
      grid.appendChild(stamp);
    })
    .catch(() => {
      const link = document.createElement("a");
      link.href = "https://www.instagram.com/merakoid/";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "read-more";
      link.textContent = "Merakoid Instagram profilini aç ↗";
      grid.replaceChildren(link);
    });
})();
