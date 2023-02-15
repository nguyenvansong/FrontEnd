import "./main.css";
import { MenuItem, Select } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditProduct() {
  let navigate = useNavigate();
  const { id } = useParams();

  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [productDto, setProductDto] = useState({
    productName: "",
    price: 0,
    productDecription: "",
    discount: 0,
    brand: null,
    category: null,
  });

  const { productName, price, productDecription, discount, brand, category } =
    productDto;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const resultBrands = await axios.get("http://localhost:8080/brand/getAll");
    setBrands(resultBrands.data);
    const resultCategories = await axios.get(
      "http://localhost:8080/category/getAll"
    );
    setCategories(resultCategories.data);

    const result = await axios.get(`http://localhost:8080/product/${id}`);
    setProductDto(result.data);
  };

  const onInputChange = (e) => {
    setProductDto({ ...productDto, [e.target.name]: e.target.value });
  };

  const onBrandChange = (e) => {
    const selectedId = e.target.value;
    const selectedBrand = brands.filter((b) => b.brandId == selectedId)[0];
    setProductDto({ ...productDto, brand: selectedBrand });
  };
  const onCategoryChange = (e) => {
    const selectedId = e.target.value;
    const selectedCategory = categories.filter(
      (c) => c.categoryID == selectedId
    )[0];
    setProductDto({ ...productDto, category: selectedCategory });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/product/${id}`, productDto);
    navigate("/");
  };
  return (
    <div>
      <title>Quản lý sản phẩm</title>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Main CSS*/}
      <link rel="stylesheet" type="text/css" href="main.css" />
      {/* Custom styles for this template */}

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v6.3.0/css/all.css"
      />
      {/* bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"
      ></script>

      <main className="app-content">
        <div className="app-title mt-5">
          <ul className="app-breadcrumb breadcrumb">
            <li className="breadcrumb-item">
              <a href="/admin/product">Danh sách sản phẩm</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">Sửa sản phẩm</a>
            </li>
          </ul>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="tile">
              <h3 className="tile-title">Sửa sản phẩm</h3>
              <div className="tile-body">
                <form className="row" onSubmit={(e) => onSubmit(e)}>
                  <div className="group col-md-4">
                    <label className="control-label">Tên sản phẩm </label>
                    <input
                      required
                      type={"text"}
                      className="form-control"
                      placeholder="Tên sản phẩm"
                      name="productName"
                      value={productName}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label className="control-label">Giá tiền</label>
                    <input
                      required
                      type={"number"}
                      className="form-control"
                      placeholder="Giá"
                      name="price"
                      value={price}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label className="control-label">Sale</label>
                    <input
                      required
                      type={"number"}
                      className="form-control"
                      placeholder="Giảm giá"
                      name="discount"
                      value={discount}
                      onChange={(e) => onInputChange(e)}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label className="control-label">Thương hiệu</label>
                    <Select
                      fullWidth
                      onChange={onBrandChange}
                      required
                      value={brand == null ? 1 : brand.brandId}
                    >
                      {brands.map((brand) => (
                        <MenuItem key={brand.brandId} value={brand.brandId}>
                          {brand.brandName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>

                  <div className="form-group col-md-4">
                    <label className="control-label">Danh mục</label>
                    <Select
                      fullWidth
                      onChange={onCategoryChange}
                      required
                      value={category == null ? 1 : category.categoryID}
                    >
                      {categories.map((category) => (
                        <MenuItem
                          key={category.categoryID}
                          value={category.categoryID}
                        >
                          {category.categoryName}
                        </MenuItem>
                      ))}
                    </Select>
                  </div>

                  <div className="form-group col-md-10">
                    <label className="control-label">Mô tả</label>
                    <textarea
                      required
                      className="form-control"
                      placeholder="Mô tả"
                      name="productDecription"
                      value={productDecription}
                      onChange={(e) => onInputChange(e)}
                    ></textarea>
                  </div>
                  <div>
                    <button type="submit" class="btn btn-success">
                      Lưu lại
                    </button>{" "}
                    &nbsp;
                    <Link
                      to="/admin/product"
                      class="btn btn-outline-danger mx-2 cancel"
                    >
                      Hủy bỏ
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Essential javascripts for application to work*/}
      {/* The javascript plugin to display page loading on top*/}
    </div>
  );
}