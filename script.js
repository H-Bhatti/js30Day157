const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// first attempt making a saperate array and then sotring the second array and chaning the cpcordinate index to the first array
// let arr2 =[]

// function test (element, element2){
//     element.map((element, i) => {
//         // console.log(element)
//         if (element.includes("The ")||element.includes("A ")||element.includes("An ")){
//             arr2[i] =  / (.+)/.exec(element)[1]
//             // console.log(element)
//         }else{
//             arr2[i]=element
//         }
//     })
//     // console.log(element2)
//     arr2=[...element2]
// }

// console.log(arr)
// if (str.includes("the ")){
//     str = / (.+)/.exec(str)[1]
// }
// test(arr, arr2)
// console.log(arr)
// console.log(arr2)
// console.log(arr)
//----------------

/// second attempt making an object without the words a , an , the and sorting the array with the refrance of the second part of the object which is without a,an,the


// let arrObj = []
// function test2 (element){
//     element.map ((element, i)=>{
//         let banana;
//         if (element.includes("The ")||element.includes("A ")||element.includes("An ")){
//              banana =  / (.+)/.exec(element)[1]
//         } else banana = element

//         arrObj[i]= [{name : element,name2: banana.toLowerCase()}]
//     })
// }


// test2(arr);

// console.log(arrObj)

// function compareName(a, b) {

//     // console.log("gay")
//     // converting to uppercase to have case-insensitive comparison
//     const name1 = a.name;
//     const nam2 = b.name;


//     if (name1 > nam2) {
//         return  1;
//     } else{
//         return -1;
//     }
// }


//   console.log(arrObj.sort(compareName))

//----------------
//third attemp watching the video

function strip (bandName){
    return bandName.replace (/^(a |an |the )/i,"").trim();
}

const sortedbands = bands.sort((a,b)=> strip(a) > strip(b) ? 1 : -1);

document.querySelector("#bands").innerHTML = sortedbands.map(band=>`<li>${band}</li>`).join("")

console.log(sortedbands)

