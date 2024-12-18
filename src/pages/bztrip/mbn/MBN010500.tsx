import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CancelIcon from "@mui/icons-material/Cancel";
import HorizontalRuleOutlinedIcon from "@mui/icons-material/HorizontalRuleOutlined";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

import { useState } from "react";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MBN010500 = () => {
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
  return (
    <>
      <Head>
        <title>경로설정 | 공통</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]map-route-wrap */}
          <div className="map-route-wrap">
            <div className="light-box full-height">
              <div className="ui-box">
                {/* 춞발지 */}
                <div className="item-field">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="출발지"
                    placeholder=""
                    className="type-address"
                  />
                </div>

                {/* 목적지 plus */}
                <div className="item-field flex-row als-center">
                  <TextField
                    variant="filled"
                    size="medium"
                    data-cy="searchBox"
                    placeholder="목적지"
                    label="목적지"
                    className="bp-label-clear"
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
                              onClick={clearSearch}
                            >
                              <CancelIcon
                                fontSize="small"
                                className="bp-icon small"
                              />
                            </IconButton>
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                  <IconButton
                    className="btn-icon-only btn-circle btn-bg-fill-reverse"
                    size="small"
                    color="primary"
                    aria-label="추가"
                  >
                    <AddOutlinedIcon
                      fontSize="small"
                      className="bp-icon small"
                    />
                  </IconButton>
                </div>

                {/* 목적지 plus disabled drag */}
                <div className="item-field flex-row als-center">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="목적지"
                    placeholder=""
                    className="type-address"
                  />
                  <IconButton
                    className="btn-icon-only btn-circle btn-bg-fill-reverse"
                    size="small"
                    color="primary"
                    aria-label="추가"
                    disabled
                  >
                    <AddOutlinedIcon
                      fontSize="small"
                      className="bp-icon small"
                    />
                  </IconButton>
                  <Box component="span" className="unfoldmore">
                    <span className="bp-icon"></span>
                  </Box>
                </div>

                {/* 목적지 minus drag 1 */}
                <div className="item-field flex-row als-center">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="목적지"
                    placeholder="목적지"
                    className="type-address"
                  />
                  <IconButton
                    className="btn-icon-only btn-circle btn-bg-fill-reverse"
                    size="small"
                    color="error"
                    aria-label="제거"
                  >
                    <HorizontalRuleOutlinedIcon
                      fontSize="small"
                      className="bp-icon small"
                    />
                  </IconButton>
                  <Box component="span" className="unfoldmore">
                    <span className="bp-icon"></span>
                  </Box>
                </div>

                {/* 목적지 minus drag 2 */}
                <div className="item-field flex-row als-center">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="목적지"
                    placeholder="목적지"
                    className="type-address"
                  />
                  <IconButton
                    className="btn-icon-only btn-circle btn-bg-fill-reverse"
                    size="small"
                    color="error"
                    aria-label="제거"
                  >
                    <HorizontalRuleOutlinedIcon
                      fontSize="small"
                      className="bp-icon small"
                    />
                  </IconButton>
                  <Box component="span" className="unfoldmore">
                    <span className="bp-icon"></span>
                  </Box>
                </div>

                {/* 목적지 minus drag 3 */}
                <div className="item-field flex-row als-center">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="목적지"
                    placeholder="목적지"
                    className="type-address"
                  />
                  <IconButton
                    className="btn-icon-only btn-circle btn-bg-fill-reverse"
                    size="small"
                    color="error"
                    aria-label="제거"
                  >
                    <HorizontalRuleOutlinedIcon
                      fontSize="small"
                      className="bp-icon small"
                    />
                  </IconButton>
                  <Box component="span" className="unfoldmore">
                    <span className="bp-icon"></span>
                  </Box>
                </div>

                {/* 목적지 minus drag 4 */}
                <div className="item-field flex-row als-center">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="목적지"
                    placeholder="목적지"
                    className="type-address"
                  />
                  <IconButton
                    className="btn-icon-only btn-circle btn-bg-fill-reverse"
                    size="small"
                    color="error"
                    aria-label="제거"
                  >
                    <HorizontalRuleOutlinedIcon
                      fontSize="small"
                      className="bp-icon small"
                    />
                  </IconButton>
                  <Box component="span" className="unfoldmore">
                    <span className="bp-icon"></span>
                  </Box>
                </div>

                {/* 복귀지 */}
                <div className="item-field">
                  <TextField
                    variant="filled"
                    size="medium"
                    label="복귀지"
                    placeholder=""
                    className="type-address"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* [E]map-route-wrap */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              다음
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MBN010500;
