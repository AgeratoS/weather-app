import { CardProps } from './interface';
import Content  from './Content';

const Card: React.FC<CardProps> = ({ value }) => (
    <div>
        <Content value={value} />
    </div>
)

export default Card;
