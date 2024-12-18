import { ArrowDropDown, Info } from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Chip,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Paperclip, RefreshCcw04 } from "@untitled-ui/icons-react";
import { useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import PeriodCalendar from "src/components/common/PeriodCalendar";
import LayoutSub from "src/templates/layout/LayoutSub";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MDO010300 = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);

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
        <title>정산신청서 작성 | 출장정산서</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group write-plan : 등록 */}
            <div className="bt-form">
              {/* bt-form 클래스 추가 / 클래스 fields-group write-plan 삭제 - 와이드 섹션 라인을 위한 구조 변경 kjs 240910 */}
              <div className="item-field ui-box">
                <Box className="bp-instructions">
                  {/* modify: 주석해제 */}
                  <Info fontSize="small" className="bp-icon xsmall" />
                  <div className="txt">
                    일비포인트를 지급받은 경우 계획서를 선택해 주세요.
                  </div>
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
                    계획서 불러오기
                  </Button>
                </Box>
              </div>

              <div className="item-field ui-box">
                <TextField
                  // onClick={}
                  className="type-btn"
                  type="button"
                  label="출장목적"
                  defaultValue=""
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowDropDown fontSize="medium" />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
              <div className="item-field ui-box">
                <TextField label="제목" placeholder="" fullWidth />
              </div>
              <div className="item-field ui-box">
                <TextField label="내용" multiline maxRows={2} fullWidth />
              </div>

              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910  kjs */}
              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  출장기간
                </Typography>
              </div>
              <div className="item-field ui-box">
                <PeriodCalendar />
              </div>
              <div className="section-line"></div>
              {/* 구분선 추가하면 생기는 라인 240910 kjs */}

              <div className="item-field ui-box trans-area">
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
                    <Button
                      variant="outlined"
                      size="small"
                      endIcon={
                        <NearMeRoundedIcon
                          fontSize="small"
                          className="bp-icon xsmall"
                        />
                      }
                    >
                      교통수단 변경
                    </Button>
                  </div>
                </div>
              </div>
              <div className="item-field ui-box">
                <TextField className="type-btn" type="button" label="목적지" />
              </div>
              <div className="item-field ui-box">
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
                              충남 아산시 현대로 1077 82-20 현대자동차 울산5공장
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
                            {/* <img src="/assets/images/logo-ktxsancheon.svg" /> */}
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
                              충남 아산시 현대로 1077 82-20 현대자동차 울산5공장
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
                              충남 아산시 현대로 1077 82-20 현대자동차 울산5공장
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
                      <Box className="txt">123저1077</Box>
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
                              충남 아산시 현대로 1077 82-20 현대자동차 울산5공장
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
                              충남 아산시 현대로 1077 82-20 현대자동차 울산5공장
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
                      <Box className="txt">123저1077 (소유자:김현대)</Box>
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
                              충남 아산시 현대로 1077 82-20 현대자동차 울산5공장
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
                      <Box className="txt">123저1077</Box>
                    </Box>
                  </li>
                </ol>
              </div>
              <div className="item-field ui-box">
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
                      자기 차량(동승자 포함)을 선택하신 구간은 교통비가 지급되지
                      않습니다.
                    </div>
                    <div className="txt-indent">
                      자기 차량 이용 시 유류비, 통행료가 출장 종료 시 현금으로
                      지급됩니다.
                    </div>
                  </div>
                </div>
              </div>

              {/* modify: 예산사용부서 선택 수정 */}
              <div className="item-field ui-box budget-area">
                <div className="inner-sides">
                  <Box className="left-area">
                    <Typography variant="h3" className="bp-title">
                      예산사용부서
                    </Typography>
                  </Box>
                </div>
              </div>

              <div className="item-field ui-box">
                {/* 리스트 팝업 호출 버튼 타입 */}
                <TextField
                  className="type-btn"
                  type="button"
                  label="예산사용부서 선택"
                  defaultValue=""
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ArrowDropDown fontSize="medium" />
                      </InputAdornment>
                    ),
                  }}
                />
                <Box className="txt-data-desc">잔액 : 10,000,000원</Box>
              </div>

              {/* [S] 전체적인 구조 변경 추가 /이동 수정 240913 kjs */}
              {/* <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  기타신청
                </Typography>
              </div>   */}
              <div className="item-field ui-box">
                <div className="inner-sides in-toggle">
                  <Box className="left-area">
                    {/* [S]txt-tooltip */}
                    <Box className="txt-tooltip">
                      <div className="txt">일비 신청</div>
                      <Tooltip
                        title={
                          <div className="bp-tooltip">
                            <div className="tooltip-body">
                              신청을 해지하지면 일비가 지급되지 않습니다.
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
                    </Box>
                    {/* [E]txt-tooltip */}
                  </Box>
                  <Box className="right-area">
                    <Switch defaultChecked />
                  </Box>
                </div>
              </div>

              <div className="ui-box item-field">
                <div className="neutral-box info-distance total-wrap">
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <div className="txt">기 지급 금액</div>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">220,000P</Box>
                      <Box className="subtxt">2024.06.01~2024.06.05 (5일)</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <div className="txt">사용 금액</div>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">-180,000P</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <div className="txt">실 한도 금액</div>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">220,000p</Box>
                      <Box className="subtxt">2024.06.01~2024.06.05 (5일)</Box>
                    </dd>
                  </dl>

                  <dl className="inner-sides footer-total">
                    <dt className="left-area">
                      <div className="txt">회수금액</div>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt text-error">2,000P</Box>
                      <Box className="subtxt text-error">
                        규정 금액 초과 사용분
                      </Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides footer-total">
                    <dt className="left-area">
                      <div className="txt">신청금액</div>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt color-blue">2,000P</Box>
                      <Box className="subtxt color-blue">
                        규정 금액 초과 사용분
                      </Box>
                    </dd>
                  </dl>
                </div>
                <div className="brt-line"></div>
              </div>

              <div className="item-field ui-box">
                <div className="inner-sides in-toggle">
                  <Box className="left-area">
                    {/* [S]txt-tooltip */}
                    <Box className="txt-tooltip">
                      <div className="txt">직원 숙소 신청</div>
                      <Tooltip
                        title={
                          <div className="bp-tooltip">
                            <div className="tooltip-body">
                              직원 숙소를 신청하신 날짜는 숙박비가 지급되지
                              않습니다.
                              <br />
                              출장 종료 시 규정에 맞는 지원금이 입금됩니다.
                            </div>
                          </div>
                        }
                        open={showTooltip2}
                        onOpen={() => setShowTooltip2(true)}
                        onClose={() => setShowTooltip2(false)}
                      >
                        <IconButton
                          onClick={() => setShowTooltip2(!showTooltip2)}
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
                    </Box>
                    {/* [E]txt-tooltip */}
                  </Box>
                  <Box className="right-area">
                    <Switch defaultChecked />
                  </Box>
                </div>
              </div>

              <div className="ui-box item-field">
                <div className="neutral-box info-distance total-wrap">
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <Box className="txt">신청일</Box>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">4박</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides footer-total">
                    <dt className="left-area">
                      <Box className="txt">신청금액</Box>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt color-blue">40,000P</Box>
                    </dd>
                  </dl>
                </div>
                <div className="brt-line"></div>
              </div>

              <div className="item-field ui-box">
                <div className="inner-sides in-toggle">
                  <Box className="left-area">
                    {/* [S]txt-tooltip */}
                    <Box className="txt">유류비 신청</Box>
                  </Box>
                  <Box className="right-area">
                    <Switch defaultChecked />
                  </Box>
                </div>
              </div>
              <div className="item-field ui-box">
                <div className="neutral-box info-distance total-wrap">
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <Box className="txt">차량명</Box>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">나의첫차</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <Box className="txt">번호</Box>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">123저1234</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides footer-total">
                    <dt className="left-area">
                      <Box className="txt">신청금액</Box>
                    </dt>
                    <dd className="right-area">
                      <span>(이동거리 :32Km)</span>{" "}
                      <span className="txt color-blue">40,000원</span>
                    </dd>
                  </dl>
                </div>
                <div className="neutral-box info-distance total-wrap">
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <Box className="txt">차량명</Box>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">그랜저 하이브리드</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides">
                    <dt className="left-area">
                      <Box className="txt">번호</Box>
                    </dt>
                    <dd className="right-area">
                      <Box className="txt">123저1234</Box>
                    </dd>
                  </dl>
                  <dl className="inner-sides footer-total">
                    <dt className="left-area">
                      <Box className="txt">신청금액</Box>
                    </dt>
                    <dd className="right-area">
                      <span>(이동거리 :32Km)</span>{" "}
                      <span className="txt color-blue">40,000원</span>
                    </dd>
                  </dl>
                </div>
              </div>

              <div className="item-field ui-box">
                <div className="inner-sides in-toggle">
                  <Box className="left-area">
                    {/* [S]txt-tooltip */}
                    <Box className="txt-tooltip">
                      <div className="txt">자차 본인부담금 신청</div>
                      <Tooltip
                        title={
                          <div className="bp-tooltip">
                            <div className="tooltip-body">
                              자차를 이용한 출장중 사고 발생시 신청해주세요.
                              <br />
                              사고에 대한 첨부파일이 필요합니다.
                              <br />
                              1. 사고확인서 (교통사고처리확인서)
                              <br />
                              2.자기부담금 청구서 (차량대물손해사정보고서)
                              <br />
                              *실비 지원 최대 50만원
                              <br />
                            </div>
                          </div>
                        }
                        open={showTooltip3}
                        onOpen={() => setShowTooltip3(true)}
                        onClose={() => setShowTooltip3(false)}
                      >
                        <IconButton
                          onClick={() => setShowTooltip3(!showTooltip3)}
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
                    </Box>
                    {/* [E]txt-tooltip */}
                  </Box>
                  <Box className="right-area">
                    <Switch defaultChecked />
                  </Box>
                </div>
                <div className="brt-line"></div>
                <div className="rfa-field">
                  <TextField label="사고사유" placeholder="" fullWidth />
                </div>
              </div>

              <div className="item-field ui-box">
                <div className="inner-sides">
                  <div className="left-area">
                    <Typography variant="h3" className="bp-title">
                      증빙자료
                    </Typography>
                  </div>
                  <div className="right-area">
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
                        startIcon={
                          <Paperclip
                            fontSize="small"
                            className="bp-icon small"
                          />
                        }
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
                        startIcon={
                          <Paperclip
                            fontSize="small"
                            className="bp-icon small"
                          />
                        }
                      >
                        첨부하기
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="item-field ui-box">
                {/* [S]파일 첨부 */}
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
                </div>
                {/* [E]파일 첨부 */}
              </div>
              <div className="section-line"></div>

              {/* [E] 전체적인 구조 변경 추가 /이동 수정 240913 kjs */}

              {/* modify: 지급방식 추가 */}
              {/* [S] 전체적인 구조 변경 240910 kjs */}
              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  지급방식
                </Typography>
              </div>
              <div className="item-field ui-box box-50">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    defaultValue="radio01-01"
                    name="radio buttons group"
                    className="flex-row"
                  >
                    <div className="left-area">
                      <FormControlLabel
                        control={<Radio value="radio01-01" />}
                        label="비플머니"
                      />
                    </div>
                    <div className="right-area">
                      <FormControlLabel
                        // required
                        control={<Radio value="radio01-02" />}
                        label="즉시출금"
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
              {/* [E] 전체적인 구조 변경 240910 kjs */}
            </div>
            {/* [E]fields-group write-plan */}
            <Box className="txt-btns-group">
              <Button size="medium">임시저장</Button>
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
              다음
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MDO010300;
