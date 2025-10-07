import React from 'react'
import Head from './secions/head';
import Secion1 from './secions/secion1';
import Secion2 from './secions/secion2';
import Secion3 from './secions/secion3';
import Secion4 from './secions/secion4';
import Secion5 from './secions/secion5';
import Secion6 from './secions/secion6';
import Secion7 from './secions/secion7';
import Section8 from './secions/secion8';
import Section9 from './secions/secion9';
import Section10 from './secions/secion10';
import Secion11 from './secions/secion11';
import Secion12 from './secions/secion12';
import Secion13 from './secions/secion13';
import Secion14 from './secions/secion14';
import Footer from './secions/footer';
import ExitVideoPopup from './components/bodyComponents/exitIntentPopup';
import Form from './components/bodyComponents/form';

const App = () => {
  return (
    <div className='w-full h-auto '>
      <Head />
      <Secion1 secion1IdToScroll={"secion-scroll-id"}/>
      <Secion2 secion2Scroll={"secion-scroll-id2"}/>
      <Secion4 secion4Scrolid={"secion-scroll-id4"}/>
      <Section9 otziv="sectionId"/>
      <Secion5 videoCours="videoCoursScrioling" />
      <Section8 secion8Title={"secion-scroll-id8"}/>
      <Form/>
      <Footer/>
      <ExitVideoPopup/>

      {/* <Secion13 scrollMassengerId={"secion-scroll-massage"}/> */}
      {/* <Secion3 />
      <Secion6/>
      <Secion7/>
      <Section10/>
      <Secion11/>
      <Secion12/>
      <Secion14/> */}
    </div>
  )
}

export default App
