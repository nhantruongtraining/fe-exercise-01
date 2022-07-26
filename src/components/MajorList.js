import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import majorService from '../services/major.service';

const MajorList = () => {
    const [majors, setMajors] = useState([]);

    const init = () => {
        majorService.getAll()
            .then(response => {
                setMajors(response.data);
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    useEffect(() => {
        init();
    }, []);

    const handleDelete = (id) => {
        majorService.remove(id)
            .then(response => {
                init();
            })
            .catch(error => {
                console.log('Something went wrong', error);
            })
    }

    return (
        <div className='container'>
            <h3>List of majors</h3>
            <hr />
            <div>
                <Link to="/add" className='btn btn-primary mb-2'>Add major</Link>
                <table className='table table-bordered table-striped'>
                    <thead className="thead-dark">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            majors.map(major => (
                                <tr key={major.id}>
                                    <td>{major.id}</td>
                                    <td>{major.name}</td>
                                    <td>
                                        <Link className='btn btn-info' to={`/majors/edit/${major.id}`}>Update</Link>
                                        <button className='btn btn-danger ml-2' onClick={() => {
                                            handleDelete(major.id);
                                        }}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default MajorList;