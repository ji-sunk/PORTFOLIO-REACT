import {
  Accordion,
  AccordionDetails,
  Box,
  List,
  ListItem,
  Paper,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MSI030100 = () => {
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
        <title>알림설정</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]flex1-col */}
          <div className="flex1-col">
            <div className="light-box full-height">
              <div className="bp-accordion switch-area">
                <Accordion
                  disableGutters
                  elevation={0}
                  expanded={expandedSingle === "panel2-1"}
                  onChange={handleExpansionSingle("panel2-1")}
                >
                  <Box className="acc-header">
                    <div className="acc-inner">
                      <Box className="left">
                        <Stack spacing={0} className="acc-title">
                          <Typography variant="h3" className="bp-title">
                            PUSH 알림설정
                          </Typography>
                        </Stack>
                      </Box>
                      <Box className="right-area">
                        <Switch
                          defaultChecked
                          onClick={() =>
                            setExpandedSingle(
                              expandedSingle === "panel2-1"
                                ? false
                                : "panel2-1",
                            )
                          }
                        />
                      </Box>
                    </div>
                  </Box>
                  <AccordionDetails className="acc-body">
                    <div className="acc-inner">
                      <List className="list-setting">
                        <ListItem className="item">
                          <div className="inner-sides">
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                                결제 알림
                              </Typography>
                              <Box className="txt-desc">
                                출장계획서, 정산서 등 결재 알림을 알려드립니다.
                              </Box>
                            </div>
                            <div className="right-area">
                              <Switch defaultChecked />
                            </div>
                          </div>
                        </ListItem>
                        <ListItem className="item depth-box">
                          <div className="inner-sides">
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                                알림 제한 시간 설정(방해금지 시간대 설정)
                              </Typography>
                              <Box className="txt-desc">
                                내가 설정한 시간에는 알림이 제한됩니다.
                              </Box>
                            </div>
                            <div className="right-area">
                              <Switch />
                            </div>
                          </div>
                          <dl className="inner-sides neutral-light">
                            <dt className="left-area">시작</dt>
                            <dd className="right-area">
                              <label className="item-data">오후 10:00</label>
                            </dd>
                          </dl>
                          <dl className="inner-sides neutral-light">
                            <dt className="left-area">종료</dt>
                            <dd className="right-area">
                              <label className="item-data">오전 08:00</label>
                            </dd>
                          </dl>
                        </ListItem>
                        <ListItem className="item">
                          <div className="inner-sides">
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                                이벤트 알림
                              </Typography>
                              <Box className="txt-desc">
                                알림을 켜두시면 쿠폰, 할인 혜택을 알려드립니다.
                              </Box>
                            </div>
                            <div className="right-area">
                              <Switch />
                            </div>
                          </div>
                        </ListItem>
                      </List>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
          {/* [E]flex1-col */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
        {/* <Box className="btns-group"></Box> */}
      </LayoutSub>
    </>
  );
};

export default MSI030100;
