import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import {
  Avatar,
  Box,
  List,
  ListItem,
  Paper,
  ToggleButton,
} from "@mui/material";
import * as React from "react";
import { Helmet as Head } from "react-helmet";
import FilterSet from "src/components/common/FilterSet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMY060000 = () => {
  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(true);
  const [selected2, setSelected2] = React.useState(true);
  const [selected3, setSelected3] = React.useState(true);
  return (
    <>
      <Head>
        <title>출장자 즐겨찾기</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap favorites-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            <div className="ui-box">
              <FilterSet />
            </div>

            <div className="address-list">
              <List className="ranks-group">
                {/* [S]loop */}
                <ListItem className="item">
                  <div className="inner-sides">
                    <div className="left-area">
                      <Avatar
                        sizes="small"
                        className="bp-avatar size-small type-outlined color-success"
                        aria-label="사업장"
                      >
                        <Box>사업장</Box>
                      </Avatar>
                      <dl>
                        <dt>
                          <Box className="txt">
                            메리어트관 제주신화월드 호텔앤리조트
                          </Box>
                        </dt>
                        <dd>
                          스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                          업그레이드
                        </dd>
                      </dl>
                    </div>
                    <div className="right-area">
                      <ToggleButton
                        value="button"
                        selected={selected}
                        onChange={() => {
                          setSelected(!selected);
                        }}
                        className="btn-icon-toggle icon-bookmark"
                      >
                        <StarRateRoundedIcon fontSize="medium" />
                      </ToggleButton>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="item">
                  <div className="inner-sides">
                    <div className="left-area">
                      <Avatar
                        sizes="small"
                        className="bp-avatar size-small type-outlined color-blue"
                        aria-label="협력사"
                      >
                        <Box>협력사</Box>
                      </Avatar>
                      <dl>
                        <dt>
                          <Box className="txt">
                            메리어트관 제주신화월드 호텔앤리조트
                          </Box>
                        </dt>
                        <dd>
                          스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                          업그레이드
                        </dd>
                      </dl>
                    </div>
                    <div className="right-area">
                      <ToggleButton
                        value="button"
                        selected={selected2}
                        onChange={() => {
                          setSelected2(!selected2);
                        }}
                        className="btn-icon-toggle icon-bookmark"
                      >
                        <StarRateRoundedIcon fontSize="medium" />
                      </ToggleButton>
                    </div>
                  </div>
                </ListItem>
                <ListItem className="item">
                  <div className="inner-sides">
                    <div className="left-area">
                      <Avatar
                        sizes="small"
                        className="bp-avatar size-small type-outlined color-gray"
                        aria-label="기타"
                      >
                        <Box>기타</Box>
                      </Avatar>
                      <dl>
                        <dt>
                          <Box className="txt">
                            메리어트관 제주신화월드 호텔앤리조트
                          </Box>
                        </dt>
                        <dd>
                          스탠다드-더블 디럭스룸 스탠다드-더블 디럭스룸 무료
                          업그레이드
                        </dd>
                      </dl>
                    </div>
                    <div className="right-area">
                      <ToggleButton
                        value="button"
                        selected={selected3}
                        onChange={() => {
                          setSelected3(!selected3);
                        }}
                        className="btn-icon-toggle icon-bookmark"
                      >
                        <StarRateRoundedIcon fontSize="medium" />
                      </ToggleButton>
                    </div>
                  </div>
                </ListItem>
              </List>
            </div>
          </div>
        </Paper>
      </LayoutSub>
    </>
  );
};

export default MMY060000;
