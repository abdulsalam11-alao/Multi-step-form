import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --Marine-blue: hsl(213, 96%, 18%);
  --Purplish-blue: hsl(243, 100%, 62%);
  --Pastel-blue: hsl(228, 100%, 84%);
  --Light-blue: hsl(206, 94%, 87%);
  --Strawberry-red: hsl(354, 84%, 57%);
  --Cool-gray: hsl(231, 11%, 63%);
  --Light-gray: hsl(229, 24%, 87%);
  --Magnolia: hsl(217, 100%, 97%);
  --Alabaster: hsl(231, 100%, 99%);
  --White: hsl(0, 0%, 100%);

  --font-weight-sm: 400;
  --font-weight-md: 500;
  --font-weight-lg: 700;
}

@font-face {
  font-family: "Ubuntu";
  src: url("/Ubuntu-Bold.ttf") format("truetype");
  font-weight: var(--font-weight-lg);
}

@font-face {
  font-family: "UbuntuM";
  src: url("/Ubuntu-Medium.ttf") format("truetype");
  font-weight: var(--font-weight-md);
}

@font-face {
  font-family: "UbuntuR";
  src: url("/Ubuntu-Regular.ttf") format("truetype");
  font-weight: var(--font-weight-sm);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: var(--Light-blue);
    display: flex;
    justify-content: center;
    justify-content: center;
    margin-top: 70px;
}
.num{
    margin-bottom: 40px;
    display: flex;
}
`;

export default GlobalStyle;
