import { findTalentByLocation } from './filter';
import data from '../data/example.json';

describe('TalentFilterByLocation', () => {
  it('returns an array containg a match', () => {
    expect(findTalentByLocation(data, 'Philidelphia')).toEqual([{
      "name": "Frank Reynolds",
      "location": "Philidelphia",
      "date_of_birth": "1944-11-17"
    }]);
  });

  it('returns ignores case sensitivity', () => {
    expect(findTalentByLocation(data, 'loS anGeLes')).toEqual([{
      "name": "Diane Nguyen",
      "location": "Los Angeles",
      "date_of_birth": "1980-03-19"
    }]);
  });
    
  it('can return multiple matches', () => {
    expect(findTalentByLocation(data, 'Springfield')).toEqual([{
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
    expect(findTalentByLocation(data, 'New York')).toEqual([])
  });

});
