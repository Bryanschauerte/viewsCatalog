import React, {Component} from 'react';

 class SizeContainer extends Component{
  constructor(props){
    super(props);
    this._onChangeWidth = this._onChangeWidth.bind(this);
    this._onChangeHeight = this._onChangeHeight.bind(this);
    this.state ={
      height:500,
      width: 400
    }
  }

  _onChangeWidth(e){
    this.setState({width: e})
  }
  _onChangeHeight(e){
    this.setState({height: e})
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextState.height || nextState.width){
      return true;
    }
  }

  render(){
    const {height, width} = this.state;
    return (
    <div
      style={{
        height:this.state.height,
        width:this.state.width,
        overflow:'hidden',
        position:'relative'
      }}>

      <div
        style={{
          height:this.state.height*.15,
          width:this.state.width,
          position:'absolute',
          display:'flex',
          top:0,
          fontSize: '1em'
        }}>

            <label>
              Height currently: {this.state.height} px
              <input
              type='number'
              value={height}
              onChange={(e)=>this._onChangeHeight(e.target.value)}
              style={{fontSize:"1em",width:'50%'}}
              />
            </label>

            <label>
              Width currently: {this.state.width}px
              <input
              type='number'
              value={width}
              onChange={(e)=>this._onChangeWidth(e.target.value)}
              style={{fontSize:"1em",width:'50%'}}
              />
            </label>

            </div>

              <div style={{
                height:this.state.height*.85,
                width:this.state.width,
                position:"absolute",
                top:this.state.height*.15,
                backgroundColor:"#f5f5f5"
              }}>

              {React.cloneElement(
                this.props.children,
                 {size:{height:this.state.height*.85, width: this.state.width}})}
        </div>
    </div>)
  }
}
export default SizeContainer;
