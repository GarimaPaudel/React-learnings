function Experience({experience}){
    return(
        <div>
<p>Experience</p>
<ul>
    <li>Role:{experience[0].role} , Year: {experience[0].year} , Company: {experience[0].company}</li>
    <li>Role:{experience[1].role} , Year: {experience[1].year} , Company: {experience[1].company}</li>  

</ul>
        </div>
    )
}
export default Experience;