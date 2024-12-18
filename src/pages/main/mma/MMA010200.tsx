import PlaceIcon from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Paper,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import { ChevronRight, Mark } from "@untitled-ui/icons-react";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

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

const selectOption = [
  { label: "label1", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MMA010200 = (props) => {
  const clearSearch = () => {
    setFilteredLocations("");
  };

  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [filteredLocations, setFilteredLocations] = useState("");

  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [tabValue, setTabValue] = React.useState(0);

  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 상위 컴포넌트에서 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabs, setSubTabs] = useState([
    { label: "전체" },
    { label: "기차" },
    { label: "고속" },
    { label: "항공" },
  ]);

  return (
    <>
      <Head>
        <title>경로 검색</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        {/* 241022
        [S] 구간 선택버튼 삭제 + route-recmt 클래스 추가 + 텍스트 필드 현위치 아이콘 추가 + 구간별 상세 > 아이콘 링크 타고 들어가는 구조로 변경  
        */}
        <Paper className="ui-paper flex-wrap route-recmt">
          {/* [S]map-route-wrap */}
          <div className="map-route-wrap">
            <div className="light-box">
              <div className="ui-box">
                <div className="item-field">
                  <TextField
                    variant="filled"
                    size="medium"
                    data-cy="searchBox"
                    placeholder="출발지"
                    label="출발지"
                    className="bp-label-clear"
                    fullWidth
                    hiddenLabel
                    value={filteredLocations}
                    onChange={filterResults}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" className="btn-groups">
                          <IconButton>
                            <Mark fontSize="small" className="bp-icon medium" />
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="item-field">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="목적지"
                    placeholder=""
                    className="type-address"
                  />
                </div>
              </div>
              <Box className="btns-group ui-box">
                <Box className="inner">
                  <Button
                    variant="contained"
                    size="medium"
                    className="btn-medium"
                  >
                    검색하기
                  </Button>
                </Box>
              </Box>
            </div>
            <div className="tabs-box">
              <Box className="bp-tabs tabs-basic tabs-size-medium bp-tabs-top">
                <Tabs
                  className="tab-list tab-typeLine"
                  value={tabValue}
                  onChange={tabHandleChange}
                  TabIndicatorProps={{
                    sx: { backgroundColor: "#00AAD2" },
                  }}
                  aria-label=""
                >
                  <Tab label="전체" {...a11yProps(0)} />
                  <Tab label="기차" {...a11yProps(1)} />
                  <Tab label="고속" {...a11yProps(2)} />
                  <Tab label="항공" {...a11yProps(3)} />
                </Tabs>
                <div className="ui-box">
                  <BasicTabPanel tabValue={tabValue} index={0}>
                    <div className="bztrip-list">
                      {/* 항공 */}
                      <Card className="item">
                        <CardContent>
                          <Link to="#">
                            <div className="title-area inner-sides">
                              <div className="left-area">
                                <div className="txt">1시간 15분</div>
                                <div className="txt-detail">
                                  <div className="txt-desc item-txt">
                                    비행 1시간
                                  </div>
                                  <div className="txt-desc item-txt">
                                    도보 15분
                                  </div>
                                  <div className="txt-desc item-txt">
                                    312.8 Km
                                  </div>
                                  {/* <div className="type-amount item-txt">
                                <div className="number-area">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </div>
                              </div> */}
                                </div>
                              </div>
                              <div className="right-area">
                                <ChevronRight
                                  fontSize="medium"
                                  className="bp-icon medium"
                                />
                              </div>
                            </div>
                          </Link>

                          <Box className="transportation-schedule">
                            <Box className="trip-route-box">
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-error"
                                  aria-label="항공"
                                >
                                  <span className="bp-icon icon-flight"></span>
                                </Avatar>
                              </div>
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-success"
                                  aria-label="거래처"
                                >
                                  <PlaceIcon className="bp-icon xsmall" />
                                </Avatar>
                              </div>
                            </Box>
                          </Box>
                          <div className="item-field">
                            <dl className="flex-row-half">
                              <dt className="left-area">
                                <div className="txt">김포국제공항</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">울산공항</Box>
                              </dd>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 기차 */}
                      <Card className="item">
                        <CardContent>
                          <Link to="#">
                            <div className="title-area inner-sides">
                              <div className="left-area">
                                <div className="txt">3시간 11분</div>
                                <div className="txt-detail">
                                  <div className="txt-desc item-txt">
                                    도보 11분
                                  </div>
                                  <div className="txt-desc item-txt">
                                    환승 1회
                                  </div>
                                  <div className="txt-desc item-txt">
                                    231.3 Km
                                  </div>
                                </div>
                              </div>
                              <div className="right-area">
                                <ChevronRight
                                  fontSize="medium"
                                  className="bp-icon medium"
                                />
                              </div>
                            </div>
                          </Link>
                          <Box className="transportation-schedule">
                            <Box className="trip-route-box">
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-error"
                                  aria-label="기차"
                                >
                                  <span className="bp-icon icon-train"></span>
                                </Avatar>
                              </div>
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-success"
                                  aria-label="거래처"
                                >
                                  <PlaceIcon className="bp-icon xsmall" />
                                </Avatar>
                              </div>
                            </Box>
                          </Box>
                          <div className="item-field">
                            <dl className="flex-row-half">
                              <dt className="left-area">
                                <div className="txt">서울역</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">울산(통도사)역</Box>
                              </dd>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>

                      {/* 고속 */}
                      <Card className="item">
                        <CardContent>
                          <div className="title-area inner-sides">
                            <div className="left-area">
                              <div className="txt">2시간 30분</div>
                              <div className="txt-detail">
                                <div className="txt-desc item-txt">
                                  교통수단 2시간 30분
                                </div>
                              </div>
                            </div>
                            <div className="right-area">
                              <ChevronRight
                                fontSize="medium"
                                className="bp-icon medium"
                              />
                            </div>
                          </div>
                          <Box className="transportation-schedule">
                            <Box className="trip-route-box">
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-error"
                                  aria-label="고속"
                                >
                                  <span className="bp-icon icon-bus"></span>
                                </Avatar>
                              </div>
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-success"
                                  aria-label="거래처"
                                >
                                  <PlaceIcon className="bp-icon xsmall" />
                                </Avatar>
                              </div>
                            </Box>
                          </Box>
                          <div className="item-field">
                            <dl className="flex-row-half">
                              <dt className="left-area">
                                <div className="txt">
                                  출발지명이 길어지면 하단으로 2줄처리
                                </div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">
                                  도착지명이 길어지면 하단으로 2줄처리
                                </Box>
                              </dd>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </BasicTabPanel>
                  <BasicTabPanel tabValue={tabValue} index={1}>
                    <div className="bztrip-list">
                      {/* 기차 */}
                      <Card className="item">
                        <CardContent>
                          <Link to="#">
                            <div className="title-area inner-sides">
                              <div className="left-area">
                                <div className="txt">3시간 11분</div>
                                <div className="txt-detail">
                                  <div className="txt-desc item-txt">
                                    도보 11분
                                  </div>
                                  <div className="txt-desc item-txt">
                                    환승 1회
                                  </div>
                                  <div className="txt-desc item-txt">
                                    231.3 Km
                                  </div>
                                </div>
                              </div>
                              <div className="right-area">
                                <ChevronRight
                                  fontSize="medium"
                                  className="bp-icon medium"
                                />
                              </div>
                            </div>
                          </Link>
                          <Box className="transportation-schedule">
                            <Box className="trip-route-box">
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-error"
                                  aria-label="기차"
                                >
                                  <span className="bp-icon icon-train"></span>
                                </Avatar>
                              </div>
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-success"
                                  aria-label="거래처"
                                >
                                  <PlaceIcon className="bp-icon xsmall" />
                                </Avatar>
                              </div>
                            </Box>
                          </Box>
                          <div className="item-field">
                            <dl className="flex-row-half">
                              <dt className="left-area">
                                <div className="txt">서울역</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">울산(통도사)역</Box>
                              </dd>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </BasicTabPanel>
                  <BasicTabPanel tabValue={tabValue} index={2}>
                    <div className="bztrip-list">
                      {/* 고속 */}
                      <Card className="item">
                        <CardContent>
                          <div className="title-area inner-sides">
                            <div className="left-area">
                              <div className="txt">2시간 30분</div>
                              <div className="txt-detail">
                                <div className="txt-desc item-txt">
                                  교통수단 2시간 30분
                                </div>
                              </div>
                            </div>
                            <div className="right-area">
                              <ChevronRight
                                fontSize="medium"
                                className="bp-icon medium"
                              />
                            </div>
                          </div>
                          <Box className="transportation-schedule">
                            <Box className="trip-route-box">
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-error"
                                  aria-label="고속"
                                >
                                  <span className="bp-icon icon-bus"></span>
                                </Avatar>
                              </div>
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-success"
                                  aria-label="거래처"
                                >
                                  <PlaceIcon className="bp-icon xsmall" />
                                </Avatar>
                              </div>
                            </Box>
                          </Box>
                          <div className="item-field">
                            <dl className="flex-row-half">
                              <dt className="left-area">
                                <div className="txt">
                                  출발지명이 길어지면 하단으로 2줄처리
                                </div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">
                                  도착지명이 길어지면 하단으로 2줄처리
                                </Box>
                              </dd>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </BasicTabPanel>
                  <BasicTabPanel tabValue={tabValue} index={3}>
                    <div className="bztrip-list">
                      {/* 항공 */}
                      <Card className="item">
                        <CardContent>
                          <Link to="#">
                            <div className="title-area inner-sides">
                              <div className="left-area">
                                <div className="txt">1시간 15분</div>
                                <div className="txt-detail">
                                  <div className="txt-desc item-txt">
                                    비행 1시간
                                  </div>
                                  <div className="txt-desc item-txt">
                                    도보 15분
                                  </div>
                                  <div className="txt-desc item-txt">
                                    312.8 Km
                                  </div>
                                  {/* <div className="type-amount item-txt">
                                <div className="number-area">
                                  295,000
                                  <span className="txt-currency">원</span>
                                </div>
                              </div> */}
                                </div>
                              </div>
                              <div className="right-area">
                                <ChevronRight
                                  fontSize="medium"
                                  className="bp-icon medium"
                                />
                              </div>
                            </div>
                          </Link>

                          <Box className="transportation-schedule">
                            <Box className="trip-route-box">
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-error"
                                  aria-label="항공"
                                >
                                  <span className="bp-icon icon-flight"></span>
                                </Avatar>
                              </div>
                              <div className="item">
                                <Avatar
                                  className="bp-avatar size-xsmall color-success"
                                  aria-label="거래처"
                                >
                                  <PlaceIcon className="bp-icon xsmall" />
                                </Avatar>
                              </div>
                            </Box>
                          </Box>
                          <div className="item-field">
                            <dl className="flex-row-half">
                              <dt className="left-area">
                                <div className="txt">김포국제공항</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">울산공항</Box>
                              </dd>
                            </dl>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </BasicTabPanel>
                </div>
              </Box>
            </div>
            {/* [E]map-route-wrap */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
      </LayoutSub>
    </>
  );
};

export default MMA010200;
