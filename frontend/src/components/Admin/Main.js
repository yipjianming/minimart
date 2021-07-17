import React, { useState, useEffect, useRef } from 'react';
import { Spinner } from 'react-bootstrap';
import axios from 'axios'
import TableView from './TableView';
import NewItem from './NewItem';
export default function Main() {

    const [loaded, setLoaded] = useState(false);
    const [data, setData] = useState([]);

    async function fetchData() {
        const result = await axios(`${process.env.REACT_APP_API_URL}/admin/getall`);
        setData(result.data);
        setLoaded(true)
    }
    useEffect(() => {
        fetchData();
    }, []);

    //  Insert Data
    async function insertData(newEntry) {
        // This Step is just to display newly inserted data to the user without the user needing to wait for data refresh from the server.
        let newData = JSON.parse(JSON.stringify(data))
        newData.push(newEntry)
        setData(newData)
        fetchData()
    }
    //  Delete Data
    async function deleteData(deletedId) {
        // This Step is just to display newly inserted data to the user without the user needing to wait for data refresh from the server.
        let newData = JSON.parse(JSON.stringify(data))
        newData = newData.filter(function (item) {
            return item._id !== deletedId;
        });
        setData(newData)
        axios.delete(`${process.env.REACT_APP_API_URL}/admin/delete`, { data: { _id: deletedId } })
            .then(res => fetchData())
            .catch(error => {
                console.log(error)
            })

    }

    return <div style={{ height: '100vh' }} >
        {loaded ?
            /*Page Loaded*/
            <div className='w-75 mx-auto' >
                <NewItem insertData={insertData} />
                <TableView deleteData={deleteData} data={data} />
            </div>

            /*Show Page Loading*/
            : <div className='h-100 w-100 d-flex'>
                <Spinner className='mx-auto my-auto' animation='border' variant='dark' />
            </div>
        }
    </div >

};
