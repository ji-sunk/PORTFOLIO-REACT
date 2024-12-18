import PlaceIcon from "@mui/icons-material/Place";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  DialogTitle,
  Icon,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";

import { Calendar, ChevronRight } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import ChipsGroup from "src/components/common/ChipsGroup";

import React, { useState } from "react";

import { Tab, Tabs } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import NoData from "src/components/common/NoData";
import BusinessTripSwiper from "src/components/swiper/BusinessTripSwiper";

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

const MMA010000 = () => {
  const [selected, setSelected] = React.useState(false);
  const [tabValue, setTabValue] = React.useState(0);
  // [팝업]기본 팝업
  const [openDialog, setOpenDialog] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const handleClickOpenDialog = (scrollType: DialogProps["scroll"]) => () => {
    setOpenDialog(true);
    setScroll(scrollType);
  };
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 상위 컴포넌트에서 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabs, setSubTabs] = useState([
    { label: "전체" },
    { label: "기차" },
    { label: "고속버스" },
    { label: "항공" },
  ]);

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDialog]);

  // [팝업]FullPaper
  const [OpenFullPaper, setOpenFullPaper] = React.useState(false);
  const handleClickOpenFullPaper =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpenFullPaper(true);
      setScroll(scrollType);
    };
  const handleCloseFullPaper = () => {
    setOpenFullPaper(false);
  };

  const [writeOpen, setWriteOpen] = useState(false);
  const writeAnchorRef = useRef<HTMLButtonElement>(null);

  // return focus to the button when we transitioned from !open -> open
  const prevWriteOpen = useRef(writeOpen);
  useEffect(() => {
    if (prevWriteOpen.current === true && writeOpen === false) {
      writeAnchorRef.current!.focus();
    }
    prevWriteOpen.current = writeOpen;
  }, [writeOpen]);
  return (
    <>
      <Head>
        <title>출장정보 상세</title>
      </Head>
      {/* [S]출장정보 상세 */}
      <Dialog
        fullScreen
        open
        //   open={OpenFullPaper}
        onClose={handleCloseFullPaper}
        scroll={scroll}
        className="bp-dialog dialog-full-paper"
      >
        <DialogTitle component="div" className="bp-dialog-header">
          {/* [S]<HeaderDialog /> */}
          <AppBar position="fixed" className="sub-header">
            <Box className="inner">
              <div className="center-area">
                <Typography variant="h3">출장정보 상세</Typography>
              </div>
              <div className="right-area">
                <IconButton
                  className="btn-icon-only"
                  size="small"
                  aria-label="닫기"
                  onClick={handleCloseFullPaper}
                >
                  <GridCloseIcon fontSize="small" className="bp-icon" />
                </IconButton>
              </div>
            </Box>
          </AppBar>
          {/* [E]HeaderDialog */}
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          className="dialog-body"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {/* pd-b2 클래스 추가 kjs */}
          <div className="ui-inner pd-b2">
            {/* [S]bztrip-list */}
            <div className="bztrip-list ui-box">
              <Card className="item">
                <CardContent>
                  {/* [S]loop */}
                  <div className="item-top inner-sides">
                    <div className="left-area">
                      <ChipsGroup />
                    </div>
                    <div className="right-area"></div>
                  </div>
                  {/* [S]link-block */}
                  <div className="link-block">
                    <div className="title-area inner-sides">
                      <div className="txt">도장재 품질점검 협력사 2차 방문</div>
                      <Box className="right-area">
                        <ChevronRight className="bp-icon" />
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
                        <Box className="item">
                          <PlaceIcon className="bp-icon small" />
                          <div className="place-area">
                            <Box className="pin">양재본사</Box>
                            <Box className="pin">충남아산시현대로1077</Box>
                            <Box className="pin">강남대로 350</Box>
                            <Box className="pin">아산공장공장공장</Box>
                            <Box className="pin">아산공장공장2</Box>
                            <Box className="pin">아산공장23</Box>
                          </div>
                        </Box>
                      </ListItem>
                    </List>
                    <Box className="neutral-box mt-1">
                      1일차 일비 <b>40,000P</b>가 지급되었습니다.
                    </Box>
                  </div>
                  {/* [E]list-link-box */}
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium color-neutral-300"
                      >
                        비플페이 가맹점 검색
                      </Button>
                    </Box>
                  </Box>
                  <Box className="btns-group two">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        경로 추천
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        경로 검색
                      </Button>
                    </Box>
                  </Box>

                  {/* [S] dashed 라인 추가 + tab 추가 + swiper 추가 kjs */}
                  <div className="dashed-line"></div>

                  <BusinessTripSwiper />

                  <div className="tabs-box round-style">
                    <Box className="bp-tabs tabs-size-medium bp-tabs-top">
                      <Tabs
                        className="tab-list pd0"
                        value={tabValue}
                        onChange={tabHandleChange}
                        TabIndicatorProps={{
                          sx: { backgroundColor: "#fff" },
                        }}
                        aria-label=""
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          flexWrap: "wrap",
                        }}
                      >
                        <Tab label="전체" {...a11yProps(0)} />
                        <Tab label="기차" {...a11yProps(1)} />
                        <Tab label="고속/시외" {...a11yProps(2)} />
                        <Tab label="항공" {...a11yProps(3)} />
                      </Tabs>

                      <div className="tab-panel-area">
                        {/* 전체 */}
                        <BasicTabPanel tabValue={tabValue} index={0}>
                          <div className="course-area-line">
                            <Box className="time">
                              1시간 11분
                              <Chip
                                label="AI Pick"
                                size="small"
                                color="info"
                                className="bp-chip"
                              />
                            </Box>

                            <div className="txt-detail">
                              <div className="item-txt">도보 11분</div>
                              <div className="item-txt">환승 1회</div>
                              <div className="item-txt">111.3 Km</div>
                            </div>

                            <div className="info-box">
                              이동수단 중 기차옵션을 가장 추천드릴만 합니다.
                              <br />총 소요시간은 약 2시간 20분이며, 환승 횟수는
                              1번으로 상대적으로 적고, 도보 시간도 약 27분으로
                              비교적 짧습니다. 총 요금은 12,600원으로
                              나머지EXPRESSBUS 옵션보다 경제적입니다. 이동거리는
                              약 231.3km로 효율적입니다.
                            </div>

                            <div className="ui-box">
                              {/*[S] course-step */}
                              <ul className="course-step neutral-box">
                                <li className="item">
                                  {/* 
                                        출발 icon-start
                                        도보 icon-walk
                                        비행 icon-airplane
                                        자차 icon-car
                                        택시 icon-taxi
                                        도착 icon-location
                                        시내버스 icon-pubBus
                                        고속/시외 버스 icon-expBus
                                        KTX / SRT / 지하철 icon-train
                                      */}
                                  <Icon className="ico icon-start"></Icon>
                                  <div className="txt text-primary">출발</div>
                                  <div className="course-desc">
                                    <p className="text-primary">
                                      서울 중구 을지로 입구서울 중구 을지로 입구
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Icon className="ico icon-walk"></Icon>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="text-primary">
                                      롯데백화점 앞 00 버스정류장 도보로 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      00 버스정류장 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      지선 : 754 / 간선 : 728
                                    </strong>
                                    <p className="txt text-primary">
                                      서울역1번출구 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Icon className="ico icon-walk"></Icon>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="text-primary">서울역 이동</p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-train"></Box>
                                  <div className="txt">KTX</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울역 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      KTX : 서울 &gt; 아산
                                    </strong>
                                    <p className="txt text-primary">
                                      아산역 하차
                                    </p>
                                    <Box className="btns-small-group">
                                      <Button
                                        variant="contained"
                                        size="medium"
                                        className="btn-small"
                                      >
                                        예약하기
                                      </Button>
                                    </Box>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      도착지까지 도보로 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-location"></Box>
                                  <div className="txt">도착</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      충남 아산시 안주면 혀대로 1077
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              {/*[E] course-step */}
                            </div>
                          </div>
                          <Box className="btns-group btn-br-type">
                            <Button
                              variant="outlined"
                              size="medium"
                              className="text-primary"
                            >
                              지도로 보기
                            </Button>
                          </Box>
                        </BasicTabPanel>
                        {/* 기차 */}
                        <BasicTabPanel tabValue={tabValue} index={1}>
                          <div className="course-area-line">
                            <div className="ui-box">
                              <div className="">
                                <Box className="time">2시간 50분</Box>
                                <div className="txt-detail">
                                  <div className="item-txt">도보 15분</div>
                                  <div className="item-txt">환승 1회</div>
                                  <div className="item-txt">311.8 Km</div>
                                </div>
                              </div>
                            </div>
                            <div className="ui-box">
                              {/*[S] course-step */}
                              <ul className="course-step neutral-box">
                                <li className="item">
                                  {/* 
                                      출발 icon-start
                                      도보 icon-walk
                                      비행 icon-airplane
                                      자차 icon-car
                                      택시 icon-taxi
                                      도착 icon-location
                                      시내버스 icon-pubBus
                                      고속/시외 버스 icon-expBus
                                      KTX / SRT / 지하철 icon-train
                                    */}
                                  <Icon className="ico icon-start"></Icon>
                                  <div className="txt">출발</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 중구 을지로 입구서울 중구 을지로 입구
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Icon className="ico icon-walk"></Icon>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    롯데백화점까지 도보로 이동
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">시내버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      롯데백화점 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      간선 : 143
                                    </strong>
                                    <p className="txt text-primary">
                                      고속터미널 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 고속버스터미널 도보 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-expBus"></Box>
                                  <div className="txt">고속버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 고속버스터미널 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      고속버스 : 서울 &gt; 울산
                                    </strong>
                                    <p className="txt text-primary">
                                      울산 고속버스터미널 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      도보 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">시내버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      00 버스정류장 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      지선 : 754 / 간선 : 728
                                    </strong>
                                    <p className="txt text-primary">
                                      선암동 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      현대자동차 울산5공장까지 도보로 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-location"></Box>
                                  <div className="txt">도착</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      현대자동차 울산 5공장
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              {/*[E] course-step */}
                            </div>
                          </div>
                          <Box className="btns-group btn-br-type">
                            <Button
                              variant="outlined"
                              size="medium"
                              className="text-primary"
                            >
                              지도로 보기
                            </Button>
                          </Box>
                        </BasicTabPanel>
                        {/* 고속/시외 */}
                        <BasicTabPanel tabValue={tabValue} index={2}>
                          <div className="course-area-line">
                            <div className="ui-box">
                              <div className="">
                                <Box className="time">3시간 30분</Box>
                                <div className="txt-detail">
                                  <div className="item-txt">환승 1회</div>
                                  <div className="item-txt">331.3 Km</div>
                                </div>
                              </div>
                            </div>
                            <div className="ui-box">
                              {/*[S] course-step */}
                              <ul className="course-step neutral-box">
                                <li className="item">
                                  {/* 
                                      출발 icon-start
                                      도보 icon-walk
                                      비행 icon-airplane
                                      자차 icon-car
                                      택시 icon-taxi
                                      도착 icon-location
                                      시내버스 icon-pubBus
                                      고속/시외 버스 icon-expBus
                                      KTX / SRT / 지하철 icon-train
                                    */}
                                  <Icon className="ico icon-start"></Icon>
                                  <div className="txt">출발</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 중구 을지로 입구서울 중구 을지로 입구
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Icon className="ico icon-walk"></Icon>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    롯데백화점까지 도보로 이동
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">시내버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      롯데백화점 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      간선 : 143
                                    </strong>
                                    <p className="txt text-primary">
                                      고속터미널 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 고속버스터미널 도보 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-expBus"></Box>
                                  <div className="txt">고속버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 고속버스터미널 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      고속버스 : 서울 &gt; 울산
                                    </strong>
                                    <p className="txt text-primary">
                                      울산 고속버스터미널 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      도보 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">시내버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      00 버스정류장 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      일반 : 754 / 일반 : 728
                                    </strong>
                                    <p className="txt text-primary">
                                      선암동 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      현대자동차 울산5공장까지 도보로 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-location"></Box>
                                  <div className="txt">도착</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      현대자동차 울산 5공장
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              {/*[E] course-step */}
                            </div>
                          </div>
                          <Box className="btns-group btn-br-type">
                            <Button
                              variant="outlined"
                              size="medium"
                              className="text-primary"
                            >
                              지도로 보기
                            </Button>
                          </Box>
                        </BasicTabPanel>
                        {/* 항공 */}
                        <BasicTabPanel tabValue={tabValue} index={3}>
                          <div className="course-area-line">
                            <div className="ui-box">
                              <div className="">
                                <Box className="time">2시간 00분</Box>
                                <div className="txt-detail">
                                  <div className="item-txt">환승 1회</div>
                                  <div className="item-txt">11.3 Km</div>
                                </div>
                              </div>
                            </div>
                            <div className="ui-box">
                              {/*[S] course-step */}
                              <ul className="course-step neutral-box">
                                <li className="item">
                                  {/* 
                                      출발 icon-start
                                      도보 icon-walk
                                      비행 icon-airplane
                                      자차 icon-car
                                      택시 icon-taxi
                                      도착 icon-location
                                      시내버스 icon-pubBus
                                      고속/시외 버스 icon-expBus
                                      KTX / SRT / 지하철 icon-train
                                    */}
                                  <Icon className="ico icon-start"></Icon>
                                  <div className="txt">출발</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 중구 을지로 입구서울 중구 을지로 입구
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Icon className="ico icon-walk"></Icon>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    롯데백화점까지 도보로 이동
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">시내버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      롯데백화점 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      간선 : 143
                                    </strong>
                                    <p className="txt text-primary">
                                      고속터미널 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 고속버스터미널 도보 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-expBus"></Box>
                                  <div className="txt">고속버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      서울 고속버스터미널 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      고속버스 : 서울 &gt; 울산
                                    </strong>
                                    <p className="txt text-primary">
                                      울산 고속버스터미널 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      도보 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-pubBus"></Box>
                                  <div className="txt">시내버스</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      00 버스정류장 승차
                                    </p>
                                    <strong className="color-primary-dark">
                                      일반 : 754 / 일반 : 728
                                    </strong>
                                    <p className="txt text-primary">
                                      선암동 하차
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-walk"></Box>
                                  <div className="txt">도보</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      현대자동차 울산5공장까지 도보로 이동
                                    </p>
                                  </div>
                                </li>
                                <li className="item">
                                  <Box className="ico icon-location"></Box>
                                  <div className="txt">도착</div>
                                  <div className="course-desc">
                                    <p className="txt text-primary">
                                      현대자동차 울산 5공장
                                    </p>
                                  </div>
                                </li>
                              </ul>
                              {/*[E] course-step */}
                            </div>
                          </div>
                          <Box className="btns-group btn-br-type">
                            <Button
                              variant="outlined"
                              size="medium"
                              className="text-primary"
                            >
                              지도로 보기
                            </Button>
                          </Box>
                        </BasicTabPanel>
                      </div>
                    </Box>
                  </div>
                  {/* [E] dashed 라인 추가 + tab 추가 + swiper 추가 kjs */}
                </CardContent>
              </Card>

              <Card className="item">
                <CardContent>
                  {/* [S]link-block */}
                  <div className="link-block">
                    <NoData />
                  </div>
                  {/* [E]list-link-box */}
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        목적지 숙박 검색
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card className="item">
                <CardContent>
                  {/* [S]link-block */}
                  <div className="link-block">
                    <NoData />
                  </div>
                  {/* [E]list-link-box */}
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium color-neutral-300"
                      >
                        교통수단 추천
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        교통수단 선택
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card className="item">
                <CardContent>
                  <div className="item-top inner-sides mg-b1">
                    <div className="left-area">
                      <div className="chips-group">
                        <Chip
                          label=" 결제완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                    </div>
                    <div className="right-area">
                      <div className="item-prd">
                        <img
                          src="/assets/images/icons/icon-h-hotel.svg"
                          width={16}
                          height={16}
                          alt="숙박"
                        />
                        <div className="txt">신라스테이 울산</div>
                      </div>
                    </div>
                  </div>

                  <div className="neutral-box info-prd">
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">예약번호</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">2024042528345-H01</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">이용기간</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">2024.04.08 ~ 2024.04.12 (4박)</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">객실명</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">
                          스탠다드-디럭스 더블 무료 업그레이드
                        </Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">옵션</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">조식포함</Box>
                      </dd>
                    </dl>
                    {/* 무료취소기한 추가 kjs */}
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">무료취소기한</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">취소불가</Box>
                      </dd>
                    </dl>
                  </div>
                </CardContent>
              </Card>
              {/* [S] 티켓 추가 kjs */}

              {/* [S] 카드추가 241106 kjs */}
              <Card className="item">
                <CardContent>
                  <Box className="transportation-schedule">
                    <div className="item-top inner-sides mg-b1">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="선택완료"
                            size="small"
                            className="bp-chip color-blue"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-prd">
                          <img
                            src="/assets/images/icons/icon-h-car.svg"
                            width={16}
                            height={16}
                            alt="자차"
                          />
                          <div className="txt bp-ellipsis">
                            [자차] 디올뉴그랜저Hybrid
                          </div>
                        </div>
                      </div>
                    </div>
                    <Box className="neutral-box bg-none">
                      <div className="item">
                        <dl>
                          <dd className="destination">
                            목적지1 목적지1목적지1목적지1목적지1목적지1
                          </dd>
                        </dl>
                      </div>
                      <div className="item">
                        <dl>
                          <dd className="destination">목적지2</dd>
                        </dl>
                      </div>
                    </Box>
                  </Box>
                  <div className="neutral-box info-prd">
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">차량번호</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">123가0987</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">동승자보험 가입여부</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">예</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">대상자</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">김현대(H437890)</Box>
                      </dd>
                    </dl>
                  </div>
                </CardContent>
              </Card>
              {/* [E] 카드추가 241106 kjs */}

              <Card className="item">
                <CardContent>
                  <Box className="transportation-schedule">
                    <div className="item-top inner-sides mg-b1">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label=" 결제완료"
                            size="small"
                            color="info"
                            className="bp-chip color-twotone color-info"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-prd">
                          <img
                            src="/assets/images/icons/icon-h-train.svg"
                            width={16}
                            height={16}
                            alt="KTX"
                          />
                          <div className="txt">KTX 산천 0031</div>
                        </div>
                      </div>
                    </div>
                    <Box className="neutral-box">
                      <div className="item">
                        <dl>
                          <dt>부산</dt>
                          <dd className="time">13:27</dd>
                        </dl>
                      </div>
                      <div className="item">
                        <dl>
                          <dt>서울</dt>
                          <dd className="time">15:27</dd>
                        </dl>
                      </div>
                    </Box>
                    <Box className="ticket-number">
                      <dl>
                        <dt>승차권번호</dt>
                        <dd className="number">82103-1005-10725-55</dd>
                      </dl>
                    </Box>
                    <Box className="ticket-cancell">
                      <dl>
                        <dt>무료취소기한</dt>
                        <dd className="date"> 2024.11.30 11:59까지</dd>
                      </dl>
                    </Box>
                    <List className="list-schedule">
                      <ListItem>
                        <Box className="item">
                          <PlaceIcon className="bp-icon small" />
                          <div className="place-area">
                            <Box className="pin">양재본사</Box>
                            <Box className="pin">충남아산시현대로1077</Box>
                          </div>
                        </Box>
                      </ListItem>
                    </List>
                    <Box className="detail-platform">
                      {/* <dl>
                          <dt>타는곳번호</dt>
                          <dd>15분전표시</dd>
                        </dl> */}
                      <dl>
                        <dt>이용일</dt>
                        <dd className="seat-number">2024.10.30</dd>
                      </dl>
                      <dl>
                        <dt>호차번호</dt>
                        <dd className="seat-number">12호차</dd>
                      </dl>
                      <dl>
                        <dt>좌석번호</dt>
                        <dd className="seat-number">5A</dd>
                      </dl>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </div>
            {/* [E]bztrip-list */}
          </div>
        </DialogContent>
        {/* <DialogActions className="dialog-footer"></DialogActions> */}
      </Dialog>
      {/* [E]출장정보 상세 */}
    </>
  );
};

export default MMA010000;
