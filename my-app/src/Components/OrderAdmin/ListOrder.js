import { Link } from "react-router-dom";
import { useState } from "react";
import "./main.css";
import DeleteButton from "../DeleteButton/DeleteButton";

export default function ListAccount() {
  const [flag, setFlag] = useState(false);
  const [show, setShow] = useState(true);

  const changeFlag = () => {
    return setFlag(!flag);
  };
  const deleteElement = () => {
    changeFlag();
    setShow(!show);
  };

  return (
    <div className="App">
      <div>
        
        <title>Danh sách hoá đơn | Quản trị Admin</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Main CSS*/}
        <link rel="stylesheet" type="text/css" href="css/main.css" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@latest/css/boxicons.min.css"
        />
       
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
                  <b>Danh sách hoá đơn</b>
                </a>
              </li>
            </ul>
            <div id="clock" />
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="tile">
                <div className="tile-body">
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
                        <th width={150}>Người mua</th>
                        <th>Ngày mua</th>
                        <th width={300}>Trạng thái</th>
                        <th width="100">Tính năng</th>
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
                        <td>15/01/2023</td>
                        <td>Đã duyệt</td>
                        <td className="table-td-center text-center">
                          <DeleteButton deleteItem={deleteElement} flag={flag} showModel={changeFlag}/>
                          <Link
                            className="btn btn-primary btn-sm edit"
                            title="Sửa"
                            to={`/UpdateOrder`}
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
      </div>
    </div>
  );
}
