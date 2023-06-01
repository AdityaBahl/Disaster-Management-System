import React from "react";
import PropTypes from "prop-types";

const UpdatesItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    return (
        <div className="card">
            <img src={imageUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
                <a href={newsUrl} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
};

UpdatesItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    newsUrl: PropTypes.string.isRequired,
    author: PropTypes.string,
    date: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired
};

export default UpdatesItem;
