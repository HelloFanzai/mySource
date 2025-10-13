import React, { useState, useEffect } from "react";

type Message = {
  id?: number;
  content?: string;
  status?: "streaming" | "complete";
  token?: string;
  text?: string;
  type?: string;
  message?: string;
  editCards?: EditCard[];
  userMessageId?: string;
  assistantMessageId?: string;
  conversationId?: string;
};

type EditCard = {
  cardid: string;
  old_text: string;
  new_text: string;
};

const initialMessages: Message[] = []

const StreamingChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [streamingChunks, setStreamingChunks] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    fetch("/data.json")  
      .then(res => res.json())
      .then(data => {

        setMessages(data);
        console.log("Messages loaded:", data);
        
      })
      .catch(err => {
        console.error("Error loading messages:", err);
      });
  }, []);


  // mock api 100ms per time
  useEffect(() => {
    if (visibleCount < messages.length) {
      const timer = setTimeout(() => {
        setVisibleCount(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [visibleCount, messages]);


  return (
    <div className="bg-[#111111] text-[D9D9D9] text-[15px] min-h-screen p-4 max-w-xl mx-auto">

      <div className="flex justify-between mb-4 mx-0">

        <p className="">New Chat</p>

        <div className="flex text-white font-mono text-lg">
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white hover:text-gray-300 active:scale-50 transition-transform duration-300 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

      </div>

      <div className="space-y-4 mb-4 bg-[#111111]">

        <div className="border border-[#4F4E4E] rounded-2xl p-3 text-[#D9D9D9] leading-relaxed max-w-sm w-fit ml-auto">
          Hey, can you help me<br />
          <span className="whitespace-nowrap">improve my outline?</span>
        </div>

        <div className="p-3 text-[#D9D9D9] leading-relaxed max-w-sm w-fit">

          <span className="">I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.</span>
        </div>

        {messages
          .slice(0, visibleCount)
          .filter(
            msg =>
              !!msg.token && msg.token !== "[]" ||
              !!msg.text && msg.text !== "[]" ||
              !!msg.content ||
              !!msg.message
          )
          .map((msg, index) => (

            <div className="p-[1px] rounded-2xl bg-gradient-to-b from-[#9B9B9B60] to-[#35353580]">
              <div key={msg.id ?? index} className="p-3 bg-[#111111] text-white rounded-2xl">
                {msg.type === "final_message" ? (
                  <>
                    <p className="font-bold text-white">✨ Final Message:</p>
                    <p className="whitespace-pre-wrap ">{msg.message}</p>
                  </>
                ) : msg.status === "streaming" ? (
                  <>
                    <div className="flex justify-between mb-4">
                      <p className="text-[#D9D9D9]">Apply Changes?</p>

                      <div className="flex gap-2">
                        <button className="w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center text-xl shadow-md hover:bg-red-600 active:scale-75 transition-transform duration-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-white hover:text-gray-300 transition-transform duration-300 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>


                        <button className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xl shadow-md hover:bg-green-600  active:scale-75 transition-transform duration-100">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </button>
                      </div>
                    </div>


                    <div className="relative">

                      <div className="p-[1px] rounded-t-xl rounded-b border-[1px] border-[#44444450] bg-gradient-to-b from-[#161616] to-[#212121] mb-1">
                        <p className="text-[15px] overflow-hidden whitespace-nowrap animate-typing m-4 text-[#D9D9D980]">{msg.token}</p>
                      </div>

                      <button className="absolute w-9 h-9 rounded-full left-1/2 transform -translate-x-1/2 top-[40%] bg-[#111111] text-white flex items-center justify-center text-xl shadow-md hover:bg-red-600 active:scale-75 transition-transform duration-100">
                        <svg className="w-5 h-5 text-white-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1v12m0 0 4-4m-4 4L1 9" />
                        </svg>
                      </button>

                      <div className="p-[1px] rounded-t rounded-b-xl border-[1px] border-[#9B9B9B10] bg-gradient-to-b from-[#FFFFFF50] to-[#9999993D]">
                        <p className="text-[15px] whitespace-normal break-words animate-typing m-4 mt-6">{msg.token}</p>
                      </div>

                    </div>

                  </>
                ) : (
                  <p className="whitespace-pre-wrap">{msg.content || msg.text || "No content"}</p>
                )}
              </div>

            </div>
          ))}
      </div>

      <div className="relative flex items-center bg-[#2B2B2B] border-[0.85px] border-[#4F4E4E] rounded-2xl">

        <button className="absolute top-1 left-2 w-6 h-6 m-1 rounded-full bg-[#575757] flex items-center justify-center hover:bg-[#A9A9A9] active:scale-125 transition-transform duration-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white transition-transform duration-300 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
          </svg>
        </button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 rounded bg-transparent border-none outline-none text-[#000000] placeholder-[#A9A9A9] resize-none h-24"
          placeholder="Ask Anything"
        />
      </div>

    </div>
  );
};

export default StreamingChat;