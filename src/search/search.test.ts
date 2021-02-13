import { find_talent } from './search'

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

describe('find_talent', () => {

  it('returns an array containg a match', () => {
    expect(find_talent('Philidelphia', example)).toEqual([{
      "name": "Frank Reynolds",
      "location": "Philidelphia",
      "date_of_birth": "1944-11-17"
    }])
    expect(find_talent('Los Angeles', example)).toEqual([{
      "name": "Diane Nguyen",
      "location": "Los Angeles",
      "date_of_birth": "1980-03-19"
    }])
  })
  it('can return multiple matches', () => {
    expect(find_talent('Springfield', example)).toEqual([{
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
    expect(find_talent('New York', example)).toEqual([])
  })
  
})