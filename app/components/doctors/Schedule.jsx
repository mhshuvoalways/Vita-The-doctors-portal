"use client";

import ArrowLeftIcon from "@/public/icons/arrowleft.svg";
import ArrowRightIcon from "@/public/icons/arrowright.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const scheduleItems = [
  {
    day: "Mardi",
    date: "10 Avr",
    times: [
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
    ],
  },
  { day: "Mercredi", date: "11 Avr", times: [] },
  { day: "Jeudi", date: "12 Avr", times: ["12.00", "17.30"] },
  { day: "Vendredi", date: "13 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Dimanche", date: "15 Avr", times: [] },
  {
    day: "Mardi",
    date: "10 Avr",
    times: [
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
    ],
  },
  { day: "Mercredi", date: "11 Avr", times: [] },
  { day: "Jeudi", date: "12 Avr", times: ["12.00", "17.30"] },
  { day: "Vendredi", date: "13 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Dimanche", date: "15 Avr", times: [] },
  {
    day: "Mardi",
    date: "10 Avr",
    times: [
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
    ],
  },
  { day: "Mercredi", date: "11 Avr", times: [] },
  { day: "Jeudi", date: "12 Avr", times: ["12.00", "17.30"] },
  { day: "Vendredi", date: "13 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Dimanche", date: "15 Avr", times: [] },
  {
    day: "Mardi",
    date: "10 Avr",
    times: [
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
      "15.30",
      "10.00",
    ],
  },
  { day: "Mercredi", date: "11 Avr", times: [] },
  { day: "Jeudi", date: "12 Avr", times: ["12.00", "17.30"] },
  { day: "Vendredi", date: "13 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Samedi", date: "14 Avr", times: [] },
  { day: "Dimanche", date: "15 Avr", times: [] },
];

const Schedule = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [toggleSchedule, setToggleSchedule] = useState(false);

  const itemRef = useRef(null);

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth);
    }
  }, [itemRef]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : scheduleItems.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < scheduleItems.length - 1 ? prevIndex + 1 : 0
    );
  };

  const translateX = `translateX(-${currentIndex * itemWidth}px)`;

  const toggleScheduleHandler = () => {
    setToggleSchedule(!toggleSchedule);
  };

  return (
    <div className="w-full lg:w-7/12">
      <div
        className={`bg-[#D9EFFF66] rounded-3xl overflow-hidden transition-all ${
          toggleSchedule ? "h-80" : "h-48"
        }`}
      >
        <div className="text-center bg-white rounded-xl shadow flex items-center justify-between relative">
          <Image
            src={ArrowLeftIcon}
            alt="Arrow left icon"
            className="py-0.5 px-2 h-11 size-6 cursor-pointer z-10 bg-white rounded-l-2xl"
            onClick={handlePrevClick}
          />
          <div className="flex duration-300" style={{ transform: translateX }}>
            {scheduleItems.map((item, index) => (
              <div
                key={index}
                ref={index === 0 ? itemRef : null}
                className="py-0.5 px-2 h-11"
              >
                <p className="font-medium text-[#4A9ED6]">{item.day}</p>
                <p className="text-xs text-gray-400">{item.date}</p>
                <div className="space-y-1 my-3">
                  {item.times.map((time, timeIndex) => (
                    <p key={timeIndex}>
                      <Link
                        href={"/schedule"}
                        className="bg-[#76C1F3] py-0.5 px-2 rounded-md text-white text-xs"
                      >
                        {time}
                      </Link>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <Image
            src={ArrowRightIcon}
            alt="Arrow right icon"
            className="py-0.5 px-2 h-11 size-6 cursor-pointer z-10 bg-white rounded-r-2xl absolute right-0"
            onClick={handleNextClick}
          />
        </div>
      </div>
      <p
        className="text-center font-semibold text-gray-500 mt-2 underline cursor-pointer hover:text-[#76C1F3]"
        onClick={toggleScheduleHandler}
      >
        Afficher plus d’horaires
      </p>
    </div>
  );
};

export default Schedule;
