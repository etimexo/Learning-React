import './App.css'
function App () {
  const planets = [
    { name: "Mars", isGasPlanet: false},
    { name: "Earth", isGasPlanet: false},
    { name: "Jupiter", isGasPlanet: true},
    { name: "Venus", isGasPlanet: false},
    { name: "Neptune", isGasPlanet: true},
    { name: "Uranus", isGasPlanet: true},
  ]
  return (
    <div className="App">
      {planets.map((props, key) => {
        return (
          <h1 key={key}>{props.isGasPlanet ? props.name + "- True" : props.name + "- False"}</h1>
        )
      })}
    </div>
  )
}
export default App;
