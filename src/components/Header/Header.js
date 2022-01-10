import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userContext } from "../../App";
import { handleSignOut, initializeLoginFramework } from "../Login/LoginManager";
import "./Header.css";

const Header = () => {

  const [loggedInUser, setLoggedInUser] = useContext(userContext);
  const [anchorElUser, setAnchorElUser] = useState(null);
  console.log(loggedInUser);
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogOut = () => {
    // const displayNone = document.querySelector('#profile');
    initializeLoginFramework();
    handleSignOut();
    // displayNone.style.display='none';
    
  };



  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <Navbar expand="lg" className='my-0'>
        <Container>
          <Navbar.Brand className="brand" as={Link} to="/">Fresh Valley</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-end" id="navbarScroll">
            <Nav
              className="my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/order">Order</Nav.Link>
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
              {
                !loggedInUser?.signInUser && <Nav.Link id="login" as={Link} to="/login">Login</Nav.Link>
              }
              {loggedInUser?.signInUser && (
              <Box id='profile' className='mt-3' sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        loggedInUser?.photo ||
                        "https://i.ibb.co/5GzXkwq/user.png"
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">Account</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogOut}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
