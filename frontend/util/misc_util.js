export const shuffle = (array) => {

    for (let i = 0; i < array.length; i++) {
            let j = Math.floor(Math.random() * (i + 1));
            let holder = array[i];
            array[i] = array[j];
            array[j] = holder;
        }
        
    return array;
}