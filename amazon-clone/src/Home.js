import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg"
      />
      {/* Prodcut page */}
      <div className="home__row">
        <Product
          id="12321"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/81s6DUyQCZL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="123223"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/81GM4Ang38L._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="123223"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/81yrnELnedL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="123223"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/710jnzKlDTL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12325"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/817Cl9rdehL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="12325"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/711hfHGE+cL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="12325"
          title="A book"
          price={11.78}
          rating={5}
          image="https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>

      {/* product id,title,  price, rating, image */}
    </div>
  );
}

export default Home;
