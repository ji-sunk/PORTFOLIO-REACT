// import CancelIcon from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Chip,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  Paper,
  Stack,
  TextField,
} from "@mui/material";
import { SearchSm } from "@untitled-ui/icons-react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutMain from "src/templates/layout/LayoutMain";
import BpTblOrganization2 from "src/templates/teams/BpTblOrganization2";

import "swiper/css";



const SampleMain = () => {
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
    { id: 1, departmentName: "비서실" },
    { id: 2, departmentName: "영업팀" },
  ];
  const departmentChips = departmentChipsData.map((data) => (
    <ListItem key={data.id}>
      <Chip
        variant="outlined"
        label={
          <>
            <span className="department-name">{data.departmentName}</span>
            {/* <span className="employee-number">{data.employeeNumber}</span> */}
          </>
        }
        onDelete={handleDeleteChip}
        deleteIcon={<CloseIcon fontSize="small" className="bp-icon xsmall" />}
        className="bp-chip chip-light"
        size="medium"
      />
    </ListItem>
   ));  
  // const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Head>
        <title>메인샘플 테스트</title>
      </Head>
      <LayoutMain>
        <Paper className="ui-paper bztrip-wrap">

          {/* [S] */}
          <div className="light-box full-height">
            <div className="ui-box">
              <Stack
                direction="row"
                spacing={1}
                className="search-top full-width"
              >
                <TextField
                  variant="filled"
                  size="small"
                  placeholder="용도명, 내용, ERP코드"
                  className="bp-search"
                  data-cy="searchBox"
                  fullWidth
                  hiddenLabel
                  value={filteredLocations}
                  onChange={filterResults}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start" className="btn-groups">
                        <SearchSm className="icon-search" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end" className="btn-groups">
                        {filteredLocations && ( // value 값이 있는 경우에만 clear 버튼 생성
                          <IconButton
                            size="small"
                            className="btn-clear"
                            onClick={clearSearch}
                          >
                            
                          </IconButton>
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack spacing={1} className="bp-chips-wrap type-small-area">
                <List dense className="list-chips">
                  {departmentChips}
                </List>
              </Stack>
            </div>
            <div className="ui-box">
              {/* [S]결과 테이블 */}
              <BpTblOrganization2 />
            </div>
          </div>
          {/* [E] */}
          <Box className="ui-box">
            메인 샘플 테스트 페이지
          </Box>
          <Box className="ui-box"></Box>
          
          <Box className="btns-group">
            <Box className="inner">
              <Button variant="contained" size="large" className="btn-xlarge">
                확인
              </Button>
            </Box>
          </Box>
        </Paper>
      </LayoutMain>
      
    </>
    
  );
};


export default SampleMain;
