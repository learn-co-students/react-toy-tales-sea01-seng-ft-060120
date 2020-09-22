import React from 'react';
import './App.css';

import Header from './components/Header'
import ToyForm from './components/ToyForm'
import ToyContainer from './components/ToyContainer'

import data from './data'


class App extends React.Component{

  state = {
    display: false,
    toys: []
  }

  componentDidMount(){
    this.setState({toys: data})
  }

  handleClick = () => {
    let newBoolean = !this.state.display
    this.setState({
      display: newBoolean
    })
  }

  someFunction = (name, image) => {
    this.setState({toys: [...this.state.toys, {name: name, image: image, likes: 0}]})
  }

  deleteToy = (id) => {
    let selectToy = this.state.toys.filter(toy => toy.id !== id)
    this.setState({toys: [selectToy]})
    console.log(id)
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'DELETE'
    });

    // .then(selectToy => {
    //   this.state.toys.filter(toy => toy.id !== id)
    //   this.setState({toys: [...this.state.toys, selectToy]})
    // })
  }

  render(){
    return (
      <>
        <Header/>
        { this.state.display
            ?
          <ToyForm newToy={this.someFunction}/>
            :
          null
        }
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys} del={this.deleteToy}/>
      </>
    );
  }

}

export default App;













// class App extends React.Component{

//   state = {
//     display: false,
//     toys: []
//   }

//   componentDidMount(){
//     this.setState({
//       toys: data
//     })
//   }

//   handleClick = () => {
//     let newBoolean = !this.state.display
//     this.setState({
//       display: newBoolean
//     })
//   }

//   handleSubmit = (e) => {
//     e.preventDefault()
//     let newToy = {name: e.target.name.value, image: e.target.image.value, likes: 0}
//     this.setState({
//       toys: [...this.state.toys, newToy]
//     })
//   }

//   deleteToy = (toy) => {
//     console.log(toy)
//     // let newToy = this.state.toys.filter(toy)
//     // console.log(newToy)
//   }

//   render(){
//     return (
//       <>
//         <Header/>
//         { this.state.display
//             ?
//           <ToyForm handleSubmit={this.handleSubmit}/>
//             :
//           null
//         }
//         <div className="buttonContainer">
//           <button onClick={this.handleClick}> Add a Toy </button>
//         </div>
//         <ToyContainer toys={this.state.toys} delete={this.deleteToy}/>
//       </>
//     );
//   }

// }

// export default App;