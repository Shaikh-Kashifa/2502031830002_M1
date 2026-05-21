

function Hello(){



    const getName = (yourname) => {
        return yourname
    }

    function handleClick(){
        alert("Button clicked!")
    }

    const handleInput = (event) => {
        console.clear()
        console.log("Value : ", event.target.value)
    }

    
    const name="Kashifa"
    const name1="Anjum"

    const handleMouseOver =() => console.log("Mouse is over the text!")
    const handleDoubleClick =() => console.log("Text Double Clicked!")  

    return (
        <>
            <h1> Hello {name}</h1>
            <h2> Bye {name1}</h2>

            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet consectetur .</p>

            <button 
                style={{ margin:'12px 400px' , padding:'5px' , fontSize:'20px' }} 
                onClick={handleClick}>Click Me</button>

            <button 
                style={{ margin:'10px 400px' , padding:'5px' , fontSize:'20px' }} 
                onClick={() => alert("Hello from inline function")}>Say Hello</button><br />

            <input 
                type="text" 
                style={{ margin:'12px 300px' , padding:'5px' , fontSize:'20px' }} 
                onChange={handleInput} placeholder="Type Something" /> <br />

        </>
    )

}
export default Hello