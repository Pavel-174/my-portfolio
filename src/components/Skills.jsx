import React from "react";
import AliceCarousel from 'react-alice-carousel';

function Skills({skills, skills_eng, selectedLanguage}) {

    return (
      <div className='skills'>
        <div className="skills__headers">
          <h2 className="skills__header_2">{!selectedLanguage ? ("Мои навыки") : ("Skills")}</h2>
          <h3 className="skills__header_3">{!selectedLanguage ? ("Что я использую в работе") : ("Working tools")}</h3>
        </div>
        <div className="skills__box">
          <AliceCarousel  
            mouseTracking 
            items={!selectedLanguage ? (skills) : (skills_eng)} 
            autoWidth={true} 
            animationType='fadeout' 
            animationDuration='500' 
            infinite={true} 
            keyboardNavigation={true} 
            itemsFit="contain"
          />
        </div>
      </div>   
    );
  }
  
  export default Skills;