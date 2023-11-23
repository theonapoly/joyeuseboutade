import "./HomePage.scss";

function HomePage() {
  const handleClickBtn = () => {};

  return (
    <div className="home-main">
      <div className="title-home">
        <p className="text1-home">Bienvenue sur</p>
        <h1>Joyeuse boutade</h1>
        <p className="text2-home">
          finis les moments solitude pendant vos fetes
        </p>
      </div>
      <div>
        <button
          className="custom-btn btn-14"
          type="button"
          onClick={handleClickBtn}
        >
          T'as pas une blague ?
        </button>
      </div>
    </div>
  );
}

export default HomePage;
