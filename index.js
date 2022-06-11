const superbowlWin = (collection) => {
    let theResult = collection.find((item)=> item.result === 'W');
   if (theResult) {
       return theResult.year;       
   } else {
       return undefined;
   }
}
 

