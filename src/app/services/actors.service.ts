import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(public db: AngularFirestore) {
  }

  public get() {
    return this.db.collection('actors').valueChanges();
  }

  public save(actor: any) {
    return this.db.collection('actors').add(actor);
  }
}
