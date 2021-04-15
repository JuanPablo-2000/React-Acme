import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonChip,
  IonIcon,
  IonImg,
  IonLabel,
  IonList,
  IonSearchbar,
} from "@ionic/react";
import Axios from "axios";
import React, { useState } from "react";
import { alertCircleSharp } from "ionicons/icons";
import $ from "jquery";

const Search: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [placa, setPlaca] = useState<string>("");
  const [cedula, setCedula] = useState<string>("");
  const [marca, setMarca] = useState<string>("");
  const [modelo, setModelo] = useState<string>("");
  const [procedencia, setProcedencia] = useState<string>("");
  const [compra, setCompra] = useState<string>("");
  const [venta, setVenta] = useState<string>("");
  const [img, setImg] = useState<string>("");

  const changeValue = (event: CustomEvent) => {
    console.log(event.detail.value);
    if (event.detail.value !== "") {
      GetVehicle(event.detail.value);
    }
  };

  const GetVehicle = (placa: string) => {
    Axios({
      url: "http://localhost:5000/www/allVehicles/" + placa,
    })
      .then((answer) => {
        console.log(answer.data.vehicles);
        setPlaca(answer.data.vehicles.placa);
        setCedula(answer.data.vehicles.cedula_propietario);
        setMarca(answer.data.vehicles.marca);
        setModelo(answer.data.vehicles.modelo);
        setProcedencia(answer.data.vehicles.procedencia);
        setCompra(answer.data.vehicles.valor_compra);
        setVenta(answer.data.vehicles.valor_venta);
        setImg(answer.data.vehicles.img);
        $(".margin_chip").hide("fast");
        $(".content_search").show("slow");
        setValue('');
      })
      .catch((error) => {
        //console.log(error.response);
        $(".margin_chip").show("slow");
        $(".content_search").hide("fast");
      });
  };

  const contentVehicle = () => {
    return (
      <React.Fragment>
        <IonCard className="content_search">
          <IonCardHeader className="centerImg">
            <IonAvatar className="size">
              <IonImg src={img} />
            </IonAvatar>
          </IonCardHeader>
          <IonCardContent>
            <IonList className="spacingInfo">
              <IonLabel>Placa: {placa}</IonLabel>
              <IonLabel>Cedula propietario: {cedula}</IonLabel>
              <IonLabel>Marca: {marca}</IonLabel>
              <IonLabel>Modelo: {modelo}</IonLabel>
              <IonLabel>Procedencia: {procedencia}</IonLabel>
              <IonLabel>Valor de compra: {compra}</IonLabel>
              <IonLabel>
                Valor de venta: {venta !== null ? venta : "No aplica"}
              </IonLabel>
            </IonList>
          </IonCardContent>
        </IonCard>
      </React.Fragment>
    );
  };

  const ResultSearch = () => {
    return (
      <React.Fragment>
        <IonChip className="margin_chip">
          <IonIcon icon={alertCircleSharp} />
          <IonLabel className="title_search">
            No hay datos para visualizar
          </IonLabel>
        </IonChip>
      </React.Fragment>
    );
  };

  return (
    <React.Fragment>
      <IonSearchbar
        value={""}
        color="warning"
        animated
        placeholder="Placa del vehiculo"
        className="search"
        type="number"
        onIonChange={changeValue}
        inputMode="search"
        debounce={0}
      ></IonSearchbar>
      {ResultSearch()}
      {contentVehicle()}
    </React.Fragment>
  );
};

export default Search;
