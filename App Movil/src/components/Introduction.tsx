import { IonContent, IonLabel } from "@ionic/react";
import React from "react";

const Introduction: React.FC = () => {
  return (
    <React.Fragment>
      <IonContent className="slideStart">
        <div className="layer">
            <IonLabel className="welcome_title">
                Acme Corporation
            </IonLabel>
            <IonLabel className="welcome welcome_user">
                Bienvenido
            </IonLabel>
            <IonLabel className="welcome">
                Juan Pablo Millan Holguin
            </IonLabel>
        </div>
      </IonContent>
    </React.Fragment>
  );
};

export default Introduction;
