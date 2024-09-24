document.getElementById('donate-1-btn').addEventListener('click', function(){
    const addDonate = getInputValueById('input-donate-1');
    const totalDonate = getTextValueById('donate-1-total');
    const totalBalance = getTextValueById('totalAmmount');
    if(isNaN(addDonate)){
        document.getElementById('my_modal_1').close();
        alert('Type Number Of Ammount');
        return;
    }
    if(totalBalance < addDonate){
        document.getElementById('my_modal_1').close();
        alert('Not Enough Money')
        return;
    }
    if(addDonate > 0){
        const totalDonateNew = totalDonate + addDonate;
        const totalBalanceNew = totalBalance - addDonate;
        document.getElementById('donate-1-total').innerText = totalDonateNew;
        document.getElementById('totalAmmount').innerText = totalBalanceNew;

        // add to history
        const head = document.getElementById('first-heading').innerText;
        const addHistory = document.createElement('div');
        addHistory.className = 'border-2 p-4 rounded-3xl';
        addHistory.innerHTML = `

            <p class="mb-4"> ${addDonate} Taka is Donated for ${head} </p>
            <p>Date: ${new Date().toString()}<p/>

        `;
        document.getElementById('history-section').appendChild(addHistory);
    }
    else{
        document.getElementById('my_modal_1').close();
        alert('Type Positive Number or Not Enough Money');
        return;
    }
    addDonate = '';
})
document.getElementById('donate-2-btn').addEventListener('click', function(){
    const addDonate = getInputValueById('input-donate-2');
    const totalDonate = getTextValueById('donate-2-total');
    const totalBalance = getTextValueById('totalAmmount');
    if(isNaN(addDonate)){
        document.getElementById('my_modal_1').close();
        alert('Type Number Of Ammount');
        return;
    }

    if(totalBalance < addDonate){
        document.getElementById('my_modal_1').close();
        alert('Not Enough Money')
        return;
    }

    if(addDonate > 0){
        const totalDonateNew = totalDonate + addDonate;
        const totalBalanceNew = totalBalance - addDonate;
        document.getElementById('donate-2-total').innerText = totalDonateNew;
        document.getElementById('totalAmmount').innerText = totalBalanceNew;

        // add to history
        const head = document.getElementById('second-heading').innerText;
        const addHistory = document.createElement('div');
        addHistory.className = 'border-2 p-4 rounded-3xl';
        addHistory.innerHTML = `

            <p class="mb-4"> ${addDonate} Taka is Donated for ${head} </p>
            <p>Date: ${new Date().toString()}<p/>

        `;
        document.getElementById('history-section').appendChild(addHistory);
    }
    else{
        document.getElementById('my_modal_1').close();
        alert('Type Positive Number')
        return;
    }
    addDonate = '';
})
document.getElementById('donate-3-btn').addEventListener('click', function(){
    const addDonate = getInputValueById('input-donate-3');
    const totalDonate = getTextValueById('donate-3-total');
    const totalBalance = getTextValueById('totalAmmount');
    if(isNaN(addDonate)){
        document.getElementById('my_modal_1').close();
        alert('Type Number Of Ammount');
        return;
    }

    if(totalBalance < addDonate){
        document.getElementById('my_modal_1').close();
        alert('Not Enough Money')
        return;
    }

    if(addDonate > 0){
        const totalDonateNew = totalDonate + addDonate;
        const totalBalanceNew = totalBalance - addDonate;
        document.getElementById('donate-3-total').innerText = totalDonateNew;
        document.getElementById('totalAmmount').innerText = totalBalanceNew;


        // add to history
        const head = document.getElementById('third-heading').innerText;
        const addHistory = document.createElement('div');
        addHistory.className = 'border-2 p-4 rounded-3xl';
        addHistory.innerHTML = `

            <p class="mb-4"> ${addDonate} Taka is Donated for ${head} </p>
            <p>Date: ${new Date().toString()}<p/>

        `;
        document.getElementById('history-section').appendChild(addHistory);
    }
    else{
        document.getElementById('my_modal_1').close();
        alert('Type Positive Number')
        return;
    }
    addDonate = '';
})