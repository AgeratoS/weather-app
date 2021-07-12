import styled from "styled-components";
import { LayoutProps } from './interface';
import Card from '../Card';

interface LayoutPredictionProps {
  component: Array<LayoutProps>
}

const LayoutPrediction: React.FC<LayoutPredictionProps> = ({ component }) => {
  return (
    <CardsContainer>
      {component &&
        component.map((item: LayoutProps) => {
          return (
            <Card value={item.value} />
          );
        })}
    </CardsContainer>
  );
};

export default LayoutPrediction;

const CardsContainer = styled.div`
    display: grid;  
    grid-template-rows:  5em 200px 200px; 
    grid-template-columns: 200px 5em 50%;
`