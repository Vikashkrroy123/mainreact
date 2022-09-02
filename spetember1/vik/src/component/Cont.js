export default function Cont(props){
    const styling={
        backgroundColor:props.color,
        height:props.k,
        width:"200px",
        display:"inline-block",
        color:props.rr,
        
}
    return(
        <div stye={styling}>{props.p}</div>
    )
}