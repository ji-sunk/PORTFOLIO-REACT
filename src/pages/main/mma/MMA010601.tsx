import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMA010601 = () => {
  const [filteredLocations, setFilteredLocations] = useState("");

  const clearSearch = () => {
    setFilteredLocations("");
  };

  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };

  return (
    <>
      <Head>
        <title>결제하기</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]payment-wrap */}
            <div className="payment-wrap">
              {/* [S]pay-info */}
              <div className="pay-info ui-box">
                <div className="inner-sides">
                  <div className="right-area">
                    <Box className="item-data txt-desc">
                      결제일시 2024.05.12 12:30
                    </Box>
                  </div>
                </div>
                <Typography variant="h3">라면집</Typography>
                <div className="item-field">
                  <TextField
                    label="결제금액"
                    size="medium"
                    className="bp-search"
                    value="25,000 원"
                    fullWidth
                    hiddenLabel
                    onChange={filterResults}
                    InputProps={{
                      inputProps: {
                        style: { textAlign: "right" },
                      },
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
                </div>
                {/* <div className="type-amount">
                  <div className="number-area">
                    <Box className="flex-row">
                      <Box component="span" className="point-large">
                        25,000
                        <span className="txt-currency">원</span>
                      </Box>
                    </Box>
                  </div>
                </div> */}
              </div>
              {/* [E]pay-info */}
              <div className="divider-top">
                {/* [S]pay-footer */}
                <div className="pay-footer ui-box">
                  <Typography variant="h3">결제수단</Typography>
                  <div className="item-field">
                    <div className="neutral-box info-distance">
                      <dl className="inner-sides footer-total">
                        <dt className="left-area">
                          <div className="txt">보유 일비포인트</div>
                        </dt>
                        <dd className="right-area">
                          <Box className="txt">99,000 원</Box>
                        </dd>
                      </dl>
                    </div>
                    <div className="neutral-box info-distance">
                      <dl className="inner-sides footer-total">
                        <dt className="left-area">
                          <div className="txt">보유 비플머니</div>
                        </dt>
                        <dd className="right-area">
                          <Box className="txt">99,000원</Box>
                        </dd>
                      </dl>
                      <dl className="inner-sides footer-total mg-top10">
                        <dt className="left-area">
                          <div className="txt font-small">자동 충전 계좌</div>
                        </dt>
                        <dd className="right-area">
                          <Box className="txt font-small">99,000원</Box>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/* [E]pay-footer */}
              </div>
            </div>
            {/* [S]allmenu-wrap */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              다음/결제
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMA010601;
