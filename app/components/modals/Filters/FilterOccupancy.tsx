import React, { useState } from 'react';
import HorizontalMultiSelect from './HorizontalMultiSelect';


interface FilterOccupancyProps {
  occupancy: string[];
  setOccupancy: React.Dispatch<React.SetStateAction<string[]>>;
}
// Define the Occupancy options
const OccupancyOptions = [
  { value: '1', label: 'Single' },
  { value: '2', label: 'Double' },
  { value: '3', label: 'Triple' },
  { value: '4+', label: 'Others' },

];


// FilterOccupancy component
const FilterOccupancy: React.FC<FilterOccupancyProps> = ({
  occupancy,
  setOccupancy
}) => {

  return (
    <HorizontalMultiSelect
      values={occupancy}
      setValues={setOccupancy}
      label="Occupancy"
      options={OccupancyOptions}
    />
  );
}

export default FilterOccupancy;
