import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import { Calendar, Settings04 } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import ChipsGroup from "src/components/common/ChipsGroup";
import FabMainFixed from "src/components/common/FabMainFixed";
import LayoutSub from "src/templates/layout/LayoutSub";
const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MDF010000 = () => {
  return (
    <>
      <Head>
        <title>출장계획서 목록 | 출장</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* filter-set */}
          <div className="ui-box filter-set">
            <div className="inner-sides">
              <div className="left-area">
                <div className="txt">
                  총 <span className="txt-cases">2건</span>
                </div>
              </div>
              <div className="right-area">
                <div className="chips-group">
                  <Chip
                    label="전체"
                    size="medium"
                    variant="outlined"
                    className="bp-chip color-neutral"
                    color="default"
                  />
                  <Chip
                    label="1주일"
                    size="medium"
                    variant="outlined"
                    className="bp-chip color-neutral"
                    color="default"
                  />
                  {/* <Chip
                    label="1개월"
                    size="medium"
                    variant="outlined"
                    className="bp-chip"
                    color="default"
                  />
                  <Chip
                    label="3주일"
                    size="medium"
                    variant="outlined"
                    className="bp-chip"
                    color="default"
                  />
                  <Chip
                    label="2024.05.01~2024.05.30"
                    size="medium"
                    variant="outlined"
                    className="bp-chip"
                    color="default"
                  /> */}
                </div>
                <div className="btns-group">
                  <IconButton className="btn-icon-only" size="small">
                    <Settings04
                      fontSize="medium"
                      className="bp-icon color-secondary"
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          {/* [S]fields-group list-plan : 계획서 목록 */}
          <div className="fields-group list-plan">
            {/* [S]loop */}
            <div className="ui-box">
              <Card>
                <CardContent>
                  <List className="bztrip-list">
                    <ListItem className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <ChipsGroup />
                        </div>
                        <div className="right-area">
                          <div className="item-date">요청일 2024.04.01</div>
                        </div>
                      </div>
                      {/* [S]link-block */}
                      <Link to="#" className="link-block">
                        <div className="title-area inner-sides">
                          <div className="txt bp-ellipsis">
                            울산 5공장 생산 로봇 설치점검 방문 제목 영역 말줄임
                            말줄임 말줄임
                          </div>
                        </div>
                        <List className="list-schedule">
                          <ListItem>
                            <Box className="item type-calendar">
                              <Calendar className="bp-icon small" />
                              <Box className="txt-period">
                                2024.04.08 ~ 2024.04.12
                              </Box>
                              <Box className="txt-term">4박5일</Box>
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
                      </Link>
                      {/* [E]link-block */}
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </div>
            {/* [E]loop */}

            <div className="ui-box">
              <Card>
                <CardContent>
                  <List className="bztrip-list">
                    {/* [S]loop */}
                    <ListItem className="item">
                      <div className="item-top inner-sides">
                        <div className="left-area">
                          <ChipsGroup />
                        </div>
                        <div className="right-area">
                          <div className="item-date">요청일 2024.04.01</div>
                        </div>
                      </div>
                      {/* [S]link-block */}
                      <Link to="#" className="link-block">
                        <div className="title-area inner-sides">
                          <div className="txt bp-ellipsis">
                            울산 5공장 생산 로봇 설치점검 방문 제목 영역 말줄임
                            말줄임 말줄임
                          </div>
                        </div>
                        <List className="list-schedule">
                          <ListItem>
                            <Box className="item type-calendar">
                              <Calendar className="bp-icon small" />
                              <Box className="txt-period">
                                2024.04.08 ~ 2024.04.12
                              </Box>
                              <Box className="txt-term">4박5일</Box>
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
                      </Link>
                      {/* [E]link-block */}
                    </ListItem>
                    {/* [E]loop */}
                  </List>
                </CardContent>
              </Card>
            </div>
            {/* [E]fields-group list-plan */}
            <Box className="txt-btns-group">
              <Button size="medium" className="btn-more">
                더보기
              </Button>
            </Box>
          </div>
          {/* [E]fields-group list-plan : 계획서 목록 */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
      </LayoutSub>
      <FabMainFixed />
    </>
  );
};

export default MDF010000;
