import { Info, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  FormControl,
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
import { ChevronDown } from "@untitled-ui/icons-react";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import PeriodCalendar from "src/components/common/PeriodCalendar";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMY080100 = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  // 아코디언 Multi
  const [expandedMulti, setExpandedMulti] = React.useState(false);
  const handleExpansionMulti = () => {
    setExpandedMulti((prevExpanded) => !prevExpanded);
  };
  // 아코디언 Single
  const [expandedSingle, setExpandedSingle] = React.useState<string | false>(
    "panel2-1",
  );
  const handleExpansionSingle =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedSingle(newExpanded ? panel : false);
    };

  return (
    <>
      <Head>
        <title>하이패스 내역 가져오기 | 하이패스관리</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]map-route-wrap */}
          <div className="map-route-wrap">
            <div className="light-box full-height">
              <div className="hipass-login-wrap">
                <Typography variant="h2" className="bp-title">
                  고속도로 통행료 홈페이지 <br />
                  가입이 필요합니다.
                </Typography>
                <PeriodCalendar />
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
                        <ListItem className="item">
                          <TextField
                            fullWidth
                            label="하이패스 아이디"
                            name="userId"
                            type="id"
                          />
                        </ListItem>
                        <ListItem
                          disablePadding={true}
                          className="toggle-password item"
                        >
                          <TextField
                            fullWidth
                            label="하이패스 비밀번호"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            helperText={
                              <Box>
                                마지막 실행일시 : 2024.02.20 19:34:15
                                <br />
                                최대 1개월까지 조회 가능합니다.
                              </Box>
                            }
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
                          className="toggle-password is-active item"
                        >
                          <TextField
                            fullWidth
                            label="하이패스 비밀번호"
                            name="password"
                            InputLabelProps={{ shrink: true }}
                            type={showPassword ? "text" : "password"}
                            error
                            helperText="비밀번호가 일치하지 않습니다."
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
                      {/* <Box className="login-keep">
                          <FormControlLabel
                            control={<Checkbox defaultChecked />}
                            label="로그인 상태 유지"
                          />
                        </Box> */}
                    </FormGroup>
                  </FormControl>
                </Box>
                {/* [E]login-group */}
                <div className="bp-accordion">
                  <Accordion
                    disableGutters
                    elevation={0}
                    expanded={expandedSingle === "panel2-1"}
                    onChange={handleExpansionSingle("panel2-1")}
                  >
                    <AccordionSummary
                      aria-controls="panel1d-content"
                      id="panel1d-header"
                      className="acc-header"
                      onClick={() =>
                        setExpandedSingle(
                          expandedSingle === "panel2-1" ? false : "panel2-1",
                        )
                      }
                      expandIcon={
                        <IconButton
                          className="btn-icon-only"
                          size="small"
                          aria-label="열기/닫기"
                        >
                          <ChevronDown
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      }
                    >
                      <div className="acc-inner">
                        <Box className="left">
                          <Stack spacing={0} className="acc-group-title">
                            <Stack spacing={0} className="acc-title">
                              <Box className="bp-instructions">
                                <Info fontSize="medium" className="bp-icon " />
                                <div className="txt">이용안내</div>
                              </Box>
                            </Stack>
                          </Stack>
                        </Box>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-body neutral-box">
                      <div className="acc-inner ">
                        <List className="list-dot">
                          <ListItem>
                            고속버스 통행료 홈페이지의 하이패스 카드의
                            사용내역을 불러옵니다.
                            <div className="txt-desc">
                              영수증이 필요한 내역조회를 위해서는 고속도로
                              통행료 홈페이지에서 하이패스 카드를 등록해주세요
                            </div>
                          </ListItem>
                          <ListItem>
                            중복 경비처리를 방지하기 위해 기 등록된 내역은 해당
                            리스트에서 삭제됩니다.
                          </ListItem>
                          <ListItem>
                            최종결재 취소처리 하였습니다. 최종결재 취소처리
                            하였습니다.
                          </ListItem>
                        </List>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
          {/* [E]map-route-wrap */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              취소
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              확인
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMY080100;
