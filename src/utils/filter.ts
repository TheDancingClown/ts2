type Talent = {
  name:string,
  [location: string]: string,
  date_of_birth: string
};

class TalentFilter {
  searchParameter: string;
  
  constructor(searchParameter = '') {
    this.searchParameter = searchParameter;
  };

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