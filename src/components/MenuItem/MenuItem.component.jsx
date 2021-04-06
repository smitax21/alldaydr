import React from 'react'
import { withRouter } from 'react-router-dom'

import {MenuItemContainer,
        BackgroundImageContainer,
        ContentContainer,
        ContentTitle,
        ContentSubtitle } from './MenuItem.styles'

const MenuItem = ({Location, imageUrl, history, linkUrl, match}) => {
    return (
        <MenuItemContainer onClick={() => history.push(`${match.url} ${linkUrl}`)}>
            <BackgroundImageContainer 
                style={{
                    backgroundImage: `url (${imageUrl})`
                }}
            />
            <ContentContainer>
                <ContentTitle>{Location.toUpperCase()}</ContentTitle>
                <ContentSubtitle> SHOP NOW </ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

export default withRouter(MenuItem);