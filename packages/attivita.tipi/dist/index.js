var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { Model, RecordsPage } from "../../../index.js";
class TipoAttivita extends Model {
  constructor() {
    super(...arguments);
    __publicField(this, "jsonApiType", "attivita/tipi");
  }
  get codice() {
    return this.getAttribute("codice");
  }
  set codice(codice) {
    this.setAttribute("codice", codice);
  }
  get descrizione() {
    return this.getAttribute("descrizione");
  }
  set descrizione(descrizione) {
    this.setAttribute("descrizione", descrizione);
  }
  get addebitoOrario() {
    return this.getAttribute("addebito_orario");
  }
  set addebitoOrario(addebitoOrario) {
    this.setAttribute("addebito_orario", addebitoOrario);
  }
  get addebitoKm() {
    return this.getAttribute("addebito_km");
  }
  set addebitoKm(addebitoKm) {
    this.setAttribute("addebito_km", addebitoKm);
  }
  get addebitoDirittoChiamata() {
    return this.getAttribute("addebito_diritto_chiamata");
  }
  set addebitoDirittoChiamata(addebitoDirittoChiamata) {
    this.setAttribute("addebito_diritto_chiamata", addebitoDirittoChiamata);
  }
  get costoOrarioTecnico() {
    return this.getAttribute("costo_orario_tecnico");
  }
  set costoOrarioTecnico(costoOrarioTecnico) {
    this.setAttribute("costo_orario_tecnico", costoOrarioTecnico);
  }
  get costoKmTecnico() {
    return this.getAttribute("costo_km_tecnico");
  }
  set costoKmTecnico(costoKmTecnico) {
    this.setAttribute("costo_km_tecnico", costoKmTecnico);
  }
  get costoDirittoChiamataTecnico() {
    return this.getAttribute("costo_diritto_chiamata_tecnico");
  }
  set costoDirittoChiamataTecnico(costoDirittoChiamataTecnico) {
    this.setAttribute("costo_diritto_chiamata_tecnico", costoDirittoChiamataTecnico);
  }
  get tempoStandard() {
    return this.getAttribute("tempo_standard");
  }
  set tempoStandard(tempoStandard) {
    this.setAttribute("tempo_standard", tempoStandard);
  }
}
var __defProp2 = Object.defineProperty;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField2 = (obj, key, value) => {
  __defNormalProp2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class Records extends RecordsPage {
  constructor() {
    super(...arguments);
    __publicField2(this, "columns", {
      codice: this.__("Codice"),
      descrizione: this.__("Descrizione"),
      addebitoOrario: {
        title: this.__("Addebito orario"),
        type: "numeric"
      },
      addebitoKm: {
        title: this.__("Addebito km"),
        type: "numeric"
      },
      addebitoDirittoChiamata: {
        title: this.__("Addebito diritto di chiamata"),
        type: "numeric"
      },
      costoOrarioTecnico: {
        title: this.__("Costo orario tecnico"),
        type: "numeric"
      },
      costoKmTecnico: {
        title: this.__("Costo km tecnico"),
        type: "numeric"
      },
      costoDirittoChiamataTecnico: {
        title: this.__("Costo diritto di chiamata tecnico"),
        type: "numeric"
      }
    });
    __publicField2(this, "sections", [
      {
        fields: {
          codice: {
            label: this.__("Codice"),
            maxLength: 10,
            required: true
          },
          descrizione: {
            label: this.__("Descrizione"),
            required: true
          },
          tempoStandard: {
            label: this.__("Tempo standard"),
            helper: this.__("Valore compreso tra 0,25 - 24 ore. Esempi: 60 minuti = 1 ora; 30 minuti = 0,5 ore; 15 minuti = 0,25 ore"),
            min: 0,
            max: 24,
            required: true,
            step: 0.01,
            suffix: "ore",
            type: "number",
            value: 0
          }
        }
      },
      {
        heading: this.__("Addebiti unari al cliente"),
        fields: {
          addebitoOrario: {
            label: this.__("Addebito orario"),
            required: true,
            suffix: "\u20AC",
            step: 0.01,
            type: "number",
            value: "0"
          },
          addebitoKm: {
            label: this.__("Addebito km"),
            required: true,
            suffix: "\u20AC",
            step: 0.01,
            type: "number",
            value: 0
          },
          addebitoDirittoChiamata: {
            label: this.__("Addebito diritto di chiamata"),
            required: true,
            suffix: "\u20AC",
            step: 0.01,
            type: "number",
            value: 0
          }
        }
      },
      {
        heading: this.__("Costi unari del tecnico"),
        fields: {
          costoOrarioTecnico: {
            label: this.__("Costo orario"),
            required: true,
            suffix: "\u20AC",
            step: 0.01,
            type: "number",
            value: 0
          },
          costoKmTecnico: {
            label: this.__("Costo km"),
            required: true,
            suffix: "\u20AC",
            step: 0.01,
            type: "number",
            value: 0
          },
          costoDirittoChiamataTecnico: {
            label: this.__("Costo diritto chiamata"),
            required: true,
            suffix: "\u20AC",
            step: 0.01,
            type: "number",
            value: 0
          }
        }
      }
    ]);
    __publicField2(this, "model", TipoAttivita);
  }
}
export { Records, TipoAttivita };
