import React from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
const User = (props) => {
    const { id, name, phone, profession, company, gender, bio, image, income } = props.users;
    const yearlyIncome = Number(income * 12);
    return (
        <div className="user">
            <div className="user-image">
                <div className="test">
                    <img src={image} alt="" />
                    <h3 className="user-title">{bio}</h3>
                    <div className="social-links">
                        <a href="/"><FontAwesomeIcon className="icons" icon={faFacebook} /></a>
                        <a href="/"><FontAwesomeIcon className="icons" icon={faTwitter} /></a>
                        <a href="/"><FontAwesomeIcon className="icons" icon={faInstagram} /></a>
                        <a href="/"><FontAwesomeIcon className="icons" icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
            <div className="user-bio">
                <h3><b>User ID:</b> {id}</h3>
                <p><b>Name:</b> {name}</p>
                <p><b>Phone:</b> {phone}</p>
                <p><b>Profession:</b> {profession}</p>
                <p><b>Company Name:</b> {company} </p>
                <p><b>Gender</b>: {gender}</p>
                <h4>Income: ${income}</h4>
                <h4>Yearly Income: ${yearlyIncome}</h4>
                <button
                    onClick={() => { props.handleUserAdd(props.users) }}
                    className="add-button">
                    <FontAwesomeIcon icon={faUserPlus} />  Add User</button>
            </div>
        </div>
    );
};

export default User;