const find_talent = (location:string, data:{location:string}[]):{}[] => {
  let matches = data.filter(talent => talent.location.toLowerCase() === location.toLowerCase())
  console.log(matches)
  return matches
}

export { find_talent }