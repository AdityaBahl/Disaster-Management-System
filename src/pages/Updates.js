import React, { Component } from "react";
import UpdatesItem from "../components/UpdatesItem";
import PropTypes from 'prop-types'
import Navbar from './Navbar';

export class Updates extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=health&apiKey=2c4b1aa3e76a48bf863af1210189fbc9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=health&apiKey=2c4b1aa3e76a48bf863af1210189fbc9&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=health&apiKey=2c4b1aa3e76a48bf863af1210189fbc9&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        loading: false,
        page: this.state.page + 1,
        articles: parsedData.articles
      });
    }
  }

  render() {
    console.log("render");
    const { articles, loading, page, totalResults } = this.state;
    const cardsPerRow = 3;

    return (
      <div className="container flex flex-col items-center justify-center">
        <Navbar />
        <h1 className="text-center text-xl mt-10" style={{ margin: '40px 0px;' }}>NewsMonkey - Top Headlines</h1>
        <div className="custom-space row">
          {!loading &&
            articles.map((element, index) => (
              <div className={`col-md-4 flex flex-col items-center mt-6 border-solid border-2 border-black w-96 ${(index + 1) % cardsPerRow === 0 ? 'mb-6' : ''}`} key={element.url}>
                <UpdatesItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            ))}
        </div>
        <div className="container mx-auto flex justify-between">
          <button disabled={page <= 1} type="button" className="items-start btn btn-dark" onClick={this.handlePrevClick}>
            &larr; Previous
          </button>
          <button disabled={page + 1 > Math.ceil(totalResults / this.props.pageSize)} type="button" className="mr-0 btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Updates;
