import {
  AppBar,
  Box,
  DialogTitle,
  IconButton,
  Typography,
  DialogActions,
  Button,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

import React, { useState } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import NoData from "src/components/common/NoData";

const MDO010101 = () => {
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
        <title>정산 | 영수증 상세</title>
      </Head>

       {/* [S]영수증 상세 상세 */}
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
                <Typography variant="h3">영수증 상세</Typography>
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

        <DialogContent>
          {/* [S] defautl : "ui-paper" , flex-wrap */}
          <div className="ui-paper flex-wrap">
            {/* [S] */}
            <div className="light-box full-height">
              {/* [S]receipt-wrap */}
              <div className="receipt-wrap">
                {/* [S]pay-info */}
                <div className="pay-info ui-box">
                  <div className="inner-sides">
                    <div className="right-area">
                      <Box className="item-data txt-desc">
                        결제일시 2024.05.12 12:30
                      </Box>
                    </div>
                  </div>
                  <Box className="usage">
                    롯데호텔 울산
                  </Box>
                  <div className="type-amount">
                    <div className="number-area">
                      <Box className="flex-row">
                        <Box component="span" className="point-large">
                          10,000,000,000
                          <span className="txt-currency">원</span>
                        </Box>
                      </Box>
                    </div>
                  </div>
                </div>
                {/* [E]pay-info */}
                
                <div className="divider-top">
                  <div className="receipt-info-tbl ui-box">
                    <Typography variant="h3">공유대상자</Typography>
                    <div className="item-field">
                      <dl className="inner-sides">
                        <dt className="left-area">
                          <div className="txt">김현대</div>
                        </dt>
                        <dd className="right-area">
                          <Box className="txt">160,000 원</Box>
                        </dd>
                      </dl>
                      <dl className="inner-sides">
                        <dt className="left-area">
                          <div className="txt">차현대</div>
                        </dt>
                        <dd className="right-area">
                          <Box className="txt">160,000 원</Box>
                        </dd>
                      </dl>
                      <dl className="inner-sides">
                        <dt className="left-area">
                          <div className="txt">박현대</div>
                        </dt>
                        <dd className="right-area">
                          <Box className="txt">160,000 원</Box>
                        </dd>
                      </dl>
                      <div className="bp-line"></div>
                    </div>
                  </div>  
                  <div className="receipt-info-tbl ui-box">
                    <Typography variant="h3">첨부파일</Typography>
                    <div className="item-field image-wrap">
                      <ul className="list-img">
                        <li>
                          <div className="img-group">
                            <div className="img-box">
                              <img
                                src="/assets/images/tmp-receipt.png"
                                alt="영수증"
                                loading="lazy"
                              />
                            </div>
                            {/* <IconButton size="small" className="btn-clear">
                              <CancelIcon
                                fontSize="small"
                                className="bp-icon small"
                              />
                            </IconButton> */}
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
              {/* [E] receipt-wrap */}
            </div>
          </div>
          {/* [E]ui-paper flex-wrap */}
        </DialogContent>

        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner side">
              <Button variant="contained" 
                size="large" 
                className="btn-xlarge"
              >
                확인
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
      {/* [E]영수증 상세 상세 */}
    </>
  );
};

export default MDO010101;
