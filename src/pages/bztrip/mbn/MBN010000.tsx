import { ArrowDropDown, Info } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import HelpIcon from "@mui/icons-material/Help";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import NearMeRoundedIcon from "@mui/icons-material/NearMeRounded";
import PlaceIcon from "@mui/icons-material/Place";
import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Switch,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { SearchSm } from "@untitled-ui/icons-react";
import { useState } from "react";
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

const MBN010000 = () => {
  // 상태 정의
  const [value, setValue] = useState(""); // 내용 입력값
  const [title, setTitle] = useState(""); // 제목 입력값
  const [filteredLocations, setFilteredLocations] = useState("");
  const [showTooltip, setShowTooltip] = useState(false); // 툴팁 상태
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);

  // 핸들러 함수
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const clearSearch = () => {
    setFilteredLocations("");
  };

  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };

  return (
    <>
      <Head>
        <title>출장계획서 작성 | 출장</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group write-plan : 등록 */}
            <div className="bt-plan">
              {/* bt-plan 클래스 추가 / 클래스 fields-group write-plan 삭제 - 와이드 섹션 라인을 위한 구조 변경 kjs 240910 */}
              <div className="item-field ui-box">
                <Box className="bp-instructions">
                  <Info fontSize="small" className="bp-icon xsmall" />
                  <div className="txt">
                    출장계획완료 시 출장비 한도가 부여됩니다. 출장계획서 작성
                    완료 시, 조직장에서 자동 상신됩니다.
                  </div>
                </Box>
                <Typography variant="h3" className="bp-title text-hide">
                  출장정보
                </Typography>
              </div>
              <div className="item-field ui-box">
                <TextField
                  // onClick={}
                  className="type-search"
                  type="button"
                  defaultValue="출장자 검색"
                  hiddenLabel
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchSm
                          fontSize="medium"
                          className="bp-icon medium icon-search"
                        />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
              <div className="item-field ui-box">
                {/* disabled 클래스 추가 241017 kjs */}
                <TextField
                  // onClick={}
                  className="type-btn disabled"
                  type="button"
                  label="출장목적"
                  defaultValue=""
                  disabled
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
                <TextField
                  variant="filled"
                  size="medium"
                  label="출장자"
                  placeholder="출장자 검색"
                  className="cus-TextField"
                  fullWidth
                  defaultValue=""
                  hiddenLabel
                  value={filteredLocations}
                  onChange={filterResults}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" className="btn-groups">
                        {filteredLocations && ( // value 값이 있는 경우에만 clear 버튼 생성
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
                        )}
                        <IconButton
                          aria-label="Search"
                          size="small"
                          className="btn-search"
                        >
                          <SearchSm
                            fontSize="medium"
                            className="bp-icon medium icon-search"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
              {/* [S]최대 글자수 캡션 추가 241017 kjs */}
              <div className="item-field ui-box caption">
                <TextField
                  label="제목"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  fullWidth
                  inputProps={{ maxLength: 30 }}
                />
                <Typography variant="caption">{title.length}/30자</Typography>
              </div>

              <div className="item-field ui-box caption">
                <TextField
                  label="내용"
                  value={value}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  inputProps={{ maxLength: 150 }}
                />
                <Typography variant="caption">{value.length}/150자</Typography>
              </div>
              {/* [E]최대 글자수 캡션 추가 241017 kjs */}
              <div className="item-field ui-box">
                <PeriodCalendar />
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
                {/* 하단 문구 추가 241017 kjs */}
                <Box className="error-box">
                  숙박예약건이 존재하여 당일출장 설정이 불가합니다.
                </Box>
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
                  className="type-btn disabled"
                  type="button"
                  disabled
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
              <div className="item-field ui-box">
                <TextField
                  variant="filled"
                  size="medium"
                  placeholder="검색해 주세요."
                  className="bp-search"
                  fullWidth
                  label="프로젝트"
                  defaultValue=""
                  InputLabelProps={{
                    shrink: true,
                  }}
                  InputProps={{
                    readOnly: true,
                    endAdornment: (
                      <InputAdornment position="end" className="btn-groups">
                        {filteredLocations && ( // value 값이 있는 경우에만 clear 버튼 생성
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
                        )}
                        <IconButton
                          aria-label="Search"
                          size="small"
                          className="btn-search"
                          // onClick={handleClickOpenDialog}
                        >
                          <SearchSm
                            fontSize="medium"
                            className="bp-icon medium icon-search"
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </div>

              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  기타신청
                </Typography>
              </div>
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
                    <p className="subtxt-day">신청일수: N일</p>{" "}
                    {/* 신청일수: N일 추가 240925 kjs */}
                    {/* [E]txt-tooltip */}
                  </Box>
                  <Box className="right-area">
                    <Switch defaultChecked />
                  </Box>
                </div>
                <div className="inner-sides">
                  <Box className="left-area">
                    <div className="txt">일비 신청</div>
                  </Box>
                  <Box className="right-area"></Box>
                </div>
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

              <div className="item-field ui-box">
                <div className="inner-sides">
                  <div className="left-area">
                    {/* [S]txt-tooltip */}
                    <Box className="txt-tooltip">
                      <Typography variant="h3" className="bp-title">
                        출장 동행인 검색
                      </Typography>
                      <Tooltip
                        title={
                          <div className="bp-tooltip">
                            <div className="tooltip-body">
                              동행인에게 동일 출장계획서가 공유됩니다.
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
                  </div>
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
              </div>
              {/* [E]txt-tooltip */}
              <div className="item-field ui-box">
                <TextField
                  // onClick={}
                  className="type-search"
                  type="button"
                  defaultValue="직원 검색"
                  hiddenLabel
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SearchSm
                          fontSize="medium"
                          className="bp-icon medium icon-search"
                        />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                />
              </div>
              <div className="item-field ui-box user-list-area">
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
                        </div>
                        <div className="user-info-row">
                          <div className="user-team">
                            라이프디자인팀 (TBCM-1)
                          </div>
                        </div>
                      </dd>
                    </dl>
                  </div>
                  <div className="right-area">
                    <IconButton size="small" className="btn-clear">
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
                  <div className="right-area">
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon fontSize="small" className="bp-icon small" />
                    </IconButton>
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
                  {/* <div className="right-area">
                    <IconButton size="small" className="btn-clear">
                      <CancelIcon
                        fontSize="small"
                        className="bp-icon small"
                      />
                    </IconButton>
                  </div> */}
                </div>
              </div>
            </div>
            {/* [E]fields-group write-plan */}
            <Box className="txt-btns-group">
              <Button size="medium">임시저장</Button>
              <Button size="medium">동행인 추가완료</Button>
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
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge disabled"
            >
              확인
            </Button>
          </Box>
        </Box>
        {/* [S] btns-group disabled 추가 241017 kjs */}
        <Box className="btns-group disabled">
          <Box className="inner">
            <Button
              disabled
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              취소
            </Button>
            <Button
              disabled
              variant="contained"
              size="large"
              className="btn-xlarge"
            >
              확인
            </Button>
          </Box>
        </Box>
        {/* [E] btns-group disabled 추가 241017 kjs */}
      </LayoutSub>
    </>
  );
};

export default MBN010000;
