import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";
import { Helmet as Head } from "react-helmet";
import LayoutSub from "src/templates/layout/LayoutSub";

const MSI030200 = () => {
  const [filteredLocations, setFilteredLocations] = useState("");
  const [RadioValue02, setRadioValue02] = useState("radio02-01");
  const handleChangeRadio02 = (event) => {
    setRadioValue02(event.target.value);
  };
  return (
    <>
      <Head>
        <title>언어설정</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , flex-wrap */}
        <Paper className="ui-paper flex-wrap">
          {/* [S]flex1-col */}
          <div className="flex1-col">
            <div className="light-box full-height">
              <div className="lang-select-area">
                <FormControl>
                  <RadioGroup
                    aria-labelledby="radio-buttons-group"
                    defaultValue="radio01"
                    name="radio buttons group"
                    value={RadioValue02}
                    onChange={handleChangeRadio02}
                    className="bp-form-group"
                  >
                    <FormLabel
                      className={`bp-label ${
                        RadioValue02 === "radio02-01" ? "is-active" : ""
                      }`}
                    >
                      <Radio value="radio02-01" />
                      <dl className="item-label">
                        <dt className="title">한국어</dt>
                        <dd>Korean</dd>
                      </dl>
                    </FormLabel>
                    <FormLabel
                      className={`bp-label ${
                        RadioValue02 === "radio02-02" ? "is-active" : ""
                      }`}
                    >
                      <Radio value="radio02-02" />
                      <dl className="item-label">
                        <dt className="title">영어</dt>
                        <dd>English</dd>
                      </dl>
                    </FormLabel>
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
          </div>
          {/* [E]flex1-col */}
        </Paper>
        {/* [E]ui-paper flex-wrap */}
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

export default MSI030200;
