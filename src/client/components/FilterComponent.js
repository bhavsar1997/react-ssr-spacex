import React from 'react';
import style from '../stylesheet/stylesheet.css';

const filterData = [{
    type: "launch_year",
    displayName: "Launch Year",
    data: new Array((new Date().getFullYear() - 2005)).fill().map((a, i) => 2006 + i)
},
{
    type: "launch_success",
    displayName: "Successful Launch",
    data: ["true", "false"]
},
{
    type: "land_success",
    displayName: "Successful Landing",
    data: ["true", "false"]
}];

export default (props) => {
    const { handler } = props;
    return (
        <div className={style.launch_filters}>
            <h2>Filters</h2>
            {filterData.map(category =>
                <section className={style.filter_category} key={category.type}>
                    <h3 className={style.filter_type}>{category.displayName}</h3>
                    <div className={style.filter_values}>
                        {
                            category.data.map((filter) =>
                                <button className={style.filter_item} key={filter}
                                    onClick={() => handler}>
                                    {filter}
                                </button>
                            )
                        }
                    </div>
                </section>
            )}
        </div>
    )
}