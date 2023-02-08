import {Link} from 'react-router-dom';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faAddressCard, faBagShopping, faBell,faCartShopping,faHouse,faLaptop,faMagnifyingGlass, faTableList} from '@fortawesome/free-solid-svg-icons';
import {faCircleQuestion,faCircleUser} from '@fortawesome/free-regular-svg-icons';

import clsx from 'clsx';
import styles from './header.module.scss';

import logo from './images/logo.png';
import product1 from './images/product1.jpg';
function Header(){
    return (
        <>
            <div className={clsx(styles.wrap_header)}>
                <div className={clsx(styles.header,styles.mg_left_right)}>
                    <div className={clsx(styles.header_content_top)}>
                    <div className={clsx(styles.header_content_top_1)}>
                        <span className={clsx(styles.header_contact)}>Kết nối</span>
                        <div>
                            <FontAwesomeIcon icon={faFacebook} />
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faInstagram} />
                        </div>
                    </div>
                    <div className={clsx(styles.header_content_top_2)}>
                        <div className={clsx(styles.wrap_notification)}>
                            <div className={clsx(styles.item_head)}>
                                <FontAwesomeIcon icon={faBell} />
                                <span className={clsx(styles.item_notification)}>Thông báo</span>
                            </div>
                            <div className={clsx(styles.notification)}>
                                <div className={clsx(styles.title)}>
                                    <span>Thông báo mới nhận</span>
                                </div>
                                <div className={clsx(styles.content)}>
                                    <ul className={clsx(styles.list)}>
                                        <li className={clsx(styles.item)}>
                                            <img src={product1} alt className={clsx(styles.image)} />
                                            <div className={clsx(styles.wrap)}>
                                                <span className={clsx(styles.title)}>Mã đến 100000đ mua gì cũng giảm</span>
                                                <p>Thêm hàng nghìn vocher 20000đ. Giảm 50% toàn bộ sản phẩm</p>
                                            </div>
                                        </li>
                                        <li className={clsx(styles.item)}>
                                            <img src={product1} alt className={clsx(styles.image)} />
                                            <div className={clsx(styles.wrap)}>
                                                <span className={clsx(styles.title)}>Mã đến 100000đ mua gì cũng giảm</span>
                                                <p>Thêm hàng nghìn vocher 20000đ. Giảm 50% toàn bộ sản phẩm</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <span>|</span>
                        <div className={clsx(styles.item_head)}>
                            <FontAwesomeIcon icon={faCircleQuestion} />
                            <span className={clsx(styles.item_help)}>Hỗ trợ</span>
                        </div>
                    </div>
                </div>
                    <div className={clsx(styles.header_main)}>
                        <div className={clsx(styles.header_logo)}>
                            <Link to="/">
                                <img src={logo} alt="" className={clsx(styles.logo)}/>
                            </Link>
                        </div>
                        {/* <Tippy 
                            interactive={true}
                            visible={true}
                            render={attrs => (
                                <div className="box" tabIndex="-1" {...attrs}>
                                  My tippy box
                                </div>
                              )}
                        > */}
                            <div className={clsx(styles.header_search)}>
                                <input type="text" className={clsx(styles.search_input)} placeholder="Tìm kiếm..."/>
                                <button className={clsx(styles.btn_search)}>
                                    <span className={clsx(styles.icon)}><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                </button>
                            </div>
                        {/* </Tippy> */}
                        <div className={clsx(styles.header_log)}>
                            <Link to="/register" className={clsx(styles.header_log_left)}>Đăng ký</Link>
                            <span>|</span>
                            <Link to="/login" className={clsx(styles.header_log_right)}>Đăng nhập</Link>
                        </div>
                        <div className={clsx(styles.header_log, 'hide')}>
                            <a href="" className={clsx(styles.header_log_left)}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </a>
                            <span>|</span>
                            <a href="" className={clsx(styles.header_log_right)}>
                                <FontAwesomeIcon icon={faCircleUser} />
                                <span>Song</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={clsx(styles.category_main)}>
                <ul className={clsx(styles.category_list, styles.mg_left_right)}>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faHouse} />
                        <Link to="/">Trang chủ</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faLaptop} />
                        <Link to="/laptop/laptopacer">Laptop Acer</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faLaptop} />
                        <Link to="/laptop/laptopasus">Laptop Asus</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faLaptop} />
                        <Link to="/laptop/laptopdell">Laptop Dell</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faLaptop} />
                        <Link to="/laptop/laptophp">Laptop HP</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faBagShopping} />
                        <Link to="/khuyenmai">Khuyến mãi</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faTableList} />
                        <Link to="/tintuc">Tin tức</Link>
                    </li>
                    <li className={clsx(styles.category_item)}>
                        <FontAwesomeIcon icon={faAddressCard} />
                        <Link to="/lienhe">Liên hệ</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
// assa
export default Header;