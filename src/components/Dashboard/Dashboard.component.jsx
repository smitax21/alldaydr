import React from 'react';
import {withRouter} from 'react-router-dom'

import Header from '../Header/Header.component';
import ProductPage from '../Products/Products.component';
import {HomePageContainer} from './Dashboard.styles';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <HomePageContainer>
                <ProductPage />
            </HomePageContainer>
        </div>
    )
}

export default withRouter(Dashboard);