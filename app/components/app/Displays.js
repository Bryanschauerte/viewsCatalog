import React from 'react';
import * as lpsActions from '../../largePictureSingle/actions/largePictureSingle';
import LargePictureSingle from '../../largePictureSingle/components/LargePictureSingle'
import {connect} from 'react-redux';
import fetch from 'isomorphic-fetch';
import SizeContainer from './SizeContainer';

// import HeaderInformation from './HeaderInformation'

class Displays extends React.Component{
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state={
      value:''
    }
  }
  onChange(value){
    this.setState({value: value.target.value})
  }



componentDidMount(){


}


  render(){

    return (
      <div className='DemoAddition'>
      <h1 className="DemoAdditionTitle">Mobile View for large Image + Info Gallery </h1>
        <div id="display">

            <div className="">
            <h3>*Change the Height and Width*</h3>
              <SizeContainer>
                <LargePictureSingle
                  largePictureSingle={this.props.largePictureSingle}
                  dispatch={this.props.dispatch}
                  />
              </SizeContainer>

            </div>
            <div className="half">
              <div className = "half">

                <ul>

                  <h1>Features</h1>
                  <li><p>HOC sizing container for appropriate scaling of the display on ANY device Size</p></li>
                  <li><p>Redux Helping with state management</p></li>
                  <li><p>Styling done with SASS</p></li>
                  <li><p>Base componet using array of objects with: author, image url, title, header, and paragraphs. </p></li>
                  <li><p>Can easily add a fetch reducer to replace dummy data</p></li>

                </ul>
                </div>
                <div className = "half">
                <ul>

                  <h1>Notes</h1>
                  <h3>Date Added:</h3>
                  <li>
                     <p>Nov 12th, 2016</p>

                  </li>
                  <h3>Tech:</h3>
                  <li>
                    <p>React, Redux, JSPM (package manager like Webpack, but nicer), gulp, SASS</p>

                  </li>

                      <h3>
                      Inspiration from <a href="https://medium.muz.li/ui-interactions-of-the-week-46-6740fbcda8af#.8ntkap668" target="_blank">Muli( Link )</a>
                      </h3>

                </ul>
              </div>
            </div>
          </div>
      </div>)
  }

}

const mapStateToProps = (state) => {

const {
  changeComplete,
  changeProgress,
  indexActive,
  information,
  nextIndex,
  showingIndex
  } = state.largePictureSingle

    return {
      largePictureSingle: state.largePictureSingle


    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        dispatch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Displays);
