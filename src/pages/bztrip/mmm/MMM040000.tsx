import PriorityHighRoundedIcon from "@mui/icons-material/PriorityHighRounded";
import {
  Box,
  TextField,
  Avatar,
  Button,
  List,
  ListItem,
  Paper,
  Autocomplete,
  Typography,
  FormControl,
  IconButton,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";
import { Calendar } from "@untitled-ui/icons-react";
import { ChevronRight } from "@untitled-ui/icons-react";
import { Close } from "@mui/icons-material";

const selectOption = [
  { label: "label1", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "swiper/css";

const MMM040000 = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(false);

  const [open, setOpen] = useState(false);
  const onClose = (e) => setOpen(false);

  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-00");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    listDrawer1: false, //비상신고하기
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
  return (
    <>
      <Head>
        <title>보고서선택 전</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap,  bt-memo-wrap */}
        <Paper className="ui-paper bztrip-wrap bt-memo-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            <div className="bt-form">               
              <div className="ui-box">
                <Autocomplete
                  includeInputInList
                  size="medium"
                  id="select1"
                  fullWidth
                  autoHighlight
                  options={selectOption}
                  renderInput={(params) => (
                    <TextField
                      variant="filled"
                      size="medium"
                      label="계획서 선택"
                      placeholder=""
                      {...params}
                    />
                  )}
                />
              </div>
              <div className="divider-top">
                <div className="ui-box">
                  <div className="inner-sides">
                    <Box className="left-area">
                      <Typography variant="h3">AI History</Typography>
                    </Box>
                  </div>  
                  <List className="list-link-box">
                    {/* [S]loop */}
                    <ListItem className="item">
                      <Link to="" className="link-block">
                        <div className="inner-sides">
                          <Box className="left-area in-grid">
                            <div className="txt">사용한 계획서 제목입니다.</div>
                            <div className="date">2024.05.01</div>
                          </Box>
                          <Box className="right-area">
                            <ChevronRight className="bp-icon" />
                          </Box>
                        </div>
                      </Link>
                    </ListItem>
                    {/* [E]loop */}

                    <ListItem className="item">
                      <Link to="" className="link-block">
                        <div className="inner-sides">
                          <Box className="left-area in-grid">
                            <div className="txt">사용한 계획서 제목입니다.</div>
                            <div className="date">2024.05.01</div>
                          </Box>
                          <Box className="right-area">
                            <ChevronRight className="bp-icon" />
                          </Box>
                        </div>
                      </Link>
                    </ListItem>

                    <ListItem className="item">
                      <Link to="" className="link-block">
                        <div className="inner-sides">
                          <Box className="left-area in-grid">
                            <div className="txt">사용한 계획서 제목입니다.사용한 계획서 제목입니다.사용한 계획서 제목입니다.</div>
                            <div className="date">2024.05.01</div>
                          </Box>
                          <Box className="right-area">
                            <ChevronRight className="bp-icon" />
                          </Box>
                        </div>
                      </Link>
                    </ListItem>
                  </List>
                  
                </div>
              </div>
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap, bt-memo-wrap */}
        {/* <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              메모내역으로
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              저장
            </Button>
          </Box>
        </Box> */}
      </LayoutSub>
    </>
  );
};

export default MMM040000;
