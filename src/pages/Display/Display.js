import styled from "styled-components"


export const DisplayStyle = styled.div`
    font-size: 26px;
    position: absolute;
    text-align: center;
    width: 350px;
    left: 65%;
    transform: translate(-65%);

    @media (min-width:768px) {
        position:absolute;
        width:350px;
        left: 50%;
        transform: translate(-50%);
        background: blue;
    }

`