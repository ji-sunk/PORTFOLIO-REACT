import {
  AppBar,
  Box,
  DialogTitle,
  IconButton,
  DialogActions,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";
import { SearchSm } from "@untitled-ui/icons-react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import NoData from "src/components/common/NoData";
import * as React from "react";
import { Close } from "@mui/icons-material";
import { useState } from "react";

const MDO010502 = () => {
  // const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
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
        <title>정산 | 영수증 용도검색</title>
      </Head>

       {/* [S]영수증 용도검색 */}
       <Dialog
        fullScreen
        open
        //   open={OpenFullPaper}
        onClose={handleCloseFullPaper}
        scroll={scroll}
        className="bp-dialog dialog-full-paper"
      >
        <DialogTitle component="div" className="bp-dialog-header">
          {/* [S]<HeaderDialog /> */}
          <AppBar position="fixed" className="sub-header">
            <Box className="inner">
              <div className="center-area">
                <Typography variant="h3">용도</Typography>
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

        <DialogContent className="receipt-use">
          {/* [S] defautl : "ui-paper" , flex-wrap */}
          <div className="ui-paper flex-wrap">
            <div className="item-field ui-box">
              {/* <TextField
                // onClick={}
                className="type-search"
                type="button"
                defaultValue=""
                hiddenLabel
                label="용도"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchSm
                        fontSize="medium"
                        className="bp-icon medium icon-search"
                      />
                    </InputAdornment>
                  ),
                }}
                fullWidth
              /> */}
              <TextField label="용도" placeholder="" fullWidth />
              <Box className="btns-group">
                <Button variant="contained"  size="large" 
                    className="btn-xlarge" fullWidth>
                  검색하기
                </Button>
              </Box>
            </div>
            <div className="divider-top"></div>
            <Box className="drawer-cont ui-box">
              <div className="box-inner">
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className="fullWidth"
                >
                  <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    defaultValue="radioCard-01"
                    name="radio buttons group"
                    value={RadioValueCard}
                    className="bp-btns-group fullWidth list-radio"
                    onChange={handleChangeradioCard}
                    row
                  >
                    <FormControlLabel
                      className={`btn-form-type ${
                        RadioValueCard === "radioCard-02" ? "is-active" : ""
                      }`}
                      control={<Radio value="radioCard-02" />}
                      label="교통비"
                    />
                    <FormControlLabel
                      className={`btn-form-type ${
                        RadioValueCard === "radioCard-03" ? "is-active" : ""
                      }`}
                      control={<Radio value="radioCard-03" />}
                      label="숙박비"
                    />
                    <FormControlLabel
                      className={`btn-form-type ${
                        RadioValueCard === "radioCard-04" ? "is-active" : ""
                      }`}
                      control={<Radio value="radioCard-04" />}
                      label="경조자차본인부담금"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Box>
            
          </div>
          {/* [E]ui-paper flex-wrap */}
        </DialogContent>
        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner">
              <Button variant="contained" 
                size="large" 
                className="btn-xlarge"
              >
                확인
              </Button>
            </Box>
          </Box>
        </DialogActions>
      </Dialog>
      {/* [E]영수증 용도검색 */}
    </>
  );
};

export default MDO010502;
