import React from 'react';
import style from '../stylesheet/stylesheet.css';

export default (props) => {
    return (
                <figure className={style.figure_item}>
                        <img alt={props.name} src={props.source} />
                </figure>
    )
}