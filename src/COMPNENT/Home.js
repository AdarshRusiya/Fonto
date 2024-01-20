import React, { useState } from 'react'
import './Home.css'
function Home() {
    const [value, setvalue] = useState({ text: "" })
    const onchange = (e) => {
        setvalue({ ...value, [e.target.name]: e.target.value })

    }

    const handleclick1 = () => {
        const data = value.text.toUpperCase();
        setvalue({ text: data })




    };
    const handleclick2 = () => {
setvalue({text: ""}) 



    };

    const handleclick3 = () => {
        let data = value.text.toLowerCase();
        setvalue({ text : data })
    };



    const handleclick4 = () => { setvalue({text : value.text.split(" ").join("")})};


    const handleclick5 = () => { setvalue({text: navigator.clipboard.writeText(value.text)}) };



    return (
        <div className='cont1'>
            <div className='container'>
                <h1 >FONTO</h1>
                <textarea className='texta' value={value.text} name='text' onChange={onchange} ></textarea>
                <div>
                    <button className='btn' onClick={handleclick1}>Upper-case</button>
                    <button className='btn' onClick={handleclick2}>Clear</button>
                    <button className='btn' onClick={handleclick3}>Lower-case</button>
                    <button className='btn' onClick={handleclick4}>Trim</button>
                    <button className='btn' onClick={handleclick5}>Copy</button>
                </div>
            </div>






        </div>
    )
}

export default Home