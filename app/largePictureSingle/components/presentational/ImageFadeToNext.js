import React from 'react';
import classnames from 'classnames';

const ImageFadeToNext = ({
                          indexActive,
                          information,
                          showingIndex,
                          size,
                          nextIndex,
                          changeProgress,
                          changeComplete
                          }) => {
          const lpsImageBase = classnames({
            lpsImageBase: true,
            lpsImageFade: changeProgress

          })
          const lpsImageIncomming = classnames({
            lpsImageBase: true,
            lpsImageIncomming: !changeComplete

          })

  return (<div >

          <div className={lpsImageBase} style={{
              backgroundImage:nextIndex? 'url('+information[nextIndex]['imageUrl'] + ')': 'url('+information[showingIndex]['imageUrl'] + ')',
              height: size.height,
              width:size.width,
              position:'absolute',
              top:0
            }}></div>

            {showingIndex?<div className={lpsImageIncomming} style={{
              backgroundImage:'url('+information[showingIndex]['imageUrl'] + ')',
              height: size.height,
              width:size.width,
              position:'absolute',
              top:0
            }}>

            </div>:null}


            </div>)
        }

export default ImageFadeToNext;
