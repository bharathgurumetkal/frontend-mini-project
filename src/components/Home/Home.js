import { useEffect, useState } from "react";
import Product from "../Product/Product";
import { FaSearch } from "react-icons/fa";
import Card from "../Card/Card";
import "./Home.css";

function Home() {
  let [state, setState] = useState("");
  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productList) => setProducts(productList));
  }, []);
  console.log(products);
  return (
    <div>
      <div className="search-bar text-center mb-5 mt-4">
        <input
          type="search"
          name="search"
          id="search"
          className="text-center rounded fs-5"
          placeholder="Search by product title"
          onChange={(obj) => setState(obj.target.value)}
        />
        <FaSearch className="search-icon" />
      </div>
      <div className="container">
        {state.trim() === "" ? (
          <div className="row">
            {products.map((item, index) => (
              <div className="col-sm-4 " key={index}>
                <Card
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  description={item.description}
                  rate={item.rating.rate}
                ></Card>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            {products.map((item, index) => {
              if (item.title.toLowerCase().includes(state.toLowerCase())) {
                return (
                  <div className="col-md-4 col-sm-6" key={index}>
                    <Card
                      title={item.title}
                      image={item.image}
                      price={item.price}
                      description={item.description}
                      rate={item.rating.rate}
                    ></Card>
                  </div>
                );
              }
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
