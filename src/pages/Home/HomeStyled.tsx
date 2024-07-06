import styled from "styled-components";

import bg_home from "../../assets/img/bg-home.png";

const HomeStyled = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg_home});
  .container {
    margin: 50px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: "Cursive", sans-serif;
    color: #4b0082;
    background-color: #695acd41;
    backdrop-filter: blur(2px);

    h1 {
      font-size: 2.5em;
      text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }

    p {
      font-size: 1.2em;
      margin: 10px 0;
    }

    .fantasy-button {
      background: linear-gradient(45deg, #6a5acd, #8a2be2);
      border: none;
      color: white;
      padding: 10px 20px;
      font-size: 1em;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: linear-gradient(45deg, #8a2be2, #6a5acd);
      }
    }

    .btn-cancel {
      padding: 10px 20px;
      font-size: 1em;
      border-radius: 5px;
      border: none;
      margin-right: 15px;
      background: linear-gradient(to right, #ff4157,#ff5c6f);

      cursor: pointer;
      transition: background 0.3s ease;

      &:hover {
        background: linear-gradient(45deg, #ff5c6f, #ff4157);
      }
    }

    .book-card {
      background: #ffffff;
      border: 2px solid #4b0082;
      border-radius: 10px;
      padding: 15px 0 0 15px;
      margin: 15px 0;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;

      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      }

      p {
        margin: 5px 0;
      }
    }

    input {
      margin: 10px 0;
      padding: 10px 15px;
      border-radius: 8px;
      outline: none;
      border: 1px solid #4b0082;
    }

    .div-flex {
      display: flex;

      input {
        margin-right: 10px;
      }
    }

    
  }
`;

export default HomeStyled;
