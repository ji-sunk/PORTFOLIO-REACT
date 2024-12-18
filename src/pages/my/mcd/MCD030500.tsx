import { Button, Paper } from "@mui/material";
import { Share07 } from "@untitled-ui/icons-react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

import { Box, Chip, Tab, Tabs } from "@mui/material";
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

const MCD030500 = () => {
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
        <title>영수증 등록 | 마이페이지</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper flex-wrap">
          <div className="light-box full-height my-receipt-wrap">
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

                <div className="light-box full-height">
                  <div className="ui-box">
                    <Box className="item-card">
                      <div className="item">
                        <div className="item-top inner-sides">
                          <div className="left-area">
                            <div className="item-data">숙박비</div>
                          </div>
                          <div className="right-area">
                            <div className="item-date">04.12(금) 12:00</div>
                            <div className="chips-group">
                              <Chip
                                label="미작성"
                                size="medium"
                                className="bp-chip color-twotone color-warning"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="title-area inner-sides">
                          <div className="left-area mg-t5">
                            <div className="flex-row">
                              <div className="item-revert">
                                <Share07 className="bp-icon small" />
                              </div>
                              <div className="txt">순흥골</div>
                            </div>
                            <div className="txt-desc">
                              결제자 김현대(345345)
                            </div>
                          </div>
                          <div className="right-area type-amount">
                            <div className="number-area type-col">
                              <Box className="flex-row">
                                <span className="txt">공유금액</span>
                                <Box component="span" className="point-large">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </Box>
                              </Box>
                              {/* 이용일 추가 241115 kjs */}
                              <div className="item-date">
                                이용일 yyyy.mm.dd~mm.dd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                    <Box className="item-card">
                      <div className="item">
                        <div className="item-top inner-sides">
                          <div className="left-area">
                            <div className="item-data">숙박비</div>
                          </div>
                          <div className="right-area">
                            <div className="item-date">04.12(금) 12:00</div>
                            <div className="chips-group">
                              <Chip
                                label="미작성"
                                size="medium"
                                className="bp-chip color-twotone color-warning"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="title-area inner-sides">
                          <div className="left-area mg-t5">
                            <div className="flex-row">
                              <div className="item-revert">
                                <Share07 className="bp-icon small" />
                              </div>
                              <div className="txt">순흥골</div>
                            </div>
                            <div className="txt-desc">
                              결제자 김현대(345345)
                            </div>
                          </div>
                          <div className="right-area type-amount">
                            <div className="number-area type-col">
                              <Box className="flex-row">
                                <span className="txt">공유금액</span>
                                <Box component="span" className="point-large">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </Box>
                              </Box>
                              {/* 이용일 추가 241115 kjs */}
                              <div className="item-date">
                                이용일 yyyy.mm.dd~mm.dd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>

                    <Box className="item-card">
                      <div className="item">
                        <div className="item-top inner-sides">
                          <div className="left-area">
                            <div className="item-data">숙박비</div>
                          </div>
                          <div className="right-area">
                            <div className="item-date">04.12(금) 12:00</div>
                            <div className="chips-group">
                              <Chip
                                label="작성"
                                size="medium"
                                className="bp-chip color-twotone color-info"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="title-area inner-sides">
                          <div className="left-area mg-t5">
                            <div className="flex-row">
                              <div className="txt">신라호텔</div>
                            </div>
                            <div className="item-data">국민카드</div>
                          </div>
                          <div className="right-area type-amount">
                            <div className="number-area type-col">
                              <Box className="flex-row">
                                <Box component="span" className="point-large">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </Box>
                              </Box>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </BasicTabPanel>

              <BasicTabPanel tabValue={tabValue} index={1}>
                <div className="ui-box">
                  <FilterSet />
                </div>
                <div className="light-box full-height">
                  <div className="ui-box">
                    <Box className="item-card">
                      <div className="item">
                        <div className="item-top inner-sides">
                          <div className="left-area">
                            <div className="item-data">숙박비</div>
                          </div>
                          <div className="right-area">
                            <div className="item-date">04.12(금) 12:00</div>
                            <div className="chips-group">
                              <Chip
                                label="미작성"
                                size="medium"
                                className="bp-chip color-twotone color-warning"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="title-area inner-sides">
                          <div className="left-area mg-t5">
                            <div className="flex-row">
                              <div className="item-revert">
                                <Share07 className="bp-icon small" />
                              </div>
                              <div className="txt">순흥골</div>
                            </div>
                            <div className="txt-desc">
                              결제자 김현대(345345)
                            </div>
                          </div>
                          <div className="right-area type-amount">
                            <div className="number-area type-col">
                              <Box className="flex-row">
                                <span className="txt">공유금액</span>
                                <Box component="span" className="point-large">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </Box>
                              </Box>
                              {/* 이용일 추가 241115 kjs */}
                              <div className="item-date">
                                이용일 yyyy.mm.dd~mm.dd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>

                    <Box className="item-card">
                      <div className="item">
                        <div className="item-top inner-sides">
                          <div className="left-area">
                            <div className="item-data">숙박비</div>
                          </div>
                          <div className="right-area">
                            <div className="item-date">04.12(금) 12:00</div>
                            <div className="chips-group">
                              <Chip
                                label="작성"
                                size="medium"
                                className="bp-chip color-twotone color-info"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="title-area inner-sides">
                          <div className="left-area mg-t5">
                            <div className="flex-row">
                              <div className="txt">신라호텔</div>
                            </div>
                            <div className="item-data">국민카드</div>
                          </div>
                          <div className="right-area type-amount">
                            <div className="number-area type-col">
                              <Box className="flex-row">
                                <Box component="span" className="point-large">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </Box>
                              </Box>
                              {/* 이용일 추가 241115 kjs */}
                              <div className="item-date">
                                이용일 yyyy.mm.dd~mm.dd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Box>
                  </div>
                </div>
              </BasicTabPanel>
            </Box>
          </div>
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              카드사 데이터 가져오기
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MCD030500;
