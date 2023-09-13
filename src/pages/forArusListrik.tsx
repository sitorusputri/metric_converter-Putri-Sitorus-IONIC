import {IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput} 
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const forArusListrik: React.FC = () => {
  const [dari, mula] = useState("");
  const [ke, akhir] = useState("");
  const [angka, nomor] = useState(0);
  const [hasil, penyelesaian] = useState(0);

  const nilaiAkhir = () => {
    const satuan = ["A", "mA", "μA", "nA"];
    const kali = [1, 1000, 1000000, 1000000000];

    const a = satuan.findIndex((i) => i === dari);
    const b = satuan.findIndex((i) => i === ke);

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
            aria-label="arus listrik"
            placeholder="Pilih Satuan"
            onIonChange={(e) => mula(e.target.value)}
          >
            <IonSelectOption value="A">Ampere</IonSelectOption> <br />
            <IonSelectOption value="mA">miliampere</IonSelectOption> <br />
            <IonSelectOption value="μA">mikroampere</IonSelectOption> <br />
            <IonSelectOption value="nA">nanoampere</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="hasil"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="arus listrik"
            placeholder="Pilih Satuan"
            onIonChange={(e) => akhir(e.target.value)}
          >
            <IonSelectOption value="A">Ampere</IonSelectOption> <br />
            <IonSelectOption value="mA">miliampere</IonSelectOption> <br />
            <IonSelectOption value="μA">mikroampere</IonSelectOption> <br />
            <IonSelectOption value="nA">nanoampere</IonSelectOption> <br />
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

export default forArusListrik;
