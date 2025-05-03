import DataTable from 'react-data-table-component';
import { useState,useEffect } from 'react';
const columns:any = [
	{
		name: 'id',
		selector: (row: { id: any; }) => row.id,
	},
	{
		name: 'name',
		selector: (row: { name: any; }) => row.name,
	},
    {
		name: 'color',
		selector: (row: { data: { color: any; }; }) => row.data?.color,
	},
    {
		name: 'capacity',
		selector: (row: { data: { capacity: any; }; }) => row.data?.capacity,
	},
];

/*
const data = [
    {
      id: 1,
      title: 'Beetlejuice',
      year: '1988',
  },
  {
      id: 2,
      title: 'Ghostbusters',
      year: '1984',
  },
]
  */

interface ISampleTableProps {
  count?: number
};



const SampleTable = ({count} : ISampleTableProps)=> {

interface TableRow {
  id: number;
  name: string;
  data: {
    color: string;
    capacity: string;
  };
}

const [tableData, setTableData] = useState<TableRow[]>([]);
const [filteredData, setfilteredData] = useState<TableRow[]>([]);
const [searchText, setSearchText] = useState('');   

useEffect(() => {
    fetchData();
}
, [searchText]);


const fetchData = async () => {
    const response = await fetch('https://api.restful-api.dev/objects');
    const data = await response.json();
    setTableData(data);
    setfilteredData(data);
}

const filterData = async () => {
    setfilteredData(tableData.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())));
}
  return (
    <>

    <label className='header-text'>Search</label>
    <input className='text-field' placeholder='Enter name' type='text' id='txtName' 
    value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    
    <button className='button' onClick={filterData}>Search</button>
    <label>Foot click counter: {count}</label>

    <div className='fixedTable'>
      <DataTable
          columns={columns}
          data={filteredData}
          pagination={true}
          paginationPerPage={6}
          persistTableHead={true}
      />
      </div>
      </>
  );
};

export default SampleTable;