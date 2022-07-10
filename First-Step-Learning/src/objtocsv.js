var stockData = [  
  {
      Symbol: "AAPL",
      Company: "Apple Inc.",
      Price: 132.54
  },
  {
      Symbol: "INTC",
      Company: "Intel Corporation",
      Price: 33.45
  },
  {
      Symbol: "GOOG",
      Company: "Google Inc",
      Price: 554.52
  },
];
function convertArrayOfObjectsToCSV(args) {  
  var result, ctr, keys, columnDelimiter, lineDelimiter, data;

  data = args.data || null;
  if (data == null || !data.length) {
      return null;
  }

  columnDelimiter = args.columnDelimiter || ',';
  lineDelimiter = args.lineDelimiter || '\n';

  keys = Object.keys(data[0]);

  result = '';
  result += keys.join(columnDelimiter);
  result += lineDelimiter;

  data.forEach(function(item) {
      ctr = 0;
      keys.forEach(function(key) {
          if (ctr > 0) result += columnDelimiter;

          result += item[key];
          ctr++;
      });
      result += lineDelimiter;
  });

  return result;
}
let result  = convertArrayOfObjectsToCSV({
  data: stockData
});
console.log(result);
