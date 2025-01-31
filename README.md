# workshop_5

Website: https://siennabienna.github.io/workshop_5/

# Things I looked at in this Workshop
- using a csv file to put data in a code that can be retrived
- adding images to visualise the data
- using user input events to determine what data is displayed
- finding a way to adjust the size of images depending on how many there are on the screen

# Practicing with a CSV File

I created a speadsheet on Excel that showed my daily steps from the past 28 days. The data was taken from Pikmin Bloom, which is a wwalking app I have used for a little while to encourage me to improve my step count. I then saved this to VSCode as a CSV file:

```js

Week,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
1,6689,3601,1688,844,5231,804,8513
2,283,546,124,1492,313,264,5547
3,10708,321,262,1195,10922,8278,4550
4,5414,2486,2220,511,43,2907,5346

```
I followed along with the workshop video and was able to produce this simple graph that displayed my steps from the last four Mondays. I found this very enjoyable as it was similar to coding I had done in my statistics cource last year, so it was pretty familiar. However, as I based the code on what was shown in the workshop videos, I found that I needed to significantly change the proportions of the size of the rectangles in relationship to the data. The example was in single and double digits, whilst mine ranged from 43 to over 10,000. This worked quite well and I was able to produce a little graph.

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

# Adding Images to Visualise Data
I decided I wanted each step I took in a day to be represented by a Pikmin from the app I used to keep a record of my steps. I chose this image:

![yellowPikmin](https://github.com/user-attachments/assets/e825c9a3-743c-475f-84ac-10598a0c73be)

However, I wanted the image to adjust size in response how many steps I had taken in a specific day, so that the images would fill the entire screen. I had to use this equation to work out how to do this:

![image](https://github.com/user-attachments/assets/5497358e-9669-479c-af99-92a7705e5eac)

```js
for (let i = 0; i < stepsSqrt; i++) {
      for (let j = 0; j < stepsSqrt; j++) {
        image(stepImg, iconSize * i, iconSize * j, iconSize, iconSize);
      }
    }
```
I found that because the data was in such high digits, I needed to increase the canvas from 400x400 pixels to 600x600 just to make it a little more clear. However, many of the Pikmin still look like little dots on days with many steps.

Also, because I was trying to fit the Pikmin into a perfect square, this meant that the number of Pikmin displayed was not a direct reflection of the number of steps that I took. However, I think it still works as it allows for an understanding of scale which I was aiming for.

After this, I wanted to make it so that the user could dictate what day was shown on the screen, so I used two dropdown menus for this. One to show the week, and one to show the day. I needed to make it so that these dropdown menus would unpdate the Pikmin on the screen depending on the corresponding steps for that day. This is how I did that:

```js
let daySelect, weekSelect;

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
```
The different options on the dropdown menu.

```js
function draw() {
  if (selectedWeek != weekSelect.selected() || selectedDay != daySelect.selected()) {
    background(163, 255, 188);

    selectedWeek = weekSelect.selected();
    selectedDay = daySelect.selected();

    let row = table.getRow(weekSelect.value());
    let steps = row.get(selectedDay);
    let stepsSqrt = sqrt(steps);
    let iconSize = stepsToIconSize(steps);
```
Corresponding the user's input to the different days.

This was working very well when I had it running in VSCode, but when I uploaded it to GitHub, the sketch just wouldn't load. After quite a while of examining the code through the GitHub files, I noticed that the image in the file was `yellowPikmin.PNG`, whereas the image in the code was `yellowPikmin.png`. VSCode didn't seem to be picky about this, but I found it was a good lesson in being careful about the names when putting external sources into the code.

I also added some text as a span so that it could be displayed under the canvas.

# Ideas for Further Development
- make it so that the pikmin represent the exact number of steps taken, instead of making it so that it just fits the square
- make it so that it has different colours of Pikmin depending on some second variable, such as red Pikmin if I didn't leave the house that day, or blue Pikmin if I was in a different part of New Zealand
- change the canvas size so that it fills the entire window, and adjusts to the window size. This way, if the user wants to see the number of steps better, they can increase the window size accordingly.
