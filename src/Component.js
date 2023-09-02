function Component(props) {
    return (
        <div className="componentStyle">
            <h1>{props.title}</h1>
            
            <hr/>
            <p className="textStyle">{props.para}</p>
        </div>
    )
}

export default Component;