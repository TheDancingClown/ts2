type Talent = {
  [name:string]:string,
  location: string,
  date_of_birth: string
};

class TalentFilter {
  searchParameter: string;
  
  constructor(searchParameter = '') {
    this.searchParameter = searchParameter;
  };
/**
 * Returns an array of talent objects using a searchParameter attribute key as specified in the constructor
 * 
 * @param data - an array of all talent objects
 * @param searchQuery - a string to filter against the attribute value
 * @returns Returns an array of matching Talent objects
 * 
 */
  find_talent = (data: Talent[], searchQuery: string):Talent[] => {
    return data.filter(talent => talent[this.searchParameter].toLowerCase() === searchQuery.toLowerCase());
  };
};

class TalentFilterByLocation extends TalentFilter {
  
  constructor(searchParameter = 'location') {
    super(searchParameter);
  };
};

export { TalentFilter, TalentFilterByLocation };
export type { Talent };