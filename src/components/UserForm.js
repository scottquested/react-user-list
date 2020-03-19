import React from "react";
import {addUser} from "../redux/actions";
import {useDispatch} from "react-redux";

const UserForm = () => {

    const dispatch = useDispatch();

    const createErrorMessage = (error) => {

        const createErrorMessageEl = document.createElement('div');
        createErrorMessageEl.innerHTML = "You can't expect to add empty fields &#128580;Try again, only this time make sure to input your " + error + ".";
        createErrorMessageEl.classList.add(
            'alert',
            'bg-danger',
            'text-light',
            'animated',
            'fadeIn',
            'fast'
        );

        return createErrorMessageEl;
    };

    const handleSubmit = (e) => {

        e.preventDefault();

        // Stop user if inputs are empty
        if (!e.target.name.value || !e.target.job.value) {

            const emptyName = !e.target.name.value ? '<strong>full name</strong>' : '';
            const emptyJob = !e.target.job.value ? '<strong>job title</strong>' : '';
            let emptyError = '';

            if (emptyName && emptyJob) {
                emptyError = emptyName + ' and ' + emptyJob;
            } else if (emptyName && !emptyJob) {
                emptyError = emptyName;
            } else if (emptyJob && !emptyName) {
                emptyError = emptyJob;
            }

            document.querySelector('.js-submit').disabled = true;

            document.querySelector('.js-form').appendChild(createErrorMessage(emptyError));

        } else {

            const user = {
                name: e.target.name.value,
                job: e.target.job.value,
            };

            dispatch(addUser(user));

            e.target.reset();
        }
    };

    const handleKeyDown = (e) => {

        const alert = document.querySelector('.alert');

        document.querySelector('.js-submit').disabled = false;

        if (alert) {
            alert.remove();
        }
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="js-form">
            <table className="table table-bordered table-striped table-dark table-hover animated fadeIn fast">
                <thead>
                <tr>
                    <th width="40%">Full Name</th>
                    <th width="40%">Job Title</th>
                    <th width="10%">Add</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input onKeyDown={(e) => handleKeyDown(e)} type="text" name="name" placeholder="Name" className="d-block pl-2 pr-2 w-100" /></td>
                    <td><input onKeyDown={(e) => handleKeyDown(e)} type="text" name="job" placeholder="Job" className="d-block pl-2 pr-2 w-100" /></td>
                    <td><button type="submit" className="btn btn-success btn-sm js-submit">+</button></td>
                </tr>
                </tbody>
            </table>
        </form>
    );
};

export default UserForm;