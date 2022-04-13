import React from 'react'
import App from '../App'

import { useQuery } from "@apollo/client";

import { PRODUCTS } from './queries';
import Products from './data';

const AppQuery = (props) => {

    const { data, loading, error } = useQuery(PRODUCTS)

    // data is fetched from the graphQL endpoint
    let USED_DATA = data
    let graphqlData = true

    // if the graphQL endpoint is unavailable, a hard coded database is used
    if(error !== undefined){
        USED_DATA = Products
        graphqlData = false
    }

    return ( 

        USED_DATA ?

        <App data={USED_DATA.categories} graphqlData={graphqlData} >{props.children}</App>
        
        :

        <h2 className="loading">LOADING</h2>

    )
}

export default AppQuery