import React,{useState} from "react";

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
        <button onClick={handleSearch}>Search</button>
    </div>
);

}
export default FilterTransactionsComponent