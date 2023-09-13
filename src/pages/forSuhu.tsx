import {IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput} 
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const forSuhu: React.FC = () => {
  const [dari, mula] = useState("");
  const [ke, akhir] = useState("");
  const [angka, nomor] = useState(0);
  const [hasil, penyelesaian] = useState(0);

  const nilaiAkhir = () => {
    if (dari === "c" && ke === "f") {
      penyelesaian((9 / 5) * angka + 32);
    } else if (dari === "c" && ke === "k") {
      penyelesaian(angka + 273);
    } else if (dari === "c" && ke === "r") {
      penyelesaian((4 / 5) * angka);
    } else if (dari === "f" && ke === "c") {
      penyelesaian((5 / 9) * (angka - 32));
    } else if (dari === "f" && ke === "k") {
      penyelesaian((5 / 9) * (angka - 32) + 273);
    } else if (dari === "f" && ke === "r") {
      penyelesaian((4 / 9) * (angka - 32));
    } else if (dari === "k" && ke === "c") {
      penyelesaian(angka - 273);
    } else if (dari === "k" && ke === "f") {
      penyelesaian((9 / 5) * (angka - 273) + 32);
    } else if (dari === "k" && ke === "r") {
      penyelesaian((4 / 5) * (angka - 273));
    } else if (dari === "r" && ke === "c") {
      penyelesaian((5 / 4) * angka);
    } else if (dari === "r" && ke === "f") {
      penyelesaian((9 / 4) * angka + 32);
    } else if (dari === "r" && ke === "k") {
      penyelesaian((5 / 4) * angka + 273);
    } else {
      penyelesaian(angka);
    }
  };

  return (
    <>
      <p className="hasil"> Dari :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="suhu"
            placeholder="Pilih satuan"
            onIonChange={(e) => mula(e.target.value)}
          >
            <IonSelectOption value="c">Celcius</IonSelectOption> <br />
            <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
            <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
            <IonSelectOption value="r">Reamur</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="hasil"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="suhu"
            placeholder="Pilih satuan"
            onIonChange={(e) => akhir(e.target.value)}
          >
            <IonSelectOption value="c">Celcius</IonSelectOption> <br />
            <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
            <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
            <IonSelectOption value="r">Reamur</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <IonInput
        label="Masukan angka"
        labelPlacement="floating"
        fill="outline"
        type="number"
        placeholder="Masukan angka"
        onIonInput={(e: any) => nomor(parseInt(e.target.value))}
      ></IonInput>
      <IonButton expand="block" color="primary" onClick={() => nilaiAkhir()}>
        Convert
      </IonButton>
      <p className="hasil">
        Hasil : {hasil} {ke}
      </p>
    </>
  );
};

export default forSuhu;
