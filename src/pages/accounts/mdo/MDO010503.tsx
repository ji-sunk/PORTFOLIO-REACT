import HelpIcon from "@mui/icons-material/Help";
import {
  AppBar,
  Box,
  Button,
  Chip,
  DialogActions,
  DialogTitle,
  FormControl,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";

import React, { useState } from "react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";

const MDO010503 = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const [filteredLocations, setFilteredLocations] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const clearSearch = () => {
    setFilteredLocations("");
  };
  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };
  const [selected, setSelected] = React.useState(false);
  // [팝업]기본 팝업
  const [openDialog, setOpenDialog] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");
  const handleClickOpenDialog = (scrollType: DialogProps["scroll"]) => () => {
    setOpenDialog(true);
    setScroll(scrollType);
  };

  const descriptionElementRef = React.useRef<HTMLElement>(null);
  React.useEffect(() => {
    if (openDialog) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [openDialog]);

  // [팝업]FullPaper
  const [OpenFullPaper, setOpenFullPaper] = React.useState(false);
  const handleClickOpenFullPaper =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpenFullPaper(true);
      setScroll(scrollType);
    };
  const handleCloseFullPaper = () => {
    setOpenFullPaper(false);
  };

  const [writeOpen, setWriteOpen] = useState(false);
  const writeAnchorRef = useRef<HTMLButtonElement>(null);

  // return focus to the button when we transitioned from !open -> open
  const prevWriteOpen = useRef(writeOpen);
  useEffect(() => {
    if (prevWriteOpen.current === true && writeOpen === false) {
      writeAnchorRef.current!.focus();
    }
    prevWriteOpen.current = writeOpen;
  }, [writeOpen]);
  return (
    <>
      <Head>
        <title>회수금액 발생사유 확인</title>
      </Head>

      <Dialog
        fullScreen
        open
        //   open={OpenFullPaper}
        onClose={handleCloseFullPaper}
        scroll={scroll}
        className="bp-dialog dialog-full-paper"
      >
        <DialogTitle component="div" className="bp-dialog-header">
          {/* [S]<HeaderDialog /> */}
          <AppBar position="fixed" className="sub-header">
            <Box className="inner">
              <div className="center-area">
                <Typography variant="h3">회수금액 발생내역</Typography>
              </div>
              <div className="right-area">
                <IconButton
                  className="btn-icon-only"
                  size="small"
                  aria-label="닫기"
                  onClick={handleCloseFullPaper}
                >
                  <GridCloseIcon fontSize="small" className="bp-icon" />
                </IconButton>
              </div>
            </Box>
          </AppBar>
          {/* [E]HeaderDialog */}
        </DialogTitle>
        <DialogContent
          dividers={scroll === "paper"}
          className="dialog-body recovery-amount-pop"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <div className="ui-inner">
            <div className="ui-box">
              {/* [S]bztrip-list */}
              <div className="bztrip-list">
                <div className="ui-box type-line">
                  <div className="item-card">
                    <Link to="#" className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <div className="chips-group">
                            <Chip
                              label="숙박비"
                              size="small"
                              color="info"
                              variant="outlined"
                              className="bp-chip color-blue-lightest"
                            />
                            <div className="item-date">
                              이용일 04.29 ~ 04.30 (1박)
                            </div>
                          </div>
                        </div>
                        <div className="right-area"></div>
                      </div>
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          <div className="item-revert">
                            {/* <PolylineOutlined className="bp-icon small" /> */}
                          </div>
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
                                -195,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 153,000원</div>
                            </Box>
                          </div>
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
                              label="교통비"
                              size="small"
                              color="success"
                              className="bp-chip color-twotone color-info"
                            />
                            <div className="item-date">
                              이용일시 04.25 15:20
                            </div>
                          </div>
                        </div>
                        <div className="right-area"></div>
                      </div>
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          <div className="item-revert"></div>
                          <div className="txt">SRT 324</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <span className="txt">회수금액</span>
                              <Box
                                component="span"
                                className="point-large color-error"
                              >
                                -75,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 123,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
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
                              label="취소수수료"
                              size="small"
                              color="info"
                              variant="outlined"
                              className="bp-chip color-twotone color-error"
                            />
                          </div>
                        </div>
                        <div className="right-area"></div>
                      </div>
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          <div className="item-revert">
                            {/* <PolylineOutlined className="bp-icon small" /> */}
                          </div>
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
                                -10,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                            <Box>
                              <div className="txt-desc">결제금액 10,000원</div>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </Link>

                    <div className="total-box top-line">
                      <div className="title-area inner-sides">
                        <div className="flex-row">
                          <div className="txt">총 결제금액</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <Box
                                component="span"
                                className="point-large color-error"
                              >
                                -210,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="ui-box top-line">
                      <div className="item-field ui-box">
                        <Typography variant="h4" className="bp-title">
                          지급방식
                        </Typography>
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
                                label="개인사유"
                              />
                              <Tooltip
                                title={
                                  <div className="bp-tooltip">
                                    <div className="tooltip-body">
                                      총 회수금액 마이너스인 경우 계좌이체 or{" "}
                                      <br />
                                      비플머니 입금이 필요하며, 회수확인 후{" "}
                                      <br />
                                      출장정산서 작성 가능합니다.
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

                            <div className="right-area">
                              <FormControlLabel
                                // required
                                control={<Radio value="radio01-02" />}
                                label="업무사유"
                              />
                              <Tooltip
                                title={
                                  <div className="bp-tooltip">
                                    <div className="tooltip-body">
                                      총 회수금액이 마이너스인 경우 사유를{" "}
                                      <br />
                                      작성해 부서장 결제를 받으셔야 되며, <br />
                                      업무사유 결제 완료 후 출장정산서 <br />
                                      작성 가능합니다.
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
                            </div>
                          </RadioGroup>
                          <div className="text-field">
                            <TextField
                              label="사유"
                              multiline
                              rows={4}
                              fullWidth
                              value={value}
                              onChange={handleChange}
                              inputProps={{ maxLength: 150 }} // 최대 글자 수 설정
                            />
                            <Typography
                              variant="caption"
                              className="txt-caption"
                              color="textSecondary"
                            >
                              {value.length}/150자
                            </Typography>{" "}
                          </div>
                        </FormControl>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* [E]bztrip-list */}
            </div>
          </div>
        </DialogContent>
        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner">
              <Button variant="contained" size="large" className="btn-xlarge">
                확인
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MDO010503;
