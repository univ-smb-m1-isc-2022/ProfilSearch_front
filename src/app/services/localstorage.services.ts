import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
  }

  public getItem(key: string): any {
    const value = this.storage.getItem(key);

    if (value) {
      return JSON.parse(value);
    }

    return null;
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
  }
}