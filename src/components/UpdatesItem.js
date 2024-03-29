import React, { Component } from "react";

export class UpdatesItem extends Component {
    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{ width: "18rem" }}>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{source}</span>
                    <img src={!imageUrl ? "https://bloximages.newyork1.vip.townnews.com/kdhnews.com/content/tncms/assets/v3/editorial/3/9c/39c7bf44-1bc9-11e7-a98f-87030b359a0e/58e7e9e1c9a0f.image.jpg" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body flex flex-col">
                        <h5 className="card-title mt-2">{title} </h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small class="text-muted">By {author ? author : "unknown"} on {new Date(date).toGMTString()} </small></p>
                        <a rel="nonreferrer" href={newsUrl} targert="_blank " className="btn btn-sm btn-dark text-red-600">Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default UpdatesItem;
