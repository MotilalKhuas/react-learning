import React, {useState} from 'react'

const Quizz = () => {

    const problems = [
        {
            question: "What is the capital of France?",
            answer: "Paris"
        },
        {
            question: "What is 2 + 2?",
            answer: "4"
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            answer: "Harper Lee"
        },
        {
            question: "What is the boiling point of water in Celsius?",
            answer: "100°C"
        },
        {
            question: "Which planet is known as the Red Planet?",
            answer: "Mars"
        },
        {
            question: "What is the largest ocean on Earth?",
            answer: "Pacific Ocean"
        },
        {
            question: "Who painted the Mona Lisa?",
            answer: "Leonardo da Vinci"
        },
        {
            question: "What is the smallest prime number?",
            answer: "2"
        },
        {
            question: "Which language is primarily used for web development?",
            answer: "JavaScript"
        },
        {
            question: "What year did World War II end?",
            answer: "1945"
        }
    ];
    const [QuestionIndex, setQuestionIndex] = useState(0)
    const [showAnswer, setShowAnswer] = useState(false);

    function handlePrevious(){
        if(QuestionIndex <= 0) return;
        setQuestionIndex(QuestionIndex-1);
        setShowAnswer(false)
    }

    function handleNext(){
        if(QuestionIndex > problems.length) return;
        setQuestionIndex(QuestionIndex+1);
        setShowAnswer(false)
    }

    return (
        <>
            <div style={{height:"50px"}}>
                <p>{problems[QuestionIndex]?.question}</p>
                {showAnswer && <p>{problems[QuestionIndex]?.answer}</p>}
            </div>
            <div>
                <button onClick={handlePrevious} disabled={QuestionIndex <= 0}>Previous</button>
                <button onClick={handleNext} disabled={QuestionIndex > problems.length}>Next</button>
                <button onClick={()=>setShowAnswer(!showAnswer)}>{showAnswer ? "hide answer" : "show answer"}</button>
            </div>
        </>
    )
}

export default Quizz