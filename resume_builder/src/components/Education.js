function Education({education}){
    return(
        <div className="p-5">
                        <p>Education</p>

<ul className=" list-decimal">
    <li>{education[0]}</li>
    <li>{education[1]}</li>
    <li>{education[2]}</li>

</ul>
        </div>
    )
}
export default Education;