import { useState } from "react";
import ToggleCartIcon from "../components/ToggleCartIcon";
import { Link } from "react-router-dom";

const Menu = ({ products, categories, hadleAddToCart }) => {
  //   --------- Filter ---------
  const [currentCategory, setCurrentCategory] = useState(1);

  // Get the filterd item
  const filteredItems =
    currentCategory === 0
      ? products
      : products.filter((p) => p.category === currentCategory);

  //   --------- Pagination ---------
  const itemsCountPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  //   Get the start index in the page
  const startIndexInPage = (currentPage - 1) * itemsCountPerPage;

  //   Get the items in the page
  const paginatdItems = filteredItems.slice(
    startIndexInPage,
    startIndexInPage + itemsCountPerPage
  );

  //   Get no of pages
  const noOfPages = Math.ceil(filteredItems.length / itemsCountPerPage);

  //   Get array of pages numbers
  let pagesArray = [];
  for (let i = 1; i <= noOfPages; i++) {
    pagesArray.push(i);
  }

  //   Change Page handler
  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  //   change the current cutegory handler
  const handleChangeCategory = (categryId) => {
    setCurrentCategory(categryId);
    setCurrentPage(1);
  };

  // search through filteredItems
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredSearch = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );
  const paginatedSearchItems = filteredSearch.slice(
    startIndexInPage,
    startIndexInPage + itemsCountPerPage
  );
  const noOfSearchPages = Math.ceil(filteredSearch.length / itemsCountPerPage);
  let searchPagesArray = [];
  for (let i = 1; i <= noOfSearchPages; i++) {
    searchPagesArray.push(i);
  }

  // sort by price
  const [sort, setSort] = useState("");
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const sortedSearch = search
    ? paginatedSearchItems.sort((a, b) => {
        if (sort === "highest") {
          return a.price - b.price;
        } else if (sort === "lowest") {
          return b.price - a.price;
        }
      })
    : paginatdItems.sort((a, b) => {
        if (sort === "highest") {
          return a.price - b.price;
        } else if (sort === "lowest") {
          return b.price - a.price;
        }
      });

  return (
    <div className="row mt-3">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon2"
          onChange={(e) => handleSearch(e)}
        />
      </div>
      <div className="col-3">
        <ul className="list-group">
          {categories.map((cat) => (
            <li
              style={{ cursor: "pointer" }}
              onClick={() => handleChangeCategory(cat.id)}
              key={cat.id}
              className={
                cat.id === currentCategory
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="col-9">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <button
                  class="btn btn-outline-dark me-2"
                  type="submit"
                  value="lowest"
                  onClick={(e) => handleSort(e)}
                >
                  {/* arrow down */}
                  <i class="fas fa-sort-down"></i>
                </button>
                Price
                <button
                  class="btn btn-outline-dark ms-2"
                  type="submit"
                  value="highest"
                  onClick={(e) => handleSort(e)}
                >
                  {/* arrow up */}
                  <i class="fas fa-sort-up"></i>
                </button>
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {search === ""
              ? paginatdItems.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <Link to={`/product/${p.name}/${p.id}`}>{p.name}</Link>
                    </td>

                    <td>{p.price} $</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => hadleAddToCart(p.id)}
                    >
                      <ToggleCartIcon isInCart={p.isInCart} />
                    </td>
                  </tr>
                ))
              : paginatedSearchItems.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <Link to={`/product/${p.name}/${p.id}`}>{p.name}</Link>
                    </td>

                    <td>{p.price} $</td>
                    <td
                      style={{ cursor: "pointer" }}
                      onClick={() => hadleAddToCart(p.id)}
                    >
                      <ToggleCartIcon isInCart={p.isInCart} />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
        {/* Pagination */}

        {search === ""
          ? pagesArray.length !== 1 && (
              <nav aria-label="...">
                <ul className="pagination pagination-sm">
                  {pagesArray.map((page) => (
                    <li
                      key={page}
                      style={{ cursor: "pointer" }}
                      className={
                        page === currentPage ? "page-item active" : "page-item"
                      }
                      aria-current="page"
                      onClick={() => handleChangePage(page)}
                    >
                      <span className="page-link">{page}</span>
                    </li>
                  ))}
                </ul>
              </nav>
            )
          : searchPagesArray.length !== 1 && (
              <nav aria-label="...">
                <ul className="pagination pagination-sm">
                  {searchPagesArray.map((page) => (
                    <li
                      key={page}
                      style={{ cursor: "pointer" }}
                      className={
                        page === currentPage ? "page-item active" : "page-item"
                      }
                      aria-current="page"
                      onClick={() => handleChangePage(page)}
                    >
                      <span className="page-link">{page}</span>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
      </div>
    </div>
  );
};

export default Menu;
