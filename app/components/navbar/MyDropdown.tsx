
import 'rsuite/dist/rsuite.min.css';
import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { useRouter } from 'next/navigation';

function MyDropdown() {
  const router = useRouter();
  // Define the state variable and handleChange function
  const [value, setValue] = useState('city'); // Initialize value with 'city'

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCity = event.target.value;
    setValue(selectedCity);
    const queryParameters = { city: selectedCity };

    const url = qs.stringifyUrl({
      url: '/',
      query: queryParameters,
    }, { skipNull: true });
    
    router.push(url);
  };

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option disabled value="city">City</option>
        <option value="pune">Pune</option>
        <option value="bangalore">Bangalore</option>
      </select>
    </div>
  );
}

export default MyDropdown;

