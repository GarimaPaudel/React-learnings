const person={
    name:"Garima Paudel",
    age:21,
    subject:"Computer Engineering"
}
function Header()
{
    return(
        
        <div className="bg-green-500 text-white text-center">
        <h1 className=" text-3xl">Welcome to official website of {person.name}</h1>
        <p>A Tech Enthusiast</p>
        </div>
        
    );
}
export default Header;