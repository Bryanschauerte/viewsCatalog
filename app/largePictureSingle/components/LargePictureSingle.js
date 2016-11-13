import classnames from 'classnames';
import React, {Component,PropTypes} from 'react'
import Base from './presentational/Base.js';
import ImageFadeToNext from './presentational/ImageFadeToNext.js'
import * as lpsActions from '../actions/LargePictureSingle.js'
import Details from './presentational/Details'
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

class LargePictureSingle extends Component{
  constructor(props){
    super(props);
    this._handleIndexChange = this._handleIndexChange.bind(this);
    this._handleActivation = this._handleActivation.bind(this);
    this.renderLanding = this.renderLanding.bind(this);
    this.renderDetails = this.renderDetails.bind(this);
    this.timeoutAction = this.timeoutAction.bind(this);
  }


  _handleIndexChange(direction){
    direction == 'up'? this.props.dispatch(lpsActions.forwardIndex()):
      this.props.dispatch(lpsActions.backwardIndex())

    this.props.dispatch(lpsActions.imageChangeInitiate())
    setTimeout(()=>{
      this.props.dispatch(lpsActions.imageChangeComplete())
    }, 500)
  }

  _handleActivation(){
    this.props.dispatch(lpsActions.activateIndex())
    this.timeoutAction(lpsActions.toggleDetailsReady, true);

  }
  timeoutAction(actionToDelay, isAction){
    if(isAction){
      return setTimeout(()=>{
        return this.props.dispatch(actionToDelay())
      }, 700)
    }
      return setTimeout(()=>{
        return actionToDelay();
      }, 700)
  }

  renderLanding(){

        const {
          indexActive,
          information,
          showingIndex,
          changeComplete,
          changeProgress,
          nextIndex
      } =this.props.largePictureSingle;

        const size = this.props.size;

    return(
      <div style={{border:'1px solid black'}}>
            <div className="lpsImageContainer" style={{
              position:'absolute',
              height:size.width*.1,
              width:size.width*.1,
              left:size.width*.15,
              top:size.width*.05,
              }}>

            <span className="lpsFakeLogo">
              IMAFAKEICON
            </span>
          </div>

                  <ImageFadeToNext
                  information={information}
                  indexActive={indexActive}
                  showingIndex={showingIndex}
                  changeProgress={changeProgress}
                  changeComplete={changeComplete}
                  nextIndex ={nextIndex}
                  size={size}/>
                <div
                className='rightClick'
                onClick={this._handleIndexChange.bind(null, 'up')}>
                  'Swipe' Right
                </div>

                <div
                className='leftClick'
                onClick={this._handleIndexChange.bind(null, 'down')}>
                  'Swipe' Left
                </div>

                <Base
                activateIndex = {this._handleActivation}
                changeComplete={changeComplete}
                changeProgress={changeProgress}
                showingIndex={showingIndex}
                size={size}
                nextIndex ={nextIndex}
                information={information}
                />
                </div>
    )
  }
  renderDetails(){

    const size = this.props.size;
    const {
      indexActive,
      information,
      showingIndex,
      changeComplete,
      changeProgress,
      nextIndex,
      detailsReady
    } =this.props.largePictureSingle;

    return(
          <Details
          showingIndex={showingIndex}
          size={size}
          information={information[showingIndex]}
          detailsReady={detailsReady}
          toggleActivate={this._handleActivation}
          timeoutAction = {this.timeoutAction}/>)
  }

  render(){
    const {indexActive} = this.props.largePictureSingle;
    return indexActive? this.renderDetails():this.renderLanding();
  }

}

export default LargePictureSingle;
