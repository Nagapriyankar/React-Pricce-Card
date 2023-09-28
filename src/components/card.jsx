import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark, faCheck } from '@fortawesome/free-solid-svg-icons'
import 'font-awesome/css/font-awesome.min.css';

function Card(props) {
    return <>
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                    <h5 className="card-title text-muted text-uppercase text-center">{props.data.plan}</h5>
                    <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                    <hr />
                    <ul className="fa-ul">
                        <li className={props.data.userEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.userEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.user}</li>
                        <li className={props.data.storageEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.storageEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.storage}</li>
                        <li className={props.data.publicProjectsEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.publicProjectsEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.publicProjects}</li>
                        <li className={props.data.communityAccessEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.communityAccessEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.communityAccess}</li>
                        <li className={props.data.privateProjectsEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.privateProjectsEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.privateProjects}</li>
                        <li className={props.data.supportEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.supportEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.support}</li>
                        <li className={props.data.subDomainEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.subDomainEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.subDomain}</li>
                        <li className={props.data.reportsEnabler ? "" : "text-muted"}><span className='fa-li'><li>{props.data.reportsEnabler ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}</li></span>{props.data.reports}</li>
                    </ul>
                    <div className="d-grid">
                        <a href="#" className="btn btn-primary text-uppercase">Button</a>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Card