import { Box, Button, Chip, Paper } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import FilterSet from "src/components/common/FilterSet";
import LayoutSub from "src/templates/layout/LayoutSub";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MDO010000 = () => {
  return (
    <>
      <Head>
        <title>정산서 목록 | 출장정산서</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            <div className="ui-box">
              <FilterSet />
            </div>
            {/* [S]fields-group list-plan : 목록 */}
            <div className="fields-group list-plan">
              <div className="ui-box type-line">
                <div className="item-card">
                  <Link to="#" className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="결재진행"
                            size="small"
                            color="success"
                            className="bp-chip"
                          />
                          {/* 지급승인 지급거절 Chip 추가 241112 kjs */}
                          <Chip
                            label="지급승인"
                            size="small"
                            color="success"
                            className="bp-chip color-twotone color-success"
                          />
                          <Chip
                            label="지급거절"
                            size="small"
                            color="error"
                            className="bp-chip color-twotone color-error"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">요청일 2024.04.01</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <div className="txt">울산 1공장 방문건</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          295,000<span className="txt-currency">원</span>
                        </div>
                      </div>
                    </div>
                    <div className="list-schedule">
                      <Box className="txt-period">2024.04.08 ~ 2024.04.12</Box>
                      <Box className="txt-term">(4박5일)</Box>
                    </div>
                    {/* [E]link-block */}
                  </Link>
                </div>
              </div>
              <div className="ui-box type-line">
                <div className="item-card">
                  <Link to="#" className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="결재완료"
                            size="small"
                            color="info"
                            className="bp-chip color-twotone color-info"
                          />

                          <Chip
                            label="지급승인"
                            size="small"
                            color="success"
                            className="bp-chip color-twotone color-success"
                          />
                          <Chip
                            label="지급거절"
                            size="small"
                            color="error"
                            className="bp-chip color-twotone color-error"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">결재일 2024.04.01</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <div className="txt">울산 1공장 방문건</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          295,000<span className="txt-currency">원</span>
                        </div>
                      </div>
                    </div>
                    <div className="list-schedule">
                      <Box className="txt-period">2024.04.08 ~ 2024.04.12</Box>
                      <Box className="txt-term">(4박5일)</Box>
                    </div>
                    {/* [E]link-block */}
                  </Link>
                </div>
              </div>
              <div className="ui-box type-line">
                <div className="item-card">
                  <Link to="#" className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="반려"
                            size="small"
                            color="error"
                            className="bp-chip"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">반려일 2024.04.01</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <div className="txt">울산 1공장 방문건</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          295,000<span className="txt-currency">원</span>
                        </div>
                      </div>
                    </div>
                    <div className="list-schedule">
                      <Box className="txt-period">2024.04.08 ~ 2024.04.12</Box>
                      <Box className="txt-term">(4박5일)</Box>
                    </div>
                    {/* [E]link-block */}
                  </Link>
                </div>
              </div>
              <div className="ui-box type-line">
                <div className="item-card">
                  <Link to="#" className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="결재요청"
                            size="small"
                            color="warning"
                            className="bp-chip"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">요청일 2024.04.01</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <div className="txt">울산 1공장 방문건</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          295,000<span className="txt-currency">원</span>
                        </div>
                      </div>
                    </div>
                    <div className="list-schedule">
                      <Box className="txt-period">2024.04.08 ~ 2024.04.12</Box>
                      <Box className="txt-term">(4박5일)</Box>
                    </div>
                    {/* [E]link-block */}
                  </Link>
                </div>
              </div>
              <div className="ui-box type-line">
                <div className="item-card">
                  <Link to="#" className="item">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="결재진행"
                            size="small"
                            color="success"
                            className="bp-chip"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <div className="item-date">요청일 2024.04.01</div>
                      </div>
                    </div>
                    <div className="title-area inner-sides">
                      <div className="txt">울산 1공장 방문건</div>
                      <div className="right-area type-amount">
                        <div className="number-area">
                          295,000<span className="txt-currency">원</span>
                        </div>
                      </div>
                    </div>
                    <div className="list-schedule">
                      <Box className="txt-period">2024.04.08 ~ 2024.04.12</Box>
                      <Box className="txt-term">(4박5일)</Box>
                    </div>
                    {/* [E]link-block */}
                  </Link>
                </div>
              </div>
            </div>
            {/* [E]fields-group list-plan */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              취소
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              확인
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MDO010000;
