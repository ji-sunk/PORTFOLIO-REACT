import { Box, Button } from "@mui/material";

import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";

const SignPop = () => {
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
        <title>회원가입안내 | 로그인</title>
      </Head>
      {/* [S][팝업]회원가입안내 */}
      <Button onClick={handleClickOpenStateLayout("paper")}>
        [회원가입안내]
      </Button>
      <Dialog
        // open={OpenConfirmLayout}
        open
        onClose={handleCloseConfirmLayout}
        scroll={scroll}
        className="bp-dialog"
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
                <p className="message">
                  비플페이 회원가입을 하셔야
                  <br />
                  서비스 이용이 가능합니다.
                </p>
              </div>
            </div>
            {/* [E]result-confirm-data */}
          </div>
        </DialogContent>
        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner">
              <Button variant="contained" size="medium" className="btn-medium">
                확인
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
      {/* [E]회원가입안내 */}
    </>
  );
};

export default SignPop;
