function Home() {
  return (
    <>
      <header className="container">
        <nav>
          <img
            className="logo"
            src="src\components\image\Rectangle 9.png"
            alt="logo"
          />
          <ul>
            <li>Accueil</li>
            <li>Carte </li>
            <li>Commande</li>
            <li>Profil</li>
          </ul>
        </nav>
        <div className="row">
          <img src="src\components\image\Rectangle 50.png" alt="photo" />
        </div>
        <div className="site">
          <p> Bienvenue à </p>

          <h1>Food Récup</h1>
          <h4> Luttons contre le gaspilage alimentaire ensemble</h4>
        </div>
        <div className="mirror">
          <h2>L’APPLICATION FOOD RÉCUP QUI A DU GOUT</h2>
          <h4 className="none">
            Une petite faim ? Avec l’application Food Récup, Rendez-vous dans
            les restaurants et magasins près de chez vous pour récupérer de
            délicieux paniers surprise à petits prix.
          </h4>
        </div>
        <section className="box">
          <div className="hello">
            <img src="src\components\image\petitdej.jpgg" alt="photo" />
          </div>

          <div className="hello">
            <img
              src="src\components\image\Steak stock photo.jpg"
              alt="banniere"
            />
          </div>

          <div className="hello">
            <img src="src\components\image\macdo.jpg" alt="banniere" />
          </div>
        </section>
      </header>
    </>
  );
}

export default Home;
