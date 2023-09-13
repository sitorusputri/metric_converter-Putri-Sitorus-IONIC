import {IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput} 
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const forMassa: React.FC = () => {
  const [dari, mula] = useState("");
  const [ke, akhir] = useState("");
  const [angka, nomor] = useState(0);
  const [hasil, penyelesaian] = useState(0);

  const nilaiAkhir = () => {
    const metrik = ["mg", "cg", "dg", "g", "dag", "hg", "kg"];
    const kali = [1, 10, 100, 1000, 10000, 100000, 1000000];

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
            aria-label="massa"
            placeholder="Pilih Satuan"
            onIonChange={(e) => mula(e.target.value)}
          >
            <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
            <IonSelectOption value="cg">centigram</IonSelectOption> <br />
            <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
            <IonSelectOption value="g">gram</IonSelectOption> <br />
            <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
            <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
            <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="hasil"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="massa"
            placeholder="Pilih Satuan"
            onIonChange={(e) => akhir(e.target.value)}
          >
            <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
            <IonSelectOption value="cg">centigram</IonSelectOption> <br />
            <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
            <IonSelectOption value="g">gram</IonSelectOption> <br />
            <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
            <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
            <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
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

export default forMassa;
