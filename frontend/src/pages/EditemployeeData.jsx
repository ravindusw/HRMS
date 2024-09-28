import { useParams } from 'react-router-dom';
const EditemployeeData=()=>{
    const {id_to_edit} = useParams();
    //console.log(id_to_edit)
    return(
        <div>
            <h1>Edit Employee {id_to_edit} Data</h1>
        </div>
    )

}
export default EditemployeeData