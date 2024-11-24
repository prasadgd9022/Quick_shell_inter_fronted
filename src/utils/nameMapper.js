const indianNames = [
  'Prasad',
  'Prateek',
  'Rishabh',
  'Anuj',
  'Rohit',
  'Amit',
  'Rahul',
  'Vijay',
  'Sanjay',
  'Aditya'
];

export const mapToIndianName = (index) => {
  return indianNames[index % indianNames.length];
}; 