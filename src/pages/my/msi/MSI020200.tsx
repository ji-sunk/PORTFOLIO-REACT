import {
  Chip,
  IconButton,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { ChevronRight } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";
const MSI020200 = () => {
  return (
    <>
      <Head>
        <title>설정 |약관및정책</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap / + cp-wrap 약관정책*/}
        <Paper className="ui-paper flex-wrap cp-wrap">
          {/* [S]flex1-col */}
          <div className="flex1-col">
            <div className="light-box full-height">
              <div className="light-box">
                <div className="horizontal-scrolling">
                  <div className="list-chip-label">
                    <Chip
                      aria-selected="true"
                      label="이용약관"
                      size="medium"
                      variant="outlined"
                      className="bp-chip type-rounded"
                      clickable
                    />
                    <Chip
                      label="개인정보처리방침"
                      size="medium"
                      variant="outlined"
                      className="bp-chip type-rounded"
                      clickable
                    />
                    <Chip
                      label="시스템 공지사항"
                      size="medium"
                      variant="outlined"
                      className="bp-chip type-rounded"
                      clickable
                    />
                  </div>
                </div>
              </div>
              <div className="ui-box">
                <List className="list-setting setting-area">
                  <ListItem className="item">
                    <Link className="inner-sides" to="#">
                      <div className="left-area">
                        <Typography variant="h4" className="bp-title">
                          서비스 이용약관
                        </Typography>
                      </div>
                      <div className="right-area">
                        <IconButton>
                          <ChevronRight className="bp-icon" />
                        </IconButton>
                      </div>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="inner-sides" to="#">
                      <div className="left-area">
                        <Typography variant="h4" className="bp-title">
                          통합 전자금융거래 이용약관
                        </Typography>
                      </div>
                      <div className="right-area">
                        <IconButton>
                          <ChevronRight className="bp-icon" />
                        </IconButton>
                      </div>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="inner-sides" to="#">
                      <div className="left-area">
                        <Typography variant="h4" className="bp-title">
                          마케팅(이벤트)정보 수신 동의
                        </Typography>
                      </div>
                      <div className="right-area">
                        <IconButton>
                          <ChevronRight className="bp-icon" />
                        </IconButton>
                      </div>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="inner-sides" to="#">
                      <div className="left-area">
                        <Typography variant="h4" className="bp-title">
                          위치기반서비스 이용약관
                        </Typography>
                      </div>
                      <div className="right-area">
                        <IconButton>
                          <ChevronRight className="bp-icon" />
                        </IconButton>
                      </div>
                    </Link>
                  </ListItem>
                  <ListItem className="item">
                    <Link className="inner-sides" to="#">
                      <div className="left-area">
                        <Typography variant="h4" className="bp-title">
                          마이데이터 서비스 이용약관
                        </Typography>
                      </div>
                      <div className="right-area">
                        <IconButton>
                          <ChevronRight className="bp-icon" />
                        </IconButton>
                      </div>
                    </Link>
                  </ListItem>
                </List>
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

export default MSI020200;
