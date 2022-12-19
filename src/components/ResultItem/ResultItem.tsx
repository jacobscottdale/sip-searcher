import { FC } from 'react';
import { Link } from 'react-router-dom'
import './ResultItem.css';

type Props = {
  id: string
  name: string
  thumbnailUrl: string
}

const ResultItem: FC<Props> = ({
  id, name, thumbnailUrl
}) => {
	return (
		<li className='ResultItem'>
      <Link to={'/drink/' + id}>{name}</Link>
		</li>
	);
}

export default ResultItem;
