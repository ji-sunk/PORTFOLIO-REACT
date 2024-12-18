import { Visibility, VisibilityOff } from "@mui/icons-material";
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
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutFill from "src/templates/layout/LayoutFill";

const MLG000000 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };
  return (
    <>
      <Head>
        <title>로그인</title>
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
                    {/* <Typography
                        variant="h1"
                        className="bp-title title-top logo"
                    >
                        <img
                        src="/assets/images/logo_bizplay_big2.png"
                        alt="bizplay"
                        width={80}
                        />
                    </Typography> */}
                  </Stack>
                  <Stack
                    spacing={0}
                    className="bp-group-title-row"
                    direction="row"
                  >
                    <Box className="left">
                      <Typography variant="h2" className="bp-title">
                        로그인
                      </Typography>
                    </Box>
                    <Box className="right"></Box>
                  </Stack>
                </Stack>
              </Box>
              {/* [E]타이틀 그룹 */}
            </div>
            <div className="ui-box">
              {/* [S]login-group */}
              <Box className="login-group">
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className="bp-group-list"
                  fullWidth
                  error
                >
                  <FormGroup className="bp-group-box">
                    <List className="login-list" disablePadding={true}>
                      {/* [S] Default view */}
                      <ListItem disablePadding={true}>
                        <TextField
                          fullWidth
                          label="회사코드"
                          name="corpCode"
                          type="text"
                        />
                      </ListItem>
                      <ListItem disablePadding={true}>
                        <TextField
                          fullWidth
                          label="아이디(사번)"
                          name="userId"
                          type="id"
                        />
                      </ListItem>
                      <ListItem
                        disablePadding={true}
                        className="toggle-password"
                      >
                        <TextField
                          fullWidth
                          label="비밀번호"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          // error
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </ListItem>
                      {/* [E] Default view */}
                      {/* 비밀번호 :focused > "is-active" 추가 */}
                      <ListItem
                        disablePadding={true}
                        className="toggle-password is-active"
                      >
                        <TextField
                          fullWidth
                          label="비밀번호"
                          name="password"
                          InputLabelProps={{ shrink: true }}
                          type={showPassword ? "text" : "password"}
                          error
                          helperText="사번 또는 비밀번호가 일치하지 않습니다."
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                        />
                      </ListItem>
                    </List>
                    <Box className="login-keep">
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="로그인 상태 유지"
                      />
                      {/* 체크 상태:defaultChecked, 비활성화:disabled */}
                    </Box>
                  </FormGroup>
                  {/* <FormHelperText className="bk-message-helper" error>
                    존재하지 않는 계정입니다. 입력하신 내용을 다시 확인해주세요. <br />
                    사번 또는 비밀번호가 일치하지 않습니다.
                    </FormHelperText> */}
                </FormControl>
              </Box>
              {/* [E]login-group */}
            </div>
            <div className="ui-box al-center bio-auth">
              <Button size="medium">생체 로그인</Button>
            </div>
            {/* [S]bottom-fixed */}
            <div className="bottom-fixed">
              <Box className="btns-group">
                <Box className="inner">
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-xlarge color-neutral-300"
                  >
                    SSO 연동
                  </Button>
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-xlarge"
                  >
                    로그인
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

export default MLG000000;
