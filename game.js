const textElement = document.getElementById("text");
const optionButtonsElement = document.getElementById('option-buttons')

let start ={}

function startGame() {
    start = {};
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }
    textNode.options.forEach(option => {
        if(showOption(option)) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return true
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: "You wake up in a strange place and you see a jar of blue goo near you",
        options: [
            {
                text: 'Take goo',
                setState: { bluegoo: true },
                nextState: 2
            },
            {
                text:'Leave the goo',
                nextState: 2
            }
        ]
    },
    {
        id: 2,
    }
]

startGame()