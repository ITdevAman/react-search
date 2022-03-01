import React, {useEffect, useState} from 'react';
import "./App.css"
import "./index.css"
import axios from "axios";


const App = () => {
    const [count , setCount] = useState([])
    const [data , setData] = useState(count)
    useEffect(()=> {
        axios("https://61e7e744e32cd90017acbe82.mockapi.io/shops")
            .then(res => {
                setData(res.data)
                setCount(res.data);
            })
            .catch(er=>{
                console.log("ERERERER" , er)
            })
    })
    const FilterCount = (event) => {
        let value = event.target.value.toLowerCase()
        let result = []
        result = count.filter((el)=>{
            return el.name.toLowerCase().search(value) != -1
            // return el.filter.toLowerCase().search(value) != -1
        })
        setData(result)
    }
    return (
        <div className="container">
            <div>
                <h1>Search</h1>
                <input type="text" placeholder="Name product" onChange={event => FilterCount(event)}/>
                {/*<select onChange={event => FilterCount(event)} id="">*/}
                {/*    {*/}
                {/*        data.map(el=> <option value={el.filter}>{el.filter}</option>)*/}
                {/*    }*/}
                {/*</select>*/}
            </div>
            <div className="row">
                {
                    data.map((el)=>{
                        return(
                            <div className="col-3" id={el.id} >
                                <div className="box">
                                    <img src={el.img} alt=""/>
                                </div>
                                <div className="block">
                                    <h2>{el.name}</h2>
                                    <p>{el.desc}</p>
                                    <p>{el.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default App;































// import axios from 'axios';
//
// import React, {useState, useEffect} from 'react';
//
// export default function App() {
//     const [allData, setAllData] = useState([]);
//     const [filteredData, setFilteredData] = useState(allData);
//     useEffect(() => {
//         axios("https://61e7e744e32cd90017acbe82.mockapi.io/todos")
//             .then(response => {
//                 setAllData(response.data);
//                 setFilteredData(response.data);
//             })
//             .catch(error => {
//                 console.log('Error getting fake data: ' + error);
//             })
//     }, []);
//     const handleSearch = (event) => {
//         let value = event.target.value.toLowerCase();
//         let result = [];
//         console.log(result);
//         result = allData.filter((data) => {
//             return data.name.toLowerCase().search(value) != -1;
//         });
//         setFilteredData(result);
//     }
//     return (
//         <>
//             <div className="App">
//                 <div style={{margin: '0 auto', marginTop: '10%'}}>
//                     <label>Search:</label>
//                     <input type="text" onChange={(event) => handleSearch(event)}/>
//                 </div>
//             </div>
//             <div style={{padding: 10}}>
//                 {filteredData.map((value) => {
//                         return (
//                             <div key={value.id}>
//                                 <p>
//                                     {value.name}
//                                 </p>
//                                 <p>
//                                     {value.desc}
//                                 </p>
//                             </div>
//                         )
//                 })}
//             </div>
//         </>
//     )
// }