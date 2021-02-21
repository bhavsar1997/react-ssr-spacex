import React from 'react';
import style from '../stylesheet/stylesheet.css';
import FigureItem from './FigureItem';
import DetailItem from './DetailItem';
const renderData = (data) => {

    return data.map(item => {
        return (
            <div className={style.launch_item} key={item.flight_number}>
                <FigureItem source={item.links.mission_patch_small} name={item.mission_name} />
                <p className={style.launch_name}>{item.mission_name}  #{item.flight_number}</p>
                <DetailItem value={item.mission_id} label="Mission Ids" />
                <DetailItem value={item.launch_year} label="Launch Year" />
                <DetailItem value={item.launch_success ? 'True':'False'} label="Successful Launch" />
                <DetailItem value={item.rocket.first_stage.cores[0].land_success ? 'True' : 'False'} label="Successful Landing" />
            </div>
        )
    })
}

export default (props) => {
    return (
        <div className={style.launch_list}>
            {renderData(props.data)}
        </div>
    )
}