import { Box, Button, List, ListItem, Paper, Typography } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MSI030300 = () => {
  return (
    <>
      <Head>
        <title>버전정보</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]flex1-col */}
          <div className="flex1-col">
            <div className="light-box full-height">
              <div className="version-info-area">
                <List className="list-setting">
                  <ListItem className="item depth-box">
                    <div className="inner-sides">
                      <Typography variant="h4" className="bp-title">
                        장치정보
                      </Typography>
                    </div>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">IPhone</dt>
                      <dd className="right-area">
                        <label className="item-data">17.2.1</label>
                      </dd>
                    </dl>
                  </ListItem>
                  <ListItem className="item depth-box">
                    <div className="inner-sides">
                      <Typography variant="h4" className="bp-title">
                        앱버전
                      </Typography>
                    </div>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">V 1.0.0</dt>
                      <dd className="right-area">
                        <label className="item-data">Bulid800릴리즈</label>
                      </dd>
                    </dl>
                  </ListItem>
                  <ListItem className="item depth-box">
                    <div className="inner-sides">
                      <Typography variant="h4" className="bp-title">
                        이용기관정보
                      </Typography>
                    </div>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">그룹코드</dt>
                      <dd className="right-area">
                        <label className="item-data">현대자동차</label>
                      </dd>
                    </dl>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">이용기관</dt>
                      <dd className="right-area">
                        <label className="item-data">현대자동차</label>
                      </dd>
                    </dl>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">이용기관명</dt>
                      <dd className="right-area">
                        <label className="item-data">현대자동차</label>
                      </dd>
                    </dl>
                  </ListItem>
                  <ListItem className="item depth-box">
                    <div className="inner-sides">
                      <Typography variant="h4" className="bp-title">
                        사용자정보
                      </Typography>
                    </div>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">ID</dt>
                      <dd className="right-area">
                        <label className="item-data">1212312</label>
                      </dd>
                    </dl>
                    <dl className="inner-sides neutral-light">
                      <dt className="left-area">이름</dt>
                      <dd className="right-area">
                        <label className="item-data">김현대</label>
                      </dd>
                    </dl>
                  </ListItem>
                </List>
              </div>
              <Box className="txt-btns-group">
                <Button size="medium">텍스트 복사</Button>
              </Box>
            </div>
          </div>
          {/* [E]flex1-col */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
      </LayoutSub>
    </>
  );
};

export default MSI030300;
