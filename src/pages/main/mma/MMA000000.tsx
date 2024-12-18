import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  IconButton,
  List,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@untitled-ui/icons-react";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import "swiper/css";

import { Close } from "@mui/icons-material";
import FabMainFixed from "src/components/common/FabMainFixed";
import CardBann from "src/templates/banner/CardBann";
import DirectlyCard from "src/templates/card/DirectlyCard";
import NotiCard from "src/templates/card/NotiCard";
import LayoutMain from "src/templates/layout/LayoutMain";

import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import { Chip, Tooltip } from "@mui/material";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Calendar } from "@untitled-ui/icons-react";
import ChipsGroup from "src/components/common/ChipsGroup";
import MainWeather from "src/components/swiper/MainWeather";
import "swiper/css";
type Anchor = "top" | "left" | "bottom" | "right";
const MMA000000 = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(false);

  const [open, setOpen] = useState(false);
  const onClose = (e) => setOpen(false);

  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-00");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    listDrawer1: false, //비상신고하기
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
        <title>메인</title>
      </Head>
      <LayoutMain>
        <Paper className="ui-paper main-wrap">
          <div className="ui-box">
            <NotiCard />
          </div>
          {/* [w/o]
          <div className="ui-box">
            <BannSwiper />
          </div> */}
          <div className="ui-box">
            <CardBann />
          </div>
          <div className="ui-box">
            <div className="point-payment">
              <div className="detail-usable">
                <div className="item type-dp">
                  <div className="title">일비포인트</div>
                  <Box className="hands-area">
                    <span>128,000</span>
                    {/* 240819 modify */}
                    <span className="currency">원</span>
                  </Box>
                </div>
                <div className="item type-bm">
                  <div className="title">비플머니</div>
                  <Box className="hands-area">
                    <span>108,000</span>
                    <span className="currency">원</span>
                  </Box>
                </div>
              </div>
              <Box className="btns-group">
                <Box className="inner">
                  {/* 일비포인트몰 추후 오픈 예정 11월 중순 / 퍼블 선작업 241104 */}
                  <Button
                    variant="contained"
                    size="medium"
                    className="btn-radius0"
                  >
                    일비포인트몰
                  </Button>
                  <Button
                    variant="contained"
                    size="medium"
                    className="btn-radius0"
                  >
                    QR결제
                  </Button>
                </Box>
              </Box>
            </div>
          </div>
          <div className="ui-box">
            <div className="item-top inner-sides">
              <div className="left-area">
                <div className="txt">
                  {/* 240819 modify */}
                  결재대기 <span className="txt-cases">4건</span>
                </div>
              </div>
              <div className="right-area">
                <span className="txt">전체내역 보기</span>
                <ChevronRight fontSize="small" className="bp-icon xsmall" />
              </div>
            </div>
          </div>
          <div className="ui-box">
            {/*[S] default: "type-new" , n건: multilist , 알림: is-new */}
            <Card className="type-new multilist is-new">
              <CardContent>
                <div className="item-top inner-sides">
                  <div className="left-area">결재대기</div>
                  <div className="right-area">
                    <div>요청일</div>
                    <div className="item-date">2024.04.01</div>
                  </div>
                </div>
                <Link to="" className="link-block">
                  <div className="title-area inner-sides">
                    {/* 240819 modify */}
                    <div className="txt">
                      울산 5공장 생산 로봇 설치 점검 방문
                    </div>
                    <Box className="right-area">
                      <ChevronRight className="bp-icon" />
                    </Box>
                  </div>
                  <div className="al-right">
                    상신자 <span className="txt-strong">조진웅</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="ui-box">
            {/* [S]240819 modify */}
            <div className="bztrip-list">
              <Card className="item">
                <CardContent>
                  {/* [S]link-block */}
                  <Link to="" className="link-block">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="출장종료"
                            size="small"
                            color="info"
                            className="bp-chip"
                          />
                        </div>
                      </div>
                      <div className="right-area"></div>
                    </div>

                    <div className="title-area inner-sides">
                      {/* 240819 modify */}
                      <div className="txt">
                        울산 5공장 생산 로봇 설치점검 방문
                      </div>
                      <Box className="right-area">
                        <ChevronRight className="bp-icon" />
                      </Box>
                    </div>
                    {/* [S]transportation-schedule */}
                  </Link>
                  {/* [E]link-block */}
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium color-neutral-100"
                      >
                        메인에서 삭제
                      </Button>
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        추가 정산하기
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
              {/* [S] 날씨 추가 241007 kjs */}
              <Card className="item slide">
                <CardContent>
                  <MainWeather />
                </CardContent>
              </Card>
              {/* [E] 날씨 추가 241007 kjs */}

              <Card className="item">
                <CardContent>
                  <div className="link-block">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="출장비회수요청"
                            size="small"
                            color="warning"
                            className="bp-chip"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="date">요청일 2024.04.01</div>
                      </div>
                    </div>

                    <div className="title-area inner-sides">
                      {/* 240819 modify */}
                      <div className="left-area">
                        <div className="txt">출장비 999,999원 회수 요청</div>
                      </div>
                      <div className="right-area"></div>
                    </div>
                    <Box className="neutral-box">
                      <b>울산 5공장 생산 로봇 설비점검 방문</b> 건으로 추가
                      지급된 출장비를 입금해주세요.
                    </Box>
                  </div>
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        입금하기
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card className="item">
                <CardContent>
                  <div className="link-block">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="출장비회수요청"
                            size="small"
                            color="warning"
                            className="bp-chip"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="date">요청일 2024.04.01</div>
                      </div>
                    </div>

                    <div className="title-area inner-sides">
                      {/* 240819 modify */}
                      <div className="txt">출장비 999,999원 회수 요청</div>
                    </div>
                    <Box className="neutral-box">
                      정산서 미작성에 따른 회수 요청
                    </Box>
                  </div>
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        입금하기
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              <Card className="item">
                <CardContent>
                  <div className="item-top inner-sides">
                    <div className="left-area">
                      <ChipsGroup />
                    </div>
                    <div className="right-area">
                      <div className="item-date">요청일 2024.04.01</div>
                      <div className="item-transportation">
                        {/* 다국어 적용으로 이미지는 삭제 모두 텍스트로 변경 240909 */}
                        <span>
                          <img
                            src="/assets/images/icons/icon-h-train.svg"
                            alt=""
                          />
                        </span>
                        <span className="txt">KTX 산천 0031</span>
                      </div>
                      <div className="txt-tooltip">
                        출장비 한도
                        <Tooltip
                          title={
                            <div className="bp-tooltip">
                              <div className="tooltip-body">
                                일비 : 80,000 P (40,000 P/ 1일)
                                <br />
                                숙박 : 160,000 P<br />
                                항공 : 이코노미
                                <br />
                                열차 : 일반
                                <br />
                                버스 : 우등
                              </div>
                            </div>
                          }
                          open={showTooltip}
                          onOpen={() => setShowTooltip(true)}
                          onClose={() => setShowTooltip(false)}
                        >
                          <IconButton
                            onClick={() => setShowTooltip(!showTooltip)}
                            className="btn-icon-only"
                            size="small"
                            aria-label="설명"
                          >
                            <HelpIcon
                              fontSize="small"
                              className="bp-icon xsmall"
                            />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                  {/* [S]link-block */}
                  <Link to="" className="link-block">
                    <div className="title-area inner-sides">
                      {/* 240819 modify */}
                      <div className="txt">
                        울산 5공장 생산 로봇 설치점검 방문
                      </div>
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
                            <Box className="pin">아산공장23</Box>
                          </div>
                        </Box>
                      </ListItem>
                    </List>
                    <Box className="neutral-box">
                      <p>복귀일 교통편을 확인해주세요.</p>
                      1일차 일비 <strong>40,000원</strong>가 지급되었습니다.
                      <br />
                      무료 취소 가능한 상품이 있어요
                    </Box>
                    {/* [S]transportation-schedule */}
                    <Box className="transportation-schedule">
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
                        <dl>
                          <dt>타는곳번호</dt>
                          <dd>15분전표시</dd>
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
                  </Link>
                  {/* [E]link-block */}
                  {/* modify: link, button 분리 */}
                  {/* [E]transportation-schedule */}
                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        size="medium"
                        className="btn-medium"
                      >
                        출장 종료하기
                      </Button>
                    </Box>
                  </Box>
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
                    <ListItem>
                      <Box className="item type-user">
                        <PersonIcon className="bp-icon small" />
                        <div className="user-info-row">
                          <div className="user-name">최현대 과장(1341341)</div>
                          <div className="user-team">
                            라이프디자인팀 (TBCM-1)
                          </div>
                        </div>
                      </Box>
                    </ListItem>
                  </List>
                  {/* [S]list-link-box */}
                  <List className="ranks-group">
                    <ListItem className="item">
                      <div className="inner-sides">
                        <Avatar
                          sizes="small"
                          className="bp-avatar size-small color-twotone color-info"
                          aria-label="추천"
                        >
                          <Box>추천</Box>
                        </Avatar>
                        <dl>
                          <dt>
                            <Box className="txt">
                              메리어트관 제주신화월드 호텔앤리조트
                            </Box>
                            {/* 240819 modify */}
                            <Chip
                              label="예약완료"
                              size="small"
                              className="bp-chip color-blue"
                            />
                          </dt>
                          <dd className="bp-ellipsis">
                            스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                            업그레이드
                          </dd>
                        </dl>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </ListItem>
                    {/* 240819 modify */}
                    {/* <ListItem className="item">
                        <div className="inner-sides">
                          <Avatar
                            sizes="small"
                            className="bp-avatar size-small color-twotone color-purple"
                            aria-label="제휴"
                          >
                            <Box>제휴</Box>
                          </Avatar>
                          <dl>
                            <dt>
                              <Box className="txt">신라스테이 울산</Box>
                            </dt>
                            <dd className="bp-ellipsis">
                              스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                              업그레이드
                            </dd>
                          </dl>
                          <Box className="right-area">
                            <ChevronRight className="bp-icon" />
                          </Box>
                        </div>
                      </ListItem> */}
                    <ListItem className="item">
                      <div className="inner-sides">
                        <Avatar
                          sizes="small"
                          className="bp-avatar size-small color-twotone color-transparent"
                          aria-label="즐겨찾기"
                        >
                          <StarRateRoundedIcon
                            fontSize="medium"
                            color="warning"
                          />
                        </Avatar>
                        <dl>
                          <dt>
                            <Box className="logo-img">
                              <img src="/assets/images/logo-ktx.svg" />
                            </Box>
                          </dt>
                          <dd className="bp-ellipsis">
                            서울역-울산역 K0850 열차
                          </dd>
                        </dl>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </ListItem>
                  </List>
                  {/* [E]list-link-box */}
                </CardContent>
              </Card>
            </div>
            {/* [E]240819 modify */}
          </div>
          <div className="ui-box">
            <DirectlyCard />
          </div>
          <div className="ui-box">
            <Card>
              <CardContent>
                <List className="list-link-box">
                  {/* [S]loop */}
                  <ListItem className="item">
                    <Link to="" className="link-block">
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">출장비 지급규정 안내</div>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Link>
                  </ListItem>
                  {/* [E]loop */}
                  <ListItem className="item">
                    <Link to="" className="link-block">
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">FAQ</div>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link to="" className="link-block">
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">1:1문의하기</div>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Link>
                  </ListItem>
                  {/* <ListItem className="item">
                    <Link to="" className="link-block">
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">카카오톡으로 문의하기</div>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Link>
                  </ListItem> */}
                  <ListItem className="item">
                    <Button
                      href=""
                      className="link-block"
                      onClick={toggleDrawer("listDrawer1", true)}
                    >
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">비상상황 신고하기</div>
                          <Avatar
                            className="bp-avatar size-xsmall color-twotone color-error"
                            aria-label="알림"
                          >
                            <PriorityHighRoundedIcon className="bp-icon xsmall" />
                          </Avatar>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Button>
                    {/* [S]SwipeableDrawer 비상신고하기 : listDrawer1 */}
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
                            <Typography variant="h2">비상신고하기</Typography>
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
                                // defaultValue="radioCard-01"
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
                                  label="교통사고가 발생했습니다"
                                />
                                <FormControlLabel
                                  className={`btn-form-type ${
                                    RadioValueCard === "radioCard-02"
                                      ? "is-active"
                                      : ""
                                  }`}
                                  control={<Radio value="radioCard-02" />}
                                  label="천재지변으로 이동이 불가합니다"
                                />
                                <FormControlLabel
                                  className={`btn-form-type ${
                                    RadioValueCard === "radioCard-03"
                                      ? "is-active"
                                      : ""
                                  }`}
                                  control={<Radio value="radioCard-03" />}
                                  label="타 업무 중복"
                                />
                                <FormControlLabel
                                  className={`btn-form-type ${
                                    RadioValueCard === "radioCard-04"
                                      ? "is-active"
                                      : ""
                                  }`}
                                  control={<Radio value="radioCard-04" />}
                                  label="기타"
                                />
                              </RadioGroup>
                            </FormControl>
                          </div>
                          <Box className="btns-group">
                            <Box className="inner">
                              <Button variant="contained" size="large">
                                확인
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Paper>
                    </SwipeableDrawer>
                    {/* [E]SwipeableDrawer */}
                  </ListItem>

                  <ListItem className="item">
                    <Link to="" className="link-block">
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">출장메모</div>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Link>
                  </ListItem>
                  {/* Trip+ 사용자 가이드 메뉴 추가 241115 kjs */}
                  <ListItem className="item">
                    <Link to="" className="link-block">
                      <div className="inner-sides">
                        <Box className="left-area">
                          <div className="txt">Trip+ 사용자 가이드</div>
                        </Box>
                        <Box className="right-area">
                          <ChevronRight className="bp-icon" />
                        </Box>
                      </div>
                    </Link>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </div>
        </Paper>
        {/* floating button */}
        <FabMainFixed />
      </LayoutMain>
    </>
  );
};

export default MMA000000;
