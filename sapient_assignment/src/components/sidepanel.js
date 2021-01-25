import React from 'react';
import { FilterData } from '../utils/constant';

export const FilterPanel = (props) => {

    const applyFilter = (filterType, filterData) => {
        props.applyFilter(filterType, filterData)
    }
    return(
        <>
        <h6>Filter</h6>
        <div className="sidepanel_filter">
            <div className="text-center">Launch Year</div>
            <hr className="hr_line"></hr>
            {FilterData.map((filteryear, index)=> {
                return <div key={index} onClick={() => applyFilter('launch_year', filteryear)} className="filterdata">{filteryear}</div>
            })}
        </div>
        <div className="sidepanel_filter">
            <div className="text-center">Successful Launch</div>
            <hr className="hr_line"></hr>
            <div className="filterdata" onClick={() => applyFilter('launch_success', true)}>True</div>
            <div className="filterdata" onClick={() => applyFilter('launch_success', false)}>False</div>
        </div>
        <div className="sidepanel_filter">
            <div className="text-center">Successful Landing</div>
            <hr className="hr_line"></hr>
            <div className="filterdata" onClick={() => applyFilter('land_success', true)}>True</div>
            <div className="filterdata" onClick={() => applyFilter('land_success', false)}>False</div>
        </div>
        </>
    )
}