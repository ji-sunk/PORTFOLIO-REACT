import {
  Box,
  Button,
  Paper,
  TextField,
} from "@mui/material";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMM020000 = () => {

  return (
    <>
      <Head>
        <title>메모작성 / 메모상세</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap,  bt-memo-wrap */}
        <Paper className="ui-paper bztrip-wrap bt-memo-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            <div className="bt-form ui-box">
              <div className="inner-sides">
                <div className="right-area">
                  <Box className="bp-date">
                    2024.04.01
                  </Box>
                </div>
              </div>
              <div className="item-field">
                <TextField label="제목" placeholder="" fullWidth />
              </div>
              <div className="item-field">
                <TextField label="내용" multiline maxRows={10} fullWidth />
              </div>
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap, bt-memo-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              삭제
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              저장
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMM020000;
