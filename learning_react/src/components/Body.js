function Body(){
    return(
       <p>Body</p> 
    );

}
function Video({text,views}){
    return (
        <>
        <img src="https://loremflickr.com/160/90"/>
        <h2 className="bg-gray-500 text-white w-40">{text}</h2>
        <p>{views} views</p>
        </>
      
    )
    }
export {Body, Video};