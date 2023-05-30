const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
 
  getPotions() {
    const { potions } = this;
    return potions;
  },
  addPotion(newPotion) {
    const { potions } = this;
    for (const potion of potions) {
      if (potion.name === newPotion.name) {
      console.log(potion.name)
      return `Error! Potion ${potion.name} is already in your inventory!`;
      }
     
    }
     potions.push(newPotion);
    return potions
        
  },
  removePotion(potionName) {
     const { potions } = this;
    
    for (const potion of potions) {
      if (potion.name === potionName) {
        const potionIndex = potions.indexOf(potion);
        console.log(potionIndex)
        potions.splice(potionIndex, 1)
             }
    }
    return potions
  },
  updatePotionName(oldName, newName) {
    const { potions } = this;
        for (const potion of potions) {
      const potionIndex = potions.indexOf(potion);
          if (potion.name === oldName) {
                    potion.name = newName
      }
    }
    return potions;
  },
}
// console.log(atTheOldToad.getPotions())
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));

// console.log(atTheOldToad.removePotion('Speed potion'));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))