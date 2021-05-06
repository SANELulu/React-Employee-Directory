import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import Filter from "./components/Filter";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((employeeInfo) => {
        setData(employeeInfo.results);
      });
  }, []);

  return (
    <div>
      <div>
        <Filter data={data} />
        <Table data={data} />
      </div>
    </div>
  );
}
export default App;

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       items : [],
//       isLoaded: false,
//     }
//   }

//   componentDidMount() {

//     fetch('https://randomuser.me/api/?results=5')
//     .then((response) => response.json())
//     .then((response) => {
//       this.setState({
//         items: response.results,
//         isLoaded: true,
//       })
//     })
//   }

//   render() {

//     var { items, isLoaded } = this.state;

//     if(!isLoaded) {
//       return <div>Loading...</div>;
//     }
//     else{
//       return (

//         <Wrapper>
//           <SearchBar/>
//           <Title> Employees</Title>

//           <Table>
//           {this.state.items.map(item => (
//             <EmployeeCard

//             key={item.id.value}
//             name={item.name.first}
//             image={item.picture.large}
//             location={item.location.city}
//             phone={item.phone}
//             />
//           ))}
//           </Table>
//         </Wrapper>

//       );
//     }
//   }
// }
