console.log("Hello")

function Header({name}){
    return(

        <h1 style={{ color : "green" , fontSize : "20px"}}>{name}, Welcome To My Website</h1>
    )
}

function Main(props) {
    return ( 
    <header style={{textAlign : "center" , fontSize : "30px"}}>
        <h1>Hi,{props.name} Your Are { props.age > 18 ? "Eligible" : "Not Eligible"} To Vote.</h1>
        <h2>Thanks You.</h2>
    </header>
        
    )
}

function Footer(){
    return (
        <footer style={{marginTop:20, textAlign:'center'}}>
            <>
                <h2>Leave Your Contact Details Here </h2>
                <input type="number"></input> <br></br><br></br>
                © 2025 My Website
            </>
        </footer>
    )
}


function App(){
    return (
        <>
            <Header name={"Mayur"} />
            <Main user = {{ name : "Mayur" , age:30 }} />
            <Footer />    
        </>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);