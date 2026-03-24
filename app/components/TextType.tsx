"use client";

import React, { useEffect, useState } from "react";

interface TextTypeProps {
  text?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  cursorCharacter?: string;
  texts?: string[];
  variableSpeedEnabled?: boolean;
  variableSpeedMin?: number;
  variableSpeedMax?: number;
  cursorBlinkDuration?: number;
}

const TextType: React.FC<TextTypeProps> = ({
  text = [],
  texts = [],
  typingSpeed = 75,
  deletingSpeed = 50,
  pauseDuration = 1500,
  showCursor = true,
  cursorCharacter = "_",
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
}) => {
  const messages = text.length ? text : texts;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    if (!messages.length) return;

    const updateInterval = setInterval(() => {
      const fullText = messages[currentIndex];
      const nextText = isDeleting
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1);

      setDisplayText(nextText);

      if (!isDeleting && nextText === fullText) {
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && nextText === "") {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % messages.length);
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearInterval(updateInterval);
  }, [displayText, isDeleting, currentIndex, messages, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    if (!showCursor) return;
    const blink = setInterval(() => {
      setCursorVisible((v) => !v);
    }, cursorBlinkDuration * 1000);
    return () => clearInterval(blink);
  }, [showCursor, cursorBlinkDuration]);

  return (
    <span className="inline-flex items-center gap-1">
      <span>{displayText}</span>
      {showCursor && <span className={cursorVisible ? "opacity-100" : "opacity-0"}>{cursorCharacter}</span>}
    </span>
  );
};

export default TextType;
