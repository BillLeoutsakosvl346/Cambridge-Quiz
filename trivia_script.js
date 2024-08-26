function checkAnswer(answer)
{
    const resultDiv = document.getElementById('result-message');
    const multiButton = document.getElementById('multi-button-group');
    const tryAgainButton = document.getElementById('left-button-group');

    multiButton.style.display = 'none';


    if (answer==='correct')
    {
        resultDiv.textContent = 'Correct!';
        resultDiv.style.color = 'green';
        tryAgainButton.style.display = 'none';
    }
    else
    {
        resultDiv.textContent = 'Try Again.';
        resultDiv.style.color = 'red';
        tryAgainButton.style.display = 'flex';
    }
}

function tryAgain()
{
    const resultDiv = document.getElementById('result-message');
    const multiButton = document.getElementById('multi-button-group');
    const tryAgainButton = document.getElementById('left-button-group');

    multiButton.style.display = 'flex';
    tryAgainButton.style.display = 'none';
    resultDiv.textContent = '';
}

function check2ndAnswer()
{
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const resultDiv = document.getElementById('result-message2');
    const subButton = document.getElementById('submit-button');
    const inputSpace = document.getElementById('user-input');

    if (userInput === 'peterhouse')
    {
        resultDiv.textContent = 'Correct!';
        resultDiv.style.color = 'green';
        subButton.style.display = 'none';
        inputSpace.style.display = 'none';
    }
    else 
    {
        resultDiv.textContent = 'Try Again.';
        resultDiv.style.color = 'red';
    }
}

