import { FC } from "react";

interface ChangeCountProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const ChangeCount: FC<ChangeCountProps> = (props) => {
  const { count, onDecrement, onIncrement } = props;
  return (
    <div>
      <button onClick={onDecrement}> - </button>
      {count}
      <button onClick={onIncrement}> + </button>
    </div>
  );
};

export default ChangeCount;
