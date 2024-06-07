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
		<div className="p-[20px] md:p-[30px]">
			<div className="flex items-center gap-4 justify-center">
				<Image
					className=""
					src="/cosmoscard.svg"
					alt="Cosmos Card Logo"
					width={200}
					height={200}
					priority
				/>
			</div>
			
			<div className="flex flex-col justify-center items-center mt-[2em] md:mt-[5em]">
				<h1 className="text-[2em] md:text-[4em] leading-none text-center">
					The first personal card
				</h1>
				<TypeAnimation
					className="text-[2em] leading md:text-[4em] text-center"
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
					<div className="flex gap-4 justify-center flex-wrap md:flex-nowrap">
						{RuleThemAll.map(rules => (
							<div className="w-full rounded-[2rem] p-[1px] rounded-[2rem]" style={{ backgroundImage: "linear-gradient(315deg, rgba(255, 255, 255, .64), rgba(0, 0, 0, .3) 23%, rgba(255, 255, 255, .22) 78%, rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(255, 255, 255, .66), #fff 0%, rgba(0, 0, 0, .3) 18%, rgba(255, 255, 255, .25) 74%, rgba(255, 255, 255, 0))" }}>
								<div className="bg-black p-[1.6rem] rounded-[2rem]">
									{rules.img}
									<h3 className="text-[1.5rem] mb-[0.8rem]">{rules.header}</h3>
									<p className="text-[1rem] text-gray-400">{rules.para}</p>
								</div>
							</div>
						))}
					</div>
					<div className="flex gap-4 justify-center mt-[2rem] flex-wrap md:flex-nowrap">
						{MoreRuleThemAll.map(rules => (
							<div className="w-full rounded-[2rem] p-[1px] rounded-[2rem]" style={{ backgroundImage: "linear-gradient(315deg, rgba(255, 255, 255, .64), rgba(0, 0, 0, .3) 23%, rgba(255, 255, 255, .22) 78%, rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(255, 255, 255, .66), #fff 0%, rgba(0, 0, 0, .3) 18%, rgba(255, 255, 255, .25) 74%, rgba(255, 255, 255, 0))" }}>
								<div className="bg-black p-[1.6rem] rounded-[2rem]">
									{rules.img}
									<h3 className="text-[1.5rem] mb-[0.8rem] text-center">{rules.header}</h3>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
			
			<div className="mt-[10em]">
				<div className="flex flex-col justify-center text-center items-center">
					<p className="text-gray-400 text-[.875rem] font-normal">The personal card case study <sup>3</sup></p>
					<div className="md:w-[500px]">
						<h2 className="text-[1.5rem] md:text-[3.5rem] mt-[20px] leading-none">The personal card advantage</h2>
					</div>
				</div>
				<div className="flex md:justify-between flex-wrap-reverse justify-center">
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
						{BuiltForScale.map(rules => (
							<div className="w-full rounded-[2rem] p-[1px] rounded-[2rem]" style={{ backgroundImage: "linear-gradient(315deg, rgba(255, 255, 255, .64), rgba(0, 0, 0, .3) 23%, rgba(255, 255, 255, .22) 78%, rgba(255, 255, 255, 0)), linear-gradient(135deg, rgba(255, 255, 255, .66), #fff 0%, rgba(0, 0, 0, .3) 18%, rgba(255, 255, 255, .25) 74%, rgba(255, 255, 255, 0))" }}>
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
								<p className="text-[1rem] text-gray-400">Cosmoscard Rewards Card offers worry-free, hands-on off-boarding. When an employee leaves the company, their card will be seamlessly transitioned to our white Hypercard Rewards card, which will house only the native perks offered by Hypercard. All financial obligations will continue to smoothly be transferred to the employee's personal card without any disruption at no additional cost to the company.</p>
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
			</div>
			
		</div>
	);
}
