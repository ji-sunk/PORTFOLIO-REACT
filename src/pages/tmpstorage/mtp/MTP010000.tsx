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

const MTP010000 = () => {
  return (
    <>
      <Head>
        <title>임시저장 목록 | 임시저장</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S]list-tmpstg : 임시저장 목록 */}
          <div className="list-tmpstg">
            {/* [S]loop */}
            <div className="ui-box">
              <Card className="item-card">
                <CardContent className="item">
                  
                  <Link to="#" className="link-block box-pdtype">{/*  box-pdtype 클래스 추가 240930 kjs */}
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="출장계획서"
                            size="medium"
                            variant="outlined"
                            className="bp-chip"
                            color="primary"
                          />
                        </div>
                      </div>
                      <div className="right-area">
                        <Box className="txt-data-desc">작성일 2024.04.01</Box>{/*  작성일 2024.04.01 추가 240930 kjs */}
                      </div>
                    </div>

                    <div className="title-area">
                      <Box className="txt bp-ellipsis">
                        울산 5공장 생산 로봇 설치점검 방문 제목 영역 말줄임
                        말줄임 말줄임
                      </Box>
                    </div>
                    <Box className="txt-data-desc bp-ellipsis2">{/* 내용2줄 클래스 bp-ellipsis2 변경 240930 kjs */}
                      내용 없음 내용 없음 내용 없음 내용 없음 내용 없음 내용
                      없음 내용 없음 내용 없음 내용 없음 내용 없음 내용 없음
                      내용 없음
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
                  <Link to="#" className="link-block">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="정산서"
                            size="medium"
                            variant="outlined"
                            className="bp-chip"
                            color="primary"
                          />
                        </div>
                      </div>
                      <div className="right-area"></div>
                    </div>

                    <div className="title-area">
                      <Box className="txt bp-ellipsis">
                        울산 5공장 생산 로봇 설치점검 방문 제목 영역 말줄임
                        말줄임 말줄임
                      </Box>
                    </div>
                    <Box className="txt-data-desc bp-ellipsis">내용 없음</Box>
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
                  <Link to="#" className="link-block left-area">
                    <div className="item-top inner-sides">
                      <div className="left-area">
                        <div className="chips-group">
                          <Chip
                            label="정산서"
                            size="medium"
                            variant="outlined"
                            className="bp-chip"
                            color="primary"
                          />
                        </div>
                      </div>
                      <div className="right-area"></div>
                    </div>

                    <div className="title-area">
                      <Box className="txt bp-ellipsis color-text-secondary">
                        제목 없음
                      </Box>
                    </div>
                    <Box className="txt-data-desc bp-ellipsis">내용 없음</Box>
                  </Link>
                  <IconButton size="small" className="btn-clear">
                    <CancelIcon fontSize="small" className="bp-icon small" />
                  </IconButton>
                </CardContent>
              </Card>
            </div>
            {/* [E]list-tmpstg */}
            <Box className="txt-btns-group">
              <Button size="medium" className="btn-more">
                더보기
              </Button>
            </Box>
          </div>
          {/* [E]list-tmpstg : 임시저장 목록 */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
      </LayoutSub>
    </>
  );
};

export default MTP010000;
