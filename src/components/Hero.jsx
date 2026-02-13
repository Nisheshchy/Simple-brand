/** @format */

const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-text">
        <h1> YOU FEET DESERVE THE BEST PRODUCT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          iste hic incidunt obcaecati veritatis, nihil accusantium voluptate eum
          quas ducimus .
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Also avaiable on</p>
          <div className="brand-icons">
            <img src="/images/esawa.png" alt="esawa" />
            <img src="/images/ime.png" alt="khalti" />
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/sneakers.png" alt="sneaker" />
      </div>
    </main>
  );
};
export default Hero;
