let table;
let daySelect, weekSelect;
let span


function setup() {
  createCanvas(600, 600);

  daySelect = createSelect();
  daySelect.position(10, 610);
  daySelect.option("Monday");
  daySelect.option("Tuesday");
  daySelect.option("Wednesday");
  daySelect.option("Thursday");
  daySelect.option("Friday");
  daySelect.option("Saturday");
  daySelect.option("Sunday");

  weekSelect = createSelect();
  weekSelect.position(103, 610);
  weekSelect.option("Week 1", 0);
  weekSelect.option("Week 2", 1);
  weekSelect.option("Week 3", 2);
  weekSelect.option("Week 4", 3);

  span = createSpan("Steps over the last 28 days");
  span.position(430, 610);

}

let stepImg;

function preload() {
  table = loadTable('Daily Steps January.csv', 'csv', 'header');
  stepImg = loadImage('yellowPikmin.PNG');
}

// function weekLabels() {
//   for (x = 0; x < table.getRowCount(); x++) {
//     let row = table.getRow(x);
//     let week = row.get("Week");
//     fill(0);
//     text(week, 30 + x * 100, 340);
//   }
// }

let selectedWeek = "";
let selectedDay = "";

function draw() {
  if (selectedWeek != weekSelect.selected() || selectedDay != daySelect.selected()) {
    background(163, 255, 188);

    selectedWeek = weekSelect.selected();
    selectedDay = daySelect.selected();

    let row = table.getRow(weekSelect.value());
    let steps = row.get(selectedDay);
    let stepsSqrt = sqrt(steps);
    let iconSize = stepsToIconSize(steps);

    for (let i = 0; i < stepsSqrt; i++) {
      for (let j = 0; j < stepsSqrt; j++) {
        image(stepImg, iconSize * i, iconSize * j, iconSize, iconSize);
      }
    }
  }
}

function stepsToIconSize(steps) {
  /* 
  since the total number of steps will fill the whole
  area of the square, the icons will need to 
  adjust size depending on how many steps there are.
  */
  return 600 / sqrt(steps);
}