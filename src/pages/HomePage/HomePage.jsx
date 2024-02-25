import sprite from '../../assets/sprite.svg';
import homeImage from '../../assets/home-image.jpg';

const HomePage = () => {
  return (
    <div>
      <div>
        <h1>
          The road to the
          <span>depths</span> of the human soul
        </h1>
        <p>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </p>
        <button type="button">
          Get started
          <svg width={12} height={12}>
            <use href={`${sprite}#icon-arrow`}></use>
          </svg>
        </button>
      </div>
      <div>
        <img src={homeImage} alt="home page image" width={464} height={526} />
        <div>
          <svg width={19} height={19}>
            <use href={`${sprite}#icon-question-mark`}></use>
          </svg>
        </div>
        <div>
          <svg width={19} height={19}>
            <use href={`${sprite}#icon-users`}></use>
          </svg>
        </div>
        <div>
          <svg width={19} height={19}>
            <use href={`${sprite}#icon-check`}></use>
          </svg>
          <p>Experienced psychologists</p>
          <p>15,000</p>
        </div>
      </div>
      {/* <svg>
        <use href={`${sprite}#icon-ellipse`} />
      </svg> */}
    </div>
  );
};

export default HomePage;
