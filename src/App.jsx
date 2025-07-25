import React, { useState, useEffect } from "react";
import { Heart, Sparkles, Star } from "lucide-react";

const RomanticDisplay = () => {
  const [hearts, setHearts] = useState([]);
  const [messages, setMessages] = useState([]);
  const [floatingImages, setFloatingImages] = useState([]);
  const [showMainMessage, setShowMainMessage] = useState(false);
  const [particles, setParticles] = useState([]);

  const loveMessages = [
    "I love you so much ❤️",
    "You mean everything to me 💕",
    "My heart belongs to you 💖",
    "Forever and always 💗",
    "You're my everything 💝",
    "I adore you completely 🥰",
    "You're my soulmate 💑",
    "My love for you is infinite ♾️",
    "You make me complete 💫",
    "I'm so lucky to have you 🍀",
    "Together forever 💍",
    "You're my dream come true ✨",
    "My one and only 💎",
    "You complete me 🌟",
  ];

  // Array of image paths
  const imagePaths = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
    "/images/photo10.jpg",
  ];

  // Generate floating particles
  useEffect(() => {
    const interval = setInterval(() => {
      const newParticle = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 3,
        size: Math.random() * 15 + 5,
        duration: Math.random() * 4 + 6,
        type: Math.random() > 0.5 ? "star" : "sparkle",
      };

      setParticles((prev) => [...prev, newParticle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, (newParticle.duration + newParticle.delay) * 1000);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  // Generate floating images
  useEffect(() => {
    const interval = setInterval(() => {
      const randomImage =
        imagePaths[Math.floor(Math.random() * imagePaths.length)];
      const side = Math.random() > 0.5 ? "left" : "right";
      const newImage = {
        id: Date.now() + Math.random(),
        src: randomImage,
        side: side,
        startPos: side === "left" ? -150 : window.innerWidth + 150,
        top: Math.random() * 60 + 15,
        delay: Math.random() * 3,
        duration: Math.random() * 10 + 15,
        size: Math.random() * 80 + 100,
        rotation: Math.random() * 30 - 15,
      };

      setFloatingImages((prev) => [...prev, newImage]);

      setTimeout(() => {
        setFloatingImages((prev) =>
          prev.filter((img) => img.id !== newImage.id)
        );
      }, (newImage.duration + newImage.delay) * 1000);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Generate floating hearts
  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        size: Math.random() * 25 + 20,
        duration: Math.random() * 4 + 5,
        color: Math.random() > 0.7 ? "gold" : "red",
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((heart) => heart.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  // Generate floating messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessage =
        loveMessages[Math.floor(Math.random() * loveMessages.length)];
      const newMessage = {
        id: Date.now() + Math.random(),
        text: randomMessage,
        left: Math.random() * 70 + 15,
        delay: Math.random() * 3,
        duration: Math.random() * 3 + 6,
      };

      setMessages((prev) => [...prev, newMessage]);

      setTimeout(() => {
        setMessages((prev) => prev.filter((msg) => msg.id !== newMessage.id));
      }, (newMessage.duration + newMessage.delay) * 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Show main message after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMainMessage(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-pink-900 to-red-900">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-pink-500/20 to-purple-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.3)_100%)]"></div>
      </div>

      {/* Animated mesh background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/30 via-purple-400/30 to-red-400/30 animate-gradient-x"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-pink-300/10 to-transparent animate-pulse"></div>
      </div>

      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute z-10"
          style={{
            left: `${particle.left}%`,
            bottom: "-30px",
            fontSize: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            animation: `floatUp ${particle.duration}s ease-out ${particle.delay}s forwards`,
          }}
        >
          {particle.type === "star" ? (
            <Star className="text-yellow-300 fill-current animate-spin" />
          ) : (
            <Sparkles className="text-pink-300 fill-current animate-pulse" />
          )}
        </div>
      ))}

      {/* Background hearts pattern */}
      <div className="absolute inset-0 opacity-15">
        {[...Array(30)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg) scale(${
                Math.random() * 0.8 + 0.5
              })`,
              fontSize: `${Math.random() * 40 + 15}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* Floating images with enhanced effects */}
      {floatingImages.map((image) => (
        <div
          key={image.id}
          className="absolute z-20"
          style={{
            left: image.startPos,
            top: `${image.top}%`,
            width: `${image.size}px`,
            height: `${image.size}px`,
            transform: `rotate(${image.rotation}deg)`,
            animationDelay: `${image.delay}s`,
            animationDuration: `${image.duration}s`,
            animation: `floatAcross ${image.duration}s linear ${image.delay}s forwards`,
          }}
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-gradient-to-r from-pink-400 via-purple-400 to-red-400 p-1">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              <img
                src={image.src}
                alt="Love memory"
                className="w-full h-full object-cover hover:scale-110 transition-all duration-500 filter brightness-110 contrast-110"
                onError={(e) => {
                  e.target.style.display = "none";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/40 via-transparent to-purple-600/20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-pink-500/30 animate-pulse"></div>
              {/* Sparkle overlay */}
              <div className="absolute top-2 right-2">
                <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Enhanced floating hearts */}
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className={`absolute z-15 ${
            heart.color === "gold" ? "text-yellow-400" : "text-red-400"
          } drop-shadow-lg`}
          style={{
            left: `${heart.left}%`,
            bottom: "-50px",
            fontSize: `${heart.size}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            animation: `floatUp ${heart.duration}s ease-out ${heart.delay}s forwards`,
            filter: "drop-shadow(0 0 10px rgba(255, 182, 193, 0.8))",
          }}
        >
          {heart.color === "gold" ? "💛" : "❤️"}
        </div>
      ))}

      {/* Enhanced floating messages */}
      {messages.map((message) => (
        <div
          key={message.id}
          className="absolute z-15 text-white font-semibold px-6 py-3 rounded-full backdrop-blur-xl border border-pink-300/50 shadow-2xl"
          style={{
            left: `${message.left}%`,
            bottom: "-120px",
            animationDelay: `${message.delay}s`,
            animationDuration: `${message.duration}s`,
            animation: `floatUp ${message.duration}s ease-out ${message.delay}s forwards`,
            background:
              "linear-gradient(135deg, rgba(255, 182, 193, 0.3), rgba(221, 160, 221, 0.3), rgba(255, 105, 180, 0.3))",
            boxShadow: "0 8px 32px rgba(255, 182, 193, 0.4)",
            fontSize: "18px",
            fontFamily: '"Dancing Script", cursive, sans-serif',
          }}
        >
          {message.text}
        </div>
      ))}

      {/* Main content with enhanced typography */}
      <div className="relative z-30 flex items-center justify-center min-h-screen p-8">
        <div className="text-center">
          {/* Enhanced main heart with glow */}
          <div className="mb-12 relative">
            <div className="absolute inset-0 animate-ping">
              <Heart className="w-32 h-32 text-pink-400/50 mx-auto fill-current" />
            </div>
            <Heart
              className="w-32 h-32 text-red-400 mx-auto fill-current relative z-10 animate-pulse drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 0 30px rgba(255, 182, 193, 0.8))",
              }}
            />
          </div>

          {/* Enhanced main message with beautiful fonts */}
          <div
            className={`transition-all duration-3000 ${
              showMainMessage
                ? "opacity-100 transform translate-y-0"
                : "opacity-0 transform translate-y-20"
            }`}
          >
            <h1
              className="text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-red-300 to-purple-200 mb-8 animate-pulse drop-shadow-2xl"
              style={{
                fontFamily: '"Great Vibes", "Dancing Script", cursive, serif',
                textShadow:
                  "0 0 50px rgba(255, 182, 193, 0.8), 0 0 100px rgba(255, 182, 193, 0.4)",
                WebkitTextStroke: "2px rgba(255, 182, 193, 0.3)",
              }}
            >
              I Love You
            </h1>

            <h2
              className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-200 via-pink-300 to-purple-200 mb-12 animate-pulse"
              style={{
                fontFamily: '"Great Vibes", "Dancing Script", cursive, serif',
                textShadow: "0 0 30px rgba(255, 105, 180, 0.8)",
                WebkitTextStroke: "1px rgba(255, 105, 180, 0.2)",
              }}
            >
              So Much
            </h2>

            <div
              className="text-2xl md:text-3xl text-pink-100 mb-12 leading-relaxed max-w-3xl mx-auto font-light"
              style={{
                fontFamily: '"Playfair Display", "Georgia", serif',
                textShadow: "0 2px 20px rgba(0, 0, 0, 0.5)",
              }}
            >
              <p
                className="mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.5s" }}
              >
                ✨ You are the light of my life ✨
              </p>
              <p
                className="mb-6 animate-fade-in-up"
                style={{ animationDelay: "1s" }}
              >
                💎 Every moment with you is a treasure 💎
              </p>
              <p
                className="animate-fade-in-up"
                style={{ animationDelay: "1.5s" }}
              >
                💓 My heart beats only for you 💓
              </p>
            </div>

            {/* Enhanced interactive button */}
            <button
              onClick={() => {
                // Create spectacular burst of hearts and particles
                for (let i = 0; i < 20; i++) {
                  setTimeout(() => {
                    const newHeart = {
                      id: Date.now() + Math.random(),
                      left: 40 + Math.random() * 20,
                      delay: 0,
                      size: Math.random() * 40 + 30,
                      duration: Math.random() * 3 + 3,
                      color: Math.random() > 0.5 ? "gold" : "red",
                    };
                    setHearts((prev) => [...prev, newHeart]);

                    // Add particles too
                    const newParticle = {
                      id: Date.now() + Math.random() + 1000,
                      left: 40 + Math.random() * 20,
                      delay: 0,
                      size: Math.random() * 20 + 10,
                      duration: Math.random() * 2 + 4,
                      type: Math.random() > 0.5 ? "star" : "sparkle",
                    };
                    setParticles((prev) => [...prev, newParticle]);
                  }, i * 150);
                }
              }}
              className="relative group bg-gradient-to-r from-pink-500 via-red-500 to-purple-500 hover:from-pink-600 hover:via-red-600 hover:to-purple-600 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-500 transform hover:scale-110 shadow-2xl border-2 border-pink-300/50 overflow-hidden"
              style={{
                fontFamily: '"Dancing Script", cursive, sans-serif',
                boxShadow:
                  "0 10px 40px rgba(255, 182, 193, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              }}
            >
              <span className="relative z-10">Click for more love! 💕✨</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced sparkle effects */}
      <div className="absolute inset-0 pointer-events-none z-5">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `hsl(${Math.random() * 60 + 300}, 70%, 80%)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px currentColor`,
            }}
          />
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Dancing+Script:wght@400;600;700&family=Playfair+Display:wght@300;400;600&display=swap');

        @keyframes floatUp {
          0% {
            transform: translateY(0) rotate(0deg) scale(0.8);
            opacity: 0.8;
          }
          20% {
            opacity: 1;
            transform: translateY(-20vh) rotate(72deg) scale(1);
          }
          80% {
            opacity: 1;
            transform: translateY(-80vh) rotate(288deg) scale(1.1);
          }
          100% {
            transform: translateY(-110vh) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }

        @keyframes floatAcross {
          0% {
            transform: translateX(0) rotate(0deg) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateX(50px) rotate(36deg) scale(1);
          }
          90% {
            opacity: 1;
            transform: translateX(calc(100vw - 100px)) rotate(324deg) scale(1);
          }
          100% {
            transform: translateX(100vw) rotate(360deg) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }

        @keyframes gradient-x {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          animation: gradient-x 15s ease infinite;
        }

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
          opacity: 0;
        }

        @media (max-width: 768px) {
          @keyframes floatAcross {
            0% {
              transform: translateX(0) rotate(0deg) scale(0.8);
              opacity: 0;
            }
            10% {
              opacity: 1;
              transform: translateX(30px) rotate(36deg) scale(1);
            }
            90% {
              opacity: 1;
              transform: translateX(calc(100vw - 50px)) rotate(324deg) scale(1);
            }
            100% {
              transform: translateX(100vw) rotate(360deg) scale(0.8);
              opacity: 0;
            }
          }
        }
      `}</style>
    </div>
  );
};

export default RomanticDisplay;
