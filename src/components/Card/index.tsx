import { CardProps, StyleProps } from './interface';
import Content  from './Content';

const Card: React.FC<CardProps & StyleProps> = ({ value, width, height }) => (
    <div>
        <Content value={value} width={width} height={height} />
    </div>
)

export default Card;
