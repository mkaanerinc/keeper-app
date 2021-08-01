import React, {useState} from "react";

function CreateArea(props) { 

    const [addItem,setAddItem] = useState({
        title:"",
        content:""
    });

    function handleChange(event) {
        const {name,value} = event.target;

        setAddItem((prevItem) => {
            return {
                ...prevItem,
                [name]: value
            };
        });
        console.log(addItem);
    }

    function handleClick(event) {
        props.addOn(addItem);
        setAddItem({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={handleChange} value={addItem.title} />
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={handleChange} value={addItem.content} />
                <button onClick={handleClick} >Add</button>
            </form>
        </div>
    );
}

export default CreateArea;