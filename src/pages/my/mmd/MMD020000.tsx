import {
  AppBar,
  Box,
  Button,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";

const MMD010000 = () => {
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
        <title>개인정보3자제공 동의서 | 약관동의</title>
      </Head>
      {/* [S]개인정보 수집 • 이용 */}
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
                <Typography className="primary-500">
                  개인(신용)정보 제3자 제공 동의서
                </Typography>
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
          className="dialog-body"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <div className="ui-inner ui-box">
            {/* [S]terms-details */}
            <div className="terms-details data-agree-pop">
              <Typography
                className="primary-500 dis-inblock"
                component="strong"
                gutterBottom
              >
                개인(신용)정보 제3자 제공 동의서
              </Typography>
              <Typography paragraph>
                현대자동차(이하, “회사”)가 제공하는 서비스와 관련하여 본인의
                개인(신용)정보를 제3자에게 제공하고자 하는 경우, 「신용정보의
                이용 및 보호에 관한 법률」, 「개인정보보호법」 등 관련 법규에
                따라 이용자 본인의 동의가 필요합니다.
              </Typography>

              <div className="terms-details">
                <ul>
                  <li>
                    <div className="style-table-box">
                      <dl className="style-row">
                        <dt>제공받는 자</dt>
                        <dd>(주)쿠콘</dd>
                      </dl>
                      <dl className="style-row">
                        <dt>
                          제공받는 자의
                          <br /> 이용 목적
                        </dt>
                        <dd>
                          • ’나의 자산’ 서비스 중 카드정보관리 (카드 가입현황
                          조회, 카드거래 내역 확인 등) <br />• 자산관리 서비스
                          관련 민원 및 문의 사항 처리 <br />• 기타 법령상 의무
                          이행 <br />• 서비스 이용 관련 금융사고 조사 및 분쟁
                          해결
                        </dd>
                      </dl>
                    </div>
                  </li>
                </ul>
                <Typography
                  component="strong"
                  className="primary-500"
                  gutterBottom
                >
                  제공 항목 – 개인(신용)정보
                </Typography>
                <ul>
                  <li>
                    <div className="style-table-box">
                      <dl className="style-row">
                        <dt>일반 개인정보</dt>
                        <dd>
                          <Typography component="p">
                            • 이름, 생년월일, CI
                          </Typography>
                        </dd>
                      </dl>
                    </div>
                  </li>
                </ul>

                <ul>
                  <li>
                    <div className="style-table-box">
                      <dl className="style-row">
                        <dt>보유 및 이용기간</dt>
                        <dd>
                          위 개인(신용)정보는 제공에 관한 동의일로부터 서비스
                          이용 종료 또는 동의 철회 시까지 보유·이용됩니다. (단,
                          본인 요청 시 즉시 파기하며, 다른 관련 법령에 해당하는
                          경우 해당 법령상의 보존기간을 따름.)
                        </dd>
                      </dl>
                      <dl className="style-row">
                        <dt>
                          동의를 거부할 <br />
                          권리 및 거부할
                          <br /> 경우 불이익
                        </dt>
                        <dd>
                          귀하는 개인(신용)정보 제공 동의에 대해 거부하실 수
                          있습니다. 다만, 개인(신용)정보 제3자제공에 관한 동의는
                          ㈜쿠콘의 ‘나의 자산’ 서비스의 체결 및 이행을 위한
                          필수적 사항이므로, 위 사항에 동의하셔야만 나의 자산
                          서비스의 설정 및 유지가 가능합니다.
                        </dd>
                      </dl>
                      <dl className="style-row">
                        <dt>제공 동의 여부</dt>
                        <dd>
                          본인은 현대자동차가 위 목적으로 위와 같은 본인의
                          개인(신용)정보를 제공하는 것에 동의합니다.
                        </dd>
                      </dl>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* [E]terms-details */}
          </div>
        </DialogContent>
        <DialogActions className="dialog-footer">
          {/* [S]<BtnsGroup /> */}
          <Box className="btns-group">
            <Box className="inner">
              <Button variant="contained" size="large" className="btn-xlarge">
                {/* 240819 modify */}
                동의하기
              </Button>
            </Box>
          </Box>
          {/* [E]BtnsGroup */}
        </DialogActions>
      </Dialog>
      {/* [E]개인정보 수집 • 이용 */}
    </>
  );
};

export default MMD010000;
