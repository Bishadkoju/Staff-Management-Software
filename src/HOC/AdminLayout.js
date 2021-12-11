import React from 'react'
import AdminTopBar from '../component/Bar/AdminTopBar'

const AdminLayout = (props) => {
    return (
        <React.Fragment>
            <AdminTopBar />
            {props.children}
        </React.Fragment>
    )
}

export default AdminLayout
