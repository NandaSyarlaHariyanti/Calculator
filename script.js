function insert(num) {
    document.form['text-view'].value = document.form['text-view'].value + num;
}

function AC() {
    document.form['text-view'].value = "";
}

function CE() {
    var x = document.form['text-view'].value;
    document.form['text-view'].value = x.substring(0, x.length - 1);
}

function equal() {
    var x = document.form['text-view'].value;
    if (x === "") {
        alert('Masukkan angka');
    } else {
        try {
            document.form['text-view'].value = eval(x);
        } catch (error) {
            alert('Error');
        }
    }
}