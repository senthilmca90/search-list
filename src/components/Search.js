

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBNav, MDBNavItem, MDBNavLink, MDBInput, MDBBtn, MDBFormInline } from 'mdbreact'
import List from './List'
import { SearchInput } from './SearchInput'
import { getUsers } from '../actions/userAction'
class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            users : [],
            searchString:''
        }
    }

    componentDidMount = () => {
        fetch('data/search-list.json')
    .then(response => {
        return response.json()
    })
    .then(json => {
        console.log(json)
        this.setState({users : json})

    });
    }



    handleChange = (e) => {
        this.setState({searchString:e.target.value});
    }


    render() {
        var filterusers,
        filterusers = this.state.users,
        searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){
            filterusers = filterusers.filter(l => {
                return l.name.toLowerCase().match( searchString );
            });
        }


        return (
            <div>
            <h5>Customer Details</h5>

                    <MDBContainer>
                    <MDBRow>
                    <MDBCol md="10">
                        <SearchInput handleChange={this.handleChange} />
                    </MDBCol>
        <MDBCol md="2"></MDBCol>

            </MDBRow>
            <MDBRow>
                <MDBCol md="2"></MDBCol>
                <MDBCol md="8">
                    <List filterusers={filterusers} />
                </MDBCol>
                <MDBCol md="2"></MDBCol>
            </MDBRow>

</MDBContainer>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
