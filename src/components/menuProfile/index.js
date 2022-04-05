import styled from "styled-components";

const Option = styled.span `
    background-color: ${(props) => props.bgColor};
    color: rgba(255,255,255,.55);
    padding-right: .5rem;
    padding-left: .5rem;
    font-weight: 700;
    cursor: pointer;
    &:hover ${this} {
        color: rgba(255,255,255,.75);
    }
`;

export default Option;