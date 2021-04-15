import {
  IonContent,
  IonSlides,
  IonSlide,
  IonApp,
  IonLabel,
  IonAvatar,
} from "@ionic/react";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import '../theme/variables.css';

import "./Home.css";
import React, { useState } from "react";
import Introduction from "../components/Introduction";
import Options from "../components/Options";
import Vehicles from "../components/All";
import Search from "../components/Search";
import logo from "../img/logo.jpg";


const slideoptions = {
  initialSlide: 0,
  speed: 300,
};

const Home: React.FC = () => {
  /*-------------------------------------------- ESTADOS ----------------------------------- */
  const [options, setOptions] = useState<"all" | "one">("all");


  const changeOption = (seleted: "all" | "one") => {
    setOptions(seleted);
  };

  const changeView = () => {
    if (options === "all") {
      return <Vehicles />
    } else {
      return <Search />
    }
  };

  return (
    <React.Fragment>       
      <IonApp>
        <IonContent className="ion-no-border">
          <IonSlides pager={true} options={slideoptions}>
            <IonSlide>
              <Introduction />
            </IonSlide>
            <IonSlide>
              <div className="content_body">
                <div className="title_main">
                  <IonLabel className="title_vehicle">
                    Mi Concesionario
                  </IonLabel>
                  <IonAvatar className="icon_user">
                    <img src={logo} alt="" />
                  </IonAvatar>
                </div>
                <Options seletedDefault={options} onChange={changeOption} view={changeView()}/>                
              </div>
            </IonSlide>
          </IonSlides>
        </IonContent>
      </IonApp>
    </React.Fragment>
  );
};

export default Home;
