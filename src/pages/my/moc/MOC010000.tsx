import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  IconButton,
  Paper,
} from "@mui/material";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";
import { WarningRounded } from "@mui/icons-material";

const MOC010000 = () => {
  return (
    <>
      <Head>
        <title>차량 | 자차목록</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap car-lst-wrap">
          {/* [S]list-mycar : 자차 목록 */}
          <div className="list-mycar">
            {/* [S]loop */}
            <div className="ui-box">
              <Card className="item-card">
                <CardContent className="item">
                  <Link to="#" className="link-column">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Box className="subtxt">
                          나의첫차
                        </Box>
                      </div>
                    </div>
                    <div className="title-area">
                      <Box className="txt bp-ellipsis">
                        더 뉴 아반떼 Hybrid
                      </Box>
                    </div>
                    <Box className="txt-data-desc bp-ellipsis">
                      123저1234
                    </Box>
                  </Link>
                  <IconButton size="small" className="btn-clear">
                    <CancelIcon fontSize="small" className="bp-icon small" />
                  </IconButton>
                </CardContent>
              </Card>
            </div>
            {/* [E]loop */}

            <div className="ui-box">
              <Card className="item-card">
                <CardContent className="item">
                  <Link to="#" className="link-column">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Box className="subtxt">
                          엄마차
                        </Box>
                      </div>
                    </div>
                    <div className="title-area">
                      <Box className="txt bp-ellipsis">
                        쏘나타 Hybrid
                      </Box>
                    </div>
                    <Box className="txt-data-desc bp-ellipsis">
                      123저1234
                    </Box>
                  </Link>
                  <IconButton size="small" className="btn-clear">
                    <CancelIcon fontSize="small" className="bp-icon small" />
                  </IconButton>
                </CardContent>
              </Card>
            </div>
            <div className="ui-box">
              <Card className="item-card">
                <CardContent className="item">
                  <Link to="#" className="link-column">
                    <div className="inner-sides">
                      <div className="left-area">
                        <Box className="subtxt">
                          아빠차
                        </Box>
                      </div>
                    </div>
                    <div className="title-area">
                      <Box className="txt bp-ellipsis">
                        팰리세이드 팰리세이드팰리세이드팰리세이드팰리세이드팰리세이드
                      </Box>
                    </div>
                    <Box className="txt-data-desc bp-ellipsis">
                      123저1234
                    </Box>
                  </Link>
                  <IconButton size="small" className="btn-clear">
                    <CancelIcon fontSize="small" className="bp-icon small" />
                  </IconButton>
                </CardContent>
              </Card>
            </div>
         
            {/* 더보기 버튼 필요 할 시 주석 풀어서 사용 */}
            {/* <Box className="txt-btns-group">
              <Button size="medium" className="btn-more">
                더보기
              </Button>
            </Box> */}
          </div>
          {/* [S] 등록된 차량 없을 때 */}
          <div className="no-data">
            <div className="message-group">
              <WarningRounded fontSize="large" className="bp-icon xlarge" />
              <Box className="message">
                아직 등록된 차량이 없습니다.
              </Box>
              {/* <Box className="message">
                검색 결과가 존재하지 않습니다.
              </Box> */}
            </div>
          </div>
          {/* [E] 등록된 차량 없을 때 */}
          {/* [E]list-mycar : 자차 목록 */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
      </LayoutSub>
    </>
  );
};

export default MOC010000;
