import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';


const Size = ({ size }) => {
  const [selected, toggleSelected] = useState(false);

  const handleClick = () => {
    toggleSelected(!selected);
  }

  return (
    <Button toggle active={selected} circular onClick={() => handleClick()} content={size} />
  );
}

const Sizes = () => {
  return (
    <div>
      <Size size="S"></Size>
      <Size size="M"></Size>
      <Size size="L"></Size>
      <Size size="XL"></Size>
    </div>
  );
}

export default Sizes;