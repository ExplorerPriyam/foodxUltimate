import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import Modal from "../Modal";
import Cart from "../screens/Cart";
import { useCart} from '../components/ContextReducer';
const Navbar = () => {
  const navigate = useNavigate();
  let data = useCart();
  const [cartView, setCartView] = useState(false)
  const supportLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  }


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark  bg-black" style={{ background: "green" }}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fst-italic" to="/">FoodX</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" />
              <Link className="nav-link fs-5 active" aria-current="page" to="/">Home</Link>
              {
                (localStorage.getItem("authToken")) ?
                  <li className="nav-item">
                    <Link className="nav-link fs-5 active" aria-current="page" to="/myOrder">My Orders</Link>
                  </li> : ""
              }
            </ul>
            {
              (!localStorage.getItem("authToken")) ?
                <div className="d-flex">
                  <Link className="btn bg-white text-dark mx-1 " to="/login">Login</Link>
                  <Link className="btn bg-white text-dark mx-1 " to="/createuser">SignUp</Link>
                </div> :
                <div>
                  <div className="btn bg-danger text-white mx-2 " onClick={supportLogout}> Logout  </div>
                  <div className="btn bg-white text-dark mx-2 " onClick={() => {
                    setCartView(true)
                  }}> My Cart🛒{" "}
                   {
                    data.length!==0? <Badge pill bg="danger"> {data.length}</Badge>:""
                   }
                  </div>
                  {cartView ? <Modal onClose={()=>setCartView(false)} ><Cart/></Modal> : null}
                </div>
            }
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;