function Skills({skills}){
    return(
        <div className="p-5">
            <p>Skills</p>
<ul className="list-disc list-inside">
    <li>{skills[0]}</li>
    <li>{skills[1]}</li>
    <li>{skills[2]}</li>
</ul>
        </div>
    )
}
export default Skills;