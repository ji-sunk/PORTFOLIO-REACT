import {
  AppBar,
  Box,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";

const MMA010301 = () => {
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
        <title>매장정보</title>
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
                <Typography variant="h3">매장정보</Typography>
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
          <div className="ui-paper flex-wrap">
            {/* [S] */}
            <div className="light-box full-height">
              {/* [S]store-info-wrap */}
              <div className="store-info-wrap">
                <div className="ui-box inner-sides">
                  <img src="/assets/images/menu/menu-item3.svg" alt="" />
                  <div>
                    <Typography variant="h3">우주라이크커피양정점</Typography>
                    <Box className="cate">음식점/카페</Box>
                  </div>
                </div>
                {/* [E]pay-info */}
                <div className="divider-top">
                  <table className="franchise-tbl ui-box">
                    <tbody>
                      <tr>
                        <th className="left-area">
                          <Box className="txt">주소</Box>
                        </th>
                        <td className="right-area">
                          <Box className="txt">
                            서울시 영등포구 영신로 220 KNK 디지털타워 1803호
                            (영등포동8가)
                          </Box>
                        </td>
                      </tr>
                      <tr>
                        <th className="left-area">
                          <Box className="txt">대표전화</Box>
                        </th>
                        <td className="right-area tell">
                          <Box className="txt">052-123-1234</Box>
                        </td>
                      </tr>
                      <tr>
                        <th className="left-area">
                          <Box className="txt">대표자명</Box>
                        </th>
                        <td className="right-area">
                          <Box className="txt">송상헌</Box>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* [S]store-info-wrap */}
            </div>
            {/* [E] */}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MMA010301;
