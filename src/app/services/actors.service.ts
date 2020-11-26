import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {Actor} from '../intrefaces/actor';
import {combineLatest, forkJoin, from, merge, Observable} from 'rxjs';
import {map, take, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  constructor(public db: AngularFirestore) {
  }

  public getAll(): Observable<Actor[]> {
    return this.db.collection<Actor>('actors').snapshotChanges().pipe(
      map(dataArray => dataArray.map(each => {
        const data = each.payload.doc.data() as Actor;
        data.id = each.payload.doc.id;
        return data;
      }))
    );
  }

  public save(actor: Actor): Promise<DocumentReference> {
    return this.db.collection<Actor>('actors').add(actor);
  }

  delete(actor: Actor): Promise<void> {
    return this.db.collection<Actor>('actors').doc(actor.id).delete();
  }

  update(actor: Actor): Promise<void> {
    return this.db.collection<Actor>('actors').doc(actor.id).set(actor);
  }

  getByIds(actors: string[]): Observable<Actor[]> {
    const observables = [];
    actors?.forEach(id => {
      observables.push(this.getByWholePath(id));
    });
    return forkJoin<Actor>(observables);
  }

  getByWholePath(id: string): Observable<Actor> {
    return this.db.doc<Actor>(id).snapshotChanges()
      .pipe(
        map(dataArray => {
          const data = dataArray.payload.data() as Actor;
          data.id = dataArray.payload.id;
          return data;
        }))
      .pipe(take(1));
  }

  getActorsByCountry(country: string): Observable<Actor[]> {
    return this.db.collection<Actor>('actors', ref => ref
      .where('country', '==', country)
    )
      .snapshotChanges()
      .pipe(
        map(dataArray => dataArray.map(each => {
          const data = each.payload.doc.data() as Actor;
          data.id = each.payload.doc.id;
          return data;
        }))
      );

  }
}
