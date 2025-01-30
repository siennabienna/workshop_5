# workshop_5

https://siennabienna.github.io/workshop_5/

```js
let table;

function setup() {
  createCanvas(400, 400);
}

function preload(){
  table = loadTable ('Daily Steps January.csv', 'csv', 'header');
}

function draw() {
  background(220);
}

function weekLabels(){ 
  for (x = 0; x < table.getRowCount(); x++){ 
  let row= table.getRow(x); 
  let week = row.get("Week"); 
  fill(0); 
  text (week, 30 + x * 100, 340); 
   } 
  } 
  function showMondays(){ 
  for (x = 0; x < table.getRowCount(); x++){ 
  let row = table.getRow(x); 
  let countMondays = row.get("Monday"); 
  fill(255, 110, 180); 
  rect (30 + x * 100, 320, 30, -countMondays * 0.02); 
    } 
  } 

  function draw() { 
  background (220); 
  weekLabels(); 
  showMondays();
 textAlign(CENTER);
  text('Steps over the Last 4 Mondays',width/2, 370);
  }
```

![image](https://github.com/user-attachments/assets/01ca3332-5702-4b44-8a3f-5a4a5aee60c6)


```js

Week,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
1,6689,3601,1688,844,5231,804,8513
2,283,546,124,1492,313,264,5547
3,10708,321,262,1195,10922,8278,4550
4,5414,2486,2220,511,43,2907,5346

```
