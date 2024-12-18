import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  DialogTitle,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { CheckCircle } from "@untitled-ui/icons-react";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Unstable_Grid2";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import BtnsGroup from "src/components/common/BtnsGroup";
import CustomizedSnackbars from "src/components/common/CustomizedSnackbars";
import LayoutSub from "src/templates/layout/LayoutSub";
// 
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';

const SamplePopup = () => {
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

  // [팝업]confirm
  const [OpenConfirmLayout, setOpenConfirmLayout] = React.useState(false);
  const handleClickOpenStateLayout =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpenConfirmLayout(true);
      setScroll(scrollType);
    };
  const handleCloseConfirmLayout = () => {
    setOpenConfirmLayout(false);
  };

  // [팝업]시간선택 240926 kjs
  const [OpenTimeLayout, setOpenTimeLayout] = React.useState(false);
  const handleClickOpenStateLayout1 =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpenTimeLayout(true);
      setScroll(scrollType);
    };
  const handleCloseConfirmLayout1 = () => {
    setOpenTimeLayout(false);
  };

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

  // [팝업]Alert
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    drawerAlert: false, //Alert
  });
  const toggleDrawer = (drawerId: any, open: any, event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen({ ...isDrawerOpen, [drawerId]: open });

    if (open) {
      const headerHeight =
        document.getElementById("drawer-header")?.offsetHeight || 0;
      setDrawerHeaderHeight(headerHeight);
    }
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
        <title>팝업</title>
      </Head>
      <LayoutSub>
        <Paper className="ui-paper">
          <Box className="ui-box">
            <Grid container spacing={2}>
              <Grid xs={12}>
                 {/* [S][팝업]TimePicker - 시간선택 240926 kjs */}
                 <Button onClick={handleClickOpenStateLayout1("paper")}>
                  [Dialog : 시간선택]
                  {/* <TimePicker label="Basic time picker" /> */}
                </Button>

                {/* [S][팝업]TimePicker - 시간선택 240926 kjs */}
                <Dialog
                  open={OpenTimeLayout}
                  onClose={handleCloseConfirmLayout1}
                  // scroll={scroll}
                  className="bp-dialog dialog-PrintLayout pd0"
                  //maxWidth="sm" // 사이즈:xs(444px),sm(600px),md(900px),lg(1200px),xl(1200px 이상) 예외 전체 스크린타입 별도 선언:fullScreen
                  sx={{ "& .MuiDialog-paper": { maxWidth: 230 } }}
                >
                  <DialogContent
                    dividers={scroll === "paper"}
                    className="dialog-body"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    <div className="ui-inner">
                      {/* [S]result-confirm-data */}
                      <div className="result-confirm-data bp-MultiSectionDigitalClock">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
                              {/* <DemoItem label="Digital clock">
                                <DigitalClock />
                              </DemoItem> */}
                              <DemoItem  label="시간선택">
                                <MultiSectionDigitalClock />
                              </DemoItem>
                            </DemoContainer>
                          </LocalizationProvider>
                        {/* <DemoItem label={'"hours", "minutes" and "seconds"'}>
                          <MultiSectionDigitalClock views={['hours', 'minutes', 'seconds']} />
                        </DemoItem> */}
                      </div>
                      {/* [E]result-confirm-data */}
                    </div>

                    <DialogActions className="dialog-footer">
                      <Box className="btns-group">
                        <Box className="inner">
                          <Button
                            variant="contained"
                            size="medium"
                            className="btn-medium color-neutral"
                            onClick={handleCloseConfirmLayout1}
                          >
                            취소
                          </Button>
                          <Button
                            variant="contained"
                            size="medium"
                            className="btn-medium"
                          >
                            확인
                          </Button>
                        </Box>
                      </Box>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
                {/* [E][팝업]TimePicker - 시간선택 240926 kjs */}


                {/* [S][팝업]Dialog 공통 : Avatar , message */}
                <Button onClick={handleClickOpenStateLayout("paper")}>
                  [Dialog 공통 : Avatar , message]
                </Button>
                <Dialog
                  open={OpenConfirmLayout}
                  onClose={handleCloseConfirmLayout}
                  scroll={scroll}
                  className="bp-dialog dialog-PrintLayout"
                  //maxWidth="sm" // 사이즈:xs(444px),sm(600px),md(900px),lg(1200px),xl(1200px 이상) 예외 전체 스크린타입 별도 선언:fullScreen
                  sx={{ "& .MuiDialog-paper": { maxWidth: 500 } }}
                >
                  <DialogContent
                    dividers={scroll === "paper"}
                    className="dialog-body"
                    ref={descriptionElementRef}
                    tabIndex={-1}
                  >
                    <div className="ui-inner">
                      {/* [S]result-confirm-data */}
                      <div className="result-confirm-data">
                        <div className="message-group">
                          <Avatar
                            className="bp-avatar size-medium color-twotone color-error"
                            aria-label="알림"
                          >
                            <InfoOutlinedIcon
                              className="bp-icon medium color-error"
                              color="error"
                            />
                          </Avatar>
                          <Avatar
                            className="bp-avatar size-medium color-twotone"
                            aria-label="알림"
                          >
                            <CheckCircle className="bp-icon medium" />
                          </Avatar>

                          <p className="message">등록된 계좌가 없습니다!</p>
                          <p className="message-desc">
                            출장비를 지급받기 위해
                            <br />
                            계좌 정보를 등록해 주세요.
                          </p>
                        </div>
                      </div>
                      {/* [E]result-confirm-data */}
                    </div>
                  </DialogContent>

                  <DialogActions className="dialog-footer">
                    <Box className="btns-group">
                      <Box className="inner">
                        <Button
                          variant="contained"
                          size="medium"
                          className="btn-medium color-neutral"
                          onClick={handleCloseConfirmLayout}
                        >
                          취소
                        </Button>
                        <Button
                          variant="contained"
                          size="medium"
                          className="btn-medium"
                        >
                          계좌 정보 등록
                        </Button>
                      </Box>
                    </Box>
                  </DialogActions>
                </Dialog>
                {/* [E][팝업]Dialog 공통 : Avatar , message */}
                <CustomizedSnackbars />
                {/* [S][팝업] full-size  */}
                <Button onClick={handleClickOpenFullPaper("paper")}>
                  [Dialog : Full-paper, 하단버튼fixed]
                </Button>
                <Dialog
                  fullScreen
                  open={OpenFullPaper}
                  onClose={handleCloseFullPaper}
                  scroll={scroll}
                  className="bp-dialog dialog-full-paper"
                >
                  <DialogTitle component="div" className="bp-dialog-header">
                    {/* [S]<HeaderDialog /> */}
                    <AppBar position="fixed" className="sub-header">
                      <Box className="inner">
                        <div className="left-area">
                          {/* <Button
                            size="medium"
                            className="btn-text-primary"
                            startIcon={
                              <ArrowNarrowLeft
                                fontSize="medium"
                                className="bp-icon medium"
                              />
                            }
                          ></Button> */}
                        </div>
                        <div className="center-area">
                          <Typography variant="h2" className="bp-title">
                            서브타이틀(h2)
                          </Typography>
                        </div>

                        <div className="right-area">
                          <IconButton
                            className="btn-icon-only"
                            size="small"
                            aria-label="닫기"
                            onClick={handleCloseFullPaper}
                          >
                            <GridCloseIcon
                              fontSize="small"
                              className="bp-icon"
                            />
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
                      내용contents
                      <br />
                      하단버튼fixed
                    </div>
                  </DialogContent>
                  <DialogActions className="dialog-footer">
                    {/* [S]<BtnsGroup /> */}
                    <Box className="btns-group">
                      <Box className="inner">
                        <Button
                          variant="contained"
                          size="large"
                          className="btn-xlarge"
                          disabled
                        >
                          다음
                        </Button>
                      </Box>
                    </Box>
                    {/* [E]BtnsGroup */}
                  </DialogActions>
                </Dialog>
                {/* [E][팝업] full-size  */}
              </Grid>
            </Grid>

            {/* [w/o]alert backup */}
            {/* <Button onClick={(e) => toggleDrawer("drawerAlert", true, e)}>Alert 완료 Sample</Button>
            <SwipeableDrawer
              anchor="top"
              open={isDrawerOpen.drawerAlert}
              onClose={(e) => toggleDrawer("drawerAlert", false, e)}
              onOpen={(e) => toggleDrawer("drawerAlert", true, e)}
              className="bp-alert-drawer"
            >
              <Alert
                severity="success"
                className="bp-alert alert-success"
                icon={
                  <CheckCircle fontSize="medium" className="bp-icon medium" />
                }
              >
                <div className="alert-header">
                  <div className="left">
                    <h1 className="title">완료</h1>
                  </div>
                  <div className="right"></div>
                </div>
                <div className="alert-body">정상적으로 처리되었습니다.</div>
              </Alert>
            </SwipeableDrawer> */}
          </Box>
        </Paper>
        <BtnsGroup />
      </LayoutSub>
    </>
  );
};

export default SamplePopup;
