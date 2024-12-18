import { Box, Paper } from "@mui/material";
import * as React from "react";
import { Helmet as Head } from "react-helmet";
import FabMainFixed from "src/components/common/FabMainFixed";
import LayoutMain from "src/templates/layout/LayoutMain";
import "swiper/css";

const SampleMain = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Head>
        <title>메인</title>
      </Head>
      <LayoutMain>
        <Paper className="ui-paper">
          <Box className="ui-box">Contents</Box>
          <Box className="ui-box"></Box>
        </Paper>
      </LayoutMain>
      <FabMainFixed />
    </>
  );
};

export default SampleMain;
