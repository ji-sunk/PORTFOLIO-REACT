import { Box, Icon, Paper } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MMA010201 = () => {
  return (
    <>
      <Head>
        <title>교통수단 | 상세경로</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper", bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height course-area-line">
            <div className="ui-box">
              <div className="neutral-box">
                <Box className="time">3시간 11분</Box>
                <div className="txt-detail">
                  <div className="item-txt">도보 11분</div>
                  <div className="item-txt">환승 1회</div>
                  <div className="item-txt">231.3 Km</div>
                </div>
              </div>
            </div>
            <div className="ui-box item-field">
              {/* course-step */}
              <ul className="course-step">
                <li className="item">
                  {/* 
                    출발 icon-start
                    도보 icon-walk
                    비행 icon-airplane
                    자차 icon-car
                    택시 icon-taxi
                    도착 icon-location
                    시내버스 icon-pubBus
                    고속/시외 버스 icon-expBus
                    KTX / SRT / 지하철 icon-train
                  */}
                  <Icon className="ico icon-start"></Icon>
                  <div className="txt">출발</div>
                  <div className="course-desc">
                    <p>서울 중구 을지로 입구서울 중구 을지로 입구</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-walk"></Icon>
                  <div className="txt">도보</div>
                  <div className="course-desc">
                    <p>롯데백화점까지 도보로 이동</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-pubBus"></Icon>
                  <div className="txt">시내버스</div>
                  <div className="course-desc">
                    <p>롯데백화점 승차</p>
                    <strong className="color-primary-dark">간선 : 143</strong>
                    <p>고속터미널 하차</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-walk"></Icon>
                  <div className="txt">도보</div>
                  <div className="course-desc">
                    <p>서울 고속버스터미널 도보 이동</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-expBus"></Icon>
                  <div className="txt">고속버스</div>
                  <div className="course-desc">
                    <p>서울 고속버스터미널 승차</p>
                    <strong className="color-primary-dark">
                      고속버스 : 서울 &gt; 울산
                    </strong>
                    <p>울산 고속버스터미널 하차</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-walk"></Icon>
                  <div className="txt">도보</div>
                  <div className="course-desc">
                    <p>도보 이동</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-pubBus"></Icon>
                  <div className="txt">시내버스</div>
                  <div className="course-desc">
                    <p>00 버스정류장 승차</p>
                    <strong className="color-primary-dark">
                      일반 : 754 / 일반 : 728
                    </strong>
                    <p>선암동 하차</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-walk"></Icon>
                  <div className="txt">도보</div>
                  <div className="course-desc">
                    <p>현대자동차 울산5공장까지 도보로 이동</p>
                  </div>
                </li>
                <li className="item">
                  <Icon className="ico icon-location"></Icon>
                  <div className="txt">도착</div>
                  <div className="course-desc">
                    <p>현대자동차 울산 5공장</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
      </LayoutSub>
    </>
  );
};

export default MMA010201;
