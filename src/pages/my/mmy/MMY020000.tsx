import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Paper,
  SwipeableDrawer,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { Pencil02 } from "@untitled-ui/icons-react";
import { useRef } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

import * as React from "react";
import { useState } from "react";
import "swiper/css";

const MMY020000 = () => {
  // 버튼 file
  const fileInputRef1 = useRef(null);
  const handleButtonClick1 = () => {
    fileInputRef1.current.click();
  };
  const handleFileChange1 = (event) => {
    //
  };
  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(false);

  const [open, setOpen] = useState(false);
  const onClose = (e) => setOpen(false);

  // [Drawer]
  const [drawerHeaderHeight, setDrawerHeaderHeight] = useState(0);
  const [RadioValueCard, setRadioValueCard] = useState("radioCard-00");
  const handleChangeradioCard = (event) => {
    setRadioValueCard(event.target.value);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState({
    listDrawer1: false,
  });
  const toggleDrawer = (drawerId, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen({ ...isDrawerOpen, [drawerId]: open });

    if (open) {
      const headerHeight =
        document.getElementById("drawer-header")?.offsetHeight || 0;
      setDrawerHeaderHeight(headerHeight);
    }
  };
  return (
    <>
      <Head>
        <title>개인정보 수정 | 마이페이지</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , mypage-wrap */}
        <Paper className="ui-paper mypage-wrap">
          {/* [E]edit-personal */}
          <div className="edit-personal">
            {/* 프로필 삭제 241031 kjs */}
            {/* <div className="light-box">
              <div className="ui-box">
                <dl className="item-user-info">
                  <dt className="photo">
                    <Avatar
                      alt="최현대"
                      src="/assets/images/tmp-profile2.png"
                      className="user-avatar"
                    />
                    <div className="file-edit">
                      <input
                        ref={fileInputRef1}
                        type="file"
                        onChange={handleFileChange1}
                        className="hidden"
                      />
                      <IconButton
                        className="btn-icon-only btn-circle btn-basic"
                        size="small"
                        aria-label="수정"
                        onClick={handleButtonClick1}
                      >
                        <Edit02 fontSize="small" className="bp-icon xsmall" />
                      </IconButton>
                    </div>
                  </dt>
                  <dd>
                    <div className="user-name">최현대 과장(1341341)</div>
                    <div className="user-team">라이프디자인팀 (TBCM-1)</div>
                  </dd>
                </dl>
              </div>
            </div> */}
            <div className="light-box full-height">
              <div className="ui-box">
                <div className="bp-list">
                  <Typography variant="h3">기본정보</Typography>

                  <dl className="item-field">
                    <dt className="txt-title">이름(한글)</dt>
                    <dd className="right-area">
                      <div className="txt-data">김현대</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">이름(영문)</dt>
                    <dd className="right-area">
                      <div className="txt-data">Hyundai KIM</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">아이디(사번)</dt>
                    {/* 텍스트 수정 241008 kjs */}
                    <dd className="right-area">
                      <div className="txt-data">hd_kim</div>
                    </dd>
                  </dl>
                  {/* 현대차 대상아님 주석처리 241008 kjs */}
                  {/* <dl className="item-field">
                    <dt className="txt-title">비밀번호</dt>
                    <dd className="right-area">
                      <Button
                        size="large"
                        className="btn-text"
                        endIcon={
                          <Edit02 fontSize="small" className="bp-icon small" />
                        }
                      >
                        비밀번호 변경
                      </Button>
                    </dd>
                  </dl> */}
                  <dl className="item-field">
                    <dt className="txt-title">휴대폰번호</dt>
                    <dd className="right-area">
                      <div className="txt-data">010-0000-1111</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">이메일</dt>
                    <dd className="right-area">
                      <div className="txt-data">hdkim@hyundai.com</div>
                    </dd>
                  </dl>
                  {/* [S] 예약정보 수정 추가 241008 kjs */}
                  <div className="br-line inner-sides">
                    <Typography variant="h3">예약정보 수정</Typography>
                    <div className="right-area">
                      <IconButton
                        aria-label="예약정보수정"
                        onClick={toggleDrawer("listDrawer1", true)}
                      >
                        <Pencil02 className="bp-icon small" />
                      </IconButton>
                    </div>
                  </div>
                  {/* [E] 예약정보 수정 추가 241008 kjs */}
                </div>
              </div>
              <div className="ui-box">
                <div className="bp-list">
                  <Typography variant="h3">소속정보</Typography>
                  <dl className="item-field">
                    <dt className="txt-title">그룹</dt>
                    <dd className="right-area">
                      <div className="txt-data">현대자동차</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">그룹코드</dt>
                    <dd className="right-area">
                      <div className="txt-data">H101</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">회사</dt>
                    <dd className="right-area">
                      <div className="txt-data">현대자동차</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">부서</dt>
                    <dd className="right-area">
                      <div className="txt-data">라이프디자인팀</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">직급</dt>
                    <dd className="right-area">
                      <div className="txt-data">매니저</div>
                    </dd>
                  </dl>
                  <dl className="item-field">
                    <dt className="txt-title">직책</dt>
                    <dd className="right-area">
                      <div className="txt-data">팀장</div>
                    </dd>
                  </dl>
                </div>
              </div>
              {/* [S] 약관동의여부 추가 241008 kjs */}
              <div className="ui-box">
                <div className="bp-list">
                  <Typography variant="h3">약관동의여부</Typography>
                  <dl className="item-field">
                    <dt className="txt-title">위치정보</dt>
                    <dd className="right-area in-grid">
                      <div className="switch-box">
                        <Switch defaultChecked />
                        <span>동의</span>
                      </div>
                      <p className="color-secondary">동의일 2024.04.01</p>
                    </dd>
                  </dl>
                  {/* [S] 마케팅 정보수신 추가 241014 kjs */}
                  <dl className="item-field">
                    <dt className="txt-title">마케팅 정보수신</dt>
                    <dd className="right-area in-grid">
                      <div className="switch-box">
                        <Switch defaultChecked />
                        <span>동의</span>
                      </div>
                      <p className="color-secondary">동의일 2024.04.01</p>
                    </dd>
                  </dl>
                  {/* [E] 마케팅 정보수신 추가 241014 kjs */}
                </div>
              </div>
              {/* [E] 약관동의여부 추가 241008 kjs */}
            </div>

            {/* [S]SwipeableDrawer 출장예약 추가정보 입력 : 241008 kjs */}
            <SwipeableDrawer
              anchor="bottom"
              open={isDrawerOpen.listDrawer1}
              onClose={toggleDrawer("listDrawer1", false)}
              onOpen={toggleDrawer("listDrawer1", true)}
              className="bp-drawer drawer-bottom"
            >
              <div className="drawer-header" id="drawer-header">
                <div className="inner">
                  <Box className="left-area"></Box>
                  <Box className="right-area">
                    <IconButton
                      className="btn-icon-only"
                      size="small"
                      aria-label="닫기"
                      onClick={toggleDrawer("listDrawer1", false)}
                    >
                      <Close fontSize="small" className="bp-icon" />
                    </IconButton>
                  </Box>
                </div>
                <div className="inner">
                  <Box className="left-area">
                    <Typography variant="h2">출장예약 추가정보 입력</Typography>
                  </Box>
                </div>
              </div>
              <Paper className="drawer-body btr-wrap">
                <Box className="drawer-cont">
                  <div className="box-inner">
                    <p className="txt-primary">
                      출장예약 시 사용자 등록과정을 간소화하기 위해
                      <br />
                      추가정보를 입력해주세요.
                    </p>
                    <p className="txt-secondary">
                      * 여권정보와 동일한 정보입력을 요청드립니다.
                    </p>
                  </div>

                  <div className="item-field inner-sides">
                    <TextField label="한글 이름" placeholder="" fullWidth />
                    <TextField label="한글 성" placeholder="" fullWidth />
                    <TextField label="영문 이름" placeholder="" fullWidth />
                    <TextField label="영문 성" placeholder="" fullWidth />
                  </div>

                  <Box className="btns-group">
                    <Box className="inner">
                      <Button
                        variant="contained"
                        className="btn-medium color-neutral"
                        size="large"
                      >
                        취소
                      </Button>
                      <Button variant="contained" size="large">
                        변경
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </SwipeableDrawer>
            {/* [E]SwipeableDrawer 출장예약 추가정보 입력 : listDrawer1 241008 kjs */}
          </div>
          {/* [E]edit-personal */}
        </Paper>
        {/* [E]ui-paper mypage-wrap */}
      </LayoutSub>
    </>
  );
};

export default MMY020000;
