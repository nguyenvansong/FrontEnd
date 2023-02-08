import clsx from 'clsx';
import styles from './product.module.scss';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCartPlus, faChevronRight, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../Navbar";
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';
import product4 from './images/product4.jpg';
import {useState } from 'react';

function Product(){
    const [showImage, setShowImage] = useState(product1);
    const [productPtice, setProductPrice] = useState("45.600.000");
    const [activePrice1, setActivePrice1] = useState(true);
    const [activePrice2, setActivePrice2] = useState(false);
    const [checked, setChecked] = useState(1);
    const [quantityCount, setQuantityCount] = useState(1);
    const [quantityAvailable, setQuantityAvailable] = useState(5);

    

    const handleType1 = () => {
        setChecked(1);
        setProductPrice("45.600.000");
        if(!activePrice1){
            setActivePrice1(!activePrice1);
            setActivePrice2(!activePrice2);
        }
    }
    const handleType2 = () => {
        setChecked(2);
        setProductPrice("47.900.000");
        if(!activePrice2){
            setActivePrice1(!activePrice1);
            setActivePrice2(!activePrice2);
        }
    }
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%", position: "absolute", right: "10px", opacity: "0.4" }}
            onClick={onClick}
          />
        );
      }
      
      const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black", borderRadius: "50%", position: "absolute", left: "10px", opacity: "0.4", zIndex: 1 }}
            onClick={onClick}
          />
        );
      }
    var settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 4000,
        // cssEase: "linear",
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //       infinite: true,
        //       dots: false
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1,
        //       initialSlide: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 1
        //     }
        //   }
        // ]
      };
    return (
        <>
            <div className={clsx(styles.product)}>
                <div class={clsx(styles.way)}>
                    <Link to="/" class={clsx(styles.link_way)}>Trang chủ</Link>
                    <span class={clsx(styles.icon)}><FontAwesomeIcon icon={faChevronRight}/></span>
                    <span
                        class={clsx(styles.link_way)}
                        >Sản phẩm
                    </span>
                </div>
                <div className={clsx(styles.product_wrap)}>
                    <div className={clsx(styles.product_images)}>
                        <img src={showImage} className={clsx(styles.product_image_main)}/>
                        <div className={clsx(styles.product_image_list)}>
                            <Slider {...settings}>
                                <div className={clsx(styles.product_image_item_wrap)}>
                                    <span><img src={product1} alt='' className={clsx(styles.product_image_item)} onClick={() => setShowImage(product1)}/></span>
                                </div>
                                <div className={clsx(styles.product_image_item_wrap)}>
                                    <span><img src={product2} alt='' className={clsx(styles.product_image_item)} onClick={() => setShowImage(product2)}/></span>
                                </div>
                                <div className={clsx(styles.product_image_item_wrap)}>
                                    <span><img src={product3} alt='' className={clsx(styles.product_image_item)} onClick={() => setShowImage(product3)}/></span>
                                </div>
                                <div className={clsx(styles.product_image_item_wrap)}>
                                    <span><img src={product4} alt='' className={clsx(styles.product_image_item)} onClick={() => setShowImage(product4)}/></span>
                                </div>
                                <div className={clsx(styles.product_image_item_wrap)}>
                                    <span><img src={product1} alt='' className={clsx(styles.product_image_item)} onClick={() => setShowImage(product1)}/></span>
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className={clsx(styles.product_info)}>
                        <div className={clsx(styles.name)}>
                            <span>ASUS ProArt StudioBook Pro 17 W700G1T-AV046T Laptop</span>
                        </div>
                        <div className={clsx(styles.price)}>
                            {productPtice}
                            <span>đ</span>
                        </div>
                        <div className={clsx(styles.type)} >
                            <div className={clsx(styles.type1,styles.type_all,{
                                [styles.active_price]: activePrice1
                            })} onClick={handleType1}>
                                <input type="radio" checked={checked === 1}  value="core-i5-ram-8gb-ssd-128gb" />
                                <span>Core I5 / Ram 8GB / SSD 128GB</span>
                                <div className={clsx(styles.price)}>
                                    45.600.000
                                    <span>đ</span>
                                </div>
                            </div>
                            <div className={clsx(styles.type2,styles.type_all,{
                                [styles.active_price]: activePrice2
                            })} onClick={handleType2}>
                                <input type="radio" checked={checked === 2} value="core-i7-ram-16gb-ssd-256-gb" />
                                <span>Core I7 / Ram 16GB / SSD 256 GB</span>
                                <div className={clsx(styles.price)}>
                                    47.900.000
                                    <span>đ</span>
                                </div>
                            </div>
                        </div>
                        <div className={clsx(styles.description_short)}>
                            <p>
                                Mainboard: HP Chipset Q87 – 4 Khe Ram<br/>
                                CPU: Intel® Xeon® Processor Core I5<br/>
                                Tản Nhiệt Khí: HP 800 G1 Tiêu Chuẩn<br/>
                                RAM: 8GB DDR3 1600Mhz<br/>
                                Ổ cứng: SSD 128G + HDD 1TB NEW<br/>
                                Card đồ họa: NVIDIA Geforce GTX 1650 4G DDR5 128bit 896 CUDA Core
                            </p>
                        </div>
                        <div className={clsx(styles.quantity)}>
                            <div className={clsx(styles.title)}>
                                <span>Số lượng</span>
                            </div>
                            <div className={clsx(styles.content)}>
                                <div className={clsx(styles.quantity_up)} onClick={() =>quantityCount > 1 && setQuantityCount(quantityCount - 1)}>
                                    <span className={clsx(styles.icon)}><FontAwesomeIcon icon={faMinus} /></span>
                                </div>
                                <div className={clsx(styles.quantity_number)}>{quantityCount}</div>
                                <div className={clsx(styles.quantity_down)} onClick={() => quantityCount < quantityAvailable && setQuantityCount(quantityCount + 1)}>
                                    <span className={clsx(styles.icon)}><FontAwesomeIcon icon={faPlus} /></span>
                                </div>
                            </div>
                            <div className={clsx(styles.available)}>
                                <span>{quantityAvailable}</span>
                                Sản phẩm có sẵn
                            </div>
                        </div>
                        <div className={clsx(styles.product_btn)}>
                            <button type='submit' className={clsx(styles.add_to_cart)}>
                                <span className={clsx(styles.icon)}><FontAwesomeIcon icon={faCartPlus} /></span>
                                Thêm vào giỏ hàng
                            </button>
                            <Link to="/thanh-toan">
                                <button type='submit' className={clsx(styles.buy_now)}>Mua ngay</button>
                            </Link>
                        </div>

                    </div>
                </div>
                <div className={clsx(styles.product_more)}>
                    <div className={clsx(styles.content_left)}>
                            <div className={clsx(styles.description)}>
                                <div className={clsx(styles.title)}>
                                    <p>MÔ TẢ SẢN PHẨM</p>
                                </div>
                                <div className={clsx(styles.content)}>
                                    CPU	Intel Core i7-9750H 2.6GHz up to 4.5GHz 12MB<br/>
                                    RAM	8GB DDR4 2666MHz (2x SO-DIMM socket, up to 32GB SDRAM)<br/>
                                    Ổ cứng	256GB SSD M.2 PCIE G3X4 (Support RAID 0) (2 slots)<br/>
                                    Card đồ họa	NVIDIA GeForce GTX 1660Ti 6GB GDDR6<br/>
                                    Màn hình	15.6″ FHD (1920 x 1080) IPS, Anti-Glare, 144Hz, 3ms, 300nits<br/>
                                    Cổng giao tiếp	2x USB 3.1, 1x USB 3.1 Gen 2, 1x USB Type C (Thunderbolt), Mini Display Port, HDMI<br/>
                                    Keyboard	RGB 4 Zone<br/>
                                    Audio	Waves MaxxAudio® Sound Technology<br/>
                                    Đọc thẻ nhớ	None<br/>
                                    Chuẩn LAN	10/100/1000/Gigabits Base T<br/>
                                    Chuẩn WIFI	802.11 AC (2X2) with MU-MIMO<br/>
                                    Bluetooth	v5.0<br/>
                                    Webcam	Acer Crystal Eye 720p<br/>
                                    Hệ điều hành	Windows 10 HomePin	4 Cell 48 WHrs<br/>
                                    Trọng lượng	2.4 kg<br/>
                                    Màu sắc	Abyssal Black<br/>
                                    Kích thước	361.4 x 254.15 x 22.9 (mm)<br/>
                                </div>
                                
                            </div>
                            <div className={clsx(styles.product_same)}>
                                <div className={clsx(styles.title)}>
                                    <p>SẢN PHẨM TƯƠNG TỰ</p>
                                </div>
                                <div className={clsx(styles.content)}>
                                    <div className={clsx(styles.product)}>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product1} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>HP Omen 15-dh0172TX Gaming Laptop</div>
                                            <div className={clsx(styles.product_price)}>44.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product2} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>ASUS ROG Strix SCAR III G531GN-VAZ160T Laptop</div>
                                            <div className={clsx(styles.product_price)}>44.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product3} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>LG Gram 17Z90N-V.AH75A5 Laptop - Silver</div>
                                            <div className={clsx(styles.product_price)}>39.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product4} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>ASUS TUF Gaming FX705DT-H7138T Gaming Laptop</div>
                                            <div className={clsx(styles.product_price)}>42.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product4} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>ASUS TUF Gaming FX705DT-H7138T Gaming Laptop</div>
                                            <div className={clsx(styles.product_price)}>42.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product4} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>ASUS TUF Gaming FX705DT-H7138T Gaming Laptop</div>
                                            <div className={clsx(styles.product_price)}>42.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product4} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>ASUS TUF Gaming FX705DT-H7138T Gaming Laptop</div>
                                            <div className={clsx(styles.product_price)}>42.600.000<span>đ</span></div>
                                        </div>
                                        <div className={clsx(styles.product_item)}>
                                            <img src={product4} alt="" className={clsx(styles.product_image)}/>
                                            <div className={clsx(styles.product_name)}>ASUS TUF Gaming FX705DT-H7138T Gaming Laptop</div>
                                            <div className={clsx(styles.product_price)}>42.600.000<span>đ</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className={clsx(styles.navbar)}>
                        <Navbar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;