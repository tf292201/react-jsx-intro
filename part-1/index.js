////Part 1

function FirstComponent() {
  return <h1>My very first React component</h1>;
}

ReactDOM.render(<FirstComponent />, document.getElementById('root'));

function NamedComponent(props) {
  return <p>My name is {props.name}</p>;
}

ReactDOM.render(<NamedComponent name="Thomas" />, document.getElementById('root'));

function App() {
    return (
        <div>
        <FirstComponent />
        <NamedComponent name="Thomas" />
        </div>
    );
    }

ReactDOM.render(<App />, document.getElementById('root'));