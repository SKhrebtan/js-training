const atTheOldToad = {
   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
  getPotions() {
  const { potions } = this;
  return potions
    },
    addPotion(potionName) {
    this.potions.push(potionName)
    return this.potions    
  },
    removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
        if (potions[i] === potionName) {
        potions.splice(i, 1)
        return potions
      }
    };
  },
     updatePotionName(oldName, newName) {
       const { potions } = this;
    
    for (const potion of potions) {
           if (potion === oldName) {
        const bookIndex = potions.indexOf(potion)
                potions.splice(bookIndex, 1, newName)
        
        return potions
      }
    }; 
    },
    
  
};