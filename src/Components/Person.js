import React, { useState } from 'react'

const initState = [
    {
        firstName: 'Rahul',
        lastName: 'Kumar'
    },
    {
        firstName: 'Raj',
        lastName: 'Xyz'
    }
]

const initPersonState = { // single person belong to current form 
    firstName: '', lastName: ''
}

const Person = () => {
    const [people, setPeople] = useState(initState);

    const [person, setPerson] = useState(initPersonState);

    const onSubmit = (event) => {
        event.preventDefault();
        if (person.firstName.trim() === '' || person.lastName.trim() === '') return;

        const newPerson = {
            firstName: person.firstName.trim(),
            lastName: person.lastName.trim()
        }

        setPeople([...people, newPerson]);
        setPerson(initPersonState)
    }

    const onChange = (event) => {
        console.log(event);
        setPerson({ ...person, [event.target.name]: event.target.value })
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Add a Person:</h1>
                    <hr />
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="firstName"
                                className="form-control"
                                placeholder="First Name.."
                                value={person.firstName}
                                onChange={onChange}
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                name="lastName"
                                className="form-control"
                                placeholder="last Name.."
                                value={person.lastName}
                                onChange={onChange}
                            />
                        </div>
                        <button className="btn btn-success" type="submit">
                            Add Person
                        </button>
                    </form>
                </div>
                <div className="col">
                    <h2>People :</h2>
                    <hr />
                    {
                        people.map((p, i) => (
                            <div key={i}>
                                <p>{p.firstName} {p.lastName}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Person
