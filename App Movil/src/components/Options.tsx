import {
  IonContent,
  IonIcon,
  IonLabel,
  IonSegment,
  IonSegmentButton,
} from "@ionic/react";
import React from "react";
import { carSportOutline, searchSharp } from "ionicons/icons";

const Vehicles: React.FC<{
  seletedDefault: "all" | "one";
  onChange: (value: "all" | "one") => void;
  view: any;
}> = (props) => {
  const changeOption = (seleted: CustomEvent) => {
    props.onChange(seleted.detail.value);
  };

  /*-------------------------------------------- COMPONENTE ----------------------------------- */
  return (
    <React.Fragment>
      <IonContent className="main">
        <IonSegment
          onIonChange={changeOption}
          color="dark"
          scrollable
          value={props.seletedDefault}
        >
          <IonSegmentButton value="all">
            <IonLabel>Mostrar todos</IonLabel>
            <IonIcon icon={carSportOutline} />
          </IonSegmentButton>
          <IonSegmentButton value="one">
            <IonLabel>Buscar</IonLabel>
            <IonIcon icon={searchSharp} />
          </IonSegmentButton>
        </IonSegment>
        {props.view}
      </IonContent>
    </React.Fragment>
  );
};

export default Vehicles;
