import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClipboardList } from 'react-icons/fa';

const HistoryLog = ({ history }) => {
    return (
        <div className="w-full h-full overflow-y-auto custom-scrollbar flex flex-col gap-2">
            <AnimatePresence>
                {history.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full text-slate-500 gap-2 opacity-50">
                        <FaClipboardList className="text-3xl" />
                        <p className="text-xs font-medium">AWAITING GAME DATA</p>
                    </div>
                ) : (
                    history.map((match, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex justify-between items-center p-3 rounded-xl bg-slate-800/20 backdrop-blur-sm border border-white/5 text-xs font-mono relative overflow-hidden"
                        >
                            <div className={`absolute w-1 h-full left-0 top-0 ${match.result === 'win' ? 'bg-blue-500' : match.result === 'loss' ? 'bg-red-500' : 'bg-slate-500'}`}></div>
                            <span className="font-bold text-slate-300 ml-2">MATCH_{String(index + 1).padStart(3, '0')}</span>
                            <span className={match.result === 'win' ? 'text-blue-400' : match.result === 'loss' ? 'text-red-400' : 'text-slate-400'}>
                                {match.result === 'win' ? 'WIN' : match.result === 'loss' ? 'LOSS' : 'DRAW'}
                            </span>
                        </motion.div>
                    ))
                )}
            </AnimatePresence>
        </div>
    );
};

export default HistoryLog;
