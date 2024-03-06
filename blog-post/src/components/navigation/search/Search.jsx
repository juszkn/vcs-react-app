import "./Search.css"

const Search = () => {
    return (
        <>
            <div className="searchBar rounded-pill border border-2 col">
                <i className="bi bi-search"></i>
                <input type="search" placeholder="Search" className="border border-0"/>
            </div>
        </>
    )
}

export default Search