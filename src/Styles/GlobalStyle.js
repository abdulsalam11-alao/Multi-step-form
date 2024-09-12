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
.switch{
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
}
.switch input {
    display: none;
}
.slider{
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:var(--Marine-blue); 
    transition: .4s;  
}
.slider:before{
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: var(--White);
    transition: .4s;
}
input:checked + .slider{
  background-color:var(--Marine-blue); 

}
input:focus + .slider{
    box-shadow: 0 0 1px #2196F3;
}
input:checked + .slider:before{
    -webkit-transform: translate(26px);
    -ms-transform: translate(26px);
    transform: translateX(26px);
}
.slider.round{
    border-radius: 34px;
}
.slider.round::before{
    border-radius: 50%;
}

`;

export default GlobalStyle;
