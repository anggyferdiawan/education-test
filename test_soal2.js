function validateInput(input) {


    const re = /^[a-zA-Z]+$/

    let result = re.test(input);
    if (result) {
        console.log('Sistem memeriksa data anda valid dengan ketentuan kami.');
    }
    else {
        let newInput = prompt('Sistem kami menolak untuk inputan berisi angka:');
        validateInput(newInput);
    }
}

// take input
let input = prompt('Silahkan tulis kata kata anda : ');

validateInput(input);
