function Experience({experience}){
    return(
        <div className="p-5">
<p>Experience</p>
<ul className=" list-disc p-5">
    <li className=" list-disc">Role:{experience[0].role} , Year: {experience[0].year} , Company: {experience[0].company}</li>
    <li>Role:{experience[1].role} , Year: {experience[1].year} , Company: {experience[1].company}</li>  

</ul>
        </div>
    )
}
export default Experience;