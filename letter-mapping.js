letter_a = [
  'row1 column1',
  'row1 column2',
  'row1 column3',
  'row1 column4',

  'row2 column1',
  'row2 column2',
  'row2 column3',
  'row2 column4',
];


function round_to_even(fill_columns){
  return 2 * Math.round(fill_columns / 2);
}


function letterI (total_rows, total_columns){

  var fill_cells = [];

  fill_columns = Math.abs( total_columns * .1 );
  fill_columns = round_to_even(fill_columns);

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


function loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_height){
  cells = [];

  // console.log(column_starting_point);
  // console.log(row_starting_point);
  // console.log(columns_width);
  // console.log(columns_height);

  // console.log(((columns_width - 1) + column_starting_point));
  // console.log(((columns_height - 1) + row_starting_point));
  column_number = column_starting_point;

  // Loop the number of columns per grouping
  // for (var c = 1; c <= ((columns_width - 1) + column_starting_point); c++) {
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
  row_starting_point = ( ( total_rows * .5 ) + 1 );
  columns_two_height = total_rows * .4;
  column_two_cells = loopColumnsAndRows(column_starting_point, row_starting_point, columns_width, columns_two_height)
  fill_cells = fill_cells.concat(column_two_cells);

  return fill_cells;
}





























