import New from "./news";
import Criptomonedas from "../../functions/functions";
import { Link } from "react-router-dom";

const Home = () => {
  const top = Criptomonedas().slice([0], [5]);
  

  
  
  return (
    <>
      <header className="home_header">
        <div className="header_overlay"></div>
        <h1>Sed sit amet fringilla sem, eget lacinia est.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          consequat volutpat gravida. Donec vestibulum ligula ante, sed
          consequat felis dapibus ut. Aenean dictum eu urna sit amet tincidunt.
          Vivamus risus mi, luctus at mauris sed, dapibus scelerisque odio.
          Suspendisse neque nulla, elementum vel congue eget, aliquet sit amet
          nunc. Aenean interdum mi sit amet lacinia suscipit. Fusce vitae dui
          vitae arcu facilisis elementum. Vivamus id bibendum libero. Sed vel
          pretium est, a tempus mauris. Nam bibendum neque eget justo mattis
          fermentum.
        </p>
      </header>

      <section className="section_news">
        <article className="section_top3">
          <div className="top3_container">
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L21.6569 10.3431L32 16L21.6569 21.6569L16 32L10.3431 21.6569L0 16L10.3431 10.3431L16 0Z"
                fill="#F2921D"
              />
            </svg>
            <h3>Top 5</h3>
          </div>
          {top.map((e, i) => {
            return (
              <Link to={`/criptomonedas/${e.id}`}>
                <span key={i}>
                  {e.rank} - {e.id.toUpperCase()}
                </span>
              </Link>
            );
          })}
        </article>
        <article className="news_container">
          <div className="news_title">
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 0L21.6569 10.3431L32 16L21.6569 21.6569L16 32L10.3431 21.6569L0 16L10.3431 10.3431L16 0Z"
                fill="#F2921D"
              />
            </svg>
            <h3>Últimas noticias</h3>
          </div>
          <div className="news_grid">
            <New />
          </div>
        </article>
        <div></div>
      </section>
    </>
  );
};

export default Home;
