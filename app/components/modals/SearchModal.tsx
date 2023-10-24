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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';


const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();


  const [rent, setRent] = useState([0, 10000]);
  const [brokerage, setbrokerage] = useState(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [bhk, setbhk] = useState<string[]>([]);
  const [occupancy,setOccupancy] = useState<string[]>([]);
  const [availableFor, setAvailableFor] = useState<string[]>([]);
  const [furnishingStatus, setFurnishingStatus] = useState<string[]>([]);

  const handleResetFilters = () => {
    // Reset all filter-related state variables
    setRent([0, 200000]);
    setbrokerage(null);
    setbhk([]);
    setOccupancy([]);
    setAvailableFor([]);
    setFurnishingStatus([]);
    setSelectedDate(null);
    // Add more reset logic as needed
  };

  // JSX for the reset button
    const resetButton = (
      <button className="reset-button" onClick={handleResetFilters}>
         <FontAwesomeIcon icon={faRedo} className="fa-xs" />
         <span className="reset-button-text">Reset</span>
      </button>
    );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const handleSeletedBHKsData = (data: any) => {
    setbhk(data);
  }

  const handleFurnishingStatusData = (data: any) => {
    setFurnishingStatus(data);
  }

  const handleAvailableForData = (data: any) => {
    setAvailableFor(data);
  }

  const handleOccupancyData = (data: any) => {
    setOccupancy(data);
  }

 // Handle changes when a brokeraage option is selected
  const handlebrokerageChange = (event: any) => {
    setbrokerage(event.target.value);
  };

  const onSubmit = useCallback(async () => {

    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString())
    }

    const updatedQuery: any = {
      ...currentQuery,
      rent,
      brokerage,
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
    brokerage,
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
        <div className="brokerage-options">
        <label htmlFor="brokerageField">Brokerage</label>
        <label className="brokerage-option-label" htmlFor="">
          <input
            type="radio"
            id="brokerageOption1"
            name="brokerageOptions"
            value="yes"
            checked={brokerage === 'yes'}
            onChange={handlebrokerageChange}
          />
          <span className="brokerage-option-text">Yes</span>
        </label>
        <label className="brokerage-option-label" htmlFor="brokerageOption2">
          <input
            type="radio"
            id="brokerageOption2"
            name="brokerageOptions"
            value="no"
            checked={brokerage === 'no'}
            onChange={handlebrokerageChange}
          />
          <span className="brokerage-option-text">No</span>
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
      resetButton={resetButton}
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
}

export default SearchModal;
