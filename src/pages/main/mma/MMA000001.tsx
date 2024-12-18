import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  Paper,
  Tooltip,
} from "@mui/material";

import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Calendar, ChevronRight } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import ChipsGroup from "src/components/common/ChipsGroup";
import FabMainFixed from "src/components/common/FabMainFixed";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CardBann from "src/templates/banner/CardBann";
import NotiCard from "src/templates/card/NotiCard";
import LayoutMain from "src/templates/layout/LayoutMain";
import "swiper/css";

type Anchor = "top" | "left" | "bottom" | "right";

const MMA000001 = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(false);

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
                  <Button
                    variant="contained"
                    size="medium"
                    className="btn-radius0"
                  >
                    결제하기
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
                    결재요청자 <span className="txt-strong">조진웅</span>
                  </div>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="ui-box">
            <CardBann />
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
                      <div className="right-area"></div>
                    </div>

                    <div className="title-area inner-sides">
                      {/* 240819 modify */}
                      <div className="txt">출장비 999,999원 회수 요청</div>
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
                      <div className="right-area"></div>
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
                        <span>
                          <img src="/assets/images/logo-ktxsancheon.svg" />
                        </span>
                        <span>0031</span>
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
                    <Box className="neutral-box">
                      복귀일 교통편을 확인해주세요.
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
        </Paper>
        {/* floating button */}
        <FabMainFixed />
      </LayoutMain>
    </>
  );
};

export default MMA000001;
