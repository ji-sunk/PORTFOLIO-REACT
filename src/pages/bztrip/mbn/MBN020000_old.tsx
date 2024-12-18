import { ChevronRight } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import MyLocationIcon from "@mui/icons-material/MyLocation";
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
import { RefreshCcw04 } from "@untitled-ui/icons-react";
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
              </div>

              {/* ui-box bzt-info-area */}
              <div className="ui-box bzt-info-area">
                <Typography variant="h3" className="bp-title">
                  출장정보
                </Typography>

                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    문서번호
                  </Typography>
                  <Box className="txt-data">HD12341123</Box>
                </div>

                <div className="item-field">
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

                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    출장목적
                  </Typography>
                  <Box className="txt-data">일반출장</Box>
                </div>

                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    파견유형
                  </Typography>
                  <Box className="txt-data">숙소제공</Box>
                </div>

                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    제목
                  </Typography>
                  <Box className="txt-data">울산 3공장 생산 프로세스 방문</Box>
                </div>

                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    내용
                  </Typography>
                  <Box className="txt-data">
                    3공장 장착 프로세스 점검 방문 3공장 차체 무빙파트조립
                  </Box>
                </div>

                <div className="item-field">
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

                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    출장기간
                  </Typography>
                  <Box className="txt-data type-calendar">
                    <Box className="txt-period">2024.08.08 ~ 2024.08.10</Box>
                    <Box className="txt-term">(2박3일)</Box>
                  </Box>
                </div>
              </div>

              {/* ui-box reservation-area */}
              <div className="ui-box reservation-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      예약정보
                    </Typography>
                  </div>
                  <div className="right-area">
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={
                        <RefreshCcw04
                          fontSize="small"
                          className="bp-icon xsmall"
                        />
                      }
                    >
                      예약내역 불러오기
                    </Button>
                  </div>
                </div>
                <div className="item-field">
                  <Typography variant="h4" className="bp-title">
                    숙소
                  </Typography>

                  <div className="inner-sides">
                    <div className="left-area">
                      <Box className="txt-data-desc">예약 정보 없음</Box>
                    </div>
                    <div className="right-area">
                      <Link to="#" className="btn-xsamll">
                        <span className="txt">숙소 예약</span>
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

                <div className="item-field">
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

                <div className="item-field">
                  <div className="inner-sides">
                    <div className="left-area">
                      <Typography variant="h4" className="bp-title">
                        교통
                      </Typography>
                    </div>
                    <div className="right-area">
                      <Link to="#" className="btn-xsamll">
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
                        <Box className="txt">
                          <div className="item-transportation">
                            <Box>
                              <img src="/assets/images/logo-ktxsancheon.svg" />
                            </Box>
                            <Box>0031</Box>
                          </div>
                        </Box>
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
                        <Box className="txt">
                          <div className="item-transportation">
                            <Box>
                              <img src="/assets/images/logo-jejuair.svg" />
                            </Box>
                            <Box>7C1234</Box>
                          </div>
                        </Box>
                      </Box>
                    </li>
                  </ol>
                </div>
              </div>

              {/* ui-box trans-area */}
              <div className="ui-box trans-area">
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
                          <div className="item-transportation">
                            <span>
                              <img src="/assets/images/logo-ktxsancheon.svg" />
                            </span>
                            <span>0031</span>
                          </div>
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
                          <span className="txt">교통수단 예약</span>
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
              </div>

              {/* ui-box budget-area */}
              <div className="ui-box budget-area">
                <div className="inner-sides">
                  <Box className="left-area">
                    <Typography variant="h4" className="bp-title">
                      예산사용부서
                    </Typography>
                  </Box>
                  <div className="right-area"></div>
                </div>
                <div className="item-field">
                  <div className="left-area">
                    <dl>
                      <dt className="txt-data">TBCM-1</dt>
                      <dd className="txt-data">(잔액 : 10,000,000원)</dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="ui-box">
                <Typography variant="h4" className="bp-title">
                  기타신청
                </Typography>
                <div className="item-field">
                  <Box className="txt-data">일비 신청</Box>
                  <Box className="txt-data">직원 숙소 신청</Box>
                </div>
                <div className="item-field">
                  <Link to="#">
                    규정집 보기
                    <ChevronRight fontSize="small" className="bp-icon small" />
                  </Link>
                </div>
              </div>

              {/* modify: ui-box file-area */}
              <div className="ui-box file-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      첨부문서
                    </Typography>
                  </div>
                  <div className="right-area"></div>
                </div>

                <div className="item-field">
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
              </div>

              {/* modify: user-info-area */}
              <div className="ui-box user-info-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      대리예약
                    </Typography>
                  </div>
                  <div className="right-area"></div>
                </div>
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
                </div>
              </div>

              {/* modify: user-info-area */}
              <div className="ui-box user-info-area">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      출장 동행인
                    </Typography>
                  </div>
                  {/* modify 240808 */}
                  <div className="right-area">
                    <Button
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
                    </Button>
                  </div>
                </div>
                <div className="item-field user-list-area">
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
                            <div className="user-name">
                              김현대 과장(1341341)
                            </div>
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
                        <CancelIcon
                          fontSize="small"
                          className="bp-icon small"
                        />
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
                            alt="최현대"
                            src="/assets/images/tmp-profile2.png"
                            className="user-avatar"
                          />
                        </dt>
                        <dd>
                          <div className="user-info-row">
                            <div className="user-name">
                              최현대 과장(1341341)
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

export default MBN020000;
