import React, { useEffect, useState } from "react";
import Axios from "axios";
import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<string[]>([]);

  const GetAllStock = () => {
    useEffect(() => {
      Axios({
        url: "http://localhost:5000/www/allVehicles",
      })
        .then((answer) => {          
          setVehicles(answer.data.vehicles);
        })
        .catch((error) => {
          console.log(error.response);
        });
    }, [setVehicles]);
  };

  return (
    <React.Fragment>
      {GetAllStock()}
      <IonList>
        {vehicles.map((item: any, index) => (
          <IonItem key={item.id_vehiculo} className="itemSeparation">
            <IonCard className="cardVehicle">
              <IonCardHeader className="centerImg">
                <IonAvatar className="size">
                  <IonImg src={item.img} />
                </IonAvatar>
              </IonCardHeader>
              <IonCardContent>
                <IonList className="spacingInfo">
                  <IonLabel>Placa: {item.placa}</IonLabel>
                  <IonLabel>
                    Cedula proietario: {item.cedula_propietario}
                  </IonLabel>
                  <IonLabel>Modelo: {item.modelo}</IonLabel>
                  <IonLabel>Marca: {item.marca}</IonLabel>
                  <IonLabel>Procedencia: {item.procedencia}</IonLabel>
                  <IonLabel>Valor de compra: {item.valor_compra}</IonLabel>
                  <IonLabel>Valor de venta: {item.valor_venta === null ? 'No aplica' : item.valor_venta}</IonLabel>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonItem>
        ))}
      </IonList>
    </React.Fragment>
  );
};

export default Vehicles;
