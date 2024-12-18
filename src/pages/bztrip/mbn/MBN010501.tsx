import PlaceIcon from "@mui/icons-material/Place";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet as Head } from "react-helmet";
import NoData from "src/components/common/NoData";

const MBN010501 = () => {
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
        <title>주소 검색 - 공통</title>
      </Head>
      {/* [S]주소 검색 - 공통 */}
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
                <Typography variant="h3">주소검색</Typography>
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
                  <div className="item-field">
                    <TextField label="주소검색" placeholder="" fullWidth />
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
                      주소 검색
                    </Button>
                  </Box>
                </Box>
                {/* [E]BtnsGroup */}
              </div>
            </div>

            {/* modify: "full-height" added, ui-box  */}
            {/* [S]검색 결과 */}
            <div className="light-box full-height">
              <div className="ui-box address-list">
                <Typography variant="h3" className="bp-title">
                  즐겨찾기
                </Typography>
                <List className="ranks-group">
                  {/* [S]loop */}
                  <ListItem className="item">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Avatar
                          sizes="small"
                          className="bp-avatar size-small type-outlined color-success"
                          aria-label="사업장"
                        >
                          <Box>사업장</Box>
                        </Avatar>
                        <dl>
                          <dt>
                            <Box className="txt">
                              메리어트관 제주신화월드 호텔앤리조트
                            </Box>
                          </dt>
                          <dd>
                            스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                            업그레이드
                          </dd>
                        </dl>
                      </div>
                      <div className="right-area">
                        <ToggleButton
                          value="button"
                          selected={selected}
                          onChange={() => {
                            setSelected(!selected);
                          }}
                          className="btn-icon-toggle icon-bookmark"
                        >
                          <StarRateRoundedIcon fontSize="medium" />
                        </ToggleButton>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="item">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Avatar
                          sizes="small"
                          className="bp-avatar size-small type-outlined color-blue"
                          aria-label="협력사"
                        >
                          <Box>협력사</Box>
                        </Avatar>
                        <dl>
                          <dt>
                            <Box className="txt">
                              메리어트관 제주신화월드 호텔앤리조트
                            </Box>
                          </dt>
                          <dd>
                            스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                            업그레이드
                          </dd>
                        </dl>
                      </div>
                      <div className="right-area">
                        <ToggleButton
                          value="button"
                          selected={selected2}
                          onChange={() => {
                            setSelected2(!selected2);
                          }}
                          className="btn-icon-toggle icon-bookmark"
                        >
                          <StarRateRoundedIcon fontSize="medium" />
                        </ToggleButton>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="item">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Avatar
                          sizes="small"
                          className="bp-avatar size-small type-only-icon"
                          aria-label="pin"
                        >
                          <PlaceIcon className="bp-icon large" />
                        </Avatar>

                        <Box className="txt">충남 아산시 현대로 1077-1</Box>
                      </div>
                      <div className="right-area">
                        <ToggleButton
                          value="button"
                          selected={selected3}
                          onChange={() => {
                            setSelected3(!selected3);
                          }}
                          className="btn-icon-toggle icon-bookmark"
                        >
                          <StarRateRoundedIcon fontSize="medium" />
                        </ToggleButton>
                      </div>
                    </div>
                  </ListItem>
                  <ListItem className="item">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Avatar
                          sizes="small"
                          className="bp-avatar size-small type-only-icon"
                          aria-label="pin"
                        >
                          <PlaceIcon className="bp-icon large" />
                        </Avatar>

                        <Box className="txt">충남 아산시 현대로 1077-1</Box>
                      </div>
                      <div className="right-area">
                        <ToggleButton
                          value="button"
                          selected={selected4}
                          onChange={() => {
                            setSelected4(!selected4);
                          }}
                          className="btn-icon-toggle icon-bookmark"
                        >
                          <StarRateRoundedIcon fontSize="medium" />
                        </ToggleButton>
                      </div>
                    </div>
                  </ListItem>
                </List>
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
          {/* [SE]<BtnsGroup /> */}
        </DialogContent>
      </Dialog>
      {/* [E]직주소 검색 */}
    </>
  );
};

export default MBN010501;
