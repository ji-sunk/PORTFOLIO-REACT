import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutFill from "src/templates/layout/LayoutFill";
import { useTimer } from "use-timer";

type Anchor = "top" | "left" | "bottom" | "right";

const MLG020000: FC = (props) => {
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
              <span className="txt-point">[필수]</span> bizplay 이용약관
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
              <span className="txt-point">[필수]</span> 개인정보 수집 및 이용
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
              <span className="txt-point">[필수]</span> 국내출장 플랫폼 관련
              약관
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
              <span className="txt-sec">[선택]</span> 이벤트·혜택 정보 수신
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
        <title>약관동의 비즈플레이 | 로그인</title>
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
                      <img
                        src="/assets/images/logo_bizplay_big2.png"
                        alt="bizplay"
                        width={80}
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
                        처음 로그인 시,
                        <br />
                        <span className="txt-point">이용 약관 동의</span>가
                        필요합니다.
                      </Typography>
                    </Box>
                    <Box className="right"></Box>
                  </Stack>
                  <Stack
                    spacing={0}
                    className="bp-group-title-row bp-group-title-description"
                    direction="row"
                  >
                    <Box className="left">
                      <Typography variant="body1" className="bp-description">
                        관리자가 생성한 계정은 최초 로그인 시 <br />
                        이용약관 동의가 필요합니다.
                        <br />
                        서비스 이용을 위해 아래 이용약관에 동의해주세요.
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
                    label={<Box className="txt-point">전체 동의</Box>}
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

            {/* [S]bottom-fixed */}
            <div className="bottom-fixed">
              <Box className="btns-group">
                <Box className="inner">
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-xlarge"
                  >
                    확인
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

export default MLG020000;
