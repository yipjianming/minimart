import { FaTrash } from 'react-icons/fa';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory, { textFilter, selectFilter } from 'react-bootstrap-table2-filter';
import EditItem from './EditItem';
import { Button } from 'react-bootstrap';



export default function TableView(props) {
    const columns = [
        // IMAGE COLUMN
        {
            dataField: 'image',
            text: 'Icon',
            formatter: (cell, row) => {
                return <div className='w-100 mx-auto'>
                    <img alt='item' style={{ height: '30px', width: 'auto' }} src={cell} className="mx-auto" />
                </div>;
            },
            style: { textAlign: 'center' },
            headerStyle: { width: '70px', textAlign: 'center', verticalAlign: 'middle' }
        },
        // ID COLUMN
        {
            dataField: '_id',
            text: 'ID',
            style: { textAlign: 'center', },
            // Only show for large devices and above
            classes: 'd-none d-lg-block border-bottom-0',
            headerClasses: 'd-none d-lg-block border-bottom-0',
            headerStyle: { width: '100%',textAlign: 'center', verticalAlign: 'middle' },

        },
        // NAME COLUMN
        {
            dataField: 'name',
            text: 'Name',
            headerStyle: { verticalAlign: 'middle' },
            sort: true,
            filter: textFilter()
        },
        // PRICE COLUMN
        {
            dataField: 'price',
            text: 'Price',
            style: { textAlign: 'center' },

            headerStyle: { width: '120px', textAlign: 'center', verticalAlign: 'middle' },
            formatter: (cell, row) => {
                return <span>{cell.toFixed(2)}</span>
            },
            headerFormatter: (column, colIndex, { sortElement, filterElement }) => {
                return (
                    <div className='h-100'>
                        <span className='mb-auto'>
                            {column.text} {sortElement}
                        </span>
                        {filterElement}
                    </div>
                );
            },
            sort: true
        },
        // CATEGORY COLUMN
        {
            dataField: 'category',
            text: 'Category',
            style: { textAlign: 'center' },
            headerStyle: { textAlign: 'center', verticalAlign: 'middle' },
            filter: selectFilter({
                options: {
                    'Drinks': 'Drinks',
                    'Food': 'Food',
                    'Fruits': 'Fruits',
                    'Snacks': 'Snacks',
                    'Others': 'Others'
                }
            }),
        },
        // ACTION COLUMN
        {
            dataField: 'dummy',
            isDummyField: true,
            text: 'Action',
            style: { textAlign: 'center' },
            headerStyle: { width: '100px', textAlign: 'center', verticalAlign: 'middle' },
            formatter: (cell, row) => {
                return <><EditItem data={row} editData={props.editData} />
                    <Button className='px-1 pt-0 pb-1 mx-1' variant="outline-dark"
                        style={{ borderColor: 'grey' }}
                        onClick={() => props.deleteData(row._id)}
                    ><FaTrash /></Button></>
            }
        }];
    return <BootstrapTable bootstrap4 keyField='_id' data={props.data} columns={columns} filter={filterFactory()} />


};
