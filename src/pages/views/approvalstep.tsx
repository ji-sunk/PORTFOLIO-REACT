import { Box, Button, Chip, Paper } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const ApprovalStep = () => {
  return (
    <>
      <Head>
        <title>결재정보 | 결재함(결재자)</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group view-plan : 결재정보 */}
            <div className="fields-group view-plan">
              {/* ui-box approval-area-line */}
              <Box
                className="approval-area-line"
                sx={{
                  display: "Flex",
                  padding: "0 20px",
                  margin: "0 auto",
                  justifyContent: "center",
                  gap: "30px",
                }}
              >
                {/* 1 결재단계 */}
                <ol className="approval-step">
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">1</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">김현대 과장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">2</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">이현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item">
                    <Box className="num-mark">
                      <span className="txt">3</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      {/* <Box className="txt-date">yyyy.mm.dd</Box> */}
                    </Box>
                  </li>
                  <li className="item">
                    <Box className="num-mark">
                      <span className="txt">4</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      {/* <Box className="txt-date">yyyy.mm.dd</Box> */}
                    </Box>
                  </li>
                  <li className="item">
                    <Box className="num-mark">
                      <span className="txt">5</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">최현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      {/* <Box className="txt-date">yyyy.mm.dd</Box> */}
                    </Box>
                  </li>
                </ol>

                {/* all 결재단계 */}
                <ol className="approval-step">
                  {/* item is-active 결재 */}
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">1</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">김현대 과장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">2</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">이현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">3</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">4</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">5</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">최현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      {/* <div className="txt-data-desc">
                          사유: 이미 해결된 이슈로 해당 출장건은 반려합니다.
                        </div> */}
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                </ol>

                {/* 결재단계 4반려포함 */}
                <ol className="approval-step">
                  {/* item is-active 결재 */}
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">1</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">김현대 과장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">2</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">이현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">3</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-reject">
                    <Box className="num-mark">
                      <span className="txt">4</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc">
                        사유: 이미 해결된 이슈로 해당 출장건은 반려합니다.
                      </div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재반려"
                          size="small"
                          color="error"
                          className="bp-chip color-twotone color-error"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item ">
                    <Box className="num-mark">
                      <span className="txt">5</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">최현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      {/* <Box className="txt-date">yyyy.mm.dd</Box> */}
                    </Box>
                  </li>
                </ol>

                {/* 결재단계 5반려포함 */}
                <ol className="approval-step">
                  {/* item is-active */}
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">1</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">김현대 과장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">chips</div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">2</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">이현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">3</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  <li className="item is-active">
                    <Box className="num-mark">
                      <span className="txt">4</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">박현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc"></div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재완료"
                          size="small"
                          color="info"
                          className="bp-chip color-twotone color-info"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                  {/* 반려 : is-reject */}
                  <li className="item is-reject">
                    <Box className="num-mark">
                      <span className="txt">5</span>
                    </Box>
                    <Box className="item-user-info">
                      <div className="user-info-row">
                        <div className="user-name">최현대 부장(1341341)</div>
                      </div>
                      <div className="user-info-row">
                        <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                      </div>
                      <div className="txt-data-desc">
                        사유: 이미 해결된 이슈로 해당 출장건은 반려합니다.
                      </div>
                    </Box>
                    <Box className="chip-area">
                      <div className="chips-group">
                        <Chip
                          label="결재반려"
                          size="small"
                          color="error"
                          className="bp-chip color-twotone color-error"
                        />
                      </div>
                      <Box className="txt-date">yyyy.mm.dd</Box>
                    </Box>
                  </li>
                </ol>
              </Box>
            </div>
            {/* [E]fields-group view-plan */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              확인
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default ApprovalStep;
