const Home = () => {
  return (
    <>
      <header className="home_header">
        <h1 className="header_title">Inicio</h1>
      </header>
      <section className="section">
        <div className="section_container">
          <img src="/" className="section_img" alt="img" />
        </div>
        <div className="section_text">
          <h2>Section title</h2>
          <p>lorem ipsummmmmmmmmmmmmmmmmm</p>
        </div>
      </section>
      <section className="section_news">
        <article className="section_top3">
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </article>
        <div className="news_container">
          <article className="new">
            <h4>Titulo de una noticia</h4>
            <p>Descripcion de la noticio sobre criptomonedas</p>
          </article>
          <article className="new">
            <h4>Titulo de una noticia</h4>
            <p>Descripcion de la noticio sobre criptomonedas</p>
          </article>
          <article className="new">
            <h4>Titulo de una noticia</h4>
            <p>Descripcion de la noticio sobre criptomonedas</p>
          </article>
        </div>
      </section>
    </>
  );
};

export default Home;
