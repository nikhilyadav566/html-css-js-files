//   Split :-
//            The split(' ') method splits the string str into an array of substrings using the space character ' ' as the delimiter.

let str ='Hii This side Nikhil Yadav';

let splited = str.split(' ');
console.log(splited);        //   ['Hii', 'This', 'side', 'Nikhil', 'Yadav']



//  2. Join:-
//           he join('_') method takes the array and joins its elements into a single string, using the underscore character _ as the separator.

let joined = splited.join('_');
console.log(joined);       //  Output :- Hii_This_side_Nikhil_Yadav
