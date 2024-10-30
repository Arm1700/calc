// const symbol = document.querySelectorAll('.symbol')
// const result = document.querySelector('.result')
// const action = document.querySelector('.action')

// console.log(symbols);
// console.log(result);
// console.log(action);

// symbol.forEach((el) => {
//     el.onclick = () => {
//         if (el.id === "clear") {
//             action.innerHTML = "";
//             result.innerHTML = "0";
//         } else if (el.id === "backspace") {
//             let string = action.innerHTML.toString();
//             action.innerHTML = string.slice(0, -1);
//         }else if (el.id !="" && el.id != "="){
//             action.innerHTML+= el.id;
//         }else if(el.id ==="="){
//             let equatiom = eval(action.innerHTML);
//             result.innerHTML = equation;
//         }
//         console.log(el.id);

//     }
// })


let a = '' //arajin tiv@
let b = '' //erkrord tiv@
let sign = '' // gorxoxutyan nshan@
let finish = false //
let keyInpA = ''
let keyInpB = ''
let keyInp = ''
const digit = ['0', '1', '2', '3', '4',
    '5', '6', '7', '8', '9', '.']
const action = ['-', '+', '/', '*']

//ekran
const inp = document.querySelector('.action')
const out = document.querySelector('.output')

function clearAll() {
    console.log('a');
    a = ''; //arajin tiv@
    b = ''; //erkrord tiv@
    sign = ''; //gorxoxutyan nshan@
    finish = false; //
    out.textContent = '0';
    inp.textContent = ''
}

// document.querySelector('.clear').onclick = clearAll

document.querySelector('.symbols').onclick = (event) => {
    // ete sxmes knopkeqic mekin

    if (!event.target.classList.contains('symbol')) return

    //ete scmes clear C knopkin
    if (event.target.classList.contains('clear')) return

    out.textContent = '';
    // inp.textContent = '';
    //sxmat knopken vor arajana ekranin
    const key = event.target.textContent
    // console.log(key);

    //ete sxmatca 0-9
    if (digit.includes(key)) {
        if (b === '' && sign === '') {
            a += key;
            out.textContent = a;
            inp.textContent = '';
            inp.textContent = `${a}`
        } else if (a !== '' && b !== '' && finish) {
            b = key;
            finish = false;
            out.textContent = b;
            inp.textContent = `${a}`
        } else {
            b += key;
            console.log(a, b, sign);
            out.textContent = b
            inp.textContent = `${a} ${sign} ${b}`
        }
        return;
    }

    //ete sxmatsa gorcoxutyunneric mek@
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign
        // inp.textContent += out.textContent

        if (a && b) {
            inp.textContent = `${a} ${sign}`
        } else  {
            inp.textContent = `${a}`
        }
        return;
    }
    //gorcoxutyunner
    if (key === '=') {
        if (b === '') b = a
        switch (sign) {
            case '+':
                a = (+a) + (+b)
                break;
            case '-':
                a = a - b
                break;
            case '/': if (b === '0') {
                out.textContent = 'Cannot divide by zero'
                a = ''
                b = ''
                sign = ''
                return
            }
                a = a / b
                break;
            case '*':
                a = a * b
                break;
        }
        finish = true
        inp.textContent += inp.textContent[inp.textContent.length - 1] === '=' ? '' : '='
        out.textContent = a;
        // inp.textContent += out.textContent
        console.log(a, b, sign);

    }
    return
}
