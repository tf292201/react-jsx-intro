
function Tweet(props) {
    return (
      <div className="card mb-3">
      <div className="card-body">
        <h3 className="card-title">{props.username}</h3>
        <p className="card-text">{props.date}</p>
        <p className="card-text">{props.tweet}</p>
      </div>
      </div>
    );
  }
  
  function App() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
        <Tweet username='Thomas' 
               date='03/23/2024' 
               tweet='React!' />
          </div>
          <div className="col-md-4">
        <Tweet username='Thomas'
               date='11/22/2024' 
               tweet='Components!' />
           </div>
          <div className="col-md-4">    
        <Tweet username='Thomas'
               date='12/24/1999' 
               tweet='props!' />
            </div>   
        </div>       
      </div>
    );
  }
  
    ReactDOM.render(
        <App />,
        document.getElementById('root')
        );
        