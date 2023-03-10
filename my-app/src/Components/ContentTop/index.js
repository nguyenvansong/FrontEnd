import clsx from "clsx";
import styles from './contenttop.module.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import ads1 from './images/ads1.jpg';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.png';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';
import product5 from './images/product5.jpg';
import product6 from './images/product6.jpg';
import product7 from './images/product7.jpg';

//Trang
import maytinhban from './images/maytinhban.jpg';
import manhinh from './images/manhinh.jpg';
import linhkien from './images/linhkien.jpg';
import luutru from './images/luutru.jpg';
import thietbimang from './images/thietbimang.jpg';
import vouchers from './images/vouchers.jpg';

function ContentTop(){
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
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <>
            {/* bonus category */}
            <div className={clsx(styles.category_bonus)}>
                
                {/*Trang  */}
                <ul className={clsx(styles.category_list_compo, styles.mg_left_right)}>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={maytinhban} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/maytinhban">M??y t??nh b??n</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={manhinh} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/manhinh">M??n h??nh</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={linhkien} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/linhkienmaytinh">Linh ki???n m??y t??nh</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={luutru} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/thietbiluutru">Thi???t b??? l??u tr???</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={thietbimang} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/thietbimang">Thi???t b??? m???ng</Link>
                    </li>
                    <li className={clsx(styles.category_item_bonus)}>
                        <Link to="/">
                            <img src={vouchers} alt="" className={clsx(styles.img_bonus)}/>
                        </Link>
                        <br></br>
                        <Link to="/laptop/vouchers">Vouchers</Link>
                    </li>
                    
                </ul>
            </div>
            {/* end bonus */}
            
            <div className={clsx(styles.content_ads)}>
              <div className={clsx(styles.content_left)}>
                <div className={clsx(styles.slider)}>
                  <Slider {...settings}>
                    <div className={clsx(styles.image_item)}>
                        <div className={clsx(styles.image)}>
                            <img src={banner1} alt="" className={clsx(styles.image)}/>
                        </div>
                    </div>
                    <div className={clsx(styles.image_item)}>
                        <div className={clsx(styles.image)}>
                            <img src={banner2} alt="" className={clsx(styles.image)}/>
                        </div>
                    </div>
                  </Slider>
                </div>
                <div className={clsx(styles.notable_products)}>
                    <div className={clsx(styles.category)}>
                        <ul className={clsx(styles.list_category)}>
                            <li className={clsx(styles.item)}>
                                <span>S???N PH???M M???I</span>
                            </li>
                            <li className={clsx(styles.item)}>S???N PH???M KHUY???N M??I</li>
                            <li className={clsx(styles.item)}>S???N PH???M B??N CH???Y</li>
                        </ul>
                    </div>
                    <div className={clsx(styles.product)}>
                        <div className={clsx(styles.product_item)}>
                            <Link to="/product">
                                <img src={product1} alt="" className={clsx(styles.product_image)}/>
                                <div className={clsx(styles.product_name)}>HP Omen 15-dh0172TX Gaming Laptop</div>
                                <div className={clsx(styles.product_price)}>44.600.000<span>??</span></div>
                            </Link>
                        </div>
                        <div className={clsx(styles.product_item)}>
                            <Link to="/product">
                                <img src={product2} alt="" className={clsx(styles.product_image)}/>
                                <div className={clsx(styles.product_name)}>ASUS ROG Strix SCAR III G531GN-VAZ160T Laptop</div>
                                <div className={clsx(styles.product_price)}>44.600.000<span>??</span></div>
                            </Link>
                        </div>
                        <div className={clsx(styles.product_item)}>
                            <Link to="/product">
                                <img src={product3} alt="" className={clsx(styles.product_image)}/>
                                <div className={clsx(styles.product_name)}>LG Gram 17Z90N-V.AH75A5 Laptop - Silver</div>
                                <div className={clsx(styles.product_price)}>39.600.000<span>??</span></div>
                            </Link>
                        </div>
                        <div className={clsx(styles.product_item)}>
                            <Link to="/product">
                                <img src={product4} alt="" className={clsx(styles.product_image)}/>
                                <div className={clsx(styles.product_name)}>ASUS TUF Gaming FX705DT-H7138T Gaming Laptop</div>
                                <div className={clsx(styles.product_price)}>42.600.000<span>??</span></div>
                            </Link>
                        </div>
                    </div>
                </div>
              </div>
              <div className={clsx(styles.content_right)}>
                  <div className={clsx(styles.content_new)}>
                      <div className={clsx(styles.content_new_title)}>
                          <span>TIN T???C</span>
                          <div></div>
                      </div>
                      <div className={clsx(styles.content_new_wrap)}>
                          <ul className={clsx(styles.content_new_list)}>
                              <li className={clsx(styles.content_new_item)}>
                                  <div className={clsx(styles.wrap_image)}>
                                      <img src={product5} alt="" className={clsx(styles.content_new_item_image)}/>
                                  </div>
                                  <span>Gi?? iPhone XS v?? iPhone XR t???i VN ???????c ti???t l???: Th???p nh???t 22 tri???u, cao nh???t 43 tri???u, b??n cu???i th??ng 10</span>
                              </li>
                              <li className={clsx(styles.content_new_item)}>
                                  <div className={clsx(styles.wrap_image)}>
                                      <img src={product6} alt="" className={clsx(styles.content_new_item_image)}/>
                                  </div>
                                  <span>C???n c???nh iPhone X Plus s???p ra m???t c?? 3 camera sau ????????p kh??ng th??? k??m l??ng???</span>
                              </li>
                              <li className={clsx(styles.content_new_item)}>
                                  <div className={clsx(styles.wrap_image)}>
                                      <img src={product7} alt="" className={clsx(styles.content_new_item_image)}/>
                                  </div>
                                  <span>C??ch kh???c ph???c l???i iPhone b??? n??ng, v??ng ???ng d???ng v?? t??? ?????ng kh??a m??n h??nh!</span>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className={clsx(styles.ads)}>
                      <img src={ads1} alt="" className={clsx(styles.ads_image)}/>
                  </div>
              </div>
            </div>
        </>
    )
}
export default ContentTop;