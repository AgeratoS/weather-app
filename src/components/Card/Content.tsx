import styled from "styled-components";
import { CardProps, StyleProps } from './interface';
import { palette } from "../../theme/colors"

const Content: React.FC<CardProps & StyleProps> = ({ value, width, height }) => {
    return (
        <Container width={width} height={height}>
            {value}
        </Container>
    )
}

export default Content

const Container = styled.div<StyleProps>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
    padding: 20px 10px 20px 10px;
    background-color: ${palette.orange};
`