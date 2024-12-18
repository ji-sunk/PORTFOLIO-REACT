import { ArrowDropDown, ChevronRight, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  SwipeableDrawer,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutFill from "src/templates/layout/LayoutFill";
import { useTimer } from "use-timer";

type Anchor = "top" | "left" | "bottom" | "right";

const MLG010100: FC = (props) => {
  const [isTimerVisible, setIsTimerVisible] = useState(false);
  const [timerText, setTimerText] = useState<string>("");

  const timer = useTimer({
    initialTime: 300,
    endTime: 0,
    timerType: "DECREMENTAL",
    onTimeUpdate: (time) => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      const timerText = `${String(minutes).padStart(2, "0")}:${String(
        seconds,
      ).padStart(2, "0")}`;

      setTimerText(timerText);
    },
  });
  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    listDrawer1: false, //국적
    listDrawer2: false, //성별
    listDrawer3: false, //통신사
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

  // [agreeChecked]
  const [agreeChecked, setAgreeChecked] = useState([
    false,
    false,
    false,
    false,
  ]);
  const handleChangeAgreeAll = (event) => {
    const isChecked = event.target.checked;
    setAgreeChecked([isChecked, isChecked, isChecked, isChecked]);
  };

  const handleChangeAgree1 = () => {
    setAgreeChecked([
      !agreeChecked[0],
      agreeChecked[1],
      agreeChecked[2],
      agreeChecked[3],
    ]);
  };

  const handleChangeAgree2 = () => {
    setAgreeChecked([
      agreeChecked[0],
      !agreeChecked[1],
      agreeChecked[2],
      agreeChecked[3],
    ]);
  };

  const handleChangeAgree3 = () => {
    setAgreeChecked([
      agreeChecked[0],
      agreeChecked[1],
      !agreeChecked[2],
      agreeChecked[3],
    ]);
  };
  const handleChangeAgree4 = () => {
    setAgreeChecked([
      agreeChecked[0],
      agreeChecked[1],
      agreeChecked[2],
      !agreeChecked[3],
    ]);
  };
  const agreeChildren = (
    <List disablePadding className="bp-check-list list-agree-terms">
      <ListItem>
        <FormControlLabel
          label={
            <Box className="txt-label">
              <span className="txt-point">[필수]</span> 통신사 이용약관
            </Box>
          }
          control={
            <Checkbox checked={agreeChecked[0]} onChange={handleChangeAgree1} />
          }
        />
        <Button
          size="medium"
          color="primary"
          className="btn-view"
          endIcon={<ChevronRight fontSize="small" className="bp-icon small" />}
        ></Button>
      </ListItem>
      <ListItem>
        <FormControlLabel
          label={
            <Box className="txt-label">
              <span className="txt-point">[필수]</span> 본인확인서비스 이용약관
            </Box>
          }
          control={
            <Checkbox checked={agreeChecked[1]} onChange={handleChangeAgree2} />
          }
        />
        <Button
          size="medium"
          color="primary"
          className="btn-view"
          endIcon={<ChevronRight fontSize="small" className="bp-icon small" />}
        ></Button>
      </ListItem>
      <ListItem>
        <FormControlLabel
          label={
            <Box className="txt-label">
              <span className="txt-point">[필수]</span> 개인정보 수집 이용 취급
              위탁동의
            </Box>
          }
          control={
            <Checkbox checked={agreeChecked[2]} onChange={handleChangeAgree3} />
          }
        />
        <Button
          size="medium"
          color="primary"
          className="btn-view"
          endIcon={<ChevronRight fontSize="small" className="bp-icon small" />}
        ></Button>
      </ListItem>
      <ListItem>
        <FormControlLabel
          label={
            <Box className="txt-label">
              <span className="txt-point">[필수]</span> 알뜰폰 개인정보 제3자
              제공동의
            </Box>
          }
          control={
            <Checkbox checked={agreeChecked[3]} onChange={handleChangeAgree4} />
          }
        />
        <Button
          size="medium"
          color="primary"
          className="btn-view"
          endIcon={<ChevronRight fontSize="small" className="bp-icon small" />}
        ></Button>
      </ListItem>
    </List>
  );
  return (
    <>
      <Head>
        <title>본인인증 | 로그인</title>
      </Head>
      <LayoutFill>
        {/* [S] defautl : "ui-paper" , login-wrap */}
        <Paper className="ui-paper login-wrap">
          {/* [S]light-box full-height */}
          <div className="light-box full-height">
            <div className="ui-box">
              {/* [S]타이틀 그룹 */}
              <Box className="header-top-group">
                <Stack spacing={0} className="bp-group-title">
                  <Stack
                    spacing={0}
                    className="bp-group-title-row bp-group-title-main"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      variant="h1"
                      className="bp-title title-top logo"
                    >
                      {/* <img
                        src="/assets/images/logo-hyundai.png"
                        alt="hyundai"
                        width={145}
                      /> */}
                      {/* 로그인 전 화면만 triplus 로고 / 로그인 후 현대 로고 241113 kjs */}
                      <img
                        src="/assets/images/logo-triplus.svg"
                        alt="triplus"
                      />
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={0}
                    className="bp-group-title-row"
                    direction="row"
                  >
                    <Box className="left">
                      <Typography variant="h2" className="bp-title">
                        본인인증
                      </Typography>
                    </Box>
                    <Box className="right"></Box>
                  </Stack>
                </Stack>
              </Box>
              {/* [E]타이틀 그룹 */}
            </div>

            <div className="ui-box">
              <FormControl
                component="fieldset"
                variant="standard"
                className="bp-group-list"
                fullWidth
                // error
              >
                <FormGroup className="bp-group-box">
                  <FormControlLabel
                    label={
                      <Box className="txt-point">
                        본인확인 서비스 이용약관 전체 동의
                      </Box>
                    }
                    control={
                      <Checkbox
                        checked={
                          agreeChecked[0] &&
                          agreeChecked[1] &&
                          agreeChecked[2] &&
                          agreeChecked[3]
                        }
                        // indeterminate={agreeChecked[0] !== agreeChecked[1]}
                        indeterminate={
                          agreeChecked.some(Boolean) &&
                          !agreeChecked.every(Boolean)
                        }
                        onChange={handleChangeAgreeAll}
                      />
                    }
                  />
                  {agreeChildren}
                </FormGroup>
              </FormControl>
            </div>

            <div className="ui-box">
              <Box className="user-info-group">
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className="bp-group-list"
                  fullWidth
                  error
                >
                  <FormGroup className="bp-group-box">
                    <List className="info-list" disablePadding={true}>
                      <ListItem disablePadding={true} className="flex-row">
                        <div className="item">
                          <TextField
                            onClick={toggleDrawer("listDrawer1", true)}
                            className="type-btn"
                            type="button"
                            label="국적"
                            defaultValue="내국인"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <ArrowDropDown fontSize="medium" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="item">
                          <TextField fullWidth label="이름" type="text" />
                        </div>
                      </ListItem>
                      <ListItem disablePadding={true} className="flex-row">
                        <div className="item">
                          <TextField
                            onClick={toggleDrawer("listDrawer2", true)}
                            className="type-btn"
                            type="button"
                            label="성별"
                            defaultValue="남자"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <ArrowDropDown fontSize="medium" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="item">
                          <TextField
                            fullWidth
                            label="생년월일8자리"
                            type="tel"
                          />
                        </div>
                      </ListItem>
                      <ListItem disablePadding={true} className="flex-row">
                        <div className="item">
                          <TextField
                            onClick={toggleDrawer("listDrawer3", true)}
                            className="type-btn"
                            type="button"
                            label="통신사"
                            defaultValue="SKT"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <ArrowDropDown fontSize="medium" />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="item">
                          <TextField fullWidth label="휴대폰번호" type="tel" />
                        </div>
                      </ListItem>
                      <ListItem disablePadding={true} className="flex-row">
                        <div className="flex-grow-1">
                          <TextField
                            type="tel"
                            variant="filled"
                            size="medium"
                            fullWidth
                            label="인증번호"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  {isTimerVisible && (
                                    <Typography className="text-error">
                                      {timerText}
                                    </Typography>
                                  )}
                                </InputAdornment>
                              ),
                            }}
                          />
                        </div>
                        <div className="right">
                          <Button
                            variant="contained"
                            size="large"
                            className="btn-large color-neutral"
                            fullWidth
                          >
                            재요청
                          </Button>
                        </div>
                      </ListItem>
                    </List>
                  </FormGroup>
                </FormControl>
                {/* [S]SwipeableDrawer 국적 : listDrawer1 */}
                <SwipeableDrawer
                  anchor="bottom"
                  open={isDrawerOpen.listDrawer1}
                  onClose={toggleDrawer("listDrawer1", false)}
                  onOpen={toggleDrawer("listDrawer1", true)}
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
                          onClick={toggleDrawer("listDrawer1", false)}
                        >
                          <Close fontSize="small" className="bp-icon" />
                        </IconButton>
                      </Box>
                    </div>
                    <div className="inner">
                      <Box className="left-area">
                        <Typography variant="h2">국적</Typography>
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
                            className="bp-btns-group fullWidth list-radio"
                            onChange={handleChangeradioCard}
                            row
                          >
                            <FormControlLabel
                              className={`btn-form-type ${
                                RadioValueCard === "radioCard-01"
                                  ? "is-active"
                                  : ""
                              }`}
                              control={<Radio value="radioCard-01" />}
                              label="내국인"
                            />
                            <FormControlLabel
                              className={`btn-form-type ${
                                RadioValueCard === "radioCard-02"
                                  ? "is-active"
                                  : ""
                              }`}
                              control={<Radio value="radioCard-02" />}
                              label="외국인"
                            />
                          </RadioGroup>
                        </FormControl>
                      </div>
                    </Box>
                  </Paper>
                </SwipeableDrawer>
                {/* [E]SwipeableDrawer */}
                {/* <ListDrawerMf /> 성별 : listDrawer2 */}
                {/* <ListDrawerPhone /> 통신사 : listDrawer3 */}
              </Box>
            </div>

            {/* [S]bottom-fixed */}
            <div className="bottom-fixed">
              <Box className="btns-group">
                <Box className="inner">
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-xlarge"
                  >
                    인증번호 발송/인증완료
                  </Button>
                </Box>
              </Box>
            </div>
            {/* [E]bottom-fixed */}
          </div>
          {/* [E]light-box full-height */}
        </Paper>
        {/* [E]ui-paper login-wrap */}
      </LayoutFill>
    </>
  );
};

export default MLG010100;
