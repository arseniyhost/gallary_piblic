import React from 'react';
import { connect } from 'react-redux';
import Contacts from './Contacts';

class ContactContainer extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Contacts />
        )
    }
}

export default ContactContainer;
