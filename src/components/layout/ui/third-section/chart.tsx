"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { type ChartConfig } from "@/components/ui/chart";
import { cn } from "@/lib/utils";

export const description = "A simple area chart";

const chartData = [
	{ month: "January", desktop: 186 },
	{ month: "February", desktop: 305 },
	{ month: "March", desktop: 237 },
	{ month: "April", desktop: 73 },
	{ month: "May", desktop: 209 },
	{ month: "June", desktop: 214 },
];

const chartConfig = {
	desktop: {
		label: "Desktop",
		color: "#d4ff5f",
	},
} satisfies ChartConfig;

export function ChartAreaDefault({ className }: { className?: string }) {
	return (
		<Card
			className={cn(
				"backdrop-blur-sm bg-[#ffffff1a] rounded-3xl border border-primary-white",
				className,
			)}
		>
			<CardContent className=" w-full h-48 ">
				{/* <ChartContainer config={chartConfig} className="text-white">
					<AreaChart
						className=" h-80! "
						accessibilityLayer
						data={chartData}
						margin={{
							left: 2,
							right: 2,
						}}
					>
						<CartesianGrid vertical={false} className="text-white" />

						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent indicator="line" className="text-white" />
							}
						/>
						<Area
							dataKey="desktop"
							type="natural"
							fill="var(--color-desktop)"
							fillOpacity={0.4}
							stroke="var(--color-desktop)"
							className="text-white"
						/>
					</AreaChart>
				</ChartContainer> */}
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<h5 className="flex items-center gap-2 leading-none font-medium font-playfair italic text-primary-white text-xl ">
							Context-driven intelligence
						</h5>
						<p className="gap-2 text-start text-primary-white/70 leading-5">
							AI- continuously builds understanding over time - learning from
							patterns, trends, and user interactions.
						</p>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
