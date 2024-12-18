import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  FormControl,
  Paper,
  Radio,
  RadioGroup,
  List,
  ListItem,
  Checkbox,
  AppBar,
  Chip,
  DialogTitle,
  IconButton,
  Typography,
  DialogActions,
} from "@mui/material";
import { Calendar, Settings04 } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

import React, { useState } from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { GridCloseIcon } from "@mui/x-data-grid";
import { useEffect, useRef } from "react";
import NoData from "src/components/common/NoData";

const MDO010200 = () => {
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
        <title>출장 정산서 | 출장계획서 목록</title>
      </Head>

      {/* [S]출장 정산서 | 출장계획서 목록*/}
      <Dialog
        fullScreen
        open
        //   open={OpenFullPaper}
        onClose={handleCloseFullPaper}
        scroll={scroll}
        className="bp-dialog dialog-full-paper bg-type"
      >
        <DialogTitle component="div" className="bp-dialog-header">
          {/* [S]<HeaderDialog /> */}
          <AppBar position="fixed" className="sub-header">
            <Box className="inner">
              <div className="center-area">
                <Typography variant="h3">계획서 목록</Typography>
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
          dividers={scroll === "paper"}
          className="dialog-body"
          ref={descriptionElementRef}
          tabIndex={-1}
        >
        <div className="ui-inner">
          {/* [S] defautl : "ui-paper" , bztrip-wrap */}
          <div className="ui-paper bztrip-wrap">

            {/* [S]fields-group list-plan : 계획서 목록 list-plan-area */}
          <FormControl className="form-wd">
            <RadioGroup
                aria-labelledby="radio-buttons-group"
                name="radio buttons group"
                className="flex-row"
                defaultValue="radio01-01"
              >
              <div className="fields-group list-plan list-plan-area">
                {/* [S]loop */}
                <div className="ui-box">
                  <Card>
                    <CardContent>
                      <List className="bztrip-list">
                        <ListItem className="item">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel value="radio01-01" label="" control={<Radio />} />
                            </div>
                            <div className="right-area">
                              <div className="item-date">출장일 2024.04.01</div>
                            </div>
                          </div>
                          {/* [S]link-block */} 
                          <Link to="#" className="link-block">
                            <div className="title-area inner-sides">
                              <div className="txt bp-ellipsis">
                                도장재 품질점검 협력사 2차 방문 도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문
                              </div>
                            </div>
                            <List className="list-schedule">
                              <ListItem>
                                <Box className="item type-calendar">
                                  <Calendar className="bp-icon small" />
                                  <Box className="txt-period">
                                    2024.04.08 ~ 2024.04.12
                                  </Box>
                                  <Box className="txt-term">4박5일</Box>
                                </Box>
                              </ListItem>
                              <ListItem>
                                <Box className="item">
                                  <PlaceIcon className="bp-icon small" />
                                  <div className="place-area">
                                    <Box className="pin">양재본사 외 아산공장</Box>
                                  </div>
                                </Box>
                              </ListItem>
                            </List>
                          </Link>
                          {/* [E]link-block */}
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </div>
                {/* [E]loop */}

                <div className="ui-box">
                  <Card>
                    <CardContent>
                      <List className="bztrip-list">
                        <ListItem className="item">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel value="radio01-02" label="" control={<Radio />} />
                            </div>
                            <div className="right-area">
                              <div className="item-date">출장일 2024.04.01</div>
                            </div>
                          </div>
                          {/* [S]link-block */} 
                          <Link to="#" className="link-block">
                            <div className="title-area inner-sides">
                              <div className="txt bp-ellipsis">
                                도장재 품질점검 협력사 2차 방문 도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문
                              </div>
                            </div>
                            <List className="list-schedule">
                              <ListItem>
                                <Box className="item type-calendar">
                                  <Calendar className="bp-icon small" />
                                  <Box className="txt-period">
                                    2024.04.08 ~ 2024.04.12
                                  </Box>
                                  <Box className="txt-term">4박5일</Box>
                                </Box>
                              </ListItem>
                              <ListItem>
                                <Box className="item">
                                  <PlaceIcon className="bp-icon small" />
                                  <div className="place-area">
                                    <Box className="pin">양재본사 외 아산공장</Box>
                                    {/* <Box className="pin">충남아산시현대로1077</Box> */}
                                  </div>
                                </Box>
                              </ListItem>
                            </List>
                          </Link>
                          {/* [E]link-block */}
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </div>
                <div className="ui-box">
                  <Card>
                    <CardContent>
                      <List className="bztrip-list">
                        <ListItem className="item">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <FormControlLabel value="radio01-03" label="" control={<Radio />} />
                            </div>
                            <div className="right-area">
                              <div className="item-date">출장일 2024.04.01</div>
                            </div>
                          </div>
                          {/* [S]link-block */} 
                          <Link to="#" className="link-block">
                            <div className="title-area inner-sides">
                              <div className="txt bp-ellipsis">
                                도장재 품질점검 협력사 2차 방문 도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문도장재 품질점검 협력사 2차 방문
                              </div>
                            </div>
                            <List className="list-schedule">
                              <ListItem>
                                <Box className="item type-calendar">
                                  <Calendar className="bp-icon small" />
                                  <Box className="txt-period">
                                    2024.04.08 ~ 2024.04.12
                                  </Box>
                                  <Box className="txt-term">4박5일</Box>
                                </Box>
                              </ListItem>
                              <ListItem>
                                <Box className="item">
                                  <PlaceIcon className="bp-icon small" />
                                  <div className="place-area">
                                    <Box className="pin">양재본사 외 아산공장</Box>
                                    <Box className="pin">충남아산시현대로1077</Box>
                                  </div>
                                </Box>
                              </ListItem>
                            </List>
                          </Link>
                          {/* [E]link-block */}
                        </ListItem>
                      </List>
                    </CardContent>
                  </Card>
                </div>
                {/* [E]fields-group list-plan */}
              </div>
              {/* [E]fields-group list-plan : 계획서 목록 list-plan-area */}
            </RadioGroup>
          </FormControl>
          </div>
        </div>
        </DialogContent>

        <DialogActions className="dialog-footer">
          <Box className="btns-group">
            <Box className="inner side">
              <Button
                variant="contained"
                size="large"
                className="btn-xlarge color-neutral"
              >
                취소
              </Button>
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
      {/* [E]출장 정산서 | 출장계획서 목록*/}
    </>
  );
};

export default MDO010200;
