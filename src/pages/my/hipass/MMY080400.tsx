import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  FormGroup,
  Paper,
} from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import FilterSet from "src/components/common/FilterSet";
import NoData from "src/components/common/NoData";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMY080400 = () => {
  const [checked, setChecked] = useState(false);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-01");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  return (
    <>
      <Head>
        <title>하이패스 사용내역 | 하이패스관리</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]map-route-wrap */}
          <div className="map-route-wrap">
            <div className="light-box full-height">
              <div className="ui-box">
                <FilterSet />
              </div>
              {/* <div className="ui-box">
                <div className="inner-sides">
                  <FormControlLabel
                    label={<Box className="txt-label">전체 선택</Box>}
                    control={<Checkbox />}
                  />
                </div>
              </div> */}
              <div className="list-amount-used">
                <FormControl
                  component="fieldset"
                  variant="standard"
                  className="fullWidth "
                >
                  <FormGroup
                    className="fullWidth list-group"
                    defaultValue="radioCard-01"
                  >
                    <FormControlLabel
                      className={`${checked ? "is-active" : ""} label-large`}
                      control={
                        <Checkbox
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                      }
                      label={
                        <Box className="item-card">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <div className="chips-group">
                                <Chip
                                  label="하나카드"
                                  size="medium"
                                  variant="outlined"
                                  color="default"
                                  className="bp-chip type-text"
                                />
                              </div>
                            </div>
                            <div className="right-area">
                              <div className="item-date">2024.04.25 19:30</div>
                            </div>
                          </div>
                          <div className="title-area inner-sides">
                            <Box className="item-place">
                              <PlaceIcon className="bp-icon small" />
                              <div className="place-area">
                                <Box className="pin">양재본사</Box>
                                <Box className="pin">충남아산시현대로1077</Box>
                              </div>
                            </Box>
                            <div className="right-area type-amount">
                              <div className="number-area">
                                295,000
                                <span className="txt-currency">원</span>
                              </div>
                            </div>
                          </div>
                        </Box>
                      }
                    />
                    <FormControlLabel
                      className={`${checked ? "is-active" : ""} label-large`}
                      control={
                        <Checkbox
                          onChange={(e) => setChecked(e.target.checked)}
                        />
                      }
                      label={
                        <Box className="item-card">
                          <div className="item-top inner-sides">
                            <div className="left-area">
                              <div className="chips-group">
                                <Chip
                                  label="하나카드"
                                  size="medium"
                                  variant="outlined"
                                  color="default"
                                  className="bp-chip type-text"
                                />
                              </div>
                            </div>
                            <div className="right-area">
                              <div className="item-date">2024.04.25 19:30</div>
                            </div>
                          </div>
                          <div className="title-area inner-sides">
                            <Box className="item-place">
                              <PlaceIcon className="bp-icon small" />
                              <div className="place-area">
                                <Box className="pin">양재본사</Box>
                                <Box className="pin">충남아산시현대로1077</Box>
                              </div>
                            </Box>
                            <div className="right-area type-amount">
                              <div className="number-area">
                                295,000
                                <span className="txt-currency">원</span>
                              </div>
                            </div>
                          </div>
                        </Box>
                      }
                    />
                  </FormGroup>
                </FormControl>
                <div className="ui-box">
                  <NoData />
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
              등록
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMY080400;
