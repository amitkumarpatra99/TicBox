import React from 'react';
import Cell from './Cell';

const Board = ({ cells, onCellClick, winData }) => {
    return (
        <div className="relative p-6 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
            {/* Decorative Screws */}
            <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-slate-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] border border-slate-600"></div>
            <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-slate-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] border border-slate-600"></div>
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-full bg-slate-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] border border-slate-600"></div>
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-full bg-slate-700 shadow-[inset_0_1px_2px_rgba(0,0,0,0.5)] border border-slate-600"></div>

            {/* Inner "Screen" Container */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 p-4 bg-black/60 rounded-xl border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]" id="board">
                {cells.map((cell, i) => (
                    <Cell
                        key={i}
                        value={cell}
                        onClick={() => onCellClick(i)}
                        isWin={winData && winData.line.includes(i)}
                    />
                ))}
            </div>

            {/* Status Line decoration */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent rounded-full"></div>
        </div>
    );
};

export default Board;
