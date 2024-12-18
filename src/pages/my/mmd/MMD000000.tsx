import { ChevronRight } from "@mui/icons-material";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

type Anchor = "top" | "left" | "bottom" | "right";

const MMD000000: FC = (props) => {
  // [agreeChecked]
  const [agreeChecked, setAgreeChecked] = useState([
    false,
    false,
    false,
    false,
  ]);
  const handleChangeAgreeAll = (event) => {
    const isChecked = event.target.checked;
    setAgreeChecked([isChecked, isChecked, isChecked]);
  };

  const handleChangeAgree1 = () => {
    setAgreeChecked([
      !agreeChecked[0],
      agreeChecked[1],
      agreeChecked[2],
      agreeChecked[3],
    ]);
  };

  const handleChangeAgree2 = () => {
    setAgreeChecked([
      agreeChecked[0],
      !agreeChecked[1],
      agreeChecked[2],
      agreeChecked[3],
    ]);
  };
  const agreeChildren = (
    <List disablePadding className="bp-check-list list-agree-terms">
      <ListItem>
        <FormControlLabel
          label={
            <Box className="txt-label">
              <span className="txt-point">[필수]</span> 개인(신용)정보 수집 및
              이용 동의
            </Box>
          }
          control={
            <Checkbox checked={agreeChecked[0]} onChange={handleChangeAgree1} />
          }
        />
        <Button
          size="medium"
          color="primary"
          className="btn-view"
          endIcon={<ChevronRight fontSize="small" className="bp-icon small" />}
        ></Button>
      </ListItem>
      <ListItem>
        <FormControlLabel
          label={
            <Box className="txt-label">
              <span className="txt-point">[필수]</span> 개인(신용)정보 제3자
              제공 동의
            </Box>
          }
          control={
            <Checkbox checked={agreeChecked[1]} onChange={handleChangeAgree2} />
          }
        />
        <Button
          size="medium"
          color="primary"
          className="btn-view"
          endIcon={<ChevronRight fontSize="small" className="bp-icon small" />}
        ></Button>
      </ListItem>
    </List>
  );
  return (
    <>
      <Head>
        <title>약관동의</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap myd-agree-wrap">
          {/* [S]light-box full-height */}
          <div className="light-box full-height">
            <div className="ui-box">
              <Typography variant="body1" className="bp-description">
                마이데이터 서비스를 이용하기 위해서는 최초 등록 시
                이용약관동의가 필요합니다. 서비스 이용을 위해 내용 확인 후
                이용약관에 동의해주세요.
              </Typography>
            </div>
            <div className="ui-box">
              <FormControl
                component="fieldset"
                variant="standard"
                className="bp-group-list"
                fullWidth
                // error
              >
                <FormGroup className="bp-group-box">
                  <FormControlLabel
                    label={<Box className="txt-point">전체 동의</Box>}
                    control={
                      <Checkbox
                        checked={
                          agreeChecked[0] && agreeChecked[1] && agreeChecked[2]
                        }
                        // indeterminate={agreeChecked[0] !== agreeChecked[1]}
                        indeterminate={
                          agreeChecked.some(Boolean) &&
                          !agreeChecked.every(Boolean)
                        }
                        onChange={handleChangeAgreeAll}
                      />
                    }
                  />
                  {agreeChildren}
                </FormGroup>
              </FormControl>
            </div>
          </div>
          {/* [E]light-box full-height */}
        </Paper>

        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge"
              disabled
            >
              확인
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMD000000;
