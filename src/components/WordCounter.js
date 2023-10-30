import React ,{useState} from 'react';


function WordCounter(props) {
    const [count, setCount] = useState(0);
     
    const counter_w = (e) =>{
        setCount(e.target.value.trim().split(/\s+/).length);
    }

    return (
        <div >
            <h2>{props.heading}</h2>
            <textarea name="textarea" id="text_area" onChange={counter_w} cols="45" rows="8"></textarea>
            <h4>Word Count: {count}</h4>
        </div>
    )
}

export default WordCounter
