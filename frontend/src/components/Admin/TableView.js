import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { FaEdit, FaTrash } from 'react-icons/fa';
import BootstrapTable from 'react-bootstrap-table-next';
// import paginationFactory from 'react-bootstrap-table2-paginator';
// import filterFactory, { textFilter, selectFilter, numberFilter, Comparator } from 'react-bootstrap-table2-filter';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
// import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { Button } from 'react-bootstrap';



export default function TableView() {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios(`${process.env.REACT_APP_API_URL}/admin/getall`);
            console.log(result)
            setData(result.data);
        }
        fetchData();
    }, []);

    const columns = [
        // IMAGE COLUMN
        {
            dataField: 'image',
            text: 'Image',
            formatter: (cell, row) => {
                return <div className='w-100 mx-auto'>
                    <img alt='item' style={{ height: '40px', width: 'auto' }} src={cell} className="img-thumbnail mx-auto" />
                </div>;
            },
            headerStyle: () => { return { width: '70px' } },
            headerAlign: 'center',
            style: { textAlign: 'center' }

        },
        // ID COLUMN
        {
            dataField: '_id',
            text: 'ID'
        },
        // NAME COLUMN
        {
            dataField: 'name',
            text: 'Name'
        },
        // PRICE COLUMN
        {
            dataField: 'price',
            text: 'Price'
        },
        // CATEGORY COLUMN
        {
            dataField: 'category',
            text: 'Category'
        },
        // ACTION COLUMN
        {
            text: 'Action',
            formatter: (cell, row) => {
                return <><Button className='px-1 pt-0 pb-1 mx-1' variant="outline-dark"><FaEdit /></Button>
                    <Button className='px-1 pt-0 pb-1 mx-1' variant="outline-dark"><FaTrash /></Button></>
            },
            style: { textAlign: 'center' },
            headerStyle: () => { return { width: '100px' } },
            headerAlign: 'center'
        }];
    return <div className='w-75 mx-auto'>
        <BootstrapTable keyField='id' data={data} columns={columns} />
    </div>

};
