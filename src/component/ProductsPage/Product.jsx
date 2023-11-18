import "./styles/product.css";
import React, { useState } from "react";
import Header from "./Header";
import Photobook from "./Photobook";
// import  photobookbg from "./img/photobookbg.png"
import BottomNavbar from "./BottomNavbar";
import { useNavigate } from "react-router-dom";
import slug from "slug";

import "./styles/photobook.css";

import wooData from "../Data/wooData";

export default function Product() {
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(
          wooData.base_url +
            "products?consumer_key=" +
            wooData.consumer_key +
            "&consumer_secret=" +
            wooData.consumer_secret
        );
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="product-page">
      <Header name="Priya" />
      <div className="product-c">
        {loading && (
          <div className="loader-box flex">
            <div className="loader"></div>
          </div>
        )}

        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {data &&
          data.map((item) => {
            return item.images.map((img) => {
              return (
                <>
                  <div
                    onClick={() => {
                      navigate(`/product/${slug(item.name)}`, {
                        state: {
                          details: { item },
                        },
                      });
                    }}
                  >
                    <Photobook img={img.src} desc={item.name} />
                  </div>
                </>
              );
            });
          })}
      </div>
      <BottomNavbar />
    </div>
  );
}
