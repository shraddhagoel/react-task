import React, { Component } from 'react';


export default class form2 extends Component {
    render() {
        const { fullname, email, selectedOption, country } = this.props

        return (

            <center>
                <h3>{fullname}</h3>
                <h3>{email}</h3>
                <h3>{selectedOption}</h3>
                <h3>{country}</h3>
            </center>
        )
    }
}