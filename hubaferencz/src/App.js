// eslint-disable-next-line
import React from "react";

// import { Helmet } from "react-helmet";

import { Helmet } from "react-helmet";

import "./styles/styles.css";

import Base from "./components/base/Base";

function App() {
  return (
    <>

        <Base />
        <Helmet>
          {/* <title>React App</title>
        <meta name="description" content="React App" /> */}
          <script src="./Animations.js" type="text/javascript" />
          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            nomodule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </Helmet>

    </>
  );
}

export default App;
