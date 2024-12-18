import { Close } from "@mui/icons-material";
import { Box, Button, IconButton, Paper, Typography } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";

type Anchor = "top" | "left" | "bottom" | "right";

const ListDrawer_pay = () => {
  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
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
        <title>결제하기 | 결제확인</title>
      </Head>
      <Button onClick={toggleDrawer("listDrawer", true)}>
        [결제하기_결제확인]
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
              <IconButton
                className="btn-icon-only"
                size="small"
                aria-label="닫기"
                onClick={toggleDrawer("listDrawer", false)}
              >
                <Close fontSize="small" className="bp-icon" />
              </IconButton>
            </Box>
          </div>
          <div className="inner">
            <Box className="left-area">
              <Typography variant="h2">
                <strong className="color-blue">라면집</strong>에서
                <br />
                <strong className="color-blue">10,000원</strong>{" "}
                결제하시겠습니까?
              </Typography>
              {/* <Box component="p" className="txt-desc"></Box> */}
            </Box>
          </div>
        </div>
        <Paper className="drawer-body">
          <Box className="drawer-cont">
            <div className="box-inner pay">
              <div className="afe-address">가맹점 주소</div>
              <div className="address bp-ellipsis">
                서울특별시 성북구 정릉동 1028-85 주소가 길어지면 서울특별시
                성북구 정릉동 1028-85 주소가 길어지면서울특별시 성북구 정릉동
                1028-85 주소가 길어지면
              </div>
              <dl className="inner-sides">
                <dt className="left-area">
                  <Box className="txt">대표명</Box>
                </dt>
                <dd className="right-area">
                  <Box className="txt">김사장</Box>
                </dd>
              </dl>
              <dl className="inner-sides">
                <dt className="left-area">
                  <Box className="txt font-small">결제수단</Box>
                </dt>
                <dd className="right-area">
                  <Box className="txt font-small">비플머니</Box>
                </dd>
              </dl>
            </div>

            {/* btns-group 버튼 공통 */}
            <Box className="btns-group">
              <Box className="inner">
                <Button
                  variant="contained"
                  size="large"
                  className="color-neutral"
                >
                  아니오
                </Button>
                <Button variant="contained" size="large">
                  예
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </SwipeableDrawer>
    </>
  );
};

export default ListDrawer_pay;
