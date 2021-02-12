function round_to_even(fill_columns){
  return 2 * Math.round(fill_columns / 2);
}

function columnStartingPoint(column){
   return (columns_width * column) + 1;
}

function rowStartingPoint(row_height){
  return (total_rows * row_height) + 1;
}

function loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_height){
  cells = [];

  column_number = column_starting_point;

  // Loop the number of columns per grouping
    for (var c = 1; c <= columns_width; c++) {

      row_number = row_starting_point;

      // Loop the rows per column
      for (var r = 1; r <= columns_height; r++) {
        cell = 'row' + row_number + ' column' + column_number;
        cells.push(cell);

        row_number++;
      };

      column_number++;
  };

  return cells;
}

// =========================
// Letters
// =========================



// Letter I
function letterI (total_rows, total_columns){

  var fill_cells = [];

  fill_columns = Math.abs( total_columns * .1 );fill_columns = round_to_even(fill_columns);

  middle_column = total_columns / 2;
  fill_columns_from_middle = fill_columns / 2;


  // Get the columns to the left of middle
  for (var i = fill_columns_from_middle; i > 0; i--) {

    // Add the column for the entire row
    for (var r = total_rows; r > 0; r--) {
      cell = 'row' + r + ' column' + (middle_column + 1 - i);
      fill_cells.push(cell);
    };

  };

  // Get the columns to the right of middle
  for (var i = fill_columns_from_middle; i > 0; i--) {

    // Add the column for the entire row
    for (var r = total_rows; r > 0; r--) {
      cell = 'row' + r + ' column' + (middle_column+ i);
      fill_cells.push(cell);
    };

  };

  return fill_cells;
}


// Letter W
function letterW (total_rows, total_columns){

  fill_cells = [];

  columns_width = total_columns * .1;

  // First column(s)
  column_starting_point = 1;
  row_starting_point = 1;
  columns_one_height = total_rows * .5;
  column_one_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_one_height)
  fill_cells = fill_cells.concat(column_one_cells);

  // Second column(s)
  column_starting_point = ( columns_width + 1 );
  row_starting_point = rowStartingPoint(.5);
  columns_two_height = total_rows * .4;
  column_two_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_two_height);
  fill_cells = fill_cells.concat(column_two_cells);

  // Thrid column(s)
  column_starting_point = columnStartingPoint(2);
  row_starting_point = rowStartingPoint(.9);
  columns_three_height = total_rows * .1;
  column_three_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_three_height)
  fill_cells = fill_cells.concat(column_three_cells);

  // Fourth column(s)
  column_starting_point = columnStartingPoint(3);
  row_starting_point = rowStartingPoint(.7);
  columns_four_height = total_rows * .2;
  column_four_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_four_height)
  fill_cells = fill_cells.concat(column_four_cells);

  // Fifth column(s)
  column_starting_point = columnStartingPoint(4);
  row_starting_point = rowStartingPoint(.6);
  columns_five_height = total_rows * .1;
  column_five_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_five_height)
  fill_cells = fill_cells.concat(column_five_cells);

  // Sixth column(s)
  column_starting_point = columnStartingPoint(5);
  row_starting_point = rowStartingPoint(.7);
  columns_six_height = total_rows * .2;
  column_six_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_six_height)
  fill_cells = fill_cells.concat(column_six_cells);

  // Seventh column(s)
  column_starting_point = columnStartingPoint(6);
  row_starting_point = rowStartingPoint(.9);
  columns_seven_height = total_rows * .1;
  column_seven_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_seven_height)
  fill_cells = fill_cells.concat(column_seven_cells);

  // Eigth column(s)
  column_starting_point = columnStartingPoint(7);
  row_starting_point = rowStartingPoint(.5);
  columns_eight_height = total_rows * .4;
  column_eight_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_eight_height);
  fill_cells = fill_cells.concat(column_eight_cells);

  // Ninth column(s)
  column_starting_point = columnStartingPoint(8);
  row_starting_point = 1;
  columns_nine_height = total_rows * .5;
  column_nine_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_nine_height)
  fill_cells = fill_cells.concat(column_nine_cells);

  return fill_cells;
}





























