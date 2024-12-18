import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import { Alert, Avatar, Button } from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Grid from "@mui/material/Unstable_Grid2";
import { NextPage } from "next";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const DialogLayer: NextPage = () => {
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

  // [팝업]프로젝트 상태 선택
  const [openPrintLayout, setOpenPrintLayout] = React.useState(false);
  const handleClickOpenStateLayout =
    (scrollType: DialogProps["scroll"]) => () => {
      setOpenPrintLayout(true);
      setScroll(scrollType);
    };
  const handleCloseStateLayout = () => {
    setOpenPrintLayout(false);
  };

  // [레이어]상세 레이어
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    drawerAlert: false, //Alert
  });
  const toggleDrawer = (drawerId, open) => (event) => {
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
        <title>bzp5-팝업</title>
      </Head>
      <LayoutSub>
        <Grid container spacing={2}>
          <Grid xs={12}>
            {/* [S][팝업]리포트 보관 */}
            <Button onClick={handleClickOpenStateLayout("paper")}>
              프로젝트(Dialog:501-008 리포트 보관)
            </Button>

            <Dialog
              open={openPrintLayout}
              onClose={handleCloseStateLayout}
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
                  {/* [S]리포트 보관 */}
                  <div className="no-data result-success-data">
                    <div className="message-group">
                      <Avatar
                        className="bp-avatar size-small color-twotone color-primary"
                        aria-label="알림"
                      >
                        <PriorityHighRoundedIcon className="bp-icon small" />
                      </Avatar>
                      <p className="message">리포트 보관</p>
                      <p className="message-sub">
                        부서별 현황 리포트 (부서,일별,2023-10-07 ~ 2023-10-16)를
                        <br />
                        보관하시겠습니까?
                      </p>
                    </div>
                  </div>
                  {/* [E]리포트 보관 */}
                </div>
              </DialogContent>
              <DialogActions className="dialog-footer">
                <div className="ui-inner">
                  <div className="left"></div>
                  <div className="center">
                    <Button
                      size="medium"
                      className="btn-text-primary"
                      onClick={handleCloseStateLayout}
                    >
                      취소
                    </Button>
                    <Button variant="contained" size="medium">
                      확인
                    </Button>
                  </div>
                  <div className="right"></div>
                </div>
              </DialogActions>
            </Dialog>
            {/* [E][팝업]리포트 보관 */}
          </Grid>
        </Grid>
        <Button onClick={toggleDrawer("drawerAlert", true)}>
          Alert 완료 Sample
        </Button>
        <SwipeableDrawer
          anchor="top"
          open={isDrawerOpen.drawerAlert}
          onClose={toggleDrawer("drawerAlert", false)}
          onOpen={toggleDrawer("drawerAlert", true)}
          className="bp-alert-drawer"
        >
          <Alert severity="success" className="bp-alert alert-success">
            <div className="alert-header">
              <div className="left">
                <h1 className="title">완료</h1>
              </div>
              <div className="right"></div>
            </div>
            <div className="alert-body">정상적으로 처리되었습니다.</div>
          </Alert>
        </SwipeableDrawer>
      </LayoutSub>
    </>
  );
};
export default DialogLayer;
