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

const _0    = document.getElementById('_0')
const _00   = document.getElementById('_00')
const _000  = document.getElementById('_000')

const _plus         = document.getElementById('_+')
const _times         = document.getElementById('_x')
const _reduce       = document.getElementById('_-')
const _equal        = document.getElementById('_=')
const _devided        = document.getElementById('_:')

const _clear        = document.getElementById('clear')

const output_text   = document.getElementById('output')

// variable
let value           = ""
let displayed       = ""
let first_value     = 0
let second_value    = 0
let operations = ""
let operations_bool = false
let equal_value = 0

_1.addEventListener('click', function(){
    value       = "1"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
})

_2.addEventListener('click', function(){
    value       = "2"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_3.addEventListener('click', function(){
    value       = "3"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
})

_4.addEventListener('click', function(){
    value       = "4"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
})

_5.addEventListener('click', function(){
    value       = "5"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
})

_6.addEventListener('click', function(){
    value       = "6"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_7.addEventListener('click', function(){
    value       = "7"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_8.addEventListener('click', function(){
    value       = "8"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_9.addEventListener('click', function(){
    value       = "9"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_0.addEventListener('click', function(){
    value       = "0"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_00.addEventListener('click', function(){
    value       = "00"
    displayed   += value
    displayedNumber(displayed)
    operations_bool = false
    
})

_plus.addEventListener('click', function(){
    add()
})

_reduce.addEventListener('click', function(){
    reduce()
})

_equal.addEventListener('click', function(){
    equal()
})

_times.addEventListener('click', function(){
    times()
})

_devided.addEventListener('click', function(){
    devided()
})

_clear.addEventListener('click', function(){
    displayed = ""
    output_text.value = "0"
})

// functional

function add(){
    first_value = parseInt(output_text.value)
    operations = "add"
    operations_bool = true
    displayed = "" 
}

function reduce(){
    first_value = parseInt(output_text.value)
    operations = "reduce"
    operations_bool = true
    displayed = "" 
}

function times(){
    first_value = parseInt(output_text.value)
    operations = "times"
    operations_bool = true
    displayed = "" 
}

function devided(){
    first_value = parseInt(output_text.value)
    operations = "devided"
    operations_bool = true
    displayed = "" 
}


function displayedNumber(number){
    output_text.value = number   
}

function equal(){
    switch (operations) {
        case "add":
            second_value = parseInt(output_text.value)
            equal_number = first_value + second_value
            displayedNumber(equal_number)
            console.log("berhasil menjumlahkan")
            operations_bool = true
            displayed = ""
            break;
        case "reduce":
            second_value = parseInt(output_text.value)
            equal_number = first_value - second_value
            displayedNumber(equal_number)
            console.log("berhasil mengurangi")
            operations_bool = true
            displayed = ""
            break
        case "times":
            second_value = parseInt(output_text.value)
            equal_number = first_value * second_value
            displayedNumber(equal_number)
            console.log("berhasil mengkalikan")
            operations_bool = true
            displayed = ""
            break
        case "devided":
            second_value = parseInt(output_text.value)
            equal_number = first_value / second_value
            displayedNumber(equal_number)
            console.log("berhasil mengkalikan")
            operations_bool = true
            displayed = ""
            break
    
        default:
            break;
    }
}

function clearDisplay(){
    
}



