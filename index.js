var car = new Vehicle ('Mers', 4)

var cat = new Track ('Cat', 2, 1000)

cat.getInfo()
car.getInfo()


const bracketsCheck = (str) => {
    bracketsTypes = [
        ['(',')', 0],
        ['{','}', 0],
        ['[',']', 0]
    ];
    for (j = 0; j < bracketsTypes.length; j++){
        for (i = 0; i < str.length; i++){
            if (str[i] == bracketsTypes[j][0]){
                bracketsTypes[j][2]++;
            } else if (str[i] == bracketsTypes[j][1] && bracketsTypes[j][2] > 0){
                bracketsTypes[j][2]--;
            } else if (str[i] == bracketsTypes[j][1] && bracketsTypes[j][2] === 0){
                return false;
            }
        }
        if (bracketsTypes[j][2] != 0){
            return false;
        }
    }
    return true
}

const string = '{(()((((())))))[]}}';
console.log(bracketsCheck(string));