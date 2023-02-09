import './main.css';
import React from "react";
import {Link} from "react-router-dom"


export default function EditAccount() {
      return (
        <div>
          <title>Sửa nhân viên | Quản trị Admin</title>
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
                <li className="breadcrumb-item">Danh sách tài khoản</li>
                <li className="breadcrumb-item"><a href="#">Sửa tài khoản</a></li>
              </ul>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="tile">
                  <h3 className="tile-title">Chỉnh sửa tài khoản</h3>
                  <div className="tile-body">
                    <form className="row">
                      <div className="group col-md-4">
                        <label className="control-label">ID </label>
                        <input className="form-control" type="text" />
                      </div>
                      <div className="form-group col-md-4">
                        <label className="control-label">Họ và tên</label>
                        <input className="form-control" type="text" required />
                      </div>
                      <div className="form-group col-md-4">
                        <label className="control-label">Địa chỉ</label>
                        <input className="form-control" type="text" required />
                      </div>
                      <div className="form-group  col-md-4">
                        <label className="control-label">Số điện thoại</label>
                        <input className="form-control" type="number" required />
                      </div>
                      <div className="form-group col-md-4">
                        <label className="control-label">Ngày sinh</label>
                        <input className="form-control" type="date" />
                      </div>
                      <div className="form-group col-md-3">
                        <label className="control-label">Giới tính</label>
                        <select className="form-control" id="exampleSelect2" required>
                          <option>-- Chọn giới tính --</option>
                          <option>Nam</option>
                          <option>Nữ</option>
                        </select>
                      </div>
                      <div className="form-group  col-md-3">
                        <label htmlFor="exampleSelect1" className="control-label">Chức vụ</label>
                        <select className="form-control" id="exampleSelect1">
                          <option>-- Chọn chức vụ --</option>
                          <option>Admin</option>
                          <option>User</option>
                        </select>
                      </div>
                      <div className="form-group col-md-12">
                        <label className="control-label">Ảnh 3x4</label>
                        <div id="myfileupload">
                          <input type="file" id="uploadfile" name="ImageUpload" onchange="readURL(this);" />
                        </div>
                        <div id="thumbbox">
                          <img height={300} width={300} alt="Thumb image" id="thumbimage" style={{display: 'none'}} />
                          <a className="removeimg" href="javascript:" />
                        </div>
                        <div id="boxchoice">
                          <a href="javascript:" className="Choicefile"><i className="bx bx-upload" /></a>
                          <p style={{clear: 'both'}} />
                        </div>
                      </div></form>
                    <button className="btn btn-save" type="button">Lưu lại</button>
                    <a className="btn btn-cancel" href="/">Hủy bỏ</a>
                  </div>
                </div>
              </div>
            </div>
            </main>
        </div>
      );
    };
