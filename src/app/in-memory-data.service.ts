import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        return { heroes: [
            new Hero(11, 'Mr. Nice'),
            new Hero(12, 'Narco'),
            new Hero(13, 'Bombasto'),
            new Hero(14, 'Celeritas'),
            new Hero(15, 'Magneta'),
            new Hero(16, 'Rubberman'),
            new Hero(17, 'Dynama'),
            new Hero(18, 'Dr IQ'),
            new Hero(19, 'Magma'),
            new Hero(20, 'Tornado')
        ]};
    }
}