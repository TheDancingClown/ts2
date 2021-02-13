type Talent = {
  name: string
  location: string
  date_of_birth: string
}

const find_talent = (location:string, data:Talent[]):Talent[] => {
  return data.filter(talent => talent.location.toLowerCase() === location.toLowerCase())
}

export { find_talent }