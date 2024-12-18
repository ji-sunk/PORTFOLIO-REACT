import PlaceIcon from "@mui/icons-material/Place";
import {
  Autocomplete,
  Box,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Helmet as Head } from "react-helmet";
import BtnsGroup from "src/components/common/BtnsGroup";
import LayoutSub from "src/templates/layout/LayoutSub";

import { ArrowDropDown } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

const selectOption = [
  { label: "label1", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MMA010100 = () => {
  return (
    <>
      <Head>
        <title>자기차량 선택 | 메인</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]mycar-area */}
            <div className="mycar-area">
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
                      label="출장계획서"
                      placeholder=""
                      {...params}
                    />
                  )}
                />
              </div>

              <div className="fields-group">
                <div className="ui-box">
                  <div className="inner-sides">
                    <div className="left-area">
                      <Typography variant="h3">이동경로</Typography>
                    </div>
                    <div className="right-area">
                      <FormControlLabel
                        label={<Box className="txt-label">전체경로 선택</Box>}
                        control={<Checkbox />}
                      />
                    </div>
                  </div>

                  <div className="item-field">
                    <FormControlLabel
                      label={
                        <Box className="txt-label">
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item">
                                <PlaceIcon className="bp-icon small" />
                                <div className="place-area">
                                  <Box className="pin">양재본사</Box>
                                  <Box className="pin">
                                    충남아산시현대로1077
                                  </Box>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      }
                      control={<Checkbox />}
                    />
                    <Autocomplete
                      includeInputInList
                      size="medium"
                      id="select2"
                      fullWidth
                      autoHighlight
                      options={selectOption}
                      renderInput={(params) => (
                        <TextField
                          variant="filled"
                          size="medium"
                          label="차량정보"
                          placeholder=""
                          {...params}
                        />
                      )}
                    />
                    {/* 리스트 팝업 호출 버튼 타입 */}
                    <TextField
                      className="type-btn"
                      type="button"
                      label="차량정보"
                      defaultValue=""
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ArrowDropDown fontSize="medium" />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>

                  <div className="item-field">
                    <FormControlLabel
                      label={
                        <Box className="txt-label">
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item">
                                <PlaceIcon className="bp-icon small" />
                                <div className="place-area">
                                  <Box className="pin">양재본사</Box>
                                  <Box className="pin">
                                    충남아산시현대로1077
                                  </Box>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      }
                      control={<Checkbox />}
                    />
                    <Autocomplete
                      includeInputInList
                      size="medium"
                      id="select3"
                      fullWidth
                      autoHighlight
                      options={selectOption}
                      renderInput={(params) => (
                        <TextField
                          variant="filled"
                          size="medium"
                          label="차량정보"
                          placeholder=""
                          {...params}
                        />
                      )}
                    />
                  </div>

                  <div className="item-field">
                    <FormControlLabel
                      label={
                        <Box className="txt-label">
                          <List className="list-schedule">
                            <ListItem>
                              <Box className="item">
                                <PlaceIcon className="bp-icon small" />
                                <div className="place-area">
                                  <Box className="pin">양재본사</Box>
                                  <Box className="pin">
                                    충남아산시현대로1077
                                  </Box>
                                </div>
                              </Box>
                            </ListItem>
                          </List>
                        </Box>
                      }
                      control={<Checkbox />}
                    />
                    <Autocomplete
                      includeInputInList
                      size="medium"
                      id="select4"
                      fullWidth
                      autoHighlight
                      options={selectOption}
                      renderInput={(params) => (
                        <TextField
                          variant="filled"
                          size="medium"
                          label="차량정보"
                          placeholder=""
                          {...params}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* [E]mycar-area */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <BtnsGroup />
      </LayoutSub>
    </>
  );
};

export default MMA010100;
