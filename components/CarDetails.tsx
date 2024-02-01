"use client";

import React from "react";
import { useState } from "react";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";
import { generateCarImageUrl } from "@/utils";

interface CarDetailsProps {
  isOpen: boolean;
  closeModel: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModel, car }: CarDetailsProps) => {
  const [isShowing, setIsShowing] = useState(false);
  return (
    <>
      <Transition show={isOpen} as={Fragment} appear>
        <Dialog as="div" className="relative z-10" onClose={closeModel}>
          <Transition.Child
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex-1 flex flex-col gap-3">
                        <div className="relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg">
                            <Image src={generateCarImageUrl(car)} alt="car model" fill priority className="object-contain" />
                        </div>

                        <div className="flex gap-3">
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                            <Image src={generateCarImageUrl(car, '29')} alt="car model" fill priority className="object-contain" />
                            </div>
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                            <Image src={generateCarImageUrl(car, '33')} alt="car model" fill priority className="object-contain" />
                            </div>
                            <div className="flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg">
                            <Image src={generateCarImageUrl(car, '13')} alt="car model" fill priority className="object-contain" />
                            </div>
                        </div>
                    </div>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {car.make} {car.model}
                    </h5>
                  </a>

                  <div className="relative flex w-full mt-5">
                    <div className="flex group-hover:invisible w-full justify-between text-gray">
                    <div className="mt-3 flex flex-wrap gap-4">
                            {Object.entries(car).map(([key, value]) => (
                                <div className="flex justify-between gap-5 w-full text-right" key={key}>
                                    <h4 className="textgray capitalize">{key.split("_").join(" ")}</h4>
                                    <p className="text-black-100 font-semibold">{value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <a
                      className="inline-flex items-center px-3 py-2 mt text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      onClick={closeModel}
                    >
                      Close
                      <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                        onClick={closeModel}
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;
