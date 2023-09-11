import React, { useState } from 'react';
import HorizontalMultiSelect from './HorizontalMultiSelect';

const isMulti = false;

interface FilterFurnishingStatusProps {
  furnishingStatus: string[];
  setFurnishingStatus: React.Dispatch<React.SetStateAction<string[]>>;
}
// Define the FurnishingStatus options
const furnishingStatusOptions = [
  { value: '1', label: 'Fully Furnished' },
  { value: '2', label: 'Semi Furnished' },
  { value: '3', label: 'Unfurnished' },
];


// FilterFurnishingStatus component
const FilterFurnishingStatus: React.FC<FilterFurnishingStatusProps> = ({
  furnishingStatus,
  setFurnishingStatus
}) => {

  return (
    <HorizontalMultiSelect
      isMulti={isMulti}
      values={furnishingStatus}
      setValues={setFurnishingStatus}
      label="Furnishing Status"
      options={furnishingStatusOptions}
    />
  );
}

export default FilterFurnishingStatus;
