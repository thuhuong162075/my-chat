import React from "react";
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { acssetToken } from '../../pages/login/reselect'
import { Redirect } from "react-router-dom";

export default function Index() {
    const {token_user } = useSelector(createStructuredSelector({
        token_user: acssetToken
    }));
    if(token_user === '') {
        return (
            <Redirect to='/sign-in' />
        )
    } else {
return (
        <div >
            <div>
                Hello, Welcom to website
            </div>
        </div>
    );
    }
    
}