"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/images/portfolio/braces.avif",
  "/images/portfolio/citadel.avif",
  "/images/portfolio/masters_union.avif",
  "/images/portfolio/salescode.avif",
];

export default function Strip() {
	const ref = useRef(null);
	const [inView, setInView] = useState(false);

	useEffect(() => {
		const observer = new window.IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setInView(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.2 }
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => observer.disconnect();
	}, []);

	return (
		<div
			ref={ref}
			className={`w-full bg-black bg-[url('/images/hero/strip-bg.png')] bg-repeat-x py-8 transition-all duration-700 ease-out
				${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}
			`}
		>
			<div className="flex flex-row justify-between items-center text-center mt-12">
				{/* ...existing strip content... */}
				<div className="flex-1">
					<div className="flex flex-col items-center">
						<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#0F0" fillOpacity="0.1"/><path d="M16 8a6 6 0 0 0-6 6c0 4.5 6 10 6 10s6-5.5 6-10a6 6 0 0 0-6-6Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" fill="#0F0"/></svg>
						<div className="mt-2 font-bold text-white text-lg">BASED IN GURGAON,</div>
						<div className="text-gray-400 text-sm">INDIA</div>
					</div>
				</div>
				<div className="flex-1">
					<div className="flex flex-col items-center">
						<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity="0.1"/><path d="M16 8c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8Zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#fff"/></svg>
						<div className="mt-2 font-bold text-white text-lg">AVAILABLE ALL AROUND</div>
						<div className="text-gray-400 text-sm">WORLDWIDE</div>
					</div>
				</div>
				<div className="flex-1">
					<div className="flex flex-col items-center">
						<svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16" fill="#09f" fillOpacity="0.1"/><path d="M16 8a8 8 0 1 0 0 16 8 8 0 0 0 0-16Zm0 14a6 6 0 1 1 0-12 6 6 0 0 1 0 12Zm0-10a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="#09f"/></svg>
						<div className="mt-2 font-bold text-white text-lg">MEDIA AGENCY</div>
						<div className="text-gray-400 text-sm">MEDIA THAT CONVERTS</div>
					</div>
				</div>
			</div>
		</div>
	);
}
