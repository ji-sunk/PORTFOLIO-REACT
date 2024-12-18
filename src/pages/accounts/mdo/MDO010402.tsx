import { ArrowDropDown } from "@mui/icons-material";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  MobileDatePicker,
  MobileDateRangePicker,
  MobileDateTimePicker,
} from "@mui/x-date-pickers-pro";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { Calendar, CameraPlus } from "@untitled-ui/icons-react";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import PeriodCalendar from "src/components/common/PeriodCalendar";
import LayoutSub from "src/templates/layout/LayoutSub";

const selectOption = [
  { label: "일반출장 출장 출장", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
  { label: "label4", title: "The Shawshank Redemption" },
  { label: "label5", title: "The Shawshank Redemption" },
  { label: "label6", title: "The Shawshank Redemption" },
];

const MDO010402 = () => {
  const [filteredLocations, setFilteredLocations] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [showTooltip2, setShowTooltip2] = useState(false);
  const [showTooltip3, setShowTooltip3] = useState(false);
  const clearSearch = () => {
    setFilteredLocations("");
  };
  const filterResults = (e) => {
    setFilteredLocations(e.target.value);
  };
  const [selectedDateTime, setSelectedDateTime] = useState<Dayjs | null>(
    dayjs(),
  );

  const handleDateTimeChange = (newValue: Dayjs | null) => {
    setSelectedDateTime(newValue);
  };
  return (
    <>
      <Head>
        <title>영수증 등록 | 정산</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , bztrip-wrap */}
        {/* registration-wrap 클래스 추가 241029 kjs  */}
        <Paper className="ui-paper bztrip-wrap registration-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            {/* [S]fields-group write-plan : 등록 */}
            <div className="fields-group write-plan">
              <div className="ui-box">
                <Typography variant="h3" className="bp-title text-hide">
                  영수증 등록
                </Typography>
                <div className="item-field mg-t0">
                  <TextField
                    // onClick={}
                    className="type-btn"
                    type="button"
                    label="용도"
                    defaultValue=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowDropDown fontSize="medium" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </div>
                <div className="item-field mpicker-pos">
                  <MobileDateTimePicker
                    label="결제일"
                    views={[
                      "year",
                      "month",
                      "day",
                      "hours",
                      "minutes",
                      //"seconds",
                    ]}
                    className="bp-dateTimePicker fullWidth"
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

                <div className="item-field mpicker-pos">
                  <MobileDatePicker
                    label="이용일"
                    views={["year", "month", "day"]}
                    className="bp-datePicker fullWidth"
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

                <div className="item-field mpicker-pos">
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
                          endAdornment: <Calendar className="bp-icon medium" />,
                        },
                      },
                    }}
                  />
                </div>

                <div className="item-field">
                  <PeriodCalendar />
                </div>
                <div className="item-field">
                  <TextField
                    // onClick={}
                    className="type-btn"
                    type="button"
                    label="교통수단"
                    defaultValue=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowDropDown fontSize="medium" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </div>
                <div className="item-field item-half-sides">
                  <div className="item">
                    <TextField
                      // onClick={}
                      className="type-btn"
                      type="button"
                      label="출발"
                      defaultValue=""
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ArrowDropDown fontSize="medium" />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </div>
                  <div className="tilde-symbol">~</div>
                  <div className="item">
                    <TextField
                      // onClick={}
                      className="type-btn"
                      type="button"
                      label="도착"
                      defaultValue=""
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <ArrowDropDown fontSize="medium" />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </div>
                </div>
                <div className="item-field">
                  <TextField
                    // onClick={}
                    className="type-btn"
                    type="button"
                    label="좌석등급"
                    defaultValue=""
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <ArrowDropDown fontSize="medium" />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                </div>
                <div className="item-field">
                  <TextField label="사용처" placeholder="" fullWidth />
                </div>
                <div className="item-field">
                  <TextField
                    label="결제금액"
                    placeholder=""
                    fullWidth
                    value="200,000 원"
                    InputProps={{
                      inputProps: {
                        style: { textAlign: "right" },
                      },
                    }}
                  />
                </div>
                <div className="item-field image-wrap">
                  <ul className="list-img">
                    <li>
                      <div className="img-group">
                        <div className="img-box">
                          <img
                            src="/assets/images/tmp-receipt.png"
                            alt="영수증"
                            loading="lazy"
                          />
                        </div>
                        <IconButton size="small" className="btn-clear">
                          <CancelIcon
                            fontSize="small"
                            className="bp-icon small"
                          />
                        </IconButton>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="ui-box"></div>
            </div>
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button
              variant="contained"
              size="large"
              className="btn-xlarge btn-icon-only"
            >
              <CameraPlus className="bp-icon" />
            </Button>
            <Button variant="contained" size="large" className="btn-xlarge">
              등록하기
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MDO010402;
