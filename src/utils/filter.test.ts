import { TalentFilterByLocation } from './filter';
import data from '../data/example.json';

describe('TalentFilterByLocation', () => {
  const filter = new TalentFilterByLocation()
  it('returns an array containg a match', () => {
    expect(filter.find_talent(data, 'Philidelphia')).toEqual([{
      "name": "Frank Reynolds",
      "location": "Philidelphia",
      "date_of_birth": "1944-11-17"
    }]);
    expect(filter.find_talent(data, 'Los Angeles')).toEqual([{
      "name": "Diane Nguyen",
      "location": "Los Angeles",
      "date_of_birth": "1980-03-19"
    }]);
  });
  it('can return multiple matches', () => {
    expect(filter.find_talent(data, 'Springfield')).toEqual([{
      "name": "Homer Simpson",
      "location": "Springfield",
      "date_of_birth": "1956-05-12"
    },{
      "name": "Krusty the Clown",
      "location": "SpringField",
      "date_of_birth": "1957-10-29"
    }]);
  });
  it('returns an empty array if no match', () => {
    expect(filter.find_talent(data, 'New York')).toEqual([])
  });
});
