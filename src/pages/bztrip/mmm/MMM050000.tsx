import {
  Box,
  TextField,
  Avatar,
  Button,
  List,
  ListItem,
  Paper,
  Autocomplete,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";
import { Calendar } from "@untitled-ui/icons-react";

const selectOption = [
  { label: "label1", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MMM050000 = () => {

  return (
    <>
      <Head>
        <title>보고서선택 후</title>
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
                  <List className="list-schedule">
                    <ListItem>
                      <Box className="item type-calendar">
                        <Calendar className="bp-icon small" />
                        <Box className="txt-term">출장일</Box>
                        <Box className="txt-period">
                          2024.04.08 ~ 2024.04.12
                        </Box>
                      </Box>
                    </ListItem>
                    <ListItem>
                      <Box className="item">
                        <PlaceIcon className="bp-icon small" />
                        <div className="place-area">
                          <Box className="pin">양재본사</Box>
                          <Box className="pin">충남아산시현대로1077</Box>
                          <Box className="pin">강남대로 350</Box>
                          <Box className="pin">아산공장공장공장</Box>
                          <Box className="pin">아산공장공장2</Box>
                          <Box className="pin">아산공장23</Box>
                        </div>
                      </Box>
                    </ListItem>
                  </List>
                  <div className="item-field">
                    <TextField label="내용" multiline maxRows={10} fullWidth />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap, bt-memo-wrap */}
        <Box className="btns-group">
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
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMM050000;
