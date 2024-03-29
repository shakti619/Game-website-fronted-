import { Heading } from "@chakra-ui/react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, ButtonGroup } from "@chakra-ui/react";
import "../index.css";
function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        borderTop: "2px solid #C0C0C0",
        marginTop: "20px",
      }}
    >
      <Heading>
        The applications is build using <em>React</em> and <em>Typescript</em> .
      </Heading>
      <Button
        marginTop={2}
        boxShadow="dark-lg"
        colorScheme="teal"
        variant="outline"
      >
        <a href="https://github.com/shakti619">
          <GitHubIcon />
          shakti619
        </a>
      </Button>
    </div>
  );
}

export default Footer;
