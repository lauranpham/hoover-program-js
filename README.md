## Background and About:
This Hoover tech test is a simple program where a hoover moves and cleans dirt patches along the way.

## Instructions:
#### Download
Download the program by forking and cloning the repository onto your computer

```bash
mkdir ~/code/OWNER_GITHUB_USERNAME
cd ~/code/OWNER_GITHUB_USERNAME
git clone git@github.com:OWNER_GITHUB_USERNAME/hoover-tech-test.git
cd hoover-tech-test
```

#### Input
Modify the input.txt file with the following:
Note: separate x and y coordinates with a space e.g. (3,1) is written as 3 1
Another Note: Hoover and patch locations are identified at the bottom left corner of those grid positions

- First line: Set the room dimensions
- Second line: Set the hoover location
- Third to last line: Set each of your dirt patch locations on a new line
- Last line: Set your directions (N for North, S for South, E for East, W for West)

Example:
5 5
1 1
2 2
3 3
2 3
1 2
NSENWNES

#### Program running:
Run the program by writing the following in the terminal command line:

```bash
node program.js
```
The hoover will move based on the directions you have given and clean the dirt patches
along the way.

#### Output:
- First line: The final hoover position in the form: x y.
- Second line: The number of dirt patches the hoover has cleaned on the way.

#### Validations:
There are three basic validations for this hoover program based on locations:
1. The hoover is within the room boundaries
2. The dirt patches are within the room boundaries
3. The directions are valid

#### Testing:
There are three basic tests for this hoover program:
1. That the hoover moves in the correct directions
2. That a dirt patch is only cleaned up once
3. That the hoover does not move outside the defined gridSize even if the directions indicates to move beyond

Run the test by:
1. Installing mocha in your terminal
```bash
npm install --save-dev mocha
```
2. Running the test in your terminal

```bash
rake
```
OR
```bash
npm test
```

#### Further:
If I had more time and experience, I would have:
- Added more validations and error messages e.g. for patches that have the same location, dirt patches cannot exist at the same location as the hoover's starting position to minimise confusion.
- Added more testing conditions e.g. It should throw an invalidation error message if validation conditions are not met.
