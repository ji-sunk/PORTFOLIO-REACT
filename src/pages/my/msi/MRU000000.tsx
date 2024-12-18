import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { ChevronDown, Download01 } from "@untitled-ui/icons-react";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MRU000000 = () => {
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
        <title>전체 | 출장비지급규정</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper", flex-wrap + stipulate-wrap지급규정 */}
        <Paper className="ui-paper flex-wrap stipulate-wrap">
          {/* [S]flex1-col */}
          <div className="flex1-col">
            <div className="light-box full-height">
              <div className="ui-box">
                {/* [S]Accordion menu */}
                <div className="bp-accordion accordion-basic">
                  <Accordion
                    disableGutters
                    elevation={1}
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
                          <ChevronDown
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      }
                    >
                      <Box className="acc-inner">
                        <Box className="left">
                          <Stack spacing={0} className="acc-group-title">
                            <Stack spacing={0} className="acc-title">
                              <Typography variant="h4" className="bp-title">
                                지원사항
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails className="acc-body">
                      <div className="acc-inner">
                        내용이 노출되는 영역입니다. 내용이 노출되는 영역입니다.
                        내용이 노출되는 영역입니다. 내용이 노출되는 영역입니다.
                        내용이 노출되는 영역입니다.
                        <Box className="txt">내용이 노출되는 영역입니다.</Box>
                        <Box className="txt">내용이 노출되는 영역입니다.</Box>
                        <div className="file-group">
                          <label className="file-name is-readonly">
                            <Box className="name">
                              울산1공장기기정비점검출장_2차수정울산1공장기기정비점검출장2차수정울산1공장기기정비점검출장2차수정
                            </Box>
                            <Box className="ext">.pdf</Box>
                            <div className="right-area">
                              <Download01
                                fontSize="small"
                                className="bp-icon small"
                              />
                            </div>
                          </label>
                          <label className="file-name is-readonly">
                            <Box className="name">첨부파일</Box>
                            <Box className="ext">.jpg</Box>
                            <div className="right-area">
                              <Download01
                                fontSize="small"
                                className="bp-icon small"
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>

                  <Accordion disableGutters elevation={0}>
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
                          <ChevronDown
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      }
                    >
                      <div className="acc-inner">
                        <Box className="left">
                          <Stack spacing={0} className="acc-group-title">
                            <Stack spacing={0} className="acc-title">
                              <Typography variant="h4" className="bp-title">
                                숙박비 유의사항
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-body">
                      <div className="acc-inner">내용-기본 타입2</div>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion disableGutters elevation={0}>
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
                          <ChevronDown
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      }
                    >
                      <div className="acc-inner">
                        <Box className="left">
                          <Stack spacing={0} className="acc-group-title">
                            <Stack spacing={0} className="acc-title">
                              <Typography variant="h4" className="bp-title">
                                타이틀3
                              </Typography>
                            </Stack>
                          </Stack>
                        </Box>
                      </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-body">
                      <div className="acc-inner">
                        내용-기본 타입3
                        <Box className="txt">내용이 노출되는 영역입니다.</Box>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
                {/* [E]Accordion menu */}
              </div>
            </div>
          </div>
          {/* [E]flex1-col */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
      </LayoutSub>
    </>
  );
};

export default MRU000000;
