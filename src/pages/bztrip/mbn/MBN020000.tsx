import { ChevronRight } from "@mui/icons-material";
import CachedIcon from "@mui/icons-material/Cached";
import CancelIcon from "@mui/icons-material/Cancel";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Plus from "@untitled-ui/icons-react/build/esm/Plus";
import { useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

const MBN020000 = () => {
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
        <title>출장계획서 정보확인 | 출장</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group view-plan : 정보확인,상세내역 */}
            <div className="fields-group view-plan">
              {/* ui-box process-area */}
              <div className="ui-box process-area">
                <div className="item-field">
                  <div className="inner-sides">
                    <div className="left=area">
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
                        label="결재대기"
                        size="medium"
                        className="bp-chip"
                        color="secondary"
                      />
                      {/* Chip add 241004 kjs */}
                      <Chip
                        label="동반신청"
                        size="medium"
                        className="bp-chip"
                        color="success"
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

                  {/* [S] 출장의견 추가 241002 kjs */}
                  {/* [S] 출장의견 Update dot 추가 241018 kjs */}
                  <Link to="#" className="cmnt-box inner-sides is-new">
                    <Box className="icon-cmd">
                      <img
                        src="/assets/images/icons/Icon-cmnt-navy.svg"
                        alt="출장 의견"
                      />
                    </Box>
                    <div className="txt pos-relative">
                      출장의견 <span>(3)</span>
                    </div>
                    <Box className="right-area">
                      <ChevronRight className="bp-icon" />
                    </Box>
                  </Link>
                  {/* [E] 출장의견 Update dot 추가 241018 kjs */}
                  {/* [E] 출장의견 추가 241002 kjs */}
                </div>
              </div>

              {/* ui-box bzt-info-area */}
              <div className="">
                <div className="ui-box item-field">
                  <Typography variant="h4" className="bp-title">
                    문서번호
                  </Typography>
                  <Box className="txt-data">HD12341123</Box>
                </div>
                <div className="ui-box item-field">
                  <Typography variant="h4" className="bp-title">
                    출장목적
                  </Typography>
                  <Box className="txt-data">일반출장</Box>
                </div>
                <div className="section-line"></div>
                <div className="ui-box item-field">
                  <Typography variant="h3" className="bp-title">
                    출장정보
                  </Typography>
                </div>
                <div className="ui-box item-field">
                  <Typography variant="h4" className="bp-title">
                    제목
                  </Typography>
                  <Box className="txt-data">울산 3공장 생산 프로세스 방문</Box>
                </div>
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
                    출장기간
                  </Typography>
                  <Box className="txt-data type-calendar">
                    <Box className="txt-period">2024.08.08 ~ 2024.08.10</Box>
                    <Box className="txt-term">(2박3일)</Box>
                  </Box>
                </div>
              </div>
              <div className="section-line"></div>

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
                  파견유형
                </Typography>
                <Box className="txt-data">숙소제공</Box>
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

              <div className="section-line"></div>
              {/* ui-box reservation-area */}
              {/* [S] ui-box 클래스와 item-field ui-box클래스 동일한 구조로 변경(기능을 위한 구조 변경) - 와이드 섹션 라인을 위한 구조 변경 kjs 240910 */}

              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  예약정보
                </Typography>
              </div>

              <div className="item-field ui-box">
                <div className="inner-sides">
                  <div className="left-area">
                    <Box className="bp-title-gray">숙박</Box>
                  </div>
                  <div className="right-area">
                    <Link to="#" className="btn-xsamll">
                      <span className="txt">예약하기</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item-field ui-box lodging">
                {/* lodging 클래스 추가 241004 kjs */}
                {/* <Box className="bp-title-gray">숙소</Box> */}
                {/* <Box className="txt-data-desc">예약 정보 없음</Box> */}
                <dl className="">
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
                <dl className="bp-brline">
                  <dt>힐튼 아산</dt>
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
              {/* <div className="section-line"></div> */}

              <div className="item-field ui-box">
                <div className="inner-sides">
                  <div className="left-area">
                    <Box className="bp-title-gray">교통</Box>
                  </div>
                  {/* 240906 아이콘 스타일 변경 */}
                  {/* modify 240909 아이콘 스타일 변경 */}
                  <div className="right-area">
                    <Link to="#" className="btn-xsamll wtite">
                      <span className="txt">교통수단 변경</span>
                      <span className="end-icon">
                        <ChevronRight
                          fontSize="small"
                          className="bp-icon xsmall"
                        />
                      </span>
                    </Link>
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
                            {/* [S] 방문신청 예약하기 버튼 추가 이동 20241004 kjs */}
                            <div className="place-area">
                              <div className="flex-in">
                                <Box className="pin">
                                  충남 아산시 현대로 1077 82-20
                                </Box>
                                <div className="btn-groups">
                                  <Link to="#" className="btn-xsamll">
                                    <Box className="txt">방문신청</Box>
                                  </Link>
                                  <Link to="#" className="btn-xsamll">
                                    <Box className="txt">예약하기</Box>
                                  </Link>
                                </div>
                              </div>
                            </div>
                            {/* [E] 방문신청 예약하기 버튼 추가 이동 20241004 kjs */}
                          </ListItem>
                        </List>
                      </Box>

                      {/* <Box className="chip-area">
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
                      </Box> */}
                      {/* [S] 교통수단 N개노출 20241004 kjs */}
                      <List className="transportation-add-dot">
                        <ListItem>
                          <Box>KTX산천 003</Box>
                        </ListItem>
                        <ListItem>
                          <Box>대한항공 KE903</Box>
                        </ListItem>
                        <ListItem>
                          <Box>대한항공 KE903</Box>
                        </ListItem>
                        <ListItem>
                          <Box>대한항공 KE903</Box>
                        </ListItem>
                      </List>
                      {/* [E] 교통수단 N개노출 20241004 kjs */}
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
                      {/* <Box className="chip-area">
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
                          <span className="end-icon">
                            <ChevronRight
                              fontSize="small"
                              className="bp-icon xsmall"
                            />
                          </span>
                        </Link>
                      </Box> */}
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
                          <span className="txt">동승자 보험 가입하기</span>
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
                            label="자차"
                            size="medium"
                            className="bp-chip color-blue"
                          />
                        </div>
                        <Box className="txt">123저1077</Box>
                        <Box className="txt-complete">동승자보험 가입완료</Box>
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
                {/* modify 240909 */}
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

              <div className="section-line"></div>
              {/* modify 240909 */}
              {/* ui-box budget-area */}
              <div className="budget-area">
                <div className="item-field ui-box">
                  <Typography variant="h3" className="bp-title">
                    부가정보
                  </Typography>
                </div>
                <div className="item-field ui-box">
                  <Box className="left-area">
                    <Typography variant="h4" className="bp-title">
                      예산사용부서
                    </Typography>
                  </Box>
                  <div className="left-area">
                    <dl>
                      <dt className="txt-data">TBCM-1</dt>
                      <dd className="txt-data">(잔액 : 10,000,000원)</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  일비신청
                </Typography>
                <div className="item-field">
                  <Box className="txt-data">신청 (신청일수 : N일)</Box>
                  {/* 신청일수 추가 241004 kjs */}
                  {/* <Box className="txt-data">직원 숙소 신청</Box> */}
                </div>
              </div>
              <div className="item-field ui-box">
                <Link to="#">
                  규정집 보기
                  <ChevronRight fontSize="small" className="bp-icon small" />
                </Link>
              </div>
              <div className="section-line"></div>
              {/* modify: ui-box file-area */}

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

              <div className="section-line"></div>

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
              {/* modify 240909 */}
              <div className="btn-ctr-round">
                <Button
                  variant="outlined"
                  size="small"
                  className="btn-basic"
                  startIcon={
                    <Plus fontSize="small" className="bp-icon small" />
                  }
                >
                  동행인 추가하기
                </Button>
              </div>
            </div>
            {/* [E]fields-group view-plan */}

            {/* modify 240909 */}
            {/* <Box className="txt-btns-group">
              <Button size="medium">동행인 변경 완료</Button>
            </Box> */}
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
              출장취소
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              수정
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MBN020000;
