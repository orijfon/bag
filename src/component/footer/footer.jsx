import "./footer.css";

import bilolrasm from "../../assets/logo (4).png";

function Footer() {
  return (
    <>
      <footer className="container">
        <div className="xbet">
          <section className="box">
            <h1 className="g2">
              <img src={bilolrasm} alt="" />
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing sed do eiusmod.
            </p>
          </section>

          <section className="box">
            <h2 className="g2">special catagories</h2>
            <p className="f">water resistant</p>
            <p className="f">charging system</p>
            <p className="f">artificial leather</p>
          </section>

          <section className="">
            <h2 className="g2">contact us</h2>
            <p className="f">(808) 555-0111</p>
            <p className="f">michelle.rivera@example.com</p>
            <p className="f">http://www.codehow.com</p>
          </section>

          <section className="box">
            <h2 className="g2">news latter</h2>
            <input className="inp" placeholder="enter your email" type="text" />

            <button className="vb">subscribe</button>
          </section>
        </div>
      </footer>
    </>
  );
}

export default Footer;
