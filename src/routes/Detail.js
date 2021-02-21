import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <div className="detail__background">
            <img className="detail__background_img" src={location.state.poster} alt={location.state.title}></img>
          </div>
          <div className="movieDetail">
            <img className="detail__poster" src={location.state.poster} alt={location.state.title} title={location.state.title}></img>
            <h3 className="detail__title">{location.state.title}</h3>
            <p className="detail__year">{location.state.year}</p>  
            <p className="detail__genres">{location.state.genres}</p>
            <p className="detail__summary">{location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;