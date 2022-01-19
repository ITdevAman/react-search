import './App.css';
import {useEffect, useState} from "react";
import axios from "axios"


function App() {
    const [state, setAllData] = useState([])
    const [filteredData, setFilteredData] = useState(state);
    useEffect(() => {
        axios(`https://61e7e744e32cd90017acbe82.mockapi.io/todos/`)
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
    },[])

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
        result = state.filter((data) => {
            return data.name.search(value) != -1;
        });
        setFilteredData(result);
    }
    return (
        <div className="App">
            <div style={{margin: '0 auto', marginTop: '10%'}}>
                <label>Search:</label>
                <input type="text" onChange={(event) => handleSearch(event)}/>
            </div>
            <div style={{padding: 10}}>
                {filteredData.map((value, index) => {
                    return (
                        <div key={value.id}>
                            <h1>{value.name}</h1>
                            <h1>{value.desc}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default App;

