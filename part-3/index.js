const Person = ({ name, age, hobbies }) => {
    const displayAgeMessage = age >= 18 ? "Please go vote!" : "You must be 18";
    const truncatedName = name.length > 8 ? name.substring(0, 6) : name;
  
    return (
      <div>
        <p>Learn some information about {truncatedName}</p>
        <h3>{displayAgeMessage}</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    );
  };
  

const App = () => {
    return (
    <div>
    <Person name="Frederick" age={25} hobbies={["React", "Components", "Props"]} />
    <Person name="Alexander" age={17} hobbies={["JavaScript", "React", "Components"]} />
    <Person name="Cornelius" age={30} hobbies={["React", "Components", "Props"]} />
    </div>
    );
    }

ReactDOM.render(<App />,document.getElementById('root'));