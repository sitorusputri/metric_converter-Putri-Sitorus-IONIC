import {IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput} 
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const forWaktu: React.FC = () => {
  const [dari, mula] = useState("");
  const [ke, akhir] = useState("");
  const [angka, nomor] = useState(0);
  const [hasil, penyelesaian] = useState(0);

  const nilaiAkhir = () => {
    const metrik = ["s", "m", "h"];
    const kali = [1, 60, 3600];

    const a = metrik.findIndex((i) => i === dari);
    const b = metrik.findIndex((i) => i === ke);

    if (a - b < 0) {
      penyelesaian(angka / kali[Math.abs(a - b)]);
    } else {
      penyelesaian(angka * kali[Math.abs(a - b)]);
    }
  };

  return (
    <>
      <p className="hasil"> Dari :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="for"
            placeholder="Pilih Satuan"
            onIonChange={(e) => mula(e.target.value)}
          >
            <IonSelectOption value="s">sekon</IonSelectOption> <br />
            <IonSelectOption value="m">menit</IonSelectOption> <br />
            <IonSelectOption value="h">jam</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="hasil"> Ke :</p>
      <IonList inset={true}>
        <IonItem>
          <IonSelect
            aria-label="waktu"
            placeholder="Pilih Satuan"
            onIonChange={(e) => akhir(e.target.value)}>
            <IonSelectOption value="s">sekon</IonSelectOption> <br />
            <IonSelectOption value="m">menit</IonSelectOption> <br />
            <IonSelectOption value="h">jam</IonSelectOption> <br />
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

export default forWaktu;
