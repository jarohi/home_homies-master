import React, { useState } from 'react';
import HorizontalMultiSelect from './HorizontalMultiSelect';

const isMulti = true;

interface FilterOccupancyProps {
  occupancy: string[];
  setOccupancy: React.Dispatch<React.SetStateAction<string[]>>;
}
// Define the Occupancy options
const OccupancyOptions = [
  { value: 'single', label: 'Single' },
  { value: 'double', label: 'Double' },
  { value: 'triple', label: 'Triple' },
  { value: 'others', label: 'Others' },

];

// FilterOccupancy component
const FilterOccupancy: React.FC<FilterOccupancyProps> = ({
  occupancy,
  setOccupancy
}) => {

  return (
    <HorizontalMultiSelect
      isMulti={isMulti}
      values={occupancy}
      setValues={setOccupancy}
      label="Occupancy"
      options={OccupancyOptions}
    />
  );
}

export default FilterOccupancy;
