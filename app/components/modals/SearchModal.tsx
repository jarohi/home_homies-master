'use client';

import qs from 'query-string';
import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import './SearchModal.css';
import 'rc-slider/assets/index.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import useSearchModal from "@/app/hooks/useSearchModal";

import Modal from "./Modal";
import Heading from '../Heading';
import Slider from 'rc-slider/lib/Slider';
import FilterBHKs from './Filters/FilterBHKs';
import FilterOccupancy from './Filters/FilterOccupancy';
import FilterAvailableFor from './Filters/FilterAvailableFor';
import FilterFurnishingStatus from './Filters/FilterFurnishingStatus';


const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();


  const [rent, setRent] = useState([0, 10000]);
  const [brokerge, setbrokerge] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bhk, setbhk] = useState<string[]>([]);
  const [occupancy,setOccupancy] = useState<string[]>([]);
  const [availableFor, setAvailableFor] = useState<string[]>([]);
  const [furnishingStatus, setFurnishingStatus] = useState<string[]>([]);


  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSeletedBHKsData = (data: any) => {
    console.log('handleDataChange in SearchModel', data)
    setbhk(data);
    console.log('bhk', bhk);
  }

  const handleFurnishingStatusData = (data: any) => {
    setFurnishingStatus(data);
    console.log('FurnishingStatus', furnishingStatus);
  }

  const handleAvailableForData = (data: any) => {
    setAvailableFor(data);
    console.log('AvailableFor', availableFor);
  }

  const handleOccupancyData = (data: any) => {
    setOccupancy(data);
    console.log('occupancy', occupancy);
  }

 // Handle changes when a brokerge option is selected
  const handlebrokergeChange = (event: any) => {
    setbrokerge(event.target.value);
  };

  const onSubmit = useCallback(async () => {

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    console.log('in SearchModel', bhk);
    console.log('in SearchModel occupancy', occupancy);

    const updatedQuery: any = {
      ...currentQuery,
      rent,
      brokerge,
      bhk,
      occupancy,
      availableFor,
      furnishingStatus
    };

    const url = qs.stringifyUrl({
      url: '/',
      query: updatedQuery,
    }, { skipNull: true });

    searchModal.onClose();
    router.push(url);
  }, 
  [
    searchModal, 
    location, 
    router,
    rent,
    bhk,
    occupancy,
    availableFor,
    furnishingStatus,
    params
  ]);

  const actionLabel = 'Search'



    let bodyContent = (
      <div className="flex flex-col gap-8 modal-content">
        <Heading
          title="Find your perfect place!"
        />       
        <hr />
        <div className="slider-container">
        <label htmlFor="rent-slider">Rent Range</label>
        <Slider
          className={"slider"}
          range
          min={0}
          max={200000}
          step={1000}
          value={rent}
          onChange={(value: number | number[]) => {
            if((Array.isArray(value)))
            setRent(value)}}
          allowCross={false}
          pushable
        />
        <div className="slider-values">
          <span>{rent[0]}</span>
          <span>{rent[1]}</span>
        </div>
      </div>
    <hr />
      <div className="brokerge-title">
        <label htmlFor="brokergeField">Brokerage</label>
        </div>
        <div className="brokerge-options">
        <label className="brokerge-option-label" htmlFor="brokergeOption1">
          <input
            type="radio"
            id="brokergeOption1"
            name="brokergeOptions"
            value="brokergeOption1"
            checked={brokerge === 'brokergeOption1'}
            onChange={handlebrokergeChange}
          />
          <span className="brokerge-option-text">Yes</span>
        </label>
        <label className="brokerge-option-label" htmlFor="brokergeOption2">
          <input
            type="radio"
            id="brokergeOption2"
            name="brokergeOptions"
            value="brokergeOption2"
            checked={brokerge === 'brokergeOption2'}
            onChange={handlebrokergeChange}
          />
          <span className="brokerge-option-text">No</span>
        </label>
       </div>
    <hr />
      <div>
      <h1>Availability</h1>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MMMM d, yyyy"
        placeholderText="Select a date"
      />
    </div>
    <hr />
    <FilterBHKs
    bhk={bhk}
    setbhk={handleSeletedBHKsData}
    />
    <hr />
      {/* Filter by Occupancy */}
    <FilterOccupancy
    occupancy={occupancy}
    setOccupancy={handleOccupancyData}
    />
    <hr />
      {/* Filter by Available For */}
      <FilterAvailableFor
      availableFor={availableFor}
      setAvailableFor={handleAvailableForData}
      />
    <hr />
      {/* Filter by Furnishing Status */}
      <FilterFurnishingStatus
      furnishingStatus={furnishingStatus}
      setFurnishingStatus={handleFurnishingStatusData}
      />
    <hr />
      </div>
    )

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;
