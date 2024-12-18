
import {
  Paper,
  Box,
  TextField,
} from "@mui/material";
import {
Edit05,
FaceId,
} from "@untitled-ui/icons-react";
import * as React from "react";
import FilterSet from "src/components/common/FilterSet";
import NoData from "src/components/common/NoData";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMM010000 = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [checked, setChecked] = useState(false);
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  return (
    <>
      <Head>
        <title>메모내역</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : ui-paper", flex-wrap,  bt-memo-wrap */}
        <Paper className="ui-paper flex-wrap bt-memo-wrap">{/* 플로팅 버튼 영역 때문에 하단 (패딩)여백이 필요 없으면  .ui-paper 클래스 삭제 */}
          
          <div className="light-box full-height ui-box ui-inner">
            {/* [S]loop */}
            <div className="memo-box">
              <div className="inner-sides">
                <div className="left-area">
                  <Box className="bp-title">
                    제목영역
                  </Box>
                </div>
                <div className="right-area">
                  <Box className="bp-date">
                    2024.04.01
                  </Box>
                </div>
              </div>
              
              <div className="bp-memo-dec">
                공장장 미팅 (2시)
              </div>
            </div>
            {/* [E]loop */}

            <div className="memo-box">
              <div className="inner-sides">
                <div className="left-area">
                  <Box className="bp-title">
                    제목영역입니다. 제목이 길어질 경우 예제입니다.
                  </Box>
                </div>
                <div className="right-area">
                  <Box className="bp-date">
                    2024.04.01
                  </Box>
                </div>
              </div>
              <div className="bp-memo-dec">
                내용이 나오는 영역입니다.
                내용이 나오는 영역입니다. 최대 노출되는 글자수는 기획 확인 후 전달 하겠습니다.
              </div>
            </div>
            <div className="memo-box">
              <div className="inner-sides">
                <div className="left-area">
                  <Box className="bp-title">
                    제목영역입니다. 제목이 길어질 경우 예제입니다.
                  </Box>
                </div>
                <div className="bp-date">
                  2024.04.01
                </div>
              </div>
              <div className="bp-memo-dec">
                내용이 나오는 영역입니다.
                내용이 나오는 영역입니다. 최대 노출되는 글자수는 기획 확인 후 전달 하겠습니다.
              </div>
            </div>
            <div className="memo-box">
              <div className="inner-sides">
                <div className="left-area">
                  <Box className="bp-title">
                    제목영역입니다. 제목이 길어질 경우 예제입니다.
                  </Box>
                </div>
                <div className="right-area">
                  <Box className="bp-date">
                    2024.05.01
                  </Box>
                </div>
              </div>
              <div className="bp-memo-dec">
                내용이 나오는 영역입니다.
                내용이 나오는 영역입니다. 최대 노출되는 글자수는 기획 확인 후 전달 하겠습니다.
              </div>
            </div>
            <div className="memo-box">
              <div className="inner-sides">
                <div className="left-area">
                  <Box className="bp-title">
                    제목영역입니다. 제목이 길어질 경우 예제입니다.
                  </Box>
                </div>
                <div className="bp-date">
                  2024.04.01
                </div>
              </div>
              <div className="bp-memo-dec">
                내용이 나오는 영역입니다.
                내용이 나오는 영역입니다. 최대 노출되는 글자수는 기획 확인 후 전달 하겠습니다.
              </div>
            </div>
          </div>
           
        </Paper>
        {/* [E]ui-paper, flex-wrap,  bt-memo-wrap */}
      </LayoutSub>
    </>
  );
};

export default MMM010000;
