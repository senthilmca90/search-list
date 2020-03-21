import React from 'react'
import { MDBFormInline, MDBBtn } from 'mdbreact'

export const SearchInput = (props) => {
    return (
        <div>
            <MDBFormInline className="md-form mr-auto mb-4 float-right">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search Name" aria-label="Search Name" onChange={props.handleChange} />
                                <MDBBtn gradient="aqua" rounded size="sm" type="submit" className="mr-auto">
                                Search
                                </MDBBtn>
                        </MDBFormInline>
        </div>
    )
}
