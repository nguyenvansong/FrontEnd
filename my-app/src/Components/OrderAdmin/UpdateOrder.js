import './main.css';
import React from "react";


export default function UpdateOrder() {
      return (
        <div>
          <title>Sửa hoá đơn | Quản trị Admin</title>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Main CSS*/}
          <link rel="stylesheet" type="text/css" href="css/main.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css" />
          {/* or */}
          <link rel="stylesheet" href="https://unpkg.com/boxicons@latest/css/boxicons.min.css" />
          {/* Font-icon css*/}
          <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css" />
          <style dangerouslySetInnerHTML={{__html: "\n    .Choicefile {\n      display: block;\n      background: #14142B;\n      border: 1px solid #fff;\n      color: #fff;\n      width: 150px;\n      text-align: center;\n      text-decoration: none;\n      cursor: pointer;\n      padding: 5px 0px;\n      border-radius: 5px;\n      font-weight: 500;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .Choicefile:hover {\n      text-decoration: none;\n      color: white;\n    }\n\n    #uploadfile,\n    .removeimg {\n      display: none;\n    }\n\n    #thumbbox {\n      position: relative;\n      width: 100%;\n      margin-bottom: 20px;\n    }\n\n    .removeimg {\n      height: 25px;\n      position: absolute;\n      background-repeat: no-repeat;\n      top: 5px;\n      left: 5px;\n      background-size: 25px;\n      width: 25px;\n      /* border: 3px solid red; */\n      border-radius: 50%;\n\n    }\n\n    .removeimg::before {\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      content: '';\n      border: 1px solid red;\n      background: red;\n      text-align: center;\n      display: block;\n      margin-top: 11px;\n      transform: rotate(45deg);\n    }\n\n    .removeimg::after {\n      /* color: #FFF; */\n      /* background-color: #DC403B; */\n      content: '';\n      background: red;\n      border: 1px solid red;\n      text-align: center;\n      display: block;\n      transform: rotate(-45deg);\n      margin-top: -2px;\n    }\n  " }} />
          {/* Navbar*/}
          {/* Sidebar menu*/}
          <div className="app-sidebar__overlay" data-toggle="sidebar" />
          <main className="app-content">
            <div className="app-title mt-5">
              <ul className="app-breadcrumb breadcrumb">
                <li className="breadcrumb-item">Danh sách hoá đơn</li>
                <li className="breadcrumb-item"><a href="#">Sửa hoá đơn</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Chỉnh sửa hoá đơn</h3>
                  <div className="tile-body">
                    <form className="row">
                      <div className="group col-md-4">
                        <label className="control-label">ID </label>
                        <input className="form-control" type="text" defaultValue="#CD2187" disabled/>
                      </div>
                      <div className="form-group col-md-4">
                        <label className="control-label">Người mua</label>
                        <input className="form-control" type="text" required defaultValue="Hồ Thị Thanh Ngân" disabled/>
                      </div>
                      <div className="form-group col-md-4">
                        <label className="control-label">Ngày mua</label>
                        <input className="form-control" type="text" required defaultValue="15/01/2023" disabled/>
                      </div>
                      <div className="form-group col-md-3">
                        <label className="control-label">Trạng thái</label>
                        <select className="form-control" id="exampleSelect2" required>
                          <option>-- Chọn trạng thái --</option>
                          <option>Chưa duyệt</option>
                          <option>Đã duyệt</option>
                        </select>
                      </div>
                    </form>
           
                    <button className="btn btn-save" type="button">Lưu lại</button>
                    <a className="btn btn-cancel" href="/Order">Hủy bỏ</a>
                  </div>
                </div>
              </div>
            </div>
            </main>
        </div>
      );
    };
