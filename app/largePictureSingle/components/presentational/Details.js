import React from 'react';
import classnames from 'classnames';

const Details = ({information,timeoutAction, size, toggleActivate, showingIndex, detailsReady
  })=>{


    const paragraphsKeys = Object.keys(information.paragraphs);
    const imageClass=classnames({
      lpsDetailsImageDefault:true
    })
    const lpsDetailsTop = classnames({
      lpsDetailsTop:true,
      lpsDetailsTopPost: detailsReady
    })
    const backBtn = classnames({
      backBtn: true,
      fadeIn: detailsReady
    })


  return(<div className="lpsDetails" style={{
    position:"absolute",
    height: size.height,
    width: size.width,

    top:0}}>

    <div
      className={lpsDetailsTop}
      style={{
        position:"absolute",
        top:size.height*.1}}>

      <h2
        style={{
          backgroundColor:showingIndex%2==0?'blue':'red'
        }}
        className="lpsDetailsText"
      >
        {information.title}
      </h2>
    </div>

      <div
      className='lpsDetailsImageDefault'
      style={{
        backgroundImage: 'url('+information['imageUrl'] + ')',
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        height: size.height*.8,
        width: detailsReady? size.width*.9: size.width,
        marginLeft: detailsReady? size.width*.05:0,
        marginTop: detailsReady? size.height*.05:0,
        position:'absolute',
        top:0,
        zIndex:'0'
      }}></div>

        <div
        onClick={()=>toggleActivate()}
        style={{opacity:detailsReady?1:0}}
        className="backBtn">

            <h3>{'<'}</h3>

        </div>

        <div className="lpsDetailsHeading">

          <h1
            style={{
                maxWidth:detailsReady? '100%':"0%"
              }}>
                {information.header.toUpperCase()}
            </h1>

          <h2 style={{
              backgroundColor:showingIndex%2==0?'blue':'red',
              maxWidth:detailsReady? '100%':"0%"
            }}>
              {information.author.toUpperCase()}
            </h2>
        </div>

        <div style={{
          opacity:detailsReady? 1:0,
          border:'6px solid white',
          lineHeight:'100%',
          position:'absolute',
          bottom:size.height*.14,
          left:'50%',
          backgroundColor:showingIndex%2==0?'blue':'red',
          color:showingIndex%2==0?'blue':'red',
          width:'10px',
          height:'9px',
          transform: 'rotate(45deg)',
          transformOrigin: '0px 0px'
        }}>
        </div>




        <div
          style={{
            top: size.height*.85
          }}
          className="lpsdetailsInnerContainer">
          <div className="lpsDetails">
            <p>This design can be found
            <a target="_blank" href="https://medium.muz.li/ui-interactions-of-the-week-46-6740fbcda8af#.8ntkap668"> here</a></p>
            {paragraphsKeys.map(item=>{
              return <p key={Math.random()}>{information.paragraphs[item]}</p>
            })}
          </div>
      </div>
    </div>)
}
export default Details;
