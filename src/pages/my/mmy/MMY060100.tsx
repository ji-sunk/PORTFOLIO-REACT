import {
  AppBar,
  Autocomplete,
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
import "swiper/css";

const selectOption = [
  { label: "label1", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

import DialogActions from "@mui/material/DialogActions";

const MMY060100 = () => {
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
        <title>즐겨찾기 등록</title>
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
                <Typography variant="h3">즐겨찾기 등록</Typography>
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
          {/* address-search-area */}
          <div className="address-search-area">
            <div className="light-box">
              <div className="ui-box">
                <div className="fields-group">
                  <Autocomplete
                    includeInputInList
                    size="medium"
                    id="select1"
                    fullWidth
                    autoHighlight
                    options={selectOption}
                    renderInput={(params) => (
                      <TextField
                        variant="filled"
                        size="medium"
                        label="구분"
                        placeholder=""
                        {...params}
                      />
                    )}
                  />
                </div>

                <div className="fields-group">
                  <div className="item-field">
                    <TextField label="목적지명" placeholder="" fullWidth />
                  </div>
                </div>
                <div className="fields-group">
                  <div className="item-field">
                    <TextField label="주소" placeholder="" fullWidth />
                  </div>
                </div>
              </div>
            </div>

            {/* [S]검색 결과 없을때 */}
            {/* <div className="light-box full-height als-center">
              <div className="ui-box">
                <NoData />
              </div>
            </div> */}
            {/* [E]검색 결과 없을때 */}
          </div>
          <DialogActions className="dialog-footer">
            <Box className="btns-group">
              <Box className="inner">
                <Button variant="contained" size="large" className="btn-xlarge">
                  저장
                </Button>
              </Box>
            </Box>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MMY060100;
