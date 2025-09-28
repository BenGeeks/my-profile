"use client";

import React from "react";
import Script from "next/script";

const Page = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: "url('/images/cr_background.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div id="chat-bot-ai" data-bot="192"></div>

      <Script src="https://testapp.chatbuildx.com/static/js/test/test.js" strategy="lazyOnload" />
    </div>
  );
};

export default Page;
