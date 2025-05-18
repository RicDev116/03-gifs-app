import { HttpParams, provideHttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';

const apiKey = 'LtqR03My4fnonnlqVEpAIovP3aLEzeFU';
const apiUrl = 'https://api.giphy.com/v1/gifs';

@Injectable({
  providedIn: 'root'
})//servicio disponible a lo largo de toda la aplicacion (provideIn: 'root')
export class GifsService {

  private _tagsHistory: string[] = [];
  public gifsList:Gif[] = [];

  constructor(
    private http: HttpClient
  ) {
    this.loadLocalStorage();
    console.log('GifsService initialized');
  }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(
        (oldTag) => oldTag !== tag
      );
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  public searchTag(tag: string):void {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', apiKey)
      .set('limit', '10')
      .set('q', tag)
    this.http.get<SearchResponse>(
      `${apiUrl}/search`,
      { params }
    ).subscribe(
      (resp => {
        this.gifsList = resp.data;
        console.log({gifs:this.gifsList});
      })
    );
  }

  private saveLocalStorage() {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if (!localStorage.getItem('history')) return;
    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    if (!this._tagsHistory || this._tagsHistory.length === 0) return;
    this.searchTag(this._tagsHistory[0]);
  }

}
