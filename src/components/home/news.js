import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}
const New = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_161941e79c8d74ed7845153dcd131450f5315&q=blockchain&language=en"
    )
      .then((response) => response.json())
      .then((data) => setNews(data.results))
      .catch((error) => console.log(error));
  }, []);
  console.log(news);
  return (
    <>
      {news.map((el) => {
        return (
          <article className="new">
            <a href={el.link}>
              <img src={el.image_url} alt=""></img>
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
