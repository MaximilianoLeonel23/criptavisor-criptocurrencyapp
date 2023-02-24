import { useState, useEffect } from "react";

function truncate(str, maxlength) {
  if (!str) return;

  if (str)
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
const New = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_161941e79c8d74ed7845153dcd131450f5315&q=criptomonedas&language=en,es"
    )
      .then((response) => response.json())
      .then((data) => {
        setNews(data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <>
      {news.map((el, i) => {
        return (
          <article key={i} className="new">
            <a href={el.link}>
              <div className="new_image">
                {!el.image_url && (
                  <img src={require("./mockup.png")} alt="mockup"></img>
                )}
                {el.image_url && <img src={el.image_url} alt={el.title}></img>}
              </div>
              <div>
                <h4>{el.title}</h4>
                <p>{truncate(el.description, 45)}</p>
              </div>
              <span className="new_date">{el.pubDate}</span>
            </a>
          </article>
        );
      })}
    </>
  );
};

export default New;
