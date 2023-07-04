import "./styles/Loader.scss"

function Loader({ size }){
    if ( !size ) size = "16px"
    return <div className={ "dots-loading" }>
        <div className={ "first" } style={ { width: size, height: size } }></div>
        <div className={ "second" } style={ { width: size, height: size } }></div>
        <div className={ "three" } style={ { width: size, height: size } }></div>
    </div>
}

export default Loader