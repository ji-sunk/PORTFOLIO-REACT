import {
  AppBar,
  Box,
  Chip,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import { Download01 } from "@untitled-ui/icons-react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";

const MNO010000 = () => {
  const fileInputRef2 = useRef(null);
  const [fileName, setFileName] = useState("");
  const handleButtonClick2 = () => {
    fileInputRef2.current.click();
  };
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
        <title>공지사항 상세</title>
      </Head>
      {/* [S]공지사항 상세 */}
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
                <Typography variant="h3">공지사항 상세</Typography>
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
          <div className="ui-inner">
            {/* [D] "light-box", "fill-area" */}
            <div className="light-box fill-area">
              <div className="board-wrap type-view">
                <Box className="card-noti">
                  <div className="ui-box">
                    <div className="flex-row">
                      <Chip
                        label="중요"
                        size="small"
                        color="error"
                        variant="outlined"
                        className="bp-chip color-twotone color-error"
                      />
                      <div className="txt">
                        시스템 작업에 따른 서비스 일시중단 안내
                      </div>
                    </div>
                    <div className="item-date">
                      <Box className="txt">2024.05.01</Box>
                    </div>
                  </div>
                </Box>
                <Box className="item-detail ui-box">
                  <div className="txt-data">
                    공지사항 내용이 노출됩니다. 공지사항 내용이 노출됩니다.
                    공지사항 내용이 노출됩니다. 공지사항 내용이 노출됩니다.
                    공지사항 내용이 노출됩니다. 공지사항 내용이 노출됩니다.
                    공지사항 내용이 노출됩니다. 공지사항 내용이 노출됩니다.
                    공지사항 내용이 노출됩니다. 공지사항 내용이 노출됩니다.
                    공지사항 내용이 노출됩니다. 공지사항 내용이 노출됩니다.
                  </div>
                  {/* [S]파일 첨부 */}
                  <List className="bp-file-list">
                    <ListItem className="item">
                      <label className="file-name is-readonly">
                        <Box className="name">
                          울산1공장기기정비점검출장_2차수정울산1공장기기정비점검출장2차수정울산1공장기기정비점검출장2차수정
                        </Box>

                        <Box className="ext">.pdf</Box>
                        <div className="right-area">
                          <Download01
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </div>
                      </label>
                    </ListItem>
                    <ListItem className="item">
                      <label className="file-name is-readonly">
                        <Box className="name">
                          울산1공장기기정비점검출장_2차수정
                        </Box>

                        <Box className="ext">.pdf</Box>
                        <div className="right-area">
                          <Download01
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </div>
                      </label>
                    </ListItem>
                  </List>
                  {/* [E]파일 첨부 */}
                </Box>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      {/* [E]공지사항 상세 */}
    </>
  );
};

export default MNO010000;
