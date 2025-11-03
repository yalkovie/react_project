import './Window.css'

function Window ({pic, text}) {
    return (
        <div>
            <img src={pic}/>
            <p>{text}</p>
        </div>
    )
}

export default Window