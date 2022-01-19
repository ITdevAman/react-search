
import axios from 'axios';

import React, { useState, useEffect } from 'react';

export default  function  App(){
    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState(allData);
    useEffect(() => {
        axios("https://61e7e744e32cd90017acbe82.mockapi.io/todos")
            .then(response => {
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);
    const handleSearch = (event) => {
        let value = event.target.value;
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            return data.name.toLowerCase().search(value) != -1;
        });
        setFilteredData(result);
    }
    return(
        <>
            <div className="App">
                <div style={{ margin: '0 auto', marginTop: '10%' }}>
                    <label>Search:</label>
                    <input type="text" onChange={(event) =>handleSearch(event)} />
                </div>
            </div>
            <div style={{padding:10}}>
                {filteredData.map((value)=>{
                    return(
                        <div key={value.id}>
                            <p>
                                {value.name}
                            </p>
                            <p>
                                {value.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}