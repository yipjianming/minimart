import React, { useState, useEffect } from 'react';
import { Spinner, Col, Row, Button } from 'react-bootstrap';
import axios from 'axios'
import TableView from './TableView';
import InsertItem from './InsertItem';
import { Link } from "react-router-dom";
import customLogo from '../../customLogo.png'
export default function Main() {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    // Data Management for itemList
    // Get All Data
    async function fetchData() {
        const result = await axios(`/api/getall`).catch(error => {
            console.log(error)
        });
        setData(result.data);
        setLoaded(true)
    }
    useEffect(() => {
        fetchData();
    }, []);

    //  Insert Data
    async function insertData(newEntry) {
        axios.post(`/api/insert`, newEntry)
            .then(res => {
                newEntry['_id'] = res.data
                // Redundant step but here due to slow mongoDB Cluster
                let newData = JSON.parse(JSON.stringify(data))
                newData.push(newEntry)
                setData(newData)
                // Real fetch and refresh from DB Cluster
                fetchData()
            })
            .catch(error => {
                console.log(error)
            })
    }
    //  Edit Data
    async function editData(entry) {
        // Redundant step but here due to slow mongoDB Cluster
        let newData = JSON.parse(JSON.stringify(data))
        let dataIndex = newData.findIndex((item => item._id === entry._id));
        newData[dataIndex] = entry
        setData(newData)
        // Real fetch and refresh from DB Cluster
        axios.put(`/api/update`, entry)
            .then(res => {
                fetchData()
            })
            .catch(error => {
                console.log(error)
            })
    }

    //  Delete Data
    async function deleteData(deletedId) {
        // Redundant step but here due to slow mongoDB Cluster
        let newData = JSON.parse(JSON.stringify(data))
        newData = newData.filter(function (item) {
            return item._id !== deletedId;
        });
        setData(newData)
        // Real delete and refresh from DB Cluster
        axios.delete(`/api/delete`, { data: { _id: deletedId } })
            .then(res => fetchData())
            .catch(error => {
                console.log(error)
            })
    }
    // Elements
    return <div style={{ height: '100vh', width: '100vw' }} >
        {loaded ? <div style={{width:'95%'}} className="h-100 d-flex align-items-start flex-column mx-auto" >
            <Row className='py-1 w-100'>
                {/* Create New Item */}
                <Col xs={4} className='mt-auto'><InsertItem insertData={insertData} /></Col>
                {/* Logo*/}
                <Col xs={4} align='center'><img alt="" src={customLogo} width="200" height="100" /></Col>
            </Row>
            <div style={{ height: '100%', overflowY: 'auto' }}>
                {/* Table List View*/}
                <TableView deleteData={deleteData} editData={editData} data={data} />
            </div>
        </div>

            /*Show Page Loading*/
            : <div className='h-100 w-100 d-flex'>
                <Spinner className='mx-auto my-auto' animation='border' variant='success' />
            </div>
        }
        {/* Link to user View */}
        <Link to="/"><Button style={{ position: 'absolute', top: '10px', right: '10px' }} variant='outline-success'> Go To User View</Button></Link>
    </div >

};
