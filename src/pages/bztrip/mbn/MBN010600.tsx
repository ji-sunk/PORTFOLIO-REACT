import PlaceIcon from "@mui/icons-material/Place";
import {
  Box,
  Button,
  Chip,
  List,
  ListItem,
  Paper,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import { Helmet as Head } from "react-helmet";
// import { ArrowDropDown } from "@mui/icons-material";
import LayoutSub from "src/templates/layout/LayoutSub";
import { useRef, useState } from "react";

const selectOption = [
  { label: "label1", title: "The Shawshank Redemption" },
  { label: "label2", title: "The Shawshank Redemption" },
  { label: "label3", title: "The Shawshank Redemption" },
];

const MBN010600 = () => {
  /* Dropdown 버튼 */
  const [writeOpen, setWriteOpen] = useState(false);
  const [modifyOpen, setModifyOpen] = useState(false);
  const writeAnchorRef = useRef<HTMLButtonElement>(null);
  const modifyAnchorRef = useRef<HTMLButtonElement>(null);

  // const handleWriteOpen = () => {
  //   setWriteOpen((prevOpen) => !prevOpen);
  // };
  const handleModifyOpen = () => {
    setModifyOpen((prevOpen) => !prevOpen);
  };

  const handleWriteClose = (event: Event | React.SyntheticEvent) => {
    if (
      writeAnchorRef.current &&
      writeAnchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setWriteOpen(false);
  };

  const handleModifyClose = (event: Event | React.SyntheticEvent) => {
    if (
      modifyAnchorRef.current &&
      modifyAnchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setModifyOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setWriteOpen(false);
      setModifyOpen(false);
    } else if (event.key === "Escape") {
      setWriteOpen(false);
      setModifyOpen(false);
    }
  };

    //const [fileUrl, setFileUrl] = useState("");
    // const [fileName, setFileName] = useState("");
    const [fileImages, setFileImages] = useState([
      { src: "../../../../assets/images/no-img.svg", alt: "", isDefault: true },
    ]);

  return (
    <>
      <Head>
        <title>교통수단설정 | 출장</title>
      </Head>
      <LayoutSub>
        {/* [S] default : "ui-paper" , bztrip-wrap */}
        <Paper className="ui-paper bztrip-wrap">
          {/* [S] */}
          <div className="light-box full-height">
            <div className="fields-group write-plan">
              <div className="ui-box">
                <div className="item-field">
                  <ol className="map-route-list">
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">1</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">현대 아산 공장</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      <div className="selectBoxOp small">
                        <Autocomplete
                          includeInputInList
                          size="small"
                          id="select1-1"
                          fullWidth
                          options={selectOption}
                          renderInput={(params) => (
                            <TextField
                              variant="filled"
                              size="small"
                              placeholder="대중교통"
                              {...params}
                              hiddenLabel
                            />
                          )}
                        />
                        <Autocomplete
                          includeInputInList
                          size="small"
                          id="select2-1"
                          fullWidth
                          options={selectOption}
                          renderInput={(params) => (
                            <TextField
                              variant="filled"
                              size="small"
                              placeholder="자기차량"
                              {...params}
                              hiddenLabel
                            />
                          )}
                        />
                      </div>
                    </li>
                    <li className="item">
                      <Box className="num-mark">
                        <span className="txt">2</span>
                      </Box>
                      <Box className="address-area">
                        <List className="list-schedule">
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">광명 출고 센터</Box>
                            </div>
                          </ListItem>
                          <ListItem className="item-adr">
                            <PlaceIcon className="bp-icon small" />
                            <div className="place-area">
                              <Box className="pin">
                                충남 아산시 현대로 1077 82-20 현대자동차
                                울산5공장
                              </Box>
                            </div>
                          </ListItem>
                        </List>
                      </Box>
                      
                      <div className="selectBoxOp small">
                        <Autocomplete
                          includeInputInList
                          size="small"
                          id="select1-1"
                          fullWidth
                          options={selectOption}
                          renderInput={(params) => (
                            <TextField
                              variant="filled"
                              size="small"
                              placeholder="대중교통"
                              {...params}
                              hiddenLabel
                            />
                          )}
                        />
                        <Autocomplete
                          includeInputInList
                          size="small"
                          id="select2-1"
                          fullWidth
                          options={selectOption}
                          renderInput={(params) => (
                            <TextField
                              variant="filled"
                              size="small"
                              placeholder="자기차량"
                              {...params}
                              hiddenLabel
                            />
                          )}
                        />
                      </div> 
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* [E]fields-group write-plan */}
          </div>
          {/* [E] */}
        </Paper>
        {/* [E]ui-paper bztrip-wrap */}
        <Box className="btns-group">
          <Box className="inner">
            <Button variant="contained" size="large" className="btn-xlarge">
              경로 확인
            </Button>
          </Box>
        </Box>
      </LayoutSub>
    </>
  );
};

export default MBN010600;
