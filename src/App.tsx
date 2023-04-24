import Header from "./components/Header";

function App() {

  return (
    <div className="App otro">
      <Header background={import.meta.env.VITE_PRIMARY_COLOR} />
    </div>
  )
}

export default App
