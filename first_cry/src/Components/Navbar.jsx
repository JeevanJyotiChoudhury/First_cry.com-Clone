import React from "react";
import style_nb from "./Styles/Navbar.module.css";
import { IoIosSearch } from "react-icons/io";
import { VscLocation } from "react-icons/vsc";
import { AiOutlineHeart } from "react-icons/ai";
import { CgShoppingCart } from "react-icons/cg";
import { Box } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <Box>
      <Box className={style_nb.container}>
        <Box className={style_nb.left}>
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png"
            alt="logo"
            onClick={() => navigate("/")}
          />

          <span className={style_nb.searchcontainer}>
            <input
              type="text"
              placeholder="Search for a Category , Brand or Product"
            />
            <IoIosSearch className={style_nb.searchicon} />
          </span>
        </Box>

        <Box className={style_nb.right}>
          {/* location */}
          <Box className={style_nb.selectLocation}>
            <VscLocation className={style_nb.loactionicon} />
            <span>Select Location</span>
          </Box>
          <span className={style_nb.lati}>|</span>

          <Box className={style_nb.loginOther}>
            <span>Stores & Preschools</span>
            <span className={style_nb.lati}>|</span>
            <span>Support</span>
            <span className={style_nb.lati}>|</span>
            <span>Track Order</span>
            <span className={style_nb.lati}>|</span>
            <span>FirstCry Parenting</span>
            <span className={style_nb.lati}>|</span>
            <Link to="/login"><span>Login / Register</span></Link>
          </Box>
          <span className={style_nb.lati}>|</span>
          <Box className={style_nb.shortlist}>
            <AiOutlineHeart className={style_nb.loactionicon} />
            <span>Shortlist</span>
          </Box>
          <span className={style_nb.lati}>|</span>

          <Box className={style_nb.cart}>
            <Box className={style_nb.childcartBox}>
              <h3>countcart</h3>
              <CgShoppingCart
                className={style_nb.carticon}
                // onClick={() => navigate("/cart")}
              />
            </Box>
            <span>Cart</span>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
