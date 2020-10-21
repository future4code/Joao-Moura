/*
100.000 AC -> Pré-história
4000 AC -> Idade Antiga
476 DC-> Idade Média
1453 DC -> Idade Moderna
1789 DC -> Idade Contemporânea
*/

enum PERIOD {
    AC = "ac",
    DC = "dc"
}

const beforeChrist = (year: number):void => {
    if(year >= 4000){
       console.log(`${year} Pré-história`)
    }else if (year < 4000){
       console.log(`${year} Idade Antiga`)
    }
}

const afterChrist = (year: number):void => {
    if(year > 476 && year < 1453){
        console.log(`${year} Idade Média`)
    }else if (year >= 1453 && year < 1789){
       console.log(`${year} Idade Moderna`)
    }else if (year >= 1789){
      console.log(`${year} Idade Contemporânea`)
    }
}

const checkPeriod = (year: number, sigla?:PERIOD ):void => {
        if(sigla){
            if(sigla == "ac"){
                beforeChrist(year)
            } else if(sigla == "dc"){
                afterChrist(year)
            } else {
                console.log("insira apenas AD ou DC");
            }
        } else {
            afterChrist(year)
        }
}

checkPeriod(4100, PERIOD.AC)
checkPeriod(1000, PERIOD.AC)
checkPeriod(200, PERIOD.DC)
checkPeriod(900, PERIOD.DC)
checkPeriod(1600, PERIOD.DC)
checkPeriod(1900)