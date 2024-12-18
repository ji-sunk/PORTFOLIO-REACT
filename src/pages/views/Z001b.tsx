import CancelIcon from "@mui/icons-material/Cancel";
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
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";
import AccordionUseCheckbox from "src/templates/teams/AccordionUseCheckbox";
import ChooseUseTopCheckbox from "src/templates/teams/ChooseUseTopCheckbox";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const Z001b = () => {
  const [RadioValue02, setRadioValue02] = useState("radio02-01");
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
    { id: 1, expenseitems: "야근식대" },
    { id: 1, expenseitems: "야근택시비" },
    // { id: 1, departmentName: "비서실", employeeNumber: "12345" },
    // { id: 2, departmentName: "영업팀", employeeNumber: "67890" },
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
        <title>[Z001b] 용도 선택_다건</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
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
                            <CancelIcon />
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
            <ChooseUseTopCheckbox />
            <hr className="divider" />
            <AccordionUseCheckbox />
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

export default Z001b;
