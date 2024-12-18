import { DateRange } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import {
  MobileDatePicker,
  MobileDateRangePicker,
} from "@mui/x-date-pickers-pro";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { Calendar, SearchSm } from "@untitled-ui/icons-react";
import dayjs, { Dayjs } from "dayjs";
import * as React from "react";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

/* 기간 달력 */
type DateRange<T> = [T | null, T | null];

interface CustomPickersShortcutsItem<T> {
  label: string;
  name?: string;
  getValue: () => T;
}

const shortcutsItems: CustomPickersShortcutsItem<DateRange<Dayjs>>[] = [
  {
    label: "1주",
    name: "week-shortcut",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("week"), today.endOf("week")];
    },
  },
  {
    label: "1개월",
    name: "month-shortcut",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
  {
    label: "3개월",
    name: "three-months-shortcut",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month").add(2, "months")];
    },
  },
  {
    label: "일별",
    name: "day-shortcut",
    getValue: () => {
      const today = dayjs();
      return [today, today];
    },
  },
  {
    label: "월별",
    name: "month-shortcut",
    getValue: () => {
      const today = dayjs();
      return [today.startOf("month"), today.endOf("month")];
    },
  },
];
const renderShortcutButton = (shortcut) => (
  <>
    <Stack>
      <Button variant="outlined" className={`${shortcut.name}`}>
        {shortcut.label}
      </Button>
    </Stack>
  </>
);
const CustomActionBar = () => (
  <>
    <Stack spacing={0} className="btns-footer-area" direction="row">
      <div className="left"></div>
      <div className="right">
        <Button size="medium" className="btn-text-primary">
          취소
        </Button>
        <Button variant="contained" size="medium">
          확인
        </Button>
      </div>
    </Stack>
  </>
);

// tabs
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
const MDO010501 = () => {
  const [tabValue, setTabValue] = React.useState(0);
  const [checked, setChecked] = useState(false);
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  // 상위 컴포넌트에서 하위 탭 데이터와 각 탭에 대한 상태 및 상태 변경 함수 초기화
  const [subTabs, setSubTabs] = useState([
    { label: "용도분할" },
    { label: "사용자분할" },
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
        <title>영수증 분할</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper", flex-wrap receipt-division */}
        <Paper className="ui-paper flex-wrap receipt-division">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]receipt-wrap */}
            <div className="receipt-wrap">
              {/* [S]pay-info */}
              <div className="pay-info ui-box">
                <div className="inner-sides">
                  <div className="right-area">
                    <Box className="item-data txt-desc">
                      결제일시 2024.05.12 12:30
                    </Box>
                  </div>
                </div>
                <Box className="usage">대명리조트 울산</Box>
                <div className="type-amount">
                  <div className="number-area">
                    <Box className="flex-row">
                      <Box component="span" className="point-large">
                        10,000,000,000
                        <span className="txt-currency">원</span>
                      </Box>
                    </Box>
                  </div>
                </div>
              </div>
              {/* [E]pay-info */}

              <div className="divider-top">
                <div className="light-box full-height ui-box">
                  <Box className="bp-tabs tabs-basic tabs-size-medium bp-tabs-top">
                    <Tabs
                      className="tab-list"
                      value={tabValue}
                      onChange={tabHandleChange}
                      aria-label=""
                      TabIndicatorProps={{
                        sx: { backgroundColor: "#00AAD2" },
                      }}
                    >
                      <Tab label="용도분할" {...a11yProps(0)} />
                      <Tab label="사용자분할" {...a11yProps(1)} />
                    </Tabs>

                    <BasicTabPanel tabValue={tabValue} index={0}>
                      <div className="ui-box box-bg-rnd-type">
                        <div className="inner-sides">
                          <div className="left-area">
                            <Box className="icon-subTxt">
                              분할<span>1</span>
                            </Box>
                          </div>
                          <div className="right-area"></div>
                        </div>
                        <div className="item-field">
                          <TextField
                            // onClick={}
                            className="type-search"
                            type="button"
                            defaultValue=""
                            hiddenLabel
                            label="용도"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchSm
                                    fontSize="medium"
                                    className="bp-icon medium icon-search"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </div>

                        {/* [S] 이용일 2가지 타입 MobileDatePicker + MobileDateRangePicker 추가 241029 kjs */}
                        <div className="item-field">
                          <MobileDatePicker
                            label="이용일"
                            className="bp-datePicker fullWidth"
                            format="yyyy/MM/dd"
                            // slots={{
                            //   field: SingleInputDateRangeField,
                            // }}
                            slotProps={{
                              textField: {
                                InputProps: {
                                  startAdornment: (
                                    <InputAdornment
                                      position="end"
                                      className=""
                                    ></InputAdornment>
                                  ),
                                  endAdornment: (
                                    <Calendar className="bp-icon medium text-secondary" />
                                  ),
                                },
                              },
                            }}
                          />
                        </div>
                        {/* [E] 이용일 MobileDateRangePicker 추가 241029 kjs */}

                        <div className="item-field">
                          <TextField
                            label="결제금액"
                            placeholder=""
                            fullWidth
                          />
                        </div>
                      </div>

                      <div className="ui-box box-bg-rnd-type">
                        <div className="inner-sides">
                          <div className="left-area">
                            <Box className="icon-subTxt">
                              분할<span>2</span>
                            </Box>
                          </div>
                          <div className="right-area"></div>
                        </div>
                        <div className="item-field">
                          <TextField
                            // onClick={}
                            className="type-search"
                            type="button"
                            defaultValue=""
                            hiddenLabel
                            label="용도"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchSm
                                    fontSize="medium"
                                    className="bp-icon medium icon-search"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </div>

                        {/* [S] 이용일 MobileDateRangePicker 추가 241029 kjs */}
                        <div className="item-field">
                          <MobileDateRangePicker
                            label="이용일"
                            className="bp-dateRangePicker fullWidth"
                            format="yyyy/MM/dd"
                            slots={{
                              field: SingleInputDateRangeField,
                            }}
                            slotProps={{
                              textField: {
                                InputProps: {
                                  startAdornment: (
                                    <InputAdornment
                                      position="end"
                                      className=""
                                    ></InputAdornment>
                                  ),
                                  endAdornment: (
                                    <Calendar className="bp-icon medium" />
                                  ),
                                },
                              },
                            }}
                          />
                        </div>
                        {/* [E] 이용일 MobileDateRangePicker 추가 241029 kjs */}
                        <div className="item-field">
                          <TextField
                            label="결제금액"
                            placeholder=""
                            fullWidth
                          />
                        </div>
                      </div>

                      <div className="ui-box box-bg-rnd-type">
                        <div className="inner-sides">
                          <div className="left-area">
                            <Box className="icon-subTxt">
                              분할<span>3</span>
                            </Box>
                          </div>
                          <div className="right-area">
                            <IconButton size="small" className="btn-clear">
                              <CancelIcon
                                fontSize="small"
                                className="bp-icon small"
                              />
                            </IconButton>
                          </div>
                        </div>
                        <div className="item-field">
                          <TextField
                            // onClick={}
                            className="type-search"
                            type="button"
                            defaultValue=""
                            hiddenLabel
                            label="용도"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchSm
                                    fontSize="medium"
                                    className="bp-icon medium icon-search"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </div>

                        {/* [S] 이용일 MobileDateRangePicker 추가 241029 kjs */}
                        <div className="item-field">
                          <MobileDateRangePicker
                            label="이용일"
                            className="bp-dateRangePicker fullWidth"
                            format="yyyy/MM/dd"
                            slots={{
                              field: SingleInputDateRangeField,
                            }}
                            slotProps={{
                              textField: {
                                InputProps: {
                                  startAdornment: (
                                    <InputAdornment
                                      position="end"
                                      className="txt"
                                    ></InputAdornment>
                                  ),
                                  endAdornment: (
                                    <Calendar className="bp-icon medium" />
                                  ),
                                },
                              },
                            }}
                          />
                        </div>
                        {/* [E] 이용일 MobileDateRangePicker 추가 241029 kjs */}
                        <div className="item-field">
                          <TextField
                            label="결제금액"
                            placeholder=""
                            fullWidth
                          />
                        </div>
                        <div className="color-error">
                          입력하신 금액이 결제비용보다 큽니다.
                        </div>
                      </div>
                    </BasicTabPanel>

                    <BasicTabPanel tabValue={tabValue} index={1}>
                      <div className="ui-box box-bg-rnd-type">
                        <div className="inner-sides">
                          <div className="left-area">
                            <Box className="icon-subTxt">
                              분할<span>1</span>
                            </Box>
                          </div>
                          <div className="right-area"></div>
                        </div>
                        <div className="item-field">
                          <TextField
                            // onClick={}
                            className="type-search"
                            type="button"
                            defaultValue=""
                            hiddenLabel
                            label="용도"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchSm
                                    fontSize="medium"
                                    className="bp-icon medium icon-search"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </div>
                        <div className="item-field">
                          <TextField
                            label="결제금액"
                            placeholder=""
                            fullWidth
                          />
                        </div>
                      </div>

                      <div className="ui-box box-bg-rnd-type">
                        <div className="inner-sides">
                          <div className="left-area">
                            <Box className="icon-subTxt">
                              분할<span>2</span>
                            </Box>
                          </div>
                          <div className="right-area"></div>
                        </div>
                        <div className="item-field">
                          <TextField
                            // onClick={}
                            className="type-search"
                            type="button"
                            defaultValue=""
                            hiddenLabel
                            label="용도"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchSm
                                    fontSize="medium"
                                    className="bp-icon medium icon-search"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </div>
                        <div className="item-field">
                          <TextField
                            label="결제금액"
                            placeholder=""
                            fullWidth
                          />
                        </div>
                      </div>

                      <div className="ui-box box-bg-rnd-type">
                        <div className="inner-sides">
                          <div className="left-area">
                            <Box className="icon-subTxt">
                              분할<span>3</span>
                            </Box>
                          </div>
                          <div className="right-area">
                            <IconButton size="small" className="btn-clear">
                              <CancelIcon
                                fontSize="small"
                                className="bp-icon small"
                              />
                            </IconButton>
                          </div>
                        </div>
                        <div className="item-field">
                          <TextField
                            // onClick={}
                            className="type-search"
                            type="button"
                            defaultValue=""
                            hiddenLabel
                            label="용도"
                            InputProps={{
                              endAdornment: (
                                <InputAdornment position="end">
                                  <SearchSm
                                    fontSize="medium"
                                    className="bp-icon medium icon-search"
                                  />
                                </InputAdornment>
                              ),
                            }}
                            fullWidth
                          />
                        </div>
                        <div className="item-field">
                          <TextField
                            label="결제금액"
                            placeholder=""
                            fullWidth
                          />
                        </div>
                        {/* <div className="color-error">입력하신 금액이 결제비용보다 큽니다.</div> */}
                      </div>
                    </BasicTabPanel>
                  </Box>
                </div>
              </div>
            </div>
            {/* [E] receipt-wrap */}
          </div>
        </Paper>
        {/* [E]ui-paper flex-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge color-neutral"
            >
              취소
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              영수증 분할
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MDO010501;
