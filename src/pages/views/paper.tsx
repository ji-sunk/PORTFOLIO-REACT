import { Box, Paper } from "@mui/material";
import * as React from "react";
import { Helmet as Head } from "react-helmet";
import BtnsGroup from "src/components/common/BtnsGroup";
import LayoutSub from "src/templates/layout/LayoutSub";

const SamplePaper = () => {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <Head>
        <title>서브</title>
      </Head>
      <LayoutSub>
        <Paper className="ui-paper">
          <Box className="ui-box">
            Contents
          </Box>
        </Paper>
        <BtnsGroup />
      </LayoutSub>
    </>
  );
};

export default SamplePaper;
