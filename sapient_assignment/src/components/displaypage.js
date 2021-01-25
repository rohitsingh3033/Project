import React, { useEffect, useState } from 'react';

export const DisplayComponent = (props) => {
    return(
        <div className="main_card">
            <div><b>Searched for :</b>{JSON.stringify(props.filterdata)}</div>
            {props.data.length> 0 ? props.data.map((result,i)=>{
                return <div key={i} className="shadow p-3 mb-5 bg-white rounded custom_card">
                    <div className="filter_image text-center"><img src={result.links.mission_patch_small} alt={result.mission_name} /></div>
                    <div>{result.mission_name} #{result.flight_number}</div>
                    <div><b>Mission Id: </b>
                    {
                        result.mission_id.length > 0 ?
                         result.mission_id.map((x,ind)=><span key={ind+'x'}>{x}  </span>): <span>NA</span>
                    }
                    </div>
                    <div><b>Successful Launch: </b>{result.launch_success}</div>
                    <div><b>Successful Landing: </b>{result.rocket.first_stage.cores[0].land_success}</div>
                </div>
            }) : <h5 className="text-center">No Result!!!</h5>}
            
        </div>
    )
}