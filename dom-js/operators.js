var age = 18, //stores number
    accompaniedByAdult = true; //stores boolean

    if (age >= 18 && age <21) {
        //if above statement is true
        if (accompaniedByAdult == true) {
            console.log ('Allowed');
        } else {
            console.log('Denied');
        }
    }else{
        //if above statement was false
        console.log('age is not between 18-21');
    }