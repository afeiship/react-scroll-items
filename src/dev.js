import './dev.scss';
import ReactScrollItems from './main';

/*===example start===*/

// install: npm install afeiship/react-scroll-items --save
// import : import ReactScrollItems from 'react-scroll-items'

class App extends React.Component{
  state = {
    items:[
      'news1',
      'news2',
      'news3',
      'news4',
    ],
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _temlate = (item,index) => {
    return (
      <div className="item" key={index}>
        {item}
      </div>
    );
  };

  render(){
    return (
      <div className="hello-react-scroll-items">
        <ReactScrollItems ref='rc' items={this.state.items} template={this._temlate} />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
