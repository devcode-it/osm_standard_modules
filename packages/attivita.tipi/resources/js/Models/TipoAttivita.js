import {Model} from 'openstamanager';

// noinspection JSUnusedGlobalSymbols
export default class TipoAttivita extends Model {
  jsonApiType = 'attivita/tipi'

  get codice(): string {
    return this.getAttribute('codice');
  }

  set codice(codice: string): void {
    this.setAttribute('codice', codice);
  }

  get descrizione(): string {
    return this.getAttribute('descrizione');
  }

  set descrizione(descrizione: string): void {
    this.setAttribute('descrizione', descrizione);
  }

  get addebitoOrario(): number {
    return this.getAttribute('addebito_orario');
  }

  set addebitoOrario(addebitoOrario: number): void {
    this.setAttribute('addebito_orario', addebitoOrario);
  }

  get addebitoKm(): number {
    return this.getAttribute('addebito_km');
  }

  set addebitoKm(addebitoKm: number): void {
    this.setAttribute('addebito_km', addebitoKm);
  }

  get addebitoDirittoChiamata(): number {
    return this.getAttribute('addebito_diritto_chiamata');
  }

  set addebitoDirittoChiamata(addebitoDirittoChiamata: number): void {
    this.setAttribute('addebito_diritto_chiamata', addebitoDirittoChiamata);
  }

  get costoOrarioTecnico(): number {
    return this.getAttribute('costo_orario_tecnico');
  }

  set costoOrarioTecnico(costoOrarioTecnico: number): void {
    this.setAttribute('costo_orario_tecnico', costoOrarioTecnico);
  }

  get costoKmTecnico(): number {
    return this.getAttribute('costo_km_tecnico');
  }

  set costoKmTecnico(costoKmTecnico: number): void {
    this.setAttribute('costo_km_tecnico', costoKmTecnico);
  }

  get costoDirittoChiamataTecnico(): number {
    return this.getAttribute('costo_diritto_chiamata_tecnico');
  }

  set costoDirittoChiamataTecnico(costoDirittoChiamataTecnico: number): void {
    this.setAttribute('costo_diritto_chiamata_tecnico', costoDirittoChiamataTecnico);
  }

  get tempoStandard(): number {
    return this.getAttribute('tempo_standard');
  }

  set tempoStandard(tempoStandard: number): void {
    this.setAttribute('tempo_standard', tempoStandard);
  }
}
