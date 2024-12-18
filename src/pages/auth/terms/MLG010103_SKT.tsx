import { MLG010103SKT } from "@bizplay/ui-common";
import {
  AppBar,
  Box,
  Button,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";

const MLG010103_SKT = () => {
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [openDialog, setOpenDialog] = useState(true);
  const descriptionElementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (openDialog) {
      descriptionElementRef.current?.focus();
    }
  }, [openDialog]);

  const handleCloseDialog = () => setOpenDialog(false);

  const handleAgree = () => {
    alert("동의가 완료되었습니다.");
    handleCloseDialog();
  };

  return (
    <>
      <Head>
        <title>SKT 개인정보 수집 이용 동의</title>
      </Head>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={handleCloseDialog}
        scroll={scroll}
        className="bp-dialog dialog-full-paper"
      >
        <DialogTitle component="div" className="bp-dialog-header">
          <AppBar position="fixed" className="sub-header">
            <Box className="inner">
              <div className="center-area">
                <Typography variant="h2">
                  개인정보 수집 이용 취급 위탁동의
                </Typography>
              </div>
              <div className="right-area">
                <IconButton
                  className="btn-icon-only"
                  size="small"
                  aria-label="닫기"
                  onClick={handleCloseDialog}
                >
                  <GridCloseIcon fontSize="small" className="bp-icon" />
                </IconButton>
              </div>
            </Box>
          </AppBar>
        </DialogTitle>

        <DialogContent
          dividers={scroll === "paper"}
          className="dialog-body"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
          <div>
            <MLG010103SKT />
          </div>
        </DialogContent>

        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner">
              <Button
                variant="contained"
                size="large"
                className="btn-xlarge"
                onClick={handleAgree}
              >
                동의하기
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MLG010103_SKT;
