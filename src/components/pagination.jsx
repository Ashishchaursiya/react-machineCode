import { useEffect, useState } from "react"

export default function Pagination() {
    const [activePage, setActivePage] = useState(1)
    const [totalItems, setTotalItems] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(10)
    const [products, setProducts] = useState([])

    const fetchProducts = async (skip) => {
        const response = await fetch(`https://dummyjson.com/products?skip=${skip}&limit=${itemsPerPage}`)
        const data = await response.json()
        setTotalItems(data.total)
        setProducts(data.products)
    }
    useEffect( () => {
        let newSkipNumber = activePage*itemsPerPage-itemsPerPage
        fetchProducts(newSkipNumber)
    },[activePage,itemsPerPage])
    return <>
        <div style={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
          
            {products.map( (item,idx) => {
                return <div className="productItem" style={{border:"1px solid black",padding:"5px",width:"230px",height:"250px"}}>
                    <h3>{item.title}</h3>
                    <img src={item.thumbnail} style={{objectFit:"contain"}} width="200px" height="200px" />
                    </div>
            })}
        </div>
        <div className="pagination" style={{display:"flex",justifyContent:"center"}}>
            {
                activePage!==1 &&   <div onClick={ () => setActivePage( prev => prev-1)}>
                {"<"}
                 </div>
            }
        
         {Array.from({length:totalItems/itemsPerPage},(_,i) => i+1).map((n) => {
            return <div style={{border:`${activePage==n ? 5:1}px solid black`}} onClick={ ()  => setActivePage(n)}>
                {n}
                </div>
         }) }
          {
                Math.floor(totalItems/itemsPerPage)!==activePage &&   <div onClick={ () => setActivePage( prev => prev+1)}>
                {">"}
                 </div>
            }
            <div>
               
                    <select onChange={ (e) =>{
               setItemsPerPage(Number(e.target.value))
                    }}>
                    {[10,20,30,50].map( (item) => (<option value={item}>
                        {item}
                    </option>))}
                    </select>
                
            </div>
         
         </div>

        </>
    
}