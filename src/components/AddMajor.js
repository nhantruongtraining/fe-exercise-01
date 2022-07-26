import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import majorService from "../services/major.service";

const AddMajor = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveMajor = (e) => {
        e.preventDefault();

        const major = { name, id };
        if (id) {
            // update
            majorService.update(major)
                .then(response => {
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        } else {
            // create
            majorService.create(major)
                .then(response => {
                    navigate('/');
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }
    useEffect(() => {
        if (id) {
            majorService.get(id)
                .then(major => {
                    setName(major.data.name);
                })
                .catch(error => {
                    console.log('Something went wrong', error);
                })
        }
    }, [id])
    return (
        <div className="container">
            <h3>Add Major</h3>
            <hr />
            <form>
                <div className="form-group">
                    <input type="text" className="form-control col-4" id="name" onChange={(e) => setName(e.target.value)} placeholder="major name" />
                </div>
                <div>
                    <button onClick={(e) => saveMajor(e)} className="btn btn-primary">Save</button>
                </div>
            </form>
            <hr />
            <Link to="/">Back to List</Link>
        </div>
    )

}

export default AddMajor;