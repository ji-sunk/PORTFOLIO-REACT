import { Avatar, Box, Paper } from "@mui/material";
import {
  CoinsStacked02,
  CreditCardDownload,
  ReceiptCheck,
} from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import FilterSet from "src/components/common/FilterSet";
import NoData from "src/components/common/NoData";
import LayoutSub from "src/templates/layout/LayoutSub";

const MSI010000 = () => {
  return (
    <>
      <Head>
        <title>보유 일비포인트 | 마이페이지</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , mypage-wrap */}
        <Paper className="ui-paper mypage-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]flex-wrap */}
            <div className="flex-wrap">
              <div className="ui-box">
                <div className="point-payment">
                  <div className="detail-usable">
                    <div className="item type-dp inner-sides">
                      <div className="left-area">
                        <div className="title">보유 일비포인트</div>
                      </div>
                      <div className="right-area">
                        <Box className="hands-area">
                          <span>1,200,000</span>
                          {/* 240820 modify */}
                          <span className="currency">원</span>
                        </Box>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ui-box">
                <FilterSet />
              </div>
              <div className="ui-box">
                {/* 240820 modify */}
                {/* [S]direct-link type-col */}
                <div className="direct-link-list type-col">
                  <div className="item">
                    <Link className="item-menu" to="#">
                      <div className="inner-sides">
                        <div className="left-area">
                          <CoinsStacked02
                            fontSize="small"
                            className="bp-icon small"
                          />
                          <div className="title">적립</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <Box component="span" className="point-large">
                                9,999,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link className="item-menu" to="#">
                      <div className="inner-sides">
                        <div className="left-area">
                          <ReceiptCheck
                            fontSize="small"
                            className="bp-icon small"
                          />
                          <div className="title">사용</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <Box component="span" className="point-large">
                                9,999,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="item">
                    <Link className="item-menu" to="#">
                      <div className="inner-sides">
                        <div className="left-area">
                          <CreditCardDownload
                            fontSize="small"
                            className="bp-icon small"
                          />
                          <div className="title">출금</div>
                        </div>
                        <div className="right-area type-amount">
                          <div className="number-area">
                            <Box className="flex-row">
                              <Box component="span" className="point-large">
                                9,999,000
                                <span className="txt-currency">원</span>
                              </Box>
                            </Box>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* [E]direct-link type-col */}
              </div>
              <div className="ui-box">
                <NoData />
              </div>
              <div className="ui-box">
                <div className="list-point-area">
                  <div className="item-card">
                    <div className="item-point">
                      <Avatar
                        sizes="small"
                        className="bp-avatar size-small type-outlined color-blue"
                        aria-label="적립"
                      >
                        <Box>적립</Box>
                      </Avatar>

                      <div className="title-area">
                        <div className="item-date">2024.04.29 15:20</div>
                        <div className="txt">일비포인트 적립</div>
                      </div>

                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <Box component="span" className="point-large">
                              +80,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-card">
                    <div className="item-point">
                      <Avatar
                        sizes="small"
                        className="bp-avatar size-small type-outlined color-error"
                        aria-label="사용"
                      >
                        <Box>사용</Box>
                      </Avatar>

                      <div className="title-area">
                        <div className="item-date">2024.04.29 15:20</div>
                        <div className="txt">GS편의점 울산점</div>
                      </div>

                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <Box component="span" className="point-large">
                              -5,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="item-card">
                    <div className="item-point">
                      <Avatar
                        sizes="small"
                        className="bp-avatar size-small type-outlined color-success"
                        aria-label="사용"
                      >
                        <Box>출금</Box>
                      </Avatar>

                      <div className="title-area">
                        <div className="item-date">2024.04.29 15:20</div>
                        <div className="txt">하나은행 (8888)</div>
                      </div>

                      <div className="right-area type-amount">
                        <div className="number-area">
                          <Box className="flex-row">
                            <Box component="span" className="point-large">
                              -50,000
                              <span className="txt-currency">원</span>
                            </Box>
                          </Box>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* [S]flex-wrap */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper mypage-wrap */}
      </LayoutSub>
    </>
  );
};

export default MSI010000;
