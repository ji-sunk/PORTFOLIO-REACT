import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Chip,
  Button,
  Avatar,
  Card,
  CardContent,
  IconButton,
  Paper,
  Radio,
} from "@mui/material";
import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

const MPU010000 = () => {
  return (
    <>
      <Head>
        <title>알림함</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">

          {/* [S]map-route-wrap */}
          <div className="noti-area">
            <div className="light-box">
              <div className="horizontal-scrolling">
                <div className="list-chip-label">
                  <Chip
                    aria-selected="true"
                    label="전체"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="출장"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="예약/결제"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="결재"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="공지/안내"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                </div>
              </div>
            </div>
            {/* [S]list-noti : 알림 목록 */}
            <div className="list-noti">
              {/* [S]loop */}
              <div className="ui-box">
                <Card className="item-card">
                  <CardContent className="item">
                    <Link to="#" className="link-block noti">
                      <div className="item-top inner-sides">
                        <div className="left-area in-flex">
                          <Box>
                          <img
                            src="/assets/images/icons/icon_noti.svg"
                            alt="알림"
                            width={20}
                            tabIndex={1}
                          />
                          </Box>
                          <Box>
                            <Avatar
                              className="bp-avatar size-xsmall color-twotone color-error"
                              aria-label="경고"
                            >
                              <PriorityHighRoundedIcon className="bp-icon xsmall" />
                            </Avatar>
                          </Box>
                        </div>
                        <div className="title-area">
                          <Box className="txt bp-ellipsis">
                            주의하세요! 출장지 인근 지진발생 주의하세요! 출장지 인근 지진발생주의하세요! 출장지 인근 지진발생주의하세요! 출장지 인근 지진발생
                          </Box>
                        </div>
                      </div>
                      <Box className="txt-sub">
                        6월 28일 00시 59분 울산시 앞바다 동쪽 60Km 지역<br/>
                        규모 4.1 지진발생<br/>
                        피해발생 시 APP으로 비상신고바람
                      </Box>
                      <Box className="txt-date">
                        2024.05.30
                      </Box>
                    </Link>
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
                  </CardContent>
                </Card>
              </div>
              {/* [E]loop */}

              <div className="ui-box">
                <Card className="item-card">
                  <CardContent className="item">
                    <Link to="#" className="link-block noti">
                      <div className="item-top inner-sides">
                        <div className="left-area in-flex">
                          <Box>
                          <img
                            src="/assets/images/icons/icon_global.svg"
                            alt="글로벌"
                            width={20}
                            tabIndex={1}
                          />
                          </Box>
                        </div>
                        <div className="title-area">
                          <Box className="txt bp-ellipsis">
                            동승자 선택 안내
                          </Box>
                        </div>
                      </div>
                      <Box className="txt-sub">
                        $김현대$ $직책$님이 $출장제목$건의 동승자로 선택하셨습니다.
                      </Box>
                      <Box className="txt-date">
                        2024.05.30
                      </Box>
                    </Link>
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
                  </CardContent>
                </Card>
              </div>

              <div className="ui-box">
                <Card className="item-card">
                  <CardContent className="item">
                    <Link to="#" className="link-block noti">
                      <div className="inner-sides">{/* 새로운 알림(빨간점) 없을 때 item-top 클래스 삭제 */}
                        <div className="left-area in-flex">
                          <Box>
                          <img
                            src="/assets/images/icons/icon_reciept.svg"
                            alt="예약"
                            width={20}
                            tabIndex={1}
                          />
                          </Box>
                        </div>
                        <div className="title-area">
                          <Box className="txt bp-ellipsis">
                            숙박 예약 완료
                          </Box>
                        </div>
                      </div>
                      <Box className="txt-sub">
                        ‘울산5공장 점검 방문’ 출장의 숙박예약이 완료되었습니다.<br/>
                        2024.07.01~2024.07.02 (1박)
                      </Box>
                      <Box className="txt-date">
                        2024.03.29
                      </Box>
                    </Link>
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
                  </CardContent>
                </Card>
              </div>

              <div className="ui-box">
                <Card className="item-card">
                  <CardContent className="item">
                    <Link to="#" className="link-block noti">
                      <div className="inner-sides">{/* 새로운 알림(빨간점) 없을 때 item-top 클래스 삭제 */}
                        <div className="left-area in-flex">
                          <Box>
                          <img
                            src="/assets/images/icons/icon_payment.svg"
                            alt="결재"
                            width={20}
                            tabIndex={1}
                          />
                          </Box>
                        </div>
                        <div className="title-area">
                          <Box className="txt bp-ellipsis">
                            출장계획서 결재요청
                          </Box>
                        </div>
                      </div>
                      <Box className="txt-sub">
                        김현대(H287324)님의 출장계획<br/>
                        ‘울산5공장 생산 로봇 설치 점검건’이 결재요청되었습니다.
                      </Box>
                      <Box className="txt-date">
                        2024.03.20
                      </Box>
                    </Link>
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
                  </CardContent>
                </Card>
              </div>

              <div className="ui-box">
                <Card className="item-card">
                  <CardContent className="item">
                    <Link to="#" className="link-block noti">
                      <div className="inner-sides">{/* 새로운 알림(빨간점) 없을 때 item-top 클래스 삭제 */}
                        <div className="left-area in-flex">
                          <Box>
                          <img
                            src="/assets/images/icons/icon_payment.svg"
                            alt="결재"
                            width={20}
                            tabIndex={1}
                          />
                          </Box>
                        </div>
                        <div className="title-area">
                          <Box className="txt bp-ellipsis">
                            출장종료 안내
                          </Box>
                        </div>
                      </div>
                      <Box className="txt-sub">
                        ‘울산5공장 생산 로봇 설치 점검건’이 종료되었습니다. <br />
                        출장종료 확인해주세요.
                      </Box>
                      <Box className="txt-date">
                        2024.03.20
                      </Box>
                    </Link>
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
                  </CardContent>
                </Card>
              </div>
              {/* <Box className="txt-btns-group">
              </Box> */}
            </div>
            {/* [E]list-noti : 알림 목록 */}
          </div>
          {/* [E]map-route-wrap */}

        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
      </LayoutSub>
    </>
  );
};

export default MPU010000;
