import {
  Drawer,
  List,
  ListItemButton,
  BottomNavigation,
  BottomNavigationAction,
  Link,
} from "@mui/material";
import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import DiscountIcon from "@mui/icons-material/Discount";
import ShareIcon from "@mui/icons-material/Share";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect } from "react";
import activeChange from "../../action/appAction";
import { useDispatch } from "react-redux";

const mapStateToProps = (state) => {
  return {
    value: state.app.activeTab,
  };
};

const FootNav = (props) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const changeValue = () => {};

  const drawerList = ["Log in", "My Profile"];
  const drawerLists = [
    {
      name: "My Account",
      url: "/account",
    },
    {
      name: "About Us",
      url: "https://infinity-009.github.io/coupondel2/",
    },
    {
      name: "Log in",
      url: "/login",
    },
  ];

  useEffect(() => {
    setValue(props.value);
  }, [props.value]);

  return (
    <>
      <BottomNavigation
        sx={{
          padding: "0px",
          gap: "0vw",
          width: "100%",
          position: "fixed",
          bottom: 0,
          mt: "auto",
          display: { xs: "flex", md: "none", sm: "none" },
          boxShadow: "none",
          overflow: "auto",
          flexWrap: "wrap",
          borderTop: "1px solid #e7e7e7",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          dispatch(activeChange(newValue));
        }}
      >
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          component={NavLink}
          to="/"
          label="Home"
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          component={NavLink}
          label="Stores"
          to="/affiliates"
          icon={<ShoppingBagIcon />}
        ></BottomNavigationAction>
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          component={NavLink}
          to="/coupons"
          label="Coupons"
          icon={<DiscountIcon />}
        />
        <BottomNavigationAction
          sx={{ padding: "0px", width: "20%", minWidth: "10px" }}
          component={NavLink}
          to="/refer"
          label="Referral"
          icon={<ShareIcon />}
        />

        <BottomNavigationAction
          sx={{
            padding: "0px",
            width: "20%",
            minWidth: "10px",
            display: "none",
          }}
          onClick={() => {
            setOpenDrawer(!openDrawer);
          }}
          label="Menu"
          icon={<MenuOpenIcon />}
        />
      </BottomNavigation>

      <Drawer
        anchor="right"
        open={openDrawer}
        sx={{
          display: { xs: "block", md: "none", sm: "none" },
          boxShadow: "none",
        }}
        onClose={() => {
          setOpenDrawer(!openDrawer);
        }}
      >
        <List>
          {drawerLists.map((li, index) => {
            return (
              <span key={index}>
                <ListItemButton
                  conponent={NavLink}
                  to={li.url}
                  sx={{ width: "15rem" }}
                >
                  {li.name}
                </ListItemButton>
              </span>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default connect(mapStateToProps)(FootNav);
