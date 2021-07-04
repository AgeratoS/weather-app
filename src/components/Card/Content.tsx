import styled from "styled-components";
import { CardProps } from './interface';
import { palette } from "../../theme/colors"

const Content: React.FC<CardProps> = ({ value }) => {
    return (
        <Container>
            {value}
        </Container>
    )
}

export default Content

const Container = styled.div`
    padding: 20px 10px 20px 10px;
    background-color: ${palette.orange};
    max-width: 350px;
    max-height: 500px
`