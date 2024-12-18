import { ArrowDropDown } from "@mui/icons-material";
import AltRouteRoundedIcon from "@mui/icons-material/AltRouteRounded";
import CancelIcon from "@mui/icons-material/Cancel";
import ListAltRoundedIcon from "@mui/icons-material/ListAltRounded";
import {
  Box,
  Button,
  ClickAwayListener,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { ReverseLeft, Share07, SlashOctagon } from "@untitled-ui/icons-react";
import { useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MDO010500 = () => {
  /* Dropdown 버튼 */
  const [writeOpen, setWriteOpen] = useState(false);
  const [modifyOpen, setModifyOpen] = useState(false);
  const writeAnchorRef = useRef<HTMLButtonElement>(null);
  const modifyAnchorRef = useRef<HTMLButtonElement>(null);

  const handleWriteOpen = () => {
    setWriteOpen((prevOpen) => !prevOpen);
  };

  const handleModifyOpen = () => {
    setModifyOpen((prevOpen) => !prevOpen);
  };

  const handleWriteClose = (event: Event | React.SyntheticEvent) => {
    if (
      writeAnchorRef.current &&
      writeAnchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setWriteOpen(false);
  };

  const handleModifyClose = (event: Event | React.SyntheticEvent) => {
    if (
      modifyAnchorRef.current &&
      modifyAnchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setModifyOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setWriteOpen(false);
      setModifyOpen(false);
    } else if (event.key === "Escape") {
      setWriteOpen(false);
      setModifyOpen(false);
    }
  }

  // 버튼 file
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);

  //const [fileUrl, setFileUrl] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileImages, setFileImages] = useState([
    { src: "../../../../assets/images/no-img.svg", alt: "", isDefault: true },
  ]);

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
        <title>정산정보입력 | 정산서</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        {/* calculate-info-wrap 클래스 추가 241010 kjs */}
        <Paper className="ui-paper bztrip-wrap calculate-info-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group */}
            <div className="fields-group">
              <div className="ui-box type-line">
                <div className="item-card">
                  <div className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <Box className="btn-dropdown">
                          <Button
                            className="btn-arrow-dropdown"
                            variant="outlined"
                            size="small"
                            id="modify-button1"
                            onClick={handleModifyOpen}
                            ref={modifyAnchorRef}
                            aria-controls={
                              modifyOpen ? "modify-menu" : undefined
                            }
                            aria-expanded={modifyOpen ? "true" : undefined}
                            aria-haspopup="true"
                            endIcon={
                              <ArrowDropDown
                                fontSize="medium"
                                className="bp-icon"
                              />
                            }
                          >
                            숙박비
                          </Button>
                          <Popper
                            open={modifyOpen}
                            anchorEl={modifyAnchorRef.current}
                            role={undefined}
                            placement="bottom-start"
                            transition
                            disablePortal
                            className="popper-dropdown fullWidth"
                          >
                            {({ TransitionProps, placement }) => (
                              <Grow
                                {...TransitionProps}
                                style={{
                                  transformOrigin:
                                    placement === "bottom-start"
                                      ? "left top"
                                      : "left bottom",
                                }}
                              >
                                <Paper>
                                  <ClickAwayListener
                                    onClickAway={handleModifyClose}
                                  >
                                    <MenuList
                                      autoFocusItem={modifyOpen}
                                      id="modify-menu"
                                      aria-labelledby="modify-button2"
                                      onKeyDown={handleListKeyDown}
                                    >
                                      <MenuItem onClick={handleModifyClose}>
                                        수정하기
                                      </MenuItem>
                                      <MenuItem onClick={handleModifyClose}>
                                        분할하기
                                      </MenuItem>
                                      <MenuItem onClick={handleModifyClose}>
                                        세액수정
                                      </MenuItem>
                                    </MenuList>
                                  </ClickAwayListener>
                                </Paper>
                              </Grow>
                            )}
                          </Popper>
                        </Box>
                      </div>
                      <div className="right-area">
                        <IconButton size="small" className="btn-clear">
                          <CancelIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      </div>
                    </div>

                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="list-schedule">
                          {/* 텍스트 컬러 변경되면서 구조 변경 241010 kjs */}
                          <Box className="txt-period">
                            이용일 06.08 ~ 06.12 (4박5일)
                          </Box>
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">결제일시 04.12 12:00</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <div className="txt">울산 1공장 방문건</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <span className="txt">결제금액</span>
                            <Box component="span" className="point-large">
                              295,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                          {/* 텍스트 컬러 변경되면서 txt-box 클래스 추가 241010 kjs */}
                          <Box className="txt-box">
                            <div className="txt-desc">출장비 지원 53,000원</div>
                          </Box>
                          <FormHelperText className="color-error">
                            출장기간과 이용기간이 맞지 않습니다.
                          </FormHelperText>
                          <Box>
                            <div className="txt-desc">
                              회수금액
                              <span className="color-error">-53,000원</span>
                            </div>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui-box type-line">
                <div className="item-card">
                  <div className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <Button
                          className="btn-arrow-dropdown"
                          variant="outlined"
                          size="small"
                          id="modify-button3"
                          onClick={handleModifyOpen}
                          ref={modifyAnchorRef}
                          aria-controls={modifyOpen ? "modify-menu" : undefined}
                          aria-expanded={modifyOpen ? "true" : undefined}
                          aria-haspopup="true"
                          endIcon={
                            <ArrowDropDown
                              fontSize="medium"
                              className="bp-icon"
                            />
                          }
                        >
                          숙박비
                        </Button>
                      </div>
                      <div className="right-area">
                        {/* IconButton 위반의심 초기화 추가 241029 kjs */}
                        <IconButton
                          className="ico icon-error"
                          aria-label="위반의심"
                        ></IconButton>
                        <IconButton size="small" className="">
                          <ReverseLeft
                            className="bp-icon small"
                            aria-label="초기화"
                          />
                        </IconButton>
                        <IconButton size="small">
                          <ListAltRoundedIcon
                            fontSize="small"
                            className="bp-icon small"
                            aria-label=""
                          />
                        </IconButton>
                        <IconButton
                          className="btn-icon-only"
                          size="small"
                          aria-label="분할"
                        >
                          <AltRouteRoundedIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                        <IconButton size="small" className="btn-clear">
                          <CancelIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      </div>
                    </div>
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="list-schedule">
                          {/* <Box className="txt-period">
                            이용일 06.08 ~ 06.12 (4박5일)
                          </Box> */}
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">결제일시 04.12 12:00</div>
                      </div>
                    </div>
                    {/* [S]결제자 + 아이콘 추가 취소 수수료 지원 241010 kjs */}

                    <div className="title-area inner-sides">
                      <div className="txt">
                        <Share07 className="bp-icon small color-secondary-main" />
                        롯데호텔 울산
                        <div className="name">결제자 김현대</div>
                      </div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <span className="txt">결제금액</span>
                            <Box component="span" className="point-large">
                              125,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                          <Box className="txt-box">
                            <div className="txt-desc">
                              취소수수료 지원 10,000원
                            </div>
                          </Box>
                          {/* 241120 트래포트 예약취소수수료 사유입력 유형 라디오 버튼 추가 kjs */}
                          <FormControl>
                            <RadioGroup
                              aria-labelledby="radio-buttons-group"
                              defaultValue="radio01"
                              name="radio buttons group"
                              className="flex-row"
                            >
                              <FormControlLabel
                                control={<Radio value="radio01-01" />}
                                label="개인사유"
                              />
                              <FormControlLabel
                                // disabled
                                control={<Radio value="radio01-02" />}
                                label="업무사유"
                              />
                            </RadioGroup>
                          </FormControl>
                          <Box>
                            <div className="txt-desc">
                              회수금액
                              <span className="color-error">-53,000원</span>
                            </div>
                          </Box>
                        </div>
                      </div>
                    </div>
                    {/* [E]결제자 + 아이콘 추가 취소 수수료 지원 241010 kjs */}
                    <div className="item-field">
                      <TextField
                        size="small"
                        hiddenLabel
                        placeholder=""
                        fullWidth
                        value="200,000 원"
                        InputProps={{
                          inputProps: {
                            style: { textAlign: "right" },
                          },
                        }}
                      />
                      <FormHelperText className="color-error align-right">
                        청구금액이 지원금액보다 큽니다.
                      </FormHelperText>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui-box type-line bg-type">
                {/* bg-type 클래스 추가 240913 kjs */}
                <div className="item-card">
                  <div className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <Button
                          className="btn-arrow-dropdown"
                          variant="outlined"
                          size="small"
                          id="modify-button"
                          onClick={handleModifyOpen}
                          ref={modifyAnchorRef}
                          aria-controls={modifyOpen ? "modify-menu" : undefined}
                          aria-expanded={modifyOpen ? "true" : undefined}
                          aria-haspopup="true"
                          endIcon={
                            <ArrowDropDown
                              fontSize="medium"
                              className="bp-icon small"
                            />
                          }
                        >
                          숙박비
                        </Button>
                      </div>
                      <div className="right-area">
                        <IconButton size="small">
                          <ListAltRoundedIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                        <IconButton
                          className="btn-icon-only"
                          size="small"
                          aria-label="분할"
                        >
                          <AltRouteRoundedIcon
                            fontSize="small"
                            className="bp-icon xsmall"
                          />
                        </IconButton>
                        <IconButton size="small" className="btn-clear">
                          <CancelIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      </div>
                    </div>
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="list-schedule">
                          <Box className="txt-period">이용일 06.08</Box>
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">결제일시 04.12 12:00</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <SlashOctagon className="bp-icon small color-error" />
                      <div className="txt">현대해상</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <span className="txt">결제금액</span>
                            <Box component="span" className="point-large">
                              35,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                          <Box className="txt-box">
                            <div className="txt-desc">출장비 지원 30,000원</div>
                          </Box>
                          <FormHelperText className="color-error">
                            출장기간과 이용기간이 맞지 않습니다.
                          </FormHelperText>
                          <Box>
                            <div className="txt-desc">
                              회수금액
                              <span className="color-error"> -5,000원</span>
                            </div>
                          </Box>
                        </div>
                      </div>
                    </div>
                    <div className="item-field">
                      {/* bg-type 클래스 추가 240913 kjs */}
                      <TextField
                        size="small"
                        hiddenLabel
                        className="bg-type"
                        placeholder=""
                        fullWidth
                        disabled
                        value=""
                        InputProps={{
                          inputProps: {
                            style: { textAlign: "right" },
                          },
                        }}
                      />
                      <FormHelperText className="color-error align-right">
                        출장기간과 이용기간이 맞지 않습니다.
                      </FormHelperText>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* [S]정산할 내역이 없을 때 케이스 추가 241008 kjs */}
            <div className="no-data-box">
              정산할 내역이 없습니다. <br />
              추가로 정산할 내역이 있으시다면 <br />
              ‘영수증 첨부’ 버튼을 통해 추가해주세요.
            </div>
            {/* [E]정산할 내역이 없을 때 케이스 추가 241008 kjs */}
            {/* [E]fields-group */}

            <Box className="txt-btns-group">
              <Button size="medium">영수증 첨부</Button>
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
              이전
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

export default MDO010500;
