interface ButtonProps {
  text: string
}


function Button(props: ButtonProps) {
  return (
    <button>{props.text}</button>
  )
}


function App() {
  return (
    <div>
      <Button text="let's get it started"/>
    </div>
  )
}

export default App
