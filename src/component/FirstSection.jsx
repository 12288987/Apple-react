import macbook from "../images/home/macbook-pro.jpg"

function FirstSection() {
  return (
    <section className="text-center mb-3 pt-4 first">
      <p>16-inch model</p>
      <h1>MacBook Pro</h1>
      <p className="theBest">The best for the brightest.</p>
      <div className="learn all-button">
        <a href="#">Learn more</a>
        <a href="#">Buy</a>
      </div>
      <div>
        <img className="macImage" src={macbook} alt="" />
      </div>
    </section>
  )
}

export default FirstSection;