import React, { useState } from 'react';
import HorizontalMultiSelect from './HorizontalMultiSelect';

const isMulti = true;

interface FilterBHKProps {
  bhk: string[];
  setbhk: React.Dispatch<React.SetStateAction<string[]>>;
}
// Define the BHK options
const bhkOptions = [
  { value: '1', label: '1 BHK' },
  { value: '2', label: '2 BHK' },
  { value: '3', label: '3 BHK' },
  { value: '4', label: '4 BHK' },
  { value: '5', label: '4+ BHK' },
];


// FilterBHK component
const FilterBHK: React.FC<FilterBHKProps> = ({
  bhk,
  setbhk
}) => {

  return (
    <HorizontalMultiSelect
      isMulti={isMulti}
      values={bhk}
      setValues={setbhk}
      label="BHK"
      options={bhkOptions}
    />
  );
}

export default FilterBHK;
