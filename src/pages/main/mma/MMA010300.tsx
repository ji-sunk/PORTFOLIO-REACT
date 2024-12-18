import { Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  Drawer,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import { ChevronRight, SearchSm, Target03 } from "@untitled-ui/icons-react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";
import LayoutSub from "src/templates/layout/LayoutSub";
import "swiper/css";

const MMA010300 = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // 전체업종 Drawer 상태
  const [isSubDrawerOpen, setIsSubDrawerOpen] = useState(true); // 업종 선택 Drawer 상태
  const [expanded, setExpanded] = useState(false); // 리스트 확장 상태

  const listData = [
    {
      title: "우주라이크커피양정점",
      phone: "052-1234-5678",
      address: "울산광역시 동구 방어진순환도로 911 1층",
      distance: "3.5km",
      type: "카페",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
      // locationIcon: "/assets/images/icons/icon-location.svg",
    },
    {
      title: "달빛카페달빛카페달빛카페달빛카페달빛카페",
      phone: "052-9876-5432",
      address:
        "울산광역시 중구 성남동 123-45 울산광역시 중구 성남동 123-45울산광역시 중구 성남동 123-45",
      //distance: "2.1km",
      type: "카페",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
    },
    {
      title: "별빛레스토랑",
      phone: "052-5678-1234",
      address: "울산광역시 남구 삼산로 678",
      //distance: null,
      type: "레스토랑",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
    },
    {
      title: "별빛레스토랑",
      phone: "052-5678-1234",
      address: "울산광역시 남구 삼산로 678",
      type: "레스토랑",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
    },
    {
      title: "별빛레스토랑",
      phone: "052-5678-1234",
      address: "울산광역시 남구 삼산로 678",
      type: "레스토랑",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
    },
    {
      title: "별빛레스토랑",
      phone: "052-5678-1234",
      address: "울산광역시 남구 삼산로 678",
      type: "레스토랑",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
    },
    {
      title: "별빛레스토랑",
      phone: "052-5678-1234",
      address: "울산광역시 남구 삼산로 678",
      type: "레스토랑",
      phoneIcon: "/assets/images/icons/icon-phone.svg",
      copyIcon: "/assets/images/icons/icon-copy.svg",
    },
  ];

  // 터치 영역 클릭 시 상태를 토글
  const handleTouchAreaClick = () => {
    setExpanded((prev) => !prev);
  };

  // 전체업종 Drawer 토글
  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  // 업종 선택 Drawer 토글
  const toggleSubDrawer = (open: boolean) => () => {
    setIsSubDrawerOpen(open);
  };

  return (
    <>
      <Head>
        <title>가맹점 찾기</title>
      </Head>
      <LayoutSub>
        {/* UI 기본 영역 */}
        <Paper className="ui-paper fc-search-wrap des-cir-search">
          <div className="search-around-area">
            <div className="light-box">
              <div className="map-area">
                {/* 상단 버튼 */}
                <div className="btn-pos-top">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={toggleDrawer(true)}
                    className="btn-small-wh"
                  >
                    전체업종
                    <ChevronRight className="bp-icon small" />
                  </Button>
                </div>
                {/* 지도 이미지 개발 시 삭제 dummy image */}
                <img
                  src="/assets/images/map.png"
                  alt="지도 테스트이미지"
                  className="map-dum"
                  style={{ width: "100%", height: "100vh" }}
                />
                {/* 하단 버튼 */}
                <div className="btn-pos-box1">
                  <Button
                    aria-label="Search"
                    size="small"
                    className="btn-basic MuiButton-outlined round-wh"
                    startIcon={
                      <SearchSm fontSize="small" className="bp-icon small" />
                    }
                  >
                    현 지도에서 검색
                  </Button>
                </div>
                <div className="btn-pos-box2">
                  {/* GPS 버튼 */}
                  <IconButton aria-label="GPS" className="btn-gps">
                    <Target03 className="bp-icon small" />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer - 가맹점 리스트 (기본적으로 open) */}
          <Drawer
            anchor="bottom"
            open={isSubDrawerOpen}
            onClose={toggleSubDrawer(false)}
            className="bp-drawer drawer-bottom"
            variant="persistent"
          >
            <div
              className="drawer-header touch-area"
              onClick={handleTouchAreaClick}
            >
              <div className="touchbar"></div>
            </div>

            <Paper className="drawer-body list">
              <ul className="list-items">
                {/* 첫 번째 아이템은 항상 표시 */}
                {listData.slice(0, 1).map((item, index) => (
                  <li className="list-item" key={index}>
                    <Box className="inner-label">
                      <Chip
                        label={item.type}
                        size="small"
                        variant="outlined"
                        className="bp-chip type-radius"
                      />
                      <div className="title bp-ellipsis2">{item.title}</div>
                    </Box>
                    <div className="txt-box inner">
                      <Link
                        className="tel-num inner-sides"
                        to={`tel:${item.phone}`}
                      >
                        {item.phone}
                        <IconButton className="btn-icon-only" size="small">
                          <img src={item.phoneIcon} alt="전화" />
                        </IconButton>
                      </Link>
                      <div className="address inner-sides">
                        {item.address}
                        <IconButton className="btn-icon-only" size="small">
                          <img src={item.copyIcon} alt="복사" />
                        </IconButton>
                      </div>
                      {/* {item.distance && (
                        <div className="dd-txt inner-sides">
                          $목적지명$부터의 거리
                          <span className="km">{item.distance}</span>
                          <IconButton className="btn-icon-only" size="small">
                            <img src={item.locationIcon} alt="목적지" />
                          </IconButton>
                        </div>
                      )} */}
                    </div>
                  </li>
                ))}

                {/* 나머지 아이템은 expanded 상태에 따라 표시 */}
                {expanded &&
                  listData.slice(1).map((item, index) => (
                    <li className="list-item" key={index + 1}>
                      <Box className="inner-label">
                        <Chip
                          label={item.type}
                          size="small"
                          variant="outlined"
                          className="bp-chip type-radius"
                          //clickable
                        />
                        <div className="title bp-ellipsis2">{item.title}</div>
                      </Box>
                      <div className="txt-box inner">
                        <Link
                          className="tel-num inner-sides"
                          to={`tel:${item.phone}`}
                        >
                          {item.phone}
                          <IconButton className="btn-icon-only" size="small">
                            <img src={item.phoneIcon} alt="전화" />
                          </IconButton>
                        </Link>
                        <div className="address inner-sides">
                          {item.address}
                          <IconButton className="btn-icon-only" size="small">
                            <img src={item.copyIcon} alt="복사" />
                          </IconButton>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </Paper>
          </Drawer>

          {/* 전체업종 선택 Drawer */}
          <Drawer
            anchor="bottom"
            open={isDrawerOpen}
            onClose={toggleDrawer(false)}
            className="bp-drawer drawer-bottom"
          >
            <div className="drawer-header">
              <div className="inner">
                <Box className="left-area">
                  <Typography variant="h2">업종 선택</Typography>
                </Box>
                <Box className="right-area">
                  <IconButton
                    className="btn-icon-only"
                    size="small"
                    onClick={toggleDrawer(false)} // 닫기 버튼
                  >
                    <Close fontSize="small" className="bp-icon" />
                  </IconButton>
                </Box>
              </div>
            </div>
            <Paper className="drawer-body btr-wrap">
              <Box className="drawer-cont">
                <div className="menu-area">
                  <div className="btn-menu-area block-type3">
                    <IconButton className="btn-icon-menu" aria-label="전체업종">
                      <img src="/assets/images/menu/menu-item1.svg" alt="" />
                      <span>전체업종</span>
                    </IconButton>
                    <IconButton className="btn-icon-menu" aria-label="학원교육">
                      <img src="/assets/images/menu/menu-item2.svg" alt="" />
                      <span>학원교육</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="음식점/카페"
                    >
                      <img src="/assets/images/menu/menu-item3.svg" alt="" />
                      <span>음식점/카페</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="식료품/반찬"
                    >
                      <img src="/assets/images/menu/menu-item4.svg" alt="" />
                      <span>식료품/반찬</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="농산물/청과"
                    >
                      <img src="/assets/images/menu/menu-item5.svg" alt="" />
                      <span>농산물/청과</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="축산물/정육"
                    >
                      <img src="/assets/images/menu/menu-item6.svg" alt="" />
                      <span>축산물/정육</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="수산물/횟집"
                    >
                      <img src="/assets/images/menu/menu-item7.svg" alt="" />
                      <span>수산물/횟집</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="의료/보건"
                    >
                      <img src="/assets/images/menu/menu-item8.svg" alt="" />
                      <span>의료/보건</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="미용/패션"
                    >
                      <img src="/assets/images/menu/menu-item9.svg" alt="" />
                      <span>미용/패션</span>
                    </IconButton>

                    <IconButton
                      className="btn-icon-menu"
                      aria-label="가전/가구"
                    >
                      <img src="/assets/images/menu/menu-item10.svg" alt="" />
                      <span>가전/가구</span>
                    </IconButton>
                    <IconButton className="btn-icon-menu" aria-label="서비스업">
                      <img src="/assets/images/menu/menu-item11.svg" alt="" />
                      <span>서비스업</span>
                    </IconButton>
                    <IconButton
                      className="btn-icon-menu"
                      aria-label="기타/도소매"
                    >
                      <img src="/assets/images/menu/menu-item12.svg" alt="" />
                      <span>기타/도소매</span>
                    </IconButton>
                  </div>
                </div>
              </Box>
            </Paper>
          </Drawer>
        </Paper>
      </LayoutSub>
    </>
  );
};

export default MMA010300;
