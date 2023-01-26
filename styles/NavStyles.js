import styled from "styled-components";

export const NavStyles = styled.nav`
    min-height: 15vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1rem;
    a {
        font-size: 1.2rem;
        color: red;
    }
`;

export const NavItems = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    div{
        margin-left: 3rem;
        position: relative;
        display: flex;
        align-items: center;
    }
    h3{
        font-size: 1rem;
        padding: 0.25rem;
    }
    svg{
        font-size: 1rem;
        color: black;
    }
    span {
    background: #ff2626;
    color: white;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.75rem;
    position: absolute;
    right: -10%;
    top: -20%;
    font-weight: 700;
    pointer-events: none;
  }
   
`;
