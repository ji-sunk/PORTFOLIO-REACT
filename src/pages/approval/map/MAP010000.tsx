import PersonIcon from "@mui/icons-material/Person";
import {
  Button,
  Card,
  CardContent,
  Checkbox,
  Chip,
  FormControlLabel,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import { Calendar } from "@untitled-ui/icons-react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import FilterSet from "src/components/common/FilterSet";

// tabs
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  tabValue: number;
}

function BasicTabPanel(props: TabPanelProps) {
  const { children, tabValue, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`basic-tabpanel-${index}`}
      aria-labelledby={`basic-tab-${index}`}
      {...other}
      className="tab-panel"
    >
      {tabValue === index && <div className="panel-inner">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `basic-tab-${index}`,
    "aria-controls": `basic-tabpanel-${index}`,
  };
}

const MAP010000 = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 상위 컴포넌트에서 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabs, setSubTabs] = useState([
    { label: "결재요청" },
    { label: "결재요청(전체)" },
    { label: "결재완료" },
    { label: "결재완료(전체)" },
  ]);

  // 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabStates, setSubTabStates] = useState(
    subTabs.map(() => ({ tabValue: 0 })),
  );

  // 각 하위 탭의 탭 변경 핸들러 함수
  const handleTabChange = (index: number, newValue: number) => {
    setSubTabStates((prevStates) => {
      const newSubTabStates = [...prevStates];
      newSubTabStates[index].tabValue = newValue;
      return newSubTabStates;
    });
  };
  return (
    <>
      <Head>
        <title>결재목록 결재요청 | 결재함</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper flex-wrap">
          <Box className="bp-tabs tabs-basic tabs-size-medium bp-tabs-top">
            <Tabs
              className="tab-list"
              value={tabValue}
              onChange={tabHandleChange}
              aria-label="결재함"
              TabIndicatorProps={{
                sx: { backgroundColor: "#00AAD2" },
              }}
            >
              <Tab label="결재요청" {...a11yProps(0)} />
              <Tab label="결재완료" {...a11yProps(1)} />
            </Tabs>
            {/* [S]240822 modify */}
            <BasicTabPanel tabValue={tabValue} index={0}>
              <div className="ui-box">
                <FilterSet />
              </div>
              <div className="ui-box ">
                <div className="fields-group">
                  <div className="inner-sides">
                    <div className="left-area">
                      <FormControlLabel
                        label={<Box className="txt-label">전체</Box>}
                        control={<Checkbox />}
                      />
                    </div>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재대기"
                                      size="small"
                                      color="warning"
                                      className="bp-chip color-twotone color-warning"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재대기"
                                      size="small"
                                      color="warning"
                                      className="bp-chip color-twotone color-warning"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재대기"
                                      size="small"
                                      color="warning"
                                      className="bp-chip color-twotone color-warning"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재대기"
                                      size="small"
                                      color="warning"
                                      className="bp-chip color-twotone color-warning"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </BasicTabPanel>
            <BasicTabPanel tabValue={tabValue} index={1}>
              <div className="ui-box">
                <FilterSet />
              </div>
              <div className="ui-box ">
                <div className="fields-group">
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재완료"
                                      size="small"
                                      color="info"
                                      className="bp-chip color-twotone color-info"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재완료"
                                      size="small"
                                      color="info"
                                      className="bp-chip color-twotone color-info"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재반려"
                                      size="small"
                                      color="error"
                                      className="bp-chip color-twotone color-error"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="item-field">
                    <Card className="item-card">
                      <CardContent className="item">
                        <Box className="card-block">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel
                                label={
                                  <div className="chips-group">
                                    <Chip
                                      label="정산신청서"
                                      size="medium"
                                      variant="outlined"
                                      className="bp-chip color-blue-lightest"
                                    />
                                    <Chip
                                      label="결재반려"
                                      size="small"
                                      color="error"
                                      className="bp-chip color-twotone color-error"
                                    />
                                  </div>
                                }
                                control={<Checkbox />}
                              />
                            </div>
                            <div className="right-area">
                              <div className="item-date">요청일 2024.04.01</div>
                            </div>
                          </div>
                          <div className="title-area">
                            <Box className="txt bp-ellipsis">
                              울산 5공장 생산 로봇 설치점검 방문 제목 영역
                              말줄임 말줄임 말줄임
                            </Box>
                          </div>
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item type-calendar">
                                <Calendar className="bp-icon small" />
                                <Box className="txt-period">
                                  2024.04.08 ~ 2024.04.12
                                </Box>
                                <Box className="txt-term">4박5일</Box>
                              </Box>
                            </ListItem>
                            <ListItem>
                              <Box className="item type-user">
                                <PersonIcon className="bp-icon small" />
                                <div className="user-info-row">
                                  <div className="user-name">
                                    최현대 과장(1341341)
                                  </div>
                                  <div className="user-team">
                                    라이프디자인팀 (TBCM-1)
                                  </div>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </BasicTabPanel>
            {/* [E]240822 modify */}
          </Box>
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        {/* 결재완료 tab 변경시 하단 버튼 display: none 처리 해주세요 */}
        {/* 240822 modify */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              반려
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              결재하기
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MAP010000;
