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
  TextField,
  Typography,
} from "@mui/material";
import {
  ArrowLeft,
  Image03,
  Camera01,
  Folder,
} from "@untitled-ui/icons-react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";

type Anchor = "top" | "left" | "bottom" | "right";

const ListDrawer = () => {
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
        <title>출장목적선택 | 출장 / 영수증 등록</title>
      </Head>
      <Button onClick={toggleDrawer("listDrawer", true)}>[출장목적선택]</Button>
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
              <Typography variant="h2">출장목적 선택 / 영수증 등록</Typography>{/* 영수증 등록 아이콘 있는 케이스 수정 240926 kjs */}
              <Box component="p" className="txt-desc">영수증을 수기로 추가할 수 있습니다.</Box>
            </Box>
          </div>
        </div>
        <Paper className="drawer-body re-register">{/* .re-register 클래스 추가 240926 kjs */}
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
                  className="bp-btns-group fullWidth list-radio"
                  onChange={handleChangeradioCard}
                  row
                >
                  <FormControlLabel
                    className={`btn-form-type ${
                      RadioValueCard === "radioCard-01" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-01" />}
                    label="일반출장"
                  />
                  {/* MDF010100_계획서상세_취소사유_입력 */}
                  <TextField
                    variant="filled"
                    size="medium"
                    label="사유"
                    fullWidth
                  />
                  <FormControlLabel
                    className={`btn-form-type ${
                      RadioValueCard === "radioCard-02" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-02" />}
                    label="파견"
                  />
                  <FormControlLabel
                    className={`btn-form-type ${
                      RadioValueCard === "radioCard-03" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-03" />}
                    label="교육출장"
                  />
                  <FormControlLabel
                    className={`btn-form-type ${
                      RadioValueCard === "radioCard-04" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-04" />}
                    label="경조사"
                  />
                  <FormControlLabel
                    className={`btn-form-type ${
                      RadioValueCard === "radioCard-05" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-05" />}
                    label="해외출장"
                  />
                  <FormControlLabel
                    className={`btn-form-type ${
                      RadioValueCard === "radioCard-06" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-06" />}
                    label="현지 시험비 정산"
                  />
                </RadioGroup>
              </FormControl>
            </div>
            
            {/* [S]영수증 등록 아이콘 있는 케이스 수정 240926 kjs */}
            <div className="box-inner icon-type">
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
                  className="bp-btns-group fullWidth list-radio"
                  onChange={handleChangeradioCard}
                  row
                >
                <div className="inner-sides">
                  <FormControlLabel
                    className={`btn-form-type btn ${
                      RadioValueCard === "radioCard-07" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-07" />}
                    label={
                      <div className="icon-group">
                        <Camera01 fontSize="small" className="bp-icon xsmall" />
                        <span className="txt">사진촬영</span>
                      </div>
                    }
                  />
                </div>
                <div className="inner-sides">
                  <FormControlLabel
                    className={`btn-form-type btn ${
                      RadioValueCard === "radioCard-08" ? "is-active" : ""
                    }`}
                    control={<Radio value="radioCard-08" />}
                    label={
                      <div className="icon-group">
                        <Image03 fontSize="small" className="bp-icon xsmall" />
                        <span className="txt">앨범에서 선택</span>
                      </div>
                    }
                  />
                </div>
                <div className="inner-sides">
                  <FormControlLabel
                      className={`btn-form-type btn ${
                        RadioValueCard === "radioCard-09" ? "is-active" : ""
                      }`}
                      control={<Radio value="radioCard-09" />}
                      label={
                        <div className="icon-group">
                            <Folder fontSize="small" className="bp-icon xsmall" />
                          <span className="txt">내폴더</span>
                        </div>
                      }
                    />
                  {/* <Folder fontSize="small" className="bp-icon xsmall is-active" />
                  <FormControlLabel
                  className={`btn-form-type ${
                    RadioValueCard === "radioCard-09" ? "is-active" : ""
                  }`}
                  control={<Radio value="radioCard-09" />}
                  label="내폴더"
                /> */}
                </div>
                </RadioGroup>
              </FormControl>
            </div>
            {/* [E]영수증 등록 아이콘 있는 케이스 수정 240926 kjs */}
 
            {/* 하단 버튼 주석 해제 */}
            {/* <Box className="btns-group">
              <Box className="inner">
                <Button variant="contained" size="large">
                  확인
                </Button>
              </Box>
            </Box> */}
          </Box>
        </Paper>
      </SwipeableDrawer>
    </>
  );
};

export default ListDrawer;
