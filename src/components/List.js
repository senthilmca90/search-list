import React from 'react'
import { MDBTableHead, MDBTableBody, MDBTable } from 'mdbreact';

const List = props => {
    console.log(props)
        return (
            <div>
<MDBTable bordered>
      <MDBTableHead>
        <tr>
          <th>#</th>
          <th>Id</th>
          <th>Name</th>
          <th>Gender</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {props.filterusers.length == 0 && <tr> <td colSpan="3">Sorry No Matches found</td></tr>}
      {props.filterusers.map((usr, index) =>
        <tr key={usr._id}>
          <td>{index+1}</td>
          <td>{usr._id}</td>
          <td>{usr.name}</td>
          <td>{usr.gender}</td>
        </tr>
      )}
      </MDBTableBody>
    </MDBTable>
            </div>
        )
}


export default List;
