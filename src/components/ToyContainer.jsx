import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {
  return(
    <div id="toy-collection">
      {props.toys.map(toy => <ToyCard key={toy.id} toy={toy} del={props.del}/>)}
    </div>
  )
}

export default ToyContainer;














// class ToyContainer extends React.Component {
  
//   getToy = () => {return this.props.toys.map(toy => {
//     return <ToyCard toy={toy} key={toy.id} delete={this.props.delete}/>
//   })
// }
//   render(){
//   // debugger
//   return(
//     <div id="toy-collection">
//           {this.getToy()}
//         </div>
//     )
//   }
// }

// export default ToyContainer;