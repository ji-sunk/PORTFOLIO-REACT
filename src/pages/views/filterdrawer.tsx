import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import PeriodCalendar from "src/components/common/PeriodCalendar";

type Anchor = "top" | "left" | "bottom" | "right";

const FilterDrawer = () => {
  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    FilterDrawer: false, //list
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
        <title>필터 | 출장</title>
      </Head>
      <Button onClick={toggleDrawer("FilterDrawer", true)}>[필터]</Button>
      <SwipeableDrawer
        anchor="bottom"
        open
        onClose={toggleDrawer("FilterDrawer", false)}
        onOpen={toggleDrawer("FilterDrawer", true)}
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
                onClick={toggleDrawer("FilterDrawer", false)}
              >
                <Close fontSize="small" className="bp-icon" />
              </IconButton>
            </Box>
          </div>
          <div className="inner">
            <Box className="left-area">
              <Typography variant="h2">필터</Typography>
            </Box>
          </div>
        </div>
        <Paper className="drawer-body">
          <Box className="drawer-cont">
            <div className="box-inner">
              <div className="case-area">
                <Typography variant="h3">조회 기간</Typography>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className="fullWidth"
                >
                  <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    defaultValue="radio01-01"
                    name="radio buttons group"
                    className="bp-btns-group fullWidth"
                    row
                  >
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-01" />}
                      label="1주일"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-02" />}
                      label="1개월"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-03" />}
                      label="3개월"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-04" />}
                      label="직접입력"
                    />
                  </RadioGroup>
                </FormControl>
                <PeriodCalendar />
              </div>

              <div className="case-area block-type2">
                {/* 클래스 block-type2 + block-type3 추가 클래스에 따라 item 정렬 변경 가능 241125 240925 kjs */}
                <Typography variant="h3">상태</Typography>
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className="fullWidth"
                >
                  <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    defaultValue=""
                    name="radio buttons group"
                    className="bp-btns-group fullWidth"
                    row
                  >
                    {/* 버튼타입 전체 추가 : aria-selected="false , true" */}
                    <Button className="btn-form-type-line" aria-selected="true">
                      전체
                    </Button>
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-01" />}
                      label="동반신청"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-02" />}
                      label="결재요청"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-03" />}
                      label="결재진행"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-04" />}
                      label="결재완료"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-05" />}
                      label="동반신청"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-06" />}
                      label="출장초대"
                    />
                    <FormControlLabel
                      className="btn-form-type"
                      control={<Radio value="radio01-07" />}
                      label="출장종료"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            {/* 하단 버튼 주석 해제 */}
            <Box className="btns-group">
              <Box className="inner">
                <Button
                  variant="contained"
                  size="large"
                  className="color-neutral"
                >
                  취소
                </Button>
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

export default FilterDrawer;
