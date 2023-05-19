

import React, { useState } from 'react';
import styles from './styles/Dropdown.module.css'

const DropdownMenu = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.dropdownMenu}>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value=""></option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
};

export default DropdownMenu;
