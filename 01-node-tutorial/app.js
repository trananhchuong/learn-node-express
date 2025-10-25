// const { readFile, writeFile } = require('fs')

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')


const { readFile, writeFile } = require('fs').promises;

console.log('start');

async function processFiles() {
  try {
    const first = await readFile('./content/first.txt', 'utf8');
    const second = await readFile('./content/second.txt', 'utf8');
    
    await writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      {
        flag: 'a',
      }
    );
    
    console.log('done with this task');
  } catch (err) {
    console.log(err);
  }
}

processFiles();

console.log('starting next task');