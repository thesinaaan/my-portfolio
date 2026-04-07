"use client";

import { useEffect, useRef } from "react";

export function ShootingStars() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Array<{ id: number; x: number; y: number; len: number; speed: number; opacity: number; life: number; maxLife: number }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", resize);
    resize();

    const createStar = () => {
      const star = {
        id: Math.random(),
        x: Math.random() * canvas.width * 2 - canvas.width,
        y: Math.random() * -canvas.height, // Start above top
        len: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 5,
        opacity: Math.random() * 0.4 + 0.1, // Very low opacity (max 0.5)
        life: 0,
        maxLife: Math.random() * 100 + 50,
      };
      stars.push(star);
    };

    // 3-4 shooting stars per minute means roughly one every 15-20 seconds.
    const starInterval = setInterval(() => {
      createStar();
    }, 15000);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      stars.forEach((star, index) => {
        star.life++;
        // Move diagonally down-right
        star.x += star.speed;
        star.y += star.speed;
        
        // Dynamic opacity based on life (fade in and out)
        const currentOpacity = star.life < 10 
            ? star.opacity * (star.life / 10) 
            : star.life > star.maxLife - 20 
                ? star.opacity * ((star.maxLife - star.life) / 20)
                : star.opacity;

        ctx.beginPath();
        // The gradient creates the tail effect
        const grad = ctx.createLinearGradient(star.x, star.y, star.x - star.len, star.y - star.len);
        grad.addColorStop(0, `rgba(255, 255, 255, ${currentOpacity})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`);
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1;
        ctx.moveTo(star.x - star.len, star.y - star.len);
        ctx.lineTo(star.x, star.y);
        ctx.stroke();

        // Remove if dead or off screen
        if (star.life >= star.maxLife || star.y > canvas.height || star.x > canvas.width) {
          stars.splice(index, 1);
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      clearInterval(starInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-[0.05] mix-blend-screen"
    />
  );
}
