const exampleInfoOne={
  author:'Cicero',
  imageUrl:'https://media1.britannica.com/eb-media/58/181058-004-6467F237.jpg',
  previewHeader:'Lorem Lorem Ipsum do eiusmod tempor incididunt ut labore et',
  title:'Lorem Ipsum',
  header:'Lorem ipsum dolor sit amet, adipiscing elit',
  paragraphs:{
    1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
}

const exampleInfoTwo ={
  author:'Mr Pig',
  header:'Bacon Ipsum tenderloin t-bone',
  title:'Bacon',
  imageUrl:'http://i.imgur.com/x7E3UyM.jpg',
  previewHeader:'Lorem Bacon Ipsum salami prosciutto brisket strip steak meatloaf pork chop ',
  paragraphs:{
    1:'Bacon ipsum dolor amet tenderloin t-bone bresaola, meatball rump salamiprosciutto brisket strip steak meatloaf pork chop beef sausage fatback shoulder. Boudin pancetta strip steak filet mignon pork belly ham beef. Flank cow short ribs kevin, turducken brisket tongue prosciutto pork chop venison ham pastrami biltong. Bresaola spare ribs porchetta flank pancetta andouille. Tail porchetta doner, prosciutto kielbasa ground round pastrami bresaola burgdoggen rump ham hock boudin leberkas ball tip pork. Short ribs strip steak tongue pork belly. Salami fatback brisket sausage shank sirloin pork belly beef porchetta pork chop corned beef andouille.',
    2:'Bacon ipsum dolor amet tenderloin t-bone bresaola, meatball rump salami prosciutto brisket strip steak meatloaf pork chop beef sausage fatback shoulder. Boudin pancetta strip steak filet mignon pork belly ham beef. Flank cow short ribs kevin, turducken brisket tongue prosciutto pork chop venison ham pastrami biltong. Bresaola spare ribs porchetta flank pancetta andouille. Tail porchetta doner, prosciutto kielbasa ground round pastrami bresaola burgdoggen rump ham hock boudin leberkas ball tip pork. Short ribs strip steak tongue pork belly. Salami fatback brisket sausage shank sirloin pork belly beef porchetta pork chop corned beef andouille.'
  }
}

const exampleInfoThree ={
  author:'BigBang',
  header:'Space Ipsum Another Ipsum',
  title:'Space Ipsum',
  imageUrl:'http://www.mrwallpaper.com/wallpapers/space-sparkling-stars-1280x1024.jpg',
  previewHeader:'Space Stars Ipsum, How Beautiful the Night',
  paragraphs:{
  1:'Across the sea of space, the stars are other suns.',
  2: 'As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.',
  3:'As I stand out here in the wonders of the unknown at Hadley, I sort of realize there’s a fundamental truth to our nature, Man must explore . . . and this is exploration at its greatest.'
  }
}

export default function largePictureSingle(
  state={
    showingIndex:0,
    nextIndex:null,
    information:[exampleInfoOne, exampleInfoTwo, exampleInfoThree],
    indexActive:false,
    detailsReady:false,
    changeProgress:false,
    changeComplete:true
  },
  action){

    switch (action.type) {
      case 'CHANGE_INDEX_FORWARD':
        let index = state.showingIndex+1;
        index= index > state.information.length-1? 0:index;
        return {...state, nextIndex: index}
        break;
      case 'CHANGE_INDEX_BACKWARD':
        let back = state.showingIndex-1;
        back= 0 > back? state.information.length-1: back;
        return {...state, nextIndex:back}
        break;
      case 'CHANGE_INITIATED':
        return {
          ...state,
          changeProgress:true,
          changeComplete:false}
        break;
      case 'CHANGE_COMPLETE':
      const nIndex = state.nextIndex
        return {
          ...state,
          showingIndex:state.nextIndex,
          nextIndex:null,
          changeProgress:false,
          changeComplete:true
        }

        break;

      case 'TOGGLE_INDEX_ACTIVE':
        let indexActive = !state.indexActive
        return {...state, indexActive}
        break;
      case 'TOGGLE_DETAILS_READY':
        let detailsReady = !state.detailsReady;
        return {...state, detailsReady}
        break;


      default:
        return state;
    }
  }
