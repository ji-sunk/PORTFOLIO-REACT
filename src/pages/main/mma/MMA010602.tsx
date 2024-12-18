import { Box, Button, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMA010602 = () => {
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
        <title>결제하기 | 등록계좌 없을 경우</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S] payment-wrap */}
            <div className="payment-wrap">
              {/* [S]pay-info */}
              <div className="pay-info ui-box">
                <Typography variant="h3">라면집</Typography>
                <div className="type-amount">
                  <div className="number-area">
                    <Box className="flex-row">
                      <Box component="span" className="point-large">
                        10,000
                        <span className="txt-currency">원</span>
                      </Box>
                    </Box>
                  </div>
                </div>
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
                          <Box className="txt font-small">등록된 계좌 없음</Box>
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
                {/* [E]pay-footer */}
              </div>
            </div>
            {/* [E] payment-wrap */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E] defautl : "ui-paper" , flex-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              결제하기
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMA010602;
