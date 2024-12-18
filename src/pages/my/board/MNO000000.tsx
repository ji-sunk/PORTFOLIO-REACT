import { Box, Chip, Paper } from "@mui/material";
import { ChevronRight } from "@untitled-ui/icons-react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";

const MNO000000 = () => {
  return (
    <>
      <Head>
        <title>공지사항</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]flex1-col */}
          <div className="flex1-col">
            <div className="light-box full-height">
              <div className="board-wrap ui-box">
                <Box className="card-noti">
                  <Link to="#" className="item">
                    <div className="flex-row">
                      <Chip
                        label="중요"
                        size="small"
                        color="error"
                        variant="outlined"
                        className="bp-chip color-twotone color-error"
                      />
                      <div className="txt bp-ellipsis">
                        현대자동차 국내출장플랫폼이 오픈되었습니다. 현대자동차
                        국내출장플랫폼이 오픈되었습니다.
                      </div>
                      <Box className="right-area">
                        <ChevronRight className="bp-icon" />
                      </Box>
                    </div>
                    <div className="item-date">
                      <Box className="txt">2024.05.01</Box>
                    </div>
                  </Link>
                </Box>
                <Box className="card-noti">
                  <Link to="#" className="item">
                    <div className="flex-row">
                      <div className="txt bp-ellipsis">
                        현대자동차 국내출장플랫폼이 오픈되었습니다. 현대자동차
                        국내출장플랫폼이 오픈되었습니다.
                      </div>
                      <Box className="right-area">
                        <ChevronRight className="bp-icon" />
                      </Box>
                    </div>
                    <div className="item-date">
                      <Box className="txt">2024.05.01</Box>
                    </div>
                  </Link>
                </Box>
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

export default MNO000000;
