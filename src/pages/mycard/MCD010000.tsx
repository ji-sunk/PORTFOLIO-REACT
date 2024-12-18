import { Paper } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import FabFixed from "src/components/common/FabFixed";
import NoData from "src/components/common/NoData";
import LayoutSub from "src/templates/layout/LayoutSub";

const MCD010000 = () => {
  return (
    <>
      <Head>
        <title>My카드</title>
      </Head>
      <LayoutSub>
        {/* [S] defautl : "ui-paper" , mycard-wrap */}
        <Paper className="ui-paper mycard-wrap">
          <div className="light-box full-height">
            <div className="ui-box empty-info">
              <NoData />
            </div>
          </div>
        </Paper>
        {/* [E]ui-paper mycard-wrap */}
        <FabFixed />
      </LayoutSub>
    </>
  );
};

export default MCD010000;
