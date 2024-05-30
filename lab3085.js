//                                   Part 1: Thinking Functionally
// When coding, it is important to approach your work using small, manageable blocks of code. Some functions may become dozens or hundreds of lines long, but keeping things small and simple will help you scale and maintain your code.
// This section will have you build a few simple functions to accomplish arbitrary tasks. When building functions, remember that there are many ways to accomplish a task in programming. Sometimes, the shortest route is the best, and sometimes it is not.
// Take the following example, which contains five functions that accomplish the same task. If you were looking at this code for the first time, which would make the most sense to you?



// const arrayOfNumbers = [8,15,43,67,23,33]

// function SumOfArray(x) {
//     let sum = 0
//     for ( let i = 0; i <x.length; i++){
//         sum += x[i]
//     }
//     return sum
// }
// console.log(SumOfArray(arrayOfNumbers))


// function AvgOfArray(a){
//     let sum = 0
//     for ( let i = 0; i <a.length; i++){
//         sum += a[i] / a.length
//     }
//     return sum
// }
// console.log(AvgOfArray(arrayOfNumbers))

let ArrofArr = [
    [ 'ID','Name', 'Occupation','Age','yabbadabadoo','cake','yikes','6' ],
    [ '42','Bruce','Knight','41' ],
    [ '57','Bob','Fry','Cook','19','abcd','hellomate' ],
    [ '63','Blaine','Quiz Master','58','lmnopqrstuv','xy&z' ],
    [ '98','Bill','Doctors','Assistant','26','1','2','3' ]
  ]

  function LongestString(L){
    let longest = '';
    for (let i = 0; i < L.length; i++) {
        for (let j = 0; j < L[i].length; j++) {
            if (L[i][j].length > longest.length) {
                longest = L[i][j];
            }
        }
    }
    return longest;
}

  console.log(LongestString(ArrofArr))