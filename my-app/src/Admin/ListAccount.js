import { Link } from 'react-router-dom';
import './main.css';

export default function ListAccount() {
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
            <ul className="app-menu">
              <li>
                <a
                  className="app-menu__item active"
                  href="table-data-table.html"
                >
                  <i className="app-menu__icon bx bx-id-card" />
                  <span className="app-menu__label">Quản lý tài khoản</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="table-data-product.html">
                  <i className="app-menu__icon bx bx-purchase-tag-alt" />
                  <span className="app-menu__label">Quản lý sản phẩm</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="table-data-oder.html">
                  <i className="app-menu__icon bx bx-task" />
                  <span className="app-menu__label">Quản lý đơn hàng</span>
                </a>
              </li>
              <li>
                <a className="app-menu__item" href="table-data-banned.html">
                  <i className="app-menu__icon bx bx-run" />
                  <span className="app-menu__label">Quản lý thương hiệu</span>
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
          <main className="app-content">
            <div className="app-title">
              <ul className="app-breadcrumb breadcrumb side">
                <li className="breadcrumb-item active">
                  <a href="#">
                    <b>Danh sách nhân viên</b>
                  </a>
                </li>
              </ul>
              <div id="clock" />
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <div className="tile-body">
                    <div className="row element-button">
                      <div className="col-sm-2">
                        <a
                          className="btn btn-add btn-sm"
                          href="/AddAcount"
                          title="Thêm"
                        >
                          <i className="fas fa-plus" />
                          Tạo mới tài khoản
                        </a>
                      </div>
                    </div>
                    <table
                      className="table table-hover table-bordered js-copytextarea"
                      cellPadding={0}
                      cellSpacing={0}
                      border={0}
                      id="sampleTable"
                    >
                      <thead>
                        <tr>
                          <th width={10}>
                            <input type="checkbox" id="all" />
                          </th>
                          <th>ID </th>
                          <th width={150}>Họ và tên</th>
                          <th width={300}>Địa chỉ</th>
                          <th>Giới tính</th>
                          <th>SĐT</th>
                          <th>Chức vụ</th>
                          <th width={100}>Tính năng</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td width={10}>
                            <input
                              type="checkbox"
                              name="check1"
                              defaultValue={1}
                            />
                          </td>
                          <td>#CD12837</td>
                          <td>Hồ Thị Thanh Ngân</td>
                          <td>155-157 Trần Quốc Thảo, Quận 3, Hồ Chí Minh </td>
                          <td>Nữ</td>
                          <td>0926737168</td>
                          <td>Bán hàng</td>
                          <td className="table-td-center text-center">
                            <button
                              className="btn btn-primary btn-sm trash"
                              type="button"
                              title="Xóa"
                              onclick="myFunction(this)"
                            >
                              <i className="fas fa-trash-alt" />
                            </button>
                            <Link
                              className="btn btn-primary btn-sm edit"
                              type="button"
                              title="Sửa"
                              to={`EditAccount`}
                              id="show-emp"
                              data-toggle="modal"
                              data-target="#ModalUP"
                            >
                              <i className="fas fa-edit" />
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </main>
          {/*
MODAL
*/}
          
          {/*
MODAL
*/}
          {/* Essential javascripts for application to work*/}
          {/* The javascript plugin to display page loading on top*/}
          {/* Page specific javascripts*/}
          {/* Data table plugin*/}
        </div>
      }
      );
    </div>
  );
}
