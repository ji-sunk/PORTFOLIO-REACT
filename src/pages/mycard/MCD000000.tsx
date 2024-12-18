import { Box, Paper, Tab, Tabs } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import BtnsGroup from "src/components/common/BtnsGroup";
import TitleGroup from "src/components/common/TitleGroup";
import MyCardListSwiper from "src/components/swiper/MyCardListSwiper";
import LayoutSub from "src/templates/layout/LayoutSub";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  tabValue: number;
}

function BasicTabPanel(props: TabPanelProps) {
  const { children, tabValue, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={tabValue !== index}
      id={`basic-tabpanel-${index}`}
      aria-labelledby={`basic-tab-${index}`}
      {...other}
      className="tab-panel"
    >
      {tabValue === index && <div className="panel-inner">{children}</div>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `basic-tab-${index}`,
    "aria-controls": `basic-tabpanel-${index}`,
  };
}

const MCD000000 = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 상위 컴포넌트에서 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabs, setSubTabs] = useState([
    { label: "법인카드" },
    { label: "법인카드(전체)" },
    { label: "개인카드" },
    { label: "개인카드(전체)" },
  ]);

  // 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabStates, setSubTabStates] = useState(
    subTabs.map(() => ({ tabValue: 0 })),
  );

  // 각 하위 탭의 탭 변경 핸들러 함수
  const handleTabChange = (index: number, newValue: number) => {
    setSubTabStates((prevStates) => {
      const newSubTabStates = [...prevStates];
      newSubTabStates[index].tabValue = newValue;
      return newSubTabStates;
    });
  };
  return (
    <>
      <Head>
        <title>My카드</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , mycard-wrap */}
        <Paper className="ui-paper mycard-wrap">
          {/* [S] */}
          <Box className="bp-tabs tabs-basic tabs-size-medium tabs-rounded">
            <Tabs
              className="tab-list tab-typeLine"
              value={tabValue}
              onChange={tabHandleChange}
              aria-label=""
              TabIndicatorProps={{
                sx: {
                  width: "calc( 50% - 8px ) !important",
                  height: "calc( 100% - 8px ) !important",
                  marginLeft: "0",
                  backgroundColor: "#fff",
                  position: "absolute",
                  top: "4px",
                  borderRadius: "16px",
                  boxShadow: "0px 1px 10px 0px rgba(0, 0, 0, 0.08)",
                },
              }}
            >
              <Tab label="법인카드" {...a11yProps(0)} />
              <Tab label="개인카드" {...a11yProps(1)} />
            </Tabs>
            <BasicTabPanel tabValue={tabValue} index={0}>
              <div className="light-box">
                <MyCardListSwiper />
                <div className="ui-box"></div>
                <div className="ui-box">법인카드 잔여한도1</div>
              </div>
              <div className="light-box">
                <div className="ui-box">
                  <TitleGroup />
                </div>
              </div>
            </BasicTabPanel>
            <BasicTabPanel tabValue={tabValue} index={1}>
              <div className="light-box">
                <div className="ui-box">개인카드 잔여한도</div>
              </div>
              <BtnsGroup />
            </BasicTabPanel>
          </Box>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper mycard-wrap */}
      </LayoutSub>
    </>
  );
};

export default MCD000000;
