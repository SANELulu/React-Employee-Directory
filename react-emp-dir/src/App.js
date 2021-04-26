import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard"
import Wrapper from "./components/Wrapper"
import Title from "./components/Title"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items : [],
      isLoaded: false,
    }
  }

  componentDidMount() {

    fetch('https://randomuser.me/api/?results=5')
    .then((response) => response.json())
    .then((response) => {
      this.setState({
        items: response.results,
        isLoaded: true,
      })
    })
  }

  render() {

    var { items, isLoaded } = this.state;

    if(!isLoaded) {
      return <div>Loading...</div>;
    }
    else{
      return (
        <Wrapper>
          <Title> Employees</Title>
          {this.state.items.map(item => (
            <EmployeeCard
            
            key={item.id.value}
            name={item.name.first}
            image={item.picture.large}
            location={item.location.city}
            phone={item.phone}
            />
          ))}
          
        </Wrapper>

      // <div className="App">
        
      //   {items.map(item =>(
      //     <div>
      //     <h1>{item.name.first}</h1>
      //     <img src={item.picture.medium} alt={item.name.first}></img>
      //     </div>
      //   ))}
        
      // </div>
      );
    }
  }
}

export default App;
