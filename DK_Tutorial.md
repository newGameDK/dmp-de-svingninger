## Svingningsmåleren! 
Nu skal du bygge en måler til at registrere svingninger! 
* **OBS!** Du skal bruge en @boardname@ i mindst version 2 (V2)

## Ryd skrivebordet :-)
* `||basic.når programmet starter||` 
* `||basic.for altid||`

## Installer datalogger-udvidelsen
Hvis du ikke allerede har dataloggeren:
* Tryk på "Udvidelser +"
* Find "datalogger" og klik på den.

## Knapper
Du skal bruge tre knapper i programmet 
* `||input.når der trykkes på knap A||` (starter målingen)
* `||input:når der trykkes på knap B||` (stopper målingen)
* `||input:når der trykkes på knap A+B||` (sletter målingen) 

## Variabel 
Opret en variabel og kald den `||variables:datalogning||`. Den fortæller programmet, om datalogning er tændt eller slukket

## Knap A: Tænd datalogning 
Sæt værdien af `||variables:datalogning||` sådan her: 
* Træk knappen `||variables:sæt datalogning til||` ind under `||input.når der trykkes på knap A||`
* Sæt værdien af variablen `||variables:datalogning||` til 1

```blocks
input.onButtonPressed(Button.A, function () {
    datalogning = 1
})
```

## Knap A: Skærmbillede
* Træk en `||basic.vis LED'er||` blok ind under `||variables:sæt datalogning til||` 
* Tegn et symbol for at datalogningen er startet 

```blocks
input.onButtonPressed(Button.A, function () {
    datalogning = 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        `)
})
```

## Knap B: Sluk datalogning
* Træk en `||logic:hvis ... så||` ind i blokken `||input.når der trykkes på knap B||`
* Træk `||logic: 0 = 0 ||` ind i blokken `||logic:hvis ... så||` 
* Træk `||variables:datalogning||` ind i `||logic: 0 = 0 ||`
* Sæt værdien i `||logic: datalogning = 0 ||` til 1
* Træk blokken `||variables:sæt datalogning til||` ind i blokken `||logic:hvis ... så||`
* Sæt værdien i `||variables:sæt datalogning til||` til 0


```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningStatus==1) {
        datalogningStatus = 0
    }
})
```

## Knap B: Skærmbillede for sluk datalogning
* Træk en `||basic.vis LED'er||` blok ind under `||variables:sæt datalogning til||` 
* Tegn et symbol for at datalogningen er slukket 
* Træk blokken `||basic.pause||` ind under symbolet du har tegnet
* Træk blokken `||basic.ryd skærmen||` ind under 
* Skærmen viser nu dit symbol for at datalogningen er slukket, pauser og slukker skærmen

```blocks
input.onButtonPressed(Button.B, function () {
    if (datalogningsStatus == 1) {
        datalogningsStatus = 0
    }
    basic.showLeds(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
```
## Knap A+B Slet en måling
Du skal kunne slette målingerne på din @boardname@
* Træk `||datalogger:delete log||` ind i `||input:når der trykkes på knap A+B||` (sletter målingen) 
* Træk en `||basic.vis LED'er||` blok ind under `||datalogger:delete log||` 
* Tegn et symbol for at data er blevet slettet 
* Træk blokken `||basic.pause||` ind under symbolet du har tegnet
* Træk blokken `||basic.ryd skærmen||` ind under `||basic.pause||`
```blocks
input.onButtonPressed(Button.AB, function () {
    datalogger.deleteLog()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    basic.pause(1000)
    basic.clearScreen()
})
```


## Datalogning hver 100 ms
* Træk blokken `||loops:every||` ind
* Sæt `||loops:every||` til 100 ms 
* Træk en `||logic:hvis ... så||` ind i blokken `||loops:every||`
* Træk `||logic: 0 = 0 ||` ind i blokken `||logic:hvis ... så||` 
* Træk derefter variablen `||variables:datalogning||` ind i `||logic: 0 = 0 ||` blokken
* Skift værdien 0 til 1. Nu spørger programmet om `||variables:datalogning||` = 1

```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
    }
})
```


## Hver 100 ms: Start datalogning
Nu til datalogningen, der kører hvis du har trykket på knap A, så variablen `||variables:datalogning||` = 1
* træk `||datalogger:log data||` ind i `||logic:hvis ... så||`
* Udfyld kolonnetitel med navnet "Acceleration" 
* Udfyld "value" med blokken `||input.acceleration (styrke)||`
* Tjek at du under `||input.acceleration||` har valgt "styrke" i stedet for "x" 
 
```blocks
loops.everyInterval(100, function () {
    if (datalogningStatus == 1) {
        datalogger.log(datalogger.createCV("Acceleration", input.acceleration(Dimension.Strength)))
    }
})
```

## Tillykke!
Nu er du færdig med din kode. Du kan nu afprøve om du kan: 
* Let: Se om du kan starte en måling, samle måle-data med din microbit, og stoppe målingen igen
* Let: Se om du kan overføre dataene til computeren
* Let: Se om du efter overførslen kan slette din måling
* Mellem: Undersøg hvad der sker med datasættet hvis du laver flere målinger uden at overføre måle-data til din computer.
* Mellem: Find noget at måle. Hvad kunne du forestille dig? Rystelser i gulvet? Rystelser i en dør? På en cykel?
* Svær: Find et sted hvor du vurderer rystelser kan være et problem. Undersøg det med din måler.
* Svær: Prøv at finde en løsning på problemet, og undersøg med din måler om det hjalp?