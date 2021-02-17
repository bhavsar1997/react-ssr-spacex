import React from 'react';
import style from '../stylesheet/stylesheet.css';

export default (props) => {
    return (
        <div className={props.label == "Mission Ids" ? (style.launch_detail +" "+ style.type_list) : style.launch_detail}>
            <p className={style.detail_label}>{props.label}:</p>
            {
                props.label == "Mission Ids" ?
                    <ul className={style.detail_value}>
                        {props.value.length ? props.value.map(data => <li key={data}>{data}</li>) : <li>NA</li>}
                    </ul>
                    :
                    <p className={style.detail_value}>{JSON.stringify(props.value)}</p>
            }

        </div>
    )
}