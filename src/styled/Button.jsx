import styled from "styled-components";
export const Button = styled.button`
color: white;
padding: 10px 18px;
background: black;
border-radius: 5px;
max-width: 220px;
border: none;
font-size: 16px;
border: 1px solid transparent;
transition: 400ms background ease-in;
cursor: pointer;

&:hover{
    background-color: white;
    border: 2px solid black;
    color: black;
    transition: 300ms background ease-in;

}


`;

export const OutlineButton = styled(Button)`
background-color: white;
border: solid black;
color: black;
border-width: 2px;
&:hover{
    background-color: black;
    border: 2px solid transparent;
    color: white;

}
`;

