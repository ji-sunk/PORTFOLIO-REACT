import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { Menu04 } from "@untitled-ui/icons-react";
import { useState } from "react";

type Anchor = "top" | "left" | "bottom" | "right";

const BottomDrawer = () => {
  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    drawerAlert: false, //Alert
    drawer1: false, //기본 샘플-등록/수정
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
      <IconButton
        onClick={toggleDrawer("drawer1", true)}
        className="btn-icon-only"
        size="medium"
        aria-label="전체메뉴"
      >
        <Menu04 fontSize="medium" />
      </IconButton>
      <SwipeableDrawer
        anchor="bottom"
        open={isDrawerOpen.drawer1}
        onClose={toggleDrawer("drawer1", false)}
        onOpen={toggleDrawer("drawer1", true)}
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
                onClick={toggleDrawer("drawer1", false)}
              >
                <Close fontSize="small" className="bp-icon" />
              </IconButton>
            </Box>
          </div>
          <div className="inner">
            <Box className="left-area">
              <Typography variant="h2">카드등록</Typography>
              <Box component="p" className="txt-desc">
                등록할 카드 종류를 선택합니다.
              </Box>
            </Box>
          </div>
        </div>
        <Paper className="drawer-body">
          <Box className="drawer-cont">
            <div className="box-inner">
              <FormControl
                component="fieldset"
                variant="standard"
                className="fullWidth"
              >
                <RadioGroup
                  aria-labelledby="radio-buttons-group"
                  defaultValue="radioCard-01"
                  name="radio buttons group"
                  value={RadioValueCard}
                  className="bp-btns-group fullWidth list-regist"
                  onChange={handleChangeradioCard}
                  row
                >
                  <FormControlLabel
                    className={`btn-form-type item-co ${
                      RadioValueCard === "radioCard-01" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-01" />}
                    label="법인카드"
                  />
                  <FormControlLabel
                    className={`btn-form-type item-pe ${
                      RadioValueCard === "radioCard-02" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-02" />}
                    label="개인카드"
                  />
                  <FormControlLabel
                    className={`btn-form-type item-tm ${
                      RadioValueCard === "radioCard-03" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-03" />}
                    label="티머니"
                  />
                  <FormControlLabel
                    className={`btn-form-type item-zp ${
                      RadioValueCard === "radioCard-04" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-04" />}
                    label="제로페이"
                  />
                  <FormControlLabel
                    className={`btn-form-type item-point ${
                      RadioValueCard === "radioCard-05" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-05" />}
                    label="BZP포인트"
                  />
                  <FormControlLabel
                    className={`btn-form-type item-mydt ${
                      RadioValueCard === "radioCard-06" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-06" />}
                    label="마이데이터"
                  />
                </RadioGroup>
                <FormHelperText>You can display an error</FormHelperText>
              </FormControl>
            </div>
            <Box className="btns-group">
              <Box className="inner">
                {/* <Button
                  variant="contained"
                  size="large"
                  className="color-neutral"
                >
                  취소
                </Button> */}
                <Button variant="contained" size="large">
                  등록
                </Button>
              </Box>
            </Box>
          </Box>
        </Paper>
      </SwipeableDrawer>
    </>
  );
};

export default BottomDrawer;
