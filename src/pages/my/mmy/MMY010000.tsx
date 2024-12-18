import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  Paper,
} from "@mui/material";
import { Calendar } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import FilterSet from "src/components/common/FilterSet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMY010000 = () => {
  return (
    <>
      <Head>
        <title>출장 완료 내역 | 마이페이지</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , mypage-wrap */}
        <Paper className="ui-paper mypage-wrap">
          {/* filter-set */}
          <div className="ui-box">
            <FilterSet />
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
                          <div className="chips-group">
                            <Chip
                              label="출장종료"
                              size="small"
                              color="info"
                              className="bp-chip"
                            />
                          </div>
                        </div>
                        <div className="right-area">
                          <div className="item-date">2024.04.01</div>
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
                                <Box className="pin">아산공장</Box>
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
                    <ListItem className="item">
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
                                <Box className="pin">아산공장</Box>
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
            {/* [E]fields-group list-plan */}
            <Box className="txt-btns-group">
              <Button size="medium" className="btn-more">
                더보기
              </Button>
            </Box>
          </div>
        </Paper>
        {/* [E]ui-paper mypage-wrap */}
      </LayoutSub>
    </>
  );
};

export default MMY010000;
