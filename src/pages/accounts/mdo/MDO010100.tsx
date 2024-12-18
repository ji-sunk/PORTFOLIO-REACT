import { ChevronRight, PolylineOutlined } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";
import CancelIcon from "@mui/icons-material/Cancel";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Icon,
  IconButton,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MDO010100 = () => {
  const [filteredLocations, setFilteredLocations] = useState("");
  const clearSearch = () => {
    setFilteredLocations("");
  };

  // 버튼 file
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);

  //const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileImages, setFileImages] = useState([
    { src: "../../../../assets/images/no-img.svg", alt: "", isDefault: true },
  ]);

  const handleButtonClick1 = () => {
    fileInputRef1.current.click();
  };

  const handleButtonClick2 = () => {
    fileInputRef2.current.click();
  };

  const handleButtonClick3 = () => {
    fileInputRef3.current.click();
  };

  const handleFileChange1 = (event) => {
    //
  };

  const handleFileChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      /* 파일 경로
     const fileUrl = URL.createObjectURL(file);
     setFileUrl(fileUrl);
     */
      setFileName(file.name);
    }
  };

  const handleFileChange3 = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const newImages = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e) => {
          newImages.push({ src: e.target.result, isDefault: false });
          if (newImages.length === files.length) {
            setFileImages(newImages); // 기본 이미지를 초기화하고 새로운 이미지를 추가
          }
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const handleImageDelete = (index) => {
    setFileImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  return (
    <>
      <Head>
        <title>상세 | 정산서,결재함</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group view-plan : 정보확인,상세내역 */}
            <div className="fields-group view-plan">
              {/* ui-box process-area 기존 클래스와 영역 삭제 240910 kjs */}
              <div className="item-field ui-box">
                <div className="inner-sides">
                  <div className="left-area">
                    <div className="chips-group">
                      <Chip
                        label="작성문서"
                        size="medium"
                        variant="outlined"
                        className="bp-chip"
                        color="primary"
                      />
                      <Chip
                        label="결재요청"
                        size="medium"
                        variant="outlined"
                        className="bp-chip"
                        color="primary"
                      />
                      <Chip
                        label="회수"
                        size="medium"
                        className="bp-chip"
                        color="warning"
                      />
                    </div>
                  </div>
                  <div className="right-area">
                    <div className="txt-data-desc">
                      요청일 2024.05.10 12:30:24
                    </div>
                  </div>
                </div>
                <div className="inner-start">
                  <div className="chips-group">
                    <Chip
                      label="승인"
                      size="medium"
                      className="bp-chip"
                      color="secondary"
                    />
                  </div>
                  <div className="item-date">2024.05.10 12:30:24</div>
                </div>
                <div className="inner-sides">
                  <div className="left=area">
                    <div className="chips-group">
                      <Chip
                        label="결재 완료"
                        size="small"
                        color="info"
                        className="bp-chip color-twotone color-info"
                      />
                      <Chip
                        label="승인"
                        size="medium"
                        className="bp-chip"
                        color="secondary"
                      />
                      <Chip
                        label="반려"
                        size="medium"
                        className="bp-chip"
                        color="error"
                      />
                    </div>
                  </div>
                  <div className="right-area">
                    <div className="txt-data-desc">
                      결재일 2024.05.10 12:30:24
                    </div>
                  </div>
                </div>
              </div>

              {/* ui-box bzt-info-area */}
              {/* [S] ui-box 클래스와 item-field ui-box클래스 동일한 구조로 변경(기능을 위한 구조 변경) - 와이드 섹션 라인을 위한 구조 변경 kjs 240910 */}
              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  출장정보
                </Typography>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  문서번호
                </Typography>
                <Box className="txt-data">HD12341123</Box>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  출장자
                </Typography>
                <div className="txt-data">
                  <div className="item-user-info">
                    <Box className="user-name">최현대 과장(1341341)</Box>
                    <Box className="user-team">라이프디자인팀 (TBCM-1)</Box>
                  </div>
                </div>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  출장목적
                </Typography>
                <Box className="txt-data">일반출장</Box>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  파견유형
                </Typography>
                <Box className="txt-data">숙소제공</Box>
              </div>
              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910  kjs */}
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  제목
                </Typography>
                <Box className="txt-data">울산 3공장 생산 프로세스 방문</Box>
              </div>
              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910  kjs */}
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  내용
                </Typography>
                <Box className="txt-data">
                  3공장 장착 프로세스 점검 방문 3공장 차체 무빙파트조립
                </Box>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  대상자
                </Typography>
                <div className="txt-data">
                  <div className="item-user-info">
                    <Box className="user-name">최현대 과장(1341341)</Box>
                    <Box className="user-team">라이프디자인팀 (TBCM-1)</Box>
                  </div>
                </div>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  출장기간
                </Typography>
                <Box className="txt-data type-calendar">
                  <Box className="txt-period">2024.08.08 ~ 2024.08.10</Box>
                  <Box className="txt-term">(2박3일)</Box>
                </Box>
              </div>
              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910  kjs */}

              {/* ui-box reservation-area 이전 클래스 */}
              {/* [S] ui-box 클래스와 item-field ui-box클래스 동일한 구조로 변경(기능을 위한 구조 변경) - 와이드 섹션 라인을 위한 구조 변경 kjs 240910 */}
              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  예약정보
                </Typography>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  숙박
                </Typography>

                <div className="inner-sides bp-brline">
                  <div className="left-area">
                    <Box className="txt-data-desc">예약 정보 없음</Box>
                  </div>
                  <div className="right-area">
                    <Link to="#" className="btn-xsamll">
                      <span className="txt">예약하기</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  숙소
                </Typography>
                {/* <Box className="txt-data-desc">예약 정보 없음</Box> */}
                <dl className="txt-data">
                  <dt>신라스테이울산</dt>
                  <dd className="txt-data type-calendar txt-data-desc">
                    <Box className="txt-period">2024.08.08 ~ 2024.08.10</Box>
                    <Box className="txt-term">(2박3일)</Box>
                  </dd>
                  <dd className="txt-data-desc size-small">
                    스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                    업그레이드
                  </dd>
                </dl>
              </div>
              <div className="section-line"></div>

              {/* ui-box trans-area 이전 클래스 */}
              {/* [S] ui-box 클래스와 item-field ui-box클래스 동일한 구조로 변경(기능을 위한 구조 변경) - 와이드 섹션 라인을 위한 구조 변경 kjs 240910 */}
              <div className="ui-box item-field">
                <div className="inner-sides">
                  <Box className="left-area">
                    <Typography variant="h3" className="bp-title">
                      경로설정
                    </Typography>
                  </Box>
                  <div className="right-area">
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={
                        <MyLocationIcon
                          fontSize="small"
                          className="bp-icon xsmall"
                        />
                      }
                    >
                      경로 수정
                    </Button>
                  </div>
                </div>
              </div>

              {/* ui-box trans-area */}
              <div className="ui-box trans-area">
                <div className="item-field">
                  <ol className="map-route-list">
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">1</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="chip-area">
                        <div className="chips-group">
                          <Chip
                            label="대중교통"
                            size="medium"
                            className="bp-chip color-info"
                          />
                        </div>
                        <Box className="txt">
                          <div className="item-transportation"></div>
                        </Box>
                      </Box>
                    </li>
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">2</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="chip-area">
                        <div className="chips-group">
                          <Chip
                            label="자차"
                            size="medium"
                            className="bp-chip color-blue"
                          />
                        </div>
                        <Box className="txt">123저1077</Box>
                      </Box>
                    </li>
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">3</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="chip-area">
                        <div className="chips-group">
                          <Chip
                            label="법인차"
                            size="medium"
                            color="success"
                            className="bp-chip color-success"
                          />
                        </div>
                      </Box>
                    </li>
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">4</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="chip-area">
                        <div className="chips-group">
                          <Chip
                            label="예약 정보 없음"
                            size="medium"
                            variant="outlined"
                            className="bp-chip"
                            color="default"
                          />
                        </div>
                        <Link to="#" className="btn-xsamll">
                          <span className="txt">예약하기</span>
                          {/* <span className="end-icon">
                            <ChevronRight
                              fontSize="small"
                              className="bp-icon xsmall"
                            />
                          </span> */}
                        </Link>
                      </Box>
                    </li>
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">5</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="chip-area">
                        <div className="chips-group">
                          <Chip
                            label="자차"
                            size="medium"
                            className="bp-chip color-blue"
                          />
                          <Chip
                            label="동승자"
                            color="warning"
                            size="medium"
                            className="bp-chip color-warning"
                          />
                        </div>
                        <Box className="txt">123저1077</Box>
                        <Link to="#" className="btn-xsamll">
                          <span className="txt">동승자 보험 가입</span>
                          <span className="end-icon">
                            <ChevronRight
                              fontSize="small"
                              className="bp-icon xsmall"
                            />
                          </span>
                        </Link>
                      </Box>
                    </li>
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">6</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <Box className="chip-area">
                        <div className="chips-group">
                          <Chip
                            label="법인차"
                            size="medium"
                            color="success"
                            className="bp-chip color-success"
                          />
                        </div>
                      </Box>
                    </li>
                  </ol>
                </div>
                <div className="item-field">
                  <div className="neutral-box info-distance">
                    <dl className="inner-sides footer-total">
                      <dt className="left-area">
                        <div className="txt">총 이동거리</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">78Km</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">자기차량 이동거리</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">32Km</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">법인차량 이동거리</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">46Km</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides fee-area">
                      <dt className="left-area">
                        <div className="txt">예상 통행료</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">9,800원</Box>
                      </dd>
                    </dl>
                    <div className="desc-box">
                      <div className="txt-indent">
                        자기 차량(동승자 포함)을 선택하신 구간은 교통비가
                        지급되지 않습니다.
                      </div>
                      <div className="txt-indent">
                        자기 차량 이용 시 유류비, 통행료가 출장 종료 시 현금으로
                        지급됩니다.
                      </div>
                    </div>
                  </div>
                </div>
                {/* modify 버튼 디자인 변경 240909 kjs */}
                <div className="btn-ctr-round">
                  <Button
                    size="small"
                    className="btn-basic MuiButton-outlined"
                    startIcon={<CachedIcon fontSize="small" className="" />}
                  >
                    예약내역 불러오기
                  </Button>
                </div>
              </div>

              {/* 타이틀 추가 수정 241028 kjs */}
              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  부가정보
                </Typography>
              </div>
              {/* ui-box budget-area */}
              <div className="ui-box budget-area">
                <Typography variant="h4" className="bp-title">
                  예산사용부서
                </Typography>
              </div>
              <div className="item-field ui-box">
                <div className="left-area">
                  <dl>
                    <dt className="txt-data">TBCM-1</dt>
                    <dd className="txt-data">(잔액 : 10,000,000원)</dd>
                  </dl>
                </div>
              </div>

              {/* [S]지급방식, 위반의심 아이콘 추가 수정 241028 kjs */}
              <div className="item-field ui-box">
                <div className="inner-sides">
                  <Box className="left-area">
                    <Typography variant="h4" className="bp-title">
                      지급방식
                    </Typography>
                  </Box>
                </div>
                <div className="inner-sides">
                  <div className="left-area">
                    <dl>
                      <dt className="txt-data">비플머니</dt>
                    </dl>
                  </div>
                  <div className="right-area inner-sides pay-method">
                    <div className="date">2024.05.02 HH:MM</div>
                    <div className="chips-group">
                      <Chip
                        label="지급승인"
                        size="small"
                        color="success"
                        className="bp-chip color-twotone color-success"
                      />
                      <Chip
                        label="지급거절"
                        size="small"
                        color="error"
                        className="bp-chip color-twotone color-error"
                      />
                    </div>
                  </div>
                </div>
                <Box className="neutral-box mg-t8">
                  <div className="color-error">거절사유 노출 영역입니다.</div>
                </Box>
              </div>

              <div className="item-field ui-box">
                <Link to="#">
                  규정집 보기
                  <ChevronRight fontSize="small" className="bp-icon small" />
                </Link>
              </div>

              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910 kjs */}

              {/* [S]fields-group */}
              <div className="fields-group">
                <div className="ui-box type-line">
                  <Typography variant="h3" className="bp-title">
                    사용내역
                  </Typography>
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="통행료"
                              size="small"
                              color="info"
                              variant="outlined"
                              className="bp-chip color-twotone color-purple"
                            />
                            {/* flex-center 클래스 추가 241028 kjs */}
                            <div className="item-date flex-center">
                              이용일시 04.25 15:20
                            </div>
                          </div>
                        </div>
                        <div className="right-area icon-box">
                          <Icon className="icon-error">
                            <img
                              src="/assets/images/icons/icon-error.svg"
                              alt="에러"
                            />
                          </Icon>
                        </div>
                      </div>

                      <div className="title-area inner-sides">
                        {/* mg-t8 클래스 추가 241028 kjs */}
                        <div className="flex-row mg-t8">
                          {/* <div className="item-revert">
                          <PolylineOutlined className="bp-icon small" />
                        </div> */}
                          <div className="txt">양주 &rarr; 천안</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <span className="txt">회수금액</span>
                              <Box
                                component="span"
                                className="point-large color-error"
                              >
                                -60,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 60,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      {/* <div className="list-schedule">
                      <Box className="txt-period">2024.04.08 ~ 2024.04.12</Box>
                      <Box className="txt-term">(4박5일)</Box>
                    </div> */}
                      {/* [E]link-block */}
                    </Link>
                  </div>
                </div>
                {/* [E]지급방식, 위반의심 아이콘 추가 수정 241028 kjs */}
                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="결재진행"
                              size="small"
                              color="success"
                              className="bp-chip"
                            />
                            <div className="item-date">요청일 2024.04.01</div>
                          </div>
                        </div>
                      </div>
                      <div className="title-area inner-sides">
                        <div className="txt">울산 1공장 방문건</div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <Box component="span" className="point-large">
                                출장비 지원
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 53,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      {/* <div className="list-schedule">
                        <Box className="txt-period">
                          2024.04.08 ~ 2024.04.12
                        </Box>
                        <Box className="txt-term">(4박5일)</Box>
                      </div> */}
                      {/* [E]link-block */}
                    </Link>
                  </div>
                </div>

                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="교통비"
                              size="small"
                              color="info"
                              variant="outlined"
                              className="bp-chip color-twotone color-info"
                            />
                            <div className="item-date">
                              이용일시 2024.04.29 15:20
                            </div>
                          </div>
                        </div>
                        {/* <div className="right-area">
                          <div className="item-date">
                            이용일시 2024.04.29 15:20
                          </div>
                        </div> */}
                      </div>
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          <div className="item-revert">
                            <PolylineOutlined className="bp-icon small" />
                          </div>
                          <div className="txt">KTX-산천 003</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <span className="txt">청구금액</span>
                              <Box component="span" className="point-large">
                                295,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 53,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      {/* <div className="list-schedule">
                        <Box className="txt-period">
                          2024.04.08 ~ 2024.04.12
                        </Box>
                        <Box className="txt-term">(4박5일)</Box>
                      </div> */}
                      {/* [E]link-block */}
                    </Link>
                  </div>
                </div>
                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="교통비"
                              size="small"
                              color="info"
                              variant="outlined"
                              className="bp-chip color-twotone color-info"
                            />
                            <div className="item-date">
                              이용일시 2024.04.29 15:20
                            </div>
                          </div>
                        </div>
                        {/* <div className="right-area">
                          <div className="item-date">
                            이용일시 2024.04.29 15:20
                          </div>
                        </div> */}
                      </div>
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          {/* <div className="item-revert">
                            <PolylineOutlined className="bp-icon small" />
                          </div> */}
                          <div className="txt">KTX-산천 003</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <span className="txt">회수금액</span>
                              <Box
                                component="span"
                                className="point-large color-error"
                              >
                                -295,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 53,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      {/* <div className="list-schedule">
                        <Box className="txt-period">
                          2024.04.08 ~ 2024.04.12
                        </Box>
                        <Box className="txt-term">(4박5일)</Box>
                      </div> */}
                      {/* [E]link-block */}
                    </Link>
                  </div>
                </div>

                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="반려"
                              size="small"
                              color="error"
                              className="bp-chip"
                            />
                            <div className="item-date">반려일 2024.04.01</div>
                          </div>
                        </div>
                        {/* <div className="right-area">
                          <div className="item-date">반려일 2024.04.01</div>
                        </div> */}
                      </div>
                      <div className="title-area inner-sides">
                        <div className="txt">울산 1공장 방문건</div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              {/* <span>회수금액</span> */}
                              <Box
                                component="span"
                                className="point-large color-blue"
                              >
                                295,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 53,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      {/* <div className="list-schedule">
                        <Box className="txt-period">
                          2024.04.08 ~ 2024.04.12
                        </Box>
                        <Box className="txt-term">(4박5일)</Box>
                      </div> */}
                      {/* [E]link-block */}
                    </Link>
                  </div>
                </div>
                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="title-area inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="일비"
                              size="small"
                              color="error"
                              variant="outlined"
                              className="bp-chip color-twotone color-error"
                            />
                          </div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <Box
                                component="span"
                                className="point-large color-error"
                              >
                                -295,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                          </div>
                        </div>
                      </div>
                      <div className="item-field">
                        <div className="neutral-box">
                          <Box className="txt-desc">
                            일비 지급 규정 금액 초과 사용분을 회수합니다.
                          </Box>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="유류비"
                              size="small"
                              color="warning"
                              className="bp-chip color-twotone color-warning"
                            />
                          </div>
                        </div>
                        <div className="right-area">
                          <div className="item-date">123저 1234</div>
                        </div>
                      </div>
                      <div className="title-area inner-sides">
                        <div className="txt">나의 첫차</div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <span className="txt">유류비</span>
                              <Box component="span" className="point-large">
                                295,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                          </div>
                        </div>
                      </div>
                      <div className="item-field">
                        <div className="neutral-box info-distance">
                          <dl className="inner-sides footer-total">
                            <dt className="left-area">
                              <div className="txt">총 이동거리</div>
                            </dt>
                            <dd className="right-area">
                              <Box className="txt">78Km</Box>
                            </dd>
                          </dl>
                          <dl className="inner-sides">
                            <dt className="left-area">
                              <div className="txt">자기차량 이동거리</div>
                            </dt>
                            <dd className="right-area">
                              <Box className="txt">32Km</Box>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>

                {/* [S] 추가 240912 kjs */}
                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="취소수수료"
                              size="small"
                              color="error"
                              variant="outlined"
                              className="bp-chip color-twotone color-error"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          <div className="txt">롯데호텔 울산</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <span className="txt">회수금액</span>
                              <Box
                                component="span"
                                className="point-large color-error"
                              >
                                -295,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 53,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                      {/* [E]link-block */}
                    </Link>
                  </div>
                </div>
                {/* total-neutral-600클래스 추가 + 기 지급일비 추가 241031 kjs */}
                <div className="ui-box type-line total-neutral-600">
                  <div className="item-card">
                    <div className="title-area inner-sides">
                      <div className="flex-row">
                        <div className="txt">기 지급일비</div>
                      </div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <Box component="span" className="point-large">
                              10,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-card">
                    <div className="title-area inner-sides">
                      <div className="flex-row">
                        <div className="txt">총 결제금액</div>
                      </div>
                      <div className="right-area type-amount">
                        <div className="number-area">
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
                </div>
                <div className="ui-box item-field">
                  <div className="neutral-box info-distance total-wrap">
                    <dl className="inner-sides footer-total">
                      <dt className="left-area">
                        <div className="txt">출장포인트 결제</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">804,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">숙박비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">교통비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">취소수수료</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">20,000원</Box>
                      </dd>
                    </dl>
                    {/* 트래포트 예약취소 수수료 사유출력 영역 추가 241120 kjs */}
                    <Box className="color-error text-align-rgt">
                      영수증 등록시 입력한 취소사유가 노출 됩니다. 30자
                    </Box>
                    <div className="brt-line"></div>
                    <dl className="inner-sides footer-total">
                      <dt className="left-area">
                        <div className="txt">개인결제</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">804,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">숙박비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">교통비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">통행료</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">20,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">자차본인부담금</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">386,000원</Box>
                      </dd>
                    </dl>
                  </div>
                </div>

                {/* [S]총 신청금액 금액 별 - + 기본 금액일 때 컬러에 맞춰서 클래스명 변경 적용 240912 kjs */}
                <div className="ui-box item-field">
                  <div className="title-area inner-sides">
                    <div className="flex-row">
                      <div className="txt">총 신청금액</div>
                    </div>
                    <div className="right-area type-amount">
                      <div className="number-area">
                        <Box className="flex-row">
                          <Box
                            component="span"
                            className="point-large color-blue"
                          >
                            767,850
                            <span className="txt-currency">원</span>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="title-area inner-sides">
                    <div className="flex-row">
                      <div className="txt">총 신청금액</div>
                    </div>
                    <div className="right-area type-amount">
                      <div className="number-area">
                        <Box className="flex-row">
                          <Box component="span" className="point-large">
                            0<span className="txt-currency">원</span>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </div>
                  <div className="title-area inner-sides">
                    <div className="flex-row">
                      <div className="txt">총 신청금액</div>
                    </div>
                    <div className="right-area type-amount">
                      <div className="number-area">
                        <Box className="flex-row">
                          <Box
                            component="span"
                            className="point-large text-error"
                          >
                            -7,850
                            <span className="txt-currency">원</span>
                          </Box>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
                {/* [E]총 신청금액 금액 별 - + 기본 금액일 때 컬러에 맞춰서 클래스명 변경 적용 240912 kjs */}

                <div className="ui-box item-field">
                  <div className="neutral-box info-distance total-wrap">
                    <dl className="inner-sides footer-total">
                      <dt className="left-area">
                        <div className="txt">신청금액</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">124,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">미사용일비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">숙박비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">교통비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">직원숙소지원금</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">20,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">유류비</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">60,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">통행료</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">20,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">자차본인부담금</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">20,000원</Box>
                      </dd>
                    </dl>

                    <div className="brt-line"></div>

                    <dl className="inner-sides footer-total">
                      <dt className="left-area">
                        <div className="txt">회수금액</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt text-error">-804,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">일비(초과사용분)</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt text-error">-720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">숙박비(초과사용분)</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt text-error">-720,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt ">교통비(초과사용분)</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt text-error">-20,000원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">취소수수료(개인사유)</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt text-error">-386,000원</Box>
                      </dd>
                    </dl>
                    <div className="brt-line"></div>
                    <dl className="inner-sides footer-total">
                      <dt className="left-area">
                        <div className="txt">회수금액 발생 사유</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">개인사유</Box>
                      </dd>
                    </dl>
                    <div className="txt-box">
                      <p className="txt">
                        출장일정이 5일에서 3일로 변경되었습니다.
                      </p>
                      <p className="txt">
                        블라블라블라블라블라블라블라블라블라블라블라블라
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ui-box item-field">
                  <div className="bp-group-description description-bottom desc-dot">
                    <ul className="bp-list list-dotted">
                      <li className="txt-indent">
                        자기 차량(동승자 포함)을 선택하신 구간은 교통비가
                        지급되지 않습니다.
                      </li>
                      <li className="txt-indent">
                        자기 차량 이용 시 유류비, 통행료가 출장 종료 시 현금으로
                        지급됩니다.
                      </li>
                    </ul>
                  </div>
                </div>
                {/* [E] 추가 240912 kjs */}
              </div>

              {/* [E]fields-group */}
              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910  kjs */}

              <div className="item-field ui-box">
                <div className="left-area">
                  <Typography variant="h3" className="bp-title">
                    첨부문서
                  </Typography>
                </div>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  문서번호
                </Typography>
                <Box className="txt-data">HD12341123</Box>

                {/* [S]파일 첨부 */}
                <div className="bp-file file-form">
                  <div className="file-name">
                    <TextField
                      variant="filled"
                      size="small"
                      placeholder="파일명"
                      fullWidth
                      hiddenLabel
                      // value={fileName}
                      value="울산1공장기기정비점검출장_2차수정.pdf"
                      InputProps={{
                        readOnly: true,
                      }}
                      className="file-name"
                    />
                  </div>
                  <div className="file-btn">
                    <input
                      ref={fileInputRef2}
                      type="file"
                      onChange={handleFileChange2}
                      className="hidden"
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleButtonClick2}
                    >
                      파일 선택
                    </Button>
                  </div>
                </div>
                {/* [E]파일 첨부 */}
              </div>
              <div className="section-line"></div>

              {/* [S] 추가 240912 kjs */}
              <div className="item-field ui-box">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      증빙자료
                    </Typography>
                  </div>
                  {/* <div className="right-area">
                    <div className="file-btn">
                      <input
                        ref={fileInputRef2}
                        type="file"
                        onChange={handleFileChange2}
                        className="hidden"
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        className="btn-file hidden"
                        startIcon={<Paperclip fontSize="small" className="bp-icon small" />}
                      >
                        첨부하기
                      </Button>
                    </div>
                    <div className="file-btn">
                      <input
                        ref={fileInputRef2}
                        type="file"
                        onChange={handleFileChange2}
                        className="hidden"
                        style={{ display: "none" }}
                      />
                      <Button
                        variant="outlined"
                        size="small"
                        className="btn-file"
                        onClick={handleButtonClick2}
                        startIcon={<Paperclip fontSize="small" className="bp-icon small" />}
                      >
                        첨부하기
                      </Button>
                    </div>
                  </div> */}
                </div>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  사고사유
                </Typography>
                <Box className="txt-data">
                  하이패스 진입시 앞 차의 급 정차로 사고가 났습니다. 하이패스
                  진입시 앞 차의 급 정차로 사고가 났다구요.
                </Box>

                {/* [S]파일 첨부 */}
                <div className="bp-file file-form">
                  {/* 삭제 아이콘 발생 시 클래스 btn-del 추가 240913 kjs */}
                  <div className="file-name">
                    <TextField
                      variant="filled"
                      size="small"
                      placeholder="파일명"
                      fullWidth
                      hiddenLabel
                      // value={fileName}
                      value="동부화재실비영수증.png"
                      InputProps={{
                        readOnly: true,
                      }}
                      className="file-name"
                    />
                  </div>
                </div>
                <div className="bp-file file-form btn-del">
                  {/* 삭제 아이콘 발생 시 클래스 btn-del 추가 240913 kjs */}
                  <div className="file-name">
                    <TextField
                      variant="filled"
                      size="small"
                      placeholder="파일명"
                      fullWidth
                      hiddenLabel
                      // value={fileName}
                      value="동부화재실비영수증 첨부.png"
                      InputProps={{
                        readOnly: true,
                      }}
                      className="file-name"
                    />
                  </div>
                  <div className="file-btn">
                    <input
                      ref={fileInputRef2}
                      type="file"
                      onChange={handleFileChange2}
                      className="hidden"
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleButtonClick2}
                    >
                      파일 선택
                    </Button>
                  </div>
                </div>
                <div className="bp-file file-form">
                  <div className="file-name">
                    <TextField
                      variant="filled"
                      size="small"
                      placeholder="파일명"
                      fullWidth
                      hiddenLabel
                      // value={fileName}
                      value="출장중사고실비.pdf"
                      InputProps={{
                        readOnly: true,
                      }}
                      className="file-name"
                    />
                  </div>
                  <div className="file-btn">
                    <input
                      ref={fileInputRef2}
                      type="file"
                      onChange={handleFileChange2}
                      className="hidden"
                      style={{ display: "none" }}
                    />
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleButtonClick2}
                    >
                      파일 선택
                    </Button>
                  </div>
                  <div className="neutral-box">
                    자차본인부담금은 담당자 검토후 경비계좌로 입금됩니다.
                  </div>
                </div>
                {/* [E]파일 첨부 */}
              </div>
              <div className="section-line"></div>
              {/* [E] 추가 240912 kjs */}

              {/* modify: user-info-area */}
              <div className="item-field ui-box user-info-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      대리예약
                    </Typography>
                  </div>
                  <div className="right-area"></div>
                </div>
              </div>
              <div className="item-field ui-box pd-tb0">
                <div className="item-field user-list-area">
                  <div className="inner-sides">
                    <div className="left-area">
                      <dl className="item-user-info">
                        <dt className="photo">
                          <Avatar
                            alt="이현대"
                            src="/assets/images/tmp-profile.png"
                            className="user-avatar"
                          />
                        </dt>
                        <dd>
                          <div className="user-info-row">
                            <div className="user-name">
                              이현대 과장(1341341)
                            </div>
                          </div>
                          <div className="user-info-row">
                            <div className="user-team">
                              라이프디자인팀 (TBCM-1)
                            </div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="inner-sides">
                    <div className="left-area">
                      <dl className="item-user-info">
                        <dt className="photo">
                          <Avatar
                            alt="이현대"
                            src="/assets/images/tmp-profile.png"
                            className="user-avatar"
                          />
                        </dt>
                        <dd>
                          <div className="user-info-row">
                            <div className="user-name">
                              이현대 과장(1341341)
                            </div>
                          </div>
                          <div className="user-info-row">
                            <div className="user-team">
                              라이프디자인팀 (TBCM-1)
                            </div>
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>

              {/* modify: user-info-area */}
              <div className="item-field ui-box user-info-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      출장 동행인
                    </Typography>
                  </div>
                  {/* modify 240808 */}
                  <div className="right-area">
                    {/* <Button
                      variant="outlined"
                      size="small"
                      endIcon={
                        <GroupAddOutlinedIcon
                          fontSize="small"
                          className="bp-icon xsmall"
                        />
                      }
                    >
                      동행인 추가
                    </Button> */}
                  </div>
                </div>
              </div>

              <div className="item-field ui-box pd-tb0 user-list-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <dl className="item-user-info">
                      <dt className="photo">
                        <Avatar
                          alt="김현대"
                          // src="/assets/images/tmp-profile.png"
                          className="user-avatar"
                        />
                      </dt>
                      <dd>
                        <div className="user-info-row">
                          <div className="user-name">김현대 과장(1341341)</div>
                          {/* modify 240808 */}
                          <Chip
                            label="초대중"
                            size="medium"
                            variant="outlined"
                            className="bp-chip color-blue-lightest"
                          />
                        </div>
                        <div className="user-info-row">
                          <div className="user-team">
                            라이프디자인팀 (TBCM-1)
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                  {/* modify 240808 */}
                  <div className="right-area">
                    <IconButton
                      size="small"
                      className="btn-clear"
                      onClick={clearSearch}
                    >
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
                  </div>
                </div>
                <div className="inner-sides">
                  <div className="left-area">
                    <dl className="item-user-info">
                      <dt className="photo">
                        <Avatar
                          alt="이현대"
                          src="/assets/images/tmp-profile.png"
                          className="user-avatar"
                        />
                      </dt>
                      <dd>
                        <div className="user-info-row">
                          <div className="user-name">이현대 과장(1341341)</div>
                        </div>
                        <div className="user-info-row">
                          <div className="user-team">
                            라이프디자인팀 (TBCM-1)
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="inner-sides">
                  <div className="left-area">
                    <dl className="item-user-info">
                      <dt className="photo">
                        <Avatar
                          alt="최현대"
                          src="/assets/images/tmp-profile2.png"
                          className="user-avatar"
                        />
                      </dt>
                      <dd>
                        <div className="user-info-row">
                          <div className="user-name">최현대 과장(1341341)</div>
                        </div>
                        <div className="user-info-row">
                          <div className="user-team">
                            라이프디자인팀 (TBCM-1)
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            {/* [E]fields-group view-plan */}
            <Box className="txt-btns-group">
              <Button size="medium">수정</Button>
            </Box>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
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
              결재 요청
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MDO010100;
