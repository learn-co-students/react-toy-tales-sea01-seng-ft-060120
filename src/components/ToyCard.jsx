import React, { Component } from 'react';

class ToyCard extends Component {
  
  clickHandler = (e) => {
    this.props.del(this.props.toy.id)
    // debugger
    // e.target.parentElement.remove()
  }

  render() {
    const {name, image, likes} = this.props.toy
    return (
      <div className="card">
        <h2>{name}</h2>
        <img src={image} img alt={name} className="toy-avatar" />
        <p>{likes} Likes </p>
        <button className="like-btn">Like {'<3'}</button>
        <button className="del-btn" onClick={this.clickHandler}>Donate to GoodWill</button >
      </div>
    );
  }

}

export default ToyCard;










// class ToyCard extends Component {  
//   render() {
//     let {name, image, likes} = this.props.toy
//     console.log(this.props.toy)
//     return (
//       <div className="card">
//         <h2>{name}</h2>
//         <img src={image} alt={name} className="toy-avatar" />
//         <p>{likes} Likes </p>
//         <button className="like-btn">Like {'<3'}</button>
//         <button className="del-btn" onClick={this.props.delete(this.props.toy)}>Donate to GoodWill</button>
//       </div>
//     );
//   }

// }

// export default ToyCard;