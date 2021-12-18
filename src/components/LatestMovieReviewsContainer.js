import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor (){
        super();

        this.state = {
            reviews: []
        };
    }

    componentDiMount() {
        fetch(URL)
            .then(res => res.json())
            .then(response => this.setState({ reviews: response.resuts }));
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>The Lastest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}
export default LatestMovieReviewsContainer;