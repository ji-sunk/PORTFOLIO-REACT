import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MDF010101 = () => {
  const clearSearch = () => {
    setFilteredLocations("");
  };

  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [filteredLocations, setFilteredLocations] = useState("");

  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };

  const toggleDrawer = (drawerId, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
  };
  return (
    <>
      <Head>
        <title>출장의견</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" */}
        <Paper className="ui-paper">
          <div className="full-height pos">
            {/* [S] */}
            <div className="opinion-wrap scroll">
              <div className="ui-box">
                <div className="item-card fit-cont inner-sides">
                  <div className="left-area bubble master">
                    <Box className="item">
                      <div className="item-top inner-sides">
                        <Box className="name">홍길동</Box>
                        <Box className="team">사원 · 상품기획팀</Box>
                      </div>
                      <Box className="msg-txt">
                        최종결재취소 처리하였습니다..종결재취소
                        처리하였습니다..종결재취소 처리하였습니다..
                      </Box>
                    </Box>
                  </div>
                  <div className="inner-sides1">
                    <div className="left-area">
                      <Box className="txt-date">2023-12-22 19:53</Box>
                    </div>
                    <div className="right-area">
                      <IconButton
                        className="btn-icon-only"
                        size="small"
                        aria-label="삭제"
                        onClick={toggleDrawer("listDrawer1", false)}
                      >
                        <Close fontSize="small" className="bp-icon" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui-box grid">
                <div className="item-card fit-cont inner-sides">
                  <div className="right-area bubble user">
                    <Box className="item">
                      <div className="item-top inner-sides">
                        <Box className="name">홍길동</Box>
                        <Box className="team">사원 · 상품기획팀</Box>
                      </div>
                      <Box className="msg-txt">
                        최종결재취소 처리하였습니다..
                      </Box>
                    </Box>
                  </div>
                  <div className="inner-sides1">
                    <div className="left-area">
                      <Box className="txt-date">2024.05.30</Box>
                    </div>
                    <div className="right-area">
                      <IconButton
                        className="btn-icon-only"
                        size="small"
                        aria-label="삭제"
                        onClick={toggleDrawer("listDrawer1", false)}
                      >
                        <Close fontSize="small" className="bp-icon" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui-box grid">
                <div className="item-card fit-cont inner-sides">
                  <div className="right-area bubble user delete">
                    {/* delete 클래스 추가 240930 */}
                    <Box className="item">
                      <div className="item-top inner-sides">
                        <Box className="name">홍길동</Box>
                        <Box className="team">사원 · 상품기획팀</Box>
                      </div>
                      <Box className="msg-txt">
                        삭제된 의견입니다 <span>(2024-01-01)</span>
                      </Box>
                    </Box>
                  </div>
                  <div className="inner-sides1">
                    <div className="left-area">
                      <Box className="txt-date">2024.05.30</Box>
                    </div>
                    <div className="right-area">
                      <IconButton
                        className="btn-icon-only"
                        size="small"
                        aria-label="삭제"
                        onClick={toggleDrawer("listDrawer1", false)}
                      >
                        <Close fontSize="small" className="bp-icon" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ui-box">
                <div className="item-card fit-cont inner-sides">
                  <div className="left-area bubble master delete">
                    {/* master 클래스 추가 240930 */}
                    <Box className="item">
                      <div className="item-top inner-sides">
                        <Box className="name">홍길동</Box>
                        <Box className="team">사원 · 상품기획팀</Box>
                      </div>
                      <Box className="msg-txt">
                        삭제된 의견입니다 <span>(2024-01-01)</span>
                      </Box>
                    </Box>
                  </div>
                  <div className="inner-sides1">
                    <div className="left-area">
                      <Box className="txt-date">2023-12-22 19:53</Box>
                    </div>
                    <div className="right-area">
                      <IconButton
                        className="btn-icon-only"
                        size="small"
                        aria-label="삭제"
                        onClick={toggleDrawer("listDrawer1", false)}
                      >
                        <Close fontSize="small" className="bp-icon" />
                      </IconButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [E] */}

            <div className="fields-send-wrap">
              <div className="inner-sides">
                <div className="left-area">
                  <TextField
                    variant="filled"
                    size="medium"
                    data-cy="searchBox"
                    placeholder="출장 의견 입력하기"
                    className="bp-search"
                    fullWidth
                    hiddenLabel
                    value={filteredLocations}
                    onChange={filterResults}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end" className="btn-groups">
                          {filteredLocations && ( // value 값이 있는 경우에만 clear 버튼 생성
                            <IconButton
                              size="small"
                              className="btn-clear"
                              // onClick={clearSearch}
                            >
                              {/* <CancelIcon
                                  fontSize="small"
                                  className="bp-icon small"
                                /> */}
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                </div>
                <div className="right-area">
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-small"
                  ></Button>
                </div>
              </div>
            </div>
          </div>
        </Paper>
        {/* [E]ui-paper */}
      </LayoutSub>
    </>
  );
};

export default MDF010101;
