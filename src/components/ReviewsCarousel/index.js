import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {indexValue: 0}

  onLeftArrowClick = () => {
    const {indexValue} = this.state
    if (indexValue === 0) {
      this.setState({indexValue: 0})
    } else {
      this.setState(prevState => ({indexValue: prevState.indexValue - 1}))
    }
  }

  onRightArrowClick = () => {
    const {indexValue} = this.state
    const {reviewsList} = this.props
    if (indexValue === reviewsList.length - 1) {
      this.setState({indexValue: reviewsList.length - 1})
    } else {
      this.setState(prevState => ({indexValue: prevState.indexValue + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {indexValue} = this.state
    const {imgUrl, username, companyName, description} = reviewsList[indexValue]
    return (
      <div className="bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="arrows">
          <button
            type="button"
            testid="leftArrow"
            className="button"
            onClick={this.onLeftArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-image"
            />
          </button>
          <div className="profile-container">
            <img src={imgUrl} alt={username} className="profile" />
            <p className="profile-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            type="button"
            testid="rightArrow"
            className="button"
            onClick={this.onRightArrowClick}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-image"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
