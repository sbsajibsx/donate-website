function showSectionById(id){
    document.getElementById('donate-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}



// design change
document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.add('bg-primary', 'hover:bg-primary');
    document.getElementById('donate-btn').classList.remove('bg-primary', 'hover:bg-primary')
})
document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('history-btn').classList.remove('bg-primary', 'hover:bg-primary');
    document.getElementById('donate-btn').classList.add('bg-primary', 'hover:bg-primary')
})



// input value

function getInputValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// value from tag

function getTextValueById (id){
    const sBalance = document.getElementById(id).innerText;
    const balance = parseFloat(sBalance);
    return balance;
}