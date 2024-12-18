import {
  Box,
  Paper,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Stack,
} from "@mui/material";
import * as React from "react";
import { ChevronDown } from "@untitled-ui/icons-react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";
const MMA010603 = () => {
  const [filteredLocations, setFilteredLocations] = useState("");
  const label = { inputProps: { "aria-label": "Switch demo" } };
  // 아코디언 Multi
  const [expandedMulti, setExpandedMulti] = React.useState(false);
  const handleExpansionMulti = () => {
    setExpandedMulti((prevExpanded) => !prevExpanded);
  };
  // 아코디언 Single
  const [expandedSingle, setExpandedSingle] = React.useState<string | false>(
    "panel2-1",
  );
  const handleExpansionSingle =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpandedSingle(newExpanded ? panel : false);
    };
 
  return (
    <>
      <Head>
        <title>결제하기 | 전자영수증</title>
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
                <div className="type-amount">
                  <div className="number-area">
                    <Box className="flex-row">
                      <Box component="span" className="point-large">
                        25,000
                        <span className="txt-currency">원</span>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
              {/* [E]pay-info */}
              <div className="divider-top">
                {/* [S]pay-footer */}
                <div className="pay-info-tbl ui-box">
                  <div className="item-field">
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">공급가액</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">9,000 원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">부가세</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">0 원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">봉사료</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">0 원</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">1회용 컵 보증금</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">0 원</Box>
                      </dd>
                    </dl>
                  
                    <div className="dashed-line"></div>
                   
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt">결제번호</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt">PBP0002863668</Box>
                      </dd>
                    </dl>
                    <dl className="inner-sides">
                      <dt className="left-area">
                        <div className="txt font-small">거래유형</div>
                      </dt>
                      <dd className="right-area">
                        <Box className="txt font-small">승인</Box>
                      </dd>
                    </dl>
                    
                    <div className="dashed-line"></div>

                    {/* [S]Accordion menu */}
                    <div className="bp-accordion accordion-basic">
                      <Accordion
                        disableGutters
                        elevation={0}
                        defaultExpanded
                        expanded={expandedMulti}
                        onChange={handleExpansionMulti}
                      >
                        <AccordionSummary
                          aria-controls="panel1d-content"
                          id="panel1d-header"
                          className="acc-header"
                          expandIcon={
                            <IconButton
                              className="btn-icon-only"
                              size="small"
                              aria-label="열기/닫기"
                            >
                              <ChevronDown fontSize="small" className="bp-icon small" />
                            </IconButton>
                          }
                        >
                          <div className="acc-inner">
                            <Box className="left">
                              <Stack spacing={0} className="acc-group-title">
                                <Stack spacing={0} className="acc-title">
                                  가맹점 정보
                                </Stack>
                              </Stack>
                            </Box>
                            <Box className="right"></Box>
                          </div>
                        </AccordionSummary>
                        <AccordionDetails className="acc-body">
                          <div className="neutral-box">
                            <dl className="inner-sides footer-total">
                              <dt className="left-area">
                                <div className="txt">사업자번호</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">114-89-098765</Box>
                              </dd>
                            </dl>
                            <dl className="inner-sides mg-top10">
                              <dt className="left-area">
                                <div className="txt font-small">업종</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt font-small">편의점</Box>
                              </dd>
                            </dl>
                            <dl className="inner-sides footer-total">
                              <dt className="left-area">
                                <div className="txt">전화번호</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt">-</Box>
                              </dd>
                            </dl>
                            <dl className="inner-sides mg-top10">
                              <dt className="left-area">
                                <div className="txt font-small">주소</div>
                              </dt>
                              <dd className="right-area">
                                <Box className="txt font-small">서울특별시 영등포구 영신로 220(영동포동 8가) 1층 104호</Box>
                              </dd>
                            </dl>
                          </div>
                        </AccordionDetails>
                      </Accordion> 
                    </div>
                    
                    {/* [E]Accordion menu */}
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

      </LayoutSub>
    </>
  );
};

export default MMA010603;
