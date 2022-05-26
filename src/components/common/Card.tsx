import React from 'react'

const Card = (props: any) => {
    return (
        <div className="col-xl-4 col-sm-6 col-12">
            <div className="card bg-success">
                <div className="card-content">
                    <div className="card-body">
                        <div className="d-flex">
                            <div className="text-right text-light">
                                <h3>{props.number}+</h3>
                                <span>{props.name}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card