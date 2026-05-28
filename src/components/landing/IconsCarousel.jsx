import { useEffect, useMemo, useState } from "react";

const channels = [
  {
    name: "Telegram",
    image:
      "https://pcfcdn.kommo.com/images/pages/main/channels-carousel/communication_chanel_telegram.png",
  },
  {
    name: "WhatsApp",
    image:
      "https://pcfcdn.kommo.com/images/pages/main/channels-carousel/communication_chanel_whatsapp.png",
  },
  {
    name: "Instagram",
    image:
      "https://pcfcdn.kommo.com/images/pages/main/channels-carousel/communication_chanel_instagram.png",
  },
  {
    name: "Facebook",
    image:
      "https://pcfcdn.kommo.com/images/pages/main/channels-carousel/communication_chanel_fb.png",
  },
  {
    name: "TikTok",
    image:
      "https://pcfcdn.kommo.com/images/pages/main/channels-carousel/communication_chanel_tiktok.png",
  },
];

function getCircularDistance(index, activeIndex, length) {
  const rawDistance = index - activeIndex;
  const half = Math.floor(length / 2);

  if (rawDistance > half) return rawDistance - length;
  if (rawDistance < -half) return rawDistance + length;

  return rawDistance;
}

function getKommoPosition(distance) {
  const absDistance = Math.abs(distance);
  const direction = Math.sign(distance);

  if (absDistance === 0) {
    return {
      translateX: 0,
      scale: 1,
      opacity: 1,
      zIndex: 5,
    };
  }

  if (absDistance === 1) {
    return {
      translateX: direction * 71,
      scale: 0.571429,
      opacity: 0.75,
      zIndex: 4,
    };
  }

  if (absDistance === 2) {
    return {
      translateX: direction * 119,
      scale: 0.342857,
      opacity: 0.2,
      zIndex: 3,
    };
  }

  return {
    translateX: direction * 200,
    scale: 0.0342857,
    opacity: 0,
    zIndex: 1,
  };
}

export default function IconsCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % channels.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  const renderedChannels = useMemo(
    () =>
      channels.map((channel, index) => {
        const distance = getCircularDistance(index, activeIndex, channels.length);
        const position = getKommoPosition(distance);

        return {
          ...channel,
          ...position,
        };
      }),
    [activeIndex]
  );

  return (
    <div
      id="iconsCarousel"
      className="icons-carousel__container relative mx-auto mb-8 flex h-32 w-full max-w-md items-center justify-center overflow-hidden"
      aria-label="Canais conectados ao Haki One"
    >
      {renderedChannels.map((channel) => (
        <div
          key={channel.name}
          className="icons-carousel__item absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center transition-opacity duration-700 ease-out"
          style={{
            opacity: channel.opacity,
            zIndex: channel.zIndex,
          }}
        >
          <button
            type="button"
            aria-label={channel.name}
            className="icons-carousel__mover flex h-20 w-20 items-center justify-center transition-transform duration-700 ease-out focus:outline-none"
            style={{
              transform: `translate3d(${channel.translateX}px, 0px, 0px) scale3d(${channel.scale}, ${channel.scale}, 1)`,
              transformOrigin: "center center",
            }}
            onClick={() =>
              setActiveIndex(
                channels.findIndex((item) => item.name === channel.name)
              )
            }
          >
            <img
              src={channel.image}
              alt=""
              className="icons-carousel__img pointer-events-none block h-20 w-20 select-none object-contain"
              draggable="false"
            />
          </button>
        </div>
      ))}
    </div>
  );
}