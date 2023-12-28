"use client";
import ReactSlider from "react-slider";
import { useState } from "react";
const Track = (props, state) => (
  <div
    {...props}
    key={props.key}
    index={state.index}
    className={`inset-y-1/4 border-lg h-1 rounded-lg ${
      props.index === 2
        ? "bg-primary-500"
        : props.index === 1
        ? "bg-gray-950"
        : "bg-primary-500"
    }`}
    //fix the colors of the selection of the range, it isn't working
  ></div>
);
const Thumb = (props, state) => {
  return (
    <div
      {...props}
      key={props.key}
      className="h-4 leading-4 w-4 text-center bg-primary-500 text-white rounded-full cursor-grab"
    >
      <span className="text-body2 relative inset-y-6 inset-left-6">
        ${state.valueNow}
      </span>
    </div>
  );
};

const StyledReactSlider = ({ handleFilter, filterValue }) => {
  const [priceRange, setPriceRange] = useState(filterValue);
  console.log(priceRange);
  return (
    <div className="pt-3 pb-8 px-1">
      <ReactSlider
        className="w-full h-6"
        defaultValue={[0, 2000]}
        renderTrack={Track}
        renderThumb={Thumb}
        min={0}
        max={3000}
        minDistance={2}
        onChange={(value) => setPriceRange(value)}
        onAfterChange={() => handleFilter(priceRange)}
        value={filterValue}
      />
    </div>
  );
};

export default StyledReactSlider;
