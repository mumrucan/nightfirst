import React from 'react';
import Slider from '../components/Slider';
import { ChevronRightIcon } from '@heroicons/react/solid';

export default function Home() {
  return (
    <div>
      <div className="flex flex-col items-center ">
        <div className="flex justify-between items-center w-1/2">
          <div className="font-body text-black-700 text-lg		font-bold pt-10">
            <p>Popular going out destinations</p>
          </div>
          <div className="flex items-center mt-11">
            <div className="flex items-center font-body text-gray-400 text-sm	 ">
              <p>All destinations</p>
            </div>
            <div className="font-body  text-sm		text-gray-400	 w-4 h-4 ">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <Slider x={'6'} />

        <div className="flex justify-between items-center w-1/2">
          <div>
            <div className="font-body text-black-700 text-lg		font-bold pt-10">
              <p>World's Top Clubs</p>
            </div>
            <div className="font-body text-gray-400 ">
              <p>The best clubs in the world</p>
            </div>
          </div>

          <div className="flex items-center mt-16">
            <div className="flex items-center font-body text-gray-400 text-sm	 ">
              <p>All clubs</p>
            </div>
            <div className="font-body  text-sm		text-gray-400	 w-4 h-4 ">
              <ChevronRightIcon />
            </div>
          </div>
        </div>

        <Slider x={'4'} />
        <div className="flex justify-between items-center w-1/2">
          <div>
            <div className="font-body text-black-700 text-lg		font-bold pt-10">
              <p>Popular bars</p>
            </div>
            <div className="font-body text-gray-400 ">
              <p>The most famous bars and lounges worldwide</p>
            </div>
          </div>
          <div className="flex items-center mt-16">
            <div className="flex items-center font-body text-gray-400 text-sm	 ">
              <p>All bars</p>
            </div>
            <div className="font-body  text-sm		text-gray-400	 w-4 h-4 ">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <Slider x={'4'} />

        <div className="flex justify-between items-center w-1/2">
          <div>
            <div className="font-body text-black-700 text-lg		font-bold pt-10">
              <p>Popular restaurants</p>
            </div>
            <div className="font-body text-gray-400 ">
              <p>The most famous restaurants worldwide</p>
            </div>
          </div>
          <div className="flex items-center mt-16">
            <div className="flex items-center font-body text-gray-400 text-sm	 ">
              <p>All restaurants</p>
            </div>
            <div className="font-body  text-sm		text-gray-400	 w-4 h-4 ">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <Slider x={'4'} />

        <div className="flex justify-between items-center w-1/2">
          <div>
            <div className="font-body text-black-700 text-lg		font-bold pt-10">
              <p>Trending Events</p>
            </div>
            <div className="font-body text-gray-400 ">
              <p>Most popular events in the world right now</p>
            </div>
          </div>
          <div className="flex items-center mt-16">
            <div className="flex items-center font-body text-gray-400 text-sm	 ">
              <p>All events</p>
            </div>
            <div className="font-body  text-sm		text-gray-400	 w-4 h-4 ">
              <ChevronRightIcon />
            </div>
          </div>
        </div>
        <Slider x={'4'} />
      </div>
    </div>
  );
}
