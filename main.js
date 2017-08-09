// button
const _1 = document.getElementById('_1')
const _2 = document.getElementById('_2')
const _3 = document.getElementById('_3')

const _4 = document.getElementById('_4')
const _5 = document.getElementById('_5')
const _6 = document.getElementById('_6')


const _7 = document.getElementById('_7')
const _8 = document.getElementById('_8')
const _9 = document.getElementById('_9')

const _0 = document.getElementById('_0')
const _00 = document.getElementById('_00')
const _000 = document.getElementById('_000')

const _plus = document.getElementById('_+')
const _qual = document.getElementById('_=')

const _clear = document.getElementById('clear')



const output_text = document.getElementById('output')


let number = 0
let number_to_String = ''
let number_bool = false;
let array_number = 0
let number_equal
let array_equal = []


_1.addEventListener('click', function(){
    number = 1
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
})
_2.addEventListener('click', function(){
    number = 2
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_3.addEventListener('click', function(){
    number = 3
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_4.addEventListener('click', function(){
    number = 4
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_5.addEventListener('click', function(){
    number = 5
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_6.addEventListener('click', function(){
    number = 6
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_7.addEventListener('click', function(){
    number = 7
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_8.addEventListener('click', function(){
    number = 8
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})
_9.addEventListener('click', function(){
    number = 9
    number_to_String += number.toString()
    output_text.value = number_to_String
    console.log(number_bool)
    
})

// functional

_plus.addEventListener('click', function(){
     
    plus()
       
})

_qual.addEventListener('click',function(){
    output_text.value = number_equal
    checkNumber()
    
})

_clear.addEventListener('click', function(){
    __clear()
})

// functinal

function checkNumber(){
    if(number_bool == true){
        number_to_String = ''
    }
}

function __clear(){

    number_to_String , output_text.value = "0"
    console.log("clear")

}

// function plus(){
//     let string_to_number = parseInt(number_to_String)
//     array_equal.push(string_to_number)
//     number_bool = true;
//     for(let key in array_equal){
//         number_equal = array_equal[key] += array_equal[key]
//     }
//     checkNumber()
// }







