import {
  AppBar,
  Avatar,
  Box,
  Button,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import NoData from "src/components/common/NoData";

const MBN010100 = () => {
  const [selected, setSelected] = React.useState(false);
  // [팝업]기본 팝업
  const [openDialog, setOpenDialog] = React.useState(false);
  const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("body");
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
        <title>직원 검색 - 출장</title>
      </Head>
      {/* [S]직원 검색 - 출장 */}
      <Dialog
        fullScreen
        open
        //   open={OpenFullPaper}
        onClose={handleCloseFullPaper}
        scroll={scroll}
        className="bp-dialog dialog-full-paper type-transparent"
      >
        <DialogTitle component="div" className="bp-dialog-header">
          {/* [S]<HeaderDialog /> */}
          <AppBar position="fixed" className="sub-header">
            <Box className="inner">
              <div className="center-area">
                <Typography variant="h3">직원검색</Typography>
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
          dividers={scroll === "body"}
          className="dialog-body type-pages"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {/* modify: user-list-search-area */}
          <div className="user-list-search-area">
            <div className="light-box">
              <div className="ui-box">
                <div className="fields-group">
                  <div className="item-field">
                    <TextField label="이름" placeholder="" fullWidth />
                  </div>
                  <div className="item-field">
                    <TextField label="직급" placeholder="" fullWidth />
                  </div>
                  <div className="item-field">
                    <TextField label="부서" placeholder="" fullWidth />
                  </div>
                  <div className="item-field">
                    <TextField label="사번" placeholder="" fullWidth />
                  </div>
                </div>
                {/* [S]<BtnsGroup /> */}
                <Box className="btns-group">
                  <Box className="inner">
                    <Button
                      variant="contained"
                      size="medium"
                      className="btn-medium"
                    >
                      직원 검색
                    </Button>
                  </Box>
                </Box>
                {/* [E]BtnsGroup */}
              </div>
            </div>

            {/* modify: "full-height" added, ui-box  */}
            {/* [S]검색 결과 */}
            <div className="light-box full-height">
              <div className="item-field user-list-area">
                <div className="inner-sides" aria-selected="true">
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
                  <div className="right-area"></div>
                </div>
                <div className="inner-sides" aria-selected="true">
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
                  <div className="right-area"></div>
                </div>
                <div className="inner-sides" aria-selected="false">
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
            {/* [E]검색 결과 */}

            {/* [S]검색 결과 없을때 */}
            <div className="light-box full-height als-center">
              <div className="ui-box">
                <NoData />
              </div>
            </div>
            {/* [E]검색 결과 없을때 */}
            {/* [S]<BtnsGroup /> */}
            <Box className="btns-group">
              <Box className="inner">
                <Button variant="contained" size="large" className="btn-xlarge">
                  확인
                </Button>
              </Box>
            </Box>
            {/* [E]BtnsGroup */}
          </div>
        </DialogContent>
      </Dialog>
      {/* [E]직원 검색 */}
    </>
  );
};

export default MBN010100;
