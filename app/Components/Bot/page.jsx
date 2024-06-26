// BotPage.js
"use client"
import { AppContext } from '@/app/context';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { run } from './run';

const Bot = () => {

    const { auth } = useContext(AppContext)
    const router = useRouter()

    //useStates
    const [inputValue, setInputValue] = useState('');
    const [question, setQuestion] = useState('');
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState();

    // input field
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    //Handle Submit
    const handleSubmit = async (e) => {
        if (e.key === 'Enter' && inputValue) {
            try {
                setInputValue('');
                setQuestion(inputValue);
                setLoading(true)
                const apiResponse = await run(inputValue);
                setResponse(apiResponse);
                setLoading(false)
            } catch (error) {
                console.error('Error querying API:', error);
            }
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-gray-900">
            <div className="flex-grow p-4">
                {/* Bot content */}
                {question ? (
                    <div className="sm:m-8 mx-auto">
                        {/* Bot messages */}
                        {loading ? (
                            <div className="flex space-x-2 animate-pulse">
                                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                                <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                            </div>
                        ) : (
                            <div className="bg-gray-600 rounded-lg shadow-lg p-4 mb-20 overflow-y-auto">
                                {question && <p className="text-yellow-600">{question}</p>}
                                {response && <p className="text-white">{response}</p>}
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="bg-gray-600 rounded-lg shadow-lg p-4 mb-20 overflow-y-auto">
                        <p className="text-yellow-600">Ask me a question</p>
                    </div>
                )}


            </div>
            {/* Text input */}
            <div className="sm:m-8 b justify-center pb-4">
                <input
                    onChange={handleInputChange}
                    onKeyDown={handleSubmit}
                    value={inputValue}
                    type="text"
                    placeholder="Type your question..."
                    className="border  bg-gray-600 text-white placeholder:text-white rounded-md px-4 py-2 focus:outline-none focus:border-yellow-500 w-full"
                />
                {/* <button className="ml-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600">
        Send
      </button> */}
            </div>
        </div>

    );
};

export default Bot;
