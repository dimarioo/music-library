import { useState } from "react";

function Searchbar(props){

    const [searchTerm, setSearchTerm]=useState('')
    return(
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder="'Enter a search term here"/>
            <input type="submit"/>
        </form>
    )
}
export default Searchbar