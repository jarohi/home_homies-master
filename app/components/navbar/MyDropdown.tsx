

import Dropdown from 'rsuite/Dropdown';
import 'rsuite/dist/rsuite.min.css';
import CodeIcon from '@rsuite/icons/Code';
import PageIcon from '@rsuite/icons/Page';
import DetailIcon from '@rsuite/icons/Detail';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import FileDownloadIcon from '@rsuite/icons/FileDownload';
import FileUploadIcon from '@rsuite/icons/FileUpload';
import React, { useState } from 'react';

function MyDropdown() {
  // Define the state variable and handleChange function
  const [value, setValue] = useState('city'); // Initialize value with 'city'

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value);
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

