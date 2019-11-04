import React from "react";

const Conversion=()=>
{
const[dec,setDecimal]=React.useState();
const[bin,setBinary]=React.useState();
const[hex,setHexa]=React.useState();
const[oct,setOctal]=React.useState();

const handledec=(d)=>
{
    setDecimal(d.target.value)
    setBinary(parseInt(d.target.value,10).toString(2))
    setHexa(parseInt(d.target.value,10).toString(16))
    setOctal(parseInt(d.target.value,10).toString(8))
    
}
const handlebin=(b)=>
{
    setBinary(b.target.value)
    setDecimal(parseInt(b.target.value,2).toString(10))
    setHexa(parseInt(b.target.value,2).toString(16))
    setOctal(parseInt(b.target.value,2).toString(8))
    
    
}
const handlehex=(h)=>
{
    setHexa(h.target.value)
    
    setDecimal(parseInt(h.target.value,16).toString(10))
    setBinary(parseInt(h.target.value,16).toString(10))
    setOctal(parseInt(h.target.value,16).toString(8))
    
}
const handleoct=(o)=>
{
    setOctal(o.target.value)
    setDecimal(parseInt(o.target.value,8).toString(10))
    setBinary(parseInt(o.target.value,8).toString(2))
    setHexa(parseInt(o.target.value,8).toString(16))
    
}
const clickdec=(dec)=>
{
    setBinary(parseInt(dec,10).toString(2))
    setHexa(parseInt(dec,10).toString(16))
    setOctal(parseInt(dec,10).toString(8))
}
const clickbin=(bin)=>
{
    setDecimal(parseInt(bin,2).toString(10))
    setHexa(parseInt(bin,2).toString(16))
    setOctal(parseInt(bin,2).toString(8))
}
const clickhex=(hex)=>
{
    setDecimal(parseInt(hex,16).toString(10))
    setBinary(parseInt(hex,16).toString(10))
    setOctal(parseInt(hex,16).toString(8))
}
const clickoct=(oct)=>
{
    setDecimal(parseInt(oct,8).toString(10))
    setBinary(parseInt(oct,8).toString(2))
    setHexa(parseInt(oct,8).toString(16))
}

return(<div>
    
    <input type="text" onChange={handledec} value={dec}></input>
    <button onClick={()=>clickdec(dec)}>Decimal</button><br></br><br></br>
    <input type="text" onChange={handlebin} value={bin}></input>
    <button onClick={()=>clickbin(bin)}>Binary</button><br></br><br></br>
    <input type="text" onChange={handlehex} value={hex}></input>
    <button onClick={()=>clickhex(hex)}>Hexa-Decimal</button><br></br><br></br>
    <input type="text" onChange={handleoct} value={oct}></input>
    <button onClick={()=>clickoct(oct)}>Octal</button>
</div>)

}
export default Conversion;