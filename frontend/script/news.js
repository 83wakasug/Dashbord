const key = "964303efb75b4e2aa94fec658d29d853";
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${key}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    displayNews(data.articles);
  })
  .catch(error => console.error("Error fetching news:", error));

function displayNews(articles) {
  const newsContainer = document.getElementById("add_news");
  newsContainer.innerHTML = "<h3>Latest News</h3>"; 

  articles.forEach(article => {
    const newsItem = document.createElement("div");
    newsItem.classList.add("news-item");

    newsItem.innerHTML = `
      <a href="${article.url}" target="_blank">
        <h4>${article.title}</h4>
      </a>
      <p>${article.description || "No description available"}</p>
      <img class="new_image" src=${article.urlToImage} alt="Italian Trulli">
    `;
    newsContainer.appendChild(newsItem);
  });
}