import {IonList, IonItem, IonSelect, IonSelectOption, IonInput, IonButton} 
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const forPanjang: React.FC = () => {
  const [dari, mula] = useState("");
  const [ke, akhir] = useState("");
  const [angka, nomor] = useState(0);
  const [hasil, penyelesaian] = useState(0);

  const nilaiAkhir = () => {
    const metrik = ["mm", "cm", "dm", "m", "dam", "hm", "km"];
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
            aria-label="panjang"
            placeholder="Pilih satuan"
            onIonChange={(e) => mula(e.detail.value)}
          >
            <IonSelectOption value="mm">mililimeter</IonSelectOption> <br />
            <IonSelectOption value="cm">centimeter</IonSelectOption> <br />
            <IonSelectOption value="dm">desimeter</IonSelectOption> <br />
            <IonSelectOption value="m">meter</IonSelectOption> <br />
            <IonSelectOption value="dam">dekameter</IonSelectOption> <br />
            <IonSelectOption value="hm">hektameter</IonSelectOption> <br />
            <IonSelectOption value="km">kilometer</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="hasil"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="panjang"
            placeholder="Pilih satuan"
            onIonChange={(e) => akhir(e.detail.value)}
          >
            <IonSelectOption value="mm">mililimeter</IonSelectOption> <br />
            <IonSelectOption value="cm">centimeter</IonSelectOption> <br />
            <IonSelectOption value="dm">desimeter</IonSelectOption> <br />
            <IonSelectOption value="m">meter</IonSelectOption> <br />
            <IonSelectOption value="dam">dekameter</IonSelectOption> <br />
            <IonSelectOption value="hm">hektameter</IonSelectOption> <br />
            <IonSelectOption value="km">kilometer</IonSelectOption> <br />
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

export default forPanjang;
