import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";

type Anchor = "top" | "left" | "bottom" | "right";

const ListDrawer_fr = () => {
  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    listDrawer: false, //list
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
      <Head>
        <title>추가정보 입력</title>
      </Head>
      <Button onClick={toggleDrawer("listDrawer", true)}>
        [추가정보 입력]
      </Button>
      <SwipeableDrawer
        anchor="bottom"
        open
        onClose={toggleDrawer("listDrawer", false)}
        onOpen={toggleDrawer("listDrawer", true)}
        className="bp-drawer drawer-bottom"
      >
        <div className="drawer-header" id="drawer-header">
          <div className="inner">
            <Box className="left-area"></Box>
            <Box className="right-area">
              {/* <IconButton
                className="btn-icon-only"
                size="small"
                aria-label="닫기"
                onClick={toggleDrawer("listDrawer", false)}
              >
                <Close fontSize="small" className="bp-icon" />
              </IconButton> */}
            </Box>
          </div>
          <div className="inner">
            <Box className="left-area mg-t2">
              <Typography variant="h2">출장예약 추가정보 입력</Typography>
            </Box>
          </div>
        </div>
        <Paper className="drawer-body btr-wrap">
          <Box className="drawer-cont">
            <div className="box-inner">
              <p className="txt-primary">
                출장예약 시 사용자 등록과정을 간소화하기 위해
                <br />
                추가정보를 입력해주세요.
              </p>
              <p className="txt-secondary">
                * 여권정보와 동일한 정보입력을 요청드립니다.
              </p>
            </div>

            <div className="item-field inner-sides">
              <TextField label="한글 이름" placeholder="" fullWidth />
              <TextField label="한글 성" placeholder="" fullWidth />
              <TextField label="영문 이름" placeholder="" fullWidth />
              <TextField label="영문 성" placeholder="" fullWidth />
            </div>

            <Box className="btns-group">
              <Box className="inner">
                <Button variant="contained" size="large">
                  확인
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </SwipeableDrawer>
    </>
  );
};

export default ListDrawer_fr;
