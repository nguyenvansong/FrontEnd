import "./main.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddAccount() {
  let navigate = useNavigate();

  const formData = new FormData();

  const [userName, setUserName] = useState();
  const [fullName, setFullName] = useState();
  const [password, setPassword] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [accountImage, setAccountImage] = useState(null);
  const [accountStatus, setAccountStatus] = useState();
  const [accountRole, setAccountRole] = useState();

  const onNameChange = (e) => {
    setFullName(e.target.value);
  };

  const onAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onUserNameChange = (e) => {
    setUserName(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onImageChange = (e) => {
    setAccountImage(e.target.files[0]);
  };

  const onStatusChange = (e) => {
    setAccountStatus(e.target.value);
  };

  const onRoleChange = (e) => {
    setAccountRole(e.target.value);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    formData.append("userName", userName);
    formData.append("fullName", fullName);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("accountImage", accountImage);
    formData.append("accountStatus", accountStatus);
    formData.append("accountRole", accountRole);

    await axios
      .post("http://localhost:8080/account/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(() => {
        console.log("File upload successfully ");
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/admin/account");
  };
  return (
    <div>
      <title>Thêm nhân viên | Quản trị Admin</title>
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
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    .Choicefile {\n      display: block;\n      background: #14142B;\n      border: 1px solid #fff;\n      color: #fff;\n      width: 150px;\n      text-align: center;\n      text-decoration: none;\n      cursor: pointer;\n      padding: 5px 0px;\n      border-radius: 5px;\n      font-weight: 500;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .Choicefile:hover {\n      text-decoration: none;\n      color: white;\n    }\n\n    #uploadfile,\n    .removeimg {\n      display: none;\n    }\n\n    #thumbbox {\n      position: relative;\n      width: 100%;\n      margin-bottom: 20px;\n    }\n\n    .removeimg {\n      height: 25px;\n      position: absolute;\n      background-repeat: no-repeat;\n      top: 5px;\n      left: 5px;\n      background-size: 25px;\n      width: 25px;\n      /* border: 3px solid red; */\n      border-radius: 50%;\n\n    }\n\n    .removeimg::before {\n      -webkit-box-sizing: border-box;\n      box-sizing: border-box;\n      content: '';\n      border: 1px solid red;\n      background: red;\n      text-align: center;\n      display: block;\n      margin-top: 11px;\n      transform: rotate(45deg);\n    }\n\n    .removeimg::after {\n      /* color: #FFF; */\n      /* background-color: #DC403B; */\n      content: '';\n      background: red;\n      border: 1px solid red;\n      text-align: center;\n      display: block;\n      transform: rotate(-45deg);\n      margin-top: -2px;\n    }\n  ",
        }}
      />
      {/* Navbar*/}
      {/* Sidebar menu*/}
      <div className="app-sidebar__overlay" data-toggle="sidebar" />
      <main className="app-content">
        <div className="app-title mt-5">
          <ul className="app-breadcrumb breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin/account">Danh sách tài khoản</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Tạo tài khoản</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Tạo mới tài khoản</h3>
              <div className="tile-body">
                <form
                  className="row"
                  onSubmit={(e) => onSubmit(e)}
                  encType="multipart/form-data"
                >
                  <div className="form-group col-md-4">
                    <label className="control-label">Họ và tên</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Họ và tên"
                      required
                      name="fullName"
                      onChange={(e) => onNameChange(e)}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="control-label">Địa chỉ</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Địa chỉ"
                      required
                      name="address"
                      onChange={(e) => onAddressChange(e)}
                    />
                  </div>
                  <div className="form-group col-md-4">
                    <label className="control-label">Số điện thoại</label>
                    <input
                      className="form-control"
                      type="tel"
                      placeholder="Số điện thoại"
                      required
                      name="phone"
                      onChange={(e) => onPhoneChange(e)}
                    />
                  </div>
                  <div className="form-group  col-md-4">
                    <label className="control-label">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      onChange={(e) => onEmailChange(e)}
                    />
                  </div>
                  <div className="form-group col-md-3">
                    <label className="control-label">Trạng thái</label>
                    <select
                      className="form-control"
                      id="exampleSelect2"
                      required
                      onChange={onStatusChange}
                    >
                      <option>-- Chọn trạng thái --</option>
                      <option value={1}>Hoạt động</option>
                      <option value={0}>Đã xóa</option>
                    </select>
                  </div>
                  <div className="form-group  col-md-3">
                    <label htmlFor="exampleSelect1" className="control-label">
                      Quyền
                    </label>
                    <select
                      className="form-control"
                      id="exampleSelect1"
                      onChange={onRoleChange}
                      required
                    >
                      <option>-- Chọn chức vụ --</option>
                      <option value={0}>Admin</option>
                      <option value={1}>Khách hàng</option>
                    </select>
                  </div>
                  <div className="form-group  col-md-4">
                    <label className="control-label">Tài khoản</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Tài khoản"
                      required
                      name="userName"
                      onChange={(e) => onUserNameChange(e)}
                    />
                  </div>
                  <div className="form-group  col-md-4">
                    <label className="control-label">Mật khẩu</label>
                    <input
                      className="form-control"
                      type="password"
                      placeholder="Mật khẩu"
                      required
                      name="password"
                      onChange={(e) => onPasswordChange(e)}
                    />
                  </div>
                  <div className="mb-3 col-md-5">
                    <label className="control-label">Ảnh tài khoản</label>
                    <input
                      type={"file"}
                      className="form-control"
                      placeholder="Upload"
                      name="file"
                      onChange={onImageChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-outline-primary ">
                    Xác nhận
                  </button>
                  <Link
                    className="btn btn-outline-danger mx-2 cancel"
                    to="/admin/account"
                  >
                    Hủy
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
