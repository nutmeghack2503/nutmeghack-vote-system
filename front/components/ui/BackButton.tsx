import { FC, MouseEventHandler } from 'react';
import MaterialIcon from './MaterialIcon';

interface Props {
  onClick: MouseEventHandler;
}

const BackButton: FC<Props> = ({ onClick }) => (
    <button onClick={onClick} className="mb-4 text-primary flex items-center">
        <MaterialIcon name="arrow_back_ios" />
        <span>戻る</span>
    </button>
);

export default BackButton;

