/**
 * Returns the rectangles sequence of specified figure.
 * The figure is ASCII multiline string comprised of minus signs -, plus signs +,
 * vertical bars | and whitespaces.
 * The task is to break the figure in the rectangles it is made of.
 *
 * NOTE: The order of rectanles does not matter.
 *
 * @param {string} figure
 * @return {Iterable.<string>} decomposition to basic parts
 *
 * @example
 *
 *    '+------------+\n'+
 *    '|            |\n'+
 *    '|            |\n'+        '+------------+\n'+
 *    '|            |\n'+        '|            |\n'+         '+------+\n'+          '+-----+\n'+
 *    '+------+-----+\n'+   =>   '|            |\n'+     ,   '|      |\n'+     ,    '|     |\n'+
 *    '|      |     |\n'+        '|            |\n'+         '|      |\n'+          '|     |\n'+
 *    '|      |     |\n'         '+------------+\n'          '+------+\n'           '+-----+\n'
 *    '+------+-----+\n'
 *
 *
 *
 *    '   +-----+     \n'+
 *    '   |     |     \n'+                                    '+-------------+\n'+
 *    '+--+-----+----+\n'+              '+-----+\n'+          '|             |\n'+
 *    '|             |\n'+      =>      '|     |\n'+     ,    '|             |\n'+
 *    '|             |\n'+              '+-----+\n'           '+-------------+\n'
 *    '+-------------+\n'
 */
/**
 * Generator function that yields rectangles found within a given ASCII figure.
 *
 * @param {string} figure - Multiline string representing the ASCII figure.
 * @return {Generator<string, void, unknown>} - Generator yielding each rectangle as a string.
 */
function* getFigureRectangles(figure) {
  const lines = figure.split("\n");
  const height = lines.length;
  const width = lines[0].length;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (lines[y][x] === "+") {
        for (let bottomY = y + 1; bottomY < height; bottomY++) {
          if (lines[bottomY][x] === "+") {
            for (let rightX = x + 1; rightX < width; rightX++) {
              if (lines[y][rightX] === "+") {
                if (lines[bottomY][rightX] === "+") {
                  if (isRectangle(lines, x, y, rightX, bottomY)) {
                    yield drawRectangle(rightX - x + 1, bottomY - y + 1);
                    rightX = width;
                    bottomY = height;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

/**
 * Checks if the specified area forms a valid rectangle.
 *
 * @param {string[]} lines - Array of strings representing the ASCII figure.
 * @param {number} startX - X-coordinate of the top-left corner.
 * @param {number} startY - Y-coordinate of the top-left corner.
 * @param {number} endX - X-coordinate of the bottom-right corner.
 * @param {number} endY - Y-coordinate of the bottom-right corner.
 * @return {boolean} - True if a valid rectangle is found, false otherwise.
 */
function isRectangle(lines, startX, startY, endX, endY) {
  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      if (y === startY || y === endY) {
        if ((x === startX || x === endX) && lines[y][x] !== "+") {
          return false;
        }
      } else {
        if (lines[y][x] === "+") {
          return false;
        }
        if ((x === startX || x === endX) && lines[y][x] !== "|") {
          return false;
        }
      }
    }
  }
  return true;
}

/**
 * Draws a rectangle based on the provided dimensions.
 *
 * @param {number} width - Width of the rectangle.
 * @param {number} height - Height of the rectangle.
 * @return {string} - String representing the drawn rectangle.
 */
function drawRectangle(width, height) {
  let rectangle = "+" + "-".repeat(width - 2) + "+\n";
  for (let y = 1; y < height - 1; y++) {
    rectangle += "|" + " ".repeat(width - 2) + "|\n";
  }
  rectangle += "+" + "-".repeat(width - 2) + "+\n";
  return rectangle;
}

const figure2 =
  "   +-----+     \n" +
  "   |     |     \n" +
  "+--+-----+----+\n" +
  "|             |\n" +
  "|             |\n" +
  "+-------------+\n";

for (const rectangle of getFigureRectangles(figure2)) {
  console.log(rectangle);
}
