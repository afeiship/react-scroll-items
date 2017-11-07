import './style.scss';

import React,{Component} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends Component{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };

  static defaultProps = {
    items:[],
    template:noop
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(
      this.refs.scroller.getBoundingClientRect()
    )
  }


  render(){
    const {
      className,
      items,
      template,
      ...props
    } = this.props;

    return (
      <div ref='root' {...props} className={classNames('react-scroll-items',className)}>
        <div ref='scroller' className="react-scroll-items-scroller">
          {
            items.map((item,index)=>{
              return template(item,index);
            })
          }
        </div>
      </div>
    );
  }
}
