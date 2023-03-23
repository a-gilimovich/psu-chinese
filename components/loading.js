import React from 'react';

const Loading = () => {
    return (
        <div className={'loading'}>
            <svg className={"loading__img"} width="40" height="40" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M31.8103 8.97248L15.9406 0L0 8.97248V26.987L15.9406 35.9595L31.8103 26.987V8.97248Z" fill="#282828" filter={"var(--FILTER)"}/>
            </svg>
        </div>
    );
};

export default Loading;