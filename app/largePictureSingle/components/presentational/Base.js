import React, {Component,PropTypes} from 'react'
import classnames from 'classnames';

const Base = ({indexActive, activateIndex, size, nextIndex, changeComplete, changeProgress, information, showingIndex})=>{


  const baseStyle = classnames({
    baseLPS: true,
    moveBaseRight: (nextIndex>showingIndex) && !changeComplete,
    moveBaseLeft:  (nextIndex < showingIndex) && !changeComplete
  })

  return (

  <div
    className={baseStyle}
    onClick={()=>activateIndex()} >

    <div
      style={{paddingLeft:'5%'}}>

        <div
          style={{
            backgroundColor:showingIndex%2==0?'blue':'red',
            display:'inline-block',
            padding:'2%',
            color:'white',
            letterSpacing:'3px',
            textAlign:'center',
            fontSize:'xx-small'}}
            >

            {information[showingIndex]['title'].toUpperCase()}

        </div>

        <p style={{
          fontSize:'large',
          lineHeight:'100%',
          marginBottom:'.5em',
          minHeight:'53px',
          marginTop:'.5em'}}>

          {information[showingIndex]['previewHeader'].toUpperCase()}

        </p>

        <div style={{fontFamily:'Courier', marginBottom:'2%'}}>
          <i>{information[showingIndex]['author']}</i>
        </div>
      </div>

    <div style={{
      border:'6px solid white',
      lineHeight:'100%',
      position:'absolute',
      bottom:'-4%',
      left:'50%',
      backgroundColor:showingIndex%2==0?'blue':'red',
      color:showingIndex%2==0?'blue':'red',
      width:'10px',
      height:'9px',
      transform: 'rotate(45deg)',
      transformOrigin: '0px 0px'
    }}>
    </div>
  </div>)
}
export default Base;
