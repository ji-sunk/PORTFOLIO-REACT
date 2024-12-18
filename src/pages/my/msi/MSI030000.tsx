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
  IconButton,
} from "@mui/material";
import {
  Bell01,
  Globe02,
  ChevronRight,
  FaceId,
  Phone02,
} from "@untitled-ui/icons-react";
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
        <title>설정</title>
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

                  <AccordionDetails className="acc-body">
                    <div className="acc-inner">
                      <List className="list-setting setting-area">
                        <ListItem className="item">
                          <div className="inner-sides">
                            <Bell01 className="bp-icon medium" />
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                               알림설정
                              </Typography>
                            </div>
                            <div className="right-area">
                              <IconButton>
                                <ChevronRight className="bp-icon" />
                              </IconButton>
                            </div>
                          </div>
                        </ListItem>
                        <ListItem className="item">
                          <div className="inner-sides">
                            <Globe02 className="bp-icon medium" />
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                               언어설정
                              </Typography>
                            </div>
                            <div className="right-area">
                              <IconButton>
                                <ChevronRight className="bp-icon" />
                              </IconButton>
                            </div>
                          </div>
                        </ListItem>
                        
                        <ListItem className="item">
                          <div className="inner-sides">
                            <FaceId className="bp-icon medium" />
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                               생체인증 사용
                              </Typography>
                            </div>
                            <div className="right-area">
                              <Switch defaultChecked />
                            </div>
                          </div>
                        </ListItem>

                        <ListItem className="item">
                          <div className="inner-sides">
                            <Phone02 className="bp-icon medium" />
                            <div className="left-area">
                              <Typography variant="h4" className="bp-title">
                                v.1.0.0
                              </Typography>
                            </div>
                            <div className="right-area">
                              <IconButton>
                                <ChevronRight className="bp-icon" />
                              </IconButton>
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
