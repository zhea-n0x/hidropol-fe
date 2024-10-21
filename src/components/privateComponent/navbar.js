import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { logoHidropol, logoPoltek } from "../../assets/assets";
import { user, notification } from "../../assets/icon";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import "../../assets/css/style.css";
import Head from "next/head";
import { LoginModal, NotifModal } from "../modal";

const pages = [
  {
    menu: "Home",
    link: "/dashboard/home",
  },
  {
    menu: "About",
    link: "/dashboard/about",
  },
  {
    menu: "Tips & Article",
    link: "/dashboard/tips",
  },
  {
    menu: "Calendar",
    link: "/dashboard/calendar",
  },
];

const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const router = useRouter();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const menu = router.pathname.slice(1);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>
          {menu.charAt(0).toUpperCase() + menu.slice(1)} - Hidropol Batam
        </title>
      </Head>
      <AppBar
        position="fixed"
        sx={{
          paddingBlock: 3,
          backgroundColor: "white",
          width: "100%",
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image src={logoPoltek} width={50} height={50} alt="poltek" />
            <Image
              src={logoHidropol}
              style={{ marginLeft: 15 }}
              width={50}
              height={50}
              alt="hidropol"
            />
          </Box>
          {/* Mobile Menu */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                marginTop: 5.5,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  paddingInline: 30,
                  paddingBottom: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  marginTop: 3,
                }}
              >
                <Typography sx={{ fontSize: 20, fontWeight: "bold" }}>
                  Action
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    paddingInline: 30,
                    paddingBottom: 2,
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <Image
                    src={notification}
                    width={42}
                    height={42}
                    alt="notification"
                  />
                  <Image src={user} width={42} height={42} alt="user" />
                </Box>
              </Box>
              {pages.map((i) => {
                return (
                  <Link
                    href={i.link}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: 30,
                      width: "100vw",
                      textDecoration: "none",
                      marginTop: 20,
                    }}
                    key={i.link}
                  >
                    <p
                      className={
                        router.pathname == i.link ? "active active-mobile" : ""
                      }
                      key={i.link}
                      style={{
                        fontWeight: "500",
                        color: "#a7a7a7",
                        letterSpacing: 3,
                        paddingLeft: "20px",
                      }}
                    >
                      {i.menu.toUpperCase()}
                    </p>
                  </Link>
                );
              })}
            </Menu>
          </Box>
          {/* End Mobile Menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {/* {pages.map((page) => (
            <Link href={page.link}>
              <p className="{router.pathname == '/' ? 'active' :''}">
                {page.menu}
              </p>
            </Link>
          ))} */}
            {pages.map((i) => {
              return (
                <Link
                  href={i.link}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    textDecoration: "none",
                    gap: "100px",
                    marginTop: 10,
                  }}
                  key={i.link}
                >
                  <p
                    className={router.pathname == i.link ? "active" : ""}
                    style={{
                      marginRight: 25,
                      fontWeight: "600",
                      color: "#a7a7a7",
                      letterSpacing: 3,
                    }}
                    key={i.link}
                  >
                    {i.menu.toUpperCase()}
                  </p>
                </Link>
              );
            })}
          </Box>
          <Box
            sx={{
              display: { xs: "block", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "row",
              gap: 1,
            }}
          >
            <NotifModal />
            <LoginModal />
          </Box>
        </Container>
      </AppBar>
    </>
  );
}
export default Navbar;
