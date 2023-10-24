import React, { useState } from 'react';
import HorizontalMultiSelect from './HorizontalMultiSelect';

const isMulti = true;

interface FilterAvailableForProps {
  availableFor: string[];
  setAvailableFor: React.Dispatch<React.SetStateAction<string[]>>;
}

// Define the AvailableFor options
const availableForOptions = [
  { value: 'girls', label: 'Girls' },
  { value: 'boys', label: 'Boys' },
  { value: 'family', label: 'family' },
  { value: 'couple', label: 'Couple' },
  { value: '5', label: 'Others' },
];

// FilterAvailableFor component
const FilterAvailableFor: React.FC<FilterAvailableForProps> = ({
  availableFor,
  setAvailableFor
}) => {

  return (
    <HorizontalMultiSelect
      isMulti={isMulti}
      values={availableFor}
      setValues={setAvailableFor}
      label="Available For"
      options={availableForOptions}
    />
  );
}

export default FilterAvailableFor;
