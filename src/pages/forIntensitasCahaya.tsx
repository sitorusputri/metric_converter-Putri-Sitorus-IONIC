import {IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput}
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const forIntensitasCahaya: React.FC = () => {
  const [dari, mula] = useState("");
  const [ke, akhir] = useState("");
  const [angka, nomor] = useState(0);
  const [hasil, penyelesaian] = useState(0);

  const nilaiAkhir = () => {
    const satuan = ["cd", "lm/m²", "lux", "foot-candle"];
    const kali = [1, 1 / (683 * Math.PI), 1 / (100 * Math.PI), 1 / 0.0929];
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
            aria-label="intensitas cahaya"
            placeholder="Pilih Satuan"
            onIonChange={(e) => mula(e.target.value)}
          >
            <IonSelectOption value="cd">Candela</IonSelectOption> <br />
            <IonSelectOption value="lm/m²">
              Lumens per square meter
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="lux">Lux</IonSelectOption> <br />
            <IonSelectOption value="foot-candle">
              Foot-candle
            </IonSelectOption>{" "}
            <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="hasil">Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="intensitas cahaya"
            placeholder="Pilih Satuan"
            onIonChange={(e) => akhir(e.target.value)}
          >
            <IonSelectOption value="cd">Candela</IonSelectOption> <br />
            <IonSelectOption value="lm/m²">
              Lumens per square meter
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="lux">Lux</IonSelectOption> <br />
            <IonSelectOption value="foot-candle">
              Foot-candle
            </IonSelectOption>{" "}
            <br />
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

export default forIntensitasCahaya;
