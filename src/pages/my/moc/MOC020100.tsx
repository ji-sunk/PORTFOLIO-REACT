import {
  AccordionDetails,
  AppBar,
  Box,
  Button,
  DialogActions,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
} from "@mui/material";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";

const MOC020100 = () => {
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
        <title>내차관리 | 자차목록</title>
      </Head>

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
                <Typography variant="h3">자차목록</Typography>
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
          className="dialog-body type-pages mycar-list"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          {/* modify: user-list-search-area */}
          <div className="user-list-search-area">
            <div className="light-box">
              <div className="ui-box">
                <div className="fields-group">
                  <div className="item-field">
                    <TextField label="차종명" placeholder="" fullWidth />
                  </div>
                  <div className="item-field">
                    <TextField label="차주명" placeholder="" fullWidth />
                  </div>
                  <div className="item-field">
                    <TextField label="차량번호" placeholder="" fullWidth />
                  </div>
                  <div className="item-field">
                    <TextField label="차량별칭" placeholder="" fullWidth />
                  </div>
                  <AccordionDetails className="acc-body">
                    <List className="list-dot">
                      <ListItem>별칭은 10자 이내로 입력해주세요</ListItem>
                      <ListItem>별칭 미입력시 모델명이 노출됩니다.</ListItem>
                    </List>
                  </AccordionDetails>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>

        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner side">
              <Button
                variant="contained"
                size="large"
                className="btn-xlarge color-neutral"
              >
                취소
              </Button>
              <Button variant="contained" size="large" className="btn-xlarge">
                차량등록
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MOC020100;
