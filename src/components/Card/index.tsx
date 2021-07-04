import { CardProps } from './interface'

const Card: React.FC<CardProps> = ({ value }) => (
    <div>
        {value}
    </div>
)

export default Card;
