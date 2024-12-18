import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Paper } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { useState } from "react";
import IntroBannSwiper from "src/components/swiper/IntroBannSwiper";

type Anchor = "top" | "left" | "bottom" | "right";

const IntroBtmDrawer = () => {
  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    drawer1: false, //swiperBanner
  });
  const toggleDrawer = (drawerId, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen({ ...isDrawerOpen, [drawerId]: open });

    if (open) {
      const headerHeight =
        document.getElementById("drawer-header")?.offsetHeight || 0;
      setDrawerHeaderHeight(headerHeight);
    }
  };

  return (
    <>
      <SwipeableDrawer
        anchor="bottom"
        open
        // open={isDrawerOpen.drawer1}
        onClose={toggleDrawer("drawer1", false)}
        onOpen={toggleDrawer("drawer1", true)}
        className="bp-drawer drawer-bottom intro-main"
      >
        <div className="drawer-header" id="drawer-header">
          <div className="inner">
            <Box className="left-area"></Box>
            <Box className="right-area">
              <IconButton
                className="btn-icon-only"
                size="small"
                aria-label="닫기"
                onClick={toggleDrawer("drawer1", false)}
              >
                <Close fontSize="small" className="bp-icon" />
              </IconButton>
            </Box>
          </div>
        </div>
        <Paper className="drawer-body">
          <Box className="drawer-cont">
            <div className="box-inner">
              <IntroBannSwiper />
            </div>
            <Box className="btns-group">
              <Box className="inner">
                <Button
                  variant="contained"
                  size="large"
                  className="color-neutral"
                >
                  하루동안 보지않기
                </Button>
                <Button variant="contained" size="large">
                  자세히보기
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </SwipeableDrawer>
    </>
  );
};

export default IntroBtmDrawer;
