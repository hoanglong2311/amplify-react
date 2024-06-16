import logo from "./logo.svg";
import "./App.css";
import Button from "@cloudscape-design/components/button"
import { useState } from "react";
import Header from "@cloudscape-design/components/header";
import Container from "@cloudscape-design/components/container";
import SpaceBetween from "@cloudscape-design/components/space-between";
import Input from "@cloudscape-design/components/input";



function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <SpaceBetween size="m">
      <Header variant="h1">Hello World!</Header>

      <Container>
        <SpaceBetween size="s">
          <span>Start editing to see some magic happen</span>
          <Input
            value={value}
            onChange={(event) => setValue(event.detail.value)}
          />
          <Button variant="primary">Click me</Button>
        </SpaceBetween>
      </Container>
    </SpaceBetween>
    </div>
  );
}

export default App;




