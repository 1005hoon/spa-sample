"use client";

import React, { useEffect } from 'react';
import softlyService from "../lib/softly.service";
// import { User } from "next-auth";

// interface ChatWidgetProps {
//   user?: {
//     email: string;
//     name: string;
//   };
// }

const ChatWidget = () => {
  useEffect(() => {
    // if (user.email !== "sales@softly.ai") {
    //   return;
    // }

    softlyService.loadScript();
    softlyService.init({
      chatbotId: "0c3f5177-12af-46c8-9cb7-183be0828c3a",
      // userId: "1234", // "user.id",
      // userName: "John Doe", // "user.name",
    });
  }, []);

  return <></>;
}

export default ChatWidget;
