import React, { useState, useEffect, useRef } from 'react';
import './DecryptedText.css';

/**
 * Decrypted-text style animation: scrambles random chars then reveals real text.
 * Inspired by https://reactbits.dev/text-animations/decrypted-text
 */
const CHARS = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

function DecryptedText({
  text,
  speed = 60,
  maxIterations = 10,
  sequential = true,
  revealDirection = 'start',
  animateOn = 'view',
  delay = 0,
  className = '',
  as: Tag = 'span',
}) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!text) return;

    const trigger = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;

      const target = text;
      const len = target.length;
      const indices = sequential
        ? revealDirection === 'end'
          ? Array.from({ length: len }, (_, i) => len - 1 - i)
          : revealDirection === 'center'
            ? (() => {
                const a = [];
                let l = 0, r = len - 1;
                while (l <= r) {
                  if (l === r) a.push(l);
                  else { a.push(l); a.push(r); }
                  l++; r--;
                }
                return a;
              })()
            : Array.from({ length: len }, (_, i) => i)
        : null;

      let iteration = 0;
      const getScramble = () => {
        return target
          .split('')
          .map((c, i) => (c === ' ' ? ' ' : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join('');
      };

      if (sequential && indices) {
        const revealed = new Set();
        setDisplay(getScramble());

        const interval = setInterval(() => {
          const nextIdx = indices[revealed.size];
          if (nextIdx === undefined) {
            setDisplay(target);
            setDone(true);
            clearInterval(interval);
            return;
          }
          setDisplay((prev) => {
            const arr = prev.split('');
            arr[nextIdx] = target[nextIdx];
            return arr.join('');
          });
          revealed.add(nextIdx);
          if (revealed.size >= len) {
            setDisplay(target);
            setDone(true);
            clearInterval(interval);
          }
        }, speed);
        return () => clearInterval(interval);
      }

      // Non-sequential: scramble then reveal
      setDisplay(getScramble());
      let count = 0;
      const interval = setInterval(() => {
        count++;
        if (count < maxIterations) {
          setDisplay(getScramble());
        } else {
          setDisplay(target);
          setDone(true);
          clearInterval(interval);
        }
      }, speed);
      return () => clearInterval(interval);
    };

    if (animateOn === 'view') {
      const el = ref.current;
      if (!el) return;
      let timeoutId;
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) timeoutId = setTimeout(trigger, delay);
        },
        { threshold: 0.1 }
      );
      observer.observe(el);
      return () => {
        observer.disconnect();
        if (timeoutId) clearTimeout(timeoutId);
      };
    }

    const t = setTimeout(trigger, 300 + delay);
    return () => clearTimeout(t);
  }, [text, speed, maxIterations, sequential, revealDirection, animateOn, delay]);

  const show = display || text;
  return (
    <Tag ref={ref} className={`decrypted-text ${done ? 'decrypted-text--revealed' : ''} ${className}`.trim()}>
      {show}
    </Tag>
  );
}

export default DecryptedText;
