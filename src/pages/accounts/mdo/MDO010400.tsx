import { PolylineOutlined } from "@mui/icons-material";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

import { Box, Tab, Tabs } from "@mui/material";
import * as React from "react";
import FilterSet from "src/components/common/FilterSet";
import NoData from "src/components/common/NoData";

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

const MDO010400 = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [checked, setChecked] = useState(false);
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 상위 컴포넌트에서 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabs, setSubTabs] = useState([
    { label: "개인카드" },
    { label: "개인카드(전체)" },
    { label: "기타증빙" },
    { label: "기타증빙(전체)" },
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
        <title>사용내역</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper flex-wrap">
          <div className="light-box full-height">
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
                <Tab label="개인카드" {...a11yProps(0)} />
                <Tab label="기타증빙" {...a11yProps(1)} />
              </Tabs>
              <BasicTabPanel tabValue={tabValue} index={0}>
                <div className="ui-box">
                  <FilterSet />
                </div>
                <div className="ui-box">
                  <div className="inner-sides">
                    <FormControlLabel
                      label={<Box className="txt-label">전체 선택</Box>}
                      control={<Checkbox />}
                    />
                  </div>
                </div>
                <div className="list-amount-used">
                  <FormControl
                    component="fieldset"
                    variant="standard"
                    className="fullWidth "
                  >
                    <FormGroup className="fullWidth list-group">
                      <FormControlLabel
                        className={`${checked ? "is-active" : ""} label-large`}
                        control={
                          <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                          />
                        }
                        label={
                          <Box className="item-card">
                            <div className="item">
                              <div className="item-top inner-sides"></div>
                              <div className="title-area inner-sides">
                                <div className="txt">신라스테이 울산</div>
                                <div className="right-area type-amount">
                                  <div className="number-area">
                                    295,000
                                    <span className="txt-currency">원</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner-sides">
                              <div className="left-area">
                                <Box className="item-data">하나카드 1080</Box>
                              </div>
                              <div className="right-area">
                                {/* 이용일 추가 241115 kjs */}
                                <div className="item-date">
                                  이용일 yyyy.mm.dd~mm.dd
                                </div>
                              </div>
                            </div>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        className={`${checked ? "is-active" : ""} label-large`}
                        control={
                          <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                          />
                        }
                        label={
                          <Box className="item-card">
                            <div className="item">
                              <div className="item-top inner-sides"></div>
                              <div className="title-area inner-sides">
                                <div className="txt">대한항공</div>
                                <div className="right-area type-amount">
                                  <div className="number-area">
                                    295,000
                                    <span className="txt-currency">원</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner-sides">
                              <div className="left-area">
                                <Box className="item-data">하나카드 1080</Box>
                              </div>
                              <div className="right-area">
                                <div className="item-date">
                                  이용일 yyyy.mm.dd~mm.dd
                                </div>
                              </div>
                            </div>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        className={`${checked ? "is-active" : ""} label-large`}
                        control={
                          <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                          />
                        }
                        label={
                          <Box className="item-card">
                            <div className="item">
                              <div className="item-top inner-sides"></div>
                              <div className="title-area inner-sides">
                                <div className="txt">KTX-산천 003</div>
                                <div className="right-area type-amount">
                                  <div className="number-area">
                                    295,000
                                    <span className="txt-currency">원</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="inner-sides">
                              <div className="left-area">
                                <Box className="item-data">하나카드 1080</Box>
                              </div>
                              <div className="right-area">
                                <div className="item-date">
                                  이용일 yyyy.mm.dd~mm.dd
                                </div>
                              </div>
                            </div>
                          </Box>
                        }
                      />
                    </FormGroup>
                  </FormControl>
                  <div className="ui-box">
                    <NoData />
                  </div>
                </div>
              </BasicTabPanel>
              <BasicTabPanel tabValue={tabValue} index={1}>
                <div className="ui-box">
                  <FilterSet />
                </div>
                <div className="ui-box">
                  <div className="inner-sides">
                    <FormControlLabel
                      label={<Box className="txt-label">전체 선택</Box>}
                      control={<Checkbox />}
                    />
                  </div>
                </div>
                <div className="list-amount-used">
                  <FormControl
                    component="fieldset"
                    variant="standard"
                    className="fullWidth "
                  >
                    <FormGroup className="fullWidth list-group">
                      <FormControlLabel
                        className={`${checked ? "is-active" : ""} label-large`}
                        control={
                          <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                          />
                        }
                        label={
                          <Box className="item-card">
                            <div className="item">
                              <div className="item-top inner-sides">
                                <div className="left-area">
                                  <div className="item-data">교통</div>
                                </div>
                                <div className="right-area">
                                  <div className="item-date">
                                    2024.04.25 19:30
                                  </div>
                                </div>
                              </div>
                              <div className="title-area inner-sides">
                                <div className="txt">신라스테이 울산</div>
                                <div className="right-area type-amount">
                                  <div className="number-area">
                                    295,000
                                    <span className="txt-currency">원</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        className={`${checked ? "is-active" : ""} label-large`}
                        control={
                          <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                          />
                        }
                        label={
                          <Box className="item-card">
                            <div className="item">
                              <div className="item-top inner-sides">
                                <div className="left-area">
                                  <div className="item-data">하이패스</div>
                                </div>
                                <div className="right-area">
                                  <div className="item-date">
                                    2024.04.25 19:30
                                  </div>
                                </div>
                              </div>
                              <div className="title-area inner-sides">
                                <Box className="item-place">
                                  <PlaceIcon className="bp-icon small" />
                                  <div className="place-area">
                                    <Box className="pin">양재본사</Box>
                                    <Box className="pin">
                                      충남아산시현대로1077
                                    </Box>
                                  </div>
                                </Box>
                                <div className="right-area type-amount">
                                  <div className="number-area">
                                    295,000
                                    <span className="txt-currency">원</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        className={`${checked ? "is-active" : ""} label-large`}
                        control={
                          <Checkbox
                            onChange={(e) => setChecked(e.target.checked)}
                          />
                        }
                        label={
                          <Box className="item-card">
                            <div className="item">
                              <div className="item-top inner-sides">
                                <div className="left-area">
                                  <div className="item-data">숙소</div>
                                </div>
                                <div className="right-area">
                                  <div className="item-date">
                                    2024.04.25 19:30
                                  </div>
                                </div>
                              </div>
                              <div className="title-area inner-sides">
                                <div className="left-area">
                                  <div className="flex-row">
                                    <div className="item-revert">
                                      <PolylineOutlined className="bp-icon small" />
                                    </div>
                                    <div className="txt">신라스테이울산</div>
                                  </div>
                                  <div className="txt-desc">
                                    결제자 조진웅과장(345345)
                                  </div>
                                </div>
                                <div className="right-area type-amount">
                                  <div className="number-area type-col">
                                    <Box className="flex-row">
                                      <span className="txt">공유금액</span>
                                      <Box
                                        component="span"
                                        className="point-large"
                                      >
                                        295,000
                                        <span className="txt-currency">원</span>
                                      </Box>
                                    </Box>
                                    {/* <div className="txt-desc">
                                      결제금액 53,000원
                                    </div> */}
                                    <div className="item-date">
                                      이용일 yyyy.mm.dd~mm.dd
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Box>
                        }
                      />
                    </FormGroup>
                  </FormControl>
                </div>
              </BasicTabPanel>
            </Box>
          </div>
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              마이데이터/하이패스
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              첨부하기
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MDO010400;
