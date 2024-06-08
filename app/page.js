"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

const RuleThemAll = [
	{
		header: "Best-In-Class Perks",
		para: "Access seamless benefits directly on a premium card—no outdated dashboards or extra apps needed.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c255e9084457bbdaa1e_Best-In-Class%20Perks%20image.png" loading="lazy" width="454" sizes="(max-width: 767px) 79vw, (max-width: 991px) 23vw, 25vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c255e9084457bbdaa1e_Best-In-Class%20Perks%20image-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c255e9084457bbdaa1e_Best-In-Class%20Perks%20image-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c255e9084457bbdaa1e_Best-In-Class%20Perks%20image.png 908w" class="scale_card-img" />)
	},
	{
		header: "Company Stipends",
		para: "Stipends are instantly applied to any transaction on our card app with a single click, includes location and time controls.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2525f0805e11379015_Company%20Stipends%20image.png" loading="lazy" width="460.5" sizes="(max-width: 767px) 79vw, (max-width: 991px) 23vw, 25vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2525f0805e11379015_Company%20Stipends%20image-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2525f0805e11379015_Company%20Stipends%20image-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2525f0805e11379015_Company%20Stipends%20image.png 921w" class="scale_card-img" />)
	},
	{
		header: "Expense Reporting",
		para: "Integrate with your expense solutions like Concur, or use our complimentary solution to submit reports with a few taps.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2613a03232292fc6d5_Expense%20Reporting%20image.png" loading="lazy" width="454" sizes="(max-width: 767px) 79vw, (max-width: 991px) 23vw, 25vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2613a03232292fc6d5_Expense%20Reporting%20image-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2613a03232292fc6d5_Expense%20Reporting%20image-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a6c2613a03232292fc6d5_Expense%20Reporting%20image.png 908w" class="scale_card-img" />)
	}
]

const MoreRuleThemAll = [
	{
		header: "Frictionlessly built into a mobile credit card experience",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be079ca0456a21781d123_iPhone%2014%20pro%20(2).webp" loading="lazy" width="418" sizes="(max-width: 767px) 79vw, 39vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be079ca0456a21781d123_iPhone%2014%20pro%20(2)-p-500.webp 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be079ca0456a21781d123_iPhone%2014%20pro%20(2)-p-800.webp 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be079ca0456a21781d123_iPhone%2014%20pro%20(2).webp 836w" class="scale_card-img-large" />)
	},
	{
		header: "A simple dashboard to manage submitted reports and review stipends",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be10a33fa8bd0a3ecf03a_dashboard.png" loading="lazy" width="734" sizes="(max-width: 479px) 79vw, (max-width: 767px) 87vw, 39vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be10a33fa8bd0a3ecf03a_dashboard-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be10a33fa8bd0a3ecf03a_dashboard-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be10a33fa8bd0a3ecf03a_dashboard-p-1080.png 1080w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660be10a33fa8bd0a3ecf03a_dashboard.png 1468w" class="scale_card-img-large" />)
	}
]

const BuiltForScale = [
	{
		header: "Perks that employees actually use",
		para: "Offer benefits your team will love to boost morale and engagement engagement.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a7aa33c6e508d7f5d0f1c_Perks%20that%20employees%20image.png" loading="lazy" sizes="(max-width: 479px) 79vw, (max-width: 767px) 87vw, (max-width: 991px) 39vw, 17vw" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a7aa33c6e508d7f5d0f1c_Perks%20that%20employees%20image-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a7aa33c6e508d7f5d0f1c_Perks%20that%20employees%20image.png 642w" alt="" class="scale_card-small" />)
	},
	{
		header: "Better control of policy policy",
		para: "Streamline policy creation & enforcement for a more efficient and effective workplace.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/662ba8d8b9f7fb51351f1149_better-control-of-policy.png" loading="lazy" width="321" sizes="(max-width: 479px) 79vw, (max-width: 767px) 87vw, (max-width: 991px) 39vw, 17vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/662ba8d8b9f7fb51351f1149_better-control-of-policy-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/662ba8d8b9f7fb51351f1149_better-control-of-policy.png 642w" class="scale_card-small" />)
	},
	{
		header: "Complete accounting & HRIS integrations",
		para: "Simplify your finances with seamless connections to your accounting software.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6615761cff0d105e5a3efbd7_Frame%201321315372.png" loading="lazy" width="180" sizes="(max-width: 479px) 79vw, (max-width: 767px) 87vw, (max-width: 991px) 39vw, 16vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6615761cff0d105e5a3efbd7_Frame%201321315372-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6615761cff0d105e5a3efbd7_Frame%201321315372.png 602w" class="scale_card-small" />)
	},
	{
		header: "International service and support",
		para: "Empower your global workforce with resources and assistance wherever they are.",
		img: (<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a7aa3d4d165dd98fd345d_International%20service%20image.png" loading="lazy" sizes="(max-width: 479px) 79vw, (max-width: 767px) 87vw, (max-width: 991px) 39vw, 17vw" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a7aa3d4d165dd98fd345d_International%20service%20image-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660a7aa3d4d165dd98fd345d_International%20service%20image.png 642w" alt="" class="scale_card-small" />)
	},
]

export default function Home() {

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 2 }}
		>
			<div className="p-[20px] md:p-[30px] !pb-[0px]">
				<div className="fixed_bar gap-5">
					<div className="fontFamilyMdPrime px-[5px] font-light text-[1rem] leading-normal w-[100px]">Join Waitlist</div>
					<div className="fixed_bar-verticalline"></div>
					<div className="fontFamilyMdPrime px-[5px] flex gap-3 items-center font-light"><span className="font-light text-[1rem] leading-normal w-[100px]">Know More</span>
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
							<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
						</svg>
					</div>
				</div>
				<div className="flex items-center gap-4 justify-center">
					{/* <Image
						className=""
						src="/cosmoscardsvg.svg"
						alt="Cosmos Card Logo"
						width={250}
						height={250}
						priority
					/> */}
					<svg className="md:w-[300px]" width="200" height="50" viewBox="0 0 1902 277" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fill-rule="evenodd" clip-rule="evenodd" d="M125.419 261.814C177.236 261.814 221.713 230.391 240.835 185.561C217.921 180.925 200.67 160.672 200.67 136.39C200.67 112.11 217.919 91.8582 240.832 87.2206C221.708 42.395 177.233 10.9756 125.419 10.9756C56.1521 10.9756 0 67.1277 0 136.395C0 205.662 56.1521 261.814 125.419 261.814ZM125.419 186.558C153.126 186.558 175.587 164.097 175.587 136.39C175.587 108.684 153.126 86.2227 125.419 86.2227C97.7126 86.2227 75.2517 108.684 75.2517 136.39C75.2517 164.097 97.7126 186.558 125.419 186.558ZM250.843 158.34C262.964 158.34 272.791 148.513 272.791 136.391C272.791 124.269 262.964 114.443 250.843 114.443C238.721 114.443 228.894 124.269 228.894 136.391C228.894 148.513 238.721 158.34 250.843 158.34Z" fill="currentColor" />
						<path d="M498.07 202.117C486.026 206.023 473.005 207.977 459.008 207.977C410.18 207.977 385.766 183.725 385.766 135.223C385.766 89.3242 410.18 66.375 459.008 66.375C473.005 66.375 486.026 68.3281 498.07 72.2344V87.8594C486.026 83.3021 473.656 81.0234 460.961 81.0234C422.875 81.0234 403.832 99.0898 403.832 135.223C403.832 173.96 422.875 193.328 460.961 193.328C473.656 193.328 486.026 191.049 498.07 186.492V202.117ZM542.113 136.785C542.113 174.48 559.138 193.328 593.188 193.328C626.521 193.328 643.188 174.48 643.188 136.785C643.188 99.6107 626.521 81.0234 593.188 81.0234C559.138 81.0234 542.113 99.6107 542.113 136.785ZM523.07 137.371C523.07 90.0404 546.443 66.375 593.188 66.375C639.216 66.375 662.23 90.0404 662.23 137.371C662.23 184.441 639.216 207.977 593.188 207.977C546.443 207.977 523.07 184.441 523.07 137.371ZM688.695 202.117V185.516C703.344 190.724 719.164 193.328 736.156 193.328C760.18 193.328 772.191 184.539 772.191 166.961C772.191 151.987 763.337 144.5 745.629 144.5H727.66C698.428 144.5 683.812 131.805 683.812 106.414C683.812 79.7214 702.53 66.375 739.965 66.375C756.241 66.375 771.378 68.3281 785.375 72.2344V88.8359C771.378 83.6276 756.241 81.0234 739.965 81.0234C714.574 81.0234 701.879 89.487 701.879 106.414C701.879 121.388 710.473 128.875 727.66 128.875H745.629C775.382 128.875 790.258 141.57 790.258 166.961C790.258 194.305 772.224 207.977 736.156 207.977C719.164 207.977 703.344 206.023 688.695 202.117ZM816.625 207V67.3516H839.574L890.844 183.855L941.137 67.3516H963.109V207H946.996V92.4492L897.387 207H883.129L832.738 92.4492V207H816.625ZM1010.47 136.785C1010.47 174.48 1027.5 193.328 1061.55 193.328C1094.88 193.328 1111.55 174.48 1111.55 136.785C1111.55 99.6107 1094.88 81.0234 1061.55 81.0234C1027.5 81.0234 1010.47 99.6107 1010.47 136.785ZM991.43 137.371C991.43 90.0404 1014.8 66.375 1061.55 66.375C1107.58 66.375 1130.59 90.0404 1130.59 137.371C1130.59 184.441 1107.58 207.977 1061.55 207.977C1014.8 207.977 991.43 184.441 991.43 137.371ZM1157.05 202.117V185.516C1171.7 190.724 1187.52 193.328 1204.52 193.328C1228.54 193.328 1240.55 184.539 1240.55 166.961C1240.55 151.987 1231.7 144.5 1213.99 144.5H1196.02C1166.79 144.5 1152.17 131.805 1152.17 106.414C1152.17 79.7214 1170.89 66.375 1208.32 66.375C1224.6 66.375 1239.74 68.3281 1253.73 72.2344V88.8359C1239.74 83.6276 1224.6 81.0234 1208.32 81.0234C1182.93 81.0234 1170.24 89.487 1170.24 106.414C1170.24 121.388 1178.83 128.875 1196.02 128.875H1213.99C1243.74 128.875 1258.62 141.57 1258.62 166.961C1258.62 194.305 1240.58 207.977 1204.52 207.977C1187.52 207.977 1171.7 206.023 1157.05 202.117ZM1390.45 202.117C1378.41 206.023 1365.39 207.977 1351.39 207.977C1302.56 207.977 1278.15 183.725 1278.15 135.223C1278.15 89.3242 1302.56 66.375 1351.39 66.375C1365.39 66.375 1378.41 68.3281 1390.45 72.2344V87.8594C1378.41 83.3021 1366.04 81.0234 1353.34 81.0234C1315.26 81.0234 1296.21 99.0898 1296.21 135.223C1296.21 173.96 1315.26 193.328 1353.34 193.328C1366.04 193.328 1378.41 191.049 1390.45 186.492V202.117ZM1424.93 207H1406.18L1465.45 67.3516H1485.47L1545.04 207H1525.02L1506.96 163.055H1460.77L1465.75 148.406H1500.9L1474.83 85.125L1424.93 207ZM1564.09 207V67.3516H1623.66C1650.22 67.3516 1663.5 78.5169 1663.5 100.848C1663.5 119.012 1650.51 132.456 1624.54 141.18L1672.48 207H1648.66L1604.22 144.207V132.391C1630.92 128.159 1644.26 117.905 1644.26 101.629C1644.26 88.7383 1636.84 82.293 1622 82.293H1582.15V207H1564.09ZM1742.41 192.352C1776.59 192.352 1793.68 172.69 1793.68 133.367C1793.68 99.1224 1776.59 82 1742.41 82H1709.69V192.352H1742.41ZM1691.62 207V67.3516H1742.41C1788.63 67.3516 1811.74 89.3568 1811.74 133.367C1811.74 182.456 1788.63 207 1742.41 207H1691.62Z" fill="white" />
					</svg>
				</div>

				<div className="flex flex-col justify-center items-center mt-[2em] md:mt-[5em]">
					<h1 className="text-[1.5em] md:text-[4em] leading-none text-center">
						The first personal card
					</h1>
					<TypeAnimation
						className="text-[1.5em] leading md:text-[4em] text-center"
						sequence={[
							'for all your employer tools.',
							1000,
							'for all your world-class perks.',
							1000,
							'for all your stipends.',
							1000,
							'for all your expense reports.',
							1000,
						]}
						speed={180}
						repeat={Infinity}
					/>
					<p className="fontFamilyMdPrime text-[1em] font-light leading-normal text-gray-400 mt-[2em] w-[90%] md:w-[30%] text-center">
						Combine multiple vendors with Cosmoscard's best-in-class perks, company stipends, and expense reporting.
					</p>
					<div className="flex gap-4 mt-[2em] flex-wrap justify-center">
						<div className="fontFamilyMdPrime bg-gray-500 py-[1em] px-[4.5em] rounded">
							<span className="text-white">Join WaitList</span>
						</div>
						<div className="fontFamilyMdPrime bg-white py-[1em] px-[4.5em] rounded">
							<span className="text-black">Know More</span>
						</div>
					</div>
					<div className="p-[1.5em]">
						<p className="fontFamilyMdPrime text-gray-400 text-center">
							Available to all of your employees regardless of credit.
							<sup className="fontFamilyMdPrime">1</sup>
						</p>
					</div>
					<div className="mt-[-2em] md:mt-[-10em]  mx-[-30px]">
						<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201.webp" loading="lazy" width="1727" sizes="100vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-1080.png 1080w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-1600.png 1600w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-2000.png 2000w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-2600.png 2600w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201-p-3200.png 3200w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/660bd0f5488e2ca37264da23_HYPERCARD%20SHOT%202%20ALPHA%20ABSTRACT%201.webp 3454w" />
					</div>
					<div className="mt-[-12em] md:mt-[-35em]">
						<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6628fa38bb66cd23452c95e8_PANTERA_hero.png" loading="lazy" width="1000" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, 90vw" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6628fa38bb66cd23452c95e8_PANTERA_hero-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6628fa38bb66cd23452c95e8_PANTERA_hero-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6628fa38bb66cd23452c95e8_PANTERA_hero-p-1080.png 1080w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6628fa38bb66cd23452c95e8_PANTERA_hero-p-1600.png 1600w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/6628fa38bb66cd23452c95e8_PANTERA_hero.png 2000w" aria-hidden="true" />
					</div>
				</div>

				<div>
					<div>
						<div className="flex flex-col justify-center text-center items-center">
							<p className="text-gray-400 text-[.875rem] font-normal">Consolidating multi-vendor costs & time</p>
							<div className="md:w-[500px]">
								<h2 className="text-[2rem] md:text-[3.5rem] mt-[20px] p-[0px] mb-[0px] leading-none">One product to</h2>
								<h2 className="text-[2rem] md:text-[3.5rem] mt-[0px] pt-[0px]"><em>rule them all</em></h2>
							</div>
						</div>
					</div>
					<div className="md:px-[50px] mt-[5rem]">
						<motion.div
							initial={{ y: 100 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.75 }}
						>
							<div className="flex gap-4 justify-center flex-wrap md:flex-nowrap">
								{RuleThemAll.map((rules, index) => (
									<div key={index} className="w-full rounded-[2rem] p-[1px] rounded-[2rem]" style={{ backgroundImage: "linear-gradient(315deg, rgba(255, 255, 255, .64), rgba(0, 0, 0, .3) 23%, rgba(255, 255, 255, .22) 78%, rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(255, 255, 255, .66), #fff 0%, rgba(0, 0, 0, .3) 18%, rgba(255, 255, 255, .25) 74%, rgba(255, 255, 255, 0))" }}>
										<div className="bg-black p-[1.6rem] rounded-[2rem]">
											{rules.img}
											<h3 className="text-[1.5rem] mb-[0.8rem]">{rules.header}</h3>
											<p className="text-[1rem] text-gray-400">{rules.para}</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>
						<motion.div
							initial={{ y: 100 }}
							whileInView={{ y: 0 }}
							transition={{ duration: 0.75 }}
						>
							<div className="flex gap-4 justify-center mt-[2rem] flex-wrap md:flex-nowrap">
								{MoreRuleThemAll.map((rules, index) => (
									<div key={index} className="w-full rounded-[2rem] p-[1px] rounded-[2rem]" style={{ backgroundImage: "linear-gradient(315deg, rgba(255, 255, 255, .64), rgba(0, 0, 0, .3) 23%, rgba(255, 255, 255, .22) 78%, rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(255, 255, 255, .66), #fff 0%, rgba(0, 0, 0, .3) 18%, rgba(255, 255, 255, .25) 74%, rgba(255, 255, 255, 0))" }}>
										<div className="bg-black p-[1.6rem] rounded-[2rem]">
											{rules.img}
											<h3 className="text-[1.5rem] mb-[0.8rem] text-center">{rules.header}</h3>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				<div className="mt-[10em]">
					<div className="flex flex-col justify-center text-center items-center">
						<p className="text-gray-400 text-[.875rem] font-normal">The personal card case study <sup>3</sup></p>
						<div className="md:w-[500px]">
							<h2 className="text-[1.5rem] md:text-[3.5rem] mt-[20px] leading-none">The personal card advantage</h2>
						</div>
					</div>
					<div className="flex md:justify-between flex-wrap-reverse justify-center md:px-[30px]">
						<div className="md:basis-[35%]">
							<div className="flex gap-8 border-b-[1px] justify-center p-[20px]">
								<h4 className="text-[1rem] md:text-[2rem]">Employee</h4>
								<h4 className="text-[1rem] md:text-[2rem]">CFO</h4>
								<h4 className="text-[1rem] md:text-[2rem]">HR</h4>
							</div>
							<div className="pt-[2rem]">
								<div className="mb-[3rem]">
									<h3 className="text-[1.5rem] mb-[0.5rem]">No annual fee</h3>
									<p className="text-[1rem] text-gray-400">Cosmoscard puts the liability of business expenses on a personal card product, creating personal liability and accountability thus curbing excessive spending.</p>
								</div>
								<div className="mb-[3rem]">
									<h3 className="text-[1.5rem] mb-[0.5rem]">Instant reports</h3>
									<p className="text-[1rem] text-gray-400">Cosmoscard enables one-click stipend and expense report submissions, saving up to 40 minutes per report.</p>
								</div>
								<div>
									<h3 className="text-[1.5rem] mb-[0.5rem]">Instant reimbursements</h3>
									<p className="text-[1rem] text-gray-400">Cosmoscard offers instant reimbursements when employees submit expense reports, eliminating the need to front costs for the employer while allowing employees to keep the points from those transactions.</p>
								</div>
							</div>
						</div>
						<div>
							<img src="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/66269297545f4253bf0a11da_hypercard-noname.png" loading="lazy" width="800" sizes="(max-width: 479px) 90vw, (max-width: 767px) 94vw, (max-width: 991px) 89vw, 800px" alt="" srcset="https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/66269297545f4253bf0a11da_hypercard-noname-p-500.png 500w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/66269297545f4253bf0a11da_hypercard-noname-p-800.png 800w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/66269297545f4253bf0a11da_hypercard-noname-p-1080.png 1080w, https://assets-global.website-files.com/64459fc8eb1482845c5a8b24/66269297545f4253bf0a11da_hypercard-noname.png 1600w" class="personal_image" />
						</div>
					</div>
				</div>

				<div className="mt-[10em]">
					<div className="flex flex-col justify-center text-center items-center">
						<p className="text-gray-400 text-[.875rem] font-normal">Universal solutions for enterprises</p>
						<div className="md:w-[500px]">
							<h2 className="text-[1.5rem] md:text-[3.5rem] mt-[20px]">Built for scale</h2>
						</div>
					</div>
					<div className="pt-[2rem] md:pt-[5rem] md:px-[3rem]">
						<div className="flex gap-4 justify-center flex-wrap md:flex-nowrap">
							{BuiltForScale.map((rules, index) => (
								<div key={index} className="w-full rounded-[2rem] p-[1px] rounded-[2rem]" style={{ backgroundImage: "linear-gradient(315deg, rgba(255, 255, 255, .64), rgba(0, 0, 0, .3) 23%, rgba(255, 255, 255, .22) 78%, rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(255, 255, 255, .66), #fff 0%, rgba(0, 0, 0, .3) 18%, rgba(255, 255, 255, .25) 74%, rgba(255, 255, 255, 0))" }}>
									<div className="bg-black p-[1.6rem] rounded-[2rem]">
										<div className="scale_card-image justify-center flex md:!flex-none md:justify-start">
											{rules.img}
										</div>
										<h3 className="text-[1.5rem] mb-[0.8rem] text-center">{rules.header}</h3>
										<p className="text-[0.9rem] leading-[1.3] text-gray-400 text-center">{rules.para}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="mt-[10em]">
					<div className="flex flex-col justify-center text-center items-center">
						<p className="text-gray-400 text-[.875rem] font-normal">Worry free offboarding</p>
						<div className="md:w-[850px]">
							<h2 className="text-[1.5rem] md:text-[3.5rem] mt-[20px]">When your employees move on, we move with them</h2>
						</div>
					</div>
					<div className="pt-[3rem] mx-[-50px] flex justify-center">
						<iframe className="w-[96vw] h-[50vw]" src="https://player.vimeo.com/video/938746509?background=1&amp;autoplay=1&amp;loop=1&amp;byline=0&amp;title=0" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen="" data-ready="true"></iframe>
					</div>
				</div>

				<div className="mt-[10em]">
					<div className="flex md:justify-between gap-5 justify-center flex-wrap md:flex-nowrap">
						<div className="md-basis-[50%]">
							<div className="flex flex-col text-left">
								<div className="md:w-[500px]">
									<h2 className="text-[1.5rem] md:text-[3.5rem] mt-[20px]">Frequently asked questions</h2>
								</div>
								<p className="text-gray-400 text-[.875rem] font-normal">Can’t find what you’re looking for? Get support from our white glove service team.</p>
								<div className="py-[15px] bg-white text-black w-[20rem] rounded mt-[1rem] text-center font-medium fontFamilyMdPrime">
									Get in touch
								</div>
							</div>
						</div>
						<div className="md:basis-[50%]">
							<div className="pt-[2rem]">
								<div className="mb-[3rem]">
									<h3 className="text-[1.5rem] mb-[0.5rem]">What happens when an employee leaves the company?</h3>
									<p className="text-[1rem] text-gray-400">Cosmoscard Rewards Card offers worry-free, hands-on off-boarding. When an employee leaves the company, their card will be seamlessly transitioned to our white CosmosOne Rewards card, which will house only the native perks offered by CosmosOne. All financial obligations will continue to smoothly be transferred to the employee's personal card without any disruption at no additional cost to the company.</p>
								</div>
								<div className="mb-[3rem]">
									<h3 className="text-[1.5rem] mb-[0.5rem]">Why should our company partner with Cosmoscard?</h3>
									<p className="text-[1rem] text-gray-400">The Cosmoscard Rewards Card offers 2X points on all transactions and 3X points on transactions flagged for reimbursement. The points can be redeemed towards cash-back, standard merchant rewards, gift cards, and more.</p>
								</div>
								<div>
									<h3 className="text-[1.5rem] mb-[0.5rem]">What kind of support should I expect from Cosmoscard?</h3>
									<p className="text-[1rem] text-gray-400">Our 24/7 support team comprises highly experienced professionals with a decades-long proven track record of delivering superior customer service. Our support channels include phone and email, where all concerns are addressed urgently to complete satisfaction. Our technical support engineers are some of the foremost experts in their field, ensuring our card's seamless and secure operation.</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-[10em] bg-gray-100 mx-[-30px] p-[40px] pt-[30px]">
					<div className="flex md:justify-between md:gap-5 justify-center">
						<div className="md:basis-[50%]">
							<div className="flex flex-col text-left">
								<div className="md:w-[500px]">
									<h2 className="text-[1.5rem] md:text-[3.5rem] mt-[20px] text-black">A few minutes in return for a revolution</h2>
								</div>
								<p className="text-gray-400 text-[.875rem] font-normal text-black">Sign up now and start taking advantage of our incredible benefits.</p>
								<div className="py-[15px] bg-black text-white w-[20rem] rounded mt-[1rem] text-center font-medium fontFamilyMdPrime">
									Get Started
								</div>
							</div>
						</div>
					</div>
					<div className="text-gray-500 fontFamilyMdPrime text-[0.9rem] font-light flex gap-4 mt-[10rem] py-[2rem]">
						<span>Contact Us</span>
						<span>Help Center</span>
						<span>Guide to Benefits</span>
						<span>Privacy Policy</span>
						<span>Terms and Conditions</span>
					</div>
					<div>
						{/* <h1 className="text-[74px] text-black font-bold">COSMOSONE</h1> */}
						<svg className="text-black md:w-[640px]" width="240" height="80" viewBox="0 0 1070 107" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M84.5527 102.338C75.5195 105.268 65.7539 106.732 55.2559 106.732C18.6348 106.732 0.324219 88.5439 0.324219 52.167C0.324219 17.7432 18.6348 0.53125 55.2559 0.53125C65.7539 0.53125 75.5195 1.99609 84.5527 4.92578V16.6445C75.5195 13.2266 66.2422 11.5176 56.7207 11.5176C28.1562 11.5176 13.874 25.0674 13.874 52.167C13.874 81.2197 28.1562 95.7461 56.7207 95.7461C66.2422 95.7461 75.5195 94.0371 84.5527 90.6191V102.338ZM117.585 53.3389C117.585 81.6104 130.354 95.7461 155.891 95.7461C180.891 95.7461 193.391 81.6104 193.391 53.3389C193.391 25.458 180.891 11.5176 155.891 11.5176C130.354 11.5176 117.585 25.458 117.585 53.3389ZM103.303 53.7783C103.303 18.2803 120.832 0.53125 155.891 0.53125C190.412 0.53125 207.673 18.2803 207.673 53.7783C207.673 89.0811 190.412 106.732 155.891 106.732C120.832 106.732 103.303 89.0811 103.303 53.7783ZM227.521 102.338V89.8867C238.508 93.793 250.373 95.7461 263.117 95.7461C281.135 95.7461 290.144 89.1543 290.144 75.9707C290.144 64.7402 283.503 59.125 270.222 59.125H256.745C234.821 59.125 223.859 49.6035 223.859 30.5605C223.859 10.541 237.897 0.53125 265.974 0.53125C278.181 0.53125 289.533 1.99609 300.031 4.92578V17.377C289.533 13.4707 278.181 11.5176 265.974 11.5176C246.931 11.5176 237.409 17.8652 237.409 30.5605C237.409 41.791 243.854 47.4062 256.745 47.4062H270.222C292.536 47.4062 303.693 56.9277 303.693 75.9707C303.693 96.4785 290.168 106.732 263.117 106.732C250.373 106.732 238.508 105.268 227.521 102.338ZM323.469 106V1.26367H340.681L379.133 88.6416L416.853 1.26367H433.332V106H421.247V20.0869L384.04 106H373.347L335.554 20.0869V106H323.469ZM468.854 53.3389C468.854 81.6104 481.623 95.7461 507.16 95.7461C532.16 95.7461 544.66 81.6104 544.66 53.3389C544.66 25.458 532.16 11.5176 507.16 11.5176C481.623 11.5176 468.854 25.458 468.854 53.3389ZM454.572 53.7783C454.572 18.2803 472.102 0.53125 507.16 0.53125C541.682 0.53125 558.942 18.2803 558.942 53.7783C558.942 89.0811 541.682 106.732 507.16 106.732C472.102 106.732 454.572 89.0811 454.572 53.7783ZM578.791 102.338V89.8867C589.777 93.793 601.643 95.7461 614.387 95.7461C632.404 95.7461 641.413 89.1543 641.413 75.9707C641.413 64.7402 634.772 59.125 621.491 59.125H608.015C586.091 59.125 575.129 49.6035 575.129 30.5605C575.129 10.541 589.167 0.53125 617.243 0.53125C629.45 0.53125 640.803 1.99609 651.301 4.92578V17.377C640.803 13.4707 629.45 11.5176 617.243 11.5176C598.2 11.5176 588.679 17.8652 588.679 30.5605C588.679 41.791 595.124 47.4062 608.015 47.4062H621.491C643.806 47.4062 654.963 56.9277 654.963 75.9707C654.963 96.4785 641.438 106.732 614.387 106.732C601.643 106.732 589.777 105.268 578.791 102.338ZM753.84 102.338C744.807 105.268 735.041 106.732 724.543 106.732C687.922 106.732 669.611 88.5439 669.611 52.167C669.611 17.7432 687.922 0.53125 724.543 0.53125C735.041 0.53125 744.807 1.99609 753.84 4.92578V16.6445C744.807 13.2266 735.529 11.5176 726.008 11.5176C697.443 11.5176 683.161 25.0674 683.161 52.167C683.161 81.2197 697.443 95.7461 726.008 95.7461C735.529 95.7461 744.807 94.0371 753.84 90.6191V102.338ZM779.694 106H765.632L810.09 1.26367H825.104L869.782 106H854.768L841.218 73.041H806.574L810.31 62.0547H836.677L817.121 14.5938L779.694 106ZM884.064 106V1.26367H928.742C948.664 1.26367 958.625 9.6377 958.625 26.3857C958.625 40.0088 948.884 50.0918 929.401 56.6348L965.363 106H947.492L914.167 58.9053V50.043C934.187 46.8691 944.196 39.1787 944.196 26.9717C944.196 17.3037 938.63 12.4697 927.497 12.4697H897.614V106H884.064ZM1017.8 95.0137C1043.44 95.0137 1056.26 80.2676 1056.26 50.7754C1056.26 25.0918 1043.44 12.25 1017.8 12.25H993.269V95.0137H1017.8ZM979.719 106V1.26367H1017.8C1052.47 1.26367 1069.81 17.7676 1069.81 50.7754C1069.81 87.5918 1052.47 106 1017.8 106H979.719Z" fill="currentColor" />
						</svg>
						<p className="text-[12px] text-gray-500 font-light fontFamilyMdPrime">Ⓒ 2023 Bicameral Mind Technologies Private Limited. All rights reserved. 1240, Thendral Nagar, Vengikkal Tiruvannamalai Tn 606604 In, Vengikkal, Tiruvannamalai, Tiruvannamalai, Tamil Nadu, India, 606604.</p>
					</div>
					<div className="p-[20px] mt-[10rem]">
						<ol className="list-decimal">
							<li className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[0.5rem]">CHECKING YOUR APPROVAL STATUS WILL NOT AFFECT YOUR CREDIT SCORE. HOWEVER, A FORMAL APPLICATION OR FINAL APPROVAL MAY REQUIRE A CREDIT CHECK WITH A CREDIT REPORTING BUREAU, WHICH COULD IMPACT YOUR CREDIT SCORE.</li>
							<li className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[0.5rem]">ALL PERKS AND BENEFITS ARE SUBJECT TO THE TERMS & CONDITIONS OUTLINED IN OUR BENEFITS GUIDE.</li>
							<li className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[0.5rem]">PLEASE BE AWARE THAT THE CASE STUDIES SHOWCASED ON OUR WEBSITE ARE NOT EMPIRICALLY VALIDATED AND INDIVIDUAL OUTCOMES MAY DIFFER FROM CLIENT TO CLIENT.</li>
							<li className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[0.5rem]">ALL PERKS AND BENEFITS ARE SUBJECT TO THE TERMS & CONDITIONS OUTLINED IN OUR BENEFITS GUIDE.</li>
							<li className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[0.5rem]">ACCOUNTING AND HRIS INTEGRATIONS ARE DONE THROUGH SERVICES OFFERED BY LANGAPI COMPANY D.B.A. RUTTER, AND SUBJECT TO THEIR TERMS & CONDITIONS AND PRIVACY NOTICE.</li>
						</ol>
						<p className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[2rem]">
							GUIDE & BENEFITS TERMS & CONDITIONS
						</p>
						<p className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[2rem]">
							ISSUED BY FUTURE BANKING PARTNER | 2024 © COSMOSONE NETWORK, INC.
						</p>
						<p className="text-[12px] text-gray-500 font-light fontFamilyMdPrime mt-[2rem]">
							COSMOSONE NETWORK, INC. IS NOT A BANK. COSMOSONE IS ISSUED BY A FUTURE BANKING PARTNER. CARDHOLDERS MUST BE AT LEAST 18 YEARS OF AGE AND A CITIZEN OF THE UNITED STATES OR A PERMANENT RESIDENT WITH A VALID SOCIAL SECURITY NUMBER (SSN) OR INDIVIDUAL TAXPAYER IDENTIFICATION NUMBER (ITIN). AN APPLICATION IS REQUIRED AND FINANCING IS SUBJECT TO FUTURE BANKING PARTNER APPROVAL. FEES WILL BE ASSESSED ON OVERDUE AMOUNTS FOR CREDIT CARD HOLDERS.
							CARD IS ISSUED BY A FUTURE BANKING PARTNER, PURSUANT TO A LICENSE FROM AMERICAN EXPRESS®. AMERICAN EXPRESS IS A REGISTERED TRADEMARK OF AMERICAN EXPRESS.
						</p>
					</div>
				</div>

			</div>
		</motion.div>
	);
}
