import React, { useState } from 'react';
import Select from 'react-select';

type ValueType<OptionType> = OptionType | OptionType[] | null | undefined;

type Option = {
    value: string;
    label: string;
  };

interface HorizontalMultiSelectProps<T> {
  values: T[];
  setValues: React.Dispatch<React.SetStateAction<T[]>>;
  label: string;
  options: Option[];
  isMulti: boolean
}

function HorizontalMultiSelect<T>({
  values,
  setValues,
  label,
  options,
  isMulti
}: HorizontalMultiSelectProps<T>) {
  const handleSelectChange = (selected: any) => {
    let selectedOptions: Array<{ value: string; label: string }> = [];
    if(Array.isArray(selected)){
    selectedOptions = selected as Array<{ value: string; label: string }>;
    }
    else if (typeof selected === 'object' && selected !== null){
    selectedOptions = [selected] as Array<{ value: string; label: string }>;  
    }
    const selectedValues = selectedOptions.map((option : any) => option.value);
    setValues(selectedValues);
  };

  return (
    <div style={{ width: '300px' }}>
      <h1>{label}</h1>
      <Select
        isMulti={isMulti}
        options={options}
        value={options.filter((option : any) => values.includes(option.value))}
        onChange={handleSelectChange}
      />
    </div>
  );
}

export default HorizontalMultiSelect;
