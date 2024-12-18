import {
  Box,
  Button,
  List,
  ListItem,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { NextPage } from "next";
import { Helmet as Head } from "react-helmet";
import LayoutFill from "src/templates/layout/LayoutFill";

const MLG010000: NextPage = () => {
  return (
    <>
      <Head>
        <title>국내출장플랫폼 이용안내 | 로그인</title>
      </Head>
      <LayoutFill>
        {/* [S] defautl : "ui-paper" , login-wrap */}
        <Paper className="ui-paper login-wrap">
          {/* [S]light-box full-height */}
          <div className="light-box full-height">
            <div className="ui-box">
              {/* [S]타이틀 그룹 */}
              <Box className="header-top-group">
                <Stack spacing={0} className="bp-group-title">
                  <Stack
                    spacing={0}
                    className="bp-group-title-row bp-group-title-main"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      variant="h1"
                      className="bp-title title-top logo"
                    >
                      {/* <img
                        src="/assets/images/logo-hyundai.png"
                        alt="hyundai"
                        width={145}
                      /> */}
                      {/* 로그인 전 화면만 triplus 로고 / 로그인 후 현대 로고 241113 kjs */}
                      <img
                        src="/assets/images/logo-triplus.svg"
                        alt="triplus"
                      />
                    </Typography>
                  </Stack>
                  <Stack
                    spacing={0}
                    className="bp-group-title-row"
                    direction="row"
                  >
                    <Box className="left">
                      <Typography variant="h2" className="bp-title">
                        국내출장플랫폼 이용안내
                      </Typography>
                    </Box>
                    <Box className="right"></Box>
                  </Stack>
                </Stack>
              </Box>
              {/* [E]타이틀 그룹 */}
            </div>

            <div className="ui-box">
              <div className="info-desc-area">
                <Typography variant="h2" className="bp-title">
                  <span className="txt-point">일비포인트</span>를 <br />
                  사용중인 회사입니다.
                </Typography>

                <div className="bp-description">
                  <List dense className="list-bullet">
                    <ListItem>
                      원활한 서비스 사용을 위하여 최초 1회 휴대폰 본인인증을
                      진행합니다.
                    </ListItem>
                    <ListItem>
                      휴대폰 본인인증 진행 후 [비플페이] 회원가입을 진행합니다.
                      <Typography variant="caption" display="block">
                        (기존 비플페이 회원일 경우 약관 동의만 진행됩니다.)
                      </Typography>
                    </ListItem>
                    <ListItem>
                      [비플페이]는 일비 포인트를 현장 결제에 사용하실 수
                      있습니다.
                    </ListItem>
                  </List>
                </div>

                <div className="anim-pic">
                  <div className="item-location"></div>
                </div>
              </div>
            </div>
            {/* [S]bottom-fixed */}
            <div className="bottom-fixed">
              <Box className="btns-group">
                <Box className="inner">
                  <Button
                    variant="contained"
                    size="large"
                    className="btn-xlarge"
                  >
                    휴대폰 본인인증하기
                  </Button>
                </Box>
              </Box>
            </div>
            {/* [E]bottom-fixed */}
          </div>
          {/* [E]light-box full-height */}
        </Paper>
        {/* [E]ui-paper login-wrap */}
      </LayoutFill>
    </>
  );
};

export default MLG010000;
