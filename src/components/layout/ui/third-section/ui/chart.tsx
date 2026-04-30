"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const description = "A simple area chart";

export function ChartAreaDefault({ className }: { className?: string }) {
	return (
		<Card
			className={cn(
				"backdrop-blur-sm bg-[#ffffff1a] rounded-3xl border border-primary-white max-md:h-96",
				className,
			)}
		>
			<CardContent className=" w-full min-h-52 lg:h-48 "></CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<h5 className="flex items-start gap-2 leading-none font-medium font-playfair italic text-primary-white text-xl text-start ">
							Anticipe les résultats et prends des décisions éclairées
						</h5>
						<p className="gap-2 text-start text-primary-white/70 leading-5">
							Dans le calme de la nature, ton esprit s'éclaircit. Chaque instant
							de silence te permet d'anticiper les défis avec confiance et de
							prendre des décisions alignées avec tes valeurs profondes, loin du
							bruit du monde.
						</p>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
