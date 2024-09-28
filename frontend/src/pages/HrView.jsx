import { useParams } from 'react-router-dom';
const HrView=()=>{
    const {id_to_view} = useParams();
    console.log(id_to_view)
    return(
        <div>
            <h1>#HR View

            {id_to_view}
            Emp name
            age
            job title
            </h1>
        </div>
    )

}
export default HrView