
import React from 'react';

const TickerMessage: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="text-sm font-medium mx-8 flex items-center">
        <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
        {children}
    </span>
);

const HeadlineTicker: React.FC = () => {
    const messages = [
        "New premium banner designs now available!",
        "Order your wedding invitations—delivered within 24h.",
        "Photography studio sessions now open!",
        "Flyer + Logo + Banner package discounted this week."
    ];

    return (
        <div className="bg-zinc-900 border-y border-zinc-800 py-2 overflow-hidden relative">
            <div className="ticker-animation">
                {messages.map((msg, index) => <TickerMessage key={index}>{msg}</TickerMessage>)}
                {messages.map((msg, index) => <TickerMessage key={index + messages.length}>{msg}</TickerMessage>)}
            </div>
        </div>
    );
};

export default HeadlineTicker;
