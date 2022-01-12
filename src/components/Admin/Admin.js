import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import EditProduct from "../EditProduct/EditProduct";
import ManageProduct from "../ManageProduct/ManageProduct";
import "./Admin.css";

const Admin = () => {

  const [active, setActive] = useState({manage: true, manageActive: 'manageActive'});
  // const manageActive = (active.manageActive);
  // const addActive = (active.addActive);
  // const editActive = (active.editActive);
  // console.log(active.event.target.parrentNode);
  const parentNode= (event) => {
    const targetTag = (event.target);
    console.log(targetTag);
    targetTag.classList.remove('active');
    targetTag.classList.add('active');
  }

  return (
    <div className="admin-container">
      <div className="side-bar">
        <div className="name">
        <Navbar.Brand className="brand" as={Link} to="/">Fresh Valley</Navbar.Brand>
          <hr />
        </div>
        <div onClick={(event)=>parentNode(event)} className="menu">

           <h5 className='active' onClick={(event)=>setActive({manage: true, manageActive: 'manageActive'})}>
             <span><FontAwesomeIcon icon={faBars} /></span>
              Manage Product
           </h5>

           <h5 onClick={(event)=>setActive({add: true, addActive: 'addActive'})}>
             <span><FontAwesomeIcon icon={faPlus} /></span>
              Add Product
           </h5>

           <h5 onClick={()=>setActive({edit: true, editActive: 'editActive'})}><span><FontAwesomeIcon icon={faEdit} />
           </span>
            Edit Product
           </h5>

        </div>
      </div>
      <div className="main">
      <Navbar expand="lg" className='admin-navbar my-0'>
        <Container>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav
              className="my-2 my-lg-0 admin-navbar-navlink"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/order">Order</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              <Nav.Link id="login" as={Link} to="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <hr />
      </Navbar>
      <div className="main-content">

        {
          active.manage && <ManageProduct/>
        }
        {
          active.add && <AddProduct/>
        }
        {
          active.edit && <EditProduct/>
        }

      </div>
      </div>
    </div>
  );
};

export default Admin;
