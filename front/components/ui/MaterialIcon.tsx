import { FC } from 'react';

interface Props {
  name: string;
  className?: string;
}

const MaterialIcon: FC<Props> = ({ name, className }) => (
    <span className={`material-icons ${className || ''}`}>{name}</span>
);

export default MaterialIcon;

