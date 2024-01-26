import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    padding: 20px;
    width: auto;
    max-width: 400px;
    margin: 40px auto;
    color: #fff;
    background: rgba(255, 255, 255, 0.03);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(16.4px);
    -webkit-backdrop-filter: blur(16.4px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: larger;
    color:white;
    background: rgb(131, 58, 180);
    background: linear-gradient(
      90deg,
      rgba(131, 58, 180, 1) 0%,
      rgba(253, 29, 29, 1) 50%,
      rgba(252, 176, 69, 1) 100%
    );
  }
  button{
  align-self: center;
  gap: 10px;
  width: 100px;
  padding: 10px;
  border-radius: 60px;
  background-color: #d5f009;
  color: #921ffd;
  border: none;
  letter-spacing: 0.4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
Link{
  style="text-decoration:none"
}
  
`;
