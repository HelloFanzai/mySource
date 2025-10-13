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

const initialMessages: Message[] = [
{"status": "streaming", "token": "[]", "text": "[]"},

{"status": "streaming", "token": "I'll improve the note card and one", "text": "[]I'll improve the note card and one"},

{"status": "streaming", "token": " action card in the second moment to better match your channel", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel"},

 {"status": "streaming", "token": "'s style and enhance the dramatic impact.", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact."},

 {"status": "streaming", "token": "<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card>", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card>"},

 {"status": "streaming", "token": "<edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>"},

 {"status": "streaming", "token": "[]", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]"},

 {"status": "streaming", "token": "I", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I"},

 {"status": "streaming", "token": "'ve enhanced both cards to better capture your signature style:\n\n1", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1"},

 {"status": "streaming", "token": ". **Note card**: Changed the text overlay to \"POV:", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV:"},

 {"status": "streaming", "token": " The Noob Has A Secret Plan \ud83d\udc80\" with", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with"},

 {"status": "streaming", "token": " dramatic zoom effect - this creates more intrigue and uses the PO", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the PO"},

 {"status": "streaming", "token": "V format that performs well in your content.\n\n2. **Action card**:", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**:"},

 {"status": "streaming", "token": " Added \"confident swagger\" and \"synchronized to music beat\" to", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to"},

 {"status": "streaming", "token": " the bed reveal moment - this emphasizes the satisf", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisf"},

 {"status": "streaming", "token": "ying music sync and character confidence that your audience loves in", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in"},

 {"status": "streaming", "token": " these twist moments.\n\nThese improvements maintain the", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in these twist moments.\n\nThese improvements maintain the"},

 {"status": "streaming", "token": " comedic tension while adding the polished editing", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in these twist moments.\n\nThese improvements maintain the comedic tension while adding the polished editing"},

 {"status": "streaming", "token": " touches that make your videos so engaging.", "text": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in these twist moments.\n\nThese improvements maintain the comedic tension while adding the polished editing touches that make your videos so engaging."},

 {"type": "final_message", "message": "[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.<edit_card>\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First \ud83d\udc80\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan \ud83d\udc80\"\n</edit_card><edit_card>\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n</edit_card>[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan \ud83d\udc80\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in these twist moments.\n\nThese improvements maintain the comedic tension while adding the polished editing touches that make your videos so engaging."},

 {"assistantMessageId":"6e52fde4-c18d-4e70-8f48-455b6adecbd4","conversationId":"c18f617a-dff4-47a1-b5aa-8de32a736468","message":"[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.\u003cedit_card\u003e\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First 💀\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan 💀\"\n\u003c/edit_card\u003e\u003cedit_card\u003e\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n\u003c/edit_card\u003e[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan 💀\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in these twist moments.\n\nThese improvements maintain the comedic tension while adding the polished editing touches that make your videos so engaging.","status":"complete","text":"[]I'll improve the note card and one action card in the second moment to better match your channel's style and enhance the dramatic impact.\u003cedit_card\u003e\ncardid:30aebfb2-8072-4b73-9c3f-116183ef52e1\nold_text:Text overlay: \"When The Noob Beats The Dragon First 💀\"\nnew_text:Text overlay appears with dramatic zoom: \"POV: The Noob Has A Secret Plan 💀\"\n\u003c/edit_card\u003e\u003cedit_card\u003e\ncardid:caca5ac8-effe-4380-8346-71b435ad5404\nold_text:Noob suddenly pulls out a bed from inventory\nnew_text:Noob casually pulls out a bed from inventory with confident swagger, synchronized to music beat\n\u003c/edit_card\u003e[]I've enhanced both cards to better capture your signature style:\n\n1. **Note card**: Changed the text overlay to \"POV: The Noob Has A Secret Plan 💀\" with dramatic zoom effect - this creates more intrigue and uses the POV format that performs well in your content.\n\n2. **Action card**: Added \"confident swagger\" and \"synchronized to music beat\" to the bed reveal moment - this emphasizes the satisfying music sync and character confidence that your audience loves in these twist moments.\n\nThese improvements maintain the comedic tension while adding the polished editing touches that make your videos so engaging.","type":"outline-chat","userMessageId":"6c8a87d9-2de2-4b37-917e-400dd964403b"}

];

const StreamingChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [streamingChunks, setStreamingChunks] = useState<string[]>([]);

   // 每 500ms 加载一段内容
  useEffect(() => {
    if (streamingChunks.length === 0) return;

    const interval = setInterval(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(),
          token: streamingChunks[0],
          status: "streaming",
        },
      ]);
      setStreamingChunks((chunks) => chunks.slice(1));
    }, 1500);

    return () => clearInterval(interval);
  }, [streamingChunks]);

  // 处理发送
  const handleSend = () => {
    if (!input.trim()) return;
    const splitChunks = input.trim().split(" "); // 按空格拆分
    setStreamingChunks(splitChunks);
    setInput("");
  };

  return (
    <div className="bg-black text-white min-h-screen px-4 py-10 max-w-3xl mx-auto">

      <div className="flex justify-between mb-4">

        <p className="">New Chat</p>

        <div className="flex text-white font-mono text-lg">
  {/* 打字机文本 */}


  {/* 闪烁光标 */}
  {/* <span className="border-r-2 border-white animate-blink">&nbsp;</span> */}
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

      

      <div className="space-y-4 bg-black border border-white p-4 rounded shadow mb-4">
        {messages.map((msg, index) => (
          <div key={msg.id ?? index} className="p-3 rounded border border-white text-white">
            {msg.type === "final_message" ? (
              <>
                <p className="font-bold text-white">✨ Final Message:</p>
                <p className="whitespace-pre-wrap">{msg.message}</p>
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
                  <p className="overflow-hidden whitespace-nowrap animate-typing">{msg.token}</p>
                </>
            ) : (
              <p className="whitespace-pre-wrap">{msg.content || msg.text || "No content"}</p>
            )}
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
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
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