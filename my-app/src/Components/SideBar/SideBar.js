import { Link } from 'react-router-dom';
import './main.css';

export default function SideBar() {
  return (
    <div className="App">
      var NewComponent = React.createClass(
      {
        <div>
          <title>Danh sách nhân viên | Quản trị Admin</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Main CSS*/}
          <link rel="stylesheet" type="text/css" href="css/main.css" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
          />
          {/* or */}
          <link
            rel="stylesheet"
            href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
          />
          {/* Font-icon css*/}
          <link
            rel="stylesheet"
            type="text/css"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css"
          />
          {/* Navbar*/}
          <header className="app-header">
            {/* Sidebar toggle button*/}
            <a
              className="app-sidebar__toggle"
              href="#"
              data-toggle="sidebar"
              aria-label="Hide Sidebar"
            />
            {/* Navbar Right Menu*/}
            <ul className="app-nav">
              {/* User Menu*/}
              <li>
                <a className="app-nav__item" href="/index.html">
                  <i className="bx bx-log-out bx-rotate-180" />{" "}
                </a>
              </li>
            </ul>
          </header>
          {/* Sidebar menu*/}
          <div className="app-sidebar__overlay" data-toggle="sidebar" />
          <aside className="app-sidebar">
            <div className="app-sidebar__user">
              <img
                className="app-sidebar__user-avatar"
                src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/anh-anime-chibi.jpg?resize=560%2C560&ssl=1"
                width="50px"
                alt="User Image"
              />
              <div>
                <p className="app-sidebar__user-name">
                  <b>Dương Diệp</b>
                </p>
              </div>
            </div>
            <hr />
            <ul className="app-menu ">
              <li>
                <a
                  className="app-menu__item active"
                  href="/admin/account"
                >
                  <i className="app-menu__icon bx bx-id-card" />
                  <span className="app-menu__label">Quản lý tài khoản</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="/admin/product">
                  <i className="app-menu__icon bx bx-purchase-tag-alt" />
                  <span className="app-menu__label">Quản lý sản phẩm</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="/Order">
                  <i className="app-menu__icon bx bx-task" />
                  <span className="app-menu__label">Quản lý đơn hàng</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="/admin/brand">
                  <i className="app-menu__icon bx bx-run" />
                  <span className="app-menu__label">Quản lý thương hiệu</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="/admin/category">
                  <i className="app-menu__icon bx bx-category" />
                  <span className="app-menu__label">Quản lý danh mục</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="/admin/image">
                  <i className="app-menu__icon bx bx-image" />
                  <span className="app-menu__label">Quản lý hình ảnh</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="quan-ly-bao-cao.html">
                  <i className="app-menu__icon bx bx-pie-chart-alt-2" />
                  <span className="app-menu__label">Báo cáo doanh thu</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
         }
         );
        </div>
    );
}