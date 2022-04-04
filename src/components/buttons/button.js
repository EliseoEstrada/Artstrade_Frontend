import styled from "styled-components";

const Button_C = styled.button `
    background-color: ${(props) => props.bgColor};
    width: 100%;
    color: #fff;
    border-color: #6c757d;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: .375rem .75rem;
    font-size: 1rem;
    border-radius: .25rem;
`;

export default Button_C;