import { TalentFilterByLocation } from './filter'

const example = [
  {
    "name": "Homer Simpson",
    "location": "Springfield",
    "date_of_birth": "1956-05-12"
  },
  {
    "name": "Frank Reynolds",
    "location": "Philidelphia",
    "date_of_birth": "1944-11-17"
  },
  {
    "name": "Diane Nguyen",
    "location": "Los Angeles",
    "date_of_birth": "1980-03-19"
  },
  {
    "name": "Krusty the Clown",
    "location": "SpringField",
		"date_of_birth": "1957-10-29"
  }
]

describe('find_talent_by_location', () => {
  const filter = new TalentFilterByLocation()
  it('returns an array containg a match', () => {
    expect(filter.find_talent(example, 'Philidelphia')).toEqual([{
      "name": "Frank Reynolds",
      "location": "Philidelphia",
      "date_of_birth": "1944-11-17"
    }])
    expect(filter.find_talent(example, 'Los Angeles')).toEqual([{
      "name": "Diane Nguyen",
      "location": "Los Angeles",
      "date_of_birth": "1980-03-19"
    }])
  })
  it('can return multiple matches', () => {
    expect(filter.find_talent(example, 'Springfield')).toEqual([{
      "name": "Homer Simpson",
      "location": "Springfield",
      "date_of_birth": "1956-05-12"
    },{
      "name": "Krusty the Clown",
      "location": "SpringField",
      "date_of_birth": "1957-10-29"
    }])
  })
  it('returns an empty array if no match', () => {
    expect(filter.find_talent(example, 'New York')).toEqual([])
  })
  
})
