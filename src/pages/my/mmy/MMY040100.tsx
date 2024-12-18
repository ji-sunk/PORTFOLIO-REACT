import { Box, Button, Paper, Typography } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMY040100 = () => {
  return (
    <>
      <Head>
        <title>회수내역 상세</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper", bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap collect-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group view-plan */}
            <div className="fields-group view-plan">
              <div className="ui-box">
                <Typography variant="h3" className="bp-title">
                  회수 요청정보
                </Typography>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  상태
                </Typography>
                <Box className="txt-data">출장비 회수 요청</Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  요청일
                </Typography>
                <Box className="txt-data">2024.04.01</Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  회수요청금액
                </Typography>
                <Box className="txt-data">999,999원</Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  회수 요청 상세
                </Typography>
                <p className="txt-data">일비 100,000원</p>
                <p className="txt-data">숙박비 700,000원 • 신라호텔</p>
                <p className="txt-data">교통비 200,000원 • KTX 산천03</p>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  요청제목
                </Typography>
                <Box className="txt-data">정산서 미작성에 따른 회수 요청</Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  요청사유
                </Typography>
                <Box className="txt-data bp-brline">
                  출장계획서 작성 후 주이상 정산서를 작성하지 않아, 개인사용
                  비용으로 회수 요청합니다.
                </Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h3" className="bp-title">
                  관련문서
                </Typography>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  문서번호
                </Typography>
                <div className="inner-sides">
                  <div className="left-area">
                    <Box className="txt-data">H2981457821</Box>
                  </div>
                  <div className="right-area">
                    <Link to="#" className="btn-xsamll">
                      <span className="txt">상세보기</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  출장목적
                </Typography>
                <Box className="txt-data">일반출장</Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  출장제목
                </Typography>
                <Box className="txt-data">
                  울산 3공장 자체 생산 프로세스 점검 방문
                </Box>
              </div>
              <div className="item-field ui-box">
                <Typography variant="h4" className="bp-title">
                  출장기간
                </Typography>
                <Box className="txt-data">2024.04.01 ~ 2024.04.05</Box>
              </div>
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              //disabled
              className="btn-xlarge"
            >
              비용결제
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMY040100;
