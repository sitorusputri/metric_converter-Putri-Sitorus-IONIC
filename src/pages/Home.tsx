import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonSelect, IonSelectOption} 
from "@ionic/react";
import "./Home.css";
import Panjang from "./forPanjang";
import MenuSuhu from "./forSuhu";
import Massa from "./forMassa";
import Waktu from "./forWaktu";
import ArusListrik from "./forArusListrik";
import IntensitasCahaya from "./forIntensitasCahaya";
import JumlahZat from "./forJumlahZat";
import { useState } from "react";

const Home: React.FC = () => {
  const [metric, setMetric] = useState("");

  return (
    <IonPage>
      <IonHeader className="test">
        <IonToolbar>
          <IonTitle class="ion-text-center">Metric Converter</IonTitle>
          <p className="ion-text-center ion-no-margin">By : Putri Naftalie Sitorus</p>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <p className="container ion-text-center ion-no-margin">
          Pilih Satuan Metric :
        </p>
        <IonList>
          <IonItem>
            <IonSelect
              placeholder="Pilih satuan"
              onIonChange={(e) => setMetric(e.detail.value)}
            >
              <IonSelectOption value="panjang">Panjang</IonSelectOption>
              <IonSelectOption value="massa">Massa</IonSelectOption>
              <IonSelectOption value="suhu">Suhu</IonSelectOption>
              <IonSelectOption value="zat">Jumlah Zat</IonSelectOption>
              <IonSelectOption value="waktu">Waktu</IonSelectOption>
              <IonSelectOption value="arus">Arus Listrik</IonSelectOption>
              <IonSelectOption value="cahaya">
                {" "}
                Intensitas Cahaya
              </IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonList>

        {metric === "panjang" ? <Panjang /> : null}
        {metric === "zat" ? <JumlahZat /> : null}
        {metric === "massa" ? <Massa /> : null}
        {metric === "suhu" ? <MenuSuhu /> : null}
        {metric === "waktu" ? <Waktu /> : null}
        {metric === "arus" ? <ArusListrik /> : null}
        {metric === "cahaya" ? <IntensitasCahaya /> : null}
      </IonContent>
    </IonPage>
  );
};

export default Home;
