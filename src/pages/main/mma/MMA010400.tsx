import {
  Box,
  Button,
  Chip,
  ListItem,
  Paper,
} from "@mui/material";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";
import ChooseUseList from "src/templates/teams/ChooseUseList";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";

const MMA010400 = () => {
  const [RadioValue02, setRadioValue02] = useState("radio02-02");
  const handleChangeRadio02 = (event) => {
    setRadioValue02(event.target.value);
  };
  /* Toggle 버튼 */
  const [selected, setSelected] = React.useState(false);
  const [selected2, setSelected2] = React.useState(true);
  const clearSearch = () => {
    setFilteredLocations("");
  };

  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };

  const [filteredLocations, setFilteredLocations] = useState("");
  const handleDeleteChip = () => {
    console.info("");
  };
  const departmentChipsData = [
    { id: 1, expenseitems: "목록" },
    { id: 1, expenseitems: "추가" },
  ];
  const departmentChips = departmentChipsData.map((data) => (
    <ListItem key={data.id}>
      <Chip
        variant="outlined"
        label={
          <>
            <span className="expenseitem-name">{data.expenseitems}</span>
            {/* <span className="department-name">{data.departmentName}</span>
            <span className="employee-number">{data.employeeNumber}</span> */}
          </>
        }
        onDelete={handleDeleteChip}
        deleteIcon={<CloseIcon fontSize="small" className="bp-icon xsmall" />}
        className="bp-chip chip-light"
        size="medium"
      />
    </ListItem>
  ));
  return (
    <>
      <Head>
        <title>목적지 주변 검색</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap des-cir-search">
          {/* [S]map-route-wrap */}
          <div className="search-around-area">
            <div className="light-box">
              <div className="horizontal-scrolling">
                <div className="list-chip-label">
                  <Chip
                    label="양재본사"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    aria-selected="true"
                    label="아산공장"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="울산5공장"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="울산1공장"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="아산공장1영업소"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="양재본사1"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                  <Chip
                    label="아산공장1영업소"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-rounded"
                    clickable
                  />
                </div>
              </div>

              <div className="horizontal-scrolling">
                <div className="list-chip-label type-medium">
                  <Chip
                    label="편의점"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                  <Chip
                    label="카페"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                  <Chip
                    aria-selected="true"
                    label="음식점"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                  <Chip
                    label="주차장"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                  <Chip
                    label="주유소"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                  <Chip
                    label="주유소"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                  <Chip
                    label="주유소"
                    size="medium"
                    variant="outlined"
                    className="bp-chip type-radius"
                    clickable
                  />
                </div>
              </div>
            </div>

            <div className="light-box">
              <div className="ui-inner ui-box">{/* full-height?? */}
                <div className="iframe-area">{/* <div>api영역</div> */} 
                  <p>iframe-area</p>
                </div>
              </div>
            </div>
          </div>

          {/* [S] 추가 수정 200920 kjs */}
          <div className="light-box des-cir-wrap list-scroll">{/* 스크롤 필요 없을 시 list-scroll 삭제 */}
            <div className="ui-box inner-sides">
              <div className="right-area">
                <Link to="#" className="btn-small">
                  <span className="txt">목록보기</span>
                </Link>
                {/* <Link to="#" className="btn-small">
                  <span className="txt">지도보기</span>
                </Link> */}
              </div>
            </div>
            <ChooseUseList />
          </div>
          {/* [E] 추가 수정 200920 kjs */}
          {/* [E]map-route-wrap */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              현 지도에서 검색
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MMA010400;
