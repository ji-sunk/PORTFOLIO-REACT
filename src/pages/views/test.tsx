import { Box, Paper, Typography } from "@mui/material";
import * as React from "react";
import { Helmet as Head } from "react-helmet";
import LayoutFill from "src/templates/layout/LayoutFill";

const SampleTest = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Head>
        <title>test</title>
      </Head>
      <LayoutFill>
        <Paper className="ui-paper">
          <div className="light-box full-height">
            <Box className="ui-box alcetner" sx={{ p: "40px 0" }}>
              <Typography variant="h1" className="bp-title title-top logo">
                <img
                  src="/assets/images/logo-hyundai.png"
                  alt="hyundai"
                  width={145}
                />
              </Typography>
            </Box>
            <Box className="ui-box alcetner" sx={{ p: "40px 0" }}>
              <img
                src="/assets/images/img-bio.png"
                alt="생체인증"
                width={172}
                tabIndex={-1}
              />
            </Box>
          </div>
        </Paper>
      </LayoutFill>
      <Box className="noti-icon">
        <div className="loading">
          <span></span>
        </div>
      </Box>
      <Box className="is-certify" sx={{ display: "none" }}>
        <div className="dimmed"></div>
        <div className="circle-box">
          <div className="ani-rotate"></div>
        </div>
        <div className="icon-bios">
          <img
            src="/assets/images/icons/icon-fingerprint.svg"
            alt="지문인식"
            width={46}
            tabIndex={-1}
          />
          {/* <img
            src="/assets/images/icons/icon-faceid.svg"
            alt="faceid"
            width={46}
            tabIndex={-1}
          /> */}
        </div>
      </Box>
    </>
  );
};

export default SampleTest;
