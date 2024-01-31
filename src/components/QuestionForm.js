import {useState} from 'react'

const QuestionForm = () => {
    const [inputValue, setInputValue] = useState('Votre question ici')

    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            <div>
                Any questions ?
            </div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Submit</button>
        </div>
    )
}

export default QuestionForm;