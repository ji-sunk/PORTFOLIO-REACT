import ArrowLeftIcon from "@heroicons/react/24/solid/ArrowLeftIcon";
import { Box, Button, Container, SvgIcon, Typography } from "@mui/material";
import { Helmet as Head } from "react-helmet";
import { Link } from "react-router-dom";

const Page = () => (
  <>
    <Head>
      <title>404 | Devias Kit</title>
    </Head>
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              mb: 3,
              textAlign: "center",
            }}
          >
            <img
              alt="Under development"
              src="/assets/errors/error-404.png"
              style={{
                display: "inline-block",
                maxWidth: "100%",
                width: 400,
              }}
            />
          </Box>
          <Typography align="center" sx={{ mb: 3 }} variant="h3">
            404: 페이지가 존재하지 않습니다.
          </Typography>
          {/* <Typography align="center" color="text.secondary" variant="body1">
            You either tried some shady route or you came here by mistake.
            Whichever it is, try using the navigation
          </Typography> */}
          <Button
            component={Link}
            href="/"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowLeftIcon />
              </SvgIcon>
            }
            sx={{ mt: 3 }}
            variant="contained"
          >
            메인 페이지로 이동
          </Button>
        </Box>
      </Container>
    </Box>
  </>
);

export default Page;
