import CancelIcon from "@mui/icons-material/Cancel";
import {
  AppBar,
  Box,
  Button,
  DialogTitle,
  IconButton,
  InputAdornment,
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
import RadioList from "src/components/common/RadioList";

const MBN010300 = () => {
  const clearSearch = () => {
    setFilteredLocations("");
  };

  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [filteredLocations, setFilteredLocations] = useState("");

  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };

  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(true);
  const [selected2, setSelected2] = React.useState(true);
  const [selected3, setSelected3] = React.useState(true);
  const [selected4, setSelected4] = React.useState(false);
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
        <title>프로젝트 조회</title>
      </Head>
      {/* [S]프로젝트 조회 - 공통 */}
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
                <Typography variant="h3">프로젝트 조회</Typography>
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
          {/* [S]search-area-list */}
          <div className="search-area-list">
            <div className="light-box">
              <div className="ui-box">
                <div className="item-field">
                  <div className="fields-group">
                    <TextField
                      variant="filled"
                      size="medium"
                      data-cy="searchBox"
                      placeholder="검색어를 입력해 주세요."
                      className="bp-search"
                      fullWidth
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
                          </InputAdornment>
                        ),
                      }}
                    />
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
                      프로젝트 조회
                    </Button>
                  </Box>
                </Box>
                {/* [E]BtnsGroup */}
              </div>
            </div>

            {/* [S]검색 결과 */}
            <div className="light-box full-height">
              <div className="ui-box address-list">
                <RadioList />
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
          </div>
          {/* [E]search-area-list */}
          {/* [S]<BtnsGroup /> */}
          <Box className="btns-group">
            <Box className="inner">
              <Button variant="contained" size="large" className="btn-xlarge">
                확인
              </Button>
            </Box>
          </Box>
          {/* [E]BtnsGroup */}
        </DialogContent>
      </Dialog>
      {/* [E]직주소 검색 */}
    </>
  );
};

export default MBN010300;
