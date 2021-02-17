import React from 'react';
import App from './App';
import HomePage from './HomePage';

export default [
    {
        ...App,
        routes:[
            {
                ...HomePage,
                path: '/',
                exact:true
            }
        ]

    }
]