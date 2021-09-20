import styled from "styled-components"

export const FormContainer = styled.form`

    background-image: radial-gradient(circle at 120.29% 50%, #11161b 0, #11161b 50%, #11161b 100%);
    width: 100%;
    border-radius: 8px;
    max-width: 650px;
    margin: 50px auto;
    display:flex;
    flex-direction: column;
    justify-content: center;
    height: 350px;
    padding: 20px;


    div {
        margin-bottom: 2rem;
        position:relative;
    }

    div input {
        width: 100%;
        height: 45px;
        font-size: 13px;
        outline: none;
        border-radius: 8px;
        border: 1px solid #ccc;
        text-align: left;
      
    }

    div input:focus ~ span, 
    div input:valid ~ span
    {
        transform:translateY(-40px);
        font-size: 17px;
        opacity: 1;
        color: #fff
    }

    div span {
        position: absolute;
        top: 19px;
        left: 8px;
        pointer-events: none;
        transition: 0.5s;
        opacity: 0.5;
        font-size: 14px;
    }

    div p {
        color: #ED4C67
    }
    button {
        padding: 15px;
        border: none;
        color: #fff;
        box-shadow: 1px 3px 5px #1abc9c;
        text-transform: uppercase;
        background: rgb(49,50,120);
        background: linear-gradient(90deg, rgba(49,50,120,1) 16%, rgba(9,121,89,1) 100%, rgba(0,212,255,1) 100%);
        cursor: pointer;
        font-size: 18px;
        border-radius: 8px;
    }
    button:active{
        transform: translateY(3px);
        box-shadow: 1px 1px 5px #1abc9c;
    }


`

