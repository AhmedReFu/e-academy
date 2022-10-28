import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [courseTitles, setCourseTitles] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/courses/all`)
            .then(res => res.json())
            .then(data => setCourseTitles(data))

    }, [])

    return (
        <div className="sidebar sticky-top">
            <ListGroup>
                {
                    courseTitles.map(title => <div key={title.id}><NavLink to={`/course/${title.id}`} className="sidebar-list">{title.title}</NavLink><hr /></div>)
                }
            </ListGroup>
        </div>
    )
}

export default Sidebar