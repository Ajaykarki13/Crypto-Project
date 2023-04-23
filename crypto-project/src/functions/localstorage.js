
let coinarray = []
export const handleArray = (id) =>
{
   
    if (!coinarray.includes(id)) {
      coinarray.push(id);
    }
    return coinarray;
  }
