export default function MsgBox({username , textColor}){
    let styles = {color:textColor};
    return(
        <div>
            <h1 style={styles}>Hello,{username}</h1>
        </div>
    )
}