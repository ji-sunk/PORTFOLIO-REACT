import {
  Box,
  Button,
  Card,
  CardContent,
  Icon,
  IconButton,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import { GridCloseIcon } from "@mui/x-data-grid";
import {
  Bank,
  BarChartSquare02,
  Car01,
  ChevronRight,
  ClockSnooze,
  CreditCardRefresh,
  CreditCardSearch,
  FileCheck02,
  FilePlus02,
  FileX03,
  Heart,
  Box as IconBox,
  MarkerPin01,
  MessageCheckSquare,
  MessageDotsCircle,
  ReceiptCheck,
  Star01,
  Ticket02,
  UserCircle,
} from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMY000000 = () => {
  return (
    <>
      <Head>
        <title>마이페이지</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , mypage-wrap */}
        {/* [S] 전체적으로 문구수정 240911 kjs */}
        <Paper className="ui-paper mypage-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            <div className="allmenu-wrap">
              {/* [S]user profile */}
              <div className="item-field">
                <div className="inner-sides">
                  <dl className="item-user-info">
                    {/* <dt className="photo">
                      <Avatar
                        alt="최현대"
                        src="/assets/images/tmp-profile2.png"
                        className="user-avatar"
                      />
                    </dt> */}
                    <dd>
                      <div className="user-info-row">
                        <div className="user-name">최현대 과장 (1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                    </dd>
                  </dl>
                  <div className="right-area">
                    <IconButton>
                      <ChevronRight className="bp-icon" />
                    </IconButton>
                  </div>
                </div>
              </div>
              {/* [E]user profile */}

              <div className="ui-box">
                <div className="point-payment">
                  <div className="detail-usable">
                    <div className="item type-dp">
                      <div className="title">일비포인트</div>
                      <Box className="hands-area">
                        <span>128,000</span>
                        <span className="currency">P</span>
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
                <Card className="card-wrap card-bann type-warn">
                  <CardContent className="card-cont">
                    <div className="inner-sides">
                      <div className="left-area">
                        <div className="txt">주의하세요!</div>
                        <dl>
                          <dt>주의! 지진이 발생한 지역을 출장중이에요.</dt>
                          <dd>5.15 00:59 울산시 60Km 지역 규모 4.0 지진발생</dd>
                        </dl>
                      </div>
                      <div className="right-area">
                        <IconButton
                          className="btn-icon-only"
                          size="small"
                          aria-label="닫기"
                        >
                          <GridCloseIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* [S]menu-list / depth-link 클래스 삭제 메뉴명 변경 추가 241017 kjs */}
              <div className="menu-list">
                <List className="depth1">
                  {/* item is-new 업데이트 */}
                  <ListItem className="item is-new">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <IconBox className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">내 결재함</Box>
                    </Link>
                    {/* depth2 type-half : depth2메뉴링크넓이 */}
                    {/* <List className="depth2 type-half">
                      <ListItem className="item">
                        <Link className="item-menu" to="#">
                          <Box className="txt">개인결재</Box>
                        </Link>
                      </ListItem>
                      <ListItem className="item">
                        <Link className="item-menu" to="#">
                          <Box className="txt">부서결재</Box>
                        </Link>
                      </ListItem>
                    </List> */}
                  </ListItem>

                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <FilePlus02 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">
                        출장계획서
                        <br />
                        목록
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <FileCheck02 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">
                        출장정산서
                        <br />
                        목록
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <CreditCardSearch className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">예약내역</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <FileX03 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">취소내역</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <ClockSnooze className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">임시보관함</Box>
                    </Link>
                  </ListItem>
                </List>
              </div>
              {/* [E]menu-list / depth-link 클래스 삭제 메뉴명 변경 추가 241017 kjs */}
              {/* [S]menu-list / divider-line 클래스 추가 241017 kjs */}
              <div className="menu-list divider-line">
                <List className="item depth1">
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <UserCircle className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">개인정보 수정</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item is-new">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <CreditCardRefresh className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">
                        출장비
                        <br /> 회수내역
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <ReceiptCheck className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">영수증 관리</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <Bank className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">내 계좌 관리</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <Car01 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">내 차 관리</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <Ticket02 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">하이패스 관리</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <BarChartSquare02 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">마이데이터</Box>
                    </Link>
                  </ListItem>
                </List>
              </div>
              {/* [E]menu-list / divider-line 클래스 추가 241017 kjs */}
              {/* [S]menu-list / divider-line 클래스 추가 footer-link 클래스 삭제 241017 kjs */}
              <div className="menu-list divider-line">
                <List className="depth1">
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <MessageDotsCircle className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">1:1 문의하기</Box>
                      {/* 문구수정 240911 kjs */}
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <Heart className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">나의 관심상품</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <Star01 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">나의 평점/리뷰</Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <MarkerPin01 className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">
                        출장지
                        <br /> 즐겨찾기
                      </Box>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="item-menu" to="#">
                      <Icon>
                        <MessageCheckSquare className="bp-icon medium" />
                      </Icon>
                      <Box className="txt">출장메모</Box>
                    </Link>
                  </ListItem>
                </List>
                {/* [S] 1:1문의 전화번호 영역 추가 240911 kjs */}
                <div className="ui-box">
                  <div className="direct-link-list type-col inum-area">
                    <ul className="MuiListItem-root">
                      <li>
                        <div className="inner-flex">
                          <div className="left-area">
                            <div className="txt">국내서비스</div>
                          </div>
                          <div className="right-area">
                            <div className="num">1670-5136</div>
                            <div className="subtxt">
                              09:00 ~ 18:00 (주말, 공휴일 제외)
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="inner-flex">
                          <div className="left-area">
                            <div className="txt">국내항공</div>
                          </div>
                          <div className="right-area">
                            <div className="num">1670-5136</div>
                            <div className="subtxt">
                              09:00 ~ 18:00 (주말, 공휴일 제외)
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* [E] 1:1문의 전화번호 영역 추가 240911 kjs */}
              </div>
              {/* [E]menu-list / divider-line 클래스 추가 footer-link 클래스 삭제 241017 kjs */}
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper mypage-wrap */}
        <Box className="txt-btns-group al-left logout">
          <Button size="medium">로그아웃</Button>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMY000000;
