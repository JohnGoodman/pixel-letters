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


function letterI (total_columns, total_rows){

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





























