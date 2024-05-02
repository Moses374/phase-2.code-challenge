import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";

const FilterTransactions=({onChange})=>{

const [searchTerm, setSearchTerm]=useState('')
const handleChange =(e)=>{
    setSearchTerm(e.target.value)
    onChange(e.target.value)
}
const handleSearch=()=>{}
return(
    <div>
        <input
        type='text'
        placeholder='Search your transactions'
        value={searchTerm}
        onChange={handleChange}
        />
        <Button onClick={handleSearch}>Search</Button>
    </div>
);

}
export default FilterTransactions