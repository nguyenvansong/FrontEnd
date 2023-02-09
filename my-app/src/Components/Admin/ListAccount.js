import { Link } from 'react-router-dom';
import './main.css';


export default function ListAccount() {
  return (
<div className="App">
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
          {/* Sidebar menu*/}
          <div className="app-sidebar__overlay" data-toggle="sidebar" />
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
    </div>
    
  );
}
