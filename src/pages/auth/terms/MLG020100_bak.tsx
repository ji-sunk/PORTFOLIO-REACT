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

const MLG020100 = () => {
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
        <title>bizplay이용약관</title>
      </Head>
      {/* [S]bizplay이용약관 */}
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
                <Typography variant="h3">bizplay이용약관</Typography>
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
          <div className="ui-inner">
            {/* [S]terms-details */}
            <div className="terms-details">
              <p className="text-hide">bizplay이용약관</p>
              <p className="title">제1장 총칙</p>
              <ul>
                <li>
                  <p>제1조 (목적)</p>
                  <div>
                    본 약관은 비즈플레이㈜(이하 “당사”라 한다)가 제공하는
                    “bzp출장관리” 서비스를 이용하는 고객(이하 “고객”)의 권리,
                    의무 및 책임사항을 규정함을 목적으로 합니다.
                  </div>
                  <div className="style-table-box">
                    <dl className="style-row">
                      <dt>수집항목</dt>
                      <dd>
                        <p>[필수]</p>
                        <div>
                          개인정보
                          <br />
                          [이름, 이메일, 아이디, 비밀번호, 생년월일, 휴대폰번호,
                          이메일, 성별, 내외국인정보]
                          <br />
                          회사정보
                          <br />
                          [회사코드, 회사명, 사원번호, 근무처, 부서명, 직급,
                          직책, 회사 전화번호]
                        </div>
                      </dd>
                    </dl>
                    <dl className="style-row">
                      <dt>이용목적</dt>
                      <dd>
                        <p>[필수]</p>
                        <div>
                          - 서비스 이용에 따른 본인확인 및 개인정보 식별
                          <br />
                          - 원활한 의사소통 경로의 확보
                          <br />
                          - 불량회원의 부정 이용 방지와 비인가 사용방지
                          <br />
                          - 분쟁조정을 위한 기록보존
                          <br />- 불만처리 등 민원처리, 고지사항 전달
                        </div>
                        <p>[선택]</p>
                        <div>고객맞춤형 서비스제공(마일리지 등)</div>
                      </dd>
                    </dl>
                  </div>
                </li>
                <li></li>
              </ul>
              <div className="terms-footer">
                <p>부칙 (적용일자)</p>
                <div>이 약관은 2024년 6월 28일부터 시행됩니다.</div>
                <ul className="list-dot">
                  <li>- 이용약관 버전번호 : V1.1</li>
                  <li>- 이용약관 시행일자 : 2024. 6. 28</li>
                  <li>- 이용약관 최종변경일자 : 2024. 6. 28</li>
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
                확인
              </Button>
            </Box>
          </Box>
          {/* [E]BtnsGroup */}
        </DialogActions>
      </Dialog>
      {/* [E]bizplay이용약관 */}
    </>
  );
};

export default MLG020100;
