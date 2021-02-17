type Talent = {
  [name:string]:string,
  location: string,
  date_of_birth: string
};

const findTalentByLocation = (data: Talent[], searchValue: string):Talent[] => {
  const searchKey = 'location'
  return findMatchingData(data, searchValue, searchKey)
};

const findMatchingData = (data: Talent[], searchValue: string, searchKey: string) => {
  return data.filter(talent => talent[searchKey].toLowerCase() === searchValue.toLowerCase());
}

export { findTalentByLocation };
export type { Talent };