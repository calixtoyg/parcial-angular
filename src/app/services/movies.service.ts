import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {Movie} from '../intrefaces/movie';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public db: AngularFirestore) { }

  getAll(): Observable<Movie[]> {
    return this.db.collection<Movie>('movies').snapshotChanges().pipe(
      map(dataArray => dataArray.map(each => {
        const data = each.payload.doc.data() as Movie;
        data.id = each.payload.doc.id;
        return data;
      }))
    );
  }

  public save(movie: Movie): Promise<DocumentReference> {
    return this.db.collection<Movie>('movies').add(movie);
  }

  delete(movie: Movie): Promise<void> {
    return this.db.collection<Movie>('movies').doc(movie.id).delete();
  }

  update(movie: Movie): Promise<void> {
    return this.db.collection<Movie>('movies').doc(movie.id).set(movie);
  }
}
