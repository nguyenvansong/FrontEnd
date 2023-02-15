import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import clsx from "clsx";
import styles from "./contenttop.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ads1 from "./images/ads1.jpg";
import banner1 from "./images/banner1.jpg";
import banner2 from "./images/banner2.png";
import product1 from "./images/product1.jpg";
import product2 from "./images/product2.jpg";
import product3 from "./images/product3.jpg";
import product4 from "./images/product4.jpg";
import product5 from "./images/product5.jpg";
import product6 from "./images/product6.jpg";
import product7 from "./images/product7.jpg";
function ContentTop() {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [images, setImages] = useState();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProduct();
    loadImage();
  }, []);
  const loadProduct = async () => {
    const result = await axios.get("http://localhost:8080/product/getAll");
    setProducts(result.data);
  };

  const { id } = useParams();

  const loadImage = async (product) => {
    const result = await axios.get(
      `http://localhost:8080/image/getaLL`
    );
    setImages(result.data);
  };

  return (
    <>
      <div className={clsx(styles.content_ads, "mg-top")}>
        <div className={clsx(styles.content_left)}>
          <div className={clsx(styles.slider)}>
            <Slider {...settings}>
              <div className={clsx(styles.image_item)}>
                <div className={clsx(styles.image)}>
                  <img src={banner1} alt="" className={clsx(styles.image)} />
                </div>
              </div>
              <div className={clsx(styles.image_item)}>
                <div className={clsx(styles.image)}>
                  <img src={banner2} alt="" className={clsx(styles.image)} />
                </div>
              </div>
            </Slider>
          </div>
          <div className={clsx(styles.notable_products)}>
            <div className={clsx(styles.category)}>
              <ul className={clsx(styles.list_category)}>
                <li className={clsx(styles.item)}>
                  <span>SẢN PHẨM MỚI</span>
                </li>
                <li className={clsx(styles.item)}>SẢN PHẨM KHUYẾN MÃI</li>
                <li className={clsx(styles.item)}>SẢN PHẨM BÁN CHẠY</li>
              </ul>
            </div>
            <div className={clsx(styles.product)}>
              {products.map((product) => {
                loadImage(product);
                return (
                  <div className={clsx(styles.product_item)}>
                    <Link to="/product">
                      <img
                        src={`http://localhost:8080/getimage/image/default.jpg`}
                        alt=""
                        className={clsx(styles.product_image)}
                      />
                      <div className={clsx(styles.product_name)}>
                        {product.productName}
                      </div>
                      <div className={clsx(styles.product_price)}>
                        {product.price}
                        <span>đ</span>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={clsx(styles.content_right)}>
          <div className={clsx(styles.content_new)}>
            <div className={clsx(styles.content_new_title)}>
              <span>TIN TỨC</span>
              <div></div>
            </div>
            <div className={clsx(styles.content_new_wrap)}>
              <ul className={clsx(styles.content_new_list)}>
                <li className={clsx(styles.content_new_item)}>
                  <div className={clsx(styles.wrap_image)}>
                    <img
                      src={product5}
                      alt=""
                      className={clsx(styles.content_new_item_image)}
                    />
                  </div>
                  <span>
                    Giá iPhone XS và iPhone XR tại VN được tiết lộ: Thấp nhất 22
                    triệu, cao nhất 43 triệu, bán cuối tháng 10
                  </span>
                </li>
                <li className={clsx(styles.content_new_item)}>
                  <div className={clsx(styles.wrap_image)}>
                    <img
                      src={product6}
                      alt=""
                      className={clsx(styles.content_new_item_image)}
                    />
                  </div>
                  <span>
                    Cận cảnh iPhone X Plus sắp ra mắt có 3 camera sau “đẹp không
                    thể kìm lòng”
                  </span>
                </li>
                <li className={clsx(styles.content_new_item)}>
                  <div className={clsx(styles.wrap_image)}>
                    <img
                      src={product7}
                      alt=""
                      className={clsx(styles.content_new_item_image)}
                    />
                  </div>
                  <span>
                    Cách khắc phục lỗi iPhone bị nóng, văng ứng dụng và tự động
                    khóa màn hình!
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className={clsx(styles.ads)}>
            <img src={ads1} alt="" className={clsx(styles.ads_image)} />
          </div>
        </div>
      </div>
    </>
  );
}
export default ContentTop;
